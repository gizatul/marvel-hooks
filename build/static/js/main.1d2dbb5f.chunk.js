(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{32:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(23),a=c.n(r),s=c(8),i=c(3),l=(c(32),c(1)),o=function(){return Object(l.jsxs)("header",{className:"app__header",children:[Object(l.jsx)("h1",{className:"app__title",children:Object(l.jsxs)(s.b,{to:"/",children:[Object(l.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(l.jsx)("nav",{className:"app__menu",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(s.c,{end:!0,style:function(e){return{color:e.isActive?"#9f0013":null}},to:"/",children:"Characters"})}),Object(l.jsx)("li",{children:Object(l.jsx)(s.c,{end:!0,style:function(e){return{color:e.isActive?"#9f0013":null}},to:"/comics",children:"Comics"})})]})})]})},j=c(5),u=(c(35),c.p+"static/media/mjolnir.61f31e18.png"),b=c(4),d=c.n(b),m=c(6),h=function(){var e=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(null),s=Object(j.a)(a,2),i=s[0],l=s[1];return{loading:c,request:Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(t){var c,n,a,s,i,o=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,a=o.length>3&&void 0!==o[3]?o[3]:{"Content-type":"application/json"},r(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:a});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return i=e.sent,r(!1),e.abrupt("return",i);case 17:throw e.prev=17,e.t0=e.catch(4),r(!1),l(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:i,clearError:Object(n.useCallback)((function(){return l(null)}),[])}}(),t=e.loading,c=e.request,r=e.error,a=e.clearError,s="https://gateway.marvel.com:443/v1/public/",i="apikey=cb9119d84ffeb91c59dc6c6080764863",l=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n,r=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"0",e.next=3,c("".concat(s,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(i));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(u));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n,r=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:32,e.next=3,c("".concat(s,"comics/").concat(t,"?").concat(i));case 3:return n=e.sent,console.log(u(n.data.results[0])),e.abrupt("return",u(n.data.results[0]));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(e){var t;return{id:e.id,title:e.title,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,price:e.prices[0].price?e.prices[0].price+"$":"Not available",description:e.description||"There is no description",lang:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",pages:e.pageCount?e.pageCount+"p.":"No information about the number of pages",resourceURI:e.resourceURI}},b=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n,r=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1247,e.next=3,c("".concat(s,"characters?limit=9&offset=").concat(t,"&").concat(i));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(m.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"characters/").concat(t,"?").concat(i));case 2:return n=e.sent,e.abrupt("return",O(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return{id:e.id,name:e.name,description:e.description.length>180?"".concat(e.description.slice(0,180),"..."):e.description.length<=0?"There is not description":e.description,homepage:e.urls[0].url,wiki:e.urls[1].url,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,comics:e.comics.items}};return{loading:t,error:r,getAllCharacters:b,getCharacter:h,clearError:a,getAllComics:l,getComic:o}},O=c.p+"static/media/spinner.cf2d997a.gif",f=(c(36),function(){return Object(l.jsx)("div",{className:"spinner",children:Object(l.jsx)("img",{src:O,alt:"loading"})})}),x=c.p+"static/media/error.be36707d.svg",p=(c(37),function(){return Object(l.jsxs)("div",{className:"error",children:[Object(l.jsx)("img",{src:x,alt:"error"}),Object(l.jsx)("div",{className:"error__text",children:"Something  went wrong"})]})}),_=function(e){var t,c=e.char,n=c.thumbnail,r=c.description,a=c.name,s=c.homepage,i=c.wiki;return t="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n?"contain":"unset",Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img",style:{objectFit:t}}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:a}),Object(l.jsx)("p",{className:"randomchar__descr",children:r}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:s,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:i,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},v=function(){var e=Object(n.useState)({}),t=Object(j.a)(e,2),c=t[0],r=t[1],a=h(),s=a.loading,i=a.error,o=a.getCharacter,b=a.clearError;Object(n.useEffect)((function(){m()}),[]);var d=function(e){r(e)},m=function(){b();var e=Math.floor(401*Math.random()+1011e3);o(e).then(d)},O=i?Object(l.jsx)(p,{}):null,x=s?Object(l.jsx)(f,{}):null,v=s||i?null:Object(l.jsx)(_,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[O,x,v,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{onClick:m,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:u,alt:"mjolnir",className:"randomchar__decoration"})]})]})},g=c(7),N=(c(38),function(e){var t=Object(n.useState)([]),r=Object(j.a)(t,2),a=r[0],s=r[1],i=Object(n.useState)(!1),o=Object(j.a)(i,2),u=o[0],b=o[1],d=Object(n.useState)(1247),m=Object(j.a)(d,2),O=m[0],x=m[1],_=Object(n.useState)(!1),v=Object(j.a)(_,2),N=v[0],k=v[1],y=h(),w=y.loading,C=y.error,S=y.getAllCharacters;Object(n.useEffect)((function(){E(O,!0)}),[]);var E=function(e,t){b(!t),S(e).then(A)},A=function(e){var t=!1;e.length<9&&(t=!0),s((function(t){return[].concat(Object(g.a)(t),Object(g.a)(e))})),b((function(e){return!1})),x((function(e){return e+9})),k((function(e){return t}))},I=Object(n.useRef)([]),F=function(e){I.current.forEach((function(e){e.classList.remove("char__item_selected")})),I.current[e].classList.add("char__item_selected"),I.current[e].focus()};var R=function(t){var c=t.map((function(t,c){var n;return n="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail?"unset":"cover",Object(l.jsxs)("li",{tabIndex:"0",className:"char__item",ref:function(e){return I.current[c]=e},onClick:function(){e.onCharSelected(t.id),F(c)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(e.onCharSelected(t.id),F(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:{objectFit:n}}),Object(l.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:c})}(a),B=C?Object(l.jsx)(p,{}):null,L=w&&!u?Object(l.jsx)(f,{}):null;return w&&c.e(3).then(c.bind(null,47)).then((function(e){return e.default()})).catch((function(e){return console.log(e)})),Object(l.jsxs)("div",{className:"char__list",children:[B,L,R,Object(l.jsx)("button",{className:"button button__main button__long",disabled:u,onClick:function(){return E(O)},style:{display:N?"none":"block"},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),k=(c(39),c(40),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),y=function(e){var t,c=e.char,n=c.thumbnail,r=c.name,a=c.description,i=c.wiki,o=c.homepage,j=c.comics;return t="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n?"contain":"unset",Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:n,alt:r,style:{objectFit:t}}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:r}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:o,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:i,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:a}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[j.length>0?null:"Not found",j.slice(0,10).map((function(e,t){return Object(l.jsx)("li",{className:"char__comics-item",children:Object(l.jsx)(s.b,{to:"/comics/".concat(e.resourceURI.substring(43)),children:e.name})},t)}))]})]})},w=function(e){var t=Object(n.useState)(null),c=Object(j.a)(t,2),r=c[0],a=c[1],s=h(),i=s.loading,o=s.error,u=s.getCharacter,b=s.clearError;Object(n.useEffect)((function(){m()}),[e.charId]);var d=function(e){a(e)},m=function(){var t=e.charId;t&&(b(),u(t).then(d))},O=r||i||o?null:Object(l.jsx)(k,{}),x=o?Object(l.jsx)(p,{}):null,_=i?Object(l.jsx)(f,{}):null,v=i||o||!r?null:Object(l.jsx)(y,{char:r});return Object(l.jsxs)("div",{className:"char__info",children:[x,_,O,v]})},C=c(10),S=c(12),E=c(13),A=c(14),I=function(e){Object(E.a)(c,e);var t=Object(A.a)(c);function c(){var e;Object(C.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(S.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return!0===this.state.error?Object(l.jsx)(p,{}):this.props.children}}]),c}(n.Component),F=c.p+"static/media/vision.067d4ae1.png",R=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(I,{children:Object(l.jsx)(v,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(I,{children:Object(l.jsx)(N,{onCharSelected:function(e){r(e)}})}),Object(l.jsx)(I,{children:Object(l.jsx)(w,{charId:c})})]}),Object(l.jsx)("img",{className:"bg-decoration",src:F,alt:"vision"})]})},B=(c(41),c.p+"static/media/Avengers.4065c8f9.png"),L=c.p+"static/media/Avengers_logo.9eaf2193.png",M=function(){return Object(l.jsxs)("div",{className:"app__banner",children:[Object(l.jsx)("img",{src:B,alt:"Avengers"}),Object(l.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(l.jsx)("br",{}),"Stay tuned!"]}),Object(l.jsx)("img",{src:L,alt:"Avengers logo"})]})},P=(c(42),function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),i=Object(j.a)(a,2),o=i[0],u=i[1],b=Object(n.useState)(!1),d=Object(j.a)(b,2),m=d[0],O=d[1],x=Object(n.useState)(!1),_=Object(j.a)(x,2),v=_[0],N=_[1],k=h(),y=k.loading,w=k.error,C=k.getAllComics;Object(n.useEffect)((function(){S(o,!0)}),[]);var S=function(e,t){O(!t),C(e).then(E)},E=function(e){var t=!1;e.length<8&&(t=!0),r((function(t){return[].concat(Object(g.a)(t),Object(g.a)(e))})),O((function(e){return!1})),u((function(e){return e+8})),N(t)},A=function(e){var t=e.map((function(e,t){return Object(l.jsx)("li",{className:"comics__item",children:Object(l.jsxs)(s.b,{to:"/comics/".concat(e.id),children:[Object(l.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),Object(l.jsx)("div",{className:"comics__item-name",children:e.title}),Object(l.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)}));return Object(l.jsx)("ul",{className:"comics__grid",children:t})}(c),I=y&&!m?Object(l.jsx)(f,{}):null,F=w?Object(l.jsx)(p,{}):null;return Object(l.jsxs)("div",{className:"comics__list",children:[A,I,F,Object(l.jsx)("button",{className:"button button__main button__long",onClick:function(){return S(o)},disabled:m,style:{display:v?"none":"block"},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),T=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{}),Object(l.jsx)(I,{children:Object(l.jsx)(P,{})})]})},U=(c(43),function(e){var t=e.comic,c=t.title,n=t.description,r=t.pages,a=t.lang,i=t.price,o=t.thumbnail;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:o,alt:c,className:"single-comic__img"}),Object(l.jsxs)("div",{className:"single-comic__info",children:[Object(l.jsx)("h2",{className:"single-comic__name",children:c}),Object(l.jsx)("p",{className:"single-comic__descr",children:n}),Object(l.jsx)("p",{className:"single-comic__descr",children:r}),Object(l.jsxs)("p",{className:"single-comic__descr",children:["Language: ",a]}),Object(l.jsx)("div",{className:"single-comic__price",children:i})]}),Object(l.jsx)(s.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})}),q=function(){var e=Object(i.o)().comicId,t=Object(n.useState)(null),c=Object(j.a)(t,2),r=c[0],a=c[1],s=h(),o=s.loading,u=s.error,b=s.getComic,d=s.clearError;Object(n.useEffect)((function(){O()}),[e]);var m=function(e){a(e)},O=function(){d(),b(e).then(m)},x=u?Object(l.jsx)(p,{}):null,_=o?Object(l.jsx)(f,{}):null,v=o||u||!r?null:Object(l.jsx)(U,{comic:r});return Object(l.jsxs)("div",{className:"single-comic",children:[x,_,v]})},D=c.p+"static/media/pageNotFound.ea5c0f12.webp",J=(c(44),function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{className:"img_404",src:D,alt:"page not found"}),Object(l.jsx)("h1",{className:"title_404",children:"Page not found"}),Object(l.jsx)(s.b,{className:"link_menu",to:"/",children:"Back to main page"})]})}),W=function(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(o,{}),Object(l.jsx)("main",{children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{element:Object(l.jsx)(R,{}),path:"/"}),Object(l.jsx)(i.a,{element:Object(l.jsx)(T,{}),path:"/comics"}),Object(l.jsx)(i.a,{element:Object(l.jsx)(q,{}),path:"/comics/:comicId"})," ",Object(l.jsx)(i.a,{path:"*",element:Object(l.jsx)(J,{})})]})})]})})};c(45);a.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(W,{}))}},[[46,1,2]]]);
//# sourceMappingURL=main.1d2dbb5f.chunk.js.map