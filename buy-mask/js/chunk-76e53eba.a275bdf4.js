(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76e53eba"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,r){var i=r("c6b6"),n=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var a=r.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"159b":function(t,e,r){var i=r("da84"),n=r("fdbc"),a=r("17c2"),s=r("9112");for(var o in n){var c=i[o],l=c&&c.prototype;if(l&&l.forEach!==a)try{s(l,"forEach",a)}catch(u){l.forEach=a}}},"17c2":function(t,e,r){"use strict";var i=r("b727").forEach,n=r("a640"),a=r("ae40"),s=n("forEach"),o=a("forEach");t.exports=s&&o?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,r){"use strict";var i=r("23e7"),n=r("17c2");i({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"4de4":function(t,e,r){"use strict";var i=r("23e7"),n=r("b727").filter,a=r("1dde"),s=r("ae40"),o=a("filter"),c=s("filter");i({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5319:function(t,e,r){"use strict";var i=r("d784"),n=r("825a"),a=r("7b0b"),s=r("50c4"),o=r("a691"),c=r("1d80"),l=r("8aa5"),u=r("14c3"),d=Math.max,f=Math.min,h=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,e,r,i){var g=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,C=i.REPLACE_KEEPS_$0,b=g?"$":"$0";return[function(r,i){var n=c(this),a=void 0==r?void 0:r[t];return void 0!==a?a.call(r,n,i):e.call(String(n),r,i)},function(t,i){if(!g&&C||"string"===typeof i&&-1===i.indexOf(b)){var a=r(e,t,this,i);if(a.done)return a.value}var c=n(t),h=String(this),p="function"===typeof i;p||(i=String(i));var v=c.global;if(v){var _=c.unicode;c.lastIndex=0}var y=[];while(1){var S=u(c,h);if(null===S)break;if(y.push(S),!v)break;var L=String(S[0]);""===L&&(c.lastIndex=l(h,s(c.lastIndex),_))}for(var k="",w=0,E=0;E<y.length;E++){S=y[E];for(var T=String(S[0]),R=d(f(o(S.index),h.length),0),M=[],A=1;A<S.length;A++)M.push(m(S[A]));var O=S.groups;if(p){var P=[T].concat(M,R,h);void 0!==O&&P.push(O);var $=String(i.apply(void 0,P))}else $=x(T,h,R,M,O,i);R>=w&&(k+=h.slice(w,R)+$,w=R+T.length)}return k+h.slice(w)}];function x(t,r,i,n,s,o){var c=i+t.length,l=n.length,u=v;return void 0!==s&&(s=a(s),u=p),e.call(o,u,(function(e,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,i);case"'":return r.slice(c);case"<":o=s[a.slice(1,-1)];break;default:var u=+a;if(0===u)return e;if(u>l){var d=h(u/10);return 0===d?e:d<=l?void 0===n[d-1]?a.charAt(1):n[d-1]+a.charAt(1):e}o=n[u-1]}return void 0===o?"":o}))}}))},"620c":function(t,e,r){},6547:function(t,e,r){var i=r("a691"),n=r("1d80"),a=function(t){return function(e,r){var a,s,o=String(n(e)),c=i(r),l=o.length;return c<0||c>=l?t?"":void 0:(a=o.charCodeAt(c),a<55296||a>56319||c+1===l||(s=o.charCodeAt(c+1))<56320||s>57343?t?o.charAt(c):a:t?o.slice(c,c+2):s-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"841c":function(t,e,r){"use strict";var i=r("d784"),n=r("825a"),a=r("1d80"),s=r("129f"),o=r("14c3");i("search",1,(function(t,e,r){return[function(e){var r=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,r):new RegExp(e)[t](String(r))},function(t){var i=r(e,t,this);if(i.done)return i.value;var a=n(t),c=String(this),l=a.lastIndex;s(l,0)||(a.lastIndex=0);var u=o(a,c);return s(a.lastIndex,l)||(a.lastIndex=l),null===u?-1:u.index}]}))},"8aa5":function(t,e,r){"use strict";var i=r("6547").charAt;t.exports=function(t,e,r){return e+(r?i(t,e).length:1)}},a640:function(t,e,r){"use strict";var i=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&i((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var i=r("83ab"),n=r("d039"),a=r("5135"),s=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,e){if(a(o,t))return o[t];e||(e={});var r=[][t],l=!!a(e,"ACCESSORS")&&e.ACCESSORS,u=a(e,0)?e[0]:c,d=a(e,1)?e[1]:void 0;return o[t]=!!r&&!n((function(){if(l&&!i)return!0;var t={length:-1};l?s(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,u,d)}))}},b0c0:function(t,e,r){var i=r("83ab"),n=r("9bf2").f,a=Function.prototype,s=a.toString,o=/^\s*function ([^ (]*)/,c="name";!i||c in a||n(a,c,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(t){return""}}})},b727:function(t,e,r){var i=r("0366"),n=r("44ad"),a=r("7b0b"),s=r("50c4"),o=r("65f0"),c=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d;return function(h,p,v,m){for(var g,C,b=a(h),x=n(b),_=i(p,v,3),y=s(x.length),S=0,L=m||o,k=e?L(h,y):r?L(h,0):void 0;y>S;S++)if((f||S in x)&&(g=x[S],C=_(g,S,b),t))if(e)k[S]=C;else if(C)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:c.call(k,g)}else if(u)return!1;return d?-1:l||u?u:k}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},bb51:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"fixed-top"},[t._m(0),r("div",{staticClass:"collapse",attrs:{id:"SearchContent"}},[r("div",{staticClass:"bg-dark py-4 px-2 px-sm-4 px-md-5"},[r("div",{staticClass:"input-group mb-4"},[r("div",{staticClass:"input-group-prepend"},[r("button",{staticClass:"btn btn-light",attrs:{type:"button"}},[t._v(t._s("address"===t.from.search.type?"地址":"藥局名稱"))]),r("span",{staticClass:"input-group-text cursor-pointer",on:{click:t.changeSearchType}},[r("i",{staticClass:"fa fa-retweet",attrs:{"aria-hidden":"true"}})])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.from.search.value,expression:"from.search.value"}],staticClass:"form-control",attrs:{type:"text",placeholder:"address"===t.from.search.type?"ex: 高雄市前鎮區":"ex: 大樹藥局"},domProps:{value:t.from.search.value},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch(e)},input:function(e){e.target.composing||t.$set(t.from.search,"value",e.target.value)}}}),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:t.onSearch}},[t._v("找口罩")])])]),r("div",{staticClass:"d-flex align-content-start",staticStyle:{"overflow-x":"auto"}},[r("rm-button-group",{attrs:{list:t.totalList},on:{oneClick:t.totalListClick}}),r("rm-button-group",{attrs:{list:t.adultList},on:{oneClick:t.adultListClick}}),r("rm-button-group",{attrs:{list:t.childList},on:{oneClick:t.childListClick}})],1),t._m(1)])])]),r("div",{staticClass:"container"},[t.isLoading?r("div",{staticClass:"row mt-5"},[t._m(2)]):r("div",[t.stores.length>0?r("div",{staticClass:"row mt-4"},t._l(t.stores,(function(e){return r("div",{key:e.code,staticClass:"col-md-6"},[r("div",{staticClass:"store-card mb-4"},[r("div",{staticClass:"store-card-body"},[r("div",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[r("span",{staticClass:"badge px-2 py-1",class:t.getMaskTotalLevel(e.adult_count+e.child_count)},[t._v(t._s(t.getMaskTotalLevelText(e.adult_count+e.child_count)))]),r("div",{staticClass:"update-time text-muted"},[t._v(t._s(t.getUpdateTime(e.updated_time))+"更新")])]),r("h4",{staticClass:"card-title"},[t._v(" "+t._s(e.name)+" "),r("small",{staticClass:"card-sub-title"},[t._v(t._s(t.getBusinessHour(e.business_hours)))])]),r("p",{staticClass:"store-address mb-4"},[r("span",{staticClass:"mr-1"},[t._v(t._s(e.address))]),t._v(" "),e.distance?r("span",[t._v("("),r("i",{staticClass:"fa fa-location-arrow",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(e.distance)+" 公尺)")]):t._e()]),r("div",{staticClass:"mask-stock adult mb-2"},[r("div",{staticClass:"label"},[t._v("大人")]),r("div",{staticClass:"value"},[t._v(t._s(e.adult_count))])]),r("div",{staticClass:"mask-stock child"},[r("div",{staticClass:"label"},[t._v("小孩")]),r("div",{staticClass:"value"},[t._v(t._s(e.child_count))])])]),r("div",{staticClass:"store-card-footer"},[r("a",{staticClass:"link",attrs:{href:t.getPhone(e.phone)}},[r("i",{staticClass:"fa fa-phone mr-1"}),t._v(" 撥打電話 ")]),r("a",{staticClass:"link",attrs:{target:"_blank",href:t.getGoogleMap(e.lat,e.lng)}},[r("i",{staticClass:"fa fa-paper-plane mr-1"}),t._v(" 導航前往 ")])])])])})),0):r("div",{staticClass:"col-md-12 text-center",staticStyle:{"margin-top":"40vh"}},[r("h3",[t._v("找不到符合的資料...")])])])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"navbar navbar-light bg-light"},[i("a",{staticClass:"navbar-brand"},[i("img",{staticClass:"d-inline-block align-top rounded",attrs:{src:r("cf05"),width:"30",height:"30",alt:""}}),t._v(" 口罩哪裡買 ")]),i("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#SearchContent","aria-controls":"SearchContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[t._v(" 搜尋 "),i("i",{staticClass:"fa fa-caret-up ml-1",attrs:{"aria-hidden":"true"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{staticClass:"badge badge-primary px-2 py-1 mr-2 mb-1"},[t._v("#充足 (數量 > 50)")]),r("span",{staticClass:"badge badge-primary px-2 py-1 mr-2 mb-1"},[t._v("#有限 (數量 > 20)")]),r("span",{staticClass:"badge badge-primary px-2 py-1 mr-2 mb-1"},[t._v("#不足 (數量 < 20)")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12"},[r("div",{staticClass:"spinner-border text-info",attrs:{role:"status"}},[r("span",{staticClass:"sr-only"},[t._v("Loading...")])])])}],a=(r("99af"),r("4de4"),r("4160"),r("c975"),r("b0c0"),r("d3b7"),r("ac1f"),r("5319"),r("841c"),r("159b"),r("96cf"),r("1da1")),s=function(){return r.e("chunk-2d21f2d9").then(r.bind(null,"d95c"))},o={name:"home",components:{RmButtonGroup:s},data:function(){return{isLoading:!1,isSearch:!1,coords:{lat:0,lng:0},map:null,from:{search:{type:"address",value:""},filter:{totalList:"",adultList:"",childList:""}},totalList:[{name:"suff",type:"success",size:"small",text:"總量庫存充足",round:!0,showClickedStyle:!1},{name:"limit",type:"warning",size:"small",text:"總量庫存有限",round:!0,showClickedStyle:!1},{name:"no_suff",type:"danger",size:"small",text:"總量庫存不足",round:!0,showClickedStyle:!1}],adultList:[{name:"suff",type:"success",size:"small",text:"成人庫存充足",round:!0,showClickedStyle:!1},{name:"limit",type:"warning",size:"small",text:"成人庫存有限",round:!0,showClickedStyle:!1},{name:"no_suff",type:"danger",size:"small",text:"成人庫存不足",round:!0,showClickedStyle:!1}],childList:[{name:"suff",type:"success",size:"small",text:"小孩庫存充足",round:!0,showClickedStyle:!1},{name:"limit",type:"warning",size:"small",text:"小孩庫存有限",round:!0,showClickedStyle:!1},{name:"no_suff",type:"danger",size:"small",text:"小孩庫存不足",round:!0,showClickedStyle:!1}],orgStores:[],stores:[],weekday:moment().format("e"),dayHour:parseInt(moment().format("HH"))}},mounted:function(){this.searchLocation()},methods:{searchLocation:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getLocation();case 2:if(r=e.sent,r){e.next=5;break}return e.abrupt("return");case 5:return t.isLoading=!0,e.next=8,t.$api.location(t.coords.lng,t.coords.lat);case 8:i=e.sent,t.orgStores=i.data,t.stores=i.data,t.initFilter(),t.isLoading=!1;case 13:case"end":return e.stop()}}),e)})))()},onSearch:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isSearch&&t.from.search.value){e.next=2;break}return e.abrupt("return");case 2:return t.isLoading=!0,t.isSearch=!0,e.next=6,t.$api.search(t.from.search.type,t.from.search.value,t.coords.lng,t.coords.lat);case 6:r=e.sent,t.orgStores=r.data,t.stores=r.data,t.initFilter(),t.isLoading=!1,t.isSearch=!1;case 12:case"end":return e.stop()}}),e)})))()},getLocation:function(){var t=this;return new Promise((function(e,r){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(r){t.coords.lng=t.roundDecimal(r.coords.longitude,4),t.coords.lat=t.roundDecimal(r.coords.latitude,4),e(!0)})):r(!1)}))},roundDecimal:function(t,e){return Math.round(Math.round(t*Math.pow(10,(e||0)+1))/10)/Math.pow(10,e||0)},changeSearchType:function(){this.from.search.type="address"===this.from.search.type?"name":"address"},totalListClick:function(t,e){this.listClick("totalList",t,e)},adultListClick:function(t,e){this.listClick("adultList",t,e)},childListClick:function(t,e){this.listClick("childList",t,e)},listClick:function(t,e,r){this[t].forEach((function(t){t.showClickedStyle=!1})),e===r?this.from.filter[t]="":(this[t][e].showClickedStyle=!0,this.from.filter[t]=this[t][e].name),this.onFilter()},initFilter:function(){this.listClick("totalList",null,null),this.listClick("adultList",null,null),this.listClick("childList",null,null),this.onFilter()},onFilter:function(){this.stores=this.orgStores,this.from.filter.totalList&&("suff"===this.from.filter.totalList?this.stores=this.stores.filter((function(t){var e=t.adult_count+t.child_count;return e>=50})):"limit"===this.from.filter.totalList?this.stores=this.stores.filter((function(t){var e=t.adult_count+t.child_count;return e>=20&&e<50})):"no_suff"===this.from.filter.totalList&&(this.stores=this.stores.filter((function(t){var e=t.adult_count+t.child_count;return e<20})))),this.from.filter.adultList&&("suff"===this.from.filter.adultList?this.stores=this.stores.filter((function(t){return t.adult_count>=50})):"limit"===this.from.filter.adultList?this.stores=this.stores.filter((function(t){return t.adult_count>=20&&t.adult_count<50})):"no_suff"===this.from.filter.adultList&&(this.stores=this.stores.filter((function(t){return t.adult_count<20})))),this.from.filter.childList&&("suff"===this.from.filter.childList?this.stores=this.stores.filter((function(t){return t.child_count>=50})):"limit"===this.from.filter.childList?this.stores=this.stores.filter((function(t){return t.child_count>=20&&t.child_count<50})):"no_suff"===this.from.filter.childList&&(this.stores=this.stores.filter((function(t){return t.child_count<20})))),this.storeSort()},storeSort:function(){this.coords.lng&&this.coords.lat&&this.stores.sort((function(t,e){return t.distance-e.distance}))},getMaskTotalLevel:function(t){return t>=50?"badge-success":t>=20&&t<50?"badge-warning":"badge-danger"},getMaskTotalLevelText:function(t){return t>=50?"# 庫存充足":t>=20&&t<50?"# 庫存有限":"# 庫存不足"},getBusinessHour:function(t){var e=this;if(!t)return"";if(t=t.filter((function(t){return-1!==t.indexOf(e.getWeekday())})),!t)return"";var r="上午";return this.dayHour>=12&&this.dayHour<17?r="下午":this.dayHour>=17&&this.dayHour<24&&(r="晚上"),t=t.filter((function(t){return-1!==t.indexOf(r)})),t?t[0]:""},getWeekday:function(){var t=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];return t[this.weekday]},getPhone:function(t){return t=t.replace("(",""),t=t.replace(")",""),t=t.replace("-",""),"tel:"+t},getGoogleMap:function(t,e){return this.coords.lng&&this.coords.lat?"https://www.google.com.tw/maps/dir/".concat(this.coords.lat,",").concat(this.coords.lng,"/").concat(t,",").concat(e):"https://www.google.com.tw/maps/dir/".concat(t,",").concat(e)},getUpdateTime:function(t){var e=moment(new Date).format("X"),r=moment(t).format("X"),i=e-r,n="";return n=i<60?i+" 秒前":i>=60&&i<3600?Math.floor(i/60)+" 分鐘前":Math.floor(i/3600)+" 小時前",n}}},c=o,l=(r("e5ca"),r("2877")),u=Object(l["a"])(c,i,n,!1,null,"6c429904",null);e["default"]=u.exports},c975:function(t,e,r){"use strict";var i=r("23e7"),n=r("4d64").indexOf,a=r("a640"),s=r("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,l=a("indexOf"),u=s("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(t){return c?o.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})},cf05:function(t,e,r){t.exports=r.p+"img/logo.3a8b27a6.png"},d784:function(t,e,r){"use strict";r("ac1f");var i=r("6eeb"),n=r("d039"),a=r("b622"),s=r("9263"),o=r("9112"),c=a("species"),l=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),h=!n((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,d){var p=a(t),v=!n((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),m=v&&!n((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return e=!0,null},r[p](""),!e}));if(!v||!m||"replace"===t&&(!l||!u||f)||"split"===t&&!h){var g=/./[p],C=r(p,""[t],(function(t,e,r,i,n){return e.exec===s?v&&!n?{done:!0,value:g.call(e,r,i)}:{done:!0,value:t.call(r,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=C[0],x=C[1];i(String.prototype,t,b),i(RegExp.prototype,p,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}d&&o(RegExp.prototype[p],"sham",!0)}},e5ca:function(t,e,r){"use strict";var i=r("620c"),n=r.n(i);n.a},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-76e53eba.a275bdf4.js.map