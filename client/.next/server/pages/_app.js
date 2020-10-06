module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/global.context.js":
/*!***********************************!*\
  !*** ./context/global.context.js ***!
  \***********************************/
/*! exports provided: GlobalContext, GlobalProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalContext", function() { return GlobalContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalProvider", function() { return GlobalProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useToggle */ "./hooks/useToggle.js");
var _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\context\\global.context.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const GlobalContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined, undefined);
const GlobalProvider = ({
  children
}) => {
  const {
    isToggled: isListView,
    setToggle: setListView,
    toggle: switchView
  } = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__["useToggle"])();
  return __jsx(GlobalContext.Provider, {
    value: {
      isListView,
      setListView,
      switchView
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./customTheme.js":
/*!************************!*\
  !*** ./customTheme.js ***!
  \************************/
/*! exports provided: bgColor, bgColorReversed, color, colorAlt, colorReversed, borderColor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgColor", function() { return bgColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgColorReversed", function() { return bgColorReversed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorAlt", function() { return colorAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorReversed", function() { return colorReversed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/icons */ "./lib/icons.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const bgColor = {
  light: "white",
  dark: "gray.800"
};
const bgColorReversed = {
  light: "gray.800",
  dark: "gray.300"
};
const color = {
  light: "gray.700",
  dark: "gray.300"
};
const colorAlt = {
  light: "gray.600",
  dark: "gray.500"
};
const colorReversed = {
  light: "gray.300",
  dark: "gray.700"
};
const borderColor = {
  light: "gray.300",
  dark: "gray.500"
};
/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["theme"]), {}, {
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    mono: "Menlo, monospace"
  },
  icons: _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["theme"].icons), _lib_icons__WEBPACK_IMPORTED_MODULE_1__["customIcons"])
}));

/***/ }),

/***/ "./hooks/useToggle.js":
/*!****************************!*\
  !*** ./hooks/useToggle.js ***!
  \****************************/
/*! exports provided: useToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToggle", function() { return useToggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useToggle = (initial = false) => {
  const {
    0: isToggled,
    1: setToggle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initial);

  const toggle = () => setToggle(state => !state);

  return {
    isToggled,
    setToggle,
    toggle
  };
};

/***/ }),

/***/ "./lib/icons.js":
/*!**********************!*\
  !*** ./lib/icons.js ***!
  \**********************/
/*! exports provided: customIcons, moonIcon, sunIcon, searchIcon, rightArrow, leftArrow, downChevron */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customIcons", function() { return customIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moonIcon", function() { return moonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sunIcon", function() { return sunIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchIcon", function() { return searchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightArrow", function() { return rightArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftArrow", function() { return leftArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downChevron", function() { return downChevron; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\lib\\icons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const customIcons = {
  gridIcon: {
    path: __jsx("path", {
      fill: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    })
  },
  listIcon: {
    path: __jsx("path", {
      fill: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M4 6h16M4 10h16M4 14h16M4 18h16",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    })
  }
}; // <svg
//     className="w-8 h-8"
//     fill="currentColor"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
// >
//   <path
//       fill="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M4 6h16M4 10h16M4 14h16M4 18h16"
//   />
// </svg>

const moonIcon = __jsx("svg", {
  className: "w-6 h-6 xl:w-8 xl:h-8",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 3
  }
}, __jsx("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2",
  d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }
}));
const sunIcon = __jsx("svg", {
  className: "w-6 h-6 md:w-8 md:h-8",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 3
  }
}, __jsx("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2",
  d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }
}));
const searchIcon = __jsx("svg", {
  className: "w-6 h-6 md:w-8 md:h-8",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 3
  }
}, __jsx("path", {
  fill: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2",
  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }
}));
const rightArrow = __jsx("svg", {
  className: "w-6 h-6 inline",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 3
  }
}, __jsx("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2",
  d: "M7 16l-4-4m0 0l4-4m-4 4h18",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }
}));
const leftArrow = __jsx("svg", {
  className: "w-6 h-6 inline",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 3
  }
}, __jsx("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2",
  d: "M17 8l4 4m0 0l-4 4m4-4H3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 5
  }
}));
const downChevron = isReachingEnd => {
  const bounce = !isReachingEnd && "animate-bounce pt-3 w-10 h-10";
  return __jsx("svg", {
    className: `w-6 h-6 inline ${bounce}`,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }
  }, __jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M19 9l-7 7-7-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/tailwind.css */ "./styles/tailwind.css");
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_global_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/global.context */ "./context/global.context.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chakra_ui_core_dist_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core/dist/theme */ "@chakra-ui/core/dist/theme");
/* harmony import */ var _chakra_ui_core_dist_theme__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core_dist_theme__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customTheme */ "./customTheme.js");
var _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function MyApp({
  Component,
  pageProps
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "\u0410\u0440\u043C\u0438\u043D\u0438\u0430\u043D\u0441\u043A\u0430\u044F \u041F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u0430"), __jsx("link", {
    rel: "icon",
    href: "/favicon-32x32.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["ThemeProvider"], {
    theme: _customTheme__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["ColorModeProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_context_global_context__WEBPACK_IMPORTED_MODULE_2__["GlobalProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }))))));
}

/***/ }),

/***/ "./styles/tailwind.css":
/*!*****************************!*\
  !*** ./styles/tailwind.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core");

/***/ }),

/***/ "@chakra-ui/core/dist/theme":
/*!*********************************************!*\
  !*** external "@chakra-ui/core/dist/theme" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core/dist/theme");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9nbG9iYWwuY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jdXN0b21UaGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2ljb25zLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvdGhlbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkdsb2JhbENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiR2xvYmFsUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzVG9nZ2xlZCIsImlzTGlzdFZpZXciLCJzZXRUb2dnbGUiLCJzZXRMaXN0VmlldyIsInRvZ2dsZSIsInN3aXRjaFZpZXciLCJ1c2VUb2dnbGUiLCJiZ0NvbG9yIiwibGlnaHQiLCJkYXJrIiwiYmdDb2xvclJldmVyc2VkIiwiY29sb3IiLCJjb2xvckFsdCIsImNvbG9yUmV2ZXJzZWQiLCJib3JkZXJDb2xvciIsInRoZW1lIiwiZm9udHMiLCJib2R5IiwiaGVhZGluZyIsIm1vbm8iLCJpY29ucyIsImN1c3RvbUljb25zIiwiaW5pdGlhbCIsInVzZVN0YXRlIiwic3RhdGUiLCJncmlkSWNvbiIsInBhdGgiLCJsaXN0SWNvbiIsIm1vb25JY29uIiwic3VuSWNvbiIsInNlYXJjaEljb24iLCJyaWdodEFycm93IiwibGVmdEFycm93IiwiZG93bkNoZXZyb24iLCJpc1JlYWNoaW5nRW5kIiwiYm91bmNlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjdXN0b21UaGVtZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFFTyxNQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUFDQyxTQUFELEVBQVlBLFNBQVosQ0FBbkM7QUFFQSxNQUFNQyxjQUFjLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDOUMsUUFBTTtBQUNKQyxhQUFTLEVBQUVDLFVBRFA7QUFFSkMsYUFBUyxFQUFFQyxXQUZQO0FBR0pDLFVBQU0sRUFBRUM7QUFISixNQUlGQyxrRUFBUyxFQUpiO0FBTUEsU0FDRSxNQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRTtBQUFFTCxnQkFBRjtBQUFjRSxpQkFBZDtBQUEyQkU7QUFBM0IsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixRQURILENBREY7QUFLRCxDQVpNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMUDtBQUNBO0FBRU8sTUFBTVEsT0FBTyxHQUFHO0FBQUVDLE9BQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFJLEVBQUU7QUFBeEIsQ0FBaEI7QUFDQSxNQUFNQyxlQUFlLEdBQUc7QUFBRUYsT0FBSyxFQUFFLFVBQVQ7QUFBcUJDLE1BQUksRUFBRTtBQUEzQixDQUF4QjtBQUNBLE1BQU1FLEtBQUssR0FBRztBQUFFSCxPQUFLLEVBQUUsVUFBVDtBQUFxQkMsTUFBSSxFQUFFO0FBQTNCLENBQWQ7QUFDQSxNQUFNRyxRQUFRLEdBQUc7QUFBRUosT0FBSyxFQUFFLFVBQVQ7QUFBcUJDLE1BQUksRUFBRTtBQUEzQixDQUFqQjtBQUNBLE1BQU1JLGFBQWEsR0FBRztBQUFFTCxPQUFLLEVBQUUsVUFBVDtBQUFxQkMsTUFBSSxFQUFFO0FBQTNCLENBQXRCO0FBQ0EsTUFBTUssV0FBVyxHQUFHO0FBQUVOLE9BQUssRUFBRSxVQUFUO0FBQXFCQyxNQUFJLEVBQUU7QUFBM0IsQ0FBcEI7QUFFUSwrRkFDVk0scURBREw7QUFFRUMsT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRSxtQkFERDtBQUVMQyxXQUFPLEVBQUUsbUJBRko7QUFHTEMsUUFBSSxFQUFFO0FBSEQsR0FGVDtBQU9FQyxPQUFLLGtDQUNBTCxxREFBSyxDQUFDSyxLQUROLEdBRUFDLHNEQUZBO0FBUFAsSTs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1mLFNBQVMsR0FBRyxDQUFDZ0IsT0FBTyxHQUFHLEtBQVgsS0FBcUI7QUFDNUMsUUFBTTtBQUFBLE9BQUN0QixTQUFEO0FBQUEsT0FBWUU7QUFBWixNQUF5QnFCLHNEQUFRLENBQUNELE9BQUQsQ0FBdkM7O0FBQ0EsUUFBTWxCLE1BQU0sR0FBRyxNQUFNRixTQUFTLENBQUVzQixLQUFELElBQVcsQ0FBQ0EsS0FBYixDQUE5Qjs7QUFDQSxTQUFPO0FBQUV4QixhQUFGO0FBQWFFLGFBQWI7QUFBd0JFO0FBQXhCLEdBQVA7QUFDRCxDQUpNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBRU8sTUFBTWlCLFdBQVcsR0FBRztBQUN6QkksVUFBUSxFQUFFO0FBQ1JDLFFBQUksRUFDRjtBQUNFLFVBQUksRUFBQyxjQURQO0FBRUUsbUJBQWEsRUFBQyxPQUZoQjtBQUdFLG9CQUFjLEVBQUMsT0FIakI7QUFJRSxpQkFBVyxFQUFDLEdBSmQ7QUFLRSxPQUFDLEVBQUMsc1FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZNLEdBRGU7QUFZekJDLFVBQVEsRUFBRTtBQUNSRCxRQUFJLEVBQ0Y7QUFDRSxVQUFJLEVBQUMsY0FEUDtBQUVFLG1CQUFhLEVBQUMsT0FGaEI7QUFHRSxvQkFBYyxFQUFDLE9BSGpCO0FBSUUsaUJBQVcsRUFBQyxHQUpkO0FBS0UsT0FBQyxFQUFDLGlDQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGTTtBQVplLENBQXBCLEMsQ0F5QlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU1FLFFBQVEsR0FDbkI7QUFDRSxXQUFTLEVBQUMsdUJBRFo7QUFFRSxNQUFJLEVBQUMsTUFGUDtBQUdFLFFBQU0sRUFBQyxjQUhUO0FBSUUsU0FBTyxFQUFDLFdBSlY7QUFLRSxPQUFLLEVBQUMsNEJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQU9FO0FBQ0UsZUFBYSxFQUFDLE9BRGhCO0FBRUUsZ0JBQWMsRUFBQyxPQUZqQjtBQUdFLGFBQVcsRUFBQyxHQUhkO0FBSUUsR0FBQyxFQUFDLHVGQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFQRixDQURLO0FBaUJBLE1BQU1DLE9BQU8sR0FDbEI7QUFDRSxXQUFTLEVBQUMsdUJBRFo7QUFFRSxNQUFJLEVBQUMsTUFGUDtBQUdFLFFBQU0sRUFBQyxjQUhUO0FBSUUsU0FBTyxFQUFDLFdBSlY7QUFLRSxPQUFLLEVBQUMsNEJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQU9FO0FBQ0UsZUFBYSxFQUFDLE9BRGhCO0FBRUUsZ0JBQWMsRUFBQyxPQUZqQjtBQUdFLGFBQVcsRUFBQyxHQUhkO0FBSUUsR0FBQyxFQUFDLHVKQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFQRixDQURLO0FBaUJBLE1BQU1DLFVBQVUsR0FDckI7QUFDRSxXQUFTLEVBQUMsdUJBRFo7QUFFRSxNQUFJLEVBQUMsTUFGUDtBQUdFLFFBQU0sRUFBQyxjQUhUO0FBSUUsU0FBTyxFQUFDLFdBSlY7QUFLRSxPQUFLLEVBQUMsNEJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQU9FO0FBQ0UsTUFBSSxFQUFDLGNBRFA7QUFFRSxlQUFhLEVBQUMsT0FGaEI7QUFHRSxnQkFBYyxFQUFDLE9BSGpCO0FBSUUsYUFBVyxFQUFDLEdBSmQ7QUFLRSxHQUFDLEVBQUMsNkNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVBGLENBREs7QUFrQkEsTUFBTUMsVUFBVSxHQUNyQjtBQUNFLFdBQVMsRUFBQyxnQkFEWjtBQUVFLE1BQUksRUFBQyxNQUZQO0FBR0UsUUFBTSxFQUFDLGNBSFQ7QUFJRSxTQUFPLEVBQUMsV0FKVjtBQUtFLE9BQUssRUFBQyw0QkFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBT0U7QUFDRSxlQUFhLEVBQUMsT0FEaEI7QUFFRSxnQkFBYyxFQUFDLE9BRmpCO0FBR0UsYUFBVyxFQUFDLEdBSGQ7QUFJRSxHQUFDLEVBQUMsNEJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVBGLENBREs7QUFpQkEsTUFBTUMsU0FBUyxHQUNwQjtBQUNFLFdBQVMsRUFBQyxnQkFEWjtBQUVFLE1BQUksRUFBQyxNQUZQO0FBR0UsUUFBTSxFQUFDLGNBSFQ7QUFJRSxTQUFPLEVBQUMsV0FKVjtBQUtFLE9BQUssRUFBQyw0QkFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBT0U7QUFDRSxlQUFhLEVBQUMsT0FEaEI7QUFFRSxnQkFBYyxFQUFDLE9BRmpCO0FBR0UsYUFBVyxFQUFDLEdBSGQ7QUFJRSxHQUFDLEVBQUMsMEJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVBGLENBREs7QUFpQkEsTUFBTUMsV0FBVyxHQUFJQyxhQUFELElBQW1CO0FBQzVDLFFBQU1DLE1BQU0sR0FBRyxDQUFDRCxhQUFELElBQWtCLCtCQUFqQztBQUNBLFNBQ0U7QUFDRSxhQUFTLEVBQUcsa0JBQWlCQyxNQUFPLEVBRHRDO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxVQUFNLEVBQUMsY0FIVDtBQUlFLFdBQU8sRUFBQyxXQUpWO0FBS0UsU0FBSyxFQUFDLDRCQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRTtBQUNFLGlCQUFhLEVBQUMsT0FEaEI7QUFFRSxrQkFBYyxFQUFDLE9BRmpCO0FBR0UsZUFBVyxFQUFDLEdBSGQ7QUFJRSxLQUFDLEVBQUMsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBREY7QUFnQkQsQ0FsQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN0RCxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUpBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxvQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRSxNQUFDLDZEQUFEO0FBQWUsU0FBSyxFQUFFQyxvREFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCxlQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGLENBREYsQ0FMRixDQURGO0FBZUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCRCw0Qzs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpc1RvZ2dsZWQ6IGlzTGlzdFZpZXcsXHJcbiAgICBzZXRUb2dnbGU6IHNldExpc3RWaWV3LFxyXG4gICAgdG9nZ2xlOiBzd2l0Y2hWaWV3LFxyXG4gIH0gPSB1c2VUb2dnbGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlzTGlzdFZpZXcsIHNldExpc3RWaWV3LCBzd2l0Y2hWaWV3IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBjdXN0b21JY29ucyB9IGZyb20gXCIuL2xpYi9pY29uc1wiO1xuXG5leHBvcnQgY29uc3QgYmdDb2xvciA9IHsgbGlnaHQ6IFwid2hpdGVcIiwgZGFyazogXCJncmF5LjgwMFwiIH07XG5leHBvcnQgY29uc3QgYmdDb2xvclJldmVyc2VkID0geyBsaWdodDogXCJncmF5LjgwMFwiLCBkYXJrOiBcImdyYXkuMzAwXCIgfTtcbmV4cG9ydCBjb25zdCBjb2xvciA9IHsgbGlnaHQ6IFwiZ3JheS43MDBcIiwgZGFyazogXCJncmF5LjMwMFwiIH07XG5leHBvcnQgY29uc3QgY29sb3JBbHQgPSB7IGxpZ2h0OiBcImdyYXkuNjAwXCIsIGRhcms6IFwiZ3JheS41MDBcIiB9O1xuZXhwb3J0IGNvbnN0IGNvbG9yUmV2ZXJzZWQgPSB7IGxpZ2h0OiBcImdyYXkuMzAwXCIsIGRhcms6IFwiZ3JheS43MDBcIiB9O1xuZXhwb3J0IGNvbnN0IGJvcmRlckNvbG9yID0geyBsaWdodDogXCJncmF5LjMwMFwiLCBkYXJrOiBcImdyYXkuNTAwXCIgfTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAuLi50aGVtZSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiBcIkludGVyLCBzYW5zLXNlcmlmXCIsXG4gICAgaGVhZGluZzogXCJJbnRlciwgc2Fucy1zZXJpZlwiLFxuICAgIG1vbm86IFwiTWVubG8sIG1vbm9zcGFjZVwiLFxuICB9LFxuICBpY29uczoge1xuICAgIC4uLnRoZW1lLmljb25zLFxuICAgIC4uLmN1c3RvbUljb25zLFxuICB9LFxufTtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVG9nZ2xlID0gKGluaXRpYWwgPSBmYWxzZSkgPT4ge1xyXG4gIGNvbnN0IFtpc1RvZ2dsZWQsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShpbml0aWFsKTtcclxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRUb2dnbGUoKHN0YXRlKSA9PiAhc3RhdGUpO1xyXG4gIHJldHVybiB7IGlzVG9nZ2xlZCwgc2V0VG9nZ2xlLCB0b2dnbGUgfTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgY3VzdG9tSWNvbnMgPSB7XG4gIGdyaWRJY29uOiB7XG4gICAgcGF0aDogKFxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICBkPVwiTTQgNmEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAySDZhMiAyIDAgMDEtMi0yVjZ6TTE0IDZhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMnYyYTIgMiAwIDAxLTIgMmgtMmEyIDIgMCAwMS0yLTJWNnpNNCAxNmEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAySDZhMiAyIDAgMDEtMi0ydi0yek0xNCAxNmEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAyaC0yYTIgMiAwIDAxLTItMnYtMnpcIlxuICAgICAgLz5cbiAgICApLFxuICB9LFxuICBsaXN0SWNvbjoge1xuICAgIHBhdGg6IChcbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgZD1cIk00IDZoMTZNNCAxMGgxNk00IDE0aDE2TTQgMThoMTZcIlxuICAgICAgLz5cbiAgICApLFxuICB9LFxufTtcblxuLy8gPHN2Z1xuLy8gICAgIGNsYXNzTmFtZT1cInctOCBoLThcIlxuLy8gICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuLy8gICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4vLyAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4vLyAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4vLyA+XG4vLyAgIDxwYXRoXG4vLyAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbi8vICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4vLyAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbi8vICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4vLyAgICAgICBkPVwiTTQgNmgxNk00IDEwaDE2TTQgMTRoMTZNNCAxOGgxNlwiXG4vLyAgIC8+XG4vLyA8L3N2Zz5cblxuZXhwb3J0IGNvbnN0IG1vb25JY29uID0gKFxuICA8c3ZnXG4gICAgY2xhc3NOYW1lPVwidy02IGgtNiB4bDp3LTggeGw6aC04XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgZD1cIk0yMC4zNTQgMTUuMzU0QTkgOSAwIDAxOC42NDYgMy42NDYgOS4wMDMgOS4wMDMgMCAwMDEyIDIxYTkuMDAzIDkuMDAzIDAgMDA4LjM1NC01LjY0NnpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IHN1bkljb24gPSAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9XCJ3LTYgaC02IG1kOnctOCBtZDpoLThcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICBkPVwiTTEyIDN2MW0wIDE2djFtOS05aC0xTTQgMTJIM20xNS4zNjQgNi4zNjRsLS43MDctLjcwN002LjM0MyA2LjM0M2wtLjcwNy0uNzA3bTEyLjcyOCAwbC0uNzA3LjcwN002LjM0MyAxNy42NTdsLS43MDcuNzA3TTE2IDEyYTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IHNlYXJjaEljb24gPSAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9XCJ3LTYgaC02IG1kOnctOCBtZDpoLThcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgIGQ9XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6XCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCByaWdodEFycm93ID0gKFxuICA8c3ZnXG4gICAgY2xhc3NOYW1lPVwidy02IGgtNiBpbmxpbmVcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICBkPVwiTTcgMTZsLTQtNG0wIDBsNC00bS00IDRoMThcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IGxlZnRBcnJvdyA9IChcbiAgPHN2Z1xuICAgIGNsYXNzTmFtZT1cInctNiBoLTYgaW5saW5lXCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgZD1cIk0xNyA4bDQgNG0wIDBsLTQgNG00LTRIM1wiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgZG93bkNoZXZyb24gPSAoaXNSZWFjaGluZ0VuZCkgPT4ge1xuICBjb25zdCBib3VuY2UgPSAhaXNSZWFjaGluZ0VuZCAmJiBcImFuaW1hdGUtYm91bmNlIHB0LTMgdy0xMCBoLTEwXCI7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPXtgdy02IGgtNiBpbmxpbmUgJHtib3VuY2V9YH1cbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICBkPVwiTTE5IDlsLTcgNy03LTdcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBDb2xvck1vZGVQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy90YWlsd2luZC5jc3NcIjtcbmltcG9ydCB7IEdsb2JhbFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvZ2xvYmFsLmNvbnRleHRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvdGhlbWVcIjtcbmltcG9ydCBjdXN0b21UaGVtZSBmcm9tIFwiLi4vY3VzdG9tVGhlbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+0JDRgNC80LjQvdC40LDQvdGB0LrQsNGPINCf0LXRgNGB0L/QtdC60YLQuNCy0LA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17Y3VzdG9tVGhlbWV9PlxuICAgICAgICA8Q29sb3JNb2RlUHJvdmlkZXI+XG4gICAgICAgICAgPEdsb2JhbFByb3ZpZGVyPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvR2xvYmFsUHJvdmlkZXI+XG4gICAgICAgIDwvQ29sb3JNb2RlUHJvdmlkZXI+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvdGhlbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=