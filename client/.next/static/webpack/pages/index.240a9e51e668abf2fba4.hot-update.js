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

  var previews = paginatedPosts.map(function (post) {
    return __jsx("div", {
      key: post.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }
    }, post.title);
  }); // console.log(previews);

  var gridClass = isListView ? "md:mx-16" : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, !paginatedPosts && __jsx("div", {
    className: "h-full w-full flex items-center justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "loading..."), __jsx("div", {
    className: "hidden h-10 mt-6 justify-start items-center lg:flex md:px-16 xl:px-16 ip:px-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 73,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6 lg:mx-16 ip:mx-64 ".concat(gridClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, previews), __jsx("div", {
    className: "flex justify-between my-6 lg:my-12 lg:mx-16 ip:mx-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 86,
      columnNumber: 9
    }
  }, _lib_icons__WEBPACK_IMPORTED_MODULE_4__["rightArrow"], __jsx("span", {
    className: "hidden lg:inline pl-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "hidden lg:inline pr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VUb2dnbGUiLCJpc0xpc3RWaWV3IiwiaXNUb2dnbGVkIiwic2V0TGlzdFZpZXciLCJzZXRUb2dnbGUiLCJzd2l0Y2hWaWV3IiwidG9nZ2xlIiwidXNlU3RhdGUiLCJpbmRleCIsInNldEluZGV4Iiwid2lkdGgiLCJ1c2VXaW5kb3dXaWR0aCIsInVzZUVmZmVjdCIsImluaXRpYWxEYXRhIiwidXNlU1dSSW5maW5pdGUiLCJnZXRLZXkiLCJmZXRjaGVyIiwicGFnaW5hdGVkUG9zdHMiLCJkYXRhIiwic2l6ZSIsInNldFNpemUiLCJwcmV2aWV3cyIsIm1hcCIsInBvc3QiLCJ0aXRsZSIsImdyaWRDbGFzcyIsImdyaWRJY29uIiwibGlzdEljb24iLCJQQUdFX1NJWkUiLCJyaWdodEFycm93IiwibGVmdEFycm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxtQkFLckJDLGtFQUFTLEVBTFk7QUFBQSxNQUVaQyxVQUZZLGNBRXZCQyxTQUZ1QjtBQUFBLE1BR1pDLFdBSFksY0FHdkJDLFNBSHVCO0FBQUEsTUFJZkMsVUFKZSxjQUl2QkMsTUFKdUI7O0FBQUEsa0JBT0NDLHNEQUFRLENBQUMsQ0FBRCxDQVBUO0FBQUEsTUFPbEJDLEtBUGtCO0FBQUEsTUFPWEMsUUFQVzs7QUFTekIsTUFBTUMsS0FBSyxHQUFHQyw0RUFBYyxFQUE1QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsU0FBSyxJQUFJLEdBQVQsSUFBZ0JQLFdBQVcsQ0FBQyxLQUFELENBQTNCO0FBQ0QsR0FGUSxFQUVOLENBQUNPLEtBQUQsQ0FGTSxDQUFUO0FBSUEsTUFBTUcsV0FBVyxHQUFHLENBQUNMLEtBQUQsSUFBVVQsS0FBOUI7O0FBZnlCLHdCQWlCdUJlLDJEQUFjLENBQzVEQywrQ0FENEQsRUFFNURDLGdEQUY0RCxDQWpCckM7QUFBQSxNQWlCWEMsY0FqQlcsbUJBaUJqQkMsSUFqQmlCO0FBQUEsTUFpQktDLElBakJMLG1CQWlCS0EsSUFqQkw7QUFBQSxNQWlCV0MsT0FqQlgsbUJBaUJXQSxPQWpCWDs7QUFzQnpCLE1BQUksQ0FBQ0gsY0FBTCxFQUFxQixPQUFPLFNBQVAsQ0F0QkksQ0F3QnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1JLFFBQVEsR0FBR0osY0FBYyxDQUFDSyxHQUFmLENBQW1CLFVBQUNDLElBQUQ7QUFBQSxXQUNsQztBQUFLLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdUJELElBQUksQ0FBQ0MsS0FBNUIsQ0FEa0M7QUFBQSxHQUFuQixDQUFqQixDQXpDeUIsQ0E2Q3pCOztBQUVBLE1BQU1DLFNBQVMsR0FBR3hCLFVBQVUsR0FDeEIsVUFEd0IsR0FFeEIsaURBRko7QUFJQSxTQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUNnQixjQUFELElBQ0M7QUFBSyxhQUFTLEVBQUMsZ0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixFQU1FO0FBQUssYUFBUyxFQUFDLGdGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFFUyxtREFEYjtBQUVFLGNBQVUsRUFBRUMsbURBRmQ7QUFHRSxjQUFVLEVBQUUxQixVQUhkO0FBSUUsY0FBVSxFQUFFSSxVQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLEVBY0U7QUFDRSxhQUFTLDBEQUFtRG9CLFNBQW5ELENBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdHSixRQUhILENBZEYsRUFtQkU7QUFBSyxhQUFTLEVBQUMsc0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLDJGQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTVosUUFBUSxDQUFDRCxLQUFLLEdBQUdvQixtREFBVCxDQUFkO0FBQUEsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUdDLHFEQUpILEVBS0U7QUFBTSxhQUFTLEVBQUMsdUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0VBTEYsQ0FERixFQVNFO0FBQ0UsYUFBUyxFQUFDLDJGQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTVQsT0FBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUFiO0FBQUEsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBTSxhQUFTLEVBQUMsdUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBSkYsRUFLR1csb0RBTEgsQ0FURixDQW5CRixDQURGO0FBdUNELENBMUZEOztHQUFNaEMsRztVQUtBRSwwRCxFQUlVVyxvRSxFQVFrQ0csbUQ7OztLQWpCNUNoQixHOztBQXFHU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjQwYTllNTFlNjY4YWJmMmZiYTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gXCIuLi9ob29rcy91c2VUb2dnbGVcIjtcbmltcG9ydCBJY29uc0J0biBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uc0J0blwiO1xuaW1wb3J0IHsgZ3JpZEljb24sIGxpc3RJY29uLCByaWdodEFycm93LCBsZWZ0QXJyb3cgfSBmcm9tIFwiLi4vbGliL2ljb25zXCI7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMtcHJldmlldy9Qb3N0Q2FyZFwiO1xuaW1wb3J0IHsgdXNlV2luZG93V2lkdGggfSBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93V2lkdGhcIjtcbmltcG9ydCB7IGRhdGFEREQsIGZldGNoZXIsIGdldEtleSwgdXNlR2V0UG9zdHMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBQQUdFX1NJWkUgfSBmcm9tIFwiLi4vbGliL3ZhcnNcIjtcbmltcG9ydCB7IHVzZVNXUkluZmluaXRlIH0gZnJvbSBcInN3clwiO1xuXG5jb25zdCBBcHAgPSAoeyBwb3N0cyB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpc1RvZ2dsZWQ6IGlzTGlzdFZpZXcsXG4gICAgc2V0VG9nZ2xlOiBzZXRMaXN0VmlldyxcbiAgICB0b2dnbGU6IHN3aXRjaFZpZXcsXG4gIH0gPSB1c2VUb2dnbGUoKTtcblxuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IHdpZHRoID0gdXNlV2luZG93V2lkdGgoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpZHRoIDw9IDc2OCAmJiBzZXRMaXN0VmlldyhmYWxzZSk7XG4gIH0sIFt3aWR0aF0pO1xuXG4gIGNvbnN0IGluaXRpYWxEYXRhID0gIWluZGV4ICYmIHBvc3RzO1xuXG4gIGNvbnN0IHsgZGF0YTogcGFnaW5hdGVkUG9zdHMsIHNpemUsIHNldFNpemUgfSA9IHVzZVNXUkluZmluaXRlKFxuICAgIGdldEtleSxcbiAgICBmZXRjaGVyXG4gICk7XG5cbiAgaWYgKCFwYWdpbmF0ZWRQb3N0cykgcmV0dXJuIFwibG9hZGluZ1wiO1xuXG4gIC8vIGNvbnN0IHByZXZpZXdzID1cbiAgLy8gICBwYWdpbmF0ZWRQb3N0cyAmJlxuICAvLyAgIHBhZ2luYXRlZFBvc3RzLm1hcChcbiAgLy8gICAgICh7IF9pZCwgdGl0bGUsIHN1YnRpdGxlLCBzbHVnLCBtYWluSW1hZ2UsIHB1Ymxpc2hlZEF0LCBib2R5IH0pID0+IChcbiAgLy8gICAgICAgPFBvc3RDYXJkXG4gIC8vICAgICAgICAga2V5PXtfaWR9XG4gIC8vICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAvLyAgICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgLy8gICAgICAgICBzbHVnPXtzbHVnfVxuICAvLyAgICAgICAgIG1haW5JbWFnZT17bWFpbkltYWdlfVxuICAvLyAgICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgLy8gICAgICAgICBib2R5PXtib2R5fVxuICAvLyAgICAgICAgIGlzTGlzdFZpZXc9e2lzTGlzdFZpZXd9XG4gIC8vICAgICAgIC8+XG4gIC8vICAgICApXG4gIC8vICAgKTtcblxuICBjb25zdCBwcmV2aWV3cyA9IHBhZ2luYXRlZFBvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgIDxkaXYga2V5PXtwb3N0LnRpdGxlfT57cG9zdC50aXRsZX08L2Rpdj5cbiAgKSk7XG5cbiAgLy8gY29uc29sZS5sb2cocHJldmlld3MpO1xuXG4gIGNvbnN0IGdyaWRDbGFzcyA9IGlzTGlzdFZpZXdcbiAgICA/IFwibWQ6bXgtMTZcIlxuICAgIDogXCJsZzpncmlkLWNvbHMtMiBsZzptdC0yIGlwOmdyaWQtY29scy0zIHhsOmdhcC0xMlwiO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHshcGFnaW5hdGVkUG9zdHMgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICBsb2FkaW5nLi4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGgtMTAgbXQtNiBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBsZzpmbGV4IG1kOnB4LTE2IHhsOnB4LTE2IGlwOnB4LTY0XCI+XG4gICAgICAgIDxJY29uc0J0blxuICAgICAgICAgIGZpcnN0SWNvbj17Z3JpZEljb259XG4gICAgICAgICAgc2Vjb25kSWNvbj17bGlzdEljb259XG4gICAgICAgICAgaXNMaXN0Vmlldz17aXNMaXN0Vmlld31cbiAgICAgICAgICBzd2l0Y2hWaWV3PXtzd2l0Y2hWaWV3fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YG1iLTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiBsZzpteC0xNiBpcDpteC02NCAke2dyaWRDbGFzc31gfVxuICAgICAgPlxuICAgICAgICB7cHJldmlld3N9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXktNiBsZzpteS0xMiBsZzpteC0xNiBpcDpteC02NFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC0yIHB5LTEgbGc6cHgtNCBsZzpweS0yIHJvdW5kZWQtbGcgaG92ZXI6Ym9yZGVyLWdyYXktODAwIGVhc2UtaW5cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEluZGV4KGluZGV4IC0gUEFHRV9TSVpFKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyaWdodEFycm93fVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUgcGwtMlwiPtCf0YDQtdC00YvQtNGD0YnQsNGPPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC0yIHB5LTEgbGc6cHgtNCBsZzpweS0yIHJvdW5kZWQtbGcgaG92ZXI6Ym9yZGVyLWdyYXktODAwIGVhc2UtaW5cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpemUoc2l6ZSArIDEpfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZSBwci0yXCI+0KHQtNC10LTRg9GO0YnQsNGPPC9zcGFuPlxuICAgICAgICAgIHtsZWZ0QXJyb3d9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoMCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=