(function(e){function a(a){for(var o,r,n=a[0],d=a[1],i=a[2],c=0,u=[];c<n.length;c++)r=n[c],Object.prototype.hasOwnProperty.call(p,r)&&p[r]&&u.push(p[r][0]),p[r]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);b&&b(a);while(u.length)u.shift()();return s.push.apply(s,i||[]),t()}function t(){for(var e,a=0;a<s.length;a++){for(var t=s[a],o=!0,r=1;r<t.length;r++){var d=t[r];0!==p[d]&&(o=!1)}o&&(s.splice(a--,1),e=n(n.s=t[0]))}return e}var o={},p={app:0},s=[];function r(e){return n.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4141c7e9"}[e]+".js"}function n(a){if(o[a])return o[a].exports;var t=o[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.e=function(e){var a=[],t=p[e];if(0!==t)if(t)a.push(t[2]);else{var o=new Promise((function(a,o){t=p[e]=[a,o]}));a.push(t[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,n.nc&&d.setAttribute("nonce",n.nc),d.src=r(e);var i=new Error;s=function(a){d.onerror=d.onload=null,clearTimeout(c);var t=p[e];if(0!==t){if(t){var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,t[1](i)}p[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(a)},n.m=e,n.c=o,n.d=function(e,a,t){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)n.d(t,o,function(a){return e[a]}.bind(null,o));return t},n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="VUEONE/",n.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=a,d=d.slice();for(var c=0;c<d.length;c++)a(d[c]);var b=i;s.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},1:function(e,a){},"4eae":function(e,a,t){},"53dd":function(e,a,t){"use strict";var o=t("4eae"),p=t.n(o);p.a},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),p=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),t("router-view")],1)},s=[],r=(t("5c0b"),t("2877")),n={},d=Object(r["a"])(n,p,s,!1,null,null,null),i=d.exports,c=(t("d3b7"),t("8c4f")),b=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("h1",[e._v("Videos")]),t("div",{staticClass:"video-container"},e._l(e.videos,(function(a){return t("div",{key:a.id},[t("router-link",{attrs:{to:{name:"video-watch",params:{id:a.id}}}},[t("div",{staticClass:"video-box"},[t("img",{attrs:{src:a.thumbnail,alt:""}}),t("div",[t("h3",[e._v(e._s(a.name))]),t("div",{domProps:{innerHTML:e._s(a.description)}})])])])],1)})),0)])},u=[],l={name:"Home",components:{},data:function(){return{videos:this.$store.state.videos}}},f=l,h=(t("6689"),Object(r["a"])(f,b,u,!1,null,"f1a0ee1a",null)),m=h.exports,v=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"video-watch-page"},[t("video-player",{ref:"videoPlayer",staticClass:"video-player-box",attrs:{options:e.playerOptions}}),t("img",{attrs:{src:e.video.thumbnail,alt:""}}),t("h1",[e._v(e._s(e.video.name))]),t("div",{domProps:{innerHTML:e._s(e.video.description)}})],1)},y=[],g=(t("7db0"),t("fda2"),t("d6d3")),w={components:{videoPlayer:g["videoPlayer"]},computed:{video:function(){var e=this;return this.$store.state.videos.find((function(a){return a.id==e.$route.params.id}))},playerOptions:function(){return{playerOptions:{language:"en",playbackRates:[.7,1,1.5,2,2.5,3],sources:[{type:"video/mp4",src:this.video.videoUrl}],poster:this.video.thumbnail}}}}},x=w,_=(t("53dd"),Object(r["a"])(x,v,y,!1,null,null,null)),O=_.exports;o["a"].use(c["a"]);var H=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}},{path:"/video/:id",name:"video-watch",component:O,params:!0}],j=new c["a"]({mode:"history",base:"VUEONE/",routes:H}),A=j,B=t("2f62");o["a"].use(B["a"]);var E=new B["a"].Store({state:{videos:[{id:1,name:"ESO5 Ha Ha",description:"<p>Lorem AppBar is displayed at the top of the app. AppBar contains 5 parts, as shown below</p>",thumbnail:"https://images.pexels.com/photos/3361230/pexels-photo-3361230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",videoUrl:"https://vdept.bdstatic.com/7464437a546b506b57617a414c6d4453/38787a567a7a726c/862155959e5fdbef7dae3f23439aed3e2c34a76f26024f891dbee66a1dae7d02b3bebac43fb8c19ba96cb30b88954125.mp4?auth_key=1584609269-0-0-0147bbd2d80c1ab63680486469f034de"},{id:2,name:"ESO5 Ha Ha1",description:"<p>Lorem AppBar is displayed at the top of the app. AppBar contains 5 parts, as shown below</p>",thumbnail:"https://images.pexels.com/photos/3361230/pexels-photo-3361230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",videoUrl:"https://vdept.bdstatic.com/7464437a546b506b57617a414c6d4453/38787a567a7a726c/862155959e5fdbef7dae3f23439aed3e2c34a76f26024f891dbee66a1dae7d02b3bebac43fb8c19ba96cb30b88954125.mp4?auth_key=1584609269-0-0-0147bbd2d80c1ab63680486469f034de"},{id:3,name:"ESO5 Ha Ha2",description:"<p>Lorem AppBar is displayed at the top of the app. AppBar contains 5 parts, as shown below</p>",thumbnail:"https://images.pexels.com/photos/3361230/pexels-photo-3361230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",videoUrl:"https://vdept.bdstatic.com/7464437a546b506b57617a414c6d4453/38787a567a7a726c/862155959e5fdbef7dae3f23439aed3e2c34a76f26024f891dbee66a1dae7d02b3bebac43fb8c19ba96cb30b88954125.mp4?auth_key=1584609269-0-0-0147bbd2d80c1ab63680486469f034de"},{id:4,name:"ESO5 Ha Ha3",description:"<p>Lorem AppBar is displayed at the top of the app. AppBar contains 5 parts, as shown below</p>",thumbnail:"https://images.pexels.com/photos/3361230/pexels-photo-3361230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",videoUrl:"https://vdept.bdstatic.com/7464437a546b506b57617a414c6d4453/38787a567a7a726c/862155959e5fdbef7dae3f23439aed3e2c34a76f26024f891dbee66a1dae7d02b3bebac43fb8c19ba96cb30b88954125.mp4?auth_key=1584609269-0-0-0147bbd2d80c1ab63680486469f034de"},{id:5,name:"ESO5 Ha Ha4",description:"<p>Lorem AppBar is displayed at the top of the app. AppBar contains 5 parts, as shown below</p>",thumbnail:"https://images.pexels.com/photos/3361230/pexels-photo-3361230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",videoUrl:"https://vdept.bdstatic.com/7464437a546b506b57617a414c6d4453/38787a567a7a726c/862155959e5fdbef7dae3f23439aed3e2c34a76f26024f891dbee66a1dae7d02b3bebac43fb8c19ba96cb30b88954125.mp4?auth_key=1584609269-0-0-0147bbd2d80c1ab63680486469f034de"},{id:7,name:"ESO5 Ha Ha5",description:"<p>Lorem AppBar is displayed at the top of the app. AppBar contains 5 parts, as shown below</p>",thumbnail:"https://images.pexels.com/photos/3361230/pexels-photo-3361230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{id:6,name:"ESO5 Ha Ha6",description:"<p>Lorem AppBar is displayed at the top of the app. AppBar contains 5 parts, as shown below</p>",thumbnail:"https://images.pexels.com/photos/3361230/pexels-photo-3361230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",videoUrl:"https://vdept.bdstatic.com/7464437a546b506b57617a414c6d4453/38787a567a7a726c/862155959e5fdbef7dae3f23439aed3e2c34a76f26024f891dbee66a1dae7d02b3bebac43fb8c19ba96cb30b88954125.mp4?auth_key=1584609269-0-0-0147bbd2d80c1ab63680486469f034de"},{id:9,name:"ESO5 Ha Ha7",description:"<p>Lorem AppBar is displayed at the top of the app. AppBar contains 5 parts, as shown below</p>",thumbnail:"https://images.pexels.com/photos/3361230/pexels-photo-3361230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",videoUrl:"https://vdept.bdstatic.com/7464437a546b506b57617a414c6d4453/38787a567a7a726c/862155959e5fdbef7dae3f23439aed3e2c34a76f26024f891dbee66a1dae7d02b3bebac43fb8c19ba96cb30b88954125.mp4?auth_key=1584609269-0-0-0147bbd2d80c1ab63680486469f034de"},{id:8,name:"ESO5 Ha Ha8",description:"<p>Lorem AppBar is displayed at the top of the app. AppBar contains 5 parts, as shown below</p>",thumbnail:"https://images.pexels.com/photos/3361230/pexels-photo-3361230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",videoUrl:"https://vdept.bdstatic.com/7464437a546b506b57617a414c6d4453/38787a567a7a726c/862155959e5fdbef7dae3f23439aed3e2c34a76f26024f891dbee66a1dae7d02b3bebac43fb8c19ba96cb30b88954125.mp4?auth_key=1584609269-0-0-0147bbd2d80c1ab63680486469f034de"},{id:10,name:"ESO5 Ha Ha9",description:"<p>Lorem AppBar is displayed at the top of the app. AppBar contains 5 parts, as shown below</p>",thumbnail:"https://images.pexels.com/photos/3361230/pexels-photo-3361230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",videoUrl:"https://vdept.bdstatic.com/7464437a546b506b57617a414c6d4453/38787a567a7a726c/862155959e5fdbef7dae3f23439aed3e2c34a76f26024f891dbee66a1dae7d02b3bebac43fb8c19ba96cb30b88954125.mp4?auth_key=1584609269-0-0-0147bbd2d80c1ab63680486469f034de"},{id:11,name:"ESO5 Ha Ha0",description:"<p>Lorem AppBar is displayed at the top of the app. AppBar contains 5 parts, as shown below</p>",thumbnail:"https://images.pexels.com/photos/3361230/pexels-photo-3361230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",videoUrl:"https://vdept.bdstatic.com/7464437a546b506b57617a414c6d4453/38787a567a7a726c/862155959e5fdbef7dae3f23439aed3e2c34a76f26024f891dbee66a1dae7d02b3bebac43fb8c19ba96cb30b88954125.mp4?auth_key=1584609269-0-0-0147bbd2d80c1ab63680486469f034de"}]},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:A,store:E,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,a,t){"use strict";var o=t("9c0c"),p=t.n(o);p.a},6689:function(e,a,t){"use strict";var o=t("d7ee"),p=t.n(o);p.a},"9c0c":function(e,a,t){},d7ee:function(e,a,t){}});
//# sourceMappingURL=app.57610f8c.js.map