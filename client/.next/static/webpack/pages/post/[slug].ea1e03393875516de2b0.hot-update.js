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
  }, __jsx(_PostCategories__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaW5nbGUtcG9zdC9Qb3N0Qm9keS5qcyJdLCJuYW1lcyI6WyJQb3N0Qm9keSIsImJvZHkiLCJ0aXRsZSIsInN1YnRpdGxlIiwicHVibGlzaGVkQXQiLCJuYW1lIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiY29sb3IiLCJjb2xvckFsdCIsImJvcmRlckNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBa0Q7QUFBQTs7QUFBQSxNQUEvQ0MsSUFBK0MsUUFBL0NBLElBQStDO0FBQUEsTUFBekNDLEtBQXlDLFFBQXpDQSxLQUF5QztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7QUFBQSxNQUF4QkMsV0FBd0IsUUFBeEJBLFdBQXdCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLHNCQUMzQ0Msb0VBQVksRUFEK0I7QUFBQSxNQUN6REMsU0FEeUQsaUJBQ3pEQSxTQUR5RDs7QUFHakUsU0FDRSxNQUFDLGlFQUFEO0FBQ0UsbUJBQWUsRUFBQyxjQURsQjtBQUVFLE9BQUcsRUFBRSxDQUZQO0FBR0UsU0FBSyxFQUFFQyxrREFBSyxDQUFDRCxTQUFELENBSGQ7QUFJRSxhQUFTLEVBQUMsd0JBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBWSxlQUFXLEVBQUVILFdBQXpCO0FBQXNDLGNBQVUsRUFBRUMsSUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxvRUFBRDtBQUNFLE1BQUUsRUFBQyxJQURMO0FBRUUsTUFBRSxFQUFDLEdBRkw7QUFHRSxZQUFRLEVBQUMsS0FIWDtBQUlFLFNBQUssRUFBRUcsa0RBQUssQ0FBQ0QsU0FBRCxDQUpkO0FBS0UsYUFBUyxFQUFDLG9CQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPR0wsS0FQSCxDQUZGLEVBV0UsTUFBQyxvRUFBRDtBQUNFLE1BQUUsRUFBQyxJQURMO0FBRUUsWUFBUSxFQUFDLEtBRlg7QUFHRSxTQUFLLEVBQUVPLHFEQUFRLENBQUNGLFNBQUQsQ0FIakI7QUFJRSxhQUFTLEVBQUMsdUJBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HSixRQU5ILENBWEYsRUFtQkUsTUFBQyxxRUFBRDtBQUFjLGFBQVMsRUFBQyxNQUF4QjtBQUErQixVQUFNLEVBQUVGLElBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkYsQ0FORixFQTJCRSxNQUFDLG9FQUFEO0FBQ0UsZUFBVyxFQUFFUyx3REFBVyxDQUFDSCxTQUFELENBRDFCO0FBRUUsZUFBVyxFQUFDLFVBRmQ7QUFHRSxNQUFFLEVBQUMsR0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JGLEVBZ0NFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBaENGLENBREY7QUFzQ0QsQ0F6Q0Q7O0dBQU1QLFE7VUFDa0JNLDREOzs7S0FEbEJOLFE7QUEyQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLmVhMWUwMzM5Mzg3NTUxNmRlMmIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIjtcbmltcG9ydCBBdXRob3JEYXRlIGZyb20gXCIuLi9zaGFyZWQvQXV0aG9yRGF0ZVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQm94XCI7XG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvSGVhZGluZ1wiO1xuaW1wb3J0IHsgdXNlQ29sb3JNb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xuaW1wb3J0IHsgY29sb3IsIGNvbG9yQWx0LCBib3JkZXJDb2xvciB9IGZyb20gXCIuLi8uLi9jdXN0b21UaGVtZVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0dyaWRcIjtcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9EaXZpZGVyXCI7XG5pbXBvcnQgUG9zdENhdGVnb3JpZXMgZnJvbSBcIi4vUG9zdENhdGVnb3JpZXNcIjtcblxuY29uc3QgUG9zdEJvZHkgPSAoeyBib2R5LCB0aXRsZSwgc3VidGl0bGUsIHB1Ymxpc2hlZEF0LCBuYW1lIH0pID0+IHtcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWRcbiAgICAgIHRlbXBsYXRlQ29sdW1ucz1cIjNmciBhdXRvIDFmclwiXG4gICAgICBnYXA9ezZ9XG4gICAgICBjb2xvcj17Y29sb3JbY29sb3JNb2RlXX1cbiAgICAgIGNsYXNzTmFtZT1cImFydGljbGUtYm9keS1jb250YWluZXJcIlxuICAgID5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxBdXRob3JEYXRlIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH0gc2Vjb25kUHJvcD17bmFtZX0gLz5cbiAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICBhcz1cImgxXCJcbiAgICAgICAgICBteT1cIjZcIlxuICAgICAgICAgIGZvbnRTaXplPVwiNHhsXCJcbiAgICAgICAgICBjb2xvcj17Y29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlLWJvZHktdGl0bGVcIlxuICAgICAgICA+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgYXM9XCJoMlwiXG4gICAgICAgICAgZm9udFNpemU9XCIyeGxcIlxuICAgICAgICAgIGNvbG9yPXtjb2xvckFsdFtjb2xvck1vZGVdfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUtYm9keS1zdWJ0aXRsZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7c3VidGl0bGV9XG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPEJsb2NrQ29udGVudCBjbGFzc05hbWU9XCJteS02XCIgYmxvY2tzPXtib2R5fSAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8RGl2aWRlclxuICAgICAgICBib3JkZXJDb2xvcj17Ym9yZGVyQ29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgIG15PVwiNlwiXG4gICAgICAvPlxuICAgICAgPEJveD5cbiAgICAgICAgPFBvc3RDYXRlZ29yaWVzIC8+XG4gICAgICA8L0JveD5cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Qm9keTtcbiJdLCJzb3VyY2VSb290IjoiIn0=