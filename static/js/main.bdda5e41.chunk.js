(this["webpackJsonprouter-app"]=this["webpackJsonprouter-app"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(17),s=n.n(i),o=(n(24),n(25),n(9)),a=n(2),j=n(0);function u(e){var t=e.message;return Object(j.jsx)("div",{children:t})}function l(e){var t=e.title;return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:t})})}var b=Object(r.createContext)("pokemons"),d=n(19);function h(e){var t=e.name,n=e.url;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:t}),Object(j.jsx)("button",{children:Object(j.jsx)(o.b,{to:"/pokemon/".concat(n.split("/")[6]),children:"Show Detail"})})]})}function O(e){var t=e.pokemons;return Object(j.jsx)("div",{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(j.jsx)(h,Object(d.a)({},e),t)}))})}function p(){var e=Object(r.useContext)(b),t=e.getPokemons,n=e.pokemons,c=e.isLoading,i=e.isError,s=e.errorMessage;return Object(r.useEffect)((function(){return t().catch(null)}),[]),console.log(n),c?Object(j.jsx)(l,{title:"Cargando resultados"}):Object(j.jsx)("div",{children:i?Object(j.jsx)(u,{message:s}):Object(j.jsx)(O,{pokemons:n})})}function x(){return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"Page not found :("})})}function f(e){var t=e.abilities;return console.log(t),Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:t.map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:e.ability.name}),Object(j.jsx)("img",{url:e.ability.url})]},t)}))})})}function v(){var e=Object(a.g)().id,t=Object(r.useContext)(b),n=t.getPokemonDetail,c=t.pokemonDetail,i=t.isLoading,s=t.errorMessage,d=t.isError;if(Object(r.useEffect)((function(){n({id:e}).catch(null)}),[]),i)return Object(j.jsx)(l,{title:"Cargando Pokemon"});try{console.log(c);var h=c.abilities;return console.log(h),Object(j.jsx)("div",{children:d?Object(j.jsx)(u,{message:s}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Name: ".concat(null===c||void 0===c?void 0:c.name)}),Object(j.jsx)("img",{src:null===c||void 0===c?void 0:c.sprites.front_default}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Abilities"}),Object(j.jsx)(f,{abilities:h})]}),Object(j.jsx)("button",{children:Object(j.jsx)(o.b,{to:"/",children:"Back"})})]})})}catch(O){return Object(j.jsx)("div",{children:"Error"})}}function m(){var e=Object(a.f)().pathName;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}function g(){return Object(j.jsxs)(o.a,{children:[Object(j.jsx)(m,{}),Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{path:"https://nahuelfedyszyn.github.io/React-RouterAndContextPractice/",exact:!0,children:Object(j.jsx)(p,{})}),Object(j.jsx)(a.a,{path:"/pokemon/:id",children:Object(j.jsx)(v,{})}),Object(j.jsx)(a.a,{children:Object(j.jsx)(x,{})})]})]})}var k=n(7),w=n.n(k),y=n(12),P=n(10);function E(e){return C.apply(this,arguments)}function C(){return(C=Object(y.a)(w.a.mark((function e(t){var n,r,c,i,s,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,r=t.method,c=void 0===r?"get":r,i=t.body,s=t.headers,e.prev=1,e.next=4,fetch(n,{method:c,body:i,headers:s});case 4:return o=e.sent,e.abrupt("return",o.json());case 8:e.prev=8,e.t0=e.catch(1),Promise.reject(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function S(e){var t=e.children,n=Object(r.useState)([]),c=Object(P.a)(n,2),i=c[0],s=c[1],o=Object(r.useState)({}),a=Object(P.a)(o,2),u=a[0],l=a[1],d=Object(r.useState)(!1),h=Object(P.a)(d,2),O=h[0],p=h[1],x=Object(r.useState)(!1),f=Object(P.a)(x,2),v=f[0],m=f[1],g=Object(r.useState)("Something went wrong... Check your connection"),k=Object(P.a)(g,2),C=k[0],S=k[1],D=function(){var e=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),m(!1),e.next=5,E({url:"https://pokeapi.co/api/v2/pokemon?limit=500"});case 5:t=e.sent,s(t.results),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("ERROR"),s([]),m(!0);case 14:return e.prev=14,p(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,9,14,17]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(y.a)(w.a.mark((function e(t){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t.id)||Promise.reject("ID Required"),e.prev=2,p(!0),m(!1),e.next=7,E({url:"https://pokeapi.co/api/v2/pokemon/".concat(n)});case 7:r=e.sent,l(r),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),l({}),m(!0);case 15:return e.prev=15,p(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,11,15,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(b.Provider,{value:{showAlert:function(){return alert("This is an alert")},getPokemons:D,pokemons:i,getPokemonDetail:F,pokemonDetail:u,isLoading:O,setIsLoading:p,isError:v,setIsError:m,errorMessage:C,setErrorMessage:S},children:t})}var D=function(){return Object(j.jsx)(S,{children:Object(j.jsx)(g,{})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root")),F()}},[[36,1,2]]]);
//# sourceMappingURL=main.bdda5e41.chunk.js.map