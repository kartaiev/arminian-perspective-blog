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
      links: links
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

/***/ }),

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
      setIsToggled = _useState.setIsToggled;

  var toggle = function toggle() {
    return function (prevState) {
      return prevState = !prevState;
    };
  };

  return {
    isToggled: isToggled,
    setIsToggled: setIsToggled,
    toggle: toggle
  };
};

_s(useToggle, "mty0Orrtqau7Iksj54npQCr1jOo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9nbG9iYWwuY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlVG9nZ2xlLmpzIl0sIm5hbWVzIjpbIkdsb2JhbENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiR2xvYmFsUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVRvZ2dsZSIsImlzT3BlbmVkIiwiaXNUb2dnbGVkIiwic2V0SXNPcGVuZWQiLCJzZXRJc1RvZ2dsZWQiLCJvcGVuIiwidG9nZ2xlIiwicGFnZXMiLCJibG9nIiwiYWJvdXQiLCJzdGF0ZW1lbnQiLCJnaXZlIiwibGlua3MiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibGluayIsImluaXRpYWwiLCJ1c2VTdGF0ZSIsInByZXZTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUFDQyxTQUFELEVBQVlBLFNBQVosQ0FBbkM7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLG1CQUsxQ0Msa0VBQVMsRUFMaUM7QUFBQSxNQUVqQ0MsUUFGaUMsY0FFNUNDLFNBRjRDO0FBQUEsTUFHOUJDLFdBSDhCLGNBRzVDQyxZQUg0QztBQUFBLE1BSXBDQyxJQUpvQyxjQUk1Q0MsTUFKNEM7O0FBTzlDLE1BQU1DLEtBQUssR0FBRztBQUNaQyxRQUFJLEVBQUUsTUFETTtBQUVaQyxTQUFLLEVBQUUsZUFGSztBQUdaQyxhQUFTLEVBQUUsa0JBSEM7QUFJWkMsUUFBSSxFQUFFO0FBSk0sR0FBZDtBQU9BLE1BQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlQLEtBQVosRUFBbUJRLEdBQW5CLENBQXVCLFVBQUNDLElBQUQsRUFBVTtBQUM3QyxXQUNFO0FBQUksZUFBUyxFQUFDLGdCQUFkO0FBQStCLFNBQUcsRUFBRUEsSUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVBLElBQUksS0FBSyxNQUFULEdBQWtCLEdBQWxCLGNBQTRCQSxJQUE1QixDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlULEtBQUssQ0FBQ1MsSUFBRCxDQUFULENBREYsQ0FERixDQURGO0FBT0QsR0FSYSxDQUFkO0FBVUEsU0FDRSxNQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRTtBQUFFSixXQUFLLEVBQUxBO0FBQUYsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHYixRQURILENBREY7QUFLRCxDQTdCTTs7R0FBTUQsYztVQUtQRSwwRDs7O0tBTE9GLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOYjtBQUVPLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQXFCO0FBQUE7O0FBQUEsTUFBcEJpQixPQUFvQix1RUFBVixLQUFVOztBQUFBLGtCQUNSQyxzREFBUSxDQUFDRCxPQUFELENBREE7QUFBQSxNQUNwQ2YsU0FEb0MsYUFDcENBLFNBRG9DO0FBQUEsTUFDekJFLFlBRHlCLGFBQ3pCQSxZQUR5Qjs7QUFFNUMsTUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNLFVBQUNhLFNBQUQ7QUFBQSxhQUFnQkEsU0FBUyxHQUFHLENBQUNBLFNBQTdCO0FBQUEsS0FBTjtBQUFBLEdBQWY7O0FBQ0EsU0FBTztBQUFFakIsYUFBUyxFQUFUQSxTQUFGO0FBQWFFLGdCQUFZLEVBQVpBLFlBQWI7QUFBMkJFLFVBQU0sRUFBTkE7QUFBM0IsR0FBUDtBQUNELENBSk07O0dBQU1OLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzI2YjBiMjAwNmVmYmZiNDA3ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tIFwiLi4vaG9va3MvdXNlVG9nZ2xlXCI7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlzVG9nZ2xlZDogaXNPcGVuZWQsXG4gICAgc2V0SXNUb2dnbGVkOiBzZXRJc09wZW5lZCxcbiAgICB0b2dnbGU6IG9wZW4sXG4gIH0gPSB1c2VUb2dnbGUoKTtcblxuICBjb25zdCBwYWdlcyA9IHtcbiAgICBibG9nOiBcItCx0LvQvtCzXCIsXG4gICAgYWJvdXQ6IFwi0L7QsSDRjdGC0L7QvCDQsdC70L7Qs9C1XCIsXG4gICAgc3RhdGVtZW50OiBcItGD0YLQstC10YDQttC00LXQvdC40LUg0LLQtdGA0YtcIixcbiAgICBnaXZlOiBcItC/0L7QtNC00LXRgNC20Lgg0L/RgNC+0LXQutGCXCIsXG4gIH07XG5cbiAgY29uc3QgbGlua3MgPSBPYmplY3Qua2V5cyhwYWdlcykubWFwKChsaW5rKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJwYi0xMiBsZzpwbC00IFwiIGtleT17bGlua30+XG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmsgPT09IFwiYmxvZ1wiID8gXCIvXCIgOiBgLyR7bGlua31gfT5cbiAgICAgICAgICA8YT57cGFnZXNbbGlua119PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbGlua3MgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCB1c2VUb2dnbGUgPSAoaW5pdGlhbCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHsgaXNUb2dnbGVkLCBzZXRJc1RvZ2dsZWQgfSA9IHVzZVN0YXRlKGluaXRpYWwpO1xuICBjb25zdCB0b2dnbGUgPSAoKSA9PiAocHJldlN0YXRlKSA9PiAocHJldlN0YXRlID0gIXByZXZTdGF0ZSk7XG4gIHJldHVybiB7IGlzVG9nZ2xlZCwgc2V0SXNUb2dnbGVkLCB0b2dnbGUgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9