(function(e){function t(t){for(var r,o,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3d208642"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"415d71b9"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/UTG-Alumni/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"20a1":function(e,t,n){"use strict";var r=n("4a6e"),o=n.n(r);o.a},"4a6e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),o=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(o["a"]);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("top-header")],1),n("router-view")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{href:"#"}},[e._v("UTG AAA")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/"}},[e._v("Board of Directors")]),n("b-nav-item",{attrs:{to:"/about"}},[e._v("About")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[n("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[e._v("Search")])],1)],1)],1)],1)],1)},u=[],c=(n("8baf"),n("2877")),l={},f=Object(c["a"])(l,s,u,!1,null,null,null),d=f.exports,m={components:{"top-header":d}},p=m,b=(n("5c0b"),Object(c["a"])(p,a,i,!1,null,null,null)),v=b.exports,h=n("9483");Object(h["a"])("".concat("/UTG-Alumni/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var g=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-row",{attrs:{"aligh-v":"center"}},e._l(e.executives,(function(e){return n("executive-member",{key:e.id,attrs:{name:e.name,bio:e.bio,position:e.position,url:e.url}})})),1)],1)},w=[],_=(n("96cf"),n("1da1")),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-col",[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{"img-src":e.url,"img-alt":e.id,"img-top":"",tag:"article",footer:e.name},on:{click:e.showModal}},[n("b-card-text",{attrs:{title:e.url}},[e._v(" "+e._s(e.bio))])],1)],1),n("b-modal",{ref:"my-modal",attrs:{size:"xl","hide-footer":"",title:"Board of Directors"}},[n("div",{staticClass:"d-block text-center"},[n("b-card",{attrs:{"img-alt":e.id,footer:e.name}}),n("p",{staticClass:"modal-p"},[e._v(e._s(e.bio))])],1),n("b-button",{staticClass:"mt-3",attrs:{variant:"outline-danger",block:""},on:{click:e.hideModal}},[e._v("Close Me")])],1)],1)},k=[],j={props:["name","bio","id","url"],methods:{showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()},toggleModal:function(){this.$refs["my-modal"].toggle("#toggle-btn")}}},O=j,A=(n("20a1"),Object(c["a"])(O,x,k,!1,null,null,null)),C=A.exports,E={name:"Home",components:{"executive-member":C},mounted:function(){this.fetchData()},data:function(){return{executives:[],currentPage:1,rows:1,perPage:3}},methods:{fetchData:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("executive.json");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.executives=r,e.rows=e.executives.length;case 8:case"end":return t.stop()}}),t)})))()}}},S=E,P=Object(c["a"])(S,y,w,!1,null,null,null),T=P.exports;r["default"].use(g["a"]);var M=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],N=new g["a"]({mode:"history",base:"/UTG-Alumni/",routes:M}),$=N,D=n("2f62");r["default"].use(D["a"]);var B=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("f9e3");r["default"].use(o["a"]),r["default"].config.productionTip=!1,new r["default"]({router:$,store:B,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},6860:function(e,t,n){},"8baf":function(e,t,n){"use strict";var r=n("6860"),o=n.n(r);o.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.3beeb06e.js.map