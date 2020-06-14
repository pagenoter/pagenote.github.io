webpackHotUpdate("static/development/pages/share.js",{

/***/ "./pages/share.js":
/*!************************!*\
  !*** ./pages/share.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Share; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_share_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/share.scss */ \"./styles/share.scss\");\n/* harmony import */ var _styles_share_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_share_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ranronghua/Desktop/nextjs-pagenote/pages/share.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Share = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Share, _Component);\n\n  var _super = _createSuper(Share);\n\n  function Share(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Share);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      copied: false,\n      show: true,\n      activeTab: 'share',\n      markdown: '',\n      showShare: true,\n      user: null,\n      creating: false,\n      shareData: {},\n      shareType: 'all',\n      errorMsg: '',\n      snapshot: ''\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Share, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var that = this;\n      window.addEventListener(\"message\", receiveMessage, false);\n\n      function receiveMessage(event) {\n        if (event.data.type === \"sync_shareInfo\") {\n          that.setState({\n            shareData: event.data.shareData || {}\n          });\n          console.log(event);\n        }\n      }\n\n      if (!that.state.shareData.title && window.opener) {\n        window.opener.postMessage({\n          type: 'get_share_data'\n        }, \"*\");\n      }\n    }\n  }, {\n    key: \"changeTab\",\n    value: function changeTab(tab) {\n      this.setState({\n        activeTab: tab\n      });\n    }\n  }, {\n    key: \"changeShareType\",\n    value: function changeShareType(type) {\n      this.setState({\n        shareType: type\n      });\n    }\n  }, {\n    key: \"copyMd\",\n    value: function copyMd() {\n      var text = this.state.markdown + '\\n\\n[使用pagenote生成](https://pagenote.logike.cn)';\n\n      try {\n        return navigator.clipboard.writeText(text);\n      } catch (e) {\n        var textarea = document.createElement('textarea');\n        textarea.textContent = text;\n        document.body.appendChild(textarea);\n        textarea.select();\n        document.execCommand('Copy', false, null);\n        document.body.removeChild(textarea);\n      }\n\n      this.setState({\n        copied: true\n      });\n    }\n  }, {\n    key: \"changeTitle\",\n    value: function changeTitle(e) {\n      this.setState({\n        shareData: _objectSpread(_objectSpread({}, this.state.shareData), {}, {\n          title: e.target.value\n        })\n      });\n    }\n  }, {\n    key: \"toggleShow\",\n    value: function toggleShow() {\n      this.setState({\n        show: !this.state.show\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          activeTab = _this$state.activeTab,\n          shareType = _this$state.shareType,\n          user = _this$state.user,\n          show = _this$state.show;\n      var _this$state$shareData = this.state.shareData,\n          markdown = _this$state$shareData.markdown,\n          title = _this$state$shareData.title,\n          snapshot = _this$state$shareData.snapshot,\n          html = _this$state$shareData.html;\n      var shareHtml = shareType === 'all';\n      return __jsx(\"div\", {\n        className: \"share\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 13\n        }\n      }, __jsx(\"div\", {\n        className: \"mask\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        className: \"snapshot\",\n        style: {\n          backgroundImage: \"url(\".concat(snapshot, \")\")\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 21\n        }\n      }), __jsx(\"div\", {\n        className: \"container\",\n        style: {\n          display: show ? 'block' : 'none'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 21\n        }\n      }, __jsx(\"a\", {\n        className: \"close\",\n        onClick: this.toggleShow.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 25\n        }\n      }, \"\\u5173\\u95ED\"), __jsx(\"div\", {\n        className: \"tabs\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 25\n        }\n      }, __jsx(\"span\", {\n        onClick: function onClick() {\n          return _this2.changeTab('share');\n        },\n        className: \"tab \".concat(activeTab === 'share' ? 'active' : ''),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 29\n        }\n      }, \"\\u5206\\u4EAB&\\u5BFC\\u51FA\"), __jsx(\"span\", {\n        onClick: function onClick() {\n          return _this2.changeTab('ground');\n        },\n        className: \"tab \".concat(activeTab === 'ground' ? 'active' : ''),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 29\n        }\n      }, \"pagenote \\u5E7F\\u573A\"), __jsx(\"div\", {\n        className: \"tab-border\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 29\n        }\n      })), __jsx(\"div\", {\n        className: \"contents\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 25\n        }\n      }, __jsx(\"section\", {\n        className: \"tab-content \".concat(activeTab === 'share' ? 'active' : ''),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 29\n        }\n      }, __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 33\n        }\n      }, \"\\u5206\\u4EAB\\u5185\\u5BB9\\u5C06\", __jsx(\"strong\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 42\n        }\n      }, \"\\u516C\\u5F00\\uFF0C\\u6240\\u6709\\u4EBA\\u53EF\\u89C1 \", __jsx(\"a\", {\n        href: \"https://pagenote.logike.cn\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 59\n        }\n      }, \"why?\")), \"\\u3002\"), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 33\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 37\n        }\n      }, __jsx(\"input\", {\n        onChange: function onChange() {\n          return _this2.changeShareType('only-light');\n        },\n        name: \"share-type\",\n        type: \"radio\",\n        checked: shareType === 'only-light',\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 44\n        }\n      }), \"\\u4EC5\\u5206\\u4EAB\\u6807\\u8BB0\"), __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 37\n        }\n      }, __jsx(\"input\", {\n        onChange: function onChange() {\n          return _this2.changeShareType('all');\n        },\n        name: \"share-type\",\n        type: \"radio\",\n        checked: shareType === 'all',\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 44\n        }\n      }), \"\\u5206\\u4EAB\\u6807\\u8BB0&\\u7F51\\u9875\")), __jsx(\"div\", {\n        className: shareHtml ? 'hide' : 'show',\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 33\n        }\n      }, __jsx(\"textarea\", {\n        className: \"markdown-content\",\n        value: markdown,\n        readOnly: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 37\n        }\n      })), __jsx(\"div\", {\n        className: shareHtml ? 'show' : 'hide',\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 33\n        }\n      }, __jsx(\"input\", {\n        className: \"share-title\",\n        onChange: this.changeTitle.bind(this),\n        type: \"text\",\n        placeholder: \"\\u5206\\u4EAB\\u6807\\u9898\\uFF0C\\u4E00\\u53E5\\u8BDD\\u603B\\u7ED3\\u5427\\uFF0C\\u8BA9\\u4F60\\u7684\\u5206\\u4EAB\\u66F4\\u6709\\u5438\\u5F15\\u529B\",\n        value: title,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 37\n        }\n      }), __jsx(\"div\", {\n        className: \"tip\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 45\n        }\n      }, \"\\u6807\\u8BB0\\u3001\\u4EE5\\u53CA\\u7F51\\u9875\\u5185\\u5BB9\\u88AB\\u5206\\u4EAB\\u540E\\u516C\\u5F00\\u53EF\\u89C1\\u3002\", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 67\n        }\n      }), \"\\u5F53\\u524D\\u9875\\u6709\\u654F\\u611F\\u4FE1\\u606F\\uFF0C\\u5982\\u8D26\\u6237\\u4FE1\\u606F\\u65F6\\uFF0C\\u8BF7\\u6CE8\\u610F\\u4FDD\\u5BC6\\u3002\\u8C28\\u614E\\u5206\\u4EAB\\u3002\")), __jsx(\"div\", {\n        id: \"buttons\",\n        className: \"\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 33\n        }\n      }, shareType === 'only-light' && __jsx(\"button\", {\n        className: \"copy-button\",\n        onClick: this.copyMd.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 69\n        }\n      }, \"\\u590D\\u5236MD\"), user ? __jsx(\"button\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 43\n        }\n      }, \"\\u4E00\\u952E\\u5206\\u4EAB\") : __jsx(\"button\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 66\n        }\n      }, \"\\u767B\\u5F55\\u540E\\u5206\\u4EAB\"), __jsx(\"button\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 37\n        }\n      }, \"\\u53D6\\u6D88\"))), __jsx(\"section\", {\n        className: \"tab-content \".concat(activeTab === 'ground' ? 'active' : ''),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 29\n        }\n      }, user ? __jsx(\"span\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 39\n        }\n      }, \"hi \", user.name) : __jsx(\"button\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 68\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 76\n        }\n      }, \"\\u8BF7\\u767B\\u5F55\")), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 33\n        }\n      }, \"\\u66F4\\u591A\\u5185\\u5BB9\\u8BF7\\u8BBF\\u95EE \", __jsx(\"a\", {\n        target: \"_blank\",\n        href: \"https://pagenote.logike.cn\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 45\n        }\n      }, \"pagenote\\u4E3B\\u9875\")))))));\n    }\n  }]);\n\n  return Share;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaGFyZS5qcz8zZTc5Il0sIm5hbWVzIjpbIlNoYXJlIiwicHJvcHMiLCJzdGF0ZSIsImNvcGllZCIsInNob3ciLCJhY3RpdmVUYWIiLCJtYXJrZG93biIsInNob3dTaGFyZSIsInVzZXIiLCJjcmVhdGluZyIsInNoYXJlRGF0YSIsInNoYXJlVHlwZSIsImVycm9yTXNnIiwic25hcHNob3QiLCJ0aGF0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlY2VpdmVNZXNzYWdlIiwiZXZlbnQiLCJkYXRhIiwidHlwZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwib3BlbmVyIiwicG9zdE1lc3NhZ2UiLCJ0YWIiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZSIsInRleHRhcmVhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwidGFyZ2V0IiwidmFsdWUiLCJodG1sIiwic2hhcmVIdG1sIiwiYmFja2dyb3VuZEltYWdlIiwiZGlzcGxheSIsInRvZ2dsZVNob3ciLCJiaW5kIiwiY2hhbmdlVGFiIiwiY2hhbmdlU2hhcmVUeXBlIiwiY2hhbmdlVGl0bGUiLCJjb3B5TWQiLCJuYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUNxQkEsSzs7Ozs7QUFFakIsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBVztBQUNQQyxZQUFNLEVBQUUsS0FERDtBQUVQQyxVQUFJLEVBQUUsSUFGQztBQUdQQyxlQUFTLEVBQUUsT0FISjtBQUlQQyxjQUFRLEVBQUUsRUFKSDtBQUtQQyxlQUFT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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRnBDLEVBSUt6QyxJQUFJLEdBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FBRCxHQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUpqQyxFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTEosQ0FwQkosQ0FESixFQThCSTtBQUFTLGlCQUFTLHdCQUFpQkgsU0FBUyxLQUFHLFFBQVosR0FBcUIsUUFBckIsR0FBOEIsRUFBL0MsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLRyxJQUFJLEdBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBVUEsSUFBSSxDQUFDOEMsSUFBZixDQUFELEdBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUFSLENBRHZDLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REFDWTtBQUFHLGNBQU0sRUFBQyxRQUFWO0FBQW1CLFlBQUksRUFBQyw0QkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FEWixDQUZKLENBOUJKLENBUEosQ0FQSixDQURKLENBREo7QUF5REg7Ozs7RUEvSThCQywrQyIsImZpbGUiOiIuL3BhZ2VzL3NoYXJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCAnLi4vc3R5bGVzL3NoYXJlLnNjc3MnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyZSBleHRlbmRzIENvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBjb3BpZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogJ3NoYXJlJyxcbiAgICAgICAgICAgIG1hcmtkb3duOiAnJyxcbiAgICAgICAgICAgIHNob3dTaGFyZTogdHJ1ZSxcbiAgICAgICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgICAgICBjcmVhdGluZzogZmFsc2UsXG4gICAgICAgICAgICBzaGFyZURhdGE6IHt9LFxuICAgICAgICAgICAgc2hhcmVUeXBlOiAnYWxsJyxcbiAgICAgICAgICAgIGVycm9yTXNnOiAnJyxcbiAgICAgICAgICAgIHNuYXBzaG90OicnLFxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCByZWNlaXZlTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICBmdW5jdGlvbiByZWNlaXZlTWVzc2FnZShldmVudClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoZXZlbnQuZGF0YS50eXBlPT09XCJzeW5jX3NoYXJlSW5mb1wiKXtcbiAgICAgICAgICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVEYXRhOiBldmVudC5kYXRhLnNoYXJlRGF0YSB8fCB7fVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBpZighdGhhdC5zdGF0ZS5zaGFyZURhdGEudGl0bGUgJiYgd2luZG93Lm9wZW5lcil7XG4gICAgICAgICAgICB3aW5kb3cub3BlbmVyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOidnZXRfc2hhcmVfZGF0YSdcbiAgICAgICAgICAgIH0sXCIqXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlVGFiKHRhYil7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlVGFiOnRhYixcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY2hhbmdlU2hhcmVUeXBlKHR5cGUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNoYXJlVHlwZTp0eXBlLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvcHlNZCgpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuc3RhdGUubWFya2Rvd24gKyAnXFxuXFxuW+S9v+eUqHBhZ2Vub3Rl55Sf5oiQXShodHRwczovL3BhZ2Vub3RlLmxvZ2lrZS5jbiknO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICB0ZXh0YXJlYS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRhcmVhKTtcbiAgICAgICAgICAgIHRleHRhcmVhLnNlbGVjdCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ0NvcHknLCBmYWxzZSwgbnVsbCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRhcmVhKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29waWVkOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNoYW5nZVRpdGxlKGUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNoYXJlRGF0YTp7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5zaGFyZURhdGEsXG4gICAgICAgICAgICAgICAgdGl0bGU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlU2hvdygpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3c6ICF0aGlzLnN0YXRlLnNob3dcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHthY3RpdmVUYWIsc2hhcmVUeXBlLHVzZXIsc2hvd30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7bWFya2Rvd24sdGl0bGUsc25hcHNob3QsaHRtbH0gPSB0aGlzLnN0YXRlLnNoYXJlRGF0YTtcbiAgICAgICAgY29uc3Qgc2hhcmVIdG1sID0gc2hhcmVUeXBlPT09J2FsbCc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2hhcmUnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFza1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc25hcHNob3QnIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c25hcHNob3R9KWB9fT5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qPHBhZ2Vub3RlLWh0bWwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHNoYXJlSHRtbD9odG1sOicnfX0+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgey8qPC9wYWdlbm90ZS1odG1sPiovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7ZGlzcGxheTogc2hvdz8nYmxvY2snOidub25lJ319ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17dGhpcy50b2dnbGVTaG93LmJpbmQodGhpcyl9PuWFs+mXrTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpPT50aGlzLmNoYW5nZVRhYignc2hhcmUnKX0gY2xhc3NOYW1lPXtgdGFiICR7YWN0aXZlVGFiPT09J3NoYXJlJz8nYWN0aXZlJzonJ31gfT7liIbkuqsmYW1wO+WvvOWHujwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKT0+dGhpcy5jaGFuZ2VUYWIoJ2dyb3VuZCcpfSBjbGFzc05hbWU9e2B0YWIgJHthY3RpdmVUYWI9PT0nZ3JvdW5kJz8nYWN0aXZlJzonJ31gfT5wYWdlbm90ZSDlub/lnLo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItYm9yZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2B0YWItY29udGVudCAke2FjdGl2ZVRhYj09PSdzaGFyZSc/J2FjdGl2ZSc6Jyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5YiG5Lqr5YaF5a655bCGPHN0cm9uZz7lhazlvIDvvIzmiYDmnInkurrlj6/op4EgPGEgaHJlZj1cImh0dHBzOi8vcGFnZW5vdGUubG9naWtlLmNuXCI+d2h5PzwvYT48L3N0cm9uZz7jgIJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCBvbkNoYW5nZT17KCk9PnRoaXMuY2hhbmdlU2hhcmVUeXBlKCdvbmx5LWxpZ2h0Jyl9IG5hbWU9XCJzaGFyZS10eXBlXCIgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD17c2hhcmVUeXBlPT09J29ubHktbGlnaHQnfSAvPuS7heWIhuS6q+agh+iusDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IG9uQ2hhbmdlPXsoKT0+dGhpcy5jaGFuZ2VTaGFyZVR5cGUoJ2FsbCcpfSBuYW1lPVwic2hhcmUtdHlwZVwiIHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9e3NoYXJlVHlwZT09PSdhbGwnfSAvPuWIhuS6q+agh+iusCZhbXA7572R6aG1PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NoYXJlSHRtbD8naGlkZSc6J3Nob3cnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J21hcmtkb3duLWNvbnRlbnQnIHZhbHVlPXttYXJrZG93bn0gcmVhZE9ubHkgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaGFyZUh0bWw/J3Nob3cnOidoaWRlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2hhcmUtdGl0bGVcIiBvbkNoYW5nZT17dGhpcy5jaGFuZ2VUaXRsZS5iaW5kKHRoaXMpfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi5YiG5Lqr5qCH6aKY77yM5LiA5Y+l6K+d5oC757uT5ZCn77yM6K6p5L2g55qE5YiG5Lqr5pu05pyJ5ZC45byV5YqbXCIgdmFsdWU9e3RpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGltZyBhbHQ9XCJcIiBzcmM9e3NuYXBzaG90fSAvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5qCH6K6w44CB5Lul5Y+K572R6aG15YaF5a656KKr5YiG5Lqr5ZCO5YWs5byA5Y+v6KeB44CCPGJyLz7lvZPliY3pobXmnInmlY/mhJ/kv6Hmga/vvIzlpoLotKbmiLfkv6Hmga/ml7bvvIzor7fms6jmhI/kv53lr4bjgILosKjmhY7liIbkuqvjgIJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25zXCIgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVUeXBlPT09J29ubHktbGlnaHQnICYmIDxidXR0b24gY2xhc3NOYW1lPVwiY29weS1idXR0b25cIiBvbkNsaWNrPXt0aGlzLmNvcHlNZC5iaW5kKHRoaXMpfT7lpI3liLZNRDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXI/PGJ1dHRvbj7kuIDplK7liIbkuqs8L2J1dHRvbj46IDxidXR0b24+55m75b2V5ZCO5YiG5LqrPC9idXR0b24+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj7lj5bmtog8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgdGFiLWNvbnRlbnQgJHthY3RpdmVUYWI9PT0nZ3JvdW5kJz8nYWN0aXZlJzonJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXI/PHNwYW4+aGkge3VzZXIubmFtZX08L3NwYW4+OiA8YnV0dG9uPjxhPuivt+eZu+W9lTwvYT48L2J1dHRvbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmm7TlpJrlhoXlrrnor7forr/pl64gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vcGFnZW5vdGUubG9naWtlLmNuXCI+cGFnZW5vdGXkuLvpobU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/share.js\n");

/***/ })

})