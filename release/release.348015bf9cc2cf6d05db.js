(self.webpackChunkpagenote_cn=self.webpackChunkpagenote_cn||[]).push([[314],{5223:(e,_,t)=>{"use strict";t.d(_,{Z:()=>c});var r,a,n,l=t(7294);function c(){return l.createElement("footer",null,l.createElement("style",{jsx:"true"},"\n                footer{\n                  // display:flex;\n                  // justify-content: space-around;\n                  max-width: 800px;\n                  margin:24px auto;\n                  \n                  font-size:12px;\n                }\n                \n                  .footer-links a{\n                    margin-right:12px;\n                    transition: color .2s;\n                    color: #586069;\n                    text-decoration: none;\n                    line-height: 1.4em;\n                  }\n                  .footer-links a:hover{\n                    text-decoration: underline;\n                    color: #0366d6;\n                  }\n                  \n                  .d-flex {display: flex!important;}\n                  .list-style-none {list-style: none!important;}\n                  .footer-links{\n                    justify-content: space-between;\n                    width: 100%;\n                    margin: 0;\n                    padding: 18px 0 12px 0;\n                    border-top: 1px solid #ececec;\n                  }\n              "),l.createElement("footer",null,l.createElement("div",{className:"position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between flex-sm-items-center pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light "},l.createElement("ul",{className:"list-style-none d-flex footer-links"},l.createElement("li",{className:"mr-3 mr-lg-0"},"© 2020 ",l.createElement("a",{href:"/"},"PAGENOTE")),l.createElement("li",{className:"mr-3 mr-lg-0"},l.createElement("p",null,l.createElement("a",{href:"/hello.html"},"产品介绍")),l.createElement("p",null,l.createElement("a",{href:"/page?id=why"},"常见问题")),l.createElement("p",null,l.createElement("a",{href:"/release"},"更新日志"))),l.createElement("li",{className:"mr-3 mr-lg-0"},l.createElement("p",null,l.createElement("a",{href:"/page?id=privacy"},"隐私协议"))),l.createElement("li",null,l.createElement("p",null,l.createElement("a",{href:"/page?id=donation"},"支持/贡献"))),l.createElement("li",null,l.createElement("p",null,l.createElement("a",{href:"/page?id=developer"},"开发者")),l.createElement("p",null,"用户群：769094377"))))))}e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature,(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&a.register(c,"Footer","/Users/ranronghua/Desktop/pagenote.cn/src/components/Footer.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)},8602:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Header});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9669),axios__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,_){for(var t=0;t<_.length;t++){var r=_[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,_,t){return _&&_defineProperties(e.prototype,_),t&&_defineProperties(e,t),e}function _inherits(e,_){if("function"!=typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),_&&_setPrototypeOf(e,_)}function _setPrototypeOf(e,_){return(_setPrototypeOf=Object.setPrototypeOf||function(e,_){return e.__proto__=_,e})(e,_)}function _createSuper(e){var _=_isNativeReflectConstruct();return function(){var t,r=_getPrototypeOf(e);if(_){var a=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,_){return!_||"object"!==_typeof(_)&&"function"!=typeof _?_assertThisInitialized(e):_}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperty(e,_,t){return _ in e?Object.defineProperty(e,_,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[_]=t,e}module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},proxy="https://cors-anywhere.herokuapp.com/",host="https://pagenote.logike.cn",loginUrl="https://github.com/login/oauth/authorize?scope=user%20public_repo&client_id=c4aae381097464aa1024&redirect_uri=".concat(host),Header=function(_Component){_inherits(Header,_Component);var _super=_createSuper(Header);function Header(e){var _;return _classCallCheck(this,Header),_defineProperty(_assertThisInitialized(_=_super.call(this,e)),"codeToToken",(function(){var e=window.location.search.match(/code=(.*)$/);e&&axios__WEBPACK_IMPORTED_MODULE_1___default()({method:"post",headers:{Accept:"application/json"},url:"".concat(proxy,"https://github.com/login/oauth/access_token"),data:{client_id:"c4aae381097464aa1024",client_secret:"ed40211bca3ccabd900586079b89fd0ec1ea48be",code:e[1]}}).then((function(e){var _=e.data.access_token;localStorage.setItem("token",_);var t=new URLSearchParams(location.search).get("comeback");window.location=t||"/"}))})),_defineProperty(_assertThisInitialized(_),"checkLogin",(function(){var e=localStorage.getItem("token");e&&axios__WEBPACK_IMPORTED_MODULE_1___default()({method:"get",headers:{Accept:"application/json",Authorization:"token ".concat(e)},url:"".concat(proxy,"https://api.github.com/user")}).then((function(e){e.data&&_.setState({userInfo:e.data})})).catch((function(e){console.error(e)}))})),_.state={userInfo:{}},_}return _createClass(Header,[{key:"componentDidMount",value:function(){this.codeToToken(),this.checkLogin()}},{key:"render",value:function(){var e=this.state.userInfo;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("style",{jsx:"true"},"\n                nav{\n                    // height: 40px;\n                    // line-height: 40px;\n                    font-size:14px;\n                    border-bottom: 1px solid rgba(30,35,42,.06);\n                    box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);\n                }\n                nav a{\n                    color: #0366d6;\n                    text-decoration: none;\n                    margin-right: 12px;\n                }\n                .header{\n                    display: flex;\n                    padding: 0 24px;\n                    padding: 10px 24px;\n                    margin: 0 auto;\n                    max-width: 1000px;\n                    justify-content: space-between;\n                    box-sizing: border-box;\n                }\n                .me-link{\n                    margin-right: 12px;\n                }\n                .user-avatar{\n                    width: 20px;\n                    height: 20px;\n                    border-radius: 10px;\n                    border-radius: 4px;\n                    overflow: hidden;\n                }\n                #login{\n                    padding: 0px 6px;\n                    background: #509ff5;\n                    border-radius: 6px;\n                    color: #fff;\n                }\n            "),react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"header"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"/"},"PAGENOTE 一页一记")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"me-link"},e.name?react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"user-avatar",href:"/me"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{width:20,height:20,src:"".concat(e.avatar_url,"&s=30"),alt:"".concat(e.name)})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{id:"login",href:"/me"},"我的")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"/setting"},"设置"))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Header}(react__WEBPACK_IMPORTED_MODULE_0__.Component),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(proxy,"proxy","/Users/ranronghua/Desktop/pagenote.cn/src/components/Header.js"),reactHotLoader.register(host,"host","/Users/ranronghua/Desktop/pagenote.cn/src/components/Header.js"),reactHotLoader.register(loginUrl,"loginUrl","/Users/ranronghua/Desktop/pagenote.cn/src/components/Header.js"),reactHotLoader.register(Header,"Header","/Users/ranronghua/Desktop/pagenote.cn/src/components/Header.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},5235:(e,_,t)=>{"use strict";t.d(_,{Z:()=>E});var r,a,n,l=t(7294),c=t(3932);function E(){return l.createElement("span",null,l.createElement("style",{jsx:"true"},"\n                .install-btns{\n                  //display: inline-block;\n                  //width: 220px;\n                  //padding: 0 12px;\n                  margin: 12px 0;\n                }\n                a.browser-install-btn{\n                  display: inline-block;\n                  margin-right: 12px;\n                  padding: 6px 20px;\n                  font-size: 1em;\n                  line-height: 20px;\n                  border-radius: 24px;\n                  box-shadow: 0 4px 10px 0 rgba(39, 43, 49, 0.2);\n                  background-color: #00bdb8;\n                  color: #fff;\n                  font-weight: bolder;\n                  text-decoration: none;\n                  white-space: nowrap;\n                }\n                a.browser-install-btn.offline{\n                    background:#7e8281;\n                }\n                a.browser-install-btn.ee{\n                    background-color: #1976d2;\n                }\n                a.browser-install-btn.firefox {\n                  background-color: #FF5722;\n                }\n                a.browser-install-btn.edge{\n                  background-color: #003abd;\n                }\n              "),l.createElement("span",{className:"install-btns"},l.createElement("a",{href:"https://addons.mozilla.org/addon/page-note?src=external-release",className:"browser-install-btn firefox"},"FireFox"),l.createElement("a",{href:"https://chrome.google.com/webstore/detail/pagenotehighlight-and-tak/hpekbddiphlmlfjebppjhemobaopekmp?utm_source=blog",className:"browser-install-btn chrome"},"Chrome"),l.createElement("a",{className:"browser-install-btn ee",href:"https://ext.chrome.360.cn/webstore/detail/gielpddfollkffnbiegekliodnahhpfa"},"360"),l.createElement("a",{className:"browser-install-btn offline",onClick:function(){console.log("不推荐"),c.Z.info({content:"离线安装包将无法获取升级更新，可能存在数据无法向上兼容等问题。0.12.0版本后将不再对外提供安装包。如果你确实有需要，请订阅https://www.wjx.top/m/89079908.aspx，我们将以邮件方式推送到你的邮箱。"})}},"离线安装")))}e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature,(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&a.register(E,"InstallBar","/Users/ranronghua/Desktop/pagenote.cn/src/components/InstallBar.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)},4675:(e,_,t)=>{"use strict";t.d(_,{Z:()=>i});var r,a,n,l=t(7294),c=t(3935),E=t(8602),o=t(5223);function i(e){var _=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=document.getElementById("app");c.render(l.createElement(l.Fragment,null,_&&l.createElement(E.Z,null),l.createElement(e,null),t&&l.createElement(o.Z,null)),r)}e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature,(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&a.register(i,"CommonPage","/Users/ranronghua/Desktop/pagenote.cn/src/pages/CommonPage.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)},7730:(module,__webpack_exports__,__webpack_require__)=>{"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294),_components_InstallBar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5235),_CommonPage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4675),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,_){for(var t=0;t<_.length;t++){var r=_[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,_,t){return _&&_defineProperties(e.prototype,_),t&&_defineProperties(e,t),e}function _inherits(e,_){if("function"!=typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),_&&_setPrototypeOf(e,_)}function _setPrototypeOf(e,_){return(_setPrototypeOf=Object.setPrototypeOf||function(e,_){return e.__proto__=_,e})(e,_)}function _createSuper(e){var _=_isNativeReflectConstruct();return function(){var t,r=_getPrototypeOf(e);if(_){var a=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,_){return!_||"object"!==_typeof(_)&&"function"!=typeof _?_assertThisInitialized(e):_}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},Release=function(_Component){_inherits(Release,_Component);var _super=_createSuper(Release);function Release(e){return _classCallCheck(this,Release),_super.call(this,e)}return _createClass(Release,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"release"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"row"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_InstallBar__WEBPACK_IMPORTED_MODULE_1__.Z,{className:"install-btns"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",{className:"slogan"},"PAGENNOTE 小而美的笔记工具")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"row version-tip"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"/page/?id=future"},"了解最新动态"),"、获取VIP抢先版本，请加入QQ群：769094377。或",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{target:"_blank",href:"https://www.wjx.top/m/89079908.aspx"},"填写你的邮箱地址"),"，订阅最新活动。",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://pagenote.logike.cn/hello"},"还未安装？前往试用")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row version latest",id:"version12"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"left col-3"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"version-number"},"0.12.+",react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"插件市场"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"right col-9"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"brief"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,"自定义扩展功能"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"预设了搜索、翻译、复制、邮件等各类功能，你还可以自定义脚本实现「一切功能」。",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"/page?id=0.12.0"},"查看使用教程")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"/release/0.12.0.png",alt:"自定义插件"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,"可安装的管理平台"),"点击安装后，可作为独立APP使用，即便断网也能用。",react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"/release/install.png",alt:"安装"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,"TIP"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"从 0.12.0 版本开始，将不再官网提供离线版本，如果你有需要可以通过",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{target:"_blank",href:"https://www.wjx.top/m/89079908.aspx"},"填写你的邮箱地址"),"获取。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"启用新域名 pagenote.cn 作为管理平台")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,"bugfix"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,"修复设置保存不成功")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row version",id:"version11"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"left col-3"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"version-number"},"0.11.+",react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"个性化"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"right col-9"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"brief"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,"0.11.4"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"【bugfix】修复Chrome浏览器下部分网页创建标记失败。"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"brief"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,"0.11.3"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"【UI】移除了不重要的icon,如侧边栏「移动icon」"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"【搜索API】支持多种搜索选项：谷歌、百度、知乎、翻译"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"【拖拽边界】拖拽增加边界，避免拖出天际。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"【拍照】支持全网页拍照截图。（Firefox仅支持当前窗口视图拍照）"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"【bugfix】修复首次打开页面时不能自动点亮节点"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"brief"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,"0.11.2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"【UI】美化了pagenoter的设置页面"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"【数据中心】启用了历史的插件数据管理页，不通过 https://pagenote.logike.cn/me 也可以查看和管理数据"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"brief"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,"0.11.1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"【智能书签】支持开启关闭、自动根据标签创建一级目录。可自由设置启动/关闭"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"【pagenoter】可在管理页面导入、导出数据"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"【标记】可拖拽移动标记节点；UI风格弱化。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"【Edge】上架Edge应用市场"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"brief"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,"0.11.0"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"个性化设置")),"从此刻起，你可以有更多个性化的选择。前往",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"/setting"},"设置"),"页面，定制个人专属 PAGENOTE。 目前支持：色盘颜色、快捷键、最大标记数、新开tab设置。支持全局禁用 PAGENOTE。",react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"/release/page_setting.png",alt:""})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"UI 交互升级")),"重新设计了标记的样式和交互，让标记不打扰，同时更方便。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"拍照更方便")),"在网页内即可直接创建、查看、删除快照、拥有所有功能，不必前往管理页面。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"关联上下文")),"记录关键词前后上下文，让你能更好的回顾标记时的内容。划词时把重点放在关键词上！"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"禁用编辑区")),"针对可编辑区域禁用了 PAGENOTE 高亮，避免影响编辑内容。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"不兼容调整")),"本次更新，将不再兼容低于 0.8.0 版本数据，建议你打开自动更新，或订阅PAGENOTE更新，以保证随时获取最新版本。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"其他"),"管理页面和插件通信API升级，同时支持历史版本，增加自动重连、手动连接机制",react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"移除了一些动效，修复了一些bug、提升了使用性能。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"增加日语支持")))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"row version",id:"version10"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"left col-3"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"version-number"},"0.10.+",react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"为更优雅"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"right col-9"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"brief"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"增加一键复制功能、操作提示功能。趣味动画",react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"/release/light-show.gif",alt:""}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"根据标记创建、删除自动关联管理书签至文件夹[pagenote]中",react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"/release/bookmark_auto.png",alt:""}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"不高亮关键字也可以在网页里留笔记。点击右上角插件图标，弹窗中填写笔记即可。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"侧边栏操作icon简化，支持自定义分组标签。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"更精准的滚动标记定位"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"对用户无感知的代码重构，性能优化"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"去除标识时的购物车动画")))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"row version",id:"version9"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"left col-3"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"version-number"},"0.9.+ ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"书签管理"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"right col-9"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"brief"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"你可以在",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://pagenote.logike.cn/me"},"https://pagenote.logike.cn/me"),"更加",react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"高效地管理"),"你的PAGE，为它们添加标签，分组、搜索。")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"不必非得勾选关键字才能留下批注"),"：右击鼠标，点击「添加标注」即可为网页创建标记。")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"最简单的记录，没有勾选、没有笔记，只需要一个快照：点击插件icon->「拍照-网页快照」让你以",react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"最快捷的方式记录网页"),"。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://pagenote.logike.cn/me?from=release-img"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"/0.9.png",alt:""})))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"row version",id:"version86"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"left col-3"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"version-number"},"0.8.6 ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"隐私协议"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"right col-9"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"我们有必要让你了解到 PAGENOTE 正在做的事情，以及使用了你哪些数据。",react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),"请注意：",react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"PAGENOTE 不会收集你的个人隐私数据，例如，你正在访问的URL。每一个敏感操作都会提示并得到你的授权。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),"你大可不必担心个人数据泄露。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"brief"},"你可以在 ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://pagenote.logike.cn/privacy?form=release"},"隐私协议页面")," 查看更多详情。")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"row version",id:"version8"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"left col-3"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"version-number"},"0.8.0 ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"开启分享"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"right col-9"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"通过pagenote你可以将任意网页分享给你的好友，并携带你的标记和高亮内容。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:"functions"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-title"},"通过GitHub分享"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-desc"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"多种方式调起分享功能：1、鼠标右击->【",react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"分享至pagenote"),"】；2、展开侧边栏点击分享图标；3、浏览器上方右击pagenote图标->【",react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"分享至pagenote"),"】"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"使用分享功能前，你需要先注册一个 ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://github.com"},"GitHub账号"),"，并授权pagenote登录。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"可选择分享整个网页（如果网页内有敏感信息，如账户金额，请谨慎，注意保护个人隐私）、或只分享标记内容。")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-title"},"快捷指令"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-desc"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"【快速创建标记】： 选中一段文本后，按【M】键（mark）创建标记。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"【快速创建标记并编辑】： 选中一段文本后，按【E】键(edit)创建标记并打开笔记编辑器")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-title"},"高亮关键词马赛克处理"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-desc"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"除了对选中文本高亮背景外，支持对勾选内马赛克处理，可以通过此方式遮挡敏感信息。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"使用方式：原有的色盘中加入了马赛克图标，点击该色盘，可处理为马赛克")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-title"},"一些交互优化"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-desc"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"已登录的用户，标记小圆点中会有用户的头条"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"一些性能优化，移动端适配。")))))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"row version"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"left col-3"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"version-number"},"pagenote 0.7.+ ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"化繁为简"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"right col-9"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"brief"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"在0.6、0.7版本中，加入了更加丰富的功能。对用户感知比较明显有：",react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"加入了",react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"大纲侧边栏"),"，提供了大纲收缩、折叠模式。"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"可以",react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"拖拽"),"侧边栏到任意位置"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"自动点亮模式")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"根据不同模式有不同的记录",react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"动画效果")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"支持",react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"备份、还原"),"(原始文件)标记页面"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"支持导出",react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Markdown"),"格式文件"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"我们收集到一些用户的反馈。早期的用户反馈很喜欢之前的版本，因为它简单、纯粹、不打扰，所以在众多的产品中选择了pagenote。 这也是pagenote一直追寻的初心：简单，小而美。",react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),"所以，我们在追求功能完备的基础上，仍然追求操作简单。0.8.0 版本也由此诞生。")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,"0.7.2 化繁为简"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:"functions"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-title"},"侧边栏收起功能"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-desc"},"将整个侧边栏收缩成一条窄线，这可以最小程度减少pagenote对页面的干扰，你可以更多的关注页面本身。 这更像一本书，翻阅的时候打开它，不需要的时候关闭它。")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-title"},"默认不写入标注内容"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-desc"},"避免大量的无用信息展示，如果你需要留下一段笔记内容，在「点亮」状态下，将鼠标放到对应的圆点上，点击右侧的「笔记」icon，即可开始书写你的笔记内容。 并取消了可以粘贴图片的功能。")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-title"},"浅高亮"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-desc"},"当标记未「点亮」（激活）时，将对关键词进行下划线高亮。当点击关键字或激活高亮内容时，将对关键字全背景色的覆盖高亮。")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-title"},"自动区分文本色"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-desc"},"根据不同的背景高亮色，自动设置前景色为白色或黑色，保证阅读无障碍。")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-title"},"移动端设备兼容"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"function-desc"},"移动端侧边栏不可拖拽，默认靠右边。设置页面更加清晰、操作方便。")))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"row version"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"left col-3"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"version-number"},"了解更多")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"right col-9"},"了解更多内容，可以关注我们在",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://chrome.google.com/webstore/detail/dohbgjmflacneejmpdieincbbokoflgm"},"Firefox")," 、",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://chrome.google.com/webstore/detail/dohbgjmflacneejmpdieincbbokoflgm"},"Chrome商城"),"最近动态，或",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://www.wjx.cn/jq/69876579.aspx"},"参与问卷"),"。觉得好用，请不要吝啬为pagenote评分呀！ 也可以加入我们用户群 QQ：769094377。")))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Release}(react__WEBPACK_IMPORTED_MODULE_0__.Component),reactHotLoader,leaveModule;(0,_CommonPage__WEBPACK_IMPORTED_MODULE_2__.Z)(Release),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(Release,"Release","/Users/ranronghua/Desktop/pagenote.cn/src/pages/release/index.js"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}},0,[[7730,666,216]]]);