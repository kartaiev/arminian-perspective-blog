webpackHotUpdate_N_E("pages/index", {
  /***/ "./pages/index.js":
    /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
    /*! exports provided: __N_SSG, default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (module) {
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__N_SSG",
          function () {
            return __N_SSG;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../components/layout/Layout */ "./components/layout/Layout.js"
        );
        /* harmony import */ var _components_posts_preview_PostGridCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../components/posts-preview/PostGridCard */ "./components/posts-preview/PostGridCard.js"
        );
        /* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../hooks/useToggle */ "./hooks/useToggle.js"
        );
        /* harmony import */ var _components_IconsBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/IconsBtn */ "./components/IconsBtn.js"
        );
        /* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../lib/icons */ "./lib/icons.js"
        );
        /* harmony import */ var _components_posts_preview_PostListCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../components/posts-preview/PostCard */ "./components/posts-preview/PostListCard.js"
        );
        /* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../hooks/useWindowWidth */ "./hooks/useWindowWidth.js"
        );
        var _this = undefined,
          _jsxFileName =
            "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\index.js",
          _s = $RefreshSig$();

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        var App = function App(_ref) {
          _s();

          var _ref$posts = _ref.posts,
            posts = _ref$posts === void 0 ? [] : _ref$posts;

          var _useToggle = Object(
              _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["useToggle"]
            )(),
            isToggled = _useToggle.isToggled,
            setToggle = _useToggle.setToggle,
            toggle = _useToggle.toggle;

          var width = Object(
            _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_7__["useWindowWidth"]
          )();
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
            function () {
              width <= 768 && setToggle(false);
            },
            [width]
          );
          var gridClass = isToggled
            ? "md:mx-16 lg:mx-16 xl:mx-64"
            : "ip:grid-cols-2 lg:grid-cols-2 lg:mt-2 lg:mx-16 xl:mx-64 xl:grid-cols-3 xl:gap-12";
          var previews = posts.map(function (_ref2) {
            var _id = _ref2._id,
              title = _ref2.title,
              subtitle = _ref2.subtitle,
              slug = _ref2.slug,
              mainImage = _ref2.mainImage,
              publishedAt = _ref2.publishedAt,
              body = _ref2.body;
            return isToggled
              ? __jsx(
                  _components_posts_preview_PostListCard__WEBPACK_IMPORTED_MODULE_6__[
                    "default"
                  ],
                  {
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
                      columnNumber: 9,
                    },
                  }
                )
              : __jsx(
                  _components_posts_preview_PostGridCard__WEBPACK_IMPORTED_MODULE_2__[
                    "default"
                  ],
                  {
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
                      columnNumber: 9,
                    },
                  }
                );
          });
          return __jsx(
            _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
            {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 5,
              },
            },
            __jsx(
              "div",
              {
                className:
                  "hidden h-10 mt-6 justify-start items-center lg:flex md:px-16 xl:px-64",
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 7,
                },
              },
              __jsx(
                _components_IconsBtn__WEBPACK_IMPORTED_MODULE_4__["default"],
                {
                  firstIcon:
                    _lib_icons__WEBPACK_IMPORTED_MODULE_5__["gridIcon"],
                  secondIcon:
                    _lib_icons__WEBPACK_IMPORTED_MODULE_5__["listIcon"],
                  isToggled: isToggled,
                  toggle: toggle,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 9,
                  },
                }
              )
            ),
            __jsx(
              "div",
              {
                className: "mb-6 grid grid-cols-1 gap-6 ".concat(gridClass),
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 7,
                },
              },
              previews
            )
          );
        };

        _s(App, "Ec4wMdjuD7cUPVrZcmC7Qk4aB1Y=", false, function () {
          return [
            _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["useToggle"],
            _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_7__[
              "useWindowWidth"
            ],
          ];
        });

        _c = App;
        var __N_SSG = true;
        /* harmony default export */ __webpack_exports__["default"] = App;

        var _c;

        $RefreshReg$(_c, "App");

        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (
          typeof self !== "undefined" &&
          // AMP / No-JS mode does not inject these helpers:
          "$RefreshHelpers$" in self
        ) {
          var currentExports = module.__proto__.exports;
          var prevExports =
            (_b =
              (_a = module.hot.data) === null || _a === void 0
                ? void 0
                : _a.prevExports) !== null && _b !== void 0
              ? _b
              : null;
          // This cannot happen in MainTemplate because the exports mismatch between
          // templating and execution.
          self.$RefreshHelpers$.registerExportsForReactRefresh(
            currentExports,
            module.i
          );
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
              if (
                self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                  prevExports,
                  currentExports
                )
              ) {
                module.hot.invalidate();
              } else {
                self.$RefreshHelpers$.scheduleUpdate();
              }
            }
          } else {
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

        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(
          /*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js"
        )(module)
      ));

      /***/
    },
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VUb2dnbGUiLCJpc1RvZ2dsZWQiLCJzZXRUb2dnbGUiLCJ0b2dnbGUiLCJ3aWR0aCIsInVzZVdpbmRvd1dpZHRoIiwidXNlRWZmZWN0IiwiZ3JpZENsYXNzIiwicHJldmlld3MiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInN1YnRpdGxlIiwic2x1ZyIsIm1haW5JbWFnZSIsInB1Ymxpc2hlZEF0IiwiYm9keSIsImdyaWRJY29uIiwibGlzdEljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQjtBQUFBOztBQUFBLHdCQUFqQkMsS0FBaUI7QUFBQSxNQUFqQkEsS0FBaUIsMkJBQVQsRUFBUzs7QUFBQSxtQkFDV0Msa0VBQVMsRUFEcEI7QUFBQSxNQUN0QkMsU0FEc0IsY0FDdEJBLFNBRHNCO0FBQUEsTUFDWEMsU0FEVyxjQUNYQSxTQURXO0FBQUEsTUFDQUMsTUFEQSxjQUNBQSxNQURBOztBQUc5QixNQUFNQyxLQUFLLEdBQUdDLDRFQUFjLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixTQUFLLElBQUksR0FBVCxJQUFnQkYsU0FBUyxDQUFDLEtBQUQsQ0FBekI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0UsS0FBRCxDQUZNLENBQVQ7QUFJQSxNQUFNRyxTQUFTLEdBQUdOLFNBQVMsR0FDdkIsNEJBRHVCLEdBRXZCLGtGQUZKO0FBSUEsTUFBTU8sUUFBUSxHQUFHVCxLQUFLLENBQUNVLEdBQU4sQ0FDZjtBQUFBLFFBQUdDLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFFBQVFDLEtBQVIsU0FBUUEsS0FBUjtBQUFBLFFBQWVDLFFBQWYsU0FBZUEsUUFBZjtBQUFBLFFBQXlCQyxJQUF6QixTQUF5QkEsSUFBekI7QUFBQSxRQUErQkMsU0FBL0IsU0FBK0JBLFNBQS9CO0FBQUEsUUFBMENDLFdBQTFDLFNBQTBDQSxXQUExQztBQUFBLFFBQXVEQyxJQUF2RCxTQUF1REEsSUFBdkQ7QUFBQSxXQUNFZixTQUFTLEdBQ1AsTUFBQyw4RUFBRDtBQUNFLFNBQUcsRUFBRVMsR0FEUDtBQUVFLFdBQUssRUFBRUMsS0FGVDtBQUdFLGNBQVEsRUFBRUMsUUFIWjtBQUlFLFVBQUksRUFBRUMsSUFKUjtBQUtFLGVBQVMsRUFBRUMsU0FMYjtBQU1FLGlCQUFXLEVBQUVDLFdBTmY7QUFPRSxVQUFJLEVBQUVDLElBUFI7QUFRRSxlQUFTLEVBQUVmLFNBUmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURPLEdBWVAsTUFBQyw4RUFBRDtBQUNFLFNBQUcsRUFBRVMsR0FEUDtBQUVFLFdBQUssRUFBRUMsS0FGVDtBQUdFLGNBQVEsRUFBRUMsUUFIWjtBQUlFLFVBQUksRUFBRUMsSUFKUjtBQUtFLGVBQVMsRUFBRUMsU0FMYjtBQU1FLGlCQUFXLEVBQUVDLFdBTmY7QUFPRSxlQUFTLEVBQUVkLFNBUGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWJKO0FBQUEsR0FEZSxDQUFqQjtBQTBCQSxTQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHVFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFFZ0IsbURBRGI7QUFFRSxjQUFVLEVBQUVDLG1EQUZkO0FBR0UsYUFBUyxFQUFFakIsU0FIYjtBQUlFLFVBQU0sRUFBRUUsTUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVNFO0FBQUssYUFBUyx3Q0FBaUNJLFNBQWpDLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxRQURILENBVEYsQ0FERjtBQWVELENBdEREOztHQUFNVixHO1VBQ3FDRSwwRCxFQUUzQkssb0U7OztLQUhWUCxHOztBQWlFU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDcwMmY1Yzc5ZTI0OWI2MWYyMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBQb3N0R3JpZENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMtcHJldmlldy9Qb3N0R3JpZENhcmRcIjtcblxuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xuXG5pbXBvcnQgSWNvbnNCdG4gZnJvbSBcIi4uL2NvbXBvbmVudHMvSWNvbnNCdG5cIjtcbmltcG9ydCB7IGdyaWRJY29uLCBsaXN0SWNvbiB9IGZyb20gXCIuLi9saWIvaWNvbnNcIjtcbmltcG9ydCBQb3N0TGlzdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMtcHJldmlldy9Qb3N0TGlzdENhcmRcIjtcbmltcG9ydCB7IHVzZVdpbmRvd1dpZHRoIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVdpbmRvd1dpZHRoXCI7XG5cbmNvbnN0IEFwcCA9ICh7IHBvc3RzID0gW10gfSkgPT4ge1xuICBjb25zdCB7IGlzVG9nZ2xlZCwgc2V0VG9nZ2xlLCB0b2dnbGUgfSA9IHVzZVRvZ2dsZSgpO1xuXG4gIGNvbnN0IHdpZHRoID0gdXNlV2luZG93V2lkdGgoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpZHRoIDw9IDc2OCAmJiBzZXRUb2dnbGUoZmFsc2UpO1xuICB9LCBbd2lkdGhdKTtcblxuICBjb25zdCBncmlkQ2xhc3MgPSBpc1RvZ2dsZWRcbiAgICA/IFwibWQ6bXgtMTYgbGc6bXgtMTYgeGw6bXgtNjRcIlxuICAgIDogXCJpcDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMiBsZzptdC0yIGxnOm14LTE2IHhsOm14LTY0IHhsOmdyaWQtY29scy0zIHhsOmdhcC0xMlwiO1xuXG4gIGNvbnN0IHByZXZpZXdzID0gcG9zdHMubWFwKFxuICAgICh7IF9pZCwgdGl0bGUsIHN1YnRpdGxlLCBzbHVnLCBtYWluSW1hZ2UsIHB1Ymxpc2hlZEF0LCBib2R5IH0pID0+XG4gICAgICBpc1RvZ2dsZWQgPyAoXG4gICAgICAgIDxQb3N0TGlzdENhcmRcbiAgICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgICAgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fVxuICAgICAgICAgIGJvZHk9e2JvZHl9XG4gICAgICAgICAgaXNUb2dnbGVkPXtpc1RvZ2dsZWR9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8UG9zdEdyaWRDYXJkXG4gICAgICAgICAga2V5PXtfaWR9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgIG1haW5JbWFnZT17bWFpbkltYWdlfVxuICAgICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgICAgICAgICBpc1RvZ2dsZWQ9e2lzVG9nZ2xlZH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBoLTEwIG10LTYganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbGc6ZmxleCBtZDpweC0xNiB4bDpweC02NFwiPlxuICAgICAgICA8SWNvbnNCdG5cbiAgICAgICAgICBmaXJzdEljb249e2dyaWRJY29ufVxuICAgICAgICAgIHNlY29uZEljb249e2xpc3RJY29ufVxuICAgICAgICAgIGlzVG9nZ2xlZD17aXNUb2dnbGVkfVxuICAgICAgICAgIHRvZ2dsZT17dG9nZ2xlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG1iLTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiAke2dyaWRDbGFzc31gfT5cbiAgICAgICAge3ByZXZpZXdzfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
