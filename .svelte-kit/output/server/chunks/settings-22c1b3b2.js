import { p as persist, l as localStorage, w as writable } from "./Form.svelte_svelte_type_style_lang-ee7924e1.js";
const settings = persist(writable({
  currentProgId: 124,
  currentProgName: "",
  filmEditOrView: "edit"
}), localStorage(), "settings");
export { settings as s };
