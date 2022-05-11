import { persist, localStorage } from "@macfja/svelte-persistent-store";
import { writable } from "svelte/store";

export const settings = persist(
  writable({
    currentProgId: 119, // Identifiant du programme sélectionné
    currentProgName: "",
    filmEditOrView: "view", // view | edit
  }),
  localStorage(),
  "settings"
);
