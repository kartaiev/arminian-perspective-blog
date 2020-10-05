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
    cursor: "pointer",
    _hover: {
      bg: "white",
      borderColor: "gray.50"
    },
    children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      onClick: handleClick,
      name: "search-2",
      color: "white",
      size: {
        base: "20px",
        lg: "24px"
      },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvU2VhcmNoSW5wdXQuanMiXSwibmFtZXMiOlsiU2VhcmNoSW5wdXQiLCJzd2l0Y2hUb1NlYXJjaElucHV0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImhhbmRsZUtleURvd24iLCJrZXkiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2siLCJiYXNlIiwibGciLCJiZyIsImJvcmRlckNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUE2QjtBQUFBOztBQUFBLE1BQTFCQyxtQkFBMEIsUUFBMUJBLG1CQUEwQjs7QUFBQSxrQkFDckJDLHNEQUFRLENBQUMsRUFBRCxDQURhO0FBQUEsTUFDeENDLEtBRHdDO0FBQUEsTUFDakNDLFFBRGlDOztBQUcvQyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFEO0FBQUEsV0FBT0YsUUFBUSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0osS0FBVixDQUFmO0FBQUEsR0FBckI7O0FBRUEsTUFBTUssYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRixDQUFELEVBQU87QUFDM0IsUUFBSUEsQ0FBQyxDQUFDRyxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlSLEtBQVo7QUFDQUYseUJBQW1CO0FBQ3BCO0FBQ0YsR0FMRDs7QUFPQSxNQUFNVyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCRixXQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBWjtBQUNBRix1QkFBbUI7QUFDcEIsR0FIRDs7QUFLQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFDRSxTQUFLLEVBQUVFLEtBRFQ7QUFFRSxZQUFRLEVBQUVFLFlBRlo7QUFHRSxhQUFTLEVBQUVHLGFBSGI7QUFJRSxlQUFXLEVBQUMsZ0NBSmQ7QUFLRSxlQUFXLEVBQUMsVUFMZDtBQU1FLFNBQUssRUFBRTtBQUFFSyxVQUFJLEVBQUUsT0FBUjtBQUFpQkMsUUFBRSxFQUFFO0FBQXJCLEtBTlQ7QUFPRSxXQUFPLEVBQUMsU0FQVjtBQVFFLFdBQU8sRUFBQyxNQVJWO0FBU0UsVUFBTSxFQUFFO0FBQUVDLFFBQUUsRUFBRSxPQUFOO0FBQWVDLGlCQUFXLEVBQUU7QUFBNUIsS0FUVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFZRSxNQUFDLGlFQUFEO0FBQ0UsV0FBTyxFQUFDLE1BRFY7QUFFRSxNQUFFLEVBQUMsVUFGTDtBQUdFLFVBQU0sRUFBQyxTQUhUO0FBSUUsVUFBTSxFQUFFO0FBQUVELFFBQUUsRUFBRSxPQUFOO0FBQWVDLGlCQUFXLEVBQUU7QUFBNUIsS0FKVjtBQUtFLFlBQVEsRUFDTixNQUFDLG9EQUFEO0FBQ0UsYUFBTyxFQUFFSixXQURYO0FBRUUsVUFBSSxFQUFDLFVBRlA7QUFHRSxXQUFLLEVBQUMsT0FIUjtBQUlFLFVBQUksRUFBRTtBQUFFQyxZQUFJLEVBQUUsTUFBUjtBQUFnQkMsVUFBRSxFQUFFO0FBQXBCLE9BSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURGO0FBNkJELENBOUNEOztHQUFNZCxXOztLQUFBQSxXO0FBZ0RTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xOWYzZWY3YTM1YTlhY2MwYzY1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0lucHV0XCI7XG5pbXBvcnQgeyBJbnB1dFJpZ2h0RWxlbWVudCwgSWNvbiwgSW5wdXRHcm91cCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcblxuY29uc3QgU2VhcmNoSW5wdXQgPSAoeyBzd2l0Y2hUb1NlYXJjaElucHV0IH0pID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICBzd2l0Y2hUb1NlYXJjaElucHV0KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICBzd2l0Y2hUb1NlYXJjaElucHV0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8SW5wdXRHcm91cD5cbiAgICAgIDxJbnB1dFxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCLQv9C+0LjRgdC6XCJcbiAgICAgICAgYm9yZGVyQ29sb3I9XCJncmF5LjMwMFwiXG4gICAgICAgIHdpZHRoPXt7IGJhc2U6IFwiMjUwcHhcIiwgbGc6IFwiMzAwcHhcIiB9fVxuICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgIHJvdW5kZWQ9XCJmdWxsXCJcbiAgICAgICAgX2ZvY3VzPXt7IGJnOiBcIndoaXRlXCIsIGJvcmRlckNvbG9yOiBcImdyYXkuOTAwXCIgfX1cbiAgICAgIC8+XG4gICAgICA8SW5wdXRSaWdodEVsZW1lbnRcbiAgICAgICAgcm91bmRlZD1cImZ1bGxcIlxuICAgICAgICBiZz1cImdyYXkuOTAwXCJcbiAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgIF9ob3Zlcj17eyBiZzogXCJ3aGl0ZVwiLCBib3JkZXJDb2xvcjogXCJncmF5LjUwXCIgfX1cbiAgICAgICAgY2hpbGRyZW49e1xuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgIG5hbWU9XCJzZWFyY2gtMlwiXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIHNpemU9e3sgYmFzZTogXCIyMHB4XCIsIGxnOiBcIjI0cHhcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9JbnB1dEdyb3VwPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoSW5wdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9