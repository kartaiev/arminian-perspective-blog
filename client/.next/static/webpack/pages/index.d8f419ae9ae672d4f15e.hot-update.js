webpackHotUpdate_N_E("pages/index", {
  /***/ "./components/posts-preview/PostCard.js":
    /*!**********************************************!*\
  !*** ./components/posts-preview/PostGridCard.js ***!
  \**********************************************/
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
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/link */ "./node_modules/next/link.js"
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _single_post_PostCover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../single-post/PostCover */ "./components/single-post/PostCover.js"
        );
        /* harmony import */ var _single_post_PostAuthorDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../single-post/PostAuthorDate */ "./components/single-post/PostAuthorDate.js"
        );
        /* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js"
        );
        var _this = undefined,
          _jsxFileName =
            "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\posts-preview\\PostGridCard.js";

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        var PostCard = function PostCard(_ref) {
          var slug = _ref.slug,
            publishedAt = _ref.publishedAt,
            mainImage = _ref.mainImage,
            title = _ref.title,
            subtitle = _ref.subtitle;
          var variants = {
            hover: {
              scale: 1.03,
              boxShadow: "0 5px 10px rgba(0,0,0,.5)",
              transition: {
                ease: "easeOut",
              },
            },
            off: {
              scale: 1,
            },
          };
          return (
            slug &&
            __jsx(
              next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
              {
                href: "/post/[slug]",
                as: "/post/".concat(slug.current),
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 7,
                },
              },
              __jsx(
                framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].a,
                {
                  whileHover: "hover",
                  variants: variants,
                  className:
                    "mt-6 border border-gray-400 rounded-lg overflow-hidden",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 9,
                  },
                },
                mainImage &&
                  __jsx(
                    _single_post_PostCover__WEBPACK_IMPORTED_MODULE_2__[
                      "default"
                    ],
                    {
                      mainImage: mainImage,
                      title: title,
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24,
                        columnNumber: 25,
                      },
                    }
                  ),
                __jsx(
                  "div",
                  {
                    className: " p-4 lg:p-6",
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "h1",
                    {
                      className: "font-bold text-gray-800 text-2xl",
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26,
                        columnNumber: 13,
                      },
                    },
                    title
                  ),
                  __jsx(
                    "h2",
                    {
                      className: "font-semibold text-gray-800 my-6",
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27,
                        columnNumber: 13,
                      },
                    },
                    subtitle
                  ),
                  __jsx(
                    _single_post_PostAuthorDate__WEBPACK_IMPORTED_MODULE_3__[
                      "default"
                    ],
                    {
                      secondProp: "",
                      publishedAt: publishedAt,
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28,
                        columnNumber: 13,
                      },
                    }
                  )
                )
              )
            )
          );
        };

        _c = PostCard;
        /* harmony default export */ __webpack_exports__["default"] = PostCard;

        var _c;

        $RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RDYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInNsdWciLCJwdWJsaXNoZWRBdCIsIm1haW5JbWFnZSIsInRpdGxlIiwic3VidGl0bGUiLCJ2YXJpYW50cyIsImhvdmVyIiwic2NhbGUiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwiZWFzZSIsIm9mZiIsImN1cnJlbnQiLCJBcHAiLCJwb3N0cyIsInVzZVRvZ2dsZSIsImlzVG9nZ2xlZCIsInRvZ2dsZSIsInByZXZpZXdzIiwibWFwIiwiX2lkIiwiZ3JpZEljb24iLCJsaXN0SWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBdUQ7QUFBQSxNQUFwREMsSUFBb0QsUUFBcERBLElBQW9EO0FBQUEsTUFBOUNDLFdBQThDLFFBQTlDQSxXQUE4QztBQUFBLE1BQWpDQyxTQUFpQyxRQUFqQ0EsU0FBaUM7QUFBQSxNQUF0QkMsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3RFLE1BQU1DLFFBQVEsR0FBRztBQUNmQyxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFLElBREY7QUFFTEMsZUFBUyxFQUFFLDJCQUZOO0FBR0xDLGdCQUFVLEVBQUU7QUFBRUMsWUFBSSxFQUFFO0FBQVI7QUFIUCxLQURRO0FBTWZDLE9BQUcsRUFBRTtBQUFFSixXQUFLLEVBQUU7QUFBVDtBQU5VLEdBQWpCO0FBUUEsU0FDRVAsSUFBSSxJQUNGLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUEwQixNQUFFLGtCQUFXQSxJQUFJLENBQUNZLE9BQWhCLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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LmQ4ZjQxOWFlOWFlNjcyZDRmMTVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUG9zdENvdmVyIGZyb20gXCIuLi9zaW5nbGUtcG9zdC9Qb3N0Q292ZXJcIjtcbmltcG9ydCBQb3N0QXV0aG9yRGF0ZSBmcm9tIFwiLi4vc2luZ2xlLXBvc3QvUG9zdEF1dGhvckRhdGVcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IFBvc3RDYXJkID0gKHsgc2x1ZywgcHVibGlzaGVkQXQsIG1haW5JbWFnZSwgdGl0bGUsIHN1YnRpdGxlIH0pID0+IHtcbiAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgaG92ZXI6IHtcbiAgICAgIHNjYWxlOiAxLjAzLFxuICAgICAgYm94U2hhZG93OiBcIjAgNXB4IDEwcHggcmdiYSgwLDAsMCwuNSlcIixcbiAgICAgIHRyYW5zaXRpb246IHsgZWFzZTogXCJlYXNlT3V0XCIgfSxcbiAgICB9LFxuICAgIG9mZjogeyBzY2FsZTogMSB9LFxuICB9O1xuICByZXR1cm4gKFxuICAgIHNsdWcgJiYgKFxuICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgIHdoaWxlSG92ZXI9XCJob3ZlclwiXG4gICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTYgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgID5cbiAgICAgICAgICB7bWFpbkltYWdlICYmIDxQb3N0Q292ZXIgbWFpbkltYWdlPXttYWluSW1hZ2V9IHRpdGxlPXt0aXRsZX0gLz59XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcC00IGxnOnAtNlwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIHRleHQtMnhsXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktODAwIG15LTZcIj57c3VidGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxQb3N0QXV0aG9yRGF0ZSBzZWNvbmRQcm9wPXtcIlwifSBwdWJsaXNoZWRBdD17cHVibGlzaGVkQXR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmE+XG4gICAgICA8L0xpbms+XG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RDYXJkXCI7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBJY29uc0J0biBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uc0J0blwiO1xuaW1wb3J0IHsgZ3JpZEljb24sIGxpc3RJY29uIH0gZnJvbSBcIi4uL2xpYi9pY29uc1wiO1xuXG5jb25zdCBBcHAgPSAoeyBwb3N0cyA9IFtdIH0pID0+IHtcbiAgY29uc3QgeyBpc1RvZ2dsZWQsIHRvZ2dsZSB9ID0gdXNlVG9nZ2xlKCk7XG5cbiAgY29uc3QgcHJldmlld3MgPSBwb3N0cy5tYXAoXG4gICAgKHtcbiAgICAgIF9pZCxcbiAgICAgIHRpdGxlID0gXCJcIixcbiAgICAgIHN1YnRpdGxlID0gXCJcIixcbiAgICAgIHNsdWcgPSBcIlwiLFxuICAgICAgbWFpbkltYWdlLFxuICAgICAgcHVibGlzaGVkQXQgPSBcIlwiLFxuICAgIH0pID0+IChcbiAgICAgIDxQb3N0Q2FyZFxuICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgIG1haW5JbWFnZT17bWFpbkltYWdlfVxuICAgICAgICBwdWJsaXNoZWRBdD17cHVibGlzaGVkQXR9XG4gICAgICAvPlxuICAgIClcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBoLTEwIGxnOnB4LTE2IHhsOnB4LTQ4IG10LTYgbGc6ZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8SWNvbnNCdG4gZmlyc3RJY29uPXtncmlkSWNvbn0gc2Vjb25kSWNvbj17bGlzdEljb259IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiBncmlkIGdyaWQtY29scy0xIGdhcC02IGxnOmdyaWQtY29scy0yIGxnOm10LTIgbGc6bXgtMTYgeGw6bXgtNDggeGw6Z3JpZC1jb2xzLTMgeGw6Z2FwLTEyXCI+XG4gICAgICAgIHtwcmV2aWV3c31cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=
