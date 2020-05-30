webpackHotUpdate("static/development/pages/snapshot.js",{

/***/ "./pages/snapshot.js":
/*!***************************!*\
  !*** ./pages/snapshot.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SnapshotRender; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ranronghua/Desktop/nextjs-pagenote/pages/snapshot.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n // import GitHub from \"github-api\";\n\n\n // let gh = new GitHub();\n// const issue = gh.getIssues('rowthan','rowthan.github.io');\n\nvar proxy = 'https://cors-anywhere.herokuapp.com/';\nvar pagenote;\n\nvar SnapshotRender = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SnapshotRender, _Component);\n\n  var _super = _createSuper(SnapshotRender);\n\n  function SnapshotRender(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SnapshotRender);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"fetchPage\", function (id) {\n      _this.setState({\n        fetching: true\n      });\n\n      axios__WEBPACK_IMPORTED_MODULE_10___default()({\n        method: 'get',\n        headers: {\n          Accept: 'application/json'\n        },\n        url: \"\".concat(proxy, \"https://api.github.com/repos/rowthan/rowthan.github.io/issues/\").concat(id)\n      }).then(function (response) {\n        if (response.data) {\n          _this.resolveHTML(response.data);\n        }\n      })[\"catch\"](function () {\n        _this.setState({\n          errMsg: '请求数据异常',\n          loading: false\n        });\n      }); // return\n      // issue.getIssue(id, (err,result,request)=> {\n      //     this.resolveHTML(result)\n      // });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resolveHTML\", function (result) {\n      var that = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this);\n\n      pagenote = new PageNote();\n      var metaInfo = {};\n\n      if (result && result.body) {\n        metaInfo = JSON.parse(result.body);\n        that.setState({\n          metaInfo: metaInfo\n        });\n\n        if (metaInfo.html) {\n          injectHtml(metaInfo.html, metaInfo);\n        } else if (metaInfo.htmlUrl) {\n          var htmlID = metaInfo.htmlUrl.match(/gists\\/(\\w+)$/)[1];\n          var gist = gh.getGist(htmlID);\n          gist.read(function (error, result) {\n            try {\n              var html = result.files['pagenote.html'].content || '';\n              injectHtml(html, metaInfo);\n            } catch (e) {\n              setError('解析失败');\n            }\n          })[\"catch\"](function () {\n            setError('加载失败');\n          });\n        } else if (metaInfo.commentHtmlId) {\n          issue.getIssueComment(metaInfo.commentHtmlId, function (error, result) {\n            var html = result.body;\n            injectHtml(html, metaInfo);\n          })[\"catch\"](function (e) {\n            setError(e);\n          });\n        }\n      } else {\n        setError('无数据信息');\n      }\n\n      function injectHtml(html, metaInfo) {\n        that.setState({\n          snapHtml: html,\n          fetching: false\n        }, function () {\n          pagenote.init(metaInfo);\n        });\n      }\n\n      function setError(msg) {\n        that.setState({\n          fetching: false,\n          errMsg: msg || '加载失败'\n        });\n      }\n    });\n\n    _this.state = {\n      snapHtml: '',\n      fetching: false,\n      errMsg: '',\n      metaInfo: {}\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SnapshotRender, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (pagenote) {\n        return;\n      }\n\n      var id = window.location.search.match(/pagenote=(.*)$/);\n      var pagenoteId = id ? id[1] : '';\n      this.fetchPage(pagenoteId);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          snapHtml = _this$state.snapHtml,\n          fetching = _this$state.fetching,\n          metaInfo = _this$state.metaInfo,\n          errMsg = _this$state.errMsg;\n      var _metaInfo$title = metaInfo.title,\n          title = _metaInfo$title === void 0 ? '' : _metaInfo$title;\n      var lastModify = new Date(metaInfo.lastModified).toLocaleDateString();\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 13\n        }\n      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 17\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 21\n        }\n      }, \"\\u7F51\\u9875\\u5FEB\\u7167\", title), __jsx(\"style\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 21\n        }\n      }), __jsx(\"script\", {\n        src: \"/pagenote.js\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 21\n        }\n      })), __jsx(\"div\", {\n        className: \"tip\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 21\n        }\n      }, \"\\u5F53\\u524D\\u5FEB\\u7167\\u7F51\\u9875\\u901A\\u8FC7 \", __jsx(\"a\", {\n        href: \"https://pagenote.logike.cn\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 34\n        }\n      }, \"pagenote\"), \" \\u5206\\u4EAB\\u751F\\u6210\\u3002\\u5185\\u5BB9\\u516C\\u5F00\\u53EF\\u89C1\\uFF0C\\u8BF7\\u6CE8\\u610F\\u4E2A\\u4EBA\\u4FE1\\u606F\\u4FDD\\u62A4\\u3002\", __jsx(\"a\", {\n        href: \"/\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 106\n        }\n      }, \"\\u8FD4\\u56DE\\u5E7F\\u573A\"), \" \\u67E5\\u770B\\u66F4\\u591A\\u5206\\u4EAB\\u7F51\\u9875\"), snapHtml && __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 25\n        }\n      }, __jsx(\"span\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 29\n        }\n      }, \"pagenote \\u4E0E\\u7F51\\u9875 \", metaInfo.url, \" \\u7684\\u4F5C\\u8005\\u65E0\\u5173\\uFF0C\\u4E0D\\u5BF9\\u5176\\u5185\\u5BB9\\u8D1F\\u8D23\\u3002\\u5FEB\\u7167\\u7F51\\u9875\\u8C28\\u7528\\u4E8E\\u9605\\u8BFB\\uFF0C\\u4E0D\\u4EE3\\u8868\\u539F\\u7F51\\u9875\\u7684\\u7684\\u5373\\u65F6\\u9875\\u9762\\u3002 \\u5B89\\u88C5pagenote\\u63D2\\u4EF6\\u53EF\\u5728\\u539F\\u7F51\\u9875\\u4E2D\\u67E5\\u770B\\u5206\\u4EAB\\u6807\\u8BB0\\u3002\\u521B\\u5EFA\\u65F6\\u95F4 \", __jsx(\"time\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 59\n        }\n      }, lastModify)))), __jsx(\"div\", {\n        id: \"pagenote-share-content-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 17\n        }\n      }, snapHtml && __jsx(\"div\", {\n        dangerouslySetInnerHTML: {\n          __html: snapHtml\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 37\n        }\n      }), fetching && __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 25\n        }\n      }, \"\\u5C1D\\u8BD5\\u52A0\\u8F7D\\u5FEB\\u7167\\u7F51\\u9875...\", __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 29\n        }\n      })), errMsg && __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 25\n        }\n      }, errMsg)));\n    }\n  }]);\n\n  return SnapshotRender;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zbmFwc2hvdC5qcz9lODU2Il0sIm5hbWVzIjpbInByb3h5IiwicGFnZW5vdGUiLCJTbmFwc2hvdFJlbmRlciIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsImZldGNoaW5nIiwiYXhpb3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJlc29sdmVIVE1MIiwiZXJyTXNnIiwibG9hZGluZyIsInJlc3VsdCIsInRoYXQiLCJQYWdlTm90ZSIsIm1ldGFJbmZvIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsImh0bWwiLCJpbmplY3RIdG1sIiwiaHRtbFVybCIsImh0bWxJRCIsIm1hdGNoIiwiZ2lzdCIsImdoIiwiZ2V0R2lzdCIsInJlYWQiLCJlcnJvciIsImZpbGVzIiwiY29udGVudCIsImUiLCJzZXRFcnJvciIsImNvbW1lbnRIdG1sSWQiLCJpc3N1ZSIsImdldElzc3VlQ29tbWVudCIsInNuYXBIdG1sIiwiaW5pdCIsIm1zZyIsInN0YXRlIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJwYWdlbm90ZUlkIiwiZmV0Y2hQYWdlIiwidGl0bGUiLCJsYXN0TW9kaWZ5IiwiRGF0ZSIsImxhc3RNb2RpZmllZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIl9faHRtbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtDQUVBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLHNDQUFkO0FBQ0EsSUFBSUMsUUFBSjs7SUFDcUJDLGM7Ozs7O0FBRWpCLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsb05BbUJULFVBQUNDLEVBQUQsRUFBTTtBQUNaLFlBQUtDLFFBQUwsQ0FBYztBQUNWQyxnQkFBUSxFQUFFO0FBREEsT0FBZDs7QUFLQUMsbURB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bkp1Q3lDLCtDIiwiZmlsZSI6Ii4vcGFnZXMvc25hcHNob3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy8gaW1wb3J0IEdpdEh1YiBmcm9tIFwiZ2l0aHViLWFwaVwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbi8vIGxldCBnaCA9IG5ldyBHaXRIdWIoKTtcbi8vIGNvbnN0IGlzc3VlID0gZ2guZ2V0SXNzdWVzKCdyb3d0aGFuJywncm93dGhhbi5naXRodWIuaW8nKTtcbmNvbnN0IHByb3h5ID0gJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tLyc7XG5sZXQgcGFnZW5vdGU7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbmFwc2hvdFJlbmRlciBleHRlbmRzIENvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBzbmFwSHRtbCA6JycsXG4gICAgICAgICAgICBmZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICBlcnJNc2c6ICcnLFxuICAgICAgICAgICAgbWV0YUluZm86e30sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYocGFnZW5vdGUpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5tYXRjaCgvcGFnZW5vdGU9KC4qKSQvKTtcbiAgICAgICAgY29uc3QgcGFnZW5vdGVJZCA9IGlkID8gaWRbMV0gOiAnJztcbiAgICAgICAgdGhpcy5mZXRjaFBhZ2UocGFnZW5vdGVJZCk7XG4gICAgfVxuXG4gICAgZmV0Y2hQYWdlPShpZCk9PntcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBheGlvcyh7XG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiBgJHtwcm94eX1odHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3Jvd3RoYW4vcm93dGhhbi5naXRodWIuaW8vaXNzdWVzLyR7aWR9YCxcbiAgICAgICAgfSkudGhlbiggKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZUhUTUwocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJNc2c6J+ivt+axguaVsOaNruW8guW4uCcsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZXR1cm5cbiAgICAgICAgLy8gaXNzdWUuZ2V0SXNzdWUoaWQsIChlcnIscmVzdWx0LHJlcXVlc3QpPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5yZXNvbHZlSFRNTChyZXN1bHQpXG4gICAgICAgIC8vIH0pO1xuICAgIH07XG5cbiAgICByZXNvbHZlSFRNTD0ocmVzdWx0KT0+e1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgcGFnZW5vdGUgPSBuZXcgUGFnZU5vdGUoKTtcbiAgICAgICAgbGV0IG1ldGFJbmZvID0ge307XG4gICAgICAgIGlmKHJlc3VsdCAmJiByZXN1bHQuYm9keSl7XG4gICAgICAgICAgICBtZXRhSW5mbyA9IEpTT04ucGFyc2UocmVzdWx0LmJvZHkpO1xuICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbWV0YUluZm86IG1ldGFJbmZvLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZihtZXRhSW5mby5odG1sKXtcbiAgICAgICAgICAgICAgICBpbmplY3RIdG1sKG1ldGFJbmZvLmh0bWwsbWV0YUluZm8pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKG1ldGFJbmZvLmh0bWxVcmwpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxJRCA9IG1ldGFJbmZvLmh0bWxVcmwubWF0Y2goL2dpc3RzXFwvKFxcdyspJC8pWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdpc3QgPSBnaC5nZXRHaXN0KGh0bWxJRCk7XG4gICAgICAgICAgICAgICAgZ2lzdC5yZWFkKGZ1bmN0aW9uIChlcnJvcixyZXN1bHQsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGh0bWwgPSByZXN1bHQuZmlsZXNbJ3BhZ2Vub3RlLmh0bWwnXS5jb250ZW50IHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5qZWN0SHRtbChodG1sLG1ldGFJbmZvKVxuICAgICAgICAgICAgICAgICAgICB9Y2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCfop6PmnpDlpLHotKUnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcign5Yqg6L295aSx6LSlJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2UgaWYobWV0YUluZm8uY29tbWVudEh0bWxJZCl7XG4gICAgICAgICAgICAgICAgaXNzdWUuZ2V0SXNzdWVDb21tZW50KG1ldGFJbmZvLmNvbW1lbnRIdG1sSWQsZnVuY3Rpb24gKGVycm9yLHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBodG1sID0gcmVzdWx0LmJvZHk7XG4gICAgICAgICAgICAgICAgICAgIGluamVjdEh0bWwoaHRtbCxtZXRhSW5mbyk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNldEVycm9yKCfml6DmlbDmja7kv6Hmga8nKVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGluamVjdEh0bWwoaHRtbCxtZXRhSW5mbykge1xuICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc25hcEh0bWw6IGh0bWwsXG4gICAgICAgICAgICAgICAgZmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgfSxmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcGFnZW5vdGUuaW5pdChtZXRhSW5mbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZXRFcnJvcihtc2cpIHtcbiAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJNc2c6IG1zZyB8fCAn5Yqg6L295aSx6LSlJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7c25hcEh0bWwsZmV0Y2hpbmcsbWV0YUluZm8sZXJyTXNnfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHt0aXRsZT0nJ30gPSBtZXRhSW5mb1xuICAgICAgICBjb25zdCBsYXN0TW9kaWZ5ID0gbmV3IERhdGUobWV0YUluZm8ubGFzdE1vZGlmaWVkKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT7nvZHpobXlv6vnhad7dGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlPjwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL3BhZ2Vub3RlLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXAnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAg5b2T5YmN5b+r54Wn572R6aG16YCa6L+HIDxhIGhyZWY9XCJodHRwczovL3BhZ2Vub3RlLmxvZ2lrZS5jblwiPnBhZ2Vub3RlPC9hPiDliIbkuqvnlJ/miJDjgILlhoXlrrnlhazlvIDlj6/op4HvvIzor7fms6jmhI/kuKrkurrkv6Hmga/kv53miqTjgII8YSBocmVmPVwiL1wiPui/lOWbnuW5v+WcujwvYT4g5p+l55yL5pu05aSa5YiG5Lqr572R6aG1XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbmFwSHRtbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5wYWdlbm90ZSDkuI7nvZHpobUge21ldGFJbmZvLnVybH0g55qE5L2c6ICF5peg5YWz77yM5LiN5a+55YW25YaF5a656LSf6LSj44CC5b+r54Wn572R6aG16LCo55So5LqO6ZiF6K+777yM5LiN5Luj6KGo5Y6f572R6aG155qE55qE5Y2z5pe26aG16Z2i44CCXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5a6J6KOFcGFnZW5vdGXmj5Lku7blj6/lnKjljp/nvZHpobXkuK3mn6XnnIvliIbkuqvmoIforrDjgILliJvlu7rml7bpl7QgPHRpbWU+e2xhc3RNb2RpZnl9PC90aW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGFnZW5vdGUtc2hhcmUtY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc25hcEh0bWwgJiYgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogc25hcEh0bWx9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGluZyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlsJ3or5XliqDovb3lv6vnhafnvZHpobUuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZz48L0xvYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2cgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJNc2d9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/snapshot.js\n");

/***/ })

})