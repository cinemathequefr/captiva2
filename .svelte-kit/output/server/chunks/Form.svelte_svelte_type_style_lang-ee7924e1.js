import { f as noop, h as safe_not_equal } from "./index-432ba86e.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var browserCookies = {};
(function(exports2) {
  exports2.defaults = {};
  exports2.set = function(name, value, options) {
    var opts = options || {};
    var defaults = exports2.defaults;
    var expires = opts.expires || defaults.expires;
    var domain = opts.domain || defaults.domain;
    var path = opts.path !== void 0 ? opts.path : defaults.path !== void 0 ? defaults.path : "/";
    var secure = opts.secure !== void 0 ? opts.secure : defaults.secure;
    var httponly = opts.httponly !== void 0 ? opts.httponly : defaults.httponly;
    var samesite = opts.samesite !== void 0 ? opts.samesite : defaults.samesite;
    var expDate = expires ? new Date(typeof expires === "number" ? new Date().getTime() + expires * 864e5 : expires) : 0;
    document.cookie = name.replace(/[^+#$&^`|]/g, encodeURIComponent).replace("(", "%28").replace(")", "%29") + "=" + value.replace(/[^+#$&/:<-\[\]-}]/g, encodeURIComponent) + (expDate && expDate.getTime() >= 0 ? ";expires=" + expDate.toUTCString() : "") + (domain ? ";domain=" + domain : "") + (path ? ";path=" + path : "") + (secure ? ";secure" : "") + (httponly ? ";httponly" : "") + (samesite ? ";samesite=" + samesite : "");
  };
  exports2.get = function(name) {
    var cookies = document.cookie.split(";");
    while (cookies.length) {
      var cookie = cookies.pop();
      var separatorIndex = cookie.indexOf("=");
      separatorIndex = separatorIndex < 0 ? cookie.length : separatorIndex;
      var cookie_name = decodeURIComponent(cookie.slice(0, separatorIndex).replace(/^\s+/, ""));
      if (cookie_name === name) {
        return decodeURIComponent(cookie.slice(separatorIndex + 1));
      }
    }
    return null;
  };
  exports2.erase = function(name, options) {
    exports2.set(name, "", {
      expires: -1,
      domain: options && options.domain,
      path: options && options.path,
      secure: 0,
      httponly: 0
    });
  };
  exports2.all = function() {
    var all = {};
    var cookies = document.cookie.split(";");
    while (cookies.length) {
      var cookie = cookies.pop();
      var separatorIndex = cookie.indexOf("=");
      separatorIndex = separatorIndex < 0 ? cookie.length : separatorIndex;
      var cookie_name = decodeURIComponent(cookie.slice(0, separatorIndex).replace(/^\s+/, ""));
      all[cookie_name] = decodeURIComponent(cookie.slice(separatorIndex + 1));
    }
    return all;
  };
})(browserCookies);
var bundle = {};
(function(exports) {
  !function(r, e) {
    for (var _ in e)
      r[_] = e[_];
    e.__esModule && Object.defineProperty(r, "__esModule", { value: true });
  }(exports, (() => {
    var __webpack_modules__ = { 607: (module, exports, __webpack_require__) => {
      Object.defineProperty(exports, "__esModule", { value: true });
      var serializer_1 = __webpack_require__(810), deserializer_1 = __webpack_require__(496), Module;
      typeof process != "undefined" && process.release.name === "node" && (Module = eval("require")("module"));
      var ESSerializer = function() {
        function r() {
        }
        return r.throwErrorIfInNonNodeEnvironment = function() {
          if (!Module)
            throw new Error("Cannot intercept require in non-Node environment.");
        }, r.interceptRequire = function() {
          this.isRequireIntercepted || (this.isRequireIntercepted = true, this.throwErrorIfInNonNodeEnvironment(), r.originRequire = Module.prototype.require, Module.prototype.require = function() {
            var e = r.originRequire.apply(this, arguments), _ = e.name;
            return r.requiredClasses[_] || (r.requiredClasses[_] = e), e;
          });
        }, r.stopInterceptRequire = function() {
          this.throwErrorIfInNonNodeEnvironment(), Module.prototype.require = r.originRequire, this.isRequireIntercepted = false;
        }, r.isInterceptingRequire = function() {
          return this.isRequireIntercepted;
        }, r.getRequiredClasses = function() {
          return this.requiredClasses;
        }, r.clearRequiredClasses = function() {
          this.requiredClasses = {};
        }, r.registerClass = function(r2) {
          this.registeredClasses.push(r2);
        }, r.registerClasses = function(r2) {
          this.registeredClasses = this.registeredClasses.concat(r2);
        }, r.clearRegisteredClasses = function() {
          this.registeredClasses = [];
        }, r.serialize = function(r2, e) {
          return e === void 0 && (e = {}), JSON.stringify(serializer_1.getSerializeValueWithClassName(r2, e));
        }, r.deserialize = function(r2, e, _) {
          return e === void 0 && (e = []), _ === void 0 && (_ = {}), deserializer_1.deserializeFromParsedObj(JSON.parse(r2), Object.values(this.requiredClasses).concat(this.registeredClasses).concat(e), _);
        }, r.originRequire = null, r.isRequireIntercepted = false, r.requiredClasses = {}, r.registeredClasses = [], r;
      }();
      module.exports = ESSerializer;
    }, 917: function(r, e) {
      var _ = this && this.__spreadArrays || function() {
        for (var r2 = 0, e2 = 0, _2 = arguments.length; e2 < _2; e2++)
          r2 += arguments[e2].length;
        var I2 = Array(r2), t2 = 0;
        for (e2 = 0; e2 < _2; e2++)
          for (var n2 = arguments[e2], L2 = 0, A2 = n2.length; L2 < A2; L2++, t2++)
            I2[t2] = n2[L2];
        return I2;
      };
      Object.defineProperty(e, "__esModule", { value: true }), e.TO_STRING_FIELD = e.TIMESTAMP_FIELD = e.OPTIONS_FIELD = e.CLASS_NAME_FIELD = e.BOOLEAN_FIELD = e.ARRAY_FIELD = e.BUILTIN_TYPE_UNDEFINED = e.BUILTIN_TYPE_NOT_FINITE = e.BUILTIN_TYPE_BIG_INT = e.BUILTIN_CLASS_AGGREGATE_ERROR = e.BUILTIN_CLASS_URI_ERROR = e.BUILTIN_CLASS_TYPE_ERROR = e.BUILTIN_CLASS_SYNTAX_ERROR = e.BUILTIN_CLASS_REFERENCE_ERROR = e.BUILTIN_CLASS_RANGE_ERROR = e.BUILTIN_CLASS_EVAL_ERROR = e.BUILTIN_CLASS_ERROR = e.BUILTIN_CLASS_STRING = e.BUILTIN_CLASS_SET = e.BUILTIN_CLASS_REGEXP = e.BUILTIN_CLASS_INTL_RELATIVETIMEFORMAT = e.BUILTIN_CLASS_INTL_PLURALRULES = e.BUILTIN_CLASS_INTL_NUMBERFORMAT = e.BUILTIN_CLASS_INTL_LOCALE = e.BUILTIN_CLASS_INTL_LISTFORMAT = e.BUILTIN_CLASS_INTL_DATETIMEFORMAT = e.BUILTIN_CLASS_INTL_COLLATOR = e.BUILTIN_CLASS_DATE = e.BUILTIN_CLASS_DATAVIEW = e.BUILTIN_CLASS_BOOLEAN = e.BUILTIN_CLASS_SHAREDARRAYBUFFER = e.BUILTIN_CLASS_ARRAYBUFFER = e.BUILTIN_CLASS_BIGUINT64ARRAY = e.BUILTIN_CLASS_BIGINT64ARRAY = e.BUILTIN_CLASS_FLOAT64ARRAY = e.BUILTIN_CLASS_FLOAT32ARRAY = e.BUILTIN_CLASS_UINT32ARRAY = e.BUILTIN_CLASS_INT32ARRAY = e.BUILTIN_CLASS_UINT16ARRAY = e.BUILTIN_CLASS_INT16ARRAY = e.BUILTIN_CLASS_UINT8CLAMPEDARRAY = e.BUILTIN_CLASS_UINT8ARRAY = e.BUILTIN_CLASS_INT8ARRAY = e.CLASSNAMES_WHOSE_ENUMERABLE_PROPERTIES_SHOULD_BE_IGNORED = e.ALL_BUILTIN_INTLS = e.ALL_BUILTIN_ERRORS = e.ALL_BUILTIN_ARRAYS = e.ESSERIALIZER_NULL = void 0, e.ESSERIALIZER_NULL = "__ESSERIALIZER_NULL__", e.ARRAY_FIELD = "ess_arr", e.BOOLEAN_FIELD = "ess_bool", e.CLASS_NAME_FIELD = "ess_cn", e.OPTIONS_FIELD = "ess_opt", e.TIMESTAMP_FIELD = "ess_ts", e.TO_STRING_FIELD = "ess_str";
      var I = "Int8Array";
      e.BUILTIN_CLASS_INT8ARRAY = I;
      var t = "Uint8Array";
      e.BUILTIN_CLASS_UINT8ARRAY = t;
      var n = "Uint8ClampedArray";
      e.BUILTIN_CLASS_UINT8CLAMPEDARRAY = n;
      var L = "Int16Array";
      e.BUILTIN_CLASS_INT16ARRAY = L;
      var A = "Uint16Array";
      e.BUILTIN_CLASS_UINT16ARRAY = A;
      var a = "Int32Array";
      e.BUILTIN_CLASS_INT32ARRAY = a;
      var S = "Uint32Array";
      e.BUILTIN_CLASS_UINT32ARRAY = S;
      var R = "Float32Array";
      e.BUILTIN_CLASS_FLOAT32ARRAY = R;
      var i = "Float64Array";
      e.BUILTIN_CLASS_FLOAT64ARRAY = i;
      var o = "BigInt64Array";
      e.BUILTIN_CLASS_BIGINT64ARRAY = o;
      var T = "BigUint64Array";
      e.BUILTIN_CLASS_BIGUINT64ARRAY = T, e.BUILTIN_CLASS_ARRAYBUFFER = "ArrayBuffer", e.BUILTIN_CLASS_SHAREDARRAYBUFFER = "SharedArrayBuffer", e.BUILTIN_CLASS_BOOLEAN = "Boolean", e.BUILTIN_CLASS_DATAVIEW = "DataView", e.BUILTIN_CLASS_DATE = "Date";
      var s = "Collator";
      e.BUILTIN_CLASS_INTL_COLLATOR = s;
      var E = "DateTimeFormat";
      e.BUILTIN_CLASS_INTL_DATETIMEFORMAT = E;
      var N = "ListFormat";
      e.BUILTIN_CLASS_INTL_LISTFORMAT = N, e.BUILTIN_CLASS_INTL_LOCALE = "Locale";
      var u = "NumberFormat";
      e.BUILTIN_CLASS_INTL_NUMBERFORMAT = u;
      var c = "PluralRules";
      e.BUILTIN_CLASS_INTL_PLURALRULES = c;
      var U = "RelativeTimeFormat";
      e.BUILTIN_CLASS_INTL_RELATIVETIMEFORMAT = U, e.BUILTIN_CLASS_REGEXP = "RegExp", e.BUILTIN_CLASS_SET = "Set";
      var B = "String";
      e.BUILTIN_CLASS_STRING = B;
      var l = "Error";
      e.BUILTIN_CLASS_ERROR = l;
      var C = "EvalError";
      e.BUILTIN_CLASS_EVAL_ERROR = C;
      var f = "RangeError";
      e.BUILTIN_CLASS_RANGE_ERROR = f;
      var O = "ReferenceError";
      e.BUILTIN_CLASS_REFERENCE_ERROR = O;
      var F = "SyntaxError";
      e.BUILTIN_CLASS_SYNTAX_ERROR = F;
      var p = "TypeError";
      e.BUILTIN_CLASS_TYPE_ERROR = p;
      var d = "URIError";
      e.BUILTIN_CLASS_URI_ERROR = d;
      var v = "AggregateError";
      e.BUILTIN_CLASS_AGGREGATE_ERROR = v, e.BUILTIN_TYPE_BIG_INT = "BI", e.BUILTIN_TYPE_NOT_FINITE = "NF", e.BUILTIN_TYPE_UNDEFINED = "UD";
      var D = [I, t, n, L, A, a, S, R, i, o, T];
      e.ALL_BUILTIN_ARRAYS = D;
      var y = [l, C, f, O, F, p, d, v];
      e.ALL_BUILTIN_ERRORS = y;
      var g = [s, E, N, u, c, U];
      e.ALL_BUILTIN_INTLS = g;
      var Y = _([B], D);
      e.CLASSNAMES_WHOSE_ENUMERABLE_PROPERTIES_SHOULD_BE_IGNORED = Y;
    }, 496: function(r, e, _) {
      var I = this && this.__spreadArrays || function() {
        for (var r2 = 0, e2 = 0, _2 = arguments.length; e2 < _2; e2++)
          r2 += arguments[e2].length;
        var I2 = Array(r2), t2 = 0;
        for (e2 = 0; e2 < _2; e2++)
          for (var n2 = arguments[e2], L2 = 0, A2 = n2.length; L2 < A2; L2++, t2++)
            I2[t2] = n2[L2];
        return I2;
      };
      Object.defineProperty(e, "__esModule", { value: true }), e.getParentClassName = e.getClassMappingFromClassArray = e.deserializeFromParsedObjWithClassMapping = e.deserializeFromParsedObj = void 0;
      var t = _(821), n = _(917), L = /^\s*class\s+/;
      function A(r2, e2, _2) {
        if (_2 === void 0 && (_2 = {}), t.notObject(r2))
          return r2;
        if (Array.isArray(r2))
          return a(r2, e2);
        var N2 = r2[n.CLASS_NAME_FIELD], u = function(r3, e3, _3) {
          switch (r3) {
            case n.BUILTIN_CLASS_INT8ARRAY:
              return S(e3[n.ARRAY_FIELD], Int8Array);
            case n.BUILTIN_CLASS_UINT8ARRAY:
              return S(e3[n.ARRAY_FIELD], Uint8Array);
            case n.BUILTIN_CLASS_UINT8CLAMPEDARRAY:
              return S(e3[n.ARRAY_FIELD], Uint8ClampedArray);
            case n.BUILTIN_CLASS_INT16ARRAY:
              return S(e3[n.ARRAY_FIELD], Int16Array);
            case n.BUILTIN_CLASS_UINT16ARRAY:
              return S(e3[n.ARRAY_FIELD], Uint16Array);
            case n.BUILTIN_CLASS_INT32ARRAY:
              return S(e3[n.ARRAY_FIELD], Int32Array);
            case n.BUILTIN_CLASS_UINT32ARRAY:
              return S(e3[n.ARRAY_FIELD], Uint32Array);
            case n.BUILTIN_CLASS_FLOAT32ARRAY:
              return S(e3[n.ARRAY_FIELD], Float32Array);
            case n.BUILTIN_CLASS_FLOAT64ARRAY:
              return S(e3[n.ARRAY_FIELD], Float64Array);
            case n.BUILTIN_CLASS_BIGINT64ARRAY:
              return R(e3[n.ARRAY_FIELD], BigInt64Array);
            case n.BUILTIN_CLASS_BIGUINT64ARRAY:
              return R(e3[n.ARRAY_FIELD], BigUint64Array);
            case n.BUILTIN_TYPE_BIG_INT:
              return i(e3[n.TO_STRING_FIELD]);
            case n.BUILTIN_TYPE_UNDEFINED:
              return;
            case n.BUILTIN_TYPE_NOT_FINITE:
              return t.getValueFromToStringResult(e3[n.TO_STRING_FIELD]);
            case n.BUILTIN_CLASS_ARRAYBUFFER:
              return I2 = e3[n.ARRAY_FIELD], new Uint8Array(I2).buffer;
            case n.BUILTIN_CLASS_SHAREDARRAYBUFFER:
              return function(r4) {
                var e4 = new SharedArrayBuffer(r4.length), _4 = new Uint8Array(e4);
                return r4.forEach(function(r5, e5) {
                  _4[e5] = r5;
                }), e4;
              }(e3[n.ARRAY_FIELD]);
            case n.BUILTIN_CLASS_BOOLEAN:
              return function(r4) {
                return new Boolean(r4[n.BOOLEAN_FIELD]);
              }(e3);
            case n.BUILTIN_CLASS_DATAVIEW:
              return function(r4) {
                return new DataView(new Uint8Array(r4).buffer);
              }(e3[n.ARRAY_FIELD]);
            case n.BUILTIN_CLASS_DATE:
              return function(r4) {
                return typeof r4[n.TIMESTAMP_FIELD] == "number" ? new Date(r4[n.TIMESTAMP_FIELD]) : null;
              }(e3);
            case n.BUILTIN_CLASS_INTL_COLLATOR:
              return o(e3, Intl.Collator);
            case n.BUILTIN_CLASS_INTL_DATETIMEFORMAT:
              return o(e3, Intl.DateTimeFormat);
            case n.BUILTIN_CLASS_INTL_LISTFORMAT:
              return o(e3, Intl.ListFormat);
            case n.BUILTIN_CLASS_INTL_LOCALE:
              return new Intl.Locale(e3[n.TO_STRING_FIELD]);
            case n.BUILTIN_CLASS_INTL_NUMBERFORMAT:
              return o(e3, Intl.NumberFormat);
            case n.BUILTIN_CLASS_INTL_PLURALRULES:
              return o(e3, Intl.PluralRules);
            case n.BUILTIN_CLASS_INTL_RELATIVETIMEFORMAT:
              return o(e3, Intl.RelativeTimeFormat);
            case n.BUILTIN_CLASS_REGEXP:
              return function(r4) {
                var e4 = r4[n.TO_STRING_FIELD], _4 = e4.lastIndexOf("/");
                return new RegExp(e4.substring(1, _4), e4.substring(_4 + 1));
              }(e3);
            case n.BUILTIN_CLASS_SET:
              return function(r4, e4) {
                return new Set(a(r4[n.ARRAY_FIELD], e4));
              }(e3, _3);
            case n.BUILTIN_CLASS_STRING:
              return function(r4) {
                return new String(r4[n.TO_STRING_FIELD]);
              }(e3);
            case n.BUILTIN_CLASS_ERROR:
              return T(e3, Error);
            case n.BUILTIN_CLASS_EVAL_ERROR:
              return T(e3, EvalError);
            case n.BUILTIN_CLASS_RANGE_ERROR:
              return T(e3, RangeError);
            case n.BUILTIN_CLASS_REFERENCE_ERROR:
              return T(e3, ReferenceError);
            case n.BUILTIN_CLASS_SYNTAX_ERROR:
              return T(e3, SyntaxError);
            case n.BUILTIN_CLASS_TYPE_ERROR:
              return T(e3, TypeError);
            case n.BUILTIN_CLASS_URI_ERROR:
              return T(e3, URIError);
            case n.BUILTIN_CLASS_AGGREGATE_ERROR:
              return T(e3, AggregateError);
            default:
              return n.ESSERIALIZER_NULL;
          }
          var I2;
        }(N2, r2, e2);
        if (u !== n.ESSERIALIZER_NULL)
          return u;
        if (N2 && !e2[N2])
          throw new Error("Class " + N2 + " not found");
        var c = [];
        return _2.fieldsForConstructorParameters && (c = _2.fieldsForConstructorParameters.map(function(e3) {
          return e3 in r2 ? r2[e3] : {};
        })), function(r3, e3, _3, I2) {
          for (var t2 in e3) {
            var L2 = e3[t2];
            if (!I2.ignoreProperties || !I2.ignoreProperties.includes(t2))
              if (I2.rawProperties && I2.rawProperties.includes(t2))
                r3[t2] = JSON.stringify(L2);
              else {
                var a2 = Object.getOwnPropertyDescriptor(r3, t2);
                S2 = L2, R2 = a2, t2 === n.CLASS_NAME_FIELD || R2 && (typeof R2.set == "function" || R2.writable === false && typeof S2 != "object") || (a2 && a2.writable === false && typeof L2 == "object" ? E(r3[t2], L2, _3) : r3[t2] = A(L2, _3));
              }
          }
          var S2, R2;
          return r3;
        }(function(r3, e3) {
          var _3 = {};
          if (!r3)
            return _3;
          var t2 = r3.length - e3.length;
          if (t2 > 0 && (e3 = e3.concat(Array.from(Array(t2), function() {
            return {};
          }))), L.test(r3.toString()))
            try {
              _3 = new (r3.bind.apply(r3, I([void 0], e3)))();
            } catch (e4) {
              s(r3.name), _3 = {}, Object.setPrototypeOf(_3, r3 ? r3.prototype : Object.prototype);
            }
          else {
            _3 = Object.create(r3.prototype.constructor.prototype);
            try {
              r3.prototype.constructor.call(_3, e3);
            } catch (e4) {
              s(r3.name);
            }
          }
          return _3;
        }(e2[N2], c), r2, e2, _2);
      }
      function a(r2, e2) {
        return r2.map(function(r3) {
          return A(r3, e2);
        });
      }
      function S(r2, e2) {
        return new e2(r2);
      }
      function R(r2, e2) {
        return new e2(r2.map(function(r3) {
          return i(r3[n.TO_STRING_FIELD]);
        }));
      }
      function i(r2) {
        return BigInt(r2);
      }
      function o(r2, e2) {
        var _2 = r2[n.OPTIONS_FIELD], I2 = _2.locale;
        return delete _2.locale, new e2(I2, _2);
      }
      function T(r2, e2) {
        var _2;
        return delete (_2 = r2.message ? new e2(r2.message) : new e2()).stack, r2.name && (_2.name = r2.name), r2.stack && (_2.stack = r2.stack), e2 === AggregateError && (_2.errors = A(r2.errors, {})), _2;
      }
      function s(r2) {
        console.warn("Incorrect parameter type passed to constructor: " + r2);
      }
      function E(r2, e2, _2) {
        for (var I2 in e2) {
          var t2 = Object.getOwnPropertyDescriptor(r2, I2);
          t2 && t2.writable !== true && typeof t2.set != "function" || (r2[I2] = A(e2[I2], _2));
        }
      }
      function N(r2) {
        r2 === void 0 && (r2 = []);
        var e2 = {};
        return r2.forEach(function(r3) {
          if (t.isClass(r3)) {
            var _2 = r3.name, I2 = e2[_2];
            I2 && I2 !== r3 && console.warn("WARNING: Found class definition with the same name: " + _2), e2[_2] = r3;
          }
        }), e2;
      }
      e.deserializeFromParsedObj = function(r2, e2, _2) {
        return A(r2, N(e2), _2);
      }, e.deserializeFromParsedObjWithClassMapping = A, e.getClassMappingFromClassArray = N, e.getParentClassName = function(r2) {
        return r2.prototype.__proto__.constructor.name;
      };
    }, 821: (r, e) => {
      Object.defineProperty(e, "__esModule", { value: true }), e.isClass = e.notObject = e.getValueFromToStringResult = void 0, e.notObject = function(r2) {
        return r2 === null || typeof r2 != "object";
      }, e.getValueFromToStringResult = function(r2) {
        switch (r2) {
          case "Infinity":
            return 1 / 0;
          case "-Infinity":
            return -1 / 0;
          case "NaN":
            return NaN;
          default:
            return null;
        }
      }, e.isClass = function(r2) {
        if (function(r3) {
          return [Date].indexOf(r3) >= 0;
        }(r2))
          return true;
        try {
          Reflect.construct(String, [], r2);
        } catch (r3) {
          return false;
        }
        return true;
      };
    }, 810: (r, e, _) => {
      Object.defineProperty(e, "__esModule", { value: true }), e.getSerializeValueWithClassName = void 0;
      var I = _(917), t = _(821);
      function n(r2, e2) {
        e2 === void 0 && (e2 = {});
        var _2 = function(r3) {
          var e3, _3, n2;
          return r3 === void 0 ? ((e3 = {})[I.CLASS_NAME_FIELD] = I.BUILTIN_TYPE_UNDEFINED, e3) : typeof r3 != "number" || isFinite(r3) ? typeof r3 == "bigint" ? ((n2 = {})[I.CLASS_NAME_FIELD] = I.BUILTIN_TYPE_BIG_INT, n2[I.TO_STRING_FIELD] = r3.toString(), n2) : t.notObject(r3) ? r3 : I.ESSERIALIZER_NULL : ((_3 = {})[I.CLASS_NAME_FIELD] = I.BUILTIN_TYPE_NOT_FINITE, _3[I.TO_STRING_FIELD] = r3.toString(), _3);
        }(r2);
        if (_2 !== I.ESSERIALIZER_NULL)
          return _2;
        if (Array.isArray(r2))
          return L(r2);
        var A = {};
        if (!function(r3) {
          var e3 = r3.__proto__.constructor.name;
          return I.CLASSNAMES_WHOSE_ENUMERABLE_PROPERTIES_SHOULD_BE_IGNORED.includes(e3);
        }(r2)) {
          if (e2.ignoreProperties && e2.ignoreProperties.forEach(function(e3) {
            delete r2[e3];
          }), e2.interceptProperties)
            for (var a in e2.interceptProperties)
              r2[a] = e2.interceptProperties[a].call(r2, r2[a]);
          for (var S in r2)
            A[S] = n(r2[S]);
        }
        return function(r3, e3) {
          var _3 = r3.__proto__.constructor.name;
          return _3 !== "Object" && (e3[I.CLASS_NAME_FIELD] = _3, _3 === I.BUILTIN_CLASS_ARRAYBUFFER || _3 === I.BUILTIN_CLASS_SHAREDARRAYBUFFER ? e3[I.ARRAY_FIELD] = L(Array.from(new Uint8Array(r3))) : _3 === I.BUILTIN_CLASS_BOOLEAN ? e3[I.BOOLEAN_FIELD] = r3.valueOf() : _3 === I.BUILTIN_CLASS_DATAVIEW ? e3[I.ARRAY_FIELD] = L(Array.from(new Uint8Array(r3.buffer))) : _3 === I.BUILTIN_CLASS_DATE ? e3[I.TIMESTAMP_FIELD] = r3.getTime() : _3 === I.BUILTIN_CLASS_INTL_LOCALE || _3 === I.BUILTIN_CLASS_REGEXP ? e3[I.TO_STRING_FIELD] = r3.toString() : _3 === I.BUILTIN_CLASS_SET ? e3[I.ARRAY_FIELD] = L(Array.from(r3)) : _3 === I.BUILTIN_CLASS_STRING ? e3[I.TO_STRING_FIELD] = r3.toString() : I.ALL_BUILTIN_ARRAYS.includes(_3) ? e3[I.ARRAY_FIELD] = L(Array.from(r3)) : I.ALL_BUILTIN_ERRORS.includes(_3) ? function(r4, e4, _4) {
            r4.name !== "Error" && (e4.name = r4.name), r4.message && (e4.message = r4.message), r4.stack && (e4.stack = r4.stack), _4 === I.BUILTIN_CLASS_AGGREGATE_ERROR && (e4.errors = n(r4.errors));
          }(r3, e3, _3) : I.ALL_BUILTIN_INTLS.includes(_3) && (e3[I.OPTIONS_FIELD] = r3.resolvedOptions())), e3;
        }(r2, A);
      }
      function L(r2) {
        return r2.map(function(r3) {
          return n(r3);
        });
      }
      e.getSerializeValueWithClassName = n;
    } }, __webpack_module_cache__ = {};
    function __webpack_require__(r) {
      if (__webpack_module_cache__[r])
        return __webpack_module_cache__[r].exports;
      var e = __webpack_module_cache__[r] = { exports: {} };
      return __webpack_modules__[r].call(e.exports, e, e.exports, __webpack_require__), e.exports;
    }
    return __webpack_require__(607);
  })());
})(bundle);
var ESSerializer = /* @__PURE__ */ getDefaultExportFromCjs(bundle);
const alreadyWarnFor = [];
const warnStorageNotFound = (storageName) => {
  var _a;
  const isProduction = typeof process !== "undefined" && ((_a = process.env) === null || _a === void 0 ? void 0 : _a.NODE_ENV) === "production";
  if (alreadyWarnFor.indexOf(storageName) === -1 && !isProduction) {
    let message = `Unable to find the ${storageName}. No data will be persisted.`;
    if (typeof window === "undefined") {
      message += "\nAre you running on a server? Most of storages are not available while running on a server.";
    }
    console.warn(message);
    alreadyWarnFor.push(storageName);
  }
};
const allowedClasses = [];
const serialize = (value) => ESSerializer.serialize(value);
const deserialize = (value) => {
  if (value === "undefined") {
    return void 0;
  }
  if (value !== null && value !== void 0) {
    try {
      return ESSerializer.deserialize(value, allowedClasses);
    } catch (e) {
    }
    try {
      return JSON.parse(value);
    } catch (e) {
    }
  }
  return value;
};
function persist(store, storage, key) {
  const initialValue = storage.getValue(key);
  if (initialValue !== null) {
    store.set(initialValue);
  }
  if (storage.addListener) {
    storage.addListener(key, (newValue) => {
      store.set(newValue);
    });
  }
  store.subscribe((value) => {
    storage.setValue(key, value);
  });
  return Object.assign(Object.assign({}, store), { delete() {
    storage.deleteValue(key);
  } });
}
function getBrowserStorage(browserStorage, listenExternalChanges = false) {
  const listeners = [];
  const listenerFunction = (event) => {
    const eventKey = event.key;
    if (event.storageArea === browserStorage) {
      listeners.filter(({ key }) => key === eventKey).forEach(({ listener }) => {
        listener(deserialize(event.newValue));
      });
    }
  };
  const connect = () => {
    if (listenExternalChanges && typeof window !== "undefined" && (window === null || window === void 0 ? void 0 : window.addEventListener)) {
      window.addEventListener("storage", listenerFunction);
    }
  };
  const disconnect = () => {
    if (listenExternalChanges && typeof window !== "undefined" && (window === null || window === void 0 ? void 0 : window.removeEventListener)) {
      window.removeEventListener("storage", listenerFunction);
    }
  };
  return {
    addListener(key, listener) {
      listeners.push({ key, listener });
      if (listeners.length === 1) {
        connect();
      }
    },
    removeListener(key, listener) {
      const index = listeners.indexOf({ key, listener });
      if (index !== -1) {
        listeners.splice(index, 1);
      }
      if (listeners.length === 0) {
        disconnect();
      }
    },
    getValue(key) {
      const value = browserStorage.getItem(key);
      return deserialize(value);
    },
    deleteValue(key) {
      browserStorage.removeItem(key);
    },
    setValue(key, value) {
      browserStorage.setItem(key, serialize(value));
    }
  };
}
function localStorage(listenExternalChanges = false) {
  if (typeof window !== "undefined" && (window === null || window === void 0 ? void 0 : window.localStorage)) {
    return getBrowserStorage(window.localStorage, listenExternalChanges);
  }
  warnStorageNotFound("window.localStorage");
  return noopStorage();
}
function sessionStorage(listenExternalChanges = false) {
  if (typeof window !== "undefined" && (window === null || window === void 0 ? void 0 : window.sessionStorage)) {
    return getBrowserStorage(window.sessionStorage, listenExternalChanges);
  }
  warnStorageNotFound("window.sessionStorage");
  return noopStorage();
}
function noopStorage() {
  return {
    getValue() {
      return null;
    },
    deleteValue() {
    },
    setValue() {
    }
  };
}
const token = persist(writable(""), sessionStorage(), "token");
var Form_svelte_svelte_type_style_lang = "";
export { localStorage as l, persist as p, token as t, writable as w };
