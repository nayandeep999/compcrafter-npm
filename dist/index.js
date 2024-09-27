"use strict";var e=require("react");function t(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.13 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}.flex{display:flex}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.items-center{align-items:center}.justify-between{justify-content:space-between}.overflow-y-hidden{overflow-y:hidden}.border-b{border-bottom-width:1px}.p-4{padding:1rem}.pt-2{padding-top:.5rem}.font-medium{font-weight:500}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}',{insertAt:"top"}),"function"==typeof SuppressedError&&SuppressedError;var r,n={exports:{}},o={};var a,i,s={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function c(){return a||(a=1,"production"!==process.env.NODE_ENV&&function(){var t=e,r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.for("react.offscreen"),h=Symbol.iterator;var m=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];!function(e,t,r){var n=m.ReactDebugCurrentFrame,o=n.getStackAddendum();""!==o&&(t+="%s",r=r.concat([o]));var a=r.map((function(e){return String(e)}));a.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,a)}("error",e,r)}var g;function v(e){return e.displayName||"Context"}function k(e){if(null==e)return null;if("number"==typeof e.tag&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case i:return"Profiler";case a:return"StrictMode";case f:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case l:return v(e)+".Consumer";case c:return v(e._context)+".Provider";case u:return function(e,t,r){var n=e.displayName;if(n)return n;var o=t.displayName||t.name||"";return""!==o?r+"("+o+")":r}(e,e.render,"ForwardRef");case d:var t=e.displayName||null;return null!==t?t:k(e.type)||"Memo";case y:var r=e,s=r._payload,w=r._init;try{return k(w(s))}catch(e){return null}}return null}g=Symbol.for("react.module.reference");var x,_,j,S,E,O,R,N=Object.assign,C=0;function T(){}T.__reactDisabledLog=!0;var z,P=m.ReactCurrentDispatcher;function $(e,t,r){if(void 0===z)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);z=n&&n[1]||""}return"\n"+z+e}var D,F=!1,A="function"==typeof WeakMap?WeakMap:Map;function I(e,t){if(!e||F)return"";var r,n=D.get(e);if(void 0!==n)return n;F=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=P.current,P.current=null,function(){if(0===C){x=console.log,_=console.info,j=console.warn,S=console.error,E=console.group,O=console.groupCollapsed,R=console.groupEnd;var e={configurable:!0,enumerable:!0,value:T,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}C++}();try{if(t){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){r=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){r=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var s=t.stack.split("\n"),c=r.stack.split("\n"),l=s.length-1,u=c.length-1;l>=1&&u>=0&&s[l]!==c[u];)u--;for(;l>=1&&u>=0;l--,u--)if(s[l]!==c[u]){if(1!==l||1!==u)do{if(l--,--u<0||s[l]!==c[u]){var f="\n"+s[l].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&D.set(e,f),f}}while(l>=1&&u>=0);break}}}finally{F=!1,P.current=o,function(){if(0==--C){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:N({},e,{value:x}),info:N({},e,{value:_}),warn:N({},e,{value:j}),error:N({},e,{value:S}),group:N({},e,{value:E}),groupCollapsed:N({},e,{value:O}),groupEnd:N({},e,{value:R})})}C<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?$(p):"";return"function"==typeof e&&D.set(e,d),d}function L(e,t,r){if(null==e)return"";if("function"==typeof e)return I(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return $(e);switch(e){case f:return $("Suspense");case p:return $("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case u:return I(e.render,!1);case d:return L(e.type,t,r);case y:var o=e,a=o._payload,i=o._init;try{return L(i(a),t,r)}catch(e){}}return""}D=new A;var W=Object.prototype.hasOwnProperty,U={},M=m.ReactDebugCurrentFrame;function B(e){if(e){var t=e._owner,r=L(e.type,e._source,t?t.type:null);M.setExtraStackFrame(r)}else M.setExtraStackFrame(null)}var Y=Array.isArray;function q(e){return Y(e)}function X(e){return""+e}function V(e){if(function(e){try{return X(e),!1}catch(e){return!0}}(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),X(e)}var J,K,H,Z=m.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};H={};function Q(e,t,n,o,a){var i,s={},c=null,l=null;for(i in void 0!==n&&(V(n),c=""+n),function(e){if(W.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}(t)&&(V(t.key),c=""+t.key),function(e){if(W.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}(t)&&(l=t.ref,function(e,t){if("string"==typeof e.ref&&Z.current&&t&&Z.current.stateNode!==t){var r=k(Z.current.type);H[r]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',k(Z.current.type),e.ref),H[r]=!0)}}(t,a)),t)W.call(t,i)&&!G.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps){var u=e.defaultProps;for(i in u)void 0===s[i]&&(s[i]=u[i])}if(c||l){var f="function"==typeof e?e.displayName||e.name||"Unknown":e;c&&function(e,t){var r=function(){J||(J=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(s,f),l&&function(e,t){var r=function(){K||(K=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}(s,f)}return function(e,t,n,o,a,i,s){var c={$$typeof:r,type:e,key:t,ref:n,props:s,_owner:i,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c}(e,c,l,a,o,Z.current,s)}var ee,te=m.ReactCurrentOwner,re=m.ReactDebugCurrentFrame;function ne(e){if(e){var t=e._owner,r=L(e.type,e._source,t?t.type:null);re.setExtraStackFrame(r)}else re.setExtraStackFrame(null)}function oe(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}function ae(){if(te.current){var e=k(te.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ee=!1;var ie={};function se(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=ae();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!ie[r]){ie[r]=!0;var n="";e&&e._owner&&e._owner!==te.current&&(n=" It was passed a child from "+k(e._owner.type)+"."),ne(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),ne(null)}}}function ce(e,t){if("object"==typeof e)if(q(e))for(var r=0;r<e.length;r++){var n=e[r];oe(n)&&se(n,t)}else if(oe(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var t=h&&e[h]||e["@@iterator"];return"function"==typeof t?t:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)oe(a.value)&&se(a.value,t)}}function le(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==u&&r.$$typeof!==d)return;t=r.propTypes}if(t){var n=k(r);!function(e,t,r,n,o){var a=Function.call.bind(W);for(var i in e)if(a(e,i)){var s=void 0;try{if("function"!=typeof e[i]){var c=Error((n||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}s=e[i](t,i,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){s=e}!s||s instanceof Error||(B(o),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,i,typeof s),B(null)),s instanceof Error&&!(s.message in U)&&(U[s.message]=!0,B(o),b("Failed %s type: %s",r,s.message),B(null))}}(t,e.props,"prop",n,e)}else if(void 0!==r.PropTypes&&!ee){ee=!0,b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",k(r)||"Unknown")}"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var ue={};function fe(e,t,n,s,h,m){var v=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===i||e===a||e===f||e===p||e===w||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===c||e.$$typeof===l||e.$$typeof===u||e.$$typeof===g||void 0!==e.getModuleId)}(e);if(!v){var x="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(x+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var _;x+=ae(),null===e?_="null":q(e)?_="array":void 0!==e&&e.$$typeof===r?(_="<"+(k(e.type)||"Unknown")+" />",x=" Did you accidentally export a JSX literal instead of a component?"):_=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",_,x)}var j=Q(e,t,n,h,m);if(null==j)return j;if(v){var S=t.children;if(void 0!==S)if(s)if(q(S)){for(var E=0;E<S.length;E++)ce(S[E],e);Object.freeze&&Object.freeze(S)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ce(S,e)}if(W.call(t,"key")){var O=k(e),R=Object.keys(t).filter((function(e){return"key"!==e})),N=R.length>0?"{key: someKey, "+R.join(": ..., ")+": ...}":"{key: someKey}";if(!ue[O+N])b('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',N,O,R.length>0?"{"+R.join(": ..., ")+": ...}":"{}",O),ue[O+N]=!0}return e===o?function(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){ne(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),ne(null);break}}null!==e.ref&&(ne(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),ne(null))}(j):le(j),j}var pe=function(e,t,r){return fe(e,t,r,!1)},de=function(e,t,r){return fe(e,t,r,!0)};s.Fragment=o,s.jsx=pe,s.jsxs=de}()),s}var l=(i||(i=1,"production"===process.env.NODE_ENV?n.exports=function(){if(r)return o;r=1;var t=e,n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var o,a={},l=null,u=null;for(o in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:n,type:e,key:l,ref:u,props:a,_owner:s.current}}return o.Fragment=a,o.jsx=l,o.jsxs=l,o}():n.exports=c()),n.exports);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(...e)=>e.filter(((e,t,r)=>Boolean(e)&&r.indexOf(e)===t)).join(" ")
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */;var f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=e.forwardRef((({color:t="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:a="",children:i,iconNode:s,...c},l)=>e.createElement("svg",{ref:l,...f,width:r,height:r,stroke:t,strokeWidth:o?24*Number(n)/Number(r):n,className:u("lucide",a),...c},[...s.map((([t,r])=>e.createElement(t,r))),...Array.isArray(i)?i:[i]]))),d=((t,r)=>{const n=e.forwardRef((({className:n,...o},a)=>{return e.createElement(p,{ref:a,iconNode:r,className:u(`lucide-${i=t,i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,n),...o});var i}));return n.displayName=`${t}`,n})("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y=e.createContext(void 0);exports.Accordian=function(t){var r=t.children,n=t.value,o=t.onChange,a=e.useState(n||[]),i=a[0],s=a[1];return e.useEffect((function(){null==o||o(i)}),[i,o]),l.jsx("ul",{children:l.jsx(y.Provider,{value:{selected:i,setSelected:s},children:r})})},exports.AccordianItem=function(r){var n,o=r.children,a=r.value,i=r.trigger,s=e.useContext(y);if(!s)throw new Error("AccordionItem must be used within an Accordion");var c=s.selected,u=s.setSelected,f=c.includes(a),p=e.useRef(null);return l.jsxs("li",{className:"border-b",children:[l.jsxs("header",{role:"button",onClick:function(){u(f?c.filter((function(e){return e!==a})):t(t([],c,!0),[a],!1))},className:"flex justify-between items-center p-4 font-medium",children:[i,l.jsx(d,{size:16,className:"transition-transform ".concat(f?"rotate-180":"")})]}),l.jsx("div",{className:"overflow-y-hidden transition-all",style:{height:f&&(null===(n=p.current)||void 0===n?void 0:n.offsetHeight)||0},children:l.jsx("div",{className:"pt-2 p-4",ref:p,children:o})})]})};
//# sourceMappingURL=index.js.map
