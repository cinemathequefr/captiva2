var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, i as identity, d as createEventDispatcher, o as onDestroy, n as null_to_empty, v as validate_component, m as missing_component, s as setContext, g as getContext } from "../../chunks/index-432ba86e.js";
import { t as token, w as writable } from "../../chunks/Form.svelte_svelte_type_style_lang-ee7924e1.js";
import jwt_decode from "jwt-decode";
import "lodash";
import "../../chunks/settings-22c1b3b2.js";
var Connect_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".username.svelte-17w0406{padding:2px 0;margin:0 6px;border-bottom:solid 2px transparent}",
  map: null
};
const Connect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $token, $$unsubscribe_token;
  $$unsubscribe_token = subscribe(token, (value) => $token = value);
  let username;
  let isConnected;
  $$result.css.add(css$4);
  {
    {
      token.set($token);
      username = $token ? jwt_decode($token).data.username : null;
      isConnected = username !== null;
    }
  }
  $$unsubscribe_token();
  return `${isConnected === false ? `<ul><li><a href="${"login"}">Log in</a></li></ul>` : `<div class="${"username svelte-17w0406"}">${escape(username)}</div>
  <ul><li><span class="${"link"}">Log out</span></li></ul>`}`;
});
var LogoCaptiva_svelte_svelte_type_style_lang = "";
var Settings_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "svg.svelte-17yrigp{display:inline-block}",
  map: null
};
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 16 } = $$props;
  let { className = null } = $$props;
  let elSvg;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  $$result.css.add(css$3);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" style="${"width:" + escape(size) + "px; height: auto;"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" fill="${"none"}" viewBox="${"0 0 24 24"}" class="${"svelte-17yrigp"}"${add_attribute("this", elSvg, 0)}><circle cx="${"12"}" cy="${"12"}" r="${"3"}"></circle><path d="${"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}"></path></svg>`;
});
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
var Modal_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".svelte-g4wg3a{box-sizing:border-box}.bg.svelte-g4wg3a{position:fixed;z-index:1000;top:0;left:0;display:flex;flex-direction:column;justify-content:center;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.66)}.wrap.svelte-g4wg3a{position:relative;margin:2rem;max-height:100%}.window.svelte-g4wg3a{position:relative;width:40rem;max-width:100%;max-height:100%;margin:2rem auto;color:black;border-radius:0.5rem;background:white}.content.svelte-g4wg3a{position:relative;padding:1rem;max-height:calc(100vh - 4rem);overflow:auto}.close.svelte-g4wg3a{display:block;box-sizing:border-box;position:absolute;z-index:1000;top:1rem;right:1rem;margin:0;padding:0;width:1.5rem;height:1.5rem;border:0;color:black;border-radius:1.5rem;background:white;box-shadow:0 0 0 1px black;transition:transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);-webkit-appearance:none}.close.svelte-g4wg3a:before,.close.svelte-g4wg3a:after{content:'';display:block;box-sizing:border-box;position:absolute;top:50%;width:1rem;height:1px;background:black;transform-origin:center;transition:height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)}.close.svelte-g4wg3a:before{-webkit-transform:translate(0, -50%) rotate(45deg);-moz-transform:translate(0, -50%) rotate(45deg);transform:translate(0, -50%) rotate(45deg);left:0.25rem}.close.svelte-g4wg3a:after{-webkit-transform:translate(0, -50%) rotate(-45deg);-moz-transform:translate(0, -50%) rotate(-45deg);transform:translate(0, -50%) rotate(-45deg);left:0.25rem}.close.svelte-g4wg3a:hover{background:black}.close.svelte-g4wg3a:hover:before,.close.svelte-g4wg3a:hover:after{height:2px;background:white}.close.svelte-g4wg3a:focus{border-color:#3399ff;box-shadow:0 0 0 2px #3399ff}.close.svelte-g4wg3a:active{transform:scale(0.9)}.close.svelte-g4wg3a:hover,.close.svelte-g4wg3a:focus,.close.svelte-g4wg3a:active{outline:none}",
  map: null
};
function bind(Component, props = {}) {
  return function ModalComponent(options) {
    return new Component(__spreadProps(__spreadValues({}, options), {
      props: __spreadValues(__spreadValues({}, props), options.props)
    }));
  };
}
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  const baseSetContext = setContext;
  let { show = null } = $$props;
  let { key = "simple-modal" } = $$props;
  let { ariaLabel = null } = $$props;
  let { ariaLabelledBy = null } = $$props;
  let { closeButton = true } = $$props;
  let { closeOnEsc = true } = $$props;
  let { closeOnOuterClick = true } = $$props;
  let { styleBg = {} } = $$props;
  let { styleWindowWrap = {} } = $$props;
  let { styleWindow = {} } = $$props;
  let { styleContent = {} } = $$props;
  let { styleCloseButton = {} } = $$props;
  let { classBg = null } = $$props;
  let { classWindowWrap = null } = $$props;
  let { classWindow = null } = $$props;
  let { classContent = null } = $$props;
  let { classCloseButton = null } = $$props;
  let { unstyled = false } = $$props;
  let { setContext: setContext$1 = baseSetContext } = $$props;
  let { transitionBg = fade } = $$props;
  let { transitionBgProps = { duration: 250 } } = $$props;
  let { transitionWindow = transitionBg } = $$props;
  let { transitionWindowProps = transitionBgProps } = $$props;
  let { disableFocusTrap = false } = $$props;
  const defaultState = {
    ariaLabel,
    ariaLabelledBy,
    closeButton,
    closeOnEsc,
    closeOnOuterClick,
    styleBg,
    styleWindowWrap,
    styleWindow,
    styleContent,
    styleCloseButton,
    classBg,
    classWindowWrap,
    classWindow,
    classContent,
    classCloseButton,
    transitionBg,
    transitionBgProps,
    transitionWindow,
    transitionWindowProps,
    disableFocusTrap,
    unstyled
  };
  let state = __spreadValues({}, defaultState);
  let Component = null;
  let background;
  let wrap;
  let modalWindow;
  let scrollY;
  let cssBg;
  let cssWindowWrap;
  let cssWindow;
  let cssContent;
  let cssCloseButton;
  let prevBodyPosition;
  let prevBodyOverflow;
  let prevBodyWidth;
  const camelCaseToDash = (str) => str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
  const toCssString = (props) => props ? Object.keys(props).reduce((str, key2) => `${str}; ${camelCaseToDash(key2)}: ${props[key2]}`, "") : "";
  const isFunction = (f) => !!(f && f.constructor && f.call && f.apply);
  const updateStyleTransition = () => {
    cssBg = toCssString(Object.assign({}, {
      width: window.innerWidth,
      height: window.innerHeight
    }, state.styleBg));
    cssWindowWrap = toCssString(state.styleWindowWrap);
    cssWindow = toCssString(state.styleWindow);
    cssContent = toCssString(state.styleContent);
    cssCloseButton = toCssString(state.styleCloseButton);
  };
  const toVoid = () => {
  };
  let onClose = toVoid;
  let onClosed = toVoid;
  const open = (NewComponent, newProps = {}, options = {}, callback = {}) => {
    Component = bind(NewComponent, newProps);
    state = __spreadValues(__spreadValues({}, defaultState), options);
    updateStyleTransition();
    disableScroll();
    onClose = (event) => {
      if (callback.onClose)
        callback.onClose(event);
      dispatch("close");
      dispatch("closing");
    };
    onClosed = (event) => {
      if (callback.onClosed)
        callback.onClosed(event);
      dispatch("closed");
    };
  };
  const close = (callback = {}) => {
    if (!Component)
      return;
    onClose = callback.onClose || onClose;
    onClosed = callback.onClosed || onClosed;
    Component = null;
    enableScroll();
  };
  const disableScroll = () => {
    scrollY = window.scrollY;
    prevBodyPosition = document.body.style.position;
    prevBodyOverflow = document.body.style.overflow;
    prevBodyWidth = document.body.style.width;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
  };
  const enableScroll = () => {
    document.body.style.position = prevBodyPosition || "";
    document.body.style.top = "";
    document.body.style.overflow = prevBodyOverflow || "";
    document.body.style.width = prevBodyWidth || "";
    window.scrollTo(0, scrollY);
  };
  setContext$1(key, { open, close });
  onDestroy(() => {
  });
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.ariaLabelledBy === void 0 && $$bindings.ariaLabelledBy && ariaLabelledBy !== void 0)
    $$bindings.ariaLabelledBy(ariaLabelledBy);
  if ($$props.closeButton === void 0 && $$bindings.closeButton && closeButton !== void 0)
    $$bindings.closeButton(closeButton);
  if ($$props.closeOnEsc === void 0 && $$bindings.closeOnEsc && closeOnEsc !== void 0)
    $$bindings.closeOnEsc(closeOnEsc);
  if ($$props.closeOnOuterClick === void 0 && $$bindings.closeOnOuterClick && closeOnOuterClick !== void 0)
    $$bindings.closeOnOuterClick(closeOnOuterClick);
  if ($$props.styleBg === void 0 && $$bindings.styleBg && styleBg !== void 0)
    $$bindings.styleBg(styleBg);
  if ($$props.styleWindowWrap === void 0 && $$bindings.styleWindowWrap && styleWindowWrap !== void 0)
    $$bindings.styleWindowWrap(styleWindowWrap);
  if ($$props.styleWindow === void 0 && $$bindings.styleWindow && styleWindow !== void 0)
    $$bindings.styleWindow(styleWindow);
  if ($$props.styleContent === void 0 && $$bindings.styleContent && styleContent !== void 0)
    $$bindings.styleContent(styleContent);
  if ($$props.styleCloseButton === void 0 && $$bindings.styleCloseButton && styleCloseButton !== void 0)
    $$bindings.styleCloseButton(styleCloseButton);
  if ($$props.classBg === void 0 && $$bindings.classBg && classBg !== void 0)
    $$bindings.classBg(classBg);
  if ($$props.classWindowWrap === void 0 && $$bindings.classWindowWrap && classWindowWrap !== void 0)
    $$bindings.classWindowWrap(classWindowWrap);
  if ($$props.classWindow === void 0 && $$bindings.classWindow && classWindow !== void 0)
    $$bindings.classWindow(classWindow);
  if ($$props.classContent === void 0 && $$bindings.classContent && classContent !== void 0)
    $$bindings.classContent(classContent);
  if ($$props.classCloseButton === void 0 && $$bindings.classCloseButton && classCloseButton !== void 0)
    $$bindings.classCloseButton(classCloseButton);
  if ($$props.unstyled === void 0 && $$bindings.unstyled && unstyled !== void 0)
    $$bindings.unstyled(unstyled);
  if ($$props.setContext === void 0 && $$bindings.setContext && setContext$1 !== void 0)
    $$bindings.setContext(setContext$1);
  if ($$props.transitionBg === void 0 && $$bindings.transitionBg && transitionBg !== void 0)
    $$bindings.transitionBg(transitionBg);
  if ($$props.transitionBgProps === void 0 && $$bindings.transitionBgProps && transitionBgProps !== void 0)
    $$bindings.transitionBgProps(transitionBgProps);
  if ($$props.transitionWindow === void 0 && $$bindings.transitionWindow && transitionWindow !== void 0)
    $$bindings.transitionWindow(transitionWindow);
  if ($$props.transitionWindowProps === void 0 && $$bindings.transitionWindowProps && transitionWindowProps !== void 0)
    $$bindings.transitionWindowProps(transitionWindowProps);
  if ($$props.disableFocusTrap === void 0 && $$bindings.disableFocusTrap && disableFocusTrap !== void 0)
    $$bindings.disableFocusTrap(disableFocusTrap);
  $$result.css.add(css$2);
  return `

${Component ? `<div class="${[
    escape(null_to_empty(state.classBg)) + " svelte-g4wg3a",
    !unstyled ? "bg" : ""
  ].join(" ").trim()}"${add_attribute("style", cssBg, 0)}${add_attribute("this", background, 0)}><div class="${[
    escape(null_to_empty(state.classWindowWrap)) + " svelte-g4wg3a",
    !unstyled ? "wrap" : ""
  ].join(" ").trim()}"${add_attribute("style", cssWindowWrap, 0)}${add_attribute("this", wrap, 0)}><div class="${[
    escape(null_to_empty(state.classWindow)) + " svelte-g4wg3a",
    !unstyled ? "window" : ""
  ].join(" ").trim()}" role="${"dialog"}" aria-modal="${"true"}"${add_attribute("aria-label", state.ariaLabelledBy ? null : state.ariaLabel || null, 0)}${add_attribute("aria-labelledby", state.ariaLabelledBy || null, 0)}${add_attribute("style", cssWindow, 0)}${add_attribute("this", modalWindow, 0)}>${state.closeButton ? `${isFunction(state.closeButton) ? `${validate_component(state.closeButton || missing_component, "svelte:component").$$render($$result, { onClose: close }, {}, {})}` : `<button class="${[
    escape(null_to_empty(state.classCloseButton)) + " svelte-g4wg3a",
    !unstyled ? "close" : ""
  ].join(" ").trim()}" aria-label="${"Close modal"}"${add_attribute("style", cssCloseButton, 0)}></button>`}` : ``}
        <div class="${[
    escape(null_to_empty(state.classContent)) + " svelte-g4wg3a",
    !unstyled ? "content" : ""
  ].join(" ").trim()}"${add_attribute("style", cssContent, 0)}>${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div></div></div>` : ``}
${slots.default ? slots.default({}) : ``}`;
});
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".modal-window{width:400px !important;max-width:100% !important;border-radius:2px !important}nav.svelte-1rii8p9.svelte-1rii8p9{position:fixed;top:0;left:0;width:100%;height:50px;overflow:hidden;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center;align-content:stretch;background-color:#036;color:#eee;padding:12px;font-size:0.938rem;z-index:900}ul.svelte-1rii8p9.svelte-1rii8p9,li.svelte-1rii8p9.svelte-1rii8p9,li.svelte-1rii8p9>.svelte-1rii8p9{display:inline-flex;flex-direction:row;align-items:center}.current.svelte-1rii8p9.svelte-1rii8p9{background-color:#36f}.left.svelte-1rii8p9.svelte-1rii8p9{flex:1 1 auto;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start}.right.svelte-1rii8p9.svelte-1rii8p9{flex:1 1 auto;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end}.right li,.left li{flex:0 1 auto}a, .link{display:inline-block;padding:1px 6px;text-decoration:none;cursor:pointer}a:hover, a:active{color:#fff}.icon{stroke:#eee;transition:0.15s}.icon:hover{stroke:#6f93ff}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $token, $$unsubscribe_token;
  let $page, $$unsubscribe_page;
  let $modal, $$unsubscribe_modal;
  $$unsubscribe_token = subscribe(token, (value) => $token = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const modal = writable(null);
  $$unsubscribe_modal = subscribe(modal, (value) => $modal = value);
  $$result.css.add(css$1);
  token.set($token);
  $$unsubscribe_token();
  $$unsubscribe_page();
  $$unsubscribe_modal();
  return `<nav class="${"svelte-1rii8p9"}"><div class="${"left svelte-1rii8p9"}"><ul class="${"svelte-1rii8p9"}">
      ${$token !== "" ? `<li class="${"svelte-1rii8p9"}"><a href="${"films"}" class="${["svelte-1rii8p9", $page.url.pathname === "/films" ? "current" : ""].join(" ").trim()}">Films</a></li>
        <li class="${"svelte-1rii8p9"}"><a href="${"calendrier"}" class="${["svelte-1rii8p9", $page.url.pathname === "/calendrier" ? "current" : ""].join(" ").trim()}">Calendrier</a></li>

        <li class="${"svelte-1rii8p9"}"><span class="${"link svelte-1rii8p9"}">${validate_component(Settings, "IconSettings").$$render($$result, { className: "icon" }, {}, {})}</span></li>` : ``}</ul></div>
  <div class="${"right svelte-1rii8p9"}">${validate_component(Connect, "Connect").$$render($$result, {}, {}, {})}</div></nav>

${validate_component(Modal, "Modal").$$render($$result, {
    show: $modal,
    closeButton: false,
    classWindow: "modal-window"
  }, {}, {})}`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1il9n4p{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch;position:fixed;top:50px;left:0;width:100%;bottom:0;overflow:hidden}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
<main class="${"svelte-1il9n4p"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export { _layout as default };
