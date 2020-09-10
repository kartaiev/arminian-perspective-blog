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
/* harmony import */ var _context_global_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/global.context */ "./context/global.context.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n      *[_type == \"post\"]|order(publishedAt desc)\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var App = function App(_ref) {
  _s();

  var _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? [] : _ref$posts;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_global_context__WEBPACK_IMPORTED_MODULE_8__["GlobalContext"]),
      isOpened = _useContext.isOpened;

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
        lineNumber: 13,
        columnNumber: 7
      }
    });
  });
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, !isOpened && __jsx("div", {
    className: "mx-4 mb-6 grid grid-cols-1 gap-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, previews));
};

_s(App, "hR2iLWTCIyZYw1FEhOjLXKoRyLo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsImlzT3BlbmVkIiwicHJldmlld3MiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInNsdWciLCJfdXBkYXRlZEF0IiwibWFpbkltYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY2xpZW50IiwiZmV0Y2giLCJncm9xIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQW9CO0FBQUE7O0FBQUEsd0JBQWpCQyxLQUFpQjtBQUFBLE1BQWpCQSxLQUFpQiwyQkFBVCxFQUFTOztBQUFBLG9CQUNUQyx3REFBVSxDQUFDQyxxRUFBRCxDQUREO0FBQUEsTUFDdEJDLFFBRHNCLGVBQ3RCQSxRQURzQjs7QUFHOUIsTUFBTUMsUUFBUSxHQUFHSixLQUFLLENBQUNLLEdBQU4sQ0FDZjtBQUFBLFFBQUdDLEdBQUgsU0FBR0EsR0FBSDtBQUFBLDRCQUFRQyxLQUFSO0FBQUEsUUFBUUEsS0FBUiw0QkFBZ0IsRUFBaEI7QUFBQSwyQkFBb0JDLElBQXBCO0FBQUEsUUFBb0JBLElBQXBCLDJCQUEyQixFQUEzQjtBQUFBLGlDQUErQkMsVUFBL0I7QUFBQSxRQUErQkEsVUFBL0IsaUNBQTRDLEVBQTVDO0FBQUEsUUFBZ0RDLFNBQWhELFNBQWdEQSxTQUFoRDs7QUFBQSxXQUNFLE1BQUMsNERBQUQ7QUFDRSxTQUFHLEVBQUVKLEdBRFA7QUFFRSxTQUFHLEVBQUVBLEdBRlA7QUFHRSxXQUFLLEVBQUVDLEtBSFQ7QUFJRSxVQUFJLEVBQUVDLElBSlI7QUFLRSxnQkFBVSxFQUFFQyxVQUxkO0FBTUUsZUFBUyxFQUFFQyxTQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQUFBLEdBRGUsQ0FBakI7QUFhQSxTQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUNQLFFBQUQsSUFDQztBQUFLLGFBQVMsRUFBQyxrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1EQyxRQUFuRCxDQUZKLENBREY7QUFPRCxDQXZCRDs7R0FBTUwsRzs7S0FBQUEsRztBQXlCTkEsR0FBRyxDQUFDWSxlQUFKLGlNQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUEMsK0NBQU0sQ0FBQ0MsS0FBUCxDQUFhQywyQ0FBYixvQkFETzs7QUFBQTtBQUFBO0FBQUE7QUFDcEJkLGlCQURvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXRCO0FBTWVELGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVkODIzN2RmNjQ4NWI1MzhjNGM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9nbG9iYWwuY29udGV4dFwiO1xuXG5jb25zdCBBcHAgPSAoeyBwb3N0cyA9IFtdIH0pID0+IHtcbiAgY29uc3QgeyBpc09wZW5lZCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcblxuICBjb25zdCBwcmV2aWV3cyA9IHBvc3RzLm1hcChcbiAgICAoeyBfaWQsIHRpdGxlID0gXCJcIiwgc2x1ZyA9IFwiXCIsIF91cGRhdGVkQXQgPSBcIlwiLCBtYWluSW1hZ2UgfSkgPT4gKFxuICAgICAgPFBvc3RDYXJkXG4gICAgICAgIGtleT17X2lkfVxuICAgICAgICBfaWQ9e19pZH1cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICBfdXBkYXRlZEF0PXtfdXBkYXRlZEF0fVxuICAgICAgICBtYWluSW1hZ2U9e21haW5JbWFnZX1cbiAgICAgIC8+XG4gICAgKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHshaXNPcGVuZWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWItNiBncmlkIGdyaWQtY29scy0xIGdhcC02XCI+e3ByZXZpZXdzfTwvZGl2PlxuICAgICAgKX1cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICBwb3N0czogYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgXG4gICAgICAqW190eXBlID09IFwicG9zdFwiXXxvcmRlcihwdWJsaXNoZWRBdCBkZXNjKVxuICAgIGApLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=