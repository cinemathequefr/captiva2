import { writable } from "svelte/store";

export const currentFilmsList = writable([]);
export const currentFilmPk = writable(null);
export const currentFilmEditingStatus = writable(null);
export const currentCycleId = writable(null);
export const currentCyclesList = writable([]);
