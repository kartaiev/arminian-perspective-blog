webpackHotUpdate_N_E("pages/index",{

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: useGetPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetPosts", function() { return useGetPosts; });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _lib_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/vars */ "./lib/vars.js");
var _s = $RefreshSig$();




var fetcher = function fetcher(url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};

var getKey = function getKey(index, previousPageData) {
  var offset = (index + 1) * _lib_vars__WEBPACK_IMPORTED_MODULE_1__["PAGE_SIZE"];
  console.log(offset);
  if (previousPageData && !previousPageData.length) return null;
  return "/api/posts?offset=".concat(offset);
};

var useGetPosts = function useGetPosts(initialData) {
  _s();

  return Object(swr__WEBPACK_IMPORTED_MODULE_0__["useSWRInfinite"])(getKey, fetcher, {
    initialData: initialData
  });
};

_s(useGetPosts, "o0bZTemdJWmRE1nigxQOYacCVG4=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_0__["useSWRInfinite"]];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldEtleSIsImluZGV4IiwicHJldmlvdXNQYWdlRGF0YSIsIm9mZnNldCIsIlBBR0VfU0laRSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJ1c2VHZXRQb3N0cyIsImluaXRpYWxEYXRhIiwidXNlU1dSSW5maW5pdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxTQUFTQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEdBQWhCLENBQVQ7QUFBQSxDQUFoQjs7QUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVFDLGdCQUFSLEVBQTZCO0FBQzFDLE1BQU1DLE1BQU0sR0FBRyxDQUFDRixLQUFLLEdBQUcsQ0FBVCxJQUFjRyxtREFBN0I7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFDQSxNQUFJRCxnQkFBZ0IsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ0ssTUFBMUMsRUFBa0QsT0FBTyxJQUFQO0FBQ2xELHFDQUE0QkosTUFBNUI7QUFDRCxDQUxEOztBQU9PLElBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFdBQUQ7QUFBQTs7QUFBQSxTQUN6QkMsMERBQWMsQ0FBQ1YsTUFBRCxFQUFTTixPQUFULEVBQWtCO0FBQUVlLGVBQVcsRUFBWEE7QUFBRixHQUFsQixDQURXO0FBQUEsQ0FBcEI7O0dBQU1ELFc7VUFDWEUsa0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGVmM2RmMmM3NGUyNjdmNjViNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNXUkluZmluaXRlIH0gZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgUEFHRV9TSVpFIH0gZnJvbSBcIi4uL2xpYi92YXJzXCI7XG5cbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbmNvbnN0IGdldEtleSA9IChpbmRleCwgcHJldmlvdXNQYWdlRGF0YSkgPT4ge1xuICBjb25zdCBvZmZzZXQgPSAoaW5kZXggKyAxKSAqIFBBR0VfU0laRTtcbiAgY29uc29sZS5sb2cob2Zmc2V0KTtcbiAgaWYgKHByZXZpb3VzUGFnZURhdGEgJiYgIXByZXZpb3VzUGFnZURhdGEubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGAvYXBpL3Bvc3RzP29mZnNldD0ke29mZnNldH1gO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldFBvc3RzID0gKGluaXRpYWxEYXRhKSA9PlxuICB1c2VTV1JJbmZpbml0ZShnZXRLZXksIGZldGNoZXIsIHsgaW5pdGlhbERhdGEgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9