webpackHotUpdate("static/development/pages/uninstall.js",{

/***/ "./pages/uninstall.js":
/*!****************************!*\
  !*** ./pages/uninstall.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SnapshotRender; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_uninstall_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/uninstall.scss */ \"./styles/uninstall.scss\");\n/* harmony import */ var _styles_uninstall_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_uninstall_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ranronghua/Desktop/pagenoter/pages/uninstall.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar SnapshotRender = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(SnapshotRender, _Component);\n\n  var _super = _createSuper(SnapshotRender);\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SnapshotRender, null, [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                return _context.abrupt(\"return\", {\n                  showFooter: false\n                });\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  function SnapshotRender(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, SnapshotRender);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SnapshotRender, [{\n    key: \"showDS\",\n    value: function showDS() {\n      this.setState({\n        showCode: true\n      });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        className: \"uninstall\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }\n      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 17\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }\n      }, \"goodbye in pagenote\")), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }\n      }, __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 21\n        }\n      }, \"\\u771F\\u7684\\u5C31\\u8981\\u8BF4\\u518D\\u89C1\\u4E86\\u5417\\uFF1F\"), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }\n      }, __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 25\n        }\n      }, \"PAGENOTE \\u53EF\\u4EE5\\u8BA9\\u4F60\\u5F88\\u65B9\\u4FBF\\u7684\\u5728\\u7F51\\u9875\\u4E0A\\u7559\\u7B14\\u8BB0\\uFF0C\\u6574\\u7406\\u4F60\\u7684\\u4E66\\u7B7E\\u3002\"), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 25\n        }\n      }, \"\\u5982\\u679C\\u4F60\\u8FD8\\u6CA1\\u6709\\u7528\\u8FC7\\u8FD9\\u4E9B\\u529F\\u80FD\\uFF0C\\u5EFA\\u8BAE\\u4F60\\u53EF\\u4EE5\\u5C1D\\u8BD5\\u4E00\\u4E0B\\u3002\")), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }\n      }, __jsx(\"strong\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 25\n        }\n      }, \"\\u76F8\\u6BD4\\u5176\\u4ED6\\u7C7B\\u4F3C\\u7684\\u5DE5\\u5177\\uFF0CPAGENOTE \\u6709\\u4EE5\\u4E0B\\u4F18\\u52BF\\uFF1A\"), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 25\n        }\n      }, __jsx(\"ol\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 29\n        }\n      }, __jsx(\"li\", {\n        style: {\n          background: 'pink'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 33\n        }\n      }, \"\\u514D\\u8D39\\u4E14\\u6CA1\\u6709\\u5E7F\\u544A\\uFF0C\\u7528\\u5FC3\\u505A\\u597D\\u5DE5\\u5177\\u7684\\u672C\\u5206\\uFF0C\\u5C0F\\u5DE7\\u4E0D\\u6253\\u6270\\u3002\"), __jsx(\"li\", {\n        style: {\n          background: '#ffd88c'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 33\n        }\n      }, \"\\u50BB\\u74DC\\u5F0F\\u7684\\u64CD\\u4F5C\\uFF0C\\u4E00\\u4E9B\\u529F\\u80FD\\u90FD\\u53EF\\u4EE5\\u4ECE\\u300C\\u52FE\\u9009\\u4E00\\u6BB5\\u6587\\u672C\\u300D\\u5F00\\u59CB\\u3002\"), __jsx(\"li\", {\n        style: {\n          background: '#9ecbf5'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 33\n        }\n      }, \"\\u53EF\\u79BB\\u7EBF\\u8FD0\\u884C\\uFF0C\\u8BB0\\u5F55\\u672C\\u5730\\u6587\\u4EF6\\uFF0C\\u6CA1\\u6709\\u70E6\\u4EBA\\u7684\\u5F3A\\u5236\\u767B\\u5F55\\u3002\"), __jsx(\"li\", {\n        style: {\n          background: '#4dff8e'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 33\n        }\n      }, \"\\u7528\\u5FC3\\u505A\\u6781\\u5BA2\\uFF0C\\u8FFD\\u6C42\\u6781\\u81F4\\uFF0C\\u8BA4\\u771F\\u6253\\u78E8\\u6BCF\\u4E00\\u4E2A\\u7EC6\\u8282\\uFF0C\\u66F4\\u591A\\u7684\\u4E2A\\u6027\\u5316\\u64CD\\u4F5C\\u3002\")), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 29\n        }\n      }, __jsx(\"a\", {\n        href: \"./release?from=uninstall\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 33\n        }\n      }, \"\\u53BB\\u5B89\\u88C5\\u518D\\u8BD5\\u8BD5\"))))));\n    }\n  }]);\n\n  return SnapshotRender;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91bmluc3RhbGwuanM/Y2Q4MiJdLCJuYW1lcyI6WyJTbmFwc2hvdFJlbmRlciIsInNob3dGb290ZXIiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJzaG93Q29kZSIsImJhY2tncm91bmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFDcUJBLGM7Ozs7Ozs7Ozs7Ozs7aURBRU47QUFDSEMsNEJBQVUsRUFBRTtBQURULGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWCwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXLEVBQVg7QUFGZTtBQUtsQjs7Ozs2QkFFTztBQUNKLFdBQUtDLFFBQUwsQ0FBYztBQUNWQyxnQkFBUSxFQUFFO0FBREEsT0FBZDtBQUdIOzs7d0NBRW1CLENBQ25COzs7NkJBR1E7QUFDTCxhQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLENBREosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3RUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtKQURKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzSkFISixDQUZKLEVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUhBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUksYUFBSyxFQUFFO0FBQUNDLG9CQUFVLEVBQUM7QUFBWixTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEpBREosRUFJSTtBQUFJLGFBQUssRUFBRTtBQUFDQSxvQkFBVSxFQUFDO0FBQVosU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdLQUpKLEVBT0k7QUFBSSxhQUFLLEVBQUU7QUFBQ0Esb0JBQVUsRUFBQztBQUFaLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzSkFQSixFQVVJO0FBQUksYUFBSyxFQUFFO0FBQUNBLG9CQUFVLEVBQUM7QUFBWixTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ01BVkosQ0FESixFQWVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLFlBQUksRUFBQywwQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQURKLENBZkosQ0FGSixDQVBKLENBTEosQ0FESjtBQXVDSDs7OztFQWpFdUNDLCtDIiwiZmlsZSI6Ii4vcGFnZXMvdW5pbnN0YWxsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCAnLi4vc3R5bGVzL3VuaW5zdGFsbC5zY3NzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25hcHNob3RSZW5kZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93RFMoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93Q29kZTogdHJ1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VuaW5zdGFsbCc+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5nb29kYnllIGluIHBhZ2Vub3RlPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+55yf55qE5bCx6KaB6K+05YaN6KeB5LqG5ZCX77yfPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBBR0VOT1RFIOWPr+S7peiuqeS9oOW+iOaWueS+v+eahOWcqOe9kemhteS4iueVmeeslOiusO+8jOaVtOeQhuS9oOeahOS5puetvuOAgjwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+5aaC5p6c5L2g6L+Y5rKh5pyJ55So6L+H6L+Z5Lqb5Yqf6IO977yM5bu66K6u5L2g5Y+v5Lul5bCd6K+V5LiA5LiL44CCPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+55u45q+U5YW25LuW57G75Ly855qE5bel5YW377yMUEFHRU5PVEUg5pyJ5Lul5LiL5LyY5Yq/77yaPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7YmFja2dyb3VuZDoncGluayd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWFjei0ueS4lOayoeacieW5v+WRiu+8jOeUqOW/g+WBmuWlveW3peWFt+eahOacrOWIhu+8jOWwj+W3p+S4jeaJk+aJsOOAglxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3tiYWNrZ3JvdW5kOicjZmZkODhjJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5YK755Oc5byP55qE5pON5L2c77yM5LiA5Lqb5Yqf6IO96YO95Y+v5Lul5LuO44CM5Yu+6YCJ5LiA5q615paH5pys44CN5byA5aeL44CCXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e2JhY2tncm91bmQ6JyM5ZWNiZjUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlj6/nprvnur/ov5DooYzvvIzorrDlvZXmnKzlnLDmlofku7bvvIzmsqHmnInng6bkurrnmoTlvLrliLbnmbvlvZXjgIJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7YmFja2dyb3VuZDonIzRkZmY4ZSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOeUqOW/g+WBmuaegeWuou+8jOi/veaxguaegeiHtO+8jOiupOecn+aJk+ejqOavj+S4gOS4que7huiKgu+8jOabtOWkmueahOS4quaAp+WMluaTjeS9nOOAglxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nLi9yZWxlYXNlP2Zyb209dW5pbnN0YWxsJz7ljrvlronoo4Xlho3or5Xor5U8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/uninstall.js\n");

/***/ })

})