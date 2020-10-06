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
      name = _ref.name;

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
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_shared_AuthorDate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    publishedAt: publishedAt,
    secondProp: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
      lineNumber: 23,
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
      lineNumber: 32,
      columnNumber: 9
    }
  }, subtitle), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "my-6",
    blocks: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })), __jsx(_chakra_ui_core_dist_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    orientation: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "Hello"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaW5nbGUtcG9zdC9Qb3N0Qm9keS5qcyJdLCJuYW1lcyI6WyJQb3N0Qm9keSIsImJvZHkiLCJ0aXRsZSIsInN1YnRpdGxlIiwicHVibGlzaGVkQXQiLCJuYW1lIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiY29sb3IiLCJjb2xvckFsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWtEO0FBQUE7O0FBQUEsTUFBL0NDLElBQStDLFFBQS9DQSxJQUErQztBQUFBLE1BQXpDQyxLQUF5QyxRQUF6Q0EsS0FBeUM7QUFBQSxNQUFsQ0MsUUFBa0MsUUFBbENBLFFBQWtDO0FBQUEsTUFBeEJDLFdBQXdCLFFBQXhCQSxXQUF3QjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxzQkFDM0NDLG9FQUFZLEVBRCtCO0FBQUEsTUFDekRDLFNBRHlELGlCQUN6REEsU0FEeUQ7O0FBR2pFLFNBQ0UsTUFBQyxpRUFBRDtBQUNFLG1CQUFlLEVBQUMsY0FEbEI7QUFFRSxPQUFHLEVBQUUsQ0FGUDtBQUdFLFNBQUssRUFBRUMsa0RBQUssQ0FBQ0QsU0FBRCxDQUhkO0FBSUUsYUFBUyxFQUFDLHdCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQVksZUFBVyxFQUFFSCxXQUF6QjtBQUFzQyxjQUFVLEVBQUVDLElBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsb0VBQUQ7QUFDRSxNQUFFLEVBQUMsSUFETDtBQUVFLE1BQUUsRUFBQyxHQUZMO0FBR0UsWUFBUSxFQUFDLEtBSFg7QUFJRSxTQUFLLEVBQUVHLGtEQUFLLENBQUNELFNBQUQsQ0FKZDtBQUtFLGFBQVMsRUFBQyxvQkFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dMLEtBUEgsQ0FGRixFQVdFLE1BQUMsb0VBQUQ7QUFDRSxNQUFFLEVBQUMsSUFETDtBQUVFLFlBQVEsRUFBQyxLQUZYO0FBR0UsU0FBSyxFQUFFTyxxREFBUSxDQUFDRixTQUFELENBSGpCO0FBSUUsYUFBUyxFQUFDLHVCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR0osUUFOSCxDQVhGLEVBbUJFLE1BQUMscUVBQUQ7QUFBYyxhQUFTLEVBQUMsTUFBeEI7QUFBK0IsVUFBTSxFQUFFRixJQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJGLENBTkYsRUEyQkUsTUFBQyxvRUFBRDtBQUFTLGVBQVcsRUFBQyxVQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JGLEVBNEJFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVCRixDQURGO0FBZ0NELENBbkNEOztHQUFNRCxRO1VBQ2tCTSw0RDs7O0tBRGxCTixRO0FBcUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS45OTU3Njg4OTY3NmMzNDU2NjQ3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tIFwiQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0XCI7XG5pbXBvcnQgQXV0aG9yRGF0ZSBmcm9tIFwiLi4vc2hhcmVkL0F1dGhvckRhdGVcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0JveFwiO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0hlYWRpbmdcIjtcbmltcG9ydCB7IHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCB7IGNvbG9yLCBjb2xvckFsdCwgYm9yZGVyQ29sb3IgfSBmcm9tIFwiLi4vLi4vY3VzdG9tVGhlbWVcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9HcmlkXCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvRGl2aWRlclwiO1xuXG5jb25zdCBQb3N0Qm9keSA9ICh7IGJvZHksIHRpdGxlLCBzdWJ0aXRsZSwgcHVibGlzaGVkQXQsIG5hbWUgfSkgPT4ge1xuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZFxuICAgICAgdGVtcGxhdGVDb2x1bW5zPVwiM2ZyIGF1dG8gMWZyXCJcbiAgICAgIGdhcD17Nn1cbiAgICAgIGNvbG9yPXtjb2xvcltjb2xvck1vZGVdfVxuICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1ib2R5LWNvbnRhaW5lclwiXG4gICAgPlxuICAgICAgPEJveD5cbiAgICAgICAgPEF1dGhvckRhdGUgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fSBzZWNvbmRQcm9wPXtuYW1lfSAvPlxuICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgIGFzPVwiaDFcIlxuICAgICAgICAgIG15PVwiNlwiXG4gICAgICAgICAgZm9udFNpemU9XCI0eGxcIlxuICAgICAgICAgIGNvbG9yPXtjb2xvcltjb2xvck1vZGVdfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUtYm9keS10aXRsZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICBhcz1cImgyXCJcbiAgICAgICAgICBmb250U2l6ZT1cIjJ4bFwiXG4gICAgICAgICAgY29sb3I9e2NvbG9yQWx0W2NvbG9yTW9kZV19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1ib2R5LXN1YnRpdGxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8QmxvY2tDb250ZW50IGNsYXNzTmFtZT1cIm15LTZcIiBibG9ja3M9e2JvZHl9IC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwidmVydGljYWxcIiAvPlxuICAgICAgPEJveD5IZWxsbzwvQm94PlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RCb2R5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==