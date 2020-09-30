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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
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

  var _useSWRInfinite = Object(swr__WEBPACK_IMPORTED_MODULE_10__["useSWRInfinite"])(_actions__WEBPACK_IMPORTED_MODULE_7__["getKey"], _actions__WEBPACK_IMPORTED_MODULE_7__["fetcher"]),
      paginatedPosts = _useSWRInfinite.data,
      size = _useSWRInfinite.size,
      setSize = _useSWRInfinite.setSize;

  if (!paginatedPosts) return "loading";
  var previews = paginatedPosts && paginatedPosts.map(function (el) {
    return el.map(function (_ref2) {
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
          lineNumber: 42,
          columnNumber: 9
        }
      });
    });
  }); // const previews =
  //   paginatedPosts && paginatedPosts.map((post) => post.map((l) => l));

  console.log(previews);
  var gridClass = isListView ? "md:mx-16" : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, !paginatedPosts && __jsx("div", {
    className: "h-full w-full flex items-center justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, "loading..."), __jsx("div", {
    className: "hidden h-10 mt-6 justify-start items-center lg:flex md:px-16 xl:px-16 ip:px-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 72,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6 lg:mx-16 ip:mx-64 ".concat(gridClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, "'ddd'"), __jsx("div", {
    className: "flex justify-between my-6 lg:my-12 lg:mx-16 ip:mx-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "border border-gray-400 px-2 py-1 lg:px-4 lg:py-2 rounded-lg hover:border-gray-800 ease-in",
    onClick: function onClick() {
      return setIndex(index - _lib_vars__WEBPACK_IMPORTED_MODULE_9__["PAGE_SIZE"]);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, _lib_icons__WEBPACK_IMPORTED_MODULE_4__["rightArrow"], __jsx("span", {
    className: "hidden lg:inline pl-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F")), __jsx("button", {
    className: "border border-gray-400 px-2 py-1 lg:px-4 lg:py-2 rounded-lg hover:border-gray-800 ease-in",
    onClick: function onClick() {
      return setSize(size + 1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "hidden lg:inline pr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "\u0421\u0434\u0435\u0434\u0443\u044E\u0449\u0430\u044F"), _lib_icons__WEBPACK_IMPORTED_MODULE_4__["leftArrow"])));
};

_s(App, "0MOIKVxpJEoE69gDtcNFtlCl5+M=", false, function () {
  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__["useToggle"], _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__["useWindowWidth"], swr__WEBPACK_IMPORTED_MODULE_10__["useSWRInfinite"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VUb2dnbGUiLCJpc0xpc3RWaWV3IiwiaXNUb2dnbGVkIiwic2V0TGlzdFZpZXciLCJzZXRUb2dnbGUiLCJzd2l0Y2hWaWV3IiwidG9nZ2xlIiwidXNlU3RhdGUiLCJpbmRleCIsInNldEluZGV4Iiwid2lkdGgiLCJ1c2VXaW5kb3dXaWR0aCIsInVzZUVmZmVjdCIsImluaXRpYWxEYXRhIiwidXNlU1dSSW5maW5pdGUiLCJnZXRLZXkiLCJmZXRjaGVyIiwicGFnaW5hdGVkUG9zdHMiLCJkYXRhIiwic2l6ZSIsInNldFNpemUiLCJwcmV2aWV3cyIsIm1hcCIsImVsIiwiX2lkIiwidGl0bGUiLCJzdWJ0aXRsZSIsInNsdWciLCJtYWluSW1hZ2UiLCJwdWJsaXNoZWRBdCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZ3JpZENsYXNzIiwiZ3JpZEljb24iLCJsaXN0SWNvbiIsIlBBR0VfU0laRSIsInJpZ2h0QXJyb3ciLCJsZWZ0QXJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLG1CQUtyQkMsa0VBQVMsRUFMWTtBQUFBLE1BRVpDLFVBRlksY0FFdkJDLFNBRnVCO0FBQUEsTUFHWkMsV0FIWSxjQUd2QkMsU0FIdUI7QUFBQSxNQUlmQyxVQUplLGNBSXZCQyxNQUp1Qjs7QUFBQSxrQkFPQ0Msc0RBQVEsQ0FBQyxDQUFELENBUFQ7QUFBQSxNQU9sQkMsS0FQa0I7QUFBQSxNQU9YQyxRQVBXOztBQVN6QixNQUFNQyxLQUFLLEdBQUdDLDRFQUFjLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMs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QUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFNLGFBQVMsRUFBQyx1QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4REFKRixFQUtHbUIsb0RBTEgsQ0FURixDQW5CRixDQURGO0FBdUNELENBekZEOztHQUFNeEMsRztVQUtBRSwwRCxFQUlVVyxvRSxFQVFrQ0csbUQ7OztLQWpCNUNoQixHOztBQW9HU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmI3MmMxZjJjOGY1NmQ3YjY4MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gXCIuLi9ob29rcy91c2VUb2dnbGVcIjtcbmltcG9ydCBJY29uc0J0biBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uc0J0blwiO1xuaW1wb3J0IHsgZ3JpZEljb24sIGxpc3RJY29uLCByaWdodEFycm93LCBsZWZ0QXJyb3cgfSBmcm9tIFwiLi4vbGliL2ljb25zXCI7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMtcHJldmlldy9Qb3N0Q2FyZFwiO1xuaW1wb3J0IHsgdXNlV2luZG93V2lkdGggfSBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93V2lkdGhcIjtcbmltcG9ydCB7IGRhdGFEREQsIGZldGNoZXIsIGdldEtleSwgdXNlR2V0UG9zdHMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBQQUdFX1NJWkUgfSBmcm9tIFwiLi4vbGliL3ZhcnNcIjtcbmltcG9ydCB7IHVzZVNXUkluZmluaXRlIH0gZnJvbSBcInN3clwiO1xuXG5jb25zdCBBcHAgPSAoeyBwb3N0cyB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpc1RvZ2dsZWQ6IGlzTGlzdFZpZXcsXG4gICAgc2V0VG9nZ2xlOiBzZXRMaXN0VmlldyxcbiAgICB0b2dnbGU6IHN3aXRjaFZpZXcsXG4gIH0gPSB1c2VUb2dnbGUoKTtcblxuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IHdpZHRoID0gdXNlV2luZG93V2lkdGgoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpZHRoIDw9IDc2OCAmJiBzZXRMaXN0VmlldyhmYWxzZSk7XG4gIH0sIFt3aWR0aF0pO1xuXG4gIGNvbnN0IGluaXRpYWxEYXRhID0gIWluZGV4ICYmIHBvc3RzO1xuXG4gIGNvbnN0IHsgZGF0YTogcGFnaW5hdGVkUG9zdHMsIHNpemUsIHNldFNpemUgfSA9IHVzZVNXUkluZmluaXRlKFxuICAgIGdldEtleSxcbiAgICBmZXRjaGVyXG4gICk7XG5cbiAgaWYgKCFwYWdpbmF0ZWRQb3N0cykgcmV0dXJuIFwibG9hZGluZ1wiO1xuXG4gIGNvbnN0IHByZXZpZXdzID1cbiAgICBwYWdpbmF0ZWRQb3N0cyAmJlxuICAgIHBhZ2luYXRlZFBvc3RzLm1hcCgoZWwpID0+XG4gICAgICBlbC5tYXAoKHsgX2lkLCB0aXRsZSwgc3VidGl0bGUsIHNsdWcsIG1haW5JbWFnZSwgcHVibGlzaGVkQXQsIGJvZHkgfSkgPT4gKFxuICAgICAgICA8UG9zdENhcmRcbiAgICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgICAgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fVxuICAgICAgICAgIGJvZHk9e2JvZHl9XG4gICAgICAgICAgaXNMaXN0Vmlldz17aXNMaXN0Vmlld31cbiAgICAgICAgLz5cbiAgICAgICkpXG4gICAgKTtcblxuICAvLyBjb25zdCBwcmV2aWV3cyA9XG4gIC8vICAgcGFnaW5hdGVkUG9zdHMgJiYgcGFnaW5hdGVkUG9zdHMubWFwKChwb3N0KSA9PiBwb3N0Lm1hcCgobCkgPT4gbCkpO1xuXG4gIGNvbnNvbGUubG9nKHByZXZpZXdzKTtcblxuICBjb25zdCBncmlkQ2xhc3MgPSBpc0xpc3RWaWV3XG4gICAgPyBcIm1kOm14LTE2XCJcbiAgICA6IFwibGc6Z3JpZC1jb2xzLTIgbGc6bXQtMiBpcDpncmlkLWNvbHMtMyB4bDpnYXAtMTJcIjtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7IXBhZ2luYXRlZFBvc3RzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgbG9hZGluZy4uLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBoLTEwIG10LTYganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbGc6ZmxleCBtZDpweC0xNiB4bDpweC0xNiBpcDpweC02NFwiPlxuICAgICAgICA8SWNvbnNCdG5cbiAgICAgICAgICBmaXJzdEljb249e2dyaWRJY29ufVxuICAgICAgICAgIHNlY29uZEljb249e2xpc3RJY29ufVxuICAgICAgICAgIGlzTGlzdFZpZXc9e2lzTGlzdFZpZXd9XG4gICAgICAgICAgc3dpdGNoVmlldz17c3dpdGNoVmlld31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BtYi02IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTYgbGc6bXgtMTYgaXA6bXgtNjQgJHtncmlkQ2xhc3N9YH1cbiAgICAgID5cbiAgICAgICAgJ2RkZCdcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBteS02IGxnOm15LTEyIGxnOm14LTE2IGlwOm14LTY0XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB4LTIgcHktMSBsZzpweC00IGxnOnB5LTIgcm91bmRlZC1sZyBob3Zlcjpib3JkZXItZ3JheS04MDAgZWFzZS1pblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SW5kZXgoaW5kZXggLSBQQUdFX1NJWkUpfVxuICAgICAgICA+XG4gICAgICAgICAge3JpZ2h0QXJyb3d9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZSBwbC0yXCI+0J/RgNC10LTRi9C00YPRidCw0Y88L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB4LTIgcHktMSBsZzpweC00IGxnOnB5LTIgcm91bmRlZC1sZyBob3Zlcjpib3JkZXItZ3JheS04MDAgZWFzZS1pblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2l6ZShzaXplICsgMSl9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lIHByLTJcIj7QodC00LXQtNGD0Y7RidCw0Y88L3NwYW4+XG4gICAgICAgICAge2xlZnRBcnJvd31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygwKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==