webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/SearchInput.js":
/*!******************************************!*\
  !*** ./components/layout/SearchInput.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core_dist_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core/dist/Input */ "./node_modules/@chakra-ui/core/dist/es/Input/index.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\layout\\SearchInput.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SearchInput = function SearchInput(_ref) {
  _s();

  var switchToSearchInput = _ref.switchToSearchInput;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  var handleChange = function handleChange(e) {
    return setValue(e.target.value);
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === "Enter") {
      console.log(value);
      switchToSearchInput();
    }
  };

  var handleClick = function handleClick() {
    console.log(value);
    switchToSearchInput();
  };

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core_dist_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: value,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    placeholder: "\u043F\u043E\u0438\u0441\u043A",
    borderColor: "gray.300",
    width: {
      base: "250px",
      lg: "300px"
    },
    variant: "outline",
    rounded: "full",
    _focus: {
      bg: "white",
      borderColor: "gray.900"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputRightElement"], {
    rounded: "full",
    bg: "gray.900",
    _focus: {
      bg: "white",
      borderColor: "gray.900"
    },
    _hover: {
      bg: "white",
      borderColor: "gray.900",
      color: "gray.900"
    },
    children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      onClick: handleClick,
      name: "search-2",
      color: "white",
      size: {
        base: "20px",
        lg: "24px"
      },
      cursor: "pointer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }));
};

_s(SearchInput, "dBtK6I2q1m3rcfzPBa0nrbv/iCI=");

_c = SearchInput;
/* harmony default export */ __webpack_exports__["default"] = (SearchInput);

var _c;

$RefreshReg$(_c, "SearchInput");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvU2VhcmNoSW5wdXQuanMiXSwibmFtZXMiOlsiU2VhcmNoSW5wdXQiLCJzd2l0Y2hUb1NlYXJjaElucHV0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImhhbmRsZUtleURvd24iLCJrZXkiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2siLCJiYXNlIiwibGciLCJiZyIsImJvcmRlckNvbG9yIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQTZCO0FBQUE7O0FBQUEsTUFBMUJDLG1CQUEwQixRQUExQkEsbUJBQTBCOztBQUFBLGtCQUNyQkMsc0RBQVEsQ0FBQyxFQUFELENBRGE7QUFBQSxNQUN4Q0MsS0FEd0M7QUFBQSxNQUNqQ0MsUUFEaUM7O0FBRy9DLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQ7QUFBQSxXQUFPRixRQUFRLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUFWLENBQWY7QUFBQSxHQUFyQjs7QUFFQSxNQUFNSyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNGLENBQUQsRUFBTztBQUMzQixRQUFJQSxDQUFDLENBQUNHLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ3JCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBWjtBQUNBRix5QkFBbUI7QUFDcEI7QUFDRixHQUxEOztBQU9BLE1BQU1XLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixLQUFaO0FBQ0FGLHVCQUFtQjtBQUNwQixHQUhEOztBQUtBLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUNFLFNBQUssRUFBRUUsS0FEVDtBQUVFLFlBQVEsRUFBRUUsWUFGWjtBQUdFLGFBQVMsRUFBRUcsYUFIYjtBQUlFLGVBQVcsRUFBQyxnQ0FKZDtBQUtFLGVBQVcsRUFBQyxVQUxkO0FBTUUsU0FBSyxFQUFFO0FBQUVLLFVBQUksRUFBRSxPQUFSO0FBQWlCQyxRQUFFLEVBQUU7QUFBckIsS0FOVDtBQU9FLFdBQU8sRUFBQyxTQVBWO0FBUUUsV0FBTyxFQUFDLE1BUlY7QUFTRSxVQUFNLEVBQUU7QUFBRUMsUUFBRSxFQUFFLE9BQU47QUFBZUMsaUJBQVcsRUFBRTtBQUE1QixLQVRWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVlFLE1BQUMsaUVBQUQ7QUFDRSxXQUFPLEVBQUMsTUFEVjtBQUVFLE1BQUUsRUFBQyxVQUZMO0FBR0UsVUFBTSxFQUFFO0FBQUVELFFBQUUsRUFBRSxPQUFOO0FBQWVDLGlCQUFXLEVBQUU7QUFBNUIsS0FIVjtBQUlFLFVBQU0sRUFBRTtBQUFFRCxRQUFFLEVBQUUsT0FBTjtBQUFlQyxpQkFBVyxFQUFFLFVBQTVCO0FBQXdDQyxXQUFLLEVBQUU7QUFBL0MsS0FKVjtBQUtFLFlBQVEsRUFDTixNQUFDLG9EQUFEO0FBQ0UsYUFBTyxFQUFFTCxXQURYO0FBRUUsVUFBSSxFQUFDLFVBRlA7QUFHRSxXQUFLLEVBQUMsT0FIUjtBQUlFLFVBQUksRUFBRTtBQUFFQyxZQUFJLEVBQUUsTUFBUjtBQUFnQkMsVUFBRSxFQUFFO0FBQXBCLE9BSlI7QUFLRSxZQUFNLEVBQUMsU0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREY7QUE4QkQsQ0EvQ0Q7O0dBQU1kLFc7O0tBQUFBLFc7QUFpRFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAyYzMwZDY1N2VjYjFjNTRhZjU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvSW5wdXRcIjtcbmltcG9ydCB7IElucHV0UmlnaHRFbGVtZW50LCBJY29uLCBJbnB1dEdyb3VwIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xuXG5jb25zdCBTZWFyY2hJbnB1dCA9ICh7IHN3aXRjaFRvU2VhcmNoSW5wdXQgfSkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgIHN3aXRjaFRvU2VhcmNoSW5wdXQoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIHN3aXRjaFRvU2VhcmNoSW5wdXQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxJbnB1dEdyb3VwPlxuICAgICAgPElucHV0XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICBwbGFjZWhvbGRlcj1cItC/0L7QuNGB0LpcIlxuICAgICAgICBib3JkZXJDb2xvcj1cImdyYXkuMzAwXCJcbiAgICAgICAgd2lkdGg9e3sgYmFzZTogXCIyNTBweFwiLCBsZzogXCIzMDBweFwiIH19XG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgcm91bmRlZD1cImZ1bGxcIlxuICAgICAgICBfZm9jdXM9e3sgYmc6IFwid2hpdGVcIiwgYm9yZGVyQ29sb3I6IFwiZ3JheS45MDBcIiB9fVxuICAgICAgLz5cbiAgICAgIDxJbnB1dFJpZ2h0RWxlbWVudFxuICAgICAgICByb3VuZGVkPVwiZnVsbFwiXG4gICAgICAgIGJnPVwiZ3JheS45MDBcIlxuICAgICAgICBfZm9jdXM9e3sgYmc6IFwid2hpdGVcIiwgYm9yZGVyQ29sb3I6IFwiZ3JheS45MDBcIiB9fVxuICAgICAgICBfaG92ZXI9e3sgYmc6IFwid2hpdGVcIiwgYm9yZGVyQ29sb3I6IFwiZ3JheS45MDBcIiwgY29sb3I6IFwiZ3JheS45MDBcIiB9fVxuICAgICAgICBjaGlsZHJlbj17XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgbmFtZT1cInNlYXJjaC0yXCJcbiAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgc2l6ZT17eyBiYXNlOiBcIjIwcHhcIiwgbGc6IFwiMjRweFwiIH19XG4gICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvSW5wdXRHcm91cD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaElucHV0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==