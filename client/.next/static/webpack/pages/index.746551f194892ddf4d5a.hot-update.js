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
/* harmony import */ var _components_posts_preview_PostGridCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/posts-preview/PostGridCard */ "./components/posts-preview/PostGridCard.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _components_IconsBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/IconsBtn */ "./components/IconsBtn.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/icons */ "./lib/icons.js");
/* harmony import */ var _components_posts_preview_PostListCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/posts-preview/PostListCard */ "./components/posts-preview/PostListCard.js");
/* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useWindowWidth */ "./hooks/useWindowWidth.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var App = function App(_ref) {
  _s();

  var _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? [] : _ref$posts;

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["useToggle"])(),
      isToggled = _useToggle.isToggled,
      setToggle = _useToggle.setToggle,
      toggle = _useToggle.toggle;

  var width = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_7__["useWindowWidth"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    width < 768 && setToggle(false);
  }, [width, isToggled]);
  var gridClass = isToggled ? "lg:px-16 xl:mx-64" : "lg:grid-cols-2 lg:mt-2 lg:mx-16 xl:mx-64 xl:grid-cols-3 xl:gap-12";
  var previews = posts.map(function (_ref2) {
    var _id = _ref2._id,
        title = _ref2.title,
        subtitle = _ref2.subtitle,
        slug = _ref2.slug,
        mainImage = _ref2.mainImage,
        publishedAt = _ref2.publishedAt,
        body = _ref2.body;
    return isToggled ? __jsx(_components_posts_preview_PostListCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: _id,
      title: title,
      subtitle: subtitle,
      slug: slug,
      mainImage: mainImage,
      publishedAt: publishedAt,
      body: body,
      isToggled: isToggled,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }) : __jsx(_components_posts_preview_PostGridCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: _id,
      title: title,
      subtitle: subtitle,
      slug: slug,
      mainImage: mainImage,
      publishedAt: publishedAt,
      isToggled: isToggled,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    });
  });
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hidden h-10 mt-6 justify-start items-center lg:flex lg:px-16 xl:px-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_components_IconsBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    firstIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_5__["gridIcon"],
    secondIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_5__["listIcon"],
    isToggled: isToggled,
    toggle: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6 ".concat(gridClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, previews));
};

_s(App, "Ec4wMdjuD7cUPVrZcmC7Qk4aB1Y=", false, function () {
  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["useToggle"], _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_7__["useWindowWidth"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VUb2dnbGUiLCJpc1RvZ2dsZWQiLCJzZXRUb2dnbGUiLCJ0b2dnbGUiLCJ3aWR0aCIsInVzZVdpbmRvd1dpZHRoIiwidXNlRWZmZWN0IiwiZ3JpZENsYXNzIiwicHJldmlld3MiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInN1YnRpdGxlIiwic2x1ZyIsIm1haW5JbWFnZSIsInB1Ymxpc2hlZEF0IiwiYm9keSIsImdyaWRJY29uIiwibGlzdEljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQjtBQUFBOztBQUFBLHdCQUFqQkMsS0FBaUI7QUFBQSxNQUFqQkEsS0FBaUIsMkJBQVQsRUFBUzs7QUFBQSxtQkFDV0Msa0VBQVMsRUFEcEI7QUFBQSxNQUN0QkMsU0FEc0IsY0FDdEJBLFNBRHNCO0FBQUEsTUFDWEMsU0FEVyxjQUNYQSxTQURXO0FBQUEsTUFDQUMsTUFEQSxjQUNBQSxNQURBOztBQUc5QixNQUFNQyxLQUFLLEdBQUdDLDRFQUFjLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixTQUFLLEdBQUcsR0FBUixJQUFlRixTQUFTLENBQUMsS0FBRCxDQUF4QjtBQUNELEdBRlEsRUFFTixDQUFDRSxLQUFELEVBQVFILFNBQVIsQ0FGTSxDQUFUO0FBSUEsTUFBTU0sU0FBUyxHQUFHTixTQUFTLEdBQ3ZCLG1CQUR1QixHQUV2QixtRUFGSjtBQUlBLE1BQU1PLFFBQVEsR0FBR1QsS0FBSyxDQUFDVSxHQUFOLENBQ2Y7QUFBQSxRQUFHQyxHQUFILFNBQUdBLEdBQUg7QUFBQSxRQUFRQyxLQUFSLFNBQVFBLEtBQVI7QUFBQSxRQUFlQyxRQUFmLFNBQWVBLFFBQWY7QUFBQSxRQUF5QkMsSUFBekIsU0FBeUJBLElBQXpCO0FBQUEsUUFBK0JDLFNBQS9CLFNBQStCQSxTQUEvQjtBQUFBLFFBQTBDQyxXQUExQyxTQUEwQ0EsV0FBMUM7QUFBQSxRQUF1REMsSUFBdkQsU0FBdURBLElBQXZEO0FBQUEsV0FDRWYsU0FBUyxHQUNQLE1BQUMsOEVBQUQ7QUFDRSxTQUFHLEVBQUVTLEdBRFA7QUFFRSxXQUFLLEVBQUVDLEtBRlQ7QUFHRSxjQUFRLEVBQUVDLFFBSFo7QUFJRSxVQUFJLEVBQUVDLElBSlI7QUFLRSxlQUFTLEVBQUVDLFNBTGI7QUFNRSxpQkFBVyxFQUFFQyxXQU5mO0FBT0UsVUFBSSxFQUFFQyxJQVBSO0FBUUUsZUFBUyxFQUFFZixTQVJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFETyxHQVlQLE1BQUMsOEVBQUQ7QUFDRSxTQUFHLEVBQUVTLEdBRFA7QUFFRSxXQUFLLEVBQUVDLEtBRlQ7QUFHRSxjQUFRLEVBQUVDLFFBSFo7QUFJRSxVQUFJLEVBQUVDLElBSlI7QUFLRSxlQUFTLEVBQUVDLFNBTGI7QUFNRSxpQkFBVyxFQUFFQyxXQU5mO0FBT0UsZUFBUyxFQUFFZCxTQVBiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFiSjtBQUFBLEdBRGUsQ0FBakI7QUEwQkEsU0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx1RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUNFLGFBQVMsRUFBRWdCLG1EQURiO0FBRUUsY0FBVSxFQUFFQyxtREFGZDtBQUdFLGFBQVMsRUFBRWpCLFNBSGI7QUFJRSxVQUFNLEVBQUVFLE1BSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFTRTtBQUFLLGFBQVMsd0NBQWlDSSxTQUFqQyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsUUFESCxDQVRGLENBREY7QUFlRCxDQXRERDs7R0FBTVYsRztVQUNxQ0UsMEQsRUFFM0JLLG9FOzs7S0FIVlAsRzs7QUFpRVNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc0NjU1MWYxOTQ4OTJkZGY0ZDVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgUG9zdEdyaWRDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3Bvc3RzLXByZXZpZXcvUG9zdEdyaWRDYXJkXCI7XG5cbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gXCIuLi9ob29rcy91c2VUb2dnbGVcIjtcblxuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9jb21wb25lbnRzL0ljb25zQnRuXCI7XG5pbXBvcnQgeyBncmlkSWNvbiwgbGlzdEljb24gfSBmcm9tIFwiLi4vbGliL2ljb25zXCI7XG5pbXBvcnQgUG9zdExpc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3Bvc3RzLXByZXZpZXcvUG9zdExpc3RDYXJkXCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dXaWR0aCB9IGZyb20gXCIuLi9ob29rcy91c2VXaW5kb3dXaWR0aFwiO1xuXG5jb25zdCBBcHAgPSAoeyBwb3N0cyA9IFtdIH0pID0+IHtcbiAgY29uc3QgeyBpc1RvZ2dsZWQsIHNldFRvZ2dsZSwgdG9nZ2xlIH0gPSB1c2VUb2dnbGUoKTtcblxuICBjb25zdCB3aWR0aCA9IHVzZVdpbmRvd1dpZHRoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aWR0aCA8IDc2OCAmJiBzZXRUb2dnbGUoZmFsc2UpO1xuICB9LCBbd2lkdGgsIGlzVG9nZ2xlZF0pO1xuXG4gIGNvbnN0IGdyaWRDbGFzcyA9IGlzVG9nZ2xlZFxuICAgID8gXCJsZzpweC0xNiB4bDpteC02NFwiXG4gICAgOiBcImxnOmdyaWQtY29scy0yIGxnOm10LTIgbGc6bXgtMTYgeGw6bXgtNjQgeGw6Z3JpZC1jb2xzLTMgeGw6Z2FwLTEyXCI7XG5cbiAgY29uc3QgcHJldmlld3MgPSBwb3N0cy5tYXAoXG4gICAgKHsgX2lkLCB0aXRsZSwgc3VidGl0bGUsIHNsdWcsIG1haW5JbWFnZSwgcHVibGlzaGVkQXQsIGJvZHkgfSkgPT5cbiAgICAgIGlzVG9nZ2xlZCA/IChcbiAgICAgICAgPFBvc3RMaXN0Q2FyZFxuICAgICAgICAgIGtleT17X2lkfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgICBtYWluSW1hZ2U9e21haW5JbWFnZX1cbiAgICAgICAgICBwdWJsaXNoZWRBdD17cHVibGlzaGVkQXR9XG4gICAgICAgICAgYm9keT17Ym9keX1cbiAgICAgICAgICBpc1RvZ2dsZWQ9e2lzVG9nZ2xlZH1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxQb3N0R3JpZENhcmRcbiAgICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgICAgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fVxuICAgICAgICAgIGlzVG9nZ2xlZD17aXNUb2dnbGVkfVxuICAgICAgICAvPlxuICAgICAgKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGgtMTAgbXQtNiBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBsZzpmbGV4IGxnOnB4LTE2IHhsOnB4LTY0XCI+XG4gICAgICAgIDxJY29uc0J0blxuICAgICAgICAgIGZpcnN0SWNvbj17Z3JpZEljb259XG4gICAgICAgICAgc2Vjb25kSWNvbj17bGlzdEljb259XG4gICAgICAgICAgaXNUb2dnbGVkPXtpc1RvZ2dsZWR9XG4gICAgICAgICAgdG9nZ2xlPXt0b2dnbGV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWItNiBncmlkIGdyaWQtY29scy0xIGdhcC02ICR7Z3JpZENsYXNzfWB9PlxuICAgICAgICB7cHJldmlld3N9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9