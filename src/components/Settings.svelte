<script>
  import _ from "lodash";
  import Form from "../components/lib/Form.svelte";
  import { settings } from "../stores/settings";

  let currentProgId = $settings.currentProgId;

  const selectProgramme = (e) => {
    $settings.currentProgId = currentProgId = Number(e.target.value);
    $settings.currentProgName = _(progs).find((p) => p[0] === currentProgId)[1];
  };

  // TODO: lire ces données via l'API (question : à chaque fois, ou lors d'une initialisation de l'application ?)
  const progs = [
    [99, "Décembre 2021-février 2022"],
    [111, "Mars-mai 2022"],
    [116, "FIFR 2022"],
    [119, "Juillet-août 2022"],
    [124, "Septembre-novembre 2022"],
  ];
</script>

<h3>Programme</h3>

<Form>
  <fieldset>
    <select on:change={selectProgramme}>
      {#each progs as prog}
        <option value={prog[0]} selected={prog[0] === currentProgId}
          >{prog[0]} - {prog[1]}</option
        >
      {/each}
    </select>
  </fieldset>
</Form>
