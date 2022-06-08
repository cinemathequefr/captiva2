import { persist, localStorage } from "@macfja/svelte-persistent-store";
import { writable } from "svelte/store";
// import { browser } from "$app/env";

export const settings = persist(
  writable({
    currentProgId: 124, // Identifiant du programme sélectionné
    currentProgName: "",
    filmEditOrView: "edit", // view | edit
  }),
  localStorage(),
  "settings"
);
