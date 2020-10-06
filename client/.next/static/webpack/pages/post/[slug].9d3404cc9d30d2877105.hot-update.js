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
    templateColumns: "3fr 1fr",
    gap: 6,
    color: _customTheme__WEBPACK_IMPORTED_MODULE_6__["color"][colorMode],
    className: "article-body-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    borderRight: "1px",
    pr: "6",
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_6__["borderColor"][colorMode],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(_shared_AuthorDate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    publishedAt: publishedAt,
    secondProp: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
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
      lineNumber: 22,
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
      lineNumber: 31,
      columnNumber: 9
    }
  }, subtitle), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "my-6",
    blocks: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  })), __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaW5nbGUtcG9zdC9Qb3N0Qm9keS5qcyJdLCJuYW1lcyI6WyJQb3N0Qm9keSIsImJvZHkiLCJ0aXRsZSIsInN1YnRpdGxlIiwicHVibGlzaGVkQXQiLCJuYW1lIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiY29sb3IiLCJib3JkZXJDb2xvciIsImNvbG9yQWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBa0Q7QUFBQTs7QUFBQSxNQUEvQ0MsSUFBK0MsUUFBL0NBLElBQStDO0FBQUEsTUFBekNDLEtBQXlDLFFBQXpDQSxLQUF5QztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7QUFBQSxNQUF4QkMsV0FBd0IsUUFBeEJBLFdBQXdCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLHNCQUMzQ0Msb0VBQVksRUFEK0I7QUFBQSxNQUN6REMsU0FEeUQsaUJBQ3pEQSxTQUR5RDs7QUFHakUsU0FDRSxNQUFDLGlFQUFEO0FBQ0UsbUJBQWUsRUFBQyxTQURsQjtBQUVFLE9BQUcsRUFBRSxDQUZQO0FBR0UsU0FBSyxFQUFFQyxrREFBSyxDQUFDRCxTQUFELENBSGQ7QUFJRSxhQUFTLEVBQUMsd0JBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsZ0VBQUQ7QUFBSyxlQUFXLEVBQUMsS0FBakI7QUFBdUIsTUFBRSxFQUFDLEdBQTFCO0FBQThCLGVBQVcsRUFBRUUsd0RBQVcsQ0FBQ0YsU0FBRCxDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFZLGVBQVcsRUFBRUgsV0FBekI7QUFBc0MsY0FBVSxFQUFFQyxJQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLG9FQUFEO0FBQ0UsTUFBRSxFQUFDLElBREw7QUFFRSxNQUFFLEVBQUMsR0FGTDtBQUdFLFlBQVEsRUFBQyxLQUhYO0FBSUUsU0FBSyxFQUFFRyxrREFBSyxDQUFDRCxTQUFELENBSmQ7QUFLRSxhQUFTLEVBQUMsb0JBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HTCxLQVBILENBRkYsRUFXRSxNQUFDLG9FQUFEO0FBQ0UsTUFBRSxFQUFDLElBREw7QUFFRSxZQUFRLEVBQUMsS0FGWDtBQUdFLFNBQUssRUFBRVEscURBQVEsQ0FBQ0gsU0FBRCxDQUhqQjtBQUlFLGFBQVMsRUFBQyx1QkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdKLFFBTkgsQ0FYRixFQW1CRSxNQUFDLHFFQUFEO0FBQWMsYUFBUyxFQUFDLE1BQXhCO0FBQStCLFVBQU0sRUFBRUYsSUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CRixDQU5GLEVBMkJFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNCRixDQURGO0FBK0JELENBbENEOztHQUFNRCxRO1VBQ2tCTSw0RDs7O0tBRGxCTixRO0FBb0NTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS45ZDM0MDRjYzlkMzBkMjg3NzEwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tIFwiQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0XCI7XG5pbXBvcnQgQXV0aG9yRGF0ZSBmcm9tIFwiLi4vc2hhcmVkL0F1dGhvckRhdGVcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0JveFwiO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0hlYWRpbmdcIjtcbmltcG9ydCB7IHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCB7IGNvbG9yLCBjb2xvckFsdCwgYm9yZGVyQ29sb3IgfSBmcm9tIFwiLi4vLi4vY3VzdG9tVGhlbWVcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9HcmlkXCI7XG5cbmNvbnN0IFBvc3RCb2R5ID0gKHsgYm9keSwgdGl0bGUsIHN1YnRpdGxlLCBwdWJsaXNoZWRBdCwgbmFtZSB9KSA9PiB7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkXG4gICAgICB0ZW1wbGF0ZUNvbHVtbnM9XCIzZnIgMWZyXCJcbiAgICAgIGdhcD17Nn1cbiAgICAgIGNvbG9yPXtjb2xvcltjb2xvck1vZGVdfVxuICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1ib2R5LWNvbnRhaW5lclwiXG4gICAgPlxuICAgICAgPEJveCBib3JkZXJSaWdodD1cIjFweFwiIHByPVwiNlwiIGJvcmRlckNvbG9yPXtib3JkZXJDb2xvcltjb2xvck1vZGVdfT5cbiAgICAgICAgPEF1dGhvckRhdGUgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fSBzZWNvbmRQcm9wPXtuYW1lfSAvPlxuICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgIGFzPVwiaDFcIlxuICAgICAgICAgIG15PVwiNlwiXG4gICAgICAgICAgZm9udFNpemU9XCI0eGxcIlxuICAgICAgICAgIGNvbG9yPXtjb2xvcltjb2xvck1vZGVdfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUtYm9keS10aXRsZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICBhcz1cImgyXCJcbiAgICAgICAgICBmb250U2l6ZT1cIjJ4bFwiXG4gICAgICAgICAgY29sb3I9e2NvbG9yQWx0W2NvbG9yTW9kZV19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1ib2R5LXN1YnRpdGxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8QmxvY2tDb250ZW50IGNsYXNzTmFtZT1cIm15LTZcIiBibG9ja3M9e2JvZHl9IC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3g+SGVsbG88L0JveD5cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Qm9keTtcbiJdLCJzb3VyY2VSb290IjoiIn0=