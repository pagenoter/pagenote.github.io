(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=u,e.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r=i(n("q1tI")),o=i(n("Xuae")),a=n("lwAK"),u=n("FYa8"),c=n("/0+H");function i(t){return t&&t.__esModule?t:{default:t}}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function s(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var l=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(s,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);t.has(u)?a=!1:t.add(u)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var c=0,i=l.length;c<i;c++){var f=l[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var s=o.props[f],p=r[f]||new Set;p.has(s)?a=!1:(p.add(s),r[f]=p)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=(0,o.default)();function h(t){var e=t.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(t)},e)}))})))}h.rewind=d.rewind;var m=h;e.default=m},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FK7u:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/snapshot__",function(){return n("xOxn")}])},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);e.HeadManagerContext=o},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),u=n("Bnag");t.exports=function(t){return r(t)||o(t)||a(t)||u()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},VFWX:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("q1tI"),o=n.n(r),a=n("Zmiu"),u=n.n(a),c=o.a.createElement;function i(){return c("div",{className:u.a.loading},c("span",null),c("span",null),c("span",null),c("span",null),c("span",null))}},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),u=n("7W2i"),c=n("a1gu"),i=n("Nsbk"),f=n("RIqP");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(c){u(f,c);var i=s(f);function f(t){var a;return r(this,f),a=i.call(this,t),p&&(e.add(o(a)),n(o(a))),a}return a(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},xOxn:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return S}));var r=n("1OyB"),o=n("vuIU"),a=n("JX7q"),u=n("Ji7U"),c=n("md7G"),i=n("foSv"),f=n("rePB"),s=n("q1tI"),l=n.n(s),p=n("8Kt/"),d=n.n(p),h=n("VFWX"),m=n("vDqi"),v=n.n(m),y=l.a.createElement;function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(i.a)(t);if(e){var o=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var g,w="https://cors-anywhere.herokuapp.com/",S=function(t){Object(u.a)(n,t);var e=b(n);function n(t){var o;return Object(r.a)(this,n),o=e.call(this,t),Object(f.a)(Object(a.a)(o),"fetchPage",(function(t){o.setState({fetching:!0}),v()({method:"get",headers:{Accept:"application/json"},url:"".concat(w,"https://api.github.com/repos/rowthan/pagenote/issues/").concat(t)}).then((function(t){t.data&&o.resolveHTML(t.data)})).catch((function(){o.setState({errMsg:"\u8bf7\u6c42\u6570\u636e\u5f02\u5e38",loading:!1})}))})),Object(f.a)(Object(a.a)(o),"resolveHTML",(function(t){var e=Object(a.a)(o);g=new PageNote;var n={};if(t&&t.body)if(n=JSON.parse(t.body),e.setState({metaInfo:n}),n.html)u(n.html,n);else if(n.htmlUrl){var r=n.htmlUrl.match(/gists\/(\w+)$/)[1];gh.getGist(r).read((function(t,e){try{u(e.files["pagenote.html"].content||"",n)}catch(r){c("\u89e3\u6790\u5931\u8d25")}})).catch((function(){c("\u52a0\u8f7d\u5931\u8d25")}))}else n.commentHtmlId&&issue.getIssueComment(n.commentHtmlId,(function(t,e){u(e.body,n)})).catch((function(t){c(t)}));else c("\u65e0\u6570\u636e\u4fe1\u606f");function u(t,n){e.setState({snapHtml:t,fetching:!1},(function(){g.init(n)}))}function c(t){e.setState({fetching:!1,errMsg:t||"\u52a0\u8f7d\u5931\u8d25"})}})),o.state={snapHtml:"",fetching:!1,errMsg:"",metaInfo:{}},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){if(!g){var t=window.location.search.match(/pagenote=(.*)$/),e=t?t[1]:"";this.fetchPage(e)}}},{key:"render",value:function(){var t=this.state,e=t.snapHtml,n=t.fetching,r=t.metaInfo,o=t.errMsg,a=r.title,u=void 0===a?"":a;new Date(r.lastModified).toLocaleDateString();return y("div",null,y(d.a,null,y("title",null,"\u7f51\u9875\u5feb\u7167",u),y("script",{defer:!0,src:"/pagenote.js"})),y("div",{id:"pagenote-share-content-container"},e&&y("div",{dangerouslySetInnerHTML:{__html:e}}),n&&y("div",null,"\u5c1d\u8bd5\u52a0\u8f7d\u5feb\u7167\u7f51\u9875...",y(h.a,null)),o&&y("p",null,o)))}}]),n}(s.Component)}},[["FK7u",0,1,3,2]]]);