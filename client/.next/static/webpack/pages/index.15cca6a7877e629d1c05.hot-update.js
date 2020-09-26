webpackHotUpdate_N_E("pages/index", {
  /***/ "./components/posts-prevew/GridListBtn.js":
    /*!************************************************!*\
  !*** ./components/posts-prevew/IconsBtn.js ***!
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
            "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\posts-prevew\\IconsBtn.js",
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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2ZXcvR3JpZExpc3RCdG4uanMiXSwibmFtZXMiOlsiR3JpZExpc3RCdG4iLCJ1c2VUb2dnbGUiLCJpc1RvZ2dsZWQiLCJ0b2dnbGUiLCJzY2FsZSIsImdyaWRJY29uIiwibGlzdEljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxtQkFDTUMsa0VBQVMsRUFEZjtBQUFBLE1BQ2hCQyxTQURnQixjQUNoQkEsU0FEZ0I7QUFBQSxNQUNMQyxNQURLLGNBQ0xBLE1BREs7O0FBR3hCLFNBQ0UsTUFBQyxvREFBRCxDQUFRLE1BQVI7QUFDRSxjQUFVLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FEZDtBQUVFLFdBQU8sRUFBRUQsTUFGWDtBQUdFLGFBQVMsRUFBQyxvQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dELFNBQVMsR0FDUixNQUFDLHVEQUFEO0FBQVMsWUFBUSxNQUFqQjtBQUFrQixTQUFLLEVBQUMsbUdBQXhCO0FBQTRDLGFBQVMsRUFBQyxLQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLG1EQURILENBRFEsR0FLUixNQUFDLHVEQUFEO0FBQVMsWUFBUSxNQUFqQjtBQUFrQixTQUFLLEVBQUMseUdBQXhCO0FBQTZDLGFBQVMsRUFBQyxLQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLG1EQURILENBVkosQ0FERjtBQWlCRCxDQXBCRDs7R0FBTU4sVztVQUMwQkMsMEQ7OztLQUQxQkQsVztBQXNCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTVjY2E2YTc4NzdlNjI5ZDFjMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xuaW1wb3J0IHsgZ3JpZEljb24sIGxpc3RJY29uIH0gZnJvbSBcIi4uLy4uL2xpYi9pY29uc1wiO1xuXG5jb25zdCBHcmlkTGlzdEJ0biA9ICgpID0+IHtcbiAgY29uc3QgeyBpc1RvZ2dsZWQsIHRvZ2dsZSB9ID0gdXNlVG9nZ2xlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmJ1dHRvblxuICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XG4gICAgICBvbkNsaWNrPXt0b2dnbGV9XG4gICAgICBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgID5cbiAgICAgIHtpc1RvZ2dsZWQgPyAoXG4gICAgICAgIDxUb29sdGlwIGhhc0Fycm93IGxhYmVsPVwi0L7RgtC+0LHRgNCw0LfQuNGC0Ywg0YHQtdGC0LrQvtC5XCIgcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICAgICAge2dyaWRJY29ufVxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICApIDogKFxuICAgICAgICA8VG9vbHRpcCBoYXNBcnJvdyBsYWJlbD1cItC+0YLQvtCx0YDQsNC30LjRgtGMINGB0L/QuNGB0LrQvtC8XCIgcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICAgICAge2xpc3RJY29ufVxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICApfVxuICAgIDwvbW90aW9uLmJ1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRMaXN0QnRuO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
