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
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\layout\\Hamburger.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Hamburger = function Hamburger() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global_context__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]),
      toggle = _useContext.toggle;

  return __jsx("button", {
    onClick: toggle,
    className: "h-full w-5 outline-none z-40 flex flex-col justify-center lg:hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "h-mk w-full mb-1 bg-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "h-mk w-full mb-1 bg-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "h-mk w-full bg-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }));
};

_s(Hamburger, "y/4eJoxw3mZE6IIQb6RHG9GMGXs=");

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

/***/ }),

/***/ "./context/global.context.js":
/*!***********************************!*\
  !*** ./context/global.context.js ***!
  \***********************************/
/*! exports provided: GlobalContext, GlobalProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalContext", function() { return GlobalContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalProvider", function() { return GlobalProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useToggle */ "./hooks/useToggle.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\context\\global.context.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var GlobalContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined, undefined);
var GlobalProvider = function GlobalProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__["useToggle"])(),
      isToggled = _useToggle.isToggled,
      setToggle = _useToggle.setToggle,
      toggle = _useToggle.toggle;

  var pages = {
    blog: "блог",
    about: "об этом блоге",
    statement: "утверждение веры",
    give: "поддержи проект"
  };
  var links = Object.keys(pages).map(function (link) {
    return __jsx("li", {
      className: "pb-12 lg:pl-4 ",
      key: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: link === "blog" ? "/" : "/".concat(link),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, pages[link])));
  });
  return __jsx(GlobalContext.Provider, {
    value: {
      links: links,
      isToggled: isToggled,
      setToggle: setToggle,
      toggle: toggle
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, children);
};

_s(GlobalProvider, "hhT2Lmq+PiRqdWtlgyvCo42/dMU=", false, function () {
  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__["useToggle"]];
});

_c = GlobalProvider;

var _c;

$RefreshReg$(_c, "GlobalProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGFtYnVyZ2VyLmpzIiwid2VicGFjazovL19OX0UvLi9jb250ZXh0L2dsb2JhbC5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkhhbWJ1cmdlciIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwidG9nZ2xlIiwiY3JlYXRlQ29udGV4dCIsInVuZGVmaW5lZCIsIkdsb2JhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VUb2dnbGUiLCJpc1RvZ2dsZWQiLCJzZXRUb2dnbGUiLCJwYWdlcyIsImJsb2ciLCJhYm91dCIsInN0YXRlbWVudCIsImdpdmUiLCJsaW5rcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsb0JBQ0hDLHdEQUFVLENBQUNDLHFFQUFELENBRFA7QUFBQSxNQUNkQyxNQURjLGVBQ2RBLE1BRGM7O0FBR3RCLFNBQ0U7QUFDRSxXQUFPLEVBQUVBLE1BRFg7QUFFRSxhQUFTLEVBQUMscUVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGO0FBVUQsQ0FiRDs7R0FBTUgsUzs7S0FBQUEsUztBQWVTQSx3RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBRU8sSUFBTUUsYUFBYSxnQkFBR0UsMkRBQWEsQ0FBQ0MsU0FBRCxFQUFZQSxTQUFaLENBQW5DO0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxtQkFDTEMsa0VBQVMsRUFESjtBQUFBLE1BQ3RDQyxTQURzQyxjQUN0Q0EsU0FEc0M7QUFBQSxNQUMzQkMsU0FEMkIsY0FDM0JBLFNBRDJCO0FBQUEsTUFDaEJQLE1BRGdCLGNBQ2hCQSxNQURnQjs7QUFHOUMsTUFBTVEsS0FBSyxHQUFHO0FBQ1pDLFFBQUksRUFBRSxNQURNO0FBRVpDLFNBQUssRUFBRSxlQUZLO0FBR1pDLGFBQVMsRUFBRSxrQkFIQztBQUlaQyxRQUFJLEVBQUU7QUFKTSxHQUFkO0FBT0EsTUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWVAsS0FBWixFQUFtQlEsR0FBbkIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzdDLFdBQ0U7QUFBSSxlQUFTLEVBQUMsZ0JBQWQ7QUFBK0IsU0FBRyxFQUFFQSxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUEsSUFBSSxLQUFLLE1BQVQsR0FBa0IsR0FBbEIsY0FBNEJBLElBQTVCLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSVQsS0FBSyxDQUFDUyxJQUFELENBQVQsQ0FERixDQURGLENBREY7QUFPRCxHQVJhLENBQWQ7QUFVQSxTQUNFLE1BQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUVKLFdBQUssRUFBTEEsS0FBRjtBQUFTUCxlQUFTLEVBQVRBLFNBQVQ7QUFBb0JDLGVBQVMsRUFBVEEsU0FBcEI7QUFBK0JQLFlBQU0sRUFBTkE7QUFBL0IsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSSxRQURILENBREY7QUFLRCxDQXpCTTs7R0FBTUQsYztVQUM4QkUsMEQ7OztLQUQ5QkYsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YjE0NWZjYWVhY2NkMTgzNTk2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9nbG9iYWwuY29udGV4dFwiO1xuXG5jb25zdCBIYW1idXJnZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdG9nZ2xlIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17dG9nZ2xlfVxuICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctNSBvdXRsaW5lLW5vbmUgei00MCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGxnOmhpZGRlblwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLW1rIHctZnVsbCBtYi0xIGJnLWdyYXktNjAwXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1tayB3LWZ1bGwgbWItMSBiZy1ncmF5LTYwMFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtbWsgdy1mdWxsIGJnLWdyYXktNjAwXCIgLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhhbWJ1cmdlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tIFwiLi4vaG9va3MvdXNlVG9nZ2xlXCI7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBpc1RvZ2dsZWQsIHNldFRvZ2dsZSwgdG9nZ2xlIH0gPSB1c2VUb2dnbGUoKTtcblxuICBjb25zdCBwYWdlcyA9IHtcbiAgICBibG9nOiBcItCx0LvQvtCzXCIsXG4gICAgYWJvdXQ6IFwi0L7QsSDRjdGC0L7QvCDQsdC70L7Qs9C1XCIsXG4gICAgc3RhdGVtZW50OiBcItGD0YLQstC10YDQttC00LXQvdC40LUg0LLQtdGA0YtcIixcbiAgICBnaXZlOiBcItC/0L7QtNC00LXRgNC20Lgg0L/RgNC+0LXQutGCXCIsXG4gIH07XG5cbiAgY29uc3QgbGlua3MgPSBPYmplY3Qua2V5cyhwYWdlcykubWFwKChsaW5rKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJwYi0xMiBsZzpwbC00IFwiIGtleT17bGlua30+XG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmsgPT09IFwiYmxvZ1wiID8gXCIvXCIgOiBgLyR7bGlua31gfT5cbiAgICAgICAgICA8YT57cGFnZXNbbGlua119PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbGlua3MsIGlzVG9nZ2xlZCwgc2V0VG9nZ2xlLCB0b2dnbGUgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=