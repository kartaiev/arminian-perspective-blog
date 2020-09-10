webpackHotUpdate_N_E("pages/index",{

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
      isOpened = _useToggle.isToggled,
      setIsOpened = _useToggle.setIsToggled,
      open = _useToggle.toggle;

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
        lineNumber: 23,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: link === "blog" ? "/" : "/".concat(link),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, pages[link])));
  });
  return __jsx(GlobalContext.Provider, {
    value: {
      links: links,
      isOpened: isOpened,
      setIsOpened: setIsOpened,
      open: open
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, children);
};

_s(GlobalProvider, "CuWp0s6zHjY9S0hzDqF+Iej8rxA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9nbG9iYWwuY29udGV4dC5qcyJdLCJuYW1lcyI6WyJHbG9iYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVuZGVmaW5lZCIsIkdsb2JhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VUb2dnbGUiLCJpc09wZW5lZCIsImlzVG9nZ2xlZCIsInNldElzT3BlbmVkIiwic2V0SXNUb2dnbGVkIiwib3BlbiIsInRvZ2dsZSIsInBhZ2VzIiwiYmxvZyIsImFib3V0Iiwic3RhdGVtZW50IiwiZ2l2ZSIsImxpbmtzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsQ0FBQ0MsU0FBRCxFQUFZQSxTQUFaLENBQW5DO0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxtQkFLMUNDLGtFQUFTLEVBTGlDO0FBQUEsTUFFakNDLFFBRmlDLGNBRTVDQyxTQUY0QztBQUFBLE1BRzlCQyxXQUg4QixjQUc1Q0MsWUFINEM7QUFBQSxNQUlwQ0MsSUFKb0MsY0FJNUNDLE1BSjRDOztBQU85QyxNQUFNQyxLQUFLLEdBQUc7QUFDWkMsUUFBSSxFQUFFLE1BRE07QUFFWkMsU0FBSyxFQUFFLGVBRks7QUFHWkMsYUFBUyxFQUFFLGtCQUhDO0FBSVpDLFFBQUksRUFBRTtBQUpNLEdBQWQ7QUFPQSxNQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxLQUFaLEVBQW1CUSxHQUFuQixDQUF1QixVQUFDQyxJQUFELEVBQVU7QUFDN0MsV0FDRTtBQUFJLGVBQVMsRUFBQyxnQkFBZDtBQUErQixTQUFHLEVBQUVBLElBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFQSxJQUFJLEtBQUssTUFBVCxHQUFrQixHQUFsQixjQUE0QkEsSUFBNUIsQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJVCxLQUFLLENBQUNTLElBQUQsQ0FBVCxDQURGLENBREYsQ0FERjtBQU9ELEdBUmEsQ0FBZDtBQVVBLFNBQ0UsTUFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUU7QUFBRUosV0FBSyxFQUFMQSxLQUFGO0FBQVNYLGNBQVEsRUFBUkEsUUFBVDtBQUFtQkUsaUJBQVcsRUFBWEEsV0FBbkI7QUFBZ0NFLFVBQUksRUFBSkE7QUFBaEMsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixRQURILENBREY7QUFLRCxDQTdCTTs7R0FBTUQsYztVQUtQRSwwRDs7O0tBTE9GLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTQ4ODFmZWE5MWViODhjZTY2M2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tIFwiLi4vaG9va3MvdXNlVG9nZ2xlXCI7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlzVG9nZ2xlZDogaXNPcGVuZWQsXG4gICAgc2V0SXNUb2dnbGVkOiBzZXRJc09wZW5lZCxcbiAgICB0b2dnbGU6IG9wZW4sXG4gIH0gPSB1c2VUb2dnbGUoKTtcblxuICBjb25zdCBwYWdlcyA9IHtcbiAgICBibG9nOiBcItCx0LvQvtCzXCIsXG4gICAgYWJvdXQ6IFwi0L7QsSDRjdGC0L7QvCDQsdC70L7Qs9C1XCIsXG4gICAgc3RhdGVtZW50OiBcItGD0YLQstC10YDQttC00LXQvdC40LUg0LLQtdGA0YtcIixcbiAgICBnaXZlOiBcItC/0L7QtNC00LXRgNC20Lgg0L/RgNC+0LXQutGCXCIsXG4gIH07XG5cbiAgY29uc3QgbGlua3MgPSBPYmplY3Qua2V5cyhwYWdlcykubWFwKChsaW5rKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJwYi0xMiBsZzpwbC00IFwiIGtleT17bGlua30+XG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmsgPT09IFwiYmxvZ1wiID8gXCIvXCIgOiBgLyR7bGlua31gfT5cbiAgICAgICAgICA8YT57cGFnZXNbbGlua119PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbGlua3MsIGlzT3BlbmVkLCBzZXRJc09wZW5lZCwgb3BlbiB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==