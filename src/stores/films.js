import { writable } from "svelte/store";

export const films = writable({
  currentFilmsList: [],
  currentFilmPk: null,
  currentFilmEditingStatus: null,
  currentCycleId: null, // TEST
});
