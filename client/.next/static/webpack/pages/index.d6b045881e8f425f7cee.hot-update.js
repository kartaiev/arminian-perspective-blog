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
/* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useWindowWidth */ "./hooks/useWindowWidth.js");
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
  var width = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__["useWindowWidth"])();
  return slug && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/post/[slug]",
    as: "/post/".concat(slug.current),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].a, {
    whileHover: "hover",
    variants: variants,
    className: "mt-6 border border-gray-400 rounded-lg overflow-hidden flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, mainImage && __jsx("img", {
    src: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_4__["urlFor"])(mainImage).auto("format").url(),
    alt: title,
    className: "w-1/3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: " w-full p-4 lg:p-6  flex flex-col justify-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "font-bold text-gray-800 text-2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, title), __jsx("h2", {
    className: "font-semibold text-xl text-gray-800 my-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, subtitle), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "hidden xl:block xl:pr-32 my-4 text-lg",
    blocks: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  })), __jsx(_single_post_PostAuthorDate__WEBPACK_IMPORTED_MODULE_3__["default"], {
    secondProp: "",
    publishedAt: publishedAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }))));
};

_s(PostListCard, "RmdmpLM5vD+sMcc5h/DlP7pfrWU=", false, function () {
  return [_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__["useWindowWidth"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RMaXN0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0TGlzdENhcmQiLCJzbHVnIiwibWFpbkltYWdlIiwic3VidGl0bGUiLCJwdWJsaXNoZWRBdCIsInRpdGxlIiwiYm9keSIsImlzVG9nZ2xlZCIsInZhcmlhbnRzIiwiaG92ZXIiLCJzY2FsZSIsImJveFNoYWRvdyIsInRyYW5zaXRpb24iLCJlYXNlIiwib2ZmIiwid2lkdGgiLCJ1c2VXaW5kb3dXaWR0aCIsImN1cnJlbnQiLCJ1cmxGb3IiLCJhdXRvIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BUWY7QUFBQTs7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxTQU1JLFFBTkpBLFNBTUk7QUFBQSxNQUxKQyxRQUtJLFFBTEpBLFFBS0k7QUFBQSxNQUpKQyxXQUlJLFFBSkpBLFdBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxJQUVJLFFBRkpBLElBRUk7QUFBQSxNQURKQyxTQUNJLFFBREpBLFNBQ0k7QUFDSixNQUFNQyxRQUFRLEdBQUc7QUFDZkMsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxJQURGO0FBRUxDLGVBQVMsRUFBRSwyQkFGTjtBQUdMQyxnQkFBVSxFQUFFO0FBQUVDLFlBQUksRUFBRTtBQUFSO0FBSFAsS0FEUTtBQU1mQyxPQUFHLEVBQUU7QUFBRUosV0FBSyxFQUFFO0FBQVQ7QUFOVSxHQUFqQjtBQVNBLE1BQU1LLEtBQUssR0FBR0MsNEVBQWMsRUFBNUI7QUFFQSxTQUNFZixJQUFJLElBQ0YsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQTBCLE1BQUUsa0JBQVdBLElBQUksQ0FBQ2dCLE9BQWhCLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsQ0FBUjtBQUNFLGNBQVUsRUFBQyxPQURiO0FBRUUsWUFBUSxFQUFFVCxRQUZaO0FBR0UsYUFBUyxFQUFDLDZEQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR04sU0FBUyxJQUNSO0FBQ0UsT0FBRyxFQUFFZ0IsMkRBQU0sQ0FBQ2hCLFNBQUQsQ0FBTixDQUFrQmlCLElBQWxCLENBQXVCLFFBQXZCLEVBQWlDQyxHQUFqQyxFQURQO0FBRUUsT0FBRyxFQUFFZixLQUZQO0FBR0UsYUFBUyxFQUFDLE9BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBWUU7QUFBSyxhQUFTLEVBQUMsbURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtEQSxLQUFsRCxDQURGLEVBRUU7QUFBSSxhQUFTLEVBQUMsMENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixRQURILENBRkYsRUFNRSxNQUFDLHFFQUFEO0FBQ0UsYUFBUyxFQUFDLHVDQURaO0FBRUUsVUFBTSxFQUFFRyxJQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGLEVBWUUsTUFBQyxtRUFBRDtBQUFnQixjQUFVLEVBQUUsRUFBNUI7QUFBZ0MsZUFBVyxFQUFFRixXQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FaRixDQURGLENBRko7QUFpQ0QsQ0FyREQ7O0dBQU1KLFk7VUFrQlVnQixvRTs7O0tBbEJWaEIsWTtBQXVEU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDZiMDQ1ODgxZThmNDI1ZjdjZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUG9zdEF1dGhvckRhdGUgZnJvbSBcIi4uL3NpbmdsZS1wb3N0L1Bvc3RBdXRob3JEYXRlXCI7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tIFwiLi4vLi4vbGliL2hlbHBlcnNcIjtcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlV2luZG93V2lkdGggfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlV2luZG93V2lkdGhcIjtcblxuY29uc3QgUG9zdExpc3RDYXJkID0gKHtcbiAgc2x1ZyxcbiAgbWFpbkltYWdlLFxuICBzdWJ0aXRsZSxcbiAgcHVibGlzaGVkQXQsXG4gIHRpdGxlLFxuICBib2R5LFxuICBpc1RvZ2dsZWQsXG59KSA9PiB7XG4gIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgIGhvdmVyOiB7XG4gICAgICBzY2FsZTogMS4wMyxcbiAgICAgIGJveFNoYWRvdzogXCIwIDVweCAxMHB4IHJnYmEoMCwwLDAsLjUpXCIsXG4gICAgICB0cmFuc2l0aW9uOiB7IGVhc2U6IFwiZWFzZU91dFwiIH0sXG4gICAgfSxcbiAgICBvZmY6IHsgc2NhbGU6IDEgfSxcbiAgfTtcblxuICBjb25zdCB3aWR0aCA9IHVzZVdpbmRvd1dpZHRoKCk7XG5cbiAgcmV0dXJuIChcbiAgICBzbHVnICYmIChcbiAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7c2x1Zy5jdXJyZW50fWB9PlxuICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICB3aGlsZUhvdmVyPVwiaG92ZXJcIlxuICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC02IGJvcmRlciBib3JkZXItZ3JheS00MDAgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gZmxleFwiXG4gICAgICAgID5cbiAgICAgICAgICB7bWFpbkltYWdlICYmIChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXt1cmxGb3IobWFpbkltYWdlKS5hdXRvKFwiZm9ybWF0XCIpLnVybCgpfVxuICAgICAgICAgICAgICBhbHQ9e3RpdGxlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvM1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIHAtNCBsZzpwLTYgIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZ3JheS04MDAgdGV4dC0yeGxcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC14bCB0ZXh0LWdyYXktODAwIG15LTZcIj5cbiAgICAgICAgICAgICAgICB7c3VidGl0bGV9XG4gICAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgICAgPEJsb2NrQ29udGVudFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiB4bDpibG9jayB4bDpwci0zMiBteS00IHRleHQtbGdcIlxuICAgICAgICAgICAgICAgIGJsb2Nrcz17Ym9keX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFBvc3RBdXRob3JEYXRlIHNlY29uZFByb3A9e1wiXCJ9IHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uYT5cbiAgICAgIDwvTGluaz5cbiAgICApXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0TGlzdENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9