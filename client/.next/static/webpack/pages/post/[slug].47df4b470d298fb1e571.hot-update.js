webpackHotUpdate_N_E("pages/post/[slug]",{

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
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core/dist/Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../customTheme */ "./customTheme.js");
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

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  var MotionInput = framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].custom(_chakra_ui_core_dist_Input__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var MotionRightEl = framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].custom(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputRightElement"]);

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
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(MotionInput, {
    layout: true,
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    value: value,
    autoFocus: true,
    onBlur: switchToSearchInput,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    placeholder: "\u043F\u043E\u0438\u0441\u043A",
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_6__["borderColor"][colorMode],
    width: {
      base: "250px",
      lg: "300px"
    },
    variant: "outline",
    rounded: "full",
    _focus: {
      outline: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx(MotionRightEl, {
    initial: {
      opacity: 0,
      x: 0
    },
    animate: {
      opacity: 1,
      x: 0
    },
    rounded: "full",
    bg: _customTheme__WEBPACK_IMPORTED_MODULE_6__["bgColorReversed"][colorMode],
    cursor: "pointer",
    _hover: {
      bg: "white",
      borderColor: "gray.50"
    },
    children: __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: handleClick,
      as: react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiSearch"],
      color: _customTheme__WEBPACK_IMPORTED_MODULE_6__["colorReversed"][colorMode],
      size: {
        base: "20px",
        lg: "30px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }));
};

_s(SearchInput, "QCdtltisfmWoxHzOOGJO2YUT/Fc=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["useColorMode"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvU2VhcmNoSW5wdXQuanMiXSwibmFtZXMiOlsiU2VhcmNoSW5wdXQiLCJzd2l0Y2hUb1NlYXJjaElucHV0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsIk1vdGlvbklucHV0IiwibW90aW9uIiwiY3VzdG9tIiwiSW5wdXQiLCJNb3Rpb25SaWdodEVsIiwiSW5wdXRSaWdodEVsZW1lbnQiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwib3BhY2l0eSIsImJvcmRlckNvbG9yIiwiYmFzZSIsImxnIiwib3V0bGluZSIsIngiLCJiZ0NvbG9yUmV2ZXJzZWQiLCJiZyIsIkZpU2VhcmNoIiwiY29sb3JSZXZlcnNlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBNkI7QUFBQTs7QUFBQSxNQUExQkMsbUJBQTBCLFFBQTFCQSxtQkFBMEI7O0FBQUEsa0JBQ3JCQyxzREFBUSxDQUFDLEVBQUQsQ0FEYTtBQUFBLE1BQ3hDQyxLQUR3QztBQUFBLE1BQ2pDQyxRQURpQzs7QUFHL0MsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRDtBQUFBLFdBQU9GLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNKLEtBQVYsQ0FBZjtBQUFBLEdBQXJCOztBQUgrQyxzQkFLekJLLG9FQUFZLEVBTGE7QUFBQSxNQUt2Q0MsU0FMdUMsaUJBS3ZDQSxTQUx1Qzs7QUFPL0MsTUFBTUMsV0FBVyxHQUFHQyxvREFBTSxDQUFDQyxNQUFQLENBQWNDLGtFQUFkLENBQXBCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHSCxvREFBTSxDQUFDQyxNQUFQLENBQWNHLGlFQUFkLENBQXRCOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ1YsQ0FBRCxFQUFPO0FBQzNCLFFBQUlBLENBQUMsQ0FBQ1csR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDckJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsS0FBWjtBQUNBRix5QkFBbUI7QUFDcEI7QUFDRixHQUxEOztBQU9BLE1BQU1tQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCRixXQUFPLENBQUNDLEdBQVIsQ0FBWWhCLEtBQVo7QUFDQUYsdUJBQW1CO0FBQ3BCLEdBSEQ7O0FBS0EsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFdBQUQ7QUFDRSxVQUFNLE1BRFI7QUFFRSxXQUFPLEVBQUU7QUFBRW9CLGFBQU8sRUFBRTtBQUFYLEtBRlg7QUFHRSxXQUFPLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVgsS0FIWDtBQUlFLFNBQUssRUFBRWxCLEtBSlQ7QUFLRSxhQUFTLE1BTFg7QUFNRSxVQUFNLEVBQUVGLG1CQU5WO0FBT0UsWUFBUSxFQUFFSSxZQVBaO0FBUUUsYUFBUyxFQUFFVyxhQVJiO0FBU0UsZUFBVyxFQUFDLGdDQVRkO0FBVUUsZUFBVyxFQUFFTSx3REFBVyxDQUFDYixTQUFELENBVjFCO0FBV0UsU0FBSyxFQUFFO0FBQUVjLFVBQUksRUFBRSxPQUFSO0FBQWlCQyxRQUFFLEVBQUU7QUFBckIsS0FYVDtBQVlFLFdBQU8sRUFBQyxTQVpWO0FBYUUsV0FBTyxFQUFDLE1BYlY7QUFjRSxVQUFNLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FkVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFpQkUsTUFBQyxhQUFEO0FBQ0UsV0FBTyxFQUFFO0FBQUVKLGFBQU8sRUFBRSxDQUFYO0FBQWNLLE9BQUMsRUFBRTtBQUFqQixLQURYO0FBRUUsV0FBTyxFQUFFO0FBQUVMLGFBQU8sRUFBRSxDQUFYO0FBQWNLLE9BQUMsRUFBRTtBQUFqQixLQUZYO0FBR0UsV0FBTyxFQUFDLE1BSFY7QUFJRSxNQUFFLEVBQUVDLDREQUFlLENBQUNsQixTQUFELENBSnJCO0FBS0UsVUFBTSxFQUFDLFNBTFQ7QUFNRSxVQUFNLEVBQUU7QUFBRW1CLFFBQUUsRUFBRSxPQUFOO0FBQWVOLGlCQUFXLEVBQUU7QUFBNUIsS0FOVjtBQU9FLFlBQVEsRUFDTixNQUFDLGdFQUFEO0FBQ0UsYUFBTyxFQUFFRixXQURYO0FBRUUsUUFBRSxFQUFFUyx1REFGTjtBQUdFLFdBQUssRUFBRUMsMERBQWEsQ0FBQ3JCLFNBQUQsQ0FIdEI7QUFJRSxVQUFJLEVBQUU7QUFBRWMsWUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFVBQUUsRUFBRTtBQUFwQixPQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLENBREY7QUFvQ0QsQ0ExREQ7O0dBQU14QixXO1VBS2tCUSw0RDs7O0tBTGxCUixXO0FBNERTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS40N2RmNGI0NzBkMjk4ZmIxZTU3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0lucHV0XCI7XG5pbXBvcnQge1xuICBJY29uQnV0dG9uLFxuICBJbnB1dEdyb3VwLFxuICBJbnB1dFJpZ2h0RWxlbWVudCxcbiAgdXNlQ29sb3JNb2RlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBGaVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQm94XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHtcbiAgYmdDb2xvcixcbiAgYmdDb2xvclJldmVyc2VkLFxuICBib3JkZXJDb2xvcixcbiAgY29sb3IsXG4gIGNvbG9yUmV2ZXJzZWQsXG59IGZyb20gXCIuLi8uLi9jdXN0b21UaGVtZVwiO1xuXG5jb25zdCBTZWFyY2hJbnB1dCA9ICh7IHN3aXRjaFRvU2VhcmNoSW5wdXQgfSkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG5cbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuXG4gIGNvbnN0IE1vdGlvbklucHV0ID0gbW90aW9uLmN1c3RvbShJbnB1dCk7XG4gIGNvbnN0IE1vdGlvblJpZ2h0RWwgPSBtb3Rpb24uY3VzdG9tKElucHV0UmlnaHRFbGVtZW50KTtcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgc3dpdGNoVG9TZWFyY2hJbnB1dCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgc3dpdGNoVG9TZWFyY2hJbnB1dCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPElucHV0R3JvdXA+XG4gICAgICA8TW90aW9uSW5wdXRcbiAgICAgICAgbGF5b3V0XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgb25CbHVyPXtzd2l0Y2hUb1NlYXJjaElucHV0fVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgIHBsYWNlaG9sZGVyPVwi0L/QvtC40YHQulwiXG4gICAgICAgIGJvcmRlckNvbG9yPXtib3JkZXJDb2xvcltjb2xvck1vZGVdfVxuICAgICAgICB3aWR0aD17eyBiYXNlOiBcIjI1MHB4XCIsIGxnOiBcIjMwMHB4XCIgfX1cbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICByb3VuZGVkPVwiZnVsbFwiXG4gICAgICAgIF9mb2N1cz17eyBvdXRsaW5lOiBcIm5vbmVcIiB9fVxuICAgICAgLz5cbiAgICAgIDxNb3Rpb25SaWdodEVsXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgICAgcm91bmRlZD1cImZ1bGxcIlxuICAgICAgICBiZz17YmdDb2xvclJldmVyc2VkW2NvbG9yTW9kZV19XG4gICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICBfaG92ZXI9e3sgYmc6IFwid2hpdGVcIiwgYm9yZGVyQ29sb3I6IFwiZ3JheS41MFwiIH19XG4gICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgIGFzPXtGaVNlYXJjaH1cbiAgICAgICAgICAgIGNvbG9yPXtjb2xvclJldmVyc2VkW2NvbG9yTW9kZV19XG4gICAgICAgICAgICBzaXplPXt7IGJhc2U6IFwiMjBweFwiLCBsZzogXCIzMHB4XCIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvSW5wdXRHcm91cD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaElucHV0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==