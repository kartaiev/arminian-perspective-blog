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
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var App = function App(_ref) {
  _s2();

  var _s = $RefreshSig$();

  var posts = _ref.posts;

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__["useToggle"])(),
      isListView = _useToggle.isToggled,
      setListView = _useToggle.setToggle,
      switchView = _useToggle.toggle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      index = _useState[0],
      setIndex = _useState[1];

  var width = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__["useWindowWidth"])();
  var y = 0;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    width <= 768 && setListView(false);
  }, [width, y]);
  console.log(y);
  var initialData = [posts];
  var previews = [];

  var handleScroll = function handleScroll(e) {
    _s();

    var bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (bottom) {
      var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_7__["useGetPosts"])(initialData),
          _paginatedPosts = _useGetPosts.data,
          _size = _useGetPosts.size,
          _setSize = _useGetPosts.setSize;

      if (!_paginatedPosts) return "loading";
      previews = _paginatedPosts && _paginatedPosts.map(function (el) {
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
              lineNumber: 48,
              columnNumber: 15
            }
          });
        });
      });
    }
  };

  _s(handleScroll, "LKxQTJHR3Xko4KwfZWsOsIWmSJA=", false, function () {
    return [_actions__WEBPACK_IMPORTED_MODULE_7__["useGetPosts"]];
  });

  var gridClass = isListView ? "md:mx-16" : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, !paginatedPosts && __jsx("div", {
    className: "h-full w-full flex items-center justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "loading..."), __jsx("div", {
    className: "hidden h-10 mt-6 justify-start items-center lg:flex md:px-16 xl:px-16 ip:px-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 76,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6 lg:mx-16 ip:mx-64 ".concat(gridClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, previews), __jsx("div", {
    className: "flex justify-between my-6 lg:my-12 lg:mx-16 ip:mx-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
      lineNumber: 89,
      columnNumber: 9
    }
  }, _lib_icons__WEBPACK_IMPORTED_MODULE_4__["rightArrow"], __jsx("span", {
    className: "hidden lg:inline pl-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "hidden lg:inline pr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, "\u0421\u0434\u0435\u0434\u0443\u044E\u0449\u0430\u044F"), _lib_icons__WEBPACK_IMPORTED_MODULE_4__["leftArrow"])));
};

_s2(App, "d6xvBWAc7OOGsaCTA+3Mp5hQLKY=", false, function () {
  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__["useToggle"], _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__["useWindowWidth"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VUb2dnbGUiLCJpc0xpc3RWaWV3IiwiaXNUb2dnbGVkIiwic2V0TGlzdFZpZXciLCJzZXRUb2dnbGUiLCJzd2l0Y2hWaWV3IiwidG9nZ2xlIiwidXNlU3RhdGUiLCJpbmRleCIsInNldEluZGV4Iiwid2lkdGgiLCJ1c2VXaW5kb3dXaWR0aCIsInkiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiaW5pdGlhbERhdGEiLCJwcmV2aWV3cyIsImhhbmRsZVNjcm9sbCIsImUiLCJib3R0b20iLCJ0YXJnZXQiLCJzY3JvbGxIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGllbnRIZWlnaHQiLCJ1c2VHZXRQb3N0cyIsInBhZ2luYXRlZFBvc3RzIiwiZGF0YSIsInNpemUiLCJzZXRTaXplIiwibWFwIiwiZWwiLCJfaWQiLCJ0aXRsZSIsInN1YnRpdGxlIiwic2x1ZyIsIm1haW5JbWFnZSIsInB1Ymxpc2hlZEF0IiwiYm9keSIsImdyaWRDbGFzcyIsImdyaWRJY29uIiwibGlzdEljb24iLCJQQUdFX1NJWkUiLCJyaWdodEFycm93IiwibGVmdEFycm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBZTtBQUFBOztBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxtQkFLckJDLGtFQUFTLEVBTFk7QUFBQSxNQUVaQyxVQUZZLGNBRXZCQyxTQUZ1QjtBQUFBLE1BR1pDLFdBSFksY0FHdkJDLFNBSHVCO0FBQUEsTUFJZkMsVUFKZSxjQUl2QkMsTUFKdUI7O0FBQUEsa0JBT0NDLHNEQUFRLENBQUMsQ0FBRCxDQVBUO0FBQUEsTUFPbEJDLEtBUGtCO0FB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RUFBQyxzREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsMkZBRFo7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUFNUixRQUFRLENBQUNELEtBQUssR0FBR2tDLG1EQUFULENBQWQ7QUFBQSxLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJR0MscURBSkgsRUFLRTtBQUFNLGFBQVMsRUFBQyx1QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvRUFMRixDQURGLEVBU0U7QUFDRSxhQUFTLEVBQUMsMkZBRFo7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUFNZCxPQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQWI7QUFBQSxLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFNLGFBQVMsRUFBQyx1QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4REFKRixFQUtHZ0Isb0RBTEgsQ0FURixDQW5CRixDQURGO0FBdUNELENBN0ZEOztJQUFNOUMsRztVQUtBRSwwRCxFQUlVVyxvRTs7O0tBVFZiLEc7O0FBd0dTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNTFkNGMxNDllOWU0ODQ3ZmQ5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9jb21wb25lbnRzL0ljb25zQnRuXCI7XG5pbXBvcnQgeyBncmlkSWNvbiwgbGlzdEljb24sIHJpZ2h0QXJyb3csIGxlZnRBcnJvdyB9IGZyb20gXCIuLi9saWIvaWNvbnNcIjtcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RDYXJkXCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dXaWR0aCB9IGZyb20gXCIuLi9ob29rcy91c2VXaW5kb3dXaWR0aFwiO1xuaW1wb3J0IHsgZGF0YURERCwgZmV0Y2hlciwgZ2V0S2V5LCB1c2VHZXRQb3N0cyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IFBBR0VfU0laRSB9IGZyb20gXCIuLi9saWIvdmFyc1wiO1xuaW1wb3J0IHsgdXNlU1dSSW5maW5pdGUgfSBmcm9tIFwic3dyXCI7XG5cbmNvbnN0IEFwcCA9ICh7IHBvc3RzIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlzVG9nZ2xlZDogaXNMaXN0VmlldyxcbiAgICBzZXRUb2dnbGU6IHNldExpc3RWaWV3LFxuICAgIHRvZ2dsZTogc3dpdGNoVmlldyxcbiAgfSA9IHVzZVRvZ2dsZSgpO1xuXG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgd2lkdGggPSB1c2VXaW5kb3dXaWR0aCgpO1xuICBsZXQgeSA9IDA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aWR0aCA8PSA3NjggJiYgc2V0TGlzdFZpZXcoZmFsc2UpO1xuICB9LCBbd2lkdGgsIHldKTtcblxuICBjb25zb2xlLmxvZyh5KTtcblxuICBjb25zdCBpbml0aWFsRGF0YSA9IFtwb3N0c107XG4gIGxldCBwcmV2aWV3cyA9IFtdO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChlKSA9PiB7XG4gICAgY29uc3QgYm90dG9tID1cbiAgICAgIGUudGFyZ2V0LnNjcm9sbEhlaWdodCAtIGUudGFyZ2V0LnNjcm9sbFRvcCA9PT0gZS50YXJnZXQuY2xpZW50SGVpZ2h0O1xuICAgIGlmIChib3R0b20pIHtcbiAgICAgIGNvbnN0IHsgZGF0YTogcGFnaW5hdGVkUG9zdHMsIHNpemUsIHNldFNpemUgfSA9IHVzZUdldFBvc3RzKGluaXRpYWxEYXRhKTtcblxuICAgICAgaWYgKCFwYWdpbmF0ZWRQb3N0cykgcmV0dXJuIFwibG9hZGluZ1wiO1xuXG4gICAgICBwcmV2aWV3cyA9XG4gICAgICAgIHBhZ2luYXRlZFBvc3RzICYmXG4gICAgICAgIHBhZ2luYXRlZFBvc3RzLm1hcCgoZWwpID0+XG4gICAgICAgICAgZWwubWFwKFxuICAgICAgICAgICAgKHsgX2lkLCB0aXRsZSwgc3VidGl0bGUsIHNsdWcsIG1haW5JbWFnZSwgcHVibGlzaGVkQXQsIGJvZHkgfSkgPT4gKFxuICAgICAgICAgICAgICA8UG9zdENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgICAgICAgICAgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fVxuICAgICAgICAgICAgICAgIGJvZHk9e2JvZHl9XG4gICAgICAgICAgICAgICAgaXNMaXN0Vmlldz17aXNMaXN0Vmlld31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdyaWRDbGFzcyA9IGlzTGlzdFZpZXdcbiAgICA/IFwibWQ6bXgtMTZcIlxuICAgIDogXCJsZzpncmlkLWNvbHMtMiBsZzptdC0yIGlwOmdyaWQtY29scy0zIHhsOmdhcC0xMlwiO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHshcGFnaW5hdGVkUG9zdHMgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICBsb2FkaW5nLi4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGgtMTAgbXQtNiBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBsZzpmbGV4IG1kOnB4LTE2IHhsOnB4LTE2IGlwOnB4LTY0XCI+XG4gICAgICAgIDxJY29uc0J0blxuICAgICAgICAgIGZpcnN0SWNvbj17Z3JpZEljb259XG4gICAgICAgICAgc2Vjb25kSWNvbj17bGlzdEljb259XG4gICAgICAgICAgaXNMaXN0Vmlldz17aXNMaXN0Vmlld31cbiAgICAgICAgICBzd2l0Y2hWaWV3PXtzd2l0Y2hWaWV3fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YG1iLTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiBsZzpteC0xNiBpcDpteC02NCAke2dyaWRDbGFzc31gfVxuICAgICAgPlxuICAgICAgICB7cHJldmlld3N9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXktNiBsZzpteS0xMiBsZzpteC0xNiBpcDpteC02NFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC0yIHB5LTEgbGc6cHgtNCBsZzpweS0yIHJvdW5kZWQtbGcgaG92ZXI6Ym9yZGVyLWdyYXktODAwIGVhc2UtaW5cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEluZGV4KGluZGV4IC0gUEFHRV9TSVpFKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyaWdodEFycm93fVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUgcGwtMlwiPtCf0YDQtdC00YvQtNGD0YnQsNGPPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC0yIHB5LTEgbGc6cHgtNCBsZzpweS0yIHJvdW5kZWQtbGcgaG92ZXI6Ym9yZGVyLWdyYXktODAwIGVhc2UtaW5cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpemUoc2l6ZSArIDEpfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZSBwci0yXCI+0KHQtNC10LTRg9GO0YnQsNGPPC9zcGFuPlxuICAgICAgICAgIHtsZWZ0QXJyb3d9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoMCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=