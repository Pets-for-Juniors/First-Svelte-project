function P(){}const Q=t=>t;function S(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function V(){return Object.create(null)}function B(t){t.forEach(D)}function X(t){return typeof t=="function"}function Y(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function Z(t){return Object.keys(t).length===0}function M(t,...n){if(t==null){for(const i of n)i(void 0);return P}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function $(t,n,e){t.$$.on_destroy.push(M(n,e))}function tt(t,n,e,i){if(t){const r=E(t,n,e,i);return t[0](r)}}function E(t,n,e,i){return t[1]&&i?S(e.ctx.slice(),t[1](i(n))):e.ctx}function nt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(n.dirty.length,r.length);for(let o=0;o<c;o+=1)s[o]=n.dirty[o]|r[o];return s}return n.dirty|r}return n.dirty}function et(t,n,e,i,r,s){if(r){const c=E(n,e,i,s);t.p(c,r)}}function it(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let m=!1;function rt(){m=!0}function ct(){m=!1}function O(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function T(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const u=n[l].claim_order,a=(r>0&&n[e[r]].claim_order<=u?r+1:O(1,r,C=>n[e[C]].claim_order,u))-1;i[l]=e[a]+1;const v=a+1;e[v]=l,r=Math.max(v,r)}const s=[],c=[];let o=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(s.push(n[l-1]);o>=l;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);s.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<s.length&&c[l].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(c[l],a)}}function q(t,n){t.appendChild(n)}function H(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function lt(t){const n=N("style");return n.textContent="/* empty */",I(H(t),n),n.sheet}function I(t,n){return q(t.head||t,n),n.sheet}function L(t,n){if(m){for(T(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ot(t,n,e){m&&!e?L(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function st(t){t.parentNode&&t.parentNode.removeChild(t)}function ut(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function N(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function at(){return g(" ")}function ft(){return g("")}function _t(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function dt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function ht(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function mt(t){return t.dataset.svelteH}function pt(t){return Array.from(t.childNodes)}function R(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function A(t,n,e,i,r=!1){R(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const l=e(o);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const l=e(o);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function z(t,n,e,i){return A(t,r=>r.nodeName===n,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];e[o.name]||s.push(o.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(n))}function yt(t,n,e){return z(t,n,e,N)}function F(t,n){return A(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>g(n),!0)}function bt(t){return F(t," ")}function gt(t,n){n=""+n,t.data!==n&&(t.data=n)}function xt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,"")}function U(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function vt(t,n){return new t(n)}let h;function p(t){h=t}function x(){if(!h)throw new Error("Function called outside component initialization");return h}function kt(t){x().$$.on_mount.push(t)}function wt(t){x().$$.after_update.push(t)}function Et(){const t=x();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=U(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}function Nt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],k=[];let _=[];const w=[],j=Promise.resolve();let b=!1;function W(){b||(b=!0,j.then(J))}function At(){return W(),j}function G(t){_.push(t)}const y=new Set;let f=0;function J(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const n=d[f];f++,p(n),K(n.$$)}}catch(n){throw d.length=0,f=0,n}for(p(null),d.length=0,f=0;k.length;)k.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];y.has(e)||(y.add(e),e())}_.length=0}while(d.length);for(;w.length;)w.pop()();b=!1,y.clear(),p(t)}function K(t){if(t.fragment!==null){t.update(),B(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(G)}}function jt(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{H as A,lt as B,B as C,X as D,G as E,U as F,Q as G,V as H,J as I,Z as J,jt as K,h as L,p as M,D as N,d as O,W as P,rt as Q,ct as R,_t as S,mt as T,dt as U,Nt as V,ut as W,Et as X,nt as a,at as b,tt as c,yt as d,N as e,pt as f,it as g,F as h,st as i,bt as j,ot as k,L as l,gt as m,P as n,$ as o,ft as p,wt as q,kt as r,Y as s,g as t,et as u,ht as v,xt as w,k as x,vt as y,At as z};
