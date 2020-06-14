webpackHotUpdate("static/development/pages/share.js",{

/***/ "./pages/share.js":
/*!************************!*\
  !*** ./pages/share.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Share; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_share_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/share.scss */ \"./styles/share.scss\");\n/* harmony import */ var _styles_share_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_share_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ranronghua/Desktop/nextjs-pagenote/pages/share.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Share = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Share, _Component);\n\n  var _super = _createSuper(Share);\n\n  function Share(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Share);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      copied: false,\n      show: true,\n      activeTab: 'share',\n      markdown: '',\n      showShare: true,\n      user: null,\n      creating: false,\n      shareData: {},\n      shareType: 'all',\n      errorMsg: '',\n      snapshot: ''\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Share, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var that = this;\n      window.addEventListener(\"message\", receiveMessage, false);\n\n      function receiveMessage(event) {\n        if (event.data.type === \"sync_shareInfo\") {\n          that.setState({\n            shareData: event.data.shareData || {}\n          });\n          console.log(event);\n        }\n      }\n\n      if (!that.state.shareData.title && window.opener) {\n        window.opener.postMessage({\n          type: 'get_share_data'\n        }, \"*\");\n      }\n    }\n  }, {\n    key: \"changeTab\",\n    value: function changeTab(tab) {\n      this.setState({\n        activeTab: tab\n      });\n    }\n  }, {\n    key: \"changeShareType\",\n    value: function changeShareType(type) {\n      debugger;\n      this.setState({\n        shareType: type\n      });\n    }\n  }, {\n    key: \"copyMd\",\n    value: function copyMd() {\n      var text = this.state.markdown + '\\n\\n[使用pagenote生成](https://pagenote.logike.cn)';\n\n      try {\n        return navigator.clipboard.writeText(text);\n      } catch (e) {\n        var textarea = document.createElement('textarea');\n        textarea.textContent = text;\n        document.body.appendChild(textarea);\n        textarea.select();\n        document.execCommand('Copy', false, null);\n        document.body.removeChild(textarea);\n      }\n\n      this.setState({\n        copied: true\n      });\n    }\n  }, {\n    key: \"changeTitle\",\n    value: function changeTitle(e) {\n      this.setState({\n        shareData: _objectSpread(_objectSpread({}, this.state.shareData), {}, {\n          title: e.target.value\n        })\n      });\n    }\n  }, {\n    key: \"toggleShow\",\n    value: function toggleShow() {\n      this.setState({\n        show: !this.state.show\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          activeTab = _this$state.activeTab,\n          shareType = _this$state.shareType,\n          user = _this$state.user,\n          show = _this$state.show;\n      var _this$state$shareData = this.state.shareData,\n          markdown = _this$state$shareData.markdown,\n          title = _this$state$shareData.title,\n          snapshot = _this$state$shareData.snapshot,\n          html = _this$state$shareData.html;\n      var shareHtml = shareType === 'all';\n      return __jsx(\"div\", {\n        className: \"share\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 13\n        }\n      }, __jsx(\"div\", {\n        className: \"mask\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        className: \"snapshot\",\n        style: {\n          backgroundImage: \"url(\".concat(snapshot, \")\")\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }\n      }), __jsx(\"div\", {\n        className: \"container\",\n        style: {\n          display: show ? 'block' : 'none'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 21\n        }\n      }, __jsx(\"a\", {\n        className: \"close\",\n        onClick: this.toggleShow.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 25\n        }\n      }, \"\\u5173\\u95ED\"), __jsx(\"div\", {\n        className: \"tabs\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 25\n        }\n      }, __jsx(\"span\", {\n        onClick: function onClick() {\n          return _this2.changeTab('share');\n        },\n        className: \"tab \".concat(activeTab === 'share' ? 'active' : ''),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 29\n        }\n      }, \"\\u5206\\u4EAB&\\u5BFC\\u51FA\"), __jsx(\"span\", {\n        onClick: function onClick() {\n          return _this2.changeTab('ground');\n        },\n        className: \"tab \".concat(activeTab === 'ground' ? 'active' : ''),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 29\n        }\n      }, \"pagenote \\u5E7F\\u573A\"), __jsx(\"div\", {\n        className: \"tab-border\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 29\n        }\n      })), __jsx(\"div\", {\n        className: \"contents\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 25\n        }\n      }, __jsx(\"section\", {\n        className: \"tab-content \".concat(activeTab === 'share' ? 'active' : ''),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 29\n        }\n      }, __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 33\n        }\n      }, \"\\u5206\\u4EAB\\u5185\\u5BB9\\u5C06\", __jsx(\"strong\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 42\n        }\n      }, \"\\u516C\\u5F00\\uFF0C\\u6240\\u6709\\u4EBA\\u53EF\\u89C1 \", __jsx(\"a\", {\n        href: \"https://pagenote.logike.cn\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 59\n        }\n      }, \"why?\")), \"\\u3002\"), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 33\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 37\n        }\n      }, __jsx(\"input\", {\n        onChange: function onChange() {\n          return _this2.changeShareType('only-light');\n        },\n        name: \"share-type\",\n        type: \"radio\",\n        checked: !shareHtml,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 44\n        }\n      }), \"\\u4EC5\\u5206\\u4EAB\\u6807\\u8BB0\"), __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 37\n        }\n      }, __jsx(\"input\", {\n        onChange: function onChange() {\n          return _this2.changeShareType('all');\n        },\n        name: \"share-type\",\n        type: \"radio\",\n        checked: shareHtml,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 44\n        }\n      }), \"\\u5206\\u4EAB\\u6807\\u8BB0&\\u7F51\\u9875\")), __jsx(\"div\", {\n        className: shareHtml ? 'hide' : 'show',\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 33\n        }\n      }, __jsx(\"textarea\", {\n        className: \"markdown-content\",\n        value: markdown,\n        readOnly: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 37\n        }\n      })), __jsx(\"div\", {\n        className: shareHtml ? 'show' : 'hide',\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 33\n        }\n      }, __jsx(\"input\", {\n        className: \"share-title\",\n        onChange: this.changeTitle.bind(this),\n        type: \"text\",\n        placeholder: \"\\u5206\\u4EAB\\u6807\\u9898\\uFF0C\\u4E00\\u53E5\\u8BDD\\u603B\\u7ED3\\u5427\\uFF0C\\u8BA9\\u4F60\\u7684\\u5206\\u4EAB\\u66F4\\u6709\\u5438\\u5F15\\u529B\",\n        value: title,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 37\n        }\n      }), __jsx(\"div\", {\n        className: \"tip\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 45\n        }\n      }, \"\\u6807\\u8BB0\\u3001\\u4EE5\\u53CA\\u7F51\\u9875\\u5185\\u5BB9\\u88AB\\u5206\\u4EAB\\u540E\\u516C\\u5F00\\u53EF\\u89C1\\u3002\", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 67\n        }\n      }), \"\\u5F53\\u524D\\u9875\\u6709\\u654F\\u611F\\u4FE1\\u606F\\uFF0C\\u5982\\u8D26\\u6237\\u4FE1\\u606F\\u65F6\\uFF0C\\u8BF7\\u6CE8\\u610F\\u4FDD\\u5BC6\\u3002\\u8C28\\u614E\\u5206\\u4EAB\\u3002\")), __jsx(\"div\", {\n        id: \"buttons\",\n        className: \"\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 33\n        }\n      }, !shareHtml && __jsx(\"button\", {\n        className: \"copy-button\",\n        onClick: this.copyMd.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 55\n        }\n      }, \"\\u590D\\u5236MD\"), user ? __jsx(\"button\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 43\n        }\n      }, \"\\u4E00\\u952E\\u5206\\u4EAB\") : __jsx(\"button\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 66\n        }\n      }, \"\\u767B\\u5F55\\u540E\\u5206\\u4EAB\"), __jsx(\"button\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 37\n        }\n      }, \"\\u53D6\\u6D88\"))), __jsx(\"section\", {\n        className: \"tab-content \".concat(activeTab === 'ground' ? 'active' : ''),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 29\n        }\n      }, user ? __jsx(\"span\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 39\n        }\n      }, \"hi \", user.name) : __jsx(\"button\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 68\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 76\n        }\n      }, \"\\u8BF7\\u767B\\u5F55\")), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 33\n        }\n      }, \"\\u66F4\\u591A\\u5185\\u5BB9\\u8BF7\\u8BBF\\u95EE \", __jsx(\"a\", {\n        target: \"_blank\",\n        href: \"https://pagenote.logike.cn\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 45\n        }\n      }, \"pagenote\\u4E3B\\u9875\")))))));\n    }\n  }]);\n\n  return Share;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaGFyZS5qcz8zZTc5Il0sIm5hbWVzIjpbIlNoYXJlIiwicHJvcHMiLCJzdGF0ZSIsImNvcGllZCIsInNob3ciLCJhY3RpdmVUYWIiLCJtYXJrZG93biIsInNob3dTaGFyZSIsInVzZXIiLCJjcmVhdGluZyIsInNoYXJlRGF0YSIsInNoYXJlVHlwZSIsImVycm9yTXNnIiwic25hcHNob3QiLCJ0aGF0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlY2VpdmVNZXNzYWdlIiwiZXZlbnQiLCJkYXRhIiwidHlwZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwib3BlbmVyIiwicG9zdE1lc3NhZ2UiLCJ0YWIiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZSIsInRleHRhcmVhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwidGFyZ2V0IiwidmFsdWUiLCJodG1sIiwic2hhcmVIdG1sIiwiYmFja2dyb3VuZEltYWdlIiwiZGlzcGxheSIsInRvZ2dsZVNob3ciLCJiaW5kIiwiY2hhbmdlVGFiIiwiY2hhbmdlU2hhcmVUeXBlIiwiY2hhbmdlVGl0bGUiLCJjb3B5TWQiLCJuYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUNxQkEsSzs7Ozs7QUFFakIsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBVztBQUNQQyxZQUFNLEVBQUUsS0FERDtBQUVQQyxVQUFJLEVBQUUsSUFGQztBQUdQQyxlQUFTLEVBQUUsT0FISjtBQUlQQyxjQUFRLEVBQUUsRUFKSDtBQUtQQyxlQUFT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QTtBQUFBLDBCQUZ0QixFQUlLekMsSUFBSSxHQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBQUQsR0FBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FKakMsRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUxKLENBcEJKLENBREosRUE4Qkk7QUFBUyxpQkFBUyx3QkFBaUJILFNBQVMsS0FBRyxRQUFaLEdBQXFCLFFBQXJCLEdBQThCLEVBQS9DLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDS0csSUFBSSxHQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVVBLElBQUksQ0FBQzhDLElBQWYsQ0FBRCxHQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBUixDQUR2QyxFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0RBQ1k7QUFBRyxjQUFNLEVBQUMsUUFBVjtBQUFtQixZQUFJLEVBQUMsNEJBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBRFosQ0FGSixDQTlCSixDQVBKLENBUEosQ0FESixDQURKO0FBeURIOzs7O0VBaEo4QkMsK0MiLCJmaWxlIjoiLi9wYWdlcy9zaGFyZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgJy4uL3N0eWxlcy9zaGFyZS5zY3NzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmUgZXh0ZW5kcyBDb21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgY29waWVkOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICBhY3RpdmVUYWI6ICdzaGFyZScsXG4gICAgICAgICAgICBtYXJrZG93bjogJycsXG4gICAgICAgICAgICBzaG93U2hhcmU6IHRydWUsXG4gICAgICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICAgICAgY3JlYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2hhcmVEYXRhOiB7fSxcbiAgICAgICAgICAgIHNoYXJlVHlwZTogJ2FsbCcsXG4gICAgICAgICAgICBlcnJvck1zZzogJycsXG4gICAgICAgICAgICBzbmFwc2hvdDonJyxcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgcmVjZWl2ZU1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZU1lc3NhZ2UoZXZlbnQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGV2ZW50LmRhdGEudHlwZT09PVwic3luY19zaGFyZUluZm9cIil7XG4gICAgICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNoYXJlRGF0YTogZXZlbnQuZGF0YS5zaGFyZURhdGEgfHwge31cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgaWYoIXRoYXQuc3RhdGUuc2hhcmVEYXRhLnRpdGxlICYmIHdpbmRvdy5vcGVuZXIpe1xuICAgICAgICAgICAgd2luZG93Lm9wZW5lci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTonZ2V0X3NoYXJlX2RhdGEnXG4gICAgICAgICAgICB9LFwiKlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZVRhYih0YWIpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYjp0YWIsXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNoYW5nZVNoYXJlVHlwZSh0eXBlKXtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaGFyZVR5cGU6dHlwZSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb3B5TWQoKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnN0YXRlLm1hcmtkb3duICsgJ1xcblxcblvkvb/nlKhwYWdlbm90ZeeUn+aIkF0oaHR0cHM6Ly9wYWdlbm90ZS5sb2dpa2UuY24pJztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgdGV4dGFyZWEudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG4gICAgICAgICAgICB0ZXh0YXJlYS5zZWxlY3QoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdDb3B5JywgZmFsc2UsIG51bGwpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0YXJlYSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvcGllZDogdHJ1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjaGFuZ2VUaXRsZShlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaGFyZURhdGE6e1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuc2hhcmVEYXRhLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRvZ2dsZVNob3coKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93OiAhdGhpcy5zdGF0ZS5zaG93XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YWN0aXZlVGFiLHNoYXJlVHlwZSx1c2VyLHNob3d9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qge21hcmtkb3duLHRpdGxlLHNuYXBzaG90LGh0bWx9ID0gdGhpcy5zdGF0ZS5zaGFyZURhdGE7XG4gICAgICAgIGNvbnN0IHNoYXJlSHRtbCA9IHNoYXJlVHlwZT09PSdhbGwnO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NoYXJlJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hc2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NuYXBzaG90JyBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke3NuYXBzaG90fSlgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxwYWdlbm90ZS1odG1sIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBzaGFyZUh0bWw/aHRtbDonJ319PiovfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKjwvcGFnZW5vdGUtaHRtbD4qL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17e2Rpc3BsYXk6IHNob3c/J2Jsb2NrJzonbm9uZSd9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU2hvdy5iaW5kKHRoaXMpfT7lhbPpl608L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKT0+dGhpcy5jaGFuZ2VUYWIoJ3NoYXJlJyl9IGNsYXNzTmFtZT17YHRhYiAke2FjdGl2ZVRhYj09PSdzaGFyZSc/J2FjdGl2ZSc6Jyd9YH0+5YiG5LqrJmFtcDvlr7zlh7o8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCk9PnRoaXMuY2hhbmdlVGFiKCdncm91bmQnKX0gY2xhc3NOYW1lPXtgdGFiICR7YWN0aXZlVGFiPT09J2dyb3VuZCc/J2FjdGl2ZSc6Jyd9YH0+cGFnZW5vdGUg5bm/5Zy6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWJvcmRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgdGFiLWNvbnRlbnQgJHthY3RpdmVUYWI9PT0nc2hhcmUnPydhY3RpdmUnOicnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWIhuS6q+WGheWuueWwhjxzdHJvbmc+5YWs5byA77yM5omA5pyJ5Lq65Y+v6KeBIDxhIGhyZWY9XCJodHRwczovL3BhZ2Vub3RlLmxvZ2lrZS5jblwiPndoeT88L2E+PC9zdHJvbmc+44CCXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgb25DaGFuZ2U9eygpPT50aGlzLmNoYW5nZVNoYXJlVHlwZSgnb25seS1saWdodCcpfSBuYW1lPVwic2hhcmUtdHlwZVwiIHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9eyFzaGFyZUh0bWx9IC8+5LuF5YiG5Lqr5qCH6K6wPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgb25DaGFuZ2U9eygpPT50aGlzLmNoYW5nZVNoYXJlVHlwZSgnYWxsJyl9IG5hbWU9XCJzaGFyZS10eXBlXCIgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD17c2hhcmVIdG1sfSAvPuWIhuS6q+agh+iusCZhbXA7572R6aG1PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NoYXJlSHRtbD8naGlkZSc6J3Nob3cnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J21hcmtkb3duLWNvbnRlbnQnIHZhbHVlPXttYXJrZG93bn0gcmVhZE9ubHkgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaGFyZUh0bWw/J3Nob3cnOidoaWRlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2hhcmUtdGl0bGVcIiBvbkNoYW5nZT17dGhpcy5jaGFuZ2VUaXRsZS5iaW5kKHRoaXMpfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi5YiG5Lqr5qCH6aKY77yM5LiA5Y+l6K+d5oC757uT5ZCn77yM6K6p5L2g55qE5YiG5Lqr5pu05pyJ5ZC45byV5YqbXCIgdmFsdWU9e3RpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGltZyBhbHQ9XCJcIiBzcmM9e3NuYXBzaG90fSAvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5qCH6K6w44CB5Lul5Y+K572R6aG15YaF5a656KKr5YiG5Lqr5ZCO5YWs5byA5Y+v6KeB44CCPGJyLz7lvZPliY3pobXmnInmlY/mhJ/kv6Hmga/vvIzlpoLotKbmiLfkv6Hmga/ml7bvvIzor7fms6jmhI/kv53lr4bjgILosKjmhY7liIbkuqvjgIJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25zXCIgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNoYXJlSHRtbCAmJiA8YnV0dG9uIGNsYXNzTmFtZT1cImNvcHktYnV0dG9uXCIgb25DbGljaz17dGhpcy5jb3B5TWQuYmluZCh0aGlzKX0+5aSN5Yi2TUQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyPzxidXR0b24+5LiA6ZSu5YiG5LqrPC9idXR0b24+OiA8YnV0dG9uPueZu+W9leWQjuWIhuS6qzwvYnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+5Y+W5raIPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YHRhYi1jb250ZW50ICR7YWN0aXZlVGFiPT09J2dyb3VuZCc/J2FjdGl2ZSc6Jyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyPzxzcGFuPmhpIHt1c2VyLm5hbWV9PC9zcGFuPjogPGJ1dHRvbj48YT7or7fnmbvlvZU8L2E+PC9idXR0b24+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5pu05aSa5YaF5a656K+36K6/6ZeuIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3BhZ2Vub3RlLmxvZ2lrZS5jblwiPnBhZ2Vub3Rl5Li76aG1PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/share.js\n");

/***/ })

})