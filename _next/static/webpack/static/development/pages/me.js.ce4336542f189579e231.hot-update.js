webpackHotUpdate("static/development/pages/me.js",{

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: connectServer, groupPages, savePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectServer\", function() { return connectServer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"groupPages\", function() { return groupPages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"savePage\", function() { return savePage; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _index_new__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_new */ \"./utils/index_new.js\");\n\n\n\nvar connectServerOld = function connectServerOld(callback) {\n  var bridge = document.getElementById('bridge');\n  bridge.addEventListener('sync_data', function (e) {\n    var eventData = e.target.innerText;\n    var data = {};\n\n    try {\n      data = JSON.parse(eventData);\n    } catch (e) {}\n\n    var pages = [];\n    var pageObject = {};\n    Object.keys(data).forEach(function (key) {\n      var currentPage = data[key];\n\n      try {\n        var tempData = typeof data[key] === 'object' && currentPage.plainData ? currentPage.plainData : decryptedData(typeof data[key] === 'object' ? data[key].data : data[key]);\n        tempData.keys = data[key].keys;\n        pages.push(tempData);\n        pageObject[key] = tempData;\n      } catch (e) {\n        console.error(e);\n      }\n    });\n    callback({\n      connected: true,\n      pages: pages,\n      data: pageObject\n    });\n  });\n  fetchData();\n  document.addEventListener('visibilitychange', function () {\n    fetchData();\n  });\n\n  function decryptedData(data) {\n    var result = {};\n\n    try {\n      result = JSON.parse(decodeURI(atob(data)));\n    } catch (e) {}\n\n    return result;\n  }\n};\n\nvar groupPagesOld = function groupPagesOld(groupType, pages) {\n  var categories = new Map();\n\n  var groupBy = function groupBy(fn) {\n    var groupPagesObject = {};\n    var selectedGroupsKey = new Set();\n    pages.forEach(function (page) {\n      categories.set(page.category || 'default', {\n        label: page.category || 'default',\n        desc: ''\n      });\n      var groupKey = fn(page);\n      var tempPages = groupPagesObject[groupKey] ? groupPagesObject[groupKey].pages : [];\n      groupPagesObject[groupKey] = {\n        name: groupKey,\n        pages: tempPages,\n        matched: tempPages.length\n      };\n      groupPagesObject[groupKey].pages.push(page);\n      groupPagesObject[groupKey].matched = groupPagesObject[groupKey].pages.length;\n      selectedGroupsKey.add(groupKey);\n    });\n\n    var arr = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(categories.values());\n\n    return {\n      groupPagesObject: groupPagesObject,\n      categories: arr,\n      groupKeys: Array.from(selectedGroupsKey)\n    };\n  };\n\n  var result = {};\n\n  switch (groupType) {\n    case 0:\n      result = groupBy(function (page) {\n        return page.keys[0] || 'default';\n      });\n      break;\n\n    case 1:\n      result = groupBy(function (page) {\n        var groupKey = 'unknow';\n\n        try {\n          groupKey = new Date(page.lastModified).toLocaleDateString();\n        } catch (e) {}\n\n        return groupKey;\n      });\n      break;\n\n    case 2:\n      result = groupBy(function (page) {\n        return page.category || 'default';\n      });\n      break;\n\n    default:\n      result = groupBy(function (page) {\n        return page.keys[0] || 'default';\n      });\n  }\n\n  return result;\n};\n\nvar savePageOld = function savePageOld(page) {\n  var customEvent = document.createEvent('Event');\n  customEvent.initEvent('save_page', true, true);\n  var bridge = document.getElementById('bridge');\n  var saveData = {\n    key: page.url || page.key,\n    keys: page.keys,\n    plainData: page.plainData\n  };\n  bridge.innerText = JSON.stringify(saveData);\n  bridge.dispatchEvent(customEvent);\n  setTimeout(function () {\n    fetchData();\n  }, 1000);\n};\n\nfunction fetchData() {\n  var bridge = document.getElementById('bridge');\n  var customEvent = document.createEvent('Event');\n  customEvent.initEvent('get_data', true, true);\n  bridge.dispatchEvent(customEvent);\n}\n\nfunction isNew() {\n  var currentVersion = document.documentElement.dataset['version'] ? document.documentElement.dataset['version'] : '0.0.0';\n  var result = compareVersion('0.10.4', currentVersion);\n  return result > 0;\n}\n\nfunction compareVersion() {\n  var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';\n  var second = arguments.length > 1 ? arguments[1] : undefined;\n\n  if (first === second) {\n    return 0;\n  }\n\n  var firstVersion = first.split('.');\n  var secondVersion = second.split('.');\n  var large = -1;\n\n  for (var i = 0; i < secondVersion.length; i++) {\n    if (secondVersion[i] > firstVersion[i]) {\n      large = 1;\n      break;\n    }\n  }\n\n  return large;\n} // 兼容历史接口和新接口\n\n\nvar connectServer = function connectServer() {\n  _index_new__WEBPACK_IMPORTED_MODULE_1__[\"connectServerNew\"].apply(void 0, arguments);\n  connectServerOld.apply(void 0, arguments);\n};\nvar groupPages = function groupPages() {\n  return isNew() ? _index_new__WEBPACK_IMPORTED_MODULE_1__[\"groupPagesNew\"].apply(void 0, arguments) : groupPagesOld.apply(void 0, arguments);\n};\nvar savePage = function savePage() {\n  return isNew() ? _index_new__WEBPACK_IMPORTED_MODULE_1__[\"savePageNew\"].apply(void 0, arguments) : savePageOld.apply(void 0, arguments);\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9pbmRleC5qcz80MjJkIl0sIm5hbWVzIjpbImNvbm5lY3RTZXJ2ZXJPbGQiLCJjYWxsYmFjayIsImJyaWRnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImV2ZW50RGF0YSIsInRhcmdldCIsImlubmVyVGV4dCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJwYWdlcyIsInBhZ2VPYmplY3QiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImN1cnJlbnRQYWdlIiwidGVtcERhdGEiLCJwbGFpbkRhdGEiLCJkZWNyeXB0ZWREYXRhIiwicHVzaCIsImNvbnNvbGUiLCJlcnJvciIsImNvbm5lY3RlZCIsImZldGNoRGF0YSIsInJlc3VsdCIsImRlY29kZVVSSSIsImF0b2IiLCJncm91cFBhZ2VzT2xkIiwiZ3JvdXBUeXBlIiwiY2F0ZWdvcmllcyIsIk1hcCIsImdyb3VwQnkiLCJmbiIsImdyb3VwUGFnZXNPYmplY3QiLCJzZWxlY3RlZEdyb3Vwc0tleSIsIlNldCIsInBhZ2UiLCJzZXQiLCJjYXRlZ29yeSIsImxhYmVsIiwiZGVzYyIsImdyb3VwS2V5IiwidGVtcFBhZ2VzIiwibmFtZSIsIm1hdGNoZWQiLCJsZW5ndGgiLCJhZGQiLCJhcnIiLCJ2YWx1ZXMiLCJncm91cEtleXMiLCJBcnJheSIsImZyb20iLCJEYXRlIiwibGFzdE1vZGlmaWVkIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic2F2ZVBhZ2VPbGQiLCJjdXN0b21FdmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50Iiwic2F2ZURhdGEiLCJ1cmwiLCJzdHJpbmdpZnkiLCJkaXNwYXRjaEV2ZW50Iiwic2V0VGltZW91dCIsImlzTmV3IiwiY3VycmVudFZlcnNpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJkYXRhc2V0IiwiY29tcGFyZVZlcnNpb24iLCJmaXJzdCIsInNlY29uZCIsImZpcnN0VmVyc2lvbiIsInNwbGl0Iiwic2Vjb25kVmVyc2lvbiIsImxhcmdlIiwiaSIsImNvbm5lY3RTZXJ2ZXIiLCJjb25uZWN0U2VydmVyTmV3IiwiZ3JvdXBQYWdlcyIsImdyb3VwUGFnZXNOZXciLCJzYXZlUGFnZSIsInNhdmVQYWdlTmV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFTQyxRQUFULEVBQWtCO0FBQ3pDLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQUYsUUFBTSxDQUFDRyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFDQyxDQUFELEVBQU07QUFDekMsUUFBTUMsU0FBUyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsU0FBM0I7QUFDQSxRQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxRQUFHO0FBQ0RBLFVBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLFNBQVgsQ0FBUDtBQUNELEtBRkQsQ0FFQyxPQUFPRCxDQUFQLEVBQVUsQ0FFVjs7QUFDRCxRQUFNTyxLQUFLLEdBQUcsRUFBZDtBQUNBLFFBQU1DLFVBQVUsR0FBRyxFQUFuQjtBQUNBQyxVQUFNLENBQUNDLElBQVAsQ0FBWU4sSUFBWixFQUFrQk8sT0FBbEIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFPO0FBQy9CLFVBQU1DLFdBQVcsR0FBR1QsSUFBSSxDQUFDUSxHQUFELENBQXhCOztBQUNBLFVBQUc7QUFDRCxZQUFNRSxRQUFRLEdBQUksT0FBT1YsSUFBSSxDQUFDUSxHQUFELENBQVgsS0FBbUIsUUFBbkIsSUFBK0JDLFdBQVcsQ0FBQ0UsU0FBNUMsR0FBeURGLFdBQVcsQ0FBQ0UsU0FBckUsR0FDZkMsYUFBYSxDQUFDLE9BQU9aLElBQUksQ0FBQ1EsR0FBRCxDQUFYLEtBQW1CLFFBQW5CLEdBQThCUixJQUFJLENBQUNRLEdBQUQsQ0FBSixDQUFVUixJQUF4QyxHQUErQ0EsSUFBSSxDQUFDUSxHQUFELENBQXBELENB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WSxHQUFHRixLQUFLLENBQUNHLEtBQU4sQ0FBWSxHQUFaLENBQXJCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHSCxNQUFNLENBQUNFLEtBQVAsQ0FBYSxHQUFiLENBQXRCO0FBQ0EsTUFBSUUsS0FBSyxHQUFHLENBQUMsQ0FBYjs7QUFDQSxPQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0YsYUFBYSxDQUFDNUIsTUFBN0IsRUFBcUM4QixDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFFBQUdGLGFBQWEsQ0FBQ0UsQ0FBRCxDQUFiLEdBQWlCSixZQUFZLENBQUNJLENBQUQsQ0FBaEMsRUFBb0M7QUFDbENELFdBQUssR0FBRyxDQUFSO0FBQ0E7QUFDRDtBQUNGOztBQUNELFNBQU9BLEtBQVA7QUFDRCxDLENBRUQ7OztBQUNPLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBa0I7QUFDN0NDLDZEQUFnQixNQUFoQjtBQUNBakYsa0JBQWdCLE1BQWhCO0FBQ0QsQ0FITTtBQUtBLElBQU1rRixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFrQjtBQUMxQyxTQUFPZCxLQUFLLEtBQUdlLHdEQUFhLE1BQWIsbUJBQUgsR0FBeUJwRCxhQUFhLE1BQWIsbUJBQXJDO0FBQ0QsQ0FGTTtBQUlBLElBQU1xRCxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFrQjtBQUN4QyxTQUFPaEIsS0FBSyxLQUFHaUIsc0RBQVcsTUFBWCxtQkFBSCxHQUF1QjFCLFdBQVcsTUFBWCxtQkFBbkM7QUFDRCxDQUZNIiwiZmlsZSI6Ii4vdXRpbHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nvbm5lY3RTZXJ2ZXJOZXcsZ3JvdXBQYWdlc05ldyxzYXZlUGFnZU5ld30gZnJvbSAnLi9pbmRleF9uZXcnO1xuXG5jb25zdCBjb25uZWN0U2VydmVyT2xkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICBjb25zdCBicmlkZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJpZGdlJyk7XG4gIGJyaWRnZS5hZGRFdmVudExpc3RlbmVyKCdzeW5jX2RhdGEnLCAoZSk9PiB7XG4gICAgY29uc3QgZXZlbnREYXRhID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuICAgIGxldCBkYXRhID0ge307XG4gICAgdHJ5e1xuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnREYXRhKVxuICAgIH1jYXRjaCAoZSkge1xuXG4gICAgfVxuICAgIGNvbnN0IHBhZ2VzID0gW107XG4gICAgY29uc3QgcGFnZU9iamVjdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSk9PntcbiAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZGF0YVtrZXldO1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCB0ZW1wRGF0YSA9ICh0eXBlb2YgZGF0YVtrZXldPT09J29iamVjdCcgJiYgY3VycmVudFBhZ2UucGxhaW5EYXRhKSA/IGN1cnJlbnRQYWdlLnBsYWluRGF0YSA6XG4gICAgICAgICAgZGVjcnlwdGVkRGF0YSh0eXBlb2YgZGF0YVtrZXldPT09J29iamVjdCcgPyBkYXRhW2tleV0uZGF0YSA6IGRhdGFba2V5XSk7XG4gICAgICAgIHRlbXBEYXRhLmtleXMgPSBkYXRhW2tleV0ua2V5cztcbiAgICAgICAgcGFnZXMucHVzaCh0ZW1wRGF0YSk7XG4gICAgICAgIHBhZ2VPYmplY3Rba2V5XSA9IHRlbXBEYXRhO1xuICAgICAgfWNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjYWxsYmFjayh7XG4gICAgICBjb25uZWN0ZWQ6IHRydWUsXG4gICAgICBwYWdlczogcGFnZXMsXG4gICAgICBkYXRhOiBwYWdlT2JqZWN0LFxuICAgIH0pO1xuICB9KTtcblxuICBmZXRjaERhdGEoKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgKCk9PiB7XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0pO1xuXG5cblxuICBmdW5jdGlvbiBkZWNyeXB0ZWREYXRhKGRhdGEpIHtcbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgdHJ5e1xuICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShkZWNvZGVVUkkoYXRvYihkYXRhKSkpO1xuICAgIH1jYXRjaCAoZSkge1xuXG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5cbmNvbnN0IGdyb3VwUGFnZXNPbGQgPSBmdW5jdGlvbiAoZ3JvdXBUeXBlLHBhZ2VzKSB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IGdyb3VwQnkgPSAoZm4pPT57XG4gICAgY29uc3QgZ3JvdXBQYWdlc09iamVjdCA9IHt9O1xuICAgIGxldCBzZWxlY3RlZEdyb3Vwc0tleSA9IG5ldyBTZXQoKTtcbiAgICBwYWdlcy5mb3JFYWNoKChwYWdlKT0+e1xuICAgICAgY2F0ZWdvcmllcy5zZXQocGFnZS5jYXRlZ29yeXx8J2RlZmF1bHQnLHtcbiAgICAgICAgbGFiZWw6cGFnZS5jYXRlZ29yeXx8J2RlZmF1bHQnLFxuICAgICAgICBkZXNjOicnLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBncm91cEtleSA9IGZuKHBhZ2UpO1xuICAgICAgY29uc3QgdGVtcFBhZ2VzID0gZ3JvdXBQYWdlc09iamVjdFtncm91cEtleV0/Z3JvdXBQYWdlc09iamVjdFtncm91cEtleV0ucGFnZXMgOiBbXTtcblxuICAgICAgZ3JvdXBQYWdlc09iamVjdFtncm91cEtleV0gPSB7XG4gICAgICAgIG5hbWU6IGdyb3VwS2V5LFxuICAgICAgICBwYWdlczogdGVtcFBhZ2VzLFxuICAgICAgICBtYXRjaGVkOiB0ZW1wUGFnZXMubGVuZ3RoLFxuICAgICAgfTtcbiAgICAgIGdyb3VwUGFnZXNPYmplY3RbZ3JvdXBLZXldLnBhZ2VzLnB1c2gocGFnZSk7XG4gICAgICBncm91cFBhZ2VzT2JqZWN0W2dyb3VwS2V5XS5tYXRjaGVkID0gZ3JvdXBQYWdlc09iamVjdFtncm91cEtleV0ucGFnZXMubGVuZ3RoO1xuICAgICAgc2VsZWN0ZWRHcm91cHNLZXkuYWRkKGdyb3VwS2V5KTtcbiAgICB9KTtcbiAgICBjb25zdCBhcnIgPSBbLi4uY2F0ZWdvcmllcy52YWx1ZXMoKV07XG4gICAgcmV0dXJuIHtcbiAgICAgIGdyb3VwUGFnZXNPYmplY3Q6Z3JvdXBQYWdlc09iamVjdCxcbiAgICAgIGNhdGVnb3JpZXM6IGFycixcbiAgICAgIGdyb3VwS2V5czogQXJyYXkuZnJvbShzZWxlY3RlZEdyb3Vwc0tleSksXG4gICAgfVxuICB9O1xuXG4gIGxldCByZXN1bHQgPSB7fTtcblxuICBzd2l0Y2ggKGdyb3VwVHlwZSkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJlc3VsdCA9IGdyb3VwQnkoZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHBhZ2Uua2V5c1swXXx8J2RlZmF1bHQnO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgICByZXN1bHQgPSBncm91cEJ5KGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgIGxldCBncm91cEtleSA9ICd1bmtub3cnO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgZ3JvdXBLZXkgPSBuZXcgRGF0ZShwYWdlLmxhc3RNb2RpZmllZCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICAgIH1jYXRjaCAoZSkge1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyb3VwS2V5O1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICByZXN1bHQgPSBncm91cEJ5KGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgIHJldHVybiBwYWdlLmNhdGVnb3J5IHx8ICdkZWZhdWx0JztcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlc3VsdCA9IGdyb3VwQnkoZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHBhZ2Uua2V5c1swXXx8J2RlZmF1bHQnO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IHNhdmVQYWdlT2xkID0gZnVuY3Rpb24gKHBhZ2UpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgY3VzdG9tRXZlbnQuaW5pdEV2ZW50KCdzYXZlX3BhZ2UnLCB0cnVlLCB0cnVlKTtcbiAgY29uc3QgYnJpZGdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyaWRnZScpO1xuXG4gIGNvbnN0IHNhdmVEYXRhID0ge1xuICAgIGtleTogcGFnZS51cmx8fHBhZ2Uua2V5LFxuICAgIGtleXM6IHBhZ2Uua2V5cyxcbiAgICBwbGFpbkRhdGE6IHBhZ2UucGxhaW5EYXRhLFxuICB9O1xuXG4gIGJyaWRnZS5pbm5lclRleHQgPSBKU09OLnN0cmluZ2lmeShzYXZlRGF0YSk7XG4gIGJyaWRnZS5kaXNwYXRjaEV2ZW50KGN1c3RvbUV2ZW50KTtcbiAgc2V0VGltZW91dCgoKT0+e1xuICAgIGZldGNoRGF0YSgpO1xuICB9LDEwMDApXG59O1xuXG5cbmZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgY29uc3QgYnJpZGdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyaWRnZScpO1xuICBjb25zdCBjdXN0b21FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICBjdXN0b21FdmVudC5pbml0RXZlbnQoJ2dldF9kYXRhJywgdHJ1ZSwgdHJ1ZSk7XG4gIGJyaWRnZS5kaXNwYXRjaEV2ZW50KGN1c3RvbUV2ZW50KTtcbn1cblxuZnVuY3Rpb24gaXNOZXcoKSB7XG4gIGNvbnN0IGN1cnJlbnRWZXJzaW9uID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbJ3ZlcnNpb24nXT9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFsndmVyc2lvbiddOicwLjAuMCc7XG4gIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVWZXJzaW9uKCcwLjEwLjQnLGN1cnJlbnRWZXJzaW9uKTtcbiAgcmV0dXJuIHJlc3VsdD4wO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlVmVyc2lvbihmaXJzdD0nMC4wLjAnLHNlY29uZCkge1xuICBpZihmaXJzdD09PXNlY29uZCl7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgY29uc3QgZmlyc3RWZXJzaW9uID0gZmlyc3Quc3BsaXQoJy4nKTtcbiAgY29uc3Qgc2Vjb25kVmVyc2lvbiA9IHNlY29uZC5zcGxpdCgnLicpO1xuICBsZXQgbGFyZ2UgPSAtMTtcbiAgZm9yKGxldCBpPTA7IGk8c2Vjb25kVmVyc2lvbi5sZW5ndGg7IGkrKykge1xuICAgIGlmKHNlY29uZFZlcnNpb25baV0+Zmlyc3RWZXJzaW9uW2ldKXtcbiAgICAgIGxhcmdlID0gMTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbGFyZ2U7XG59XG5cbi8vIOWFvOWuueWOhuWPsuaOpeWPo+WSjOaWsOaOpeWPo1xuZXhwb3J0IGNvbnN0IGNvbm5lY3RTZXJ2ZXIgPSBmdW5jdGlvbiAoLi4uYXJnKSB7XG4gIGNvbm5lY3RTZXJ2ZXJOZXcoLi4uYXJnKTtcbiAgY29ubmVjdFNlcnZlck9sZCguLi5hcmcpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdyb3VwUGFnZXMgPSBmdW5jdGlvbiAoLi4uYXJnKSB7XG4gIHJldHVybiBpc05ldygpP2dyb3VwUGFnZXNOZXcoLi4uYXJnKTpncm91cFBhZ2VzT2xkKC4uLmFyZyk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2F2ZVBhZ2UgPSBmdW5jdGlvbiAoLi4uYXJnKSB7XG4gIHJldHVybiBpc05ldygpP3NhdmVQYWdlTmV3KC4uLmFyZyk6c2F2ZVBhZ2VPbGQoLi4uYXJnKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/index.js\n");

/***/ })

})