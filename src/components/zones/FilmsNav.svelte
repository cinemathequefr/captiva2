<script>
  import _ from "lodash";
  import { get } from "../../lib/api.js";

  import {
    currentFilmsList,
    currentFilmPk,
    currentFilmEditingStatus,
    currentCycleId,
    currentCyclesList,
  } from "../../stores/films";

  import { currentProgId, currentProgName } from "../../stores/settings";
  // import { settings } from "../../stores/settings";
  import EditingStatus from "../EditingStatus.svelte";
  import Form from "../lib/Form.svelte";
  import { browser } from "$app/env";
  let elSelectCycle; // Elément DOM du sélecteur de cycle.
  let pCycles; // Promesse : obtention de la liste des cycles du programme sélectionné.
  let pFilms; // Promesse : obtention de la liste des films du cycle sélectionné.

  // console.log($currentCycleId);

  // Le programme sélectionné change.
  $: {
    if (browser === true) {
      $currentProgId;
      fetchCycles();
    }
  }
  // $: {
  //   if (browser === true) {
  //     pCycles = get(`prog/${$settings.currentProgId}/cycles`);
  //     pCycles.then((cycles) => {
  //       $currentCyclesList = cycles.data;
  //       $currentCycleId = null;
  //       $currentFilmsList = [];
  //       try {
  //         elSelectCycle.options[0].selected = true;
  //       } catch (e) {}
  //     });
  //   }
  // }

  // Le cycle sélectionné change.
  $: {
    if (browser === true) {
      $currentCycleId;
      fetchFilms();
    }
  }

  function fetchCycles() {
    if (!$currentProgId) {
      return;
    }
    pCycles = get(`prog/${$currentProgId}/cycles`);
    pCycles.then((cycles) => {
      $currentCyclesList = cycles.data;
      $currentCycleId = null;
      $currentFilmsList = [];
      try {
        elSelectCycle.options[0].selected = true;
      } catch (e) {}
    });
  }

  function fetchFilms() {
    if (!$currentCycleId) {
      return;
    }
    pFilms = get(`prog/${$currentProgId}/cycle/${$currentCycleId}/films`).then(
      (f) => {
        $currentFilmsList = _(f.data)
          .orderBy((d) => _.kebabCase(d.titre))
          .value();
      }
    );
  }

  function selectFilm(e) {
    $currentFilmPk = Number(e.currentTarget.dataset.pk);
  }
</script>

<div class="debug"
  ><pre
    ><code>
  $currentProgId: {$currentProgId}
  $currentCyclesList.length: {$currentCyclesList.length}
  $currentCycleId: {$currentCycleId}
  $currentFilmsList.length: {$currentFilmsList.length}
  $currentFilmPk: {$currentFilmPk}
  $currentFilmEditingStatus: {$currentFilmEditingStatus}
</code></pre
  ></div
>

<div class="container">
  <div class="cycle-selector">
    <Form>
      <fieldset>
        <select
          bind:this={elSelectCycle}
          on:change|preventDefault={(e) => {
            $currentCycleId = Number(e.currentTarget.value);
          }}
        >
          <option disabled value={null}>📕 {$currentProgName}</option>
          {#await pCycles then}
            {#each $currentCyclesList as cycle}
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
      {#if $currentCycleId}
        <div class="films-count">
          {#await pFilms then}
            {#if $currentFilmsList.length > 0}
              {$currentFilmsList.length}
              {$currentFilmsList.length < 2 ? "film" : "films"}
            {/if}
          {/await}
        </div>
      {/if}
    </div>
  </div>

  {#await pFilms then}
    {#if $currentFilmsList.length > 0}
      <ul class="films-list">
        {#each $currentFilmsList as film, i}
          <li
            on:focus={selectFilm}
            on:click={selectFilm}
            data-pk={film.pk}
            title={film.pk}
            class:selected={film.pk === $currentFilmPk}
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
    padding: 0 2px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #ccc transparent;
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
