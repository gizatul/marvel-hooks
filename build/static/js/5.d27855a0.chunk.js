(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{43:function(e,t,c){"use strict";var n=c.p+"static/media/error.be36707d.svg",r=(c(45),c(4));t.a=function(){return Object(r.jsxs)("div",{className:"error",children:[Object(r.jsx)("img",{src:n,alt:"error"}),Object(r.jsx)("div",{className:"error__text",children:"Something  went wrong"})]})}},44:function(e,t,c){"use strict";var n=c(3),r=c.n(n),a=c(7),s=c(5),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)("waiting"),t=Object(s.a)(e,2),c=t[0],n=t[1];return{request:Object(i.useCallback)(function(){var e=Object(a.a)(r.a.mark((function e(t){var c,a,s,i,o,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-type":"application/json"},n("loading"),e.prev=4,e.next=7,fetch(t,{method:c,body:a,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),n("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){n("loading")}),[]),process:c,setProcess:n}}(),t=e.request,c=e.clearError,n=e.process,o=e.setProcess,l="https://gateway.marvel.com:443/v1/public/",u="apikey=cb9119d84ffeb91c59dc6c6080764863",j=function(){var e=Object(a.a)(r.a.mark((function e(){var c,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>0&&void 0!==a[0]?a[0]:"0",e.next=3,t("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(c,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(h));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(r.a.mark((function e(){var c,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>0&&void 0!==a[0]?a[0]:32,e.next=3,t("".concat(l,"comics/").concat(c,"?").concat(u));case 3:return n=e.sent,e.abrupt("return",h(n.data.results[0]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(e){var t;return{id:e.id,title:e.title,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,price:e.prices[0].price?e.prices[0].price+"$":"Not available",description:e.description||"There is no description",lang:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",pages:e.pageCount?e.pageCount+"p.":"No information about the number of pages",resourceURI:e.resourceURI}},b=function(){var e=Object(a.a)(r.a.mark((function e(){var c,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>0&&void 0!==a[0]?a[0]:1247,e.next=3,t("".concat(l,"characters?limit=9&offset=").concat(c,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(r.a.mark((function e(c){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters?name=").concat(c,"&").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data.results.map(O));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(r.a.mark((function e(c){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters/").concat(c,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",O(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return{id:e.id,name:e.name,description:e.description.length>180?"".concat(e.description.slice(0,180),"..."):e.description.length<=0?"There is not description":e.description,fullDescription:e.description?e.description:"There is not description",homepage:e.urls[0].url,wiki:e.urls[1].url,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,comics:e.comics.items}};return{getAllCharacters:b,getCharacter:f,clearError:c,process:n,setProcess:o,getAllComics:j,getComic:d,getCharacterByName:m}}},45:function(e,t,c){},48:function(e,t,c){"use strict";var n=c(23),r=c(43),a=(c(49),c(4)),s=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(a.jsxs)("div",{className:"skeleton",children:[Object(a.jsxs)("div",{className:"pulse skeleton__header",children:[Object(a.jsx)("div",{className:"pulse skeleton__circle"}),Object(a.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"})]})]})};t.a=function(e,t,c){switch(e){case"waiting":return Object(a.jsx)(s,{});case"loading":return Object(a.jsx)(n.a,{});case"confirmed":return Object(a.jsx)(t,{data:c});case"error":return Object(a.jsx)(r.a,{});default:return new Error("Unexpected process state")}}},49:function(e,t,c){},51:function(e,t,c){"use strict";var n=c(11),r=c(14),a=c(15),s=c(16),i=c(0),o=c(43),l=c(4),u=function(e){Object(a.a)(c,e);var t=Object(s.a)(c);function c(){var e;Object(n.a)(this,c);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(r.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return!0===this.state.error?Object(l.jsx)(o.a,{}):this.props.children}}]),c}(i.Component);t.a=u},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},92:function(e,t,c){"use strict";c.r(t);var n=c(5),r=c(0),a=(c(63),c.p+"static/media/mjolnir.61f31e18.png"),s=c(44),i=c(48),o=c(4),l=function(e){var t,c=e.data,n=c.thumbnail,r=c.description,a=c.name,s=c.homepage,i=c.wiki;return t="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n?"contain":"unset",Object(o.jsxs)("div",{className:"randomchar__block",children:[Object(o.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img",style:{objectFit:t}}),Object(o.jsxs)("div",{className:"randomchar__info",children:[Object(o.jsx)("p",{className:"randomchar__name",children:a}),Object(o.jsx)("p",{className:"randomchar__descr",children:r}),Object(o.jsxs)("div",{className:"randomchar__btns",children:[Object(o.jsx)("a",{href:s,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"homepage"})}),Object(o.jsx)("a",{href:i,className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},u=function(){var e=Object(r.useState)({}),t=Object(n.a)(e,2),c=t[0],u=t[1],j=Object(s.a)(),d=j.getCharacter,h=j.clearError,b=j.process,m=j.setProcess;Object(r.useEffect)((function(){O()}),[]);var f=function(e){u(e)},O=function(){h();var e=Math.floor(401*Math.random()+1011e3);d(e).then(f).then((function(){return m("confirmed")}))};return Object(o.jsxs)("div",{className:"randomchar",children:[Object(i.a)(b,l,c),Object(o.jsxs)("div",{className:"randomchar__static",children:[Object(o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(o.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(o.jsx)("button",{onClick:O,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"try it"})}),Object(o.jsx)("img",{src:a,alt:"mjolnir",className:"randomchar__decoration"})]})]})},j=c(8),d=c(93),h=c(94),b=c(23),m=c(43),f=(c(64),function(e){var t=Object(r.useState)([]),c=Object(n.a)(t,2),a=c[0],i=c[1],l=Object(r.useState)(!1),u=Object(n.a)(l,2),f=u[0],O=u[1],p=Object(r.useState)(1247),v=Object(n.a)(p,2),x=v[0],_=v[1],g=Object(r.useState)(!1),N=Object(n.a)(g,2),k=N[0],w=N[1],y=Object(s.a)(),C=y.getAllCharacters,E=y.process,S=y.setProcess;Object(r.useEffect)((function(){P(x,!0)}),[]);var P=function(e,t){O(!t),C(e).then(I).then((function(){return S("confirmed")}))},I=function(e){var t=!1;e.length<9&&(t=!0),i((function(t){return[].concat(Object(j.a)(t),Object(j.a)(e))})),O((function(e){return!1})),_((function(e){return e+9})),w((function(e){return t}))},T=Object(r.useRef)([]),F=function(e){T.current.forEach((function(e){e.classList.remove("char__item_selected")})),T.current[e].classList.add("char__item_selected"),T.current[e].focus()};var R=Object(r.useMemo)((function(){return function(e,t,c){switch(e){case"waiting":return Object(o.jsx)(b.a,{});case"loading":return c?Object(o.jsx)(t,{}):Object(o.jsx)(b.a,{});case"confirmed":return Object(o.jsx)(t,{});case"error":return Object(o.jsx)(m.a,{});default:return new Error("Unexpected process state")}}(E,(function(){return function(t){var c=t.map((function(t,c){var n;return n="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail?"unset":"cover",Object(o.jsx)(d.a,{timeout:500,classNames:"char__item",children:Object(o.jsxs)("li",{tabIndex:"0",className:"char__item",ref:function(e){return T.current[c]=e},onClick:function(){e.onCharSelected(t.id),F(c)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(e.onCharSelected(t.id),F(c))},children:[Object(o.jsx)("img",{src:t.thumbnail,alt:t.name,style:{objectFit:n}}),Object(o.jsx)("div",{className:"char__name",children:t.name})]})},t.id)}));return Object(o.jsx)("ul",{className:"char__grid",children:Object(o.jsx)(h.a,{component:null,children:c})})}(a)}),f)}),[E]);return Object(o.jsxs)("div",{className:"char__list",children:[R,Object(o.jsx)("button",{className:"button button__main button__long",disabled:f,onClick:function(){return P(x)},style:{display:k?"none":"block"},children:Object(o.jsx)("div",{className:"inner",children:"load more"})})]})}),O=(c(65),c(12)),p=function(e){var t,c=e.data,n=c.thumbnail,r=c.name,a=c.description,s=c.wiki,i=c.homepage,l=c.comics;return t="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n?"contain":"unset",Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"char__basics",children:[Object(o.jsx)("img",{src:n,alt:r,style:{objectFit:t}}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"char__info-name",children:r}),Object(o.jsxs)("div",{className:"char__btns",children:[Object(o.jsx)("a",{href:i,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"homepage"})}),Object(o.jsx)("a",{href:s,className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(o.jsx)("div",{className:"char__descr",children:a}),Object(o.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(o.jsxs)("ul",{className:"char__comics-list",children:[l.length>0?null:"Not found",l.slice(0,10).map((function(e,t){return Object(o.jsx)("li",{className:"char__comics-item",children:Object(o.jsx)(O.b,{to:"/comics/".concat(e.resourceURI.substring(43)),children:e.name})},t)}))]})]})},v=function(e){var t=Object(r.useState)(null),c=Object(n.a)(t,2),a=c[0],l=c[1],u=Object(s.a)(),j=u.getCharacter,d=u.clearError,h=u.process,b=u.setProcess;Object(r.useEffect)((function(){f()}),[e.charId]);var m=function(e){l(e)},f=function(){var t=e.charId;t&&(d(),j(t).then(m).then((function(){return b("confirmed")})))};return Object(o.jsx)("div",{className:"char__info",children:Object(i.a)(h,p,a)})},x=c(51),_=(c(66),c(67),c(86)),g=c(87),N=function(){var e=Object(r.useState)(null),t=Object(n.a)(e,2),c=t[0],a=t[1],i=Object(s.a)(),l=i.getCharacterByName,u=i.clearError,j=i.process,d=i.setProcess,h=function(e){a(e)},b="error"===j?Object(o.jsx)(m.a,{}):null,f="loading"===j,p=c?c.length>0?Object(o.jsxs)("div",{className:"char__search-panel",children:[Object(o.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(o.jsx)(O.b,{to:"/characters/".concat(c[0].id),className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"TO PAGE"})})]}):Object(o.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(o.jsxs)("div",{className:"char__search",children:[Object(o.jsx)(_.d,{initialValues:{search:""},validationSchema:g.a({search:g.b().required("This field is required")}),onSubmit:function(e){var t,c=e.search;t=c,u(),l(t).then(h).then((function(){return d("confirmed")}))},children:Object(o.jsxs)(_.c,{onChange:function(e){return e.target.value?null:a(null)},children:[Object(o.jsx)("label",{className:"char__search-title",children:"Or find a character by name:"}),Object(o.jsxs)("div",{className:"char__search-panel",children:[Object(o.jsx)(_.b,{id:"search",name:"search",type:"text",placeholder:"Enter name"}),Object(o.jsx)("button",{className:"button button__main",children:Object(o.jsx)("div",{className:"inner",disabled:f,children:"FIND"})})]}),Object(o.jsx)(_.a,{component:"div",name:"search",className:"char__search-error"})]})}),b,p]})},k=c(46),w=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(r.useState)(null),t=Object(n.a)(e,2),c=t[0],a=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(k.a,{children:[Object(o.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(o.jsx)("title",{children:"Marvel information portal"})]}),Object(o.jsx)(x.a,{children:Object(o.jsx)(u,{})}),Object(o.jsxs)("div",{className:"char__content",children:[Object(o.jsx)(x.a,{children:Object(o.jsx)(f,{onCharSelected:function(e){a(e)}})}),Object(o.jsxs)("div",{className:"char__panel",children:[Object(o.jsx)(x.a,{children:Object(o.jsx)(v,{charId:c})}),Object(o.jsx)(x.a,{children:Object(o.jsx)(N,{})})]})]}),Object(o.jsx)("img",{className:"bg-decoration",src:w,alt:"vision"})]})}}}]);
//# sourceMappingURL=5.d27855a0.chunk.js.map