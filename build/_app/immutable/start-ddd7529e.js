import{S as tt,i as nt,s as rt,a as at,e as F,c as ot,b as M,g as he,t as J,d as me,f as z,h as G,j as st,o as Le,k as it,l as lt,m as ct,n as ke,p as V,q as ft,r as ut,u as pt,v as X,w as Z,x as Ne,y as Q,z as x,A as fe}from"./chunks/index-e93d892c.js";import{g as We,f as Me,s as W,a as Ie,b as dt,i as ht}from"./chunks/singletons-4f8fae43.js";function mt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function gt(r){return r.split("%25").map(decodeURI).join("%25")}function _t(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const wt=["href","pathname","search","searchParams","toString","toJSON"];function yt(r,e){const n=new URL(r);for(const s of wt){let o=n[s];Object.defineProperty(n,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return bt(n),n}function bt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const vt="/__data.json";function Et(r){return r.replace(/\/$/,"")+vt}function kt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ge=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ae.delete(s)}return ge(r,e)};const ae=new Map;function St(r,e){const n=xe(r,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:o,...m}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&ae.set(n,{body:o,init:m,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,m))}return ge(r,e)}function Rt(r,e,n){if(ae.size>0){const s=xe(r,n),o=ae.get(s);if(o){if(performance.now()<o.ttl)return new Response(o.body,o.init);ae.delete(s)}}return ge(e,n)}function xe(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${kt(e.body)}"]`),s}const $t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(r){const e=[],n=[],s=[];let o=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${It(r).map((t,u,_)=>{const p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(t);if(p)return e.push(p[1]),n.push(p[2]),s.push(!1),"(?:/(.*))?";const g=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(t);if(g)return e.push(g[1]),n.push(g[2]),s.push(!0),"(?:/([^/]+))?";const w=u===_.length-1;return t?"/"+t.split(/\[(.+?)\](?!\])/).map((P,j)=>{if(j%2){if(P.startsWith("x+"))return Se(String.fromCharCode(parseInt(P.slice(2),16)));if(P.startsWith("u+"))return Se(String.fromCharCode(...P.slice(2).split("-").map(ee=>parseInt(ee,16))));const q=$t.exec(P);if(!q)throw new Error(`Invalid param: ${P}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,C,se,H,ie]=q;return e.push(H),n.push(ie),s.push(!!C),se?"(.*?)":C?"([^/]*)?":"([^/]+?)"}return w&&P.includes(".")&&(o=!1),Se(P)}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:n,optional:s}}function Lt(r){return!/^\([^)]+\)$/.test(r)}function It(r){return r.slice(1).split("/").filter(Lt)}function jt(r,{names:e,types:n,optional:s},o){const m={};for(let t=0;t<e.length;t+=1){const u=e[t],_=n[t];let p=r[t+1];if(p||!s[t]){if(_){const g=o[_];if(!g)throw new Error(`Missing "${_}" param matcher`);if(!g(p))return}m[u]=p!=null?p:""}}return m}function Se(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function At(r,e,n,s){const o=new Set(e);return Object.entries(n).map(([u,[_,p,g]])=>{const{pattern:w,names:R,types:K,optional:P}=Ot(u),j={id:u,exec:q=>{const C=w.exec(q);if(C)return jt(C,{names:R,types:K,optional:P},s)},errors:[1,...g||[]].map(q=>r[q]),layouts:[0,...p||[]].map(t),leaf:m(_)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function m(u){const _=u<0;return _&&(u=~u),[_,r[u]]}function t(u){return u===void 0?u:[o.has(u),r[u]]}}function Pt(r){let e,n,s;var o=r[0][0];function m(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=X(o,m(r))),{c(){e&&Z(e.$$.fragment),n=F()},l(t){e&&Ne(e.$$.fragment,t),n=F()},m(t,u){e&&Q(e,t,u),M(t,n,u),s=!0},p(t,u){const _={};if(u&4&&(_.data=t[2]),u&2&&(_.form=t[1]),o!==(o=t[0][0])){if(e){he();const p=e;J(p.$$.fragment,1,0,()=>{x(p,1)}),me()}o?(e=X(o,m(t)),Z(e.$$.fragment),z(e.$$.fragment,1),Q(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&z(e.$$.fragment,t),s=!0)},o(t){e&&J(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&x(e,t)}}}function Nt(r){let e,n,s;var o=r[0][0];function m(t){return{props:{data:t[2],$$slots:{default:[Ut]},$$scope:{ctx:t}}}}return o&&(e=X(o,m(r))),{c(){e&&Z(e.$$.fragment),n=F()},l(t){e&&Ne(e.$$.fragment,t),n=F()},m(t,u){e&&Q(e,t,u),M(t,n,u),s=!0},p(t,u){const _={};if(u&4&&(_.data=t[2]),u&523&&(_.$$scope={dirty:u,ctx:t}),o!==(o=t[0][0])){if(e){he();const p=e;J(p.$$.fragment,1,0,()=>{x(p,1)}),me()}o?(e=X(o,m(t)),Z(e.$$.fragment),z(e.$$.fragment,1),Q(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&z(e.$$.fragment,t),s=!0)},o(t){e&&J(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&x(e,t)}}}function Ut(r){let e,n,s;var o=r[0][1];function m(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=X(o,m(r))),{c(){e&&Z(e.$$.fragment),n=F()},l(t){e&&Ne(e.$$.fragment,t),n=F()},m(t,u){e&&Q(e,t,u),M(t,n,u),s=!0},p(t,u){const _={};if(u&8&&(_.data=t[3]),u&2&&(_.form=t[1]),o!==(o=t[0][1])){if(e){he();const p=e;J(p.$$.fragment,1,0,()=>{x(p,1)}),me()}o?(e=X(o,m(t)),Z(e.$$.fragment),z(e.$$.fragment,1),Q(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&z(e.$$.fragment,t),s=!0)},o(t){e&&J(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&x(e,t)}}}function He(r){let e,n=r[5]&&Ye(r);return{c(){e=it("div"),n&&n.c(),this.h()},l(s){e=lt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=ct(e);n&&n.l(o),o.forEach(G),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(s,o){M(s,e,o),n&&n.m(e,null)},p(s,o){s[5]?n?n.p(s,o):(n=Ye(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&G(e),n&&n.d()}}}function Ye(r){let e;return{c(){e=ft(r[6])},l(n){e=ut(n,r[6])},m(n,s){M(n,e,s)},p(n,s){s&64&&pt(e,n[6])},d(n){n&&G(e)}}}function Tt(r){let e,n,s,o,m;const t=[Nt,Pt],u=[];function _(g,w){return g[0][1]?0:1}e=_(r),n=u[e]=t[e](r);let p=r[4]&&He(r);return{c(){n.c(),s=at(),p&&p.c(),o=F()},l(g){n.l(g),s=ot(g),p&&p.l(g),o=F()},m(g,w){u[e].m(g,w),M(g,s,w),p&&p.m(g,w),M(g,o,w),m=!0},p(g,[w]){let R=e;e=_(g),e===R?u[e].p(g,w):(he(),J(u[R],1,1,()=>{u[R]=null}),me(),n=u[e],n?n.p(g,w):(n=u[e]=t[e](g),n.c()),z(n,1),n.m(s.parentNode,s)),g[4]?p?p.p(g,w):(p=He(g),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null)},i(g){m||(z(n),m=!0)},o(g){J(n),m=!1},d(g){u[e].d(g),g&&G(s),p&&p.d(g),g&&G(o)}}}function Ct(r,e,n){let{stores:s}=e,{page:o}=e,{components:m}=e,{form:t}=e,{data_0:u=null}=e,{data_1:_=null}=e;st(s.page.notify);let p=!1,g=!1,w=null;return Le(()=>{const R=s.page.subscribe(()=>{p&&(n(5,g=!0),n(6,w=document.title||"untitled page"))});return n(4,p=!0),R}),r.$$set=R=>{"stores"in R&&n(7,s=R.stores),"page"in R&&n(8,o=R.page),"components"in R&&n(0,m=R.components),"form"in R&&n(1,t=R.form),"data_0"in R&&n(2,u=R.data_0),"data_1"in R&&n(3,_=R.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[m,t,u,_,p,g,w,s,o]}class Dt extends tt{constructor(e){super(),nt(this,e,Ct,Tt,rt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const qt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Vt=function(r,e){return new URL(r,e).href},Xe={},Re=function(e,n,s){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(m=>{if(m=Vt(m,s),m in Xe)return;Xe[m]=!0;const t=m.endsWith(".css"),u=t?'[rel="stylesheet"]':"";if(!!s)for(let g=o.length-1;g>=0;g--){const w=o[g];if(w.href===m&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${u}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":qt,t||(p.as="script",p.crossOrigin=""),p.href=m,document.head.appendChild(p),t)return new Promise((g,w)=>{p.addEventListener("load",g),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${m}`)))})})).then(()=>e())},Bt={},_e=[()=>Re(()=>import("./chunks/0-ec7c68f5.js"),["./chunks/0-ec7c68f5.js","./components/layout.svelte-207aea4c.js","./chunks/index-e93d892c.js"],import.meta.url),()=>Re(()=>import("./chunks/1-2fbe2ca0.js"),["./chunks/1-2fbe2ca0.js","./components/error.svelte-3717a0b9.js","./chunks/index-e93d892c.js","./chunks/singletons-4f8fae43.js"],import.meta.url),()=>Re(()=>import("./chunks/2-fcb11922.js"),["./chunks/2-fcb11922.js","./components/pages/_page.svelte-8a69c331.js","./chunks/index-e93d892c.js","./assets/_page-ecd1726d.css"],import.meta.url)],Ft=[],Jt={"/":[2]},zt={handleError:({error:r})=>{console.error(r)}};class je{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ze{constructor(e,n){this.status=e,this.location=n}}async function Gt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Kt=-1,Wt=-2,Mt=-3,Ht=-4,Yt=-5,Xt=-6;function Zt(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function s(o,m=!1){if(o===Kt)return;if(o===Mt)return NaN;if(o===Ht)return 1/0;if(o===Yt)return-1/0;if(o===Xt)return-0;if(m)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const _=new Set;n[o]=_;for(let w=1;w<t.length;w+=1)_.add(s(t[w]));break;case"Map":const p=new Map;n[o]=p;for(let w=1;w<t.length;w+=2)p.set(s(t[w]),s(t[w+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[o]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=s(t[w+1]);break}else{const u=new Array(t.length);n[o]=u;for(let _=0;_<t.length;_+=1){const p=t[_];p!==Wt&&(u[_]=s(p))}}else{const u={};n[o]=u;for(const _ in t){const p=t[_];u[_]=s(p)}}return n[o]}return s(0)}const et="sveltekit:scroll",B="sveltekit:index",ue=At(_e,Ft,Jt,Bt),Ae=_e[0],Pe=_e[1];Ae();Pe();let oe={};try{oe=JSON.parse(sessionStorage[et])}catch{}function $e(r){oe[r]=Ie()}function Qt({target:r,base:e,trailing_slash:n}){var ze;const s=[];let o=null;const m={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},u=!1,_=!1,p=!0,g=!1,w=!1,R=!1,K=!1,P,j=(ze=history.state)==null?void 0:ze[B];j||(j=Date.now(),history.replaceState({...history.state,[B]:j},"",location.href));const q=oe[j];q&&(history.scrollRestoration="manual",scrollTo(q.x,q.y));let C,se,H;async function ie(){H=H||Promise.resolve(),await H,H=null;const a=new URL(location.href),l=be(a,!0);o=null,await Te(l,a,[])}async function ee(a,{noScroll:l=!1,replaceState:c=!1,keepFocus:i=!1,state:f={},invalidateAll:d=!1},h,v){return typeof a=="string"&&(a=new URL(a,We(document))),ve({url:a,scroll:l?Ie():null,keepfocus:i,redirect_chain:h,details:{state:f,replaceState:c},nav_token:v,accepted:()=>{d&&(K=!0)},blocked:()=>{},type:"goto"})}async function Ue(a){const l=be(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:l.id,promise:qe(l).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function Te(a,l,c,i,f={},d){var v,E;se=f;let h=a&&await qe(a);if(h||(h=await Je(l,{id:null},re(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(a==null?void 0:a.url)||l,se!==f)return!1;if(h.type==="redirect")if(c.length>10||c.includes(l.pathname))h=await le({status:500,error:re(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return ee(new URL(h.location,l).href,{},[...c,l.pathname],f),!1;else((E=(v=h.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await W.updated.check()&&await ce(l);if(s.length=0,K=!1,g=!0,i&&i.details){const{details:y}=i,b=y.replaceState?0:1;y.state[B]=j+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",l)}if(o=null,_){t=h.state,h.props.page&&(h.props.page.url=l);const y=de();P.$set(h.props),y()}else Ce(h);if(i){const{scroll:y,keepfocus:b}=i;if(b||Oe(),await fe(),p){const O=l.hash&&document.getElementById(l.hash.slice(1));y?scrollTo(y.x,y.y):O?O.scrollIntoView():scrollTo(0,0)}}else await fe();p=!0,h.props.page&&(C=h.props.page),d&&d(),g=!1}function Ce(a){var f,d;t=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),C=a.props.page;const c=de();P=new Dt({target:r,props:{...a.props,stores:W},hydrate:!0}),c();const i={from:null,to:pe("to",{params:t.params,route:{id:(d=(f=t.route)==null?void 0:f.id)!=null?d:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};m.after_navigate.forEach(h=>h(i)),_=!0}async function te({url:a,params:l,branch:c,status:i,error:f,route:d,form:h}){var N;const v=c.filter(Boolean),E={type:"loaded",state:{url:a,params:l,branch:c,error:f,route:d},props:{components:v.map($=>$.node.component)}};h!==void 0&&(E.props.form=h);let y={},b=!C;for(let $=0;$<v.length;$+=1){const U=v[$];y={...y,...U.data},(b||!t.branch.some(T=>T===U))&&(E.props[`data_${$}`]=y,b=b||Object.keys((N=U.data)!=null?N:{}).length>0)}if(b||(b=Object.keys(C.data).length!==Object.keys(y).length),!t.url||a.href!==t.url.href||t.error!==f||h!==void 0||b){E.props.page={error:f,params:l,route:d,status:i,url:a,form:h,data:b?y:C.data},Object.defineProperty(E.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const $=(U,T)=>{Object.defineProperty(E.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${T}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return E}async function we({loader:a,parent:l,url:c,params:i,route:f,server_data_node:d}){var y,b,O,N,$;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let U=function(...S){for(const D of S){const{href:k}=new URL(D,c);v.dependencies.add(k)}};const T={route:{get id(){return v.route=!0,f.id}},params:new Proxy(i,{get:(S,D)=>(v.params.add(D),S[D])}),data:(b=d==null?void 0:d.data)!=null?b:null,url:yt(c,()=>{v.url=!0}),async fetch(S,D){let k;S instanceof Request?(k=S.url,D={body:S.method==="GET"||S.method==="HEAD"?void 0:await S.blob(),cache:S.cache,credentials:S.credentials,headers:S.headers,integrity:S.integrity,keepalive:S.keepalive,method:S.method,mode:S.mode,redirect:S.redirect,referrer:S.referrer,referrerPolicy:S.referrerPolicy,signal:S.signal,...D}):k=S;const L=new URL(k,c).href;return U(L),_?Rt(k,L,D):St(k,D)},setHeaders:()=>{},depends:U,parent(){return v.parent=!0,l()}};Object.defineProperties(T,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),h=(O=await E.shared.load.call(null,T))!=null?O:null,h=h?await Gt(h):null}return{node:E,loader:a,server:d,shared:(N=E.shared)!=null&&N.load?{type:"data",data:h,uses:v}:null,data:($=h!=null?h:d==null?void 0:d.data)!=null?$:null}}function De(a,l,c,i,f){if(K)return!0;if(!i)return!1;if(i.parent&&a||i.route&&l||i.url&&c)return!0;for(const d of i.params)if(f[d]!==t.params[d])return!0;for(const d of i.dependencies)if(s.some(h=>h(new URL(d))))return!0;return!1}function ye(a,l){var c,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((c=a.uses.dependencies)!=null?c:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function qe({id:a,invalidating:l,url:c,params:i,route:f}){var D;if((o==null?void 0:o.id)===a)return o.promise;const{errors:d,layouts:h,leaf:v}=f,E=[...h,v];d.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const b=t.url?a!==t.url.pathname+t.url.search:!1,O=t.route?a!==t.route.id:!1,N=E.reduce((k,L,A)=>{var ne;const I=t.branch[A],Y=!!(L!=null&&L[0])&&((I==null?void 0:I.loader)!==L[1]||De(k.some(Boolean),O,b,(ne=I.server)==null?void 0:ne.uses,i));return k.push(Y),k},[]);if(N.some(Boolean)){try{y=await Qe(c,N)}catch(k){return le({status:500,error:re(k,{url:c,params:i,route:{id:f.id}}),url:c,route:f})}if(y.type==="redirect")return y}const $=y==null?void 0:y.nodes;let U=!1;const T=E.map(async(k,L)=>{var ne;if(!k)return;const A=t.branch[L],I=$==null?void 0:$[L];if((!I||I.type==="skip")&&k[1]===(A==null?void 0:A.loader)&&!De(U,O,b,(ne=A.shared)==null?void 0:ne.uses,i))return A;if(U=!0,(I==null?void 0:I.type)==="error")throw I;return we({loader:k[1],url:c,params:i,route:f,parent:async()=>{var Ke;const Ge={};for(let Ee=0;Ee<L;Ee+=1)Object.assign(Ge,(Ke=await T[Ee])==null?void 0:Ke.data);return Ge},server_data_node:ye(I===void 0&&k[0]?{type:"skip"}:I!=null?I:null,A==null?void 0:A.server)})});for(const k of T)k.catch(()=>{});const S=[];for(let k=0;k<E.length;k+=1)if(E[k])try{S.push(await T[k])}catch(L){if(L instanceof Ze)return{type:"redirect",location:L.location};let A=500,I;$!=null&&$.includes(L)?(A=(D=L.status)!=null?D:A,I=L.error):L instanceof je?(A=L.status,I=L.body):I=re(L,{params:i,url:c,route:{id:f.id}});const Y=await Ve(k,S,d);return Y?await te({url:c,params:i,branch:S.slice(0,Y.idx).concat(Y.node),status:A,error:I,route:f}):await Je(c,{id:f.id},I,A)}else S.push(void 0);return await te({url:c,params:i,branch:S,status:200,error:null,route:f,form:l?void 0:null})}async function Ve(a,l,c){for(;a--;)if(c[a]){let i=a;for(;!l[i];)i-=1;try{return{idx:i+1,node:{node:await c[a](),loader:c[a],data:{},server:null,shared:null}}}catch{continue}}}async function le({status:a,error:l,url:c,route:i}){var y;const f={},d=await Ae();let h=null;if(d.server)try{const b=await Qe(c,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;h=(y=b.nodes[0])!=null?y:null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||u)&&await ce(c)}const v=await we({loader:Ae,url:c,params:f,route:i,parent:()=>Promise.resolve({}),server_data_node:ye(h)}),E={node:await Pe(),loader:Pe,shared:null,server:null,data:null};return await te({url:c,params:f,branch:[v,E],status:a,error:l,route:null})}function be(a,l){if(Be(a))return;const c=gt(a.pathname.slice(e.length)||"/");for(const i of ue){const f=i.exec(c);if(f){const d=new URL(a.origin+mt(a.pathname,n)+a.search+a.hash);return{id:d.pathname+d.search,invalidating:l,route:i,params:_t(f),url:d}}}}function Be(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function Fe({url:a,type:l,intent:c,delta:i}){var v,E,y,b,O;let f=!1;const d={from:pe("from",{params:t.params,route:{id:(E=(v=t.route)==null?void 0:v.id)!=null?E:null},url:t.url}),to:pe("to",{params:(y=c==null?void 0:c.params)!=null?y:null,route:{id:(O=(b=c==null?void 0:c.route)==null?void 0:b.id)!=null?O:null},url:a}),willUnload:!c,type:l};i!==void 0&&(d.delta=i);const h={...d,cancel:()=>{f=!0}};return w||m.before_navigate.forEach(N=>N(h)),f?null:d}async function ve({url:a,scroll:l,keepfocus:c,redirect_chain:i,details:f,type:d,delta:h,nav_token:v,accepted:E,blocked:y}){const b=be(a,!1),O=Fe({url:a,type:d,delta:h,intent:b});if(!O){y();return}$e(j),E(),w=!0,_&&W.navigating.set(O),await Te(b,a,i,{scroll:l,keepfocus:c,details:f},v,()=>{w=!1,m.after_navigate.forEach(N=>N(O)),W.navigating.set(null)})}async function Je(a,l,c,i){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await le({status:i,error:c,url:a,route:l}):await ce(a)}function ce(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Le(()=>(m.after_navigate.push(a),()=>{const l=m.after_navigate.indexOf(a);m.after_navigate.splice(l,1)}))},before_navigate:a=>{Le(()=>(m.before_navigate.push(a),()=>{const l=m.before_navigate.indexOf(a);m.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(g||!_)&&(p=!1)},goto:(a,l={})=>{if("keepfocus"in l&&!("keepFocus"in l))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l&&!("noScroll"in l))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ee(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:l}=new URL(a,location.href);s.push(c=>c.href===l)}return ie()},invalidateAll:()=>(K=!0,ie()),prefetch:async a=>{const l=new URL(a,We(document));await Ue(l)},prefetch_routes:async a=>{const c=(a?ue.filter(i=>a.some(f=>i.exec(f))):ue).map(i=>Promise.all([...i.layouts,i.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(c)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:c,route:i}=t;if(!i)return;const f=await Ve(t.branch.length,c,i.errors);if(f){const d=await te({url:l,params:t.params,branch:c.slice(0,f.idx).concat(f.node),status:500,error:a.error,route:i});t=d.state;const h=de();P.$set(d.props),h(),fe().then(Oe)}}else if(a.type==="redirect")ee(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...C,form:a.data,status:a.status}},c=de();P.$set(l),c(),a.type==="success"&&fe().then(Oe)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var d,h;let f=!1;if(!w){const v={from:pe("from",{params:t.params,route:{id:(h=(d=t.route)==null?void 0:d.id)!=null?h:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};m.before_navigate.forEach(E=>E(v))}f?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){$e(j);try{sessionStorage[et]=JSON.stringify(oe)}catch{}}});const a=i=>{const{url:f,options:d,has:h}=Me(i);if(f&&d.prefetch&&!Be(f)){if(d.reload||h.rel_external||h.target||h.download)return;Ue(f)}};let l;const c=i=>{clearTimeout(l),l=setTimeout(()=>{var f;(f=i.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",c),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:f,url:d,options:h,has:v}=Me(i);if(!f||!d||!(f instanceof SVGAElement)&&d.protocol!==location.protocol&&!(d.protocol==="https:"||d.protocol==="http:")||v.download)return;if(h.reload||v.rel_external||v.target){Fe({url:d,type:"link"})||i.preventDefault(),w=!0;return}const[y,b]=d.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){R=!0,$e(j),t.url=d,W.page.set({...C,url:d}),W.page.notify();return}ve({url:d,scroll:h.noscroll?Ie():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:d.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[B]===j)return;const f=i.state[B]-j;ve({url:new URL(location.href),scroll:oe[i.state[B]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=i.state[B]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[B]:++j},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&W.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:c,params:i,route:f,data:d,form:h})=>{var y;u=!0;const v=new URL(location.href);let E;try{const b=c.map(async(O,N)=>{const $=d[N];return we({loader:_e[O],url:v,params:i,route:f,parent:async()=>{const U={};for(let T=0;T<N;T+=1)Object.assign(U,(await b[T]).data);return U},server_data_node:ye($)})});E=await te({url:v,params:i,branch:await Promise.all(b),status:a,error:l,form:h,route:(y=ue.find(({id:O})=>O===f.id))!=null?y:null})}catch(b){if(b instanceof Ze){await ce(new URL(b.location,location.href));return}E=await le({status:b instanceof je?b.status:500,error:re(b,{url:v,params:i,route:f}),url:v,route:f})}Ce(E)}}}async function Qe(r,e){var m;const n=new URL(r);n.pathname=Et(r.pathname);const s=await ge(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),o=await s.json();if(!s.ok)throw new Error(o);return(m=o.nodes)==null||m.forEach(t=>{var u,_;(t==null?void 0:t.type)==="data"&&(t.data=Zt(t.data),t.uses={dependencies:new Set((u=t.uses.dependencies)!=null?u:[]),params:new Set((_=t.uses.params)!=null?_:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function re(r,e){var n;return r instanceof je?r.body:(n=zt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const xt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function pe(r,e){for(const n of xt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function de(){return()=>{}}function Oe(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function nn({env:r,hydrate:e,paths:n,target:s,trailing_slash:o}){dt(n);const m=Qt({target:s,base:n.base,trailing_slash:o});ht({client:m}),e?await m._hydrate(e):m.goto(location.href,{replaceState:!0}),m._start_router()}export{nn as start};
