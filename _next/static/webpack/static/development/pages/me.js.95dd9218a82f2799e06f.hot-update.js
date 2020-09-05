webpackHotUpdate("static/development/pages/me.js",{

/***/ "./components/notes/Notes.js":
/*!***********************************!*\
  !*** ./components/notes/Notes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notes; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_draw_selecte_one_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/draw/selecte_one.svg */ \"./assets/draw/selecte_one.svg\");\n/* harmony import */ var _assets_icon_notes_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icon/notes.svg */ \"./assets/icon/notes.svg\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageDetail */ \"./components/notes/PageDetail.js\");\nvar _jsxFileName = \"/Users/ranronghua/Desktop/pagenoter/components/notes/Notes.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Notes(_ref) {\n  var _this = this;\n\n  var selectedPagesKey = _ref.selectedPagesKey,\n      size = _ref.size,\n      categories = _ref.categories,\n      onSavePage = _ref.onSavePage,\n      selectPage = _ref.selectPage,\n      data = _ref.data;\n  return __jsx(\"section\", {\n    className: \"notes\",\n    style: {\n      width: \"calc(100% - \".concat(size, \")\")\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: \"logo-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 41\n    }\n  }, \"NOTES \", __jsx(_assets_icon_notes_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 51\n    }\n  }))), __jsx(\"div\", {\n    className: \"content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, selectedPagesKey.size === 0 && __jsx(\"div\", {\n    className: \"empty-tip\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, \"\\u5728\\u5DE6\\u4FA7\\u70B9\\u51FB\\u9009\\u4E2Dpage\\uFF0C\\u67E5\\u770B\\u8BE6\\u60C5\\u3001\\u7F16\\u8F91\"), __jsx(_assets_draw_selecte_one_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    width: 230,\n    height: 175,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  })), Array.from(selectedPagesKey).map(function (pageKey) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      key: pageKey,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 13\n      }\n    }, data[pageKey] ? __jsx(_PageDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      categories: categories,\n      onSelectPage: selectPage,\n      selectedPage: data[pageKey],\n      onSavePage: onSavePage,\n      data: data,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 19\n      }\n    }) : __jsx(\"div\", {\n      className: \"empty-tip\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 20\n      }\n    }, \"\\u65E0\\u76F8\\u5173\\u6570\\u636E\", __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 22\n      }\n    }, pageKey)));\n  })));\n}\n_c = Notes;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"Notes\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGVzL05vdGVzLmpzP2UwMjUiXSwibmFtZXMiOlsiTm90ZXMiLCJzZWxlY3RlZFBhZ2VzS2V5Iiwic2l6ZSIsImNhdGVnb3JpZXMiLCJvblNhdmVQYWdlIiwic2VsZWN0UGFnZSIsImRhdGEiLCJ3aWR0aCIsIkFycmF5IiwiZnJvbSIsIm1hcCIsInBhZ2VLZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsS0FBVCxPQUE4RTtBQUFBOztBQUFBLE1BQTlEQyxnQkFBOEQsUUFBOURBLGdCQUE4RDtBQUFBLE1BQTdDQyxJQUE2QyxRQUE3Q0EsSUFBNkM7QUFBQSxNQUF4Q0MsVUFBd0MsUUFBeENBLFVBQXdDO0FBQUEsTUFBN0JDLFVBQTZCLFFBQTdCQSxVQUE2QjtBQUFBLE1BQWxCQyxVQUFrQixRQUFsQkEsVUFBa0I7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFDM0YsU0FDRTtBQUFTLGFBQVMsRUFBQyxPQUFuQjtBQUEyQixTQUFLLEVBQUU7QUFBQ0MsV0FBSyx3QkFBZ0JMLElBQWhCO0FBQU4sS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNrQztBQUFNLGFBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQ1UsTUFBQyw4REFBRDtBQUFVLGFBQVMsRUFBQyxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFYsQ0FEbEMsQ0FERixFQU1FO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJRCxnQkFBZ0IsQ0FBQ0MsSUFBakIsS0FBMEIsQ0FBMUIsSUFDQTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNHQURGLEVBSUUsTUFBQyxvRUFBRDtBQUFXLFNBQUssRUFBRSxHQUFsQjtBQUF1QixVQUFNLEVBQUUsR0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBSEosRUFXSU0sS0FBSyxDQUFDQyxJQUFOLENBQVdSLGdCQUFYLEVBQTZCUyxHQUE3QixDQUFpQyxVQUFDQyxPQUFEO0FBQUEsV0FDL0IsTUFBQyw4Q0FBRDtBQUFVLFNBQUcsRUFBRUEsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUlMLElBQUksQ0FBQ0ssT0FBRCxDQUFKLEdBQ0UsTUFBQyxtREFBRDtBQUFhLGdCQUFVLEVBQUVSLFVBQXpCO0FBQ2Esa0JBQVksRUFBRUUsVUFEM0I7QUFFYSxrQkFBWSxFQUFFQyxJQUFJLENBQUNLLE9BQUQsQ0FGL0I7QUFFMEMsZ0JBQVUsRUFBRVAsVUFGdEQ7QUFFa0UsVUFBSSxFQUFFRSxJQUZ4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsR0FJRztBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSyxPQURILENBRkYsQ0FOUCxDQUQrQjtBQUFBLEdBQWpDLENBWEosQ0FORixDQURGO0FBc0NEO0tBdkN1QlgsSztBQXVDdkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL25vdGVzL05vdGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWxlY3RPbmUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9kcmF3L3NlbGVjdGVfb25lLnN2Z1wiO1xuaW1wb3J0IE5vdGVJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbi9ub3Rlcy5zdmdcIjtcbmltcG9ydCBQYWdlRGV0YWlsIGZyb20gXCIuL1BhZ2VEZXRhaWxcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3Rlcyh7c2VsZWN0ZWRQYWdlc0tleSxzaXplLGNhdGVnb3JpZXMsb25TYXZlUGFnZSxzZWxlY3RQYWdlLGRhdGF9KSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdub3Rlcycgc3R5bGU9e3t3aWR0aDpgY2FsYygxMDAlIC0gJHtzaXplfSlgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbG9nby10aXRsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PVEVTIDxOb3RlSWNvbiBjbGFzc05hbWU9J2ljb24nIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZFBhZ2VzS2V5LnNpemUgPT09IDAgJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1wdHktdGlwJz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIOWcqOW3puS+p+eCueWHu+mAieS4rXBhZ2XvvIzmn6XnnIvor6bmg4XjgIHnvJbovpFcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNlbGVjdE9uZSB3aWR0aD17MjMwfSBoZWlnaHQ9ezE3NX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBBcnJheS5mcm9tKHNlbGVjdGVkUGFnZXNLZXkpLm1hcCgocGFnZUtleSk9PihcbiAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e3BhZ2VLZXl9PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0YVtwYWdlS2V5XT9cbiAgICAgICAgICAgICAgICAgIDxQYWdlRGV0YWlsICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0UGFnZT17c2VsZWN0UGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBhZ2U9e2RhdGFbcGFnZUtleV19IG9uU2F2ZVBhZ2U9e29uU2F2ZVBhZ2V9IGRhdGE9e2RhdGF9Lz46XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VtcHR5LXRpcCc+XG4gICAgICAgICAgICAgICAgICAgICDml6Dnm7jlhbPmlbDmja5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIHtwYWdlS2V5fVxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/notes/Notes.js\n");

/***/ })

})