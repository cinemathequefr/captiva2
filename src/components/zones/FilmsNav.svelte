<script>
  import _ from "lodash";
  import { get } from "../../lib/api.js";
  import { films } from "../../stores/films";
  import { settings } from "../../stores/settings";
  import EditingStatus from "../EditingStatus.svelte";
  import Form from "../lib/Form.svelte";
  import { browser } from "$app/env";
  import { get as got } from "svelte/store";
  let pCycles; // Promesse : liste des cycles du programme nouvellement sélectionné.
  // let pCycles = new Promise((resolve, reject) => {}); // Promesse : liste des cycles du programme nouvellement sélectionné.
  let elSelectCycle; // Elément DOM du sélecteur de cycle.
  let pWhenFilmsFetched;
  let pFilms;

  // Le programme sélectionné change.
  $: {
    if (browser === true) {
      pCycles = get(`prog/${$settings.currentProgId}/cycles`);
      pCycles.then((cycles) => {
        $films.currentCyclesList = cycles.data;
        $films.currentCycleId = null;
        try {
          elSelectCycle.options[0].selected = true;
        } catch (e) {}
      });
    }
  }

  // Le cycle sélectionné change.
  $: {
    if (browser === true) {
      $films.currentCycleId;
      fetchFilms(); // Pourquoi cet appel cause-t-il un effet réactif sur $films.currentCycleId ? Réponse : c'est l'assignation de $films.currentFilmsList qui le provoque. Pourquoi ?
    }
  }

  function fetchFilms() {
    if (!$films.currentCycleId) return;
    pFilms = get(
      `prog/${$settings.currentProgId}/cycle/${$films.currentCycleId}/films`
    );

    pFilms.then((f) => {
      console.log("#1");

      // films.update((o) =>
      //   _({})
      //     .assign(o, {
      //       currentFilmsList: _(f.data)
      //         .orderBy((d) => _.kebabCase(d.titre))
      //         .value(),
      //     })
      //     .value()
      // );

      $films.currentFilmsList = _(f.data)
        .orderBy((d) => _.kebabCase(d.titre))
        .value();
      console.log("#2");
      // console.log($films.currentFilmsList);
    });
  }

  // Le film sélectionné change.
</script>

<div class="container">
  <div class="cycle-selector">
    <Form>
      <fieldset>
        <select
          bind:this={elSelectCycle}
          on:change|preventDefault={(e) => {
            $films.currentCycleId = Number(e.currentTarget.value);
          }}
        >
          <option disabled value={null}>📕 {$settings.currentProgName}</option>
          {#await pCycles then}
            {#each $films.currentCyclesList as cycle}
              <option value={cycle.id_cycle}>
                {cycle.id_cycle}
                -
                {cycle.titre_cycle}
              </option>
            {/each}
          {:catch}
            Erreur
          {/await}
        </select>
      </fieldset>
    </Form>
  </div>

  <div class="tools-container">
    <div class="tools-container-left" />
    <div class="tools-container-right">
      {#if $films.currentCycleId}
        <div class="films-count">
          {#await pFilms then}
            {#if $films.currentFilmsList.length > 0}
              {$films.currentFilmsList.length}
              {$films.currentFilmsList.length < 2 ? "film" : "films"}
            {/if}
          {/await}
        </div>
      {/if}
    </div>
  </div>

  {#await pFilms then}
    {#if $films.currentFilmsList.length > 0}
      <ul class="films-list">
        {#each $films.currentFilmsList as film, i}
          <li
            on:focus={() => {}}
            on:click={() => {}}
            data-pk={film.pk}
            title={film.pk}
            class:selected={film.pk === $films.currentFilmPk}
            tabindex={i + 1}
          >
            <div class="title-container">
              <div class="title">
                {film.titre}
                {film.art ? `(${film.art})` : ""}
              </div>
              <div class="editing-status">
                <EditingStatus status={film.editing_status} />
              </div>
            </div>
            <div class="director">{film.realisateurs}, {film.annee}</div>
          </li>
        {/each}
      </ul>
      <div class="footer" />
    {/if}
  {:catch error}
    <p>{error.message}</p>
  {/await}
</div>

<style>
  .container {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    flex-direction: column;
    flex: 0 0 100%;
    overflow: hidden;
    background-color: #aaa;
  }
  .cycle-selector {
    padding: 8px 4px 0 4px;
  }
  .films-count {
    flex: 0 0 auto;
    overflow: hidden;
    font-size: 0.813rem;
    text-align: right;
  }
  ul {
    padding: 0 4px;
    overflow-y: auto;
  }
  li {
    background-color: #ddd;
    padding: 4px 2px 4px 12px;
    font-size: 0.913rem;
    overflow: hidden;
    line-height: 1.3;
    cursor: pointer;
  }
  li.selected,
  li.selected:nth-child(even) {
    background-color: #ffa;
    outline: none;
  }
  li.selected:focus,
  li.selected:nth-child(even):focus {
    background-color: #ff6;
    outline: none;
  }
  li:nth-child(even) {
    background-color: #ccc;
  }
  li:not(.selected):hover {
    background-color: #eee;
  }
  .title-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  .title {
    flex: 0 1 auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #018;
  }
  .editing-status {
    flex: 0 0 auto;
    align-self: auto;
    padding-left: 2px;
  }
  .director {
    overflow: hidden;
    color: #666;
    font-size: 0.813rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .footer {
    padding: 6px 0;
  }
  .tools-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0;
    padding: 0 6px;
    min-height: 32px;
  }
  .tools-container-left,
  .tools-container-right {
    flex: 1 1 auto;
  }
</style>
