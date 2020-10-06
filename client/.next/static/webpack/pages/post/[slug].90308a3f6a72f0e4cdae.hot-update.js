webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/single-post/PostBody.js":
/*!********************************************!*\
  !*** ./components/single-post/PostBody.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_AuthorDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/AuthorDate */ "./components/shared/AuthorDate.js");
/* harmony import */ var _chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core/dist/Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");
/* harmony import */ var _chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core/dist/Heading */ "./node_modules/@chakra-ui/core/dist/es/Heading/index.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../customTheme */ "./customTheme.js");
/* harmony import */ var _chakra_ui_core_dist_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/core/dist/Grid */ "./node_modules/@chakra-ui/core/dist/es/Grid/index.js");
/* harmony import */ var _chakra_ui_core_dist_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/core/dist/Divider */ "./node_modules/@chakra-ui/core/dist/es/Divider/index.js");
/* harmony import */ var _PostCategories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PostCategories */ "./components/single-post/PostCategories.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\single-post\\PostBody.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var PostBody = function PostBody(_ref) {
  _s();

  var body = _ref.body,
      title = _ref.title,
      subtitle = _ref.subtitle,
      publishedAt = _ref.publishedAt,
      name = _ref.name,
      categories = _ref.categories;

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  return __jsx(_chakra_ui_core_dist_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    templateColumns: "3fr auto 1fr",
    gap: 6,
    color: _customTheme__WEBPACK_IMPORTED_MODULE_6__["color"][colorMode],
    className: "article-body-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_shared_AuthorDate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    publishedAt: publishedAt,
    secondProp: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: "h1",
    my: "6",
    fontSize: "4xl",
    color: _customTheme__WEBPACK_IMPORTED_MODULE_6__["color"][colorMode],
    className: "article-body-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, title), __jsx(_chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: "h2",
    fontSize: "2xl",
    color: _customTheme__WEBPACK_IMPORTED_MODULE_6__["colorAlt"][colorMode],
    className: "article-body-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, subtitle), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "my-6",
    blocks: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  })), __jsx(_chakra_ui_core_dist_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_6__["borderColor"][colorMode],
    orientation: "vertical",
    my: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, categories && __jsx(_PostCategories__WEBPACK_IMPORTED_MODULE_9__["default"], {
    categories: categories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 27
    }
  })));
};

_s(PostBody, "2Uu86IH3do63pkN3s1ysdRMmJuc=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["useColorMode"]];
});

_c = PostBody;
/* harmony default export */ __webpack_exports__["default"] = (PostBody);

var _c;

$RefreshReg$(_c, "PostBody");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaW5nbGUtcG9zdC9Qb3N0Qm9keS5qcyJdLCJuYW1lcyI6WyJQb3N0Qm9keSIsImJvZHkiLCJ0aXRsZSIsInN1YnRpdGxlIiwicHVibGlzaGVkQXQiLCJuYW1lIiwiY2F0ZWdvcmllcyIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsImNvbG9yIiwiY29sb3JBbHQiLCJib3JkZXJDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQThEO0FBQUE7O0FBQUEsTUFBM0RDLElBQTJELFFBQTNEQSxJQUEyRDtBQUFBLE1BQXJEQyxLQUFxRCxRQUFyREEsS0FBcUQ7QUFBQSxNQUE5Q0MsUUFBOEMsUUFBOUNBLFFBQThDO0FBQUEsTUFBcENDLFdBQW9DLFFBQXBDQSxXQUFvQztBQUFBLE1BQXZCQyxJQUF1QixRQUF2QkEsSUFBdUI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLHNCQUN2REMsb0VBQVksRUFEMkM7QUFBQSxNQUNyRUMsU0FEcUUsaUJBQ3JFQSxTQURxRTs7QUFHN0UsU0FDRSxNQUFDLGlFQUFEO0FBQ0UsbUJBQWUsRUFBQyxjQURsQjtBQUVFLE9BQUcsRUFBRSxDQUZQO0FBR0UsU0FBSyxFQUFFQyxrREFBSyxDQUFDRCxTQUFELENBSGQ7QUFJRSxhQUFTLEVBQUMsd0JBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBWSxlQUFXLEVBQUVKLFdBQXpCO0FBQXNDLGNBQVUsRUFBRUMsSUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxvRUFBRDtBQUNFLE1BQUUsRUFBQyxJQURMO0FBRUUsTUFBRSxFQUFDLEdBRkw7QUFHRSxZQUFRLEVBQUMsS0FIWDtBQUlFLFNBQUssRUFBRUksa0RBQUssQ0FBQ0QsU0FBRCxDQUpkO0FBS0UsYUFBUyxFQUFDLG9CQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPR04sS0FQSCxDQUZGLEVBV0UsTUFBQyxvRUFBRDtBQUNFLE1BQUUsRUFBQyxJQURMO0FBRUUsWUFBUSxFQUFDLEtBRlg7QUFHRSxTQUFLLEVBQUVRLHFEQUFRLENBQUNGLFNBQUQsQ0FIakI7QUFJRSxhQUFTLEVBQUMsdUJBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HTCxRQU5ILENBWEYsRUFtQkUsTUFBQyxxRUFBRDtBQUFjLGFBQVMsRUFBQyxNQUF4QjtBQUErQixVQUFNLEVBQUVGLElBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkYsQ0FORixFQTJCRSxNQUFDLG9FQUFEO0FBQ0UsZUFBVyxFQUFFVSx3REFBVyxDQUFDSCxTQUFELENBRDFCO0FBRUUsZUFBVyxFQUFDLFVBRmQ7QUFHRSxNQUFFLEVBQUMsR0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JGLEVBZ0NFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNRixVQUFVLElBQUksTUFBQyx1REFBRDtBQUFnQixjQUFVLEVBQUVBLFVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBcEIsQ0FoQ0YsQ0FERjtBQW9DRCxDQXZDRDs7R0FBTU4sUTtVQUNrQk8sNEQ7OztLQURsQlAsUTtBQXlDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uOTAzMDhhM2Y2YTcyZjBlNGNkYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xuaW1wb3J0IEF1dGhvckRhdGUgZnJvbSBcIi4uL3NoYXJlZC9BdXRob3JEYXRlXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9Cb3hcIjtcbmltcG9ydCBIZWFkaW5nIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9IZWFkaW5nXCI7XG5pbXBvcnQgeyB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBjb2xvciwgY29sb3JBbHQsIGJvcmRlckNvbG9yIH0gZnJvbSBcIi4uLy4uL2N1c3RvbVRoZW1lXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvR3JpZFwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0RpdmlkZXJcIjtcbmltcG9ydCBQb3N0Q2F0ZWdvcmllcyBmcm9tIFwiLi9Qb3N0Q2F0ZWdvcmllc1wiO1xuXG5jb25zdCBQb3N0Qm9keSA9ICh7IGJvZHksIHRpdGxlLCBzdWJ0aXRsZSwgcHVibGlzaGVkQXQsIG5hbWUsIGNhdGVnb3JpZXMgfSkgPT4ge1xuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZFxuICAgICAgdGVtcGxhdGVDb2x1bW5zPVwiM2ZyIGF1dG8gMWZyXCJcbiAgICAgIGdhcD17Nn1cbiAgICAgIGNvbG9yPXtjb2xvcltjb2xvck1vZGVdfVxuICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1ib2R5LWNvbnRhaW5lclwiXG4gICAgPlxuICAgICAgPEJveD5cbiAgICAgICAgPEF1dGhvckRhdGUgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fSBzZWNvbmRQcm9wPXtuYW1lfSAvPlxuICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgIGFzPVwiaDFcIlxuICAgICAgICAgIG15PVwiNlwiXG4gICAgICAgICAgZm9udFNpemU9XCI0eGxcIlxuICAgICAgICAgIGNvbG9yPXtjb2xvcltjb2xvck1vZGVdfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUtYm9keS10aXRsZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICBhcz1cImgyXCJcbiAgICAgICAgICBmb250U2l6ZT1cIjJ4bFwiXG4gICAgICAgICAgY29sb3I9e2NvbG9yQWx0W2NvbG9yTW9kZV19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1ib2R5LXN1YnRpdGxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8QmxvY2tDb250ZW50IGNsYXNzTmFtZT1cIm15LTZcIiBibG9ja3M9e2JvZHl9IC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxEaXZpZGVyXG4gICAgICAgIGJvcmRlckNvbG9yPXtib3JkZXJDb2xvcltjb2xvck1vZGVdfVxuICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcbiAgICAgICAgbXk9XCI2XCJcbiAgICAgIC8+XG4gICAgICA8Qm94PntjYXRlZ29yaWVzICYmIDxQb3N0Q2F0ZWdvcmllcyBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPn08L0JveD5cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Qm9keTtcbiJdLCJzb3VyY2VSb290IjoiIn0=