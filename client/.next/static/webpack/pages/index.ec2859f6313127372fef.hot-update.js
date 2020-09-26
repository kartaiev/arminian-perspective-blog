webpackHotUpdate_N_E("pages/index",{

/***/ "./components/posts-preview/PostListCard.js":
/*!**************************************************!*\
  !*** ./components/posts-preview/PostListCard.js ***!
  \**************************************************/
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
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\posts-preview\\PostListCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var PostListCard = function PostListCard(_ref) {
  _s();

  var slug = _ref.slug,
      mainImage = _ref.mainImage,
      subtitle = _ref.subtitle,
      publishedAt = _ref.publishedAt,
      title = _ref.title,
      body = _ref.body,
      isToggled = _ref.isToggled;
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(isToggled);
  }, [isToggled]);
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
    className: "mt-6 border border-gray-400 rounded-lg overflow-hidden flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, mainImage && __jsx("img", {
    src: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_4__["urlFor"])(mainImage).auto("format").url(),
    alt: title,
    className: "w-1/3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: " w-full p-4 lg:p-6 flex flex-col justify-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "font-bold text-gray-800 text-2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, title), __jsx("h2", {
    className: "font-semibold text-xl text-gray-800 my-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, subtitle), !isToggled && __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "hidden lg:block my-4 text-lg",
    blocks: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  })), __jsx(_single_post_PostAuthorDate__WEBPACK_IMPORTED_MODULE_3__["default"], {
    secondProp: "",
    publishedAt: publishedAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }))));
};

_s(PostListCard, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = PostListCard;
/* harmony default export */ __webpack_exports__["default"] = (PostListCard);

var _c;

$RefreshReg$(_c, "PostListCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RMaXN0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0TGlzdENhcmQiLCJzbHVnIiwibWFpbkltYWdlIiwic3VidGl0bGUiLCJwdWJsaXNoZWRBdCIsInRpdGxlIiwiYm9keSIsImlzVG9nZ2xlZCIsInZhcmlhbnRzIiwiaG92ZXIiLCJzY2FsZSIsImJveFNoYWRvdyIsInRyYW5zaXRpb24iLCJlYXNlIiwib2ZmIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJ1cmxGb3IiLCJhdXRvIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BUWY7QUFBQTs7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxTQU1JLFFBTkpBLFNBTUk7QUFBQSxNQUxKQyxRQUtJLFFBTEpBLFFBS0k7QUFBQSxNQUpKQyxXQUlJLFFBSkpBLFdBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxJQUVJLFFBRkpBLElBRUk7QUFBQSxNQURKQyxTQUNJLFFBREpBLFNBQ0k7QUFDSixNQUFNQyxRQUFRLEdBQUc7QUFDZkMsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxJQURGO0FBRUxDLGVBQVMsRUFBRSwyQkFGTjtBQUdMQyxnQkFBVSxFQUFFO0FBQUVDLFlBQUksRUFBRTtBQUFSO0FBSFAsS0FEUTtBQU1mQyxPQUFHLEVBQUU7QUFBRUosV0FBSyxFQUFFO0FBQVQ7QUFOVSxHQUFqQjtBQVNBSyx5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlWLFNBQVo7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsU0FBRCxDQUZNLENBQVQ7QUFJQSxTQUNFTixJQUFJLElBQ0YsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQTBCLE1BQUUsa0JBQVdBLElBQUksQ0FBQ2lCLE9BQWhCLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsQ0FBUjtBQUNFLGNBQVUsRUFBQyxPQURiO0FBRUUsWUFBUSxFQUFFVixRQUZaO0FBR0UsYUFBUyxFQUFDLDZEQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR04sU0FBUyxJQUNSO0FBQ0UsT0FBRyxFQUFFaUIsMkRBQU0sQ0FBQ2pCLFNBQUQsQ0FBTixDQUFrQmtCLElBQWxCLENBQXVCLFFBQXZCLEVBQWlDQyxHQUFqQyxFQURQO0FBRUUsT0FBRyxFQUFFaEIsS0FGUDtBQUdFLGFBQVMsRUFBQyxPQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQVlFO0FBQUssYUFBUyxFQUFDLGtEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsa0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrREEsS0FBbEQsQ0FERixFQUVFO0FBQUksYUFBUyxFQUFDLDBDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsUUFESCxDQUZGLEVBS0csQ0FBQ0ksU0FBRCxJQUNDLE1BQUMscUVBQUQ7QUFDRSxhQUFTLEVBQUMsOEJBRFo7QUFFRSxVQUFNLEVBQUVELElBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBREYsRUFhRSxNQUFDLG1FQUFEO0FBQWdCLGNBQVUsRUFBRSxFQUE1QjtBQUFnQyxlQUFXLEVBQUVGLFdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixDQVpGLENBREYsQ0FGSjtBQWtDRCxDQXhERDs7R0FBTUosWTs7S0FBQUEsWTtBQTBEU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWMyODU5ZjYzMTMxMjczNzJmZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUG9zdEF1dGhvckRhdGUgZnJvbSBcIi4uL3NpbmdsZS1wb3N0L1Bvc3RBdXRob3JEYXRlXCI7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tIFwiLi4vLi4vbGliL2hlbHBlcnNcIjtcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xuXG5jb25zdCBQb3N0TGlzdENhcmQgPSAoe1xuICBzbHVnLFxuICBtYWluSW1hZ2UsXG4gIHN1YnRpdGxlLFxuICBwdWJsaXNoZWRBdCxcbiAgdGl0bGUsXG4gIGJvZHksXG4gIGlzVG9nZ2xlZCxcbn0pID0+IHtcbiAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgaG92ZXI6IHtcbiAgICAgIHNjYWxlOiAxLjAzLFxuICAgICAgYm94U2hhZG93OiBcIjAgNXB4IDEwcHggcmdiYSgwLDAsMCwuNSlcIixcbiAgICAgIHRyYW5zaXRpb246IHsgZWFzZTogXCJlYXNlT3V0XCIgfSxcbiAgICB9LFxuICAgIG9mZjogeyBzY2FsZTogMSB9LFxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coaXNUb2dnbGVkKTtcbiAgfSwgW2lzVG9nZ2xlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgc2x1ZyAmJiAoXG4gICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfT5cbiAgICAgICAgPG1vdGlvbi5hXG4gICAgICAgICAgd2hpbGVIb3Zlcj1cImhvdmVyXCJcbiAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNiBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIGZsZXhcIlxuICAgICAgICA+XG4gICAgICAgICAge21haW5JbWFnZSAmJiAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17dXJsRm9yKG1haW5JbWFnZSkuYXV0byhcImZvcm1hdFwiKS51cmwoKX1cbiAgICAgICAgICAgICAgYWx0PXt0aXRsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBwLTQgbGc6cC02IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZ3JheS04MDAgdGV4dC0yeGxcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC14bCB0ZXh0LWdyYXktODAwIG15LTZcIj5cbiAgICAgICAgICAgICAgICB7c3VidGl0bGV9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIHshaXNUb2dnbGVkICYmIChcbiAgICAgICAgICAgICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgbXktNCB0ZXh0LWxnXCJcbiAgICAgICAgICAgICAgICAgIGJsb2Nrcz17Ym9keX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8UG9zdEF1dGhvckRhdGUgc2Vjb25kUHJvcD17XCJcIn0gcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgPC9MaW5rPlxuICAgIClcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0Q2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=