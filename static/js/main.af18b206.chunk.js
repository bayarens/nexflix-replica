(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{30:function(t,e,n){},35:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),c=n(22),s=n.n(c),i=(n(30),n(9)),o=n(10),u=n(12),p=n(11),l=n(2),h=n.n(l),j=n(5),d=n(23);n.n(d).a.config();var f=Object({NODE_ENV:"production",PUBLIC_URL:"/nexflix-replica",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TMDB_KEY,v="https://api.themoviedb.org/3",b="/movie/popular",O="/tv/popular",x="/movie/top_rated",g="/tv/top_rated",y="/movie/now_playing",m="/tv/on_the_air",w="/tv/airing_today",S="/search/multi",k="/genre/movie/list",C="/genre/tv/list",_="/discover/movie",M="/discover/tv",T=function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(v).concat(b,"?api_key=").concat(f));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(v).concat(O,"?api_key=").concat(f));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(v).concat(x,"?api_key=").concat(f));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(v).concat(g,"?api_key=").concat(f));case 2:return e=t.sent,console.log(e),t.abrupt("return",e.json());case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),V=function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(v).concat(y,"?api_key=").concat(f));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(v).concat(m,"?api_key=").concat(f));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),F=function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(v).concat(w,"?api_key=").concat(f));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=Object(j.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(v).concat(S,"?api_key=").concat(f,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(v).concat(k,"?api_key=").concat(f));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),I=function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(v).concat(C,"?api_key=").concat(f));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(){var t=Object(j.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(v).concat(_,"?api_key=").concat(f,"&with_genres=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),H=function(){var t=Object(j.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(v).concat(M,"?api_key=").concat(f,"&with_genres=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),K=n(0);var L=function(t){return Object(K.jsxs)("div",{children:[Object(K.jsx)("h3",{children:t.title}),Object(K.jsx)("span",{id:"reel",children:t.list.map((function(t){return Object(K.jsxs)("div",{className:"contentCard",children:[Object(K.jsx)("span",{id:"title",children:t.title||t.name}),Object(K.jsx)("img",{id:"poster",src:t.poster_path||t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path||t.profile_path):"https://bitsofco.de/content/images/2018/12/broken-1.png",alt:t.title}),Object(K.jsx)("p",{id:"overview",children:t.overview})]},t.id)}))})]})},W=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).dropDownMenu=function(t){r.setState({selectedCat:t.target.value}),A(t.target.value).then((function(t){return r.setState({displayedCat:t.results})}))},r.convertIDtoString=function(t){return r.state.genreMenu.find((function(e){return e.id==t})).name},r.state={genreMenu:[],displayedCat:[],selectedCat:""},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;B().then((function(e){return t.setState({genreMenu:e.genres})}))}},{key:"render",value:function(){return Object(K.jsxs)("div",{children:[this.state.genreMenu.length>0&&Object(K.jsxs)("select",{onChange:this.dropDownMenu,value:this.state.selectedCat,children:[Object(K.jsx)("option",{disabled:!0,value:"",children:"Categories"}),this.state.genreMenu.map((function(t){return Object(K.jsx)("option",{value:t.id,children:t.name},t.id)}))]}),this.state.displayedCat.length>0&&Object(K.jsx)(L,{list:this.state.displayedCat,title:this.convertIDtoString(this.state.selectedCat)})]})}}]),n}(a.a.Component),J=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).state={popMovies:[],topRatedMovies:[],nowPlayingM:[]},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;T().then((function(e){return t.setState({popMovies:e.results})})),P().then((function(e){return t.setState({topRatedMovies:e.results})})),V().then((function(e){return t.setState({nowPlayingM:e.results})}))}},{key:"render",value:function(){return Object(K.jsxs)(a.a.Fragment,{children:[Object(K.jsx)(W,{}),Object(K.jsx)(L,{list:this.state.nowPlayingM,title:"Now Playing"}),Object(K.jsx)(L,{list:this.state.popMovies,title:"Popular Movies"}),Object(K.jsx)(L,{list:this.state.topRatedMovies,title:"Top Rated"})]})}}]),n}(a.a.Component),U=n(24),q=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).dropDownMenu=function(t){r.setState({selectedCat:t.target.value}),H(t.target.value).then((function(t){return r.setState({displayedCat:t.results})}))},r.convertIDtoString=function(t){return r.state.genreMenu.find((function(e){return e.id==t})).name},r.state={genreMenu:[],displayedCat:[],selectedCat:""},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;I().then((function(e){return t.setState({genreMenu:e.genres})}))}},{key:"render",value:function(){return Object(K.jsxs)("div",{children:[this.state.genreMenu.length>0&&Object(K.jsxs)("select",{onChange:this.dropDownMenu,value:this.state.selectedCat,children:[Object(K.jsx)("option",{disabled:!0,value:"",children:"Categories"}),this.state.genreMenu.map((function(t){return Object(K.jsx)("option",{value:t.id,children:t.name},t.id)}))]}),this.state.displayedCat.length>0&&Object(K.jsx)(L,Object(U.a)({list:this.state.displayedCat,title:this.state.displayedCat},"title",this.convertIDtoString(this.state.selectedCat)))]})}}]),n}(a.a.Component),Y=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).state={popTV:[],topRatedTV:[],nowPlayingTV:[],airingToday:[]},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;D().then((function(e){return t.setState({popTV:e.results})})),R().then((function(e){return t.setState({topRatedTV:e.results})})),E().then((function(e){return t.setState({nowPlayingTV:e.results})})),F().then((function(e){return t.setState({airingToday:e.results})}))}},{key:"render",value:function(){return Object(K.jsxs)(a.a.Fragment,{children:[Object(K.jsx)(q,{}),Object(K.jsx)(L,{list:this.state.airingToday,title:"Airing Today"}),Object(K.jsx)(L,{list:this.state.nowPlayingTV,title:"TV Shows Now Playing"}),Object(K.jsx)(L,{list:this.state.popTV,title:"Popular TV Shows"}),Object(K.jsx)(L,{list:this.state.topRatedTV,title:"Top Rated TV Shows"})]})}}]),n}(a.a.Component),z=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).changeSearch=function(t){r.setState({search:t.target.value})},r.triggerSearch=function(){var t=Object(j.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(r.state.search);case 2:n=t.sent,r.setState({results:n.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r.state={search:"",results:[]},r}return Object(o.a)(n,[{key:"render",value:function(){return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)("div",{id:"search",children:[Object(K.jsx)("input",{type:"text",value:this.state.search,onChange:this.changeSearch,id:"inputBar"}),Object(K.jsx)("button",{onClick:this.triggerSearch,id:"searchButton",children:Object(K.jsx)("span",{children:"Search"})})]}),Object(K.jsx)(L,{list:this.state.results,title:"Search Results"})]})}}]),n}(a.a.Component),G=(n(35),n(14));function Q(t){return Object(K.jsxs)("div",{id:"navBar",children:[Object(K.jsxs)(G.b,{to:"/",children:[" ",Object(K.jsx)("button",{className:"button",children:"Home"})]}),Object(K.jsxs)(G.b,{to:"/movies",children:[" ",Object(K.jsx)("button",{className:"button",children:"Movies"})]}),Object(K.jsx)(G.b,{to:"/tv",children:Object(K.jsx)("button",{className:"button",children:"TV"})})]})}var X=n(3);function Z(){return Object(K.jsx)("div",{children:Object(K.jsxs)(G.a,{children:[Object(K.jsx)(Q,{}),Object(K.jsxs)(X.c,{children:[Object(K.jsx)(X.a,{exact:!0,path:"/movies",component:J}),Object(K.jsx)(X.a,{exact:!0,path:"/tv",component:Y}),Object(K.jsx)(X.a,{exact:!0,path:"/",component:z})]})]})})}var $=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),r(t),a(t),c(t),s(t)}))};s.a.render(Object(K.jsx)(a.a.StrictMode,{children:Object(K.jsx)(Z,{})}),document.getElementById("root")),$()}},[[41,1,2]]]);
//# sourceMappingURL=main.af18b206.chunk.js.map