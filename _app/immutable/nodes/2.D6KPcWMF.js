import{s as w,c as U,e as m,d,f as I,i as p,v,k as g,S as B,u as R,g as q,a as z,r as X,p as V,T as y,U as Y,n as _,E as G,V as J,l as H,W as K,X as Q,t as e2,h as t2,w as s2,m as n2,b as P,j as O}from"../chunks/scheduler.1mB33_vb.js";import{S as k,i as j,t as h,a as $,g as l2,c as a2,b as M,d as E,m as x,e as T,f as D}from"../chunks/index.FzcIlSbt.js";function N(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}const W="data:image/svg+xml,%3csvg%20width='127'%20height='75'%20viewBox='0%200%20127%2075'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M116.068%2034.46C119.702%2032.1%20123.346%2029.73%20126.98%2027.37C122.018%2025.68%20117.055%2023.99%20112.102%2022.3C104.492%2014.87%2096.8912%207.44%2089.281%200C86.7019%201.94%2083.0678%204.26%2078.3688%206.08C72.4193%208.39%2067.1244%209%2063.4902%209.12C59.8561%209%2054.5514%208.39%2048.6117%206.08C43.9127%204.26%2040.2688%201.94%2037.6995%200C30.0892%207.43%2022.4888%2014.86%2014.8785%2022.3C9.91577%2023.99%204.953%2025.68%200%2027.37C3.63415%2029.73%207.27808%2032.1%2010.9122%2034.46C7.27808%2036.82%203.63415%2039.19%200%2041.55C3.683%2043.86%207.366%2046.17%2011.049%2048.48C9.34915%2057.32%207.64931%2066.16%205.94946%2075C16.3537%2072.83%2027.9791%2071%2040.6791%2069.93C48.7094%2069.25%2056.3392%2068.95%2063.5%2068.92C70.6608%2068.95%2078.2906%2069.26%2086.3209%2069.93C99.0112%2071%20110.637%2072.83%20121.051%2075C119.351%2066.16%20117.651%2057.32%20115.951%2048.48C119.634%2046.17%20123.317%2043.86%20127%2041.55C123.366%2039.19%20119.722%2036.82%20116.088%2034.46H116.068Z'%20fill='%23FBBD08'/%3e%3cpath%20d='M54.5522%2031.9288C51.8364%2037.7988%2046.0237%2041.5588%2039.6737%2041.5588C33.3237%2041.5588%2027.511%2037.7988%2024.7952%2031.9288C27.511%2026.0588%2033.3237%2022.2988%2039.6737%2022.2988C46.0237%2022.2988%2051.8364%2026.0588%2054.5522%2031.9288Z'%20fill='white'/%3e%3cpath%20d='M44.1383%2031.9284C44.1383%2034.6284%2042.2626%2036.9684%2039.6738%2037.4984C37.0849%2036.9684%2035.2092%2034.6184%2035.2092%2031.9284C35.2092%2029.2384%2037.0849%2026.8884%2039.6738%2026.3584C42.2626%2026.8884%2044.1383%2029.2384%2044.1383%2031.9284Z'%20fill='black'/%3e%3cpath%20d='M102.177%2031.9288C99.4609%2037.7988%2093.6482%2041.5588%2087.2982%2041.5588C80.9482%2041.5588%2075.1355%2037.7988%2072.4197%2031.9288C75.1355%2026.0588%2080.9482%2022.2988%2087.2982%2022.2988C93.6482%2022.2988%2099.4609%2026.0588%20102.177%2031.9288Z'%20fill='white'/%3e%3cpath%20d='M91.7629%2031.9284C91.7629%2034.6284%2089.8872%2036.9684%2087.2984%2037.4984C84.7096%2036.9684%2082.8339%2034.6184%2082.8339%2031.9284C82.8339%2029.2384%2084.7096%2026.8884%2087.2984%2026.3584C89.8872%2026.8884%2091.7629%2029.2384%2091.7629%2031.9284Z'%20fill='black'/%3e%3cpath%20d='M68.9127%2040.539C68.7759%2041.029%2067.6134%2040.719%2065.9331%2041.549C64.751%2042.129%2063.9499%2042.959%2063.4517%2043.579C62.9535%2042.959%2062.1524%2042.139%2060.9703%2041.549C59.29%2040.719%2058.1372%2041.019%2057.9907%2040.539C57.766%2039.749%2060.4232%2037.499%2063.4517%2037.499C66.4802%2037.499%2069.1374%2039.749%2068.9127%2040.539Z'%20fill='%23E83F3F'/%3e%3cpath%20d='M49.6184%2046.6186C49.5891%2046.7586%2049.0518%2049.0786%2050.6149%2050.6686C52.0998%2052.1886%2054.2197%2051.7686%2054.5812%2051.6786C56.2029%2051.3186%2056.7304%2050.2086%2058.5475%2048.6386C59.5635%2047.7686%2061.1559%2046.5886%2063.5102%2045.5986'%20stroke='%23E83F3F'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M77.2849%2046.6186C77.3142%2046.7586%2077.8515%2049.0786%2076.2884%2050.6686C74.8035%2052.1886%2072.6836%2051.7686%2072.3221%2051.6786C70.7005%2051.3186%2070.1729%2050.2086%2068.3558%2048.6386C67.3398%2047.7686%2065.7475%2046.5886%2063.3931%2045.5986'%20stroke='%23E83F3F'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/svg%3e";function r2(r){const e=r-1;return e*e*e+1}function Z(r,{delay:e=0,duration:n=400,easing:t=r2,start:l=0,opacity:s=0}={}){const a=getComputedStyle(r),o=+a.opacity,i=a.transform==="none"?"":a.transform,c=1-l,f=o*(1-s);return{delay:e,duration:n,easing:t,css:(L,u)=>`
			transform: ${i} scale(${1-c*u});
			opacity: ${o-f*u}
		`}}function o2(r){let e,n,t,l;const s=r[2].default,a=U(s,r,r[1],null);return{c(){e=m("div"),a&&a.c(),this.h()},l(o){e=d(o,"DIV",{class:!0});var i=I(e);a&&a.l(i),i.forEach(p),this.h()},h(){v(e,"class","overlay svelte-1sar2h7")},m(o,i){g(o,e,i),a&&a.m(e,null),n=!0,t||(l=B(e,"click",r[3]),t=!0)},p(o,[i]){a&&a.p&&(!n||i&2)&&R(a,s,o,o[1],n?z(s,o[1],i,null):q(o[1]),null)},i(o){n||(h(a,o),n=!0)},o(o){$(a,o),n=!1},d(o){o&&p(e),a&&a.d(o),t=!1,l()}}}function i2(r,e,n){let{$$slots:t={},$$scope:l}=e,{onClose:s}=e;const a=i=>{i.key==="Escape"&&s()};X(()=>(document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}));const o=i=>{i.currentTarget===i.target&&s()};return r.$$set=i=>{"onClose"in i&&n(0,s=i.onClose),"$$scope"in i&&n(1,l=i.$$scope)},[s,l,t,o]}class c2 extends k{constructor(e){super(),j(this,e,i2,o2,w,{onClose:0})}}function A(r){let e,n;return e=new c2({props:{onClose:r[1],$$slots:{default:[u2]},$$scope:{ctx:r}}}),{c(){M(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){x(e,t,l),n=!0},p(t,l){const s={};l&2&&(s.onClose=t[1]),l&8&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function u2(r){let e,n=`<p class="text svelte-vuxo77">Спасибо за <span class="svelte-vuxo77">интерес</span> к <span class="svelte-vuxo77">нашему проекту!</span></p> <img class="img svelte-vuxo77" src="${W}" alt="Логотип приюта Петс"/>`,t,l,s,a;return{c(){e=m("div"),e.innerHTML=n,this.h()},l(o){e=d(o,"DIV",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-1a867uh"&&(e.innerHTML=n),this.h()},h(){v(e,"class","popup svelte-vuxo77")},m(o,i){g(o,e,i),l=!0,s||(a=B(e,"click",Y(r[2])),s=!0)},p:_,i(o){l||(o&&G(()=>{l&&(t||(t=D(e,Z,{duration:300},!0)),t.run(1))}),l=!0)},o(o){o&&(t||(t=D(e,Z,{duration:300},!1)),t.run(0)),l=!1},d(o){o&&p(e),o&&t&&t.end(),s=!1,a()}}}function f2(r){let e,n,t=r[0]&&A(r);return{c(){t&&t.c(),e=V()},l(l){t&&t.l(l),e=V()},m(l,s){t&&t.m(l,s),g(l,e,s),n=!0},p(l,[s]){l[0]?t?(t.p(l,s),s&1&&h(t,1)):(t=A(l),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(l2(),$(t,1,1,()=>{t=null}),a2())},i(l){n||(h(t),n=!0)},o(l){$(t),n=!1},d(l){l&&p(e),t&&t.d(l)}}}function p2(r,e,n){let{isPopupHelpOpen:t}=e,{onClose:l}=e;function s(a){J.call(this,r,a)}return r.$$set=a=>{"isPopupHelpOpen"in a&&n(0,t=a.isPopupHelpOpen),"onClose"in a&&n(1,l=a.onClose)},[t,l,s]}class h2 extends k{constructor(e){super(),j(this,e,p2,f2,w,{isPopupHelpOpen:0,onClose:1})}}function F(r,e,n){const t=r.slice();return t[3]=e[n],t[5]=n,t}function S(r){let e,n=r[3]+"",t;return{c(){e=m("span"),t=e2(n),this.h()},l(l){e=d(l,"SPAN",{class:!0,style:!0});var s=I(e);t=t2(s,n),s.forEach(p),this.h()},h(){v(e,"class","letter svelte-3rnv4j"),s2(e,"animation-delay",r[5]*.1+"s")},m(l,s){g(l,e,s),H(e,t)},p(l,s){s&1&&n!==(n=l[3]+"")&&n2(t,n)},d(l){l&&p(e)}}}function m2(r){let e,n,t,l,s=N(r[0].split("")),a=[];for(let o=0;o<s.length;o+=1)a[o]=S(F(r,s,o));return{c(){e=m("button"),n=m("div");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=d(o,"BUTTON",{class:!0});var i=I(e);n=d(i,"DIV",{class:!0});var c=I(n);for(let f=0;f<a.length;f+=1)a[f].l(c);c.forEach(p),i.forEach(p),this.h()},h(){v(n,"class","textContainer svelte-3rnv4j"),v(e,"class","button svelte-3rnv4j")},m(o,i){g(o,e,i),H(e,n);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(n,null);t||(l=B(e,"click",r[1]),t=!0)},p(o,[i]){if(i&1){s=N(o[0].split(""));let c;for(c=0;c<s.length;c+=1){const f=F(o,s,c);a[c]?a[c].p(f,i):(a[c]=S(f),a[c].c(),a[c].m(n,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=s.length}},i:_,o:_,d(o){o&&p(e),K(a,o),t=!1,l()}}}function d2(r,e,n){let{text:t}=e;const l=Q();function s(){l("click")}return r.$$set=a=>{"text"in a&&n(0,t=a.text)},[t,s]}class v2 extends k{constructor(e){super(),j(this,e,d2,m2,w,{text:0})}}function $2(r){let e,n='<ul class="list svelte-11w7krk"><li class="item svelte-11w7krk"><a class="anchor svelte-11w7krk" href="#animals">Животные</a></li> <li class="item svelte-11w7krk"><a class="anchor svelte-11w7krk" href="#adoption">Усыновление</a></li> <li class="item svelte-11w7krk"><a class="anchor svelte-11w7krk" href="#team">Члены команды</a></li> <li class="item svelte-11w7krk"><a class="anchor svelte-11w7krk" href="#contact">Обратная связь</a></li></ul>';return{c(){e=m("nav"),e.innerHTML=n,this.h()},l(t){e=d(t,"NAV",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-1uv8wq5"&&(e.innerHTML=n),this.h()},h(){v(e,"class","headerNav svelte-11w7krk")},m(t,l){g(t,e,l)},p:_,i:_,o:_,d(t){t&&p(e)}}}class C2 extends k{constructor(e){super(),j(this,e,null,$2,w,{})}}function g2(r){let e,n,t,l=`<img class="logo svelte-lop2jp" src="${W}" alt="Логотип приюта Петс"/>`,s,a,o,i,c,f,L;return a=new v2({props:{text:"Помогаю!"}}),a.$on("click",r[1]),i=new C2({}),f=new h2({props:{isPopupHelpOpen:r[0],onClose:r[2]}}),{c(){e=m("header"),n=m("div"),t=m("div"),t.innerHTML=l,s=P(),M(a.$$.fragment),o=P(),M(i.$$.fragment),c=P(),M(f.$$.fragment),this.h()},l(u){e=d(u,"HEADER",{class:!0});var C=I(e);n=d(C,"DIV",{class:!0});var b=I(n);t=d(b,"DIV",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-1hu6zh"&&(t.innerHTML=l),s=O(b),E(a.$$.fragment,b),b.forEach(p),o=O(C),E(i.$$.fragment,C),c=O(C),E(f.$$.fragment,C),C.forEach(p),this.h()},h(){v(t,"class","logoContainer svelte-lop2jp"),v(n,"class","wrapper svelte-lop2jp"),v(e,"class","header svelte-lop2jp")},m(u,C){g(u,e,C),H(e,n),H(n,t),H(n,s),x(a,n,null),H(e,o),x(i,e,null),H(e,c),x(f,e,null),L=!0},p(u,[C]){const b={};C&1&&(b.isPopupHelpOpen=u[0]),f.$set(b)},i(u){L||(h(a.$$.fragment,u),h(i.$$.fragment,u),h(f.$$.fragment,u),L=!0)},o(u){$(a.$$.fragment,u),$(i.$$.fragment,u),$(f.$$.fragment,u),L=!1},d(u){u&&p(e),T(a),T(i),T(f)}}}function _2(r,e,n){let t=!1;function l(){n(0,t=!0)}function s(){n(0,t=!1)}return[t,l,s]}class w2 extends k{constructor(e){super(),j(this,e,_2,g2,w,{})}}function k2(r){let e,n;const t=r[1].default,l=U(t,r,r[0],null);return{c(){e=m("main"),l&&l.c(),this.h()},l(s){e=d(s,"MAIN",{class:!0});var a=I(e);l&&l.l(a),a.forEach(p),this.h()},h(){v(e,"class","main svelte-zh7p89")},m(s,a){g(s,e,a),l&&l.m(e,null),n=!0},p(s,[a]){l&&l.p&&(!n||a&1)&&R(l,t,s,s[0],n?z(t,s[0],a,null):q(s[0]),null)},i(s){n||(h(l,s),n=!0)},o(s){$(l,s),n=!1},d(s){s&&p(e),l&&l.d(s)}}}function j2(r,e,n){let{$$slots:t={},$$scope:l}=e;return r.$$set=s=>{"$$scope"in s&&n(0,l=s.$$scope)},[l,t]}class b2 extends k{constructor(e){super(),j(this,e,j2,k2,w,{})}}const H2=""+new URL("../assets/dog_and_cat.Bwmg_3br.svg",import.meta.url).href,M2=""+new URL("../assets/house.BY1EIto6.svg",import.meta.url).href,E2="data:image/svg+xml,%3csvg%20width='1240'%20height='971'%20viewBox='0%200%201240%20971'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.906723%200C-5.87335%2071.4925%2025.787%20139.648%2081.9076%20174.15C146.068%20213.589%20213.239%20191.235%20223.619%20187.589C232.379%20209.447%20249.069%20243.37%20280.5%20273.368C410.201%20397.139%20637.754%20307.797%20653.724%20301.268C710.134%20278.223%20754.015%20246.582%20786.445%20217.556C808.395%20256.137%20830.356%20294.73%20852.306%20333.311C852.366%20545.878%20852.416%20758.434%20852.476%20971H1002V269.236C1011.16%20276.962%201073.96%20328.198%201154.68%20310.575C1198.04%20301.113%201226.81%20276.095%201240%20262.862V0H0.906723ZM852.316%20224.797C844.666%20209.292%20837.016%20193.787%20829.366%20178.292C837.016%20168.303%20844.666%20158.314%20852.316%20148.315V224.797Z'%20fill='%23189CAB'/%3e%3c/svg%3e";function x2(r){let e,n=`<img src="${E2}" class="tree svelte-jwdj7j" alt="Дерево"/> <div class="content svelte-jwdj7j"><div class="textContainer svelte-jwdj7j"><h1 class="title svelte-jwdj7j">Приют “Петы”</h1> <p class="text svelte-jwdj7j">Приглашает Вас <br/> в сообщество неравнодушных людей, помогающих
				<span class="svelte-jwdj7j">бездомным животным!</span></p></div> <img src="${M2}" class="house svelte-jwdj7j" alt="Домик"/> <img src="${H2}" class="animalsImg svelte-jwdj7j" alt="Кошка и собака"/></div>`;return{c(){e=m("section"),e.innerHTML=n,this.h()},l(t){e=d(t,"SECTION",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-1iagr45"&&(e.innerHTML=n),this.h()},h(){v(e,"class","promo svelte-jwdj7j")},m(t,l){g(t,e,l)},p:_,i:_,o:_,d(t){t&&p(e)}}}class T2 extends k{constructor(e){super(),j(this,e,null,x2,w,{})}}function I2(r){let e,n;return e=new T2({}),{c(){M(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){x(e,t,l),n=!0},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function L2(r){let e,n,t,l;return e=new w2({}),t=new b2({props:{$$slots:{default:[I2]},$$scope:{ctx:r}}}),{c(){M(e.$$.fragment),n=P(),M(t.$$.fragment)},l(s){E(e.$$.fragment,s),n=O(s),E(t.$$.fragment,s)},m(s,a){x(e,s,a),g(s,n,a),x(t,s,a),l=!0},p(s,[a]){const o={};a&1&&(o.$$scope={dirty:a,ctx:s}),t.$set(o)},i(s){l||(h(e.$$.fragment,s),h(t.$$.fragment,s),l=!0)},o(s){$(e.$$.fragment,s),$(t.$$.fragment,s),l=!1},d(s){s&&p(n),T(e,s),T(t,s)}}}class y2 extends k{constructor(e){super(),j(this,e,null,L2,w,{})}}export{y2 as component};
