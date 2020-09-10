webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./components/layout/Nav.js");
/* harmony import */ var _context_global_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/global.context */ "./context/global.context.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\layout\\Header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Header = function Header() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global_context__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]),
      isOpened = _useContext.isOpened;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("top"),
      pos = _useState[0],
      setPos = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener("scroll", function (e) {
      var scrolled = document.scrollingElement.scrollTop;

      if (scrolled >= 5) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, []);
  var shadow = isOpened || pos === "moved" ? "shadow-md" : "";
  return __jsx("div", {
    className: "header ".concat(shadow),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-11/12 flex justify-between items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "text-gray-900 font-bold text-2xl xl:text-5xl font-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "\u0410\u0440\u043C\u0438\u043D\u0438\u0430\u043D\u0441\u043A\u0430\u044F \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u0430"), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })));
};

_s(Header, "y4d2sDmsDZCkTr9wyaJtqVC/oKQ=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwiaXNPcGVuZWQiLCJ1c2VTdGF0ZSIsInBvcyIsInNldFBvcyIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzY3JvbGxlZCIsInNjcm9sbGluZ0VsZW1lbnQiLCJzY3JvbGxUb3AiLCJzaGFkb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxvQkFDRUMsd0RBQVUsQ0FBQ0MscUVBQUQsQ0FEWjtBQUFBLE1BQ1hDLFFBRFcsZUFDWEEsUUFEVzs7QUFBQSxrQkFHR0Msc0RBQVEsQ0FBQyxLQUFELENBSFg7QUFBQSxNQUdaQyxHQUhZO0FBQUEsTUFHUEMsTUFITzs7QUFLbkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxZQUFRLENBQUNDLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFVBQUNDLENBQUQsRUFBTztBQUN6QyxVQUFJQyxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEJDLFNBQXpDOztBQUNBLFVBQUlGLFFBQVEsSUFBSSxDQUFoQixFQUFtQjtBQUNqQkwsY0FBTSxDQUFDLE9BQUQsQ0FBTjtBQUNELE9BRkQsTUFFTztBQUNMQSxjQUFNLENBQUMsS0FBRCxDQUFOO0FBQ0Q7QUFDRixLQVBEO0FBUUQsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVdBLE1BQU1RLE1BQU0sR0FBR1gsUUFBUSxJQUFJRSxHQUFHLEtBQUssT0FBcEIsR0FBOEIsV0FBOUIsR0FBNEMsRUFBM0Q7QUFDQSxTQUNFO0FBQUssYUFBUyxtQkFBWVMsTUFBWixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywyQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsd0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtSkFERixFQUlFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREYsQ0FERjtBQVVELENBM0JEOztHQUFNZCxNOztLQUFBQSxNO0FBNkJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMjg4YzkzZTNmMDgyNDJkZGZlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvZ2xvYmFsLmNvbnRleHRcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCB7IGlzT3BlbmVkIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xuXG4gIGNvbnN0IFtwb3MsIHNldFBvc10gPSB1c2VTdGF0ZShcInRvcFwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGUpID0+IHtcbiAgICAgIGxldCBzY3JvbGxlZCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgaWYgKHNjcm9sbGVkID49IDUpIHtcbiAgICAgICAgc2V0UG9zKFwibW92ZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRQb3MoXCJ0b3BcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzaGFkb3cgPSBpc09wZW5lZCB8fCBwb3MgPT09IFwibW92ZWRcIiA/IFwic2hhZG93LW1kXCIgOiBcIlwiO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyICR7c2hhZG93fWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTExLzEyIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgZm9udC1ib2xkIHRleHQtMnhsIHhsOnRleHQtNXhsIGZvbnQtbG9nb1wiPlxuICAgICAgICAgINCQ0YDQvNC40L3QuNCw0L3RgdC60LDRjyDQv9C10YDRgdC/0LXQutGC0LjQstCwXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TmF2IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=