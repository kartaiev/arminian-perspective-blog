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
  }, [width, y]);
  var initialData = [posts];

  var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_7__["useGetPosts"])(initialData),
      paginatedPosts = _useGetPosts.data,
      size = _useGetPosts.size,
      setSize = _useGetPosts.setSize;

  if (!paginatedPosts) return "loading";

  var handleScroll = function handleScroll(e) {
    console.log(e);
    var bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (bottom) {
      setSize(size + 1).then(function (r) {
        return r;
      });
    }
  };

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
          lineNumber: 48,
          columnNumber: 9
        }
      });
    });
  });
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
    onScroll: handleScroll,
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

_s(App, "DLxKuMPFRwujZ/naATP8dhvGdHo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VUb2dnbGUiLCJpc0xpc3RWaWV3IiwiaXNUb2dnbGVkIiwic2V0TGlzdFZpZXciLCJzZXRUb2dnbGUiLCJzd2l0Y2hWaWV3IiwidG9nZ2xlIiwidXNlU3RhdGUiLCJpbmRleCIsInNldEluZGV4Iiwid2lkdGgiLCJ1c2VXaW5kb3dXaWR0aCIsInVzZUVmZmVjdCIsInkiLCJpbml0aWFsRGF0YSIsInVzZUdldFBvc3RzIiwicGFnaW5hdGVkUG9zdHMiLCJkYXRhIiwic2l6ZSIsInNldFNpemUiLCJoYW5kbGVTY3JvbGwiLCJlIiwiY29uc29sZSIsImxvZyIsImJvdHRvbSIsInRhcmdldCIsInNjcm9sbEhlaWdodCIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsInRoZW4iLCJyIiwicHJldmlld3MiLCJtYXAiLCJlbCIsIl9pZCIsInRpdGxlIiwic3VidGl0bGUiLCJzbHVnIiwibWFpbkltYWdlIiwicHVibGlzaGVkQXQiLCJib2R5IiwiZ3JpZENsYXNzIiwiZ3JpZEljb24iLCJsaXN0SWNvbiIsIlBBR0VfU0laRSIsInJpZ2h0QXJyb3ciLCJsZWZ0QXJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLG1CQUtyQkMsa0VBQVMsRUFMWTtBQUFBLE1BRVpDLFVBRlksY0FFdkJDLFNBRnVCO0FBQUEsTUFHWkMsV0FIWSxjQUd2QkMsU0FIdUI7QUFBQSxNQUlmQyxVQUplLGNBSXZCQyxNQUp1Qjs7QUFBQSxrQkFPQ0Msc0RBQVEsQ0FBQyxDQUFELENBUFQ7QUFBQSxNQU9sQkMsS0FQ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LEVBQUVYLFlBRFo7QUFFRSxhQUFTLEVBQUMsc0RBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQ0UsYUFBUyxFQUFDLDJGQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTVgsUUFBUSxDQUFDRCxLQUFLLEdBQUdvQyxtREFBVCxDQUFkO0FBQUEsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUdDLHFEQUpILEVBS0U7QUFBTSxhQUFTLEVBQUMsdUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0VBTEYsQ0FKRixFQVlFO0FBQ0UsYUFBUyxFQUFDLDJGQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTTFCLE9BQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBYjtBQUFBLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQU0sYUFBUyxFQUFDLHVCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhEQUpGLEVBS0c0QixvREFMSCxDQVpGLENBbkJGLENBREY7QUEwQ0QsQ0E3RkQ7O0dBQU1oRCxHO1VBS0FFLDBELEVBSVVXLG9FLEVBUWtDSSxvRDs7O0tBakI1Q2pCLEc7O0FBd0dTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYjZlODk5ZDE2MDY4MTRmNDhjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9jb21wb25lbnRzL0ljb25zQnRuXCI7XG5pbXBvcnQgeyBncmlkSWNvbiwgbGlzdEljb24sIHJpZ2h0QXJyb3csIGxlZnRBcnJvdyB9IGZyb20gXCIuLi9saWIvaWNvbnNcIjtcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RDYXJkXCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dXaWR0aCB9IGZyb20gXCIuLi9ob29rcy91c2VXaW5kb3dXaWR0aFwiO1xuaW1wb3J0IHsgZGF0YURERCwgZmV0Y2hlciwgZ2V0S2V5LCB1c2VHZXRQb3N0cyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IFBBR0VfU0laRSB9IGZyb20gXCIuLi9saWIvdmFyc1wiO1xuaW1wb3J0IHsgdXNlU1dSSW5maW5pdGUgfSBmcm9tIFwic3dyXCI7XG5cbmNvbnN0IEFwcCA9ICh7IHBvc3RzIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlzVG9nZ2xlZDogaXNMaXN0VmlldyxcbiAgICBzZXRUb2dnbGU6IHNldExpc3RWaWV3LFxuICAgIHRvZ2dsZTogc3dpdGNoVmlldyxcbiAgfSA9IHVzZVRvZ2dsZSgpO1xuXG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgd2lkdGggPSB1c2VXaW5kb3dXaWR0aCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2lkdGggPD0gNzY4ICYmIHNldExpc3RWaWV3KGZhbHNlKTtcbiAgfSwgW3dpZHRoLCB5XSk7XG5cbiAgY29uc3QgaW5pdGlhbERhdGEgPSBbcG9zdHNdO1xuXG4gIGNvbnN0IHsgZGF0YTogcGFnaW5hdGVkUG9zdHMsIHNpemUsIHNldFNpemUgfSA9IHVzZUdldFBvc3RzKGluaXRpYWxEYXRhKTtcblxuICBpZiAoIXBhZ2luYXRlZFBvc3RzKSByZXR1cm4gXCJsb2FkaW5nXCI7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBjb25zdCBib3R0b20gPVxuICAgICAgZS50YXJnZXQuc2Nyb2xsSGVpZ2h0IC0gZS50YXJnZXQuc2Nyb2xsVG9wID09PSBlLnRhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgaWYgKGJvdHRvbSkge1xuICAgICAgc2V0U2l6ZShzaXplICsgMSkudGhlbigocikgPT4gcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHByZXZpZXdzID1cbiAgICBwYWdpbmF0ZWRQb3N0cyAmJlxuICAgIHBhZ2luYXRlZFBvc3RzLm1hcCgoZWwpID0+XG4gICAgICBlbC5tYXAoKHsgX2lkLCB0aXRsZSwgc3VidGl0bGUsIHNsdWcsIG1haW5JbWFnZSwgcHVibGlzaGVkQXQsIGJvZHkgfSkgPT4gKFxuICAgICAgICA8UG9zdENhcmRcbiAgICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgICAgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fVxuICAgICAgICAgIGJvZHk9e2JvZHl9XG4gICAgICAgICAgaXNMaXN0Vmlldz17aXNMaXN0Vmlld31cbiAgICAgICAgLz5cbiAgICAgICkpXG4gICAgKTtcblxuICBjb25zdCBncmlkQ2xhc3MgPSBpc0xpc3RWaWV3XG4gICAgPyBcIm1kOm14LTE2XCJcbiAgICA6IFwibGc6Z3JpZC1jb2xzLTIgbGc6bXQtMiBpcDpncmlkLWNvbHMtMyB4bDpnYXAtMTJcIjtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7IXBhZ2luYXRlZFBvc3RzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgbG9hZGluZy4uLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBoLTEwIG10LTYganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbGc6ZmxleCBtZDpweC0xNiB4bDpweC0xNiBpcDpweC02NFwiPlxuICAgICAgICA8SWNvbnNCdG5cbiAgICAgICAgICBmaXJzdEljb249e2dyaWRJY29ufVxuICAgICAgICAgIHNlY29uZEljb249e2xpc3RJY29ufVxuICAgICAgICAgIGlzTGlzdFZpZXc9e2lzTGlzdFZpZXd9XG4gICAgICAgICAgc3dpdGNoVmlldz17c3dpdGNoVmlld31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BtYi02IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTYgbGc6bXgtMTYgaXA6bXgtNjQgJHtncmlkQ2xhc3N9YH1cbiAgICAgID5cbiAgICAgICAge3ByZXZpZXdzfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG15LTYgbGc6bXktMTIgbGc6bXgtMTYgaXA6bXgtNjRcIlxuICAgICAgPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC0yIHB5LTEgbGc6cHgtNCBsZzpweS0yIHJvdW5kZWQtbGcgaG92ZXI6Ym9yZGVyLWdyYXktODAwIGVhc2UtaW5cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEluZGV4KGluZGV4IC0gUEFHRV9TSVpFKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyaWdodEFycm93fVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUgcGwtMlwiPtCf0YDQtdC00YvQtNGD0YnQsNGPPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC0yIHB5LTEgbGc6cHgtNCBsZzpweS0yIHJvdW5kZWQtbGcgaG92ZXI6Ym9yZGVyLWdyYXktODAwIGVhc2UtaW5cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpemUoc2l6ZSArIDEpfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZSBwci0yXCI+0KHQtNC10LTRg9GO0YnQsNGPPC9zcGFuPlxuICAgICAgICAgIHtsZWZ0QXJyb3d9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoMCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=