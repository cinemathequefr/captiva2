import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape, j as set_store_value } from "../../chunks/index-432ba86e.js";
import { F as Form, a as post } from "../../chunks/api-1728f32c.js";
import { t as token } from "../../chunks/Form.svelte_svelte_type_style_lang-ee7924e1.js";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
var login_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-6w702j{margin:24px auto;width:90%;max-width:300px;background-color:#fff;padding:12px;flex:0 0 auto;align-self:flex-start}.info.svelte-6w702j{margin:24px 0;border:0;background-color:#f66}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $token, $$unsubscribe_token;
  $$unsubscribe_token = subscribe(token, (value) => $token = value);
  let email = "";
  let password = "";
  let response;
  let infoMessage;
  async function logIn() {
    try {
      response = await post("login", { email, password });
      set_store_value(token, $token = response.token, $token);
      goto("films");
    } catch (error) {
      infoMessage = error.message;
    }
  }
  $$result.css.add(css);
  infoMessage = infoMessage;
  {
    {
      token.set($token);
    }
  }
  $$unsubscribe_token();
  return `${$$result.head += `${$$result.title = `<title>Login</title>`, ""}`, ""}

<div class="${"container svelte-6w702j"}">${!$token ? `<h1>Se connecter</h1>
    ${validate_component(Form, "Form").$$render($$result, { submit: logIn }, {}, {
    default: () => {
      return `<fieldset><input type="${"text"}"${add_attribute("value", email, 0)}></fieldset>
      <fieldset><input type="${"password"}"${add_attribute("value", password, 0)}></fieldset>
      <fieldset><input class="${"center"}" type="${"submit"}" value="${"OK"}"></fieldset>`;
    }
  })}` : ``}
  ${infoMessage ? `<div class="${"info svelte-6w702j"}">${escape(infoMessage)}</div>` : ``}
</div>`;
});
export { Login as default };
