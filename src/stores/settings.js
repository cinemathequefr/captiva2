import { persist, localStorage } from "@macfja/svelte-persistent-store";
import { writable } from "svelte/store";

// export const settings = persist(
//   writable({
//     currentProgId: 124, // Identifiant du programme sélectionné
//     currentProgName: "",
//     filmEditOrView: "edit", // view | edit
//   }),
//   localStorage(),
//   "settings"
// );
const currentProgId = persist(writable(null), localStorage(), "currentProgId");
const currentProgName = persist(
  writable(""),
  localStorage(),
  "currentProgName"
);

export { currentProgId, currentProgName };
