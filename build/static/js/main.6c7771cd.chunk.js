(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(10),s=a.n(r),i=a(2),o=a(3),l=a(5),h=a(4),d=(a(15),a(0)),u=function(){return Object(d.jsxs)("header",{className:"app__header",children:[Object(d.jsx)("h1",{className:"app__title",children:Object(d.jsxs)("a",{href:"#",children:[Object(d.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(d.jsx)("nav",{className:"app__menu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Comics"})})]})})]})},j=(a(17),a.p+"static/media/mjolnir.61f31e18.png"),m=a(6),b=a.n(m),f=a(7),p=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=cb9119d84ffeb91c59dc6c6080764863",this._baseOffset=1247,this.getResource=function(){var e=Object(f.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(f.a)(b.a.mark((function e(){var a,n,c=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>0&&void 0!==c[0]?c[0]:t._baseOffset,e.next=3,t.getResource("".concat(t._apiBase,"characters?limit=9&offset=").concat(a,"&").concat(t._apiKey));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(f.a)(b.a.mark((function e(a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters/").concat(a,"?").concat(t._apiKey));case 2:return n=e.sent,e.abrupt("return",t._transformCharacter(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{id:e.id,name:e.name,description:e.description.length>180?"".concat(e.description.slice(0,180),"..."):e.description.length<=0?"There is not description":e.description,homepage:e.urls[0].url,wiki:e.urls[1].url,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,comics:e.comics.items}}},O=a.p+"static/media/spinner.cf2d997a.gif",v=(a(19),function(){return Object(d.jsx)("div",{className:"spinner",children:Object(d.jsx)("img",{src:O,alt:"loading"})})}),_=a.p+"static/media/error.be36707d.svg",x=(a(20),function(){return Object(d.jsxs)("div",{className:"error",children:[Object(d.jsx)("img",{src:_,alt:"error"}),Object(d.jsx)("div",{className:"error__text",children:"Something  went wrong"})]})}),g=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={char:{},loading:!0,error:!1},e.marvelService=new p,e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=Math.floor(401*Math.random()+1011e3);e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,n=e.error,c=n?Object(d.jsx)(x,{}):null,r=a?Object(d.jsx)(v,{}):null,s=a||n?null:Object(d.jsx)(N,{char:t});return Object(d.jsxs)("div",{className:"randomchar",children:[c,r,s,Object(d.jsxs)("div",{className:"randomchar__static",children:[Object(d.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(d.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(d.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(d.jsx)("button",{onClick:this.updateChar,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"try it"})}),Object(d.jsx)("img",{src:j,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(n.Component),N=function(e){var t,a=e.char,n=a.thumbnail,c=a.description,r=a.name,s=a.homepage,i=a.wiki;return t="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n?"contain":"unset",Object(d.jsxs)("div",{className:"randomchar__block",children:[Object(d.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img",style:{objectFit:t}}),Object(d.jsxs)("div",{className:"randomchar__info",children:[Object(d.jsx)("p",{className:"randomchar__name",children:r}),Object(d.jsx)("p",{className:"randomchar__descr",children:c}),Object(d.jsxs)("div",{className:"randomchar__btns",children:[Object(d.jsx)("a",{href:s,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:i,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},C=g,k=a(9),y=(a(21),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={charList:[],loading:!0,error:!1,newItemLoading:!1,offset:1247,charEnded:!1},e.marvelService=new p,e.onRequest=function(t){e.onCharListLoading(),e.marvelService.getAllCharacters(t).then(e.onCharListLoaded).catch(e.onError)},e.onCharListLoaded=function(t){var a=!1;t.length<9&&(a=!0),e.setState((function(e){var n=e.offset,c=e.charList;return{charList:[].concat(Object(k.a)(c),Object(k.a)(t)),loading:!1,newItemLoading:!1,offset:n+9,charEnded:a}}))},e.onCharListLoading=function(){e.setState({newItemLoading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e.itemRefs=[],e.setRef=function(t){e.itemRefs.push(t)},e.focusOnItem=function(t){e.itemRefs.forEach((function(e){e.classList.remove("char__item_selected")})),e.itemRefs[t].classList.add("char__item_selected"),e.itemRefs[t].focus()},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.onRequest()}},{key:"renderItems",value:function(e){var t=this,a=e.map((function(e,a){var n;return n="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail?"unset":"cover",Object(d.jsxs)("li",{tabIndex:"0",className:"char__item",ref:t.setRef,onClick:function(){t.props.onCharSelected(e.id),t.focusOnItem(a)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(t.props.onCharSelected(e.id),t.focusOnItem(a))},children:[Object(d.jsx)("img",{src:e.thumbnail,alt:e.name,style:{objectFit:n}}),Object(d.jsx)("div",{className:"char__name",children:e.name})]},e.id)}));return Object(d.jsx)("ul",{className:"char__grid",children:a})}},{key:"render",value:function(){var e=this,t=this.state,a=t.charList,n=t.loading,c=t.error,r=t.offset,s=t.newItemLoading,i=t.charEnded,o=this.renderItems(a),l=c?Object(d.jsx)(x,{}):null,h=n?Object(d.jsx)(v,{}):null,u=n||c?null:o;return Object(d.jsxs)("div",{className:"char__list",children:[l,h,u,Object(d.jsx)("button",{className:"button button__main button__long",disabled:s,onClick:function(){return e.onRequest(r)},style:{display:i?"none":"block"},children:Object(d.jsx)("div",{className:"inner",children:"load more"})})]})}}]),a}(n.Component)),w=(a(22),a(23),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(d.jsxs)("div",{className:"skeleton",children:[Object(d.jsxs)("div",{className:"pulse skeleton__header",children:[Object(d.jsx)("div",{className:"pulse skeleton__circle"}),Object(d.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"})]})]})}),L=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={char:null,loading:!1,error:!1},e.marvelService=new p,e.onCharLoading=function(){e.setState({loading:!0})},e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=e.props.charId;t&&(e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e){this.props.charId!==e.charId&&this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,n=e.error,c=t||a||n?null:Object(d.jsx)(w,{}),r=n?Object(d.jsx)(x,{}):null,s=a?Object(d.jsx)(v,{}):null,i=a||n||!t?null:Object(d.jsx)(S,{char:t});return Object(d.jsxs)("div",{className:"char__info",children:[r,s,c,i]})}}]),a}(n.Component),S=function(e){var t,a=e.char,n=a.thumbnail,c=a.name,r=a.description,s=a.wiki,i=a.homepage,o=a.comics;return t="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n?"contain":"unset",Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"char__basics",children:[Object(d.jsx)("img",{src:n,alt:c,style:{objectFit:t}}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"char__info-name",children:c}),Object(d.jsxs)("div",{className:"char__btns",children:[Object(d.jsx)("a",{href:i,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(d.jsx)("div",{className:"char__descr",children:r}),Object(d.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(d.jsxs)("ul",{className:"char__comics-list",children:[o.length>0?null:"Not found",o.slice(0,10).map((function(e,t){return Object(d.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})},I=L,R=a.p+"static/media/vision.067d4ae1.png",E=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={error:!1},e}return Object(o.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return!0===this.state.error?Object(d.jsx)(x,{}):this.props.children}}]),a}(n.Component),A=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={selectedChar:null},e.onCharSelected=function(t){e.setState({selectedChar:t})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(E,{children:Object(d.jsx)(C,{})}),Object(d.jsxs)("div",{className:"char__content",children:[Object(d.jsxs)(E,{children:[Object(d.jsx)(y,{onCharSelected:this.onCharSelected})," "]}),Object(d.jsxs)(E,{children:[" ",Object(d.jsx)(I,{charId:this.state.selectedChar})," "]})]}),Object(d.jsx)("img",{className:"bg-decoration",src:R,alt:"vision"})]})]})}}]),a}(n.Component);a(24);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.6c7771cd.chunk.js.map