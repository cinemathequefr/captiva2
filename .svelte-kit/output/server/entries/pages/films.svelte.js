import { c as create_ssr_component, e as escape, b as add_attribute, d as createEventDispatcher, o as onDestroy, n as null_to_empty, a as subscribe, j as set_store_value, k as is_promise, f as noop, v as validate_component, l as globals, p as each } from "../../chunks/index-432ba86e.js";
import _ from "lodash";
import { g as get, F as Form, p as put } from "../../chunks/api-1728f32c.js";
import { w as writable } from "../../chunks/Form.svelte_svelte_type_style_lang-ee7924e1.js";
import { s as settings } from "../../chunks/settings-22c1b3b2.js";
var SplitPane_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".splitter.svelte-1lkfu7i{display:block;flex:0 0 auto;width:3px;background-color:#666;cursor:col-resize;transition:0.2s}.splitter.svelte-1lkfu7i:hover{background-color:#36f}.split-pane.svelte-1lkfu7i{display:flex;width:100%;max-width:100%;flex:0 0 100%;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.left.svelte-1lkfu7i{flex:0 0 25%;display:flex;flex-direction:column;overflow:hidden;background-color:#aaa}.right.svelte-1lkfu7i{flex:1 1 75%;display:flex;flex-direction:column;overflow-x:hidden;overflow-y:auto;background-color:#ddd}",
  map: null
};
const SplitPane = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { leftInitialSize = "50%" } = $$props;
  let left;
  if ($$props.leftInitialSize === void 0 && $$bindings.leftInitialSize && leftInitialSize !== void 0)
    $$bindings.leftInitialSize(leftInitialSize);
  $$result.css.add(css$5);
  return `


<div class="${"split-pane svelte-1lkfu7i"}"><div class="${"left svelte-1lkfu7i"}" style="${"flex-basis: " + escape(leftInitialSize)}"${add_attribute("this", left, 0)}>${slots.left ? slots.left({}) : ``}</div>
  <div class="${"splitter svelte-1lkfu7i"}"></div>
  <div class="${"right svelte-1lkfu7i"}">${slots.right ? slots.right({}) : ``}</div>
</div>`;
});
const currentFilmsList = writable([]);
const currentFilmPk = writable(null);
const currentFilmEditingStatus = writable(null);
const currentCycleId = writable(null);
const currentCyclesList = writable([]);
function convertObjectValuesToNum(o, keys) {
  return _(_.cloneDeep(o)).mapValues((v, k) => {
    const conv = Number(v);
    return _.indexOf(keys, k) > -1 ? isNaN(conv) ? v : conv : v;
  }).value();
}
var EditingStatus_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "svg.svelte-117kyt1.svelte-117kyt1{display:inline-block}svg.svelte-117kyt1>circle.svelte-117kyt1{fill:transparent}.status0.svelte-117kyt1.svelte-117kyt1{fill:#fd1c3a}.status1.svelte-117kyt1.svelte-117kyt1{fill:#fdb61e}.status2.svelte-117kyt1.svelte-117kyt1{fill:#18bd78}.status3.svelte-117kyt1.svelte-117kyt1{fill:#1878bd}",
  map: null
};
const EditingStatus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { size = 12 } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$4);
  return `<svg style="${"width:" + escape(size) + "px; height:" + escape(size) + "px;"}" viewBox="${"0 0 100 100"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-117kyt1"}"><circle class="${"status" + escape(status) + " svelte-117kyt1"}" cx="${"50"}" cy="${"60"}" r="${"30"}"></circle></svg>`;
});
var Snackbar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".snackbar.svelte-1qepeic{display:flex;align-items:center;border-radius:4px;padding:6px 16px;margin:4px 0;min-height:48px;min-width:144px;max-width:568px;position:fixed;flex-wrap:nowrap;z-index:50;box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2),\r\n      0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12)}.snackbar-content.svelte-1qepeic{text-align:center;flex:1 1 auto}.top.svelte-1qepeic{top:0;left:50%;transform:translate3d(-50%, 0, 0)}.bottom.svelte-1qepeic{bottom:0;left:50%;border-radius:2px 2px 0 0;transform:translate3d(-50%, 0, 0)}@media only screen and (max-width: 600px){.snackbar.svelte-1qepeic{max-width:100%;left:0;right:0;transform:translate3d(0, 0, 0)}}",
  map: null
};
const Snackbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { visible: visible2 = false } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { bottom = true } = $$props;
  let { bg = "#9fc" } = $$props;
  let { color = "#000" } = $$props;
  let { timeout = 1.5 } = $$props;
  let timerId;
  onDestroy(() => {
    clearTimeout(timerId);
    timerId = void 0;
  });
  if ($$props.visible === void 0 && $$bindings.visible && visible2 !== void 0)
    $$bindings.visible(visible2);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.timeout === void 0 && $$bindings.timeout && timeout !== void 0)
    $$bindings.timeout(timeout);
  $$result.css.add(css$3);
  {
    if (visible2 === true) {
      clearTimeout(timerId);
      timerId = void 0;
      if (timeout > 0) {
        timerId = setTimeout(() => {
          visible2 = false;
          timerId = void 0;
        }, timeout * 1e3);
      }
    }
  }
  return `


${visible2 ? `<div class="${[
    escape(null_to_empty("snackbar " + className)) + " svelte-1qepeic",
    (!bottom ? "top" : "") + " " + (bottom ? "bottom" : "")
  ].join(" ").trim()}"${add_attribute("style", `color: ${color}; background: ${bg};${style}`, 0)}><div class="${"snackbar-content svelte-1qepeic"}">${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
var FilmEdit_svelte_svelte_type_style_lang = "";
const { Object: Object_1 } = globals;
const css$2 = {
  code: ".container.svelte-jn65sb{margin:12px auto;width:100%;max-width:600px;padding:12px;flex:0 0 auto;align-self:flex-start;background-color:#ddd}.status-container.svelte-jn65sb{display:inline-block;font-size:0.75rem;padding:0 4px 0 0;border:solid 1px #888;color:#666;border-radius:4px;user-select:none}a.svelte-jn65sb{color:inherit;border:none;text-decoration:none;padding:0;margin:0;font-size:1rem}",
  map: null
};
const FilmEdit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentFilmsList, $$unsubscribe_currentFilmsList;
  let $currentFilmEditingStatus, $$unsubscribe_currentFilmEditingStatus;
  let $currentFilmPk, $$unsubscribe_currentFilmPk;
  $$unsubscribe_currentFilmsList = subscribe(currentFilmsList, (value) => $currentFilmsList = value);
  $$unsubscribe_currentFilmEditingStatus = subscribe(currentFilmEditingStatus, (value) => $currentFilmEditingStatus = value);
  $$unsubscribe_currentFilmPk = subscribe(currentFilmPk, (value) => $currentFilmPk = value);
  let oldPk;
  let pk;
  let film;
  let snackbar = {
    visible: false,
    message: "",
    props: {}
  };
  function updateFilm(e) {
    let formData = new FormData(e.target);
    let film2 = [];
    for (let [k, v] of formData.entries()) {
      film2.push([k, v]);
    }
    film2 = Object.assign(_.fromPairs(film2));
    film2 = convertObjectValuesToNum(film2, ["annee", "editing_status"]);
    put(`film/${pk}`, film2).then((res) => {
      snackbar.message = "Enregistr\xE9.";
      snackbar.visible = true;
      snackbar.props.bg = "#9fc";
      set_store_value(currentFilmEditingStatus, $currentFilmEditingStatus = film2.editing_status, $currentFilmEditingStatus);
      set_store_value(currentFilmsList, $currentFilmsList = _($currentFilmsList).map((d) => {
        if (d.pk === pk) {
          return _({}).assign(d, {
            titre: film2.titre,
            art: film2.art,
            realisateurs: film2.realisateurs,
            annee: film2.annee,
            editing_status: film2.editing_status
          }).value();
        } else {
          return d;
        }
      }).value(), $currentFilmsList);
    }).catch((e2) => {
      console.log(e2);
      snackbarMessage = "L'enregistrement a \xE9chou\xE9.";
      snackbar.props.bg = "#f9c";
      visible = true;
    });
  }
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        oldPk = pk;
        pk = $currentFilmPk;
        if (pk && oldPk !== pk) {
          film = get(`film/${pk}`);
          film.then((f) => {
            set_store_value(currentFilmEditingStatus, $currentFilmEditingStatus = f.editing_status, $currentFilmEditingStatus);
          });
        }
      }
    }
    $$rendered = `${pk ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(film2) {
        return `
    <div class="${"container svelte-jn65sb"}">${validate_component(Form, "Form").$$render($$result, {
          submit: updateFilm,
          options: { textareaFitContent: true }
        }, {}, {
          default: () => {
            return `<div><a title="${"Voir la page du film sur le site"}" href="${"https://www.cinematheque.fr/film/" + escape(film2.pk) + ".html"}" target="${"film_site_cf"}" class="${"svelte-jn65sb"}">${escape(film2.pk)}</a>
          <div class="${"status-container svelte-jn65sb"}">${validate_component(EditingStatus, "EditingStatus").$$render($$result, {
              status: $currentFilmEditingStatus,
              size: 12
            }, {}, {})}
            ${escape(["Non relu", "En cours", "Corrig\xE9"][$currentFilmEditingStatus])}</div></div>
        <fieldset><label><div>Titre</div>
            <input name="${"titre"}" type="${"text"}" class="${"bold"}"${add_attribute("value", film2.titre || "", 0)} required></label>
          <label style="${"flex: 0 1 10%;"}"><div>Art</div>
            <input name="${"art"}" type="${"text"}" class="${"bold"}"${add_attribute("value", film2.art || "", 0)}></label></fieldset>
        <fieldset><label><div>TitreVo</div>
            <input name="${"titrevo"}" type="${"text"}"${add_attribute("value", film2.titrevo || "", 0)}></label>
          <label style="${"flex: 0 1 10%;"}"><div>ArtVo</div>
            <input name="${"artvo"}" type="${"text"}"${add_attribute("value", film2.artvo || "", 0)}></label></fieldset>
        <fieldset><label><div>TitreNx</div>
            <input name="${"titrenx"}" type="${"text"}"${add_attribute("value", film2.titrenx || "", 0)}></label></fieldset>
        <fieldset><label><div>R\xE9alisateurs</div>
            <input name="${"realisateurs"}" type="${"text"}"${add_attribute("value", film2.realisateurs || "", 0)} required></label></fieldset>
        <fieldset><label><div>Pays</div>
            <input name="${"pays"}" type="${"text"}"${add_attribute("value", film2.pays || "", 0)}></label>
          <label style="${"flex: 0 1 15%;"}"><div>Ann\xE9e</div>
            <input name="${"annee"}" type="${"text"}"${add_attribute("value", film2.annee || "", 0)} required pattern="${"\\d\\d\\d\\d"}"></label>
          <label style="${"flex: 0 1 15%;"}"><div>Dur\xE9e</div>
            <input name="${"duree"}" type="${"text"}"${add_attribute("value", film2.duree || "", 0)}></label></fieldset>
        <fieldset><label><div>G\xE9n\xE9rique</div>
            <input name="${"generique"}" type="${"text"}"${add_attribute("value", film2.generique || "", 0)}></label></fieldset>
        <fieldset><label><div>Adaptation</div>
            <textarea name="${"adaptation"}" class="${"single-line"}">${escape(film2.adaptation || "")}</textarea></label></fieldset>

        <fieldset><label><div>Synopsis</div>
            <textarea name="${"synopsis"}">${escape(film2.synopsis || "")}</textarea></label></fieldset>
        <fieldset><label><div>Commentaire (mini-texte, texte FIFR, citation)</div>
            <textarea name="${"commentaire"}">${escape(film2.commentaire || "")}</textarea></label></fieldset>
        <fieldset><label><div>Mentions (restauration, ...)</div>
            <textarea name="${"mentions"}">${escape(film2.mentions || "")}</textarea></label></fieldset>
        <fieldset><label><div>Synopsis JP</div>
            <textarea name="${"synopsisjp"}">${escape(film2.synopsisjp || "")}</textarea></label></fieldset>
        

        <fieldset><label style="${"flex: 0 1 20%;"}"><div>Editing_status</div>
            <select name="${"editing_status"}" required><option value="${"0"}" ${film2.editing_status === 0 ? "selected" : ""}>0-Non relu</option><option value="${"1"}" ${film2.editing_status === 1 ? "selected" : ""}>1-En cours</option><option value="${"2"}" ${film2.editing_status === 2 ? "selected" : ""}>2-Corrig\xE9</option></select></label></fieldset>
        <fieldset class="${"buttons-container"}"><label><input type="${"submit"}" class="${"yes"}" value="${"Enregistrer"}"></label></fieldset>`;
          }
        })}</div>
  `;
      }(__value);
    }(film)}` : ``}
${validate_component(Snackbar, "Snackbar").$$render($$result, Object_1.assign(snackbar.props, { visible: snackbar.visible }), {
      visible: ($$value) => {
        snackbar.visible = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${escape(snackbar.message)}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_currentFilmsList();
  $$unsubscribe_currentFilmEditingStatus();
  $$unsubscribe_currentFilmPk();
  return $$rendered;
});
var FilmsNav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-f0f5z8{position:relative;display:flex;flex-wrap:nowrap;align-items:stretch;flex-direction:column;flex:0 0 100%;overflow:hidden;background-color:#aaa}.cycle-selector.svelte-f0f5z8{padding:8px 4px 0 4px}.films-count.svelte-f0f5z8{flex:0 0 auto;overflow:hidden;font-size:0.813rem;text-align:right}ul.svelte-f0f5z8{padding:0 4px;overflow-y:auto}li.svelte-f0f5z8{background-color:#ddd;padding:4px 2px 4px 12px;font-size:0.913rem;overflow:hidden;line-height:1.3;cursor:pointer}li.selected.svelte-f0f5z8,li.selected.svelte-f0f5z8:nth-child(even){background-color:#ffa;outline:none}li.selected.svelte-f0f5z8:focus,li.selected.svelte-f0f5z8:nth-child(even):focus{background-color:#ff6;outline:none}li.svelte-f0f5z8:nth-child(even){background-color:#ccc}li.svelte-f0f5z8:not(.selected):hover{background-color:#eee}.title-container.svelte-f0f5z8{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.title.svelte-f0f5z8{flex:0 1 auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#018}.editing-status.svelte-f0f5z8{flex:0 0 auto;align-self:auto;padding-left:2px}.director.svelte-f0f5z8{overflow:hidden;color:#666;font-size:0.813rem;white-space:nowrap;text-overflow:ellipsis}.footer.svelte-f0f5z8{padding:6px 0}.tools-container.svelte-f0f5z8{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;margin:0;padding:0 6px;min-height:32px}.tools-container-left.svelte-f0f5z8,.tools-container-right.svelte-f0f5z8{flex:1 1 auto}",
  map: null
};
const FilmsNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentFilmPk, $$unsubscribe_currentFilmPk;
  let $currentFilmsList, $$unsubscribe_currentFilmsList;
  let $currentCycleId, $$unsubscribe_currentCycleId;
  let $settings, $$unsubscribe_settings;
  let $currentCyclesList, $$unsubscribe_currentCyclesList;
  $$unsubscribe_currentFilmPk = subscribe(currentFilmPk, (value) => $currentFilmPk = value);
  $$unsubscribe_currentFilmsList = subscribe(currentFilmsList, (value) => $currentFilmsList = value);
  $$unsubscribe_currentCycleId = subscribe(currentCycleId, (value) => $currentCycleId = value);
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_currentCyclesList = subscribe(currentCyclesList, (value) => $currentCyclesList = value);
  let elSelectCycle;
  let pCycles;
  let pFilms;
  console.log($currentCycleId);
  $$result.css.add(css$1);
  $$unsubscribe_currentFilmPk();
  $$unsubscribe_currentFilmsList();
  $$unsubscribe_currentCycleId();
  $$unsubscribe_settings();
  $$unsubscribe_currentCyclesList();
  return `<div class="${"container svelte-f0f5z8"}"><div class="${"cycle-selector svelte-f0f5z8"}">${validate_component(Form, "Form").$$render($$result, {}, {}, {
    default: () => {
      return `<fieldset><select${add_attribute("this", elSelectCycle, 0)}><option disabled${add_attribute("value", null, 0)}>\u{1F4D5} ${escape($settings.currentProgName)}</option>${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return ``;
        }
        return function() {
          return `
            ${each($currentCyclesList, (cycle) => {
            return `<option${add_attribute("value", cycle.id_cycle, 0)}>${escape(cycle.id_cycle)}
                -
                ${escape(cycle.titre_cycle)}
              </option>`;
          })}
          `;
        }();
      }(pCycles)}</select></fieldset>`;
    }
  })}</div>

  <div class="${"tools-container svelte-f0f5z8"}"><div class="${"tools-container-left svelte-f0f5z8"}"></div>
    <div class="${"tools-container-right svelte-f0f5z8"}">${$currentCycleId ? `<div class="${"films-count svelte-f0f5z8"}">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function() {
      return `
            ${$currentFilmsList.length > 0 ? `${escape($currentFilmsList.length)}
              ${escape($currentFilmsList.length < 2 ? "film" : "films")}` : ``}
          `;
    }();
  }(pFilms)}</div>` : ``}</div></div>

  ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function() {
      return `
    ${$currentFilmsList.length > 0 ? `<ul class="${"films-list svelte-f0f5z8"}">${each($currentFilmsList, (film, i) => {
        return `<li${add_attribute("data-pk", film.pk, 0)}${add_attribute("title", film.pk, 0)}${add_attribute("tabindex", i + 1, 0)} class="${["svelte-f0f5z8", film.pk === $currentFilmPk ? "selected" : ""].join(" ").trim()}"><div class="${"title-container svelte-f0f5z8"}"><div class="${"title svelte-f0f5z8"}">${escape(film.titre)}
                ${escape(film.art ? `(${film.art})` : "")}</div>
              <div class="${"editing-status svelte-f0f5z8"}">${validate_component(EditingStatus, "EditingStatus").$$render($$result, { status: film.editing_status }, {}, {})}
              </div></div>
            <div class="${"director svelte-f0f5z8"}">${escape(film.realisateurs)}, ${escape(film.annee)}</div>
          </li>`;
      })}</ul>
      <div class="${"footer svelte-f0f5z8"}"></div>` : ``}
  `;
    }();
  }(pFilms)}
</div>`;
});
var films_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1h2l22k{display:flex;flex:0 0 100%;flex-direction:row;flex-wrap:nowrap;align-items:stretch}",
  map: null
};
const Films = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Captiva - Films</title>`, ""}`, ""}

<div class="${"container svelte-1h2l22k"}">${validate_component(SplitPane, "SplitPane").$$render($$result, { leftInitialSize: "25%" }, {}, {
    right: () => {
      return `${validate_component(FilmEdit, "FilmEdit").$$render($$result, {}, {}, {})}
      
    `;
    },
    left: () => {
      return `${validate_component(FilmsNav, "FilmsNav").$$render($$result, {}, {}, {})}`;
    }
  })}
</div>`;
});
export { Films as default };
