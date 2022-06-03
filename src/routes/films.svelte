<script>
  import SplitPane from "../components/lib/SplitPane.svelte";
  import FilmView from "../components/zones/FilmView.svelte";
  import FilmEdit from "../components/zones/FilmEdit.svelte";
  import FilmsNav from "../components/zones/FilmsNav.svelte";
  import { settings } from "../stores/settings";
</script>

<svelte:head><title>Captiva - Films</title></svelte:head>

<div class="container">
  <SplitPane leftInitialSize="25%">
    <svelte:fragment slot="left">
      <FilmsNav />
    </svelte:fragment>
    <svelte:fragment slot="right">
      <FilmEdit />
      <!--
      {#if $settings.filmEditOrView === "edit"}
        <FilmEdit />{:else}<FilmView />{/if}
      -->
    </svelte:fragment>
  </SplitPane>
</div>

<style>
  .container {
    display: flex;
    flex: 0 0 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
  }
</style>
