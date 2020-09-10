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
      rotate: 45
    },
    closed: {
      rotate: 0
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
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    animate: isOpened ? "open" : "closed",
    variants: topVariants,
    className: "h-mk w-full mb-1 bg-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: "h-mk w-full mb-1 bg-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    animate: isOpened ? "open" : "closed",
    variants: bottomVariants,
    className: "h-mk w-full bg-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGFtYnVyZ2VyLmpzIl0sIm5hbWVzIjpbIkhhbWJ1cmdlciIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0Iiwib3BlbiIsImlzT3BlbmVkIiwidG9wVmFyaWFudHMiLCJyb3RhdGUiLCJjbG9zZWQiLCJib3R0b21WYXJpYW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLG9CQUNLQyx3REFBVSxDQUFDQyxxRUFBRCxDQURmO0FBQUEsTUFDZEMsSUFEYyxlQUNkQSxJQURjO0FBQUEsTUFDUkMsUUFEUSxlQUNSQSxRQURROztBQUd0QixNQUFNQyxXQUFXLEdBQUc7QUFDbEJGLFFBQUksRUFBRTtBQUFFRyxZQUFNLEVBQUU7QUFBVixLQURZO0FBRWxCQyxVQUFNLEVBQUU7QUFBRUQsWUFBTSxFQUFFO0FBQVY7QUFGVSxHQUFwQjtBQUtBLE1BQU1FLGNBQWMsR0FBRztBQUNyQkwsUUFBSSxFQUFFO0FBQUVHLFlBQU0sRUFBRSxDQUFDO0FBQVgsS0FEZTtBQUVyQkMsVUFBTSxFQUFFO0FBQUVELFlBQU0sRUFBRTtBQUFWO0FBRmEsR0FBdkI7QUFLQSxTQUNFO0FBQ0UsV0FBTyxFQUFFSCxJQURYO0FBRUUsYUFBUyxFQUFDLHdGQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLFdBQU8sRUFBRUMsUUFBUSxHQUFHLE1BQUgsR0FBWSxRQUQvQjtBQUVFLFlBQVEsRUFBRUMsV0FGWjtBQUdFLGFBQVMsRUFBQyw4QkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFTRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGFBQVMsRUFBQyw4QkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUUsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxXQUFPLEVBQUVELFFBQVEsR0FBRyxNQUFILEdBQVksUUFEL0I7QUFFRSxZQUFRLEVBQUVJLGNBRlo7QUFHRSxhQUFTLEVBQUMseUJBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBREY7QUFrQkQsQ0EvQkQ7O0dBQU1SLFM7O0tBQUFBLFM7QUFpQ1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjdiZGQwZTQ2NjRhM2M2ZTFhM2RmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2dsb2JhbC5jb250ZXh0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBIYW1idXJnZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgb3BlbiwgaXNPcGVuZWQgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XG5cbiAgY29uc3QgdG9wVmFyaWFudHMgPSB7XG4gICAgb3BlbjogeyByb3RhdGU6IDQ1IH0sXG4gICAgY2xvc2VkOiB7IHJvdGF0ZTogMCB9LFxuICB9O1xuXG4gIGNvbnN0IGJvdHRvbVZhcmlhbnRzID0ge1xuICAgIG9wZW46IHsgcm90YXRlOiAtNDUgfSxcbiAgICBjbG9zZWQ6IHsgcm90YXRlOiAwIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBvbkNsaWNrPXtvcGVufVxuICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctNSBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIHotNDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciB4bDpoaWRkZW5cIlxuICAgID5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGFuaW1hdGU9e2lzT3BlbmVkID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgICB2YXJpYW50cz17dG9wVmFyaWFudHN9XG4gICAgICAgIGNsYXNzTmFtZT1cImgtbWsgdy1mdWxsIG1iLTEgYmctZ3JheS02MDBcIlxuICAgICAgLz5cbiAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImgtbWsgdy1mdWxsIG1iLTEgYmctZ3JheS02MDBcIiAvPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgYW5pbWF0ZT17aXNPcGVuZWQgPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgIHZhcmlhbnRzPXtib3R0b21WYXJpYW50c31cbiAgICAgICAgY2xhc3NOYW1lPVwiaC1tayB3LWZ1bGwgYmctZ3JheS02MDBcIlxuICAgICAgLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhhbWJ1cmdlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=