webpackHotUpdate_N_E("pages/statement",{

/***/ "./components/layout/Nav.js":
/*!**********************************!*\
  !*** ./components/layout/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\layout\\Nav.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Nav = function Nav() {
  _s();

  var pathName = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])().pathname;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      opened = _useState[0],
      setOpened = _useState[1];

  var handleOpen = function handleOpen() {
    setOpened(function (state) {
      return !state;
    });
  };

  var pages = [{
    label: "статьи",
    path: "/"
  }, {
    label: "об этом сайте",
    path: "/about"
  }, {
    label: "утверждение веры",
    path: "/statement"
  }, {
    label: "поддержи проект",
    path: "/give"
  }];
  var links = pages.map(function (_ref) {
    var label = _ref.label,
        path = _ref.path;
    return __jsx("li", {
      key: path,
      className: pathName === path ? "active" : "inactive hover:border-gray-300",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, __jsx("a", {
      className: "border-none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }, label)));
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "h-10 lg:h-16 w-full border-b border-gray-300 flex items-center justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "hidden md:text-lg lg:text-xl xl:w-3/4 xl:px-12  h-full lg:flex lg:items-center lg:justify-around",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, links), __jsx("button", {
    onClick: handleOpen,
    className: "lg:hidden  focus:outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "\u043C\u0435\u043D\u044E")), opened && __jsx("ul", {
    className: "h-26 py-2 flex items-center justify-center flex-wrap border-b border-gray-300",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, links));
};

_s(Nav, "8yqPY/X0F91/bqDaU+Tr5hgMJxQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTmF2LmpzIl0sIm5hbWVzIjpbIk5hdiIsInBhdGhOYW1lIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJ1c2VTdGF0ZSIsIm9wZW5lZCIsInNldE9wZW5lZCIsImhhbmRsZU9wZW4iLCJzdGF0ZSIsInBhZ2VzIiwibGFiZWwiLCJwYXRoIiwibGlua3MiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUNoQixNQUFNQyxRQUFRLEdBQUdDLDZEQUFTLEdBQUdDLFFBQTdCOztBQURnQixrQkFFWUMsc0RBQVEsQ0FBQyxLQUFELENBRnBCO0FBQUEsTUFFVEMsTUFGUztBQUFBLE1BRURDLFNBRkM7O0FBSWhCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJELGFBQVMsQ0FBQyxVQUFDRSxLQUFEO0FBQUEsYUFBVyxDQUFDQSxLQUFaO0FBQUEsS0FBRCxDQUFUO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUFFQyxTQUFLLEVBQUUsUUFBVDtBQUFtQkMsUUFBSSxFQUFFO0FBQXpCLEdBRFksRUFFWjtBQUFFRCxTQUFLLEVBQUUsZUFBVDtBQUEwQkMsUUFBSSxFQUFFO0FBQWhDLEdBRlksRUFHWjtBQUFFRCxTQUFLLEVBQUUsa0JBQVQ7QUFBNkJDLFFBQUksRUFBRTtBQUFuQyxHQUhZLEVBSVo7QUFBRUQsU0FBSyxFQUFFLGlCQUFUO0FBQTRCQyxRQUFJLEVBQUU7QUFBbEMsR0FKWSxDQUFkO0FBT0EsTUFBTUMsS0FBSyxHQUFHSCxLQUFLLENBQUNJLEdBQU4sQ0FBVSxnQkFBcUI7QUFBQSxRQUFsQkgsS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsUUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzNDLFdBQ0U7QUFDRSxTQUFHLEVBQUVBLElBRFA7QUFFRSxlQUFTLEVBQ1BWLFFBQVEsS0FBS1UsSUFBYixHQUFvQixRQUFwQixHQUErQixnQ0FIbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1FLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVBLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE0QkQsS0FBNUIsQ0FERixDQU5GLENBREY7QUFZRCxHQWJhLENBQWQ7QUFlQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywrRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsa0dBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxLQURILENBREYsRUFJRTtBQUFRLFdBQU8sRUFBRUwsVUFBakI7QUFBNkIsYUFBUyxFQUFDLCtCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUpGLENBREYsRUFTR0YsTUFBTSxJQUNMO0FBQUksYUFBUyxFQUFDLCtFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR08sS0FESCxDQVZKLENBREY7QUFpQkQsQ0EvQ0Q7O0dBQU1aLEc7VUFDYUUscUQ7OztLQURiRixHO0FBaURTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGF0ZW1lbnQuODFiM2Q5M2EyZGZhNjk0MDhkNGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgY29uc3QgcGF0aE5hbWUgPSB1c2VSb3V0ZXIoKS5wYXRobmFtZTtcbiAgY29uc3QgW29wZW5lZCwgc2V0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xuICAgIHNldE9wZW5lZCgoc3RhdGUpID0+ICFzdGF0ZSk7XG4gIH07XG5cbiAgY29uc3QgcGFnZXMgPSBbXG4gICAgeyBsYWJlbDogXCLRgdGC0LDRgtGM0LhcIiwgcGF0aDogXCIvXCIgfSxcbiAgICB7IGxhYmVsOiBcItC+0LEg0Y3RgtC+0Lwg0YHQsNC50YLQtVwiLCBwYXRoOiBcIi9hYm91dFwiIH0sXG4gICAgeyBsYWJlbDogXCLRg9GC0LLQtdGA0LbQtNC10L3QuNC1INCy0LXRgNGLXCIsIHBhdGg6IFwiL3N0YXRlbWVudFwiIH0sXG4gICAgeyBsYWJlbDogXCLQv9C+0LTQtNC10YDQttC4INC/0YDQvtC10LrRglwiLCBwYXRoOiBcIi9naXZlXCIgfSxcbiAgXTtcblxuICBjb25zdCBsaW5rcyA9IHBhZ2VzLm1hcCgoeyBsYWJlbCwgcGF0aCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaVxuICAgICAgICBrZXk9e3BhdGh9XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgcGF0aE5hbWUgPT09IHBhdGggPyBcImFjdGl2ZVwiIDogXCJpbmFjdGl2ZSBob3Zlcjpib3JkZXItZ3JheS0zMDBcIlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9e3BhdGh9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJvcmRlci1ub25lXCI+e2xhYmVsfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTAgbGc6aC0xNiB3LWZ1bGwgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6dGV4dC1sZyBsZzp0ZXh0LXhsIHhsOnctMy80IHhsOnB4LTEyICBoLWZ1bGwgbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6anVzdGlmeS1hcm91bmRcIj5cbiAgICAgICAgICB7bGlua3N9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlT3Blbn0gY2xhc3NOYW1lPVwibGc6aGlkZGVuICBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICDQvNC10L3RjlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAge29wZW5lZCAmJiAoXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJoLTI2IHB5LTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC13cmFwIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgIHtsaW5rc31cbiAgICAgICAgPC91bD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9