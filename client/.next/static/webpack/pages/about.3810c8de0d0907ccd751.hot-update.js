webpackHotUpdate_N_E("pages/about",{

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/layout/Header */ "./components/layout/Header.js");
/* harmony import */ var components_layout_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/layout/Footer */ "./components/layout/Footer.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../customTheme */ "./customTheme.js");
/* harmony import */ var _chakra_ui_core_dist_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core/dist/Grid */ "./node_modules/@chakra-ui/core/dist/es/Grid/index.js");
/* harmony import */ var _chakra_ui_core_dist_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/core/dist/Divider */ "./node_modules/@chakra-ui/core/dist/es/Divider/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\layout\\Layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children;

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    h: "100%",
    bg: _customTheme__WEBPACK_IMPORTED_MODULE_5__["bgColor"][colorMode],
    overflowX: "hidden",
    w: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(components_layout_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_core_dist_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    templateColumns: "5fr auto 1fr",
    gap: 6,
    color: _customTheme__WEBPACK_IMPORTED_MODULE_5__["color"][colorMode],
    className: "article-body-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, children), __jsx(_chakra_ui_core_dist_Divider__WEBPACK_IMPORTED_MODULE_7__["default"], {
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_5__["borderColor"][colorMode],
    orientation: "vertical",
    my: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Hello")), __jsx(components_layout_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }));
};

_s(Layout, "2Uu86IH3do63pkN3s1ysdRMmJuc=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["useColorMode"]];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiYmdDb2xvciIsImNvbG9yIiwiYm9yZGVyQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLHNCQUNUQyxvRUFBWSxFQURIO0FBQUEsTUFDdkJDLFNBRHVCLGlCQUN2QkEsU0FEdUI7O0FBRy9CLFNBQ0UsTUFBQyxtREFBRDtBQUFLLEtBQUMsRUFBQyxNQUFQO0FBQWMsTUFBRSxFQUFFQyxvREFBTyxDQUFDRCxTQUFELENBQXpCO0FBQXNDLGFBQVMsRUFBQyxRQUFoRDtBQUF5RCxLQUFDLEVBQUMsTUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxpRUFBRDtBQUNFLG1CQUFlLEVBQUMsY0FEbEI7QUFFRSxPQUFHLEVBQUUsQ0FGUDtBQUdFLFNBQUssRUFBRUUsa0RBQUssQ0FBQ0YsU0FBRCxDQUhkO0FBSUUsYUFBUyxFQUFDLHdCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9GLFFBQVAsQ0FORixFQU9FLE1BQUMsb0VBQUQ7QUFDRSxlQUFXLEVBQUVLLHdEQUFXLENBQUNILFNBQUQsQ0FEMUI7QUFFRSxlQUFXLEVBQUMsVUFGZDtBQUdFLE1BQUUsRUFBQyxHQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixDQUZGLEVBZ0JFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixDQURGO0FBb0JELENBdkJEOztHQUFNSCxNO1VBQ2tCRSw0RDs7O0tBRGxCRixNO0FBeUJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC4zODEwYzhkZTBkMDkwN2NjZDc1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL2xheW91dC9Gb290ZXJcIjtcbmltcG9ydCB7IGhhbmRsZVNjcm9sbCB9IGZyb20gXCIuLi8uLi9saWIvaGVscGVyc1wiO1xuaW1wb3J0IHsgQm94LCB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBiZ0NvbG9yLCBib3JkZXJDb2xvciwgY29sb3IgfSBmcm9tIFwiLi4vLi4vY3VzdG9tVGhlbWVcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9HcmlkXCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvRGl2aWRlclwiO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggaD1cIjEwMCVcIiBiZz17YmdDb2xvcltjb2xvck1vZGVdfSBvdmVyZmxvd1g9XCJoaWRkZW5cIiB3PVwiMTAwJVwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPEdyaWRcbiAgICAgICAgdGVtcGxhdGVDb2x1bW5zPVwiNWZyIGF1dG8gMWZyXCJcbiAgICAgICAgZ2FwPXs2fVxuICAgICAgICBjb2xvcj17Y29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1ib2R5LWNvbnRhaW5lclwiXG4gICAgICA+XG4gICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgYm9yZGVyQ29sb3I9e2JvcmRlckNvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgbXk9XCI2XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGFzaWRlPkhlbGxvPC9hc2lkZT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=