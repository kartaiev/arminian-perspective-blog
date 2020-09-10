webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/Hamburger.js":
/*!****************************************!*\
  !*** ./components/layout/Hamburger.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_global_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/global.context */ "./context/global.context.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\layout\\Hamburger.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Hamburger = function Hamburger() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global_context__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]),
      open = _useContext.open,
      isOpened = _useContext.isOpened;

  var topVariants = {
    open: {
      rotate: 45
    },
    closed: {
      rotate: 0
    }
  };
  var middilVariants = {
    open: {
      opacity: 0
    },
    closed: {
      opacity: 1
    }
  };
  var bottomVariants = {
    open: {
      rotate: -45
    },
    closed: {
      rotate: 0
    }
  };
  return __jsx("button", {
    onClick: open,
    className: "h-full w-5 outline-none focus:outline-none z-40 flex flex-col justify-center xl:hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    animate: isOpened ? "open" : "closed",
    variants: topVariants,
    className: "h-mk w-full mb-1 bg-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: "h-mk w-full mb-1 bg-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    animate: isOpened ? "open" : "closed",
    variants: bottomVariants,
    className: "h-mk w-full bg-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }));
};

_s(Hamburger, "iVGt+QJ/x6kNcSDMetgSvvR1Rf0=");

_c = Hamburger;
/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

var _c;

$RefreshReg$(_c, "Hamburger");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGFtYnVyZ2VyLmpzIl0sIm5hbWVzIjpbIkhhbWJ1cmdlciIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0Iiwib3BlbiIsImlzT3BlbmVkIiwidG9wVmFyaWFudHMiLCJyb3RhdGUiLCJjbG9zZWQiLCJtaWRkaWxWYXJpYW50cyIsIm9wYWNpdHkiLCJib3R0b21WYXJpYW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLG9CQUNLQyx3REFBVSxDQUFDQyxxRUFBRCxDQURmO0FBQUEsTUFDZEMsSUFEYyxlQUNkQSxJQURjO0FBQUEsTUFDUkMsUUFEUSxlQUNSQSxRQURROztBQUd0QixNQUFNQyxXQUFXLEdBQUc7QUFDbEJGLFFBQUksRUFBRTtBQUFFRyxZQUFNLEVBQUU7QUFBVixLQURZO0FBRWxCQyxVQUFNLEVBQUU7QUFBRUQsWUFBTSxFQUFFO0FBQVY7QUFGVSxHQUFwQjtBQUtBLE1BQU1FLGNBQWMsR0FBRztBQUNyQkwsUUFBSSxFQUFFO0FBQUVNLGFBQU8sRUFBRTtBQUFYLEtBRGU7QUFFckJGLFVBQU0sRUFBRTtBQUFFRSxhQUFPLEVBQUU7QUFBWDtBQUZhLEdBQXZCO0FBS0EsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCUCxRQUFJLEVBQUU7QUFBRUcsWUFBTSxFQUFFLENBQUM7QUFBWCxLQURlO0FBRXJCQyxVQUFNLEVBQUU7QUFBRUQsWUFBTSxFQUFFO0FBQVY7QUFGYSxHQUF2QjtBQUtBLFNBQ0U7QUFDRSxXQUFPLEVBQUVILElBRFg7QUFFRSxhQUFTLEVBQUMsd0ZBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsV0FBTyxFQUFFQyxRQUFRLEdBQUcsTUFBSCxHQUFZLFFBRC9CO0FBRUUsWUFBUSxFQUFFQyxXQUZaO0FBR0UsYUFBUyxFQUFDLDhCQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQVNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksYUFBUyxFQUFDLDhCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLFdBQU8sRUFBRUQsUUFBUSxHQUFHLE1BQUgsR0FBWSxRQUQvQjtBQUVFLFlBQVEsRUFBRU0sY0FGWjtBQUdFLGFBQVMsRUFBQyx5QkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FERjtBQWtCRCxDQXBDRDs7R0FBTVYsUzs7S0FBQUEsUztBQXNDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjhhZjVhNzg1MjJmZjcwMjhmYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvZ2xvYmFsLmNvbnRleHRcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IEhhbWJ1cmdlciA9ICgpID0+IHtcbiAgY29uc3QgeyBvcGVuLCBpc09wZW5lZCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcblxuICBjb25zdCB0b3BWYXJpYW50cyA9IHtcbiAgICBvcGVuOiB7IHJvdGF0ZTogNDUgfSxcbiAgICBjbG9zZWQ6IHsgcm90YXRlOiAwIH0sXG4gIH07XG5cbiAgY29uc3QgbWlkZGlsVmFyaWFudHMgPSB7XG4gICAgb3BlbjogeyBvcGFjaXR5OiAwIH0sXG4gICAgY2xvc2VkOiB7IG9wYWNpdHk6IDEgfSxcbiAgfTtcblxuICBjb25zdCBib3R0b21WYXJpYW50cyA9IHtcbiAgICBvcGVuOiB7IHJvdGF0ZTogLTQ1IH0sXG4gICAgY2xvc2VkOiB7IHJvdGF0ZTogMCB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17b3Blbn1cbiAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LTUgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSB6LTQwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgeGw6aGlkZGVuXCJcbiAgICA+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBhbmltYXRlPXtpc09wZW5lZCA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgICAgdmFyaWFudHM9e3RvcFZhcmlhbnRzfVxuICAgICAgICBjbGFzc05hbWU9XCJoLW1rIHctZnVsbCBtYi0xIGJnLWdyYXktNjAwXCJcbiAgICAgIC8+XG4gICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJoLW1rIHctZnVsbCBtYi0xIGJnLWdyYXktNjAwXCIgLz5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGFuaW1hdGU9e2lzT3BlbmVkID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgICB2YXJpYW50cz17Ym90dG9tVmFyaWFudHN9XG4gICAgICAgIGNsYXNzTmFtZT1cImgtbWsgdy1mdWxsIGJnLWdyYXktNjAwXCJcbiAgICAgIC8+XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIYW1idXJnZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9