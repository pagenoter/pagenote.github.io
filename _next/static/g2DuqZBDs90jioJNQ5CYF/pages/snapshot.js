(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=u,e.useAmp=function(){return u(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"6Fas":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j}));var r=n("o0o1"),o=n.n(r),i=n("HaE+"),u=n("1OyB"),a=n("JX7q"),c=n("vuIU"),f=n("Ji7U"),s=n("md7G"),l=n("foSv"),p=n("rePB"),d=n("q1tI"),h=n.n(d),y=n("8Kt/"),m=n.n(y),v=n("VFWX"),b=n("Lsaf"),g=n("vDqi"),w=n.n(g),S=(n("cmP4"),h.a.createElement);function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var _,x="https://cors-anywhere.herokuapp.com/",j=function(t){Object(f.a)(n,t);var e=O(n);function n(t){var r;return Object(u.a)(this,n),r=e.call(this,t),Object(p.a)(Object(a.a)(r),"fetchPage",(function(t){r.setState({fetching:!0}),w()({method:"get",headers:{Accept:"application/json"},url:"".concat(x,"https://api.github.com/repos/rowthan/pagenote/issues/").concat(t)}).then((function(t){t.data&&r.resolveHTML(t.data)})).catch((function(){r.setState({errMsg:"\u8bf7\u6c42\u6570\u636e\u5f02\u5e38",loading:!1})}))})),Object(p.a)(Object(a.a)(r),"resolveHTML",(function(t){var e=Object(a.a)(r);_=new PageNote({barInfo:{right:40,top:200,status:"fold"}});var n={};if(t&&t.body){if(n=JSON.parse(t.body),e.setState({metaInfo:n}),n.html)i(n.html,n);else if(n.htmlUrl){var o=n.htmlUrl.match(/gists\/(\w+)$/)[1];gh.getGist(o).read((function(t,e){try{i(e.files["pagenote.html"].content||"",n)}catch(r){u("\u89e3\u6790\u5931\u8d25")}})).catch((function(){u("\u52a0\u8f7d\u5931\u8d25")}))}else n.commentHtmlId?issue.getIssueComment(n.commentHtmlId,(function(t,e){i(e.body,n)})).catch((function(t){u(t)})):r.setState({noHTML:!0});r.setState({fetching:!1})}else u("\u65e0\u6570\u636e\u4fe1\u606f");function i(t,n){e.setState({snapHtml:t,fetching:!1},(function(){_.init(n),[{x:window.innerWidth-320,y:20,text:"pagenote\u63d0\u793a\u8bf4\u660e",tip:'<div>\u5f53\u524d\u5feb\u7167\u7f51\u9875\u4f7f\u7528<a href="https://logike.cn/pagenote">pagenote</a>\u751f\u6210\u3002\u5185\u5bb9\u516c\u5f00\u53ef\u89c1\uff0c\u8bf7\u6ce8\u610f\u4e2a\u4eba\u4fe1\u606f\u4fdd\u62a4\u3002</div><span>\u4e0e\u539f\u7f51\u9875<span id="origin-url">'+n.url+'</span>\u7684\u4f5c\u8005\u65e0\u5173\uff0c\u4e0d\u5bf9\u5176\u5185\u5bb9\u8d1f\u8d23\u3002\u672c\u9875\u9762\u8c28\u7528\u4e8e\u5206\u4eab\u67e5\u770b\uff0c\u4e0d\u4ee3\u8868\u539f\u7f51\u9875\u7684\u7684\u5373\u65f6\u9875\u9762\u3002\u521b\u5efa\u65f6\u95f4 <time id="create-time">'+new Date(n.lastModified).toLocaleDateString()+"</time>",time:(new Date).getTime(),id:"body",isActive:!0,bg:"#fbbc04",locked:!0}].forEach((function(t){_.record(t,!0)})),setTimeout((function(){_.replay(0)}),2e3)}))}function u(t){e.setState({fetching:!1,errMsg:t||"\u52a0\u8f7d\u5931\u8d25"})}})),r.state={snapHtml:"",noHTML:!1,fetching:!1,errMsg:"",metaInfo:{}},r}return Object(c.a)(n,null,[{key:"getInitialProps",value:function(){var t=Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{showHeader:!1,showFooter:!1});case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),Object(c.a)(n,[{key:"componentDidMount",value:function(){if(!_){var t=window.location.search.match(/pagenote=(.*)$/),e=t?t[1]:"";this.fetchPage(e)}}},{key:"render",value:function(){var t=this.state,e=t.snapHtml,n=t.fetching,r=t.metaInfo,o=t.errMsg,i=t.noHTML,u=r.title,a=void 0===u?"":u;new Date(r.lastModified).toLocaleDateString();return S("div",null,S(m.a,null,S("title",null,a,"-\u7f51\u9875\u5feb\u7167"),S("script",{defer:!0,src:"/pagenote.js"})),S("div",{id:"pagenote-share-content-container",className:"snapshot-page"},e&&S("div",{dangerouslySetInnerHTML:{__html:e}}),n&&S("div",null,S(v.a,null,"\u5c1d\u8bd5\u52a0\u8f7d\u5feb\u7167\u7f51\u9875...")),!n&&i&&S(b.a,{readonly:!0,categories:[],selectedPage:r}),o&&S("p",null,o)))}}]),n}(d.Component)},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r=c(n("q1tI")),o=c(n("Xuae")),i=n("lwAK"),u=n("FYa8"),a=n("/0+H");function c(t){return t&&t.__esModule?t:{default:t}}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function s(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var l=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(s,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);t.has(u)?i=!1:t.add(u)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var a=0,c=l.length;a<c;a++){var f=l[a];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?i=!1:n.add(f);else{var s=o.props[f],p=r[f]||new Set;p.has(s)?i=!1:(p.add(s),r[f]=p)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=(0,o.default)();function h(t){var e=t.children;return(r.default.createElement(i.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,a.isInAmpMode)(t)},e)}))})))}h.rewind=d.rewind;var y=h;e.default=y},"8oxB":function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"===typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var c,f=[],s=!1,l=-1;function p(){s&&c&&(s=!1,c.length?f=c.concat(f):l=-1,f.length&&d())}function d(){if(!s){var t=a(p);s=!0;for(var e=f.length;e;){for(c=f,f=[];++l<e;)c&&c[l].run();l=-1,e=f.length}c=null,s=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new h(t,e)),1!==f.length||s||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);e.HeadManagerContext=o},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),u=n("Bnag");t.exports=function(t){return r(t)||o(t)||i(t)||u()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},VFWX:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("q1tI"),o=n.n(r),i=n("Zmiu"),u=n.n(i),a=o.a.createElement;function c(){return a("div",{className:u.a.loading},a("span",null),a("span",null),a("span",null),a("span",null),a("span",null))}},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),i=n("W8MJ"),u=n("7W2i"),a=n("a1gu"),c=n("Nsbk"),f=n("RIqP");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(a){u(f,a);var c=s(f);function f(t){var i;return r(this,f),i=c.call(this,t),p&&(e.add(o(i)),n(o(i))),i}return i(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},keFc:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/snapshot",function(){return n("6Fas")}])},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return i}));var o=n("JX7q");function i(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(o.a)(t):e}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[["keFc",0,1,3,5,8,2]]]);