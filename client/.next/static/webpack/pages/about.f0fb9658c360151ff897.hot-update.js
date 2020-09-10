webpackHotUpdate_N_E("pages/about",{

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
      rotate: 45,
      y: 6
    },
    closed: {
      rotate: 0,
      y: 0
    }
  };
  var middleVariants = {
    open: {
      opacity: 0
    },
    closed: {
      opacity: 1
    }
  };
  var bottomVariants = {
    open: {
      rotate: -45,
      y: -6
    },
    closed: {
      rotate: 0,
      y: 0
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
    animate: isOpened ? "open" : "closed",
    variants: middleVariants,
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
      lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGFtYnVyZ2VyLmpzIl0sIm5hbWVzIjpbIkhhbWJ1cmdlciIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0Iiwib3BlbiIsImlzT3BlbmVkIiwidG9wVmFyaWFudHMiLCJyb3RhdGUiLCJ5IiwiY2xvc2VkIiwibWlkZGxlVmFyaWFudHMiLCJvcGFjaXR5IiwiYm90dG9tVmFyaWFudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxvQkFDS0Msd0RBQVUsQ0FBQ0MscUVBQUQsQ0FEZjtBQUFBLE1BQ2RDLElBRGMsZUFDZEEsSUFEYztBQUFBLE1BQ1JDLFFBRFEsZUFDUkEsUUFEUTs7QUFHdEIsTUFBTUMsV0FBVyxHQUFHO0FBQ2xCRixRQUFJLEVBQUU7QUFBRUcsWUFBTSxFQUFFLEVBQVY7QUFBY0MsT0FBQyxFQUFFO0FBQWpCLEtBRFk7QUFFbEJDLFVBQU0sRUFBRTtBQUFFRixZQUFNLEVBQUUsQ0FBVjtBQUFhQyxPQUFDLEVBQUU7QUFBaEI7QUFGVSxHQUFwQjtBQUtBLE1BQU1FLGNBQWMsR0FBRztBQUNyQk4sUUFBSSxFQUFFO0FBQUVPLGFBQU8sRUFBRTtBQUFYLEtBRGU7QUFFckJGLFVBQU0sRUFBRTtBQUFFRSxhQUFPLEVBQUU7QUFBWDtBQUZhLEdBQXZCO0FBS0EsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCUixRQUFJLEVBQUU7QUFBRUcsWUFBTSxFQUFFLENBQUMsRUFBWDtBQUFlQyxPQUFDLEVBQUUsQ0FBQztBQUFuQixLQURlO0FBRXJCQyxVQUFNLEVBQUU7QUFBRUYsWUFBTSxFQUFFLENBQVY7QUFBYUMsT0FBQyxFQUFFO0FBQWhCO0FBRmEsR0FBdkI7QUFLQSxTQUNFO0FBQ0UsV0FBTyxFQUFFSixJQURYO0FBRUUsYUFBUyxFQUFDLHdGQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLFdBQU8sRUFBRUMsUUFBUSxHQUFHLE1BQUgsR0FBWSxRQUQvQjtBQUVFLFlBQVEsRUFBRUMsV0FGWjtBQUdFLGFBQVMsRUFBQyw4QkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFTRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLFdBQU8sRUFBRUQsUUFBUSxHQUFHLE1BQUgsR0FBWSxRQUQvQjtBQUVFLFlBQVEsRUFBRUssY0FGWjtBQUdFLGFBQVMsRUFBQyw4QkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFjRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLFdBQU8sRUFBRUwsUUFBUSxHQUFHLE1BQUgsR0FBWSxRQUQvQjtBQUVFLFlBQVEsRUFBRU8sY0FGWjtBQUdFLGFBQVMsRUFBQyx5QkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FERjtBQXNCRCxDQXhDRDs7R0FBTVgsUzs7S0FBQUEsUztBQTBDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuZjBmYjk2NThjMzYwMTUxZmY4OTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvZ2xvYmFsLmNvbnRleHRcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IEhhbWJ1cmdlciA9ICgpID0+IHtcbiAgY29uc3QgeyBvcGVuLCBpc09wZW5lZCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcblxuICBjb25zdCB0b3BWYXJpYW50cyA9IHtcbiAgICBvcGVuOiB7IHJvdGF0ZTogNDUsIHk6IDYgfSxcbiAgICBjbG9zZWQ6IHsgcm90YXRlOiAwLCB5OiAwIH0sXG4gIH07XG5cbiAgY29uc3QgbWlkZGxlVmFyaWFudHMgPSB7XG4gICAgb3BlbjogeyBvcGFjaXR5OiAwIH0sXG4gICAgY2xvc2VkOiB7IG9wYWNpdHk6IDEgfSxcbiAgfTtcblxuICBjb25zdCBib3R0b21WYXJpYW50cyA9IHtcbiAgICBvcGVuOiB7IHJvdGF0ZTogLTQ1LCB5OiAtNiB9LFxuICAgIGNsb3NlZDogeyByb3RhdGU6IDAsIHk6IDAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uQ2xpY2s9e29wZW59XG4gICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy01IG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgei00MCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHhsOmhpZGRlblwiXG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgYW5pbWF0ZT17aXNPcGVuZWQgPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgIHZhcmlhbnRzPXt0b3BWYXJpYW50c31cbiAgICAgICAgY2xhc3NOYW1lPVwiaC1tayB3LWZ1bGwgbWItMSBiZy1ncmF5LTYwMFwiXG4gICAgICAvPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgYW5pbWF0ZT17aXNPcGVuZWQgPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgIHZhcmlhbnRzPXttaWRkbGVWYXJpYW50c31cbiAgICAgICAgY2xhc3NOYW1lPVwiaC1tayB3LWZ1bGwgbWItMSBiZy1ncmF5LTYwMFwiXG4gICAgICAvPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgYW5pbWF0ZT17aXNPcGVuZWQgPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgIHZhcmlhbnRzPXtib3R0b21WYXJpYW50c31cbiAgICAgICAgY2xhc3NOYW1lPVwiaC1tayB3LWZ1bGwgYmctZ3JheS02MDBcIlxuICAgICAgLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhhbWJ1cmdlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=