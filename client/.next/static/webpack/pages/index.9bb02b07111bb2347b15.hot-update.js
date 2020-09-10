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
      isOpened: isOpened,
      setOpen: setOpen,
      open: open
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9nbG9iYWwuY29udGV4dC5qcyJdLCJuYW1lcyI6WyJHbG9iYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVuZGVmaW5lZCIsIkdsb2JhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VUb2dnbGUiLCJpc1RvZ2dsZWQiLCJzZXRUb2dnbGUiLCJ0b2dnbGUiLCJwYWdlcyIsImJsb2ciLCJhYm91dCIsInN0YXRlbWVudCIsImdpdmUiLCJsaW5rcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJsaW5rIiwiaXNPcGVuZWQiLCJzZXRPcGVuIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUFDQyxTQUFELEVBQVlBLFNBQVosQ0FBbkM7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLG1CQUNMQyxrRUFBUyxFQURKO0FBQUEsTUFDdENDLFNBRHNDLGNBQ3RDQSxTQURzQztBQUFBLE1BQzNCQyxTQUQyQixjQUMzQkEsU0FEMkI7QUFBQSxNQUNoQkMsTUFEZ0IsY0FDaEJBLE1BRGdCOztBQUc5QyxNQUFNQyxLQUFLLEdBQUc7QUFDWkMsUUFBSSxFQUFFLE1BRE07QUFFWkMsU0FBSyxFQUFFLGVBRks7QUFHWkMsYUFBUyxFQUFFLGtCQUhDO0FBSVpDLFFBQUksRUFBRTtBQUpNLEdBQWQ7QUFPQSxNQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxLQUFaLEVBQW1CUSxHQUFuQixDQUF1QixVQUFDQyxJQUFELEVBQVU7QUFDN0MsV0FDRTtBQUFJLGVBQVMsRUFBQyxnQkFBZDtBQUErQixTQUFHLEVBQUVBLElBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFQSxJQUFJLEtBQUssTUFBVCxHQUFrQixHQUFsQixjQUE0QkEsSUFBNUIsQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJVCxLQUFLLENBQUNTLElBQUQsQ0FBVCxDQURGLENBREYsQ0FERjtBQU9ELEdBUmEsQ0FBZDtBQVVBLFNBQ0UsTUFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUU7QUFBRUosV0FBSyxFQUFMQSxLQUFGO0FBQVNLLGNBQVEsRUFBUkEsUUFBVDtBQUFtQkMsYUFBTyxFQUFQQSxPQUFuQjtBQUE0QkMsVUFBSSxFQUFKQTtBQUE1QixLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dqQixRQURILENBREY7QUFLRCxDQXpCTTs7R0FBTUQsYztVQUM4QkUsMEQ7OztLQUQ5QkYsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YmIwMmIwNzExMWJiMjM0N2IxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gXCIuLi9ob29rcy91c2VUb2dnbGVcIjtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IGlzVG9nZ2xlZCwgc2V0VG9nZ2xlLCB0b2dnbGUgfSA9IHVzZVRvZ2dsZSgpO1xuXG4gIGNvbnN0IHBhZ2VzID0ge1xuICAgIGJsb2c6IFwi0LHQu9C+0LNcIixcbiAgICBhYm91dDogXCLQvtCxINGN0YLQvtC8INCx0LvQvtCz0LVcIixcbiAgICBzdGF0ZW1lbnQ6IFwi0YPRgtCy0LXRgNC20LTQtdC90LjQtSDQstC10YDRi1wiLFxuICAgIGdpdmU6IFwi0L/QvtC00LTQtdGA0LbQuCDQv9GA0L7QtdC60YJcIixcbiAgfTtcblxuICBjb25zdCBsaW5rcyA9IE9iamVjdC5rZXlzKHBhZ2VzKS5tYXAoKGxpbmspID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT1cInBiLTEyIGxnOnBsLTQgXCIga2V5PXtsaW5rfT5cbiAgICAgICAgPExpbmsgaHJlZj17bGluayA9PT0gXCJibG9nXCIgPyBcIi9cIiA6IGAvJHtsaW5rfWB9PlxuICAgICAgICAgIDxhPntwYWdlc1tsaW5rXX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsaW5rcywgaXNPcGVuZWQsIHNldE9wZW4sIG9wZW4gfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=