webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! groq */ "./node_modules/groq/lib/groq.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n      *[_type == \"post\"]|order(publishedAt desc)\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var App = function App(_ref) {
  var _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? [] : _ref$posts;
  var previews = posts.map(function (_ref2) {
    var _id = _ref2._id,
        _ref2$title = _ref2.title,
        title = _ref2$title === void 0 ? "" : _ref2$title,
        _ref2$slug = _ref2.slug,
        slug = _ref2$slug === void 0 ? "" : _ref2$slug,
        _ref2$_updatedAt = _ref2._updatedAt,
        _updatedAt = _ref2$_updatedAt === void 0 ? "" : _ref2$_updatedAt,
        mainImage = _ref2.mainImage;

    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: _id,
      _id: _id,
      title: title,
      slug: slug,
      _updatedAt: _updatedAt,
      mainImage: mainImage,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    });
  });
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "mx-4 mb-12 grid grid-cols-1 gap-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, previews));
};

_c = App;
App.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _client__WEBPACK_IMPORTED_MODULE_5__["default"].fetch(groq__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject()));

        case 2:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            posts: _context.t0
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJwcmV2aWV3cyIsIm1hcCIsIl9pZCIsInRpdGxlIiwic2x1ZyIsIl91cGRhdGVkQXQiLCJtYWluSW1hZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJjbGllbnQiLCJmZXRjaCIsImdyb3EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQjtBQUFBLHdCQUFqQkMsS0FBaUI7QUFBQSxNQUFqQkEsS0FBaUIsMkJBQVQsRUFBUztBQUM5QixNQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsR0FBTixDQUNmO0FBQUEsUUFBR0MsR0FBSCxTQUFHQSxHQUFIO0FBQUEsNEJBQVFDLEtBQVI7QUFBQSxRQUFRQSxLQUFSLDRCQUFnQixFQUFoQjtBQUFBLDJCQUFvQkMsSUFBcEI7QUFBQSxRQUFvQkEsSUFBcEIsMkJBQTJCLEVBQTNCO0FBQUEsaUNBQStCQyxVQUEvQjtBQUFBLFFBQStCQSxVQUEvQixpQ0FBNEMsRUFBNUM7QUFBQSxRQUFnREMsU0FBaEQsU0FBZ0RBLFNBQWhEOztBQUFBLFdBQ0UsTUFBQyw0REFBRDtBQUNFLFNBQUcsRUFBRUosR0FEUDtBQUVFLFNBQUcsRUFBRUEsR0FGUDtBQUdFLFdBQUssRUFBRUMsS0FIVDtBQUlFLFVBQUksRUFBRUMsSUFKUjtBQUtFLGdCQUFVLEVBQUVDLFVBTGQ7QUFNRSxlQUFTLEVBQUVDLFNBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBQUEsR0FEZSxDQUFqQjtBQWFBLFNBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvRE4sUUFBcEQsQ0FERixDQURGO0FBS0QsQ0FuQkQ7O0tBQU1GLEc7QUFxQk5BLEdBQUcsQ0FBQ1MsZUFBSixpTUFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1BDLCtDQUFNLENBQUNDLEtBQVAsQ0FBYUMsMkNBQWIsb0JBRE87O0FBQUE7QUFBQTtBQUFBO0FBQ3BCWCxpQkFEb0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF0QjtBQU1lRCxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOThlNjQ2YzNjNjQ0N2RjZWU4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcblxuY29uc3QgQXBwID0gKHsgcG9zdHMgPSBbXSB9KSA9PiB7XG4gIGNvbnN0IHByZXZpZXdzID0gcG9zdHMubWFwKFxuICAgICh7IF9pZCwgdGl0bGUgPSBcIlwiLCBzbHVnID0gXCJcIiwgX3VwZGF0ZWRBdCA9IFwiXCIsIG1haW5JbWFnZSB9KSA9PiAoXG4gICAgICA8UG9zdENhcmRcbiAgICAgICAga2V5PXtfaWR9XG4gICAgICAgIF9pZD17X2lkfVxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgIF91cGRhdGVkQXQ9e191cGRhdGVkQXR9XG4gICAgICAgIG1haW5JbWFnZT17bWFpbkltYWdlfVxuICAgICAgLz5cbiAgICApXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1iLTEyIGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTZcIj57cHJldmlld3N9PC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcbiAgcG9zdHM6IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAgICAgKltfdHlwZSA9PSBcInBvc3RcIl18b3JkZXIocHVibGlzaGVkQXQgZGVzYylcbiAgICBgKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9