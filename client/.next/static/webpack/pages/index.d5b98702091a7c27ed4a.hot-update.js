webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/helpers.js":
/*!************************!*\
  !*** ./lib/helpers.js ***!
  \************************/
/*! exports provided: urlFor, handleScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlFor", function() { return urlFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleScroll", function() { return handleScroll; });
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client */ "./lib/client.js");


var urlFor = function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_0___default()(_client__WEBPACK_IMPORTED_MODULE_1__["default"]).image(source);
};
var handleScroll = function handleScroll(func) {
  var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
  var body = document.body;
  var html = document.documentElement;
  var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  var windowBottom = windowHeight + window.pageYOffset;
  windowBottom >= docHeight - 5 && func();
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hlbHBlcnMuanMiXSwibmFtZXMiOlsidXJsRm9yIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJoYW5kbGVTY3JvbGwiLCJmdW5jIiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsIm9mZnNldEhlaWdodCIsImJvZHkiLCJodG1sIiwiZG9jSGVpZ2h0IiwiTWF0aCIsIm1heCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmRvd0JvdHRvbSIsInBhZ2VZT2Zmc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLE1BQUQsRUFBWTtBQUNoQyxTQUFPQyx3REFBZSxDQUFDQywrQ0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNELENBRk07QUFJQSxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQVU7QUFDcEMsTUFBTUMsWUFBWSxHQUNoQixpQkFBaUJDLE1BQWpCLEdBQ0lBLE1BQU0sQ0FBQ0MsV0FEWCxHQUVJQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBSC9CO0FBSUEsTUFBTUMsSUFBSSxHQUFHSCxRQUFRLENBQUNHLElBQXRCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHSixRQUFRLENBQUNDLGVBQXRCO0FBQ0EsTUFBTUksU0FBUyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FDaEJKLElBQUksQ0FBQ0ssWUFEVyxFQUVoQkwsSUFBSSxDQUFDRCxZQUZXLEVBR2hCRSxJQUFJLENBQUNLLFlBSFcsRUFJaEJMLElBQUksQ0FBQ0ksWUFKVyxFQUtoQkosSUFBSSxDQUFDRixZQUxXLENBQWxCO0FBT0EsTUFBTVEsWUFBWSxHQUFHYixZQUFZLEdBQUdDLE1BQU0sQ0FBQ2EsV0FBM0M7QUFDQUQsY0FBWSxJQUFJTCxTQUFTLEdBQUcsQ0FBNUIsSUFBaUNULElBQUksRUFBckM7QUFDRCxDQWhCTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNWI5ODcwMjA5MWE3YzI3ZWQ0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4vY2xpZW50XCI7XG5cbmV4cG9ydCBjb25zdCB1cmxGb3IgPSAoc291cmNlKSA9PiB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVNjcm9sbCA9IChmdW5jKSA9PiB7XG4gIGNvbnN0IHdpbmRvd0hlaWdodCA9XG4gICAgXCJpbm5lckhlaWdodFwiIGluIHdpbmRvd1xuICAgICAgPyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGNvbnN0IGRvY0hlaWdodCA9IE1hdGgubWF4KFxuICAgIGJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgIGJvZHkub2Zmc2V0SGVpZ2h0LFxuICAgIGh0bWwuY2xpZW50SGVpZ2h0LFxuICAgIGh0bWwuc2Nyb2xsSGVpZ2h0LFxuICAgIGh0bWwub2Zmc2V0SGVpZ2h0XG4gICk7XG4gIGNvbnN0IHdpbmRvd0JvdHRvbSA9IHdpbmRvd0hlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgd2luZG93Qm90dG9tID49IGRvY0hlaWdodCAtIDUgJiYgZnVuYygpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=