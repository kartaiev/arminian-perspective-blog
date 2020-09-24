webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client */ "./lib/client.js");
/* harmony import */ var _components_PostCover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PostCover */ "./components/PostCover.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
/* harmony import */ var _components_PublishedDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/PublishedDate */ "./components/PublishedDate.js");
/* harmony import */ var _components_PostBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/PostBody */ "./components/PostBody.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\post\\[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Post = function Post(_ref) {
  var _ref$post = _ref.post,
      mainImage = _ref$post.mainImage,
      title = _ref$post.title,
      subtitle = _ref$post.subtitle,
      publishedAt = _ref$post.publishedAt,
      name = _ref$post.name,
      body = _ref$post.body,
      categories = _ref$post.categories;
  return __jsx(components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: "h-full mt-6 mb-20 text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, mainImage && __jsx(_components_PostCover__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mainImage: mainImage,
    title: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 23
    }
  }), __jsx(_components_PostBody__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: title,
    subtitle: subtitle,
    body: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "py-2 flex justify-between text-sm text-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "hover:text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, name), __jsx(_components_PublishedDate__WEBPACK_IMPORTED_MODULE_8__["default"], {
    publishedAt: publishedAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }))));
};

_c = Post;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJtYWluSW1hZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwicHVibGlzaGVkQXQiLCJuYW1lIiwiYm9keSIsImNhdGVnb3JpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUVQO0FBQUEsdUJBREpDLElBQ0k7QUFBQSxNQURJQyxTQUNKLGFBRElBLFNBQ0o7QUFBQSxNQURlQyxLQUNmLGFBRGVBLEtBQ2Y7QUFBQSxNQURzQkMsUUFDdEIsYUFEc0JBLFFBQ3RCO0FBQUEsTUFEZ0NDLFdBQ2hDLGFBRGdDQSxXQUNoQztBQUFBLE1BRDZDQyxJQUM3QyxhQUQ2Q0EsSUFDN0M7QUFBQSxNQURtREMsSUFDbkQsYUFEbURBLElBQ25EO0FBQUEsTUFEeURDLFVBQ3pELGFBRHlEQSxVQUN6RDtBQUNKLFNBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUyxhQUFTLEVBQUMsaUNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sU0FBUyxJQUFJLE1BQUMsNkRBQUQ7QUFBVyxhQUFTLEVBQUVBLFNBQXRCO0FBQWlDLFNBQUssRUFBRUMsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURoQixFQUVFLE1BQUMsNERBQUQ7QUFBVSxTQUFLLEVBQUVBLEtBQWpCO0FBQXdCLFlBQVEsRUFBRUMsUUFBbEM7QUFBNEMsUUFBSSxFQUFFRyxJQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFLLGFBQVMsRUFBQyxpREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUNELElBQXZDLENBREYsRUFFRSxNQUFDLGlFQUFEO0FBQWUsZUFBVyxFQUFFRCxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FIRixDQURGLENBREY7QUFtQkQsQ0F0QkQ7O0tBQU1MLEk7O0FBNENTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS5hYTgwMWYyODVmMmVhMGQyM2U1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tIFwiQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCJsaWIvaGVscGVyc1wiO1xuaW1wb3J0IHsgZ2V0U2luZ2xlUG9zdCwgZ2V0QWxsUG9zdHMgfSBmcm9tIFwibGliL2FwaVwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vbGliL2NsaWVudFwiO1xuaW1wb3J0IFBvc3RDb3ZlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0Q292ZXJcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgcnUgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5pbXBvcnQgUHVibGlzaGVkRGF0ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QdWJsaXNoZWREYXRlXCI7XG5pbXBvcnQgUG9zdEJvZHkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdEJvZHlcIjtcblxuY29uc3QgUG9zdCA9ICh7XG4gIHBvc3Q6IHsgbWFpbkltYWdlLCB0aXRsZSwgc3VidGl0bGUsIHB1Ymxpc2hlZEF0LCBuYW1lLCBib2R5LCBjYXRlZ29yaWVzIH0sXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImgtZnVsbCBtdC02IG1iLTIwIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAge21haW5JbWFnZSAmJiA8UG9zdENvdmVyIG1haW5JbWFnZT17bWFpbkltYWdlfSB0aXRsZT17dGl0bGV9IC8+fVxuICAgICAgICA8UG9zdEJvZHkgdGl0bGU9e3RpdGxlfSBzdWJ0aXRsZT17c3VidGl0bGV9IGJvZHk9e2JvZHl9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktODAwXCI+e25hbWV9PC9zcGFuPlxuICAgICAgICAgIDxQdWJsaXNoZWREYXRlIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKntjYXRlZ29yaWVzICYmICgqL31cbiAgICAgICAgey8qICA8dWw+Ki99XG4gICAgICAgIHsvKiAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoKi99XG4gICAgICAgIHsvKiAgICAgIDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT4qL31cbiAgICAgICAgey8qICAgICkpfSovfVxuICAgICAgICB7LyogIDwvdWw+Ki99XG4gICAgICAgIHsvKil9Ki99XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0U2luZ2xlUG9zdChwYXJhbXMuc2x1Zyk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3QsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcG9zdHMubWFwKChwb3N0KSA9PiAoe1xuICAgICAgcGFyYW1zOiB7IHNsdWc6IHBvc3Quc2x1Zy5jdXJyZW50IH0sXG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=