webpackHotUpdate_N_E("pages/index", {
  /***/ "./components/PostCard.js": false,

  /***/ "./components/post-card/PostCard.js":
    /*!******************************************!*\
  !*** ./components/posts-preview/PostGridCard.js ***!
  \******************************************/
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
        /* harmony import */ var _components_post_card_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../components/posts-preview/PostGridCard */ "./components/post-card/PostCard.js"
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
              _components_post_card_PostCard__WEBPACK_IMPORTED_MODULE_2__[
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
                  lineNumber: 21,
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
                lineNumber: 33,
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
                  lineNumber: 34,
                  columnNumber: 7,
                },
              },
              __jsx(
                framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].button,
                {
                  whileHover: {
                    scale: 1.2,
                  },
                  onClick: toggle,
                  className: "focus:outline-none",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 9,
                  },
                },
                isToggled
                  ? __jsx(
                      _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                      {
                        hasArrow: true,
                        bg: "gray.600",
                        label:
                          "\u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u0441\u0435\u0442\u043A\u043E\u0439",
                        placement: "top",
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 41,
                          columnNumber: 13,
                        },
                      },
                      __jsx(
                        "svg",
                        {
                          className: "w-8 h-8",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 47,
                            columnNumber: 15,
                          },
                        },
                        __jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d:
                            "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54,
                            columnNumber: 17,
                          },
                        })
                      )
                    )
                  : __jsx(
                      _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                      {
                        hasArrow: true,
                        bg: "gray.600",
                        label:
                          "\u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043A\u043E\u043C",
                        placement: "top",
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 63,
                          columnNumber: 13,
                        },
                      },
                      __jsx(
                        "svg",
                        {
                          className: "w-8 h-8",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69,
                            columnNumber: 15,
                          },
                        },
                        __jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M4 6h16M4 10h16M4 14h16M4 18h16",
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 76,
                            columnNumber: 17,
                          },
                        })
                      )
                    )
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
                  lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LWNhcmQvUG9zdENhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwic2x1ZyIsInB1Ymxpc2hlZEF0IiwibWFpbkltYWdlIiwidGl0bGUiLCJzdWJ0aXRsZSIsInZhcmlhbnRzIiwiaG92ZXIiLCJzY2FsZSIsImJveFNoYWRvdyIsInRyYW5zaXRpb24iLCJlYXNlIiwib2ZmIiwiY3VycmVudCIsIkFwcCIsInBvc3RzIiwidXNlVG9nZ2xlIiwiaXNUb2dnbGVkIiwidG9nZ2xlIiwicHJldmlld3MiLCJtYXAiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXVEO0FBQUEsTUFBcERDLElBQW9ELFFBQXBEQSxJQUFvRDtBQUFBLE1BQTlDQyxXQUE4QyxRQUE5Q0EsV0FBOEM7QUFBQSxNQUFqQ0MsU0FBaUMsUUFBakNBLFNBQWlDO0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUN0RSxNQUFNQyxRQUFRLEdBQUc7QUFDZkMsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxJQURGO0FBRUxDLGVBQVMsRUFBRSwyQkFGTjtBQUdMQyxnQkFBVSxFQUFFO0FBQUVDLFlBQUksRUFBRTtBQUFSO0FBSFAsS0FEUTtBQU1mQyxPQUFHLEVBQUU7QUFBRUosV0FBSyxFQUFFO0FBQVQ7QUFOVSxHQUFqQjtBQVFBLFNBQ0VQLElBQUksSUFDRixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBMEIsTUFBRSxrQkFBV0EsSUFBSSxDQUFDWSxPQUFoQixDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFB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LEVBQUMsTUFGUDtBQUdFLFVBQU0sRUFBQyxjQUhUO0FBSUUsV0FBTyxFQUFDLFdBSlY7QUFLRSxTQUFLLEVBQUMsNEJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQ0UsaUJBQWEsRUFBQyxPQURoQjtBQUVFLGtCQUFjLEVBQUMsT0FGakI7QUFHRSxlQUFXLEVBQUMsR0FIZDtBQUlFLEtBQUMsRUFBQyxzUUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FORixDQURRLEdBdUJSLE1BQUMsdURBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxNQUFFLEVBQUMsVUFGTDtBQUdFLFNBQUssRUFBQyx5R0FIUjtBQUlFLGFBQVMsRUFBQyxLQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUNFLGFBQVMsRUFBQyxTQURaO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxVQUFNLEVBQUMsY0FIVDtBQUlFLFdBQU8sRUFBQyxXQUpWO0FBS0UsU0FBSyxFQUFDLDRCQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRTtBQUNFLGlCQUFhLEVBQUMsT0FEaEI7QUFFRSxrQkFBYyxFQUFDLE9BRmpCO0FBR0UsZUFBVyxFQUFDLEdBSGQ7QUFJRSxLQUFDLEVBQUMsaUNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBTkYsQ0E1QkosQ0FERixDQURGLEVBc0RFO0FBQUssYUFBUyxFQUFDLCtGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsUUFESCxDQXRERixDQURGO0FBNERELENBbkZEOztHQUFNTCxHO1VBQzBCRSwwRDs7O0tBRDFCRixHOztBQThGU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDlhMGQzODFhNTYyMjRhNzc5YjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBQb3N0Q292ZXIgZnJvbSBcIi4uL3NpbmdsZS1wb3N0L1Bvc3RDb3ZlclwiO1xuaW1wb3J0IFBvc3RBdXRob3JEYXRlIGZyb20gXCIuLi9zaW5nbGUtcG9zdC9Qb3N0QXV0aG9yRGF0ZVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgUG9zdENhcmQgPSAoeyBzbHVnLCBwdWJsaXNoZWRBdCwgbWFpbkltYWdlLCB0aXRsZSwgc3VidGl0bGUgfSkgPT4ge1xuICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICBob3Zlcjoge1xuICAgICAgc2NhbGU6IDEuMDMsXG4gICAgICBib3hTaGFkb3c6IFwiMCA1cHggMTBweCByZ2JhKDAsMCwwLC41KVwiLFxuICAgICAgdHJhbnNpdGlvbjogeyBlYXNlOiBcImVhc2VPdXRcIiB9LFxuICAgIH0sXG4gICAgb2ZmOiB7IHNjYWxlOiAxIH0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgc2x1ZyAmJiAoXG4gICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfT5cbiAgICAgICAgPG1vdGlvbi5hXG4gICAgICAgICAgd2hpbGVIb3Zlcj1cImhvdmVyXCJcbiAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNiBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgPlxuICAgICAgICAgIHttYWluSW1hZ2UgJiYgPFBvc3RDb3ZlciBtYWluSW1hZ2U9e21haW5JbWFnZX0gdGl0bGU9e3RpdGxlfSAvPn1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBwLTQgbGc6cC02XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZ3JheS04MDAgdGV4dC0yeGxcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDAgbXktNlwiPntzdWJ0aXRsZX08L2gyPlxuICAgICAgICAgICAgPFBvc3RBdXRob3JEYXRlIHNlY29uZFByb3A9e1wiXCJ9IHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uYT5cbiAgICAgIDwvTGluaz5cbiAgICApXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3Bvc3QtY2FyZC9Qb3N0Q2FyZFwiO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gXCIuLi9ob29rcy91c2VUb2dnbGVcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IEFwcCA9ICh7IHBvc3RzID0gW10gfSkgPT4ge1xuICBjb25zdCB7IGlzVG9nZ2xlZCwgdG9nZ2xlIH0gPSB1c2VUb2dnbGUoKTtcblxuICBjb25zdCBwcmV2aWV3cyA9IHBvc3RzLm1hcChcbiAgICAoe1xuICAgICAgX2lkLFxuICAgICAgdGl0bGUgPSBcIlwiLFxuICAgICAgc3VidGl0bGUgPSBcIlwiLFxuICAgICAgc2x1ZyA9IFwiXCIsXG4gICAgICBtYWluSW1hZ2UsXG4gICAgICBwdWJsaXNoZWRBdCA9IFwiXCIsXG4gICAgfSkgPT4gKFxuICAgICAgPFBvc3RDYXJkXG4gICAgICAgIGtleT17X2lkfVxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgICAgIC8+XG4gICAgKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGgtMTAgbGc6cHgtMTYgeGw6cHgtNDggbXQtNiBsZzpmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7aXNUb2dnbGVkID8gKFxuICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgaGFzQXJyb3dcbiAgICAgICAgICAgICAgYmc9XCJncmF5LjYwMFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwi0L7RgtC+0LHRgNCw0LfQuNGC0Ywg0YHQtdGC0LrQvtC5XCJcbiAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOCBoLThcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTQgNmEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAySDZhMiAyIDAgMDEtMi0yVjZ6TTE0IDZhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMnYyYTIgMiAwIDAxLTIgMmgtMmEyIDIgMCAwMS0yLTJWNnpNNCAxNmEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAySDZhMiAyIDAgMDEtMi0ydi0yek0xNCAxNmEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAyaC0yYTIgMiAwIDAxLTItMnYtMnpcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICBoYXNBcnJvd1xuICAgICAgICAgICAgICBiZz1cImdyYXkuNjAwXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCLQvtGC0L7QsdGA0LDQt9C40YLRjCDRgdC/0LjRgdC60L7QvFwiXG4gICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggaC04XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgZD1cIk00IDZoMTZNNCAxMGgxNk00IDE0aDE2TTQgMThoMTZcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbW90aW9uLmJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTYgbGc6Z3JpZC1jb2xzLTIgbGc6bXQtMiBsZzpteC0xNiB4bDpteC00OCB4bDpncmlkLWNvbHMtMyB4bDpnYXAtMTJcIj5cbiAgICAgICAge3ByZXZpZXdzfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
