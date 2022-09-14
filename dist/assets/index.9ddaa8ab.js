(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function zr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Go="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jo=zr(Go);function Ci(e){return!!e||e===""}function jr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ie(r)?ts(r):jr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ie(e))return e;if(ee(e))return e}}const Qo=/;(?![^(]*\))/g,es=/:(.+)/;function ts(e){const t={};return e.split(Qo).forEach(n=>{if(n){const r=n.split(es);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Dr(e){let t="";if(ie(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Dr(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const W={},yt=[],ke=()=>{},ns=()=>!1,rs=/^on[^a-z]/,Rn=e=>rs.test(e),$r=e=>e.startsWith("onUpdate:"),fe=Object.assign,Hr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},as=Object.prototype.hasOwnProperty,D=(e,t)=>as.call(e,t),R=Array.isArray,zt=e=>zn(e)==="[object Map]",is=e=>zn(e)==="[object Set]",F=e=>typeof e=="function",ie=e=>typeof e=="string",Ur=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",Ei=e=>ee(e)&&F(e.then)&&F(e.catch),os=Object.prototype.toString,zn=e=>os.call(e),ss=e=>zn(e).slice(8,-1),ls=e=>zn(e)==="[object Object]",Br=e=>ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,bn=zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},fs=/-(\w)/g,Ne=jn(e=>e.replace(fs,(t,n)=>n?n.toUpperCase():"")),cs=/\B([A-Z])/g,Ct=jn(e=>e.replace(cs,"-$1").toLowerCase()),Dn=jn(e=>e.charAt(0).toUpperCase()+e.slice(1)),er=jn(e=>e?`on${Dn(e)}`:""),On=(e,t)=>!Object.is(e,t),tr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Cn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},us=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Oa;const ds=()=>Oa||(Oa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ee;class ms{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ee&&(this.parent=Ee,this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ee;try{return Ee=this,t()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ps(e,t=Ee){t&&t.active&&t.effects.push(e)}const Yr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Pi=e=>(e.w&Ze)>0,Ii=e=>(e.n&Ze)>0,hs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},gs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Pi(a)&&!Ii(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},fr=new WeakMap;let Ft=0,Ze=1;const cr=30;let ye;const lt=Symbol(""),ur=Symbol("");class Wr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ps(this,r)}run(){if(!this.active)return this.fn();let t=ye,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ye,ye=this,Xe=!0,Ze=1<<++Ft,Ft<=cr?hs(this):Ca(this),this.fn()}finally{Ft<=cr&&gs(this),Ze=1<<--Ft,ye=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ye===this?this.deferStop=!0:this.active&&(Ca(this),this.onStop&&this.onStop(),this.active=!1)}}function Ca(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const Si=[];function Et(){Si.push(Xe),Xe=!1}function Pt(){const e=Si.pop();Xe=e===void 0?!0:e}function he(e,t,n){if(Xe&&ye){let r=fr.get(e);r||fr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Yr()),Ti(a)}}function Ti(e,t){let n=!1;Ft<=cr?Ii(e)||(e.n|=Ze,n=!Pi(e)):n=!e.has(ye),n&&(e.add(ye),ye.deps.push(e))}function ze(e,t,n,r,a,i){const o=fr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Br(n)&&s.push(o.get("length")):(s.push(o.get(lt)),zt(e)&&s.push(o.get(ur)));break;case"delete":R(e)||(s.push(o.get(lt)),zt(e)&&s.push(o.get(ur)));break;case"set":zt(e)&&s.push(o.get(lt));break}if(s.length===1)s[0]&&dr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);dr(Yr(l))}}function dr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Ea(r);for(const r of n)r.computed||Ea(r)}function Ea(e,t){(e!==ye||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const vs=zr("__proto__,__v_isRef,__isVue"),Ni=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ur)),bs=Kr(),ys=Kr(!1,!0),xs=Kr(!0),Pa=_s();function _s(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)he(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Et();const r=H(this)[t].apply(this,n);return Pt(),r}}),e}function Kr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?zs:zi:t?Ri:Fi).get(r))return r;const o=R(r);if(!e&&o&&D(Pa,a))return Reflect.get(Pa,a,i);const s=Reflect.get(r,a,i);return(Ur(a)?Ni.has(a):vs(a))||(e||he(r,"get",a),t)?s:le(s)?o&&Br(a)?s:s.value:ee(s)?e?ji(s):qr(s):s}}const ws=Mi(),ks=Mi(!0);function Mi(e=!1){return function(n,r,a,i){let o=n[r];if(Ut(o)&&le(o)&&!le(a))return!1;if(!e&&(!mr(a)&&!Ut(a)&&(o=H(o),a=H(a)),!R(n)&&le(o)&&!le(a)))return o.value=a,!0;const s=R(n)&&Br(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?On(a,o)&&ze(n,"set",r,a):ze(n,"add",r,a)),l}}function As(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ze(e,"delete",t,void 0),r}function Os(e,t){const n=Reflect.has(e,t);return(!Ur(t)||!Ni.has(t))&&he(e,"has",t),n}function Cs(e){return he(e,"iterate",R(e)?"length":lt),Reflect.ownKeys(e)}const Li={get:bs,set:ws,deleteProperty:As,has:Os,ownKeys:Cs},Es={get:xs,set(e,t){return!0},deleteProperty(e,t){return!0}},Ps=fe({},Li,{get:ys,set:ks}),Vr=e=>e,$n=e=>Reflect.getPrototypeOf(e);function rn(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(t!==i&&he(a,"get",t),he(a,"get",i));const{has:o}=$n(a),s=r?Vr:n?Jr:Gr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function an(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(e!==a&&he(r,"has",e),he(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function on(e,t=!1){return e=e.__v_raw,!t&&he(H(e),"iterate",lt),Reflect.get(e,"size",e)}function Ia(e){e=H(e);const t=H(this);return $n(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function Sa(e,t){t=H(t);const n=H(this),{has:r,get:a}=$n(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?On(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function Ta(e){const t=H(this),{has:n,get:r}=$n(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function Na(){const e=H(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function sn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?Vr:e?Jr:Gr;return!e&&he(s,"iterate",lt),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function ln(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=zt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Vr:t?Jr:Gr;return!t&&he(i,"iterate",l?ur:lt),{next(){const{value:m,done:v}=u.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function We(e){return function(...t){return e==="delete"?!1:this}}function Is(){const e={get(i){return rn(this,i)},get size(){return on(this)},has:an,add:Ia,set:Sa,delete:Ta,clear:Na,forEach:sn(!1,!1)},t={get(i){return rn(this,i,!1,!0)},get size(){return on(this)},has:an,add:Ia,set:Sa,delete:Ta,clear:Na,forEach:sn(!1,!0)},n={get(i){return rn(this,i,!0)},get size(){return on(this,!0)},has(i){return an.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:sn(!0,!1)},r={get(i){return rn(this,i,!0,!0)},get size(){return on(this,!0)},has(i){return an.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ln(i,!1,!1),n[i]=ln(i,!0,!1),t[i]=ln(i,!1,!0),r[i]=ln(i,!0,!0)}),[e,n,t,r]}const[Ss,Ts,Ns,Ms]=Is();function Xr(e,t){const n=t?e?Ms:Ns:e?Ts:Ss;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const Ls={get:Xr(!1,!1)},Fs={get:Xr(!1,!0)},Rs={get:Xr(!0,!1)},Fi=new WeakMap,Ri=new WeakMap,zi=new WeakMap,zs=new WeakMap;function js(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ds(e){return e.__v_skip||!Object.isExtensible(e)?0:js(ss(e))}function qr(e){return Ut(e)?e:Zr(e,!1,Li,Ls,Fi)}function $s(e){return Zr(e,!1,Ps,Fs,Ri)}function ji(e){return Zr(e,!0,Es,Rs,zi)}function Zr(e,t,n,r,a){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ds(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function xt(e){return Ut(e)?xt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function mr(e){return!!(e&&e.__v_isShallow)}function Di(e){return xt(e)||Ut(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function $i(e){return Cn(e,"__v_skip",!0),e}const Gr=e=>ee(e)?qr(e):e,Jr=e=>ee(e)?ji(e):e;function Hs(e){Xe&&ye&&(e=H(e),Ti(e.dep||(e.dep=Yr())))}function Us(e,t){e=H(e),e.dep&&dr(e.dep)}function le(e){return!!(e&&e.__v_isRef===!0)}function pr(e){return le(e)?e.value:e}const Bs={get:(e,t,n)=>pr(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Hi(e){return xt(e)?e:new Proxy(e,Bs)}var Ui;class Ys{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ui]=!1,this._dirty=!0,this.effect=new Wr(t,()=>{this._dirty||(this._dirty=!0,Us(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return Hs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Ui="__v_isReadonly";function Ws(e,t,n=!1){let r,a;const i=F(e);return i?(r=e,a=ke):(r=e.get,a=e.set),new Ys(r,a,i||!a,n)}function qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Hn(i,t,n)}return a}function Ae(e,t,n,r){if(F(e)){const i=qe(e,t,n,r);return i&&Ei(i)&&i.catch(o=>{Hn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ae(e[i],t,n,r));return a}function Hn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){qe(l,null,10,[e,o,s]);return}}Ks(e,n,a,r)}function Ks(e,t,n,r=!0){console.error(e)}let En=!1,hr=!1;const ae=[];let Ie=0;const _t=[];let Fe=null,at=0;const Bi=Promise.resolve();let Qr=null;function Vs(e){const t=Qr||Bi;return e?t.then(this?e.bind(this):e):t}function Xs(e){let t=Ie+1,n=ae.length;for(;t<n;){const r=t+n>>>1;Bt(ae[r])<e?t=r+1:n=r}return t}function ea(e){(!ae.length||!ae.includes(e,En&&e.allowRecurse?Ie+1:Ie))&&(e.id==null?ae.push(e):ae.splice(Xs(e.id),0,e),Yi())}function Yi(){!En&&!hr&&(hr=!0,Qr=Bi.then(Ki))}function qs(e){const t=ae.indexOf(e);t>Ie&&ae.splice(t,1)}function Zs(e){R(e)?_t.push(...e):(!Fe||!Fe.includes(e,e.allowRecurse?at+1:at))&&_t.push(e),Yi()}function Ma(e,t=Ie){for(;t<ae.length;t++){const n=ae[t];n&&n.pre&&(ae.splice(t,1),t--,n())}}function Wi(e){if(_t.length){const t=[...new Set(_t)];if(_t.length=0,Fe){Fe.push(...t);return}for(Fe=t,Fe.sort((n,r)=>Bt(n)-Bt(r)),at=0;at<Fe.length;at++)Fe[at]();Fe=null,at=0}}const Bt=e=>e.id==null?1/0:e.id,Gs=(e,t)=>{const n=Bt(e)-Bt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ki(e){hr=!1,En=!0,ae.sort(Gs);const t=ke;try{for(Ie=0;Ie<ae.length;Ie++){const n=ae[Ie];n&&n.active!==!1&&qe(n,null,14)}}finally{Ie=0,ae.length=0,Wi(),En=!1,Qr=null,(ae.length||_t.length)&&Ki()}}function Js(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||W;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||W;v&&(a=n.map(k=>k.trim())),m&&(a=n.map(us))}let s,l=r[s=er(t)]||r[s=er(Ne(t))];!l&&i&&(l=r[s=er(Ct(t))]),l&&Ae(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ae(u,e,6,a)}}function Vi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!F(e)){const l=u=>{const d=Vi(u,t,!0);d&&(s=!0,fe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ee(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):fe(o,i),ee(e)&&r.set(e,o),o)}function Un(e,t){return!e||!Rn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,Ct(t))||D(e,t))}let Se=null,Bn=null;function Pn(e){const t=Se;return Se=e,Bn=e&&e.type.__scopeId||null,t}function Qs(e){Bn=e}function el(){Bn=null}function tl(e,t=Se,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ba(-1);const i=Pn(t),o=e(...a);return Pn(i),r._d&&Ba(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function nr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:v,setupState:k,ctx:M,inheritAttrs:z}=e;let T,y;const C=Pn(e);try{if(n.shapeFlag&4){const j=a||r;T=Pe(d.call(j,j,m,i,k,v,M)),y=l}else{const j=t;T=Pe(j.length>1?j(i,{attrs:l,slots:s,emit:u}):j(i,null)),y=t.props?l:nl(l)}}catch(j){jt.length=0,Hn(j,e,1),T=Q(Yt)}let L=T;if(y&&z!==!1){const j=Object.keys(y),{shapeFlag:Y}=L;j.length&&Y&7&&(o&&j.some($r)&&(y=rl(y,o)),L=kt(L,y))}return n.dirs&&(L=kt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),T=L,Pn(C),T}const nl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Rn(n))&&((t||(t={}))[n]=e[n]);return t},rl=(e,t)=>{const n={};for(const r in e)(!$r(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function al(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?La(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Un(u,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?La(r,o,u):!0:!!o;return!1}function La(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Un(n,i))return!0}return!1}function il({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ol=e=>e.__isSuspense;function sl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Zs(e)}function ll(e,t){if(ne){let n=ne.provides;const r=ne.parent&&ne.parent.provides;r===n&&(n=ne.provides=Object.create(r)),n[e]=t}}function rr(e,t,n=!1){const r=ne||Se;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&F(t)?t.call(r.proxy):t}}const Fa={};function yn(e,t,n){return Xi(e,t,n)}function Xi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=W){const s=ne;let l,u=!1,d=!1;if(le(e)?(l=()=>e.value,u=mr(e)):xt(e)?(l=()=>e,r=!0):R(e)?(d=!0,u=e.some(y=>xt(y)||mr(y)),l=()=>e.map(y=>{if(le(y))return y.value;if(xt(y))return gt(y);if(F(y))return qe(y,s,2)})):F(e)?t?l=()=>qe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ae(e,s,3,[v])}:l=ke,t&&r){const y=l;l=()=>gt(y())}let m,v=y=>{m=T.onStop=()=>{qe(y,s,4)}};if(Kt)return v=ke,t?n&&Ae(t,s,3,[l(),d?[]:void 0,v]):l(),ke;let k=d?[]:Fa;const M=()=>{if(!!T.active)if(t){const y=T.run();(r||u||(d?y.some((C,L)=>On(C,k[L])):On(y,k)))&&(m&&m(),Ae(t,s,3,[y,k===Fa?void 0:k,v]),k=y)}else T.run()};M.allowRecurse=!!t;let z;a==="sync"?z=M:a==="post"?z=()=>me(M,s&&s.suspense):(M.pre=!0,s&&(M.id=s.uid),z=()=>ea(M));const T=new Wr(l,z);return t?n?M():k=T.run():a==="post"?me(T.run.bind(T),s&&s.suspense):T.run(),()=>{T.stop(),s&&s.scope&&Hr(s.scope.effects,T)}}function fl(e,t,n){const r=this.proxy,a=ie(e)?e.includes(".")?qi(r,e):()=>r[e]:e.bind(r,r);let i;F(t)?i=t:(i=t.handler,n=t);const o=ne;At(this);const s=Xi(a,i.bind(r),n);return o?At(o):ft(),s}function qi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function gt(e,t){if(!ee(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))gt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)gt(e[n],t);else if(is(e)||zt(e))e.forEach(n=>{gt(n,t)});else if(ls(e))for(const n in e)gt(e[n],t);return e}function It(e){return F(e)?{setup:e,name:e.name}:e}const xn=e=>!!e.type.__asyncLoader,Zi=e=>e.type.__isKeepAlive;function cl(e,t){Gi(e,"a",t)}function ul(e,t){Gi(e,"da",t)}function Gi(e,t,n=ne){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Yn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Zi(a.parent.vnode)&&dl(r,t,n,a),a=a.parent}}function dl(e,t,n,r){const a=Yn(t,e,r,!0);Ji(()=>{Hr(r[t],a)},n)}function Yn(e,t,n=ne,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Et(),At(n);const s=Ae(t,n,e,o);return ft(),Pt(),s});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=ne)=>(!Kt||e==="sp")&&Yn(e,t,n),ml=He("bm"),pl=He("m"),hl=He("bu"),gl=He("u"),vl=He("bum"),Ji=He("um"),bl=He("sp"),yl=He("rtg"),xl=He("rtc");function _l(e,t=ne){Yn("ec",e,t)}function tt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Et(),Ae(l,n,8,[e.el,s,e,t]),Pt())}}const Qi="components";function wl(e,t){return Al(Qi,e,!0,t)||e}const kl=Symbol();function Al(e,t,n=!0,r=!1){const a=Se||ne;if(a){const i=a.type;if(e===Qi){const s=tf(i,!1);if(s&&(s===t||s===Ne(t)||s===Dn(Ne(t))))return i}const o=Ra(a[e]||i[e],t)||Ra(a.appContext[e],t);return!o&&r?i:o}}function Ra(e,t){return e&&(e[t]||e[Ne(t)]||e[Dn(Ne(t))])}const gr=e=>e?po(e)?aa(e)||e.proxy:gr(e.parent):null,In=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>gr(e.parent),$root:e=>gr(e.root),$emit:e=>e.emit,$options:e=>to(e),$forceUpdate:e=>e.f||(e.f=()=>ea(e.update)),$nextTick:e=>e.n||(e.n=Vs.bind(e.proxy)),$watch:e=>fl.bind(e)}),Ol={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==W&&D(r,t))return o[t]=1,r[t];if(a!==W&&D(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&D(u,t))return o[t]=3,i[t];if(n!==W&&D(n,t))return o[t]=4,n[t];vr&&(o[t]=0)}}const d=In[t];let m,v;if(d)return t==="$attrs"&&he(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==W&&D(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,D(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==W&&D(a,t)?(a[t]=n,!0):r!==W&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==W&&D(e,o)||t!==W&&D(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(In,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let vr=!0;function Cl(e){const t=to(e),n=e.proxy,r=e.ctx;vr=!1,t.beforeCreate&&za(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:M,activated:z,deactivated:T,beforeDestroy:y,beforeUnmount:C,destroyed:L,unmounted:j,render:Y,renderTracked:ce,renderTriggered:oe,errorCaptured:Be,serverPrefetch:re,expose:et,inheritAttrs:dt,components:Tt,directives:tn,filters:ya}=t;if(u&&El(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const K=o[Z];F(K)&&(r[Z]=K.bind(n))}if(a){const Z=a.call(n,n);ee(Z)&&(e.data=qr(Z))}if(vr=!0,i)for(const Z in i){const K=i[Z],Me=F(K)?K.bind(n,n):F(K.get)?K.get.bind(n,n):ke,Gn=!F(K)&&F(K.set)?K.set.bind(n):ke,Nt=ve({get:Me,set:Gn});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:mt=>Nt.value=mt})}if(s)for(const Z in s)eo(s[Z],r,n,Z);if(l){const Z=F(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(K=>{ll(K,Z[K])})}d&&za(d,e,"c");function ue(Z,K){R(K)?K.forEach(Me=>Z(Me.bind(n))):K&&Z(K.bind(n))}if(ue(ml,m),ue(pl,v),ue(hl,k),ue(gl,M),ue(cl,z),ue(ul,T),ue(_l,Be),ue(xl,ce),ue(yl,oe),ue(vl,C),ue(Ji,j),ue(bl,re),R(et))if(et.length){const Z=e.exposed||(e.exposed={});et.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:Me=>n[K]=Me})})}else e.exposed||(e.exposed={});Y&&e.render===ke&&(e.render=Y),dt!=null&&(e.inheritAttrs=dt),Tt&&(e.components=Tt),tn&&(e.directives=tn)}function El(e,t,n=ke,r=!1){R(e)&&(e=br(e));for(const a in e){const i=e[a];let o;ee(i)?"default"in i?o=rr(i.from||a,i.default,!0):o=rr(i.from||a):o=rr(i),le(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function za(e,t,n){Ae(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function eo(e,t,n,r){const a=r.includes(".")?qi(n,r):()=>n[r];if(ie(e)){const i=t[e];F(i)&&yn(a,i)}else if(F(e))yn(a,e.bind(n));else if(ee(e))if(R(e))e.forEach(i=>eo(i,t,n,r));else{const i=F(e.handler)?e.handler.bind(n):t[e.handler];F(i)&&yn(a,i,e)}}function to(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>Sn(l,u,o,!0)),Sn(l,t,o)),ee(t)&&i.set(t,l),l}function Sn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Sn(e,i,n,!0),a&&a.forEach(o=>Sn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Pl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Pl={data:ja,props:rt,emits:rt,methods:rt,computed:rt,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:rt,directives:rt,watch:Sl,provide:ja,inject:Il};function ja(e,t){return t?e?function(){return fe(F(e)?e.call(this,this):e,F(t)?t.call(this,this):t)}:t:e}function Il(e,t){return rt(br(e),br(t))}function br(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function se(e,t){return e?[...new Set([].concat(e,t))]:t}function rt(e,t){return e?fe(fe(Object.create(null),e),t):t}function Sl(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=se(e[r],t[r]);return n}function Tl(e,t,n,r=!1){const a={},i={};Cn(i,Wn,1),e.propsDefaults=Object.create(null),no(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:$s(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Nl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Un(e.emitsOptions,v))continue;const k=t[v];if(l)if(D(i,v))k!==i[v]&&(i[v]=k,u=!0);else{const M=Ne(v);a[M]=yr(l,s,M,k,e,!1)}else k!==i[v]&&(i[v]=k,u=!0)}}}else{no(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=Ct(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=yr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],u=!0)}u&&ze(e,"set","$attrs")}function no(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(bn(l))continue;const u=t[l];let d;a&&D(a,d=Ne(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Un(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=H(n),u=s||W;for(let d=0;d<i.length;d++){const m=i[d];n[m]=yr(a,l,m,u[m],e,!D(u,m))}}return o}function yr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&F(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(At(a),r=u[n]=l.call(null,t),ft())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ct(n))&&(r=!0))}return r}function ro(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!F(e)){const d=m=>{l=!0;const[v,k]=ro(m,t,!0);fe(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return ee(e)&&r.set(e,yt),yt;if(R(i))for(let d=0;d<i.length;d++){const m=Ne(i[d]);Da(m)&&(o[m]=W)}else if(i)for(const d in i){const m=Ne(d);if(Da(m)){const v=i[d],k=o[m]=R(v)||F(v)?{type:v}:v;if(k){const M=Ua(Boolean,k.type),z=Ua(String,k.type);k[0]=M>-1,k[1]=z<0||M<z,(M>-1||D(k,"default"))&&s.push(m)}}}const u=[o,s];return ee(e)&&r.set(e,u),u}function Da(e){return e[0]!=="$"}function $a(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ha(e,t){return $a(e)===$a(t)}function Ua(e,t){return R(t)?t.findIndex(n=>Ha(n,e)):F(t)&&Ha(t,e)?0:-1}const ao=e=>e[0]==="_"||e==="$stable",ta=e=>R(e)?e.map(Pe):[Pe(e)],Ml=(e,t,n)=>{if(t._n)return t;const r=tl((...a)=>ta(t(...a)),n);return r._c=!1,r},io=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ao(a))continue;const i=e[a];if(F(i))t[a]=Ml(a,i,r);else if(i!=null){const o=ta(i);t[a]=()=>o}}},oo=(e,t)=>{const n=ta(t);e.slots.default=()=>n},Ll=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),Cn(t,"_",n)):io(t,e.slots={})}else e.slots={},t&&oo(e,t);Cn(e.slots,Wn,1)},Fl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=W;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,io(t,a)),o=t}else t&&(oo(e,t),o={default:1});if(i)for(const s in a)!ao(s)&&!(s in o)&&delete a[s]};function so(){return{app:null,config:{isNativeTag:ns,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rl=0;function zl(e,t){return function(r,a=null){F(r)||(r=Object.assign({},r)),a!=null&&!ee(a)&&(a=null);const i=so(),o=new Set;let s=!1;const l=i.app={_uid:Rl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:rf,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&F(u.install)?(o.add(u),u.install(l,...d)):F(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const v=Q(r,a);return v.appContext=i,d&&t?t(v,u):e(v,u,m),s=!0,l._container=u,u.__vue_app__=l,aa(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function xr(e,t,n,r,a=!1){if(R(e)){e.forEach((v,k)=>xr(v,t&&(R(t)?t[k]:t),n,r,a));return}if(xn(r)&&!a)return;const i=r.shapeFlag&4?aa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===W?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(ie(u)?(d[u]=null,D(m,u)&&(m[u]=null)):le(u)&&(u.value=null)),F(l))qe(l,s,12,[o,d]);else{const v=ie(l),k=le(l);if(v||k){const M=()=>{if(e.f){const z=v?d[l]:l.value;a?R(z)&&Hr(z,i):R(z)?z.includes(i)||z.push(i):v?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,D(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(M.id=-1,me(M,n)):M()}}}const me=sl;function jl(e){return Dl(e)}function Dl(e,t){const n=ds();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=ke,cloneNode:M,insertStaticContent:z}=e,T=(f,c,p,g=null,h=null,_=null,A=!1,x=null,w=!!c.dynamicChildren)=>{if(f===c)return;f&&!Lt(f,c)&&(g=nn(f),Ye(f,h,_,!0),f=null),c.patchFlag===-2&&(w=!1,c.dynamicChildren=null);const{type:b,ref:I,shapeFlag:E}=c;switch(b){case na:y(f,c,p,g);break;case Yt:C(f,c,p,g);break;case _n:f==null&&L(c,p,g,A);break;case Re:tn(f,c,p,g,h,_,A,x,w);break;default:E&1?ce(f,c,p,g,h,_,A,x,w):E&6?ya(f,c,p,g,h,_,A,x,w):(E&64||E&128)&&b.process(f,c,p,g,h,_,A,x,w,pt)}I!=null&&h&&xr(I,f&&f.ref,_,c||f,!c)},y=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},C=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},L=(f,c,p,g)=>{[f.el,f.anchor]=z(f.children,c,p,g,f.el,f.anchor)},j=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=v(f),r(f,p,g),f=h;r(c,p,g)},Y=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=v(f),a(f),f=p;a(c)},ce=(f,c,p,g,h,_,A,x,w)=>{A=A||c.type==="svg",f==null?oe(c,p,g,h,_,A,x,w):et(f,c,h,_,A,x,w)},oe=(f,c,p,g,h,_,A,x)=>{let w,b;const{type:I,props:E,shapeFlag:S,transition:N,patchFlag:$,dirs:U}=f;if(f.el&&M!==void 0&&$===-1)w=f.el=M(f.el);else{if(w=f.el=o(f.type,_,E&&E.is,E),S&8?d(w,f.children):S&16&&re(f.children,w,null,g,h,_&&I!=="foreignObject",A,x),U&&tt(f,null,g,"created"),E){for(const V in E)V!=="value"&&!bn(V)&&i(w,V,null,E[V],_,f.children,g,h,Le);"value"in E&&i(w,"value",null,E.value),(b=E.onVnodeBeforeMount)&&Ce(b,g,f)}Be(w,f,f.scopeId,A,g)}U&&tt(f,null,g,"beforeMount");const B=(!h||h&&!h.pendingBranch)&&N&&!N.persisted;B&&N.beforeEnter(w),r(w,c,p),((b=E&&E.onVnodeMounted)||B||U)&&me(()=>{b&&Ce(b,g,f),B&&N.enter(w),U&&tt(f,null,g,"mounted")},h)},Be=(f,c,p,g,h)=>{if(p&&k(f,p),g)for(let _=0;_<g.length;_++)k(f,g[_]);if(h){let _=h.subTree;if(c===_){const A=h.vnode;Be(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},re=(f,c,p,g,h,_,A,x,w=0)=>{for(let b=w;b<f.length;b++){const I=f[b]=x?Ve(f[b]):Pe(f[b]);T(null,I,c,p,g,h,_,A,x)}},et=(f,c,p,g,h,_,A)=>{const x=c.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:I}=c;w|=f.patchFlag&16;const E=f.props||W,S=c.props||W;let N;p&&nt(p,!1),(N=S.onVnodeBeforeUpdate)&&Ce(N,p,c,f),I&&tt(c,f,p,"beforeUpdate"),p&&nt(p,!0);const $=h&&c.type!=="foreignObject";if(b?dt(f.dynamicChildren,b,x,p,g,$,_):A||Me(f,c,x,null,p,g,$,_,!1),w>0){if(w&16)Tt(x,c,E,S,p,g,h);else if(w&2&&E.class!==S.class&&i(x,"class",null,S.class,h),w&4&&i(x,"style",E.style,S.style,h),w&8){const U=c.dynamicProps;for(let B=0;B<U.length;B++){const V=U[B],be=E[V],ht=S[V];(ht!==be||V==="value")&&i(x,V,be,ht,h,f.children,p,g,Le)}}w&1&&f.children!==c.children&&d(x,c.children)}else!A&&b==null&&Tt(x,c,E,S,p,g,h);((N=S.onVnodeUpdated)||I)&&me(()=>{N&&Ce(N,p,c,f),I&&tt(c,f,p,"updated")},g)},dt=(f,c,p,g,h,_,A)=>{for(let x=0;x<c.length;x++){const w=f[x],b=c[x],I=w.el&&(w.type===Re||!Lt(w,b)||w.shapeFlag&70)?m(w.el):p;T(w,b,I,null,g,h,_,A,!0)}},Tt=(f,c,p,g,h,_,A)=>{if(p!==g){for(const x in g){if(bn(x))continue;const w=g[x],b=p[x];w!==b&&x!=="value"&&i(f,x,b,w,A,c.children,h,_,Le)}if(p!==W)for(const x in p)!bn(x)&&!(x in g)&&i(f,x,p[x],null,A,c.children,h,_,Le);"value"in g&&i(f,"value",p.value,g.value)}},tn=(f,c,p,g,h,_,A,x,w)=>{const b=c.el=f?f.el:s(""),I=c.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:S,slotScopeIds:N}=c;N&&(x=x?x.concat(N):N),f==null?(r(b,p,g),r(I,p,g),re(c.children,p,I,h,_,A,x,w)):E>0&&E&64&&S&&f.dynamicChildren?(dt(f.dynamicChildren,S,p,h,_,A,x),(c.key!=null||h&&c===h.subTree)&&lo(f,c,!0)):Me(f,c,p,I,h,_,A,x,w)},ya=(f,c,p,g,h,_,A,x,w)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,A,w):Zn(c,p,g,h,_,A,w):ue(f,c,w)},Zn=(f,c,p,g,h,_,A)=>{const x=f.component=Zl(f,g,h);if(Zi(f)&&(x.ctx.renderer=pt),Gl(x),x.asyncDep){if(h&&h.registerDep(x,Z),!f.el){const w=x.subTree=Q(Yt);C(null,w,c,p)}return}Z(x,f,c,p,h,_,A)},ue=(f,c,p)=>{const g=c.component=f.component;if(al(f,c,p))if(g.asyncDep&&!g.asyncResolved){K(g,c,p);return}else g.next=c,qs(g.update),g.update();else c.el=f.el,g.vnode=c},Z=(f,c,p,g,h,_,A)=>{const x=()=>{if(f.isMounted){let{next:I,bu:E,u:S,parent:N,vnode:$}=f,U=I,B;nt(f,!1),I?(I.el=$.el,K(f,I,A)):I=$,E&&tr(E),(B=I.props&&I.props.onVnodeBeforeUpdate)&&Ce(B,N,I,$),nt(f,!0);const V=nr(f),be=f.subTree;f.subTree=V,T(be,V,m(be.el),nn(be),f,h,_),I.el=V.el,U===null&&il(f,V.el),S&&me(S,h),(B=I.props&&I.props.onVnodeUpdated)&&me(()=>Ce(B,N,I,$),h)}else{let I;const{el:E,props:S}=c,{bm:N,m:$,parent:U}=f,B=xn(c);if(nt(f,!1),N&&tr(N),!B&&(I=S&&S.onVnodeBeforeMount)&&Ce(I,U,c),nt(f,!0),E&&Qn){const V=()=>{f.subTree=nr(f),Qn(E,f.subTree,f,h,null)};B?c.type.__asyncLoader().then(()=>!f.isUnmounted&&V()):V()}else{const V=f.subTree=nr(f);T(null,V,p,g,f,h,_),c.el=V.el}if($&&me($,h),!B&&(I=S&&S.onVnodeMounted)){const V=c;me(()=>Ce(I,U,V),h)}(c.shapeFlag&256||U&&xn(U.vnode)&&U.vnode.shapeFlag&256)&&f.a&&me(f.a,h),f.isMounted=!0,c=p=g=null}},w=f.effect=new Wr(x,()=>ea(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,nt(f,!0),b()},K=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Nl(f,c.props,g,p),Fl(f,c.children,p),Et(),Ma(),Pt()},Me=(f,c,p,g,h,_,A,x,w=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,E=c.children,{patchFlag:S,shapeFlag:N}=c;if(S>0){if(S&128){Nt(b,E,p,g,h,_,A,x,w);return}else if(S&256){Gn(b,E,p,g,h,_,A,x,w);return}}N&8?(I&16&&Le(b,h,_),E!==b&&d(p,E)):I&16?N&16?Nt(b,E,p,g,h,_,A,x,w):Le(b,h,_,!0):(I&8&&d(p,""),N&16&&re(E,p,g,h,_,A,x,w))},Gn=(f,c,p,g,h,_,A,x,w)=>{f=f||yt,c=c||yt;const b=f.length,I=c.length,E=Math.min(b,I);let S;for(S=0;S<E;S++){const N=c[S]=w?Ve(c[S]):Pe(c[S]);T(f[S],N,p,null,h,_,A,x,w)}b>I?Le(f,h,_,!0,!1,E):re(c,p,g,h,_,A,x,w,E)},Nt=(f,c,p,g,h,_,A,x,w)=>{let b=0;const I=c.length;let E=f.length-1,S=I-1;for(;b<=E&&b<=S;){const N=f[b],$=c[b]=w?Ve(c[b]):Pe(c[b]);if(Lt(N,$))T(N,$,p,null,h,_,A,x,w);else break;b++}for(;b<=E&&b<=S;){const N=f[E],$=c[S]=w?Ve(c[S]):Pe(c[S]);if(Lt(N,$))T(N,$,p,null,h,_,A,x,w);else break;E--,S--}if(b>E){if(b<=S){const N=S+1,$=N<I?c[N].el:g;for(;b<=S;)T(null,c[b]=w?Ve(c[b]):Pe(c[b]),p,$,h,_,A,x,w),b++}}else if(b>S)for(;b<=E;)Ye(f[b],h,_,!0),b++;else{const N=b,$=b,U=new Map;for(b=$;b<=S;b++){const pe=c[b]=w?Ve(c[b]):Pe(c[b]);pe.key!=null&&U.set(pe.key,b)}let B,V=0;const be=S-$+1;let ht=!1,wa=0;const Mt=new Array(be);for(b=0;b<be;b++)Mt[b]=0;for(b=N;b<=E;b++){const pe=f[b];if(V>=be){Ye(pe,h,_,!0);continue}let Oe;if(pe.key!=null)Oe=U.get(pe.key);else for(B=$;B<=S;B++)if(Mt[B-$]===0&&Lt(pe,c[B])){Oe=B;break}Oe===void 0?Ye(pe,h,_,!0):(Mt[Oe-$]=b+1,Oe>=wa?wa=Oe:ht=!0,T(pe,c[Oe],p,null,h,_,A,x,w),V++)}const ka=ht?$l(Mt):yt;for(B=ka.length-1,b=be-1;b>=0;b--){const pe=$+b,Oe=c[pe],Aa=pe+1<I?c[pe+1].el:g;Mt[b]===0?T(null,Oe,p,Aa,h,_,A,x,w):ht&&(B<0||b!==ka[B]?mt(Oe,p,Aa,2):B--)}}},mt=(f,c,p,g,h=null)=>{const{el:_,type:A,transition:x,children:w,shapeFlag:b}=f;if(b&6){mt(f.component.subTree,c,p,g);return}if(b&128){f.suspense.move(c,p,g);return}if(b&64){A.move(f,c,p,pt);return}if(A===Re){r(_,c,p);for(let E=0;E<w.length;E++)mt(w[E],c,p,g);r(f.anchor,c,p);return}if(A===_n){j(f,c,p);return}if(g!==2&&b&1&&x)if(g===0)x.beforeEnter(_),r(_,c,p),me(()=>x.enter(_),h);else{const{leave:E,delayLeave:S,afterLeave:N}=x,$=()=>r(_,c,p),U=()=>{E(_,()=>{$(),N&&N()})};S?S(_,$,U):U()}else r(_,c,p)},Ye=(f,c,p,g=!1,h=!1)=>{const{type:_,props:A,ref:x,children:w,dynamicChildren:b,shapeFlag:I,patchFlag:E,dirs:S}=f;if(x!=null&&xr(x,null,p,f,!0),I&256){c.ctx.deactivate(f);return}const N=I&1&&S,$=!xn(f);let U;if($&&(U=A&&A.onVnodeBeforeUnmount)&&Ce(U,c,f),I&6)Zo(f.component,p,g);else{if(I&128){f.suspense.unmount(p,g);return}N&&tt(f,null,c,"beforeUnmount"),I&64?f.type.remove(f,c,p,h,pt,g):b&&(_!==Re||E>0&&E&64)?Le(b,c,p,!1,!0):(_===Re&&E&384||!h&&I&16)&&Le(w,c,p),g&&xa(f)}($&&(U=A&&A.onVnodeUnmounted)||N)&&me(()=>{U&&Ce(U,c,f),N&&tt(f,null,c,"unmounted")},p)},xa=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===Re){qo(p,g);return}if(c===_n){Y(f);return}const _=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:x}=h,w=()=>A(p,_);x?x(f.el,_,w):w()}else _()},qo=(f,c)=>{let p;for(;f!==c;)p=v(f),a(f),f=p;a(c)},Zo=(f,c,p)=>{const{bum:g,scope:h,update:_,subTree:A,um:x}=f;g&&tr(g),h.stop(),_&&(_.active=!1,Ye(A,f,c,p)),x&&me(x,c),me(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Le=(f,c,p,g=!1,h=!1,_=0)=>{for(let A=_;A<f.length;A++)Ye(f[A],c,p,g,h)},nn=f=>f.shapeFlag&6?nn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),_a=(f,c,p)=>{f==null?c._vnode&&Ye(c._vnode,null,null,!0):T(c._vnode||null,f,c,null,null,null,p),Ma(),Wi(),c._vnode=f},pt={p:T,um:Ye,m:mt,r:xa,mt:Zn,mc:re,pc:Me,pbc:dt,n:nn,o:e};let Jn,Qn;return t&&([Jn,Qn]=t(pt)),{render:_a,hydrate:Jn,createApp:zl(_a,Jn)}}function nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function lo(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ve(a[i]),s.el=o.el),n||lo(o,s))}}function $l(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Hl=e=>e.__isTeleport,Re=Symbol(void 0),na=Symbol(void 0),Yt=Symbol(void 0),_n=Symbol(void 0),jt=[];let _e=null;function fo(e=!1){jt.push(_e=e?null:[])}function Ul(){jt.pop(),_e=jt[jt.length-1]||null}let Wt=1;function Ba(e){Wt+=e}function Bl(e){return e.dynamicChildren=Wt>0?_e||yt:null,Ul(),Wt>0&&_e&&_e.push(e),e}function co(e,t,n,r,a,i){return Bl(J(e,t,n,r,a,i,!0))}function _r(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const Wn="__vInternal",uo=({key:e})=>e!=null?e:null,wn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ie(e)||le(e)||F(e)?{i:Se,r:e,k:t,f:!!n}:e:null;function J(e,t=null,n=null,r=0,a=null,i=e===Re?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&uo(t),ref:t&&wn(t),scopeId:Bn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ra(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ie(n)?8:16),Wt>0&&!o&&_e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_e.push(l),l}const Q=Yl;function Yl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===kl)&&(e=Yt),_r(e)){const s=kt(e,t,!0);return n&&ra(s,n),Wt>0&&!i&&_e&&(s.shapeFlag&6?_e[_e.indexOf(e)]=s:_e.push(s)),s.patchFlag|=-2,s}if(nf(e)&&(e=e.__vccOpts),t){t=Wl(t);let{class:s,style:l}=t;s&&!ie(s)&&(t.class=Dr(s)),ee(l)&&(Di(l)&&!R(l)&&(l=fe({},l)),t.style=jr(l))}const o=ie(e)?1:ol(e)?128:Hl(e)?64:ee(e)?4:F(e)?2:0;return J(e,t,n,r,a,o,i,!0)}function Wl(e){return e?Di(e)||Wn in e?fe({},e):e:null}function kt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Vl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&uo(s),ref:t&&t.ref?n&&a?R(a)?a.concat(wn(t)):[a,wn(t)]:wn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Re?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&kt(e.ssContent),ssFallback:e.ssFallback&&kt(e.ssFallback),el:e.el,anchor:e.anchor}}function Kl(e=" ",t=0){return Q(na,null,e,t)}function mo(e,t){const n=Q(_n,null,e);return n.staticCount=t,n}function Pe(e){return e==null||typeof e=="boolean"?Q(Yt):R(e)?Q(Re,null,e.slice()):typeof e=="object"?Ve(e):Q(na,null,String(e))}function Ve(e){return e.el===null||e.memo?e:kt(e)}function ra(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ra(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Wn in t)?t._ctx=Se:a===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else F(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),r&64?(n=16,t=[Kl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Vl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Dr([t.class,r.class]));else if(a==="style")t.style=jr([t.style,r.style]);else if(Rn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ce(e,t,n,r=null){Ae(e,t,7,[n,r])}const Xl=so();let ql=0;function Zl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Xl,i={uid:ql++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ms(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ro(r,a),emitsOptions:Vi(r,a),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Js.bind(null,i),e.ce&&e.ce(i),i}let ne=null;const At=e=>{ne=e,e.scope.on()},ft=()=>{ne&&ne.scope.off(),ne=null};function po(e){return e.vnode.shapeFlag&4}let Kt=!1;function Gl(e,t=!1){Kt=t;const{props:n,children:r}=e.vnode,a=po(e);Tl(e,n,a,t),Ll(e,r);const i=a?Jl(e,t):void 0;return Kt=!1,i}function Jl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=$i(new Proxy(e.ctx,Ol));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?ef(e):null;At(e),Et();const i=qe(r,e,0,[e.props,a]);if(Pt(),ft(),Ei(i)){if(i.then(ft,ft),t)return i.then(o=>{Ya(e,o,t)}).catch(o=>{Hn(o,e,0)});e.asyncDep=i}else Ya(e,i,t)}else ho(e,t)}function Ya(e,t,n){F(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=Hi(t)),ho(e,n)}let Wa;function ho(e,t,n){const r=e.type;if(!e.render){if(!t&&Wa&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=Wa(a,u)}}e.render=r.render||ke}At(e),Et(),Cl(e),Pt(),ft()}function Ql(e){return new Proxy(e.attrs,{get(t,n){return he(e,"get","$attrs"),t[n]}})}function ef(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ql(e))},slots:e.slots,emit:e.emit,expose:t}}function aa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Hi($i(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in In)return In[n](e)}}))}function tf(e,t=!0){return F(e)?e.displayName||e.name:e.name||t&&e.__name}function nf(e){return F(e)&&"__vccOpts"in e}const ve=(e,t)=>Ws(e,t,Kt);function go(e,t,n){const r=arguments.length;return r===2?ee(t)&&!R(t)?_r(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&_r(n)&&(n=[n]),Q(e,t,n))}const rf="3.2.38",af="http://www.w3.org/2000/svg",it=typeof document<"u"?document:null,Ka=it&&it.createElement("template"),of={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?it.createElementNS(af,e):it.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ka.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ka.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function sf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function lf(e,t,n){const r=e.style,a=ie(n);if(n&&!a){for(const i in n)wr(r,i,n[i]);if(t&&!ie(t))for(const i in t)n[i]==null&&wr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Va=/\s*!important$/;function wr(e,t,n){if(R(n))n.forEach(r=>wr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ff(e,t);Va.test(n)?e.setProperty(Ct(r),n.replace(Va,""),"important"):e[r]=n}}const Xa=["Webkit","Moz","ms"],ar={};function ff(e,t){const n=ar[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return ar[t]=r;r=Dn(r);for(let a=0;a<Xa.length;a++){const i=Xa[a]+r;if(i in e)return ar[t]=i}return t}const qa="http://www.w3.org/1999/xlink";function cf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(qa,t.slice(6,t.length)):e.setAttributeNS(qa,t,n);else{const i=Jo(t);n==null||i&&!Ci(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function uf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ci(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[vo,df]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let kr=0;const mf=Promise.resolve(),pf=()=>{kr=0},hf=()=>kr||(mf.then(pf),kr=vo());function gf(e,t,n,r){e.addEventListener(t,n,r)}function vf(e,t,n,r){e.removeEventListener(t,n,r)}function bf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=yf(t);if(r){const u=i[t]=xf(r,a);gf(e,s,u,l)}else o&&(vf(e,s,o,l),i[t]=void 0)}}const Za=/(?:Once|Passive|Capture)$/;function yf(e){let t;if(Za.test(e)){t={};let r;for(;r=e.match(Za);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ct(e.slice(2)),t]}function xf(e,t){const n=r=>{const a=r.timeStamp||vo();(df||a>=n.attached-1)&&Ae(_f(r,n.value),t,5,[r])};return n.value=e,n.attached=hf(),n}function _f(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ga=/^on[a-z]/,wf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?sf(e,r,a):t==="style"?lf(e,n,r):Rn(t)?$r(t)||bf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):kf(e,t,r,a))?uf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),cf(e,t,r,a))};function kf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ga.test(t)&&F(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ga.test(t)&&ie(n)?!1:t in e}const Af=fe({patchProp:wf},of);let Ja;function Of(){return Ja||(Ja=jl(Af))}const Cf=(...e)=>{const t=Of().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Ef(r);if(!a)return;const i=t._component;!F(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Ef(e){return ie(e)?document.querySelector(e):e}const Pf="/assets/zhao.b1451cf7.png",If=mo('<header class="flex flex-col items-center py-10 mx-auto w-2/4 md:flex-row shrink-0"><div class="flex items-center md:mr-6 shrink-0"><div class="relative w-20 h-20 bg-gray-200 rounded-full"><img src="'+Pf+'" alt="Tan Hong Zhao" class="rounded-full"></div></div><div class="mt-3 text-center md:mt-0"><h1 class="font-bold text-center text-custom-black">Hong Zhao</h1><h1 class="font-normal text-center text-zinc-900">@agentzhao</h1></div></header><section><div class="mx-auto mb-10 w-2/3 text-xl font-bold md:w-3/5"> Hello, I&#39;m Hong Zhao. <br> I&#39;m a Year 2 Computer Science student at NTU, Singapore. <br></div></section>',2),Sf=It({__name:"Header",setup(e){return(t,n)=>If}}),Tf={class:"grid grid-cols-4 mx-auto w-11/12 md:grid-cols-8 md:w-2/3"},Nf={href:"mailto:hi@agentzhao.me?subject=site",target:"_self"},Mf=J("div",{class:"text-sm text-center font-OpenSans"},"Email",-1),Lf={href:"https://github.com/agentzhao",target:"_self"},Ff=J("div",{class:"text-sm text-center font-OpenSans"},"Github",-1),Rf=mo('<a href="https://gitlab.com/agentzhao" target="_self"><svg class="group fill-black icons" width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg"><path class="group-hover:fill-[#E24329] transition-all duration-300 ease-linear" d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"></path><path class="group-hover:fill-[#FC6D26] transition-all duration-300 ease-linear" d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"></path><path class="group-hover:fill-[#FCA326] transition-all duration-300 ease-linear" d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z"></path><path class="group-hover:fill-[#FC6D26] transition-all duration-300 ease-linear" d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z"></path></svg><div class="text-sm text-center font-OpenSans">Gitlab</div></a>',1),zf={href:"https://photos.app.goo.gl/R8gfSH5aNjWGn8aM6",target:"_self"},jf=J("div",{class:"text-sm text-center font-OpenSans"},"Photos",-1),Df={href:"https://www.linkedin.com/in/hong-zhao-tan-50a846137/",target:"_self"},$f=J("div",{class:"text-sm text-center font-OpenSans"},"LinkedIn",-1),Hf={href:"https://instagram.com/agentzhao",target:"_self"},Uf=J("div",{class:"text-sm text-center font-OpenSans"},"Instagram",-1),Bf={href:"https://open.spotify.com/user/jjd65hchonspdrorkbrsed5vt",target:"_self"},Yf=J("div",{class:"text-sm text-center font-OpenSans"},"Spotify",-1),Wf={href:"https://www.youtube.com/channel/UCJyYT2kcQYZ1ALCHpVh7wTw",target:"_self"},Kf=J("div",{class:"text-sm text-center font-OpenSans"},"YouTube",-1),Vf=It({__name:"Links",setup(e){return(t,n)=>{const r=wl("font-awesome-icon");return fo(),co("div",Tf,[J("a",Nf,[Q(r,{class:"icons",icon:"fa-solid fa-envelope",title:"Email"}),Mf]),J("a",Lf,[Q(r,{class:"hover:text-white icons",icon:"fa-brands fa-github",title:"Github"}),Ff]),Rf,J("a",zf,[Q(r,{class:"icons",icon:"fa-solid fa-image",title:"Photos"}),jf]),J("a",Df,[Q(r,{class:"icons hover:text-[#0077B5]",icon:"fa-brands fa-linkedin",title:"LinkedIn"}),$f]),J("a",Hf,[Q(r,{class:"hover:text-[#E1306C] icons",icon:"fa-brands fa-instagram",title:"Instagram"}),Uf]),J("a",Bf,[Q(r,{class:"icons hover:text-[#1DB954]",icon:"fa-brands fa-spotify",title:"Spotify"}),Yf]),J("a",Wf,[Q(r,{class:"hover:text-[#FF0000] icons",icon:"fa-brands fa-youtube",title:"YouTube"}),Kf])])}}}),bo=e=>(Qs("data-v-3888d696"),e=e(),el(),e),Xf={class:"w-full h-screen bg-background-color"},qf={class:"bg-gradient-to-br from-orange-500 via-yellow-500 to-green-500"},Zf={class:"mx-auto w-full md:w-4/5"},Gf=bo(()=>J("svg",{class:"w-full",preserveAspectRatio:"none",viewBox:"600 0 500 74",height:"74"},[J("path",{d:"M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z",class:"fill-background-color"})],-1)),Jf=bo(()=>J("div",{class:"mx-auto w-full md:w-4/5"},null,-1)),Qf=It({__name:"App",setup(e){let t=!1;return(n,r)=>(fo(),co("div",Xf,[J("div",qf,[J("div",Zf,[Q(Sf,{isWank:pr(t)},null,8,["isWank"]),Q(Vf,{isWank:pr(t)},null,8,["isWank"])]),Gf]),Jf]))}});const ec=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},tc=ec(Qf,[["__scopeId","data-v-3888d696"]]);function Qa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qa(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Tn(e){return Tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tn(e)}function nc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ei(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function rc(e,t,n){return t&&ei(e.prototype,t),n&&ei(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ia(e,t){return ic(e)||sc(e,t)||yo(e,t)||fc()}function Jt(e){return ac(e)||oc(e)||yo(e)||lc()}function ac(e){if(Array.isArray(e))return Ar(e)}function ic(e){if(Array.isArray(e))return e}function oc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function yo(e,t){if(!!e){if(typeof e=="string")return Ar(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ar(e,t)}}function Ar(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ti=function(){},oa={},xo={},_o=null,wo={mark:ti,measure:ti};try{typeof window<"u"&&(oa=window),typeof document<"u"&&(xo=document),typeof MutationObserver<"u"&&(_o=MutationObserver),typeof performance<"u"&&(wo=performance)}catch{}var cc=oa.navigator||{},ni=cc.userAgent,ri=ni===void 0?"":ni,Ge=oa,q=xo,ai=_o,fn=wo;Ge.document;var Ue=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",ko=~ri.indexOf("MSIE")||~ri.indexOf("Trident/"),cn,un,dn,mn,pn,je="___FONT_AWESOME___",Or=16,Ao="fa",Oo="svg-inline--fa",ct="data-fa-i2svg",Cr="data-fa-pseudo-element",uc="data-fa-pseudo-element-pending",sa="data-prefix",la="data-icon",ii="fontawesome-i2svg",dc="async",mc=["HTML","HEAD","STYLE","SCRIPT"],Co=function(){try{return!0}catch{return!1}}(),X="classic",G="sharp",fa=[X,G];function Qt(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var Vt=Qt((cn={},te(cn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(cn,G,{fa:"solid",fass:"solid","fa-solid":"solid"}),cn)),Xt=Qt((un={},te(un,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(un,G,{solid:"fass"}),un)),qt=Qt((dn={},te(dn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(dn,G,{fass:"fa-solid"}),dn)),pc=Qt((mn={},te(mn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(mn,G,{"fa-solid":"fass"}),mn)),hc=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Eo="fa-layers-text",gc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,vc=Qt((pn={},te(pn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(pn,G,{900:"fass"}),pn)),Po=[1,2,3,4,5,6,7,8,9,10],bc=Po.concat([11,12,13,14,15,16,17,18,19,20]),yc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zt=new Set;Object.keys(Xt[X]).map(Zt.add.bind(Zt));Object.keys(Xt[G]).map(Zt.add.bind(Zt));var xc=[].concat(fa,Jt(Zt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY]).concat(Po.map(function(e){return"".concat(e,"x")})).concat(bc.map(function(e){return"w-".concat(e)})),Dt=Ge.FontAwesomeConfig||{};function _c(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function wc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var kc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];kc.forEach(function(e){var t=ia(e,2),n=t[0],r=t[1],a=wc(_c(n));a!=null&&(Dt[r]=a)})}var Io={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ao,replacementClass:Oo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Dt.familyPrefix&&(Dt.cssPrefix=Dt.familyPrefix);var Ot=O(O({},Io),Dt);Ot.autoReplaceSvg||(Ot.observeMutations=!1);var P={};Object.keys(Io).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Ot[e]=n,$t.forEach(function(r){return r(P)})},get:function(){return Ot[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Ot.cssPrefix=t,$t.forEach(function(n){return n(P)})},get:function(){return Ot.cssPrefix}});Ge.FontAwesomeConfig=P;var $t=[];function Ac(e){return $t.push(e),function(){$t.splice($t.indexOf(e),1)}}var Ke=Or,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Oc(e){if(!(!e||!Ue)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var Cc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Gt(){for(var e=12,t="";e-- >0;)t+=Cc[Math.random()*62|0];return t}function St(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ca(e){return e.classList?St(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function So(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ec(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(So(e[n]),'" ')},"").trim()}function Kn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ua(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function Pc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Ic(e){var t=e.transform,n=e.width,r=n===void 0?Or:n,a=e.height,i=a===void 0?Or:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ko?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Sc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function To(){var e=Ao,t=Oo,n=P.cssPrefix,r=P.replacementClass,a=Sc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var oi=!1;function ir(){P.autoAddCss&&!oi&&(Oc(To()),oi=!0)}var Tc={mixout:function(){return{dom:{css:To,insertCss:ir}}},hooks:function(){return{beforeDOMElementCreation:function(){ir()},beforeI2svg:function(){ir()}}}},De=Ge||{};De[je]||(De[je]={});De[je].styles||(De[je].styles={});De[je].hooks||(De[je].hooks={});De[je].shims||(De[je].shims=[]);var we=De[je],No=[],Nc=function e(){q.removeEventListener("DOMContentLoaded",e),Nn=1,No.map(function(t){return t()})},Nn=!1;Ue&&(Nn=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Nn||q.addEventListener("DOMContentLoaded",Nc));function Mc(e){!Ue||(Nn?setTimeout(e,0):No.push(e))}function en(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?So(e):"<".concat(t," ").concat(Ec(r),">").concat(i.map(en).join(""),"</").concat(t,">")}function si(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Lc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},or=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Lc(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Fc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Er(e){var t=Fc(e);return t.length===1?t[0].toString(16):null}function Rc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function li(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Pr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=li(t);typeof we.hooks.addPack=="function"&&!a?we.hooks.addPack(e,li(t)):we.styles[e]=O(O({},we.styles[e]||{}),i),e==="fas"&&Pr("fa",t)}var hn,gn,vn,vt=we.styles,zc=we.shims,jc=(hn={},te(hn,X,Object.values(qt[X])),te(hn,G,Object.values(qt[G])),hn),da=null,Mo={},Lo={},Fo={},Ro={},zo={},Dc=(gn={},te(gn,X,Object.keys(Vt[X])),te(gn,G,Object.keys(Vt[G])),gn);function $c(e){return~xc.indexOf(e)}function Hc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!$c(a)?a:null}var jo=function(){var t=function(i){return or(vt,function(o,s,l){return o[l]=or(s,i,{}),o},{})};Mo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Lo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),zo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in vt||P.autoFetchSvg,r=or(zc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Fo=r.names,Ro=r.unicodes,da=Vn(P.styleDefault,{family:P.familyDefault})};Ac(function(e){da=Vn(e.styleDefault,{family:P.familyDefault})});jo();function ma(e,t){return(Mo[e]||{})[t]}function Uc(e,t){return(Lo[e]||{})[t]}function st(e,t){return(zo[e]||{})[t]}function Do(e){return Fo[e]||{prefix:null,iconName:null}}function Bc(e){var t=Ro[e],n=ma("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Je(){return da}var pa=function(){return{prefix:null,iconName:null,rest:[]}};function Vn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=Vt[r][e],i=Xt[r][e]||Xt[r][a],o=e in we.styles?e:null;return i||o||null}var fi=(vn={},te(vn,X,Object.keys(qt[X])),te(vn,G,Object.keys(qt[G])),vn);function Xn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,X,"".concat(P.cssPrefix,"-").concat(X)),te(t,G,"".concat(P.cssPrefix,"-").concat(G)),t),o=null,s=X;(e.includes(i[X])||e.some(function(u){return fi[X].includes(u)}))&&(s=X),(e.includes(i[G])||e.some(function(u){return fi[G].includes(u)}))&&(s=G);var l=e.reduce(function(u,d){var m=Hc(P.cssPrefix,d);if(vt[d]?(d=jc[s].includes(d)?pc[s][d]:d,o=d,u.prefix=d):Dc[s].indexOf(d)>-1?(o=d,u.prefix=Vn(d,{family:s})):m?u.iconName=m:d!==P.replacementClass&&d!==i[X]&&d!==i[G]&&u.rest.push(d),!a&&u.prefix&&u.iconName){var v=o==="fa"?Do(u.iconName):{},k=st(u.prefix,u.iconName);v.prefix&&(o=null),u.iconName=v.iconName||k||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!vt.far&&vt.fas&&!P.autoFetchSvg&&(u.prefix="fas")}return u},pa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===G&&(vt.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=st(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Je()||"fas"),l}var Yc=function(){function e(){nc(this,e),this.definitions={}}return rc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Pr(s,o[s]);var l=qt[X][s];l&&Pr(l,o[s]),jo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),ci=[],bt={},wt={},Wc=Object.keys(wt);function Kc(e,t){var n=t.mixoutsTo;return ci=e,bt={},Object.keys(wt).forEach(function(r){Wc.indexOf(r)===-1&&delete wt[r]}),ci.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Tn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){bt[o]||(bt[o]=[]),bt[o].push(i[o])})}r.provides&&r.provides(wt)}),n}function Ir(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=bt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ut(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=bt[e]||[];a.forEach(function(i){i.apply(null,n)})}function $e(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return wt[e]?wt[e].apply(null,t):void 0}function Sr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Je();if(!!t)return t=st(n,t)||t,si($o.definitions,n,t)||si(we.styles,n,t)}var $o=new Yc,Vc=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,ut("noAuto")},Xc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ue?(ut("beforeI2svg",t),$e("pseudoElements2svg",t),$e("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Mc(function(){Zc({autoReplaceSvgRoot:n}),ut("watch",t)})}},qc={icon:function(t){if(t===null)return null;if(Tn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:st(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Vn(t[0]);return{prefix:r,iconName:st(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(hc))){var a=Xn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Je(),iconName:st(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Je();return{prefix:i,iconName:st(i,t)||t}}}},ge={noAuto:Vc,config:P,dom:Xc,parse:qc,library:$o,findIconDefinition:Sr,toHtml:en},Zc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(we.styles).length>0||P.autoFetchSvg)&&Ue&&P.autoReplaceSvg&&ge.dom.i2svg({node:r})};function qn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return en(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ue){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Gc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ua(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Kn(O(O({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Jc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function ha(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,M=r.found?r:n,z=M.width,T=M.height,y=a==="fak",C=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(re){return m.classes.indexOf(re)===-1}).filter(function(re){return re!==""||!!re}).concat(m.classes).join(" "),L={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(T)})},j=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(z/T*16*.0625,"em")}:{};k&&(L.attributes[ct]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(d||Gt())},children:[l]}),delete L.attributes.title);var Y=O(O({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:O(O({},j),m.styles)}),ce=r.found&&n.found?$e("generateAbstractMask",Y)||{children:[],attributes:{}}:$e("generateAbstractIcon",Y)||{children:[],attributes:{}},oe=ce.children,Be=ce.attributes;return Y.children=oe,Y.attributes=Be,s?Jc(Y):Gc(Y)}function ui(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[ct]="");var d=O({},o.styles);ua(a)&&(d.transform=Ic({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Kn(d);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Qc(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Kn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var sr=we.styles;function Tr(e){var t=e[0],n=e[1],r=e.slice(4),a=ia(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var eu={found:!1,width:512,height:512};function tu(e,t){!Co&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Nr(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Je()),new Promise(function(r,a){if($e("missingIconAbstract"),n==="fa"){var i=Do(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&sr[t]&&sr[t][e]){var o=sr[t][e];return r(Tr(o))}tu(e,t),r(O(O({},eu),{},{icon:P.showMissingIcons&&e?$e("missingIconAbstract")||{}:{}}))})}var di=function(){},Mr=P.measurePerformance&&fn&&fn.mark&&fn.measure?fn:{mark:di,measure:di},Rt='FA "6.2.0"',nu=function(t){return Mr.mark("".concat(Rt," ").concat(t," begins")),function(){return Ho(t)}},Ho=function(t){Mr.mark("".concat(Rt," ").concat(t," ends")),Mr.measure("".concat(Rt," ").concat(t),"".concat(Rt," ").concat(t," begins"),"".concat(Rt," ").concat(t," ends"))},ga={begin:nu,end:Ho},kn=function(){};function mi(e){var t=e.getAttribute?e.getAttribute(ct):null;return typeof t=="string"}function ru(e){var t=e.getAttribute?e.getAttribute(sa):null,n=e.getAttribute?e.getAttribute(la):null;return t&&n}function au(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function iu(){if(P.autoReplaceSvg===!0)return An.replace;var e=An[P.autoReplaceSvg];return e||An.replace}function ou(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function su(e){return q.createElement(e)}function Uo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ou:su:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Uo(o,{ceFn:r}))}),a}function lu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var An={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Uo(a),n)}),n.getAttribute(ct)===null&&P.keepOriginalSource){var r=q.createComment(lu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ca(n).indexOf(P.replacementClass))return An.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return en(s)}).join(`
`);n.setAttribute(ct,""),n.innerHTML=o}};function pi(e){e()}function Bo(e,t){var n=typeof t=="function"?t:kn;if(e.length===0)n();else{var r=pi;P.mutateApproach===dc&&(r=Ge.requestAnimationFrame||pi),r(function(){var a=iu(),i=ga.begin("mutate");e.map(a),i(),n()})}}var va=!1;function Yo(){va=!0}function Lr(){va=!1}var Mn=null;function hi(e){if(!!ai&&!!P.observeMutations){var t=e.treeCallback,n=t===void 0?kn:t,r=e.nodeCallback,a=r===void 0?kn:r,i=e.pseudoElementsCallback,o=i===void 0?kn:i,s=e.observeMutationsRoot,l=s===void 0?q:s;Mn=new ai(function(u){if(!va){var d=Je();St(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!mi(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&mi(m.target)&&~yc.indexOf(m.attributeName))if(m.attributeName==="class"&&ru(m.target)){var v=Xn(ca(m.target)),k=v.prefix,M=v.iconName;m.target.setAttribute(sa,k||d),M&&m.target.setAttribute(la,M)}else au(m.target)&&a(m.target)})}}),Ue&&Mn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fu(){!Mn||Mn.disconnect()}function cu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function uu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Xn(ca(e));return a.prefix||(a.prefix=Je()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Uc(a.prefix,e.innerText)||ma(a.prefix,Er(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function du(e){var t=St(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Gt()):(t["aria-hidden"]="true",t.focusable="false")),t}function mu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=uu(e),r=n.iconName,a=n.prefix,i=n.rest,o=du(e),s=Ir("parseNodeAttributes",{},e),l=t.styleParser?cu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var pu=we.styles;function Wo(e){var t=P.autoReplaceSvg==="nest"?gi(e,{styleParser:!1}):gi(e);return~t.extra.classes.indexOf(Eo)?$e("generateLayersText",e,t):$e("generateSvgReplacementMutation",e,t)}var Qe=new Set;fa.map(function(e){Qe.add("fa-".concat(e))});Object.keys(Vt[X]).map(Qe.add.bind(Qe));Object.keys(Vt[G]).map(Qe.add.bind(Qe));Qe=Jt(Qe);function vi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ue)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(ii,"-").concat(m))},a=function(m){return n.remove("".concat(ii,"-").concat(m))},i=P.autoFetchSvg?Qe:fa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(pu));i.includes("fa")||i.push("fa");var o=[".".concat(Eo,":not([").concat(ct,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ct,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=St(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ga.begin("onTree"),u=s.reduce(function(d,m){try{var v=Wo(m);v&&d.push(v)}catch(k){Co||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(v){Bo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function hu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wo(e).then(function(n){n&&Bo([n],t)})}function gu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Sr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Sr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var vu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Te:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,v=m===void 0?null:m,k=n.titleId,M=k===void 0?null:k,z=n.classes,T=z===void 0?[]:z,y=n.attributes,C=y===void 0?{}:y,L=n.styles,j=L===void 0?{}:L;if(!!t){var Y=t.prefix,ce=t.iconName,oe=t.icon;return qn(O({type:"icon"},t),function(){return ut("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(v?C["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(M||Gt()):(C["aria-hidden"]="true",C.focusable="false")),ha({icons:{main:Tr(oe),mask:l?Tr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:ce,transform:O(O({},Te),a),symbol:o,title:v,maskId:d,titleId:M,extra:{attributes:C,styles:j,classes:T}})})}},bu={mixout:function(){return{icon:gu(vu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vi,n.nodeCallback=hu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return vi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,M){Promise.all([Nr(a,s),d.iconName?Nr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var T=ia(z,2),y=T[0],C=T[1];k([n,ha({icons:{main:y,mask:C},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(M)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Kn(s);l.length>0&&(a.style=l);var u;return ua(o)&&(u=$e("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},yu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return qn({type:"layer"},function(){ut("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(Jt(i)).join(" ")},children:o}]})}}}},xu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return qn({type:"counter",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),Qc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(Jt(s))}})})}}}},_u={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Te:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return qn({type:"text",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),ui({content:n,transform:O(O({},Te),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(P.cssPrefix,"-layers-text")].concat(Jt(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ko){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ui({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},wu=new RegExp('"',"ug"),bi=[1105920,1112319];function ku(e){var t=e.replace(wu,""),n=Rc(t,0),r=n>=bi[0]&&n<=bi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Er(a?t[0]:t),isSecondary:r||a}}function yi(e,t){var n="".concat(uc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=St(e.children),o=i.filter(function(oe){return oe.getAttribute(Cr)===t})[0],s=Ge.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(gc),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?G:X,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Xt[v][l[2].toLowerCase()]:vc[v][u],M=ku(m),z=M.value,T=M.isSecondary,y=l[0].startsWith("FontAwesome"),C=ma(k,z),L=C;if(y){var j=Bc(z);j.iconName&&j.prefix&&(C=j.iconName,k=j.prefix)}if(C&&!T&&(!o||o.getAttribute(sa)!==k||o.getAttribute(la)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var Y=mu(),ce=Y.extra;ce.attributes[Cr]=t,Nr(C,k).then(function(oe){var Be=ha(O(O({},Y),{},{icons:{main:oe,mask:pa()},prefix:k,iconName:L,extra:ce,watchable:!0})),re=q.createElement("svg");t==="::before"?e.insertBefore(re,e.firstChild):e.appendChild(re),re.outerHTML=Be.map(function(et){return en(et)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Au(e){return Promise.all([yi(e,"::before"),yi(e,"::after")])}function Ou(e){return e.parentNode!==document.head&&!~mc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Cr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function xi(e){if(!!Ue)return new Promise(function(t,n){var r=St(e.querySelectorAll("*")).filter(Ou).map(Au),a=ga.begin("searchPseudoElements");Yo(),Promise.all(r).then(function(){a(),Lr(),t()}).catch(function(){a(),Lr(),n()})})}var Cu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=xi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;P.searchPseudoElements&&xi(a)}}},_i=!1,Eu={mixout:function(){return{dom:{unwatch:function(){Yo(),_i=!0}}}},hooks:function(){return{bootstrap:function(){hi(Ir("mutationObserverCallbacks",{}))},noAuto:function(){fu()},watch:function(n){var r=n.observeMutationsRoot;_i?Lr():hi(Ir("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},wi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Pu={mixout:function(){return{parse:{transform:function(n){return wi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=wi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},lr={x:0,y:0,width:"100%",height:"100%"};function ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Iu(e){return e.tag==="g"?e.children:[e]}var Su={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Xn(a.split(" ").map(function(o){return o.trim()})):pa();return i.prefix||(i.prefix=Je()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,v=o.icon,k=Pc({transform:l,containerWidth:m,iconWidth:u}),M={tag:"rect",attributes:O(O({},lr),{},{fill:"white"})},z=d.children?{children:d.children.map(ki)}:{},T={tag:"g",attributes:O({},k.inner),children:[ki(O({tag:d.tag,attributes:O(O({},d.attributes),k.path)},z))]},y={tag:"g",attributes:O({},k.outer),children:[T]},C="mask-".concat(s||Gt()),L="clip-".concat(s||Gt()),j={tag:"mask",attributes:O(O({},lr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,y]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Iu(v)},j]};return r.push(Y,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(C,")")},lr)}),{children:r,attributes:a}}}},Tu={provides:function(t){var n=!1;Ge.matchMedia&&(n=Ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Nu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Mu=[Tc,bu,yu,xu,_u,Cu,Eu,Pu,Su,Tu,Nu];Kc(Mu,{mixoutsTo:ge});ge.noAuto;var Ko=ge.config,Lu=ge.library;ge.dom;var Ln=ge.parse;ge.findIconDefinition;ge.toHtml;var Fu=ge.icon;ge.layer;var Ru=ge.text;ge.counter;function Ai(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ai(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ai(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fn(e){return Fn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fn(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function ju(e,t){if(e==null)return{};var n=zu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Fr(e){return Du(e)||$u(e)||Hu(e)||Uu()}function Du(e){if(Array.isArray(e))return Rr(e)}function $u(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hu(e,t){if(!!e){if(typeof e=="string")return Rr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rr(e,t)}}function Rr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Uu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vo={exports:{}};(function(e){(function(t){var n=function(y,C,L){if(!u(C)||m(C)||v(C)||k(C)||l(C))return C;var j,Y=0,ce=0;if(d(C))for(j=[],ce=C.length;Y<ce;Y++)j.push(n(y,C[Y],L));else{j={};for(var oe in C)Object.prototype.hasOwnProperty.call(C,oe)&&(j[y(oe,L)]=n(y,C[oe],L))}return j},r=function(y,C){C=C||{};var L=C.separator||"_",j=C.split||/(?=[A-Z])/;return y.split(j).join(L)},a=function(y){return M(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(C,L){return L?L.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var C=a(y);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(y,C){return r(y,C).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},k=function(y){return s.call(y)=="[object Boolean]"},M=function(y){return y=y-0,y===y},z=function(y,C){var L=C&&"process"in C?C.process:C;return typeof L!="function"?y:function(j,Y){return L(j,y,Y)}},T={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,C){return n(z(a,C),y)},decamelizeKeys:function(y,C){return n(z(o,C),y,C)},pascalizeKeys:function(y,C){return n(z(i,C),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(Bu)})(Vo);var Yu=Vo.exports,Wu=["class","style"];function Ku(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Yu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Vu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ba(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ba(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=Vu(d);break;case"style":l.style=Ku(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=ju(n,Wu);return go(e.tag,xe(xe(xe({},t),{},{class:a.class,style:xe(xe({},a.style),o)},a.attrs),s),r)}var Xo=!1;try{Xo=!0}catch{}function Xu(){if(!Xo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ht(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?de({},e,t):{}}function qu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},de(t,"fa-".concat(e.size),e.size!==null),de(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),de(t,"fa-pull-".concat(e.pull),e.pull!==null),de(t,"fa-swap-opacity",e.swapOpacity),de(t,"fa-bounce",e.bounce),de(t,"fa-shake",e.shake),de(t,"fa-beat",e.beat),de(t,"fa-fade",e.fade),de(t,"fa-beat-fade",e.beatFade),de(t,"fa-flash",e.flash),de(t,"fa-spin-pulse",e.spinPulse),de(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Oi(e){if(e&&Fn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ln.icon)return Ln.icon(e);if(e===null)return null;if(Fn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Zu=It({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return Oi(t.icon)}),i=ve(function(){return Ht("classes",qu(t))}),o=ve(function(){return Ht("transform",typeof t.transform=="string"?Ln.transform(t.transform):t.transform)}),s=ve(function(){return Ht("mask",Oi(t.mask))}),l=ve(function(){return Fu(a.value,xe(xe(xe(xe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});yn(l,function(d){if(!d)return Xu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=ve(function(){return l.value?ba(l.value.abstract[0],{},r):null});return function(){return u.value}}});It({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Ko.familyPrefix,i=ve(function(){return["".concat(a,"-layers")].concat(Fr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return go("div",{class:i.value},r.default?r.default():[])}}});It({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Ko.familyPrefix,i=ve(function(){return Ht("classes",[].concat(Fr(t.counter?["".concat(a,"-layers-counter")]:[]),Fr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ve(function(){return Ht("transform",typeof t.transform=="string"?Ln.transform(t.transform):t.transform)}),s=ve(function(){var u=Ru(t.value.toString(),xe(xe({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return ba(s.value,{},r)});return function(){return l.value}}});var Gu={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z"]},Ju={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Qu={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"]},ed={prefix:"fab",iconName:"gitlab",icon:[512,512,[],"f296","M503.5 204.6L502.8 202.8L433.1 21.02C431.7 17.45 429.2 14.43 425.9 12.38C423.5 10.83 420.8 9.865 417.9 9.57C415 9.275 412.2 9.653 409.5 10.68C406.8 11.7 404.4 13.34 402.4 15.46C400.5 17.58 399.1 20.13 398.3 22.9L351.3 166.9H160.8L113.7 22.9C112.9 20.13 111.5 17.59 109.6 15.47C107.6 13.35 105.2 11.72 102.5 10.7C99.86 9.675 96.98 9.295 94.12 9.587C91.26 9.878 88.51 10.83 86.08 12.38C82.84 14.43 80.33 17.45 78.92 21.02L9.267 202.8L8.543 204.6C-1.484 230.8-2.72 259.6 5.023 286.6C12.77 313.5 29.07 337.3 51.47 354.2L51.74 354.4L52.33 354.8L158.3 434.3L210.9 474L242.9 498.2C246.6 500.1 251.2 502.5 255.9 502.5C260.6 502.5 265.2 500.1 268.9 498.2L300.9 474L353.5 434.3L460.2 354.4L460.5 354.1C482.9 337.2 499.2 313.5 506.1 286.6C514.7 259.6 513.5 230.8 503.5 204.6z"]},td={prefix:"fab",iconName:"spotify",icon:[496,512,[],"f1bc","M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},nd={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},rd={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},ad={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},id={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};Lu.add(Ju,Gu,Qu,rd,ed,ad,id,td,nd);Cf(tc).component("font-awesome-icon",Zu).mount("#app");
