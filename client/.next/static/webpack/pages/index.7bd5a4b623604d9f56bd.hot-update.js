webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useToggle.js":
/*!****************************!*\
  !*** ./hooks/useToggle.js ***!
  \****************************/
/*! exports provided: useToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToggle", function() { return useToggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


var useToggle = function useToggle() {
  _s();

  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initial),
      isToggled = _useState.isToggled,
      setToggle = _useState.setToggle;

  var toggle = function toggle() {
    return setToggle(function (prevState) {
      return !prevState;
    });
  };

  return {
    isToggled: isToggled,
    setToggle: setToggle,
    toggle: toggle
  };
};

_s(useToggle, "YEnAY8Po41xW3ZgD6uN1ATLkfX0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlVG9nZ2xlLmpzIl0sIm5hbWVzIjpbInVzZVRvZ2dsZSIsImluaXRpYWwiLCJ1c2VTdGF0ZSIsImlzVG9nZ2xlZCIsInNldFRvZ2dsZSIsInRvZ2dsZSIsInByZXZTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBcUI7QUFBQTs7QUFBQSxNQUFwQkMsT0FBb0IsdUVBQVYsS0FBVTs7QUFBQSxrQkFDWEMsc0RBQVEsQ0FBQ0QsT0FBRCxDQURHO0FBQUEsTUFDcENFLFNBRG9DLGFBQ3BDQSxTQURvQztBQUFBLE1BQ3pCQyxTQUR5QixhQUN6QkEsU0FEeUI7O0FBRTVDLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsV0FBTUQsU0FBUyxDQUFDLFVBQUNFLFNBQUQ7QUFBQSxhQUFlLENBQUNBLFNBQWhCO0FBQUEsS0FBRCxDQUFmO0FBQUEsR0FBZjs7QUFDQSxTQUFPO0FBQUVILGFBQVMsRUFBVEEsU0FBRjtBQUFhQyxhQUFTLEVBQVRBLFNBQWI7QUFBd0JDLFVBQU0sRUFBTkE7QUFBeEIsR0FBUDtBQUNELENBSk07O0dBQU1MLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2JkNWE0YjYyMzYwNGQ5ZjU2YmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCB1c2VUb2dnbGUgPSAoaW5pdGlhbCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHsgaXNUb2dnbGVkLCBzZXRUb2dnbGUgfSA9IHVzZVN0YXRlKGluaXRpYWwpO1xuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRUb2dnbGUoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIHJldHVybiB7IGlzVG9nZ2xlZCwgc2V0VG9nZ2xlLCB0b2dnbGUgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9