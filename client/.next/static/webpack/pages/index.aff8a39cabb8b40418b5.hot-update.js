webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useToggle */ "./hooks/useToggle.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var App = function App(_ref) {
  _s();

  var _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? [] : _ref$posts;

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__["useToggle"])(),
      isToggled = _useToggle.isToggled,
      toggle = _useToggle.toggle;

  var previews = posts.map(function (_ref2) {
    var _id = _ref2._id,
        _ref2$title = _ref2.title,
        title = _ref2$title === void 0 ? "" : _ref2$title,
        _ref2$subtitle = _ref2.subtitle,
        subtitle = _ref2$subtitle === void 0 ? "" : _ref2$subtitle,
        _ref2$slug = _ref2.slug,
        slug = _ref2$slug === void 0 ? "" : _ref2$slug,
        mainImage = _ref2.mainImage,
        _ref2$publishedAt = _ref2.publishedAt,
        publishedAt = _ref2$publishedAt === void 0 ? "" : _ref2$publishedAt;
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: _id,
      title: title,
      subtitle: subtitle,
      slug: slug,
      mainImage: mainImage,
      publishedAt: publishedAt,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    });
  });
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hidden h-10 px-32 mt-6 lg:flex justify-start items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: toggle,
    className: "focus:outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, isToggled ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    hasArrow: true,
    label: "\u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u0441\u0435\u0442\u043A\u043E\u0439",
    placement: "top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("svg", {
    className: "w-8 h-8",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }))) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    hasArrow: true,
    label: "\u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043A\u043E\u043C",
    placement: "top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("svg", {
    className: "w-8 h-8",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 6h16M4 10h16M4 14h16M4 18h16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:mt-2 lg:mx-32 xl:grid-cols-3 xl:gap-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, previews));
};

_s(App, "YnTxiDSHocyVV9znCwOPuyEY9zA=", false, function () {
  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__["useToggle"]];
});

_c = App;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VUb2dnbGUiLCJpc1RvZ2dsZWQiLCJ0b2dnbGUiLCJwcmV2aWV3cyIsIm1hcCIsIl9pZCIsInRpdGxlIiwic3VidGl0bGUiLCJzbHVnIiwibWFpbkltYWdlIiwicHVibGlzaGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQjtBQUFBOztBQUFBLHdCQUFqQkMsS0FBaUI7QUFBQSxNQUFqQkEsS0FBaUIsMkJBQVQsRUFBUzs7QUFBQSxtQkFDQUMsa0VBQVMsRUFEVDtBQUFBLE1BQ3RCQyxTQURzQixjQUN0QkEsU0FEc0I7QUFBQSxNQUNYQyxNQURXLGNBQ1hBLE1BRFc7O0FBRzlCLE1BQU1DLFFBQVEsR0FBR0osS0FBSyxDQUFDSyxHQUFOLENBQ2Y7QUFBQSxRQUNFQyxHQURGLFNBQ0VBLEdBREY7QUFBQSw0QkFFRUMsS0FGRjtBQUFBLFFBRUVBLEtBRkYsNEJBRVUsRUFGVjtBQUFBLCtCQUdFQyxRQUhGO0FBQUEsUUFHRUEsUUFIRiwrQkFHYSxFQUhiO0FBQUEsMkJBSUVDLElBSkY7QUFBQSxRQUlFQSxJQUpGLDJCQUlTLEVBSlQ7QUFBQSxRQUtFQyxTQUxGLFNBS0VBLFNBTEY7QUFBQSxrQ0FNRUMsV0FORjtBQUFBLFFBTUVBLFdBTkYsa0NBTWdCLEVBTmhCO0FBQUEsV0FRRSxNQUFDLDREQUFEO0FBQ0UsU0FBRyxFQUFFTCxHQURQO0FBRUUsV0FBSyxFQUFFQyxLQUZUO0FBR0UsY0FBUSxFQUFFQyxRQUhaO0FBSUUsVUFBSSxFQUFFQyxJQUpSO0FBS0UsZUFBUyxFQUFFQyxTQUxiO0FBTUUsaUJBQVcsRUFBRUMsV0FOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkY7QUFBQSxHQURlLENBQWpCO0FBb0JBLFNBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsMkRBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFUixNQUFqQjtBQUF5QixhQUFTLEVBQUMsb0JBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsU0FBUyxHQUNSLE1BQUMsdURBQUQ7QUFBUyxZQUFRLE1BQWpCO0FBQWtCLFNBQUssRUFBQyxtR0FBeEI7QUFBNEMsYUFBUyxFQUFDLEtBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxTQURaO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxVQUFNLEVBQUMsY0FIVDtBQUlFLFdBQU8sRUFBQyxXQUpWO0FBS0UsU0FBSyxFQUFDLDRCQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRTtBQUNFLGlCQUFhLEVBQUMsT0FEaEI7QUFFRSxrQkFBYyxFQUFDLE9BRmpCO0FBR0UsZUFBVyxFQUFDLEdBSGQ7QUFJRSxLQUFDLEVBQUMsc1FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBREYsQ0FEUSxHQWtCUixNQUFDLHVEQUFEO0FBQVMsWUFBUSxNQUFqQjtBQUFrQixTQUFLLEVBQUMseUdBQXhCO0FBQTZDLGFBQVMsRUFBQyxLQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsU0FEWjtBQUVFLFFBQUksRUFBQyxNQUZQO0FBR0UsVUFBTSxFQUFDLGNBSFQ7QUFJRSxXQUFPLEVBQUMsV0FKVjtBQUtFLFNBQUssRUFBQyw0QkFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFDRSxpQkFBYSxFQUFDLE9BRGhCO0FBRUUsa0JBQWMsRUFBQyxPQUZqQjtBQUdFLGVBQVcsRUFBQyxHQUhkO0FBSUUsS0FBQyxFQUFDLGlDQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGLENBbkJKLENBREYsQ0FERixFQXdDRTtBQUFLLGFBQVMsRUFBQyxzRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLFFBREgsQ0F4Q0YsQ0FERjtBQThDRCxDQXJFRDs7R0FBTUwsRztVQUMwQkUsMEQ7OztLQUQxQkYsRzs7QUFnRlNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFmZjhhMzljYWJiOGI0MDQxOGI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gXCIuLi9ob29rcy91c2VUb2dnbGVcIjtcblxuY29uc3QgQXBwID0gKHsgcG9zdHMgPSBbXSB9KSA9PiB7XG4gIGNvbnN0IHsgaXNUb2dnbGVkLCB0b2dnbGUgfSA9IHVzZVRvZ2dsZSgpO1xuXG4gIGNvbnN0IHByZXZpZXdzID0gcG9zdHMubWFwKFxuICAgICh7XG4gICAgICBfaWQsXG4gICAgICB0aXRsZSA9IFwiXCIsXG4gICAgICBzdWJ0aXRsZSA9IFwiXCIsXG4gICAgICBzbHVnID0gXCJcIixcbiAgICAgIG1haW5JbWFnZSxcbiAgICAgIHB1Ymxpc2hlZEF0ID0gXCJcIixcbiAgICB9KSA9PiAoXG4gICAgICA8UG9zdENhcmRcbiAgICAgICAga2V5PXtfaWR9XG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICBtYWluSW1hZ2U9e21haW5JbWFnZX1cbiAgICAgICAgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fVxuICAgICAgLz5cbiAgICApXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gaC0xMCBweC0zMiBtdC02IGxnOmZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGV9IGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgIHtpc1RvZ2dsZWQgPyAoXG4gICAgICAgICAgICA8VG9vbHRpcCBoYXNBcnJvdyBsYWJlbD1cItC+0YLQvtCx0YDQsNC30LjRgtGMINGB0LXRgtC60L7QuVwiIHBsYWNlbWVudD1cInRvcFwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy04IGgtOFwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNCA2YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJWNnpNMTQgNmEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAyaC0yYTIgMiAwIDAxLTItMlY2ek00IDE2YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJ2LTJ6TTE0IDE2YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJoLTJhMiAyIDAgMDEtMi0ydi0yelwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUb29sdGlwIGhhc0Fycm93IGxhYmVsPVwi0L7RgtC+0LHRgNCw0LfQuNGC0Ywg0YHQv9C40YHQutC+0LxcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOCBoLThcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTQgNmgxNk00IDEwaDE2TTQgMTRoMTZNNCAxOGgxNlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiBncmlkIGdyaWQtY29scy0xIGdhcC02IGxnOmdyaWQtY29scy0yIGxnOm10LTIgbGc6bXgtMzIgeGw6Z3JpZC1jb2xzLTMgeGw6Z2FwLTEyXCI+XG4gICAgICAgIHtwcmV2aWV3c31cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=