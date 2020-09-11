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
  var visible = isOpened ? "hidden" : "";
  return __jsx("button", {
    onClick: open,
    className: "h-full w-5 outline-none focus:outline-none z-40 flex flex-col justify-center xl:hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    animate: isOpened ? "open" : "closed",
    variants: topVariants,
    className: "h-mk w-full mb-1 bg-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "h-mk w-full mb-1 bg-gray-600  ".concat(visible),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    animate: isOpened ? "open" : "closed",
    variants: bottomVariants,
    className: "h-mk w-full bg-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGFtYnVyZ2VyLmpzIl0sIm5hbWVzIjpbIkhhbWJ1cmdlciIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0Iiwib3BlbiIsImlzT3BlbmVkIiwidG9wVmFyaWFudHMiLCJyb3RhdGUiLCJ5IiwiY2xvc2VkIiwiYm90dG9tVmFyaWFudHMiLCJ2aXNpYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsb0JBQ0tDLHdEQUFVLENBQUNDLHFFQUFELENBRGY7QUFBQSxNQUNkQyxJQURjLGVBQ2RBLElBRGM7QUFBQSxNQUNSQyxRQURRLGVBQ1JBLFFBRFE7O0FBR3RCLE1BQU1DLFdBQVcsR0FBRztBQUNsQkYsUUFBSSxFQUFFO0FBQUVHLFlBQU0sRUFBRSxFQUFWO0FBQWNDLE9BQUMsRUFBRTtBQUFqQixLQURZO0FBRWxCQyxVQUFNLEVBQUU7QUFBRUYsWUFBTSxFQUFFLENBQVY7QUFBYUMsT0FBQyxFQUFFO0FBQWhCO0FBRlUsR0FBcEI7QUFLQSxNQUFNRSxjQUFjLEdBQUc7QUFDckJOLFFBQUksRUFBRTtBQUFFRyxZQUFNLEVBQUUsQ0FBQyxFQUFYO0FBQWVDLE9BQUMsRUFBRSxDQUFDO0FBQW5CLEtBRGU7QUFFckJDLFVBQU0sRUFBRTtBQUFFRixZQUFNLEVBQUUsQ0FBVjtBQUFhQyxPQUFDLEVBQUU7QUFBaEI7QUFGYSxHQUF2QjtBQUtBLE1BQU1HLE9BQU8sR0FBR04sUUFBUSxHQUFHLFFBQUgsR0FBYyxFQUF0QztBQUVBLFNBQ0U7QUFDRSxXQUFPLEVBQUVELElBRFg7QUFFRSxhQUFTLEVBQUMsd0ZBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsV0FBTyxFQUFFQyxRQUFRLEdBQUcsTUFBSCxHQUFZLFFBRC9CO0FBRUUsWUFBUSxFQUFFQyxXQUZaO0FBR0UsYUFBUyxFQUFDLDhCQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQVNFO0FBQUssYUFBUywwQ0FBbUNLLE9BQW5DLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUUsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxXQUFPLEVBQUVOLFFBQVEsR0FBRyxNQUFILEdBQVksUUFEL0I7QUFFRSxZQUFRLEVBQUVLLGNBRlo7QUFHRSxhQUFTLEVBQUMseUJBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBREY7QUFrQkQsQ0FqQ0Q7O0dBQU1ULFM7O0tBQUFBLFM7QUFtQ1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjMwZmU1ZjJlMDY1Yzc5NzQyMDk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2dsb2JhbC5jb250ZXh0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBIYW1idXJnZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgb3BlbiwgaXNPcGVuZWQgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XG5cbiAgY29uc3QgdG9wVmFyaWFudHMgPSB7XG4gICAgb3BlbjogeyByb3RhdGU6IDQ1LCB5OiA2IH0sXG4gICAgY2xvc2VkOiB7IHJvdGF0ZTogMCwgeTogMCB9LFxuICB9O1xuXG4gIGNvbnN0IGJvdHRvbVZhcmlhbnRzID0ge1xuICAgIG9wZW46IHsgcm90YXRlOiAtNDUsIHk6IC02IH0sXG4gICAgY2xvc2VkOiB7IHJvdGF0ZTogMCwgeTogMCB9LFxuICB9O1xuXG4gIGNvbnN0IHZpc2libGUgPSBpc09wZW5lZCA/IFwiaGlkZGVuXCIgOiBcIlwiO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17b3Blbn1cbiAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LTUgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSB6LTQwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgeGw6aGlkZGVuXCJcbiAgICA+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBhbmltYXRlPXtpc09wZW5lZCA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgICAgdmFyaWFudHM9e3RvcFZhcmlhbnRzfVxuICAgICAgICBjbGFzc05hbWU9XCJoLW1rIHctZnVsbCBtYi0xIGJnLWdyYXktNjAwXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGgtbWsgdy1mdWxsIG1iLTEgYmctZ3JheS02MDAgICR7dmlzaWJsZX1gfSAvPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgYW5pbWF0ZT17aXNPcGVuZWQgPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgIHZhcmlhbnRzPXtib3R0b21WYXJpYW50c31cbiAgICAgICAgY2xhc3NOYW1lPVwiaC1tayB3LWZ1bGwgYmctZ3JheS02MDBcIlxuICAgICAgLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhhbWJ1cmdlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=