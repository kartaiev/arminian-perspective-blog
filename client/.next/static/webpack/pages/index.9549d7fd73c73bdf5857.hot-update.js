webpackHotUpdate_N_E("pages/index", {
  /***/ "./components/IconsBtn.js":
    /*!********************************!*\
  !*** ./components/IconsBtn.js ***!
  \********************************/
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
          /*! ../hooks/useToggle */ "./hooks/useToggle.js"
        );
        var _this = undefined,
          _jsxFileName =
            "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\IconsBtn.js",
          _s = $RefreshSig$();

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        var IconsBtn = function IconsBtn(_ref) {
          _s();

          var firstIcon = _ref.firstIcon,
            secondIcon = _ref.secondIcon;

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
                lineNumber: 10,
                columnNumber: 5,
              },
            },
            isToggled
              ? __jsx(
                  _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"],
                  {
                    hasArrow: true,
                    label:
                      "\u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u0441\u0435\u0442\u043A\u043E\u0439",
                    placement: "top",
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16,
                      columnNumber: 9,
                    },
                  },
                  firstIcon
                )
              : __jsx(
                  _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"],
                  {
                    hasArrow: true,
                    label:
                      "\u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043A\u043E\u043C",
                    placement: "top",
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 20,
                      columnNumber: 9,
                    },
                  },
                  secondIcon
                )
          );
        };

        _s(IconsBtn, "YnTxiDSHocyVV9znCwOPuyEY9zA=", false, function () {
          return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["useToggle"]];
        });

        _c = IconsBtn;
        /* harmony default export */ __webpack_exports__["default"] = IconsBtn;

        var _c;

        $RefreshReg$(_c, "IconsBtn");

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
        /* harmony import */ var _components_posts_preview_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../components/posts-preview/PostGridCard */ "./components/posts-preview/PostCard.js"
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
        /* harmony import */ var _components_IconsBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../components/IconsBtn */ "./components/IconsBtn.js"
        );
        /* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../lib/icons */ "./lib/icons.js"
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
              _components_posts_preview_PostCard__WEBPACK_IMPORTED_MODULE_2__[
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
                  lineNumber: 23,
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
                lineNumber: 35,
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
                  lineNumber: 36,
                  columnNumber: 7,
                },
              },
              __jsx(
                _components_IconsBtn__WEBPACK_IMPORTED_MODULE_6__["default"],
                {
                  firstIcon:
                    _lib_icons__WEBPACK_IMPORTED_MODULE_7__["gridIcon"],
                  secondIcon:
                    _lib_icons__WEBPACK_IMPORTED_MODULE_7__["listIcon"],
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37,
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
                  lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JY29uc0J0bi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSWNvbnNCdG4iLCJmaXJzdEljb24iLCJzZWNvbmRJY29uIiwidXNlVG9nZ2xlIiwiaXNUb2dnbGVkIiwidG9nZ2xlIiwic2NhbGUiLCJBcHAiLCJwb3N0cyIsInByZXZpZXdzIiwibWFwIiwiX2lkIiwidGl0bGUiLCJzdWJ0aXRsZSIsInNsdWciLCJtYWluSW1hZ2UiLCJwdWJsaXNoZWRBdCIsImdyaWRJY29uIiwibGlzdEljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLFNBQTRCLFFBQTVCQSxTQUE0QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsbUJBQ2hCQyxrRUFBUyxFQURPO0FBQUEsTUFDdENDLFNBRHNDLGNBQ3RDQSxTQURzQztBQUFBLE1BQzNCQyxNQUQyQixjQUMzQkEsTUFEMkI7O0FBRzlDLFNBQ0UsTUFBQyxvREFBRCxDQUFRLE1BQVI7QUFDRSxjQUFVLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FEZDtBQUVFLFdBQU8sRUFBRUQsTUFGWDtBQUdFLGFBQVMsRUFBQyxvQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dELFNBQVMsR0FDUixNQUFDLHVEQUFEO0FBQVMsWUFBUSxNQUFqQjtBQUFrQixTQUFLLEVBQUMsbUdBQXhCO0FBQTRDLGFBQVMsRUFBQyxLQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILFNBREgsQ0FEUSxHQUtSLE1BQUMsdURBQUQ7QUFBUyxZQUFRLE1BQWpCO0FBQWtCLFNBQUssRUFBQyx5R0FBeEI7QUFBNkMsYUFBUyxFQUFDLEtBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsVUFESCxDQVZKLENBREY7QUFpQkQsQ0FwQkQ7O0dBQU1GLFE7VUFDMEJHLDBEOzs7S0FEMUJILFE7QUFzQlNBLHVFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1PLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQW9CO0FBQUE7O0FBQUEsd0JBQWpCQyxLQUFpQjtBQUFBLE1BQWpCQSxLQUFpQiwyQkFBVCxFQUFTOztBQUFBLG1CQUNBTCxrRUFBUyxFQURUO0FBQUEsTUFDdEJDLFNBRHNCLGNBQ3RCQSxTQURzQjtBQUFBLE1BQ1hDLE1BRFcsY0FDWEEsTUFEVzs7QUFHOUIsTUFBTUksUUFBUSxHQUFHRCxLQUFLLENBQUNFLEdBQU4sQ0FDZjtBQUFBLFFBQ0VDLEdBREYsU0FDRUEsR0FERjtBQUFBLDRCQUVFQyxLQUZGO0FBQUEsUUFFRUEsS0FGRiw0QkFFVSxFQUZWO0FBQUEsK0JBR0VDLFFBSEY7QUFBQSxRQUdFQSxRQUhGLCtCQUdhLEVBSGI7QUFBQSwyQkFJRUMsSUFKRjtBQUFBLFFBSUVBLElBSkYsMkJBSVMsRUFKVDtBQUFBLFFBS0VDLFNBTEYsU0FLRUEsU0FMRjtBQUFBLGtDQU1FQyxXQU5GO0FBQUEsUUFNRUEsV0FORixrQ0FNZ0IsRUFOaEI7QUFBQSxXQVFFLE1BQUMsMEVBQUQ7QUFDRSxTQUFHLEVBQUVMLEdBRFA7QUFFRSxXQUFLLEVBQUVDLEtBRlQ7QUFHRSxjQUFRLEVBQUVDLFFBSFo7QUFJRSxVQUFJLEVBQUVDLElBSlI7QUFLRSxlQUFTLEVBQUVDLFNBTGI7QUFNRSxpQkFBVyxFQUFFQyxXQU5mO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSRjtBQUFBLEdBRGUsQ0FBakI7QUFvQkEsU0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx1RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFVLGFBQVMsRUFBRUMsbURBQXJCO0FBQStCLGNBQVUsRUFBRUMsbURBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsK0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVCxRQURILENBSkYsQ0FERjtBQVVELENBakNEOztHQUFNRixHO1VBQzBCSiwwRDs7O0tBRDFCSSxHOztBQTRDU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTU0OWQ3ZmQ3M2M3M2JkZjU4NTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xuXG5jb25zdCBJY29uc0J0biA9ICh7IGZpcnN0SWNvbiwgc2Vjb25kSWNvbiB9KSA9PiB7XG4gIGNvbnN0IHsgaXNUb2dnbGVkLCB0b2dnbGUgfSA9IHVzZVRvZ2dsZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5idXR0b25cbiAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMiB9fVxuICAgICAgb25DbGljaz17dG9nZ2xlfVxuICAgICAgY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICA+XG4gICAgICB7aXNUb2dnbGVkID8gKFxuICAgICAgICA8VG9vbHRpcCBoYXNBcnJvdyBsYWJlbD1cItC+0YLQvtCx0YDQsNC30LjRgtGMINGB0LXRgtC60L7QuVwiIHBsYWNlbWVudD1cInRvcFwiPlxuICAgICAgICAgIHtmaXJzdEljb259XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxUb29sdGlwIGhhc0Fycm93IGxhYmVsPVwi0L7RgtC+0LHRgNCw0LfQuNGC0Ywg0YHQv9C40YHQutC+0LxcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cbiAgICAgICAgICB7c2Vjb25kSWNvbn1cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgKX1cbiAgICA8L21vdGlvbi5idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uc0J0bjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3Bvc3RzLXByZXZpZXcvUG9zdENhcmRcIjtcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tIFwiLi4vaG9va3MvdXNlVG9nZ2xlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9jb21wb25lbnRzL0ljb25zQnRuXCI7XG5pbXBvcnQgeyBncmlkSWNvbiwgbGlzdEljb24gfSBmcm9tIFwiLi4vbGliL2ljb25zXCI7XG5cbmNvbnN0IEFwcCA9ICh7IHBvc3RzID0gW10gfSkgPT4ge1xuICBjb25zdCB7IGlzVG9nZ2xlZCwgdG9nZ2xlIH0gPSB1c2VUb2dnbGUoKTtcblxuICBjb25zdCBwcmV2aWV3cyA9IHBvc3RzLm1hcChcbiAgICAoe1xuICAgICAgX2lkLFxuICAgICAgdGl0bGUgPSBcIlwiLFxuICAgICAgc3VidGl0bGUgPSBcIlwiLFxuICAgICAgc2x1ZyA9IFwiXCIsXG4gICAgICBtYWluSW1hZ2UsXG4gICAgICBwdWJsaXNoZWRBdCA9IFwiXCIsXG4gICAgfSkgPT4gKFxuICAgICAgPFBvc3RDYXJkXG4gICAgICAgIGtleT17X2lkfVxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgICAgIC8+XG4gICAgKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGgtMTAgbGc6cHgtMTYgeGw6cHgtNDggbXQtNiBsZzpmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxJY29uc0J0biBmaXJzdEljb249e2dyaWRJY29ufSBzZWNvbmRJY29uPXtsaXN0SWNvbn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTYgbGc6Z3JpZC1jb2xzLTIgbGc6bXQtMiBsZzpteC0xNiB4bDpteC00OCB4bDpncmlkLWNvbHMtMyB4bDpnYXAtMTJcIj5cbiAgICAgICAge3ByZXZpZXdzfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
