webpackHotUpdate_N_E("pages/index", {
  /***/ "./components/posts-prevew/GridListBtn.js": false,

  /***/ "./components/posts-prevew/PostCard.js": false,

  /***/ "./components/posts-preview/GridListBtn.js":
    /*!*************************************************!*\
  !*** ./components/posts-preview/IconsBtn.js ***!
  \*************************************************/
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
                    label:
                      "\u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043A\u043E\u043C",
                    placement: "top",
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21,
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

  /***/ "./lib/icons.js":
    /*!**********************!*\
  !*** ./lib/icons.js ***!
  \**********************/
    /*! exports provided: gridIcon, listIcon, moonIcon */
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
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "moonIcon",
          function () {
            return moonIcon;
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
        var moonIcon = __jsx(
          "svg",
          {
            className: "w-6 h-6 xl:w-8 xl:h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 26,
            },
          },
          __jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d:
              "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 3,
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
        /* harmony import */ var _components_posts_preview_GridListBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../components/posts-preview/IconsBtn */ "./components/posts-preview/GridListBtn.js"
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
                _components_posts_preview_GridListBtn__WEBPACK_IMPORTED_MODULE_6__[
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L0dyaWRMaXN0QnRuLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Bvc3RzLXByZXZpZXcvUG9zdENhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9pY29ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZExpc3RCdG4iLCJ1c2VUb2dnbGUiLCJpc1RvZ2dsZWQiLCJ0b2dnbGUiLCJzY2FsZSIsImdyaWRJY29uIiwibGlzdEljb24iLCJQb3N0Q2FyZCIsInNsdWciLCJwdWJsaXNoZWRBdCIsIm1haW5JbWFnZSIsInRpdGxlIiwic3VidGl0bGUiLCJ2YXJpYW50cyIsImhvdmVyIiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsImVhc2UiLCJvZmYiLCJjdXJyZW50IiwibW9vbkljb24iLCJBcHAiLCJwb3N0cyIsInByZXZpZXdzIiwibWFwIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsbUJBQ01DLGtFQUFTLEVBRGY7QUFBQSxNQUNoQkMsU0FEZ0IsY0FDaEJBLFNBRGdCO0FBQUEsTUFDTEMsTUFESyxjQUNMQSxNQURLOztBQUd4QixTQUNFLE1BQUMsb0RBQUQsQ0FBUSxNQUFSO0FBQ0UsY0FBVSxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBRGQ7QUFFRSxXQUFPLEVBQUVELE1BRlg7QUFHRSxhQUFTLEVBQUMsb0JBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHRCxTQUFTLEdBQ1IsTUFBQyx1REFBRDtBQUFTLFlBQVEsTUFBakI7QUFBa0IsU0FBSyxFQUFDLG1HQUF4QjtBQUE0QyxhQUFTLEVBQUMsS0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRyxtREFESCxDQURRLEdBS1IsTUFBQyx1REFBRDtBQUFTLFlBQVEsTUFBakI7QUFBa0IsU0FBSyxFQUFDLHlHQUF4QjtBQUE2QyxhQUFTLEVBQUMsS0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxtREFESCxDQVZKLENBREY7QUFpQkQsQ0FwQkQ7O0dBQU1OLFc7VUFDMEJDLDBEOzs7S0FEMUJELFc7QUFzQlNBLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTU8sUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBdUQ7QUFBQSxNQUFwREMsSUFBb0QsUUFBcERBLElBQW9EO0FBQUEsTUFBOUNDLFdBQThDLFFBQTlDQSxXQUE4QztBQUFBLE1BQWpDQyxTQUFpQyxRQUFqQ0EsU0FBaUM7QUFBQSxNQUF0QkMsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3RFLE1BQU1DLFFBQVEsR0FBRztBQUNmQyxTQUFLLEVBQUU7QUFDTFYsV0FBSyxFQUFFLElBREY7QUFFTFcsZUFBUyxFQUFFLDJCQUZOO0FBR0xDLGdCQUFVLEVBQUU7QUFBRUMsWUFBSSxFQUFFO0FBQVI7QUFIUCxLQURRO0FBTWZDLE9BQUcsRUFBRTtBQUFFZCxXQUFLLEVBQUU7QUFBVDtBQU5VLEdBQWpCO0FBUUEsU0FDRUksSUFBSSxJQUNGLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUEwQixNQUFFLGtCQUFXQSxJQUFJLENBQUNXLE9BQWhCLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsQ0FBUjtBQUNFLGNBQVUsRUFBQyxPQURiO0FBRUUsWUFBUSxFQUFFTixRQUZaO0FBR0UsYUFBUyxFQUFDLHdEQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR0gsU0FBUyxJQUFJLE1BQUMsOERBQUQ7QUFBVyxhQUFTLEVBQUVBLFNBQXRCO0FBQWlDLFNBQUssRUFBRUMsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxoQixFQU1FO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGtDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0RBLEtBQWxELENBREYsRUFFRTtBQUFJLGFBQVMsRUFBQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtEQyxRQUFsRCxDQUZGLEVBR0UsTUFBQyxtRUFBRDtBQUFnQixjQUFVLEVBQUUsRUFBNUI7QUFBZ0MsZUFBVyxFQUFFSCxXQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FORixDQURGLENBRko7QUFrQkQsQ0EzQkQ7O0tBQU1GLFE7QUE2QlNBLHVFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFFTyxJQUFNRixRQUFRLEdBQ25CO0FBQ0UsV0FBUyxFQUFDLFNBRFo7QUFFRSxNQUFJLEVBQUMsTUFGUDtBQUdFLFFBQU0sRUFBQyxjQUhUO0FBSUUsU0FBTyxFQUFDLFdBSlY7QUFLRSxPQUFLLEVBQUMsNEJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQU9FO0FBQ0UsZUFBYSxFQUFDLE9BRGhCO0FBRUUsZ0JBQWMsRUFBQyxPQUZqQjtBQUdFLGFBQVcsRUFBQyxHQUhkO0FBSUUsR0FBQyxFQUFDLHNRQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFQRixDQURLO0FBaUJBLElBQU1DLFFBQVEsR0FDbkI7QUFDRSxXQUFTLEVBQUMsU0FEWjtBQUVFLE1BQUksRUFBQyxNQUZQO0FBR0UsUUFBTSxFQUFDLGNBSFQ7QUFJRSxTQUFPLEVBQUMsV0FKVjtBQUtFLE9BQUssRUFBQyw0QkFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBT0U7QUFDRSxlQUFhLEVBQUMsT0FEaEI7QUFFRSxnQkFBYyxFQUFDLE9BRmpCO0FBR0UsYUFBVyxFQUFDLEdBSGQ7QUFJRSxHQUFDLEVBQUMsaUNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVBGLENBREs7QUFpQkEsSUFBTWMsUUFBUSxHQUFJO0FBQ3JCLFdBQVMsRUFBQyx1QkFEVztBQUVyQixNQUFJLEVBQUMsTUFGZ0I7QUFHckIsUUFBTSxFQUFDLGNBSGM7QUFJckIsU0FBTyxFQUFDLFdBSmE7QUFLckIsT0FBSyxFQUFDLDRCQUxlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FPdkI7QUFDSSxlQUFhLEVBQUMsT0FEbEI7QUFFSSxnQkFBYyxFQUFDLE9BRm5CO0FBR0ksYUFBVyxFQUFDLEdBSGhCO0FBSUksR0FBQyxFQUFDLHVGQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFQdUIsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDUDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQjtBQUFBOztBQUFBLHdCQUFqQkMsS0FBaUI7QUFBQSxNQUFqQkEsS0FBaUIsMkJBQVQsRUFBUzs7QUFBQSxtQkFDQXJCLGtFQUFTLEVBRFQ7QUFBQSxNQUN0QkMsU0FEc0IsY0FDdEJBLFNBRHNCO0FBQUEsTUFDWEMsTUFEVyxjQUNYQSxNQURXOztBQUc5QixNQUFNb0IsUUFBUSxHQUFHRCxLQUFLLENBQUNFLEdBQU4sQ0FDZjtBQUFBLFFBQ0VDLEdBREYsU0FDRUEsR0FERjtBQUFBLDRCQUVFZCxLQUZGO0FBQUEsUUFFRUEsS0FGRiw0QkFFVSxFQUZWO0FBQUEsK0JBR0VDLFFBSEY7QUFBQSxRQUdFQSxRQUhGLCtCQUdhLEVBSGI7QUFBQSwyQkFJRUosSUFKRjtBQUFBLFFBSUVBLElBSkYsMkJBSVMsRUFKVDtBQUFBLFFBS0VFLFNBTEYsU0FLRUEsU0FMRjtBQUFBLGtDQU1FRCxXQU5GO0FBQUEsUUFNRUEsV0FORixrQ0FNZ0IsRUFOaEI7QUFBQSxXQVFFLE1BQUMsMEVBQUQ7QUFDRSxTQUFHLEVBQUVnQixHQURQO0FBRUUsV0FBSyxFQUFFZCxLQUZUO0FBR0UsY0FBUSxFQUFFQyxRQUhaO0FBSUUsVUFBSSxFQUFFSixJQUpSO0FBS0UsZUFBUyxFQUFFRSxTQUxiO0FBTUUsaUJBQVcsRUFBRUQsV0FOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkY7QUFBQSxHQURlLENBQWpCO0FBb0JBLFNBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQywrRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0djLFFBREgsQ0FKRixDQURGO0FBVUQsQ0FqQ0Q7O0dBQU1GLEc7VUFDMEJwQiwwRDs7O0tBRDFCb0IsRzs7QUE0Q1NBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkyNzI3NDJiNTY2ODdhZDM4ZGFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VUb2dnbGVcIjtcbmltcG9ydCB7IGdyaWRJY29uLCBsaXN0SWNvbiB9IGZyb20gXCIuLi8uLi9saWIvaWNvbnNcIjtcblxuY29uc3QgR3JpZExpc3RCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNUb2dnbGVkLCB0b2dnbGUgfSA9IHVzZVRvZ2dsZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5idXR0b25cbiAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMiB9fVxuICAgICAgb25DbGljaz17dG9nZ2xlfVxuICAgICAgY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICA+XG4gICAgICB7aXNUb2dnbGVkID8gKFxuICAgICAgICA8VG9vbHRpcCBoYXNBcnJvdyBsYWJlbD1cItC+0YLQvtCx0YDQsNC30LjRgtGMINGB0LXRgtC60L7QuVwiIHBsYWNlbWVudD1cInRvcFwiPlxuICAgICAgICAgIHtncmlkSWNvbn1cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgKSA6IChcbiAgICAgICAgPFRvb2x0aXAgaGFzQXJyb3cgbGFiZWw9XCLQvtGC0L7QsdGA0LDQt9C40YLRjCDRgdC/0LjRgdC60L7QvFwiIHBsYWNlbWVudD1cInRvcFwiPlxuICAgICAgICAgIHtsaXN0SWNvbn1cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgKX1cbiAgICA8L21vdGlvbi5idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkTGlzdEJ0bjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBQb3N0Q292ZXIgZnJvbSBcIi4uL3NpbmdsZS1wb3N0L1Bvc3RDb3ZlclwiO1xuaW1wb3J0IFBvc3RBdXRob3JEYXRlIGZyb20gXCIuLi9zaW5nbGUtcG9zdC9Qb3N0QXV0aG9yRGF0ZVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgUG9zdENhcmQgPSAoeyBzbHVnLCBwdWJsaXNoZWRBdCwgbWFpbkltYWdlLCB0aXRsZSwgc3VidGl0bGUgfSkgPT4ge1xuICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICBob3Zlcjoge1xuICAgICAgc2NhbGU6IDEuMDMsXG4gICAgICBib3hTaGFkb3c6IFwiMCA1cHggMTBweCByZ2JhKDAsMCwwLC41KVwiLFxuICAgICAgdHJhbnNpdGlvbjogeyBlYXNlOiBcImVhc2VPdXRcIiB9LFxuICAgIH0sXG4gICAgb2ZmOiB7IHNjYWxlOiAxIH0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgc2x1ZyAmJiAoXG4gICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfT5cbiAgICAgICAgPG1vdGlvbi5hXG4gICAgICAgICAgd2hpbGVIb3Zlcj1cImhvdmVyXCJcbiAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNiBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgPlxuICAgICAgICAgIHttYWluSW1hZ2UgJiYgPFBvc3RDb3ZlciBtYWluSW1hZ2U9e21haW5JbWFnZX0gdGl0bGU9e3RpdGxlfSAvPn1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBwLTQgbGc6cC02XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZ3JheS04MDAgdGV4dC0yeGxcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDAgbXktNlwiPntzdWJ0aXRsZX08L2gyPlxuICAgICAgICAgICAgPFBvc3RBdXRob3JEYXRlIHNlY29uZFByb3A9e1wiXCJ9IHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uYT5cbiAgICAgIDwvTGluaz5cbiAgICApXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IGdyaWRJY29uID0gKFxuICA8c3ZnXG4gICAgY2xhc3NOYW1lPVwidy04IGgtOFwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgIGQ9XCJNNCA2YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJWNnpNMTQgNmEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAyaC0yYTIgMiAwIDAxLTItMlY2ek00IDE2YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJ2LTJ6TTE0IDE2YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJoLTJhMiAyIDAgMDEtMi0ydi0yelwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgbGlzdEljb24gPSAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9XCJ3LTggaC04XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgZD1cIk00IDZoMTZNNCAxMGgxNk00IDE0aDE2TTQgMThoMTZcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IG1vb25JY29uID0gIDxzdmdcbiAgICBjbGFzc05hbWU9XCJ3LTYgaC02IHhsOnctOCB4bDpoLThcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuPlxuICA8cGF0aFxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgIGQ9XCJNMjAuMzU0IDE1LjM1NEE5IDkgMCAwMTguNjQ2IDMuNjQ2IDkuMDAzIDkuMDAzIDAgMDAxMiAyMWE5LjAwMyA5LjAwMyAwIDAwOC4zNTQtNS42NDZ6XCJcbiAgLz5cbjwvc3ZnPlxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMtcHJldmlldy9Qb3N0Q2FyZFwiO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gXCIuLi9ob29rcy91c2VUb2dnbGVcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgR3JpZExpc3RCdG4gZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMtcHJldmlldy9HcmlkTGlzdEJ0blwiO1xuXG5jb25zdCBBcHAgPSAoeyBwb3N0cyA9IFtdIH0pID0+IHtcbiAgY29uc3QgeyBpc1RvZ2dsZWQsIHRvZ2dsZSB9ID0gdXNlVG9nZ2xlKCk7XG5cbiAgY29uc3QgcHJldmlld3MgPSBwb3N0cy5tYXAoXG4gICAgKHtcbiAgICAgIF9pZCxcbiAgICAgIHRpdGxlID0gXCJcIixcbiAgICAgIHN1YnRpdGxlID0gXCJcIixcbiAgICAgIHNsdWcgPSBcIlwiLFxuICAgICAgbWFpbkltYWdlLFxuICAgICAgcHVibGlzaGVkQXQgPSBcIlwiLFxuICAgIH0pID0+IChcbiAgICAgIDxQb3N0Q2FyZFxuICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgIG1haW5JbWFnZT17bWFpbkltYWdlfVxuICAgICAgICBwdWJsaXNoZWRBdD17cHVibGlzaGVkQXR9XG4gICAgICAvPlxuICAgIClcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBoLTEwIGxnOnB4LTE2IHhsOnB4LTQ4IG10LTYgbGc6ZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8R3JpZExpc3RCdG4gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTYgbGc6Z3JpZC1jb2xzLTIgbGc6bXQtMiBsZzpteC0xNiB4bDpteC00OCB4bDpncmlkLWNvbHMtMyB4bDpnYXAtMTJcIj5cbiAgICAgICAge3ByZXZpZXdzfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
