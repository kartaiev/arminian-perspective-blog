webpackHotUpdate_N_E("pages/index", {
  /***/ "./components/posts-prevew/GridListBtn.js":
    /*!************************************************!*\
  !*** ./components/posts-preview/IconsBtn.js ***!
  \************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (module) {
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js"
        );
        /* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js"
        );
        /* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../hooks/useToggle */ "./hooks/useToggle.js"
        );
        /* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../lib/icons */ "./lib/icons.js"
        );
        var _this = undefined,
          _jsxFileName =
            "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\posts-preview\\IconsBtn.js",
          _s = $RefreshSig$();

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        var GridListBtn = function GridListBtn() {
          _s();

          var _useToggle = Object(
              _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["useToggle"]
            )(),
            isToggled = _useToggle.isToggled,
            toggle = _useToggle.toggle;

          return __jsx(
            framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].button,
            {
              whileHover: {
                scale: 1.2,
              },
              onClick: toggle,
              className: "focus:outline-none",
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 5,
              },
            },
            isToggled
              ? __jsx(
                  _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"],
                  {
                    hasArrow: true,
                    bg: "gray.600",
                    label:
                      "\u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u0441\u0435\u0442\u043A\u043E\u0439",
                    placement: "top",
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17,
                      columnNumber: 9,
                    },
                  },
                  _lib_icons__WEBPACK_IMPORTED_MODULE_4__["gridIcon"]
                )
              : __jsx(
                  _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"],
                  {
                    hasArrow: true,
                    bg: "gray.600",
                    label:
                      "\u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043A\u043E\u043C",
                    placement: "top",
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26,
                      columnNumber: 9,
                    },
                  },
                  _lib_icons__WEBPACK_IMPORTED_MODULE_4__["listIcon"]
                )
          );
        };

        _s(GridListBtn, "YnTxiDSHocyVV9znCwOPuyEY9zA=", false, function () {
          return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["useToggle"]];
        });

        _c = GridListBtn;
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = GridListBtn;

        var _c;

        $RefreshReg$(_c, "GridListBtn");

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
          /*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js"
        )(module)
      ));

      /***/
    },

  /***/ "./lib/icons.js":
    /*!**********************!*\
  !*** ./lib/icons.js ***!
  \**********************/
    /*! exports provided: gridIcon, listIcon */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (module) {
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "gridIcon",
          function () {
            return gridIcon;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "listIcon",
          function () {
            return listIcon;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        var _jsxFileName =
          "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\lib\\icons.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        var gridIcon = __jsx(
          "svg",
          {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 4,
              columnNumber: 3,
            },
          },
          __jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d:
              "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 5,
            },
          })
        );
        var listIcon = __jsx(
          "svg",
          {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 3,
            },
          },
          __jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 6h16M4 10h16M4 14h16M4 18h16",
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 5,
            },
          })
        );

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
        /* harmony import */ var _components_posts_prevew_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../components/posts-preview/PostGridCard */ "./components/posts-prevew/PostCard.js"
        );
        /* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js"
        );
        /* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../hooks/useToggle */ "./hooks/useToggle.js"
        );
        /* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js"
        );
        /* harmony import */ var _components_posts_prevew_GridListBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../components/posts-preview/IconsBtn */ "./components/posts-prevew/GridListBtn.js"
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
              _hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__["useToggle"]
            )(),
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
              publishedAt =
                _ref2$publishedAt === void 0 ? "" : _ref2$publishedAt;
            return __jsx(
              _components_posts_prevew_PostCard__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ],
              {
                key: _id,
                title: title,
                subtitle: subtitle,
                slug: slug,
                mainImage: mainImage,
                publishedAt: publishedAt,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 7,
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
                lineNumber: 34,
                columnNumber: 5,
              },
            },
            __jsx(
              "div",
              {
                className:
                  "hidden h-10 lg:px-16 xl:px-48 mt-6 lg:flex justify-start items-center",
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 7,
                },
              },
              __jsx(
                _components_posts_prevew_GridListBtn__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 9,
                  },
                }
              )
            ),
            __jsx(
              "div",
              {
                className:
                  "mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:mt-2 lg:mx-16 xl:mx-48 xl:grid-cols-3 xl:gap-12",
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 7,
                },
              },
              previews
            )
          );
        };

        _s(App, "YnTxiDSHocyVV9znCwOPuyEY9zA=", false, function () {
          return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__["useToggle"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2ZXcvR3JpZExpc3RCdG4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9pY29ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZExpc3RCdG4iLCJ1c2VUb2dnbGUiLCJpc1RvZ2dsZWQiLCJ0b2dnbGUiLCJzY2FsZSIsImdyaWRJY29uIiwibGlzdEljb24iLCJBcHAiLCJwb3N0cyIsInByZXZpZXdzIiwibWFwIiwiX2lkIiwidGl0bGUiLCJzdWJ0aXRsZSIsInNsdWciLCJtYWluSW1hZ2UiLCJwdWJsaXNoZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLG1CQUNNQyxrRUFBUyxFQURmO0FBQUEsTUFDaEJDLFNBRGdCLGNBQ2hCQSxTQURnQjtBQUFBLE1BQ0xDLE1BREssY0FDTEEsTUFESzs7QUFHeEIsU0FDRSxNQUFDLG9EQUFELENBQVEsTUFBUjtBQUNFLGNBQVUsRUFBRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQURkO0FBRUUsV0FBTyxFQUFFRCxNQUZYO0FBR0UsYUFBUyxFQUFDLG9CQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR0QsU0FBUyxHQUNSLE1BQUMsdURBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxNQUFFLEVBQUMsVUFGTDtBQUdFLFNBQUssRUFBQyxtR0FIUjtBQUlFLGFBQVMsRUFBQyxLQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR0csbURBTkgsQ0FEUSxHQVVSLE1BQUMsdURBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxNQUFFLEVBQUMsVUFGTDtBQUdFLFNBQUssRUFBQyx5R0FIUjtBQUlFLGFBQVMsRUFB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QUFBLEtBQ0dQLFFBREgsQ0FKRixDQURGO0FBVUQsQ0FqQ0Q7O0dBQU1GLEc7VUFDMEJOLDBEOzs7S0FEMUJNLEc7O0FBNENTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZWNhNjgxN2M4MDllYjc5NGNkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlVG9nZ2xlXCI7XG5pbXBvcnQgeyBncmlkSWNvbiwgbGlzdEljb24gfSBmcm9tIFwiLi4vLi4vbGliL2ljb25zXCI7XG5cbmNvbnN0IEdyaWRMaXN0QnRuID0gKCkgPT4ge1xuICBjb25zdCB7IGlzVG9nZ2xlZCwgdG9nZ2xlIH0gPSB1c2VUb2dnbGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZX1cbiAgICAgIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgPlxuICAgICAge2lzVG9nZ2xlZCA/IChcbiAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICBoYXNBcnJvd1xuICAgICAgICAgIGJnPVwiZ3JheS42MDBcIlxuICAgICAgICAgIGxhYmVsPVwi0L7RgtC+0LHRgNCw0LfQuNGC0Ywg0YHQtdGC0LrQvtC5XCJcbiAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICA+XG4gICAgICAgICAge2dyaWRJY29ufVxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICApIDogKFxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIGhhc0Fycm93XG4gICAgICAgICAgYmc9XCJncmF5LjYwMFwiXG4gICAgICAgICAgbGFiZWw9XCLQvtGC0L7QsdGA0LDQt9C40YLRjCDRgdC/0LjRgdC60L7QvFwiXG4gICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtsaXN0SWNvbn1cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgKX1cbiAgICA8L21vdGlvbi5idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkTGlzdEJ0bjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IGdyaWRJY29uID0gKFxuICA8c3ZnXG4gICAgY2xhc3NOYW1lPVwidy04IGgtOFwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgIGQ9XCJNNCA2YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJWNnpNMTQgNmEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAyaC0yYTIgMiAwIDAxLTItMlY2ek00IDE2YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJ2LTJ6TTE0IDE2YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJoLTJhMiAyIDAgMDEtMi0ydi0yelwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgbGlzdEljb24gPSAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9XCJ3LTggaC04XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgZD1cIk00IDZoMTZNNCAxMGgxNk00IDE0aDE2TTQgMThoMTZcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3Bvc3RzLXByZXZldy9Qb3N0Q2FyZFwiO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gXCIuLi9ob29rcy91c2VUb2dnbGVcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgR3JpZExpc3RCdG4gZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMtcHJldmV3L0dyaWRMaXN0QnRuXCI7XG5cbmNvbnN0IEFwcCA9ICh7IHBvc3RzID0gW10gfSkgPT4ge1xuICBjb25zdCB7IGlzVG9nZ2xlZCwgdG9nZ2xlIH0gPSB1c2VUb2dnbGUoKTtcblxuICBjb25zdCBwcmV2aWV3cyA9IHBvc3RzLm1hcChcbiAgICAoe1xuICAgICAgX2lkLFxuICAgICAgdGl0bGUgPSBcIlwiLFxuICAgICAgc3VidGl0bGUgPSBcIlwiLFxuICAgICAgc2x1ZyA9IFwiXCIsXG4gICAgICBtYWluSW1hZ2UsXG4gICAgICBwdWJsaXNoZWRBdCA9IFwiXCIsXG4gICAgfSkgPT4gKFxuICAgICAgPFBvc3RDYXJkXG4gICAgICAgIGtleT17X2lkfVxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgICAgIC8+XG4gICAgKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGgtMTAgbGc6cHgtMTYgeGw6cHgtNDggbXQtNiBsZzpmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxHcmlkTGlzdEJ0biAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiBsZzpncmlkLWNvbHMtMiBsZzptdC0yIGxnOm14LTE2IHhsOm14LTQ4IHhsOmdyaWQtY29scy0zIHhsOmdhcC0xMlwiPlxuICAgICAgICB7cHJldmlld3N9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9
