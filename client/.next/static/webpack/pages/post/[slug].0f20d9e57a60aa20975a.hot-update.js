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
      lineNumber: 37,
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
      lineNumber: 38,
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
      color: _customTheme__WEBPACK_IMPORTED_MODULE_6__["color"][colorMode],
      size: {
        base: "20px",
        lg: "30px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvU2VhcmNoSW5wdXQuanMiXSwibmFtZXMiOlsiU2VhcmNoSW5wdXQiLCJzd2l0Y2hUb1NlYXJjaElucHV0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsIk1vdGlvbklucHV0IiwibW90aW9uIiwiY3VzdG9tIiwiSW5wdXQiLCJNb3Rpb25SaWdodEVsIiwiSW5wdXRSaWdodEVsZW1lbnQiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwib3BhY2l0eSIsImJvcmRlckNvbG9yIiwiYmFzZSIsImxnIiwib3V0bGluZSIsIngiLCJiZyIsIkZpU2VhcmNoIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQTZCO0FBQUE7O0FBQUEsTUFBMUJDLG1CQUEwQixRQUExQkEsbUJBQTBCOztBQUFBLGtCQUNyQkMsc0RBQVEsQ0FBQyxFQUFELENBRGE7QUFBQSxNQUN4Q0MsS0FEd0M7QUFBQSxNQUNqQ0MsUUFEaUM7O0FBRy9DLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQ7QUFBQSxXQUFPRixRQUFRLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUFWLENBQWY7QUFBQSxHQUFyQjs7QUFIK0Msc0JBS3pCSyxvRUFBWSxFQUxhO0FBQUEsTUFLdkNDLFNBTHVDLGlCQUt2Q0EsU0FMdUM7O0FBTy9DLE1BQU1DLFdBQVcsR0FBR0Msb0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxrRUFBZCxDQUFwQjtBQUNBLE1BQU1DLGFBQWEsR0FBR0gsb0RBQU0sQ0FBQ0MsTUFBUCxDQUFjRyxpRUFBZCxDQUF0Qjs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNWLENBQUQsRUFBTztBQUMzQixRQUFJQSxDQUFDLENBQUNXLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ3JCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWWhCLEtBQVo7QUFDQUYseUJBQW1CO0FBQ3BCO0FBQ0YsR0FMRDs7QUFPQSxNQUFNbUIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkYsV0FBTyxDQUFDQyxHQUFSLENBQVloQixLQUFaO0FBQ0FGLHVCQUFtQjtBQUNwQixHQUhEOztBQUtBLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQ0UsVUFBTSxNQURSO0FBRUUsV0FBTyxFQUFFO0FBQUVvQixhQUFPLEVBQUU7QUFBWCxLQUZYO0FBR0UsV0FBTyxFQUFFO0FBQUVBLGFBQU8sRUFBRTtBQUFYLEtBSFg7QUFJRSxTQUFLLEVBQUVsQixLQUpUO0FBS0UsYUFBUyxNQUxYO0FBTUUsVUFBTSxFQUFFRixtQkFOVjtBQU9FLFlBQVEsRUFBRUksWUFQWjtBQVFFLGFBQVMsRUFBRVcsYUFSYjtBQVNFLGVBQVcsRUFBQyxnQ0FUZDtBQVVFLGVBQVcsRUFBRU0sd0RBQVcsQ0FBQ2IsU0FBRCxDQVYxQjtBQVdFLFNBQUssRUFBRTtBQUFFYyxVQUFJLEVBQUUsT0FBUjtBQUFpQkMsUUFBRSxFQUFFO0FBQXJCLEtBWFQ7QUFZRSxXQUFPLEVBQUMsU0FaVjtBQWFFLFdBQU8sRUFBQyxNQWJWO0FBY0UsVUFBTSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBZFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBaUJFLE1BQUMsYUFBRDtBQUNFLFdBQU8sRUFBRTtBQUFFSixhQUFPLEVBQUUsQ0FBWDtBQUFjSyxPQUFDLEVBQUU7QUFBakIsS0FEWDtBQUVFLFdBQU8sRUFBRTtBQUFFTCxhQUFPLEVBQUUsQ0FBWDtBQUFjSyxPQUFDLEVBQUU7QUFBakIsS0FGWDtBQUdFLFdBQU8sRUFBQyxNQUhWO0FBSUUsTUFBRSxFQUFDLFVBSkw7QUFLRSxVQUFNLEVBQUMsU0FMVDtBQU1FLFVBQU0sRUFBRTtBQUFFQyxRQUFFLEVBQUUsT0FBTjtBQUFlTCxpQkFBVyxFQUFFO0FBQTVCLEtBTlY7QUFPRSxZQUFRLEVBQ04sTUFBQyxnRUFBRDtBQUNFLGFBQU8sRUFBRUYsV0FEWDtBQUVFLFFBQUUsRUFBRVEsdURBRk47QUFHRSxXQUFLLEVBQUVDLGtEQUFLLENBQUNwQixTQUFELENBSGQ7QUFJRSxVQUFJLEVBQUU7QUFBRWMsWUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFVBQUUsRUFBRTtBQUFwQixPQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLENBREY7QUFvQ0QsQ0ExREQ7O0dBQU14QixXO1VBS2tCUSw0RDs7O0tBTGxCUixXO0FBNERTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS4wZjIwZDllNTdhNjBhYTIwOTc1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0lucHV0XCI7XG5pbXBvcnQge1xuICBJY29uQnV0dG9uLFxuICBJbnB1dEdyb3VwLFxuICBJbnB1dFJpZ2h0RWxlbWVudCxcbiAgdXNlQ29sb3JNb2RlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBGaVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQm94XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgYm9yZGVyQ29sb3IsIGNvbG9yIH0gZnJvbSBcIi4uLy4uL2N1c3RvbVRoZW1lXCI7XG5cbmNvbnN0IFNlYXJjaElucHV0ID0gKHsgc3dpdGNoVG9TZWFyY2hJbnB1dCB9KSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcblxuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG5cbiAgY29uc3QgTW90aW9uSW5wdXQgPSBtb3Rpb24uY3VzdG9tKElucHV0KTtcbiAgY29uc3QgTW90aW9uUmlnaHRFbCA9IG1vdGlvbi5jdXN0b20oSW5wdXRSaWdodEVsZW1lbnQpO1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICBzd2l0Y2hUb1NlYXJjaElucHV0KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICBzd2l0Y2hUb1NlYXJjaElucHV0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8SW5wdXRHcm91cD5cbiAgICAgIDxNb3Rpb25JbnB1dFxuICAgICAgICBsYXlvdXRcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICBvbkJsdXI9e3N3aXRjaFRvU2VhcmNoSW5wdXR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCLQv9C+0LjRgdC6XCJcbiAgICAgICAgYm9yZGVyQ29sb3I9e2JvcmRlckNvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgIHdpZHRoPXt7IGJhc2U6IFwiMjUwcHhcIiwgbGc6IFwiMzAwcHhcIiB9fVxuICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgIHJvdW5kZWQ9XCJmdWxsXCJcbiAgICAgICAgX2ZvY3VzPXt7IG91dGxpbmU6IFwibm9uZVwiIH19XG4gICAgICAvPlxuICAgICAgPE1vdGlvblJpZ2h0RWxcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICByb3VuZGVkPVwiZnVsbFwiXG4gICAgICAgIGJnPVwiZ3JheS44MDBcIlxuICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgX2hvdmVyPXt7IGJnOiBcIndoaXRlXCIsIGJvcmRlckNvbG9yOiBcImdyYXkuNTBcIiB9fVxuICAgICAgICBjaGlsZHJlbj17XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICBhcz17RmlTZWFyY2h9XG4gICAgICAgICAgICBjb2xvcj17Y29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgICAgIHNpemU9e3sgYmFzZTogXCIyMHB4XCIsIGxnOiBcIjMwcHhcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9JbnB1dEdyb3VwPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoSW5wdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9