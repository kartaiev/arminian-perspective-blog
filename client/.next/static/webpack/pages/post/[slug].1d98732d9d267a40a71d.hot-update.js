webpackHotUpdate_N_E("pages/post/[slug]",{

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

  if (windowBottom >= docHeight - 5) {
    console.log("bottom");
    func();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hlbHBlcnMuanMiXSwibmFtZXMiOlsidXJsRm9yIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJoYW5kbGVTY3JvbGwiLCJmdW5jIiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsIm9mZnNldEhlaWdodCIsImJvZHkiLCJodG1sIiwiZG9jSGVpZ2h0IiwiTWF0aCIsIm1heCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmRvd0JvdHRvbSIsInBhZ2VZT2Zmc2V0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxNQUFELEVBQVk7QUFDaEMsU0FBT0Msd0RBQWUsQ0FBQ0MsK0NBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDRCxDQUZNO0FBSUEsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3BDLE1BQU1DLFlBQVksR0FDaEIsaUJBQWlCQyxNQUFqQixHQUNJQSxNQUFNLENBQUNDLFdBRFgsR0FFSUMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUgvQjtBQUlBLE1BQU1DLElBQUksR0FBR0gsUUFBUSxDQUFDRyxJQUF0QjtBQUNBLE1BQU1DLElBQUksR0FBR0osUUFBUSxDQUFDQyxlQUF0QjtBQUNBLE1BQU1JLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQ2hCSixJQUFJLENBQUNLLFlBRFcsRUFFaEJMLElBQUksQ0FBQ0QsWUFGVyxFQUdoQkUsSUFBSSxDQUFDSyxZQUhXLEVBSWhCTCxJQUFJLENBQUNJLFlBSlcsRUFLaEJKLElBQUksQ0FBQ0YsWUFMVyxDQUFsQjtBQU9BLE1BQU1RLFlBQVksR0FBR2IsWUFBWSxHQUFHQyxNQUFNLENBQUNhLFdBQTNDOztBQUNBLE1BQUlELFlBQVksSUFBSUwsU0FBUyxHQUFHLENBQWhDLEVBQW1DO0FBQ2pDTyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FqQixRQUFJO0FBQ0w7QUFDRixDQW5CTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS4xZDk4NzMyZDlkMjY3YTQwYTcxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4vY2xpZW50XCI7XG5cbmV4cG9ydCBjb25zdCB1cmxGb3IgPSAoc291cmNlKSA9PiB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVNjcm9sbCA9IChmdW5jKSA9PiB7XG4gIGNvbnN0IHdpbmRvd0hlaWdodCA9XG4gICAgXCJpbm5lckhlaWdodFwiIGluIHdpbmRvd1xuICAgICAgPyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGNvbnN0IGRvY0hlaWdodCA9IE1hdGgubWF4KFxuICAgIGJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgIGJvZHkub2Zmc2V0SGVpZ2h0LFxuICAgIGh0bWwuY2xpZW50SGVpZ2h0LFxuICAgIGh0bWwuc2Nyb2xsSGVpZ2h0LFxuICAgIGh0bWwub2Zmc2V0SGVpZ2h0XG4gICk7XG4gIGNvbnN0IHdpbmRvd0JvdHRvbSA9IHdpbmRvd0hlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgaWYgKHdpbmRvd0JvdHRvbSA+PSBkb2NIZWlnaHQgLSA1KSB7XG4gICAgY29uc29sZS5sb2coXCJib3R0b21cIik7XG4gICAgZnVuYygpO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==