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
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core/dist/Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _chakra_ui_core_dist_PseudoBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core/dist/PseudoBox */ "./node_modules/@chakra-ui/core/dist/es/PseudoBox/index.js");
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
      lineNumber: 30,
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
    borderColor: "gray.300",
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
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_core_dist_PseudoBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    as: _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputRightElement"],
    rounded: "full",
    w: "10px",
    bg: "gray.800",
    cursor: "pointer",
    _hover: {
      bg: "white",
      borderColor: "gray.50"
    },
    children: __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: handleClick,
      as: react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiSearch"],
      color: "white",
      size: {
        base: "20px",
        lg: "30px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvU2VhcmNoSW5wdXQuanMiXSwibmFtZXMiOlsiU2VhcmNoSW5wdXQiLCJzd2l0Y2hUb1NlYXJjaElucHV0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIk1vdGlvbklucHV0IiwibW90aW9uIiwiY3VzdG9tIiwiSW5wdXQiLCJNb3Rpb25SaWdodEVsIiwiSW5wdXRSaWdodEVsZW1lbnQiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwib3BhY2l0eSIsImJhc2UiLCJsZyIsIm91dGxpbmUiLCJiZyIsImJvcmRlckNvbG9yIiwiRmlTZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQTZCO0FBQUE7O0FBQUEsTUFBMUJDLG1CQUEwQixRQUExQkEsbUJBQTBCOztBQUFBLGtCQUNyQkMsc0RBQVEsQ0FBQyxFQUFELENBRGE7QUFBQSxNQUN4Q0MsS0FEd0M7QUFBQSxNQUNqQ0MsUUFEaUM7O0FBRy9DLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQ7QUFBQSxXQUFPRixRQUFRLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUFWLENBQWY7QUFBQSxHQUFyQjs7QUFFQSxNQUFNSyxXQUFXLEdBQUdDLG9EQUFNLENBQUNDLE1BQVAsQ0FBY0Msa0VBQWQsQ0FBcEI7QUFDQSxNQUFNQyxhQUFhLEdBQUdILG9EQUFNLENBQUNDLE1BQVAsQ0FBY0csaUVBQWQsQ0FBdEI7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDUixDQUFELEVBQU87QUFDM0IsUUFBSUEsQ0FBQyxDQUFDUyxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlkLEtBQVo7QUFDQUYseUJBQW1CO0FBQ3BCO0FBQ0YsR0FMRDs7QUFPQSxNQUFNaUIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkYsV0FBTyxDQUFDQyxHQUFSLENBQVlkLEtBQVo7QUFDQUYsdUJBQW1CO0FBQ3BCLEdBSEQ7O0FBS0EsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFdBQUQ7QUFDRSxVQUFNLE1BRFI7QUFFRSxXQUFPLEVBQUU7QUFBRWtCLGFBQU8sRUFBRTtBQUFYLEtBRlg7QUFHRSxXQUFPLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVgsS0FIWDtBQUlFLFNBQUssRUFBRWhCLEtBSlQ7QUFLRSxhQUFTLE1BTFg7QUFNRSxVQUFNLEVBQUVGLG1CQU5WO0FBT0UsWUFBUSxFQUFFSSxZQVBaO0FBUUUsYUFBUyxFQUFFUyxhQVJiO0FBU0UsZUFBVyxFQUFDLGdDQVRkO0FBVUUsZUFBVyxFQUFDLFVBVmQ7QUFXRSxTQUFLLEVBQUU7QUFBRU0sVUFBSSxFQUFFLE9BQVI7QUFBaUJDLFFBQUUsRUFBRTtBQUFyQixLQVhUO0FBWUUsV0FBTyxFQUFDLFNBWlY7QUFhRSxXQUFPLEVBQUMsTUFiVjtBQWNFLFVBQU0sRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQWRWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQWlCRSxNQUFDLHNFQUFEO0FBQ0UsTUFBRSxFQUFFVCxpRUFETjtBQUVFLFdBQU8sRUFBQyxNQUZWO0FBR0UsS0FBQyxFQUFDLE1BSEo7QUFJRSxNQUFFLEVBQUMsVUFKTDtBQUtFLFVBQU0sRUFBQyxTQUxUO0FBTUUsVUFBTSxFQUFFO0FBQUVVLFFBQUUsRUFBRSxPQUFOO0FBQWVDLGlCQUFXLEVBQUU7QUFBNUIsS0FOVjtBQU9FLFlBQVEsRUFDTixNQUFDLGdFQUFEO0FBQ0UsYUFBTyxFQUFFTixXQURYO0FBRUUsUUFBRSxFQUFFTyx1REFGTjtBQUdFLFdBQUssRUFBQyxPQUhSO0FBSUUsVUFBSSxFQUFFO0FBQUVMLFlBQUksRUFBRSxNQUFSO0FBQWdCQyxVQUFFLEVBQUU7QUFBcEIsT0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixDQURGO0FBb0NELENBeEREOztHQUFNckIsVzs7S0FBQUEsVztBQTBEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjA0OGU5MGE4NDlmNjI1ZjAyZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0IGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9JbnB1dFwiO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgSW5wdXRHcm91cCwgSW5wdXRSaWdodEVsZW1lbnQgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBGaVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQm94XCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUHNldWRvQm94IGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9Qc2V1ZG9Cb3hcIjtcblxuY29uc3QgU2VhcmNoSW5wdXQgPSAoeyBzd2l0Y2hUb1NlYXJjaElucHV0IH0pID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuXG4gIGNvbnN0IE1vdGlvbklucHV0ID0gbW90aW9uLmN1c3RvbShJbnB1dCk7XG4gIGNvbnN0IE1vdGlvblJpZ2h0RWwgPSBtb3Rpb24uY3VzdG9tKElucHV0UmlnaHRFbGVtZW50KTtcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgc3dpdGNoVG9TZWFyY2hJbnB1dCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgc3dpdGNoVG9TZWFyY2hJbnB1dCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPElucHV0R3JvdXA+XG4gICAgICA8TW90aW9uSW5wdXRcbiAgICAgICAgbGF5b3V0XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgb25CbHVyPXtzd2l0Y2hUb1NlYXJjaElucHV0fVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgIHBsYWNlaG9sZGVyPVwi0L/QvtC40YHQulwiXG4gICAgICAgIGJvcmRlckNvbG9yPVwiZ3JheS4zMDBcIlxuICAgICAgICB3aWR0aD17eyBiYXNlOiBcIjI1MHB4XCIsIGxnOiBcIjMwMHB4XCIgfX1cbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICByb3VuZGVkPVwiZnVsbFwiXG4gICAgICAgIF9mb2N1cz17eyBvdXRsaW5lOiBcIm5vbmVcIiB9fVxuICAgICAgLz5cbiAgICAgIDxQc2V1ZG9Cb3hcbiAgICAgICAgYXM9e0lucHV0UmlnaHRFbGVtZW50fVxuICAgICAgICByb3VuZGVkPVwiZnVsbFwiXG4gICAgICAgIHc9XCIxMHB4XCJcbiAgICAgICAgYmc9XCJncmF5LjgwMFwiXG4gICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICBfaG92ZXI9e3sgYmc6IFwid2hpdGVcIiwgYm9yZGVyQ29sb3I6IFwiZ3JheS41MFwiIH19XG4gICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgIGFzPXtGaVNlYXJjaH1cbiAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgc2l6ZT17eyBiYXNlOiBcIjIwcHhcIiwgbGc6IFwiMzBweFwiIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L0lucHV0R3JvdXA+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hJbnB1dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=