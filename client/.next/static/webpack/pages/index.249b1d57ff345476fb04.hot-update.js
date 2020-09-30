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

  if (!paginatedPosts) return "loading"; // const previews =
  //   paginatedPosts &&
  //   paginatedPosts.map(
  //     ({ _id, title, subtitle, slug, mainImage, publishedAt, body }) => (
  //       <PostCard
  //         key={_id}
  //         title={title}
  //         subtitle={subtitle}
  //         slug={slug}
  //         mainImage={mainImage}
  //         publishedAt={publishedAt}
  //         body={body}
  //         isListView={isListView}
  //       />
  //     )
  //   );

  paginatedPosts.map(function (post) {
    return console.log(post);
  }); // console.log(previews);

  var gridClass = isListView ? "md:mx-16" : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, !paginatedPosts && __jsx("div", {
    className: "h-full w-full flex items-center justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, "loading..."), __jsx("div", {
    className: "hidden h-10 mt-6 justify-start items-center lg:flex md:px-16 xl:px-16 ip:px-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 71,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6 lg:mx-16 ip:mx-64 ".concat(gridClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, "'ddd'"), __jsx("div", {
    className: "flex justify-between my-6 lg:my-12 lg:mx-16 ip:mx-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 84,
      columnNumber: 9
    }
  }, _lib_icons__WEBPACK_IMPORTED_MODULE_4__["rightArrow"], __jsx("span", {
    className: "hidden lg:inline pl-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "hidden lg:inline pr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VUb2dnbGUiLCJpc0xpc3RWaWV3IiwiaXNUb2dnbGVkIiwic2V0TGlzdFZpZXciLCJzZXRUb2dnbGUiLCJzd2l0Y2hWaWV3IiwidG9nZ2xlIiwidXNlU3RhdGUiLCJpbmRleCIsInNldEluZGV4Iiwid2lkdGgiLCJ1c2VXaW5kb3dXaWR0aCIsInVzZUVmZmVjdCIsImluaXRpYWxEYXRhIiwidXNlU1dSSW5maW5pdGUiLCJnZXRLZXkiLCJmZXRjaGVyIiwicGFnaW5hdGVkUG9zdHMiLCJkYXRhIiwic2l6ZSIsInNldFNpemUiLCJtYXAiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImdyaWRDbGFzcyIsImdyaWRJY29uIiwibGlzdEljb24iLCJQQUdFX1NJWkUiLCJyaWdodEFycm93IiwibGVmdEFycm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxtQkFLckJDLGtFQUFTLEVBTFk7QUFBQSxNQUVaQyxVQUZZLGNBRXZCQyxTQUZ1QjtBQUFBLE1BR1pDLFdBSFksY0FHdkJDLFNBSHVCO0FBQUEsTUFJZkMsVUFKZSxjQUl2QkMsTUFKdUI7O0FBQUEsa0JBT0NDLHNEQUFRLENBQUMsQ0FBRCxDQVBUO0FBQUEsTUFPbEJDLEtBUGtCO0FBQUEsTUFPWEMsUUFQVzs7QUFTekIsTUFBTUMsS0FBSyxHQUFHQyw0RUFBYyxFQUE1QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsU0FBSyxJQUFJLEdBQVQsSUFBZ0JQLFdBQVcsQ0FBQyxLQUFELENBQTNCO0FBQ0QsR0FGUSxFQUVOLENBQUNPLEtBQUQsQ0FGTSxDQUFUO0FBSUEsTUFBTUcsV0FBVyxHQUFHLENBQUNMLEtBQUQsSUFBVVQsS0FBOUI7O0FBZnlCLHdCQWlCdUJlLDJEQUFjLENBQzVEQywrQ0FENEQsRUFFNURDLGdEQUY0RCxDQWpCckM7QUFBQSxNQWlCWEMsY0FqQlcsbUJBaUJqQkMsSUFqQmlCO0FBQUEsTUFpQktDLElBakJMLG1CQWlCS0EsSUFqQkw7QUFBQSxNQWlCV0MsT0FqQlgsbUJBaUJXQSxPQWpCWDs7QUFzQnpCLE1BQUksQ0FBQ0gsY0FBTCxFQUFxQixPQUFPLFNBQVAsQ0F0QkksQ0F3QnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxnQkFBYyxDQUFDSSxHQUFmLENBQW1CLFVBQUNDLElBQUQ7QUFBQSxXQUFVQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixDQUFWO0FBQUEsR0FBbkIsRUF6Q3lCLENBMkN6Qjs7QUFFQSxNQUFNRyxTQUFTLEdBQUd4QixVQUFVLEdBQ3hCLFVBRHdCLEdBRXhCLGlEQUZKO0FBSUEsU0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDZ0IsY0FBRCxJQUNDO0FBQUssYUFBUyxFQUFDLGdEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosRUFNRTtBQUFLLGFBQVMsRUFBQyxnRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUNFLGFBQVMsRUFBRVMsbURBRGI7QUFFRSxjQUFVLEVBQUVDLG1EQUZkO0FBR0UsY0FBVSxFQUFFMUIsVUFIZDtBQUlFLGNBQVUsRUFBRUksVUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FORixFQWNFO0FBQ0UsYUFBUywwREFBbURvQixTQUFuRCxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRixFQW1CRTtBQUFLLGFBQVMsRUFBQyxzREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsMkZBRFo7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUFNaEIsUUFBUSxDQUFDRCxLQUFLLEdBQUdvQixtREFBVCxDQUFkO0FBQUEsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUdDLHFEQUpILEVBS0U7QUFBTSxhQUFTLEVBQUMsdUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0VBTEYsQ0FERixFQVNFO0FBQ0UsYUFBUyxFQUFDLDJGQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTVQsT0FBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUFiO0FBQUEsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBTSxhQUFTLEVBQUMsdUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBSkYsRUFLR1csb0RBTEgsQ0FURixDQW5CRixDQURGO0FBdUNELENBeEZEOztHQUFNaEMsRztVQUtBRSwwRCxFQUlVVyxvRSxFQVFrQ0csbUQ7OztLQWpCNUNoQixHOztBQW1HU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjQ5YjFkNTdmZjM0NTQ3NmZiMDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gXCIuLi9ob29rcy91c2VUb2dnbGVcIjtcbmltcG9ydCBJY29uc0J0biBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uc0J0blwiO1xuaW1wb3J0IHsgZ3JpZEljb24sIGxpc3RJY29uLCByaWdodEFycm93LCBsZWZ0QXJyb3cgfSBmcm9tIFwiLi4vbGliL2ljb25zXCI7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMtcHJldmlldy9Qb3N0Q2FyZFwiO1xuaW1wb3J0IHsgdXNlV2luZG93V2lkdGggfSBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93V2lkdGhcIjtcbmltcG9ydCB7IGRhdGFEREQsIGZldGNoZXIsIGdldEtleSwgdXNlR2V0UG9zdHMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBQQUdFX1NJWkUgfSBmcm9tIFwiLi4vbGliL3ZhcnNcIjtcbmltcG9ydCB7IHVzZVNXUkluZmluaXRlIH0gZnJvbSBcInN3clwiO1xuXG5jb25zdCBBcHAgPSAoeyBwb3N0cyB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpc1RvZ2dsZWQ6IGlzTGlzdFZpZXcsXG4gICAgc2V0VG9nZ2xlOiBzZXRMaXN0VmlldyxcbiAgICB0b2dnbGU6IHN3aXRjaFZpZXcsXG4gIH0gPSB1c2VUb2dnbGUoKTtcblxuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IHdpZHRoID0gdXNlV2luZG93V2lkdGgoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpZHRoIDw9IDc2OCAmJiBzZXRMaXN0VmlldyhmYWxzZSk7XG4gIH0sIFt3aWR0aF0pO1xuXG4gIGNvbnN0IGluaXRpYWxEYXRhID0gIWluZGV4ICYmIHBvc3RzO1xuXG4gIGNvbnN0IHsgZGF0YTogcGFnaW5hdGVkUG9zdHMsIHNpemUsIHNldFNpemUgfSA9IHVzZVNXUkluZmluaXRlKFxuICAgIGdldEtleSxcbiAgICBmZXRjaGVyXG4gICk7XG5cbiAgaWYgKCFwYWdpbmF0ZWRQb3N0cykgcmV0dXJuIFwibG9hZGluZ1wiO1xuXG4gIC8vIGNvbnN0IHByZXZpZXdzID1cbiAgLy8gICBwYWdpbmF0ZWRQb3N0cyAmJlxuICAvLyAgIHBhZ2luYXRlZFBvc3RzLm1hcChcbiAgLy8gICAgICh7IF9pZCwgdGl0bGUsIHN1YnRpdGxlLCBzbHVnLCBtYWluSW1hZ2UsIHB1Ymxpc2hlZEF0LCBib2R5IH0pID0+IChcbiAgLy8gICAgICAgPFBvc3RDYXJkXG4gIC8vICAgICAgICAga2V5PXtfaWR9XG4gIC8vICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAvLyAgICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgLy8gICAgICAgICBzbHVnPXtzbHVnfVxuICAvLyAgICAgICAgIG1haW5JbWFnZT17bWFpbkltYWdlfVxuICAvLyAgICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgLy8gICAgICAgICBib2R5PXtib2R5fVxuICAvLyAgICAgICAgIGlzTGlzdFZpZXc9e2lzTGlzdFZpZXd9XG4gIC8vICAgICAgIC8+XG4gIC8vICAgICApXG4gIC8vICAgKTtcblxuICBwYWdpbmF0ZWRQb3N0cy5tYXAoKHBvc3QpID0+IGNvbnNvbGUubG9nKHBvc3QpKTtcblxuICAvLyBjb25zb2xlLmxvZyhwcmV2aWV3cyk7XG5cbiAgY29uc3QgZ3JpZENsYXNzID0gaXNMaXN0Vmlld1xuICAgID8gXCJtZDpteC0xNlwiXG4gICAgOiBcImxnOmdyaWQtY29scy0yIGxnOm10LTIgaXA6Z3JpZC1jb2xzLTMgeGw6Z2FwLTEyXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgeyFwYWdpbmF0ZWRQb3N0cyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIGxvYWRpbmcuLi5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gaC0xMCBtdC02IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGxnOmZsZXggbWQ6cHgtMTYgeGw6cHgtMTYgaXA6cHgtNjRcIj5cbiAgICAgICAgPEljb25zQnRuXG4gICAgICAgICAgZmlyc3RJY29uPXtncmlkSWNvbn1cbiAgICAgICAgICBzZWNvbmRJY29uPXtsaXN0SWNvbn1cbiAgICAgICAgICBpc0xpc3RWaWV3PXtpc0xpc3RWaWV3fVxuICAgICAgICAgIHN3aXRjaFZpZXc9e3N3aXRjaFZpZXd9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgbWItNiBncmlkIGdyaWQtY29scy0xIGdhcC02IGxnOm14LTE2IGlwOm14LTY0ICR7Z3JpZENsYXNzfWB9XG4gICAgICA+XG4gICAgICAgICdkZGQnXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXktNiBsZzpteS0xMiBsZzpteC0xNiBpcDpteC02NFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC0yIHB5LTEgbGc6cHgtNCBsZzpweS0yIHJvdW5kZWQtbGcgaG92ZXI6Ym9yZGVyLWdyYXktODAwIGVhc2UtaW5cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEluZGV4KGluZGV4IC0gUEFHRV9TSVpFKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyaWdodEFycm93fVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUgcGwtMlwiPtCf0YDQtdC00YvQtNGD0YnQsNGPPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC0yIHB5LTEgbGc6cHgtNCBsZzpweS0yIHJvdW5kZWQtbGcgaG92ZXI6Ym9yZGVyLWdyYXktODAwIGVhc2UtaW5cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpemUoc2l6ZSArIDEpfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZSBwci0yXCI+0KHQtNC10LTRg9GO0YnQsNGPPC9zcGFuPlxuICAgICAgICAgIHtsZWZ0QXJyb3d9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoMCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=