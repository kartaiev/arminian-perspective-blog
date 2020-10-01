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
  console.log(body.scrollHeight);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hlbHBlcnMuanMiXSwibmFtZXMiOlsidXJsRm9yIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJoYW5kbGVTY3JvbGwiLCJmdW5jIiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsIm9mZnNldEhlaWdodCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwic2Nyb2xsSGVpZ2h0IiwiaHRtbCIsImRvY0hlaWdodCIsIk1hdGgiLCJtYXgiLCJjbGllbnRIZWlnaHQiLCJ3aW5kb3dCb3R0b20iLCJwYWdlWU9mZnNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxNQUFELEVBQVk7QUFDaEMsU0FBT0Msd0RBQWUsQ0FBQ0MsK0NBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDRCxDQUZNO0FBSUEsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3BDLE1BQU1DLFlBQVksR0FDaEIsaUJBQWlCQyxNQUFqQixHQUNJQSxNQUFNLENBQUNDLFdBRFgsR0FFSUMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUgvQjtBQUlBLE1BQU1DLElBQUksR0FBR0gsUUFBUSxDQUFDRyxJQUF0QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxZQUFqQjtBQUNBLE1BQU1DLElBQUksR0FBR1AsUUFBUSxDQUFDQyxlQUF0QjtBQUNBLE1BQU1PLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQ2hCUCxJQUFJLENBQUNHLFlBRFcsRUFFaEJILElBQUksQ0FBQ0QsWUFGVyxFQUdoQkssSUFBSSxDQUFDSSxZQUhXLEVBSWhCSixJQUFJLENBQUNELFlBSlcsRUFLaEJDLElBQUksQ0FBQ0wsWUFMVyxDQUFsQjtBQU9BLE1BQU1VLFlBQVksR0FBR2YsWUFBWSxHQUFHQyxNQUFNLENBQUNlLFdBQTNDOztBQUNBLE1BQUlELFlBQVksSUFBSUosU0FBUyxHQUFHLENBQWhDLEVBQW1DO0FBQ2pDSixXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FULFFBQUk7QUFDTDtBQUNGLENBcEJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZlOWExN2NiY2I1ZjhlZDQ1ZmY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi9jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IHVybEZvciA9IChzb3VyY2UpID0+IHtcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGZ1bmMpID0+IHtcbiAgY29uc3Qgd2luZG93SGVpZ2h0ID1cbiAgICBcImlubmVySGVpZ2h0XCIgaW4gd2luZG93XG4gICAgICA/IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc29sZS5sb2coYm9keS5zY3JvbGxIZWlnaHQpO1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCBkb2NIZWlnaHQgPSBNYXRoLm1heChcbiAgICBib2R5LnNjcm9sbEhlaWdodCxcbiAgICBib2R5Lm9mZnNldEhlaWdodCxcbiAgICBodG1sLmNsaWVudEhlaWdodCxcbiAgICBodG1sLnNjcm9sbEhlaWdodCxcbiAgICBodG1sLm9mZnNldEhlaWdodFxuICApO1xuICBjb25zdCB3aW5kb3dCb3R0b20gPSB3aW5kb3dIZWlnaHQgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIGlmICh3aW5kb3dCb3R0b20gPj0gZG9jSGVpZ2h0IC0gNSkge1xuICAgIGNvbnNvbGUubG9nKFwiYm90dG9tXCIpO1xuICAgIGZ1bmMoKTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=