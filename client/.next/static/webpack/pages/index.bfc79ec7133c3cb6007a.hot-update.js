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
/* harmony import */ var _components_posts_preview_PostGridCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/posts-preview/PostGridCard */ "./components/posts-preview/PostGridCard.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _components_IconsBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/IconsBtn */ "./components/IconsBtn.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/icons */ "./lib/icons.js");
/* harmony import */ var _components_posts_preview_PostListCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/posts-preview/PostListCard */ "./components/posts-preview/PostListCard.js");
/* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useWindowWidth */ "./hooks/useWindowWidth.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var App = function App(_ref) {
  _s();

  var _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? [] : _ref$posts;

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["useToggle"])(),
      isToggled = _useToggle.isToggled,
      setToggle = _useToggle.setToggle,
      toggle = _useToggle.toggle;

  var width = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_7__["useWindowWidth"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    width < 768 && setToggle(false);
    console.log(isToggled);
  }, [width, isToggled]);
  var gridClass = isToggled ? "xl:mx-48" : "lg:grid-cols-2 lg:mt-2 md:mx-16 lg:mx-16 xl:mx-48 xl:grid-cols-3 xl:gap-12";
  var previews = posts.map(function (_ref2) {
    var _id = _ref2._id,
        title = _ref2.title,
        subtitle = _ref2.subtitle,
        slug = _ref2.slug,
        mainImage = _ref2.mainImage,
        publishedAt = _ref2.publishedAt,
        body = _ref2.body;
    return isToggled ? __jsx(_components_posts_preview_PostListCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: _id,
      title: title,
      subtitle: subtitle,
      slug: slug,
      mainImage: mainImage,
      publishedAt: publishedAt,
      body: body,
      isToggled: isToggled,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }) : __jsx(_components_posts_preview_PostGridCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: _id,
      title: title,
      subtitle: subtitle,
      slug: slug,
      mainImage: mainImage,
      publishedAt: publishedAt,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    });
  });
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hidden h-10 md:px-0 lg:px-0 xl:px-48 mt-6 md:flex justify-start items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_components_IconsBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    firstIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_5__["gridIcon"],
    secondIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_5__["listIcon"],
    isToggled: isToggled,
    toggle: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6 ".concat(gridClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, previews));
};

_s(App, "Ec4wMdjuD7cUPVrZcmC7Qk4aB1Y=", false, function () {
  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["useToggle"], _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_7__["useWindowWidth"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VUb2dnbGUiLCJpc1RvZ2dsZWQiLCJzZXRUb2dnbGUiLCJ0b2dnbGUiLCJ3aWR0aCIsInVzZVdpbmRvd1dpZHRoIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImdyaWRDbGFzcyIsInByZXZpZXdzIiwibWFwIiwiX2lkIiwidGl0bGUiLCJzdWJ0aXRsZSIsInNsdWciLCJtYWluSW1hZ2UiLCJwdWJsaXNoZWRBdCIsImJvZHkiLCJncmlkSWNvbiIsImxpc3RJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBb0I7QUFBQTs7QUFBQSx3QkFBakJDLEtBQWlCO0FBQUEsTUFBakJBLEtBQWlCLDJCQUFULEVBQVM7O0FBQUEsbUJBQ1dDLGtFQUFTLEVBRHBCO0FBQUEsTUFDdEJDLFNBRHNCLGNBQ3RCQSxTQURzQjtBQUFBLE1BQ1hDLFNBRFcsY0FDWEEsU0FEVztBQUFBLE1BQ0FDLE1BREEsY0FDQUEsTUFEQTs7QUFHOUIsTUFBTUMsS0FBSyxHQUFHQyw0RUFBYyxFQUE1QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsU0FBSyxHQUFHLEdBQVIsSUFBZUYsU0FBUyxDQUFDLEtBQUQsQ0FBeEI7QUFDQUssV0FBTyxDQUFDQyxHQUFSLENBQVlQLFNBQVo7QUFDRCxHQUhRLEVBR04sQ0FBQ0csS0FBRCxFQUFRSCxTQUFSLENBSE0sQ0FBVDtBQUtBLE1BQU1RLFNBQVMsR0FBR1IsU0FBUyxHQUN2QixVQUR1QixHQUV2Qiw0RUFGSjtBQUlBLE1BQU1TLFFBQVEsR0FBR1gsS0FBSyxDQUFDWSxHQUFOLENBQ2Y7QUFBQSxRQUFHQyxHQUFILFNBQUdBLEdBQUg7QUFBQSxRQUFRQyxLQUFSLFNBQVFBLEtBQVI7QUFBQSxRQUFlQyxRQUFmLFNBQWVBLFFBQWY7QUFBQSxRQUF5QkMsSUFBekIsU0FBeUJBLElBQXpCO0FBQUEsUUFBK0JDLFNBQS9CLFNBQStCQSxTQUEvQjtBQUFBLFFBQTBDQyxXQUExQyxTQUEwQ0EsV0FBMUM7QUFBQSxRQUF1REMsSUFBdkQsU0FBdURBLElBQXZEO0FBQUEsV0FDRWpCLFNBQVMsR0FDUCxNQUFDLDhFQUFEO0FBQ0UsU0FBRyxFQUFFVyxHQURQO0FBRUUsV0FBSyxFQUFFQyxLQUZUO0FBR0UsY0FBUSxFQUFFQyxRQUhaO0FBSUUsVUFBSSxFQUFFQyxJQUpSO0FBS0UsZUFBUyxFQUFFQyxTQUxiO0FBTUUsaUJBQVcsRUFBRUMsV0FOZjtBQU9FLFVBQUksRUFBRUMsSUFQUjtBQVFFLGVBQVMsRUFBRWpCLFNBUmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURPLEdBWVAsTUFBQyw4RUFBRDtBQUNFLFNBQUcsRUFBRVcsR0FEUDtBQUVFLFdBQUssRUFBRUMsS0FGVDtBQUdFLGNBQVEsRUFBRUMsUUFIWjtBQUlFLFVBQUksRUFBRUMsSUFKUjtBQUtFLGVBQVMsRUFBRUMsU0FMYjtBQU1FLGlCQUFXLEVBQUVDLFdBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWJKO0FBQUEsR0FEZSxDQUFqQjtBQXlCQSxTQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDhFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFFRSxtREFEYjtBQUVFLGNBQVUsRUFBRUMsbURBRmQ7QUFHRSxhQUFTLEVBQUVuQixTQUhiO0FBSUUsVUFBTSxFQUFFRSxNQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBU0U7QUFBSyxhQUFTLHdDQUFpQ00sU0FBakMsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLFFBREgsQ0FURixDQURGO0FBZUQsQ0F0REQ7O0dBQU1aLEc7VUFDcUNFLDBELEVBRTNCSyxvRTs7O0tBSFZQLEc7O0FBaUVTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZmM3OWVjNzEzM2MzY2I2MDA3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IFBvc3RHcmlkQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RHcmlkQ2FyZFwiO1xuXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tIFwiLi4vaG9va3MvdXNlVG9nZ2xlXCI7XG5cbmltcG9ydCBJY29uc0J0biBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uc0J0blwiO1xuaW1wb3J0IHsgZ3JpZEljb24sIGxpc3RJY29uIH0gZnJvbSBcIi4uL2xpYi9pY29uc1wiO1xuaW1wb3J0IFBvc3RMaXN0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RMaXN0Q2FyZFwiO1xuaW1wb3J0IHsgdXNlV2luZG93V2lkdGggfSBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93V2lkdGhcIjtcblxuY29uc3QgQXBwID0gKHsgcG9zdHMgPSBbXSB9KSA9PiB7XG4gIGNvbnN0IHsgaXNUb2dnbGVkLCBzZXRUb2dnbGUsIHRvZ2dsZSB9ID0gdXNlVG9nZ2xlKCk7XG5cbiAgY29uc3Qgd2lkdGggPSB1c2VXaW5kb3dXaWR0aCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2lkdGggPCA3NjggJiYgc2V0VG9nZ2xlKGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhpc1RvZ2dsZWQpO1xuICB9LCBbd2lkdGgsIGlzVG9nZ2xlZF0pO1xuXG4gIGNvbnN0IGdyaWRDbGFzcyA9IGlzVG9nZ2xlZFxuICAgID8gXCJ4bDpteC00OFwiXG4gICAgOiBcImxnOmdyaWQtY29scy0yIGxnOm10LTIgbWQ6bXgtMTYgbGc6bXgtMTYgeGw6bXgtNDggeGw6Z3JpZC1jb2xzLTMgeGw6Z2FwLTEyXCI7XG5cbiAgY29uc3QgcHJldmlld3MgPSBwb3N0cy5tYXAoXG4gICAgKHsgX2lkLCB0aXRsZSwgc3VidGl0bGUsIHNsdWcsIG1haW5JbWFnZSwgcHVibGlzaGVkQXQsIGJvZHkgfSkgPT5cbiAgICAgIGlzVG9nZ2xlZCA/IChcbiAgICAgICAgPFBvc3RMaXN0Q2FyZFxuICAgICAgICAgIGtleT17X2lkfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgICBtYWluSW1hZ2U9e21haW5JbWFnZX1cbiAgICAgICAgICBwdWJsaXNoZWRBdD17cHVibGlzaGVkQXR9XG4gICAgICAgICAgYm9keT17Ym9keX1cbiAgICAgICAgICBpc1RvZ2dsZWQ9e2lzVG9nZ2xlZH1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxQb3N0R3JpZENhcmRcbiAgICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgICAgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fVxuICAgICAgICAvPlxuICAgICAgKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGgtMTAgbWQ6cHgtMCBsZzpweC0wIHhsOnB4LTQ4IG10LTYgbWQ6ZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8SWNvbnNCdG5cbiAgICAgICAgICBmaXJzdEljb249e2dyaWRJY29ufVxuICAgICAgICAgIHNlY29uZEljb249e2xpc3RJY29ufVxuICAgICAgICAgIGlzVG9nZ2xlZD17aXNUb2dnbGVkfVxuICAgICAgICAgIHRvZ2dsZT17dG9nZ2xlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG1iLTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiAke2dyaWRDbGFzc31gfT5cbiAgICAgICAge3ByZXZpZXdzfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==