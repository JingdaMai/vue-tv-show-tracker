(function(s){function e(e){for(var a,r,i=e[0],o=e[1],u=e[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(s[a]=o[a]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),t()}function t(){for(var s,e=0;e<c.length;e++){for(var t=c[e],a=!0,i=1;i<t.length;i++){var o=t[i];0!==n[o]&&(a=!1)}a&&(c.splice(e--,1),s=r(r.s=t[0]))}return s}var a={},n={app:0},c=[];function r(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=s,r.c=a,r.d=function(s,e,t){r.o(s,e)||Object.defineProperty(s,e,{enumerable:!0,get:t})},r.r=function(s){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},r.t=function(s,e){if(1&e&&(s=r(s)),8&e)return s;if(4&e&&"object"===typeof s&&s&&s.__esModule)return s;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var a in s)r.d(t,a,function(e){return s[e]}.bind(null,a));return t},r.n=function(s){var e=s&&s.__esModule?function(){return s["default"]}:function(){return s};return r.d(e,"a",e),e},r.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},r.p="/vue-tv-show-tracker/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=o;c.push([0,"chunk-vendors"]),t()})({0:function(s,e,t){s.exports=t("56d7")},4678:function(s,e,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(s){var e=c(s);return t(e)}function c(s){if(!t.o(a,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return a[s]}n.keys=function(){return Object.keys(a)},n.resolve=c,s.exports=n,n.id="4678"},"56d7":function(s,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),n=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],r={name:"App"},i=r,o=t("2877"),u=Object(o["a"])(i,n,c,!1,null,null,null),d=u.exports,l=t("8c4f"),f=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-8"},[t("router-link",{attrs:{to:"/"}},[t("FontAwesomeIcon",{attrs:{icon:"angle-double-left"}}),s._v("back ")],1),t("section",{staticClass:"content"},[t("h1",{staticClass:"title is-2"},[s._v(" "+s._s(s.details.name)+" ")]),t("div",{domProps:{innerHTML:s._s(s.details.summary)}})]),s._l(s.schedule,(function(e){return t("div",{key:e.season},[t("h2",{staticClass:"title is-4"},[s._v(" Season "+s._s(e.season)+" ")]),t("table",{staticClass:"table is-striped is-fullwidth"},[s._m(0,!0),t("tbody",s._l(e.episodes,(function(e){return t("tr",{key:e.id},[t("td",[s._v(s._s(e.airdate))]),t("td",[s._v(s._s(e.number))]),t("td",[s._v(s._s(e.name))])])})),0)])])}))],2),t("div",{staticClass:"column is-4"},[s.details.image?t("img",{attrs:{src:s.details.image.original,alt:s.details.name}}):s._e()])])},b=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("thead",[t("tr",[t("th",[s._v("Date")]),t("th",[s._v("Number")]),t("th",[s._v("Title")])])])}],h=(t("4160"),t("159b"),t("d3b7"),"https://api.tvmaze.com/"),j={get:function(s){var e=h+s;return fetch(e).then((function(s){return s.json()}))}},p={name:"ShowDetails",data:function(){return{details:{},schedule:{}}},created:function(){var s=this;j.get("shows/".concat(this.$route.params.id)).then((function(e){s.details=e}));var e={};j.get("shows/".concat(this.$route.params.id,"/episodes")).then((function(t){t.reverse().forEach((function(s){var t="season_".concat(s.season);e[t]||(e[t]={episodes:[]}),e[t].season=s.season,e[t].episodes.unshift(s)})),s.schedule=e}))}},m=p,v=Object(o["a"])(m,f,b,!1,null,"68d6fe61",null),_=v.exports,w=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("ShowSearch",{attrs:{"is-subscribed":s.isSubscribed},on:{subscribe:s.subscribe}}),t("section",{staticClass:"section"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-3"},[t("nav",{staticClass:"panel"},[t("p",{staticClass:"panel-heading"},[s._v(" Shows ")]),s._l(s.subscriptions,(function(e){return t("div",{key:e.id,staticClass:"panel-block show-item"},[t("router-link",{attrs:{to:"/show/"+e.id}},[s._v(" "+s._s(e.name)+" ")]),t("div",[t("a",{on:{click:function(t){return s.subscribe(e)}}},[t("FontAwesomeIcon",{attrs:{icon:"times"}})],1)])],1)}))],2)]),t("div",{staticClass:"column is-9"},[t("h1",{staticClass:"title is-3"},[s._v(" Your schedule ")]),0===s.subscriptions.length?t("p",[s._v(" You don't have any subscriptions yet. Search for shows above, then subscribe! ")]):s._e(),t("table",{staticClass:"table is-striped is-fullwidth"},[s._m(0),s._l(s.scheduleDates,(function(e){return[t("thead",{key:e},[t("tr",[t("th",{attrs:{colspan:"2"}},[s._v(" "+s._s(e)+" ")])])]),t("tbody",{key:e},s._l(s.schedule[e],(function(e){return t("tr",{key:e.episode.id},[t("td",[s._v(s._s(e.episode.name))]),t("td",[s._v(s._s(e.episode.season)+"x"+s._s(e.episode.number)+": "+s._s(e.episode.name))])])})),0)]}))],2)])])])],1)},g=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("thead",[t("tr",[t("th",[s._v("Show")]),t("th",[s._v("Episode")])])])}],k=(t("c740"),t("a434"),t("b64b"),t("c1df")),y=t.n(k),C=t("59ca"),S=t.n(C),z=(t("e71f"),{apiKey:"AIzaSyA_aFbNC0WH2zLSpdR1qDUjsUZ-y1h6GRU",authDomain:"vue-tv-show-tracker-d7cfb.firebaseapp.com",databaseURL:"https://vue-tv-show-tracker-d7cfb.firebaseio.com",projectId:"vue-tv-show-tracker-d7cfb",storageBucket:"vue-tv-show-tracker-d7cfb.appspot.com",messagingSenderId:"358433827231",appId:"1:358433827231:web:548cd134b1bc66899875aa",measurementId:"G-FL5H2LEKES"}),I=S.a.initializeApp(z),x=I.firestore(),O={setData:function(s){x.collection("subscriptions").doc("shows").set({subscriptions:s})},getData:function(){return x.collection("subscriptions").doc("shows").get()}},E=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("form",{attrs:{id:"search"},on:{submit:function(e){return e.preventDefault(),s.search(e)}}},[t("div",{staticClass:"filed has-addons"},[t("p",{staticClass:"control is-expanded has-icon has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.searchInput,expression:"searchInput"}],staticClass:"input",attrs:{type:"text",placeholder:"Search for shows ..."},domProps:{value:s.searchInput},on:{input:function(e){e.target.composing||(s.searchInput=e.target.value)}}}),t("span",{staticClass:"icon is-small is-left"},[t("FontAwesomeIcon",{attrs:{icon:"search"}})],1)])])]),s.searchResult.length>0?t("a",{staticClass:"pull-left",on:{click:s.clearSearch}},[s._v(" Clear search "),t("FontAwesomeIcon",{attrs:{icon:"times"}})],1):s._e(),s.searchError?t("p",[s._v(" No results found. ")]):s._e(),t("div",{staticClass:"columns is-multiline"},s._l(s.searchResult,(function(e){return t("div",{key:e.show.id,staticClass:"column is-2"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-image"},[t("router-link",{attrs:{to:"/show/"+e.show.id}},[e.show.image?t("img",{attrs:{src:e.show.image.medium,alt:e.show.name}}):s._e()])],1),t("div",{staticClass:"card-content"},[t("p",{staticClass:"title is-4"},[t("router-link",{attrs:{to:"/show/"+e.show.id}},[s._v(" "+s._s(e.show.name)+" ")])],1),e.show.network?t("p",{staticClass:"subtitle is-6"},[s._v(" Running on "+s._s(e.show.network.name)+" ")]):s._e()]),t("div",{staticClass:"card-footer"},[t("div",{staticClass:"card-footer-item"},[s.isSubscribed(e.show)?s._e():t("a",{on:{click:function(t){return s.subscribe(e.show)}}},[t("FontAwesomeIcon",{attrs:{icon:"star"}}),s._v(" Subscribe ")],1),s.isSubscribed(e.show)?t("a",{staticClass:"has-text-success",on:{click:function(t){return s.subscribe(e.show)}}},[t("FontAwesomeIcon",{attrs:{icon:"star"}}),s._v(" Subscribed! ")],1):s._e()])])])])})),0)])},D=[],A={props:{isSubscribed:{type:Function,default:function(){}}},data:function(){return{searchInput:"",searchResult:[],searchError:!1}},methods:{search:function(){var s=this;this.searchResult=[],this.searchError=!1,j.get("search/shows?q="+this.searchInput).then((function(e){e.length>0?s.searchResult=e:s.searchError=!0}))},clearSearch:function(){this.searchInput="",this.searchResult=[],this.searchError=!1},subscribe:function(s){this.$emit("subscribe",s)}}},F=A,$=Object(o["a"])(F,E,D,!1,null,null,null),R=$.exports,P={components:{ShowSearch:R},data:function(){return{subscriptions:[],schedule:{}}},computed:{scheduleDates:function(){return Object.keys(this.schedule).sort((function(s,e){return y()(s).isBefore(e)}))}},watch:{subscriptions:function(s){this.getSchedule(),O.setData(s)}},created:function(){var s=this;O.getData().then((function(e){s.subscriptions=e.data().subscriptions,s.subscriptions||(s.subscriptions=[])})).catch(console.log)},methods:{isSubscribed:function(s){return-1!==this.subscriptions.findIndex((function(e){return e.id===s.id}))},subscribe:function(s){this.isSubscribed(s)?this.subscriptions.splice(this.subscriptions.findIndex((function(e){return e.id===s.id})),1):this.subscriptions.push(s)},getSchedule:function(){var s=this;this.schedule={},this.subscriptions.forEach((function(e){j.get("shows/".concat(e.id,"/episodes")).then((function(t){t.forEach((function(t){y()().subtract(7,"days").isBefore(t.airdate)&&(void 0===s.schedule[t.airdate]&&s.$set(s.schedule,t.airdate,[]),s.schedule[t.airdate].push({episode:t,show:e}))}))}))}))}}},L=P,M=(t("64ae"),Object(o["a"])(L,w,g,!1,null,"3f0bcb8e",null)),N=M.exports;a["a"].use(l["a"]);var U=new l["a"]({routes:[{path:"/",component:N},{path:"/show/:id",component:_}]}),T=(t("92c6"),t("ecee")),q=t("c074"),B=t("ad3d");T["c"].add(q["a"]),a["a"].component("FontAwesomeIcon",B["a"]),new a["a"]({router:U,render:function(s){return s(d)}}).$mount("#app")},"64ae":function(s,e,t){"use strict";var a=t("7a23"),n=t.n(a);n.a},"7a23":function(s,e,t){}});
//# sourceMappingURL=app.c20bf37b.js.map