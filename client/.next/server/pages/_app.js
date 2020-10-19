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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalContext\", function() { return GlobalContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalProvider\", function() { return GlobalProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useToggle */ \"./hooks/useToggle.js\");\n/* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useWindowWidth */ \"./hooks/useWindowWidth.js\");\nvar _jsxFileName = \"/Users/earth/WebstormProjects/arminian-perspective-blog/client/context/global.context.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst GlobalContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(undefined);\nconst GlobalProvider = ({\n  children\n}) => {\n  const width = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_2__[\"useWindowWidth\"])();\n  const {\n    isToggled: isListView,\n    setToggle: setListView,\n    toggle: switchView\n  } = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__[\"useToggle\"])();\n  return __jsx(GlobalContext.Provider, {\n    value: {\n      width,\n      isListView,\n      setListView,\n      switchView\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L2dsb2JhbC5jb250ZXh0LmpzP2NmOTYiXSwibmFtZXMiOlsiR2xvYmFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJHbG9iYWxQcm92aWRlciIsImNoaWxkcmVuIiwid2lkdGgiLCJ1c2VXaW5kb3dXaWR0aCIsImlzVG9nZ2xlZCIsImlzTGlzdFZpZXciLCJzZXRUb2dnbGUiLCJzZXRMaXN0VmlldyIsInRvZ2dsZSIsInN3aXRjaFZpZXciLCJ1c2VUb2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLENBQUNDLFNBQUQsQ0FBbkM7QUFFQSxNQUFNQyxjQUFjLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDOUMsUUFBTUMsS0FBSyxHQUFHQyw0RUFBYyxFQUE1QjtBQUVBLFFBQU07QUFDSkMsYUFBUyxFQUFFQyxVQURQO0FBRUpDLGFBQVMsRUFBRUMsV0FGUDtBQUdKQyxVQUFNLEVBQUVDO0FBSEosTUFJRkMsa0VBQVMsRUFKYjtBQU1BLFNBQ0UsTUFBQyxhQUFELENBQWUsUUFBZjtBQUNFLFNBQUssRUFBRTtBQUFFUixXQUFGO0FBQVNHLGdCQUFUO0FBQXFCRSxpQkFBckI7QUFBa0NFO0FBQWxDLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdHUixRQUhILENBREY7QUFPRCxDQWhCTSIsImZpbGUiOiIuL2NvbnRleHQvZ2xvYmFsLmNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xuaW1wb3J0IHsgdXNlV2luZG93V2lkdGggfSBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93V2lkdGhcIjtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgd2lkdGggPSB1c2VXaW5kb3dXaWR0aCgpO1xuXG4gIGNvbnN0IHtcbiAgICBpc1RvZ2dsZWQ6IGlzTGlzdFZpZXcsXG4gICAgc2V0VG9nZ2xlOiBzZXRMaXN0VmlldyxcbiAgICB0b2dnbGU6IHN3aXRjaFZpZXcsXG4gIH0gPSB1c2VUb2dnbGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17eyB3aWR0aCwgaXNMaXN0Vmlldywgc2V0TGlzdFZpZXcsIHN3aXRjaFZpZXcgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/global.context.js\n");

/***/ }),

/***/ "./customTheme.js":
/*!************************!*\
  !*** ./customTheme.js ***!
  \************************/
/*! exports provided: bgColor, bgColorReversed, color, colorAlt, colorReversed, borderColor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bgColor\", function() { return bgColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bgColorReversed\", function() { return bgColorReversed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"color\", function() { return color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colorAlt\", function() { return colorAlt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colorReversed\", function() { return colorReversed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"borderColor\", function() { return borderColor; });\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/icons */ \"./lib/icons.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst bgColor = {\n  light: \"white\",\n  dark: \"gray.800\"\n};\nconst bgColorReversed = {\n  light: \"gray.800\",\n  dark: \"gray.300\"\n};\nconst color = {\n  light: \"gray.700\",\n  dark: \"gray.300\"\n};\nconst colorAlt = {\n  light: \"gray.600\",\n  dark: \"gray.500\"\n};\nconst colorReversed = {\n  light: \"gray.300\",\n  dark: \"gray.700\"\n};\nconst borderColor = {\n  light: \"gray.300\",\n  dark: \"gray.500\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"theme\"]), {}, {\n  fonts: {\n    body: \"Inter, sans-serif\",\n    heading: \"Inter, sans-serif\",\n    mono: \"Menlo, monospace\"\n  },\n  icons: _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"theme\"].icons), _lib_icons__WEBPACK_IMPORTED_MODULE_1__[\"customIcons\"])\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jdXN0b21UaGVtZS5qcz9mNjgwIl0sIm5hbWVzIjpbImJnQ29sb3IiLCJsaWdodCIsImRhcmsiLCJiZ0NvbG9yUmV2ZXJzZWQiLCJjb2xvciIsImNvbG9yQWx0IiwiY29sb3JSZXZlcnNlZCIsImJvcmRlckNvbG9yIiwidGhlbWUiLCJmb250cyIsImJvZHkiLCJoZWFkaW5nIiwibW9ubyIsImljb25zIiwiY3VzdG9tSWNvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsT0FBTyxHQUFHO0FBQUVDLE9BQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFJLEVBQUU7QUFBeEIsQ0FBaEI7QUFDQSxNQUFNQyxlQUFlLEdBQUc7QUFBRUYsT0FBSyxFQUFFLFVBQVQ7QUFBcUJDLE1BQUksRUFBRTtBQUEzQixDQUF4QjtBQUNBLE1BQU1FLEtBQUssR0FBRztBQUFFSCxPQUFLLEVBQUUsVUFBVDtBQUFxQkMsTUFBSSxFQUFFO0FBQTNCLENBQWQ7QUFDQSxNQUFNRyxRQUFRLEdBQUc7QUFBRUosT0FBSyxFQUFFLFVBQVQ7QUFBcUJDLE1BQUksRUFBRTtBQUEzQixDQUFqQjtBQUNBLE1BQU1JLGFBQWEsR0FBRztBQUFFTCxPQUFLLEVBQUUsVUFBVDtBQUFxQkMsTUFBSSxFQUFFO0FBQTNCLENBQXRCO0FBQ0EsTUFBTUssV0FBVyxHQUFHO0FBQUVOLE9BQUssRUFBRSxVQUFUO0FBQXFCQyxNQUFJLEVBQUU7QUFBM0IsQ0FBcEI7QUFFUSwrRkFDVk0scURBREw7QUFFRUMsT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRSxtQkFERDtBQUVMQyxXQUFPLEVBQUUsbUJBRko7QUFHTEMsUUFBSSxFQUFFO0FBSEQsR0FGVDtBQU9FQyxPQUFLLGtDQUNBTCxxREFBSyxDQUFDSyxLQUROLEdBRUFDLHNEQUZBO0FBUFAiLCJmaWxlIjoiLi9jdXN0b21UaGVtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xuaW1wb3J0IHsgY3VzdG9tSWNvbnMgfSBmcm9tIFwiLi9saWIvaWNvbnNcIjtcblxuZXhwb3J0IGNvbnN0IGJnQ29sb3IgPSB7IGxpZ2h0OiBcIndoaXRlXCIsIGRhcms6IFwiZ3JheS44MDBcIiB9O1xuZXhwb3J0IGNvbnN0IGJnQ29sb3JSZXZlcnNlZCA9IHsgbGlnaHQ6IFwiZ3JheS44MDBcIiwgZGFyazogXCJncmF5LjMwMFwiIH07XG5leHBvcnQgY29uc3QgY29sb3IgPSB7IGxpZ2h0OiBcImdyYXkuNzAwXCIsIGRhcms6IFwiZ3JheS4zMDBcIiB9O1xuZXhwb3J0IGNvbnN0IGNvbG9yQWx0ID0geyBsaWdodDogXCJncmF5LjYwMFwiLCBkYXJrOiBcImdyYXkuNTAwXCIgfTtcbmV4cG9ydCBjb25zdCBjb2xvclJldmVyc2VkID0geyBsaWdodDogXCJncmF5LjMwMFwiLCBkYXJrOiBcImdyYXkuNzAwXCIgfTtcbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvciA9IHsgbGlnaHQ6IFwiZ3JheS4zMDBcIiwgZGFyazogXCJncmF5LjUwMFwiIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4udGhlbWUsXG4gIGZvbnRzOiB7XG4gICAgYm9keTogXCJJbnRlciwgc2Fucy1zZXJpZlwiLFxuICAgIGhlYWRpbmc6IFwiSW50ZXIsIHNhbnMtc2VyaWZcIixcbiAgICBtb25vOiBcIk1lbmxvLCBtb25vc3BhY2VcIixcbiAgfSxcbiAgaWNvbnM6IHtcbiAgICAuLi50aGVtZS5pY29ucyxcbiAgICAuLi5jdXN0b21JY29ucyxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./customTheme.js\n");

/***/ }),

/***/ "./hooks/useToggle.js":
/*!****************************!*\
  !*** ./hooks/useToggle.js ***!
  \****************************/
/*! exports provided: useToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useToggle\", function() { return useToggle; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useToggle = (initial = false) => {\n  const {\n    0: isToggled,\n    1: setToggle\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initial);\n\n  const toggle = () => setToggle(state => !state);\n\n  return {\n    isToggled,\n    setToggle,\n    toggle\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2VUb2dnbGUuanM/NTU4NyJdLCJuYW1lcyI6WyJ1c2VUb2dnbGUiLCJpbml0aWFsIiwiaXNUb2dnbGVkIiwic2V0VG9nZ2xlIiwidXNlU3RhdGUiLCJ0b2dnbGUiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFNBQVMsR0FBRyxDQUFDQyxPQUFPLEdBQUcsS0FBWCxLQUFxQjtBQUM1QyxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBeUJDLHNEQUFRLENBQUNILE9BQUQsQ0FBdkM7O0FBQ0EsUUFBTUksTUFBTSxHQUFHLE1BQU1GLFNBQVMsQ0FBRUcsS0FBRCxJQUFXLENBQUNBLEtBQWIsQ0FBOUI7O0FBQ0EsU0FBTztBQUFFSixhQUFGO0FBQWFDLGFBQWI7QUFBd0JFO0FBQXhCLEdBQVA7QUFDRCxDQUpNIiwiZmlsZSI6Ii4vaG9va3MvdXNlVG9nZ2xlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IHVzZVRvZ2dsZSA9IChpbml0aWFsID0gZmFsc2UpID0+IHtcbiAgY29uc3QgW2lzVG9nZ2xlZCwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGluaXRpYWwpO1xuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRUb2dnbGUoKHN0YXRlKSA9PiAhc3RhdGUpO1xuICByZXR1cm4geyBpc1RvZ2dsZWQsIHNldFRvZ2dsZSwgdG9nZ2xlIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useToggle.js\n");

/***/ }),

/***/ "./hooks/useWindowWidth.js":
/*!*********************************!*\
  !*** ./hooks/useWindowWidth.js ***!
  \*********************************/
/*! exports provided: useWindowWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWindowWidth\", function() { return useWindowWidth; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useWindowWidth = () => {\n  const {\n    0: windowWidth,\n    1: setWindowWidth\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n\n  const handleWindowResize = () => {\n    setWindowWidth(window.innerWidth);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    window.addEventListener(\"resize\", handleWindowResize);\n    return () => window.removeEventListener(\"resize\", handleWindowResize);\n  }, []);\n  return windowWidth;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2VXaW5kb3dXaWR0aC5qcz9iNTA2Il0sIm5hbWVzIjpbInVzZVdpbmRvd1dpZHRoIiwid2luZG93V2lkdGgiLCJzZXRXaW5kb3dXaWR0aCIsInVzZVN0YXRlIiwiaGFuZGxlV2luZG93UmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsY0FBYyxHQUFHLE1BQU07QUFDbEMsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUFDLENBQUQsQ0FBOUM7O0FBRUEsUUFBTUMsa0JBQWtCLEdBQUcsTUFBTTtBQUMvQkYsa0JBQWMsQ0FBQ0csTUFBTSxDQUFDQyxVQUFSLENBQWQ7QUFDRCxHQUZEOztBQUlBQyx5REFBUyxDQUFDLE1BQU07QUFDZEYsVUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0osa0JBQWxDO0FBQ0EsV0FBTyxNQUFNQyxNQUFNLENBQUNJLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTCxrQkFBckMsQ0FBYjtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxTQUFPSCxXQUFQO0FBQ0QsQ0FiTSIsImZpbGUiOiIuL2hvb2tzL3VzZVdpbmRvd1dpZHRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgdXNlV2luZG93V2lkdGggPSAoKSA9PiB7XG4gIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gKCkgPT4ge1xuICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gd2luZG93V2lkdGg7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useWindowWidth.js\n");

/***/ }),

/***/ "./lib/icons.js":
/*!**********************!*\
  !*** ./lib/icons.js ***!
  \**********************/
/*! exports provided: customIcons, moonIcon, sunIcon, searchIcon, rightArrow, leftArrow, downChevron */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customIcons\", function() { return customIcons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moonIcon\", function() { return moonIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sunIcon\", function() { return sunIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchIcon\", function() { return searchIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rightArrow\", function() { return rightArrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"leftArrow\", function() { return leftArrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"downChevron\", function() { return downChevron; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/earth/WebstormProjects/arminian-perspective-blog/client/lib/icons.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst customIcons = {\n  gridIcon: {\n    path: __jsx(\"path\", {\n      fill: \"currentColor\",\n      strokeLinecap: \"round\",\n      strokeLinejoin: \"round\",\n      strokeWidth: \"2\",\n      d: \"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 7\n      }\n    })\n  },\n  listIcon: {\n    path: __jsx(\"path\", {\n      fill: \"currentColor\",\n      strokeLinecap: \"round\",\n      strokeLinejoin: \"round\",\n      strokeWidth: \"2\",\n      d: \"M4 6h16M4 10h16M4 14h16M4 18h16\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }\n    })\n  }\n}; // <svg\n//     className=\"w-8 h-8\"\n//     fill=\"currentColor\"\n//     stroke=\"currentColor\"\n//     viewBox=\"0 0 24 24\"\n//     xmlns=\"http://www.w3.org/2000/svg\"\n// >\n//   <path\n//       fill=\"currentColor\"\n//       strokeLinecap=\"round\"\n//       strokeLinejoin=\"round\"\n//       strokeWidth=\"2\"\n//       d=\"M4 6h16M4 10h16M4 14h16M4 18h16\"\n//   />\n// </svg>\n\nconst moonIcon = __jsx(\"svg\", {\n  className: \"w-6 h-6 xl:w-8 xl:h-8\",\n  fill: \"none\",\n  stroke: \"currentColor\",\n  viewBox: \"0 0 24 24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 3\n  }\n}, __jsx(\"path\", {\n  strokeLinecap: \"round\",\n  strokeLinejoin: \"round\",\n  strokeWidth: \"2\",\n  d: \"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }\n}));\nconst sunIcon = __jsx(\"svg\", {\n  className: \"w-6 h-6 md:w-8 md:h-8\",\n  fill: \"none\",\n  stroke: \"currentColor\",\n  viewBox: \"0 0 24 24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 3\n  }\n}, __jsx(\"path\", {\n  strokeLinecap: \"round\",\n  strokeLinejoin: \"round\",\n  strokeWidth: \"2\",\n  d: \"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }\n}));\nconst searchIcon = __jsx(\"svg\", {\n  className: \"w-6 h-6 md:w-8 md:h-8\",\n  fill: \"none\",\n  stroke: \"currentColor\",\n  viewBox: \"0 0 24 24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 79,\n    columnNumber: 3\n  }\n}, __jsx(\"path\", {\n  fill: \"currentColor\",\n  strokeLinecap: \"round\",\n  strokeLinejoin: \"round\",\n  strokeWidth: \"2\",\n  d: \"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 5\n  }\n}));\nconst rightArrow = __jsx(\"svg\", {\n  className: \"w-6 h-6 inline\",\n  fill: \"none\",\n  stroke: \"currentColor\",\n  viewBox: \"0 0 24 24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 3\n  }\n}, __jsx(\"path\", {\n  strokeLinecap: \"round\",\n  strokeLinejoin: \"round\",\n  strokeWidth: \"2\",\n  d: \"M7 16l-4-4m0 0l4-4m-4 4h18\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 104,\n    columnNumber: 5\n  }\n}));\nconst leftArrow = __jsx(\"svg\", {\n  className: \"w-6 h-6 inline\",\n  fill: \"none\",\n  stroke: \"currentColor\",\n  viewBox: \"0 0 24 24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 114,\n    columnNumber: 3\n  }\n}, __jsx(\"path\", {\n  strokeLinecap: \"round\",\n  strokeLinejoin: \"round\",\n  strokeWidth: \"2\",\n  d: \"M17 8l4 4m0 0l-4 4m4-4H3\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 121,\n    columnNumber: 5\n  }\n}));\nconst downChevron = isReachingEnd => {\n  const bounce = !isReachingEnd && \"animate-bounce pt-3 w-10 h-10\";\n  return __jsx(\"svg\", {\n    className: `w-6 h-6 inline ${bounce}`,\n    fill: \"none\",\n    stroke: \"currentColor\",\n    viewBox: \"0 0 24 24\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 5\n    }\n  }, __jsx(\"path\", {\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\",\n    strokeWidth: \"2\",\n    d: \"M19 9l-7 7-7-7\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }\n  }));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvaWNvbnMuanM/ZWJjNCJdLCJuYW1lcyI6WyJjdXN0b21JY29ucyIsImdyaWRJY29uIiwicGF0aCIsImxpc3RJY29uIiwibW9vbkljb24iLCJzdW5JY29uIiwic2VhcmNoSWNvbiIsInJpZ2h0QXJyb3ciLCJsZWZ0QXJyb3ciLCJkb3duQ2hldnJvbiIsImlzUmVhY2hpbmdFbmQiLCJib3VuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsV0FBVyxHQUFHO0FBQ3pCQyxVQUFRLEVBQUU7QUFDUkMsUUFBSSxFQUNGO0FBQ0UsVUFBSSxFQUFDLGNBRFA7QUFFRSxtQkFBYSxFQUFDLE9BRmhCO0FBR0Usb0JBQWMsRUFBQyxPQUhqQjtBQUlFLGlCQUFXLEVBQUMsR0FKZDtBQUtFLE9BQUMsRUFBQyxzUUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRk0sR0FEZTtBQVl6QkMsVUFBUSxFQUFFO0FBQ1JELFFBQUksRUFDRjtBQUNFLFVBQUksRUFBQyxjQURQO0FBRUUsbUJBQWEsRUFBQyxPQUZoQjtBQUdFLG9CQUFjLEVBQUMsT0FIakI7QUFJRSxpQkFBVyxFQUFDLEdBSmQ7QUFLRSxPQUFDLEVBQUMsaUNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZNO0FBWmUsQ0FBcEIsQyxDQXlCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sTUFBTUUsUUFBUSxHQUNuQjtBQUNFLFdBQVMsRUFBQyx1QkFEWjtBQUVFLE1BQUksRUFBQyxNQUZQO0FBR0UsUUFBTSxFQUFDLGNBSFQ7QUFJRSxTQUFPLEVBQUMsV0FKVjtBQUtFLE9BQUssRUFBQyw0QkFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBT0U7QUFDRSxlQUFhLEVBQUMsT0FEaEI7QUFFRSxnQkFBYyxFQUFDLE9BRmpCO0FBR0UsYUFBVyxFQUFDLEdBSGQ7QUFJRSxHQUFDLEVBQUMsdUZBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVBGLENBREs7QUFpQkEsTUFBTUMsT0FBTyxHQUNsQjtBQUNFLFdBQVMsRUFBQyx1QkFEWjtBQUVFLE1BQUksRUFBQyxNQUZQO0FBR0UsUUFBTSxFQUFDLGNBSFQ7QUFJRSxTQUFPLEVBQUMsV0FKVjtBQUtFLE9BQUssRUFBQyw0QkFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBT0U7QUFDRSxlQUFhLEVBQUMsT0FEaEI7QUFFRSxnQkFBYyxFQUFDLE9BRmpCO0FBR0UsYUFBVyxFQUFDLEdBSGQ7QUFJRSxHQUFDLEVBQUMsdUpBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVBGLENBREs7QUFpQkEsTUFBTUMsVUFBVSxHQUNyQjtBQUNFLFdBQVMsRUFBQyx1QkFEWjtBQUVFLE1BQUksRUFBQyxNQUZQO0FBR0UsUUFBTSxFQUFDLGNBSFQ7QUFJRSxTQUFPLEVBQUMsV0FKVjtBQUtFLE9BQUssRUFBQyw0QkFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBT0U7QUFDRSxNQUFJLEVBQUMsY0FEUDtBQUVFLGVBQWEsRUFBQyxPQUZoQjtBQUdFLGdCQUFjLEVBQUMsT0FIakI7QUFJRSxhQUFXLEVBQUMsR0FKZDtBQUtFLEdBQUMsRUFBQyw2Q0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUEYsQ0FESztBQWtCQSxNQUFNQyxVQUFVLEdBQ3JCO0FBQ0UsV0FBUyxFQUFDLGdCQURaO0FBRUUsTUFBSSxFQUFDLE1BRlA7QUFHRSxRQUFNLEVBQUMsY0FIVDtBQUlFLFNBQU8sRUFBQyxXQUpWO0FBS0UsT0FBSyxFQUFDLDRCQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FPRTtBQUNFLGVBQWEsRUFBQyxPQURoQjtBQUVFLGdCQUFjLEVBQUMsT0FGakI7QUFHRSxhQUFXLEVBQUMsR0FIZDtBQUlFLEdBQUMsRUFBQyw0QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUEYsQ0FESztBQWlCQSxNQUFNQyxTQUFTLEdBQ3BCO0FBQ0UsV0FBUyxFQUFDLGdCQURaO0FBRUUsTUFBSSxFQUFDLE1BRlA7QUFHRSxRQUFNLEVBQUMsY0FIVDtBQUlFLFNBQU8sRUFBQyxXQUpWO0FBS0UsT0FBSyxFQUFDLDRCQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FPRTtBQUNFLGVBQWEsRUFBQyxPQURoQjtBQUVFLGdCQUFjLEVBQUMsT0FGakI7QUFHRSxhQUFXLEVBQUMsR0FIZDtBQUlFLEdBQUMsRUFBQywwQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUEYsQ0FESztBQWlCQSxNQUFNQyxXQUFXLEdBQUlDLGFBQUQsSUFBbUI7QUFDNUMsUUFBTUMsTUFBTSxHQUFHLENBQUNELGFBQUQsSUFBa0IsK0JBQWpDO0FBQ0EsU0FDRTtBQUNFLGFBQVMsRUFBRyxrQkFBaUJDLE1BQU8sRUFEdEM7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFVBQU0sRUFBQyxjQUhUO0FBSUUsV0FBTyxFQUFDLFdBSlY7QUFLRSxTQUFLLEVBQUMsNEJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQ0UsaUJBQWEsRUFBQyxPQURoQjtBQUVFLGtCQUFjLEVBQUMsT0FGakI7QUFHRSxlQUFXLEVBQUMsR0FIZDtBQUlFLEtBQUMsRUFBQyxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERjtBQWdCRCxDQWxCTSIsImZpbGUiOiIuL2xpYi9pY29ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IGN1c3RvbUljb25zID0ge1xuICBncmlkSWNvbjoge1xuICAgIHBhdGg6IChcbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgZD1cIk00IDZhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMnYyYTIgMiAwIDAxLTIgMkg2YTIgMiAwIDAxLTItMlY2ek0xNCA2YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJoLTJhMiAyIDAgMDEtMi0yVjZ6TTQgMTZhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMnYyYTIgMiAwIDAxLTIgMkg2YTIgMiAwIDAxLTItMnYtMnpNMTQgMTZhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMnYyYTIgMiAwIDAxLTIgMmgtMmEyIDIgMCAwMS0yLTJ2LTJ6XCJcbiAgICAgIC8+XG4gICAgKSxcbiAgfSxcbiAgbGlzdEljb246IHtcbiAgICBwYXRoOiAoXG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgIGQ9XCJNNCA2aDE2TTQgMTBoMTZNNCAxNGgxNk00IDE4aDE2XCJcbiAgICAgIC8+XG4gICAgKSxcbiAgfSxcbn07XG5cbi8vIDxzdmdcbi8vICAgICBjbGFzc05hbWU9XCJ3LTggaC04XCJcbi8vICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbi8vICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuLy8gICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuLy8gICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuLy8gPlxuLy8gICA8cGF0aFxuLy8gICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4vLyAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuLy8gICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4vLyAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuLy8gICAgICAgZD1cIk00IDZoMTZNNCAxMGgxNk00IDE0aDE2TTQgMThoMTZcIlxuLy8gICAvPlxuLy8gPC9zdmc+XG5cbmV4cG9ydCBjb25zdCBtb29uSWNvbiA9IChcbiAgPHN2Z1xuICAgIGNsYXNzTmFtZT1cInctNiBoLTYgeGw6dy04IHhsOmgtOFwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgIGQ9XCJNMjAuMzU0IDE1LjM1NEE5IDkgMCAwMTguNjQ2IDMuNjQ2IDkuMDAzIDkuMDAzIDAgMDAxMiAyMWE5LjAwMyA5LjAwMyAwIDAwOC4zNTQtNS42NDZ6XCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBzdW5JY29uID0gKFxuICA8c3ZnXG4gICAgY2xhc3NOYW1lPVwidy02IGgtNiBtZDp3LTggbWQ6aC04XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgZD1cIk0xMiAzdjFtMCAxNnYxbTktOWgtMU00IDEySDNtMTUuMzY0IDYuMzY0bC0uNzA3LS43MDdNNi4zNDMgNi4zNDNsLS43MDctLjcwN20xMi43MjggMGwtLjcwNy43MDdNNi4zNDMgMTcuNjU3bC0uNzA3LjcwN00xNiAxMmE0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6XCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hJY29uID0gKFxuICA8c3ZnXG4gICAgY2xhc3NOYW1lPVwidy02IGgtNiBtZDp3LTggbWQ6aC04XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICBkPVwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwelwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgcmlnaHRBcnJvdyA9IChcbiAgPHN2Z1xuICAgIGNsYXNzTmFtZT1cInctNiBoLTYgaW5saW5lXCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgZD1cIk03IDE2bC00LTRtMCAwbDQtNG0tNCA0aDE4XCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBsZWZ0QXJyb3cgPSAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9XCJ3LTYgaC02IGlubGluZVwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgIGQ9XCJNMTcgOGw0IDRtMCAwbC00IDRtNC00SDNcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IGRvd25DaGV2cm9uID0gKGlzUmVhY2hpbmdFbmQpID0+IHtcbiAgY29uc3QgYm91bmNlID0gIWlzUmVhY2hpbmdFbmQgJiYgXCJhbmltYXRlLWJvdW5jZSBwdC0zIHctMTAgaC0xMFwiO1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT17YHctNiBoLTYgaW5saW5lICR7Ym91bmNlfWB9XG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgZD1cIk0xOSA5bC03IDctNy03XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/icons.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/tailwind.css */ \"./styles/tailwind.css\");\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_global_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/global.context */ \"./context/global.context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _chakra_ui_core_dist_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core/dist/theme */ \"@chakra-ui/core/dist/theme\");\n/* harmony import */ var _chakra_ui_core_dist_theme__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core_dist_theme__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customTheme */ \"./customTheme.js\");\nvar _jsxFileName = \"/Users/earth/WebstormProjects/arminian-perspective-blog/client/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, \"\\u0410\\u0440\\u043C\\u0438\\u043D\\u0438\\u0430\\u043D\\u0441\\u043A\\u0430\\u044F \\u041F\\u0435\\u0440\\u0441\\u043F\\u0435\\u043A\\u0442\\u0438\\u0432\\u0430\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon-32x32.png\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"ThemeProvider\"], {\n    theme: _customTheme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"ColorModeProvider\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(_context_global_context__WEBPACK_IMPORTED_MODULE_2__[\"GlobalProvider\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }))))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjdXN0b21UaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3RELFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtSkFERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLG9CQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsNkRBQUQ7QUFBZSxTQUFLLEVBQUVDLG9EQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREYsQ0FERixDQUxGLENBREY7QUFlRCIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBDb2xvck1vZGVQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy90YWlsd2luZC5jc3NcIjtcbmltcG9ydCB7IEdsb2JhbFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvZ2xvYmFsLmNvbnRleHRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvdGhlbWVcIjtcbmltcG9ydCBjdXN0b21UaGVtZSBmcm9tIFwiLi4vY3VzdG9tVGhlbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+0JDRgNC80LjQvdC40LDQvdGB0LrQsNGPINCf0LXRgNGB0L/QtdC60YLQuNCy0LA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17Y3VzdG9tVGhlbWV9PlxuICAgICAgICA8Q29sb3JNb2RlUHJvdmlkZXI+XG4gICAgICAgICAgPEdsb2JhbFByb3ZpZGVyPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvR2xvYmFsUHJvdmlkZXI+XG4gICAgICAgIDwvQ29sb3JNb2RlUHJvdmlkZXI+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/tailwind.css":
/*!*****************************!*\
  !*** ./styles/tailwind.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy90YWlsd2luZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/tailwind.css\n");

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

eval("module.exports = require(\"@chakra-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2NvcmVcIj9lZTg2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBjaGFrcmEtdWkvY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/core\n");

/***/ }),

/***/ "@chakra-ui/core/dist/theme":
/*!*********************************************!*\
  !*** external "@chakra-ui/core/dist/theme" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/core/dist/theme\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2NvcmUvZGlzdC90aGVtZVwiP2YwZjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGNoYWtyYS11aS9jb3JlL2Rpc3QvdGhlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2NvcmUvZGlzdC90aGVtZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/core/dist/theme\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });