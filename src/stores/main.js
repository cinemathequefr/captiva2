import {
  persist,
  localStorage,
  sessionStorage,
} from "@macfja/svelte-persistent-store";
import { writable } from "svelte/store";

const currentProgId = persist(writable(124), localStorage(), "currentProgId");

const currentProgName = persist(
  writable(""),
  localStorage(),
  "currentProgName"
);

const currentCyclesList = writable([]);
const currentCycleId = writable(null);
const currentFilmsList = writable([]);
const currentFilmPk = writable(null);
const currentFilmEditingStatus = writable(null);

export {
  currentProgId,
  currentProgName,
  currentCyclesList,
  currentCycleId,
  currentFilmsList,
  currentFilmPk,
  currentFilmEditingStatus,
};
