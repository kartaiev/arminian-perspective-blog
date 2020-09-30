webpackHotUpdate_N_E("pages/index",{

/***/ "./components/posts-preview/PostCard.js":
/*!**********************************************!*\
  !*** ./components/posts-preview/PostCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _single_post_PostAuthorDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../single-post/PostAuthorDate */ "./components/single-post/PostAuthorDate.js");
/* harmony import */ var _PostCover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PostCover */ "./components/PostCover.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\posts-preview\\PostCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var PostCard = function PostCard(_ref) {
  var slug = _ref.slug,
      mainImage = _ref.mainImage,
      subtitle = _ref.subtitle,
      publishedAt = _ref.publishedAt,
      title = _ref.title,
      isListView = _ref.isListView;
  var variants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 5px 10px rgba(0,0,0,.5)",
      transition: {
        ease: "easeOut"
      }
    },
    off: {
      scale: 1
    }
  };
  var cardClass = isListView ? "mt-6 h-64 flex border border-gray-400 rounded-lg overflow-hidden" : "mt-6 border border-gray-400 rounded-lg overflow-hidden";
  var h2Class = isListView ? " pr-24" : "";
  return slug && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/post/[slug]",
    as: "/post/".concat(slug.current),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].a, {
    whileHover: "hover",
    variants: variants,
    className: cardClass,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_PostCover__WEBPACK_IMPORTED_MODULE_4__["default"], {
    mainImage: mainImage,
    title: title,
    isListView: isListView,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "h-full w-full p-6 relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "font-bold text-gray-800 text-2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, title), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, subtitle)), __jsx(_single_post_PostAuthorDate__WEBPACK_IMPORTED_MODULE_3__["default"], {
    secondProp: "",
    publishedAt: publishedAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }))));
};

_c = PostCard;
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwic2x1ZyIsIm1haW5JbWFnZSIsInN1YnRpdGxlIiwicHVibGlzaGVkQXQiLCJ0aXRsZSIsImlzTGlzdFZpZXciLCJ2YXJpYW50cyIsImhvdmVyIiwic2NhbGUiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwiZWFzZSIsIm9mZiIsImNhcmRDbGFzcyIsImgyQ2xhc3MiLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQU9YO0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FBQUEsTUFMSkMsU0FLSSxRQUxKQSxTQUtJO0FBQUEsTUFKSkMsUUFJSSxRQUpKQSxRQUlJO0FBQUEsTUFISkMsV0FHSSxRQUhKQSxXQUdJO0FBQUEsTUFGSkMsS0FFSSxRQUZKQSxLQUVJO0FBQUEsTUFESkMsVUFDSSxRQURKQSxVQUNJO0FBQ0osTUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsSUFERjtBQUVMQyxlQUFTLEVBQUUsMkJBRk47QUFHTEMsZ0JBQVUsRUFBRTtBQUFFQyxZQUFJLEVBQUU7QUFBUjtBQUhQLEtBRFE7QUFNZkMsT0FBRyxFQUFFO0FBQUVKLFdBQUssRUFBRTtBQUFUO0FBTlUsR0FBakI7QUFTQSxNQUFNSyxTQUFTLEdBQUdSLFVBQVUsR0FDeEIsa0VBRHdCLEdBRXhCLHdEQUZKO0FBSUEsTUFBTVMsT0FBTyxHQUFHVCxVQUFVLEdBQUcsUUFBSCxHQUFjLEVBQXhDO0FBRUEsU0FDRUwsSUFBSSxJQUNGLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUEwQixNQUFFLGtCQUFXQSxJQUFJLENBQUNlLE9BQWhCLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsQ0FBUjtBQUFVLGNBQVUsRUFBQyxPQUFyQjtBQUE2QixZQUFRLEVBQUVULFFBQXZDO0FBQWlELGFBQVMsRUFBRU8sU0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFDRSxhQUFTLEVBQUVaLFNBRGI7QUFFRSxTQUFLLEVBQUVHLEtBRlQ7QUFHRSxjQUFVLEVBQUVDLFVBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtERCxLQUFsRCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdHRixRQUhILENBRkYsQ0FERixFQVNFLE1BQUMsbUVBQUQ7QUFBZ0IsY0FBVSxFQUFFLEVBQTVCO0FBQWdDLGVBQVcsRUFBRUMsV0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBTkYsQ0FERixDQUZKO0FBd0JELENBL0NEOztLQUFNSixRO0FBaURTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNDJjMWYxNjkzNTU4OGU4Nzk2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBQb3N0QXV0aG9yRGF0ZSBmcm9tIFwiLi4vc2luZ2xlLXBvc3QvUG9zdEF1dGhvckRhdGVcIjtcbmltcG9ydCBQb3N0Q292ZXIgZnJvbSBcIi4uL1Bvc3RDb3ZlclwiO1xuXG5jb25zdCBQb3N0Q2FyZCA9ICh7XG4gIHNsdWcsXG4gIG1haW5JbWFnZSxcbiAgc3VidGl0bGUsXG4gIHB1Ymxpc2hlZEF0LFxuICB0aXRsZSxcbiAgaXNMaXN0Vmlldyxcbn0pID0+IHtcbiAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgaG92ZXI6IHtcbiAgICAgIHNjYWxlOiAxLjAzLFxuICAgICAgYm94U2hhZG93OiBcIjAgNXB4IDEwcHggcmdiYSgwLDAsMCwuNSlcIixcbiAgICAgIHRyYW5zaXRpb246IHsgZWFzZTogXCJlYXNlT3V0XCIgfSxcbiAgICB9LFxuICAgIG9mZjogeyBzY2FsZTogMSB9LFxuICB9O1xuXG4gIGNvbnN0IGNhcmRDbGFzcyA9IGlzTGlzdFZpZXdcbiAgICA/IFwibXQtNiBoLTY0IGZsZXggYm9yZGVyIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiXG4gICAgOiBcIm10LTYgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiO1xuXG4gIGNvbnN0IGgyQ2xhc3MgPSBpc0xpc3RWaWV3ID8gXCIgcHItMjRcIiA6IFwiXCI7XG5cbiAgcmV0dXJuIChcbiAgICBzbHVnICYmIChcbiAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7c2x1Zy5jdXJyZW50fWB9PlxuICAgICAgICA8bW90aW9uLmEgd2hpbGVIb3Zlcj1cImhvdmVyXCIgdmFyaWFudHM9e3ZhcmlhbnRzfSBjbGFzc05hbWU9e2NhcmRDbGFzc30+XG4gICAgICAgICAgPFBvc3RDb3ZlclxuICAgICAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICBpc0xpc3RWaWV3PXtpc0xpc3RWaWV3fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHAtNiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIHRleHQtMnhsXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2Bmb250LXNlbWlib2xkIHRleHQtcHJpbWFyeSB0ZXh0LXhsIHRleHQtZ3JheS02MDAgcGItMTIgcHQtNCAke2gyQ2xhc3N9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFBvc3RBdXRob3JEYXRlIHNlY29uZFByb3A9e1wiXCJ9IHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uYT5cbiAgICAgIDwvTGluaz5cbiAgICApXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=