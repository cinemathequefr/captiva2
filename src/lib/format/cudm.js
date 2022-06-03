// Clean Up da Mess 4-beta version module
// 2018-12-10 : Je retire du script tous les remplacements vers &nbsp; (opération à faire à part si besoin).
// Version ESM (adapté le 2022-06-03)

import _ from "lodash";

const defaultOpts = {
  protect: {
    markdownLineBreaks: false,
  },
  singleLine: false, // true : remplace toutes les séquences de saut de ligne par un espace.
};

// Pour empêcher certaines séquences de caractères d'être affectées par les remplacements, on intercale temporairement un caractère arbitraire entre chaque caractère.
// Ceux-ci sont retirés après les remplacements en appelant la fonction `unprotect`.
const protectChar = "¤";
const protectSequences = {
  markdownLineBreaks: /\x20{2}$/gm, // Protège deux espaces en fin de ligne (saut de ligne Markdown) [À conserver ?]
};

function protect(seq, str) {
  return str.replace(seq, function (s) {
    return protectChar + s.split("").join(protectChar) + protectChar;
  });
}

function unprotect(str) {
  return str.replace(new RegExp(protectChar, "g"), "");
}

/**
 * replaceOe
 * Dans une chaîne, remplace "oe" par "œ" pour les cas usuels et en respectant la casse.
 * @param str {string} Texte
 * @return {String} Texte avec remplacements effectués
 */
function replaceOe(str) {
  var sequences = [
    "(ch)(oe)(ur)",
    "(c)(oe)(ur)",
    "(f)(oe)(tal)",
    "(f)(oe)(tus)",
    "(m)(oe)(urs)",
    "(n)(oe)(ud)",
    "()(oe)(cu)",
    "()(oe)(dip)",
    "()(oe)(dème)",
    "()(oe)(il)",
    "()(oe)(no)",
    "()(oe)(so)",
    "()(oe)(stro)",
    "()(oe)(uf)",
    "()(oe)(uvr)",
    "(s)(oe)(ur)",
    "(v)(oe)(u)",
  ];
  sequences.forEach(function (seq) {
    var find = new RegExp(seq, "gi");
    str = str.replace(find, function (a, p1, p2, p3) {
      return p1 + (p2 === "oe" ? "œ" : "Œ") + p3;
    });
  });
  return str;
}

function cudm(str, opts) {
  if (!str) return "";
  let o = str;
  opts = _({}).assign(defaultOpts, opts).value();
  opts.protect = _({}).assign(defaultOpts.protect, opts.protect).value();

  // Encodage des séquences protégées
  _(opts.protect)
    .toPairs()
    .filter((d) => d[1] === true)
    .map((d) => d[0])
    .forEach((d) => {
      o = protect(protectSequences[d], o);
    });

  // Remplacements
  // 2022-02-17 : remplacement des combinaisons caractère + diacritique par leur forme normalisée (1 caractère Unicode).
  o = o.replace(
    /([A-Z])[\u0300\u0301\u0302\u0303\u0304\u0308\u030b\u030c\u0322\u0327]/gi,
    (c) => c.normalize()
  );

  o = o.replace(/\xAC/g, ""); // Supprime le caractère ¬ (logical not - utilisé par Word comme césure optionnelle).
  o = o.replace(/\r\n*/g, "\n"); // Normalise la séquence saut de ligne Windows (\r\n devient \n) [utile ?].

  if (opts.singleLine === true) {
    o = o.replace(/\n+/g, " "); // Remplace les séquences de saut de ligne par un espace.
  }

  o = o.replace(/\t/g, " "); // Remplace tab par espace.
  o = o.replace(/^\x20+|\x20+$/gm, ""); // Supprime espaces en début et fin de lignes.
  o = o.replace(/^\n+|\n+$/g, ""); // Supprime les sauts de lignes et début et fin de document.
  o = o.replace(/(\n){3,}/g, "\n\n"); // Remplace 3+ sauts de ligne par 2 sauts de ligne.
  o = o.replace(/(\x20)(,|\.(?!\.{2}))/g, "$2"); // Enlève espace devant virgule ou point (mais pas ...)
  o = o.replace(/…/g, "...");
  o = o.replace(/[’‘]/g, "'");
  o = o.replace(/[“”]/g, '"');
  o = o.replace(/(\s)-([\s\,])/g, "$1–$2"); // Remplace un tiret par un demi-cadratin lorsqu'il est entouré d'espaces.
  o = replaceOe(o); // Replace oe par œ.

  // Normalise les guillemets français
  o = o.replace(/\xAB\x20*/g, "« ");
  o = o.replace(/\x20*\xBB/g, " »");
  o = o.replace(/((")(?![^<]*>))([^"]*)((")(?![^<]*>))/g, "« $3 »"); // Remplace les guillemets droits par des guillemets français sauf à l'intérieur des tags HTML.

  o = o.replace(/([^\n])(\n{3,})([^\n])/g, "$1\n$3"); // ?
  o = o.replace(/\x20{2,}/gm, " "); // Remplace 2+ espaces par 1 espace (NB : on utilise `\x20` plutôt que `\s`, pour préserver les sauts de paragraphe markdown.)
  o = o.replace(/(^\x20|\x20$)/gm, ""); // Retire espace en début et fin de chaque ligne

  // Décodage des séquences protégées
  o = unprotect(o);
  return o;
}

export default cudm;
