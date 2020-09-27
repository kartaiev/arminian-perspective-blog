webpackHotUpdate_N_E("pages/index", {
  /***/ "./components/posts-preview/PostListCard.js":
    /*!**************************************************!*\
  !*** ./components/posts-preview/PostCard.js ***!
  \**************************************************/
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
        /* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js"
        );
        /* harmony import */ var _single_post_PostAuthorDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../single-post/PostAuthorDate */ "./components/single-post/PostAuthorDate.js"
        );
        /* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../lib/helpers */ "./lib/helpers.js"
        );
        /* harmony import */ var _PostCover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../PostCover */ "./components/PostCover.js"
        );
        var _this = undefined,
          _jsxFileName =
            "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\posts-preview\\PostCard.js";

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        var PostListCard = function PostListCard(_ref) {
          var slug = _ref.slug,
            mainImage = _ref.mainImage,
            subtitle = _ref.subtitle,
            publishedAt = _ref.publishedAt,
            title = _ref.title,
            isToggled = _ref.isToggled;
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
          var cardClass = isToggled
            ? "mt-6 h-64 flex border border-gray-400 rounded-lg overflow-hidden"
            : "mt-6 border border-gray-400 rounded-lg overflow-hidden";
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
                  lineNumber: 31,
                  columnNumber: 7,
                },
              },
              __jsx(
                framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].a,
                {
                  whileHover: "hover",
                  variants: variants,
                  className: cardClass,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 9,
                  },
                },
                __jsx(_PostCover__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  mainImage: mainImage,
                  title: title,
                  isToggled: isToggled,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                    columnNumber: 11,
                  },
                }),
                __jsx(
                  "div",
                  {
                    className: " w-full p-6 flex flex-col justify-between",
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "div",
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      "h1",
                      {
                        className: "font-bold text-gray-800 text-2xl",
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 40,
                          columnNumber: 15,
                        },
                      },
                      title
                    ),
                    __jsx(
                      "h2",
                      {
                        className:
                          "font-semibold text-xl text-gray-800 my-6 pr-24",
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 41,
                          columnNumber: 15,
                        },
                      },
                      subtitle
                    )
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
                        lineNumber: 45,
                        columnNumber: 13,
                      },
                    }
                  )
                )
              )
            )
          );
        };

        _c = PostListCard;
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = PostListCard;

        var _c;

        $RefreshReg$(_c, "PostListCard");

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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RMaXN0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0TGlzdENhcmQiLCJzbHVnIiwibWFpbkltYWdlIiwic3VidGl0bGUiLCJwdWJsaXNoZWRBdCIsInRpdGxlIiwiaXNUb2dnbGVkIiwidmFyaWFudHMiLCJob3ZlciIsInNjYWxlIiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsImVhc2UiLCJvZmYiLCJjYXJkQ2xhc3MiLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQU9mO0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FBQUEsTUFMSkMsU0FLSSxRQUxKQSxTQUtJO0FBQUEsTUFKSkMsUUFJSSxRQUpKQSxRQUlJO0FBQUEsTUFISkMsV0FHSSxRQUhKQSxXQUdJO0FBQUEsTUFGSkMsS0FFSSxRQUZKQSxLQUVJO0FBQUEsTUFESkMsU0FDSSxRQURKQSxTQUNJO0FBQ0osTUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsSUFERjtBQUVMQyxlQUFTLEVBQUUsMkJBRk47QUFHTEMsZ0JBQVUsRUFBRTtBQUFFQyxZQUFJLEVBQUU7QUFBUjtBQUhQLEtBRFE7QUFNZkMsT0FBRyxFQUFFO0FBQUVKLFdBQUssRUFBRTtBQUFUO0FBTlUsR0FBakI7QUFTQSxNQUFNSyxTQUFTLEdBQUdSLFNBQVMsR0FDdkIsa0VBRHVCLEdBRXZCLHdEQUZKO0FBSUEsU0FDRUwsSUFBSSxJQUNGLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUEwQixNQUFFLGtCQUFXQSxJQUFJLENBQUNjLE9BQWhCLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsQ0FBUjtBQUFVLGNBQVUsRUFBQyxPQUFyQjtBQUE2QixZQUFRLEVBQUVSLFFBQXZDO0FBQWlELGFBQVMsRUFBRU8sU0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFDRSxhQUFTLEVBQUVaLFNBRGI7QUFFRSxTQUFLLEVBQUVHLEtBRlQ7QUFHRSxhQUFTLEVBQUVDLFNBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBSyxhQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtERCxLQUFsRCxDQURGLEVBRUU7QUFBSSxhQUFTLEVBQUMsZ0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixRQURILENBRkYsQ0FERixFQU9FLE1BQUMsbUVBQUQ7QUFBZ0IsY0FBVSxFQUFFLEVBQTVCO0FBQWdDLGVBQVcsRUFBRUMsV0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBTkYsQ0FERixDQUZKO0FBc0JELENBM0NEOztLQUFNSixZO0FBNkNTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZmIyMDMwYWQ5YTIwYzBkM2IyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBQb3N0QXV0aG9yRGF0ZSBmcm9tIFwiLi4vc2luZ2xlLXBvc3QvUG9zdEF1dGhvckRhdGVcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCIuLi8uLi9saWIvaGVscGVyc1wiO1xuaW1wb3J0IFBvc3RDb3ZlciBmcm9tIFwiLi4vUG9zdENvdmVyXCI7XG5cbmNvbnN0IFBvc3RMaXN0Q2FyZCA9ICh7XG4gIHNsdWcsXG4gIG1haW5JbWFnZSxcbiAgc3VidGl0bGUsXG4gIHB1Ymxpc2hlZEF0LFxuICB0aXRsZSxcbiAgaXNUb2dnbGVkLFxufSkgPT4ge1xuICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICBob3Zlcjoge1xuICAgICAgc2NhbGU6IDEuMDMsXG4gICAgICBib3hTaGFkb3c6IFwiMCA1cHggMTBweCByZ2JhKDAsMCwwLC41KVwiLFxuICAgICAgdHJhbnNpdGlvbjogeyBlYXNlOiBcImVhc2VPdXRcIiB9LFxuICAgIH0sXG4gICAgb2ZmOiB7IHNjYWxlOiAxIH0sXG4gIH07XG5cbiAgY29uc3QgY2FyZENsYXNzID0gaXNUb2dnbGVkXG4gICAgPyBcIm10LTYgaC02NCBmbGV4IGJvcmRlciBib3JkZXItZ3JheS00MDAgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5cIlxuICAgIDogXCJtdC02IGJvcmRlciBib3JkZXItZ3JheS00MDAgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5cIjtcblxuICByZXR1cm4gKFxuICAgIHNsdWcgJiYgKFxuICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgIDxtb3Rpb24uYSB3aGlsZUhvdmVyPVwiaG92ZXJcIiB2YXJpYW50cz17dmFyaWFudHN9IGNsYXNzTmFtZT17Y2FyZENsYXNzfT5cbiAgICAgICAgICA8UG9zdENvdmVyXG4gICAgICAgICAgICBtYWluSW1hZ2U9e21haW5JbWFnZX1cbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgIGlzVG9nZ2xlZD17aXNUb2dnbGVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIHAtNiBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIHRleHQtMnhsXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteGwgdGV4dC1ncmF5LTgwMCBteS02IHByLTI0XCI+XG4gICAgICAgICAgICAgICAge3N1YnRpdGxlfVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8UG9zdEF1dGhvckRhdGUgc2Vjb25kUHJvcD17XCJcIn0gcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgPC9MaW5rPlxuICAgIClcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0Q2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=
