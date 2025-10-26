(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();function B1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var bc={exports:{}},Ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function U1(){if(Rm)return Ml;Rm=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(s,o,c){var d=null;if(c!==void 0&&(d=""+c),o.key!==void 0&&(d=""+o.key),"key"in o){c={};for(var g in o)g!=="key"&&(c[g]=o[g])}else c=o;return o=c.ref,{$$typeof:n,type:s,key:d,ref:o!==void 0?o:null,props:c}}return Ml.Fragment=i,Ml.jsx=r,Ml.jsxs=r,Ml}var Dm;function H1(){return Dm||(Dm=1,bc.exports=U1()),bc.exports}var z=H1(),Sc={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function G1(){if(jm)return pe;jm=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),E=Symbol.iterator;function S(C){return C===null||typeof C!="object"?null:(C=E&&C[E]||C["@@iterator"],typeof C=="function"?C:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,w={};function _(C,V,ee){this.props=C,this.context=V,this.refs=w,this.updater=ee||b}_.prototype.isReactComponent={},_.prototype.setState=function(C,V){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,V,"setState")},_.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function D(){}D.prototype=_.prototype;function j(C,V,ee){this.props=C,this.context=V,this.refs=w,this.updater=ee||b}var Q=j.prototype=new D;Q.constructor=j,A(Q,_.prototype),Q.isPureReactComponent=!0;var $=Array.isArray;function U(){}var B={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function ne(C,V,ee){var ae=ee.ref;return{$$typeof:n,type:C,key:V,ref:ae!==void 0?ae:null,props:ee}}function P(C,V){return ne(C.type,V,C.props)}function J(C){return typeof C=="object"&&C!==null&&C.$$typeof===n}function I(C){var V={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ee){return V[ee]})}var se=/\/+/g;function oe(C,V){return typeof C=="object"&&C!==null&&C.key!=null?I(""+C.key):V.toString(36)}function ze(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(U,U):(C.status="pending",C.then(function(V){C.status==="pending"&&(C.status="fulfilled",C.value=V)},function(V){C.status==="pending"&&(C.status="rejected",C.reason=V)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function q(C,V,ee,ae,de){var he=typeof C;(he==="undefined"||he==="boolean")&&(C=null);var Ee=!1;if(C===null)Ee=!0;else switch(he){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(C.$$typeof){case n:case i:Ee=!0;break;case x:return Ee=C._init,q(Ee(C._payload),V,ee,ae,de)}}if(Ee)return de=de(C),Ee=ae===""?"."+oe(C,0):ae,$(de)?(ee="",Ee!=null&&(ee=Ee.replace(se,"$&/")+"/"),q(de,V,ee,"",function(un){return un})):de!=null&&(J(de)&&(de=P(de,ee+(de.key==null||C&&C.key===de.key?"":(""+de.key).replace(se,"$&/")+"/")+Ee)),V.push(de)),1;Ee=0;var $e=ae===""?".":ae+":";if($(C))for(var Me=0;Me<C.length;Me++)ae=C[Me],he=$e+oe(ae,Me),Ee+=q(ae,V,ee,he,de);else if(Me=S(C),typeof Me=="function")for(C=Me.call(C),Me=0;!(ae=C.next()).done;)ae=ae.value,he=$e+oe(ae,Me++),Ee+=q(ae,V,ee,he,de);else if(he==="object"){if(typeof C.then=="function")return q(ze(C),V,ee,ae,de);throw V=String(C),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function W(C,V,ee){if(C==null)return C;var ae=[],de=0;return q(C,ae,"","",function(he){return V.call(ee,he,de++)}),ae}function F(C){if(C._status===-1){var V=C._result;V=V(),V.then(function(ee){(C._status===0||C._status===-1)&&(C._status=1,C._result=ee)},function(ee){(C._status===0||C._status===-1)&&(C._status=2,C._result=ee)}),C._status===-1&&(C._status=0,C._result=V)}if(C._status===1)return C._result.default;throw C._result}var ie=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},fe={map:W,forEach:function(C,V,ee){W(C,function(){V.apply(this,arguments)},ee)},count:function(C){var V=0;return W(C,function(){V++}),V},toArray:function(C){return W(C,function(V){return V})||[]},only:function(C){if(!J(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return pe.Activity=v,pe.Children=fe,pe.Component=_,pe.Fragment=r,pe.Profiler=o,pe.PureComponent=j,pe.StrictMode=s,pe.Suspense=p,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,pe.__COMPILER_RUNTIME={__proto__:null,c:function(C){return B.H.useMemoCache(C)}},pe.cache=function(C){return function(){return C.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(C,V,ee){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var ae=A({},C.props),de=C.key;if(V!=null)for(he in V.key!==void 0&&(de=""+V.key),V)!G.call(V,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&V.ref===void 0||(ae[he]=V[he]);var he=arguments.length-2;if(he===1)ae.children=ee;else if(1<he){for(var Ee=Array(he),$e=0;$e<he;$e++)Ee[$e]=arguments[$e+2];ae.children=Ee}return ne(C.type,de,ae)},pe.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:c,_context:C},C},pe.createElement=function(C,V,ee){var ae,de={},he=null;if(V!=null)for(ae in V.key!==void 0&&(he=""+V.key),V)G.call(V,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(de[ae]=V[ae]);var Ee=arguments.length-2;if(Ee===1)de.children=ee;else if(1<Ee){for(var $e=Array(Ee),Me=0;Me<Ee;Me++)$e[Me]=arguments[Me+2];de.children=$e}if(C&&C.defaultProps)for(ae in Ee=C.defaultProps,Ee)de[ae]===void 0&&(de[ae]=Ee[ae]);return ne(C,he,de)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(C){return{$$typeof:g,render:C}},pe.isValidElement=J,pe.lazy=function(C){return{$$typeof:x,_payload:{_status:-1,_result:C},_init:F}},pe.memo=function(C,V){return{$$typeof:h,type:C,compare:V===void 0?null:V}},pe.startTransition=function(C){var V=B.T,ee={};B.T=ee;try{var ae=C(),de=B.S;de!==null&&de(ee,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(U,ie)}catch(he){ie(he)}finally{V!==null&&ee.types!==null&&(V.types=ee.types),B.T=V}},pe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},pe.use=function(C){return B.H.use(C)},pe.useActionState=function(C,V,ee){return B.H.useActionState(C,V,ee)},pe.useCallback=function(C,V){return B.H.useCallback(C,V)},pe.useContext=function(C){return B.H.useContext(C)},pe.useDebugValue=function(){},pe.useDeferredValue=function(C,V){return B.H.useDeferredValue(C,V)},pe.useEffect=function(C,V){return B.H.useEffect(C,V)},pe.useEffectEvent=function(C){return B.H.useEffectEvent(C)},pe.useId=function(){return B.H.useId()},pe.useImperativeHandle=function(C,V,ee){return B.H.useImperativeHandle(C,V,ee)},pe.useInsertionEffect=function(C,V){return B.H.useInsertionEffect(C,V)},pe.useLayoutEffect=function(C,V){return B.H.useLayoutEffect(C,V)},pe.useMemo=function(C,V){return B.H.useMemo(C,V)},pe.useOptimistic=function(C,V){return B.H.useOptimistic(C,V)},pe.useReducer=function(C,V,ee){return B.H.useReducer(C,V,ee)},pe.useRef=function(C){return B.H.useRef(C)},pe.useState=function(C){return B.H.useState(C)},pe.useSyncExternalStore=function(C,V,ee){return B.H.useSyncExternalStore(C,V,ee)},pe.useTransition=function(){return B.H.useTransition()},pe.version="19.2.0",pe}var Nm;function df(){return Nm||(Nm=1,Sc.exports=G1()),Sc.exports}var M=df();const Be=B1(M);var wc={exports:{}},Rl={},Ec={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function q1(){return Lm||(Lm=1,(function(n){function i(q,W){var F=q.length;q.push(W);e:for(;0<F;){var ie=F-1>>>1,fe=q[ie];if(0<o(fe,W))q[ie]=W,q[F]=fe,F=ie;else break e}}function r(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var W=q[0],F=q.pop();if(F!==W){q[0]=F;e:for(var ie=0,fe=q.length,C=fe>>>1;ie<C;){var V=2*(ie+1)-1,ee=q[V],ae=V+1,de=q[ae];if(0>o(ee,F))ae<fe&&0>o(de,ee)?(q[ie]=de,q[ae]=F,ie=ae):(q[ie]=ee,q[V]=F,ie=V);else if(ae<fe&&0>o(de,F))q[ie]=de,q[ae]=F,ie=ae;else break e}}return W}function o(q,W){var F=q.sortIndex-W.sortIndex;return F!==0?F:q.id-W.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var d=Date,g=d.now();n.unstable_now=function(){return d.now()-g}}var p=[],h=[],x=1,v=null,E=3,S=!1,b=!1,A=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;function Q(q){for(var W=r(h);W!==null;){if(W.callback===null)s(h);else if(W.startTime<=q)s(h),W.sortIndex=W.expirationTime,i(p,W);else break;W=r(h)}}function $(q){if(A=!1,Q(q),!b)if(r(p)!==null)b=!0,U||(U=!0,I());else{var W=r(h);W!==null&&ze($,W.startTime-q)}}var U=!1,B=-1,G=5,ne=-1;function P(){return w?!0:!(n.unstable_now()-ne<G)}function J(){if(w=!1,U){var q=n.unstable_now();ne=q;var W=!0;try{e:{b=!1,A&&(A=!1,D(B),B=-1),S=!0;var F=E;try{t:{for(Q(q),v=r(p);v!==null&&!(v.expirationTime>q&&P());){var ie=v.callback;if(typeof ie=="function"){v.callback=null,E=v.priorityLevel;var fe=ie(v.expirationTime<=q);if(q=n.unstable_now(),typeof fe=="function"){v.callback=fe,Q(q),W=!0;break t}v===r(p)&&s(p),Q(q)}else s(p);v=r(p)}if(v!==null)W=!0;else{var C=r(h);C!==null&&ze($,C.startTime-q),W=!1}}break e}finally{v=null,E=F,S=!1}W=void 0}}finally{W?I():U=!1}}}var I;if(typeof j=="function")I=function(){j(J)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,oe=se.port2;se.port1.onmessage=J,I=function(){oe.postMessage(null)}}else I=function(){_(J,0)};function ze(q,W){B=_(function(){q(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(q){q.callback=null},n.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<q?Math.floor(1e3/q):5},n.unstable_getCurrentPriorityLevel=function(){return E},n.unstable_next=function(q){switch(E){case 1:case 2:case 3:var W=3;break;default:W=E}var F=E;E=W;try{return q()}finally{E=F}},n.unstable_requestPaint=function(){w=!0},n.unstable_runWithPriority=function(q,W){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var F=E;E=q;try{return W()}finally{E=F}},n.unstable_scheduleCallback=function(q,W,F){var ie=n.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ie+F:ie):F=ie,q){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=F+fe,q={id:x++,callback:W,priorityLevel:q,startTime:F,expirationTime:fe,sortIndex:-1},F>ie?(q.sortIndex=F,i(h,q),r(p)===null&&q===r(h)&&(A?(D(B),B=-1):A=!0,ze($,F-ie))):(q.sortIndex=fe,i(p,q),b||S||(b=!0,U||(U=!0,I()))),q},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(q){var W=E;return function(){var F=E;E=W;try{return q.apply(this,arguments)}finally{E=F}}}})(Tc)),Tc}var Bm;function k1(){return Bm||(Bm=1,Ec.exports=q1()),Ec.exports}var zc={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function Y1(){if(Um)return ct;Um=1;var n=df();function i(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,h,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:h,implementation:x}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ct.createPortal=function(p,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(i(299));return c(p,h,null,x)},ct.flushSync=function(p){var h=d.T,x=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=h,s.p=x,s.d.f()}},ct.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(p,h))},ct.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},ct.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var x=h.as,v=g(x,h.crossOrigin),E=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?s.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:E,fetchPriority:S}):x==="script"&&s.d.X(p,{crossOrigin:v,integrity:E,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ct.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=g(h.as,h.crossOrigin);s.d.M(p,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(p)},ct.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,v=g(x,h.crossOrigin);s.d.L(p,x,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ct.preloadModule=function(p,h){if(typeof p=="string")if(h){var x=g(h.as,h.crossOrigin);s.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(p)},ct.requestFormReset=function(p){s.d.r(p)},ct.unstable_batchedUpdates=function(p,h){return p(h)},ct.useFormState=function(p,h,x){return d.H.useFormState(p,h,x)},ct.useFormStatus=function(){return d.H.useHostTransitionStatus()},ct.version="19.2.0",ct}var Hm;function V1(){if(Hm)return zc.exports;Hm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),zc.exports=Y1(),zc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function X1(){if(Gm)return Rl;Gm=1;var n=k1(),i=df(),r=V1();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function h(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,l=t;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),e;if(f===l)return p(u),t;f=f.sibling}throw Error(s(188))}if(a.return!==l.return)a=u,l=f;else{for(var m=!1,y=u.child;y;){if(y===a){m=!0,a=u,l=f;break}if(y===l){m=!0,l=u,a=f;break}y=y.sibling}if(!m){for(y=f.child;y;){if(y===a){m=!0,a=f,l=u;break}if(y===l){m=!0,l=f,a=u;break}y=y.sibling}if(!m)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),j=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),J=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var se=Symbol.for("react.client.reference");function oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case _:return"Profiler";case w:return"StrictMode";case $:return"Suspense";case U:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case j:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return t=e.displayName||null,t!==null?t:oe(e.type)||"Memo";case G:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var ze=Array.isArray,q=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ie=[],fe=-1;function C(e){return{current:e}}function V(e){0>fe||(e.current=ie[fe],ie[fe]=null,fe--)}function ee(e,t){fe++,ie[fe]=e.current,e.current=t}var ae=C(null),de=C(null),he=C(null),Ee=C(null);function $e(e,t){switch(ee(he,t),ee(de,e),ee(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?em(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=em(t),e=tm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(ae),ee(ae,e)}function Me(){V(ae),V(de),V(he)}function un(e){e.memoizedState!==null&&ee(Ee,e);var t=ae.current,a=tm(t,e.type);t!==a&&(ee(de,e),ee(ae,a))}function cn(e){de.current===e&&(V(ae),V(de)),Ee.current===e&&(V(Ee),Cl._currentValue=F)}var Bt,Mf;function fa(e){if(Bt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Bt=t&&t[1]||"",Mf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+e+Mf}var no=!1;function ao(e,t){if(!e||no)return"";no=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(Y){var H=Y}Reflect.construct(e,[],K)}else{try{K.call()}catch(Y){H=Y}e.call(K.prototype)}}else{try{throw Error()}catch(Y){H=Y}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(Y){if(Y&&H&&typeof Y.stack=="string")return[Y.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),m=f[0],y=f[1];if(m&&y){var T=m.split(`
`),L=y.split(`
`);for(u=l=0;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;for(;u<L.length&&!L[u].includes("DetermineComponentFrameRoot");)u++;if(l===T.length||u===L.length)for(l=T.length-1,u=L.length-1;1<=l&&0<=u&&T[l]!==L[u];)u--;for(;1<=l&&0<=u;l--,u--)if(T[l]!==L[u]){if(l!==1||u!==1)do if(l--,u--,0>u||T[l]!==L[u]){var X=`
`+T[l].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=l&&0<=u);break}}}finally{no=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?fa(a):""}function px(e,t){switch(e.tag){case 26:case 27:case 5:return fa(e.type);case 16:return fa("Lazy");case 13:return e.child!==t&&t!==null?fa("Suspense Fallback"):fa("Suspense");case 19:return fa("SuspenseList");case 0:case 15:return ao(e.type,!1);case 11:return ao(e.type.render,!1);case 1:return ao(e.type,!0);case 31:return fa("Activity");default:return""}}function Rf(e){try{var t="",a=null;do t+=px(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var io=Object.prototype.hasOwnProperty,lo=n.unstable_scheduleCallback,ro=n.unstable_cancelCallback,hx=n.unstable_shouldYield,mx=n.unstable_requestPaint,Tt=n.unstable_now,gx=n.unstable_getCurrentPriorityLevel,Df=n.unstable_ImmediatePriority,jf=n.unstable_UserBlockingPriority,Jl=n.unstable_NormalPriority,xx=n.unstable_LowPriority,Nf=n.unstable_IdlePriority,vx=n.log,yx=n.unstable_setDisableYieldValue,Hi=null,zt=null;function Ln(e){if(typeof vx=="function"&&yx(e),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(Hi,e)}catch{}}var Ct=Math.clz32?Math.clz32:wx,bx=Math.log,Sx=Math.LN2;function wx(e){return e>>>=0,e===0?32:31-(bx(e)/Sx|0)|0}var Pl=256,Wl=262144,Il=4194304;function da(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function er(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var u=0,f=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var y=l&134217727;return y!==0?(l=y&~f,l!==0?u=da(l):(m&=y,m!==0?u=da(m):a||(a=y&~e,a!==0&&(u=da(a))))):(y=l&~f,y!==0?u=da(y):m!==0?u=da(m):a||(a=l&~e,a!==0&&(u=da(a)))),u===0?0:t!==0&&t!==u&&(t&f)===0&&(f=u&-u,a=t&-t,f>=a||f===32&&(a&4194048)!==0)?t:u}function Gi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ex(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lf(){var e=Il;return Il<<=1,(Il&62914560)===0&&(Il=4194304),e}function so(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function qi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tx(e,t,a,l,u,f){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var y=e.entanglements,T=e.expirationTimes,L=e.hiddenUpdates;for(a=m&~a;0<a;){var X=31-Ct(a),K=1<<X;y[X]=0,T[X]=-1;var H=L[X];if(H!==null)for(L[X]=null,X=0;X<H.length;X++){var Y=H[X];Y!==null&&(Y.lane&=-536870913)}a&=~K}l!==0&&Bf(e,l,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(m&~t))}function Bf(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ct(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Uf(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Ct(a),u=1<<l;u&t|e[l]&t&&(e[l]|=t),a&=~u}}function Hf(e,t){var a=t&-t;return a=(a&42)!==0?1:oo(a),(a&(e.suspendedLanes|t))!==0?0:a}function oo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function uo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gf(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:Tm(e.type))}function qf(e,t){var a=W.p;try{return W.p=e,t()}finally{W.p=a}}var Bn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Bn,mt="__reactProps$"+Bn,Ha="__reactContainer$"+Bn,co="__reactEvents$"+Bn,zx="__reactListeners$"+Bn,Cx="__reactHandles$"+Bn,kf="__reactResources$"+Bn,ki="__reactMarker$"+Bn;function fo(e){delete e[lt],delete e[mt],delete e[co],delete e[zx],delete e[Cx]}function Ga(e){var t=e[lt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ha]||a[lt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=om(e);e!==null;){if(a=e[lt])return a;e=om(e)}return t}e=a,a=e.parentNode}return null}function qa(e){if(e=e[lt]||e[Ha]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Yi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function ka(e){var t=e[kf];return t||(t=e[kf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[ki]=!0}var Yf=new Set,Vf={};function pa(e,t){Ya(e,t),Ya(e+"Capture",t)}function Ya(e,t){for(Vf[e]=t,e=0;e<t.length;e++)Yf.add(t[e])}var Ax=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xf={},$f={};function Ox(e){return io.call($f,e)?!0:io.call(Xf,e)?!1:Ax.test(e)?$f[e]=!0:(Xf[e]=!0,!1)}function tr(e,t,a){if(Ox(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function nr(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function fn(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _x(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,f=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(m){a=""+m,f.call(this,m)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function po(e){if(!e._valueTracker){var t=Qf(e)?"checked":"value";e._valueTracker=_x(e,t,""+e[t])}}function Zf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Qf(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ar(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Mx=/[\n"\\]/g;function Ht(e){return e.replace(Mx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ho(e,t,a,l,u,f,m,y){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?mo(e,m,Ut(t)):a!=null?mo(e,m,Ut(a)):l!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Ut(y):e.removeAttribute("name")}function Kf(e,t,a,l,u,f,m,y){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||t!=null)){po(e);return}a=a!=null?""+Ut(a):"",t=t!=null?""+Ut(t):a,y||t===e.value||(e.value=t),e.defaultValue=t}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=y?e.checked:!!l,e.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),po(e)}function mo(e,t,a){t==="number"&&ar(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Va(e,t,a,l){if(e=e.options,t){t={};for(var u=0;u<a.length;u++)t["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=t.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Ut(a),t=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Ff(e,t,a){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ut(a):""}function Jf(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(s(92));if(ze(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Ut(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),po(e)}function Xa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Rx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pf(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Rx.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Wf(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in t)l=t[u],t.hasOwnProperty(u)&&a[u]!==l&&Pf(e,u,l)}else for(var f in t)t.hasOwnProperty(f)&&Pf(e,f,t[f])}function go(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ir(e){return jx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var xo=null;function vo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $a=null,Qa=null;function If(e){var t=qa(e);if(t&&(e=t.stateNode)){var a=e[mt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ho(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var u=l[mt]||null;if(!u)throw Error(s(90));ho(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Zf(l)}break e;case"textarea":Ff(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Va(e,!!a.multiple,t,!1)}}}var yo=!1;function ed(e,t,a){if(yo)return e(t,a);yo=!0;try{var l=e(t);return l}finally{if(yo=!1,($a!==null||Qa!==null)&&($r(),$a&&(t=$a,e=Qa,Qa=$a=null,If(t),e)))for(t=0;t<e.length;t++)If(e[t])}}function Vi(e,t){var a=e.stateNode;if(a===null)return null;var l=a[mt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bo=!1;if(pn)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){bo=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{bo=!1}var Un=null,So=null,lr=null;function td(){if(lr)return lr;var e,t=So,a=t.length,l,u="value"in Un?Un.value:Un.textContent,f=u.length;for(e=0;e<a&&t[e]===u[e];e++);var m=a-e;for(l=1;l<=m&&t[a-l]===u[f-l];l++);return lr=u.slice(e,1<l?1-l:void 0)}function rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function nd(){return!1}function gt(e){function t(a,l,u,f,m){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=m,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(a=e[y],this[y]=a?a(f):f[y]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sr:nd,this.isPropagationStopped=nd,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),t}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},or=gt(ha),$i=v({},ha,{view:0,detail:0}),Nx=gt($i),wo,Eo,Qi,ur=v({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qi&&(Qi&&e.type==="mousemove"?(wo=e.screenX-Qi.screenX,Eo=e.screenY-Qi.screenY):Eo=wo=0,Qi=e),wo)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),ad=gt(ur),Lx=v({},ur,{dataTransfer:0}),Bx=gt(Lx),Ux=v({},$i,{relatedTarget:0}),To=gt(Ux),Hx=v({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),Gx=gt(Hx),qx=v({},ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kx=gt(qx),Yx=v({},ha,{data:0}),id=gt(Yx),Vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$x[e])?!!t[e]:!1}function zo(){return Qx}var Zx=v({},$i,{key:function(e){if(e.key){var t=Vx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zo,charCode:function(e){return e.type==="keypress"?rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kx=gt(Zx),Fx=v({},ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ld=gt(Fx),Jx=v({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zo}),Px=gt(Jx),Wx=v({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ix=gt(Wx),ev=v({},ur,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tv=gt(ev),nv=v({},ha,{newState:0,oldState:0}),av=gt(nv),iv=[9,13,27,32],Co=pn&&"CompositionEvent"in window,Zi=null;pn&&"documentMode"in document&&(Zi=document.documentMode);var lv=pn&&"TextEvent"in window&&!Zi,rd=pn&&(!Co||Zi&&8<Zi&&11>=Zi),sd=" ",od=!1;function ud(e,t){switch(e){case"keyup":return iv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Za=!1;function rv(e,t){switch(e){case"compositionend":return cd(t);case"keypress":return t.which!==32?null:(od=!0,sd);case"textInput":return e=t.data,e===sd&&od?null:e;default:return null}}function sv(e,t){if(Za)return e==="compositionend"||!Co&&ud(e,t)?(e=td(),lr=So=Un=null,Za=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rd&&t.locale!=="ko"?null:t.data;default:return null}}var ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ov[e.type]:t==="textarea"}function dd(e,t,a,l){$a?Qa?Qa.push(l):Qa=[l]:$a=l,t=Wr(t,"onChange"),0<t.length&&(a=new or("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Ki=null,Fi=null;function uv(e){Kh(e,0)}function cr(e){var t=Yi(e);if(Zf(t))return e}function pd(e,t){if(e==="change")return t}var hd=!1;if(pn){var Ao;if(pn){var Oo="oninput"in document;if(!Oo){var md=document.createElement("div");md.setAttribute("oninput","return;"),Oo=typeof md.oninput=="function"}Ao=Oo}else Ao=!1;hd=Ao&&(!document.documentMode||9<document.documentMode)}function gd(){Ki&&(Ki.detachEvent("onpropertychange",xd),Fi=Ki=null)}function xd(e){if(e.propertyName==="value"&&cr(Fi)){var t=[];dd(t,Fi,e,vo(e)),ed(uv,t)}}function cv(e,t,a){e==="focusin"?(gd(),Ki=t,Fi=a,Ki.attachEvent("onpropertychange",xd)):e==="focusout"&&gd()}function fv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cr(Fi)}function dv(e,t){if(e==="click")return cr(t)}function pv(e,t){if(e==="input"||e==="change")return cr(t)}function hv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:hv;function Ji(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!io.call(t,u)||!At(e[u],t[u]))return!1}return!0}function vd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yd(e,t){var a=vd(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vd(a)}}function bd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ar(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ar(e.document)}return t}function _o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mv=pn&&"documentMode"in document&&11>=document.documentMode,Ka=null,Mo=null,Pi=null,Ro=!1;function wd(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ro||Ka==null||Ka!==ar(l)||(l=Ka,"selectionStart"in l&&_o(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Pi&&Ji(Pi,l)||(Pi=l,l=Wr(Mo,"onSelect"),0<l.length&&(t=new or("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Ka)))}function ma(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Fa={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionrun:ma("Transition","TransitionRun"),transitionstart:ma("Transition","TransitionStart"),transitioncancel:ma("Transition","TransitionCancel"),transitionend:ma("Transition","TransitionEnd")},Do={},Ed={};pn&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function ga(e){if(Do[e])return Do[e];if(!Fa[e])return e;var t=Fa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ed)return Do[e]=t[a];return e}var Td=ga("animationend"),zd=ga("animationiteration"),Cd=ga("animationstart"),gv=ga("transitionrun"),xv=ga("transitionstart"),vv=ga("transitioncancel"),Ad=ga("transitionend"),Od=new Map,jo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jo.push("scrollEnd");function Kt(e,t){Od.set(e,t),pa(t,[e])}var fr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Gt=[],Ja=0,No=0;function dr(){for(var e=Ja,t=No=Ja=0;t<e;){var a=Gt[t];Gt[t++]=null;var l=Gt[t];Gt[t++]=null;var u=Gt[t];Gt[t++]=null;var f=Gt[t];if(Gt[t++]=null,l!==null&&u!==null){var m=l.pending;m===null?u.next=u:(u.next=m.next,m.next=u),l.pending=u}f!==0&&_d(a,u,f)}}function pr(e,t,a,l){Gt[Ja++]=e,Gt[Ja++]=t,Gt[Ja++]=a,Gt[Ja++]=l,No|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Lo(e,t,a,l){return pr(e,t,a,l),hr(e)}function xa(e,t){return pr(e,null,null,t),hr(e)}function _d(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&t!==null&&(u=31-Ct(a),e=f.hiddenUpdates,l=e[u],l===null?e[u]=[t]:l.push(t),t.lane=a|536870912),f):null}function hr(e){if(50<yl)throw yl=0,Xu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Pa={};function yv(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,a,l){return new yv(e,t,a,l)}function Bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hn(e,t){var a=e.alternate;return a===null?(a=Ot(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Md(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mr(e,t,a,l,u,f){var m=0;if(l=e,typeof e=="function")Bo(e)&&(m=1);else if(typeof e=="string")m=T1(e,a,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=Ot(31,a,t,u),e.elementType=ne,e.lanes=f,e;case A:return va(a.children,u,f,t);case w:m=8,u|=24;break;case _:return e=Ot(12,a,t,u|2),e.elementType=_,e.lanes=f,e;case $:return e=Ot(13,a,t,u),e.elementType=$,e.lanes=f,e;case U:return e=Ot(19,a,t,u),e.elementType=U,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case j:m=10;break e;case D:m=9;break e;case Q:m=11;break e;case B:m=14;break e;case G:m=16,l=null;break e}m=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=Ot(m,a,t,u),t.elementType=e,t.type=l,t.lanes=f,t}function va(e,t,a,l){return e=Ot(7,e,l,t),e.lanes=a,e}function Uo(e,t,a){return e=Ot(6,e,null,t),e.lanes=a,e}function Rd(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function Ho(e,t,a){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Dd=new WeakMap;function qt(e,t){if(typeof e=="object"&&e!==null){var a=Dd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Rf(t)},Dd.set(e,t),t)}return{value:e,source:t,stack:Rf(t)}}var Wa=[],Ia=0,gr=null,Wi=0,kt=[],Yt=0,Hn=null,en=1,tn="";function mn(e,t){Wa[Ia++]=Wi,Wa[Ia++]=gr,gr=e,Wi=t}function jd(e,t,a){kt[Yt++]=en,kt[Yt++]=tn,kt[Yt++]=Hn,Hn=e;var l=en;e=tn;var u=32-Ct(l)-1;l&=~(1<<u),a+=1;var f=32-Ct(t)+u;if(30<f){var m=u-u%5;f=(l&(1<<m)-1).toString(32),l>>=m,u-=m,en=1<<32-Ct(t)+u|a<<u|l,tn=f+e}else en=1<<f|a<<u|l,tn=e}function Go(e){e.return!==null&&(mn(e,1),jd(e,1,0))}function qo(e){for(;e===gr;)gr=Wa[--Ia],Wa[Ia]=null,Wi=Wa[--Ia],Wa[Ia]=null;for(;e===Hn;)Hn=kt[--Yt],kt[Yt]=null,tn=kt[--Yt],kt[Yt]=null,en=kt[--Yt],kt[Yt]=null}function Nd(e,t){kt[Yt++]=en,kt[Yt++]=tn,kt[Yt++]=Hn,en=t.id,tn=t.overflow,Hn=e}var rt=null,He=null,Te=!1,Gn=null,Vt=!1,ko=Error(s(519));function qn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ii(qt(t,e)),ko}function Ld(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[lt]=e,t[mt]=l,a){case"dialog":be("cancel",t),be("close",t);break;case"iframe":case"object":case"embed":be("load",t);break;case"video":case"audio":for(a=0;a<Sl.length;a++)be(Sl[a],t);break;case"source":be("error",t);break;case"img":case"image":case"link":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"input":be("invalid",t),Kf(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":be("invalid",t);break;case"textarea":be("invalid",t),Jf(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Wh(t.textContent,a)?(l.popover!=null&&(be("beforetoggle",t),be("toggle",t)),l.onScroll!=null&&be("scroll",t),l.onScrollEnd!=null&&be("scrollend",t),l.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||qn(e,!0)}function Bd(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 31:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:rt=rt.return}}function ei(e){if(e!==rt)return!1;if(!Te)return Bd(e),Te=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||lc(e.type,e.memoizedProps)),a=!a),a&&He&&qn(e),Bd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));He=sm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));He=sm(e)}else t===27?(t=He,ea(e.type)?(e=cc,cc=null,He=e):He=t):He=rt?$t(e.stateNode.nextSibling):null;return!0}function ya(){He=rt=null,Te=!1}function Yo(){var e=Gn;return e!==null&&(bt===null?bt=e:bt.push.apply(bt,e),Gn=null),e}function Ii(e){Gn===null?Gn=[e]:Gn.push(e)}var Vo=C(null),ba=null,gn=null;function kn(e,t,a){ee(Vo,t._currentValue),t._currentValue=a}function xn(e){e._currentValue=Vo.current,V(Vo)}function Xo(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function $o(e,t,a,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var m=u.child;f=f.firstContext;e:for(;f!==null;){var y=f;f=u;for(var T=0;T<t.length;T++)if(y.context===t[T]){f.lanes|=a,y=f.alternate,y!==null&&(y.lanes|=a),Xo(f.return,a,e),l||(m=null);break e}f=y.next}}else if(u.tag===18){if(m=u.return,m===null)throw Error(s(341));m.lanes|=a,f=m.alternate,f!==null&&(f.lanes|=a),Xo(m,a,e),m=null}else m=u.child;if(m!==null)m.return=u;else for(m=u;m!==null;){if(m===e){m=null;break}if(u=m.sibling,u!==null){u.return=m.return,m=u;break}m=m.return}u=m}}function ti(e,t,a,l){e=null;for(var u=t,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var m=u.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var y=u.type;At(u.pendingProps.value,m.value)||(e!==null?e.push(y):e=[y])}}else if(u===Ee.current){if(m=u.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Cl):e=[Cl])}u=u.return}e!==null&&$o(t,e,a,l),t.flags|=262144}function xr(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Sa(e){ba=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function st(e){return Ud(ba,e)}function vr(e,t){return ba===null&&Sa(e),Ud(e,t)}function Ud(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},gn===null){if(e===null)throw Error(s(308));gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gn=gn.next=t;return a}var bv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Sv=n.unstable_scheduleCallback,wv=n.unstable_NormalPriority,Je={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qo(){return{controller:new bv,data:new Map,refCount:0}}function el(e){e.refCount--,e.refCount===0&&Sv(wv,function(){e.controller.abort()})}var tl=null,Zo=0,ni=0,ai=null;function Ev(e,t){if(tl===null){var a=tl=[];Zo=0,ni=Ju(),ai={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Zo++,t.then(Hd,Hd),t}function Hd(){if(--Zo===0&&tl!==null){ai!==null&&(ai.status="fulfilled");var e=tl;tl=null,ni=0,ai=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tv(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var u=0;u<a.length;u++)(0,a[u])(t)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var Gd=q.S;q.S=function(e,t){wh=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ev(e,t),Gd!==null&&Gd(e,t)};var wa=C(null);function Ko(){var e=wa.current;return e!==null?e:Ue.pooledCache}function yr(e,t){t===null?ee(wa,wa.current):ee(wa,t.pool)}function qd(){var e=Ko();return e===null?null:{parent:Je._currentValue,pool:e}}var ii=Error(s(460)),Fo=Error(s(474)),br=Error(s(542)),Sr={then:function(){}};function kd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(dn,dn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xd(e),e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=l}},function(l){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xd(e),e}throw Ta=t,ii}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ta=a,ii):a}}var Ta=null;function Vd(){if(Ta===null)throw Error(s(459));var e=Ta;return Ta=null,e}function Xd(e){if(e===ii||e===br)throw Error(s(483))}var li=null,nl=0;function wr(e){var t=nl;return nl+=1,li===null&&(li=[]),Yd(li,e,t)}function al(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Er(e,t){throw t.$$typeof===E?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function $d(e){function t(R,O){if(e){var N=R.deletions;N===null?(R.deletions=[O],R.flags|=16):N.push(O)}}function a(R,O){if(!e)return null;for(;O!==null;)t(R,O),O=O.sibling;return null}function l(R){for(var O=new Map;R!==null;)R.key!==null?O.set(R.key,R):O.set(R.index,R),R=R.sibling;return O}function u(R,O){return R=hn(R,O),R.index=0,R.sibling=null,R}function f(R,O,N){return R.index=N,e?(N=R.alternate,N!==null?(N=N.index,N<O?(R.flags|=67108866,O):N):(R.flags|=67108866,O)):(R.flags|=1048576,O)}function m(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function y(R,O,N,Z){return O===null||O.tag!==6?(O=Uo(N,R.mode,Z),O.return=R,O):(O=u(O,N),O.return=R,O)}function T(R,O,N,Z){var ue=N.type;return ue===A?X(R,O,N.props.children,Z,N.key):O!==null&&(O.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===G&&Ea(ue)===O.type)?(O=u(O,N.props),al(O,N),O.return=R,O):(O=mr(N.type,N.key,N.props,null,R.mode,Z),al(O,N),O.return=R,O)}function L(R,O,N,Z){return O===null||O.tag!==4||O.stateNode.containerInfo!==N.containerInfo||O.stateNode.implementation!==N.implementation?(O=Ho(N,R.mode,Z),O.return=R,O):(O=u(O,N.children||[]),O.return=R,O)}function X(R,O,N,Z,ue){return O===null||O.tag!==7?(O=va(N,R.mode,Z,ue),O.return=R,O):(O=u(O,N),O.return=R,O)}function K(R,O,N){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Uo(""+O,R.mode,N),O.return=R,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case S:return N=mr(O.type,O.key,O.props,null,R.mode,N),al(N,O),N.return=R,N;case b:return O=Ho(O,R.mode,N),O.return=R,O;case G:return O=Ea(O),K(R,O,N)}if(ze(O)||I(O))return O=va(O,R.mode,N,null),O.return=R,O;if(typeof O.then=="function")return K(R,wr(O),N);if(O.$$typeof===j)return K(R,vr(R,O),N);Er(R,O)}return null}function H(R,O,N,Z){var ue=O!==null?O.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return ue!==null?null:y(R,O,""+N,Z);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case S:return N.key===ue?T(R,O,N,Z):null;case b:return N.key===ue?L(R,O,N,Z):null;case G:return N=Ea(N),H(R,O,N,Z)}if(ze(N)||I(N))return ue!==null?null:X(R,O,N,Z,null);if(typeof N.then=="function")return H(R,O,wr(N),Z);if(N.$$typeof===j)return H(R,O,vr(R,N),Z);Er(R,N)}return null}function Y(R,O,N,Z,ue){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return R=R.get(N)||null,y(O,R,""+Z,ue);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case S:return R=R.get(Z.key===null?N:Z.key)||null,T(O,R,Z,ue);case b:return R=R.get(Z.key===null?N:Z.key)||null,L(O,R,Z,ue);case G:return Z=Ea(Z),Y(R,O,N,Z,ue)}if(ze(Z)||I(Z))return R=R.get(N)||null,X(O,R,Z,ue,null);if(typeof Z.then=="function")return Y(R,O,N,wr(Z),ue);if(Z.$$typeof===j)return Y(R,O,N,vr(O,Z),ue);Er(O,Z)}return null}function le(R,O,N,Z){for(var ue=null,Ce=null,re=O,xe=O=0,we=null;re!==null&&xe<N.length;xe++){re.index>xe?(we=re,re=null):we=re.sibling;var Ae=H(R,re,N[xe],Z);if(Ae===null){re===null&&(re=we);break}e&&re&&Ae.alternate===null&&t(R,re),O=f(Ae,O,xe),Ce===null?ue=Ae:Ce.sibling=Ae,Ce=Ae,re=we}if(xe===N.length)return a(R,re),Te&&mn(R,xe),ue;if(re===null){for(;xe<N.length;xe++)re=K(R,N[xe],Z),re!==null&&(O=f(re,O,xe),Ce===null?ue=re:Ce.sibling=re,Ce=re);return Te&&mn(R,xe),ue}for(re=l(re);xe<N.length;xe++)we=Y(re,R,xe,N[xe],Z),we!==null&&(e&&we.alternate!==null&&re.delete(we.key===null?xe:we.key),O=f(we,O,xe),Ce===null?ue=we:Ce.sibling=we,Ce=we);return e&&re.forEach(function(la){return t(R,la)}),Te&&mn(R,xe),ue}function ce(R,O,N,Z){if(N==null)throw Error(s(151));for(var ue=null,Ce=null,re=O,xe=O=0,we=null,Ae=N.next();re!==null&&!Ae.done;xe++,Ae=N.next()){re.index>xe?(we=re,re=null):we=re.sibling;var la=H(R,re,Ae.value,Z);if(la===null){re===null&&(re=we);break}e&&re&&la.alternate===null&&t(R,re),O=f(la,O,xe),Ce===null?ue=la:Ce.sibling=la,Ce=la,re=we}if(Ae.done)return a(R,re),Te&&mn(R,xe),ue;if(re===null){for(;!Ae.done;xe++,Ae=N.next())Ae=K(R,Ae.value,Z),Ae!==null&&(O=f(Ae,O,xe),Ce===null?ue=Ae:Ce.sibling=Ae,Ce=Ae);return Te&&mn(R,xe),ue}for(re=l(re);!Ae.done;xe++,Ae=N.next())Ae=Y(re,R,xe,Ae.value,Z),Ae!==null&&(e&&Ae.alternate!==null&&re.delete(Ae.key===null?xe:Ae.key),O=f(Ae,O,xe),Ce===null?ue=Ae:Ce.sibling=Ae,Ce=Ae);return e&&re.forEach(function(L1){return t(R,L1)}),Te&&mn(R,xe),ue}function Le(R,O,N,Z){if(typeof N=="object"&&N!==null&&N.type===A&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case S:e:{for(var ue=N.key;O!==null;){if(O.key===ue){if(ue=N.type,ue===A){if(O.tag===7){a(R,O.sibling),Z=u(O,N.props.children),Z.return=R,R=Z;break e}}else if(O.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===G&&Ea(ue)===O.type){a(R,O.sibling),Z=u(O,N.props),al(Z,N),Z.return=R,R=Z;break e}a(R,O);break}else t(R,O);O=O.sibling}N.type===A?(Z=va(N.props.children,R.mode,Z,N.key),Z.return=R,R=Z):(Z=mr(N.type,N.key,N.props,null,R.mode,Z),al(Z,N),Z.return=R,R=Z)}return m(R);case b:e:{for(ue=N.key;O!==null;){if(O.key===ue)if(O.tag===4&&O.stateNode.containerInfo===N.containerInfo&&O.stateNode.implementation===N.implementation){a(R,O.sibling),Z=u(O,N.children||[]),Z.return=R,R=Z;break e}else{a(R,O);break}else t(R,O);O=O.sibling}Z=Ho(N,R.mode,Z),Z.return=R,R=Z}return m(R);case G:return N=Ea(N),Le(R,O,N,Z)}if(ze(N))return le(R,O,N,Z);if(I(N)){if(ue=I(N),typeof ue!="function")throw Error(s(150));return N=ue.call(N),ce(R,O,N,Z)}if(typeof N.then=="function")return Le(R,O,wr(N),Z);if(N.$$typeof===j)return Le(R,O,vr(R,N),Z);Er(R,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,O!==null&&O.tag===6?(a(R,O.sibling),Z=u(O,N),Z.return=R,R=Z):(a(R,O),Z=Uo(N,R.mode,Z),Z.return=R,R=Z),m(R)):a(R,O)}return function(R,O,N,Z){try{nl=0;var ue=Le(R,O,N,Z);return li=null,ue}catch(re){if(re===ii||re===br)throw re;var Ce=Ot(29,re,null,R.mode);return Ce.lanes=Z,Ce.return=R,Ce}finally{}}}var za=$d(!0),Qd=$d(!1),Yn=!1;function Jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Po(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Oe&2)!==0){var u=l.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),l.pending=t,t=hr(e),_d(e,null,a),t}return pr(e,l,t,a),hr(e)}function il(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Uf(e,a)}}function Wo(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=m:f=f.next=m,a=a.next}while(a!==null);f===null?u=f=t:f=f.next=t}else u=f=t;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Io=!1;function ll(){if(Io){var e=ai;if(e!==null)throw e}}function rl(e,t,a,l){Io=!1;var u=e.updateQueue;Yn=!1;var f=u.firstBaseUpdate,m=u.lastBaseUpdate,y=u.shared.pending;if(y!==null){u.shared.pending=null;var T=y,L=T.next;T.next=null,m===null?f=L:m.next=L,m=T;var X=e.alternate;X!==null&&(X=X.updateQueue,y=X.lastBaseUpdate,y!==m&&(y===null?X.firstBaseUpdate=L:y.next=L,X.lastBaseUpdate=T))}if(f!==null){var K=u.baseState;m=0,X=L=T=null,y=f;do{var H=y.lane&-536870913,Y=H!==y.lane;if(Y?(Se&H)===H:(l&H)===H){H!==0&&H===ni&&(Io=!0),X!==null&&(X=X.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var le=e,ce=y;H=t;var Le=a;switch(ce.tag){case 1:if(le=ce.payload,typeof le=="function"){K=le.call(Le,K,H);break e}K=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ce.payload,H=typeof le=="function"?le.call(Le,K,H):le,H==null)break e;K=v({},K,H);break e;case 2:Yn=!0}}H=y.callback,H!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=u.callbacks,Y===null?u.callbacks=[H]:Y.push(H))}else Y={lane:H,tag:y.tag,payload:y.payload,callback:y.callback,next:null},X===null?(L=X=Y,T=K):X=X.next=Y,m|=H;if(y=y.next,y===null){if(y=u.shared.pending,y===null)break;Y=y,y=Y.next,Y.next=null,u.lastBaseUpdate=Y,u.shared.pending=null}}while(!0);X===null&&(T=K),u.baseState=T,u.firstBaseUpdate=L,u.lastBaseUpdate=X,f===null&&(u.shared.lanes=0),Fn|=m,e.lanes=m,e.memoizedState=K}}function Zd(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Kd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zd(a[e],t)}var ri=C(null),Tr=C(0);function Fd(e,t){e=Cn,ee(Tr,e),ee(ri,t),Cn=e|t.baseLanes}function eu(){ee(Tr,Cn),ee(ri,ri.current)}function tu(){Cn=Tr.current,V(ri),V(Tr)}var _t=C(null),Xt=null;function $n(e){var t=e.alternate;ee(Qe,Qe.current&1),ee(_t,e),Xt===null&&(t===null||ri.current!==null||t.memoizedState!==null)&&(Xt=e)}function nu(e){ee(Qe,Qe.current),ee(_t,e),Xt===null&&(Xt=e)}function Jd(e){e.tag===22?(ee(Qe,Qe.current),ee(_t,e),Xt===null&&(Xt=e)):Qn()}function Qn(){ee(Qe,Qe.current),ee(_t,_t.current)}function Mt(e){V(_t),Xt===e&&(Xt=null),V(Qe)}var Qe=C(0);function zr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||oc(a)||uc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vn=0,me=null,je=null,Pe=null,Cr=!1,si=!1,Ca=!1,Ar=0,sl=0,oi=null,zv=0;function Ve(){throw Error(s(321))}function au(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!At(e[a],t[a]))return!1;return!0}function iu(e,t,a,l,u,f){return vn=f,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,q.H=e===null||e.memoizedState===null?jp:yu,Ca=!1,f=a(l,u),Ca=!1,si&&(f=Wd(t,a,l,u)),Pd(e),f}function Pd(e){q.H=cl;var t=je!==null&&je.next!==null;if(vn=0,Pe=je=me=null,Cr=!1,sl=0,oi=null,t)throw Error(s(300));e===null||We||(e=e.dependencies,e!==null&&xr(e)&&(We=!0))}function Wd(e,t,a,l){me=e;var u=0;do{if(si&&(oi=null),sl=0,si=!1,25<=u)throw Error(s(301));if(u+=1,Pe=je=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}q.H=Np,f=t(a,l)}while(si);return f}function Cv(){var e=q.H,t=e.useState()[0];return t=typeof t.then=="function"?ol(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(me.flags|=1024),t}function lu(){var e=Ar!==0;return Ar=0,e}function ru(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function su(e){if(Cr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Cr=!1}vn=0,Pe=je=me=null,si=!1,sl=Ar=0,oi=null}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?me.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function Ze(){if(je===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Pe===null?me.memoizedState:Pe.next;if(t!==null)Pe=t,je=e;else{if(e===null)throw me.alternate===null?Error(s(467)):Error(s(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Pe===null?me.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Or(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ol(e){var t=sl;return sl+=1,oi===null&&(oi=[]),e=Yd(oi,e,t),t=me,(Pe===null?t.memoizedState:Pe.next)===null&&(t=t.alternate,q.H=t===null||t.memoizedState===null?jp:yu),e}function _r(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ol(e);if(e.$$typeof===j)return st(e)}throw Error(s(438,String(e)))}function ou(e){var t=null,a=me.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Or(),me.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=P;return t.index++,a}function yn(e,t){return typeof t=="function"?t(e):t}function Mr(e){var t=Ze();return uu(t,je,e)}function uu(e,t,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var u=e.baseQueue,f=l.pending;if(f!==null){if(u!==null){var m=u.next;u.next=f.next,f.next=m}t.baseQueue=u=f,l.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{t=u.next;var y=m=null,T=null,L=t,X=!1;do{var K=L.lane&-536870913;if(K!==L.lane?(Se&K)===K:(vn&K)===K){var H=L.revertLane;if(H===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),K===ni&&(X=!0);else if((vn&H)===H){L=L.next,H===ni&&(X=!0);continue}else K={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},T===null?(y=T=K,m=f):T=T.next=K,me.lanes|=H,Fn|=H;K=L.action,Ca&&a(f,K),f=L.hasEagerState?L.eagerState:a(f,K)}else H={lane:K,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},T===null?(y=T=H,m=f):T=T.next=H,me.lanes|=K,Fn|=K;L=L.next}while(L!==null&&L!==t);if(T===null?m=f:T.next=y,!At(f,e.memoizedState)&&(We=!0,X&&(a=ai,a!==null)))throw a;e.memoizedState=f,e.baseState=m,e.baseQueue=T,l.lastRenderedState=f}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function cu(e){var t=Ze(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,u=a.pending,f=t.memoizedState;if(u!==null){a.pending=null;var m=u=u.next;do f=e(f,m.action),m=m.next;while(m!==u);At(f,t.memoizedState)||(We=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),a.lastRenderedState=f}return[f,l]}function Id(e,t,a){var l=me,u=Ze(),f=Te;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=t();var m=!At((je||u).memoizedState,a);if(m&&(u.memoizedState=a,We=!0),u=u.queue,pu(np.bind(null,l,u,e),[e]),u.getSnapshot!==t||m||Pe!==null&&Pe.memoizedState.tag&1){if(l.flags|=2048,ui(9,{destroy:void 0},tp.bind(null,l,u,a,t),null),Ue===null)throw Error(s(349));f||(vn&127)!==0||ep(l,t,a)}return a}function ep(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=me.updateQueue,t===null?(t=Or(),me.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function tp(e,t,a,l){t.value=a,t.getSnapshot=l,ap(t)&&ip(e)}function np(e,t,a){return a(function(){ap(t)&&ip(e)})}function ap(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!At(e,a)}catch{return!0}}function ip(e){var t=xa(e,2);t!==null&&St(t,e,2)}function fu(e){var t=pt();if(typeof e=="function"){var a=e;if(e=a(),Ca){Ln(!0);try{a()}finally{Ln(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:e},t}function lp(e,t,a,l){return e.baseState=a,uu(e,je,typeof l=="function"?l:yn)}function Av(e,t,a,l,u){if(jr(e))throw Error(s(485));if(e=t.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){f.listeners.push(m)}};q.T!==null?a(!0):f.isTransition=!1,l(f),a=t.pending,a===null?(f.next=t.pending=f,rp(t,f)):(f.next=a.next,t.pending=a.next=f)}}function rp(e,t){var a=t.action,l=t.payload,u=e.state;if(t.isTransition){var f=q.T,m={};q.T=m;try{var y=a(u,l),T=q.S;T!==null&&T(m,y),sp(e,t,y)}catch(L){du(e,t,L)}finally{f!==null&&m.types!==null&&(f.types=m.types),q.T=f}}else try{f=a(u,l),sp(e,t,f)}catch(L){du(e,t,L)}}function sp(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){op(e,t,l)},function(l){return du(e,t,l)}):op(e,t,a)}function op(e,t,a){t.status="fulfilled",t.value=a,up(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,rp(e,a)))}function du(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,up(t),t=t.next;while(t!==l)}e.action=null}function up(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function cp(e,t){return t}function fp(e,t){if(Te){var a=Ue.formState;if(a!==null){e:{var l=me;if(Te){if(He){t:{for(var u=He,f=Vt;u.nodeType!==8;){if(!f){u=null;break t}if(u=$t(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){He=$t(u.nextSibling),l=u.data==="F!";break e}}qn(l)}l=!1}l&&(t=a[0])}}return a=pt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cp,lastRenderedState:t},a.queue=l,a=Mp.bind(null,me,l),l.dispatch=a,l=fu(!1),f=vu.bind(null,me,!1,l.queue),l=pt(),u={state:t,dispatch:null,action:e,pending:null},l.queue=u,a=Av.bind(null,me,u,f,a),u.dispatch=a,l.memoizedState=e,[t,a,!1]}function dp(e){var t=Ze();return pp(t,je,e)}function pp(e,t,a){if(t=uu(e,t,cp)[0],e=Mr(yn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ol(t)}catch(m){throw m===ii?br:m}else l=t;t=Ze();var u=t.queue,f=u.dispatch;return a!==t.memoizedState&&(me.flags|=2048,ui(9,{destroy:void 0},Ov.bind(null,u,a),null)),[l,f,e]}function Ov(e,t){e.action=t}function hp(e){var t=Ze(),a=je;if(a!==null)return pp(t,a,e);Ze(),t=t.memoizedState,a=Ze();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function ui(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=me.updateQueue,t===null&&(t=Or(),me.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function mp(){return Ze().memoizedState}function Rr(e,t,a,l){var u=pt();me.flags|=e,u.memoizedState=ui(1|t,{destroy:void 0},a,l===void 0?null:l)}function Dr(e,t,a,l){var u=Ze();l=l===void 0?null:l;var f=u.memoizedState.inst;je!==null&&l!==null&&au(l,je.memoizedState.deps)?u.memoizedState=ui(t,f,a,l):(me.flags|=e,u.memoizedState=ui(1|t,f,a,l))}function gp(e,t){Rr(8390656,8,e,t)}function pu(e,t){Dr(2048,8,e,t)}function _v(e){me.flags|=4;var t=me.updateQueue;if(t===null)t=Or(),me.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function xp(e){var t=Ze().memoizedState;return _v({ref:t,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function vp(e,t){return Dr(4,2,e,t)}function yp(e,t){return Dr(4,4,e,t)}function bp(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sp(e,t,a){a=a!=null?a.concat([e]):null,Dr(4,4,bp.bind(null,t,e),a)}function hu(){}function wp(e,t){var a=Ze();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&au(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Ep(e,t){var a=Ze();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&au(t,l[1]))return l[0];if(l=e(),Ca){Ln(!0);try{e()}finally{Ln(!1)}}return a.memoizedState=[l,t],l}function mu(e,t,a){return a===void 0||(vn&1073741824)!==0&&(Se&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Th(),me.lanes|=e,Fn|=e,a)}function Tp(e,t,a,l){return At(a,t)?a:ri.current!==null?(e=mu(e,a,l),At(e,t)||(We=!0),e):(vn&42)===0||(vn&1073741824)!==0&&(Se&261930)===0?(We=!0,e.memoizedState=a):(e=Th(),me.lanes|=e,Fn|=e,t)}function zp(e,t,a,l,u){var f=W.p;W.p=f!==0&&8>f?f:8;var m=q.T,y={};q.T=y,vu(e,!1,t,a);try{var T=u(),L=q.S;if(L!==null&&L(y,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var X=Tv(T,l);ul(e,t,X,jt(e))}else ul(e,t,l,jt(e))}catch(K){ul(e,t,{then:function(){},status:"rejected",reason:K},jt())}finally{W.p=f,m!==null&&y.types!==null&&(m.types=y.types),q.T=m}}function Mv(){}function gu(e,t,a,l){if(e.tag!==5)throw Error(s(476));var u=Cp(e).queue;zp(e,u,t,F,a===null?Mv:function(){return Ap(e),a(l)})}function Cp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ap(e){var t=Cp(e);t.next===null&&(t=e.alternate.memoizedState),ul(e,t.next.queue,{},jt())}function xu(){return st(Cl)}function Op(){return Ze().memoizedState}function _p(){return Ze().memoizedState}function Rv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=jt();e=Vn(a);var l=Xn(t,e,a);l!==null&&(St(l,t,a),il(l,t,a)),t={cache:Qo()},e.payload=t;return}t=t.return}}function Dv(e,t,a){var l=jt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},jr(e)?Rp(t,a):(a=Lo(e,t,a,l),a!==null&&(St(a,e,l),Dp(a,t,l)))}function Mp(e,t,a){var l=jt();ul(e,t,a,l)}function ul(e,t,a,l){var u={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(jr(e))Rp(t,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var m=t.lastRenderedState,y=f(m,a);if(u.hasEagerState=!0,u.eagerState=y,At(y,m))return pr(e,t,u,0),Ue===null&&dr(),!1}catch{}finally{}if(a=Lo(e,t,u,l),a!==null)return St(a,e,l),Dp(a,t,l),!0}return!1}function vu(e,t,a,l){if(l={lane:2,revertLane:Ju(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},jr(e)){if(t)throw Error(s(479))}else t=Lo(e,a,l,2),t!==null&&St(t,e,2)}function jr(e){var t=e.alternate;return e===me||t!==null&&t===me}function Rp(e,t){si=Cr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Dp(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Uf(e,a)}}var cl={readContext:st,use:_r,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve};cl.useEffectEvent=Ve;var jp={readContext:st,use:_r,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:gp,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Rr(4194308,4,bp.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Rr(4194308,4,e,t)},useInsertionEffect:function(e,t){Rr(4,2,e,t)},useMemo:function(e,t){var a=pt();t=t===void 0?null:t;var l=e();if(Ca){Ln(!0);try{e()}finally{Ln(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=pt();if(a!==void 0){var u=a(t);if(Ca){Ln(!0);try{a(t)}finally{Ln(!1)}}}else u=t;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=Dv.bind(null,me,e),[l.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:function(e){e=fu(e);var t=e.queue,a=Mp.bind(null,me,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:hu,useDeferredValue:function(e,t){var a=pt();return mu(a,e,t)},useTransition:function(){var e=fu(!1);return e=zp.bind(null,me,e.queue,!0,!1),pt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=me,u=pt();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),Ue===null)throw Error(s(349));(Se&127)!==0||ep(l,t,a)}u.memoizedState=a;var f={value:a,getSnapshot:t};return u.queue=f,gp(np.bind(null,l,f,e),[e]),l.flags|=2048,ui(9,{destroy:void 0},tp.bind(null,l,f,a,t),null),a},useId:function(){var e=pt(),t=Ue.identifierPrefix;if(Te){var a=tn,l=en;a=(l&~(1<<32-Ct(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ar++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=zv++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:xu,useFormState:fp,useActionState:fp,useOptimistic:function(e){var t=pt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=vu.bind(null,me,!0,a),a.dispatch=t,[e,t]},useMemoCache:ou,useCacheRefresh:function(){return pt().memoizedState=Rv.bind(null,me)},useEffectEvent:function(e){var t=pt(),a={impl:e};return t.memoizedState=a,function(){if((Oe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},yu={readContext:st,use:_r,useCallback:wp,useContext:st,useEffect:pu,useImperativeHandle:Sp,useInsertionEffect:vp,useLayoutEffect:yp,useMemo:Ep,useReducer:Mr,useRef:mp,useState:function(){return Mr(yn)},useDebugValue:hu,useDeferredValue:function(e,t){var a=Ze();return Tp(a,je.memoizedState,e,t)},useTransition:function(){var e=Mr(yn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:ol(e),t]},useSyncExternalStore:Id,useId:Op,useHostTransitionStatus:xu,useFormState:dp,useActionState:dp,useOptimistic:function(e,t){var a=Ze();return lp(a,je,e,t)},useMemoCache:ou,useCacheRefresh:_p};yu.useEffectEvent=xp;var Np={readContext:st,use:_r,useCallback:wp,useContext:st,useEffect:pu,useImperativeHandle:Sp,useInsertionEffect:vp,useLayoutEffect:yp,useMemo:Ep,useReducer:cu,useRef:mp,useState:function(){return cu(yn)},useDebugValue:hu,useDeferredValue:function(e,t){var a=Ze();return je===null?mu(a,e,t):Tp(a,je.memoizedState,e,t)},useTransition:function(){var e=cu(yn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:ol(e),t]},useSyncExternalStore:Id,useId:Op,useHostTransitionStatus:xu,useFormState:hp,useActionState:hp,useOptimistic:function(e,t){var a=Ze();return je!==null?lp(a,je,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ou,useCacheRefresh:_p};Np.useEffectEvent=xp;function bu(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:v({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Su={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=jt(),u=Vn(l);u.payload=t,a!=null&&(u.callback=a),t=Xn(e,u,l),t!==null&&(St(t,e,l),il(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=jt(),u=Vn(l);u.tag=1,u.payload=t,a!=null&&(u.callback=a),t=Xn(e,u,l),t!==null&&(St(t,e,l),il(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=jt(),l=Vn(a);l.tag=2,t!=null&&(l.callback=t),t=Xn(e,l,a),t!==null&&(St(t,e,a),il(t,e,a))}};function Lp(e,t,a,l,u,f,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,m):t.prototype&&t.prototype.isPureReactComponent?!Ji(a,l)||!Ji(u,f):!0}function Bp(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Su.enqueueReplaceState(t,t.state,null)}function Aa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Up(e){fr(e)}function Hp(e){console.error(e)}function Gp(e){fr(e)}function Nr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function qp(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function wu(e,t,a){return a=Vn(a),a.tag=3,a.payload={element:null},a.callback=function(){Nr(e,t)},a}function kp(e){return e=Vn(e),e.tag=3,e}function Yp(e,t,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;e.payload=function(){return u(f)},e.callback=function(){qp(t,a,l)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){qp(t,a,l),typeof u!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var y=l.stack;this.componentDidCatch(l.value,{componentStack:y!==null?y:""})})}function jv(e,t,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&ti(t,a,u,!0),a=_t.current,a!==null){switch(a.tag){case 31:case 13:return Xt===null?Qr():a.alternate===null&&Xe===0&&(Xe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===Sr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Zu(e,l,u)),!1;case 22:return a.flags|=65536,l===Sr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Zu(e,l,u)),!1}throw Error(s(435,a.tag))}return Zu(e,l,u),Qr(),!1}if(Te)return t=_t.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,l!==ko&&(e=Error(s(422),{cause:l}),Ii(qt(e,a)))):(l!==ko&&(t=Error(s(423),{cause:l}),Ii(qt(t,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=qt(l,a),u=wu(e.stateNode,l,u),Wo(e,u),Xe!==4&&(Xe=2)),!1;var f=Error(s(520),{cause:l});if(f=qt(f,a),vl===null?vl=[f]:vl.push(f),Xe!==4&&(Xe=2),t===null)return!0;l=qt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=wu(a.stateNode,l,e),Wo(a,e),!1;case 1:if(t=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Jn===null||!Jn.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=kp(u),Yp(u,e,a,l),Wo(a,u),!1}a=a.return}while(a!==null);return!1}var Eu=Error(s(461)),We=!1;function ot(e,t,a,l){t.child=e===null?Qd(t,null,a,l):za(t,e.child,a,l)}function Vp(e,t,a,l,u){a=a.render;var f=t.ref;if("ref"in l){var m={};for(var y in l)y!=="ref"&&(m[y]=l[y])}else m=l;return Sa(t),l=iu(e,t,a,m,f,u),y=lu(),e!==null&&!We?(ru(e,t,u),bn(e,t,u)):(Te&&y&&Go(t),t.flags|=1,ot(e,t,l,u),t.child)}function Xp(e,t,a,l,u){if(e===null){var f=a.type;return typeof f=="function"&&!Bo(f)&&f.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=f,$p(e,t,f,l,u)):(e=mr(a.type,null,l,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!Ru(e,u)){var m=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ji,a(m,l)&&e.ref===t.ref)return bn(e,t,u)}return t.flags|=1,e=hn(f,l),e.ref=t.ref,e.return=t,t.child=e}function $p(e,t,a,l,u){if(e!==null){var f=e.memoizedProps;if(Ji(f,l)&&e.ref===t.ref)if(We=!1,t.pendingProps=l=f,Ru(e,u))(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,bn(e,t,u)}return Tu(e,t,a,l,u)}function Qp(e,t,a,l){var u=l.children,f=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(l=t.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~f}else l=0,t.child=null;return Zp(e,t,f,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yr(t,f!==null?f.cachePool:null),f!==null?Fd(t,f):eu(),Jd(t);else return l=t.lanes=536870912,Zp(e,t,f!==null?f.baseLanes|a:a,a,l)}else f!==null?(yr(t,f.cachePool),Fd(t,f),Qn(),t.memoizedState=null):(e!==null&&yr(t,null),eu(),Qn());return ot(e,t,u,a),t.child}function fl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Zp(e,t,a,l,u){var f=Ko();return f=f===null?null:{parent:Je._currentValue,pool:f},t.memoizedState={baseLanes:a,cachePool:f},e!==null&&yr(t,null),eu(),Jd(t),e!==null&&ti(e,t,l,!0),t.childLanes=u,null}function Lr(e,t){return t=Ur({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Kp(e,t,a){return za(t,e.child,null,a),e=Lr(t,t.pendingProps),e.flags|=2,Mt(t),t.memoizedState=null,e}function Nv(e,t,a){var l=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Te){if(l.mode==="hidden")return e=Lr(t,l),t.lanes=536870912,fl(null,e);if(nu(t),(e=He)?(e=rm(e,Vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Hn!==null?{id:en,overflow:tn}:null,retryLane:536870912,hydrationErrors:null},a=Rd(e),a.return=t,t.child=a,rt=t,He=null)):e=null,e===null)throw qn(t);return t.lanes=536870912,null}return Lr(t,l)}var f=e.memoizedState;if(f!==null){var m=f.dehydrated;if(nu(t),u)if(t.flags&256)t.flags&=-257,t=Kp(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(We||ti(e,t,a,!1),u=(a&e.childLanes)!==0,We||u){if(l=Ue,l!==null&&(m=Hf(l,a),m!==0&&m!==f.retryLane))throw f.retryLane=m,xa(e,m),St(l,e,m),Eu;Qr(),t=Kp(e,t,a)}else e=f.treeContext,He=$t(m.nextSibling),rt=t,Te=!0,Gn=null,Vt=!1,e!==null&&Nd(t,e),t=Lr(t,l),t.flags|=4096;return t}return e=hn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Br(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Tu(e,t,a,l,u){return Sa(t),a=iu(e,t,a,l,void 0,u),l=lu(),e!==null&&!We?(ru(e,t,u),bn(e,t,u)):(Te&&l&&Go(t),t.flags|=1,ot(e,t,a,u),t.child)}function Fp(e,t,a,l,u,f){return Sa(t),t.updateQueue=null,a=Wd(t,l,a,u),Pd(e),l=lu(),e!==null&&!We?(ru(e,t,f),bn(e,t,f)):(Te&&l&&Go(t),t.flags|=1,ot(e,t,a,f),t.child)}function Jp(e,t,a,l,u){if(Sa(t),t.stateNode===null){var f=Pa,m=a.contextType;typeof m=="object"&&m!==null&&(f=st(m)),f=new a(l,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Su,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=l,f.state=t.memoizedState,f.refs={},Jo(t),m=a.contextType,f.context=typeof m=="object"&&m!==null?st(m):Pa,f.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(bu(t,a,m,l),f.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(m=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),m!==f.state&&Su.enqueueReplaceState(f,f.state,null),rl(t,l,f,u),ll(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){f=t.stateNode;var y=t.memoizedProps,T=Aa(a,y);f.props=T;var L=f.context,X=a.contextType;m=Pa,typeof X=="object"&&X!==null&&(m=st(X));var K=a.getDerivedStateFromProps;X=typeof K=="function"||typeof f.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,X||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y||L!==m)&&Bp(t,f,l,m),Yn=!1;var H=t.memoizedState;f.state=H,rl(t,l,f,u),ll(),L=t.memoizedState,y||H!==L||Yn?(typeof K=="function"&&(bu(t,a,K,l),L=t.memoizedState),(T=Yn||Lp(t,a,T,l,H,L,m))?(X||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=L),f.props=l,f.state=L,f.context=m,l=T):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{f=t.stateNode,Po(e,t),m=t.memoizedProps,X=Aa(a,m),f.props=X,K=t.pendingProps,H=f.context,L=a.contextType,T=Pa,typeof L=="object"&&L!==null&&(T=st(L)),y=a.getDerivedStateFromProps,(L=typeof y=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==K||H!==T)&&Bp(t,f,l,T),Yn=!1,H=t.memoizedState,f.state=H,rl(t,l,f,u),ll();var Y=t.memoizedState;m!==K||H!==Y||Yn||e!==null&&e.dependencies!==null&&xr(e.dependencies)?(typeof y=="function"&&(bu(t,a,y,l),Y=t.memoizedState),(X=Yn||Lp(t,a,X,l,H,Y,T)||e!==null&&e.dependencies!==null&&xr(e.dependencies))?(L||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,Y,T),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,Y,T)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=Y),f.props=l,f.state=Y,f.context=T,l=X):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),l=!1)}return f=l,Br(e,t),l=(t.flags&128)!==0,f||l?(f=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&l?(t.child=za(t,e.child,null,u),t.child=za(t,null,a,u)):ot(e,t,a,u),t.memoizedState=f.state,e=t.child):e=bn(e,t,u),e}function Pp(e,t,a,l){return ya(),t.flags|=256,ot(e,t,a,l),t.child}var zu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cu(e){return{baseLanes:e,cachePool:qd()}}function Au(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Dt),e}function Wp(e,t,a){var l=t.pendingProps,u=!1,f=(t.flags&128)!==0,m;if((m=f)||(m=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),m&&(u=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Te){if(u?$n(t):Qn(),(e=He)?(e=rm(e,Vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Hn!==null?{id:en,overflow:tn}:null,retryLane:536870912,hydrationErrors:null},a=Rd(e),a.return=t,t.child=a,rt=t,He=null)):e=null,e===null)throw qn(t);return uc(e)?t.lanes=32:t.lanes=536870912,null}var y=l.children;return l=l.fallback,u?(Qn(),u=t.mode,y=Ur({mode:"hidden",children:y},u),l=va(l,u,a,null),y.return=t,l.return=t,y.sibling=l,t.child=y,l=t.child,l.memoizedState=Cu(a),l.childLanes=Au(e,m,a),t.memoizedState=zu,fl(null,l)):($n(t),Ou(t,y))}var T=e.memoizedState;if(T!==null&&(y=T.dehydrated,y!==null)){if(f)t.flags&256?($n(t),t.flags&=-257,t=_u(e,t,a)):t.memoizedState!==null?(Qn(),t.child=e.child,t.flags|=128,t=null):(Qn(),y=l.fallback,u=t.mode,l=Ur({mode:"visible",children:l.children},u),y=va(y,u,a,null),y.flags|=2,l.return=t,y.return=t,l.sibling=y,t.child=l,za(t,e.child,null,a),l=t.child,l.memoizedState=Cu(a),l.childLanes=Au(e,m,a),t.memoizedState=zu,t=fl(null,l));else if($n(t),uc(y)){if(m=y.nextSibling&&y.nextSibling.dataset,m)var L=m.dgst;m=L,l=Error(s(419)),l.stack="",l.digest=m,Ii({value:l,source:null,stack:null}),t=_u(e,t,a)}else if(We||ti(e,t,a,!1),m=(a&e.childLanes)!==0,We||m){if(m=Ue,m!==null&&(l=Hf(m,a),l!==0&&l!==T.retryLane))throw T.retryLane=l,xa(e,l),St(m,e,l),Eu;oc(y)||Qr(),t=_u(e,t,a)}else oc(y)?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,He=$t(y.nextSibling),rt=t,Te=!0,Gn=null,Vt=!1,e!==null&&Nd(t,e),t=Ou(t,l.children),t.flags|=4096);return t}return u?(Qn(),y=l.fallback,u=t.mode,T=e.child,L=T.sibling,l=hn(T,{mode:"hidden",children:l.children}),l.subtreeFlags=T.subtreeFlags&65011712,L!==null?y=hn(L,y):(y=va(y,u,a,null),y.flags|=2),y.return=t,l.return=t,l.sibling=y,t.child=l,fl(null,l),l=t.child,y=e.child.memoizedState,y===null?y=Cu(a):(u=y.cachePool,u!==null?(T=Je._currentValue,u=u.parent!==T?{parent:T,pool:T}:u):u=qd(),y={baseLanes:y.baseLanes|a,cachePool:u}),l.memoizedState=y,l.childLanes=Au(e,m,a),t.memoizedState=zu,fl(e.child,l)):($n(t),a=e.child,e=a.sibling,a=hn(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function Ou(e,t){return t=Ur({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ur(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function _u(e,t,a){return za(t,e.child,null,a),e=Ou(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ip(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Xo(e.return,t,a)}function Mu(e,t,a,l,u,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u,treeForkCount:f}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=u,m.treeForkCount=f)}function eh(e,t,a){var l=t.pendingProps,u=l.revealOrder,f=l.tail;l=l.children;var m=Qe.current,y=(m&2)!==0;if(y?(m=m&1|2,t.flags|=128):m&=1,ee(Qe,m),ot(e,t,l,a),l=Te?Wi:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ip(e,a,t);else if(e.tag===19)Ip(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=t.child,u=null;a!==null;)e=a.alternate,e!==null&&zr(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=t.child,t.child=null):(u=a.sibling,a.sibling=null),Mu(t,!1,u,a,f,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&zr(e)===null){t.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Mu(t,!0,a,null,f,l);break;case"together":Mu(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function bn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ti(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=hn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=hn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ru(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xr(e)))}function Lv(e,t,a){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),kn(t,Je,e.memoizedState.cache),ya();break;case 27:case 5:un(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:kn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,nu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?($n(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Wp(e,t,a):($n(t),e=bn(e,t,a),e!==null?e.sibling:null);$n(t);break;case 19:var u=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(ti(e,t,a,!1),l=(a&t.childLanes)!==0),u){if(l)return eh(e,t,a);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ee(Qe,Qe.current),l)break;return null;case 22:return t.lanes=0,Qp(e,t,a,t.pendingProps);case 24:kn(t,Je,e.memoizedState.cache)}return bn(e,t,a)}function th(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!Ru(e,a)&&(t.flags&128)===0)return We=!1,Lv(e,t,a);We=(e.flags&131072)!==0}else We=!1,Te&&(t.flags&1048576)!==0&&jd(t,Wi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e=="function")Bo(e)?(l=Aa(e,l),t.tag=1,t=Jp(null,t,e,l,a)):(t.tag=0,t=Tu(null,t,e,l,a));else{if(e!=null){var u=e.$$typeof;if(u===Q){t.tag=11,t=Vp(null,t,e,l,a);break e}else if(u===B){t.tag=14,t=Xp(null,t,e,l,a);break e}}throw t=oe(e)||e,Error(s(306,t,""))}}return t;case 0:return Tu(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,u=Aa(l,t.pendingProps),Jp(e,t,l,u,a);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var f=t.memoizedState;u=f.element,Po(e,t),rl(t,l,null,a);var m=t.memoizedState;if(l=m.cache,kn(t,Je,l),l!==f.cache&&$o(t,[Je],a,!0),ll(),l=m.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=Pp(e,t,l,a);break e}else if(l!==u){u=qt(Error(s(424)),t),Ii(u),t=Pp(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=$t(e.firstChild),rt=t,Te=!0,Gn=null,Vt=!0,a=Qd(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ya(),l===u){t=bn(e,t,a);break e}ot(e,t,l,a)}t=t.child}return t;case 26:return Br(e,t),e===null?(a=dm(t.type,null,t.pendingProps,null))?t.memoizedState=a:Te||(a=t.type,e=t.pendingProps,l=Ir(he.current).createElement(a),l[lt]=t,l[mt]=e,ut(l,a,e),nt(l),t.stateNode=l):t.memoizedState=dm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return un(t),e===null&&Te&&(l=t.stateNode=um(t.type,t.pendingProps,he.current),rt=t,Vt=!0,u=He,ea(t.type)?(cc=u,He=$t(l.firstChild)):He=u),ot(e,t,t.pendingProps.children,a),Br(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Te&&((u=l=He)&&(l=f1(l,t.type,t.pendingProps,Vt),l!==null?(t.stateNode=l,rt=t,He=$t(l.firstChild),Vt=!1,u=!0):u=!1),u||qn(t)),un(t),u=t.type,f=t.pendingProps,m=e!==null?e.memoizedProps:null,l=f.children,lc(u,f)?l=null:m!==null&&lc(u,m)&&(t.flags|=32),t.memoizedState!==null&&(u=iu(e,t,Cv,null,null,a),Cl._currentValue=u),Br(e,t),ot(e,t,l,a),t.child;case 6:return e===null&&Te&&((e=a=He)&&(a=d1(a,t.pendingProps,Vt),a!==null?(t.stateNode=a,rt=t,He=null,e=!0):e=!1),e||qn(t)),null;case 13:return Wp(e,t,a);case 4:return $e(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=za(t,null,l,a):ot(e,t,l,a),t.child;case 11:return Vp(e,t,t.type,t.pendingProps,a);case 7:return ot(e,t,t.pendingProps,a),t.child;case 8:return ot(e,t,t.pendingProps.children,a),t.child;case 12:return ot(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,kn(t,t.type,l.value),ot(e,t,l.children,a),t.child;case 9:return u=t.type._context,l=t.pendingProps.children,Sa(t),u=st(u),l=l(u),t.flags|=1,ot(e,t,l,a),t.child;case 14:return Xp(e,t,t.type,t.pendingProps,a);case 15:return $p(e,t,t.type,t.pendingProps,a);case 19:return eh(e,t,a);case 31:return Nv(e,t,a);case 22:return Qp(e,t,a,t.pendingProps);case 24:return Sa(t),l=st(Je),e===null?(u=Ko(),u===null&&(u=Ue,f=Qo(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),t.memoizedState={parent:l,cache:u},Jo(t),kn(t,Je,u)):((e.lanes&a)!==0&&(Po(e,t),rl(t,null,null,a),ll()),u=e.memoizedState,f=t.memoizedState,u.parent!==l?(u={parent:l,cache:l},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),kn(t,Je,l)):(l=f.cache,kn(t,Je,l),l!==u.cache&&$o(t,[Je],a,!0))),ot(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Sn(e){e.flags|=4}function Du(e,t,a,l,u){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Oh())e.flags|=8192;else throw Ta=Sr,Fo}else e.flags&=-16777217}function nh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!xm(t))if(Oh())e.flags|=8192;else throw Ta=Sr,Fo}function Hr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Lf():536870912,e.lanes|=t,pi|=t)}function dl(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Bv(e,t,a){var l=t.pendingProps;switch(qo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return Ge(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),xn(Je),Me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ei(t)?Sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Yo())),Ge(t),null;case 26:var u=t.type,f=t.memoizedState;return e===null?(Sn(t),f!==null?(Ge(t),nh(t,f)):(Ge(t),Du(t,u,null,l,a))):f?f!==e.memoizedState?(Sn(t),Ge(t),nh(t,f)):(Ge(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Sn(t),Ge(t),Du(t,u,e,l,a)),null;case 27:if(cn(t),a=he.current,u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Ge(t),null}e=ae.current,ei(t)?Ld(t):(e=um(u,l,a),t.stateNode=e,Sn(t))}return Ge(t),null;case 5:if(cn(t),u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Ge(t),null}if(f=ae.current,ei(t))Ld(t);else{var m=Ir(he.current);switch(f){case 1:f=m.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=m.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=m.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=m.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=m.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof l.is=="string"?m.createElement("select",{is:l.is}):m.createElement("select"),l.multiple?f.multiple=!0:l.size&&(f.size=l.size);break;default:f=typeof l.is=="string"?m.createElement(u,{is:l.is}):m.createElement(u)}}f[lt]=t,f[mt]=l;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)f.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=f;e:switch(ut(f,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Sn(t)}}return Ge(t),Du(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=he.current,ei(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,u=rt,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[lt]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Wh(e.nodeValue,a)),e||qn(t,!0)}else e=Ir(e).createTextNode(l),e[lt]=t,t.stateNode=e}return Ge(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ei(t),a!==null){if(e===null){if(!l)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[lt]=t}else ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ge(t),e=!1}else a=Yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Mt(t),t):(Mt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Ge(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ei(t),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[lt]=t}else ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ge(t),u=!1}else u=Yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(Mt(t),t):(Mt(t),null)}return Mt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),f=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Hr(t,t.updateQueue),Ge(t),null);case 4:return Me(),e===null&&ec(t.stateNode.containerInfo),Ge(t),null;case 10:return xn(t.type),Ge(t),null;case 19:if(V(Qe),l=t.memoizedState,l===null)return Ge(t),null;if(u=(t.flags&128)!==0,f=l.rendering,f===null)if(u)dl(l,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=zr(e),f!==null){for(t.flags|=128,dl(l,!1),e=f.updateQueue,t.updateQueue=e,Hr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Md(a,e),a=a.sibling;return ee(Qe,Qe.current&1|2),Te&&mn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Tt()>Vr&&(t.flags|=128,u=!0,dl(l,!1),t.lanes=4194304)}else{if(!u)if(e=zr(f),e!==null){if(t.flags|=128,u=!0,e=e.updateQueue,t.updateQueue=e,Hr(t,e),dl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!f.alternate&&!Te)return Ge(t),null}else 2*Tt()-l.renderingStartTime>Vr&&a!==536870912&&(t.flags|=128,u=!0,dl(l,!1),t.lanes=4194304);l.isBackwards?(f.sibling=t.child,t.child=f):(e=l.last,e!==null?e.sibling=f:t.child=f,l.last=f)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Tt(),e.sibling=null,a=Qe.current,ee(Qe,u?a&1|2:a&1),Te&&mn(t,l.treeForkCount),e):(Ge(t),null);case 22:case 23:return Mt(t),tu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),a=t.updateQueue,a!==null&&Hr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&V(wa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),xn(Je),Ge(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Uv(e,t){switch(qo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(Je),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return cn(t),null;case 31:if(t.memoizedState!==null){if(Mt(t),t.alternate===null)throw Error(s(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Qe),null;case 4:return Me(),null;case 10:return xn(t.type),null;case 22:case 23:return Mt(t),tu(),e!==null&&V(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xn(Je),null;case 25:return null;default:return null}}function ah(e,t){switch(qo(t),t.tag){case 3:xn(Je),Me();break;case 26:case 27:case 5:cn(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&Mt(t);break;case 13:Mt(t);break;case 19:V(Qe);break;case 10:xn(t.type);break;case 22:case 23:Mt(t),tu(),e!==null&&V(wa);break;case 24:xn(Je)}}function pl(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&e)===e){l=void 0;var f=a.create,m=a.inst;l=f(),m.destroy=l}a=a.next}while(a!==u)}}catch(y){De(t,t.return,y)}}function Zn(e,t,a){try{var l=t.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&e)===e){var m=l.inst,y=m.destroy;if(y!==void 0){m.destroy=void 0,u=t;var T=a,L=y;try{L()}catch(X){De(u,T,X)}}}l=l.next}while(l!==f)}}catch(X){De(t,t.return,X)}}function ih(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Kd(t,a)}catch(l){De(e,e.return,l)}}}function lh(e,t,a){a.props=Aa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){De(e,t,l)}}function hl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(u){De(e,t,u)}}function nn(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){De(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){De(e,t,u)}else a.current=null}function rh(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){De(e,e.return,u)}}function ju(e,t,a){try{var l=e.stateNode;l1(l,e.type,a,t),l[mt]=t}catch(u){De(e,e.return,u)}}function sh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ea(e.type)||e.tag===4}function Nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lu(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=dn));else if(l!==4&&(l===27&&ea(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Lu(e,t,a),e=e.sibling;e!==null;)Lu(e,t,a),e=e.sibling}function Gr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ea(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Gr(e,t,a),e=e.sibling;e!==null;)Gr(e,t,a),e=e.sibling}function oh(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);ut(t,l,a),t[lt]=e,t[mt]=a}catch(f){De(e,e.return,f)}}var wn=!1,Ie=!1,Bu=!1,uh=typeof WeakSet=="function"?WeakSet:Set,at=null;function Hv(e,t){if(e=e.containerInfo,ac=rs,e=Sd(e),_o(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var m=0,y=-1,T=-1,L=0,X=0,K=e,H=null;t:for(;;){for(var Y;K!==a||u!==0&&K.nodeType!==3||(y=m+u),K!==f||l!==0&&K.nodeType!==3||(T=m+l),K.nodeType===3&&(m+=K.nodeValue.length),(Y=K.firstChild)!==null;)H=K,K=Y;for(;;){if(K===e)break t;if(H===a&&++L===u&&(y=m),H===f&&++X===l&&(T=m),(Y=K.nextSibling)!==null)break;K=H,H=K.parentNode}K=Y}a=y===-1||T===-1?null:{start:y,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(ic={focusedElem:e,selectionRange:a},rs=!1,at=t;at!==null;)if(t=at,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,at=e;else for(;at!==null;){switch(t=at,f=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=t,u=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var le=Aa(a.type,u);e=l.getSnapshotBeforeUpdate(le,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(ce){De(a,a.return,ce)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)sc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,at=e;break}at=t.return}}function ch(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Tn(e,a),l&4&&pl(5,a);break;case 1:if(Tn(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){De(a,a.return,m)}else{var u=Aa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){De(a,a.return,m)}}l&64&&ih(a),l&512&&hl(a,a.return);break;case 3:if(Tn(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Kd(e,t)}catch(m){De(a,a.return,m)}}break;case 27:t===null&&l&4&&oh(a);case 26:case 5:Tn(e,a),t===null&&l&4&&rh(a),l&512&&hl(a,a.return);break;case 12:Tn(e,a);break;case 31:Tn(e,a),l&4&&ph(e,a);break;case 13:Tn(e,a),l&4&&hh(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Zv.bind(null,a),p1(e,a))));break;case 22:if(l=a.memoizedState!==null||wn,!l){t=t!==null&&t.memoizedState!==null||Ie,u=wn;var f=Ie;wn=l,(Ie=t)&&!f?zn(e,a,(a.subtreeFlags&8772)!==0):Tn(e,a),wn=u,Ie=f}break;case 30:break;default:Tn(e,a)}}function fh(e){var t=e.alternate;t!==null&&(e.alternate=null,fh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&fo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,xt=!1;function En(e,t,a){for(a=a.child;a!==null;)dh(e,t,a),a=a.sibling}function dh(e,t,a){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Hi,a)}catch{}switch(a.tag){case 26:Ie||nn(a,t),En(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ie||nn(a,t);var l=ke,u=xt;ea(a.type)&&(ke=a.stateNode,xt=!1),En(e,t,a),El(a.stateNode),ke=l,xt=u;break;case 5:Ie||nn(a,t);case 6:if(l=ke,u=xt,ke=null,En(e,t,a),ke=l,xt=u,ke!==null)if(xt)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode)}catch(f){De(a,t,f)}else try{ke.removeChild(a.stateNode)}catch(f){De(a,t,f)}break;case 18:ke!==null&&(xt?(e=ke,im(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Si(e)):im(ke,a.stateNode));break;case 4:l=ke,u=xt,ke=a.stateNode.containerInfo,xt=!0,En(e,t,a),ke=l,xt=u;break;case 0:case 11:case 14:case 15:Zn(2,a,t),Ie||Zn(4,a,t),En(e,t,a);break;case 1:Ie||(nn(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&lh(a,t,l)),En(e,t,a);break;case 21:En(e,t,a);break;case 22:Ie=(l=Ie)||a.memoizedState!==null,En(e,t,a),Ie=l;break;default:En(e,t,a)}}function ph(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Si(e)}catch(a){De(t,t.return,a)}}}function hh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Si(e)}catch(a){De(t,t.return,a)}}function Gv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new uh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new uh),t;default:throw Error(s(435,e.tag))}}function qr(e,t){var a=Gv(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var u=Kv.bind(null,e,l);l.then(u,u)}})}function vt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],f=e,m=t,y=m;e:for(;y!==null;){switch(y.tag){case 27:if(ea(y.type)){ke=y.stateNode,xt=!1;break e}break;case 5:ke=y.stateNode,xt=!1;break e;case 3:case 4:ke=y.stateNode.containerInfo,xt=!0;break e}y=y.return}if(ke===null)throw Error(s(160));dh(f,m,u),ke=null,xt=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)mh(t,e),t=t.sibling}var Ft=null;function mh(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),yt(e),l&4&&(Zn(3,e,e.return),pl(3,e),Zn(5,e,e.return));break;case 1:vt(t,e),yt(e),l&512&&(Ie||a===null||nn(a,a.return)),l&64&&wn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=Ft;if(vt(t,e),yt(e),l&512&&(Ie||a===null||nn(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ki]||f[lt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),ut(f,l,a),f[lt]=e,nt(f),l=f;break e;case"link":var m=mm("link","href",u).get(l+(a.href||""));if(m){for(var y=0;y<m.length;y++)if(f=m[y],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(y,1);break t}}f=u.createElement(l),ut(f,l,a),u.head.appendChild(f);break;case"meta":if(m=mm("meta","content",u).get(l+(a.content||""))){for(y=0;y<m.length;y++)if(f=m[y],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(y,1);break t}}f=u.createElement(l),ut(f,l,a),u.head.appendChild(f);break;default:throw Error(s(468,l))}f[lt]=e,nt(f),l=f}e.stateNode=l}else gm(u,e.type,e.stateNode);else e.stateNode=hm(u,l,e.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?gm(u,e.type,e.stateNode):hm(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ju(e,e.memoizedProps,a.memoizedProps)}break;case 27:vt(t,e),yt(e),l&512&&(Ie||a===null||nn(a,a.return)),a!==null&&l&4&&ju(e,e.memoizedProps,a.memoizedProps);break;case 5:if(vt(t,e),yt(e),l&512&&(Ie||a===null||nn(a,a.return)),e.flags&32){u=e.stateNode;try{Xa(u,"")}catch(le){De(e,e.return,le)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,ju(e,u,a!==null?a.memoizedProps:u)),l&1024&&(Bu=!0);break;case 6:if(vt(t,e),yt(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(le){De(e,e.return,le)}}break;case 3:if(ns=null,u=Ft,Ft=es(t.containerInfo),vt(t,e),Ft=u,yt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Si(t.containerInfo)}catch(le){De(e,e.return,le)}Bu&&(Bu=!1,gh(e));break;case 4:l=Ft,Ft=es(e.stateNode.containerInfo),vt(t,e),yt(e),Ft=l;break;case 12:vt(t,e),yt(e);break;case 31:vt(t,e),yt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,qr(e,l)));break;case 13:vt(t,e),yt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yr=Tt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,qr(e,l)));break;case 22:u=e.memoizedState!==null;var T=a!==null&&a.memoizedState!==null,L=wn,X=Ie;if(wn=L||u,Ie=X||T,vt(t,e),Ie=X,wn=L,yt(e),l&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(a===null||T||wn||Ie||Oa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){T=a=t;try{if(f=T.stateNode,u)m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{y=T.stateNode;var K=T.memoizedProps.style,H=K!=null&&K.hasOwnProperty("display")?K.display:null;y.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(le){De(T,T.return,le)}}}else if(t.tag===6){if(a===null){T=t;try{T.stateNode.nodeValue=u?"":T.memoizedProps}catch(le){De(T,T.return,le)}}}else if(t.tag===18){if(a===null){T=t;try{var Y=T.stateNode;u?lm(Y,!0):lm(T.stateNode,!1)}catch(le){De(T,T.return,le)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,qr(e,a))));break;case 19:vt(t,e),yt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,qr(e,l)));break;case 30:break;case 21:break;default:vt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(sh(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Nu(e);Gr(e,f,u);break;case 5:var m=a.stateNode;a.flags&32&&(Xa(m,""),a.flags&=-33);var y=Nu(e);Gr(e,y,m);break;case 3:case 4:var T=a.stateNode.containerInfo,L=Nu(e);Lu(e,L,T);break;default:throw Error(s(161))}}catch(X){De(e,e.return,X)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;gh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ch(e,t.alternate,t),t=t.sibling}function Oa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Zn(4,t,t.return),Oa(t);break;case 1:nn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&lh(t,t.return,a),Oa(t);break;case 27:El(t.stateNode);case 26:case 5:nn(t,t.return),Oa(t);break;case 22:t.memoizedState===null&&Oa(t);break;case 30:Oa(t);break;default:Oa(t)}e=e.sibling}}function zn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,u=e,f=t,m=f.flags;switch(f.tag){case 0:case 11:case 15:zn(u,f,a),pl(4,f);break;case 1:if(zn(u,f,a),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(L){De(l,l.return,L)}if(l=f,u=l.updateQueue,u!==null){var y=l.stateNode;try{var T=u.shared.hiddenCallbacks;if(T!==null)for(u.shared.hiddenCallbacks=null,u=0;u<T.length;u++)Zd(T[u],y)}catch(L){De(l,l.return,L)}}a&&m&64&&ih(f),hl(f,f.return);break;case 27:oh(f);case 26:case 5:zn(u,f,a),a&&l===null&&m&4&&rh(f),hl(f,f.return);break;case 12:zn(u,f,a);break;case 31:zn(u,f,a),a&&m&4&&ph(u,f);break;case 13:zn(u,f,a),a&&m&4&&hh(u,f);break;case 22:f.memoizedState===null&&zn(u,f,a),hl(f,f.return);break;case 30:break;default:zn(u,f,a)}t=t.sibling}}function Uu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&el(a))}function Hu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&el(e))}function Jt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xh(e,t,a,l),t=t.sibling}function xh(e,t,a,l){var u=t.flags;switch(t.tag){case 0:case 11:case 15:Jt(e,t,a,l),u&2048&&pl(9,t);break;case 1:Jt(e,t,a,l);break;case 3:Jt(e,t,a,l),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&el(e)));break;case 12:if(u&2048){Jt(e,t,a,l),e=t.stateNode;try{var f=t.memoizedProps,m=f.id,y=f.onPostCommit;typeof y=="function"&&y(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){De(t,t.return,T)}}else Jt(e,t,a,l);break;case 31:Jt(e,t,a,l);break;case 13:Jt(e,t,a,l);break;case 23:break;case 22:f=t.stateNode,m=t.alternate,t.memoizedState!==null?f._visibility&2?Jt(e,t,a,l):ml(e,t):f._visibility&2?Jt(e,t,a,l):(f._visibility|=2,ci(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),u&2048&&Uu(m,t);break;case 24:Jt(e,t,a,l),u&2048&&Hu(t.alternate,t);break;default:Jt(e,t,a,l)}}function ci(e,t,a,l,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var f=e,m=t,y=a,T=l,L=m.flags;switch(m.tag){case 0:case 11:case 15:ci(f,m,y,T,u),pl(8,m);break;case 23:break;case 22:var X=m.stateNode;m.memoizedState!==null?X._visibility&2?ci(f,m,y,T,u):ml(f,m):(X._visibility|=2,ci(f,m,y,T,u)),u&&L&2048&&Uu(m.alternate,m);break;case 24:ci(f,m,y,T,u),u&&L&2048&&Hu(m.alternate,m);break;default:ci(f,m,y,T,u)}t=t.sibling}}function ml(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,u=l.flags;switch(l.tag){case 22:ml(a,l),u&2048&&Uu(l.alternate,l);break;case 24:ml(a,l),u&2048&&Hu(l.alternate,l);break;default:ml(a,l)}t=t.sibling}}var gl=8192;function fi(e,t,a){if(e.subtreeFlags&gl)for(e=e.child;e!==null;)vh(e,t,a),e=e.sibling}function vh(e,t,a){switch(e.tag){case 26:fi(e,t,a),e.flags&gl&&e.memoizedState!==null&&z1(a,Ft,e.memoizedState,e.memoizedProps);break;case 5:fi(e,t,a);break;case 3:case 4:var l=Ft;Ft=es(e.stateNode.containerInfo),fi(e,t,a),Ft=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=gl,gl=16777216,fi(e,t,a),gl=l):fi(e,t,a));break;default:fi(e,t,a)}}function yh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];at=l,Sh(l,e)}yh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bh(e),e=e.sibling}function bh(e){switch(e.tag){case 0:case 11:case 15:xl(e),e.flags&2048&&Zn(9,e,e.return);break;case 3:xl(e);break;case 12:xl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,kr(e)):xl(e);break;default:xl(e)}}function kr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];at=l,Sh(l,e)}yh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zn(8,t,t.return),kr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,kr(t));break;default:kr(t)}e=e.sibling}}function Sh(e,t){for(;at!==null;){var a=at;switch(a.tag){case 0:case 11:case 15:Zn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:el(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,at=l;else e:for(a=e;at!==null;){l=at;var u=l.sibling,f=l.return;if(fh(l),l===a){at=null;break e}if(u!==null){u.return=f,at=u;break e}at=f}}}var qv={getCacheForType:function(e){var t=st(Je),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return st(Je).controller.signal}},kv=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ue=null,ye=null,Se=0,Re=0,Rt=null,Kn=!1,di=!1,Gu=!1,Cn=0,Xe=0,Fn=0,_a=0,qu=0,Dt=0,pi=0,vl=null,bt=null,ku=!1,Yr=0,wh=0,Vr=1/0,Xr=null,Jn=null,tt=0,Pn=null,hi=null,An=0,Yu=0,Vu=null,Eh=null,yl=0,Xu=null;function jt(){return(Oe&2)!==0&&Se!==0?Se&-Se:q.T!==null?Ju():Gf()}function Th(){if(Dt===0)if((Se&536870912)===0||Te){var e=Wl;Wl<<=1,(Wl&3932160)===0&&(Wl=262144),Dt=e}else Dt=536870912;return e=_t.current,e!==null&&(e.flags|=32),Dt}function St(e,t,a){(e===Ue&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(mi(e,0),Wn(e,Se,Dt,!1)),qi(e,a),((Oe&2)===0||e!==Ue)&&(e===Ue&&((Oe&2)===0&&(_a|=a),Xe===4&&Wn(e,Se,Dt,!1)),an(e))}function zh(e,t,a){if((Oe&6)!==0)throw Error(s(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Gi(e,t),u=l?Xv(e,t):Qu(e,t,!0),f=l;do{if(u===0){di&&!l&&Wn(e,t,0,!1);break}else{if(a=e.current.alternate,f&&!Yv(a)){u=Qu(e,t,!1),f=!1;continue}if(u===2){if(f=t,e.errorRecoveryDisabledLanes&f)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var y=e;u=vl;var T=y.current.memoizedState.isDehydrated;if(T&&(mi(y,m).flags|=256),m=Qu(y,m,!1),m!==2){if(Gu&&!T){y.errorRecoveryDisabledLanes|=f,_a|=f,u=4;break e}f=bt,bt=u,f!==null&&(bt===null?bt=f:bt.push.apply(bt,f))}u=m}if(f=!1,u!==2)continue}}if(u===1){mi(e,0),Wn(e,t,0,!0);break}e:{switch(l=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Wn(l,t,Dt,!Kn);break e;case 2:bt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(u=Yr+300-Tt(),10<u)){if(Wn(l,t,Dt,!Kn),er(l,0,!0)!==0)break e;An=t,l.timeoutHandle=nm(Ch.bind(null,l,a,bt,Xr,ku,t,Dt,_a,pi,Kn,f,"Throttled",-0,0),u);break e}Ch(l,a,bt,Xr,ku,t,Dt,_a,pi,Kn,f,null,-0,0)}}break}while(!0);an(e)}function Ch(e,t,a,l,u,f,m,y,T,L,X,K,H,Y){if(e.timeoutHandle=-1,K=t.subtreeFlags,K&8192||(K&16785408)===16785408){K={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},vh(t,f,K);var le=(f&62914560)===f?Yr-Tt():(f&4194048)===f?wh-Tt():0;if(le=C1(K,le),le!==null){An=f,e.cancelPendingCommit=le(Nh.bind(null,e,t,f,a,l,u,m,y,T,X,K,null,H,Y)),Wn(e,f,m,!L);return}}Nh(e,t,f,a,l,u,m,y,T)}function Yv(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],f=u.getSnapshot;u=u.value;try{if(!At(f(),u))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wn(e,t,a,l){t&=~qu,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var u=t;0<u;){var f=31-Ct(u),m=1<<f;l[f]=-1,u&=~m}a!==0&&Bf(e,a,t)}function $r(){return(Oe&6)===0?(bl(0),!1):!0}function $u(){if(ye!==null){if(Re===0)var e=ye.return;else e=ye,gn=ba=null,su(e),li=null,nl=0,e=ye;for(;e!==null;)ah(e.alternate,e),e=e.return;ye=null}}function mi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,o1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),An=0,$u(),Ue=e,ye=a=hn(e.current,null),Se=t,Re=0,Rt=null,Kn=!1,di=Gi(e,t),Gu=!1,pi=Dt=qu=_a=Fn=Xe=0,bt=vl=null,ku=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var u=31-Ct(l),f=1<<u;t|=e[u],l&=~f}return Cn=t,dr(),a}function Ah(e,t){me=null,q.H=cl,t===ii||t===br?(t=Vd(),Re=3):t===Fo?(t=Vd(),Re=4):Re=t===Eu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Rt=t,ye===null&&(Xe=1,Nr(e,qt(t,e.current)))}function Oh(){var e=_t.current;return e===null?!0:(Se&4194048)===Se?Xt===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Xt:!1}function _h(){var e=q.H;return q.H=cl,e===null?cl:e}function Mh(){var e=q.A;return q.A=qv,e}function Qr(){Xe=4,Kn||(Se&4194048)!==Se&&_t.current!==null||(di=!0),(Fn&134217727)===0&&(_a&134217727)===0||Ue===null||Wn(Ue,Se,Dt,!1)}function Qu(e,t,a){var l=Oe;Oe|=2;var u=_h(),f=Mh();(Ue!==e||Se!==t)&&(Xr=null,mi(e,t)),t=!1;var m=Xe;e:do try{if(Re!==0&&ye!==null){var y=ye,T=Rt;switch(Re){case 8:$u(),m=6;break e;case 3:case 2:case 9:case 6:_t.current===null&&(t=!0);var L=Re;if(Re=0,Rt=null,gi(e,y,T,L),a&&di){m=0;break e}break;default:L=Re,Re=0,Rt=null,gi(e,y,T,L)}}Vv(),m=Xe;break}catch(X){Ah(e,X)}while(!0);return t&&e.shellSuspendCounter++,gn=ba=null,Oe=l,q.H=u,q.A=f,ye===null&&(Ue=null,Se=0,dr()),m}function Vv(){for(;ye!==null;)Rh(ye)}function Xv(e,t){var a=Oe;Oe|=2;var l=_h(),u=Mh();Ue!==e||Se!==t?(Xr=null,Vr=Tt()+500,mi(e,t)):di=Gi(e,t);e:do try{if(Re!==0&&ye!==null){t=ye;var f=Rt;t:switch(Re){case 1:Re=0,Rt=null,gi(e,t,f,1);break;case 2:case 9:if(kd(f)){Re=0,Rt=null,Dh(t);break}t=function(){Re!==2&&Re!==9||Ue!==e||(Re=7),an(e)},f.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:kd(f)?(Re=0,Rt=null,Dh(t)):(Re=0,Rt=null,gi(e,t,f,7));break;case 5:var m=null;switch(ye.tag){case 26:m=ye.memoizedState;case 5:case 27:var y=ye;if(m?xm(m):y.stateNode.complete){Re=0,Rt=null;var T=y.sibling;if(T!==null)ye=T;else{var L=y.return;L!==null?(ye=L,Zr(L)):ye=null}break t}}Re=0,Rt=null,gi(e,t,f,5);break;case 6:Re=0,Rt=null,gi(e,t,f,6);break;case 8:$u(),Xe=6;break e;default:throw Error(s(462))}}$v();break}catch(X){Ah(e,X)}while(!0);return gn=ba=null,q.H=l,q.A=u,Oe=a,ye!==null?0:(Ue=null,Se=0,dr(),Xe)}function $v(){for(;ye!==null&&!hx();)Rh(ye)}function Rh(e){var t=th(e.alternate,e,Cn);e.memoizedProps=e.pendingProps,t===null?Zr(e):ye=t}function Dh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Fp(a,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=Fp(a,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:su(t);default:ah(a,t),t=ye=Md(t,Cn),t=th(a,t,Cn)}e.memoizedProps=e.pendingProps,t===null?Zr(e):ye=t}function gi(e,t,a,l){gn=ba=null,su(t),li=null,nl=0;var u=t.return;try{if(jv(e,u,t,a,Se)){Xe=1,Nr(e,qt(a,e.current)),ye=null;return}}catch(f){if(u!==null)throw ye=u,f;Xe=1,Nr(e,qt(a,e.current)),ye=null;return}t.flags&32768?(Te||l===1?e=!0:di||(Se&536870912)!==0?e=!1:(Kn=e=!0,(l===2||l===9||l===3||l===6)&&(l=_t.current,l!==null&&l.tag===13&&(l.flags|=16384))),jh(t,e)):Zr(t)}function Zr(e){var t=e;do{if((t.flags&32768)!==0){jh(t,Kn);return}e=t.return;var a=Bv(t.alternate,t,Cn);if(a!==null){ye=a;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Xe===0&&(Xe=5)}function jh(e,t){do{var a=Uv(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);Xe=6,ye=null}function Nh(e,t,a,l,u,f,m,y,T){e.cancelPendingCommit=null;do Kr();while(tt!==0);if((Oe&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(f=t.lanes|t.childLanes,f|=No,Tx(e,a,f,m,y,T),e===Ue&&(ye=Ue=null,Se=0),hi=t,Pn=e,An=a,Yu=f,Vu=u,Eh=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fv(Jl,function(){return Gh(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=q.T,q.T=null,u=W.p,W.p=2,m=Oe,Oe|=4;try{Hv(e,t,a)}finally{Oe=m,W.p=u,q.T=l}}tt=1,Lh(),Bh(),Uh()}}function Lh(){if(tt===1){tt=0;var e=Pn,t=hi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=q.T,q.T=null;var l=W.p;W.p=2;var u=Oe;Oe|=4;try{mh(t,e);var f=ic,m=Sd(e.containerInfo),y=f.focusedElem,T=f.selectionRange;if(m!==y&&y&&y.ownerDocument&&bd(y.ownerDocument.documentElement,y)){if(T!==null&&_o(y)){var L=T.start,X=T.end;if(X===void 0&&(X=L),"selectionStart"in y)y.selectionStart=L,y.selectionEnd=Math.min(X,y.value.length);else{var K=y.ownerDocument||document,H=K&&K.defaultView||window;if(H.getSelection){var Y=H.getSelection(),le=y.textContent.length,ce=Math.min(T.start,le),Le=T.end===void 0?ce:Math.min(T.end,le);!Y.extend&&ce>Le&&(m=Le,Le=ce,ce=m);var R=yd(y,ce),O=yd(y,Le);if(R&&O&&(Y.rangeCount!==1||Y.anchorNode!==R.node||Y.anchorOffset!==R.offset||Y.focusNode!==O.node||Y.focusOffset!==O.offset)){var N=K.createRange();N.setStart(R.node,R.offset),Y.removeAllRanges(),ce>Le?(Y.addRange(N),Y.extend(O.node,O.offset)):(N.setEnd(O.node,O.offset),Y.addRange(N))}}}}for(K=[],Y=y;Y=Y.parentNode;)Y.nodeType===1&&K.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<K.length;y++){var Z=K[y];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}rs=!!ac,ic=ac=null}finally{Oe=u,W.p=l,q.T=a}}e.current=t,tt=2}}function Bh(){if(tt===2){tt=0;var e=Pn,t=hi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=q.T,q.T=null;var l=W.p;W.p=2;var u=Oe;Oe|=4;try{ch(e,t.alternate,t)}finally{Oe=u,W.p=l,q.T=a}}tt=3}}function Uh(){if(tt===4||tt===3){tt=0,mx();var e=Pn,t=hi,a=An,l=Eh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?tt=5:(tt=0,hi=Pn=null,Hh(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Jn=null),uo(a),t=t.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Hi,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=q.T,u=W.p,W.p=2,q.T=null;try{for(var f=e.onRecoverableError,m=0;m<l.length;m++){var y=l[m];f(y.value,{componentStack:y.stack})}}finally{q.T=t,W.p=u}}(An&3)!==0&&Kr(),an(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Xu?yl++:(yl=0,Xu=e):yl=0,bl(0)}}function Hh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,el(t)))}function Kr(){return Lh(),Bh(),Uh(),Gh()}function Gh(){if(tt!==5)return!1;var e=Pn,t=Yu;Yu=0;var a=uo(An),l=q.T,u=W.p;try{W.p=32>a?32:a,q.T=null,a=Vu,Vu=null;var f=Pn,m=An;if(tt=0,hi=Pn=null,An=0,(Oe&6)!==0)throw Error(s(331));var y=Oe;if(Oe|=4,bh(f.current),xh(f,f.current,m,a),Oe=y,bl(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Hi,f)}catch{}return!0}finally{W.p=u,q.T=l,Hh(e,t)}}function qh(e,t,a){t=qt(a,t),t=wu(e.stateNode,t,2),e=Xn(e,t,2),e!==null&&(qi(e,2),an(e))}function De(e,t,a){if(e.tag===3)qh(e,e,a);else for(;t!==null;){if(t.tag===3){qh(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Jn===null||!Jn.has(l))){e=qt(a,e),a=kp(2),l=Xn(t,a,2),l!==null&&(Yp(a,l,t,e),qi(l,2),an(l));break}}t=t.return}}function Zu(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new kv;var u=new Set;l.set(t,u)}else u=l.get(t),u===void 0&&(u=new Set,l.set(t,u));u.has(a)||(Gu=!0,u.add(a),e=Qv.bind(null,e,t,a),t.then(e,e))}function Qv(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ue===e&&(Se&a)===a&&(Xe===4||Xe===3&&(Se&62914560)===Se&&300>Tt()-Yr?(Oe&2)===0&&mi(e,0):qu|=a,pi===Se&&(pi=0)),an(e)}function kh(e,t){t===0&&(t=Lf()),e=xa(e,t),e!==null&&(qi(e,t),an(e))}function Zv(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),kh(e,a)}function Kv(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),kh(e,a)}function Fv(e,t){return lo(e,t)}var Fr=null,xi=null,Ku=!1,Jr=!1,Fu=!1,In=0;function an(e){e!==xi&&e.next===null&&(xi===null?Fr=xi=e:xi=xi.next=e),Jr=!0,Ku||(Ku=!0,Pv())}function bl(e,t){if(!Fu&&Jr){Fu=!0;do for(var a=!1,l=Fr;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var m=l.suspendedLanes,y=l.pingedLanes;f=(1<<31-Ct(42|e)+1)-1,f&=u&~(m&~y),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,$h(l,f))}else f=Se,f=er(l,l===Ue?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||Gi(l,f)||(a=!0,$h(l,f));l=l.next}while(a);Fu=!1}}function Jv(){Yh()}function Yh(){Jr=Ku=!1;var e=0;In!==0&&s1()&&(e=In);for(var t=Tt(),a=null,l=Fr;l!==null;){var u=l.next,f=Vh(l,t);f===0?(l.next=null,a===null?Fr=u:a.next=u,u===null&&(xi=a)):(a=l,(e!==0||(f&3)!==0)&&(Jr=!0)),l=u}tt!==0&&tt!==5||bl(e),In!==0&&(In=0)}function Vh(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var m=31-Ct(f),y=1<<m,T=u[m];T===-1?((y&a)===0||(y&l)!==0)&&(u[m]=Ex(y,t)):T<=t&&(e.expiredLanes|=y),f&=~y}if(t=Ue,a=Se,a=er(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ro(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Gi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ro(l),uo(a)){case 2:case 8:a=jf;break;case 32:a=Jl;break;case 268435456:a=Nf;break;default:a=Jl}return l=Xh.bind(null,e),a=lo(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ro(l),e.callbackPriority=2,e.callbackNode=null,2}function Xh(e,t){if(tt!==0&&tt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Kr()&&e.callbackNode!==a)return null;var l=Se;return l=er(e,e===Ue?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(zh(e,l,t),Vh(e,Tt()),e.callbackNode!=null&&e.callbackNode===a?Xh.bind(null,e):null)}function $h(e,t){if(Kr())return null;zh(e,t,!0)}function Pv(){u1(function(){(Oe&6)!==0?lo(Df,Jv):Yh()})}function Ju(){if(In===0){var e=ni;e===0&&(e=Pl,Pl<<=1,(Pl&261888)===0&&(Pl=256)),In=e}return In}function Qh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ir(""+e)}function Zh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Wv(e,t,a,l,u){if(t==="submit"&&a&&a.stateNode===u){var f=Qh((u[mt]||null).action),m=l.submitter;m&&(t=(t=m[mt]||null)?Qh(t.formAction):m.getAttribute("formAction"),t!==null&&(f=t,m=null));var y=new or("action","action",null,l,u);e.push({event:y,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(In!==0){var T=m?Zh(u,m):new FormData(u);gu(a,{pending:!0,data:T,method:u.method,action:f},null,T)}}else typeof f=="function"&&(y.preventDefault(),T=m?Zh(u,m):new FormData(u),gu(a,{pending:!0,data:T,method:u.method,action:f},f,T))},currentTarget:u}]})}}for(var Pu=0;Pu<jo.length;Pu++){var Wu=jo[Pu],Iv=Wu.toLowerCase(),e1=Wu[0].toUpperCase()+Wu.slice(1);Kt(Iv,"on"+e1)}Kt(Td,"onAnimationEnd"),Kt(zd,"onAnimationIteration"),Kt(Cd,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(gv,"onTransitionRun"),Kt(xv,"onTransitionStart"),Kt(vv,"onTransitionCancel"),Kt(Ad,"onTransitionEnd"),Ya("onMouseEnter",["mouseout","mouseover"]),Ya("onMouseLeave",["mouseout","mouseover"]),Ya("onPointerEnter",["pointerout","pointerover"]),Ya("onPointerLeave",["pointerout","pointerover"]),pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sl));function Kh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],u=l.event;l=l.listeners;e:{var f=void 0;if(t)for(var m=l.length-1;0<=m;m--){var y=l[m],T=y.instance,L=y.currentTarget;if(y=y.listener,T!==f&&u.isPropagationStopped())break e;f=y,u.currentTarget=L;try{f(u)}catch(X){fr(X)}u.currentTarget=null,f=T}else for(m=0;m<l.length;m++){if(y=l[m],T=y.instance,L=y.currentTarget,y=y.listener,T!==f&&u.isPropagationStopped())break e;f=y,u.currentTarget=L;try{f(u)}catch(X){fr(X)}u.currentTarget=null,f=T}}}}function be(e,t){var a=t[co];a===void 0&&(a=t[co]=new Set);var l=e+"__bubble";a.has(l)||(Fh(t,e,2,!1),a.add(l))}function Iu(e,t,a){var l=0;t&&(l|=4),Fh(a,e,l,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function ec(e){if(!e[Pr]){e[Pr]=!0,Yf.forEach(function(a){a!=="selectionchange"&&(t1.has(a)||Iu(a,!1,e),Iu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,Iu("selectionchange",!1,t))}}function Fh(e,t,a,l){switch(Tm(t)){case 2:var u=_1;break;case 8:u=M1;break;default:u=mc}a=u.bind(null,t,a,e),u=void 0,!bo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(t,a,{capture:!0,passive:u}):e.addEventListener(t,a,!0):u!==void 0?e.addEventListener(t,a,{passive:u}):e.addEventListener(t,a,!1)}function tc(e,t,a,l,u){var f=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var y=l.stateNode.containerInfo;if(y===u)break;if(m===4)for(m=l.return;m!==null;){var T=m.tag;if((T===3||T===4)&&m.stateNode.containerInfo===u)return;m=m.return}for(;y!==null;){if(m=Ga(y),m===null)return;if(T=m.tag,T===5||T===6||T===26||T===27){l=f=m;continue e}y=y.parentNode}}l=l.return}ed(function(){var L=f,X=vo(a),K=[];e:{var H=Od.get(e);if(H!==void 0){var Y=or,le=e;switch(e){case"keypress":if(rr(a)===0)break e;case"keydown":case"keyup":Y=Kx;break;case"focusin":le="focus",Y=To;break;case"focusout":le="blur",Y=To;break;case"beforeblur":case"afterblur":Y=To;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=Bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Px;break;case Td:case zd:case Cd:Y=Gx;break;case Ad:Y=Ix;break;case"scroll":case"scrollend":Y=Nx;break;case"wheel":Y=tv;break;case"copy":case"cut":case"paste":Y=kx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=ld;break;case"toggle":case"beforetoggle":Y=av}var ce=(t&4)!==0,Le=!ce&&(e==="scroll"||e==="scrollend"),R=ce?H!==null?H+"Capture":null:H;ce=[];for(var O=L,N;O!==null;){var Z=O;if(N=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||N===null||R===null||(Z=Vi(O,R),Z!=null&&ce.push(wl(O,Z,N))),Le)break;O=O.return}0<ce.length&&(H=new Y(H,le,null,a,X),K.push({event:H,listeners:ce}))}}if((t&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",H&&a!==xo&&(le=a.relatedTarget||a.fromElement)&&(Ga(le)||le[Ha]))break e;if((Y||H)&&(H=X.window===X?X:(H=X.ownerDocument)?H.defaultView||H.parentWindow:window,Y?(le=a.relatedTarget||a.toElement,Y=L,le=le?Ga(le):null,le!==null&&(Le=c(le),ce=le.tag,le!==Le||ce!==5&&ce!==27&&ce!==6)&&(le=null)):(Y=null,le=L),Y!==le)){if(ce=ad,Z="onMouseLeave",R="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(ce=ld,Z="onPointerLeave",R="onPointerEnter",O="pointer"),Le=Y==null?H:Yi(Y),N=le==null?H:Yi(le),H=new ce(Z,O+"leave",Y,a,X),H.target=Le,H.relatedTarget=N,Z=null,Ga(X)===L&&(ce=new ce(R,O+"enter",le,a,X),ce.target=N,ce.relatedTarget=Le,Z=ce),Le=Z,Y&&le)t:{for(ce=n1,R=Y,O=le,N=0,Z=R;Z;Z=ce(Z))N++;Z=0;for(var ue=O;ue;ue=ce(ue))Z++;for(;0<N-Z;)R=ce(R),N--;for(;0<Z-N;)O=ce(O),Z--;for(;N--;){if(R===O||O!==null&&R===O.alternate){ce=R;break t}R=ce(R),O=ce(O)}ce=null}else ce=null;Y!==null&&Jh(K,H,Y,ce,!1),le!==null&&Le!==null&&Jh(K,Le,le,ce,!0)}}e:{if(H=L?Yi(L):window,Y=H.nodeName&&H.nodeName.toLowerCase(),Y==="select"||Y==="input"&&H.type==="file")var Ce=pd;else if(fd(H))if(hd)Ce=pv;else{Ce=fv;var re=cv}else Y=H.nodeName,!Y||Y.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?L&&go(L.elementType)&&(Ce=pd):Ce=dv;if(Ce&&(Ce=Ce(e,L))){dd(K,Ce,a,X);break e}re&&re(e,H,L),e==="focusout"&&L&&H.type==="number"&&L.memoizedProps.value!=null&&mo(H,"number",H.value)}switch(re=L?Yi(L):window,e){case"focusin":(fd(re)||re.contentEditable==="true")&&(Ka=re,Mo=L,Pi=null);break;case"focusout":Pi=Mo=Ka=null;break;case"mousedown":Ro=!0;break;case"contextmenu":case"mouseup":case"dragend":Ro=!1,wd(K,a,X);break;case"selectionchange":if(mv)break;case"keydown":case"keyup":wd(K,a,X)}var xe;if(Co)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Za?ud(e,a)&&(we="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(rd&&a.locale!=="ko"&&(Za||we!=="onCompositionStart"?we==="onCompositionEnd"&&Za&&(xe=td()):(Un=X,So="value"in Un?Un.value:Un.textContent,Za=!0)),re=Wr(L,we),0<re.length&&(we=new id(we,e,null,a,X),K.push({event:we,listeners:re}),xe?we.data=xe:(xe=cd(a),xe!==null&&(we.data=xe)))),(xe=lv?rv(e,a):sv(e,a))&&(we=Wr(L,"onBeforeInput"),0<we.length&&(re=new id("onBeforeInput","beforeinput",null,a,X),K.push({event:re,listeners:we}),re.data=xe)),Wv(K,e,L,a,X)}Kh(K,t)})}function wl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Wr(e,t){for(var a=t+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Vi(e,a),u!=null&&l.unshift(wl(e,u,f)),u=Vi(e,t),u!=null&&l.push(wl(e,u,f))),e.tag===3)return l;e=e.return}return[]}function n1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jh(e,t,a,l,u){for(var f=t._reactName,m=[];a!==null&&a!==l;){var y=a,T=y.alternate,L=y.stateNode;if(y=y.tag,T!==null&&T===l)break;y!==5&&y!==26&&y!==27||L===null||(T=L,u?(L=Vi(a,f),L!=null&&m.unshift(wl(a,L,T))):u||(L=Vi(a,f),L!=null&&m.push(wl(a,L,T)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var a1=/\r\n?/g,i1=/\u0000|\uFFFD/g;function Ph(e){return(typeof e=="string"?e:""+e).replace(a1,`
`).replace(i1,"")}function Wh(e,t){return t=Ph(t),Ph(e)===t}function Ne(e,t,a,l,u,f){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Xa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Xa(e,""+l);break;case"className":nr(e,"class",l);break;case"tabIndex":nr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":nr(e,a,l);break;case"style":Wf(e,l,f);break;case"data":if(t!=="object"){nr(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ir(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(t!=="input"&&Ne(e,t,"name",u.name,u,null),Ne(e,t,"formEncType",u.formEncType,u,null),Ne(e,t,"formMethod",u.formMethod,u,null),Ne(e,t,"formTarget",u.formTarget,u,null)):(Ne(e,t,"encType",u.encType,u,null),Ne(e,t,"method",u.method,u,null),Ne(e,t,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ir(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=dn);break;case"onScroll":l!=null&&be("scroll",e);break;case"onScrollEnd":l!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ir(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":be("beforetoggle",e),be("toggle",e),tr(e,"popover",l);break;case"xlinkActuate":fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":fn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":fn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":fn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":fn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":tr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Dx.get(a)||a,tr(e,a,l))}}function nc(e,t,a,l,u,f){switch(a){case"style":Wf(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Xa(e,l):(typeof l=="number"||typeof l=="bigint")&&Xa(e,""+l);break;case"onScroll":l!=null&&be("scroll",e);break;case"onScrollEnd":l!=null&&be("scrollend",e);break;case"onClick":l!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),t=a.slice(2,u?a.length-7:void 0),f=e[mt]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(t,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,u);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):tr(e,a,l)}}}function ut(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var l=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var m=a[f];if(m!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ne(e,t,f,m,a,null)}}u&&Ne(e,t,"srcSet",a.srcSet,a,null),l&&Ne(e,t,"src",a.src,a,null);return;case"input":be("invalid",e);var y=f=m=u=null,T=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var X=a[l];if(X!=null)switch(l){case"name":u=X;break;case"type":m=X;break;case"checked":T=X;break;case"defaultChecked":L=X;break;case"value":f=X;break;case"defaultValue":y=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,t));break;default:Ne(e,t,l,X,a,null)}}Kf(e,f,y,T,L,m,u,!1);return;case"select":be("invalid",e),l=m=f=null;for(u in a)if(a.hasOwnProperty(u)&&(y=a[u],y!=null))switch(u){case"value":f=y;break;case"defaultValue":m=y;break;case"multiple":l=y;default:Ne(e,t,u,y,a,null)}t=f,a=m,e.multiple=!!l,t!=null?Va(e,!!l,t,!1):a!=null&&Va(e,!!l,a,!0);return;case"textarea":be("invalid",e),f=u=l=null;for(m in a)if(a.hasOwnProperty(m)&&(y=a[m],y!=null))switch(m){case"value":l=y;break;case"defaultValue":u=y;break;case"children":f=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(91));break;default:Ne(e,t,m,y,a,null)}Jf(e,l,u,f);return;case"option":for(T in a)if(a.hasOwnProperty(T)&&(l=a[T],l!=null))switch(T){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ne(e,t,T,l,a,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(l=0;l<Sl.length;l++)be(Sl[l],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ne(e,t,L,l,a,null)}return;default:if(go(t)){for(X in a)a.hasOwnProperty(X)&&(l=a[X],l!==void 0&&nc(e,t,X,l,a,void 0));return}}for(y in a)a.hasOwnProperty(y)&&(l=a[y],l!=null&&Ne(e,t,y,l,a,null))}function l1(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,m=null,y=null,T=null,L=null,X=null;for(Y in a){var K=a[Y];if(a.hasOwnProperty(Y)&&K!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":T=K;default:l.hasOwnProperty(Y)||Ne(e,t,Y,null,l,K)}}for(var H in l){var Y=l[H];if(K=a[H],l.hasOwnProperty(H)&&(Y!=null||K!=null))switch(H){case"type":f=Y;break;case"name":u=Y;break;case"checked":L=Y;break;case"defaultChecked":X=Y;break;case"value":m=Y;break;case"defaultValue":y=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,t));break;default:Y!==K&&Ne(e,t,H,Y,l,K)}}ho(e,m,y,T,L,X,f,u);return;case"select":Y=m=y=H=null;for(f in a)if(T=a[f],a.hasOwnProperty(f)&&T!=null)switch(f){case"value":break;case"multiple":Y=T;default:l.hasOwnProperty(f)||Ne(e,t,f,null,l,T)}for(u in l)if(f=l[u],T=a[u],l.hasOwnProperty(u)&&(f!=null||T!=null))switch(u){case"value":H=f;break;case"defaultValue":y=f;break;case"multiple":m=f;default:f!==T&&Ne(e,t,u,f,l,T)}t=y,a=m,l=Y,H!=null?Va(e,!!a,H,!1):!!l!=!!a&&(t!=null?Va(e,!!a,t,!0):Va(e,!!a,a?[]:"",!1));return;case"textarea":Y=H=null;for(y in a)if(u=a[y],a.hasOwnProperty(y)&&u!=null&&!l.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ne(e,t,y,null,l,u)}for(m in l)if(u=l[m],f=a[m],l.hasOwnProperty(m)&&(u!=null||f!=null))switch(m){case"value":H=u;break;case"defaultValue":Y=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ne(e,t,m,u,l,f)}Ff(e,H,Y);return;case"option":for(var le in a)if(H=a[le],a.hasOwnProperty(le)&&H!=null&&!l.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:Ne(e,t,le,null,l,H)}for(T in l)if(H=l[T],Y=a[T],l.hasOwnProperty(T)&&H!==Y&&(H!=null||Y!=null))switch(T){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Ne(e,t,T,H,l,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)H=a[ce],a.hasOwnProperty(ce)&&H!=null&&!l.hasOwnProperty(ce)&&Ne(e,t,ce,null,l,H);for(L in l)if(H=l[L],Y=a[L],l.hasOwnProperty(L)&&H!==Y&&(H!=null||Y!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,t));break;default:Ne(e,t,L,H,l,Y)}return;default:if(go(t)){for(var Le in a)H=a[Le],a.hasOwnProperty(Le)&&H!==void 0&&!l.hasOwnProperty(Le)&&nc(e,t,Le,void 0,l,H);for(X in l)H=l[X],Y=a[X],!l.hasOwnProperty(X)||H===Y||H===void 0&&Y===void 0||nc(e,t,X,H,l,Y);return}}for(var R in a)H=a[R],a.hasOwnProperty(R)&&H!=null&&!l.hasOwnProperty(R)&&Ne(e,t,R,null,l,H);for(K in l)H=l[K],Y=a[K],!l.hasOwnProperty(K)||H===Y||H==null&&Y==null||Ne(e,t,K,H,l,Y)}function Ih(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function r1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var u=a[l],f=u.transferSize,m=u.initiatorType,y=u.duration;if(f&&y&&Ih(m)){for(m=0,y=u.responseEnd,l+=1;l<a.length;l++){var T=a[l],L=T.startTime;if(L>y)break;var X=T.transferSize,K=T.initiatorType;X&&Ih(K)&&(T=T.responseEnd,m+=X*(T<y?1:(y-L)/(T-L)))}if(--l,t+=8*(f+m)/(u.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ac=null,ic=null;function Ir(e){return e.nodeType===9?e:e.ownerDocument}function em(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rc=null;function s1(){var e=window.event;return e&&e.type==="popstate"?e===rc?!1:(rc=e,!0):(rc=null,!1)}var nm=typeof setTimeout=="function"?setTimeout:void 0,o1=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,u1=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(e){return am.resolve(null).then(e).catch(c1)}:nm;function c1(e){setTimeout(function(){throw e})}function ea(e){return e==="head"}function im(e,t){var a=t,l=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(u),Si(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")El(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,El(a);for(var f=a.firstChild;f;){var m=f.nextSibling,y=f.nodeName;f[ki]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=m}}else a==="body"&&El(e.ownerDocument.body);a=u}while(a);Si(t)}function lm(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function sc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sc(a),fo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function f1(e,t,a,l){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ki])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=$t(e.nextSibling),e===null)break}return null}function d1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=$t(e.nextSibling),e===null))return null;return e}function rm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=$t(e.nextSibling),e===null))return null;return e}function oc(e){return e.data==="$?"||e.data==="$~"}function uc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function p1(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var cc=null;function sm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return $t(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function om(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function um(e,t,a){switch(t=Ir(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function El(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);fo(e)}var Qt=new Map,cm=new Set;function es(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var On=W.d;W.d={f:h1,r:m1,D:g1,C:x1,L:v1,m:y1,X:S1,S:b1,M:w1};function h1(){var e=On.f(),t=$r();return e||t}function m1(e){var t=qa(e);t!==null&&t.tag===5&&t.type==="form"?Ap(t):On.r(e)}var vi=typeof document>"u"?null:document;function fm(e,t,a){var l=vi;if(l&&typeof t=="string"&&t){var u=Ht(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),cm.has(u)||(cm.add(u),e={rel:e,crossOrigin:a,href:t},l.querySelector(u)===null&&(t=l.createElement("link"),ut(t,"link",e),nt(t),l.head.appendChild(t)))}}function g1(e){On.D(e),fm("dns-prefetch",e,null)}function x1(e,t){On.C(e,t),fm("preconnect",e,t)}function v1(e,t,a){On.L(e,t,a);var l=vi;if(l&&e&&t){var u='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ht(a.imageSizes)+'"]')):u+='[href="'+Ht(e)+'"]';var f=u;switch(t){case"style":f=yi(e);break;case"script":f=bi(e)}Qt.has(f)||(e=v({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Qt.set(f,e),l.querySelector(u)!==null||t==="style"&&l.querySelector(Tl(f))||t==="script"&&l.querySelector(zl(f))||(t=l.createElement("link"),ut(t,"link",e),nt(t),l.head.appendChild(t)))}}function y1(e,t){On.m(e,t);var a=vi;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+Ht(l)+'"][href="'+Ht(e)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=bi(e)}if(!Qt.has(f)&&(e=v({rel:"modulepreload",href:e},t),Qt.set(f,e),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zl(f)))return}l=a.createElement("link"),ut(l,"link",e),nt(l),a.head.appendChild(l)}}}function b1(e,t,a){On.S(e,t,a);var l=vi;if(l&&e){var u=ka(l).hoistableStyles,f=yi(e);t=t||"default";var m=u.get(f);if(!m){var y={loading:0,preload:null};if(m=l.querySelector(Tl(f)))y.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Qt.get(f))&&fc(e,a);var T=m=l.createElement("link");nt(T),ut(T,"link",e),T._p=new Promise(function(L,X){T.onload=L,T.onerror=X}),T.addEventListener("load",function(){y.loading|=1}),T.addEventListener("error",function(){y.loading|=2}),y.loading|=4,ts(m,t,l)}m={type:"stylesheet",instance:m,count:1,state:y},u.set(f,m)}}}function S1(e,t){On.X(e,t);var a=vi;if(a&&e){var l=ka(a).hoistableScripts,u=bi(e),f=l.get(u);f||(f=a.querySelector(zl(u)),f||(e=v({src:e,async:!0},t),(t=Qt.get(u))&&dc(e,t),f=a.createElement("script"),nt(f),ut(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function w1(e,t){On.M(e,t);var a=vi;if(a&&e){var l=ka(a).hoistableScripts,u=bi(e),f=l.get(u);f||(f=a.querySelector(zl(u)),f||(e=v({src:e,async:!0,type:"module"},t),(t=Qt.get(u))&&dc(e,t),f=a.createElement("script"),nt(f),ut(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function dm(e,t,a,l){var u=(u=he.current)?es(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=yi(a.href),a=ka(u).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yi(a.href);var f=ka(u).hoistableStyles,m=f.get(e);if(m||(u=u.ownerDocument||u,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,m),(f=u.querySelector(Tl(e)))&&!f._p&&(m.instance=f,m.state.loading=5),Qt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Qt.set(e,a),f||E1(u,e,a,m.state))),t&&l===null)throw Error(s(528,""));return m}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=bi(a),a=ka(u).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function yi(e){return'href="'+Ht(e)+'"'}function Tl(e){return'link[rel="stylesheet"]['+e+"]"}function pm(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function E1(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ut(t,"link",a),nt(t),e.head.appendChild(t))}function bi(e){return'[src="'+Ht(e)+'"]'}function zl(e){return"script[async]"+e}function hm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(l)return t.instance=l,nt(l),l;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),nt(l),ut(l,"style",u),ts(l,a.precedence,e),t.instance=l;case"stylesheet":u=yi(a.href);var f=e.querySelector(Tl(u));if(f)return t.state.loading|=4,t.instance=f,nt(f),f;l=pm(a),(u=Qt.get(u))&&fc(l,u),f=(e.ownerDocument||e).createElement("link"),nt(f);var m=f;return m._p=new Promise(function(y,T){m.onload=y,m.onerror=T}),ut(f,"link",l),t.state.loading|=4,ts(f,a.precedence,e),t.instance=f;case"script":return f=bi(a.src),(u=e.querySelector(zl(f)))?(t.instance=u,nt(u),u):(l=a,(u=Qt.get(f))&&(l=v({},a),dc(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),nt(u),ut(u,"link",l),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ts(l,a.precedence,e));return t.instance}function ts(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,m=0;m<l.length;m++){var y=l[m];if(y.dataset.precedence===t)f=y;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ns=null;function mm(e,t,a){if(ns===null){var l=new Map,u=ns=new Map;u.set(a,l)}else u=ns,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ki]||f[lt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var m=f.getAttribute(t)||"";m=e+m;var y=l.get(m);y?y.push(f):l.set(m,[f])}}return l}function gm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function T1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function xm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function z1(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=yi(l.href),f=t.querySelector(Tl(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=as.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=f,nt(f);return}f=t.ownerDocument||t,l=pm(l),(u=Qt.get(u))&&fc(l,u),f=f.createElement("link"),nt(f);var m=f;m._p=new Promise(function(y,T){m.onload=y,m.onerror=T}),ut(f,"link",l),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=as.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var pc=0;function C1(e,t){return e.stylesheets&&e.count===0&&ls(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&ls(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+t);0<e.imgBytes&&pc===0&&(pc=62500*r1());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ls(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>pc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function as(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ls(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var is=null;function ls(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,is=new Map,t.forEach(A1,e),is=null,as.call(e))}function A1(e,t){if(!(t.state.loading&4)){var a=is.get(e);if(a)var l=a.get(null);else{a=new Map,is.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var m=u[f];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),l=m)}l&&a.set(null,l)}u=t.instance,m=u.getAttribute("data-precedence"),f=a.get(m)||l,f===l&&a.set(null,u),a.set(m,u),this.count++,l=as.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var Cl={$$typeof:j,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function O1(e,t,a,l,u,f,m,y,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=so(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=so(0),this.hiddenUpdates=so(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function vm(e,t,a,l,u,f,m,y,T,L,X,K){return e=new O1(e,t,a,m,T,L,X,K,y),t=1,f===!0&&(t|=24),f=Ot(3,null,null,t),e.current=f,f.stateNode=e,t=Qo(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:t},Jo(f),e}function ym(e){return e?(e=Pa,e):Pa}function bm(e,t,a,l,u,f){u=ym(u),l.context===null?l.context=u:l.pendingContext=u,l=Vn(t),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=Xn(e,l,t),a!==null&&(St(a,e,t),il(a,e,t))}function Sm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function hc(e,t){Sm(e,t),(e=e.alternate)&&Sm(e,t)}function wm(e){if(e.tag===13||e.tag===31){var t=xa(e,67108864);t!==null&&St(t,e,67108864),hc(e,67108864)}}function Em(e){if(e.tag===13||e.tag===31){var t=jt();t=oo(t);var a=xa(e,t);a!==null&&St(a,e,t),hc(e,t)}}var rs=!0;function _1(e,t,a,l){var u=q.T;q.T=null;var f=W.p;try{W.p=2,mc(e,t,a,l)}finally{W.p=f,q.T=u}}function M1(e,t,a,l){var u=q.T;q.T=null;var f=W.p;try{W.p=8,mc(e,t,a,l)}finally{W.p=f,q.T=u}}function mc(e,t,a,l){if(rs){var u=gc(l);if(u===null)tc(e,t,l,ss,a),zm(e,l);else if(D1(u,e,t,a,l))l.stopPropagation();else if(zm(e,l),t&4&&-1<R1.indexOf(e)){for(;u!==null;){var f=qa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var m=da(f.pendingLanes);if(m!==0){var y=f;for(y.pendingLanes|=2,y.entangledLanes|=2;m;){var T=1<<31-Ct(m);y.entanglements[1]|=T,m&=~T}an(f),(Oe&6)===0&&(Vr=Tt()+500,bl(0))}}break;case 31:case 13:y=xa(f,2),y!==null&&St(y,f,2),$r(),hc(f,2)}if(f=gc(l),f===null&&tc(e,t,l,ss,a),f===u)break;u=f}u!==null&&l.stopPropagation()}else tc(e,t,l,null,a)}}function gc(e){return e=vo(e),xc(e)}var ss=null;function xc(e){if(ss=null,e=Ga(e),e!==null){var t=c(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===31){if(e=g(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ss=e,null}function Tm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gx()){case Df:return 2;case jf:return 8;case Jl:case xx:return 32;case Nf:return 268435456;default:return 32}default:return 32}}var vc=!1,ta=null,na=null,aa=null,Al=new Map,Ol=new Map,ia=[],R1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zm(e,t){switch(e){case"focusin":case"focusout":ta=null;break;case"dragenter":case"dragleave":na=null;break;case"mouseover":case"mouseout":aa=null;break;case"pointerover":case"pointerout":Al.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ol.delete(t.pointerId)}}function _l(e,t,a,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},t!==null&&(t=qa(t),t!==null&&wm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function D1(e,t,a,l,u){switch(t){case"focusin":return ta=_l(ta,e,t,a,l,u),!0;case"dragenter":return na=_l(na,e,t,a,l,u),!0;case"mouseover":return aa=_l(aa,e,t,a,l,u),!0;case"pointerover":var f=u.pointerId;return Al.set(f,_l(Al.get(f)||null,e,t,a,l,u)),!0;case"gotpointercapture":return f=u.pointerId,Ol.set(f,_l(Ol.get(f)||null,e,t,a,l,u)),!0}return!1}function Cm(e){var t=Ga(e.target);if(t!==null){var a=c(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,qf(e.priority,function(){Em(a)});return}}else if(t===31){if(t=g(a),t!==null){e.blockedOn=t,qf(e.priority,function(){Em(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function os(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=gc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);xo=l,a.target.dispatchEvent(l),xo=null}else return t=qa(a),t!==null&&wm(t),e.blockedOn=a,!1;t.shift()}return!0}function Am(e,t,a){os(e)&&a.delete(t)}function j1(){vc=!1,ta!==null&&os(ta)&&(ta=null),na!==null&&os(na)&&(na=null),aa!==null&&os(aa)&&(aa=null),Al.forEach(Am),Ol.forEach(Am)}function us(e,t){e.blockedOn===t&&(e.blockedOn=null,vc||(vc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,j1)))}var cs=null;function Om(e){cs!==e&&(cs=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){cs===e&&(cs=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],u=e[t+2];if(typeof l!="function"){if(xc(l||a)===null)continue;break}var f=qa(a);f!==null&&(e.splice(t,3),t-=3,gu(f,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function Si(e){function t(T){return us(T,e)}ta!==null&&us(ta,e),na!==null&&us(na,e),aa!==null&&us(aa,e),Al.forEach(t),Ol.forEach(t);for(var a=0;a<ia.length;a++){var l=ia[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ia.length&&(a=ia[0],a.blockedOn===null);)Cm(a),a.blockedOn===null&&ia.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],f=a[l+1],m=u[mt]||null;if(typeof f=="function")m||Om(a);else if(m){var y=null;if(f&&f.hasAttribute("formAction")){if(u=f,m=f[mt]||null)y=m.formAction;else if(xc(u)!==null)continue}else y=m.action;typeof y=="function"?a[l+1]=y:(a.splice(l,3),l-=3),Om(a)}}}function _m(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(m){return u=m})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function yc(e){this._internalRoot=e}fs.prototype.render=yc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,l=jt();bm(a,l,e,t,null,null)},fs.prototype.unmount=yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bm(e.current,2,null,e,null,null),$r(),t[Ha]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gf();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ia.length&&t!==0&&t<ia[a].priority;a++);ia.splice(a,0,e),a===0&&Cm(e)}};var Mm=i.version;if(Mm!=="19.2.0")throw Error(s(527,Mm,"19.2.0"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var N1={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ds.isDisabled&&ds.supportsFiber)try{Hi=ds.inject(N1),zt=ds}catch{}}return Rl.createRoot=function(e,t){if(!o(e))throw Error(s(299));var a=!1,l="",u=Up,f=Hp,m=Gp;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=vm(e,1,!1,null,null,a,l,null,u,f,m,_m),e[Ha]=t.current,ec(e),new yc(t)},Rl.hydrateRoot=function(e,t,a){if(!o(e))throw Error(s(299));var l=!1,u="",f=Up,m=Hp,y=Gp,T=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(y=a.onRecoverableError),a.formState!==void 0&&(T=a.formState)),t=vm(e,1,!0,t,a??null,l,u,T,f,m,y,_m),t.context=ym(null),a=t.current,l=jt(),l=oo(l),u=Vn(l),u.callback=null,Xn(a,u,l),a=l,t.current.lanes=a,qi(t,a),an(t),e[Ha]=t.current,ec(e),new fs(t)},Rl.version="19.2.0",Rl}var qm;function $1(){if(qm)return wc.exports;qm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),wc.exports=X1(),wc.exports}var Q1=$1();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var km="popstate";function Z1(n={}){function i(s,o){let{pathname:c,search:d,hash:g}=s.location;return Xc("",{pathname:c,search:d,hash:g},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(s,o){return typeof o=="string"?o:Gl(o)}return F1(i,r,null,n)}function Ye(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function sn(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function K1(){return Math.random().toString(36).substring(2,10)}function Ym(n,i){return{usr:n.state,key:n.key,idx:i}}function Xc(n,i,r=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?Di(i):i,state:r,key:i&&i.key||s||K1()}}function Gl({pathname:n="/",search:i="",hash:r=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Di(n){let i={};if(n){let r=n.indexOf("#");r>=0&&(i.hash=n.substring(r),n=n.substring(0,r));let s=n.indexOf("?");s>=0&&(i.search=n.substring(s),n=n.substring(0,s)),n&&(i.pathname=n)}return i}function F1(n,i,r,s={}){let{window:o=document.defaultView,v5Compat:c=!1}=s,d=o.history,g="POP",p=null,h=x();h==null&&(h=0,d.replaceState({...d.state,idx:h},""));function x(){return(d.state||{idx:null}).idx}function v(){g="POP";let w=x(),_=w==null?null:w-h;h=w,p&&p({action:g,location:A.location,delta:_})}function E(w,_){g="PUSH";let D=Xc(A.location,w,_);h=x()+1;let j=Ym(D,h),Q=A.createHref(D);try{d.pushState(j,"",Q)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;o.location.assign(Q)}c&&p&&p({action:g,location:A.location,delta:1})}function S(w,_){g="REPLACE";let D=Xc(A.location,w,_);h=x();let j=Ym(D,h),Q=A.createHref(D);d.replaceState(j,"",Q),c&&p&&p({action:g,location:A.location,delta:0})}function b(w){return J1(w)}let A={get action(){return g},get location(){return n(o,d)},listen(w){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(km,v),p=w,()=>{o.removeEventListener(km,v),p=null}},createHref(w){return i(o,w)},createURL:b,encodeLocation(w){let _=b(w);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:E,replace:S,go(w){return d.go(w)}};return A}function J1(n,i=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(r,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:Gl(n);return s=s.replace(/ $/,"%20"),!i&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function H0(n,i,r="/"){return P1(n,i,r,!1)}function P1(n,i,r,s){let o=typeof i=="string"?Di(i):i,c=Nn(o.pathname||"/",r);if(c==null)return null;let d=G0(n);W1(d);let g=null;for(let p=0;g==null&&p<d.length;++p){let h=uy(c);g=sy(d[p],h,s)}return g}function G0(n,i=[],r=[],s="",o=!1){let c=(d,g,p=o,h)=>{let x={relativePath:h===void 0?d.path||"":h,caseSensitive:d.caseSensitive===!0,childrenIndex:g,route:d};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&p)return;Ye(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let v=Dn([s,x.relativePath]),E=r.concat(x);d.children&&d.children.length>0&&(Ye(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),G0(d.children,i,E,v,p)),!(d.path==null&&!d.index)&&i.push({path:v,score:ly(v,d.index),routesMeta:E})};return n.forEach((d,g)=>{if(d.path===""||!d.path?.includes("?"))c(d,g);else for(let p of q0(d.path))c(d,g,!0,p)}),i}function q0(n){let i=n.split("/");if(i.length===0)return[];let[r,...s]=i,o=r.endsWith("?"),c=r.replace(/\?$/,"");if(s.length===0)return o?[c,""]:[c];let d=q0(s.join("/")),g=[];return g.push(...d.map(p=>p===""?c:[c,p].join("/"))),o&&g.push(...d),g.map(p=>n.startsWith("/")&&p===""?"/":p)}function W1(n){n.sort((i,r)=>i.score!==r.score?r.score-i.score:ry(i.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var I1=/^:[\w-]+$/,ey=3,ty=2,ny=1,ay=10,iy=-2,Vm=n=>n==="*";function ly(n,i){let r=n.split("/"),s=r.length;return r.some(Vm)&&(s+=iy),i&&(s+=ty),r.filter(o=>!Vm(o)).reduce((o,c)=>o+(I1.test(c)?ey:c===""?ny:ay),s)}function ry(n,i){return n.length===i.length&&n.slice(0,-1).every((s,o)=>s===i[o])?n[n.length-1]-i[i.length-1]:0}function sy(n,i,r=!1){let{routesMeta:s}=n,o={},c="/",d=[];for(let g=0;g<s.length;++g){let p=s[g],h=g===s.length-1,x=c==="/"?i:i.slice(c.length)||"/",v=Rs({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},x),E=p.route;if(!v&&h&&r&&!s[s.length-1].route.index&&(v=Rs({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},x)),!v)return null;Object.assign(o,v.params),d.push({params:o,pathname:Dn([c,v.pathname]),pathnameBase:py(Dn([c,v.pathnameBase])),route:E}),v.pathnameBase!=="/"&&(c=Dn([c,v.pathnameBase]))}return d}function Rs(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,s]=oy(n.path,n.caseSensitive,n.end),o=i.match(r);if(!o)return null;let c=o[0],d=c.replace(/(.)\/+$/,"$1"),g=o.slice(1);return{params:s.reduce((h,{paramName:x,isOptional:v},E)=>{if(x==="*"){let b=g[E]||"";d=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const S=g[E];return v&&!S?h[x]=void 0:h[x]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:d,pattern:n}}function oy(n,i=!1,r=!0){sn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,g,p)=>(s.push({paramName:g,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(s.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,i?void 0:"i"),s]}function uy(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return sn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function Nn(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,s=n.charAt(r);return s&&s!=="/"?null:n.slice(r)||"/"}function cy(n,i="/"){let{pathname:r,search:s="",hash:o=""}=typeof n=="string"?Di(n):n;return{pathname:r?r.startsWith("/")?r:fy(r,i):i,search:hy(s),hash:my(o)}}function fy(n,i){let r=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Cc(n,i,r,s){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dy(n){return n.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function k0(n){let i=dy(n);return i.map((r,s)=>s===i.length-1?r.pathname:r.pathnameBase)}function Y0(n,i,r,s=!1){let o;typeof n=="string"?o=Di(n):(o={...n},Ye(!o.pathname||!o.pathname.includes("?"),Cc("?","pathname","search",o)),Ye(!o.pathname||!o.pathname.includes("#"),Cc("#","pathname","hash",o)),Ye(!o.search||!o.search.includes("#"),Cc("#","search","hash",o)));let c=n===""||o.pathname==="",d=c?"/":o.pathname,g;if(d==null)g=r;else{let v=i.length-1;if(!s&&d.startsWith("..")){let E=d.split("/");for(;E[0]==="..";)E.shift(),v-=1;o.pathname=E.join("/")}g=v>=0?i[v]:"/"}let p=cy(o,g),h=d&&d!=="/"&&d.endsWith("/"),x=(c||d===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(h||x)&&(p.pathname+="/"),p}var Dn=n=>n.join("/").replace(/\/\/+/g,"/"),py=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),hy=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,my=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function gy(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var V0=["POST","PUT","PATCH","DELETE"];new Set(V0);var xy=["GET",...V0];new Set(xy);var ji=M.createContext(null);ji.displayName="DataRouter";var ks=M.createContext(null);ks.displayName="DataRouterState";M.createContext(!1);var X0=M.createContext({isTransitioning:!1});X0.displayName="ViewTransition";var vy=M.createContext(new Map);vy.displayName="Fetchers";var yy=M.createContext(null);yy.displayName="Await";var on=M.createContext(null);on.displayName="Navigation";var kl=M.createContext(null);kl.displayName="Location";var Wt=M.createContext({outlet:null,matches:[],isDataRoute:!1});Wt.displayName="Route";var pf=M.createContext(null);pf.displayName="RouteError";function by(n,{relative:i}={}){Ye(Yl(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=M.useContext(on),{hash:o,pathname:c,search:d}=Vl(n,{relative:i}),g=c;return r!=="/"&&(g=c==="/"?r:Dn([r,c])),s.createHref({pathname:g,search:d,hash:o})}function Yl(){return M.useContext(kl)!=null}function ca(){return Ye(Yl(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(kl).location}var $0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Q0(n){M.useContext(on).static||M.useLayoutEffect(n)}function Ni(){let{isDataRoute:n}=M.useContext(Wt);return n?By():Sy()}function Sy(){Ye(Yl(),"useNavigate() may be used only in the context of a <Router> component.");let n=M.useContext(ji),{basename:i,navigator:r}=M.useContext(on),{matches:s}=M.useContext(Wt),{pathname:o}=ca(),c=JSON.stringify(k0(s)),d=M.useRef(!1);return Q0(()=>{d.current=!0}),M.useCallback((p,h={})=>{if(sn(d.current,$0),!d.current)return;if(typeof p=="number"){r.go(p);return}let x=Y0(p,JSON.parse(c),o,h.relative==="path");n==null&&i!=="/"&&(x.pathname=x.pathname==="/"?i:Dn([i,x.pathname])),(h.replace?r.replace:r.push)(x,h.state,h)},[i,r,c,o,n])}var wy=M.createContext(null);function Ey(n){let i=M.useContext(Wt).outlet;return M.useMemo(()=>i&&M.createElement(wy.Provider,{value:n},i),[i,n])}function Ty(){let{matches:n}=M.useContext(Wt),i=n[n.length-1];return i?i.params:{}}function Vl(n,{relative:i}={}){let{matches:r}=M.useContext(Wt),{pathname:s}=ca(),o=JSON.stringify(k0(r));return M.useMemo(()=>Y0(n,JSON.parse(o),s,i==="path"),[n,o,s,i])}function zy(n,i){return Z0(n,i)}function Z0(n,i,r,s,o){Ye(Yl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=M.useContext(on),{matches:d}=M.useContext(Wt),g=d[d.length-1],p=g?g.params:{},h=g?g.pathname:"/",x=g?g.pathnameBase:"/",v=g&&g.route;{let D=v&&v.path||"";K0(h,!v||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let E=ca(),S;if(i){let D=typeof i=="string"?Di(i):i;Ye(x==="/"||D.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${D.pathname}" was given in the \`location\` prop.`),S=D}else S=E;let b=S.pathname||"/",A=b;if(x!=="/"){let D=x.replace(/^\//,"").split("/");A="/"+b.replace(/^\//,"").split("/").slice(D.length).join("/")}let w=H0(n,{pathname:A});sn(v||w!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),sn(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=My(w&&w.map(D=>Object.assign({},D,{params:Object.assign({},p,D.params),pathname:Dn([x,c.encodeLocation?c.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?x:Dn([x,c.encodeLocation?c.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),d,r,s,o);return i&&_?M.createElement(kl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},_):_}function Cy(){let n=Ly(),i=gy(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:c},"ErrorBoundary")," or"," ",M.createElement("code",{style:c},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},i),r?M.createElement("pre",{style:o},r):null,d)}var Ay=M.createElement(Cy,null),Oy=class extends M.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){this.props.unstable_onError?this.props.unstable_onError(n,i):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?M.createElement(Wt.Provider,{value:this.props.routeContext},M.createElement(pf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function _y({routeContext:n,match:i,children:r}){let s=M.useContext(ji);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),M.createElement(Wt.Provider,{value:n},r)}function My(n,i=[],r=null,s=null,o=null){if(n==null){if(!r)return null;if(r.errors)n=r.matches;else if(i.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let c=n,d=r?.errors;if(d!=null){let h=c.findIndex(x=>x.route.id&&d?.[x.route.id]!==void 0);Ye(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,h+1))}let g=!1,p=-1;if(r)for(let h=0;h<c.length;h++){let x=c[h];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(p=h),x.route.id){let{loaderData:v,errors:E}=r,S=x.route.loader&&!v.hasOwnProperty(x.route.id)&&(!E||E[x.route.id]===void 0);if(x.route.lazy||S){g=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((h,x,v)=>{let E,S=!1,b=null,A=null;r&&(E=d&&x.route.id?d[x.route.id]:void 0,b=x.route.errorElement||Ay,g&&(p<0&&v===0?(K0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,A=null):p===v&&(S=!0,A=x.route.hydrateFallbackElement||null)));let w=i.concat(c.slice(0,v+1)),_=()=>{let D;return E?D=b:S?D=A:x.route.Component?D=M.createElement(x.route.Component,null):x.route.element?D=x.route.element:D=h,M.createElement(_y,{match:x,routeContext:{outlet:h,matches:w,isDataRoute:r!=null},children:D})};return r&&(x.route.ErrorBoundary||x.route.errorElement||v===0)?M.createElement(Oy,{location:r.location,revalidation:r.revalidation,component:b,error:E,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0},unstable_onError:s}):_()},null)}function hf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ry(n){let i=M.useContext(ji);return Ye(i,hf(n)),i}function Dy(n){let i=M.useContext(ks);return Ye(i,hf(n)),i}function jy(n){let i=M.useContext(Wt);return Ye(i,hf(n)),i}function mf(n){let i=jy(n),r=i.matches[i.matches.length-1];return Ye(r.route.id,`${n} can only be used on routes that contain a unique "id"`),r.route.id}function Ny(){return mf("useRouteId")}function Ly(){let n=M.useContext(pf),i=Dy("useRouteError"),r=mf("useRouteError");return n!==void 0?n:i.errors?.[r]}function By(){let{router:n}=Ry("useNavigate"),i=mf("useNavigate"),r=M.useRef(!1);return Q0(()=>{r.current=!0}),M.useCallback(async(o,c={})=>{sn(r.current,$0),r.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:i,...c}))},[n,i])}var Xm={};function K0(n,i,r){!i&&!Xm[n]&&(Xm[n]=!0,sn(!1,r))}M.memo(Uy);function Uy({routes:n,future:i,state:r,unstable_onError:s}){return Z0(n,void 0,r,s,i)}function Hy(n){return Ey(n.context)}function ra(n){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Gy({basename:n="/",children:i=null,location:r,navigationType:s="POP",navigator:o,static:c=!1}){Ye(!Yl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),g=M.useMemo(()=>({basename:d,navigator:o,static:c,future:{}}),[d,o,c]);typeof r=="string"&&(r=Di(r));let{pathname:p="/",search:h="",hash:x="",state:v=null,key:E="default"}=r,S=M.useMemo(()=>{let b=Nn(p,d);return b==null?null:{location:{pathname:b,search:h,hash:x,state:v,key:E},navigationType:s}},[d,p,h,x,v,E,s]);return sn(S!=null,`<Router basename="${d}"> is not able to match the URL "${p}${h}${x}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:M.createElement(on.Provider,{value:g},M.createElement(kl.Provider,{children:i,value:S}))}function qy({children:n,location:i}){return zy($c(n),i)}function $c(n,i=[]){let r=[];return M.Children.forEach(n,(s,o)=>{if(!M.isValidElement(s))return;let c=[...i,o];if(s.type===M.Fragment){r.push.apply(r,$c(s.props.children,c));return}Ye(s.type===ra,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=$c(s.props.children,c)),r.push(d)}),r}var bs="get",Ss="application/x-www-form-urlencoded";function Ys(n){return n!=null&&typeof n.tagName=="string"}function ky(n){return Ys(n)&&n.tagName.toLowerCase()==="button"}function Yy(n){return Ys(n)&&n.tagName.toLowerCase()==="form"}function Vy(n){return Ys(n)&&n.tagName.toLowerCase()==="input"}function Xy(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function $y(n,i){return n.button===0&&(!i||i==="_self")&&!Xy(n)}var ps=null;function Qy(){if(ps===null)try{new FormData(document.createElement("form"),0),ps=!1}catch{ps=!0}return ps}var Zy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ac(n){return n!=null&&!Zy.has(n)?(sn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ss}"`),null):n}function Ky(n,i){let r,s,o,c,d;if(Yy(n)){let g=n.getAttribute("action");s=g?Nn(g,i):null,r=n.getAttribute("method")||bs,o=Ac(n.getAttribute("enctype"))||Ss,c=new FormData(n)}else if(ky(n)||Vy(n)&&(n.type==="submit"||n.type==="image")){let g=n.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||g.getAttribute("action");if(s=p?Nn(p,i):null,r=n.getAttribute("formmethod")||g.getAttribute("method")||bs,o=Ac(n.getAttribute("formenctype"))||Ac(g.getAttribute("enctype"))||Ss,c=new FormData(g,n),!Qy()){let{name:h,type:x,value:v}=n;if(x==="image"){let E=h?`${h}.`:"";c.append(`${E}x`,"0"),c.append(`${E}y`,"0")}else h&&c.append(h,v)}}else{if(Ys(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=bs,s=null,o=Ss,d=n}return c&&o==="text/plain"&&(d=c,c=void 0),{action:s,method:r.toLowerCase(),encType:o,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gf(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function Fy(n,i,r){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s.pathname==="/"?s.pathname=`_root.${r}`:i&&Nn(s.pathname,i)==="/"?s.pathname=`${i.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function Jy(n,i){if(n.id in i)return i[n.id];try{let r=await import(n.module);return i[n.id]=r,r}catch(r){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Py(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Wy(n,i,r){let s=await Promise.all(n.map(async o=>{let c=i.routes[o.route.id];if(c){let d=await Jy(c,r);return d.links?d.links():[]}return[]}));return nb(s.flat(1).filter(Py).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function $m(n,i,r,s,o,c){let d=(p,h)=>r[h]?p.route.id!==r[h].route.id:!0,g=(p,h)=>r[h].pathname!==p.pathname||r[h].route.path?.endsWith("*")&&r[h].params["*"]!==p.params["*"];return c==="assets"?i.filter((p,h)=>d(p,h)||g(p,h)):c==="data"?i.filter((p,h)=>{let x=s.routes[p.route.id];if(!x||!x.hasLoader)return!1;if(d(p,h)||g(p,h))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Iy(n,i,{includeHydrateFallback:r}={}){return eb(n.map(s=>{let o=i.routes[s.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function eb(n){return[...new Set(n)]}function tb(n){let i={},r=Object.keys(n).sort();for(let s of r)i[s]=n[s];return i}function nb(n,i){let r=new Set;return new Set(i),n.reduce((s,o)=>{let c=JSON.stringify(tb(o));return r.has(c)||(r.add(c),s.push({key:c,link:o})),s},[])}function F0(){let n=M.useContext(ji);return gf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function ab(){let n=M.useContext(ks);return gf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var xf=M.createContext(void 0);xf.displayName="FrameworkContext";function J0(){let n=M.useContext(xf);return gf(n,"You must render this element inside a <HydratedRouter> element"),n}function ib(n,i){let r=M.useContext(xf),[s,o]=M.useState(!1),[c,d]=M.useState(!1),{onFocus:g,onBlur:p,onMouseEnter:h,onMouseLeave:x,onTouchStart:v}=i,E=M.useRef(null);M.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let A=_=>{_.forEach(D=>{d(D.isIntersecting)})},w=new IntersectionObserver(A,{threshold:.5});return E.current&&w.observe(E.current),()=>{w.disconnect()}}},[n]),M.useEffect(()=>{if(s){let A=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(A)}}},[s]);let S=()=>{o(!0)},b=()=>{o(!1),d(!1)};return r?n!=="intent"?[c,E,{}]:[c,E,{onFocus:Dl(g,S),onBlur:Dl(p,b),onMouseEnter:Dl(h,S),onMouseLeave:Dl(x,b),onTouchStart:Dl(v,S)}]:[!1,E,{}]}function Dl(n,i){return r=>{n&&n(r),r.defaultPrevented||i(r)}}function lb({page:n,...i}){let{router:r}=F0(),s=M.useMemo(()=>H0(r.routes,n,r.basename),[r.routes,n,r.basename]);return s?M.createElement(sb,{page:n,matches:s,...i}):null}function rb(n){let{manifest:i,routeModules:r}=J0(),[s,o]=M.useState([]);return M.useEffect(()=>{let c=!1;return Wy(n,i,r).then(d=>{c||o(d)}),()=>{c=!0}},[n,i,r]),s}function sb({page:n,matches:i,...r}){let s=ca(),{manifest:o,routeModules:c}=J0(),{basename:d}=F0(),{loaderData:g,matches:p}=ab(),h=M.useMemo(()=>$m(n,i,p,o,s,"data"),[n,i,p,o,s]),x=M.useMemo(()=>$m(n,i,p,o,s,"assets"),[n,i,p,o,s]),v=M.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let b=new Set,A=!1;if(i.forEach(_=>{let D=o.routes[_.route.id];!D||!D.hasLoader||(!h.some(j=>j.route.id===_.route.id)&&_.route.id in g&&c[_.route.id]?.shouldRevalidate||D.hasClientLoader?A=!0:b.add(_.route.id))}),b.size===0)return[];let w=Fy(n,d,"data");return A&&b.size>0&&w.searchParams.set("_routes",i.filter(_=>b.has(_.route.id)).map(_=>_.route.id).join(",")),[w.pathname+w.search]},[d,g,s,o,h,i,n,c]),E=M.useMemo(()=>Iy(x,o),[x,o]),S=rb(x);return M.createElement(M.Fragment,null,v.map(b=>M.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...r})),E.map(b=>M.createElement("link",{key:b,rel:"modulepreload",href:b,...r})),S.map(({key:b,link:A})=>M.createElement("link",{key:b,nonce:r.nonce,...A})))}function ob(...n){return i=>{n.forEach(r=>{typeof r=="function"?r(i):r!=null&&(r.current=i)})}}var P0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{P0&&(window.__reactRouterVersion="7.9.4")}catch{}function ub({basename:n,children:i,window:r}){let s=M.useRef();s.current==null&&(s.current=Z1({window:r,v5Compat:!0}));let o=s.current,[c,d]=M.useState({action:o.action,location:o.location}),g=M.useCallback(p=>{M.startTransition(()=>d(p))},[d]);return M.useLayoutEffect(()=>o.listen(g),[o,g]),M.createElement(Gy,{basename:n,children:i,location:c.location,navigationType:c.action,navigator:o})}var W0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bl=M.forwardRef(function({onClick:i,discover:r="render",prefetch:s="none",relative:o,reloadDocument:c,replace:d,state:g,target:p,to:h,preventScrollReset:x,viewTransition:v,...E},S){let{basename:b}=M.useContext(on),A=typeof h=="string"&&W0.test(h),w,_=!1;if(typeof h=="string"&&A&&(w=h,P0))try{let ne=new URL(window.location.href),P=h.startsWith("//")?new URL(ne.protocol+h):new URL(h),J=Nn(P.pathname,b);P.origin===ne.origin&&J!=null?h=J+P.search+P.hash:_=!0}catch{sn(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=by(h,{relative:o}),[j,Q,$]=ib(s,E),U=pb(h,{replace:d,state:g,target:p,preventScrollReset:x,relative:o,viewTransition:v});function B(ne){i&&i(ne),ne.defaultPrevented||U(ne)}let G=M.createElement("a",{...E,...$,href:w||D,onClick:_||c?i:B,ref:ob(S,Q),target:p,"data-discover":!A&&r==="render"?"true":void 0});return j&&!A?M.createElement(M.Fragment,null,G,M.createElement(lb,{page:D})):G});Bl.displayName="Link";var cb=M.forwardRef(function({"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:c,to:d,viewTransition:g,children:p,...h},x){let v=Vl(d,{relative:h.relative}),E=ca(),S=M.useContext(ks),{navigator:b,basename:A}=M.useContext(on),w=S!=null&&vb(v)&&g===!0,_=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,D=E.pathname,j=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;r||(D=D.toLowerCase(),j=j?j.toLowerCase():null,_=_.toLowerCase()),j&&A&&(j=Nn(j,A)||j);const Q=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let $=D===_||!o&&D.startsWith(_)&&D.charAt(Q)==="/",U=j!=null&&(j===_||!o&&j.startsWith(_)&&j.charAt(_.length)==="/"),B={isActive:$,isPending:U,isTransitioning:w},G=$?i:void 0,ne;typeof s=="function"?ne=s(B):ne=[s,$?"active":null,U?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let P=typeof c=="function"?c(B):c;return M.createElement(Bl,{...h,"aria-current":G,className:ne,ref:x,style:P,to:d,viewTransition:g},typeof p=="function"?p(B):p)});cb.displayName="NavLink";var fb=M.forwardRef(({discover:n="render",fetcherKey:i,navigate:r,reloadDocument:s,replace:o,state:c,method:d=bs,action:g,onSubmit:p,relative:h,preventScrollReset:x,viewTransition:v,...E},S)=>{let b=gb(),A=xb(g,{relative:h}),w=d.toLowerCase()==="get"?"get":"post",_=typeof g=="string"&&W0.test(g),D=j=>{if(p&&p(j),j.defaultPrevented)return;j.preventDefault();let Q=j.nativeEvent.submitter,$=Q?.getAttribute("formmethod")||d;b(Q||j.currentTarget,{fetcherKey:i,method:$,navigate:r,replace:o,state:c,relative:h,preventScrollReset:x,viewTransition:v})};return M.createElement("form",{ref:S,method:w,action:A,onSubmit:s?p:D,...E,"data-discover":!_&&n==="render"?"true":void 0})});fb.displayName="Form";function db(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function I0(n){let i=M.useContext(ji);return Ye(i,db(n)),i}function pb(n,{target:i,replace:r,state:s,preventScrollReset:o,relative:c,viewTransition:d}={}){let g=Ni(),p=ca(),h=Vl(n,{relative:c});return M.useCallback(x=>{if($y(x,i)){x.preventDefault();let v=r!==void 0?r:Gl(p)===Gl(h);g(n,{replace:v,state:s,preventScrollReset:o,relative:c,viewTransition:d})}},[p,g,h,r,s,i,n,o,c,d])}var hb=0,mb=()=>`__${String(++hb)}__`;function gb(){let{router:n}=I0("useSubmit"),{basename:i}=M.useContext(on),r=Ny();return M.useCallback(async(s,o={})=>{let{action:c,method:d,encType:g,formData:p,body:h}=Ky(s,i);if(o.navigate===!1){let x=o.fetcherKey||mb();await n.fetch(x,r,o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||d,formEncType:o.encType||g,flushSync:o.flushSync})}else await n.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||d,formEncType:o.encType||g,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,i,r])}function xb(n,{relative:i}={}){let{basename:r}=M.useContext(on),s=M.useContext(Wt);Ye(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),c={...Vl(n||".",{relative:i})},d=ca();if(n==null){c.search=d.search;let g=new URLSearchParams(c.search),p=g.getAll("index");if(p.some(x=>x==="")){g.delete("index"),p.filter(v=>v).forEach(v=>g.append("index",v));let x=g.toString();c.search=x?`?${x}`:""}}return(!n||n===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(c.pathname=c.pathname==="/"?r:Dn([r,c.pathname])),Gl(c)}function vb(n,{relative:i}={}){let r=M.useContext(X0);Ye(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=I0("useViewTransitionState"),o=Vl(n,{relative:i});if(!r.isTransitioning)return!1;let c=Nn(r.currentLocation.pathname,s)||r.currentLocation.pathname,d=Nn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return Rs(o.pathname,d)!=null||Rs(o.pathname,c)!=null}var dt=function(){return dt=Object.assign||function(i){for(var r,s=1,o=arguments.length;s<o;s++){r=arguments[s];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(i[c]=r[c])}return i},dt.apply(this,arguments)};function zi(n,i,r){if(r||arguments.length===2)for(var s=0,o=i.length,c;s<o;s++)(c||!(s in i))&&(c||(c=Array.prototype.slice.call(i,0,s)),c[s]=i[s]);return n.concat(c||Array.prototype.slice.call(i))}var qe="-ms-",Ul="-moz-",_e="-webkit-",eg="comm",Vs="rule",vf="decl",yb="@import",tg="@keyframes",bb="@layer",ng=Math.abs,yf=String.fromCharCode,Qc=Object.assign;function Sb(n,i){return it(n,0)^45?(((i<<2^it(n,0))<<2^it(n,1))<<2^it(n,2))<<2^it(n,3):0}function ag(n){return n.trim()}function Mn(n,i){return(n=i.exec(n))?n[0]:n}function ve(n,i,r){return n.replace(i,r)}function ws(n,i,r){return n.indexOf(i,r)}function it(n,i){return n.charCodeAt(i)|0}function Ci(n,i,r){return n.slice(i,r)}function rn(n){return n.length}function ig(n){return n.length}function Nl(n,i){return i.push(n),n}function wb(n,i){return n.map(i).join("")}function Qm(n,i){return n.filter(function(r){return!Mn(r,i)})}var Xs=1,Ai=1,lg=0,Zt=0,et=0,Li="";function $s(n,i,r,s,o,c,d,g){return{value:n,root:i,parent:r,type:s,props:o,children:c,line:Xs,column:Ai,length:d,return:"",siblings:g}}function sa(n,i){return Qc($s("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},i)}function wi(n){for(;n.root;)n=sa(n.root,{children:[n]});Nl(n,n.siblings)}function Eb(){return et}function Tb(){return et=Zt>0?it(Li,--Zt):0,Ai--,et===10&&(Ai=1,Xs--),et}function Pt(){return et=Zt<lg?it(Li,Zt++):0,Ai++,et===10&&(Ai=1,Xs++),et}function ja(){return it(Li,Zt)}function Es(){return Zt}function Qs(n,i){return Ci(Li,n,i)}function Zc(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zb(n){return Xs=Ai=1,lg=rn(Li=n),Zt=0,[]}function Cb(n){return Li="",n}function Oc(n){return ag(Qs(Zt-1,Kc(n===91?n+2:n===40?n+1:n)))}function Ab(n){for(;(et=ja())&&et<33;)Pt();return Zc(n)>2||Zc(et)>3?"":" "}function Ob(n,i){for(;--i&&Pt()&&!(et<48||et>102||et>57&&et<65||et>70&&et<97););return Qs(n,Es()+(i<6&&ja()==32&&Pt()==32))}function Kc(n){for(;Pt();)switch(et){case n:return Zt;case 34:case 39:n!==34&&n!==39&&Kc(et);break;case 40:n===41&&Kc(n);break;case 92:Pt();break}return Zt}function _b(n,i){for(;Pt()&&n+et!==57;)if(n+et===84&&ja()===47)break;return"/*"+Qs(i,Zt-1)+"*"+yf(n===47?n:Pt())}function Mb(n){for(;!Zc(ja());)Pt();return Qs(n,Zt)}function Rb(n){return Cb(Ts("",null,null,null,[""],n=zb(n),0,[0],n))}function Ts(n,i,r,s,o,c,d,g,p){for(var h=0,x=0,v=d,E=0,S=0,b=0,A=1,w=1,_=1,D=0,j="",Q=o,$=c,U=s,B=j;w;)switch(b=D,D=Pt()){case 40:if(b!=108&&it(B,v-1)==58){ws(B+=ve(Oc(D),"&","&\f"),"&\f",ng(h?g[h-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:B+=Oc(D);break;case 9:case 10:case 13:case 32:B+=Ab(b);break;case 92:B+=Ob(Es()-1,7);continue;case 47:switch(ja()){case 42:case 47:Nl(Db(_b(Pt(),Es()),i,r,p),p);break;default:B+="/"}break;case 123*A:g[h++]=rn(B)*_;case 125*A:case 59:case 0:switch(D){case 0:case 125:w=0;case 59+x:_==-1&&(B=ve(B,/\f/g,"")),S>0&&rn(B)-v&&Nl(S>32?Km(B+";",s,r,v-1,p):Km(ve(B," ","")+";",s,r,v-2,p),p);break;case 59:B+=";";default:if(Nl(U=Zm(B,i,r,h,x,o,g,j,Q=[],$=[],v,c),c),D===123)if(x===0)Ts(B,i,U,U,Q,c,v,g,$);else switch(E===99&&it(B,3)===110?100:E){case 100:case 108:case 109:case 115:Ts(n,U,U,s&&Nl(Zm(n,U,U,0,0,o,g,j,o,Q=[],v,$),$),o,$,v,g,s?Q:$);break;default:Ts(B,U,U,U,[""],$,0,g,$)}}h=x=S=0,A=_=1,j=B="",v=d;break;case 58:v=1+rn(B),S=b;default:if(A<1){if(D==123)--A;else if(D==125&&A++==0&&Tb()==125)continue}switch(B+=yf(D),D*A){case 38:_=x>0?1:(B+="\f",-1);break;case 44:g[h++]=(rn(B)-1)*_,_=1;break;case 64:ja()===45&&(B+=Oc(Pt())),E=ja(),x=v=rn(j=B+=Mb(Es())),D++;break;case 45:b===45&&rn(B)==2&&(A=0)}}return c}function Zm(n,i,r,s,o,c,d,g,p,h,x,v){for(var E=o-1,S=o===0?c:[""],b=ig(S),A=0,w=0,_=0;A<s;++A)for(var D=0,j=Ci(n,E+1,E=ng(w=d[A])),Q=n;D<b;++D)(Q=ag(w>0?S[D]+" "+j:ve(j,/&\f/g,S[D])))&&(p[_++]=Q);return $s(n,i,r,o===0?Vs:g,p,h,x,v)}function Db(n,i,r,s){return $s(n,i,r,eg,yf(Eb()),Ci(n,2,-2),0,s)}function Km(n,i,r,s,o){return $s(n,i,r,vf,Ci(n,0,s),Ci(n,s+1,-1),s,o)}function rg(n,i,r){switch(Sb(n,i)){case 5103:return _e+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return _e+n+n;case 4789:return Ul+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return _e+n+Ul+n+qe+n+n;case 5936:switch(it(n,i+11)){case 114:return _e+n+qe+ve(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return _e+n+qe+ve(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return _e+n+qe+ve(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return _e+n+qe+n+n;case 6165:return _e+n+qe+"flex-"+n+n;case 5187:return _e+n+ve(n,/(\w+).+(:[^]+)/,_e+"box-$1$2"+qe+"flex-$1$2")+n;case 5443:return _e+n+qe+"flex-item-"+ve(n,/flex-|-self/g,"")+(Mn(n,/flex-|baseline/)?"":qe+"grid-row-"+ve(n,/flex-|-self/g,""))+n;case 4675:return _e+n+qe+"flex-line-pack"+ve(n,/align-content|flex-|-self/g,"")+n;case 5548:return _e+n+qe+ve(n,"shrink","negative")+n;case 5292:return _e+n+qe+ve(n,"basis","preferred-size")+n;case 6060:return _e+"box-"+ve(n,"-grow","")+_e+n+qe+ve(n,"grow","positive")+n;case 4554:return _e+ve(n,/([^-])(transform)/g,"$1"+_e+"$2")+n;case 6187:return ve(ve(ve(n,/(zoom-|grab)/,_e+"$1"),/(image-set)/,_e+"$1"),n,"")+n;case 5495:case 3959:return ve(n,/(image-set\([^]*)/,_e+"$1$`$1");case 4968:return ve(ve(n,/(.+:)(flex-)?(.*)/,_e+"box-pack:$3"+qe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+_e+n+n;case 4200:if(!Mn(n,/flex-|baseline/))return qe+"grid-column-align"+Ci(n,i)+n;break;case 2592:case 3360:return qe+ve(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(s,o){return i=o,Mn(s.props,/grid-\w+-end/)})?~ws(n+(r=r[i].value),"span",0)?n:qe+ve(n,"-start","")+n+qe+"grid-row-span:"+(~ws(r,"span",0)?Mn(r,/\d+/):+Mn(r,/\d+/)-+Mn(n,/\d+/))+";":qe+ve(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(s){return Mn(s.props,/grid-\w+-start/)})?n:qe+ve(ve(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ve(n,/(.+)-inline(.+)/,_e+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rn(n)-1-i>6)switch(it(n,i+1)){case 109:if(it(n,i+4)!==45)break;case 102:return ve(n,/(.+:)(.+)-([^]+)/,"$1"+_e+"$2-$3$1"+Ul+(it(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~ws(n,"stretch",0)?rg(ve(n,"stretch","fill-available"),i,r)+n:n}break;case 5152:case 5920:return ve(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,c,d,g,p,h){return qe+o+":"+c+h+(d?qe+o+"-span:"+(g?p:+p-+c)+h:"")+n});case 4949:if(it(n,i+6)===121)return ve(n,":",":"+_e)+n;break;case 6444:switch(it(n,it(n,14)===45?18:11)){case 120:return ve(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+_e+(it(n,14)===45?"inline-":"")+"box$3$1"+_e+"$2$3$1"+qe+"$2box$3")+n;case 100:return ve(n,":",":"+qe)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ve(n,"scroll-","scroll-snap-")+n}return n}function Ds(n,i){for(var r="",s=0;s<n.length;s++)r+=i(n[s],s,n,i)||"";return r}function jb(n,i,r,s){switch(n.type){case bb:if(n.children.length)break;case yb:case vf:return n.return=n.return||n.value;case eg:return"";case tg:return n.return=n.value+"{"+Ds(n.children,s)+"}";case Vs:if(!rn(n.value=n.props.join(",")))return""}return rn(r=Ds(n.children,s))?n.return=n.value+"{"+r+"}":""}function Nb(n){var i=ig(n);return function(r,s,o,c){for(var d="",g=0;g<i;g++)d+=n[g](r,s,o,c)||"";return d}}function Lb(n){return function(i){i.root||(i=i.return)&&n(i)}}function Bb(n,i,r,s){if(n.length>-1&&!n.return)switch(n.type){case vf:n.return=rg(n.value,n.length,r);return;case tg:return Ds([sa(n,{value:ve(n.value,"@","@"+_e)})],s);case Vs:if(n.length)return wb(r=n.props,function(o){switch(Mn(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wi(sa(n,{props:[ve(o,/:(read-\w+)/,":"+Ul+"$1")]})),wi(sa(n,{props:[o]})),Qc(n,{props:Qm(r,s)});break;case"::placeholder":wi(sa(n,{props:[ve(o,/:(plac\w+)/,":"+_e+"input-$1")]})),wi(sa(n,{props:[ve(o,/:(plac\w+)/,":"+Ul+"$1")]})),wi(sa(n,{props:[ve(o,/:(plac\w+)/,qe+"input-$1")]})),wi(sa(n,{props:[o]})),Qc(n,{props:Qm(r,s)});break}return""})}}var Ub={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nt={},Oi=typeof process<"u"&&Nt!==void 0&&(Nt.REACT_APP_SC_ATTR||Nt.SC_ATTR)||"data-styled",sg="active",og="data-styled-version",Zs="6.1.19",bf=`/*!sc*/
`,js=typeof window<"u"&&typeof document<"u",Hb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==""?Nt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Nt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.SC_DISABLE_SPEEDY!==void 0&&Nt.SC_DISABLE_SPEEDY!==""&&Nt.SC_DISABLE_SPEEDY!=="false"&&Nt.SC_DISABLE_SPEEDY),Gb={},Ks=Object.freeze([]),_i=Object.freeze({});function ug(n,i,r){return r===void 0&&(r=_i),n.theme!==r.theme&&n.theme||i||r.theme}var cg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kb=/(^-|-$)/g;function Fm(n){return n.replace(qb,"-").replace(kb,"")}var Yb=/(a)(d)/gi,hs=52,Jm=function(n){return String.fromCharCode(n+(n>25?39:97))};function Fc(n){var i,r="";for(i=Math.abs(n);i>hs;i=i/hs|0)r=Jm(i%hs)+r;return(Jm(i%hs)+r).replace(Yb,"$1-$2")}var _c,fg=5381,Ei=function(n,i){for(var r=i.length;r;)n=33*n^i.charCodeAt(--r);return n},dg=function(n){return Ei(fg,n)};function Sf(n){return Fc(dg(n)>>>0)}function Vb(n){return n.displayName||n.name||"Component"}function Mc(n){return typeof n=="string"&&!0}var pg=typeof Symbol=="function"&&Symbol.for,hg=pg?Symbol.for("react.memo"):60115,Xb=pg?Symbol.for("react.forward_ref"):60112,$b={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zb=((_c={})[Xb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_c[hg]=mg,_c);function Pm(n){return("type"in(i=n)&&i.type.$$typeof)===hg?mg:"$$typeof"in n?Zb[n.$$typeof]:$b;var i}var Kb=Object.defineProperty,Fb=Object.getOwnPropertyNames,Wm=Object.getOwnPropertySymbols,Jb=Object.getOwnPropertyDescriptor,Pb=Object.getPrototypeOf,Im=Object.prototype;function gg(n,i,r){if(typeof i!="string"){if(Im){var s=Pb(i);s&&s!==Im&&gg(n,s,r)}var o=Fb(i);Wm&&(o=o.concat(Wm(i)));for(var c=Pm(n),d=Pm(i),g=0;g<o.length;++g){var p=o[g];if(!(p in Qb||r&&r[p]||d&&p in d||c&&p in c)){var h=Jb(i,p);try{Kb(n,p,h)}catch{}}}}return n}function Mi(n){return typeof n=="function"}function wf(n){return typeof n=="object"&&"styledComponentId"in n}function Ra(n,i){return n&&i?"".concat(n," ").concat(i):n||i||""}function Ns(n,i){if(n.length===0)return"";for(var r=n[0],s=1;s<n.length;s++)r+=n[s];return r}function ql(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Jc(n,i,r){if(r===void 0&&(r=!1),!r&&!ql(n)&&!Array.isArray(n))return i;if(Array.isArray(i))for(var s=0;s<i.length;s++)n[s]=Jc(n[s],i[s]);else if(ql(i))for(var s in i)n[s]=Jc(n[s],i[s]);return n}function Ef(n,i){Object.defineProperty(n,"toString",{value:i})}function Xl(n){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var Wb=(function(){function n(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return n.prototype.indexOfGroup=function(i){for(var r=0,s=0;s<i;s++)r+=this.groupSizes[s];return r},n.prototype.insertRules=function(i,r){if(i>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,c=o;i>=c;)if((c<<=1)<0)throw Xl(16,"".concat(i));this.groupSizes=new Uint32Array(c),this.groupSizes.set(s),this.length=c;for(var d=o;d<c;d++)this.groupSizes[d]=0}for(var g=this.indexOfGroup(i+1),p=(d=0,r.length);d<p;d++)this.tag.insertRule(g,r[d])&&(this.groupSizes[i]++,g++)},n.prototype.clearGroup=function(i){if(i<this.length){var r=this.groupSizes[i],s=this.indexOfGroup(i),o=s+r;this.groupSizes[i]=0;for(var c=s;c<o;c++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(i){var r="";if(i>=this.length||this.groupSizes[i]===0)return r;for(var s=this.groupSizes[i],o=this.indexOfGroup(i),c=o+s,d=o;d<c;d++)r+="".concat(this.tag.getRule(d)).concat(bf);return r},n})(),zs=new Map,Ls=new Map,Cs=1,ms=function(n){if(zs.has(n))return zs.get(n);for(;Ls.has(Cs);)Cs++;var i=Cs++;return zs.set(n,i),Ls.set(i,n),i},Ib=function(n,i){Cs=i+1,zs.set(n,i),Ls.set(i,n)},eS="style[".concat(Oi,"][").concat(og,'="').concat(Zs,'"]'),tS=new RegExp("^".concat(Oi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),nS=function(n,i,r){for(var s,o=r.split(","),c=0,d=o.length;c<d;c++)(s=o[c])&&n.registerName(i,s)},aS=function(n,i){for(var r,s=((r=i.textContent)!==null&&r!==void 0?r:"").split(bf),o=[],c=0,d=s.length;c<d;c++){var g=s[c].trim();if(g){var p=g.match(tS);if(p){var h=0|parseInt(p[1],10),x=p[2];h!==0&&(Ib(x,h),nS(n,x,p[3]),n.getTag().insertRules(h,o)),o.length=0}else o.push(g)}}},e0=function(n){for(var i=document.querySelectorAll(eS),r=0,s=i.length;r<s;r++){var o=i[r];o&&o.getAttribute(Oi)!==sg&&(aS(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function iS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xg=function(n){var i=document.head,r=n||i,s=document.createElement("style"),o=(function(g){var p=Array.from(g.querySelectorAll("style[".concat(Oi,"]")));return p[p.length-1]})(r),c=o!==void 0?o.nextSibling:null;s.setAttribute(Oi,sg),s.setAttribute(og,Zs);var d=iS();return d&&s.setAttribute("nonce",d),r.insertBefore(s,c),s},lS=(function(){function n(i){this.element=xg(i),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,o=0,c=s.length;o<c;o++){var d=s[o];if(d.ownerNode===r)return d}throw Xl(17)})(this.element),this.length=0}return n.prototype.insertRule=function(i,r){try{return this.sheet.insertRule(r,i),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},n.prototype.getRule=function(i){var r=this.sheet.cssRules[i];return r&&r.cssText?r.cssText:""},n})(),rS=(function(){function n(i){this.element=xg(i),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(i,r){if(i<=this.length&&i>=0){var s=document.createTextNode(r);return this.element.insertBefore(s,this.nodes[i]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},n.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},n})(),sS=(function(){function n(i){this.rules=[],this.length=0}return n.prototype.insertRule=function(i,r){return i<=this.length&&(this.rules.splice(i,0,r),this.length++,!0)},n.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},n.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},n})(),t0=js,oS={isServer:!js,useCSSOMInjection:!Hb},Bs=(function(){function n(i,r,s){i===void 0&&(i=_i),r===void 0&&(r={});var o=this;this.options=dt(dt({},oS),i),this.gs=r,this.names=new Map(s),this.server=!!i.isServer,!this.server&&js&&t0&&(t0=!1,e0(this)),Ef(this,function(){return(function(c){for(var d=c.getTag(),g=d.length,p="",h=function(v){var E=(function(_){return Ls.get(_)})(v);if(E===void 0)return"continue";var S=c.names.get(E),b=d.getGroup(v);if(S===void 0||!S.size||b.length===0)return"continue";var A="".concat(Oi,".g").concat(v,'[id="').concat(E,'"]'),w="";S!==void 0&&S.forEach(function(_){_.length>0&&(w+="".concat(_,","))}),p+="".concat(b).concat(A,'{content:"').concat(w,'"}').concat(bf)},x=0;x<g;x++)h(x);return p})(o)})}return n.registerId=function(i){return ms(i)},n.prototype.rehydrate=function(){!this.server&&js&&e0(this)},n.prototype.reconstructWithOptions=function(i,r){return r===void 0&&(r=!0),new n(dt(dt({},this.options),i),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(i=(function(r){var s=r.useCSSOMInjection,o=r.target;return r.isServer?new sS(o):s?new lS(o):new rS(o)})(this.options),new Wb(i)));var i},n.prototype.hasNameForId=function(i,r){return this.names.has(i)&&this.names.get(i).has(r)},n.prototype.registerName=function(i,r){if(ms(i),this.names.has(i))this.names.get(i).add(r);else{var s=new Set;s.add(r),this.names.set(i,s)}},n.prototype.insertRules=function(i,r,s){this.registerName(i,r),this.getTag().insertRules(ms(i),s)},n.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},n.prototype.clearRules=function(i){this.getTag().clearGroup(ms(i)),this.clearNames(i)},n.prototype.clearTag=function(){this.tag=void 0},n})(),uS=/&/g,cS=/^\s*\/\/.*$/gm;function vg(n,i){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(i," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(i," ")),r.props=r.props.map(function(s){return"".concat(i," ").concat(s)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=vg(r.children,i)),r})}function fS(n){var i,r,s,o=_i,c=o.options,d=c===void 0?_i:c,g=o.plugins,p=g===void 0?Ks:g,h=function(E,S,b){return b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?".".concat(i):E},x=p.slice();x.push(function(E){E.type===Vs&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(uS,r).replace(s,h))}),d.prefix&&x.push(Bb),x.push(jb);var v=function(E,S,b,A){S===void 0&&(S=""),b===void 0&&(b=""),A===void 0&&(A="&"),i=A,r=S,s=new RegExp("\\".concat(r,"\\b"),"g");var w=E.replace(cS,""),_=Rb(b||S?"".concat(b," ").concat(S," { ").concat(w," }"):w);d.namespace&&(_=vg(_,d.namespace));var D=[];return Ds(_,Nb(x.concat(Lb(function(j){return D.push(j)})))),D};return v.hash=p.length?p.reduce(function(E,S){return S.name||Xl(15),Ei(E,S.name)},fg).toString():"",v}var dS=new Bs,Pc=fS(),yg=Be.createContext({shouldForwardProp:void 0,styleSheet:dS,stylis:Pc});yg.Consumer;Be.createContext(void 0);function Wc(){return M.useContext(yg)}var bg=(function(){function n(i,r){var s=this;this.inject=function(o,c){c===void 0&&(c=Pc);var d=s.name+c.hash;o.hasNameForId(s.id,d)||o.insertRules(s.id,d,c(s.rules,d,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=r,Ef(this,function(){throw Xl(12,String(s.name))})}return n.prototype.getName=function(i){return i===void 0&&(i=Pc),this.name+i.hash},n})(),pS=function(n){return n>="A"&&n<="Z"};function n0(n){for(var i="",r=0;r<n.length;r++){var s=n[r];if(r===1&&s==="-"&&n[0]==="-")return n;pS(s)?i+="-"+s.toLowerCase():i+=s}return i.startsWith("ms-")?"-"+i:i}var Sg=function(n){return n==null||n===!1||n===""},wg=function(n){var i,r,s=[];for(var o in n){var c=n[o];n.hasOwnProperty(o)&&!Sg(c)&&(Array.isArray(c)&&c.isCss||Mi(c)?s.push("".concat(n0(o),":"),c,";"):ql(c)?s.push.apply(s,zi(zi(["".concat(o," {")],wg(c),!1),["}"],!1)):s.push("".concat(n0(o),": ").concat((i=o,(r=c)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||i in Ub||i.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return s};function ua(n,i,r,s){if(Sg(n))return[];if(wf(n))return[".".concat(n.styledComponentId)];if(Mi(n)){if(!Mi(c=n)||c.prototype&&c.prototype.isReactComponent||!i)return[n];var o=n(i);return ua(o,i,r,s)}var c;return n instanceof bg?r?(n.inject(r,s),[n.getName(s)]):[n]:ql(n)?wg(n):Array.isArray(n)?Array.prototype.concat.apply(Ks,n.map(function(d){return ua(d,i,r,s)})):[n.toString()]}function Eg(n){for(var i=0;i<n.length;i+=1){var r=n[i];if(Mi(r)&&!wf(r))return!1}return!0}var hS=dg(Zs),mS=(function(){function n(i,r,s){this.rules=i,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Eg(i),this.componentId=r,this.baseHash=Ei(hS,r),this.baseStyle=s,Bs.registerId(r)}return n.prototype.generateAndInjectStyles=function(i,r,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,r,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=Ra(o,this.staticRulesId);else{var c=Ns(ua(this.rules,i,r,s)),d=Fc(Ei(this.baseHash,c)>>>0);if(!r.hasNameForId(this.componentId,d)){var g=s(c,".".concat(d),void 0,this.componentId);r.insertRules(this.componentId,d,g)}o=Ra(o,d),this.staticRulesId=d}else{for(var p=Ei(this.baseHash,s.hash),h="",x=0;x<this.rules.length;x++){var v=this.rules[x];if(typeof v=="string")h+=v;else if(v){var E=Ns(ua(v,i,r,s));p=Ei(p,E+x),h+=E}}if(h){var S=Fc(p>>>0);r.hasNameForId(this.componentId,S)||r.insertRules(this.componentId,S,s(h,".".concat(S),void 0,this.componentId)),o=Ra(o,S)}}return o},n})(),Tf=Be.createContext(void 0);Tf.Consumer;var Rc={};function gS(n,i,r){var s=wf(n),o=n,c=!Mc(n),d=i.attrs,g=d===void 0?Ks:d,p=i.componentId,h=p===void 0?(function(Q,$){var U=typeof Q!="string"?"sc":Fm(Q);Rc[U]=(Rc[U]||0)+1;var B="".concat(U,"-").concat(Sf(Zs+U+Rc[U]));return $?"".concat($,"-").concat(B):B})(i.displayName,i.parentComponentId):p,x=i.displayName,v=x===void 0?(function(Q){return Mc(Q)?"styled.".concat(Q):"Styled(".concat(Vb(Q),")")})(n):x,E=i.displayName&&i.componentId?"".concat(Fm(i.displayName),"-").concat(i.componentId):i.componentId||h,S=s&&o.attrs?o.attrs.concat(g).filter(Boolean):g,b=i.shouldForwardProp;if(s&&o.shouldForwardProp){var A=o.shouldForwardProp;if(i.shouldForwardProp){var w=i.shouldForwardProp;b=function(Q,$){return A(Q,$)&&w(Q,$)}}else b=A}var _=new mS(r,E,s?o.componentStyle:void 0);function D(Q,$){return(function(U,B,G){var ne=U.attrs,P=U.componentStyle,J=U.defaultProps,I=U.foldedComponentIds,se=U.styledComponentId,oe=U.target,ze=Be.useContext(Tf),q=Wc(),W=U.shouldForwardProp||q.shouldForwardProp,F=ug(B,ze,J)||_i,ie=(function(de,he,Ee){for(var $e,Me=dt(dt({},he),{className:void 0,theme:Ee}),un=0;un<de.length;un+=1){var cn=Mi($e=de[un])?$e(Me):$e;for(var Bt in cn)Me[Bt]=Bt==="className"?Ra(Me[Bt],cn[Bt]):Bt==="style"?dt(dt({},Me[Bt]),cn[Bt]):cn[Bt]}return he.className&&(Me.className=Ra(Me.className,he.className)),Me})(ne,B,F),fe=ie.as||oe,C={};for(var V in ie)ie[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&ie.theme===F||(V==="forwardedAs"?C.as=ie.forwardedAs:W&&!W(V,fe)||(C[V]=ie[V]));var ee=(function(de,he){var Ee=Wc(),$e=de.generateAndInjectStyles(he,Ee.styleSheet,Ee.stylis);return $e})(P,ie),ae=Ra(I,se);return ee&&(ae+=" "+ee),ie.className&&(ae+=" "+ie.className),C[Mc(fe)&&!cg.has(fe)?"class":"className"]=ae,G&&(C.ref=G),M.createElement(fe,C)})(j,Q,$)}D.displayName=v;var j=Be.forwardRef(D);return j.attrs=S,j.componentStyle=_,j.displayName=v,j.shouldForwardProp=b,j.foldedComponentIds=s?Ra(o.foldedComponentIds,o.styledComponentId):"",j.styledComponentId=E,j.target=s?o.target:n,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Q){this._foldedDefaultProps=s?(function($){for(var U=[],B=1;B<arguments.length;B++)U[B-1]=arguments[B];for(var G=0,ne=U;G<ne.length;G++)Jc($,ne[G],!0);return $})({},o.defaultProps,Q):Q}}),Ef(j,function(){return".".concat(j.styledComponentId)}),c&&gg(j,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function a0(n,i){for(var r=[n[0]],s=0,o=i.length;s<o;s+=1)r.push(i[s],n[s+1]);return r}var i0=function(n){return Object.assign(n,{isCss:!0})};function Fs(n){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];if(Mi(n)||ql(n))return i0(ua(a0(Ks,zi([n],i,!0))));var s=n;return i.length===0&&s.length===1&&typeof s[0]=="string"?ua(s):i0(ua(a0(s,i)))}function Ic(n,i,r){if(r===void 0&&(r=_i),!i)throw Xl(1,i);var s=function(o){for(var c=[],d=1;d<arguments.length;d++)c[d-1]=arguments[d];return n(i,r,Fs.apply(void 0,zi([o],c,!1)))};return s.attrs=function(o){return Ic(n,i,dt(dt({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return Ic(n,i,dt(dt({},r),o))},s}var Tg=function(n){return Ic(gS,n)},te=Tg;cg.forEach(function(n){te[n]=Tg(n)});var xS=(function(){function n(i,r){this.rules=i,this.componentId=r,this.isStatic=Eg(i),Bs.registerId(this.componentId+1)}return n.prototype.createStyles=function(i,r,s,o){var c=o(Ns(ua(this.rules,r,s,o)),""),d=this.componentId+i;s.insertRules(d,d,c)},n.prototype.removeStyles=function(i,r){r.clearRules(this.componentId+i)},n.prototype.renderStyles=function(i,r,s,o){i>2&&Bs.registerId(this.componentId+i),this.removeStyles(i,s),this.createStyles(i,r,s,o)},n})();function vS(n){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];var s=Fs.apply(void 0,zi([n],i,!1)),o="sc-global-".concat(Sf(JSON.stringify(s))),c=new xS(s,o),d=function(p){var h=Wc(),x=Be.useContext(Tf),v=Be.useRef(h.styleSheet.allocateGSInstance(o)).current;return h.styleSheet.server&&g(v,p,h.styleSheet,x,h.stylis),Be.useLayoutEffect(function(){if(!h.styleSheet.server)return g(v,p,h.styleSheet,x,h.stylis),function(){return c.removeStyles(v,h.styleSheet)}},[v,p,h.styleSheet,x,h.stylis]),null};function g(p,h,x,v,E){if(c.isStatic)c.renderStyles(p,Gb,x,E);else{var S=dt(dt({},h),{theme:ug(h,v,d.defaultProps)});c.renderStyles(p,S,x,E)}}return Be.memo(d)}function $l(n){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];var s=Ns(Fs.apply(void 0,zi([n],i,!1))),o=Sf(s);return new bg(o,s)}const zg=Fs`
  border: 3px solid #fff;
  background: transparent;
  color: #fff;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #ff0000;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
    margin-right: 8px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
    border-radius: 20px;
    margin-right: 6px;
    margin-bottom: 6px;
  }
`,yS=te.button`
  ${zg}
`,bS=te.button`
  ${zg}
  background: #ff0000;
  color: #fff;
  border: 4px solid transparent;
  box-shadow: 0px 0px 07px 08px rgba(255 0 0 / 30%);

  &:hover {
    background: #ff0000;
    color: #fff;
    box-shadow: 0px 0px 07px 15px rgba(255 0 0 / 30%);
  }

  @media (max-width: 768px) {
    box-shadow: 0px 0px 5px 6px rgba(255 0 0 / 30%);

    &:hover {
      box-shadow: 0px 0px 5px 10px rgba(255 0 0 / 30%);
    }
  }

  @media (max-width: 480px) {
    box-shadow: 0px 0px 3px 4px rgba(255 0 0 / 30%);

    &:hover {
      box-shadow: 0px 0px 3px 8px rgba(255 0 0 / 30%);
    }
  }
`;function ef({children:n,red:i,...r}){return z.jsx(z.Fragment,{children:i?z.jsx(bS,{...r,children:n}):z.jsx(yS,{...r,children:n})})}function jn(n){return`https://image.tmdb.org/t/p/original/${n}`}const SS=te.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  overflow-x: auto;
  padding-bottom: 10px;

  /* Estilo da scrollbar */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff6b6b;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ee5a52;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 120px;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
    }
  }

  img {
    margin-top: 10px;
    border-radius: 15px;
    width: 150px;
    height: 180px;
    object-fit: cover;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    border: 2px solid rgba(255, 255, 255, 0.1);

    &:hover {
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
      border-color: #ff6b6b;
    }

    &:error {
      background: linear-gradient(45deg, #2c3e50, #34495e);
    }
  }

  p {
    color: #fff;
    text-align: center;
    margin-top: 10px;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.3;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6b6b;
    }
  }

  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 16px;
    padding-bottom: 8px;

    div {
      min-width: 100px;

      &:hover {
        transform: translateY(-3px);
      }
    }

    img {
      width: 120px;
      height: 150px;
      border-radius: 12px;
    }

    p {
      font-size: 0.8rem;
      max-width: 100px;
      margin-top: 8px;
    }
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-top: 12px;
    padding-bottom: 6px;

    div {
      min-width: 70px;
      max-width: calc(25% - 8px); /* 4 items por linha */

      &:hover {
        transform: translateY(-2px);
      }
    }

    img {
      width: 70px;
      height: 90px;
      border-radius: 8px;
    }

    p {
      font-size: 0.7rem;
      max-width: 70px;
      margin-top: 4px;
      line-height: 1.2;
    }

    /* Scrollbar mais fina no mobile */
    &::-webkit-scrollbar {
      height: 4px;
    }
  }

  @media (max-width: 360px) {
    gap: 8px;

    div {
      min-width: 70px;
    }

    img {
      width: 75px;
      height: 100px;
    }

    p {
      font-size: 0.7rem;
      max-width: 70px;
    }
  }
`,wS=te.h3`
  margin-bottom: 15px;
  color: #ff6b6b;
  font-size: 1.3rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '🎭';
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 12px;
    font-size: 1.2rem;
    gap: 8px;

    &::before {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 1.1rem;
    gap: 6px;

    &::before {
      font-size: 1rem;
    }
  }
`;function ES({movieCredits:n}){return z.jsxs(z.Fragment,{children:[z.jsx(wS,{children:"Elenco Principal"}),n&&n.length>0&&z.jsx(SS,{children:n.slice(0,5).map(i=>z.jsxs("div",{title:`${i.original_name} como ${i.character||"Personagem não informado"}`,children:[z.jsx("img",{src:jn(i.profile_path),alt:i.name,onError:r=>{r.target.src="/placeholder-person.svg"}}),z.jsx("p",{children:i.original_name||i.name})]},i.id))})]})}function Cg(n,i){return function(){return n.apply(i,arguments)}}const{toString:TS}=Object.prototype,{getPrototypeOf:zf}=Object,{iterator:Js,toStringTag:Ag}=Symbol,Ps=(n=>i=>{const r=TS.call(i);return n[r]||(n[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),It=n=>(n=n.toLowerCase(),i=>Ps(i)===n),Ws=n=>i=>typeof i===n,{isArray:Bi}=Array,Ri=Ws("undefined");function Ql(n){return n!==null&&!Ri(n)&&n.constructor!==null&&!Ri(n.constructor)&&wt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Og=It("ArrayBuffer");function zS(n){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(n):i=n&&n.buffer&&Og(n.buffer),i}const CS=Ws("string"),wt=Ws("function"),_g=Ws("number"),Zl=n=>n!==null&&typeof n=="object",AS=n=>n===!0||n===!1,As=n=>{if(Ps(n)!=="object")return!1;const i=zf(n);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Ag in n)&&!(Js in n)},OS=n=>{if(!Zl(n)||Ql(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},_S=It("Date"),MS=It("File"),RS=It("Blob"),DS=It("FileList"),jS=n=>Zl(n)&&wt(n.pipe),NS=n=>{let i;return n&&(typeof FormData=="function"&&n instanceof FormData||wt(n.append)&&((i=Ps(n))==="formdata"||i==="object"&&wt(n.toString)&&n.toString()==="[object FormData]"))},LS=It("URLSearchParams"),[BS,US,HS,GS]=["ReadableStream","Request","Response","Headers"].map(It),qS=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Kl(n,i,{allOwnKeys:r=!1}={}){if(n===null||typeof n>"u")return;let s,o;if(typeof n!="object"&&(n=[n]),Bi(n))for(s=0,o=n.length;s<o;s++)i.call(null,n[s],s,n);else{if(Ql(n))return;const c=r?Object.getOwnPropertyNames(n):Object.keys(n),d=c.length;let g;for(s=0;s<d;s++)g=c[s],i.call(null,n[g],g,n)}}function Mg(n,i){if(Ql(n))return null;i=i.toLowerCase();const r=Object.keys(n);let s=r.length,o;for(;s-- >0;)if(o=r[s],i===o.toLowerCase())return o;return null}const Da=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Rg=n=>!Ri(n)&&n!==Da;function tf(){const{caseless:n,skipUndefined:i}=Rg(this)&&this||{},r={},s=(o,c)=>{const d=n&&Mg(r,c)||c;As(r[d])&&As(o)?r[d]=tf(r[d],o):As(o)?r[d]=tf({},o):Bi(o)?r[d]=o.slice():(!i||!Ri(o))&&(r[d]=o)};for(let o=0,c=arguments.length;o<c;o++)arguments[o]&&Kl(arguments[o],s);return r}const kS=(n,i,r,{allOwnKeys:s}={})=>(Kl(i,(o,c)=>{r&&wt(o)?n[c]=Cg(o,r):n[c]=o},{allOwnKeys:s}),n),YS=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),VS=(n,i,r,s)=>{n.prototype=Object.create(i.prototype,s),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:i.prototype}),r&&Object.assign(n.prototype,r)},XS=(n,i,r,s)=>{let o,c,d;const g={};if(i=i||{},n==null)return i;do{for(o=Object.getOwnPropertyNames(n),c=o.length;c-- >0;)d=o[c],(!s||s(d,n,i))&&!g[d]&&(i[d]=n[d],g[d]=!0);n=r!==!1&&zf(n)}while(n&&(!r||r(n,i))&&n!==Object.prototype);return i},$S=(n,i,r)=>{n=String(n),(r===void 0||r>n.length)&&(r=n.length),r-=i.length;const s=n.indexOf(i,r);return s!==-1&&s===r},QS=n=>{if(!n)return null;if(Bi(n))return n;let i=n.length;if(!_g(i))return null;const r=new Array(i);for(;i-- >0;)r[i]=n[i];return r},ZS=(n=>i=>n&&i instanceof n)(typeof Uint8Array<"u"&&zf(Uint8Array)),KS=(n,i)=>{const s=(n&&n[Js]).call(n);let o;for(;(o=s.next())&&!o.done;){const c=o.value;i.call(n,c[0],c[1])}},FS=(n,i)=>{let r;const s=[];for(;(r=n.exec(i))!==null;)s.push(r);return s},JS=It("HTMLFormElement"),PS=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,s,o){return s.toUpperCase()+o}),l0=(({hasOwnProperty:n})=>(i,r)=>n.call(i,r))(Object.prototype),WS=It("RegExp"),Dg=(n,i)=>{const r=Object.getOwnPropertyDescriptors(n),s={};Kl(r,(o,c)=>{let d;(d=i(o,c,n))!==!1&&(s[c]=d||o)}),Object.defineProperties(n,s)},IS=n=>{Dg(n,(i,r)=>{if(wt(n)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const s=n[r];if(wt(s)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},ew=(n,i)=>{const r={},s=o=>{o.forEach(c=>{r[c]=!0})};return Bi(n)?s(n):s(String(n).split(i)),r},tw=()=>{},nw=(n,i)=>n!=null&&Number.isFinite(n=+n)?n:i;function aw(n){return!!(n&&wt(n.append)&&n[Ag]==="FormData"&&n[Js])}const iw=n=>{const i=new Array(10),r=(s,o)=>{if(Zl(s)){if(i.indexOf(s)>=0)return;if(Ql(s))return s;if(!("toJSON"in s)){i[o]=s;const c=Bi(s)?[]:{};return Kl(s,(d,g)=>{const p=r(d,o+1);!Ri(p)&&(c[g]=p)}),i[o]=void 0,c}}return s};return r(n,0)},lw=It("AsyncFunction"),rw=n=>n&&(Zl(n)||wt(n))&&wt(n.then)&&wt(n.catch),jg=((n,i)=>n?setImmediate:i?((r,s)=>(Da.addEventListener("message",({source:o,data:c})=>{o===Da&&c===r&&s.length&&s.shift()()},!1),o=>{s.push(o),Da.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",wt(Da.postMessage)),sw=typeof queueMicrotask<"u"?queueMicrotask.bind(Da):typeof process<"u"&&process.nextTick||jg,ow=n=>n!=null&&wt(n[Js]),k={isArray:Bi,isArrayBuffer:Og,isBuffer:Ql,isFormData:NS,isArrayBufferView:zS,isString:CS,isNumber:_g,isBoolean:AS,isObject:Zl,isPlainObject:As,isEmptyObject:OS,isReadableStream:BS,isRequest:US,isResponse:HS,isHeaders:GS,isUndefined:Ri,isDate:_S,isFile:MS,isBlob:RS,isRegExp:WS,isFunction:wt,isStream:jS,isURLSearchParams:LS,isTypedArray:ZS,isFileList:DS,forEach:Kl,merge:tf,extend:kS,trim:qS,stripBOM:YS,inherits:VS,toFlatObject:XS,kindOf:Ps,kindOfTest:It,endsWith:$S,toArray:QS,forEachEntry:KS,matchAll:FS,isHTMLForm:JS,hasOwnProperty:l0,hasOwnProp:l0,reduceDescriptors:Dg,freezeMethods:IS,toObjectSet:ew,toCamelCase:PS,noop:tw,toFiniteNumber:nw,findKey:Mg,global:Da,isContextDefined:Rg,isSpecCompliantForm:aw,toJSONObject:iw,isAsyncFn:lw,isThenable:rw,setImmediate:jg,asap:sw,isIterable:ow};function ge(n,i,r,s,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",i&&(this.code=i),r&&(this.config=r),s&&(this.request=s),o&&(this.response=o,this.status=o.status?o.status:null)}k.inherits(ge,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}});const Ng=ge.prototype,Lg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Lg[n]={value:n}});Object.defineProperties(ge,Lg);Object.defineProperty(Ng,"isAxiosError",{value:!0});ge.from=(n,i,r,s,o,c)=>{const d=Object.create(Ng);k.toFlatObject(n,d,function(x){return x!==Error.prototype},h=>h!=="isAxiosError");const g=n&&n.message?n.message:"Error",p=i==null&&n?n.code:i;return ge.call(d,g,p,r,s,o),n&&d.cause==null&&Object.defineProperty(d,"cause",{value:n,configurable:!0}),d.name=n&&n.name||"Error",c&&Object.assign(d,c),d};const uw=null;function nf(n){return k.isPlainObject(n)||k.isArray(n)}function Bg(n){return k.endsWith(n,"[]")?n.slice(0,-2):n}function r0(n,i,r){return n?n.concat(i).map(function(o,c){return o=Bg(o),!r&&c?"["+o+"]":o}).join(r?".":""):i}function cw(n){return k.isArray(n)&&!n.some(nf)}const fw=k.toFlatObject(k,{},null,function(i){return/^is[A-Z]/.test(i)});function Is(n,i,r){if(!k.isObject(n))throw new TypeError("target must be an object");i=i||new FormData,r=k.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(A,w){return!k.isUndefined(w[A])});const s=r.metaTokens,o=r.visitor||x,c=r.dots,d=r.indexes,p=(r.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(i);if(!k.isFunction(o))throw new TypeError("visitor must be a function");function h(b){if(b===null)return"";if(k.isDate(b))return b.toISOString();if(k.isBoolean(b))return b.toString();if(!p&&k.isBlob(b))throw new ge("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(b)||k.isTypedArray(b)?p&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function x(b,A,w){let _=b;if(b&&!w&&typeof b=="object"){if(k.endsWith(A,"{}"))A=s?A:A.slice(0,-2),b=JSON.stringify(b);else if(k.isArray(b)&&cw(b)||(k.isFileList(b)||k.endsWith(A,"[]"))&&(_=k.toArray(b)))return A=Bg(A),_.forEach(function(j,Q){!(k.isUndefined(j)||j===null)&&i.append(d===!0?r0([A],Q,c):d===null?A:A+"[]",h(j))}),!1}return nf(b)?!0:(i.append(r0(w,A,c),h(b)),!1)}const v=[],E=Object.assign(fw,{defaultVisitor:x,convertValue:h,isVisitable:nf});function S(b,A){if(!k.isUndefined(b)){if(v.indexOf(b)!==-1)throw Error("Circular reference detected in "+A.join("."));v.push(b),k.forEach(b,function(_,D){(!(k.isUndefined(_)||_===null)&&o.call(i,_,k.isString(D)?D.trim():D,A,E))===!0&&S(_,A?A.concat(D):[D])}),v.pop()}}if(!k.isObject(n))throw new TypeError("data must be an object");return S(n),i}function s0(n){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(s){return i[s]})}function Cf(n,i){this._pairs=[],n&&Is(n,this,i)}const Ug=Cf.prototype;Ug.append=function(i,r){this._pairs.push([i,r])};Ug.toString=function(i){const r=i?function(s){return i.call(this,s,s0)}:s0;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function dw(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Hg(n,i,r){if(!i)return n;const s=r&&r.encode||dw;k.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let c;if(o?c=o(i,r):c=k.isURLSearchParams(i)?i.toString():new Cf(i,r).toString(s),c){const d=n.indexOf("#");d!==-1&&(n=n.slice(0,d)),n+=(n.indexOf("?")===-1?"?":"&")+c}return n}class o0{constructor(){this.handlers=[]}use(i,r,s){return this.handlers.push({fulfilled:i,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(i){this.handlers[i]&&(this.handlers[i]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(i){k.forEach(this.handlers,function(s){s!==null&&i(s)})}}const Gg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pw=typeof URLSearchParams<"u"?URLSearchParams:Cf,hw=typeof FormData<"u"?FormData:null,mw=typeof Blob<"u"?Blob:null,gw={isBrowser:!0,classes:{URLSearchParams:pw,FormData:hw,Blob:mw},protocols:["http","https","file","blob","url","data"]},Af=typeof window<"u"&&typeof document<"u",af=typeof navigator=="object"&&navigator||void 0,xw=Af&&(!af||["ReactNative","NativeScript","NS"].indexOf(af.product)<0),vw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",yw=Af&&window.location.href||"http://localhost",bw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Af,hasStandardBrowserEnv:xw,hasStandardBrowserWebWorkerEnv:vw,navigator:af,origin:yw},Symbol.toStringTag,{value:"Module"})),ft={...bw,...gw};function Sw(n,i){return Is(n,new ft.classes.URLSearchParams,{visitor:function(r,s,o,c){return ft.isNode&&k.isBuffer(r)?(this.append(s,r.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)},...i})}function ww(n){return k.matchAll(/\w+|\[(\w*)]/g,n).map(i=>i[0]==="[]"?"":i[1]||i[0])}function Ew(n){const i={},r=Object.keys(n);let s;const o=r.length;let c;for(s=0;s<o;s++)c=r[s],i[c]=n[c];return i}function qg(n){function i(r,s,o,c){let d=r[c++];if(d==="__proto__")return!0;const g=Number.isFinite(+d),p=c>=r.length;return d=!d&&k.isArray(o)?o.length:d,p?(k.hasOwnProp(o,d)?o[d]=[o[d],s]:o[d]=s,!g):((!o[d]||!k.isObject(o[d]))&&(o[d]=[]),i(r,s,o[d],c)&&k.isArray(o[d])&&(o[d]=Ew(o[d])),!g)}if(k.isFormData(n)&&k.isFunction(n.entries)){const r={};return k.forEachEntry(n,(s,o)=>{i(ww(s),o,r,0)}),r}return null}function Tw(n,i,r){if(k.isString(n))try{return(i||JSON.parse)(n),k.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(n)}const Fl={transitional:Gg,adapter:["xhr","http","fetch"],transformRequest:[function(i,r){const s=r.getContentType()||"",o=s.indexOf("application/json")>-1,c=k.isObject(i);if(c&&k.isHTMLForm(i)&&(i=new FormData(i)),k.isFormData(i))return o?JSON.stringify(qg(i)):i;if(k.isArrayBuffer(i)||k.isBuffer(i)||k.isStream(i)||k.isFile(i)||k.isBlob(i)||k.isReadableStream(i))return i;if(k.isArrayBufferView(i))return i.buffer;if(k.isURLSearchParams(i))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let g;if(c){if(s.indexOf("application/x-www-form-urlencoded")>-1)return Sw(i,this.formSerializer).toString();if((g=k.isFileList(i))||s.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return Is(g?{"files[]":i}:i,p&&new p,this.formSerializer)}}return c||o?(r.setContentType("application/json",!1),Tw(i)):i}],transformResponse:[function(i){const r=this.transitional||Fl.transitional,s=r&&r.forcedJSONParsing,o=this.responseType==="json";if(k.isResponse(i)||k.isReadableStream(i))return i;if(i&&k.isString(i)&&(s&&!this.responseType||o)){const d=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(i,this.parseReviver)}catch(g){if(d)throw g.name==="SyntaxError"?ge.from(g,ge.ERR_BAD_RESPONSE,this,null,this.response):g}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ft.classes.FormData,Blob:ft.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],n=>{Fl.headers[n]={}});const zw=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Cw=n=>{const i={};let r,s,o;return n&&n.split(`
`).forEach(function(d){o=d.indexOf(":"),r=d.substring(0,o).trim().toLowerCase(),s=d.substring(o+1).trim(),!(!r||i[r]&&zw[r])&&(r==="set-cookie"?i[r]?i[r].push(s):i[r]=[s]:i[r]=i[r]?i[r]+", "+s:s)}),i},u0=Symbol("internals");function jl(n){return n&&String(n).trim().toLowerCase()}function Os(n){return n===!1||n==null?n:k.isArray(n)?n.map(Os):String(n)}function Aw(n){const i=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=r.exec(n);)i[s[1]]=s[2];return i}const Ow=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Dc(n,i,r,s,o){if(k.isFunction(s))return s.call(this,i,r);if(o&&(i=r),!!k.isString(i)){if(k.isString(s))return i.indexOf(s)!==-1;if(k.isRegExp(s))return s.test(i)}}function _w(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,r,s)=>r.toUpperCase()+s)}function Mw(n,i){const r=k.toCamelCase(" "+i);["get","set","has"].forEach(s=>{Object.defineProperty(n,s+r,{value:function(o,c,d){return this[s].call(this,i,o,c,d)},configurable:!0})})}let Et=class{constructor(i){i&&this.set(i)}set(i,r,s){const o=this;function c(g,p,h){const x=jl(p);if(!x)throw new Error("header name must be a non-empty string");const v=k.findKey(o,x);(!v||o[v]===void 0||h===!0||h===void 0&&o[v]!==!1)&&(o[v||p]=Os(g))}const d=(g,p)=>k.forEach(g,(h,x)=>c(h,x,p));if(k.isPlainObject(i)||i instanceof this.constructor)d(i,r);else if(k.isString(i)&&(i=i.trim())&&!Ow(i))d(Cw(i),r);else if(k.isObject(i)&&k.isIterable(i)){let g={},p,h;for(const x of i){if(!k.isArray(x))throw TypeError("Object iterator must return a key-value pair");g[h=x[0]]=(p=g[h])?k.isArray(p)?[...p,x[1]]:[p,x[1]]:x[1]}d(g,r)}else i!=null&&c(r,i,s);return this}get(i,r){if(i=jl(i),i){const s=k.findKey(this,i);if(s){const o=this[s];if(!r)return o;if(r===!0)return Aw(o);if(k.isFunction(r))return r.call(this,o,s);if(k.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,r){if(i=jl(i),i){const s=k.findKey(this,i);return!!(s&&this[s]!==void 0&&(!r||Dc(this,this[s],s,r)))}return!1}delete(i,r){const s=this;let o=!1;function c(d){if(d=jl(d),d){const g=k.findKey(s,d);g&&(!r||Dc(s,s[g],g,r))&&(delete s[g],o=!0)}}return k.isArray(i)?i.forEach(c):c(i),o}clear(i){const r=Object.keys(this);let s=r.length,o=!1;for(;s--;){const c=r[s];(!i||Dc(this,this[c],c,i,!0))&&(delete this[c],o=!0)}return o}normalize(i){const r=this,s={};return k.forEach(this,(o,c)=>{const d=k.findKey(s,c);if(d){r[d]=Os(o),delete r[c];return}const g=i?_w(c):String(c).trim();g!==c&&delete r[c],r[g]=Os(o),s[g]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const r=Object.create(null);return k.forEach(this,(s,o)=>{s!=null&&s!==!1&&(r[o]=i&&k.isArray(s)?s.join(", "):s)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,r])=>i+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static concat(i,...r){const s=new this(i);return r.forEach(o=>s.set(o)),s}static accessor(i){const s=(this[u0]=this[u0]={accessors:{}}).accessors,o=this.prototype;function c(d){const g=jl(d);s[g]||(Mw(o,d),s[g]=!0)}return k.isArray(i)?i.forEach(c):c(i),this}};Et.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Et.prototype,({value:n},i)=>{let r=i[0].toUpperCase()+i.slice(1);return{get:()=>n,set(s){this[r]=s}}});k.freezeMethods(Et);function jc(n,i){const r=this||Fl,s=i||r,o=Et.from(s.headers);let c=s.data;return k.forEach(n,function(g){c=g.call(r,c,o.normalize(),i?i.status:void 0)}),o.normalize(),c}function kg(n){return!!(n&&n.__CANCEL__)}function Ui(n,i,r){ge.call(this,n??"canceled",ge.ERR_CANCELED,i,r),this.name="CanceledError"}k.inherits(Ui,ge,{__CANCEL__:!0});function Yg(n,i,r){const s=r.config.validateStatus;!r.status||!s||s(r.status)?n(r):i(new ge("Request failed with status code "+r.status,[ge.ERR_BAD_REQUEST,ge.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function Rw(n){const i=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return i&&i[1]||""}function Dw(n,i){n=n||10;const r=new Array(n),s=new Array(n);let o=0,c=0,d;return i=i!==void 0?i:1e3,function(p){const h=Date.now(),x=s[c];d||(d=h),r[o]=p,s[o]=h;let v=c,E=0;for(;v!==o;)E+=r[v++],v=v%n;if(o=(o+1)%n,o===c&&(c=(c+1)%n),h-d<i)return;const S=x&&h-x;return S?Math.round(E*1e3/S):void 0}}function jw(n,i){let r=0,s=1e3/i,o,c;const d=(h,x=Date.now())=>{r=x,o=null,c&&(clearTimeout(c),c=null),n(...h)};return[(...h)=>{const x=Date.now(),v=x-r;v>=s?d(h,x):(o=h,c||(c=setTimeout(()=>{c=null,d(o)},s-v)))},()=>o&&d(o)]}const Us=(n,i,r=3)=>{let s=0;const o=Dw(50,250);return jw(c=>{const d=c.loaded,g=c.lengthComputable?c.total:void 0,p=d-s,h=o(p),x=d<=g;s=d;const v={loaded:d,total:g,progress:g?d/g:void 0,bytes:p,rate:h||void 0,estimated:h&&g&&x?(g-d)/h:void 0,event:c,lengthComputable:g!=null,[i?"download":"upload"]:!0};n(v)},r)},c0=(n,i)=>{const r=n!=null;return[s=>i[0]({lengthComputable:r,total:n,loaded:s}),i[1]]},f0=n=>(...i)=>k.asap(()=>n(...i)),Nw=ft.hasStandardBrowserEnv?((n,i)=>r=>(r=new URL(r,ft.origin),n.protocol===r.protocol&&n.host===r.host&&(i||n.port===r.port)))(new URL(ft.origin),ft.navigator&&/(msie|trident)/i.test(ft.navigator.userAgent)):()=>!0,Lw=ft.hasStandardBrowserEnv?{write(n,i,r,s,o,c){const d=[n+"="+encodeURIComponent(i)];k.isNumber(r)&&d.push("expires="+new Date(r).toGMTString()),k.isString(s)&&d.push("path="+s),k.isString(o)&&d.push("domain="+o),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read(n){const i=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Bw(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Uw(n,i){return i?n.replace(/\/?\/$/,"")+"/"+i.replace(/^\/+/,""):n}function Vg(n,i,r){let s=!Bw(i);return n&&(s||r==!1)?Uw(n,i):i}const d0=n=>n instanceof Et?{...n}:n;function La(n,i){i=i||{};const r={};function s(h,x,v,E){return k.isPlainObject(h)&&k.isPlainObject(x)?k.merge.call({caseless:E},h,x):k.isPlainObject(x)?k.merge({},x):k.isArray(x)?x.slice():x}function o(h,x,v,E){if(k.isUndefined(x)){if(!k.isUndefined(h))return s(void 0,h,v,E)}else return s(h,x,v,E)}function c(h,x){if(!k.isUndefined(x))return s(void 0,x)}function d(h,x){if(k.isUndefined(x)){if(!k.isUndefined(h))return s(void 0,h)}else return s(void 0,x)}function g(h,x,v){if(v in i)return s(h,x);if(v in n)return s(void 0,h)}const p={url:c,method:c,data:c,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:g,headers:(h,x,v)=>o(d0(h),d0(x),v,!0)};return k.forEach(Object.keys({...n,...i}),function(x){const v=p[x]||o,E=v(n[x],i[x],x);k.isUndefined(E)&&v!==g||(r[x]=E)}),r}const Xg=n=>{const i=La({},n);let{data:r,withXSRFToken:s,xsrfHeaderName:o,xsrfCookieName:c,headers:d,auth:g}=i;if(i.headers=d=Et.from(d),i.url=Hg(Vg(i.baseURL,i.url,i.allowAbsoluteUrls),n.params,n.paramsSerializer),g&&d.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):""))),k.isFormData(r)){if(ft.hasStandardBrowserEnv||ft.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if(k.isFunction(r.getHeaders)){const p=r.getHeaders(),h=["content-type","content-length"];Object.entries(p).forEach(([x,v])=>{h.includes(x.toLowerCase())&&d.set(x,v)})}}if(ft.hasStandardBrowserEnv&&(s&&k.isFunction(s)&&(s=s(i)),s||s!==!1&&Nw(i.url))){const p=o&&c&&Lw.read(c);p&&d.set(o,p)}return i},Hw=typeof XMLHttpRequest<"u",Gw=Hw&&function(n){return new Promise(function(r,s){const o=Xg(n);let c=o.data;const d=Et.from(o.headers).normalize();let{responseType:g,onUploadProgress:p,onDownloadProgress:h}=o,x,v,E,S,b;function A(){S&&S(),b&&b(),o.cancelToken&&o.cancelToken.unsubscribe(x),o.signal&&o.signal.removeEventListener("abort",x)}let w=new XMLHttpRequest;w.open(o.method.toUpperCase(),o.url,!0),w.timeout=o.timeout;function _(){if(!w)return;const j=Et.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),$={data:!g||g==="text"||g==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:j,config:n,request:w};Yg(function(B){r(B),A()},function(B){s(B),A()},$),w=null}"onloadend"in w?w.onloadend=_:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(_)},w.onabort=function(){w&&(s(new ge("Request aborted",ge.ECONNABORTED,n,w)),w=null)},w.onerror=function(Q){const $=Q&&Q.message?Q.message:"Network Error",U=new ge($,ge.ERR_NETWORK,n,w);U.event=Q||null,s(U),w=null},w.ontimeout=function(){let Q=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const $=o.transitional||Gg;o.timeoutErrorMessage&&(Q=o.timeoutErrorMessage),s(new ge(Q,$.clarifyTimeoutError?ge.ETIMEDOUT:ge.ECONNABORTED,n,w)),w=null},c===void 0&&d.setContentType(null),"setRequestHeader"in w&&k.forEach(d.toJSON(),function(Q,$){w.setRequestHeader($,Q)}),k.isUndefined(o.withCredentials)||(w.withCredentials=!!o.withCredentials),g&&g!=="json"&&(w.responseType=o.responseType),h&&([E,b]=Us(h,!0),w.addEventListener("progress",E)),p&&w.upload&&([v,S]=Us(p),w.upload.addEventListener("progress",v),w.upload.addEventListener("loadend",S)),(o.cancelToken||o.signal)&&(x=j=>{w&&(s(!j||j.type?new Ui(null,n,w):j),w.abort(),w=null)},o.cancelToken&&o.cancelToken.subscribe(x),o.signal&&(o.signal.aborted?x():o.signal.addEventListener("abort",x)));const D=Rw(o.url);if(D&&ft.protocols.indexOf(D)===-1){s(new ge("Unsupported protocol "+D+":",ge.ERR_BAD_REQUEST,n));return}w.send(c||null)})},qw=(n,i)=>{const{length:r}=n=n?n.filter(Boolean):[];if(i||r){let s=new AbortController,o;const c=function(h){if(!o){o=!0,g();const x=h instanceof Error?h:this.reason;s.abort(x instanceof ge?x:new Ui(x instanceof Error?x.message:x))}};let d=i&&setTimeout(()=>{d=null,c(new ge(`timeout ${i} of ms exceeded`,ge.ETIMEDOUT))},i);const g=()=>{n&&(d&&clearTimeout(d),d=null,n.forEach(h=>{h.unsubscribe?h.unsubscribe(c):h.removeEventListener("abort",c)}),n=null)};n.forEach(h=>h.addEventListener("abort",c));const{signal:p}=s;return p.unsubscribe=()=>k.asap(g),p}},kw=function*(n,i){let r=n.byteLength;if(r<i){yield n;return}let s=0,o;for(;s<r;)o=s+i,yield n.slice(s,o),s=o},Yw=async function*(n,i){for await(const r of Vw(n))yield*kw(r,i)},Vw=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const i=n.getReader();try{for(;;){const{done:r,value:s}=await i.read();if(r)break;yield s}}finally{await i.cancel()}},p0=(n,i,r,s)=>{const o=Yw(n,i);let c=0,d,g=p=>{d||(d=!0,s&&s(p))};return new ReadableStream({async pull(p){try{const{done:h,value:x}=await o.next();if(h){g(),p.close();return}let v=x.byteLength;if(r){let E=c+=v;r(E)}p.enqueue(new Uint8Array(x))}catch(h){throw g(h),h}},cancel(p){return g(p),o.return()}},{highWaterMark:2})},h0=64*1024,{isFunction:gs}=k,Xw=(({Request:n,Response:i})=>({Request:n,Response:i}))(k.global),{ReadableStream:m0,TextEncoder:g0}=k.global,x0=(n,...i)=>{try{return!!n(...i)}catch{return!1}},$w=n=>{n=k.merge.call({skipUndefined:!0},Xw,n);const{fetch:i,Request:r,Response:s}=n,o=i?gs(i):typeof fetch=="function",c=gs(r),d=gs(s);if(!o)return!1;const g=o&&gs(m0),p=o&&(typeof g0=="function"?(b=>A=>b.encode(A))(new g0):async b=>new Uint8Array(await new r(b).arrayBuffer())),h=c&&g&&x0(()=>{let b=!1;const A=new r(ft.origin,{body:new m0,method:"POST",get duplex(){return b=!0,"half"}}).headers.has("Content-Type");return b&&!A}),x=d&&g&&x0(()=>k.isReadableStream(new s("").body)),v={stream:x&&(b=>b.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(b=>{!v[b]&&(v[b]=(A,w)=>{let _=A&&A[b];if(_)return _.call(A);throw new ge(`Response type '${b}' is not supported`,ge.ERR_NOT_SUPPORT,w)})});const E=async b=>{if(b==null)return 0;if(k.isBlob(b))return b.size;if(k.isSpecCompliantForm(b))return(await new r(ft.origin,{method:"POST",body:b}).arrayBuffer()).byteLength;if(k.isArrayBufferView(b)||k.isArrayBuffer(b))return b.byteLength;if(k.isURLSearchParams(b)&&(b=b+""),k.isString(b))return(await p(b)).byteLength},S=async(b,A)=>{const w=k.toFiniteNumber(b.getContentLength());return w??E(A)};return async b=>{let{url:A,method:w,data:_,signal:D,cancelToken:j,timeout:Q,onDownloadProgress:$,onUploadProgress:U,responseType:B,headers:G,withCredentials:ne="same-origin",fetchOptions:P}=Xg(b),J=i||fetch;B=B?(B+"").toLowerCase():"text";let I=qw([D,j&&j.toAbortSignal()],Q),se=null;const oe=I&&I.unsubscribe&&(()=>{I.unsubscribe()});let ze;try{if(U&&h&&w!=="get"&&w!=="head"&&(ze=await S(G,_))!==0){let C=new r(A,{method:"POST",body:_,duplex:"half"}),V;if(k.isFormData(_)&&(V=C.headers.get("content-type"))&&G.setContentType(V),C.body){const[ee,ae]=c0(ze,Us(f0(U)));_=p0(C.body,h0,ee,ae)}}k.isString(ne)||(ne=ne?"include":"omit");const q=c&&"credentials"in r.prototype,W={...P,signal:I,method:w.toUpperCase(),headers:G.normalize().toJSON(),body:_,duplex:"half",credentials:q?ne:void 0};se=c&&new r(A,W);let F=await(c?J(se,P):J(A,W));const ie=x&&(B==="stream"||B==="response");if(x&&($||ie&&oe)){const C={};["status","statusText","headers"].forEach(de=>{C[de]=F[de]});const V=k.toFiniteNumber(F.headers.get("content-length")),[ee,ae]=$&&c0(V,Us(f0($),!0))||[];F=new s(p0(F.body,h0,ee,()=>{ae&&ae(),oe&&oe()}),C)}B=B||"text";let fe=await v[k.findKey(v,B)||"text"](F,b);return!ie&&oe&&oe(),await new Promise((C,V)=>{Yg(C,V,{data:fe,headers:Et.from(F.headers),status:F.status,statusText:F.statusText,config:b,request:se})})}catch(q){throw oe&&oe(),q&&q.name==="TypeError"&&/Load failed|fetch/i.test(q.message)?Object.assign(new ge("Network Error",ge.ERR_NETWORK,b,se),{cause:q.cause||q}):ge.from(q,q&&q.code,b,se)}}},Qw=new Map,$g=n=>{let i=n?n.env:{};const{fetch:r,Request:s,Response:o}=i,c=[s,o,r];let d=c.length,g=d,p,h,x=Qw;for(;g--;)p=c[g],h=x.get(p),h===void 0&&x.set(p,h=g?new Map:$w(i)),x=h;return h};$g();const lf={http:uw,xhr:Gw,fetch:{get:$g}};k.forEach(lf,(n,i)=>{if(n){try{Object.defineProperty(n,"name",{value:i})}catch{}Object.defineProperty(n,"adapterName",{value:i})}});const v0=n=>`- ${n}`,Zw=n=>k.isFunction(n)||n===null||n===!1,Qg={getAdapter:(n,i)=>{n=k.isArray(n)?n:[n];const{length:r}=n;let s,o;const c={};for(let d=0;d<r;d++){s=n[d];let g;if(o=s,!Zw(s)&&(o=lf[(g=String(s)).toLowerCase()],o===void 0))throw new ge(`Unknown adapter '${g}'`);if(o&&(k.isFunction(o)||(o=o.get(i))))break;c[g||"#"+d]=o}if(!o){const d=Object.entries(c).map(([p,h])=>`adapter ${p} `+(h===!1?"is not supported by the environment":"is not available in the build"));let g=r?d.length>1?`since :
`+d.map(v0).join(`
`):" "+v0(d[0]):"as no adapter specified";throw new ge("There is no suitable adapter to dispatch the request "+g,"ERR_NOT_SUPPORT")}return o},adapters:lf};function Nc(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Ui(null,n)}function y0(n){return Nc(n),n.headers=Et.from(n.headers),n.data=jc.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Qg.getAdapter(n.adapter||Fl.adapter,n)(n).then(function(s){return Nc(n),s.data=jc.call(n,n.transformResponse,s),s.headers=Et.from(s.headers),s},function(s){return kg(s)||(Nc(n),s&&s.response&&(s.response.data=jc.call(n,n.transformResponse,s.response),s.response.headers=Et.from(s.response.headers))),Promise.reject(s)})}const Zg="1.12.2",eo={};["object","boolean","number","function","string","symbol"].forEach((n,i)=>{eo[n]=function(s){return typeof s===n||"a"+(i<1?"n ":" ")+n}});const b0={};eo.transitional=function(i,r,s){function o(c,d){return"[Axios v"+Zg+"] Transitional option '"+c+"'"+d+(s?". "+s:"")}return(c,d,g)=>{if(i===!1)throw new ge(o(d," has been removed"+(r?" in "+r:"")),ge.ERR_DEPRECATED);return r&&!b0[d]&&(b0[d]=!0,console.warn(o(d," has been deprecated since v"+r+" and will be removed in the near future"))),i?i(c,d,g):!0}};eo.spelling=function(i){return(r,s)=>(console.warn(`${s} is likely a misspelling of ${i}`),!0)};function Kw(n,i,r){if(typeof n!="object")throw new ge("options must be an object",ge.ERR_BAD_OPTION_VALUE);const s=Object.keys(n);let o=s.length;for(;o-- >0;){const c=s[o],d=i[c];if(d){const g=n[c],p=g===void 0||d(g,c,n);if(p!==!0)throw new ge("option "+c+" must be "+p,ge.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new ge("Unknown option "+c,ge.ERR_BAD_OPTION)}}const _s={assertOptions:Kw,validators:eo},ln=_s.validators;let Na=class{constructor(i){this.defaults=i||{},this.interceptors={request:new o0,response:new o0}}async request(i,r){try{return await this._request(i,r)}catch(s){if(s instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const c=o.stack?o.stack.replace(/^.+\n/,""):"";try{s.stack?c&&!String(s.stack).endsWith(c.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+c):s.stack=c}catch{}}throw s}}_request(i,r){typeof i=="string"?(r=r||{},r.url=i):r=i||{},r=La(this.defaults,r);const{transitional:s,paramsSerializer:o,headers:c}=r;s!==void 0&&_s.assertOptions(s,{silentJSONParsing:ln.transitional(ln.boolean),forcedJSONParsing:ln.transitional(ln.boolean),clarifyTimeoutError:ln.transitional(ln.boolean)},!1),o!=null&&(k.isFunction(o)?r.paramsSerializer={serialize:o}:_s.assertOptions(o,{encode:ln.function,serialize:ln.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),_s.assertOptions(r,{baseUrl:ln.spelling("baseURL"),withXsrfToken:ln.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let d=c&&k.merge(c.common,c[r.method]);c&&k.forEach(["delete","get","head","post","put","patch","common"],b=>{delete c[b]}),r.headers=Et.concat(d,c);const g=[];let p=!0;this.interceptors.request.forEach(function(A){typeof A.runWhen=="function"&&A.runWhen(r)===!1||(p=p&&A.synchronous,g.unshift(A.fulfilled,A.rejected))});const h=[];this.interceptors.response.forEach(function(A){h.push(A.fulfilled,A.rejected)});let x,v=0,E;if(!p){const b=[y0.bind(this),void 0];for(b.unshift(...g),b.push(...h),E=b.length,x=Promise.resolve(r);v<E;)x=x.then(b[v++],b[v++]);return x}E=g.length;let S=r;for(;v<E;){const b=g[v++],A=g[v++];try{S=b(S)}catch(w){A.call(this,w);break}}try{x=y0.call(this,S)}catch(b){return Promise.reject(b)}for(v=0,E=h.length;v<E;)x=x.then(h[v++],h[v++]);return x}getUri(i){i=La(this.defaults,i);const r=Vg(i.baseURL,i.url,i.allowAbsoluteUrls);return Hg(r,i.params,i.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(i){Na.prototype[i]=function(r,s){return this.request(La(s||{},{method:i,url:r,data:(s||{}).data}))}});k.forEach(["post","put","patch"],function(i){function r(s){return function(c,d,g){return this.request(La(g||{},{method:i,headers:s?{"Content-Type":"multipart/form-data"}:{},url:c,data:d}))}}Na.prototype[i]=r(),Na.prototype[i+"Form"]=r(!0)});let Fw=class Kg{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(c){r=c});const s=this;this.promise.then(o=>{if(!s._listeners)return;let c=s._listeners.length;for(;c-- >0;)s._listeners[c](o);s._listeners=null}),this.promise.then=o=>{let c;const d=new Promise(g=>{s.subscribe(g),c=g}).then(o);return d.cancel=function(){s.unsubscribe(c)},d},i(function(c,d,g){s.reason||(s.reason=new Ui(c,d,g),r(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const r=this._listeners.indexOf(i);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const i=new AbortController,r=s=>{i.abort(s)};return this.subscribe(r),i.signal.unsubscribe=()=>this.unsubscribe(r),i.signal}static source(){let i;return{token:new Kg(function(o){i=o}),cancel:i}}};function Jw(n){return function(r){return n.apply(null,r)}}function Pw(n){return k.isObject(n)&&n.isAxiosError===!0}const rf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(rf).forEach(([n,i])=>{rf[i]=n});function Fg(n){const i=new Na(n),r=Cg(Na.prototype.request,i);return k.extend(r,Na.prototype,i,{allOwnKeys:!0}),k.extend(r,i,null,{allOwnKeys:!0}),r.create=function(o){return Fg(La(n,o))},r}const Ke=Fg(Fl);Ke.Axios=Na;Ke.CanceledError=Ui;Ke.CancelToken=Fw;Ke.isCancel=kg;Ke.VERSION=Zg;Ke.toFormData=Is;Ke.AxiosError=ge;Ke.Cancel=Ke.CanceledError;Ke.all=function(i){return Promise.all(i)};Ke.spread=Jw;Ke.isAxiosError=Pw;Ke.mergeConfig=La;Ke.AxiosHeaders=Et;Ke.formToJSON=n=>qg(k.isHTMLForm(n)?new FormData(n):n);Ke.getAdapter=Qg.getAdapter;Ke.HttpStatusCode=rf;Ke.default=Ke;const{Axios:y5,AxiosError:b5,CanceledError:S5,isCancel:w5,CancelToken:E5,VERSION:T5,all:z5,Cancel:C5,isAxiosError:A5,spread:O5,toFormData:_5,AxiosHeaders:M5,HttpStatusCode:R5,formToJSON:D5,getAdapter:j5,mergeConfig:N5}=Ke,Fe=Ke.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"a32fc10e322c75bff0dc91e408085814",language:"pt-BR",page:1}});async function Ww(){try{const{data:{results:n}}=await Fe.get("/movie/popular");return n[0]}catch(n){console.error("Error fetching movies:",n)}}async function Iw(){try{const{data:{results:n}}=await Fe.get("/movie/top_rated");return n}catch(n){console.error("Error fetching movies:",n)}}async function eE(){try{const{data:{results:n}}=await Fe.get("/tv/top_rated");return n}catch(n){console.error("Error fetching movies:",n)}}async function tE(){try{const{data:{results:n}}=await Fe.get("/tv/popular");return n}catch(n){console.error("Error fetching movies:",n)}}async function nE(){try{const{data:{results:n}}=await Fe.get("/person/popular");return n}catch(n){console.error("Error fetching persons:",n)}}async function sf(n){try{const{data:{results:i}}=await Fe.get(`/movie/${n}/videos`);return i}catch(i){console.error("Error fetching movies:",i)}}async function S0(n){try{const{data:{cast:i}}=await Fe.get(`/movie/${n}/credits`);return i}catch(i){console.error("Error fetching movies:",i)}}async function w0(n){try{const{data:{results:i}}=await Fe.get(`/movie/${n}/similar`);return i}catch(i){console.error("Error fetching movies:",i)}}async function E0(n){try{const{data:i}=await Fe.get(`/movie/${n}`);return i}catch(i){console.error("Error fetching movies:",i)}}async function aE(n=1){try{const{data:i}=await Fe.get(`/movie/popular?page=${n}`);return i}catch(i){console.error("Error fetching popular movies:",i)}}async function iE(n=1){try{const{data:i}=await Fe.get(`/movie/now_playing?page=${n}`);return i}catch(i){console.error("Error fetching now playing movies:",i)}}async function lE(n=1){try{const{data:i}=await Fe.get(`/movie/upcoming?page=${n}`);return i}catch(i){console.error("Error fetching upcoming movies:",i)}}async function rE(n=1){try{const{data:i}=await Fe.get(`/movie/top_rated?page=${n}`);return i}catch(i){console.error("Error fetching top rated movies:",i)}}async function sE(n=1){try{const{data:i}=await Fe.get(`/tv/airing_today?page=${n}`);return i}catch(i){console.error("Error fetching airing today series:",i)}}async function oE(n=1){try{const{data:i}=await Fe.get(`/tv/on_the_air?page=${n}`);return i}catch(i){console.error("Error fetching on the air series:",i)}}async function uE(n=1){try{const{data:i}=await Fe.get(`/tv/popular?page=${n}`);return i}catch(i){console.error("Error fetching popular series:",i)}}async function cE(n=1){try{const{data:i}=await Fe.get(`/tv/top_rated?page=${n}`);return i}catch(i){console.error("Error fetching top rated series:",i)}}async function T0(n){try{const{data:i}=await Fe.get(`/tv/${n}`);return i}catch(i){console.error("Error fetching series:",i)}}async function of(n){try{const{data:{results:i}}=await Fe.get(`/tv/${n}/videos`);return i}catch(i){console.error("Error fetching series videos:",i)}}async function z0(n){try{const{data:{cast:i}}=await Fe.get(`/tv/${n}/credits`);return i}catch(i){console.error("Error fetching series credits:",i)}}async function C0(n){try{const{data:{results:i}}=await Fe.get(`/tv/${n}/similar`);return i}catch(i){console.error("Error fetching similar series:",i)}}const fE=te.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 0;
  animation: fadeIn 0.3s ease-out forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`,dE=te.div`
  position: relative;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border-radius: 20px;
  padding: 30px;
  max-width: 90vw;
  max-height: 92vh;
  width: 100%;
  max-width: 1000px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform: scale(0.8);
  animation: scaleIn 0.3s ease-out forwards;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 16px;
    max-width: 95vw;
    max-height: 95vh;
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 12px;
    max-width: 98vw;
    max-height: 98vh;
  }

  @keyframes scaleIn {
    to {
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    margin: 20px;
    padding: 20px;
  }
`,pE=te.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  z-index: 999999;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 0, 0, 0.2);
    border-color: #ff4444;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
    top: 15px;
    right: 15px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 14px;
    top: 10px;
    right: 10px;
  }
`,hE=te.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; // 16:9 aspect ratio
  border-radius: 15px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 15px;
  }
`,mE=te.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: flex;
  gap: 10px;
`,gE=te.button`
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`,xE=te.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: white;

  .spinner {
    width: 60px;
    height: 60px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top: 4px solid #ff6b6b;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    color: #ccc;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,A0=te.div`
  text-align: center;
  padding: 60px 20px;
  color: white;

  h3 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #ff6b6b;
  }

  p {
    font-size: 1.1rem;
    color: #ccc;
    line-height: 1.5;
  }
`,vE=te.div`
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,yE=te.h3`
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.3;
`,bE=te.p`
  color: #b3b3b3;
  font-size: 0.95rem;
  line-height: 1.4;
  margin-bottom: 15px;
`,SE=te.button`
  background: ${n=>n.active?"linear-gradient(45deg, #ff6b6b, #ee5a52)":"rgba(255, 255, 255, 0.1)"};
  color: white;
  border: 1px solid
    ${n=>n.active?"#ff6b6b":"rgba(255, 255, 255, 0.2)"};
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background: linear-gradient(45deg, #ff6b6b, #ee5a52);
    border-color: #ff6b6b;
    transform: translateY(-1px);
  }
`;function to({movieId:n,seriesId:i,setShowModal:r}){const[s,o]=M.useState([]),[c,d]=M.useState(null),[g,p]=M.useState(!0),[h,x]=M.useState(null),[v,E]=M.useState(!1);M.useEffect(()=>{async function w(){p(!0),x(null);try{let _;if(n?_=await sf(n):i&&(_=await of(i)),_&&_.length>0){o(_);const D=_.find(j=>j.type==="Trailer"&&j.official)||_.find(j=>j.type==="Trailer")||_[0];d(D)}else x("Nenhum trailer disponível para este conteúdo.")}catch{x("Erro ao carregar o trailer. Tente novamente.")}finally{p(!1)}}(n||i)&&w()},[n,i]);const S=w=>{w.target===w.currentTarget&&r(!1)},b=w=>{d(w)},A=()=>{const w=document.getElementById("video-container");v?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen&&document.mozCancelFullScreen():w.requestFullscreen?w.requestFullscreen():w.webkitRequestFullscreen?w.webkitRequestFullscreen():w.mozRequestFullScreen&&w.mozRequestFullScreen(),E(!v)};return M.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}),[]),M.useEffect(()=>{const w=_=>{_.key==="Escape"&&r(!1)};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[r]),z.jsxs(fE,{onClick:S,children:[z.jsx(pE,{onClick:()=>r(!1),"aria-label":"Fechar modal",children:"✕"}),z.jsx(dE,{children:g?z.jsxs(xE,{children:[z.jsx("div",{className:"spinner"}),z.jsx("p",{children:"Carregando trailer..."})]}):h?z.jsxs(A0,{children:[z.jsx("h3",{children:"😔 Ops!"}),z.jsx("p",{children:h})]}):c?z.jsxs(z.Fragment,{children:[z.jsxs(hE,{id:"video-container",children:[z.jsx("iframe",{src:`https://www.youtube.com/embed/${c.key}?autoplay=1&rel=0&modestbranding=1`,title:c.name||"Trailer",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),z.jsx(mE,{children:z.jsx(gE,{onClick:A,"aria-label":"Tela cheia",children:"⛶"})})]}),z.jsxs(vE,{children:[z.jsx(yE,{children:c.name}),z.jsxs(bE,{children:["Tipo: ",c.type," | Qualidade: ",c.size,"p |",c.official?" Oficial":" Não oficial"]}),s.length>1&&z.jsxs("div",{style:{marginTop:"15px"},children:[z.jsx("h4",{style:{color:"white",marginBottom:"10px",fontSize:"1rem"},children:"Outros vídeos disponíveis:"}),z.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:s.map(w=>z.jsxs(SE,{active:c.id===w.id,onClick:()=>b(w),children:[w.type," ",w.size&&`(${w.size}p)`]},w.id))})]})]})]}):z.jsxs(A0,{children:[z.jsx("h3",{children:"😔 Ops!"}),z.jsx("p",{children:"Nenhum trailer disponível para este conteúdo."})]})})]})}function O0(n){return n!==null&&typeof n=="object"&&"constructor"in n&&n.constructor===Object}function Of(n={},i={}){const r=["__proto__","constructor","prototype"];Object.keys(i).filter(s=>r.indexOf(s)<0).forEach(s=>{typeof n[s]>"u"?n[s]=i[s]:O0(i[s])&&O0(n[s])&&Object.keys(i[s]).length>0&&Of(n[s],i[s])})}const Jg={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Ua(){const n=typeof document<"u"?document:{};return Of(n,Jg),n}const wE={document:Jg,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(n){return typeof setTimeout>"u"?(n(),null):setTimeout(n,0)},cancelAnimationFrame(n){typeof setTimeout>"u"||clearTimeout(n)}};function ht(){const n=typeof window<"u"?window:{};return Of(n,wE),n}function EE(n=""){return n.trim().split(" ").filter(i=>!!i.trim())}function TE(n){const i=n;Object.keys(i).forEach(r=>{try{i[r]=null}catch{}try{delete i[r]}catch{}})}function Pg(n,i=0){return setTimeout(n,i)}function Hs(){return Date.now()}function zE(n){const i=ht();let r;return i.getComputedStyle&&(r=i.getComputedStyle(n,null)),!r&&n.currentStyle&&(r=n.currentStyle),r||(r=n.style),r}function CE(n,i="x"){const r=ht();let s,o,c;const d=zE(n);return r.WebKitCSSMatrix?(o=d.transform||d.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(g=>g.replace(",",".")).join(", ")),c=new r.WebKitCSSMatrix(o==="none"?"":o)):(c=d.MozTransform||d.OTransform||d.MsTransform||d.msTransform||d.transform||d.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=c.toString().split(",")),i==="x"&&(r.WebKitCSSMatrix?o=c.m41:s.length===16?o=parseFloat(s[12]):o=parseFloat(s[4])),i==="y"&&(r.WebKitCSSMatrix?o=c.m42:s.length===16?o=parseFloat(s[13]):o=parseFloat(s[5])),o||0}function xs(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"}function AE(n){return typeof window<"u"&&typeof window.HTMLElement<"u"?n instanceof HTMLElement:n&&(n.nodeType===1||n.nodeType===11)}function Lt(...n){const i=Object(n[0]),r=["__proto__","constructor","prototype"];for(let s=1;s<n.length;s+=1){const o=n[s];if(o!=null&&!AE(o)){const c=Object.keys(Object(o)).filter(d=>r.indexOf(d)<0);for(let d=0,g=c.length;d<g;d+=1){const p=c[d],h=Object.getOwnPropertyDescriptor(o,p);h!==void 0&&h.enumerable&&(xs(i[p])&&xs(o[p])?o[p].__swiper__?i[p]=o[p]:Lt(i[p],o[p]):!xs(i[p])&&xs(o[p])?(i[p]={},o[p].__swiper__?i[p]=o[p]:Lt(i[p],o[p])):i[p]=o[p])}}}return i}function vs(n,i,r){n.style.setProperty(i,r)}function Wg({swiper:n,targetPosition:i,side:r}){const s=ht(),o=-n.translate;let c=null,d;const g=n.params.speed;n.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(n.cssModeFrameID);const p=i>o?"next":"prev",h=(v,E)=>p==="next"&&v>=E||p==="prev"&&v<=E,x=()=>{d=new Date().getTime(),c===null&&(c=d);const v=Math.max(Math.min((d-c)/g,1),0),E=.5-Math.cos(v*Math.PI)/2;let S=o+E*(i-o);if(h(S,i)&&(S=i),n.wrapperEl.scrollTo({[r]:S}),h(S,i)){n.wrapperEl.style.overflow="hidden",n.wrapperEl.style.scrollSnapType="",setTimeout(()=>{n.wrapperEl.style.overflow="",n.wrapperEl.scrollTo({[r]:S})}),s.cancelAnimationFrame(n.cssModeFrameID);return}n.cssModeFrameID=s.requestAnimationFrame(x)};x()}function Rn(n,i=""){const r=ht(),s=[...n.children];return r.HTMLSlotElement&&n instanceof HTMLSlotElement&&s.push(...n.assignedElements()),i?s.filter(o=>o.matches(i)):s}function OE(n,i){const r=[i];for(;r.length>0;){const s=r.shift();if(n===s)return!0;r.push(...s.children,...s.shadowRoot?s.shadowRoot.children:[],...s.assignedElements?s.assignedElements():[])}}function _E(n,i){const r=ht();let s=i.contains(n);return!s&&r.HTMLSlotElement&&i instanceof HTMLSlotElement&&(s=[...i.assignedElements()].includes(n),s||(s=OE(n,i))),s}function Gs(n){try{console.warn(n);return}catch{}}function uf(n,i=[]){const r=document.createElement(n);return r.classList.add(...Array.isArray(i)?i:EE(i)),r}function ME(n,i){const r=[];for(;n.previousElementSibling;){const s=n.previousElementSibling;i?s.matches(i)&&r.push(s):r.push(s),n=s}return r}function RE(n,i){const r=[];for(;n.nextElementSibling;){const s=n.nextElementSibling;i?s.matches(i)&&r.push(s):r.push(s),n=s}return r}function oa(n,i){return ht().getComputedStyle(n,null).getPropertyValue(i)}function _0(n){let i=n,r;if(i){for(r=0;(i=i.previousSibling)!==null;)i.nodeType===1&&(r+=1);return r}}function DE(n,i){const r=[];let s=n.parentElement;for(;s;)r.push(s),s=s.parentElement;return r}function M0(n,i,r){const s=ht();return n[i==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(n,null).getPropertyValue(i==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(n,null).getPropertyValue(i==="width"?"margin-left":"margin-bottom"))}function R0(n,i=""){typeof trustedTypes<"u"?n.innerHTML=trustedTypes.createPolicy("html",{createHTML:r=>r}).createHTML(i):n.innerHTML=i}let Lc;function jE(){const n=ht(),i=Ua();return{smoothScroll:i.documentElement&&i.documentElement.style&&"scrollBehavior"in i.documentElement.style,touch:!!("ontouchstart"in n||n.DocumentTouch&&i instanceof n.DocumentTouch)}}function Ig(){return Lc||(Lc=jE()),Lc}let Bc;function NE({userAgent:n}={}){const i=Ig(),r=ht(),s=r.navigator.platform,o=n||r.navigator.userAgent,c={ios:!1,android:!1},d=r.screen.width,g=r.screen.height,p=o.match(/(Android);?[\s\/]+([\d.]+)?/);let h=o.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const x=o.match(/(iPod)(.*OS\s([\d_]+))?/),v=!h&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),E=s==="Win32";let S=s==="MacIntel";const b=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!h&&S&&i.touch&&b.indexOf(`${d}x${g}`)>=0&&(h=o.match(/(Version)\/([\d.]+)/),h||(h=[0,1,"13_0_0"]),S=!1),p&&!E&&(c.os="android",c.android=!0),(h||v||x)&&(c.os="ios",c.ios=!0),c}function ex(n={}){return Bc||(Bc=NE(n)),Bc}let Uc;function LE(){const n=ht(),i=ex();let r=!1;function s(){const g=n.navigator.userAgent.toLowerCase();return g.indexOf("safari")>=0&&g.indexOf("chrome")<0&&g.indexOf("android")<0}if(s()){const g=String(n.navigator.userAgent);if(g.includes("Version/")){const[p,h]=g.split("Version/")[1].split(" ")[0].split(".").map(x=>Number(x));r=p<16||p===16&&h<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent),c=s(),d=c||o&&i.ios;return{isSafari:r||c,needPerspectiveFix:r,need3dFix:d,isWebView:o}}function tx(){return Uc||(Uc=LE()),Uc}function BE({swiper:n,on:i,emit:r}){const s=ht();let o=null,c=null;const d=()=>{!n||n.destroyed||!n.initialized||(r("beforeResize"),r("resize"))},g=()=>{!n||n.destroyed||!n.initialized||(o=new ResizeObserver(x=>{c=s.requestAnimationFrame(()=>{const{width:v,height:E}=n;let S=v,b=E;x.forEach(({contentBoxSize:A,contentRect:w,target:_})=>{_&&_!==n.el||(S=w?w.width:(A[0]||A).inlineSize,b=w?w.height:(A[0]||A).blockSize)}),(S!==v||b!==E)&&d()})}),o.observe(n.el))},p=()=>{c&&s.cancelAnimationFrame(c),o&&o.unobserve&&n.el&&(o.unobserve(n.el),o=null)},h=()=>{!n||n.destroyed||!n.initialized||r("orientationchange")};i("init",()=>{if(n.params.resizeObserver&&typeof s.ResizeObserver<"u"){g();return}s.addEventListener("resize",d),s.addEventListener("orientationchange",h)}),i("destroy",()=>{p(),s.removeEventListener("resize",d),s.removeEventListener("orientationchange",h)})}function UE({swiper:n,extendParams:i,on:r,emit:s}){const o=[],c=ht(),d=(h,x={})=>{const v=c.MutationObserver||c.WebkitMutationObserver,E=new v(S=>{if(n.__preventObserver__)return;if(S.length===1){s("observerUpdate",S[0]);return}const b=function(){s("observerUpdate",S[0])};c.requestAnimationFrame?c.requestAnimationFrame(b):c.setTimeout(b,0)});E.observe(h,{attributes:typeof x.attributes>"u"?!0:x.attributes,childList:n.isElement||(typeof x.childList>"u"?!0:x).childList,characterData:typeof x.characterData>"u"?!0:x.characterData}),o.push(E)},g=()=>{if(n.params.observer){if(n.params.observeParents){const h=DE(n.hostEl);for(let x=0;x<h.length;x+=1)d(h[x])}d(n.hostEl,{childList:n.params.observeSlideChildren}),d(n.wrapperEl,{attributes:!1})}},p=()=>{o.forEach(h=>{h.disconnect()}),o.splice(0,o.length)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",g),r("destroy",p)}var HE={on(n,i,r){const s=this;if(!s.eventsListeners||s.destroyed||typeof i!="function")return s;const o=r?"unshift":"push";return n.split(" ").forEach(c=>{s.eventsListeners[c]||(s.eventsListeners[c]=[]),s.eventsListeners[c][o](i)}),s},once(n,i,r){const s=this;if(!s.eventsListeners||s.destroyed||typeof i!="function")return s;function o(...c){s.off(n,o),o.__emitterProxy&&delete o.__emitterProxy,i.apply(s,c)}return o.__emitterProxy=i,s.on(n,o,r)},onAny(n,i){const r=this;if(!r.eventsListeners||r.destroyed||typeof n!="function")return r;const s=i?"unshift":"push";return r.eventsAnyListeners.indexOf(n)<0&&r.eventsAnyListeners[s](n),r},offAny(n){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsAnyListeners)return i;const r=i.eventsAnyListeners.indexOf(n);return r>=0&&i.eventsAnyListeners.splice(r,1),i},off(n,i){const r=this;return!r.eventsListeners||r.destroyed||!r.eventsListeners||n.split(" ").forEach(s=>{typeof i>"u"?r.eventsListeners[s]=[]:r.eventsListeners[s]&&r.eventsListeners[s].forEach((o,c)=>{(o===i||o.__emitterProxy&&o.__emitterProxy===i)&&r.eventsListeners[s].splice(c,1)})}),r},emit(...n){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let r,s,o;return typeof n[0]=="string"||Array.isArray(n[0])?(r=n[0],s=n.slice(1,n.length),o=i):(r=n[0].events,s=n[0].data,o=n[0].context||i),s.unshift(o),(Array.isArray(r)?r:r.split(" ")).forEach(d=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(g=>{g.apply(o,[d,...s])}),i.eventsListeners&&i.eventsListeners[d]&&i.eventsListeners[d].forEach(g=>{g.apply(o,s)})}),i}};function GE(){const n=this;let i,r;const s=n.el;typeof n.params.width<"u"&&n.params.width!==null?i=n.params.width:i=s.clientWidth,typeof n.params.height<"u"&&n.params.height!==null?r=n.params.height:r=s.clientHeight,!(i===0&&n.isHorizontal()||r===0&&n.isVertical())&&(i=i-parseInt(oa(s,"padding-left")||0,10)-parseInt(oa(s,"padding-right")||0,10),r=r-parseInt(oa(s,"padding-top")||0,10)-parseInt(oa(s,"padding-bottom")||0,10),Number.isNaN(i)&&(i=0),Number.isNaN(r)&&(r=0),Object.assign(n,{width:i,height:r,size:n.isHorizontal()?i:r}))}function qE(){const n=this;function i(P,J){return parseFloat(P.getPropertyValue(n.getDirectionLabel(J))||0)}const r=n.params,{wrapperEl:s,slidesEl:o,rtlTranslate:c,wrongRTL:d}=n,g=n.virtual&&r.virtual.enabled,p=g?n.virtual.slides.length:n.slides.length,h=Rn(o,`.${n.params.slideClass}, swiper-slide`),x=g?n.virtual.slides.length:h.length;let v=[];const E=[],S=[];let b=r.slidesOffsetBefore;typeof b=="function"&&(b=r.slidesOffsetBefore.call(n));let A=r.slidesOffsetAfter;typeof A=="function"&&(A=r.slidesOffsetAfter.call(n));const w=n.snapGrid.length,_=n.slidesGrid.length,D=n.size-b-A;let j=r.spaceBetween,Q=-b,$=0,U=0;if(typeof D>"u")return;typeof j=="string"&&j.indexOf("%")>=0?j=parseFloat(j.replace("%",""))/100*D:typeof j=="string"&&(j=parseFloat(j)),n.virtualSize=-j-b-A,h.forEach(P=>{c?P.style.marginLeft="":P.style.marginRight="",P.style.marginBottom="",P.style.marginTop=""}),r.centeredSlides&&r.cssMode&&(vs(s,"--swiper-centered-offset-before",""),vs(s,"--swiper-centered-offset-after",""));const B=r.grid&&r.grid.rows>1&&n.grid;B?n.grid.initSlides(h):n.grid&&n.grid.unsetSlides();let G;const ne=r.slidesPerView==="auto"&&r.breakpoints&&Object.keys(r.breakpoints).filter(P=>typeof r.breakpoints[P].slidesPerView<"u").length>0;for(let P=0;P<x;P+=1){G=0;const J=h[P];if(!(J&&(B&&n.grid.updateSlide(P,J,h),oa(J,"display")==="none"))){if(g&&r.slidesPerView==="auto")r.virtual.slidesPerViewAutoSlideSize&&(G=r.virtual.slidesPerViewAutoSlideSize),G&&J&&(r.roundLengths&&(G=Math.floor(G)),J.style[n.getDirectionLabel("width")]=`${G}px`);else if(r.slidesPerView==="auto"){ne&&(J.style[n.getDirectionLabel("width")]="");const I=getComputedStyle(J),se=J.style.transform,oe=J.style.webkitTransform;if(se&&(J.style.transform="none"),oe&&(J.style.webkitTransform="none"),r.roundLengths)G=n.isHorizontal()?M0(J,"width"):M0(J,"height");else{const ze=i(I,"width"),q=i(I,"padding-left"),W=i(I,"padding-right"),F=i(I,"margin-left"),ie=i(I,"margin-right"),fe=I.getPropertyValue("box-sizing");if(fe&&fe==="border-box")G=ze+F+ie;else{const{clientWidth:C,offsetWidth:V}=J;G=ze+q+W+F+ie+(V-C)}}se&&(J.style.transform=se),oe&&(J.style.webkitTransform=oe),r.roundLengths&&(G=Math.floor(G))}else G=(D-(r.slidesPerView-1)*j)/r.slidesPerView,r.roundLengths&&(G=Math.floor(G)),J&&(J.style[n.getDirectionLabel("width")]=`${G}px`);J&&(J.swiperSlideSize=G),S.push(G),r.centeredSlides?(Q=Q+G/2+$/2+j,$===0&&P!==0&&(Q=Q-D/2-j),P===0&&(Q=Q-D/2-j),Math.abs(Q)<1/1e3&&(Q=0),r.roundLengths&&(Q=Math.floor(Q)),U%r.slidesPerGroup===0&&v.push(Q),E.push(Q)):(r.roundLengths&&(Q=Math.floor(Q)),(U-Math.min(n.params.slidesPerGroupSkip,U))%n.params.slidesPerGroup===0&&v.push(Q),E.push(Q),Q=Q+G+j),n.virtualSize+=G+j,$=G,U+=1}}if(n.virtualSize=Math.max(n.virtualSize,D)+A,c&&d&&(r.effect==="slide"||r.effect==="coverflow")&&(s.style.width=`${n.virtualSize+j}px`),r.setWrapperSize&&(s.style[n.getDirectionLabel("width")]=`${n.virtualSize+j}px`),B&&n.grid.updateWrapperSize(G,v),!r.centeredSlides){const P=[];for(let J=0;J<v.length;J+=1){let I=v[J];r.roundLengths&&(I=Math.floor(I)),v[J]<=n.virtualSize-D&&P.push(I)}v=P,Math.floor(n.virtualSize-D)-Math.floor(v[v.length-1])>1&&v.push(n.virtualSize-D)}if(g&&r.loop){const P=S[0]+j;if(r.slidesPerGroup>1){const J=Math.ceil((n.virtual.slidesBefore+n.virtual.slidesAfter)/r.slidesPerGroup),I=P*r.slidesPerGroup;for(let se=0;se<J;se+=1)v.push(v[v.length-1]+I)}for(let J=0;J<n.virtual.slidesBefore+n.virtual.slidesAfter;J+=1)r.slidesPerGroup===1&&v.push(v[v.length-1]+P),E.push(E[E.length-1]+P),n.virtualSize+=P}if(v.length===0&&(v=[0]),j!==0){const P=n.isHorizontal()&&c?"marginLeft":n.getDirectionLabel("marginRight");h.filter((J,I)=>!r.cssMode||r.loop?!0:I!==h.length-1).forEach(J=>{J.style[P]=`${j}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let P=0;S.forEach(I=>{P+=I+(j||0)}),P-=j;const J=P>D?P-D:0;v=v.map(I=>I<=0?-b:I>J?J+A:I)}if(r.centerInsufficientSlides){let P=0;S.forEach(I=>{P+=I+(j||0)}),P-=j;const J=(b||0)+(A||0);if(P+J<D){const I=(D-P-J)/2;v.forEach((se,oe)=>{v[oe]=se-I}),E.forEach((se,oe)=>{E[oe]=se+I})}}if(Object.assign(n,{slides:h,snapGrid:v,slidesGrid:E,slidesSizesGrid:S}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){vs(s,"--swiper-centered-offset-before",`${-v[0]}px`),vs(s,"--swiper-centered-offset-after",`${n.size/2-S[S.length-1]/2}px`);const P=-n.snapGrid[0],J=-n.slidesGrid[0];n.snapGrid=n.snapGrid.map(I=>I+P),n.slidesGrid=n.slidesGrid.map(I=>I+J)}if(x!==p&&n.emit("slidesLengthChange"),v.length!==w&&(n.params.watchOverflow&&n.checkOverflow(),n.emit("snapGridLengthChange")),E.length!==_&&n.emit("slidesGridLengthChange"),r.watchSlidesProgress&&n.updateSlidesOffset(),n.emit("slidesUpdated"),!g&&!r.cssMode&&(r.effect==="slide"||r.effect==="fade")){const P=`${r.containerModifierClass}backface-hidden`,J=n.el.classList.contains(P);x<=r.maxBackfaceHiddenSlides?J||n.el.classList.add(P):J&&n.el.classList.remove(P)}}function kE(n){const i=this,r=[],s=i.virtual&&i.params.virtual.enabled;let o=0,c;typeof n=="number"?i.setTransition(n):n===!0&&i.setTransition(i.params.speed);const d=g=>s?i.slides[i.getSlideIndexByData(g)]:i.slides[g];if(i.params.slidesPerView!=="auto"&&i.params.slidesPerView>1)if(i.params.centeredSlides)(i.visibleSlides||[]).forEach(g=>{r.push(g)});else for(c=0;c<Math.ceil(i.params.slidesPerView);c+=1){const g=i.activeIndex+c;if(g>i.slides.length&&!s)break;r.push(d(g))}else r.push(d(i.activeIndex));for(c=0;c<r.length;c+=1)if(typeof r[c]<"u"){const g=r[c].offsetHeight;o=g>o?g:o}(o||o===0)&&(i.wrapperEl.style.height=`${o}px`)}function YE(){const n=this,i=n.slides,r=n.isElement?n.isHorizontal()?n.wrapperEl.offsetLeft:n.wrapperEl.offsetTop:0;for(let s=0;s<i.length;s+=1)i[s].swiperSlideOffset=(n.isHorizontal()?i[s].offsetLeft:i[s].offsetTop)-r-n.cssOverflowAdjustment()}const D0=(n,i,r)=>{i&&!n.classList.contains(r)?n.classList.add(r):!i&&n.classList.contains(r)&&n.classList.remove(r)};function VE(n=this&&this.translate||0){const i=this,r=i.params,{slides:s,rtlTranslate:o,snapGrid:c}=i;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&i.updateSlidesOffset();let d=-n;o&&(d=n),i.visibleSlidesIndexes=[],i.visibleSlides=[];let g=r.spaceBetween;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*i.size:typeof g=="string"&&(g=parseFloat(g));for(let p=0;p<s.length;p+=1){const h=s[p];let x=h.swiperSlideOffset;r.cssMode&&r.centeredSlides&&(x-=s[0].swiperSlideOffset);const v=(d+(r.centeredSlides?i.minTranslate():0)-x)/(h.swiperSlideSize+g),E=(d-c[0]+(r.centeredSlides?i.minTranslate():0)-x)/(h.swiperSlideSize+g),S=-(d-x),b=S+i.slidesSizesGrid[p],A=S>=0&&S<=i.size-i.slidesSizesGrid[p],w=S>=0&&S<i.size-1||b>1&&b<=i.size||S<=0&&b>=i.size;w&&(i.visibleSlides.push(h),i.visibleSlidesIndexes.push(p)),D0(h,w,r.slideVisibleClass),D0(h,A,r.slideFullyVisibleClass),h.progress=o?-v:v,h.originalProgress=o?-E:E}}function XE(n){const i=this;if(typeof n>"u"){const x=i.rtlTranslate?-1:1;n=i&&i.translate&&i.translate*x||0}const r=i.params,s=i.maxTranslate()-i.minTranslate();let{progress:o,isBeginning:c,isEnd:d,progressLoop:g}=i;const p=c,h=d;if(s===0)o=0,c=!0,d=!0;else{o=(n-i.minTranslate())/s;const x=Math.abs(n-i.minTranslate())<1,v=Math.abs(n-i.maxTranslate())<1;c=x||o<=0,d=v||o>=1,x&&(o=0),v&&(o=1)}if(r.loop){const x=i.getSlideIndexByData(0),v=i.getSlideIndexByData(i.slides.length-1),E=i.slidesGrid[x],S=i.slidesGrid[v],b=i.slidesGrid[i.slidesGrid.length-1],A=Math.abs(n);A>=E?g=(A-E)/b:g=(A+b-S)/b,g>1&&(g-=1)}Object.assign(i,{progress:o,progressLoop:g,isBeginning:c,isEnd:d}),(r.watchSlidesProgress||r.centeredSlides&&r.autoHeight)&&i.updateSlidesProgress(n),c&&!p&&i.emit("reachBeginning toEdge"),d&&!h&&i.emit("reachEnd toEdge"),(p&&!c||h&&!d)&&i.emit("fromEdge"),i.emit("progress",o)}const Hc=(n,i,r)=>{i&&!n.classList.contains(r)?n.classList.add(r):!i&&n.classList.contains(r)&&n.classList.remove(r)};function $E(){const n=this,{slides:i,params:r,slidesEl:s,activeIndex:o}=n,c=n.virtual&&r.virtual.enabled,d=n.grid&&r.grid&&r.grid.rows>1,g=v=>Rn(s,`.${r.slideClass}${v}, swiper-slide${v}`)[0];let p,h,x;if(c)if(r.loop){let v=o-n.virtual.slidesBefore;v<0&&(v=n.virtual.slides.length+v),v>=n.virtual.slides.length&&(v-=n.virtual.slides.length),p=g(`[data-swiper-slide-index="${v}"]`)}else p=g(`[data-swiper-slide-index="${o}"]`);else d?(p=i.find(v=>v.column===o),x=i.find(v=>v.column===o+1),h=i.find(v=>v.column===o-1)):p=i[o];p&&(d||(x=RE(p,`.${r.slideClass}, swiper-slide`)[0],r.loop&&!x&&(x=i[0]),h=ME(p,`.${r.slideClass}, swiper-slide`)[0],r.loop&&!h===0&&(h=i[i.length-1]))),i.forEach(v=>{Hc(v,v===p,r.slideActiveClass),Hc(v,v===x,r.slideNextClass),Hc(v,v===h,r.slidePrevClass)}),n.emitSlidesClasses()}const Ms=(n,i)=>{if(!n||n.destroyed||!n.params)return;const r=()=>n.isElement?"swiper-slide":`.${n.params.slideClass}`,s=i.closest(r());if(s){let o=s.querySelector(`.${n.params.lazyPreloaderClass}`);!o&&n.isElement&&(s.shadowRoot?o=s.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(o=s.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},Gc=(n,i)=>{if(!n.slides[i])return;const r=n.slides[i].querySelector('[loading="lazy"]');r&&r.removeAttribute("loading")},cf=n=>{if(!n||n.destroyed||!n.params)return;let i=n.params.lazyPreloadPrevNext;const r=n.slides.length;if(!r||!i||i<0)return;i=Math.min(i,r);const s=n.params.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(n.params.slidesPerView),o=n.activeIndex;if(n.params.grid&&n.params.grid.rows>1){const d=o,g=[d-i];g.push(...Array.from({length:i}).map((p,h)=>d+s+h)),n.slides.forEach((p,h)=>{g.includes(p.column)&&Gc(n,h)});return}const c=o+s-1;if(n.params.rewind||n.params.loop)for(let d=o-i;d<=c+i;d+=1){const g=(d%r+r)%r;(g<o||g>c)&&Gc(n,g)}else for(let d=Math.max(o-i,0);d<=Math.min(c+i,r-1);d+=1)d!==o&&(d>c||d<o)&&Gc(n,d)};function QE(n){const{slidesGrid:i,params:r}=n,s=n.rtlTranslate?n.translate:-n.translate;let o;for(let c=0;c<i.length;c+=1)typeof i[c+1]<"u"?s>=i[c]&&s<i[c+1]-(i[c+1]-i[c])/2?o=c:s>=i[c]&&s<i[c+1]&&(o=c+1):s>=i[c]&&(o=c);return r.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function ZE(n){const i=this,r=i.rtlTranslate?i.translate:-i.translate,{snapGrid:s,params:o,activeIndex:c,realIndex:d,snapIndex:g}=i;let p=n,h;const x=S=>{let b=S-i.virtual.slidesBefore;return b<0&&(b=i.virtual.slides.length+b),b>=i.virtual.slides.length&&(b-=i.virtual.slides.length),b};if(typeof p>"u"&&(p=QE(i)),s.indexOf(r)>=0)h=s.indexOf(r);else{const S=Math.min(o.slidesPerGroupSkip,p);h=S+Math.floor((p-S)/o.slidesPerGroup)}if(h>=s.length&&(h=s.length-1),p===c&&!i.params.loop){h!==g&&(i.snapIndex=h,i.emit("snapIndexChange"));return}if(p===c&&i.params.loop&&i.virtual&&i.params.virtual.enabled){i.realIndex=x(p);return}const v=i.grid&&o.grid&&o.grid.rows>1;let E;if(i.virtual&&o.virtual.enabled&&o.loop)E=x(p);else if(v){const S=i.slides.find(A=>A.column===p);let b=parseInt(S.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(i.slides.indexOf(S),0)),E=Math.floor(b/o.grid.rows)}else if(i.slides[p]){const S=i.slides[p].getAttribute("data-swiper-slide-index");S?E=parseInt(S,10):E=p}else E=p;Object.assign(i,{previousSnapIndex:g,snapIndex:h,previousRealIndex:d,realIndex:E,previousIndex:c,activeIndex:p}),i.initialized&&cf(i),i.emit("activeIndexChange"),i.emit("snapIndexChange"),(i.initialized||i.params.runCallbacksOnInit)&&(d!==E&&i.emit("realIndexChange"),i.emit("slideChange"))}function KE(n,i){const r=this,s=r.params;let o=n.closest(`.${s.slideClass}, swiper-slide`);!o&&r.isElement&&i&&i.length>1&&i.includes(n)&&[...i.slice(i.indexOf(n)+1,i.length)].forEach(g=>{!o&&g.matches&&g.matches(`.${s.slideClass}, swiper-slide`)&&(o=g)});let c=!1,d;if(o){for(let g=0;g<r.slides.length;g+=1)if(r.slides[g]===o){c=!0,d=g;break}}if(o&&c)r.clickedSlide=o,r.virtual&&r.params.virtual.enabled?r.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):r.clickedIndex=d;else{r.clickedSlide=void 0,r.clickedIndex=void 0;return}s.slideToClickedSlide&&r.clickedIndex!==void 0&&r.clickedIndex!==r.activeIndex&&r.slideToClickedSlide()}var FE={updateSize:GE,updateSlides:qE,updateAutoHeight:kE,updateSlidesOffset:YE,updateSlidesProgress:VE,updateProgress:XE,updateSlidesClasses:$E,updateActiveIndex:ZE,updateClickedSlide:KE};function JE(n=this.isHorizontal()?"x":"y"){const i=this,{params:r,rtlTranslate:s,translate:o,wrapperEl:c}=i;if(r.virtualTranslate)return s?-o:o;if(r.cssMode)return o;let d=CE(c,n);return d+=i.cssOverflowAdjustment(),s&&(d=-d),d||0}function PE(n,i){const r=this,{rtlTranslate:s,params:o,wrapperEl:c,progress:d}=r;let g=0,p=0;const h=0;r.isHorizontal()?g=s?-n:n:p=n,o.roundLengths&&(g=Math.floor(g),p=Math.floor(p)),r.previousTranslate=r.translate,r.translate=r.isHorizontal()?g:p,o.cssMode?c[r.isHorizontal()?"scrollLeft":"scrollTop"]=r.isHorizontal()?-g:-p:o.virtualTranslate||(r.isHorizontal()?g-=r.cssOverflowAdjustment():p-=r.cssOverflowAdjustment(),c.style.transform=`translate3d(${g}px, ${p}px, ${h}px)`);let x;const v=r.maxTranslate()-r.minTranslate();v===0?x=0:x=(n-r.minTranslate())/v,x!==d&&r.updateProgress(n),r.emit("setTranslate",r.translate,i)}function WE(){return-this.snapGrid[0]}function IE(){return-this.snapGrid[this.snapGrid.length-1]}function e2(n=0,i=this.params.speed,r=!0,s=!0,o){const c=this,{params:d,wrapperEl:g}=c;if(c.animating&&d.preventInteractionOnTransition)return!1;const p=c.minTranslate(),h=c.maxTranslate();let x;if(s&&n>p?x=p:s&&n<h?x=h:x=n,c.updateProgress(x),d.cssMode){const v=c.isHorizontal();if(i===0)g[v?"scrollLeft":"scrollTop"]=-x;else{if(!c.support.smoothScroll)return Wg({swiper:c,targetPosition:-x,side:v?"left":"top"}),!0;g.scrollTo({[v?"left":"top"]:-x,behavior:"smooth"})}return!0}return i===0?(c.setTransition(0),c.setTranslate(x),r&&(c.emit("beforeTransitionStart",i,o),c.emit("transitionEnd"))):(c.setTransition(i),c.setTranslate(x),r&&(c.emit("beforeTransitionStart",i,o),c.emit("transitionStart")),c.animating||(c.animating=!0,c.onTranslateToWrapperTransitionEnd||(c.onTranslateToWrapperTransitionEnd=function(E){!c||c.destroyed||E.target===this&&(c.wrapperEl.removeEventListener("transitionend",c.onTranslateToWrapperTransitionEnd),c.onTranslateToWrapperTransitionEnd=null,delete c.onTranslateToWrapperTransitionEnd,c.animating=!1,r&&c.emit("transitionEnd"))}),c.wrapperEl.addEventListener("transitionend",c.onTranslateToWrapperTransitionEnd))),!0}var t2={getTranslate:JE,setTranslate:PE,minTranslate:WE,maxTranslate:IE,translateTo:e2};function n2(n,i){const r=this;r.params.cssMode||(r.wrapperEl.style.transitionDuration=`${n}ms`,r.wrapperEl.style.transitionDelay=n===0?"0ms":""),r.emit("setTransition",n,i)}function nx({swiper:n,runCallbacks:i,direction:r,step:s}){const{activeIndex:o,previousIndex:c}=n;let d=r;d||(o>c?d="next":o<c?d="prev":d="reset"),n.emit(`transition${s}`),i&&d==="reset"?n.emit(`slideResetTransition${s}`):i&&o!==c&&(n.emit(`slideChangeTransition${s}`),d==="next"?n.emit(`slideNextTransition${s}`):n.emit(`slidePrevTransition${s}`))}function a2(n=!0,i){const r=this,{params:s}=r;s.cssMode||(s.autoHeight&&r.updateAutoHeight(),nx({swiper:r,runCallbacks:n,direction:i,step:"Start"}))}function i2(n=!0,i){const r=this,{params:s}=r;r.animating=!1,!s.cssMode&&(r.setTransition(0),nx({swiper:r,runCallbacks:n,direction:i,step:"End"}))}var l2={setTransition:n2,transitionStart:a2,transitionEnd:i2};function r2(n=0,i,r=!0,s,o){typeof n=="string"&&(n=parseInt(n,10));const c=this;let d=n;d<0&&(d=0);const{params:g,snapGrid:p,slidesGrid:h,previousIndex:x,activeIndex:v,rtlTranslate:E,wrapperEl:S,enabled:b}=c;if(!b&&!s&&!o||c.destroyed||c.animating&&g.preventInteractionOnTransition)return!1;typeof i>"u"&&(i=c.params.speed);const A=Math.min(c.params.slidesPerGroupSkip,d);let w=A+Math.floor((d-A)/c.params.slidesPerGroup);w>=p.length&&(w=p.length-1);const _=-p[w];if(g.normalizeSlideIndex)for(let B=0;B<h.length;B+=1){const G=-Math.floor(_*100),ne=Math.floor(h[B]*100),P=Math.floor(h[B+1]*100);typeof h[B+1]<"u"?G>=ne&&G<P-(P-ne)/2?d=B:G>=ne&&G<P&&(d=B+1):G>=ne&&(d=B)}if(c.initialized&&d!==v&&(!c.allowSlideNext&&(E?_>c.translate&&_>c.minTranslate():_<c.translate&&_<c.minTranslate())||!c.allowSlidePrev&&_>c.translate&&_>c.maxTranslate()&&(v||0)!==d))return!1;d!==(x||0)&&r&&c.emit("beforeSlideChangeStart"),c.updateProgress(_);let D;d>v?D="next":d<v?D="prev":D="reset";const j=c.virtual&&c.params.virtual.enabled;if(!(j&&o)&&(E&&-_===c.translate||!E&&_===c.translate))return c.updateActiveIndex(d),g.autoHeight&&c.updateAutoHeight(),c.updateSlidesClasses(),g.effect!=="slide"&&c.setTranslate(_),D!=="reset"&&(c.transitionStart(r,D),c.transitionEnd(r,D)),!1;if(g.cssMode){const B=c.isHorizontal(),G=E?_:-_;if(i===0)j&&(c.wrapperEl.style.scrollSnapType="none",c._immediateVirtual=!0),j&&!c._cssModeVirtualInitialSet&&c.params.initialSlide>0?(c._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{S[B?"scrollLeft":"scrollTop"]=G})):S[B?"scrollLeft":"scrollTop"]=G,j&&requestAnimationFrame(()=>{c.wrapperEl.style.scrollSnapType="",c._immediateVirtual=!1});else{if(!c.support.smoothScroll)return Wg({swiper:c,targetPosition:G,side:B?"left":"top"}),!0;S.scrollTo({[B?"left":"top"]:G,behavior:"smooth"})}return!0}const U=tx().isSafari;return j&&!o&&U&&c.isElement&&c.virtual.update(!1,!1,d),c.setTransition(i),c.setTranslate(_),c.updateActiveIndex(d),c.updateSlidesClasses(),c.emit("beforeTransitionStart",i,s),c.transitionStart(r,D),i===0?c.transitionEnd(r,D):c.animating||(c.animating=!0,c.onSlideToWrapperTransitionEnd||(c.onSlideToWrapperTransitionEnd=function(G){!c||c.destroyed||G.target===this&&(c.wrapperEl.removeEventListener("transitionend",c.onSlideToWrapperTransitionEnd),c.onSlideToWrapperTransitionEnd=null,delete c.onSlideToWrapperTransitionEnd,c.transitionEnd(r,D))}),c.wrapperEl.addEventListener("transitionend",c.onSlideToWrapperTransitionEnd)),!0}function s2(n=0,i,r=!0,s){typeof n=="string"&&(n=parseInt(n,10));const o=this;if(o.destroyed)return;typeof i>"u"&&(i=o.params.speed);const c=o.grid&&o.params.grid&&o.params.grid.rows>1;let d=n;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)d=d+o.virtual.slidesBefore;else{let g;if(c){const A=d*o.params.grid.rows;g=o.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===A).column}else g=o.getSlideIndexByData(d);const p=c?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:h,slidesOffsetBefore:x,slidesOffsetAfter:v}=o.params,E=h||!!x||!!v;let S=o.params.slidesPerView;S==="auto"?S=o.slidesPerViewDynamic():(S=Math.ceil(parseFloat(o.params.slidesPerView,10)),E&&S%2===0&&(S=S+1));let b=p-g<S;if(E&&(b=b||g<Math.ceil(S/2)),s&&E&&o.params.slidesPerView!=="auto"&&!c&&(b=!1),b){const A=E?g<o.activeIndex?"prev":"next":g-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:A,slideTo:!0,activeSlideIndex:A==="next"?g+1:g-p+1,slideRealIndex:A==="next"?o.realIndex:void 0})}if(c){const A=d*o.params.grid.rows;d=o.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===A).column}else d=o.getSlideIndexByData(d)}return requestAnimationFrame(()=>{o.slideTo(d,i,r,s)}),o}function o2(n,i=!0,r){const s=this,{enabled:o,params:c,animating:d}=s;if(!o||s.destroyed)return s;typeof n>"u"&&(n=s.params.speed);let g=c.slidesPerGroup;c.slidesPerView==="auto"&&c.slidesPerGroup===1&&c.slidesPerGroupAuto&&(g=Math.max(s.slidesPerViewDynamic("current",!0),1));const p=s.activeIndex<c.slidesPerGroupSkip?1:g,h=s.virtual&&c.virtual.enabled;if(c.loop){if(d&&!h&&c.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&c.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+p,n,i,r)}),!0}return c.rewind&&s.isEnd?s.slideTo(0,n,i,r):s.slideTo(s.activeIndex+p,n,i,r)}function u2(n,i=!0,r){const s=this,{params:o,snapGrid:c,slidesGrid:d,rtlTranslate:g,enabled:p,animating:h}=s;if(!p||s.destroyed)return s;typeof n>"u"&&(n=s.params.speed);const x=s.virtual&&o.virtual.enabled;if(o.loop){if(h&&!x&&o.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const v=g?s.translate:-s.translate;function E(D){return D<0?-Math.floor(Math.abs(D)):Math.floor(D)}const S=E(v),b=c.map(D=>E(D)),A=o.freeMode&&o.freeMode.enabled;let w=c[b.indexOf(S)-1];if(typeof w>"u"&&(o.cssMode||A)){let D;c.forEach((j,Q)=>{S>=j&&(D=Q)}),typeof D<"u"&&(w=A?c[D]:c[D>0?D-1:D])}let _=0;if(typeof w<"u"&&(_=d.indexOf(w),_<0&&(_=s.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(_=_-s.slidesPerViewDynamic("previous",!0)+1,_=Math.max(_,0))),o.rewind&&s.isBeginning){const D=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(D,n,i,r)}else if(o.loop&&s.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{s.slideTo(_,n,i,r)}),!0;return s.slideTo(_,n,i,r)}function c2(n,i=!0,r){const s=this;if(!s.destroyed)return typeof n>"u"&&(n=s.params.speed),s.slideTo(s.activeIndex,n,i,r)}function f2(n,i=!0,r,s=.5){const o=this;if(o.destroyed)return;typeof n>"u"&&(n=o.params.speed);let c=o.activeIndex;const d=Math.min(o.params.slidesPerGroupSkip,c),g=d+Math.floor((c-d)/o.params.slidesPerGroup),p=o.rtlTranslate?o.translate:-o.translate;if(p>=o.snapGrid[g]){const h=o.snapGrid[g],x=o.snapGrid[g+1];p-h>(x-h)*s&&(c+=o.params.slidesPerGroup)}else{const h=o.snapGrid[g-1],x=o.snapGrid[g];p-h<=(x-h)*s&&(c-=o.params.slidesPerGroup)}return c=Math.max(c,0),c=Math.min(c,o.slidesGrid.length-1),o.slideTo(c,n,i,r)}function d2(){const n=this;if(n.destroyed)return;const{params:i,slidesEl:r}=n,s=i.slidesPerView==="auto"?n.slidesPerViewDynamic():i.slidesPerView;let o=n.getSlideIndexWhenGrid(n.clickedIndex),c;const d=n.isElement?"swiper-slide":`.${i.slideClass}`,g=n.grid&&n.params.grid&&n.params.grid.rows>1;if(i.loop){if(n.animating)return;c=parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"),10),i.centeredSlides?n.slideToLoop(c):o>(g?(n.slides.length-s)/2-(n.params.grid.rows-1):n.slides.length-s)?(n.loopFix(),o=n.getSlideIndex(Rn(r,`${d}[data-swiper-slide-index="${c}"]`)[0]),Pg(()=>{n.slideTo(o)})):n.slideTo(o)}else n.slideTo(o)}var p2={slideTo:r2,slideToLoop:s2,slideNext:o2,slidePrev:u2,slideReset:c2,slideToClosest:f2,slideToClickedSlide:d2};function h2(n,i){const r=this,{params:s,slidesEl:o}=r;if(!s.loop||r.virtual&&r.params.virtual.enabled)return;const c=()=>{Rn(o,`.${s.slideClass}, swiper-slide`).forEach((b,A)=>{b.setAttribute("data-swiper-slide-index",A)})},d=()=>{const S=Rn(o,`.${s.slideBlankClass}`);S.forEach(b=>{b.remove()}),S.length>0&&(r.recalcSlides(),r.updateSlides())},g=r.grid&&s.grid&&s.grid.rows>1;s.loopAddBlankSlides&&(s.slidesPerGroup>1||g)&&d();const p=s.slidesPerGroup*(g?s.grid.rows:1),h=r.slides.length%p!==0,x=g&&r.slides.length%s.grid.rows!==0,v=S=>{for(let b=0;b<S;b+=1){const A=r.isElement?uf("swiper-slide",[s.slideBlankClass]):uf("div",[s.slideClass,s.slideBlankClass]);r.slidesEl.append(A)}};if(h){if(s.loopAddBlankSlides){const S=p-r.slides.length%p;v(S),r.recalcSlides(),r.updateSlides()}else Gs("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");c()}else if(x){if(s.loopAddBlankSlides){const S=s.grid.rows-r.slides.length%s.grid.rows;v(S),r.recalcSlides(),r.updateSlides()}else Gs("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");c()}else c();const E=s.centeredSlides||!!s.slidesOffsetBefore||!!s.slidesOffsetAfter;r.loopFix({slideRealIndex:n,direction:E?void 0:"next",initial:i})}function m2({slideRealIndex:n,slideTo:i=!0,direction:r,setTranslate:s,activeSlideIndex:o,initial:c,byController:d,byMousewheel:g}={}){const p=this;if(!p.params.loop)return;p.emit("beforeLoopFix");const{slides:h,allowSlidePrev:x,allowSlideNext:v,slidesEl:E,params:S}=p,{centeredSlides:b,slidesOffsetBefore:A,slidesOffsetAfter:w,initialSlide:_}=S,D=b||!!A||!!w;if(p.allowSlidePrev=!0,p.allowSlideNext=!0,p.virtual&&S.virtual.enabled){i&&(!D&&p.snapIndex===0?p.slideTo(p.virtual.slides.length,0,!1,!0):D&&p.snapIndex<S.slidesPerView?p.slideTo(p.virtual.slides.length+p.snapIndex,0,!1,!0):p.snapIndex===p.snapGrid.length-1&&p.slideTo(p.virtual.slidesBefore,0,!1,!0)),p.allowSlidePrev=x,p.allowSlideNext=v,p.emit("loopFix");return}let j=S.slidesPerView;j==="auto"?j=p.slidesPerViewDynamic():(j=Math.ceil(parseFloat(S.slidesPerView,10)),D&&j%2===0&&(j=j+1));const Q=S.slidesPerGroupAuto?j:S.slidesPerGroup;let $=D?Math.max(Q,Math.ceil(j/2)):Q;$%Q!==0&&($+=Q-$%Q),$+=S.loopAdditionalSlides,p.loopedSlides=$;const U=p.grid&&S.grid&&S.grid.rows>1;h.length<j+$||p.params.effect==="cards"&&h.length<j+$*2?Gs("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):U&&S.grid.fill==="row"&&Gs("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const B=[],G=[],ne=U?Math.ceil(h.length/S.grid.rows):h.length,P=c&&ne-_<j&&!D;let J=P?_:p.activeIndex;typeof o>"u"?o=p.getSlideIndex(h.find(F=>F.classList.contains(S.slideActiveClass))):J=o;const I=r==="next"||!r,se=r==="prev"||!r;let oe=0,ze=0;const W=(U?h[o].column:o)+(D&&typeof s>"u"?-j/2+.5:0);if(W<$){oe=Math.max($-W,Q);for(let F=0;F<$-W;F+=1){const ie=F-Math.floor(F/ne)*ne;if(U){const fe=ne-ie-1;for(let C=h.length-1;C>=0;C-=1)h[C].column===fe&&B.push(C)}else B.push(ne-ie-1)}}else if(W+j>ne-$){ze=Math.max(W-(ne-$*2),Q),P&&(ze=Math.max(ze,j-ne+_+1));for(let F=0;F<ze;F+=1){const ie=F-Math.floor(F/ne)*ne;U?h.forEach((fe,C)=>{fe.column===ie&&G.push(C)}):G.push(ie)}}if(p.__preventObserver__=!0,requestAnimationFrame(()=>{p.__preventObserver__=!1}),p.params.effect==="cards"&&h.length<j+$*2&&(G.includes(o)&&G.splice(G.indexOf(o),1),B.includes(o)&&B.splice(B.indexOf(o),1)),se&&B.forEach(F=>{h[F].swiperLoopMoveDOM=!0,E.prepend(h[F]),h[F].swiperLoopMoveDOM=!1}),I&&G.forEach(F=>{h[F].swiperLoopMoveDOM=!0,E.append(h[F]),h[F].swiperLoopMoveDOM=!1}),p.recalcSlides(),S.slidesPerView==="auto"?p.updateSlides():U&&(B.length>0&&se||G.length>0&&I)&&p.slides.forEach((F,ie)=>{p.grid.updateSlide(ie,F,p.slides)}),S.watchSlidesProgress&&p.updateSlidesOffset(),i){if(B.length>0&&se){if(typeof n>"u"){const F=p.slidesGrid[J],fe=p.slidesGrid[J+oe]-F;g?p.setTranslate(p.translate-fe):(p.slideTo(J+Math.ceil(oe),0,!1,!0),s&&(p.touchEventsData.startTranslate=p.touchEventsData.startTranslate-fe,p.touchEventsData.currentTranslate=p.touchEventsData.currentTranslate-fe))}else if(s){const F=U?B.length/S.grid.rows:B.length;p.slideTo(p.activeIndex+F,0,!1,!0),p.touchEventsData.currentTranslate=p.translate}}else if(G.length>0&&I)if(typeof n>"u"){const F=p.slidesGrid[J],fe=p.slidesGrid[J-ze]-F;g?p.setTranslate(p.translate-fe):(p.slideTo(J-ze,0,!1,!0),s&&(p.touchEventsData.startTranslate=p.touchEventsData.startTranslate-fe,p.touchEventsData.currentTranslate=p.touchEventsData.currentTranslate-fe))}else{const F=U?G.length/S.grid.rows:G.length;p.slideTo(p.activeIndex-F,0,!1,!0)}}if(p.allowSlidePrev=x,p.allowSlideNext=v,p.controller&&p.controller.control&&!d){const F={slideRealIndex:n,direction:r,setTranslate:s,activeSlideIndex:o,byController:!0};Array.isArray(p.controller.control)?p.controller.control.forEach(ie=>{!ie.destroyed&&ie.params.loop&&ie.loopFix({...F,slideTo:ie.params.slidesPerView===S.slidesPerView?i:!1})}):p.controller.control instanceof p.constructor&&p.controller.control.params.loop&&p.controller.control.loopFix({...F,slideTo:p.controller.control.params.slidesPerView===S.slidesPerView?i:!1})}p.emit("loopFix")}function g2(){const n=this,{params:i,slidesEl:r}=n;if(!i.loop||!r||n.virtual&&n.params.virtual.enabled)return;n.recalcSlides();const s=[];n.slides.forEach(o=>{const c=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;s[c]=o}),n.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),s.forEach(o=>{r.append(o)}),n.recalcSlides(),n.slideTo(n.realIndex,0)}var x2={loopCreate:h2,loopFix:m2,loopDestroy:g2};function v2(n){const i=this;if(!i.params.simulateTouch||i.params.watchOverflow&&i.isLocked||i.params.cssMode)return;const r=i.params.touchEventsTarget==="container"?i.el:i.wrapperEl;i.isElement&&(i.__preventObserver__=!0),r.style.cursor="move",r.style.cursor=n?"grabbing":"grab",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1})}function y2(){const n=this;n.params.watchOverflow&&n.isLocked||n.params.cssMode||(n.isElement&&(n.__preventObserver__=!0),n[n.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1}))}var b2={setGrabCursor:v2,unsetGrabCursor:y2};function S2(n,i=this){function r(s){if(!s||s===Ua()||s===ht())return null;s.assignedSlot&&(s=s.assignedSlot);const o=s.closest(n);return!o&&!s.getRootNode?null:o||r(s.getRootNode().host)}return r(i)}function j0(n,i,r){const s=ht(),{params:o}=n,c=o.edgeSwipeDetection,d=o.edgeSwipeThreshold;return c&&(r<=d||r>=s.innerWidth-d)?c==="prevent"?(i.preventDefault(),!0):!1:!0}function w2(n){const i=this,r=Ua();let s=n;s.originalEvent&&(s=s.originalEvent);const o=i.touchEventsData;if(s.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==s.pointerId)return;o.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(o.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart"){j0(i,s,s.targetTouches[0].pageX);return}const{params:c,touches:d,enabled:g}=i;if(!g||!c.simulateTouch&&s.pointerType==="mouse"||i.animating&&c.preventInteractionOnTransition)return;!i.animating&&c.cssMode&&c.loop&&i.loopFix();let p=s.target;if(c.touchEventsTarget==="wrapper"&&!_E(p,i.wrapperEl)||"which"in s&&s.which===3||"button"in s&&s.button>0||o.isTouched&&o.isMoved)return;const h=!!c.noSwipingClass&&c.noSwipingClass!=="",x=s.composedPath?s.composedPath():s.path;h&&s.target&&s.target.shadowRoot&&x&&(p=x[0]);const v=c.noSwipingSelector?c.noSwipingSelector:`.${c.noSwipingClass}`,E=!!(s.target&&s.target.shadowRoot);if(c.noSwiping&&(E?S2(v,p):p.closest(v))){i.allowClick=!0;return}if(c.swipeHandler&&!p.closest(c.swipeHandler))return;d.currentX=s.pageX,d.currentY=s.pageY;const S=d.currentX,b=d.currentY;if(!j0(i,s,S))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),d.startX=S,d.startY=b,o.touchStartTime=Hs(),i.allowClick=!0,i.updateSize(),i.swipeDirection=void 0,c.threshold>0&&(o.allowThresholdMove=!1);let A=!0;p.matches(o.focusableElements)&&(A=!1,p.nodeName==="SELECT"&&(o.isTouched=!1)),r.activeElement&&r.activeElement.matches(o.focusableElements)&&r.activeElement!==p&&(s.pointerType==="mouse"||s.pointerType!=="mouse"&&!p.matches(o.focusableElements))&&r.activeElement.blur();const w=A&&i.allowTouchMove&&c.touchStartPreventDefault;(c.touchStartForcePreventDefault||w)&&!p.isContentEditable&&s.preventDefault(),c.freeMode&&c.freeMode.enabled&&i.freeMode&&i.animating&&!c.cssMode&&i.freeMode.onTouchStart(),i.emit("touchStart",s)}function E2(n){const i=Ua(),r=this,s=r.touchEventsData,{params:o,touches:c,rtlTranslate:d,enabled:g}=r;if(!g||!o.simulateTouch&&n.pointerType==="mouse")return;let p=n;if(p.originalEvent&&(p=p.originalEvent),p.type==="pointermove"&&(s.touchId!==null||p.pointerId!==s.pointerId))return;let h;if(p.type==="touchmove"){if(h=[...p.changedTouches].find($=>$.identifier===s.touchId),!h||h.identifier!==s.touchId)return}else h=p;if(!s.isTouched){s.startMoving&&s.isScrolling&&r.emit("touchMoveOpposite",p);return}const x=h.pageX,v=h.pageY;if(p.preventedByNestedSwiper){c.startX=x,c.startY=v;return}if(!r.allowTouchMove){p.target.matches(s.focusableElements)||(r.allowClick=!1),s.isTouched&&(Object.assign(c,{startX:x,startY:v,currentX:x,currentY:v}),s.touchStartTime=Hs());return}if(o.touchReleaseOnEdges&&!o.loop)if(r.isVertical()){if(v<c.startY&&r.translate<=r.maxTranslate()||v>c.startY&&r.translate>=r.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else{if(d&&(x>c.startX&&-r.translate<=r.maxTranslate()||x<c.startX&&-r.translate>=r.minTranslate()))return;if(!d&&(x<c.startX&&r.translate<=r.maxTranslate()||x>c.startX&&r.translate>=r.minTranslate()))return}if(i.activeElement&&i.activeElement.matches(s.focusableElements)&&i.activeElement!==p.target&&p.pointerType!=="mouse"&&i.activeElement.blur(),i.activeElement&&p.target===i.activeElement&&p.target.matches(s.focusableElements)){s.isMoved=!0,r.allowClick=!1;return}s.allowTouchCallbacks&&r.emit("touchMove",p),c.previousX=c.currentX,c.previousY=c.currentY,c.currentX=x,c.currentY=v;const E=c.currentX-c.startX,S=c.currentY-c.startY;if(r.params.threshold&&Math.sqrt(E**2+S**2)<r.params.threshold)return;if(typeof s.isScrolling>"u"){let $;r.isHorizontal()&&c.currentY===c.startY||r.isVertical()&&c.currentX===c.startX?s.isScrolling=!1:E*E+S*S>=25&&($=Math.atan2(Math.abs(S),Math.abs(E))*180/Math.PI,s.isScrolling=r.isHorizontal()?$>o.touchAngle:90-$>o.touchAngle)}if(s.isScrolling&&r.emit("touchMoveOpposite",p),typeof s.startMoving>"u"&&(c.currentX!==c.startX||c.currentY!==c.startY)&&(s.startMoving=!0),s.isScrolling||p.type==="touchmove"&&s.preventTouchMoveFromPointerMove){s.isTouched=!1;return}if(!s.startMoving)return;r.allowClick=!1,!o.cssMode&&p.cancelable&&p.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&p.stopPropagation();let b=r.isHorizontal()?E:S,A=r.isHorizontal()?c.currentX-c.previousX:c.currentY-c.previousY;o.oneWayMovement&&(b=Math.abs(b)*(d?1:-1),A=Math.abs(A)*(d?1:-1)),c.diff=b,b*=o.touchRatio,d&&(b=-b,A=-A);const w=r.touchesDirection;r.swipeDirection=b>0?"prev":"next",r.touchesDirection=A>0?"prev":"next";const _=r.params.loop&&!o.cssMode,D=r.touchesDirection==="next"&&r.allowSlideNext||r.touchesDirection==="prev"&&r.allowSlidePrev;if(!s.isMoved){if(_&&D&&r.loopFix({direction:r.swipeDirection}),s.startTranslate=r.getTranslate(),r.setTransition(0),r.animating){const $=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});r.wrapperEl.dispatchEvent($)}s.allowMomentumBounce=!1,o.grabCursor&&(r.allowSlideNext===!0||r.allowSlidePrev===!0)&&r.setGrabCursor(!0),r.emit("sliderFirstMove",p)}if(new Date().getTime(),o._loopSwapReset!==!1&&s.isMoved&&s.allowThresholdMove&&w!==r.touchesDirection&&_&&D&&Math.abs(b)>=1){Object.assign(c,{startX:x,startY:v,currentX:x,currentY:v,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}r.emit("sliderMove",p),s.isMoved=!0,s.currentTranslate=b+s.startTranslate;let j=!0,Q=o.resistanceRatio;if(o.touchReleaseOnEdges&&(Q=0),b>0?(_&&D&&s.allowThresholdMove&&s.currentTranslate>(o.centeredSlides?r.minTranslate()-r.slidesSizesGrid[r.activeIndex+1]-(o.slidesPerView!=="auto"&&r.slides.length-o.slidesPerView>=2?r.slidesSizesGrid[r.activeIndex+1]+r.params.spaceBetween:0)-r.params.spaceBetween:r.minTranslate())&&r.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>r.minTranslate()&&(j=!1,o.resistance&&(s.currentTranslate=r.minTranslate()-1+(-r.minTranslate()+s.startTranslate+b)**Q))):b<0&&(_&&D&&s.allowThresholdMove&&s.currentTranslate<(o.centeredSlides?r.maxTranslate()+r.slidesSizesGrid[r.slidesSizesGrid.length-1]+r.params.spaceBetween+(o.slidesPerView!=="auto"&&r.slides.length-o.slidesPerView>=2?r.slidesSizesGrid[r.slidesSizesGrid.length-1]+r.params.spaceBetween:0):r.maxTranslate())&&r.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:r.slides.length-(o.slidesPerView==="auto"?r.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),s.currentTranslate<r.maxTranslate()&&(j=!1,o.resistance&&(s.currentTranslate=r.maxTranslate()+1-(r.maxTranslate()-s.startTranslate-b)**Q))),j&&(p.preventedByNestedSwiper=!0),!r.allowSlideNext&&r.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!r.allowSlidePrev&&r.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!r.allowSlidePrev&&!r.allowSlideNext&&(s.currentTranslate=s.startTranslate),o.threshold>0)if(Math.abs(b)>o.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,c.startX=c.currentX,c.startY=c.currentY,s.currentTranslate=s.startTranslate,c.diff=r.isHorizontal()?c.currentX-c.startX:c.currentY-c.startY;return}}else{s.currentTranslate=s.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&r.freeMode||o.watchSlidesProgress)&&(r.updateActiveIndex(),r.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&r.freeMode&&r.freeMode.onTouchMove(),r.updateProgress(s.currentTranslate),r.setTranslate(s.currentTranslate))}function T2(n){const i=this,r=i.touchEventsData;let s=n;s.originalEvent&&(s=s.originalEvent);let o;if(s.type==="touchend"||s.type==="touchcancel"){if(o=[...s.changedTouches].find($=>$.identifier===r.touchId),!o||o.identifier!==r.touchId)return}else{if(r.touchId!==null||s.pointerId!==r.pointerId)return;o=s}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(s.type)&&!(["pointercancel","contextmenu"].includes(s.type)&&(i.browser.isSafari||i.browser.isWebView)))return;r.pointerId=null,r.touchId=null;const{params:d,touches:g,rtlTranslate:p,slidesGrid:h,enabled:x}=i;if(!x||!d.simulateTouch&&s.pointerType==="mouse")return;if(r.allowTouchCallbacks&&i.emit("touchEnd",s),r.allowTouchCallbacks=!1,!r.isTouched){r.isMoved&&d.grabCursor&&i.setGrabCursor(!1),r.isMoved=!1,r.startMoving=!1;return}d.grabCursor&&r.isMoved&&r.isTouched&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!1);const v=Hs(),E=v-r.touchStartTime;if(i.allowClick){const $=s.path||s.composedPath&&s.composedPath();i.updateClickedSlide($&&$[0]||s.target,$),i.emit("tap click",s),E<300&&v-r.lastClickTime<300&&i.emit("doubleTap doubleClick",s)}if(r.lastClickTime=Hs(),Pg(()=>{i.destroyed||(i.allowClick=!0)}),!r.isTouched||!r.isMoved||!i.swipeDirection||g.diff===0&&!r.loopSwapReset||r.currentTranslate===r.startTranslate&&!r.loopSwapReset){r.isTouched=!1,r.isMoved=!1,r.startMoving=!1;return}r.isTouched=!1,r.isMoved=!1,r.startMoving=!1;let S;if(d.followFinger?S=p?i.translate:-i.translate:S=-r.currentTranslate,d.cssMode)return;if(d.freeMode&&d.freeMode.enabled){i.freeMode.onTouchEnd({currentPos:S});return}const b=S>=-i.maxTranslate()&&!i.params.loop;let A=0,w=i.slidesSizesGrid[0];for(let $=0;$<h.length;$+=$<d.slidesPerGroupSkip?1:d.slidesPerGroup){const U=$<d.slidesPerGroupSkip-1?1:d.slidesPerGroup;typeof h[$+U]<"u"?(b||S>=h[$]&&S<h[$+U])&&(A=$,w=h[$+U]-h[$]):(b||S>=h[$])&&(A=$,w=h[h.length-1]-h[h.length-2])}let _=null,D=null;d.rewind&&(i.isBeginning?D=d.virtual&&d.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1:i.isEnd&&(_=0));const j=(S-h[A])/w,Q=A<d.slidesPerGroupSkip-1?1:d.slidesPerGroup;if(E>d.longSwipesMs){if(!d.longSwipes){i.slideTo(i.activeIndex);return}i.swipeDirection==="next"&&(j>=d.longSwipesRatio?i.slideTo(d.rewind&&i.isEnd?_:A+Q):i.slideTo(A)),i.swipeDirection==="prev"&&(j>1-d.longSwipesRatio?i.slideTo(A+Q):D!==null&&j<0&&Math.abs(j)>d.longSwipesRatio?i.slideTo(D):i.slideTo(A))}else{if(!d.shortSwipes){i.slideTo(i.activeIndex);return}i.navigation&&(s.target===i.navigation.nextEl||s.target===i.navigation.prevEl)?s.target===i.navigation.nextEl?i.slideTo(A+Q):i.slideTo(A):(i.swipeDirection==="next"&&i.slideTo(_!==null?_:A+Q),i.swipeDirection==="prev"&&i.slideTo(D!==null?D:A))}}function N0(){const n=this,{params:i,el:r}=n;if(r&&r.offsetWidth===0)return;i.breakpoints&&n.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:o,snapGrid:c}=n,d=n.virtual&&n.params.virtual.enabled;n.allowSlideNext=!0,n.allowSlidePrev=!0,n.updateSize(),n.updateSlides(),n.updateSlidesClasses();const g=d&&i.loop;(i.slidesPerView==="auto"||i.slidesPerView>1)&&n.isEnd&&!n.isBeginning&&!n.params.centeredSlides&&!g?n.slideTo(n.slides.length-1,0,!1,!0):n.params.loop&&!d?n.slideToLoop(n.realIndex,0,!1,!0):n.slideTo(n.activeIndex,0,!1,!0),n.autoplay&&n.autoplay.running&&n.autoplay.paused&&(clearTimeout(n.autoplay.resizeTimeout),n.autoplay.resizeTimeout=setTimeout(()=>{n.autoplay&&n.autoplay.running&&n.autoplay.paused&&n.autoplay.resume()},500)),n.allowSlidePrev=o,n.allowSlideNext=s,n.params.watchOverflow&&c!==n.snapGrid&&n.checkOverflow()}function z2(n){const i=this;i.enabled&&(i.allowClick||(i.params.preventClicks&&n.preventDefault(),i.params.preventClicksPropagation&&i.animating&&(n.stopPropagation(),n.stopImmediatePropagation())))}function C2(){const n=this,{wrapperEl:i,rtlTranslate:r,enabled:s}=n;if(!s)return;n.previousTranslate=n.translate,n.isHorizontal()?n.translate=-i.scrollLeft:n.translate=-i.scrollTop,n.translate===0&&(n.translate=0),n.updateActiveIndex(),n.updateSlidesClasses();let o;const c=n.maxTranslate()-n.minTranslate();c===0?o=0:o=(n.translate-n.minTranslate())/c,o!==n.progress&&n.updateProgress(r?-n.translate:n.translate),n.emit("setTranslate",n.translate,!1)}function A2(n){const i=this;Ms(i,n.target),!(i.params.cssMode||i.params.slidesPerView!=="auto"&&!i.params.autoHeight)&&i.update()}function O2(){const n=this;n.documentTouchHandlerProceeded||(n.documentTouchHandlerProceeded=!0,n.params.touchReleaseOnEdges&&(n.el.style.touchAction="auto"))}const ax=(n,i)=>{const r=Ua(),{params:s,el:o,wrapperEl:c,device:d}=n,g=!!s.nested,p=i==="on"?"addEventListener":"removeEventListener",h=i;!o||typeof o=="string"||(r[p]("touchstart",n.onDocumentTouchStart,{passive:!1,capture:g}),o[p]("touchstart",n.onTouchStart,{passive:!1}),o[p]("pointerdown",n.onTouchStart,{passive:!1}),r[p]("touchmove",n.onTouchMove,{passive:!1,capture:g}),r[p]("pointermove",n.onTouchMove,{passive:!1,capture:g}),r[p]("touchend",n.onTouchEnd,{passive:!0}),r[p]("pointerup",n.onTouchEnd,{passive:!0}),r[p]("pointercancel",n.onTouchEnd,{passive:!0}),r[p]("touchcancel",n.onTouchEnd,{passive:!0}),r[p]("pointerout",n.onTouchEnd,{passive:!0}),r[p]("pointerleave",n.onTouchEnd,{passive:!0}),r[p]("contextmenu",n.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&o[p]("click",n.onClick,!0),s.cssMode&&c[p]("scroll",n.onScroll),s.updateOnWindowResize?n[h](d.ios||d.android?"resize orientationchange observerUpdate":"resize observerUpdate",N0,!0):n[h]("observerUpdate",N0,!0),o[p]("load",n.onLoad,{capture:!0}))};function _2(){const n=this,{params:i}=n;n.onTouchStart=w2.bind(n),n.onTouchMove=E2.bind(n),n.onTouchEnd=T2.bind(n),n.onDocumentTouchStart=O2.bind(n),i.cssMode&&(n.onScroll=C2.bind(n)),n.onClick=z2.bind(n),n.onLoad=A2.bind(n),ax(n,"on")}function M2(){ax(this,"off")}var R2={attachEvents:_2,detachEvents:M2};const L0=(n,i)=>n.grid&&i.grid&&i.grid.rows>1;function D2(){const n=this,{realIndex:i,initialized:r,params:s,el:o}=n,c=s.breakpoints;if(!c||c&&Object.keys(c).length===0)return;const d=Ua(),g=s.breakpointsBase==="window"||!s.breakpointsBase?s.breakpointsBase:"container",p=["window","container"].includes(s.breakpointsBase)||!s.breakpointsBase?n.el:d.querySelector(s.breakpointsBase),h=n.getBreakpoint(c,g,p);if(!h||n.currentBreakpoint===h)return;const v=(h in c?c[h]:void 0)||n.originalParams,E=L0(n,s),S=L0(n,v),b=n.params.grabCursor,A=v.grabCursor,w=s.enabled;E&&!S?(o.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),n.emitContainerClasses()):!E&&S&&(o.classList.add(`${s.containerModifierClass}grid`),(v.grid.fill&&v.grid.fill==="column"||!v.grid.fill&&s.grid.fill==="column")&&o.classList.add(`${s.containerModifierClass}grid-column`),n.emitContainerClasses()),b&&!A?n.unsetGrabCursor():!b&&A&&n.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(U=>{if(typeof v[U]>"u")return;const B=s[U]&&s[U].enabled,G=v[U]&&v[U].enabled;B&&!G&&n[U].disable(),!B&&G&&n[U].enable()});const _=v.direction&&v.direction!==s.direction,D=s.loop&&(v.slidesPerView!==s.slidesPerView||_),j=s.loop;_&&r&&n.changeDirection(),Lt(n.params,v);const Q=n.params.enabled,$=n.params.loop;Object.assign(n,{allowTouchMove:n.params.allowTouchMove,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev}),w&&!Q?n.disable():!w&&Q&&n.enable(),n.currentBreakpoint=h,n.emit("_beforeBreakpoint",v),r&&(D?(n.loopDestroy(),n.loopCreate(i),n.updateSlides()):!j&&$?(n.loopCreate(i),n.updateSlides()):j&&!$&&n.loopDestroy()),n.emit("breakpoint",v)}function j2(n,i="window",r){if(!n||i==="container"&&!r)return;let s=!1;const o=ht(),c=i==="window"?o.innerHeight:r.clientHeight,d=Object.keys(n).map(g=>{if(typeof g=="string"&&g.indexOf("@")===0){const p=parseFloat(g.substr(1));return{value:c*p,point:g}}return{value:g,point:g}});d.sort((g,p)=>parseInt(g.value,10)-parseInt(p.value,10));for(let g=0;g<d.length;g+=1){const{point:p,value:h}=d[g];i==="window"?o.matchMedia(`(min-width: ${h}px)`).matches&&(s=p):h<=r.clientWidth&&(s=p)}return s||"max"}var N2={setBreakpoint:D2,getBreakpoint:j2};function L2(n,i){const r=[];return n.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(o=>{s[o]&&r.push(i+o)}):typeof s=="string"&&r.push(i+s)}),r}function B2(){const n=this,{classNames:i,params:r,rtl:s,el:o,device:c}=n,d=L2(["initialized",r.direction,{"free-mode":n.params.freeMode&&r.freeMode.enabled},{autoheight:r.autoHeight},{rtl:s},{grid:r.grid&&r.grid.rows>1},{"grid-column":r.grid&&r.grid.rows>1&&r.grid.fill==="column"},{android:c.android},{ios:c.ios},{"css-mode":r.cssMode},{centered:r.cssMode&&r.centeredSlides},{"watch-progress":r.watchSlidesProgress}],r.containerModifierClass);i.push(...d),o.classList.add(...i),n.emitContainerClasses()}function U2(){const n=this,{el:i,classNames:r}=n;!i||typeof i=="string"||(i.classList.remove(...r),n.emitContainerClasses())}var H2={addClasses:B2,removeClasses:U2};function G2(){const n=this,{isLocked:i,params:r}=n,{slidesOffsetBefore:s}=r;if(s){const o=n.slides.length-1,c=n.slidesGrid[o]+n.slidesSizesGrid[o]+s*2;n.isLocked=n.size>c}else n.isLocked=n.snapGrid.length===1;r.allowSlideNext===!0&&(n.allowSlideNext=!n.isLocked),r.allowSlidePrev===!0&&(n.allowSlidePrev=!n.isLocked),i&&i!==n.isLocked&&(n.isEnd=!1),i!==n.isLocked&&n.emit(n.isLocked?"lock":"unlock")}var q2={checkOverflow:G2},ff={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function k2(n,i){return function(s={}){const o=Object.keys(s)[0],c=s[o];if(typeof c!="object"||c===null){Lt(i,s);return}if(n[o]===!0&&(n[o]={enabled:!0}),o==="navigation"&&n[o]&&n[o].enabled&&!n[o].prevEl&&!n[o].nextEl&&(n[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&n[o]&&n[o].enabled&&!n[o].el&&(n[o].auto=!0),!(o in n&&"enabled"in c)){Lt(i,s);return}typeof n[o]=="object"&&!("enabled"in n[o])&&(n[o].enabled=!0),n[o]||(n[o]={enabled:!1}),Lt(i,s)}}const qc={eventsEmitter:HE,update:FE,translate:t2,transition:l2,slide:p2,loop:x2,grabCursor:b2,events:R2,breakpoints:N2,checkOverflow:q2,classes:H2},kc={};let _f=class _n{constructor(...i){let r,s;i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?s=i[0]:[r,s]=i,s||(s={}),s=Lt({},s),r&&!s.el&&(s.el=r);const o=Ua();if(s.el&&typeof s.el=="string"&&o.querySelectorAll(s.el).length>1){const p=[];return o.querySelectorAll(s.el).forEach(h=>{const x=Lt({},s,{el:h});p.push(new _n(x))}),p}const c=this;c.__swiper__=!0,c.support=Ig(),c.device=ex({userAgent:s.userAgent}),c.browser=tx(),c.eventsListeners={},c.eventsAnyListeners=[],c.modules=[...c.__modules__],s.modules&&Array.isArray(s.modules)&&c.modules.push(...s.modules);const d={};c.modules.forEach(p=>{p({params:s,swiper:c,extendParams:k2(s,d),on:c.on.bind(c),once:c.once.bind(c),off:c.off.bind(c),emit:c.emit.bind(c)})});const g=Lt({},ff,d);return c.params=Lt({},g,kc,s),c.originalParams=Lt({},c.params),c.passedParams=Lt({},s),c.params&&c.params.on&&Object.keys(c.params.on).forEach(p=>{c.on(p,c.params.on[p])}),c.params&&c.params.onAny&&c.onAny(c.params.onAny),Object.assign(c,{enabled:c.params.enabled,el:r,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return c.params.direction==="horizontal"},isVertical(){return c.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:c.params.allowSlideNext,allowSlidePrev:c.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:c.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:c.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),c.emit("_swiper"),c.params.init&&c.init(),c}getDirectionLabel(i){return this.isHorizontal()?i:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[i]}getSlideIndex(i){const{slidesEl:r,params:s}=this,o=Rn(r,`.${s.slideClass}, swiper-slide`),c=_0(o[0]);return _0(i)-c}getSlideIndexByData(i){return this.getSlideIndex(this.slides.find(r=>r.getAttribute("data-swiper-slide-index")*1===i))}getSlideIndexWhenGrid(i){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?i=Math.floor(i/this.params.grid.rows):this.params.grid.fill==="row"&&(i=i%Math.ceil(this.slides.length/this.params.grid.rows))),i}recalcSlides(){const i=this,{slidesEl:r,params:s}=i;i.slides=Rn(r,`.${s.slideClass}, swiper-slide`)}enable(){const i=this;i.enabled||(i.enabled=!0,i.params.grabCursor&&i.setGrabCursor(),i.emit("enable"))}disable(){const i=this;i.enabled&&(i.enabled=!1,i.params.grabCursor&&i.unsetGrabCursor(),i.emit("disable"))}setProgress(i,r){const s=this;i=Math.min(Math.max(i,0),1);const o=s.minTranslate(),d=(s.maxTranslate()-o)*i+o;s.translateTo(d,typeof r>"u"?0:r),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const i=this;if(!i.params._emitClasses||!i.el)return;const r=i.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(i.params.containerModifierClass)===0);i.emit("_containerClasses",r.join(" "))}getSlideClasses(i){const r=this;return r.destroyed?"":i.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(r.params.slideClass)===0).join(" ")}emitSlidesClasses(){const i=this;if(!i.params._emitClasses||!i.el)return;const r=[];i.slides.forEach(s=>{const o=i.getSlideClasses(s);r.push({slideEl:s,classNames:o}),i.emit("_slideClass",s,o)}),i.emit("_slideClasses",r)}slidesPerViewDynamic(i="current",r=!1){const s=this,{params:o,slides:c,slidesGrid:d,slidesSizesGrid:g,size:p,activeIndex:h}=s;let x=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let v=c[h]?Math.ceil(c[h].swiperSlideSize):0,E;for(let S=h+1;S<c.length;S+=1)c[S]&&!E&&(v+=Math.ceil(c[S].swiperSlideSize),x+=1,v>p&&(E=!0));for(let S=h-1;S>=0;S-=1)c[S]&&!E&&(v+=c[S].swiperSlideSize,x+=1,v>p&&(E=!0))}else if(i==="current")for(let v=h+1;v<c.length;v+=1)(r?d[v]+g[v]-d[h]<p:d[v]-d[h]<p)&&(x+=1);else for(let v=h-1;v>=0;v-=1)d[h]-d[v]<p&&(x+=1);return x}update(){const i=this;if(!i||i.destroyed)return;const{snapGrid:r,params:s}=i;s.breakpoints&&i.setBreakpoint(),[...i.el.querySelectorAll('[loading="lazy"]')].forEach(d=>{d.complete&&Ms(i,d)}),i.updateSize(),i.updateSlides(),i.updateProgress(),i.updateSlidesClasses();function o(){const d=i.rtlTranslate?i.translate*-1:i.translate,g=Math.min(Math.max(d,i.maxTranslate()),i.minTranslate());i.setTranslate(g),i.updateActiveIndex(),i.updateSlidesClasses()}let c;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)o(),s.autoHeight&&i.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&i.isEnd&&!s.centeredSlides){const d=i.virtual&&s.virtual.enabled?i.virtual.slides:i.slides;c=i.slideTo(d.length-1,0,!1,!0)}else c=i.slideTo(i.activeIndex,0,!1,!0);c||o()}s.watchOverflow&&r!==i.snapGrid&&i.checkOverflow(),i.emit("update")}changeDirection(i,r=!0){const s=this,o=s.params.direction;return i||(i=o==="horizontal"?"vertical":"horizontal"),i===o||i!=="horizontal"&&i!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${o}`),s.el.classList.add(`${s.params.containerModifierClass}${i}`),s.emitContainerClasses(),s.params.direction=i,s.slides.forEach(c=>{i==="vertical"?c.style.width="":c.style.height=""}),s.emit("changeDirection"),r&&s.update()),s}changeLanguageDirection(i){const r=this;r.rtl&&i==="rtl"||!r.rtl&&i==="ltr"||(r.rtl=i==="rtl",r.rtlTranslate=r.params.direction==="horizontal"&&r.rtl,r.rtl?(r.el.classList.add(`${r.params.containerModifierClass}rtl`),r.el.dir="rtl"):(r.el.classList.remove(`${r.params.containerModifierClass}rtl`),r.el.dir="ltr"),r.update())}mount(i){const r=this;if(r.mounted)return!0;let s=i||r.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=r,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===r.params.swiperElementNodeName.toUpperCase()&&(r.isElement=!0);const o=()=>`.${(r.params.wrapperClass||"").trim().split(" ").join(".")}`;let d=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(o()):Rn(s,o())[0];return!d&&r.params.createElements&&(d=uf("div",r.params.wrapperClass),s.append(d),Rn(s,`.${r.params.slideClass}`).forEach(g=>{d.append(g)})),Object.assign(r,{el:s,wrapperEl:d,slidesEl:r.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:d,hostEl:r.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||oa(s,"direction")==="rtl",rtlTranslate:r.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||oa(s,"direction")==="rtl"),wrongRTL:oa(d,"display")==="-webkit-box"}),!0}init(i){const r=this;if(r.initialized||r.mount(i)===!1)return r;r.emit("beforeInit"),r.params.breakpoints&&r.setBreakpoint(),r.addClasses(),r.updateSize(),r.updateSlides(),r.params.watchOverflow&&r.checkOverflow(),r.params.grabCursor&&r.enabled&&r.setGrabCursor(),r.params.loop&&r.virtual&&r.params.virtual.enabled?r.slideTo(r.params.initialSlide+r.virtual.slidesBefore,0,r.params.runCallbacksOnInit,!1,!0):r.slideTo(r.params.initialSlide,0,r.params.runCallbacksOnInit,!1,!0),r.params.loop&&r.loopCreate(void 0,!0),r.attachEvents();const o=[...r.el.querySelectorAll('[loading="lazy"]')];return r.isElement&&o.push(...r.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(c=>{c.complete?Ms(r,c):c.addEventListener("load",d=>{Ms(r,d.target)})}),cf(r),r.initialized=!0,cf(r),r.emit("init"),r.emit("afterInit"),r}destroy(i=!0,r=!0){const s=this,{params:o,el:c,wrapperEl:d,slides:g}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),o.loop&&s.loopDestroy(),r&&(s.removeClasses(),c&&typeof c!="string"&&c.removeAttribute("style"),d&&d.removeAttribute("style"),g&&g.length&&g.forEach(p=>{p.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),p.removeAttribute("style"),p.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(p=>{s.off(p)}),i!==!1&&(s.el&&typeof s.el!="string"&&(s.el.swiper=null),TE(s)),s.destroyed=!0),null}static extendDefaults(i){Lt(kc,i)}static get extendedDefaults(){return kc}static get defaults(){return ff}static installModule(i){_n.prototype.__modules__||(_n.prototype.__modules__=[]);const r=_n.prototype.__modules__;typeof i=="function"&&r.indexOf(i)<0&&r.push(i)}static use(i){return Array.isArray(i)?(i.forEach(r=>_n.installModule(r)),_n):(_n.installModule(i),_n)}};Object.keys(qc).forEach(n=>{Object.keys(qc[n]).forEach(i=>{_f.prototype[i]=qc[n][i]})});_f.use([BE,UE]);const ix=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Ba(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"&&!n.__swiper__}function Ti(n,i){const r=["__proto__","constructor","prototype"];Object.keys(i).filter(s=>r.indexOf(s)<0).forEach(s=>{typeof n[s]>"u"?n[s]=i[s]:Ba(i[s])&&Ba(n[s])&&Object.keys(i[s]).length>0?i[s].__swiper__?n[s]=i[s]:Ti(n[s],i[s]):n[s]=i[s]})}function lx(n={}){return n.navigation&&typeof n.navigation.nextEl>"u"&&typeof n.navigation.prevEl>"u"}function rx(n={}){return n.pagination&&typeof n.pagination.el>"u"}function sx(n={}){return n.scrollbar&&typeof n.scrollbar.el>"u"}function ox(n=""){const i=n.split(" ").map(s=>s.trim()).filter(s=>!!s),r=[];return i.forEach(s=>{r.indexOf(s)<0&&r.push(s)}),r.join(" ")}function Y2(n=""){return n?n.includes("swiper-wrapper")?n:`swiper-wrapper ${n}`:"swiper-wrapper"}function V2({swiper:n,slides:i,passedParams:r,changedParams:s,nextEl:o,prevEl:c,scrollbarEl:d,paginationEl:g}){const p=s.filter(G=>G!=="children"&&G!=="direction"&&G!=="wrapperClass"),{params:h,pagination:x,navigation:v,scrollbar:E,virtual:S,thumbs:b}=n;let A,w,_,D,j,Q,$,U;s.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&!r.thumbs.swiper.destroyed&&h.thumbs&&(!h.thumbs.swiper||h.thumbs.swiper.destroyed)&&(A=!0),s.includes("controller")&&r.controller&&r.controller.control&&h.controller&&!h.controller.control&&(w=!0),s.includes("pagination")&&r.pagination&&(r.pagination.el||g)&&(h.pagination||h.pagination===!1)&&x&&!x.el&&(_=!0),s.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||d)&&(h.scrollbar||h.scrollbar===!1)&&E&&!E.el&&(D=!0),s.includes("navigation")&&r.navigation&&(r.navigation.prevEl||c)&&(r.navigation.nextEl||o)&&(h.navigation||h.navigation===!1)&&v&&!v.prevEl&&!v.nextEl&&(j=!0);const B=G=>{n[G]&&(n[G].destroy(),G==="navigation"?(n.isElement&&(n[G].prevEl.remove(),n[G].nextEl.remove()),h[G].prevEl=void 0,h[G].nextEl=void 0,n[G].prevEl=void 0,n[G].nextEl=void 0):(n.isElement&&n[G].el.remove(),h[G].el=void 0,n[G].el=void 0))};s.includes("loop")&&n.isElement&&(h.loop&&!r.loop?Q=!0:!h.loop&&r.loop?$=!0:U=!0),p.forEach(G=>{if(Ba(h[G])&&Ba(r[G]))Object.assign(h[G],r[G]),(G==="navigation"||G==="pagination"||G==="scrollbar")&&"enabled"in r[G]&&!r[G].enabled&&B(G);else{const ne=r[G];(ne===!0||ne===!1)&&(G==="navigation"||G==="pagination"||G==="scrollbar")?ne===!1&&B(G):h[G]=r[G]}}),p.includes("controller")&&!w&&n.controller&&n.controller.control&&h.controller&&h.controller.control&&(n.controller.control=h.controller.control),s.includes("children")&&i&&S&&h.virtual.enabled?(S.slides=i,S.update(!0)):s.includes("virtual")&&S&&h.virtual.enabled&&(i&&(S.slides=i),S.update(!0)),s.includes("children")&&i&&h.loop&&(U=!0),A&&b.init()&&b.update(!0),w&&(n.controller.control=h.controller.control),_&&(n.isElement&&(!g||typeof g=="string")&&(g=document.createElement("div"),g.classList.add("swiper-pagination"),g.part.add("pagination"),n.el.appendChild(g)),g&&(h.pagination.el=g),x.init(),x.render(),x.update()),D&&(n.isElement&&(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-scrollbar"),d.part.add("scrollbar"),n.el.appendChild(d)),d&&(h.scrollbar.el=d),E.init(),E.updateSize(),E.setTranslate()),j&&(n.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),R0(o,n.navigation.arrowSvg),o.part.add("button-next"),n.el.appendChild(o)),(!c||typeof c=="string")&&(c=document.createElement("div"),c.classList.add("swiper-button-prev"),R0(c,n.navigation.arrowSvg),c.part.add("button-prev"),n.el.appendChild(c))),o&&(h.navigation.nextEl=o),c&&(h.navigation.prevEl=c),v.init(),v.update()),s.includes("allowSlideNext")&&(n.allowSlideNext=r.allowSlideNext),s.includes("allowSlidePrev")&&(n.allowSlidePrev=r.allowSlidePrev),s.includes("direction")&&n.changeDirection(r.direction,!1),(Q||U)&&n.loopDestroy(),($||U)&&n.loopCreate(),n.update()}function X2(n={},i=!0){const r={on:{}},s={},o={};Ti(r,ff),r._emitClasses=!0,r.init=!1;const c={},d=ix.map(p=>p.replace(/_/,"")),g=Object.assign({},n);return Object.keys(g).forEach(p=>{typeof n[p]>"u"||(d.indexOf(p)>=0?Ba(n[p])?(r[p]={},o[p]={},Ti(r[p],n[p]),Ti(o[p],n[p])):(r[p]=n[p],o[p]=n[p]):p.search(/on[A-Z]/)===0&&typeof n[p]=="function"?i?s[`${p[2].toLowerCase()}${p.substr(3)}`]=n[p]:r.on[`${p[2].toLowerCase()}${p.substr(3)}`]=n[p]:c[p]=n[p])}),["navigation","pagination","scrollbar"].forEach(p=>{r[p]===!0&&(r[p]={}),r[p]===!1&&delete r[p]}),{params:r,passedParams:o,rest:c,events:s}}function $2({el:n,nextEl:i,prevEl:r,paginationEl:s,scrollbarEl:o,swiper:c},d){lx(d)&&i&&r&&(c.params.navigation.nextEl=i,c.originalParams.navigation.nextEl=i,c.params.navigation.prevEl=r,c.originalParams.navigation.prevEl=r),rx(d)&&s&&(c.params.pagination.el=s,c.originalParams.pagination.el=s),sx(d)&&o&&(c.params.scrollbar.el=o,c.originalParams.scrollbar.el=o),c.init(n)}function Q2(n,i,r,s,o){const c=[];if(!i)return c;const d=p=>{c.indexOf(p)<0&&c.push(p)};if(r&&s){const p=s.map(o),h=r.map(o);p.join("")!==h.join("")&&d("children"),s.length!==r.length&&d("children")}return ix.filter(p=>p[0]==="_").map(p=>p.replace(/_/,"")).forEach(p=>{if(p in n&&p in i)if(Ba(n[p])&&Ba(i[p])){const h=Object.keys(n[p]),x=Object.keys(i[p]);h.length!==x.length?d(p):(h.forEach(v=>{n[p][v]!==i[p][v]&&d(p)}),x.forEach(v=>{n[p][v]!==i[p][v]&&d(p)}))}else n[p]!==i[p]&&d(p)}),c}const Z2=n=>{!n||n.destroyed||!n.params.virtual||n.params.virtual&&!n.params.virtual.enabled||(n.updateSlides(),n.updateProgress(),n.updateSlidesClasses(),n.emit("_virtualUpdated"),n.parallax&&n.params.parallax&&n.params.parallax.enabled&&n.parallax.setTranslate())};function qs(){return qs=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},qs.apply(this,arguments)}function ux(n){return n.type&&n.type.displayName&&n.type.displayName.includes("SwiperSlide")}function cx(n){const i=[];return Be.Children.toArray(n).forEach(r=>{ux(r)?i.push(r):r.props&&r.props.children&&cx(r.props.children).forEach(s=>i.push(s))}),i}function K2(n){const i=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Be.Children.toArray(n).forEach(s=>{if(ux(s))i.push(s);else if(s.props&&s.props.slot&&r[s.props.slot])r[s.props.slot].push(s);else if(s.props&&s.props.children){const o=cx(s.props.children);o.length>0?o.forEach(c=>i.push(c)):r["container-end"].push(s)}else r["container-end"].push(s)}),{slides:i,slots:r}}function F2(n,i,r){if(!r)return null;const s=x=>{let v=x;return x<0?v=i.length+x:v>=i.length&&(v=v-i.length),v},o=n.isHorizontal()?{[n.rtlTranslate?"right":"left"]:`${r.offset}px`}:{top:`${r.offset}px`},{from:c,to:d}=r,g=n.params.loop?-i.length:0,p=n.params.loop?i.length*2:i.length,h=[];for(let x=g;x<p;x+=1)x>=c&&x<=d&&h.push(i[s(x)]);return h.map((x,v)=>Be.cloneElement(x,{swiper:n,style:o,key:x.props.virtualIndex||x.key||`slide-${v}`}))}function Hl(n,i){return typeof window>"u"?M.useEffect(n,i):M.useLayoutEffect(n,i)}const B0=M.createContext(null),J2=M.createContext(null),fx=M.forwardRef(({className:n,tag:i="div",wrapperTag:r="div",children:s,onSwiper:o,...c}={},d)=>{let g=!1;const[p,h]=M.useState("swiper"),[x,v]=M.useState(null),[E,S]=M.useState(!1),b=M.useRef(!1),A=M.useRef(null),w=M.useRef(null),_=M.useRef(null),D=M.useRef(null),j=M.useRef(null),Q=M.useRef(null),$=M.useRef(null),U=M.useRef(null),{params:B,passedParams:G,rest:ne,events:P}=X2(c),{slides:J,slots:I}=K2(s),se=()=>{S(!E)};Object.assign(B.on,{_containerClasses(F,ie){h(ie)}});const oe=()=>{Object.assign(B.on,P),g=!0;const F={...B};if(delete F.wrapperClass,w.current=new _f(F),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=J;const ie={cache:!1,slides:J,renderExternal:v,renderExternalUpdate:!1};Ti(w.current.params.virtual,ie),Ti(w.current.originalParams.virtual,ie)}};A.current||oe(),w.current&&w.current.on("_beforeBreakpoint",se);const ze=()=>{g||!P||!w.current||Object.keys(P).forEach(F=>{w.current.on(F,P[F])})},q=()=>{!P||!w.current||Object.keys(P).forEach(F=>{w.current.off(F,P[F])})};M.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",se)}),M.useEffect(()=>{!b.current&&w.current&&(w.current.emitSlidesClasses(),b.current=!0)}),Hl(()=>{if(d&&(d.current=A.current),!!A.current)return w.current.destroyed&&oe(),$2({el:A.current,nextEl:j.current,prevEl:Q.current,paginationEl:$.current,scrollbarEl:U.current,swiper:w.current},B),o&&!w.current.destroyed&&o(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),Hl(()=>{ze();const F=Q2(G,_.current,J,D.current,ie=>ie.key);return _.current=G,D.current=J,F.length&&w.current&&!w.current.destroyed&&V2({swiper:w.current,slides:J,passedParams:G,changedParams:F,nextEl:j.current,prevEl:Q.current,scrollbarEl:U.current,paginationEl:$.current}),()=>{q()}}),Hl(()=>{Z2(w.current)},[x]);function W(){return B.virtual?F2(w.current,J,x):J.map((F,ie)=>Be.cloneElement(F,{swiper:w.current,swiperSlideIndex:ie}))}return Be.createElement(i,qs({ref:A,className:ox(`${p}${n?` ${n}`:""}`)},ne),Be.createElement(J2.Provider,{value:w.current},I["container-start"],Be.createElement(r,{className:Y2(B.wrapperClass)},I["wrapper-start"],W(),I["wrapper-end"]),lx(B)&&Be.createElement(Be.Fragment,null,Be.createElement("div",{ref:Q,className:"swiper-button-prev"}),Be.createElement("div",{ref:j,className:"swiper-button-next"})),sx(B)&&Be.createElement("div",{ref:U,className:"swiper-scrollbar"}),rx(B)&&Be.createElement("div",{ref:$,className:"swiper-pagination"}),I["container-end"]))});fx.displayName="Swiper";const dx=M.forwardRef(({tag:n="div",children:i,className:r="",swiper:s,zoom:o,lazy:c,virtualIndex:d,swiperSlideIndex:g,...p}={},h)=>{const x=M.useRef(null),[v,E]=M.useState("swiper-slide"),[S,b]=M.useState(!1);function A(j,Q,$){Q===x.current&&E($)}Hl(()=>{if(typeof g<"u"&&(x.current.swiperSlideIndex=g),h&&(h.current=x.current),!(!x.current||!s)){if(s.destroyed){v!=="swiper-slide"&&E("swiper-slide");return}return s.on("_slideClass",A),()=>{s&&s.off("_slideClass",A)}}}),Hl(()=>{s&&x.current&&!s.destroyed&&E(s.getSlideClasses(x.current))},[s]);const w={isActive:v.indexOf("swiper-slide-active")>=0,isVisible:v.indexOf("swiper-slide-visible")>=0,isPrev:v.indexOf("swiper-slide-prev")>=0,isNext:v.indexOf("swiper-slide-next")>=0},_=()=>typeof i=="function"?i(w):i,D=()=>{b(!0)};return Be.createElement(n,qs({ref:x,className:ox(`${v}${r?` ${r}`:""}`),"data-swiper-slide-index":d,onLoad:D},p),o&&Be.createElement(B0.Provider,{value:w},Be.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},_(),c&&!S&&Be.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&Be.createElement(B0.Provider,{value:w},_(),c&&!S&&Be.createElement("div",{className:"swiper-lazy-preloader"})))});dx.displayName="SwiperSlide";const P2=te.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: ${n=>n.$isClickable?"pointer":"default"};
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 20px;
  width: 100%;
  max-width: 280px;

  &:hover {
    transform: ${n=>n.$isClickable?"translateY(-10px) scale(1.05)":"none"};
  }

  img {
    border-radius: 20px;
    width: 100%;
    max-width: 280px;
    height: auto;
    aspect-ratio: 2/3;
    object-fit: cover;
    margin-left: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

    ${n=>n.$isClickable&&`
      &:hover {
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        filter: brightness(1.1);
      }
    `}
  }

  h3 {
    margin-top: 15px;
    color: white;
    text-align: center;
    font-weight: 600;
    font-size: 1.1rem;
    transition: color 0.3s ease;
    line-height: 1.4;
    padding: 0 5px;

    ${n=>n.$isClickable&&`
      &:hover {
        color: #ff6b6b;
      }
    `}
  }

  @media (max-width: 1024px) {
    max-width: 240px;
    padding: 8px;

    img {
      max-width: 240px;
      margin-left: 8px;
    }

    h3 {
      font-size: 1rem;
      margin-top: 12px;
    }
  }

  @media (max-width: 768px) {
    max-width: 220px;
    padding: 8px;

    img {
      max-width: 220px;
      margin-left: 6px;
      border-radius: 16px;
    }

    h3 {
      font-size: 0.95rem;
      margin-top: 10px;
      font-weight: 600;
    }

    &:hover {
      transform: ${n=>n.$isClickable?"translateY(-8px) scale(1.03)":"none"};
    }
  }

  /* Estilo Netflix para Mobile */
  @media (max-width: 480px) {
    max-width: 180px;
    padding: 6px;
    min-width: 160px;

    img {
      max-width: 180px;
      min-width: 160px;
      margin-left: 0;
      border-radius: 12px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    }

    h3 {
      font-size: 0.9rem;
      margin-top: 8px;
      line-height: 1.3;
      font-weight: 600;
      color: #fff;
    }

    &:hover {
      transform: ${n=>n.$isClickable?"translateY(-5px) scale(1.02)":"none"};
    }
  }

  /* Mobile muito pequeno - estilo Netflix compacto */
  @media (max-width: 360px) {
    max-width: 150px;
    min-width: 140px;
    padding: 4px;

    img {
      max-width: 150px;
      min-width: 140px;
      border-radius: 10px;
    }

    h3 {
      font-size: 0.85rem;
      margin-top: 6px;
      line-height: 1.2;
    }
  }
`;function W2({item:n,contentType:i}){const r=Ni(),s=n.title||n.name,o=n.poster_path||n.profile_path||"",c=()=>{n.poster_path&&(window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{let g=`/detalhe/${n.id}`;i==="movie"?g=`/movie/${n.id}`:i==="series"?g=`/serie/${n.id}`:n.name&&!n.title?g=`/serie/${n.id}`:n.title&&!n.name&&(g=`/movie/${n.id}`),r(g)},300))},d=n.poster_path;return z.jsxs(P2,{onClick:d?c:void 0,$isClickable:d,children:[z.jsx("img",{src:jn(o),alt:s,onError:g=>{g.target.src=n.profile_path?"/placeholder-person.svg":"/placeholder-movie.svg"}}),z.jsx("h3",{children:s})]})}const I2=te.div`
  background: #000000;
  padding: 0 20px;
  margin-bottom: 40px;

  h2 {
    margin: 30px 0 20px 20px;
    font-size: 24px;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .swiper-wrapper {
    display: flex;
    padding-bottom: 10px;
  }

  .swiper-slide {
    width: auto !important;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    margin-bottom: 35px;

    h2 {
      margin: 25px 0 18px 16px;
      font-size: 22px;
      font-weight: 700;
    }
  }

  @media (max-width: 480px) {
    padding: 0 12px;
    margin-bottom: 30px;

    h2 {
      margin: 20px 0 15px 12px;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.3px;
    }

    .swiper-wrapper {
      padding-bottom: 8px;
    }
  }

  @media (max-width: 360px) {
    padding: 0 10px;

    h2 {
      margin: 18px 0 12px 10px;
      font-size: 18px;
    }
  }
`;function Ll({info:n,title:i,contentType:r}){const s=Array.isArray(n)?n:[];return z.jsxs(I2,{children:[z.jsx("h2",{children:i}),s.length>0?z.jsx(fx,{grabCursor:!0,spaceBetween:20,slidesPerView:"auto",className:"swiper",breakpoints:{320:{spaceBetween:12,slidesPerView:2.2},480:{spaceBetween:16,slidesPerView:2.5},768:{spaceBetween:18,slidesPerView:3.5},1024:{spaceBetween:20,slidesPerView:4.5},1200:{spaceBetween:20,slidesPerView:5.5}},children:s.map((o,c)=>z.jsx(dx,{children:z.jsx(W2,{item:o,contentType:r})},c))}):z.jsx("p",{children:"Carregando..."})]})}const eT=te.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;

  span {
    border: 1px solid #fff;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
    align-items: center;
    justify-content: center;
    display: flex;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    white-space: nowrap;
    font-weight: 500;

    &:hover {
      background: rgba(255, 107, 107, 0.2);
      border-color: #ff6b6b;
      transform: translateY(-1px);
    }
  }

  @media (max-width: 768px) {
    gap: 8px;
    margin-bottom: 16px;
    justify-content: center;

    span {
      padding: 6px 12px;
      font-size: 0.8rem;
      border-radius: 16px;
    }
  }

  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 12px;

    span {
      padding: 5px 10px;
      font-size: 0.75rem;
      border-radius: 12px;
      max-width: calc(50% - 3px);
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media (max-width: 360px) {
    gap: 4px;

    span {
      padding: 4px 8px;
      font-size: 0.7rem;
      border-radius: 10px;
      max-width: calc(50% - 2px);
    }
  }
`;function tT({genres:n}){return z.jsx(eT,{children:n&&n.map(i=>z.jsx("span",{children:i.name},i.id))})}const nT=$l`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`,aT=$l`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,iT=te.div`
  background-image: url(${n=>n.image});
  height: 70vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }

  @media (max-width: 768px) {
    height: 60vh;
    background-position: center top;

    &::before {
      background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.85) 0%,
        rgba(0, 0, 0, 0.5) 50%,
        rgba(0, 0, 0, 0.85) 100%
      );
    }
  }

  @media (max-width: 480px) {
    height: 50vh;
  }
`,lT=te.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1400px;
  margin: -150px auto 0;
  padding: 0 20px;
  position: relative;
  z-index: 3;

  @media (max-width: 1024px) {
    max-width: 1200px;
    margin: -120px auto 0;
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: -80px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    margin-top: -60px;
    padding: 0 12px;
  }
`,rT=te.button`
  position: absolute;
  top: -50px;
  left: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: #ff6b6b;
    transform: translateX(-5px);
  }

  @media (max-width: 768px) {
    top: -40px;
    left: 16px;
    padding: 10px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    top: -30px;
    left: 12px;
    padding: 8px 12px;
    font-size: 0.8rem;
    border-radius: 20px;
  }
`,sT=te.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;

  img {
    border-radius: 20px;
    width: 320px;
    height: auto;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
    animation: ${nT} 0.7s ease-in-out;
    transition: transform 0.3s ease;
    border: 3px solid rgba(255, 255, 255, 0.1);

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 1024px) {
    padding: 16px;

    img {
      width: 280px;
    }
  }

  @media (max-width: 768px) {
    padding: 12px;

    img {
      width: 250px;
      border-radius: 16px;
    }
  }

  @media (max-width: 480px) {
    padding: 8px;

    img {
      width: 200px;
      border-radius: 12px;

      &:hover {
        transform: scale(1.02);
      }
    }
  }
`,oT=te.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  z-index: 3;
  animation: ${aT} 0.8s ease-out;
  max-width: 100%;
  overflow: hidden;

  h1 {
    margin-bottom: 15px;
    font-size: 3.2rem;
    font-weight: 800;
    background: linear-gradient(45deg, #fff, #f0f0f0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
  }

  @media (max-width: 1024px) {
    margin-left: 30px;
    padding: 16px;

    h1 {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
    padding: 16px 0;
    text-align: center;
    max-width: 100%;

    h1 {
      font-size: 2.5rem;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    margin-top: 15px;
    padding: 12px 0;

    h1 {
      font-size: 2rem;
      line-height: 1.1;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`,uT=te.p`
  font-size: 1.3rem;
  color: #ff6b6b;
  font-style: italic;
  margin-bottom: 20px;
  font-weight: 500;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 12px;
  }

  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`,cT=te.div`
  display: flex;
  gap: 25px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 12px;
    justify-content: space-between;

    /* Forçar quebra em 2 linhas se necessário */
    > * {
      flex: 1;
      min-width: calc(50% - 4px);
      max-width: calc(50% - 4px);
    }

    /* Se tiver 3 items, o último ocupa linha inteira */
    > *:nth-child(3) {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }

  @media (max-width: 360px) {
    gap: 6px;

    /* Em telas muito pequenas, cada item em uma linha */
    flex-direction: column;

    > * {
      flex: none;
      min-width: 100%;
      max-width: 100%;
    }
  }
`,fT=te.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 193, 7, 0.2);
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffc107;
  border: 1px solid rgba(255, 193, 7, 0.3);
  white-space: nowrap;
  min-width: 0;
  flex-shrink: 1;
  text-align: center;

  span {
    font-size: 0.9rem;
    color: #ccc;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 1rem;
    border-radius: 16px;

    span {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.9rem;
    border-radius: 12px;
    flex: 1;
    max-width: 140px;

    span {
      font-size: 0.75rem;
      display: none; /* Ocultar contagem de votos em telas muito pequenas */
    }
  }

  @media (max-width: 360px) {
    padding: 5px 8px;
    font-size: 0.8rem;
    max-width: 120px;
  }
`,U0=te.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  white-space: nowrap;
  min-width: 0;
  flex-shrink: 1;
  text-align: center;

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.9rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.8rem;
    border-radius: 12px;
    gap: 4px;

    /* Garantir que a duração não quebre */
    min-width: fit-content;
    flex: 0 0 auto;
  }

  @media (max-width: 360px) {
    padding: 5px 8px;
    font-size: 0.75rem;
    gap: 3px;
  }
`,dT=te.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  white-space: nowrap;
  min-width: 0;
  flex-shrink: 1;
  text-align: center;

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.9rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.8rem;
    border-radius: 12px;
    gap: 4px;

    /* Garantir que a data não quebre */
    min-width: fit-content;
    flex: 0 0 auto;
  }

  @media (max-width: 360px) {
    padding: 5px 8px;
    font-size: 0.75rem;
    gap: 3px;
  }
`,pT=te.p`
  margin: 25px 0;
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: justify;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
  hyphens: auto;

  @media (max-width: 768px) {
    margin: 20px 0;
    font-size: 1rem;
    text-align: left;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    margin: 16px 0;
    font-size: 0.9rem;
    line-height: 1.5;
    text-align: left;
  }

  @media (max-width: 360px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`,hT=te.div`
  display: flex;
  gap: 20px;
  margin: 30px 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 15px;
    margin: 25px 0;
  }

  @media (max-width: 480px) {
    gap: 12px;
    margin: 20px 0;
    flex-direction: column;
    align-items: center;
  }
`,mT=te.button`
  background: linear-gradient(45deg, #ff6b6b, #ee5a52);
  color: white;
  border: none;
  padding: 15px 35px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(255, 107, 107, 0.4);
  }

  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 1rem;
    border-radius: 25px;
  }

  @media (max-width: 480px) {
    padding: 10px 24px;
    font-size: 0.9rem;
    border-radius: 20px;
    width: 100%;
    max-width: 200px;
  }
`,gT=te.button`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 15px 35px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: #ff6b6b;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 1rem;
    border-radius: 25px;
  }

  @media (max-width: 480px) {
    padding: 10px 24px;
    font-size: 0.9rem;
    border-radius: 20px;
    width: 100%;
    max-width: 200px;
  }
`,xT=te.div`
  max-width: 1400px;
  margin: 60px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 1024px) {
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 16px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    margin: 40px auto;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    margin: 30px auto;
    padding: 0 12px;
    gap: 20px;
  }
`,vT=te.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #ff6b6b;
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 16px;

    h3 {
      font-size: 1.3rem;
      margin-bottom: 16px;
    }

    > div {
      gap: 12px;
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 12px;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 12px;
    }

    > div {
      gap: 10px;
    }
  }
`,Ma=te.div`
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;

  strong {
    color: white;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }

  @media (max-width: 360px) {
    font-size: 0.8rem;
    line-height: 1.3;
  }
`,yT=te.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #ff6b6b;
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 15px;

    > div {
      display: flex;
      align-items: center;
      gap: 15px;
      color: #e0e0e0;
      font-weight: 500;
      word-wrap: break-word;
      overflow-wrap: break-word;
      max-width: 100%;

      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 16px;

    h3 {
      font-size: 1.3rem;
      margin-bottom: 16px;
    }

    > div {
      gap: 12px;

      > div {
        gap: 12px;
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 12px;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 12px;
    }

    > div {
      gap: 10px;

      > div {
        gap: 10px;
        font-size: 0.85rem;
        flex-direction: column;
        align-items: flex-start;

        span {
          white-space: normal;
          line-height: 1.3;
        }
      }
    }
  }

  @media (max-width: 360px) {
    padding: 12px;

    h3 {
      font-size: 1.1rem;
    }

    > div > div {
      font-size: 0.8rem;
    }
  }
`,bT=te.div`
  img {
    height: 40px;
    max-width: 120px;
    object-fit: contain;
    filter: brightness(1.2) contrast(1.1);
    background: rgba(255, 255, 255, 0.9);
    padding: 5px 10px;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    img {
      height: 32px;
      max-width: 100px;
      padding: 4px 8px;
      border-radius: 6px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 28px;
      max-width: 80px;
      padding: 3px 6px;
      border-radius: 4px;
    }
  }

  @media (max-width: 360px) {
    img {
      height: 24px;
      max-width: 70px;
    }
  }
`,ST=te.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  color: white;

  .spinner {
    width: 60px;
    height: 60px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top: 4px solid #ff6b6b;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #ccc;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,wT=te.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  color: white;
  text-align: center;
  padding: 20px;

  h2 {
    font-size: 2.5rem;
    color: #ff6b6b;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #ccc;
    margin-bottom: 30px;
  }
`;function Yc(){const{id:n}=Ty(),i=Ni(),r=window.location.pathname,[s,o]=M.useState(null),[c,d]=M.useState([]),[g,p]=M.useState([]),[h,x]=M.useState([]),[v,E]=M.useState(!0),[S,b]=M.useState(null),[A,w]=M.useState(!1),[_,D]=M.useState(!0);M.useEffect(()=>{async function G(){E(!0),b(null);try{const ne=r.includes("/serie/"),P=r.includes("/movie/");if(ne){const[J,I,se,oe]=await Promise.all([of(n),z0(n),C0(n),T0(n)]);if(oe&&oe.id)o(oe),d(J||[]),p(I||[]),x(se||[]),D(!1);else throw new Error("Série não encontrada")}else if(P){const[J,I,se,oe]=await Promise.all([sf(n),S0(n),w0(n),E0(n)]);if(oe&&oe.id)o(oe),d(J||[]),p(I||[]),x(se||[]),D(!0);else throw new Error("Filme não encontrado")}else{let J,I,se,oe,ze,q,W,F;try{if([I,se,oe,J]=await Promise.all([sf(n),S0(n),w0(n),E0(n)]),J&&J.id)o(J),d(I||[]),p(se||[]),x(oe||[]),D(!0);else throw new Error("Movie not found")}catch{try{if([q,W,F,ze]=await Promise.all([of(n),z0(n),C0(n),T0(n)]),ze&&ze.id)o(ze),d(q||[]),p(W||[]),x(F||[]),D(!1);else throw new Error("Content not found")}catch{throw new Error("Conteúdo não encontrado")}}}}catch(ne){b(ne.message)}finally{E(!1)}}n&&G()},[n,r]);const j=G=>{if(!G)return"";const ne=Math.floor(G/60),P=G%60;return`${ne}h ${P}min`},Q=G=>G?new Date(G).toLocaleDateString("pt-BR",{year:"numeric",month:"long",day:"numeric"}):"",$=G=>G?new Intl.NumberFormat("pt-BR",{style:"currency",currency:"USD"}).format(G):"";if(v)return z.jsxs(ST,{children:[z.jsx("div",{className:"spinner"}),z.jsx("p",{children:"Carregando detalhes..."})]});if(S||!s)return z.jsxs(wT,{children:[z.jsx("h2",{children:"😔 Ops!"}),z.jsx("p",{children:S||"Conteúdo não encontrado"}),z.jsx(ef,{onClick:()=>i(-1),children:"Voltar"})]});const U=_?s.title:s.name,B=_?s.release_date:s.first_air_date;return z.jsxs(z.Fragment,{children:[A&&z.jsx(to,{movieId:_?s.id:null,seriesId:_?null:s.id,setShowModal:w}),s.backdrop_path&&z.jsx(iT,{image:jn(s.backdrop_path)}),z.jsxs(lT,{children:[z.jsx(rT,{onClick:()=>i(-1),children:"← Voltar"}),z.jsx(sT,{children:s.poster_path&&z.jsx("img",{src:jn(s.poster_path),alt:U})}),z.jsxs(oT,{children:[z.jsx("h1",{children:U}),s.tagline&&z.jsxs(uT,{children:['"',s.tagline,'"']}),z.jsxs(cT,{children:[z.jsxs(fT,{children:["⭐ ",s.vote_average?.toFixed(1),"/10",z.jsxs("span",{children:["(",s.vote_count," votos)"]})]}),_&&s.runtime&&z.jsxs(U0,{children:["⏱️ ",j(s.runtime)]}),!_&&s.number_of_seasons&&z.jsxs(U0,{children:["📺 ",s.number_of_seasons," temporada",s.number_of_seasons>1?"s":""]}),z.jsxs(dT,{children:["📅 ",Q(B)]})]}),z.jsx(tT,{genres:s.genres}),z.jsx(pT,{children:s.overview}),z.jsxs(hT,{children:[z.jsx(mT,{onClick:()=>i("/"),children:"▶️ Assistir Agora"}),c.length>0&&z.jsx(gT,{onClick:()=>w(!0),children:"🎬 Ver Trailer"})]}),z.jsx(ES,{movieCredits:g})]})]}),z.jsxs(xT,{children:[z.jsxs(vT,{children:[z.jsx("h3",{children:"📊 Informações Detalhadas"}),z.jsxs("div",{children:[z.jsxs(Ma,{children:[z.jsx("strong",{children:"Status:"})," ",s.status]}),z.jsxs(Ma,{children:[z.jsx("strong",{children:"Idioma Original:"})," ",s.original_language?.toUpperCase()]}),_&&z.jsxs(z.Fragment,{children:[z.jsxs(Ma,{children:[z.jsx("strong",{children:"Orçamento:"})," ",s.budget?$(s.budget):"Não informado"]}),z.jsxs(Ma,{children:[z.jsx("strong",{children:"Receita:"})," ",s.revenue?$(s.revenue):"Não informado"]})]}),!_&&z.jsxs(z.Fragment,{children:[z.jsxs(Ma,{children:[z.jsx("strong",{children:"Episódios:"})," ",s.number_of_episodes||"Não informado"]}),z.jsxs(Ma,{children:[z.jsx("strong",{children:"Última exibição:"})," ",s.last_air_date?Q(s.last_air_date):"Não informado"]}),s.networks&&s.networks.length>0&&z.jsxs(Ma,{children:[z.jsx("strong",{children:"Redes:"})," ",s.networks.map(G=>G.name).join(", ")]})]})]})]}),s.production_companies&&s.production_companies.length>0&&z.jsxs(yT,{children:[z.jsx("h3",{children:"🏢 Produção"}),z.jsx("div",{children:s.production_companies.map(G=>z.jsxs("div",{children:[G.logo_path&&z.jsx(bT,{children:z.jsx("img",{src:jn(G.logo_path),alt:G.name,onError:ne=>{ne.target.style.display="none"}})}),z.jsx("span",{children:G.name})]},G.id))})]})]}),h&&h.length>0&&z.jsx(Ll,{info:h,title:_?"Filmes Similares":"Séries Similares",contentType:_?"movie":"series"})]})}const ET=$l`
  from {
    transform: scale(0);
  }
to {
    transform: scale(1);
  }
`,TT=te.div`
  background-image: url(${n=>n.img});
  height: 100dvh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-image: linear-gradient(to top, #000000, rgb(0, 0, 0, 0));
  }

  @media (max-width: 900px) {
    height: 100vh;
    background-position: center top;

    &::before {
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  @media (max-width: 480px) {
    min-height: 100vh;
    padding-top: 80px;

    &::before {
      background-color: rgba(0, 0, 0, 0.75);
    }
  }
`,zT=te.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 1500px;
  max-width: 100%;
  padding: 0 20px;
  gap: 40px;

  @media (max-width: 1200px) {
    width: 100%;
    gap: 30px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    gap: 30px;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 16px;
    gap: 20px;
  }
`,CT=te.div`
  z-index: 2;
  padding: 20px;
  width: 50%;
  flex: 1;

  h1 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
    margin-top: 30px;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 42px;
    }
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 0;
    text-align: center;

    h1 {
      font-size: 36px;
      margin-bottom: 16px;
    }
    p {
      font-size: 16px;
      margin-top: 20px;
      margin-bottom: 16px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 28px;
      line-height: 1.2;
    }
    p {
      font-size: 14px;
      line-height: 1.5;
    }
  }
`,ys=te.section`
  scroll-margin-top: 100px; /* Ajusta o scroll para compensar o header fixo */

  &:first-child {
    scroll-margin-top: 0;
  }
`,AT=te.div`
  z-index: 2;
  flex-shrink: 0;

  img {
    border-radius: 30px;
    width: 300px;
    height: auto;
    animation: ${ET} 0.8s ease-in-out;
    max-width: 100%;
    display: block;
  }

  @media (max-width: 1200px) {
    img {
      width: 250px;
    }
  }

  @media (max-width: 900px) {
    order: -1;

    img {
      width: 200px;
      border-radius: 20px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 160px;
      border-radius: 16px;
    }
  }
`;function OT(){const[n,i]=M.useState(!1),[r,s]=M.useState([]),[o,c]=M.useState([]),[d,g]=M.useState([]),[p,h]=M.useState([]),[x,v]=M.useState([]),E=Ni();return M.useEffect(()=>{async function S(){Promise.all([Ww(),Iw(),eE(),tE(),nE()]).then(([b,A,w,_,D])=>{s(b),c(A),g(w),h(_),v(D)}).catch(b=>console.error(b))}S()},[]),z.jsxs("div",{children:[r&&z.jsx(ys,{id:"home",children:z.jsxs(TT,{img:jn(r.backdrop_path),children:[n&&z.jsx(to,{movieId:r.id,setShowModal:i}),z.jsxs(zT,{children:[z.jsxs(CT,{children:[z.jsx("h1",{children:r.title}),z.jsx("p",{children:r.overview}),z.jsxs("div",{children:[z.jsx(ef,{red:!0,onClick:()=>E(`/detalhe/${r.id}`),children:"Assistir agora"}),z.jsx(ef,{onClick:()=>i(!0),children:"Assistir o trailer"})]})]}),z.jsx(AT,{children:z.jsx("img",{src:jn(r.poster_path),alt:r.title})})]})]})}),z.jsx(ys,{id:"movies",children:o&&o.length>0&&z.jsx(Ll,{info:o,title:"Top Filmes"})}),z.jsxs(ys,{id:"series",children:[d&&d.length>0&&z.jsx(Ll,{info:d,title:"Top Séries"}),p&&p.length>0&&z.jsx(Ll,{info:p,title:"Séries Populares"})]}),z.jsx(ys,{id:"artists",children:x&&x.length>0&&z.jsx(Ll,{info:x,title:"Artistas Populares"})})]})}const _T=$l`
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`,MT=te.div`
  min-height: 100vh;
  padding: 130px 20px 50px;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);

  @media (max-width: 768px) {
    padding: 100px 16px 40px;
  }

  @media (max-width: 480px) {
    padding: 90px 12px 30px;
  }
`,RT=te.div`
  text-align: center;
  margin-bottom: 60px;

  h1 {
    font-size: 3.5rem;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
    background-size: 400% 400%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${_T} 3s ease-in-out infinite;
    margin-bottom: 20px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p {
    font-size: 1.2rem;
    color: #b3b3b3;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 1024px) {
    margin-bottom: 50px;

    h1 {
      font-size: 3rem;
      letter-spacing: 1.5px;
    }

    p {
      font-size: 1.1rem;
      max-width: 500px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;

    h1 {
      font-size: 2.5rem;
      letter-spacing: 1px;
      margin-bottom: 16px;
    }

    p {
      font-size: 1rem;
      max-width: 400px;
      padding: 0 16px;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 30px;

    h1 {
      font-size: 2rem;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
    }

    p {
      font-size: 0.9rem;
      max-width: 300px;
      padding: 0 8px;
      line-height: 1.5;
    }
  }
`,DT=te.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
    margin-bottom: 40px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 30px;
    padding: 0 12px;
  }
`,jT=te.button`
  background: ${n=>n.active?"linear-gradient(45deg, #ff6b6b, #ee5a52)":"rgba(255, 255, 255, 0.1)"};
  color: white;
  border: 2px solid
    ${n=>n.active?"#ff6b6b":"rgba(255, 255, 255, 0.2)"};
  padding: 12px 24px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(45deg, #ff6b6b, #ee5a52);
    border-color: #ff6b6b;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 107, 107, 0.3);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
    border-radius: 25px;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 16px rgba(255, 107, 107, 0.3);
    }
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.8rem;
    border-radius: 20px;
  }
`,NT=te.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 25px;
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    max-width: 100%;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 15px;
    padding: 0 12px;
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`,LT=te.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  cursor: pointer;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    border-color: #ff6b6b;
  }

  @media (max-width: 768px) {
    border-radius: 16px;

    &:hover {
      transform: translateY(-5px) scale(1.01);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 480px) {
    border-radius: 12px;

    &:hover {
      transform: translateY(-3px) scale(1.01);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    }
  }
`,BT=te.div`
  position: relative;
  height: 400px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  }

  @media (max-width: 1024px) {
    height: 360px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 240px;
  }

  @media (max-width: 360px) {
    height: 200px;
  }
`,UT=te.div`
  padding: 20px;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 10px;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    color: #b3b3b3;
    font-size: 0.9rem;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    padding: 16px;

    h3 {
      font-size: 1.1rem;
      margin-bottom: 8px;
    }

    p {
      font-size: 0.8rem;
      -webkit-line-clamp: 2;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;

    h3 {
      font-size: 1rem;
      margin-bottom: 6px;
    }

    p {
      font-size: 0.75rem;
      -webkit-line-clamp: 2;
    }
  }
`,HT=te.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`,GT=te.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(255, 193, 7, 0.2);
  padding: 5px 10px;
  border-radius: 15px;

  span {
    color: #ffc107;
    font-weight: 600;
    font-size: 0.9rem;
  }

  &::before {
    content: '⭐';
    font-size: 0.8rem;
  }
`,qT=te.span`
  color: #888;
  font-size: 0.8rem;
  font-weight: 500;
`,kT=te.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  .spinner {
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-top: 3px solid #ff6b6b;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,YT=te.button`
  display: block;
  margin: 50px auto;
  background: linear-gradient(45deg, #ff6b6b, #ee5a52);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 107, 107, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    margin: 40px auto;
    padding: 12px 32px;
    font-size: 1rem;
    border-radius: 25px;
  }

  @media (max-width: 480px) {
    margin: 30px auto;
    padding: 10px 24px;
    font-size: 0.9rem;
    border-radius: 20px;
  }
`,VT=te.div`
  text-align: center;
  padding: 100px 20px;

  h2 {
    font-size: 2rem;
    color: #666;
    margin-bottom: 20px;
  }

  p {
    color: #888;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 80px 16px;

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 60px 12px;

    h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;function XT(){const[n,i]=M.useState([]),[r,s]=M.useState(!0),[o,c]=M.useState("popular"),[d,g]=M.useState(1),[p,h]=M.useState(1),[x,v]=M.useState(!1),[E]=M.useState(null),[S,b]=M.useState(!1),A=Ni(),w=[{key:"popular",label:"Populares",fetchFunction:aE},{key:"top_rated",label:"Melhores Avaliados",fetchFunction:rE},{key:"now_playing",label:"Em Cartaz",fetchFunction:iE},{key:"upcoming",label:"Em Breve",fetchFunction:lE}],_=async(U,B=1,G=!1)=>{s(!0);try{const P=await w.find(J=>J.key===U).fetchFunction(B);if(P){if(G){const J=n.map(se=>se.id),I=P.results.filter(se=>!J.includes(se.id));I.length>0&&i(se=>[...se,...I])}else i(P.results);h(P.total_pages),g(B)}}catch(ne){console.error("Error fetching movies:",ne)}finally{s(!1)}};M.useEffect(()=>{_(o,1)},[o]);const D=U=>{U!==o&&(c(U),g(1))},j=async()=>{if(d<p&&!r&&!S){b(!0);let U=d+1,B=0;const G=3;let ne=!1;for(;B<G&&U<=p&&!ne;)try{const J=await w.find(I=>I.key===o).fetchFunction(U);if(J&&J.results){const I=new Set(n.map(oe=>oe.id)),se=J.results.filter(oe=>!I.has(oe.id));se.length>0?(i(oe=>[...oe,...se]),g(U),h(J.total_pages),ne=!0):(U++,B++)}else break}catch(P){console.error("Error fetching more movies:",P);break}ne||g(p),b(!1)}},Q=U=>{window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{A(`/detalhe/${U}`)},300)},$=U=>new Date(U).toLocaleDateString("pt-BR");return z.jsxs(MT,{children:[x&&z.jsx(to,{movieId:E,setShowModal:v}),z.jsxs(RT,{children:[z.jsx("h1",{children:"🎬 Filmes"}),z.jsx("p",{children:"Descubra os melhores filmes, desde os mais populares até os clássicos atemporais"})]}),z.jsx(DT,{children:w.map(U=>z.jsx(jT,{active:o===U.key,onClick:()=>D(U.key),children:U.label},U.key))}),r&&n.length===0?z.jsx(kT,{children:z.jsx("div",{className:"spinner"})}):n.length>0?z.jsxs(z.Fragment,{children:[z.jsx(NT,{children:n.map(U=>z.jsxs(LT,{onClick:()=>Q(U.id),children:[z.jsx(BT,{children:z.jsx("img",{src:jn(U.poster_path),alt:U.title,onError:B=>{B.target.src="/placeholder-movie.svg"}})}),z.jsxs(UT,{children:[z.jsx("h3",{children:U.title}),z.jsx("p",{children:U.overview}),z.jsxs(HT,{children:[z.jsx(GT,{children:z.jsx("span",{children:U.vote_average?.toFixed(1)})}),z.jsx(qT,{children:U.release_date&&$(U.release_date)})]})]})]},U.id))}),d<p&&z.jsx(YT,{onClick:j,disabled:r||S,children:r||S?"Carregando...":"Carregar Mais"}),d>=p&&n.length>0&&z.jsxs("div",{style:{textAlign:"center",margin:"50px 0",color:"#888"},children:[z.jsx("p",{children:"🎬 Você explorou todos os filmes desta categoria!"}),z.jsx("p",{children:"Experimente outro filtro para descobrir mais conteúdo."})]})]}):z.jsxs(VT,{children:[z.jsx("h2",{children:"Nenhum filme encontrado"}),z.jsx("p",{children:"Tente selecionar um filtro diferente"})]})]})}const $T=$l`
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`,QT=te.div`
  min-height: 100vh;
  padding: 130px 20px 50px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 100%);

  @media (max-width: 768px) {
    padding: 100px 16px 40px;
  }

  @media (max-width: 480px) {
    padding: 90px 12px 30px;
  }
`,ZT=te.div`
  text-align: center;
  margin-bottom: 60px;

  h1 {
    font-size: 3.5rem;
    background: linear-gradient(45deg, #e74c3c, #8e44ad, #3498db);
    background-size: 400% 400%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${$T} 3s ease-in-out infinite;
    margin-bottom: 20px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p {
    font-size: 1.2rem;
    color: #b3b3b3;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 1024px) {
    margin-bottom: 50px;

    h1 {
      font-size: 3rem;
      letter-spacing: 1.5px;
    }

    p {
      font-size: 1.1rem;
      max-width: 500px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;

    h1 {
      font-size: 2.5rem;
      letter-spacing: 1px;
      margin-bottom: 16px;
    }

    p {
      font-size: 1rem;
      max-width: 400px;
      padding: 0 16px;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 30px;

    h1 {
      font-size: 2rem;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
    }

    p {
      font-size: 0.9rem;
      max-width: 300px;
      padding: 0 8px;
      line-height: 1.5;
    }
  }
`,KT=te.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
    margin-bottom: 40px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 30px;
    padding: 0 12px;
  }
`,FT=te.button`
  background: ${n=>n.active?"linear-gradient(45deg, #e74c3c, #c0392b)":"rgba(255, 255, 255, 0.1)"};
  color: white;
  border: 2px solid
    ${n=>n.active?"#e74c3c":"rgba(255, 255, 255, 0.2)"};
  padding: 12px 24px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(45deg, #e74c3c, #c0392b);
    border-color: #e74c3c;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(231, 76, 60, 0.3);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
    border-radius: 25px;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 16px rgba(231, 76, 60, 0.3);
    }
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.8rem;
    border-radius: 20px;
  }
`,JT=te.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 25px;
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    max-width: 100%;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 15px;
    padding: 0 12px;
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`,PT=te.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  cursor: pointer;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    border-color: #e74c3c;
  }

  @media (max-width: 768px) {
    border-radius: 16px;

    &:hover {
      transform: translateY(-5px) scale(1.01);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 480px) {
    border-radius: 12px;

    &:hover {
      transform: translateY(-3px) scale(1.01);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    }
  }
`,WT=te.div`
  position: relative;
  height: 400px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  }

  @media (max-width: 1024px) {
    height: 360px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 240px;
  }

  @media (max-width: 360px) {
    height: 200px;
  }
`,IT=te.div`
  padding: 20px;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 10px;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    color: #b3b3b3;
    font-size: 0.9rem;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    padding: 16px;

    h3 {
      font-size: 1.1rem;
      margin-bottom: 8px;
    }

    p {
      font-size: 0.8rem;
      -webkit-line-clamp: 2;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;

    h3 {
      font-size: 1rem;
      margin-bottom: 6px;
    }

    p {
      font-size: 0.75rem;
      -webkit-line-clamp: 2;
    }
  }
`,e5=te.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`,t5=te.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(255, 193, 7, 0.2);
  padding: 5px 10px;
  border-radius: 15px;

  span {
    color: #ffc107;
    font-weight: 600;
    font-size: 0.9rem;
  }

  &::before {
    content: '⭐';
    font-size: 0.8rem;
  }
`,n5=te.span`
  color: #888;
  font-size: 0.8rem;
  font-weight: 500;
`,a5=te.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  .spinner {
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-top: 3px solid #e74c3c;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,i5=te.button`
  display: block;
  margin: 50px auto;
  background: linear-gradient(45deg, #e74c3c, #c0392b);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(231, 76, 60, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    margin: 40px auto;
    padding: 12px 32px;
    font-size: 1rem;
    border-radius: 25px;
  }

  @media (max-width: 480px) {
    margin: 30px auto;
    padding: 10px 24px;
    font-size: 0.9rem;
    border-radius: 20px;
  }
`,l5=te.div`
  text-align: center;
  padding: 100px 20px;

  h2 {
    font-size: 2rem;
    color: #666;
    margin-bottom: 20px;
  }

  p {
    color: #888;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 80px 16px;

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 60px 12px;

    h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;function r5(){const[n,i]=M.useState([]),[r,s]=M.useState(!0),[o,c]=M.useState("popular"),[d,g]=M.useState(1),[p,h]=M.useState(1),[x,v]=M.useState(!1),[E]=M.useState(null),[S,b]=M.useState(!1),A=Ni(),w=[{key:"popular",label:"Populares",fetchFunction:uE},{key:"top_rated",label:"Melhores Avaliadas",fetchFunction:cE},{key:"on_the_air",label:"No Ar",fetchFunction:oE},{key:"airing_today",label:"Hoje no Ar",fetchFunction:sE}],_=async(U,B=1,G=!1)=>{s(!0);try{const P=await w.find(J=>J.key===U).fetchFunction(B);if(P){if(G){const J=n.map(se=>se.id),I=P.results.filter(se=>!J.includes(se.id));I.length>0&&i(se=>[...se,...I])}else i(P.results);h(P.total_pages),g(B)}}catch(ne){console.error("Error fetching series:",ne)}finally{s(!1)}};M.useEffect(()=>{_(o,1)},[o]);const D=U=>{U!==o&&(c(U),g(1))},j=async()=>{if(d<p&&!r&&!S){b(!0);let U=d+1,B=0;const G=3;let ne=!1;for(;B<G&&U<=p&&!ne;)try{const J=await w.find(I=>I.key===o).fetchFunction(U);if(J&&J.results){const I=new Set(n.map(oe=>oe.id)),se=J.results.filter(oe=>!I.has(oe.id));se.length>0?(i(oe=>[...oe,...se]),g(U),h(J.total_pages),ne=!0):(U++,B++)}else break}catch(P){console.error("Error fetching more series:",P);break}ne||g(p),b(!1)}},Q=U=>{window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{A(`/serie/${U}`)},300)},$=U=>new Date(U).toLocaleDateString("pt-BR");return z.jsxs(QT,{children:[x&&z.jsx(to,{movieId:E,setShowModal:v}),z.jsxs(ZT,{children:[z.jsx("h1",{children:"📺 Séries"}),z.jsx("p",{children:"Explore o mundo das séries, desde dramas épicos até comédias envolventes"})]}),z.jsx(KT,{children:w.map(U=>z.jsx(FT,{active:o===U.key,onClick:()=>D(U.key),children:U.label},U.key))}),r&&n.length===0?z.jsx(a5,{children:z.jsx("div",{className:"spinner"})}):n.length>0?z.jsxs(z.Fragment,{children:[z.jsx(JT,{children:n.map(U=>z.jsxs(PT,{onClick:()=>Q(U.id),children:[z.jsx(WT,{children:z.jsx("img",{src:jn(U.poster_path),alt:U.name,onError:B=>{B.target.src="/placeholder-movie.svg"}})}),z.jsxs(IT,{children:[z.jsx("h3",{children:U.name}),z.jsx("p",{children:U.overview}),z.jsxs(e5,{children:[z.jsx(t5,{children:z.jsx("span",{children:U.vote_average?.toFixed(1)})}),z.jsx(n5,{children:U.first_air_date&&$(U.first_air_date)})]})]})]},U.id))}),d<p&&z.jsx(i5,{onClick:j,disabled:r||S,children:r||S?"Carregando...":"Carregar Mais"}),d>=p&&n.length>0&&z.jsxs("div",{style:{textAlign:"center",margin:"50px 0",color:"#888"},children:[z.jsx("p",{children:"📺 Você explorou todas as séries desta categoria!"}),z.jsx("p",{children:"Experimente outro filtro para descobrir mais conteúdo."})]})]}):z.jsxs(l5,{children:[z.jsx("h2",{children:"Nenhuma série encontrada"}),z.jsx("p",{children:"Tente selecionar um filtro diferente"})]})]})}const s5="/dev-movies/assets/logo-DSN4WPk8.png",o5=te.div`
  min-height: 15vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;

  background-color: ${n=>n.$changeBackground?"#000000":"transparent"};
  transition: background-color 0.7s ease-in-out;

  img {
    width: 400px;
  }

  @media (max-width: 1024px) {
    min-height: 12vh;
    padding: 12px 15px;

    img {
      width: 300px;
    }
  }

  @media (max-width: 768px) {
    min-height: 10vh;
    padding: 10px 15px;
    flex-direction: column;
    gap: 10px;

    img {
      width: 250px;
    }
  }

  @media (max-width: 480px) {
    min-height: 8vh;
    padding: 8px 10px;

    img {
      width: 200px;
    }
  }
`,u5=te.ul`
  display: flex;
  gap: 50px;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    gap: 25px;
    margin-top: 5px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`,Vc=te.li`
  list-style: none;
  margin-right: 10px;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  &::after {
    content: '';
    display: block;
    margin-top: 3px;
    width: ${n=>n.$isActive?"100%":"0"};
    height: 2px;
    background: linear-gradient(to right, #5036ac, #189b20);
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 1024px) {
    margin-right: 5px;

    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    margin-right: 0;

    a {
      font-size: 0.95rem;
      padding: 8px 12px;
      border-radius: 20px;
      background: ${n=>n.$isActive?"rgba(80, 54, 172, 0.3)":"rgba(255, 255, 255, 0.1)"};
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }

    &:hover a {
      background: rgba(255, 255, 255, 0.2);
    }

    /* Desativar o ::after em mobile já que usamos background no link */
    &::after {
      display: none;
    }

    &:hover::after {
      display: none;
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 0.9rem;
      padding: 6px 10px;
    }
  }
`;te.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ccc;
  }
`;function c5(){const[n,i]=M.useState(!1),[r,s]=M.useState("home"),{pathname:o}=ca();M.useEffect(()=>{const d=()=>{if(window.scrollY>100?i(!0):i(!1),o==="/"){const g=["home","movies","series","artists"],p=window.scrollY+200;for(let h=g.length-1;h>=0;h--){const x=document.getElementById(g[h]);if(x&&x.offsetTop<=p){g[h]==="artists"?s("none"):s(g[h]);break}}}};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[o]);const c=d=>{if(o==="/")return r===d;switch(d){case"home":return o==="/";case"movies":return o==="/movies";case"series":return o==="/series";case"default":return;default:return!1}};return z.jsxs(o5,{$changeBackground:n,children:[z.jsx("img",{src:s5,alt:"Logo-DevMovies"}),z.jsxs(u5,{children:[z.jsx(Vc,{$isActive:c("home"),children:z.jsx(Bl,{to:"/",onClick:()=>o==="/"&&window.scrollTo({top:0,behavior:"smooth"}),children:"Home"})}),z.jsx(Vc,{$isActive:c("movies"),children:z.jsx(Bl,{to:"/movies",children:"Filmes"})}),z.jsx(Vc,{$isActive:c("series"),children:z.jsx(Bl,{to:"/series",children:"Séries"})})]})]})}const f5=te.div`
  display: flex;
  border-top: 1px solid #c3c3c3;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  padding: 10px;
  background-color: #000000;
  color: #c3c3c3;

  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 16px 8px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    padding: 12px 6px;
  }
`,d5=te.p`
  font-size: 13px;
  text-align: center;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    line-height: 1.3;
  }
`;function p5(){return z.jsx(f5,{children:z.jsx(d5,{children:"© 2025 DevMovies - Kássio Barros"})})}function h5(){return z.jsxs(z.Fragment,{children:[z.jsx(c5,{}),z.jsx(Hy,{}),z.jsx(p5,{})]})}function m5(){return z.jsx(qy,{children:z.jsxs(ra,{element:z.jsx(h5,{}),children:[z.jsx(ra,{path:"/",element:z.jsx(OT,{})}),z.jsx(ra,{path:"/movies",element:z.jsx(XT,{})}),z.jsx(ra,{path:"/series",element:z.jsx(r5,{})}),z.jsx(ra,{path:"/detalhe/:id",element:z.jsx(Yc,{})}),z.jsx(ra,{path:"/movie/:id",element:z.jsx(Yc,{})}),z.jsx(ra,{path:"/serie/:id",element:z.jsx(Yc,{})})]})})}const g5=vS`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
    }
    body {
        background: #000000;
         font-family: "Montserrat", sans-serif;
         color: #ffffff;
         overflow-x: hidden;
    }
`;Q1.createRoot(document.getElementById("root")).render(z.jsxs(M.StrictMode,{children:[z.jsx(ub,{basename:"/dev-movies",children:z.jsx(m5,{})}),z.jsx(g5,{})]}));
