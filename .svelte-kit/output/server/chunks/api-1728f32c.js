import { c as create_ssr_component, b as add_attribute } from "./index-432ba86e.js";
import { t as token } from "./Form.svelte_svelte_type_style_lang-ee7924e1.js";
const css = {
  code: 'form.svelte-12h61a9{width:100%;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-items:flex-start}fieldset{width:100%;flex:0 0 auto;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start;margin:0;border:0;padding:4px 0 0 0}fieldset.buttons-container{margin:12px 0;justify-content:flex-end}fieldset.buttons-container label{flex-grow:0}form label{flex:1 1 auto;margin:0 3px 0 0}form label > div{font-size:0.75rem;color:#888}input[type="text"], input[type="password"], textarea, select{width:100%;font-size:0.938rem;border:none;padding:8px;background-color:#eee;outline:none}input[type="text"]:focus, input[type="password"]:focus, textarea:focus{background-color:#fff}textarea{resize:vertical;height:8rem;min-height:38px}textarea.single-line{height:38px}.bold{font-weight:700}button, input[type="submit"]{margin:2px;padding:8px 12px;border:none;border-radius:4px;transition:0.1s}button.mini, input[type="submit"].mini{font-size:0.75em;padding:2px 4px}button.yes, input[type="submit"].yes{background-color:#686;color:#fff}button.no, input[type="submit"].no{background-color:#f99;border-color:#933}button.no:hover, input[type="submit"].no:hover{background-color:#c66}',
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let { submit = () => {
  } } = $$props;
  let elForm;
  options = Object.assign({ textareaFitContent: false }, options);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.submit === void 0 && $$bindings.submit && submit !== void 0)
    $$bindings.submit(submit);
  $$result.css.add(css);
  return `<form class="${"svelte-12h61a9"}"${add_attribute("this", elForm, 0)}>${slots.default ? slots.default({}) : ``}
</form>`;
});
token.subscribe((value) => {
});
async function send({ method, path, data }) {
  return;
}
function get(path, data) {
  return send({
    method: "GET",
    path,
    data
  });
}
function post(path, data) {
  return send({
    method: "POST",
    path,
    data
  });
}
function put(path, data) {
  return send({
    method: "PUT",
    path,
    data
  });
}
export { Form as F, post as a, get as g, put as p };
