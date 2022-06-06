<script>
  import _ from "lodash";
  import { get } from "../../lib/api.js";
  import { films } from "../../stores/films";
  import { settings } from "../../stores/settings";
  import EditingStatus from "../EditingStatus.svelte";
  import Form from "../lib/Form.svelte";
  import { browser } from "$app/env";
  let pCyclesInProg; // Promesse : liste des cycles du programme nouvellement sélectionné.
  let elSelectCycle;
  let pWhenFilmsFetched; // Promesse (sans valeur de résolution) qui est tenue quand la liste des films est obtenue.

  // Quand le programme sélectionné ($settings.currentProgId) change :
  // - On obtient la liste des cycles du programme ($films.currentFilmsList).
  // - On met à jour le sélecteur de cycles.
  // - On réinitialise le cycle courant (pas de cycle choisi).
  // - On met le sélecteur de cycles sur l'en-tête du progamme (pas de cycle choisi).
  $: {
    if (browser === true) {
      pCyclesInProg = get(`prog/${$settings.currentProgId}/cycles`);
      pCyclesInProg.then((cycles) => {
        $films.currentCycleId = undefined;
        try {
          elSelectCycle.options[0].selected = true;
        } catch (e) {}
      });
    }
  }

  // Quand le cycle sélectionné ($films.currentCycleId) change :

  $: {
    if (browser === true) {
      $films.currentCycleId;
      console.log("Changement de cycle");
    }
  }

  // $: {
  //   pCyclesInProg = get(`prog/${$settings.currentProgId}/cycles`);
  //   pCyclesInProg.then((cycles) => {
  //     updateCyclesList(cycles);
  //   });
  // }

  // Quand la valeur currentProgId change dans le store settings, cette fonction est appelée depuis le bloc reactive :
  // on requête la liste des cycles du programme (NB :  apparemment, la promesse est réactive donc l'affichage se met à jour).
  // On force l'affichage du premier item (libellé du programme, non sélectionnable), en ignorant le cas où il n'y a pas (encore) de données.
  // On réinitialise le cycle sélectionné et on rafraîchit l'affichage de la liste (vide) des films.
  // Si $films.currentCycleId n'est pas dans la liste des cycles chargée, il passe à null, et on tente de mettre le select sur l'en-tête de programme.
  // function updateCyclesList(cycles) {
  //   if (browser === false) return;
  //   fetchFilmsList(null);
  //   try {
  //     elSelectCycle.options[0].selected = true;
  //   } catch (e) {}
  // }

  /**
   * fetchFilmsList
   * Requête la liste des films d'un cycle.
   * Le cycle est identifié par idCycle, soit directement, soit via un événement (l'utilisateur a cliqué sur une option du sélecteur de cycles).
   */
  function fetchFilmsList(arg) {
    if (!arg) {
      $films.currentCycleId = undefined;
      // idCycle = undefined;
      pWhenFilmsFetched = true;
      $films.currentFilmsList = [];
    } else {
      if (typeof arg === "number") {
        $films.currentCycleId = arg;
        // idCycle = arg;
      } else {
        $films.currentCycleId = Number(arg.currentTarget.value);
        // idCycle = Number(arg.currentTarget.value);
      }
      pWhenFilmsFetched = new Promise((resolve, reject) => {
        get(
          `prog/${$settings.currentProgId}/cycle/${$films.currentCycleId}/films`
        )
          // get(`prog/${$settings.currentProgId}/cycle/${idCycle}/films`)
          .then((data) => {
            $films.currentFilmsList = _(data.data)
              .orderBy((d) => _.kebabCase(d.titre))
              .value();
            resolve();
          })
          .catch((e) => {
            reject(e);
          });
      });
    }
  }

  // Lorsqu'un film est sélectionné dans la liste, son pk est inscrit dans le store film.currentFilmPk.
  function selectFilm(e) {
    $films.currentFilmPk = Number(e.currentTarget.dataset.pk);
  }

  // function refresh(e) {
  //   fetchFilmsList($films.currentCycleId);
  // }
</script>

<div class="container">
  <div class="cycle-selector">
    <Form>
      <fieldset>
        <select
          bind:this={elSelectCycle}
          on:change|preventDefault={fetchFilmsList}
        >
          <option disabled value={null}>📕 {$settings.currentProgName}</option>
          {#await pCyclesInProg then cycles}
            {#each cycles.data as cycle}
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
          {#await pWhenFilmsFetched then}
            {#if $films.currentFilmsList.length > 0}
              {$films.currentFilmsList.length}
              {$films.currentFilmsList.length < 2 ? "film" : "films"}
            {/if}
          {/await}
        </div>
      {/if}
    </div>
  </div>

  {#await pWhenFilmsFetched then}
    {#if $films.currentFilmsList.length > 0}
      <ul class="films-list">
        {#each $films.currentFilmsList as film, i}
          <li
            on:focus={selectFilm}
            on:click={selectFilm}
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
