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
      lineNumber: 29,
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
      lineNumber: 30,
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
        lineNumber: 54,
        columnNumber: 11
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvU2VhcmNoSW5wdXQuanMiXSwibmFtZXMiOlsiU2VhcmNoSW5wdXQiLCJzd2l0Y2hUb1NlYXJjaElucHV0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIk1vdGlvbklucHV0IiwibW90aW9uIiwiY3VzdG9tIiwiSW5wdXQiLCJNb3Rpb25SaWdodEVsIiwiSW5wdXRSaWdodEVsZW1lbnQiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwib3BhY2l0eSIsImJhc2UiLCJsZyIsIm91dGxpbmUiLCJ4IiwiYmciLCJib3JkZXJDb2xvciIsIkZpU2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUE2QjtBQUFBOztBQUFBLE1BQTFCQyxtQkFBMEIsUUFBMUJBLG1CQUEwQjs7QUFBQSxrQkFDckJDLHNEQUFRLENBQUMsRUFBRCxDQURhO0FBQUEsTUFDeENDLEtBRHdDO0FBQUEsTUFDakNDLFFBRGlDOztBQUcvQyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFEO0FBQUEsV0FBT0YsUUFBUSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0osS0FBVixDQUFmO0FBQUEsR0FBckI7O0FBRUEsTUFBTUssV0FBVyxHQUFHQyxvREFBTSxDQUFDQyxNQUFQLENBQWNDLGtFQUFkLENBQXBCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHSCxvREFBTSxDQUFDQyxNQUFQLENBQWNHLGlFQUFkLENBQXRCOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ1IsQ0FBRCxFQUFPO0FBQzNCLFFBQUlBLENBQUMsQ0FBQ1MsR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDckJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZZCxLQUFaO0FBQ0FGLHlCQUFtQjtBQUNwQjtBQUNGLEdBTEQ7O0FBT0EsTUFBTWlCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZCxLQUFaO0FBQ0FGLHVCQUFtQjtBQUNwQixHQUhEOztBQUtBLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQ0UsVUFBTSxNQURSO0FBRUUsV0FBTyxFQUFFO0FBQUVrQixhQUFPLEVBQUU7QUFBWCxLQUZYO0FBR0UsV0FBTyxFQUFFO0FBQUVBLGFBQU8sRUFBRTtBQUFYLEtBSFg7QUFJRSxTQUFLLEVBQUVoQixLQUpUO0FBS0UsYUFBUyxNQUxYO0FBTUUsVUFBTSxFQUFFRixtQkFOVjtBQU9FLFlBQVEsRUFBRUksWUFQWjtBQVFFLGFBQVMsRUFBRVMsYUFSYjtBQVNFLGVBQVcsRUFBQyxnQ0FUZDtBQVVFLGVBQVcsRUFBQyxVQVZkO0FBV0UsU0FBSyxFQUFFO0FBQUVNLFVBQUksRUFBRSxPQUFSO0FBQWlCQyxRQUFFLEVBQUU7QUFBckIsS0FYVDtBQVlFLFdBQU8sRUFBQyxTQVpWO0FBYUUsV0FBTyxFQUFDLE1BYlY7QUFjRSxVQUFNLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FkVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFpQkUsTUFBQyxhQUFEO0FBQ0UsV0FBTyxFQUFFO0FBQUVILGFBQU8sRUFBRSxDQUFYO0FBQWNJLE9BQUMsRUFBRTtBQUFqQixLQURYO0FBRUUsV0FBTyxFQUFFO0FBQUVKLGFBQU8sRUFBRSxDQUFYO0FBQWNJLE9BQUMsRUFBRTtBQUFqQixLQUZYO0FBR0UsV0FBTyxFQUFDLE1BSFY7QUFJRSxNQUFFLEVBQUMsVUFKTDtBQUtFLFVBQU0sRUFBQyxTQUxUO0FBTUUsVUFBTSxFQUFFO0FBQUVDLFFBQUUsRUFBRSxPQUFOO0FBQWVDLGlCQUFXLEVBQUU7QUFBNUIsS0FOVjtBQU9FLFlBQVEsRUFDTixNQUFDLGdFQUFEO0FBQ0UsYUFBTyxFQUFFUCxXQURYO0FBRUUsUUFBRSxFQUFFUSx1REFGTjtBQUdFLFdBQUssRUFBQyxPQUhSO0FBSUUsVUFBSSxFQUFFO0FBQUVOLFlBQUksRUFBRSxNQUFSO0FBQWdCQyxVQUFFLEVBQUU7QUFBcEIsT0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixDQURGO0FBb0NELENBeEREOztHQUFNckIsVzs7S0FBQUEsVztBQTBEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uYzQzMDUwMmEwNmE1ZGFjYmVmZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0IGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9JbnB1dFwiO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgSW5wdXRHcm91cCwgSW5wdXRSaWdodEVsZW1lbnQgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBGaVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQm94XCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IFNlYXJjaElucHV0ID0gKHsgc3dpdGNoVG9TZWFyY2hJbnB1dCB9KSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcblxuICBjb25zdCBNb3Rpb25JbnB1dCA9IG1vdGlvbi5jdXN0b20oSW5wdXQpO1xuICBjb25zdCBNb3Rpb25SaWdodEVsID0gbW90aW9uLmN1c3RvbShJbnB1dFJpZ2h0RWxlbWVudCk7XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgIHN3aXRjaFRvU2VhcmNoSW5wdXQoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIHN3aXRjaFRvU2VhcmNoSW5wdXQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxJbnB1dEdyb3VwPlxuICAgICAgPE1vdGlvbklucHV0XG4gICAgICAgIGxheW91dFxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgIG9uQmx1cj17c3dpdGNoVG9TZWFyY2hJbnB1dH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICBwbGFjZWhvbGRlcj1cItC/0L7QuNGB0LpcIlxuICAgICAgICBib3JkZXJDb2xvcj1cImdyYXkuMzAwXCJcbiAgICAgICAgd2lkdGg9e3sgYmFzZTogXCIyNTBweFwiLCBsZzogXCIzMDBweFwiIH19XG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgcm91bmRlZD1cImZ1bGxcIlxuICAgICAgICBfZm9jdXM9e3sgb3V0bGluZTogXCJub25lXCIgfX1cbiAgICAgIC8+XG4gICAgICA8TW90aW9uUmlnaHRFbFxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IDAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19XG4gICAgICAgIHJvdW5kZWQ9XCJmdWxsXCJcbiAgICAgICAgYmc9XCJncmF5LjgwMFwiXG4gICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICBfaG92ZXI9e3sgYmc6IFwid2hpdGVcIiwgYm9yZGVyQ29sb3I6IFwiZ3JheS41MFwiIH19XG4gICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgIGFzPXtGaVNlYXJjaH1cbiAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgc2l6ZT17eyBiYXNlOiBcIjIwcHhcIiwgbGc6IFwiMzBweFwiIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L0lucHV0R3JvdXA+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hJbnB1dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=