webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _components_IconsBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/IconsBtn */ "./components/IconsBtn.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/icons */ "./lib/icons.js");
/* harmony import */ var _components_posts_preview_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/posts-preview/PostCard */ "./components/posts-preview/PostCard.js");
/* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useWindowWidth */ "./hooks/useWindowWidth.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _lib_vars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/vars */ "./lib/vars.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var App = function App(_ref) {
  _s();

  var posts = _ref.posts;

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__["useToggle"])(),
      isListView = _useToggle.isToggled,
      setListView = _useToggle.setToggle,
      switchView = _useToggle.toggle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      index = _useState[0],
      setIndex = _useState[1];

  var width = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__["useWindowWidth"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    width <= 768 && setListView(false);
  }, [width]);
  var initialData = !index && posts;

  var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_7__["useGetPosts"])(index, initialData),
      paginatedPosts = _useGetPosts.data;

  var previews = paginatedPosts && paginatedPosts.map(function (_ref2) {
    var _id = _ref2._id,
        title = _ref2.title,
        subtitle = _ref2.subtitle,
        slug = _ref2.slug,
        mainImage = _ref2.mainImage,
        publishedAt = _ref2.publishedAt,
        body = _ref2.body;
    return __jsx(_components_posts_preview_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: _id,
      title: title,
      subtitle: subtitle,
      slug: slug,
      mainImage: mainImage,
      publishedAt: publishedAt,
      body: body,
      isListView: isListView,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    });
  });
  var gridClass = isListView ? "md:mx-16" : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, !paginatedPosts && __jsx("div", {
    className: "h-full w-full flex items-center justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "hidden h-10 mt-6 justify-start items-center lg:flex md:px-16 xl:px-16 ip:px-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(_components_IconsBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    firstIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_4__["gridIcon"],
    secondIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_4__["listIcon"],
    isListView: isListView,
    switchView: switchView,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6 lg:mx-16 ip:mx-64 ".concat(gridClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, previews), __jsx("div", {
    className: "flex justify-between my-12 lg:mx-16 ip:mx-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "border border-gray-400 px-4 py-2 rounded-lg hover:border-gray-800",
    onClick: function onClick() {
      return setIndex(index - _lib_vars__WEBPACK_IMPORTED_MODULE_9__["PAGE_SIZE"]);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, _lib_icons__WEBPACK_IMPORTED_MODULE_4__["rightArrow"], __jsx("span", {
    className: "pl-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F")), __jsx("button", {
    className: "border border-gray-400 px-4 py-2 rounded-lg hover:border-gray-800",
    onClick: function onClick() {
      return setIndex((index + 1) * _lib_vars__WEBPACK_IMPORTED_MODULE_9__["PAGE_SIZE"]);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "hidden lg:inline pr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "\u0421\u0434\u0435\u0434\u0443\u044E\u0449\u0430\u044F"), _lib_icons__WEBPACK_IMPORTED_MODULE_4__["leftArrow"])));
};

_s(App, "4Xs7K2l8guUeVkqj/Sg/wbDHtpc=", false, function () {
  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__["useToggle"], _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__["useWindowWidth"], _actions__WEBPACK_IMPORTED_MODULE_7__["useGetPosts"]];
});

_c = App;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VUb2dnbGUiLCJpc0xpc3RWaWV3IiwiaXNUb2dnbGVkIiwic2V0TGlzdFZpZXciLCJzZXRUb2dnbGUiLCJzd2l0Y2hWaWV3IiwidG9nZ2xlIiwidXNlU3RhdGUiLCJpbmRleCIsInNldEluZGV4Iiwid2lkdGgiLCJ1c2VXaW5kb3dXaWR0aCIsInVzZUVmZmVjdCIsImluaXRpYWxEYXRhIiwidXNlR2V0UG9zdHMiLCJwYWdpbmF0ZWRQb3N0cyIsImRhdGEiLCJwcmV2aWV3cyIsIm1hcCIsIl9pZCIsInRpdGxlIiwic3VidGl0bGUiLCJzbHVnIiwibWFpbkltYWdlIiwicHVibGlzaGVkQXQiLCJib2R5IiwiZ3JpZENsYXNzIiwiZ3JpZEljb24iLCJsaXN0SWNvbiIsIlBBR0VfU0laRSIsInJpZ2h0QXJyb3ciLCJsZWZ0QXJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLG1CQUtyQkMsa0VBQVMsRUFMWTtBQUFBLE1BRVpDLFVBRlksY0FFdkJDLFNBRnVCO0FBQUEsTUFHWkMsV0FIWSxjQUd2QkMsU0FIdUI7QUFBQSxNQUlmQyxVQUplLGNBSXZCQyxNQUp1Qjs7QUFBQSxrQkFPQ0Msc0RBQVEsQ0FBQyxDQUFELENBUFQ7QUFBQSxNQU9sQkMsS0FQa0I7QUFBQSxNQU9YQyxRQVBXOztBQVN6QixNQUFNQyxLQUFLLEdBQUdDLDRFQUFjLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixTQUFLLElBQUksR0FBVCxJQUFnQlAsV0FBVyxDQUFDLEtBQUQsQ0FBM0I7QUFDRCxHQUZRLEVB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Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9jb21wb25lbnRzL0ljb25zQnRuXCI7XG5pbXBvcnQgeyBncmlkSWNvbiwgbGlzdEljb24sIHJpZ2h0QXJyb3csIGxlZnRBcnJvdyB9IGZyb20gXCIuLi9saWIvaWNvbnNcIjtcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RDYXJkXCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dXaWR0aCB9IGZyb20gXCIuLi9ob29rcy91c2VXaW5kb3dXaWR0aFwiO1xuaW1wb3J0IHsgdXNlR2V0UG9zdHMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBQQUdFX1NJWkUgfSBmcm9tIFwiLi4vbGliL3ZhcnNcIjtcblxuY29uc3QgQXBwID0gKHsgcG9zdHMgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgaXNUb2dnbGVkOiBpc0xpc3RWaWV3LFxuICAgIHNldFRvZ2dsZTogc2V0TGlzdFZpZXcsXG4gICAgdG9nZ2xlOiBzd2l0Y2hWaWV3LFxuICB9ID0gdXNlVG9nZ2xlKCk7XG5cbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCB3aWR0aCA9IHVzZVdpbmRvd1dpZHRoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aWR0aCA8PSA3NjggJiYgc2V0TGlzdFZpZXcoZmFsc2UpO1xuICB9LCBbd2lkdGhdKTtcblxuICBjb25zdCBpbml0aWFsRGF0YSA9ICFpbmRleCAmJiBwb3N0cztcblxuICBjb25zdCB7IGRhdGE6IHBhZ2luYXRlZFBvc3RzIH0gPSB1c2VHZXRQb3N0cyhpbmRleCwgaW5pdGlhbERhdGEpO1xuXG4gIGNvbnN0IHByZXZpZXdzID1cbiAgICBwYWdpbmF0ZWRQb3N0cyAmJlxuICAgIHBhZ2luYXRlZFBvc3RzLm1hcChcbiAgICAgICh7IF9pZCwgdGl0bGUsIHN1YnRpdGxlLCBzbHVnLCBtYWluSW1hZ2UsIHB1Ymxpc2hlZEF0LCBib2R5IH0pID0+IChcbiAgICAgICAgPFBvc3RDYXJkXG4gICAgICAgICAga2V5PXtfaWR9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgIG1haW5JbWFnZT17bWFpbkltYWdlfVxuICAgICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgICAgICAgICBib2R5PXtib2R5fVxuICAgICAgICAgIGlzTGlzdFZpZXc9e2lzTGlzdFZpZXd9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgKTtcblxuICBjb25zdCBncmlkQ2xhc3MgPSBpc0xpc3RWaWV3XG4gICAgPyBcIm1kOm14LTE2XCJcbiAgICA6IFwibGc6Z3JpZC1jb2xzLTIgbGc6bXQtMiBpcDpncmlkLWNvbHMtMyB4bDpnYXAtMTJcIjtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7IXBhZ2luYXRlZFBvc3RzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+PC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gaC0xMCBtdC02IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGxnOmZsZXggbWQ6cHgtMTYgeGw6cHgtMTYgaXA6cHgtNjRcIj5cbiAgICAgICAgPEljb25zQnRuXG4gICAgICAgICAgZmlyc3RJY29uPXtncmlkSWNvbn1cbiAgICAgICAgICBzZWNvbmRJY29uPXtsaXN0SWNvbn1cbiAgICAgICAgICBpc0xpc3RWaWV3PXtpc0xpc3RWaWV3fVxuICAgICAgICAgIHN3aXRjaFZpZXc9e3N3aXRjaFZpZXd9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgbWItNiBncmlkIGdyaWQtY29scy0xIGdhcC02IGxnOm14LTE2IGlwOm14LTY0ICR7Z3JpZENsYXNzfWB9XG4gICAgICA+XG4gICAgICAgIHtwcmV2aWV3c31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBteS0xMiBsZzpteC0xNiBpcDpteC02NFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC00IHB5LTIgcm91bmRlZC1sZyBob3Zlcjpib3JkZXItZ3JheS04MDBcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEluZGV4KGluZGV4IC0gUEFHRV9TSVpFKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyaWdodEFycm93fVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTJcIj7Qn9GA0LXQtNGL0LTRg9GJ0LDRjzwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS00MDAgcHgtNCBweS0yIHJvdW5kZWQtbGcgaG92ZXI6Ym9yZGVyLWdyYXktODAwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJbmRleCgoaW5kZXggKyAxKSAqIFBBR0VfU0laRSl9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lIHByLTJcIj7QodC00LXQtNGD0Y7RidCw0Y88L3NwYW4+XG4gICAgICAgICAge2xlZnRBcnJvd31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygwKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==