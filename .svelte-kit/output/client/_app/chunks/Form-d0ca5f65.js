import{w as writable}from"./index-b61d425d.js";import{S as SvelteComponent,i as init,s as safe_not_equal,T as create_slot,e as element,c as claim_element,a as children,d as detach,b as attr,g as insert_hydration,I as listen,a0 as prevent_default,U as update_slot_base,V as get_all_dirty_from_scope,W as get_slot_changes,q as transition_in,o as transition_out,v as onMount,O as is_function,L as binding_callbacks}from"./index-c3a06d7b.js";function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var browserCookies={};(function(t){t.defaults={},t.set=function(e,a,n){var I=n||{},r=t.defaults,s=I.expires||r.expires,i=I.domain||r.domain,u=I.path!==void 0?I.path:r.path!==void 0?r.path:"/",l=I.secure!==void 0?I.secure:r.secure,O=I.httponly!==void 0?I.httponly:r.httponly,N=I.samesite!==void 0?I.samesite:r.samesite,d=s?new Date(typeof s=="number"?new Date().getTime()+s*864e5:s):0;document.cookie=e.replace(/[^+#$&^`|]/g,encodeURIComponent).replace("(","%28").replace(")","%29")+"="+a.replace(/[^+#$&/:<-\[\]-}]/g,encodeURIComponent)+(d&&d.getTime()>=0?";expires="+d.toUTCString():"")+(i?";domain="+i:"")+(u?";path="+u:"")+(l?";secure":"")+(O?";httponly":"")+(N?";samesite="+N:"")},t.get=function(e){for(var a=document.cookie.split(";");a.length;){var n=a.pop(),I=n.indexOf("=");I=I<0?n.length:I;var r=decodeURIComponent(n.slice(0,I).replace(/^\s+/,""));if(r===e)return decodeURIComponent(n.slice(I+1))}return null},t.erase=function(e,a){t.set(e,"",{expires:-1,domain:a&&a.domain,path:a&&a.path,secure:0,httponly:0})},t.all=function(){for(var e={},a=document.cookie.split(";");a.length;){var n=a.pop(),I=n.indexOf("=");I=I<0?n.length:I;var r=decodeURIComponent(n.slice(0,I).replace(/^\s+/,""));e[r]=decodeURIComponent(n.slice(I+1))}return e}})(browserCookies);var bundle={};(function(exports){(function(t,e){for(var a in e)t[a]=e[a];e.__esModule&&Object.defineProperty(t,"__esModule",{value:!0})})(exports,(()=>{var __webpack_modules__={607:(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var serializer_1=__webpack_require__(810),deserializer_1=__webpack_require__(496),Module;typeof process!="undefined"&&process.release.name==="node"&&(Module=eval("require")("module"));var ESSerializer=function(){function t(){}return t.throwErrorIfInNonNodeEnvironment=function(){if(!Module)throw new Error("Cannot intercept require in non-Node environment.")},t.interceptRequire=function(){this.isRequireIntercepted||(this.isRequireIntercepted=!0,this.throwErrorIfInNonNodeEnvironment(),t.originRequire=Module.prototype.require,Module.prototype.require=function(){var e=t.originRequire.apply(this,arguments),a=e.name;return t.requiredClasses[a]||(t.requiredClasses[a]=e),e})},t.stopInterceptRequire=function(){this.throwErrorIfInNonNodeEnvironment(),Module.prototype.require=t.originRequire,this.isRequireIntercepted=!1},t.isInterceptingRequire=function(){return this.isRequireIntercepted},t.getRequiredClasses=function(){return this.requiredClasses},t.clearRequiredClasses=function(){this.requiredClasses={}},t.registerClass=function(e){this.registeredClasses.push(e)},t.registerClasses=function(e){this.registeredClasses=this.registeredClasses.concat(e)},t.clearRegisteredClasses=function(){this.registeredClasses=[]},t.serialize=function(e,a){return a===void 0&&(a={}),JSON.stringify(serializer_1.getSerializeValueWithClassName(e,a))},t.deserialize=function(e,a,n){return a===void 0&&(a=[]),n===void 0&&(n={}),deserializer_1.deserializeFromParsedObj(JSON.parse(e),Object.values(this.requiredClasses).concat(this.registeredClasses).concat(a),n)},t.originRequire=null,t.isRequireIntercepted=!1,t.requiredClasses={},t.registeredClasses=[],t}();module.exports=ESSerializer},917:function(t,e){var a=this&&this.__spreadArrays||function(){for(var D=0,w=0,Y=arguments.length;w<Y;w++)D+=arguments[w].length;var b=Array(D),P=0;for(w=0;w<Y;w++)for(var M=arguments[w],h=0,q=M.length;h<q;h++,P++)b[P]=M[h];return b};Object.defineProperty(e,"__esModule",{value:!0}),e.TO_STRING_FIELD=e.TIMESTAMP_FIELD=e.OPTIONS_FIELD=e.CLASS_NAME_FIELD=e.BOOLEAN_FIELD=e.ARRAY_FIELD=e.BUILTIN_TYPE_UNDEFINED=e.BUILTIN_TYPE_NOT_FINITE=e.BUILTIN_TYPE_BIG_INT=e.BUILTIN_CLASS_AGGREGATE_ERROR=e.BUILTIN_CLASS_URI_ERROR=e.BUILTIN_CLASS_TYPE_ERROR=e.BUILTIN_CLASS_SYNTAX_ERROR=e.BUILTIN_CLASS_REFERENCE_ERROR=e.BUILTIN_CLASS_RANGE_ERROR=e.BUILTIN_CLASS_EVAL_ERROR=e.BUILTIN_CLASS_ERROR=e.BUILTIN_CLASS_STRING=e.BUILTIN_CLASS_SET=e.BUILTIN_CLASS_REGEXP=e.BUILTIN_CLASS_INTL_RELATIVETIMEFORMAT=e.BUILTIN_CLASS_INTL_PLURALRULES=e.BUILTIN_CLASS_INTL_NUMBERFORMAT=e.BUILTIN_CLASS_INTL_LOCALE=e.BUILTIN_CLASS_INTL_LISTFORMAT=e.BUILTIN_CLASS_INTL_DATETIMEFORMAT=e.BUILTIN_CLASS_INTL_COLLATOR=e.BUILTIN_CLASS_DATE=e.BUILTIN_CLASS_DATAVIEW=e.BUILTIN_CLASS_BOOLEAN=e.BUILTIN_CLASS_SHAREDARRAYBUFFER=e.BUILTIN_CLASS_ARRAYBUFFER=e.BUILTIN_CLASS_BIGUINT64ARRAY=e.BUILTIN_CLASS_BIGINT64ARRAY=e.BUILTIN_CLASS_FLOAT64ARRAY=e.BUILTIN_CLASS_FLOAT32ARRAY=e.BUILTIN_CLASS_UINT32ARRAY=e.BUILTIN_CLASS_INT32ARRAY=e.BUILTIN_CLASS_UINT16ARRAY=e.BUILTIN_CLASS_INT16ARRAY=e.BUILTIN_CLASS_UINT8CLAMPEDARRAY=e.BUILTIN_CLASS_UINT8ARRAY=e.BUILTIN_CLASS_INT8ARRAY=e.CLASSNAMES_WHOSE_ENUMERABLE_PROPERTIES_SHOULD_BE_IGNORED=e.ALL_BUILTIN_INTLS=e.ALL_BUILTIN_ERRORS=e.ALL_BUILTIN_ARRAYS=e.ESSERIALIZER_NULL=void 0,e.ESSERIALIZER_NULL="__ESSERIALIZER_NULL__",e.ARRAY_FIELD="ess_arr",e.BOOLEAN_FIELD="ess_bool",e.CLASS_NAME_FIELD="ess_cn",e.OPTIONS_FIELD="ess_opt",e.TIMESTAMP_FIELD="ess_ts",e.TO_STRING_FIELD="ess_str";var n="Int8Array";e.BUILTIN_CLASS_INT8ARRAY=n;var I="Uint8Array";e.BUILTIN_CLASS_UINT8ARRAY=I;var r="Uint8ClampedArray";e.BUILTIN_CLASS_UINT8CLAMPEDARRAY=r;var s="Int16Array";e.BUILTIN_CLASS_INT16ARRAY=s;var i="Uint16Array";e.BUILTIN_CLASS_UINT16ARRAY=i;var u="Int32Array";e.BUILTIN_CLASS_INT32ARRAY=u;var l="Uint32Array";e.BUILTIN_CLASS_UINT32ARRAY=l;var O="Float32Array";e.BUILTIN_CLASS_FLOAT32ARRAY=O;var N="Float64Array";e.BUILTIN_CLASS_FLOAT64ARRAY=N;var d="BigInt64Array";e.BUILTIN_CLASS_BIGINT64ARRAY=d;var A="BigUint64Array";e.BUILTIN_CLASS_BIGUINT64ARRAY=A,e.BUILTIN_CLASS_ARRAYBUFFER="ArrayBuffer",e.BUILTIN_CLASS_SHAREDARRAYBUFFER="SharedArrayBuffer",e.BUILTIN_CLASS_BOOLEAN="Boolean",e.BUILTIN_CLASS_DATAVIEW="DataView",e.BUILTIN_CLASS_DATE="Date";var E="Collator";e.BUILTIN_CLASS_INTL_COLLATOR=E;var T="DateTimeFormat";e.BUILTIN_CLASS_INTL_DATETIMEFORMAT=T;var U="ListFormat";e.BUILTIN_CLASS_INTL_LISTFORMAT=U,e.BUILTIN_CLASS_INTL_LOCALE="Locale";var _="NumberFormat";e.BUILTIN_CLASS_INTL_NUMBERFORMAT=_;var L="PluralRules";e.BUILTIN_CLASS_INTL_PLURALRULES=L;var S="RelativeTimeFormat";e.BUILTIN_CLASS_INTL_RELATIVETIMEFORMAT=S,e.BUILTIN_CLASS_REGEXP="RegExp",e.BUILTIN_CLASS_SET="Set";var f="String";e.BUILTIN_CLASS_STRING=f;var p="Error";e.BUILTIN_CLASS_ERROR=p;var v="EvalError";e.BUILTIN_CLASS_EVAL_ERROR=v;var R="RangeError";e.BUILTIN_CLASS_RANGE_ERROR=R;var o="ReferenceError";e.BUILTIN_CLASS_REFERENCE_ERROR=o;var B="SyntaxError";e.BUILTIN_CLASS_SYNTAX_ERROR=B;var m="TypeError";e.BUILTIN_CLASS_TYPE_ERROR=m;var c="URIError";e.BUILTIN_CLASS_URI_ERROR=c;var C="AggregateError";e.BUILTIN_CLASS_AGGREGATE_ERROR=C,e.BUILTIN_TYPE_BIG_INT="BI",e.BUILTIN_TYPE_NOT_FINITE="NF",e.BUILTIN_TYPE_UNDEFINED="UD";var g=[n,I,r,s,i,u,l,O,N,d,A];e.ALL_BUILTIN_ARRAYS=g;var y=[p,v,R,o,B,m,c,C];e.ALL_BUILTIN_ERRORS=y;var F=[E,T,U,_,L,S];e.ALL_BUILTIN_INTLS=F;var G=a([f],g);e.CLASSNAMES_WHOSE_ENUMERABLE_PROPERTIES_SHOULD_BE_IGNORED=G},496:function(t,e,a){var n=this&&this.__spreadArrays||function(){for(var _=0,L=0,S=arguments.length;L<S;L++)_+=arguments[L].length;var f=Array(_),p=0;for(L=0;L<S;L++)for(var v=arguments[L],R=0,o=v.length;R<o;R++,p++)f[p]=v[R];return f};Object.defineProperty(e,"__esModule",{value:!0}),e.getParentClassName=e.getClassMappingFromClassArray=e.deserializeFromParsedObjWithClassMapping=e.deserializeFromParsedObj=void 0;var I=a(821),r=a(917),s=/^\s*class\s+/;function i(_,L,S){if(S===void 0&&(S={}),I.notObject(_))return _;if(Array.isArray(_))return u(_,L);var f=_[r.CLASS_NAME_FIELD],p=function(R,o,B){switch(R){case r.BUILTIN_CLASS_INT8ARRAY:return l(o[r.ARRAY_FIELD],Int8Array);case r.BUILTIN_CLASS_UINT8ARRAY:return l(o[r.ARRAY_FIELD],Uint8Array);case r.BUILTIN_CLASS_UINT8CLAMPEDARRAY:return l(o[r.ARRAY_FIELD],Uint8ClampedArray);case r.BUILTIN_CLASS_INT16ARRAY:return l(o[r.ARRAY_FIELD],Int16Array);case r.BUILTIN_CLASS_UINT16ARRAY:return l(o[r.ARRAY_FIELD],Uint16Array);case r.BUILTIN_CLASS_INT32ARRAY:return l(o[r.ARRAY_FIELD],Int32Array);case r.BUILTIN_CLASS_UINT32ARRAY:return l(o[r.ARRAY_FIELD],Uint32Array);case r.BUILTIN_CLASS_FLOAT32ARRAY:return l(o[r.ARRAY_FIELD],Float32Array);case r.BUILTIN_CLASS_FLOAT64ARRAY:return l(o[r.ARRAY_FIELD],Float64Array);case r.BUILTIN_CLASS_BIGINT64ARRAY:return O(o[r.ARRAY_FIELD],BigInt64Array);case r.BUILTIN_CLASS_BIGUINT64ARRAY:return O(o[r.ARRAY_FIELD],BigUint64Array);case r.BUILTIN_TYPE_BIG_INT:return N(o[r.TO_STRING_FIELD]);case r.BUILTIN_TYPE_UNDEFINED:return;case r.BUILTIN_TYPE_NOT_FINITE:return I.getValueFromToStringResult(o[r.TO_STRING_FIELD]);case r.BUILTIN_CLASS_ARRAYBUFFER:return m=o[r.ARRAY_FIELD],new Uint8Array(m).buffer;case r.BUILTIN_CLASS_SHAREDARRAYBUFFER:return function(c){var C=new SharedArrayBuffer(c.length),g=new Uint8Array(C);return c.forEach(function(y,F){g[F]=y}),C}(o[r.ARRAY_FIELD]);case r.BUILTIN_CLASS_BOOLEAN:return function(c){return new Boolean(c[r.BOOLEAN_FIELD])}(o);case r.BUILTIN_CLASS_DATAVIEW:return function(c){return new DataView(new Uint8Array(c).buffer)}(o[r.ARRAY_FIELD]);case r.BUILTIN_CLASS_DATE:return function(c){return typeof c[r.TIMESTAMP_FIELD]=="number"?new Date(c[r.TIMESTAMP_FIELD]):null}(o);case r.BUILTIN_CLASS_INTL_COLLATOR:return d(o,Intl.Collator);case r.BUILTIN_CLASS_INTL_DATETIMEFORMAT:return d(o,Intl.DateTimeFormat);case r.BUILTIN_CLASS_INTL_LISTFORMAT:return d(o,Intl.ListFormat);case r.BUILTIN_CLASS_INTL_LOCALE:return new Intl.Locale(o[r.TO_STRING_FIELD]);case r.BUILTIN_CLASS_INTL_NUMBERFORMAT:return d(o,Intl.NumberFormat);case r.BUILTIN_CLASS_INTL_PLURALRULES:return d(o,Intl.PluralRules);case r.BUILTIN_CLASS_INTL_RELATIVETIMEFORMAT:return d(o,Intl.RelativeTimeFormat);case r.BUILTIN_CLASS_REGEXP:return function(c){var C=c[r.TO_STRING_FIELD],g=C.lastIndexOf("/");return new RegExp(C.substring(1,g),C.substring(g+1))}(o);case r.BUILTIN_CLASS_SET:return function(c,C){return new Set(u(c[r.ARRAY_FIELD],C))}(o,B);case r.BUILTIN_CLASS_STRING:return function(c){return new String(c[r.TO_STRING_FIELD])}(o);case r.BUILTIN_CLASS_ERROR:return A(o,Error);case r.BUILTIN_CLASS_EVAL_ERROR:return A(o,EvalError);case r.BUILTIN_CLASS_RANGE_ERROR:return A(o,RangeError);case r.BUILTIN_CLASS_REFERENCE_ERROR:return A(o,ReferenceError);case r.BUILTIN_CLASS_SYNTAX_ERROR:return A(o,SyntaxError);case r.BUILTIN_CLASS_TYPE_ERROR:return A(o,TypeError);case r.BUILTIN_CLASS_URI_ERROR:return A(o,URIError);case r.BUILTIN_CLASS_AGGREGATE_ERROR:return A(o,AggregateError);default:return r.ESSERIALIZER_NULL}var m}(f,_,L);if(p!==r.ESSERIALIZER_NULL)return p;if(f&&!L[f])throw new Error("Class "+f+" not found");var v=[];return S.fieldsForConstructorParameters&&(v=S.fieldsForConstructorParameters.map(function(R){return R in _?_[R]:{}})),function(R,o,B,m){for(var c in o){var C=o[c];if(!m.ignoreProperties||!m.ignoreProperties.includes(c))if(m.rawProperties&&m.rawProperties.includes(c))R[c]=JSON.stringify(C);else{var g=Object.getOwnPropertyDescriptor(R,c);y=C,F=g,c===r.CLASS_NAME_FIELD||F&&(typeof F.set=="function"||F.writable===!1&&typeof y!="object")||(g&&g.writable===!1&&typeof C=="object"?T(R[c],C,B):R[c]=i(C,B))}}var y,F;return R}(function(R,o){var B={};if(!R)return B;var m=R.length-o.length;if(m>0&&(o=o.concat(Array.from(Array(m),function(){return{}}))),s.test(R.toString()))try{B=new(R.bind.apply(R,n([void 0],o)))}catch{E(R.name),B={},Object.setPrototypeOf(B,R?R.prototype:Object.prototype)}else{B=Object.create(R.prototype.constructor.prototype);try{R.prototype.constructor.call(B,o)}catch{E(R.name)}}return B}(L[f],v),_,L,S)}function u(_,L){return _.map(function(S){return i(S,L)})}function l(_,L){return new L(_)}function O(_,L){return new L(_.map(function(S){return N(S[r.TO_STRING_FIELD])}))}function N(_){return BigInt(_)}function d(_,L){var S=_[r.OPTIONS_FIELD],f=S.locale;return delete S.locale,new L(f,S)}function A(_,L){var S;return delete(S=_.message?new L(_.message):new L).stack,_.name&&(S.name=_.name),_.stack&&(S.stack=_.stack),L===AggregateError&&(S.errors=i(_.errors,{})),S}function E(_){console.warn("Incorrect parameter type passed to constructor: "+_)}function T(_,L,S){for(var f in L){var p=Object.getOwnPropertyDescriptor(_,f);p&&p.writable!==!0&&typeof p.set!="function"||(_[f]=i(L[f],S))}}function U(_){_===void 0&&(_=[]);var L={};return _.forEach(function(S){if(I.isClass(S)){var f=S.name,p=L[f];p&&p!==S&&console.warn("WARNING: Found class definition with the same name: "+f),L[f]=S}}),L}e.deserializeFromParsedObj=function(_,L,S){return i(_,U(L),S)},e.deserializeFromParsedObjWithClassMapping=i,e.getClassMappingFromClassArray=U,e.getParentClassName=function(_){return _.prototype.__proto__.constructor.name}},821:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.isClass=e.notObject=e.getValueFromToStringResult=void 0,e.notObject=function(a){return a===null||typeof a!="object"},e.getValueFromToStringResult=function(a){switch(a){case"Infinity":return 1/0;case"-Infinity":return-1/0;case"NaN":return NaN;default:return null}},e.isClass=function(a){if(function(n){return[Date].indexOf(n)>=0}(a))return!0;try{Reflect.construct(String,[],a)}catch{return!1}return!0}},810:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getSerializeValueWithClassName=void 0;var n=a(917),I=a(821);function r(i,u){u===void 0&&(u={});var l=function(A){var E,T,U;return A===void 0?((E={})[n.CLASS_NAME_FIELD]=n.BUILTIN_TYPE_UNDEFINED,E):typeof A!="number"||isFinite(A)?typeof A=="bigint"?((U={})[n.CLASS_NAME_FIELD]=n.BUILTIN_TYPE_BIG_INT,U[n.TO_STRING_FIELD]=A.toString(),U):I.notObject(A)?A:n.ESSERIALIZER_NULL:((T={})[n.CLASS_NAME_FIELD]=n.BUILTIN_TYPE_NOT_FINITE,T[n.TO_STRING_FIELD]=A.toString(),T)}(i);if(l!==n.ESSERIALIZER_NULL)return l;if(Array.isArray(i))return s(i);var O={};if(!function(A){var E=A.__proto__.constructor.name;return n.CLASSNAMES_WHOSE_ENUMERABLE_PROPERTIES_SHOULD_BE_IGNORED.includes(E)}(i)){if(u.ignoreProperties&&u.ignoreProperties.forEach(function(A){delete i[A]}),u.interceptProperties)for(var N in u.interceptProperties)i[N]=u.interceptProperties[N].call(i,i[N]);for(var d in i)O[d]=r(i[d])}return function(A,E){var T=A.__proto__.constructor.name;return T!=="Object"&&(E[n.CLASS_NAME_FIELD]=T,T===n.BUILTIN_CLASS_ARRAYBUFFER||T===n.BUILTIN_CLASS_SHAREDARRAYBUFFER?E[n.ARRAY_FIELD]=s(Array.from(new Uint8Array(A))):T===n.BUILTIN_CLASS_BOOLEAN?E[n.BOOLEAN_FIELD]=A.valueOf():T===n.BUILTIN_CLASS_DATAVIEW?E[n.ARRAY_FIELD]=s(Array.from(new Uint8Array(A.buffer))):T===n.BUILTIN_CLASS_DATE?E[n.TIMESTAMP_FIELD]=A.getTime():T===n.BUILTIN_CLASS_INTL_LOCALE||T===n.BUILTIN_CLASS_REGEXP?E[n.TO_STRING_FIELD]=A.toString():T===n.BUILTIN_CLASS_SET?E[n.ARRAY_FIELD]=s(Array.from(A)):T===n.BUILTIN_CLASS_STRING?E[n.TO_STRING_FIELD]=A.toString():n.ALL_BUILTIN_ARRAYS.includes(T)?E[n.ARRAY_FIELD]=s(Array.from(A)):n.ALL_BUILTIN_ERRORS.includes(T)?function(U,_,L){U.name!=="Error"&&(_.name=U.name),U.message&&(_.message=U.message),U.stack&&(_.stack=U.stack),L===n.BUILTIN_CLASS_AGGREGATE_ERROR&&(_.errors=r(U.errors))}(A,E,T):n.ALL_BUILTIN_INTLS.includes(T)&&(E[n.OPTIONS_FIELD]=A.resolvedOptions())),E}(i,O)}function s(i){return i.map(function(u){return r(u)})}e.getSerializeValueWithClassName=r}},__webpack_module_cache__={};function __webpack_require__(t){if(__webpack_module_cache__[t])return __webpack_module_cache__[t].exports;var e=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t].call(e.exports,e,e.exports,__webpack_require__),e.exports}return __webpack_require__(607)})())})(bundle);var ESSerializer=getDefaultExportFromCjs(bundle);const alreadyWarnFor=[],warnStorageNotFound=t=>{var e;const a=typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.NODE_ENV)==="production";if(alreadyWarnFor.indexOf(t)===-1&&!a){let n=`Unable to find the ${t}. No data will be persisted.`;typeof window=="undefined"&&(n+=`
Are you running on a server? Most of storages are not available while running on a server.`),console.warn(n),alreadyWarnFor.push(t)}},allowedClasses=[],serialize=t=>ESSerializer.serialize(t),deserialize=t=>{if(t!=="undefined"){if(t!=null){try{return ESSerializer.deserialize(t,allowedClasses)}catch{}try{return JSON.parse(t)}catch{}}return t}};function persist(t,e,a){const n=e.getValue(a);return n!==null&&t.set(n),e.addListener&&e.addListener(a,I=>{t.set(I)}),t.subscribe(I=>{e.setValue(a,I)}),Object.assign(Object.assign({},t),{delete(){e.deleteValue(a)}})}function getBrowserStorage(t,e=!1){const a=[],n=s=>{const i=s.key;s.storageArea===t&&a.filter(({key:u})=>u===i).forEach(({listener:u})=>{u(deserialize(s.newValue))})},I=()=>{e&&typeof window!="undefined"&&(window==null?void 0:window.addEventListener)&&window.addEventListener("storage",n)},r=()=>{e&&typeof window!="undefined"&&(window==null?void 0:window.removeEventListener)&&window.removeEventListener("storage",n)};return{addListener(s,i){a.push({key:s,listener:i}),a.length===1&&I()},removeListener(s,i){const u=a.indexOf({key:s,listener:i});u!==-1&&a.splice(u,1),a.length===0&&r()},getValue(s){const i=t.getItem(s);return deserialize(i)},deleteValue(s){t.removeItem(s)},setValue(s,i){t.setItem(s,serialize(i))}}}function localStorage(t=!1){return typeof window!="undefined"&&(window==null?void 0:window.localStorage)?getBrowserStorage(window.localStorage,t):(warnStorageNotFound("window.localStorage"),noopStorage())}function sessionStorage(t=!1){return typeof window!="undefined"&&(window==null?void 0:window.sessionStorage)?getBrowserStorage(window.sessionStorage,t):(warnStorageNotFound("window.sessionStorage"),noopStorage())}function noopStorage(){return{getValue(){return null},deleteValue(){},setValue(){}}}const token=persist(writable(""),sessionStorage(),"token");var Form_svelte_svelte_type_style_lang="";function create_fragment(t){let e,a,n,I;const r=t[4].default,s=create_slot(r,t,t[3],null);return{c(){e=element("form"),s&&s.c(),this.h()},l(i){e=claim_element(i,"FORM",{class:!0});var u=children(e);s&&s.l(u),u.forEach(detach),this.h()},h(){attr(e,"class","svelte-12h61a9")},m(i,u){insert_hydration(i,e,u),s&&s.m(e,null),t[5](e),a=!0,n||(I=listen(e,"submit",prevent_default(function(){is_function(t[0])&&t[0].apply(this,arguments)})),n=!0)},p(i,[u]){t=i,s&&s.p&&(!a||u&8)&&update_slot_base(s,r,t,t[3],a?get_slot_changes(r,t[3],u,null):get_all_dirty_from_scope(t[3]),null)},i(i){a||(transition_in(s,i),a=!0)},o(i){transition_out(s,i),a=!1},d(i){i&&detach(e),s&&s.d(i),t[5](null),n=!1,I()}}}function instance(t,e,a){let{$$slots:n={},$$scope:I}=e,{options:r}=e,{submit:s=()=>{}}=e,i;r=Object.assign({textareaFitContent:!1},r),onMount(async()=>{if(r.textareaFitContent===!0){let O=function(N){N.scrollHeight>N.offsetHeight&&(N.style.height=`${N.scrollHeight+2}px`)},l=i.querySelectorAll("textarea");for(let N=0;N<l.length;N++){let d=l[N];O(d),d.addEventListener("input",()=>O(d))}}});function u(l){binding_callbacks[l?"unshift":"push"](()=>{i=l,a(1,i)})}return t.$$set=l=>{"options"in l&&a(2,r=l.options),"submit"in l&&a(0,s=l.submit),"$$scope"in l&&a(3,I=l.$$scope)},[s,i,r,I,n,u]}class Form extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{options:2,submit:0})}}export{Form as F,localStorage as l,persist as p,token as t};