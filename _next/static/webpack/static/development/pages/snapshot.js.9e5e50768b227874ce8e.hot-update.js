webpackHotUpdate("static/development/pages/snapshot.js",{

/***/ "./pages/snapshot.js":
/*!***************************!*\
  !*** ./pages/snapshot.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SnapshotRender; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ranronghua/Desktop/nextjs-pagenote/pages/snapshot.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n // import GitHub from \"github-api\";\n\n\n // let gh = new GitHub();\n// const issue = gh.getIssues('rowthan','rowthan.github.io');\n\nvar proxy = 'https://cors-anywhere.herokuapp.com/';\nvar pagenote;\n\nvar SnapshotRender = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SnapshotRender, _Component);\n\n  var _super = _createSuper(SnapshotRender);\n\n  function SnapshotRender(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SnapshotRender);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"fetchPage\", function (id) {\n      _this.setState({\n        fetching: true\n      });\n\n      axios__WEBPACK_IMPORTED_MODULE_10___default()({\n        method: 'get',\n        headers: {\n          Accept: 'application/json'\n        },\n        url: \"\".concat(proxy, \"https://api.github.com/repos/rowthan/rowthan.github.io/issues/\").concat(id)\n      }).then(function (response) {\n        if (response.data) {\n          _this.resolveHTML(response.data);\n        }\n      })[\"catch\"](function () {\n        _this.setState({\n          errMsg: '请求数据异常',\n          loading: false\n        });\n      }); // return\n      // issue.getIssue(id, (err,result,request)=> {\n      //     this.resolveHTML(result)\n      // });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resolveHTML\", function (result) {\n      var that = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this);\n\n      pagenote = new PageNote();\n      var metaInfo = {};\n\n      if (result && result.body) {\n        metaInfo = JSON.parse(result.body);\n        that.setState({\n          metaInfo: metaInfo\n        });\n\n        if (metaInfo.html) {\n          injectHtml(metaInfo.html, metaInfo);\n        } else if (metaInfo.htmlUrl) {\n          var htmlID = metaInfo.htmlUrl.match(/gists\\/(\\w+)$/)[1];\n          var gist = gh.getGist(htmlID);\n          gist.read(function (error, result) {\n            try {\n              var html = result.files['pagenote.html'].content || '';\n              injectHtml(html, metaInfo);\n            } catch (e) {\n              setError('解析失败');\n            }\n          })[\"catch\"](function () {\n            setError('加载失败');\n          });\n        } else if (metaInfo.commentHtmlId) {\n          issue.getIssueComment(metaInfo.commentHtmlId, function (error, result) {\n            var html = result.body;\n            injectHtml(html, metaInfo);\n          })[\"catch\"](function (e) {\n            setError(e);\n          });\n        }\n      } else {\n        setError('无数据信息');\n      }\n\n      function injectHtml(html, metaInfo) {\n        that.setState({\n          snapHtml: html,\n          fetching: false\n        }, function () {\n          pagenote.init(metaInfo);\n        });\n      }\n\n      function setError(msg) {\n        that.setState({\n          fetching: false,\n          errMsg: msg || '加载失败'\n        });\n      }\n    });\n\n    _this.state = {\n      snapHtml: '',\n      fetching: false,\n      errMsg: '',\n      metaInfo: {}\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SnapshotRender, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (pagenote) {\n        return;\n      }\n\n      var id = window.location.search.match(/pagenote=(.*)$/);\n      var pagenoteId = id ? id[1] : '';\n      this.fetchPage(pagenoteId);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          snapHtml = _this$state.snapHtml,\n          fetching = _this$state.fetching,\n          metaInfo = _this$state.metaInfo,\n          errMsg = _this$state.errMsg;\n      var _metaInfo$title = metaInfo.title,\n          title = _metaInfo$title === void 0 ? '' : _metaInfo$title;\n      var lastModify = new Date(metaInfo.lastModified).toLocaleDateString();\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 13\n        }\n      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 17\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 21\n        }\n      }, \"\\u7F51\\u9875\\u5FEB\\u7167\", title), __jsx(\"script\", {\n        defer: true,\n        src: \"/pagenote.js\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 21\n        }\n      })), __jsx(\"div\", {\n        className: \"tip\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 21\n        }\n      }, \"\\u5F53\\u524D\\u5FEB\\u7167\\u7F51\\u9875\\u901A\\u8FC7 \", __jsx(\"a\", {\n        href: \"https://pagenote.logike.cn\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 34\n        }\n      }, \"pagenote\"), \" \\u5206\\u4EAB\\u751F\\u6210\\u3002\\u5185\\u5BB9\\u516C\\u5F00\\u53EF\\u89C1\\uFF0C\\u8BF7\\u6CE8\\u610F\\u4E2A\\u4EBA\\u4FE1\\u606F\\u4FDD\\u62A4\\u3002\", __jsx(\"a\", {\n        href: \"/\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 106\n        }\n      }, \"\\u8FD4\\u56DE\\u5E7F\\u573A\"), \" \\u67E5\\u770B\\u66F4\\u591A\\u5206\\u4EAB\\u7F51\\u9875\"), snapHtml && __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 25\n        }\n      }, __jsx(\"span\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 29\n        }\n      }, \"pagenote \\u4E0E\\u7F51\\u9875 \", metaInfo.url, \" \\u7684\\u4F5C\\u8005\\u65E0\\u5173\\uFF0C\\u4E0D\\u5BF9\\u5176\\u5185\\u5BB9\\u8D1F\\u8D23\\u3002\\u5FEB\\u7167\\u7F51\\u9875\\u8C28\\u7528\\u4E8E\\u9605\\u8BFB\\uFF0C\\u4E0D\\u4EE3\\u8868\\u539F\\u7F51\\u9875\\u7684\\u7684\\u5373\\u65F6\\u9875\\u9762\\u3002 \\u5B89\\u88C5pagenote\\u63D2\\u4EF6\\u53EF\\u5728\\u539F\\u7F51\\u9875\\u4E2D\\u67E5\\u770B\\u5206\\u4EAB\\u6807\\u8BB0\\u3002\\u521B\\u5EFA\\u65F6\\u95F4 \", __jsx(\"time\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 59\n        }\n      }, lastModify)))), __jsx(\"div\", {\n        id: \"pagenote-share-content-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 17\n        }\n      }, snapHtml && __jsx(\"div\", {\n        dangerouslySetInnerHTML: {\n          __html: snapHtml\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 37\n        }\n      }), fetching && __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 25\n        }\n      }, \"\\u5C1D\\u8BD5\\u52A0\\u8F7D\\u5FEB\\u7167\\u7F51\\u9875...\", __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 29\n        }\n      })), errMsg && __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 149,\n          columnNumber: 25\n        }\n      }, errMsg)));\n    }\n  }]);\n\n  return SnapshotRender;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zbmFwc2hvdC5qcz9lODU2Il0sIm5hbWVzIjpbInByb3h5IiwicGFnZW5vdGUiLCJTbmFwc2hvdFJlbmRlciIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsImZldGNoaW5nIiwiYXhpb3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJlc29sdmVIVE1MIiwiZXJyTXNnIiwibG9hZGluZyIsInJlc3VsdCIsInRoYXQiLCJQYWdlTm90ZSIsIm1ldGFJbmZvIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsImh0bWwiLCJpbmplY3RIdG1sIiwiaHRtbFVybCIsImh0bWxJRCIsIm1hdGNoIiwiZ2lzdCIsImdoIiwiZ2V0R2lzdCIsInJlYWQiLCJlcnJvciIsImZpbGVzIiwiY29udGVudCIsImUiLCJzZXRFcnJvciIsImNvbW1lbnRIdG1sSWQiLCJpc3N1ZSIsImdldElzc3VlQ29tbWVudCIsInNuYXBIdG1sIiwiaW5pdCIsIm1zZyIsInN0YXRlIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJwYWdlbm90ZUlkIiwiZmV0Y2hQYWdlIiwidGl0bGUiLCJsYXN0TW9kaWZ5IiwiRGF0ZSIsImxhc3RNb2RpZmllZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIl9faHRtbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtDQUVBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLHNDQUFkO0FBQ0EsSUFBSUMsUUFBSjs7SUFDcUJDLGM7Ozs7O0FBRWpCLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsb05BbUJULFVBQUNDLEVBQUQsRUFBTTtBQUNaLFlBQUtDLFFBQUwsQ0FBYztBQUNWQyxnQkFBUSxFQUFFO0FBREEsT0FBZDs7QUFLQUMsbURB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Z2VzL3NuYXBzaG90LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbi8vIGltcG9ydCBHaXRIdWIgZnJvbSBcImdpdGh1Yi1hcGlcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG4vLyBsZXQgZ2ggPSBuZXcgR2l0SHViKCk7XG4vLyBjb25zdCBpc3N1ZSA9IGdoLmdldElzc3Vlcygncm93dGhhbicsJ3Jvd3RoYW4uZ2l0aHViLmlvJyk7XG5jb25zdCBwcm94eSA9ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8nO1xubGV0IHBhZ2Vub3RlO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25hcHNob3RSZW5kZXIgZXh0ZW5kcyBDb21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgc25hcEh0bWwgOicnLFxuICAgICAgICAgICAgZmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZXJyTXNnOiAnJyxcbiAgICAgICAgICAgIG1ldGFJbmZvOnt9LFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmKHBhZ2Vub3RlKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gubWF0Y2goL3BhZ2Vub3RlPSguKikkLyk7XG4gICAgICAgIGNvbnN0IHBhZ2Vub3RlSWQgPSBpZCA/IGlkWzFdIDogJyc7XG4gICAgICAgIHRoaXMuZmV0Y2hQYWdlKHBhZ2Vub3RlSWQpO1xuICAgIH1cblxuICAgIGZldGNoUGFnZT0oaWQpPT57XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmV0Y2hpbmc6IHRydWUsXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybDogYCR7cHJveHl9aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9yb3d0aGFuL3Jvd3RoYW4uZ2l0aHViLmlvL2lzc3Vlcy8ke2lkfWAsXG4gICAgICAgIH0pLnRoZW4oIChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVIVE1MKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyTXNnOifor7fmsYLmlbDmja7lvILluLgnLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmV0dXJuXG4gICAgICAgIC8vIGlzc3VlLmdldElzc3VlKGlkLCAoZXJyLHJlc3VsdCxyZXF1ZXN0KT0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMucmVzb2x2ZUhUTUwocmVzdWx0KVxuICAgICAgICAvLyB9KTtcbiAgICB9O1xuXG4gICAgcmVzb2x2ZUhUTUw9KHJlc3VsdCk9PntcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIHBhZ2Vub3RlID0gbmV3IFBhZ2VOb3RlKCk7XG4gICAgICAgIGxldCBtZXRhSW5mbyA9IHt9O1xuICAgICAgICBpZihyZXN1bHQgJiYgcmVzdWx0LmJvZHkpe1xuICAgICAgICAgICAgbWV0YUluZm8gPSBKU09OLnBhcnNlKHJlc3VsdC5ib2R5KTtcbiAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1ldGFJbmZvOiBtZXRhSW5mbyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYobWV0YUluZm8uaHRtbCl7XG4gICAgICAgICAgICAgICAgaW5qZWN0SHRtbChtZXRhSW5mby5odG1sLG1ldGFJbmZvKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihtZXRhSW5mby5odG1sVXJsKXtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sSUQgPSBtZXRhSW5mby5odG1sVXJsLm1hdGNoKC9naXN0c1xcLyhcXHcrKSQvKVsxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBnaXN0ID0gZ2guZ2V0R2lzdChodG1sSUQpO1xuICAgICAgICAgICAgICAgIGdpc3QucmVhZChmdW5jdGlvbiAoZXJyb3IscmVzdWx0LCkge1xuICAgICAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBodG1sID0gcmVzdWx0LmZpbGVzWydwYWdlbm90ZS5odG1sJ10uY29udGVudCB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGluamVjdEh0bWwoaHRtbCxtZXRhSW5mbylcbiAgICAgICAgICAgICAgICAgICAgfWNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcign6Kej5p6Q5aSx6LSlJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoJ+WKoOi9veWksei0pScpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNlIGlmKG1ldGFJbmZvLmNvbW1lbnRIdG1sSWQpe1xuICAgICAgICAgICAgICAgIGlzc3VlLmdldElzc3VlQ29tbWVudChtZXRhSW5mby5jb21tZW50SHRtbElkLGZ1bmN0aW9uIChlcnJvcixyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHRtbCA9IHJlc3VsdC5ib2R5O1xuICAgICAgICAgICAgICAgICAgICBpbmplY3RIdG1sKGh0bWwsbWV0YUluZm8pO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXRFcnJvcign5peg5pWw5o2u5L+h5oGvJylcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpbmplY3RIdG1sKGh0bWwsbWV0YUluZm8pIHtcbiAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNuYXBIdG1sOiBodG1sLFxuICAgICAgICAgICAgICAgIGZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0sZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHBhZ2Vub3RlLmluaXQobWV0YUluZm8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0RXJyb3IobXNnKSB7XG4gICAgICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBtc2cgfHwgJ+WKoOi9veWksei0pSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3NuYXBIdG1sLGZldGNoaW5nLG1ldGFJbmZvLGVyck1zZ30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7dGl0bGU9Jyd9ID0gbWV0YUluZm9cbiAgICAgICAgY29uc3QgbGFzdE1vZGlmeSA9IG5ldyBEYXRlKG1ldGFJbmZvLmxhc3RNb2RpZmllZCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+572R6aG15b+r54Wne3RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgZGVmZXI9e3RydWV9IHNyYz1cIi9wYWdlbm90ZS5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGlwJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOW9k+WJjeW/q+eFp+e9kemhtemAmui/hyA8YSBocmVmPVwiaHR0cHM6Ly9wYWdlbm90ZS5sb2dpa2UuY25cIj5wYWdlbm90ZTwvYT4g5YiG5Lqr55Sf5oiQ44CC5YaF5a655YWs5byA5Y+v6KeB77yM6K+35rOo5oSP5Liq5Lq65L+h5oGv5L+d5oqk44CCPGEgaHJlZj1cIi9cIj7ov5Tlm57lub/lnLo8L2E+IOafpeeci+abtOWkmuWIhuS6q+e9kemhtVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc25hcEh0bWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+cGFnZW5vdGUg5LiO572R6aG1IHttZXRhSW5mby51cmx9IOeahOS9nOiAheaXoOWFs++8jOS4jeWvueWFtuWGheWuuei0n+i0o+OAguW/q+eFp+e9kemhteiwqOeUqOS6jumYheivu++8jOS4jeS7o+ihqOWOn+e9kemhteeahOeahOWNs+aXtumhtemdouOAglxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWuieijhXBhZ2Vub3Rl5o+S5Lu25Y+v5Zyo5Y6f572R6aG15Lit5p+l55yL5YiG5Lqr5qCH6K6w44CC5Yib5bu65pe26Ze0IDx0aW1lPntsYXN0TW9kaWZ5fTwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2Vub3RlLXNoYXJlLWNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNuYXBIdG1sICYmIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHNuYXBIdG1sfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5bCd6K+V5Yqg6L295b+r54Wn572R6aG1Li4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmc+PC9Mb2FkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyTXNnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/snapshot.js\n");

/***/ })

})