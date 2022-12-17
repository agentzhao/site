(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Rr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Qo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",es=Rr(Qo);function Pi(e){return!!e||e===""}function jr(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ie(r)?rs(r):jr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ie(e))return e;if(ee(e))return e}}const ts=/;(?![^(]*\))/g,ns=/:(.+)/;function rs(e){const t={};return e.split(ts).forEach(n=>{if(n){const r=n.split(ns);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Dr(e){let t="";if(ie(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=Dr(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const K={},yt=[],ke=()=>{},as=()=>!1,is=/^on[^a-z]/,Rn=e=>is.test(e),$r=e=>e.startsWith("onUpdate:"),fe=Object.assign,Hr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},os=Object.prototype.hasOwnProperty,D=(e,t)=>os.call(e,t),z=Array.isArray,Rt=e=>jn(e)==="[object Map]",ss=e=>jn(e)==="[object Set]",F=e=>typeof e=="function",ie=e=>typeof e=="string",Ur=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",Ii=e=>ee(e)&&F(e.then)&&F(e.catch),ls=Object.prototype.toString,jn=e=>ls.call(e),fs=e=>jn(e).slice(8,-1),cs=e=>jn(e)==="[object Object]",Br=e=>ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,bn=Rr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},us=/-(\w)/g,Ne=Dn(e=>e.replace(us,(t,n)=>n?n.toUpperCase():"")),ds=/\B([A-Z])/g,Ct=Dn(e=>e.replace(ds,"-$1").toLowerCase()),$n=Dn(e=>e.charAt(0).toUpperCase()+e.slice(1)),tr=Dn(e=>e?`on${$n(e)}`:""),Cn=(e,t)=>!Object.is(e,t),nr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},En=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ms=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ea;const ps=()=>Ea||(Ea=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ee;class hs{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ee&&(this.parent=Ee,this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ee;try{return Ee=this,t()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function gs(e,t=Ee){t&&t.active&&t.effects.push(e)}const Yr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Si=e=>(e.w&Ze)>0,Ti=e=>(e.n&Ze)>0,vs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},bs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Si(a)&&!Ti(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},cr=new WeakMap;let Ft=0,Ze=1;const ur=30;let ye;const lt=Symbol(""),dr=Symbol("");class Wr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,gs(this,r)}run(){if(!this.active)return this.fn();let t=ye,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ye,ye=this,Xe=!0,Ze=1<<++Ft,Ft<=ur?vs(this):Pa(this),this.fn()}finally{Ft<=ur&&bs(this),Ze=1<<--Ft,ye=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ye===this?this.deferStop=!0:this.active&&(Pa(this),this.onStop&&this.onStop(),this.active=!1)}}function Pa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const Ni=[];function Et(){Ni.push(Xe),Xe=!1}function Pt(){const e=Ni.pop();Xe=e===void 0?!0:e}function he(e,t,n){if(Xe&&ye){let r=cr.get(e);r||cr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Yr()),Mi(a)}}function Mi(e,t){let n=!1;Ft<=ur?Ti(e)||(e.n|=Ze,n=!Si(e)):n=!e.has(ye),n&&(e.add(ye),ye.deps.push(e))}function Re(e,t,n,r,a,i){const o=cr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&z(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":z(e)?Br(n)&&s.push(o.get("length")):(s.push(o.get(lt)),Rt(e)&&s.push(o.get(dr)));break;case"delete":z(e)||(s.push(o.get(lt)),Rt(e)&&s.push(o.get(dr)));break;case"set":Rt(e)&&s.push(o.get(lt));break}if(s.length===1)s[0]&&mr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);mr(Yr(l))}}function mr(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&Ia(r);for(const r of n)r.computed||Ia(r)}function Ia(e,t){(e!==ye||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ys=Rr("__proto__,__v_isRef,__isVue"),Li=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ur)),xs=Kr(),_s=Kr(!1,!0),ws=Kr(!0),Sa=ks();function ks(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)he(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Et();const r=U(this)[t].apply(this,n);return Pt(),r}}),e}function Kr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ds:Di:t?ji:Ri).get(r))return r;const o=z(r);if(!e&&o&&D(Sa,a))return Reflect.get(Sa,a,i);const s=Reflect.get(r,a,i);return(Ur(a)?Li.has(a):ys(a))||(e||he(r,"get",a),t)?s:le(s)?o&&Br(a)?s:s.value:ee(s)?e?$i(s):qr(s):s}}const As=Fi(),Os=Fi(!0);function Fi(e=!1){return function(n,r,a,i){let o=n[r];if(Ut(o)&&le(o)&&!le(a))return!1;if(!e&&(!pr(a)&&!Ut(a)&&(o=U(o),a=U(a)),!z(n)&&le(o)&&!le(a)))return o.value=a,!0;const s=z(n)&&Br(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Cn(a,o)&&Re(n,"set",r,a):Re(n,"add",r,a)),l}}function Cs(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Re(e,"delete",t,void 0),r}function Es(e,t){const n=Reflect.has(e,t);return(!Ur(t)||!Li.has(t))&&he(e,"has",t),n}function Ps(e){return he(e,"iterate",z(e)?"length":lt),Reflect.ownKeys(e)}const zi={get:xs,set:As,deleteProperty:Cs,has:Es,ownKeys:Ps},Is={get:ws,set(e,t){return!0},deleteProperty(e,t){return!0}},Ss=fe({},zi,{get:_s,set:Os}),Vr=e=>e,Hn=e=>Reflect.getPrototypeOf(e);function rn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&he(a,"get",t),he(a,"get",i));const{has:o}=Hn(a),s=r?Vr:n?Jr:Gr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function an(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&he(r,"has",e),he(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function on(e,t=!1){return e=e.__v_raw,!t&&he(U(e),"iterate",lt),Reflect.get(e,"size",e)}function Ta(e){e=U(e);const t=U(this);return Hn(t).has.call(t,e)||(t.add(e),Re(t,"add",e,e)),this}function Na(e,t){t=U(t);const n=U(this),{has:r,get:a}=Hn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Cn(t,o)&&Re(n,"set",e,t):Re(n,"add",e,t),this}function Ma(e){const t=U(this),{has:n,get:r}=Hn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Re(t,"delete",e,void 0),i}function La(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Re(e,"clear",void 0,void 0),n}function sn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Vr:e?Jr:Gr;return!e&&he(s,"iterate",lt),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function ln(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=Rt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Vr:t?Jr:Gr;return!t&&he(i,"iterate",l?dr:lt),{next(){const{value:m,done:v}=u.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function We(e){return function(...t){return e==="delete"?!1:this}}function Ts(){const e={get(i){return rn(this,i)},get size(){return on(this)},has:an,add:Ta,set:Na,delete:Ma,clear:La,forEach:sn(!1,!1)},t={get(i){return rn(this,i,!1,!0)},get size(){return on(this)},has:an,add:Ta,set:Na,delete:Ma,clear:La,forEach:sn(!1,!0)},n={get(i){return rn(this,i,!0)},get size(){return on(this,!0)},has(i){return an.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:sn(!0,!1)},r={get(i){return rn(this,i,!0,!0)},get size(){return on(this,!0)},has(i){return an.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ln(i,!1,!1),n[i]=ln(i,!0,!1),t[i]=ln(i,!1,!0),r[i]=ln(i,!0,!0)}),[e,n,t,r]}const[Ns,Ms,Ls,Fs]=Ts();function Xr(e,t){const n=t?e?Fs:Ls:e?Ms:Ns;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const zs={get:Xr(!1,!1)},Rs={get:Xr(!1,!0)},js={get:Xr(!0,!1)},Ri=new WeakMap,ji=new WeakMap,Di=new WeakMap,Ds=new WeakMap;function $s(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hs(e){return e.__v_skip||!Object.isExtensible(e)?0:$s(fs(e))}function qr(e){return Ut(e)?e:Zr(e,!1,zi,zs,Ri)}function Us(e){return Zr(e,!1,Ss,Rs,ji)}function $i(e){return Zr(e,!0,Is,js,Di)}function Zr(e,t,n,r,a){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Hs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function xt(e){return Ut(e)?xt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function pr(e){return!!(e&&e.__v_isShallow)}function Hi(e){return xt(e)||Ut(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Ui(e){return En(e,"__v_skip",!0),e}const Gr=e=>ee(e)?qr(e):e,Jr=e=>ee(e)?$i(e):e;function Bs(e){Xe&&ye&&(e=U(e),Mi(e.dep||(e.dep=Yr())))}function Ys(e,t){e=U(e),e.dep&&mr(e.dep)}function le(e){return!!(e&&e.__v_isRef===!0)}function yn(e){return le(e)?e.value:e}const Ws={get:(e,t,n)=>yn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Bi(e){return xt(e)?e:new Proxy(e,Ws)}var Yi;class Ks{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Yi]=!1,this._dirty=!0,this.effect=new Wr(t,()=>{this._dirty||(this._dirty=!0,Ys(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Bs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Yi="__v_isReadonly";function Vs(e,t,n=!1){let r,a;const i=F(e);return i?(r=e,a=ke):(r=e.get,a=e.set),new Ks(r,a,i||!a,n)}function qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Un(i,t,n)}return a}function Ae(e,t,n,r){if(F(e)){const i=qe(e,t,n,r);return i&&Ii(i)&&i.catch(o=>{Un(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ae(e[i],t,n,r));return a}function Un(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){qe(l,null,10,[e,o,s]);return}}Xs(e,n,a,r)}function Xs(e,t,n,r=!0){console.error(e)}let Pn=!1,hr=!1;const ae=[];let Ie=0;const _t=[];let Fe=null,at=0;const Wi=Promise.resolve();let Qr=null;function qs(e){const t=Qr||Wi;return e?t.then(this?e.bind(this):e):t}function Zs(e){let t=Ie+1,n=ae.length;for(;t<n;){const r=t+n>>>1;Bt(ae[r])<e?t=r+1:n=r}return t}function ea(e){(!ae.length||!ae.includes(e,Pn&&e.allowRecurse?Ie+1:Ie))&&(e.id==null?ae.push(e):ae.splice(Zs(e.id),0,e),Ki())}function Ki(){!Pn&&!hr&&(hr=!0,Qr=Wi.then(Xi))}function Gs(e){const t=ae.indexOf(e);t>Ie&&ae.splice(t,1)}function Js(e){z(e)?_t.push(...e):(!Fe||!Fe.includes(e,e.allowRecurse?at+1:at))&&_t.push(e),Ki()}function Fa(e,t=Ie){for(;t<ae.length;t++){const n=ae[t];n&&n.pre&&(ae.splice(t,1),t--,n())}}function Vi(e){if(_t.length){const t=[...new Set(_t)];if(_t.length=0,Fe){Fe.push(...t);return}for(Fe=t,Fe.sort((n,r)=>Bt(n)-Bt(r)),at=0;at<Fe.length;at++)Fe[at]();Fe=null,at=0}}const Bt=e=>e.id==null?1/0:e.id,Qs=(e,t)=>{const n=Bt(e)-Bt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Xi(e){hr=!1,Pn=!0,ae.sort(Qs);const t=ke;try{for(Ie=0;Ie<ae.length;Ie++){const n=ae[Ie];n&&n.active!==!1&&qe(n,null,14)}}finally{Ie=0,ae.length=0,Vi(),Pn=!1,Qr=null,(ae.length||_t.length)&&Xi()}}function el(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||K;v&&(a=n.map(k=>k.trim())),m&&(a=n.map(ms))}let s,l=r[s=tr(t)]||r[s=tr(Ne(t))];!l&&i&&(l=r[s=tr(Ct(t))]),l&&Ae(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ae(u,e,6,a)}}function qi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!F(e)){const l=u=>{const d=qi(u,t,!0);d&&(s=!0,fe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ee(e)&&r.set(e,null),null):(z(i)?i.forEach(l=>o[l]=null):fe(o,i),ee(e)&&r.set(e,o),o)}function Bn(e,t){return!e||!Rn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,Ct(t))||D(e,t))}let Se=null,Yn=null;function In(e){const t=Se;return Se=e,Yn=e&&e.type.__scopeId||null,t}function tl(e){Yn=e}function nl(){Yn=null}function rl(e,t=Se,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Wa(-1);const i=In(t),o=e(...a);return In(i),r._d&&Wa(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function rr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:v,setupState:k,ctx:M,inheritAttrs:R}=e;let T,y;const C=In(e);try{if(n.shapeFlag&4){const j=a||r;T=Pe(d.call(j,j,m,i,k,v,M)),y=l}else{const j=t;T=Pe(j.length>1?j(i,{attrs:l,slots:s,emit:u}):j(i,null)),y=t.props?l:al(l)}}catch(j){jt.length=0,Un(j,e,1),T=G(Yt)}let L=T;if(y&&R!==!1){const j=Object.keys(y),{shapeFlag:W}=L;j.length&&W&7&&(o&&j.some($r)&&(y=il(y,o)),L=kt(L,y))}return n.dirs&&(L=kt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),T=L,In(C),T}const al=e=>{let t;for(const n in e)(n==="class"||n==="style"||Rn(n))&&((t||(t={}))[n]=e[n]);return t},il=(e,t)=>{const n={};for(const r in e)(!$r(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ol(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?za(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Bn(u,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?za(r,o,u):!0:!!o;return!1}function za(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Bn(n,i))return!0}return!1}function sl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ll=e=>e.__isSuspense;function fl(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):Js(e)}function cl(e,t){if(ne){let n=ne.provides;const r=ne.parent&&ne.parent.provides;r===n&&(n=ne.provides=Object.create(r)),n[e]=t}}function ar(e,t,n=!1){const r=ne||Se;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&F(t)?t.call(r.proxy):t}}const Ra={};function xn(e,t,n){return Zi(e,t,n)}function Zi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=ne;let l,u=!1,d=!1;if(le(e)?(l=()=>e.value,u=pr(e)):xt(e)?(l=()=>e,r=!0):z(e)?(d=!0,u=e.some(y=>xt(y)||pr(y)),l=()=>e.map(y=>{if(le(y))return y.value;if(xt(y))return gt(y);if(F(y))return qe(y,s,2)})):F(e)?t?l=()=>qe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ae(e,s,3,[v])}:l=ke,t&&r){const y=l;l=()=>gt(y())}let m,v=y=>{m=T.onStop=()=>{qe(y,s,4)}};if(Kt)return v=ke,t?n&&Ae(t,s,3,[l(),d?[]:void 0,v]):l(),ke;let k=d?[]:Ra;const M=()=>{if(!!T.active)if(t){const y=T.run();(r||u||(d?y.some((C,L)=>Cn(C,k[L])):Cn(y,k)))&&(m&&m(),Ae(t,s,3,[y,k===Ra?void 0:k,v]),k=y)}else T.run()};M.allowRecurse=!!t;let R;a==="sync"?R=M:a==="post"?R=()=>me(M,s&&s.suspense):(M.pre=!0,s&&(M.id=s.uid),R=()=>ea(M));const T=new Wr(l,R);return t?n?M():k=T.run():a==="post"?me(T.run.bind(T),s&&s.suspense):T.run(),()=>{T.stop(),s&&s.scope&&Hr(s.scope.effects,T)}}function ul(e,t,n){const r=this.proxy,a=ie(e)?e.includes(".")?Gi(r,e):()=>r[e]:e.bind(r,r);let i;F(t)?i=t:(i=t.handler,n=t);const o=ne;At(this);const s=Zi(a,i.bind(r),n);return o?At(o):ft(),s}function Gi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function gt(e,t){if(!ee(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))gt(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)gt(e[n],t);else if(ss(e)||Rt(e))e.forEach(n=>{gt(n,t)});else if(cs(e))for(const n in e)gt(e[n],t);return e}function It(e){return F(e)?{setup:e,name:e.name}:e}const _n=e=>!!e.type.__asyncLoader,Ji=e=>e.type.__isKeepAlive;function dl(e,t){Qi(e,"a",t)}function ml(e,t){Qi(e,"da",t)}function Qi(e,t,n=ne){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Wn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ji(a.parent.vnode)&&pl(r,t,n,a),a=a.parent}}function pl(e,t,n,r){const a=Wn(t,e,r,!0);eo(()=>{Hr(r[t],a)},n)}function Wn(e,t,n=ne,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Et(),At(n);const s=Ae(t,n,e,o);return ft(),Pt(),s});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=ne)=>(!Kt||e==="sp")&&Wn(e,t,n),hl=He("bm"),gl=He("m"),vl=He("bu"),bl=He("u"),yl=He("bum"),eo=He("um"),xl=He("sp"),_l=He("rtg"),wl=He("rtc");function kl(e,t=ne){Wn("ec",e,t)}function tt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Et(),Ae(l,n,8,[e.el,s,e,t]),Pt())}}const to="components";function no(e,t){return Ol(to,e,!0,t)||e}const Al=Symbol();function Ol(e,t,n=!0,r=!1){const a=Se||ne;if(a){const i=a.type;if(e===to){const s=tf(i,!1);if(s&&(s===t||s===Ne(t)||s===$n(Ne(t))))return i}const o=ja(a[e]||i[e],t)||ja(a.appContext[e],t);return!o&&r?i:o}}function ja(e,t){return e&&(e[t]||e[Ne(t)]||e[$n(Ne(t))])}const gr=e=>e?go(e)?oa(e)||e.proxy:gr(e.parent):null,Sn=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>gr(e.parent),$root:e=>gr(e.root),$emit:e=>e.emit,$options:e=>ao(e),$forceUpdate:e=>e.f||(e.f=()=>ea(e.update)),$nextTick:e=>e.n||(e.n=qs.bind(e.proxy)),$watch:e=>ul.bind(e)}),Cl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==K&&D(r,t))return o[t]=1,r[t];if(a!==K&&D(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&D(u,t))return o[t]=3,i[t];if(n!==K&&D(n,t))return o[t]=4,n[t];vr&&(o[t]=0)}}const d=Sn[t];let m,v;if(d)return t==="$attrs"&&he(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&D(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,D(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==K&&D(a,t)?(a[t]=n,!0):r!==K&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&D(e,o)||t!==K&&D(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(Sn,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let vr=!0;function El(e){const t=ao(e),n=e.proxy,r=e.ctx;vr=!1,t.beforeCreate&&Da(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:M,activated:R,deactivated:T,beforeDestroy:y,beforeUnmount:C,destroyed:L,unmounted:j,render:W,renderTracked:ce,renderTriggered:oe,errorCaptured:Be,serverPrefetch:re,expose:et,inheritAttrs:dt,components:Tt,directives:tn,filters:_a}=t;if(u&&Pl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const V=o[J];F(V)&&(r[J]=V.bind(n))}if(a){const J=a.call(n,n);ee(J)&&(e.data=qr(J))}if(vr=!0,i)for(const J in i){const V=i[J],Me=F(V)?V.bind(n,n):F(V.get)?V.get.bind(n,n):ke,Jn=!F(V)&&F(V.set)?V.set.bind(n):ke,Nt=ve({get:Me,set:Jn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:mt=>Nt.value=mt})}if(s)for(const J in s)ro(s[J],r,n,J);if(l){const J=F(l)?l.call(n):l;Reflect.ownKeys(J).forEach(V=>{cl(V,J[V])})}d&&Da(d,e,"c");function ue(J,V){z(V)?V.forEach(Me=>J(Me.bind(n))):V&&J(V.bind(n))}if(ue(hl,m),ue(gl,v),ue(vl,k),ue(bl,M),ue(dl,R),ue(ml,T),ue(kl,Be),ue(wl,ce),ue(_l,oe),ue(yl,C),ue(eo,j),ue(xl,re),z(et))if(et.length){const J=e.exposed||(e.exposed={});et.forEach(V=>{Object.defineProperty(J,V,{get:()=>n[V],set:Me=>n[V]=Me})})}else e.exposed||(e.exposed={});W&&e.render===ke&&(e.render=W),dt!=null&&(e.inheritAttrs=dt),Tt&&(e.components=Tt),tn&&(e.directives=tn)}function Pl(e,t,n=ke,r=!1){z(e)&&(e=br(e));for(const a in e){const i=e[a];let o;ee(i)?"default"in i?o=ar(i.from||a,i.default,!0):o=ar(i.from||a):o=ar(i),le(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Da(e,t,n){Ae(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ro(e,t,n,r){const a=r.includes(".")?Gi(n,r):()=>n[r];if(ie(e)){const i=t[e];F(i)&&xn(a,i)}else if(F(e))xn(a,e.bind(n));else if(ee(e))if(z(e))e.forEach(i=>ro(i,t,n,r));else{const i=F(e.handler)?e.handler.bind(n):t[e.handler];F(i)&&xn(a,i,e)}}function ao(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>Tn(l,u,o,!0)),Tn(l,t,o)),ee(t)&&i.set(t,l),l}function Tn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Tn(e,i,n,!0),a&&a.forEach(o=>Tn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Il[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Il={data:$a,props:rt,emits:rt,methods:rt,computed:rt,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:rt,directives:rt,watch:Tl,provide:$a,inject:Sl};function $a(e,t){return t?e?function(){return fe(F(e)?e.call(this,this):e,F(t)?t.call(this,this):t)}:t:e}function Sl(e,t){return rt(br(e),br(t))}function br(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function se(e,t){return e?[...new Set([].concat(e,t))]:t}function rt(e,t){return e?fe(fe(Object.create(null),e),t):t}function Tl(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=se(e[r],t[r]);return n}function Nl(e,t,n,r=!1){const a={},i={};En(i,Kn,1),e.propsDefaults=Object.create(null),io(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Us(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Ml(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Bn(e.emitsOptions,v))continue;const k=t[v];if(l)if(D(i,v))k!==i[v]&&(i[v]=k,u=!0);else{const M=Ne(v);a[M]=yr(l,s,M,k,e,!1)}else k!==i[v]&&(i[v]=k,u=!0)}}}else{io(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=Ct(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=yr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],u=!0)}u&&Re(e,"set","$attrs")}function io(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(bn(l))continue;const u=t[l];let d;a&&D(a,d=Ne(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Bn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=U(n),u=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=yr(a,l,m,u[m],e,!D(u,m))}}return o}function yr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&F(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(At(a),r=u[n]=l.call(null,t),ft())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ct(n))&&(r=!0))}return r}function oo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!F(e)){const d=m=>{l=!0;const[v,k]=oo(m,t,!0);fe(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return ee(e)&&r.set(e,yt),yt;if(z(i))for(let d=0;d<i.length;d++){const m=Ne(i[d]);Ha(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Ne(d);if(Ha(m)){const v=i[d],k=o[m]=z(v)||F(v)?{type:v}:v;if(k){const M=Ya(Boolean,k.type),R=Ya(String,k.type);k[0]=M>-1,k[1]=R<0||M<R,(M>-1||D(k,"default"))&&s.push(m)}}}const u=[o,s];return ee(e)&&r.set(e,u),u}function Ha(e){return e[0]!=="$"}function Ua(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ba(e,t){return Ua(e)===Ua(t)}function Ya(e,t){return z(t)?t.findIndex(n=>Ba(n,e)):F(t)&&Ba(t,e)?0:-1}const so=e=>e[0]==="_"||e==="$stable",ta=e=>z(e)?e.map(Pe):[Pe(e)],Ll=(e,t,n)=>{if(t._n)return t;const r=rl((...a)=>ta(t(...a)),n);return r._c=!1,r},lo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(so(a))continue;const i=e[a];if(F(i))t[a]=Ll(a,i,r);else if(i!=null){const o=ta(i);t[a]=()=>o}}},fo=(e,t)=>{const n=ta(t);e.slots.default=()=>n},Fl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),En(t,"_",n)):lo(t,e.slots={})}else e.slots={},t&&fo(e,t);En(e.slots,Kn,1)},zl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,lo(t,a)),o=t}else t&&(fo(e,t),o={default:1});if(i)for(const s in a)!so(s)&&!(s in o)&&delete a[s]};function co(){return{app:null,config:{isNativeTag:as,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rl=0;function jl(e,t){return function(r,a=null){F(r)||(r=Object.assign({},r)),a!=null&&!ee(a)&&(a=null);const i=co(),o=new Set;let s=!1;const l=i.app={_uid:Rl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:rf,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&F(u.install)?(o.add(u),u.install(l,...d)):F(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const v=G(r,a);return v.appContext=i,d&&t?t(v,u):e(v,u,m),s=!0,l._container=u,u.__vue_app__=l,oa(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function xr(e,t,n,r,a=!1){if(z(e)){e.forEach((v,k)=>xr(v,t&&(z(t)?t[k]:t),n,r,a));return}if(_n(r)&&!a)return;const i=r.shapeFlag&4?oa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(ie(u)?(d[u]=null,D(m,u)&&(m[u]=null)):le(u)&&(u.value=null)),F(l))qe(l,s,12,[o,d]);else{const v=ie(l),k=le(l);if(v||k){const M=()=>{if(e.f){const R=v?d[l]:l.value;a?z(R)&&Hr(R,i):z(R)?R.includes(i)||R.push(i):v?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,D(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(M.id=-1,me(M,n)):M()}}}const me=fl;function Dl(e){return $l(e)}function $l(e,t){const n=ps();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=ke,cloneNode:M,insertStaticContent:R}=e,T=(f,c,p,g=null,h=null,_=null,A=!1,x=null,w=!!c.dynamicChildren)=>{if(f===c)return;f&&!Lt(f,c)&&(g=nn(f),Ye(f,h,_,!0),f=null),c.patchFlag===-2&&(w=!1,c.dynamicChildren=null);const{type:b,ref:I,shapeFlag:E}=c;switch(b){case na:y(f,c,p,g);break;case Yt:C(f,c,p,g);break;case wn:f==null&&L(c,p,g,A);break;case ze:tn(f,c,p,g,h,_,A,x,w);break;default:E&1?ce(f,c,p,g,h,_,A,x,w):E&6?_a(f,c,p,g,h,_,A,x,w):(E&64||E&128)&&b.process(f,c,p,g,h,_,A,x,w,pt)}I!=null&&h&&xr(I,f&&f.ref,_,c||f,!c)},y=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},C=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},L=(f,c,p,g)=>{[f.el,f.anchor]=R(f.children,c,p,g,f.el,f.anchor)},j=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=v(f),r(f,p,g),f=h;r(c,p,g)},W=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=v(f),a(f),f=p;a(c)},ce=(f,c,p,g,h,_,A,x,w)=>{A=A||c.type==="svg",f==null?oe(c,p,g,h,_,A,x,w):et(f,c,h,_,A,x,w)},oe=(f,c,p,g,h,_,A,x)=>{let w,b;const{type:I,props:E,shapeFlag:S,transition:N,patchFlag:$,dirs:B}=f;if(f.el&&M!==void 0&&$===-1)w=f.el=M(f.el);else{if(w=f.el=o(f.type,_,E&&E.is,E),S&8?d(w,f.children):S&16&&re(f.children,w,null,g,h,_&&I!=="foreignObject",A,x),B&&tt(f,null,g,"created"),E){for(const X in E)X!=="value"&&!bn(X)&&i(w,X,null,E[X],_,f.children,g,h,Le);"value"in E&&i(w,"value",null,E.value),(b=E.onVnodeBeforeMount)&&Ce(b,g,f)}Be(w,f,f.scopeId,A,g)}B&&tt(f,null,g,"beforeMount");const Y=(!h||h&&!h.pendingBranch)&&N&&!N.persisted;Y&&N.beforeEnter(w),r(w,c,p),((b=E&&E.onVnodeMounted)||Y||B)&&me(()=>{b&&Ce(b,g,f),Y&&N.enter(w),B&&tt(f,null,g,"mounted")},h)},Be=(f,c,p,g,h)=>{if(p&&k(f,p),g)for(let _=0;_<g.length;_++)k(f,g[_]);if(h){let _=h.subTree;if(c===_){const A=h.vnode;Be(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},re=(f,c,p,g,h,_,A,x,w=0)=>{for(let b=w;b<f.length;b++){const I=f[b]=x?Ve(f[b]):Pe(f[b]);T(null,I,c,p,g,h,_,A,x)}},et=(f,c,p,g,h,_,A)=>{const x=c.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:I}=c;w|=f.patchFlag&16;const E=f.props||K,S=c.props||K;let N;p&&nt(p,!1),(N=S.onVnodeBeforeUpdate)&&Ce(N,p,c,f),I&&tt(c,f,p,"beforeUpdate"),p&&nt(p,!0);const $=h&&c.type!=="foreignObject";if(b?dt(f.dynamicChildren,b,x,p,g,$,_):A||Me(f,c,x,null,p,g,$,_,!1),w>0){if(w&16)Tt(x,c,E,S,p,g,h);else if(w&2&&E.class!==S.class&&i(x,"class",null,S.class,h),w&4&&i(x,"style",E.style,S.style,h),w&8){const B=c.dynamicProps;for(let Y=0;Y<B.length;Y++){const X=B[Y],be=E[X],ht=S[X];(ht!==be||X==="value")&&i(x,X,be,ht,h,f.children,p,g,Le)}}w&1&&f.children!==c.children&&d(x,c.children)}else!A&&b==null&&Tt(x,c,E,S,p,g,h);((N=S.onVnodeUpdated)||I)&&me(()=>{N&&Ce(N,p,c,f),I&&tt(c,f,p,"updated")},g)},dt=(f,c,p,g,h,_,A)=>{for(let x=0;x<c.length;x++){const w=f[x],b=c[x],I=w.el&&(w.type===ze||!Lt(w,b)||w.shapeFlag&70)?m(w.el):p;T(w,b,I,null,g,h,_,A,!0)}},Tt=(f,c,p,g,h,_,A)=>{if(p!==g){for(const x in g){if(bn(x))continue;const w=g[x],b=p[x];w!==b&&x!=="value"&&i(f,x,b,w,A,c.children,h,_,Le)}if(p!==K)for(const x in p)!bn(x)&&!(x in g)&&i(f,x,p[x],null,A,c.children,h,_,Le);"value"in g&&i(f,"value",p.value,g.value)}},tn=(f,c,p,g,h,_,A,x,w)=>{const b=c.el=f?f.el:s(""),I=c.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:S,slotScopeIds:N}=c;N&&(x=x?x.concat(N):N),f==null?(r(b,p,g),r(I,p,g),re(c.children,p,I,h,_,A,x,w)):E>0&&E&64&&S&&f.dynamicChildren?(dt(f.dynamicChildren,S,p,h,_,A,x),(c.key!=null||h&&c===h.subTree)&&uo(f,c,!0)):Me(f,c,p,I,h,_,A,x,w)},_a=(f,c,p,g,h,_,A,x,w)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,A,w):Gn(c,p,g,h,_,A,w):ue(f,c,w)},Gn=(f,c,p,g,h,_,A)=>{const x=f.component=Zl(f,g,h);if(Ji(f)&&(x.ctx.renderer=pt),Gl(x),x.asyncDep){if(h&&h.registerDep(x,J),!f.el){const w=x.subTree=G(Yt);C(null,w,c,p)}return}J(x,f,c,p,h,_,A)},ue=(f,c,p)=>{const g=c.component=f.component;if(ol(f,c,p))if(g.asyncDep&&!g.asyncResolved){V(g,c,p);return}else g.next=c,Gs(g.update),g.update();else c.el=f.el,g.vnode=c},J=(f,c,p,g,h,_,A)=>{const x=()=>{if(f.isMounted){let{next:I,bu:E,u:S,parent:N,vnode:$}=f,B=I,Y;nt(f,!1),I?(I.el=$.el,V(f,I,A)):I=$,E&&nr(E),(Y=I.props&&I.props.onVnodeBeforeUpdate)&&Ce(Y,N,I,$),nt(f,!0);const X=rr(f),be=f.subTree;f.subTree=X,T(be,X,m(be.el),nn(be),f,h,_),I.el=X.el,B===null&&sl(f,X.el),S&&me(S,h),(Y=I.props&&I.props.onVnodeUpdated)&&me(()=>Ce(Y,N,I,$),h)}else{let I;const{el:E,props:S}=c,{bm:N,m:$,parent:B}=f,Y=_n(c);if(nt(f,!1),N&&nr(N),!Y&&(I=S&&S.onVnodeBeforeMount)&&Ce(I,B,c),nt(f,!0),E&&er){const X=()=>{f.subTree=rr(f),er(E,f.subTree,f,h,null)};Y?c.type.__asyncLoader().then(()=>!f.isUnmounted&&X()):X()}else{const X=f.subTree=rr(f);T(null,X,p,g,f,h,_),c.el=X.el}if($&&me($,h),!Y&&(I=S&&S.onVnodeMounted)){const X=c;me(()=>Ce(I,B,X),h)}(c.shapeFlag&256||B&&_n(B.vnode)&&B.vnode.shapeFlag&256)&&f.a&&me(f.a,h),f.isMounted=!0,c=p=g=null}},w=f.effect=new Wr(x,()=>ea(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,nt(f,!0),b()},V=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Ml(f,c.props,g,p),zl(f,c.children,p),Et(),Fa(),Pt()},Me=(f,c,p,g,h,_,A,x,w=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,E=c.children,{patchFlag:S,shapeFlag:N}=c;if(S>0){if(S&128){Nt(b,E,p,g,h,_,A,x,w);return}else if(S&256){Jn(b,E,p,g,h,_,A,x,w);return}}N&8?(I&16&&Le(b,h,_),E!==b&&d(p,E)):I&16?N&16?Nt(b,E,p,g,h,_,A,x,w):Le(b,h,_,!0):(I&8&&d(p,""),N&16&&re(E,p,g,h,_,A,x,w))},Jn=(f,c,p,g,h,_,A,x,w)=>{f=f||yt,c=c||yt;const b=f.length,I=c.length,E=Math.min(b,I);let S;for(S=0;S<E;S++){const N=c[S]=w?Ve(c[S]):Pe(c[S]);T(f[S],N,p,null,h,_,A,x,w)}b>I?Le(f,h,_,!0,!1,E):re(c,p,g,h,_,A,x,w,E)},Nt=(f,c,p,g,h,_,A,x,w)=>{let b=0;const I=c.length;let E=f.length-1,S=I-1;for(;b<=E&&b<=S;){const N=f[b],$=c[b]=w?Ve(c[b]):Pe(c[b]);if(Lt(N,$))T(N,$,p,null,h,_,A,x,w);else break;b++}for(;b<=E&&b<=S;){const N=f[E],$=c[S]=w?Ve(c[S]):Pe(c[S]);if(Lt(N,$))T(N,$,p,null,h,_,A,x,w);else break;E--,S--}if(b>E){if(b<=S){const N=S+1,$=N<I?c[N].el:g;for(;b<=S;)T(null,c[b]=w?Ve(c[b]):Pe(c[b]),p,$,h,_,A,x,w),b++}}else if(b>S)for(;b<=E;)Ye(f[b],h,_,!0),b++;else{const N=b,$=b,B=new Map;for(b=$;b<=S;b++){const pe=c[b]=w?Ve(c[b]):Pe(c[b]);pe.key!=null&&B.set(pe.key,b)}let Y,X=0;const be=S-$+1;let ht=!1,Aa=0;const Mt=new Array(be);for(b=0;b<be;b++)Mt[b]=0;for(b=N;b<=E;b++){const pe=f[b];if(X>=be){Ye(pe,h,_,!0);continue}let Oe;if(pe.key!=null)Oe=B.get(pe.key);else for(Y=$;Y<=S;Y++)if(Mt[Y-$]===0&&Lt(pe,c[Y])){Oe=Y;break}Oe===void 0?Ye(pe,h,_,!0):(Mt[Oe-$]=b+1,Oe>=Aa?Aa=Oe:ht=!0,T(pe,c[Oe],p,null,h,_,A,x,w),X++)}const Oa=ht?Hl(Mt):yt;for(Y=Oa.length-1,b=be-1;b>=0;b--){const pe=$+b,Oe=c[pe],Ca=pe+1<I?c[pe+1].el:g;Mt[b]===0?T(null,Oe,p,Ca,h,_,A,x,w):ht&&(Y<0||b!==Oa[Y]?mt(Oe,p,Ca,2):Y--)}}},mt=(f,c,p,g,h=null)=>{const{el:_,type:A,transition:x,children:w,shapeFlag:b}=f;if(b&6){mt(f.component.subTree,c,p,g);return}if(b&128){f.suspense.move(c,p,g);return}if(b&64){A.move(f,c,p,pt);return}if(A===ze){r(_,c,p);for(let E=0;E<w.length;E++)mt(w[E],c,p,g);r(f.anchor,c,p);return}if(A===wn){j(f,c,p);return}if(g!==2&&b&1&&x)if(g===0)x.beforeEnter(_),r(_,c,p),me(()=>x.enter(_),h);else{const{leave:E,delayLeave:S,afterLeave:N}=x,$=()=>r(_,c,p),B=()=>{E(_,()=>{$(),N&&N()})};S?S(_,$,B):B()}else r(_,c,p)},Ye=(f,c,p,g=!1,h=!1)=>{const{type:_,props:A,ref:x,children:w,dynamicChildren:b,shapeFlag:I,patchFlag:E,dirs:S}=f;if(x!=null&&xr(x,null,p,f,!0),I&256){c.ctx.deactivate(f);return}const N=I&1&&S,$=!_n(f);let B;if($&&(B=A&&A.onVnodeBeforeUnmount)&&Ce(B,c,f),I&6)Jo(f.component,p,g);else{if(I&128){f.suspense.unmount(p,g);return}N&&tt(f,null,c,"beforeUnmount"),I&64?f.type.remove(f,c,p,h,pt,g):b&&(_!==ze||E>0&&E&64)?Le(b,c,p,!1,!0):(_===ze&&E&384||!h&&I&16)&&Le(w,c,p),g&&wa(f)}($&&(B=A&&A.onVnodeUnmounted)||N)&&me(()=>{B&&Ce(B,c,f),N&&tt(f,null,c,"unmounted")},p)},wa=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===ze){Go(p,g);return}if(c===wn){W(f);return}const _=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:x}=h,w=()=>A(p,_);x?x(f.el,_,w):w()}else _()},Go=(f,c)=>{let p;for(;f!==c;)p=v(f),a(f),f=p;a(c)},Jo=(f,c,p)=>{const{bum:g,scope:h,update:_,subTree:A,um:x}=f;g&&nr(g),h.stop(),_&&(_.active=!1,Ye(A,f,c,p)),x&&me(x,c),me(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Le=(f,c,p,g=!1,h=!1,_=0)=>{for(let A=_;A<f.length;A++)Ye(f[A],c,p,g,h)},nn=f=>f.shapeFlag&6?nn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),ka=(f,c,p)=>{f==null?c._vnode&&Ye(c._vnode,null,null,!0):T(c._vnode||null,f,c,null,null,null,p),Fa(),Vi(),c._vnode=f},pt={p:T,um:Ye,m:mt,r:wa,mt:Gn,mc:re,pc:Me,pbc:dt,n:nn,o:e};let Qn,er;return t&&([Qn,er]=t(pt)),{render:ka,hydrate:Qn,createApp:jl(ka,Qn)}}function nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function uo(e,t,n=!1){const r=e.children,a=t.children;if(z(r)&&z(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ve(a[i]),s.el=o.el),n||uo(o,s))}}function Hl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Ul=e=>e.__isTeleport,ze=Symbol(void 0),na=Symbol(void 0),Yt=Symbol(void 0),wn=Symbol(void 0),jt=[];let _e=null;function ra(e=!1){jt.push(_e=e?null:[])}function Bl(){jt.pop(),_e=jt[jt.length-1]||null}let Wt=1;function Wa(e){Wt+=e}function Yl(e){return e.dynamicChildren=Wt>0?_e||yt:null,Bl(),Wt>0&&_e&&_e.push(e),e}function aa(e,t,n,r,a,i){return Yl(H(e,t,n,r,a,i,!0))}function _r(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const Kn="__vInternal",mo=({key:e})=>e!=null?e:null,kn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ie(e)||le(e)||F(e)?{i:Se,r:e,k:t,f:!!n}:e:null;function H(e,t=null,n=null,r=0,a=null,i=e===ze?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&mo(t),ref:t&&kn(t),scopeId:Yn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ia(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ie(n)?8:16),Wt>0&&!o&&_e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_e.push(l),l}const G=Wl;function Wl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Al)&&(e=Yt),_r(e)){const s=kt(e,t,!0);return n&&ia(s,n),Wt>0&&!i&&_e&&(s.shapeFlag&6?_e[_e.indexOf(e)]=s:_e.push(s)),s.patchFlag|=-2,s}if(nf(e)&&(e=e.__vccOpts),t){t=Kl(t);let{class:s,style:l}=t;s&&!ie(s)&&(t.class=Dr(s)),ee(l)&&(Hi(l)&&!z(l)&&(l=fe({},l)),t.style=jr(l))}const o=ie(e)?1:ll(e)?128:Ul(e)?64:ee(e)?4:F(e)?2:0;return H(e,t,n,r,a,o,i,!0)}function Kl(e){return e?Hi(e)||Kn in e?fe({},e):e:null}function kt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Vl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&mo(s),ref:t&&t.ref?n&&a?z(a)?a.concat(kn(t)):[a,kn(t)]:kn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ze?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&kt(e.ssContent),ssFallback:e.ssFallback&&kt(e.ssFallback),el:e.el,anchor:e.anchor}}function po(e=" ",t=0){return G(na,null,e,t)}function ho(e,t){const n=G(wn,null,e);return n.staticCount=t,n}function Pe(e){return e==null||typeof e=="boolean"?G(Yt):z(e)?G(ze,null,e.slice()):typeof e=="object"?Ve(e):G(na,null,String(e))}function Ve(e){return e.el===null||e.memo?e:kt(e)}function ia(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ia(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Kn in t)?t._ctx=Se:a===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else F(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),r&64?(n=16,t=[po(t)]):n=8);e.children=t,e.shapeFlag|=n}function Vl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Dr([t.class,r.class]));else if(a==="style")t.style=jr([t.style,r.style]);else if(Rn(a)){const i=t[a],o=r[a];o&&i!==o&&!(z(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ce(e,t,n,r=null){Ae(e,t,7,[n,r])}const Xl=co();let ql=0;function Zl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Xl,i={uid:ql++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new hs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oo(r,a),emitsOptions:qi(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=el.bind(null,i),e.ce&&e.ce(i),i}let ne=null;const At=e=>{ne=e,e.scope.on()},ft=()=>{ne&&ne.scope.off(),ne=null};function go(e){return e.vnode.shapeFlag&4}let Kt=!1;function Gl(e,t=!1){Kt=t;const{props:n,children:r}=e.vnode,a=go(e);Nl(e,n,a,t),Fl(e,r);const i=a?Jl(e,t):void 0;return Kt=!1,i}function Jl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ui(new Proxy(e.ctx,Cl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?ef(e):null;At(e),Et();const i=qe(r,e,0,[e.props,a]);if(Pt(),ft(),Ii(i)){if(i.then(ft,ft),t)return i.then(o=>{Ka(e,o,t)}).catch(o=>{Un(o,e,0)});e.asyncDep=i}else Ka(e,i,t)}else vo(e,t)}function Ka(e,t,n){F(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=Bi(t)),vo(e,n)}let Va;function vo(e,t,n){const r=e.type;if(!e.render){if(!t&&Va&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=Va(a,u)}}e.render=r.render||ke}At(e),Et(),El(e),Pt(),ft()}function Ql(e){return new Proxy(e.attrs,{get(t,n){return he(e,"get","$attrs"),t[n]}})}function ef(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ql(e))},slots:e.slots,emit:e.emit,expose:t}}function oa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Bi(Ui(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Sn)return Sn[n](e)}}))}function tf(e,t=!0){return F(e)?e.displayName||e.name:e.name||t&&e.__name}function nf(e){return F(e)&&"__vccOpts"in e}const ve=(e,t)=>Vs(e,t,Kt);function bo(e,t,n){const r=arguments.length;return r===2?ee(t)&&!z(t)?_r(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&_r(n)&&(n=[n]),G(e,t,n))}const rf="3.2.38",af="http://www.w3.org/2000/svg",it=typeof document<"u"?document:null,Xa=it&&it.createElement("template"),of={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?it.createElementNS(af,e):it.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Xa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Xa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function sf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function lf(e,t,n){const r=e.style,a=ie(n);if(n&&!a){for(const i in n)wr(r,i,n[i]);if(t&&!ie(t))for(const i in t)n[i]==null&&wr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const qa=/\s*!important$/;function wr(e,t,n){if(z(n))n.forEach(r=>wr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ff(e,t);qa.test(n)?e.setProperty(Ct(r),n.replace(qa,""),"important"):e[r]=n}}const Za=["Webkit","Moz","ms"],ir={};function ff(e,t){const n=ir[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return ir[t]=r;r=$n(r);for(let a=0;a<Za.length;a++){const i=Za[a]+r;if(i in e)return ir[t]=i}return t}const Ga="http://www.w3.org/1999/xlink";function cf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ga,t.slice(6,t.length)):e.setAttributeNS(Ga,t,n);else{const i=es(t);n==null||i&&!Pi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function uf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Pi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[yo,df]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let kr=0;const mf=Promise.resolve(),pf=()=>{kr=0},hf=()=>kr||(mf.then(pf),kr=yo());function gf(e,t,n,r){e.addEventListener(t,n,r)}function vf(e,t,n,r){e.removeEventListener(t,n,r)}function bf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=yf(t);if(r){const u=i[t]=xf(r,a);gf(e,s,u,l)}else o&&(vf(e,s,o,l),i[t]=void 0)}}const Ja=/(?:Once|Passive|Capture)$/;function yf(e){let t;if(Ja.test(e)){t={};let r;for(;r=e.match(Ja);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ct(e.slice(2)),t]}function xf(e,t){const n=r=>{const a=r.timeStamp||yo();(df||a>=n.attached-1)&&Ae(_f(r,n.value),t,5,[r])};return n.value=e,n.attached=hf(),n}function _f(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Qa=/^on[a-z]/,wf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?sf(e,r,a):t==="style"?lf(e,n,r):Rn(t)?$r(t)||bf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):kf(e,t,r,a))?uf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),cf(e,t,r,a))};function kf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Qa.test(t)&&F(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Qa.test(t)&&ie(n)?!1:t in e}const Af=fe({patchProp:wf},of);let ei;function Of(){return ei||(ei=Dl(Af))}const Cf=(...e)=>{const t=Of().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Ef(r);if(!a)return;const i=t._component;!F(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Ef(e){return ie(e)?document.querySelector(e):e}const Pf="/assets/zhao.434f0699.png",If=ho('<header class="flex flex-col items-center py-10 mx-auto w-2/4 md:flex-row shrink-0"><div class="flex items-center md:mr-6 shrink-0"><div class="relative w-20 h-20 bg-gray-200 rounded-full"><img src="'+Pf+'" alt="Tan Hong Zhao" class="rounded-full"></div></div><div class="mt-3 text-center md:mt-0"><h1 class="font-bold text-center text-custom-black">Hong Zhao</h1><h1 class="font-normal text-center text-zinc-900">@agentzhao</h1></div></header><section><div class="mx-auto mb-10 w-2/3 text-xl font-bold md:w-3/5"> Hello, I&#39;m Hong Zhao. <br> I&#39;m a Year 2 Computer Science student at NTU, Singapore. <br></div></section>',2),Sf=It({__name:"Header",setup(e){return(t,n)=>If}}),Tf={class:"grid grid-cols-4 mx-auto w-11/12 md:grid-cols-8 md:w-2/3"},Nf={href:"https://calendly.com/agentzhao",target:"_self"},Mf=H("div",{class:"text-sm text-center font-OpenSans"},"Calendly",-1),Lf={href:"https://github.com/agentzhao",target:"_self"},Ff=H("div",{class:"text-sm text-center font-OpenSans"},"Github",-1),zf=ho('<a href="https://gitlab.com/agentzhao" target="_self"><svg class="group fill-black icons" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg"><path class="group-hover:fill-[#E24329] transition-all duration-300 ease-linear" d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"></path><path class="group-hover:fill-[#FC6D26] transition-all duration-300 ease-linear" d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"></path><path class="group-hover:fill-[#FCA326] transition-all duration-300 ease-linear" d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z"></path><path class="group-hover:fill-[#FC6D26] transition-all duration-300 ease-linear" d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z"></path></svg><div class="text-sm text-center font-OpenSans">Gitlab</div></a>',1),Rf={href:"https://blog.agentzhao.me",target:"_self"},jf=H("div",{class:"text-sm text-center font-OpenSans"},"Blog",-1),Df={href:"https://www.linkedin.com/in/hong-zhao-tan-50a846137/",target:"_self"},$f=H("div",{class:"text-sm text-center font-OpenSans"},"LinkedIn",-1),Hf={href:"https://instagram.com/agentzhao",target:"_self"},Uf=H("div",{class:"text-sm text-center font-OpenSans"},"Instagram",-1),Bf={href:"https://open.spotify.com/user/jjd65hchonspdrorkbrsed5vt",target:"_self"},Yf=H("div",{class:"text-sm text-center font-OpenSans"},"Spotify",-1),Wf={href:"https://www.youtube.com/channel/UCJyYT2kcQYZ1ALCHpVh7wTw",target:"_self"},Kf=H("div",{class:"text-sm text-center font-OpenSans"},"YouTube",-1),Vf=It({__name:"Links",setup(e){return(t,n)=>{const r=no("font-awesome-icon");return ra(),aa("div",Tf,[H("a",Nf,[G(r,{class:"icons",icon:"fa-solid fa-calendar",title:"Calendly"}),Mf]),H("a",Lf,[G(r,{class:"hover:text-white icons",icon:"fa-brands fa-github",title:"Github"}),Ff]),zf,H("a",Rf,[G(r,{class:"hover:text-blue-700 icons",icon:"fa-solid fa-pen-nib",title:"Blog"}),jf]),H("a",Df,[G(r,{class:"icons hover:text-[#0077B5]",icon:"fa-brands fa-linkedin",title:"LinkedIn"}),$f]),H("a",Hf,[G(r,{class:"hover:text-[#E1306C] icons",icon:"fa-brands fa-instagram",title:"Instagram"}),Uf]),H("a",Bf,[G(r,{class:"icons hover:text-[#1DB954]",icon:"fa-brands fa-spotify",title:"Spotify"}),Yf]),H("a",Wf,[G(r,{class:"hover:text-[#FF0000] icons",icon:"fa-brands fa-youtube",title:"YouTube"}),Kf])])}}}),xo=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Xf={},qf={class:"py-10 mx-auto w-10/12 sm:w-3/4"},Zf=H("h2",{class:"text-xl font-bold uppercase font-OpenSans text-custom-purple"}," Book me to do nothing ",-1),Gf=H("h4",{class:"text-gray-500 text-bold"},"Singapore's first do nothing man",-1),Jf={href:"https://calendly.com/agentzhao/rent-a-man",target:"_self"},Qf=H("a",{href:"https://calendly.com/agentzhao/rent-a-man",target:"_self"},[H("button",{class:"flex relative justify-center items-center py-3 px-4 mx-auto mt-3 space-x-2 bg-indigo-500 rounded-sm shadow-sm"},[H("div",{class:"absolute inset-0 z-0 w-full h-full rounded-sm ring-4 ring-indigo-400 ring-opacity-60 animate-pulse"}),H("br"),po("Rent a Man ")])],-1);function ec(e,t){const n=no("font-awesome-icon");return ra(),aa("div",qf,[Zf,Gf,H("a",Jf,[G(n,{class:"text-white hover:text-gray-600 icons",title:"Calendly",icon:"fa-regular fa-calendar"})]),Qf])}const tc=xo(Xf,[["render",ec]]),nc=e=>(tl("data-v-3746bf17"),e=e(),nl(),e),rc={class:"w-full h-auto md:h-screen bg-background-color"},ac={class:"bg-gradient-to-br from-orange-500 via-yellow-500 to-green-500"},ic={class:"mx-auto w-full md:w-4/5"},oc=nc(()=>H("svg",{class:"w-full",preserveAspectRatio:"none",viewBox:"600 0 500 74",height:"74"},[H("path",{d:"M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z",class:"fill-background-color"})],-1)),sc={class:"mx-auto w-full md:w-4/5"},lc=It({__name:"App",setup(e){let t=!1;return(n,r)=>(ra(),aa("div",rc,[H("div",ac,[H("div",ic,[G(Sf,{isWank:yn(t)},null,8,["isWank"]),G(Vf,{isWank:yn(t)},null,8,["isWank"])]),oc]),H("div",sc,[G(tc,{isWank:yn(t)},null,8,["isWank"])])]))}});const fc=xo(lc,[["__scopeId","data-v-3746bf17"]]);function ti(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ti(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ti(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Nn(e){return Nn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nn(e)}function cc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ni(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function uc(e,t,n){return t&&ni(e.prototype,t),n&&ni(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sa(e,t){return mc(e)||hc(e,t)||_o(e,t)||vc()}function Jt(e){return dc(e)||pc(e)||_o(e)||gc()}function dc(e){if(Array.isArray(e))return Ar(e)}function mc(e){if(Array.isArray(e))return e}function pc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function _o(e,t){if(!!e){if(typeof e=="string")return Ar(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ar(e,t)}}function Ar(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ri=function(){},la={},wo={},ko=null,Ao={mark:ri,measure:ri};try{typeof window<"u"&&(la=window),typeof document<"u"&&(wo=document),typeof MutationObserver<"u"&&(ko=MutationObserver),typeof performance<"u"&&(Ao=performance)}catch{}var bc=la.navigator||{},ai=bc.userAgent,ii=ai===void 0?"":ai,Ge=la,Z=wo,oi=ko,fn=Ao;Ge.document;var Ue=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",Oo=~ii.indexOf("MSIE")||~ii.indexOf("Trident/"),cn,un,dn,mn,pn,je="___FONT_AWESOME___",Or=16,Co="fa",Eo="svg-inline--fa",ct="data-fa-i2svg",Cr="data-fa-pseudo-element",yc="data-fa-pseudo-element-pending",fa="data-prefix",ca="data-icon",si="fontawesome-i2svg",xc="async",_c=["HTML","HEAD","STYLE","SCRIPT"],Po=function(){try{return!0}catch{return!1}}(),q="classic",Q="sharp",ua=[q,Q];function Qt(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var Vt=Qt((cn={},te(cn,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(cn,Q,{fa:"solid",fass:"solid","fa-solid":"solid"}),cn)),Xt=Qt((un={},te(un,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(un,Q,{solid:"fass"}),un)),qt=Qt((dn={},te(dn,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(dn,Q,{fass:"fa-solid"}),dn)),wc=Qt((mn={},te(mn,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(mn,Q,{"fa-solid":"fass"}),mn)),kc=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Io="fa-layers-text",Ac=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Oc=Qt((pn={},te(pn,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(pn,Q,{900:"fass"}),pn)),So=[1,2,3,4,5,6,7,8,9,10],Cc=So.concat([11,12,13,14,15,16,17,18,19,20]),Ec=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zt=new Set;Object.keys(Xt[q]).map(Zt.add.bind(Zt));Object.keys(Xt[Q]).map(Zt.add.bind(Zt));var Pc=[].concat(ua,Jt(Zt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY]).concat(So.map(function(e){return"".concat(e,"x")})).concat(Cc.map(function(e){return"w-".concat(e)})),Dt=Ge.FontAwesomeConfig||{};function Ic(e){var t=Z.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Sc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Z&&typeof Z.querySelector=="function"){var Tc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Tc.forEach(function(e){var t=sa(e,2),n=t[0],r=t[1],a=Sc(Ic(n));a!=null&&(Dt[r]=a)})}var To={styleDefault:"solid",familyDefault:"classic",cssPrefix:Co,replacementClass:Eo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Dt.familyPrefix&&(Dt.cssPrefix=Dt.familyPrefix);var Ot=O(O({},To),Dt);Ot.autoReplaceSvg||(Ot.observeMutations=!1);var P={};Object.keys(To).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Ot[e]=n,$t.forEach(function(r){return r(P)})},get:function(){return Ot[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Ot.cssPrefix=t,$t.forEach(function(n){return n(P)})},get:function(){return Ot.cssPrefix}});Ge.FontAwesomeConfig=P;var $t=[];function Nc(e){return $t.push(e),function(){$t.splice($t.indexOf(e),1)}}var Ke=Or,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Mc(e){if(!(!e||!Ue)){var t=Z.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Z.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Z.head.insertBefore(t,r),e}}var Lc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Gt(){for(var e=12,t="";e-- >0;)t+=Lc[Math.random()*62|0];return t}function St(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function da(e){return e.classList?St(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function No(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(No(e[n]),'" ')},"").trim()}function Vn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ma(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function zc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Rc(e){var t=e.transform,n=e.width,r=n===void 0?Or:n,a=e.height,i=a===void 0?Or:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Oo?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var jc=`:root, :host {
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
}`;function Mo(){var e=Co,t=Eo,n=P.cssPrefix,r=P.replacementClass,a=jc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var li=!1;function or(){P.autoAddCss&&!li&&(Mc(Mo()),li=!0)}var Dc={mixout:function(){return{dom:{css:Mo,insertCss:or}}},hooks:function(){return{beforeDOMElementCreation:function(){or()},beforeI2svg:function(){or()}}}},De=Ge||{};De[je]||(De[je]={});De[je].styles||(De[je].styles={});De[je].hooks||(De[je].hooks={});De[je].shims||(De[je].shims=[]);var we=De[je],Lo=[],$c=function e(){Z.removeEventListener("DOMContentLoaded",e),Mn=1,Lo.map(function(t){return t()})},Mn=!1;Ue&&(Mn=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),Mn||Z.addEventListener("DOMContentLoaded",$c));function Hc(e){!Ue||(Mn?setTimeout(e,0):Lo.push(e))}function en(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?No(e):"<".concat(t," ").concat(Fc(r),">").concat(i.map(en).join(""),"</").concat(t,">")}function fi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Uc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},sr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Uc(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Bc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Er(e){var t=Bc(e);return t.length===1?t[0].toString(16):null}function Yc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ci(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Pr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ci(t);typeof we.hooks.addPack=="function"&&!a?we.hooks.addPack(e,ci(t)):we.styles[e]=O(O({},we.styles[e]||{}),i),e==="fas"&&Pr("fa",t)}var hn,gn,vn,vt=we.styles,Wc=we.shims,Kc=(hn={},te(hn,q,Object.values(qt[q])),te(hn,Q,Object.values(qt[Q])),hn),pa=null,Fo={},zo={},Ro={},jo={},Do={},Vc=(gn={},te(gn,q,Object.keys(Vt[q])),te(gn,Q,Object.keys(Vt[Q])),gn);function Xc(e){return~Pc.indexOf(e)}function qc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Xc(a)?a:null}var $o=function(){var t=function(i){return sr(vt,function(o,s,l){return o[l]=sr(s,i,{}),o},{})};Fo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),zo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Do=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in vt||P.autoFetchSvg,r=sr(Wc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ro=r.names,jo=r.unicodes,pa=Xn(P.styleDefault,{family:P.familyDefault})};Nc(function(e){pa=Xn(e.styleDefault,{family:P.familyDefault})});$o();function ha(e,t){return(Fo[e]||{})[t]}function Zc(e,t){return(zo[e]||{})[t]}function st(e,t){return(Do[e]||{})[t]}function Ho(e){return Ro[e]||{prefix:null,iconName:null}}function Gc(e){var t=jo[e],n=ha("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Je(){return pa}var ga=function(){return{prefix:null,iconName:null,rest:[]}};function Xn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=Vt[r][e],i=Xt[r][e]||Xt[r][a],o=e in we.styles?e:null;return i||o||null}var ui=(vn={},te(vn,q,Object.keys(qt[q])),te(vn,Q,Object.keys(qt[Q])),vn);function qn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,q,"".concat(P.cssPrefix,"-").concat(q)),te(t,Q,"".concat(P.cssPrefix,"-").concat(Q)),t),o=null,s=q;(e.includes(i[q])||e.some(function(u){return ui[q].includes(u)}))&&(s=q),(e.includes(i[Q])||e.some(function(u){return ui[Q].includes(u)}))&&(s=Q);var l=e.reduce(function(u,d){var m=qc(P.cssPrefix,d);if(vt[d]?(d=Kc[s].includes(d)?wc[s][d]:d,o=d,u.prefix=d):Vc[s].indexOf(d)>-1?(o=d,u.prefix=Xn(d,{family:s})):m?u.iconName=m:d!==P.replacementClass&&d!==i[q]&&d!==i[Q]&&u.rest.push(d),!a&&u.prefix&&u.iconName){var v=o==="fa"?Ho(u.iconName):{},k=st(u.prefix,u.iconName);v.prefix&&(o=null),u.iconName=v.iconName||k||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!vt.far&&vt.fas&&!P.autoFetchSvg&&(u.prefix="fas")}return u},ga());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Q&&(vt.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=st(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Je()||"fas"),l}var Jc=function(){function e(){cc(this,e),this.definitions={}}return uc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Pr(s,o[s]);var l=qt[q][s];l&&Pr(l,o[s]),$o()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),di=[],bt={},wt={},Qc=Object.keys(wt);function eu(e,t){var n=t.mixoutsTo;return di=e,bt={},Object.keys(wt).forEach(function(r){Qc.indexOf(r)===-1&&delete wt[r]}),di.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Nn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){bt[o]||(bt[o]=[]),bt[o].push(i[o])})}r.provides&&r.provides(wt)}),n}function Ir(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=bt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ut(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=bt[e]||[];a.forEach(function(i){i.apply(null,n)})}function $e(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return wt[e]?wt[e].apply(null,t):void 0}function Sr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Je();if(!!t)return t=st(n,t)||t,fi(Uo.definitions,n,t)||fi(we.styles,n,t)}var Uo=new Jc,tu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,ut("noAuto")},nu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ue?(ut("beforeI2svg",t),$e("pseudoElements2svg",t),$e("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Hc(function(){au({autoReplaceSvgRoot:n}),ut("watch",t)})}},ru={icon:function(t){if(t===null)return null;if(Nn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:st(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Xn(t[0]);return{prefix:r,iconName:st(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(kc))){var a=qn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Je(),iconName:st(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Je();return{prefix:i,iconName:st(i,t)||t}}}},ge={noAuto:tu,config:P,dom:nu,parse:ru,library:Uo,findIconDefinition:Sr,toHtml:en},au=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Z:n;(Object.keys(we.styles).length>0||P.autoFetchSvg)&&Ue&&P.autoReplaceSvg&&ge.dom.i2svg({node:r})};function Zn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return en(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ue){var r=Z.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function iu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ma(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Vn(O(O({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ou(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function va(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,M=r.found?r:n,R=M.width,T=M.height,y=a==="fak",C=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(re){return m.classes.indexOf(re)===-1}).filter(function(re){return re!==""||!!re}).concat(m.classes).join(" "),L={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(T)})},j=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(R/T*16*.0625,"em")}:{};k&&(L.attributes[ct]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(d||Gt())},children:[l]}),delete L.attributes.title);var W=O(O({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:O(O({},j),m.styles)}),ce=r.found&&n.found?$e("generateAbstractMask",W)||{children:[],attributes:{}}:$e("generateAbstractIcon",W)||{children:[],attributes:{}},oe=ce.children,Be=ce.attributes;return W.children=oe,W.attributes=Be,s?ou(W):iu(W)}function mi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[ct]="");var d=O({},o.styles);ma(a)&&(d.transform=Rc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Vn(d);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function su(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Vn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var lr=we.styles;function Tr(e){var t=e[0],n=e[1],r=e.slice(4),a=sa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var lu={found:!1,width:512,height:512};function fu(e,t){!Po&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Nr(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Je()),new Promise(function(r,a){if($e("missingIconAbstract"),n==="fa"){var i=Ho(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&lr[t]&&lr[t][e]){var o=lr[t][e];return r(Tr(o))}fu(e,t),r(O(O({},lu),{},{icon:P.showMissingIcons&&e?$e("missingIconAbstract")||{}:{}}))})}var pi=function(){},Mr=P.measurePerformance&&fn&&fn.mark&&fn.measure?fn:{mark:pi,measure:pi},zt='FA "6.2.0"',cu=function(t){return Mr.mark("".concat(zt," ").concat(t," begins")),function(){return Bo(t)}},Bo=function(t){Mr.mark("".concat(zt," ").concat(t," ends")),Mr.measure("".concat(zt," ").concat(t),"".concat(zt," ").concat(t," begins"),"".concat(zt," ").concat(t," ends"))},ba={begin:cu,end:Bo},An=function(){};function hi(e){var t=e.getAttribute?e.getAttribute(ct):null;return typeof t=="string"}function uu(e){var t=e.getAttribute?e.getAttribute(fa):null,n=e.getAttribute?e.getAttribute(ca):null;return t&&n}function du(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function mu(){if(P.autoReplaceSvg===!0)return On.replace;var e=On[P.autoReplaceSvg];return e||On.replace}function pu(e){return Z.createElementNS("http://www.w3.org/2000/svg",e)}function hu(e){return Z.createElement(e)}function Yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?pu:hu:n;if(typeof e=="string")return Z.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Yo(o,{ceFn:r}))}),a}function gu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var On={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Yo(a),n)}),n.getAttribute(ct)===null&&P.keepOriginalSource){var r=Z.createComment(gu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~da(n).indexOf(P.replacementClass))return On.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return en(s)}).join(`
`);n.setAttribute(ct,""),n.innerHTML=o}};function gi(e){e()}function Wo(e,t){var n=typeof t=="function"?t:An;if(e.length===0)n();else{var r=gi;P.mutateApproach===xc&&(r=Ge.requestAnimationFrame||gi),r(function(){var a=mu(),i=ba.begin("mutate");e.map(a),i(),n()})}}var ya=!1;function Ko(){ya=!0}function Lr(){ya=!1}var Ln=null;function vi(e){if(!!oi&&!!P.observeMutations){var t=e.treeCallback,n=t===void 0?An:t,r=e.nodeCallback,a=r===void 0?An:r,i=e.pseudoElementsCallback,o=i===void 0?An:i,s=e.observeMutationsRoot,l=s===void 0?Z:s;Ln=new oi(function(u){if(!ya){var d=Je();St(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!hi(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&hi(m.target)&&~Ec.indexOf(m.attributeName))if(m.attributeName==="class"&&uu(m.target)){var v=qn(da(m.target)),k=v.prefix,M=v.iconName;m.target.setAttribute(fa,k||d),M&&m.target.setAttribute(ca,M)}else du(m.target)&&a(m.target)})}}),Ue&&Ln.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vu(){!Ln||Ln.disconnect()}function bu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function yu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=qn(da(e));return a.prefix||(a.prefix=Je()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Zc(a.prefix,e.innerText)||ha(a.prefix,Er(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function xu(e){var t=St(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Gt()):(t["aria-hidden"]="true",t.focusable="false")),t}function _u(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=yu(e),r=n.iconName,a=n.prefix,i=n.rest,o=xu(e),s=Ir("parseNodeAttributes",{},e),l=t.styleParser?bu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var wu=we.styles;function Vo(e){var t=P.autoReplaceSvg==="nest"?bi(e,{styleParser:!1}):bi(e);return~t.extra.classes.indexOf(Io)?$e("generateLayersText",e,t):$e("generateSvgReplacementMutation",e,t)}var Qe=new Set;ua.map(function(e){Qe.add("fa-".concat(e))});Object.keys(Vt[q]).map(Qe.add.bind(Qe));Object.keys(Vt[Q]).map(Qe.add.bind(Qe));Qe=Jt(Qe);function yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ue)return Promise.resolve();var n=Z.documentElement.classList,r=function(m){return n.add("".concat(si,"-").concat(m))},a=function(m){return n.remove("".concat(si,"-").concat(m))},i=P.autoFetchSvg?Qe:ua.map(function(d){return"fa-".concat(d)}).concat(Object.keys(wu));i.includes("fa")||i.push("fa");var o=[".".concat(Io,":not([").concat(ct,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ct,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=St(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ba.begin("onTree"),u=s.reduce(function(d,m){try{var v=Vo(m);v&&d.push(v)}catch(k){Po||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(v){Wo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function ku(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vo(e).then(function(n){n&&Wo([n],t)})}function Au(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Sr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Sr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var Ou=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Te:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,v=m===void 0?null:m,k=n.titleId,M=k===void 0?null:k,R=n.classes,T=R===void 0?[]:R,y=n.attributes,C=y===void 0?{}:y,L=n.styles,j=L===void 0?{}:L;if(!!t){var W=t.prefix,ce=t.iconName,oe=t.icon;return Zn(O({type:"icon"},t),function(){return ut("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(v?C["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(M||Gt()):(C["aria-hidden"]="true",C.focusable="false")),va({icons:{main:Tr(oe),mask:l?Tr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ce,transform:O(O({},Te),a),symbol:o,title:v,maskId:d,titleId:M,extra:{attributes:C,styles:j,classes:T}})})}},Cu={mixout:function(){return{icon:Au(Ou)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=yi,n.nodeCallback=ku,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?Z:r,i=n.callback,o=i===void 0?function(){}:i;return yi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,M){Promise.all([Nr(a,s),d.iconName?Nr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var T=sa(R,2),y=T[0],C=T[1];k([n,va({icons:{main:y,mask:C},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(M)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Vn(s);l.length>0&&(a.style=l);var u;return ma(o)&&(u=$e("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Eu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Zn({type:"layer"},function(){ut("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(Jt(i)).join(" ")},children:o}]})}}}},Pu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Zn({type:"counter",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),su({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(Jt(s))}})})}}}},Iu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Te:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return Zn({type:"text",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),mi({content:n,transform:O(O({},Te),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(P.cssPrefix,"-layers-text")].concat(Jt(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Oo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,mi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Su=new RegExp('"',"ug"),xi=[1105920,1112319];function Tu(e){var t=e.replace(Su,""),n=Yc(t,0),r=n>=xi[0]&&n<=xi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Er(a?t[0]:t),isSecondary:r||a}}function _i(e,t){var n="".concat(yc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=St(e.children),o=i.filter(function(oe){return oe.getAttribute(Cr)===t})[0],s=Ge.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ac),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Q:q,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Xt[v][l[2].toLowerCase()]:Oc[v][u],M=Tu(m),R=M.value,T=M.isSecondary,y=l[0].startsWith("FontAwesome"),C=ha(k,R),L=C;if(y){var j=Gc(R);j.iconName&&j.prefix&&(C=j.iconName,k=j.prefix)}if(C&&!T&&(!o||o.getAttribute(fa)!==k||o.getAttribute(ca)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var W=_u(),ce=W.extra;ce.attributes[Cr]=t,Nr(C,k).then(function(oe){var Be=va(O(O({},W),{},{icons:{main:oe,mask:ga()},prefix:k,iconName:L,extra:ce,watchable:!0})),re=Z.createElement("svg");t==="::before"?e.insertBefore(re,e.firstChild):e.appendChild(re),re.outerHTML=Be.map(function(et){return en(et)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Nu(e){return Promise.all([_i(e,"::before"),_i(e,"::after")])}function Mu(e){return e.parentNode!==document.head&&!~_c.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Cr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function wi(e){if(!!Ue)return new Promise(function(t,n){var r=St(e.querySelectorAll("*")).filter(Mu).map(Nu),a=ba.begin("searchPseudoElements");Ko(),Promise.all(r).then(function(){a(),Lr(),t()}).catch(function(){a(),Lr(),n()})})}var Lu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=wi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?Z:r;P.searchPseudoElements&&wi(a)}}},ki=!1,Fu={mixout:function(){return{dom:{unwatch:function(){Ko(),ki=!0}}}},hooks:function(){return{bootstrap:function(){vi(Ir("mutationObserverCallbacks",{}))},noAuto:function(){vu()},watch:function(n){var r=n.observeMutationsRoot;ki?Lr():vi(Ir("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ai=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},zu={mixout:function(){return{parse:{transform:function(n){return Ai(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ai(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},fr={x:0,y:0,width:"100%",height:"100%"};function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ru(e){return e.tag==="g"?e.children:[e]}var ju={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?qn(a.split(" ").map(function(o){return o.trim()})):ga();return i.prefix||(i.prefix=Je()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,v=o.icon,k=zc({transform:l,containerWidth:m,iconWidth:u}),M={tag:"rect",attributes:O(O({},fr),{},{fill:"white"})},R=d.children?{children:d.children.map(Oi)}:{},T={tag:"g",attributes:O({},k.inner),children:[Oi(O({tag:d.tag,attributes:O(O({},d.attributes),k.path)},R))]},y={tag:"g",attributes:O({},k.outer),children:[T]},C="mask-".concat(s||Gt()),L="clip-".concat(s||Gt()),j={tag:"mask",attributes:O(O({},fr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Ru(v)},j]};return r.push(W,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(C,")")},fr)}),{children:r,attributes:a}}}},Du={provides:function(t){var n=!1;Ge.matchMedia&&(n=Ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},$u={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Hu=[Dc,Cu,Eu,Pu,Iu,Lu,Fu,zu,ju,Du,$u];eu(Hu,{mixoutsTo:ge});ge.noAuto;var Xo=ge.config,Uu=ge.library;ge.dom;var Fn=ge.parse;ge.findIconDefinition;ge.toHtml;var Bu=ge.icon;ge.layer;var Yu=ge.text;ge.counter;function Ci(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ci(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ci(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zn(e){return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zn(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ku(e,t){if(e==null)return{};var n=Wu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Fr(e){return Vu(e)||Xu(e)||qu(e)||Zu()}function Vu(e){if(Array.isArray(e))return zr(e)}function Xu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qu(e,t){if(!!e){if(typeof e=="string")return zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zr(e,t)}}function zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Zu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},qo={exports:{}};(function(e){(function(t){var n=function(y,C,L){if(!u(C)||m(C)||v(C)||k(C)||l(C))return C;var j,W=0,ce=0;if(d(C))for(j=[],ce=C.length;W<ce;W++)j.push(n(y,C[W],L));else{j={};for(var oe in C)Object.prototype.hasOwnProperty.call(C,oe)&&(j[y(oe,L)]=n(y,C[oe],L))}return j},r=function(y,C){C=C||{};var L=C.separator||"_",j=C.split||/(?=[A-Z])/;return y.split(j).join(L)},a=function(y){return M(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(C,L){return L?L.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var C=a(y);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(y,C){return r(y,C).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},k=function(y){return s.call(y)=="[object Boolean]"},M=function(y){return y=y-0,y===y},R=function(y,C){var L=C&&"process"in C?C.process:C;return typeof L!="function"?y:function(j,W){return L(j,y,W)}},T={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,C){return n(R(a,C),y)},decamelizeKeys:function(y,C){return n(R(o,C),y,C)},pascalizeKeys:function(y,C){return n(R(i,C),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(Gu)})(qo);var Ju=qo.exports,Qu=["class","style"];function ed(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Ju.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function td(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function xa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return xa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=td(d);break;case"style":l.style=ed(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Ku(n,Qu);return bo(e.tag,xe(xe(xe({},t),{},{class:a.class,style:xe(xe({},a.style),o)},a.attrs),s),r)}var Zo=!1;try{Zo=!0}catch{}function nd(){if(!Zo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ht(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?de({},e,t):{}}function rd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},de(t,"fa-".concat(e.size),e.size!==null),de(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),de(t,"fa-pull-".concat(e.pull),e.pull!==null),de(t,"fa-swap-opacity",e.swapOpacity),de(t,"fa-bounce",e.bounce),de(t,"fa-shake",e.shake),de(t,"fa-beat",e.beat),de(t,"fa-fade",e.fade),de(t,"fa-beat-fade",e.beatFade),de(t,"fa-flash",e.flash),de(t,"fa-spin-pulse",e.spinPulse),de(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ei(e){if(e&&zn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Fn.icon)return Fn.icon(e);if(e===null)return null;if(zn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var ad=It({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return Ei(t.icon)}),i=ve(function(){return Ht("classes",rd(t))}),o=ve(function(){return Ht("transform",typeof t.transform=="string"?Fn.transform(t.transform):t.transform)}),s=ve(function(){return Ht("mask",Ei(t.mask))}),l=ve(function(){return Bu(a.value,xe(xe(xe(xe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});xn(l,function(d){if(!d)return nd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=ve(function(){return l.value?xa(l.value.abstract[0],{},r):null});return function(){return u.value}}});It({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Xo.familyPrefix,i=ve(function(){return["".concat(a,"-layers")].concat(Fr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return bo("div",{class:i.value},r.default?r.default():[])}}});It({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Xo.familyPrefix,i=ve(function(){return Ht("classes",[].concat(Fr(t.counter?["".concat(a,"-layers-counter")]:[]),Fr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ve(function(){return Ht("transform",typeof t.transform=="string"?Fn.transform(t.transform):t.transform)}),s=ve(function(){var u=Yu(t.value.toString(),xe(xe({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return xa(s.value,{},r)});return function(){return l.value}}});var id={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z"]},od={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},sd={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"]},ld={prefix:"fas",iconName:"pen-nib",icon:[512,512,[10001],"f5ad","M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"]},fd={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"]},cd={prefix:"fab",iconName:"gitlab",icon:[512,512,[],"f296","M503.5 204.6L502.8 202.8L433.1 21.02C431.7 17.45 429.2 14.43 425.9 12.38C423.5 10.83 420.8 9.865 417.9 9.57C415 9.275 412.2 9.653 409.5 10.68C406.8 11.7 404.4 13.34 402.4 15.46C400.5 17.58 399.1 20.13 398.3 22.9L351.3 166.9H160.8L113.7 22.9C112.9 20.13 111.5 17.59 109.6 15.47C107.6 13.35 105.2 11.72 102.5 10.7C99.86 9.675 96.98 9.295 94.12 9.587C91.26 9.878 88.51 10.83 86.08 12.38C82.84 14.43 80.33 17.45 78.92 21.02L9.267 202.8L8.543 204.6C-1.484 230.8-2.72 259.6 5.023 286.6C12.77 313.5 29.07 337.3 51.47 354.2L51.74 354.4L52.33 354.8L158.3 434.3L210.9 474L242.9 498.2C246.6 500.1 251.2 502.5 255.9 502.5C260.6 502.5 265.2 500.1 268.9 498.2L300.9 474L353.5 434.3L460.2 354.4L460.5 354.1C482.9 337.2 499.2 313.5 506.1 286.6C514.7 259.6 513.5 230.8 503.5 204.6z"]},ud={prefix:"fab",iconName:"spotify",icon:[496,512,[],"f1bc","M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},dd={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},md={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},pd={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},hd={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};Uu.add(fd,od,ld,id,sd,md,cd,pd,hd,ud,dd);Cf(fc).component("font-awesome-icon",ad).mount("#app");
