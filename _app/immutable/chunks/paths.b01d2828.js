import{n as b,s as _}from"./scheduler.7a274a43.js";const e=[];function g(n,a=b){let o;const i=new Set;function r(t){if(_(n,t)&&(n=t,o)){const c=!e.length;for(const s of i)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function p(t,c=b){const s=[t,c];return i.add(s),i.size===1&&(o=a(r,f)||b),t(n),()=>{i.delete(s),i.size===0&&o&&(o(),o=null)}}return{set:r,update:f,subscribe:p}}var l;const d=((l=globalThis.__sveltekit_tdprn7)==null?void 0:l.base)??"/slick-portfolio-svelte";var u;const k=((u=globalThis.__sveltekit_tdprn7)==null?void 0:u.assets)??d;export{k as a,d as b,g as w};
