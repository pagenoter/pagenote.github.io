webpackHotUpdate("static/development/pages/me.js",{

/***/ "./components/Group.js":
/*!*****************************!*\
  !*** ./components/Group.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Group; });\n/* harmony import */ var _assets_icon_more_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icon/more.svg */ \"./assets/icon/more.svg\");\n/* harmony import */ var _PageItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageItem */ \"./components/PageItem.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var color_hash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color-hash */ \"./node_modules/color-hash/lib/color-hash.js\");\n/* harmony import */ var color_hash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color_hash__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/ranronghua/Desktop/pagenoter/components/Group.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar colorHash = new color_hash__WEBPACK_IMPORTED_MODULE_3___default.a();\nfunction Group(_ref) {\n  var _this = this;\n\n  var group = _ref.group,\n      toggleExpandGroup = _ref.toggleExpandGroup,\n      groupPagesObject = _ref.groupPagesObject,\n      selectedPagesKey = _ref.selectedPagesKey,\n      selectPage = _ref.selectPage,\n      expand = _ref.expand;\n  var color = colorHash.hex(group);\n  var groupPages = (groupPagesObject[group] || {}).pages || [];\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, groupPagesObject[group] && __jsx(\"div\", {\n    className: \"group-container \".concat(groupPages.length ? '' : 'no-items'),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"group-title\",\n    onClick: function onClick() {\n      return toggleExpandGroup(group);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: \"group-title-name\",\n    style: {\n      color: color,\n      borderColor: color\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 15\n    }\n  }, group, __jsx(_assets_icon_more_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    width: 12,\n    height: 12,\n    className: \"group-icon \".concat(expand ? 'expand' : 'collapse'),\n    onClick: function onClick() {\n      return toggleExpandGroup(group);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  })), __jsx(\"span\", {\n    className: \"group-info\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, groupPagesObject[group] ? groupPagesObject[group].pages.length : 0)), __jsx(\"div\", {\n    className: \"group-items \".concat(expand ? 'expand' : 'collapse'),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, groupPagesObject[group] && (!expand ? groupPagesObject[group].pages.slice(0, 0) : groupPagesObject[group].pages).map(function (page, index) {\n    return page.matched !== false ? __jsx(_PageItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: page.url,\n      active: selectedPagesKey.has(page.url),\n      page: page,\n      group: group,\n      onSelect: selectPage,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 19\n      }\n    }) : null;\n  }))));\n}\n_c = Group;\n\nvar _c;\n\n$RefreshReg$(_c, \"Group\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyb3VwLmpzP2M1MmQiXSwibmFtZXMiOlsiY29sb3JIYXNoIiwiQ29sb3JIYXNoIiwiR3JvdXAiLCJncm91cCIsInRvZ2dsZUV4cGFuZEdyb3VwIiwiZ3JvdXBQYWdlc09iamVjdCIsInNlbGVjdGVkUGFnZXNLZXkiLCJzZWxlY3RQYWdlIiwiZXhwYW5kIiwiY29sb3IiLCJoZXgiLCJncm91cFBhZ2VzIiwicGFnZXMiLCJsZW5ndGgiLCJib3JkZXJDb2xvciIsInNsaWNlIiwibWFwIiwicGFnZSIsImluZGV4IiwibWF0Y2hlZCIsInVybCIsImhhcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLElBQUlDLGlEQUFKLEVBQWxCO0FBRWUsU0FBU0MsS0FBVCxPQUE4RjtBQUFBOztBQUFBLE1BQTlFQyxLQUE4RSxRQUE5RUEsS0FBOEU7QUFBQSxNQUF4RUMsaUJBQXdFLFFBQXhFQSxpQkFBd0U7QUFBQSxNQUF0REMsZ0JBQXNELFFBQXREQSxnQkFBc0Q7QUFBQSxNQUFyQ0MsZ0JBQXFDLFFBQXJDQSxnQkFBcUM7QUFBQSxNQUFwQkMsVUFBb0IsUUFBcEJBLFVBQW9CO0FBQUEsTUFBVEMsTUFBUyxRQUFUQSxNQUFTO0FBQzNHLE1BQU1DLEtBQUssR0FBR1QsU0FBUyxDQUFDVSxHQUFWLENBQWNQLEtBQWQsQ0FBZDtBQUNBLE1BQU1RLFVBQVUsR0FBRSxDQUFDTixnQkFBZ0IsQ0FBQ0YsS0FBRCxDQUFoQixJQUF5QixFQUExQixFQUE4QlMsS0FBOUIsSUFBcUMsRUFBdkQ7QUFDQSxTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJUCxnQkFBZ0IsQ0FBQ0YsS0FBRCxDQUFoQixJQUNBO0FBQUssYUFBUyw0QkFBcUJRLFVBQVUsQ0FBQ0UsTUFBWCxHQUFrQixFQUFsQixHQUFxQixVQUExQyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQ0csV0FBTyxFQUFFO0FBQUEsYUFBTVQsaUJBQWlCLENBQUNELEtBQUQsQ0FBdkI7QUFBQSxLQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFNLGFBQVMsRUFBQyxrQkFBaEI7QUFBbUMsU0FBSyxFQUFFO0FBQUNNLFdBQUssRUFBQ0EsS0FBUDtBQUFhSyxpQkFBVyxFQUFDTDtBQUF6QixLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tOLEtBREwsRUFFRSxNQUFDLDZEQUFEO0FBQ0UsU0FBSyxFQUFFLEVBRFQ7QUFDYSxVQUFNLEVBQUUsRUFEckI7QUFFRSxhQUFTLHVCQUFnQkssTUFBTSxHQUFHLFFBQUgsR0FBYyxVQUFwQyxDQUZYO0FBR0UsV0FBTyxFQUFFO0FBQUEsYUFBTUosaUJBQWlCLENBQUNELEtBQUQsQ0FBdkI7QUFBQSxLQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUZKLEVBU0U7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QkUsZ0JBQWdCLENBQUNGLEtBQUQsQ0FBaEIsR0FBMEJFLGdCQUFnQixDQUFDRixLQUFELENBQWhCLENBQXdCUyxLQUF4QixDQUE4QkMsTUFBeEQsR0FBaUUsQ0FBL0YsQ0FURixDQURGLEVBWUU7QUFDRSxhQUFTLHdCQUFpQkwsTUFBTSxHQUFHLFFBQUgsR0FBYyxVQUFyQyxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSUgsZ0JBQWdCLENBQUNGLEtBQUQsQ0FBaEIsSUFDQSxDQUFDLENBQUNLLE1BQUQsR0FBVUgsZ0JBQWdCLENBQUNGLEtBQUQsQ0FBaEIsQ0FBd0JTLEtBQXhCLENBQThCRyxLQUE5QixDQUFvQyxDQUFwQyxFQUF1QyxDQUF2QyxDQUFWLEdBQXNEVixnQkFBZ0IsQ0FBQ0YsS0FBRCxDQUFoQixDQUF3QlMsS0FBL0UsRUFBc0ZJLEdBQXRGLENBQTBGLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFdBQ3hGRCxJQUFJLENBQUNFLE9BQUwsS0FBaUIsS0FBakIsR0FDRSxNQUFDLGlEQUFEO0FBQVUsU0FBRyxFQUFFRixJQUFJLENBQUNHLEdBQXBCO0FBQ1UsWUFBTSxFQUFFZCxnQkFBZ0IsQ0FBQ2UsR0FBakIsQ0FBcUJKLElBQUksQ0FBQ0csR0FBMUIsQ0FEbEI7QUFFVSxVQUFJLEVBQUVILElBRmhCO0FBR1UsV0FBSyxFQUFFZCxLQUhqQjtBQUlVLGNBQVEsRUFBRUksVUFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEdBTUksSUFQb0Y7QUFBQSxHQUExRixDQUpKLENBWkYsQ0FISixDQURGO0FBb0NEO0tBdkN1QkwsSyIsImZpbGUiOiIuL2NvbXBvbmVudHMvR3JvdXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhwYW5kIGZyb20gXCIuLi9hc3NldHMvaWNvbi9tb3JlLnN2Z1wiO1xuaW1wb3J0IFBhZ2VJdGVtIGZyb20gXCIuL1BhZ2VJdGVtXCI7XG5pbXBvcnQgUmVhY3Qse0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb2xvckhhc2ggZnJvbSAnY29sb3ItaGFzaCc7XG5cbmNvbnN0IGNvbG9ySGFzaCA9IG5ldyBDb2xvckhhc2goKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JvdXAoe2dyb3VwLHRvZ2dsZUV4cGFuZEdyb3VwLGdyb3VwUGFnZXNPYmplY3Qsc2VsZWN0ZWRQYWdlc0tleSxzZWxlY3RQYWdlLGV4cGFuZH0pIHtcbiAgY29uc3QgY29sb3IgPSBjb2xvckhhc2guaGV4KGdyb3VwKTtcbiAgY29uc3QgZ3JvdXBQYWdlcz0gKGdyb3VwUGFnZXNPYmplY3RbZ3JvdXBdfHx7fSkucGFnZXN8fFtdO1xuICByZXR1cm4oXG4gICAgPEZyYWdtZW50PlxuICAgICAge1xuICAgICAgICBncm91cFBhZ2VzT2JqZWN0W2dyb3VwXSAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGdyb3VwLWNvbnRhaW5lciAke2dyb3VwUGFnZXMubGVuZ3RoPycnOiduby1pdGVtcyd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyb3VwLXRpdGxlJ1xuICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUV4cGFuZEdyb3VwKGdyb3VwKX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ3JvdXAtdGl0bGUtbmFtZScgc3R5bGU9e3tjb2xvcjpjb2xvcixib3JkZXJDb2xvcjpjb2xvcn19PlxuICAgICAgICAgICAgICAgICAge2dyb3VwfVxuICAgICAgICAgICAgICAgIDxFeHBhbmRcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMn0gaGVpZ2h0PXsxMn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGdyb3VwLWljb24gJHtleHBhbmQgPyAnZXhwYW5kJyA6ICdjb2xsYXBzZSd9YH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUV4cGFuZEdyb3VwKGdyb3VwKX0vPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2dyb3VwLWluZm8nPntncm91cFBhZ2VzT2JqZWN0W2dyb3VwXSA/IGdyb3VwUGFnZXNPYmplY3RbZ3JvdXBdLnBhZ2VzLmxlbmd0aCA6IDB9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGdyb3VwLWl0ZW1zICR7ZXhwYW5kID8gJ2V4cGFuZCcgOiAnY29sbGFwc2UnfWB9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBncm91cFBhZ2VzT2JqZWN0W2dyb3VwXSAmJlxuICAgICAgICAgICAgICAoIWV4cGFuZCA/IGdyb3VwUGFnZXNPYmplY3RbZ3JvdXBdLnBhZ2VzLnNsaWNlKDAsIDApIDogZ3JvdXBQYWdlc09iamVjdFtncm91cF0ucGFnZXMpLm1hcCgocGFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICBwYWdlLm1hdGNoZWQgIT09IGZhbHNlID9cbiAgICAgICAgICAgICAgICAgIDxQYWdlSXRlbSBrZXk9e3BhZ2UudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17c2VsZWN0ZWRQYWdlc0tleS5oYXMocGFnZS51cmwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXA9e2dyb3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtzZWxlY3RQYWdlfS8+XG4gICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9GcmFnbWVudD5cblxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Group.js\n");

/***/ })

})