import{u as P,d as B,c as y,h as N,r as w,o as z,a as I,b as j,e as L,f as U,g as C,i as E,j as T,p as V,k as H,n as D,l as F,m as q,q as M,w as O,s as $,_ as G,t as Q,v as W,x as g,y as _,z as J,A as K,B as X,C as Y,D as Z}from"./entry.B96w_aQK.js";import{u as ee}from"./vue.f36acd1f.C6SimXuY.js";async function R(t,a=P()){const{path:s,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(s)))return;const r=a._preloadPromises=a._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>R(t,a));a._routePreloaded.add(s);const l=e.map(i=>{var n;return(n=i.components)==null?void 0:n.default}).filter(i=>typeof i=="function");for(const i of l){const n=Promise.resolve(i()).catch(()=>{}).finally(()=>r.splice(r.indexOf(n)));r.push(n)}await Promise.all(r)}const te=(...t)=>t.find(a=>a!==void 0);function ae(t){const a=t.componentName||"NuxtLink";function s(e,r){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return k(e,t.trailingSlash);const l="path"in e&&e.path!==void 0?e.path:r(e).path,i={...e,path:k(l,t.trailingSlash)};return"name"in i&&delete i.name,i}return B({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:r}){const l=P(),i=F(),n=y(()=>{const o=e.to||e.href||"";return s(o,l.resolve)}),d=y(()=>typeof n.value=="string"&&N(n.value,{acceptRelative:!0})),p=y(()=>e.target&&e.target!=="_self"),x=y(()=>e.external||p.value?!0:typeof n.value=="object"?!1:n.value===""||d.value),S=w(!1),h=w(null),A=o=>{var f;h.value=e.custom?(f=o==null?void 0:o.$el)==null?void 0:f.nextElementSibling:o==null?void 0:o.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!oe()){const f=q();let v,c=null;z(()=>{const b=re();I(()=>{v=j(()=>{var u;(u=h==null?void 0:h.value)!=null&&u.tagName&&(c=b.observe(h.value,async()=>{c==null||c(),c=null;const m=typeof n.value=="string"?n.value:l.resolve(n.value).fullPath;await Promise.all([f.hooks.callHook("link:prefetch",m).catch(()=>{}),!x.value&&R(n.value,l).catch(()=>{})]),S.value=!0}))})})}),L(()=>{v&&U(v),c==null||c(),c=null})}return()=>{var c,b;if(!x.value){const u={ref:A,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(S.value&&(u.class=e.prefetchedClass||t.prefetchedClass),u.rel=e.rel||void 0),C(E("RouterLink"),u,r.default)}const o=typeof n.value=="object"?((c=l.resolve(n.value))==null?void 0:c.href)??null:n.value&&!e.external&&!d.value?s(T(i.app.baseURL,n.value),l.resolve):n.value||null,f=e.target||null,v=te(e.noRel?"":e.rel,t.externalRelAttribute,d.value||p.value?"noopener noreferrer":"")||null;if(e.custom){if(!r.default)return null;const u=()=>M(o,{replace:e.replace,external:e.external});return r.default({href:o,navigate:u,get route(){if(!o)return;const m=V(o);return{path:m.pathname,fullPath:m.pathname,get query(){return H(m.search)},hash:m.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o}},rel:v,target:f,isExternal:x.value,isActive:!1,isExactActive:!1})}return C("a",{ref:h,href:o,rel:v,target:f},(b=r.default)==null?void 0:b.call(r))}}})}const ne=ae(D);function k(t,a){const s=a==="append"?O:$;return N(t)&&!t.startsWith("http")?t:s(t,!0)}function re(){const t=q();if(t._observer)return t._observer;let a=null;const s=new Map,e=(l,i)=>(a||(a=new IntersectionObserver(n=>{for(const d of n){const p=s.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&p&&p()}})),s.set(l,i),a.observe(l),()=>{s.delete(l),a.unobserve(l),s.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function oe(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const le=t=>(Y("data-v-ccd3db62"),t=t(),Z(),t),se={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},ie=le(()=>g("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),ce={class:"max-w-520px text-center z-20"},ue=["textContent"],de=["textContent"],fe={class:"w-full flex items-center justify-center"},he={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const a=t;return ee({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(s,e)=>{const r=ne;return Q(),W("div",se,[ie,g("div",ce,[g("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:_(t.statusCode)},null,8,ue),g("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:_(t.description)},null,8,de),g("div",fe,[J(r,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:K(()=>[X(_(t.backHome),1)]),_:1})])])])}}},pe=G(he,[["__scopeId","data-v-ccd3db62"]]);export{pe as default};
