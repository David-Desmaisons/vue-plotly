/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./example/main.js","chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/App.vue":
/*!*************************!*\
  !*** ./example/App.vue ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_a9794c84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=a9794c84& */ \"./example/App.vue?vue&type=template&id=a9794c84&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./example/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=less& */ \"./example/App.vue?vue&type=style&index=0&lang=less&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_a9794c84___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_a9794c84___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"example/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./example/App.vue?");

/***/ }),

/***/ "./example/App.vue?vue&type=script&lang=js&":
/*!**************************************************!*\
  !*** ./example/App.vue?vue&type=script&lang=js& ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_ify_loader_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/ify-loader!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ify-loader/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./example/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_ify_loader_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./example/App.vue?");

/***/ }),

/***/ "./example/App.vue?vue&type=style&index=0&lang=less&":
/*!***********************************************************!*\
  !*** ./example/App.vue?vue&type=style&index=0&lang=less& ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--10-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=less& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./example/App.vue?vue&type=style&index=0&lang=less&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./example/App.vue?");

/***/ }),

/***/ "./example/App.vue?vue&type=template&id=a9794c84&":
/*!********************************************************!*\
  !*** ./example/App.vue?vue&type=template&id=a9794c84& ***!
  \********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_21b498e3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_a9794c84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"21b498e3-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=a9794c84& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"21b498e3-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./example/App.vue?vue&type=template&id=a9794c84&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_21b498e3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_a9794c84___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_21b498e3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_a9794c84___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./example/App.vue?");

/***/ }),

/***/ "./example/assets/logo.png":
/*!*********************************!*\
  !*** ./example/assets/logo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo.194b6757.png\";\n\n//# sourceURL=webpack:///./example/assets/logo.png?");

/***/ }),

/***/ "./example/components/2D-histogram.js":
/*!********************************************!*\
  !*** ./example/components/2D-histogram.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// from http://bl.ocks.org/mbostock/4349187\n// Sample from a normal distribution with mean 0, stddev 1.\nfunction normal() {\n  var x = 0,\n      y = 0,\n      rds,\n      c;\n\n  do {\n    x = Math.random() * 2 - 1;\n    y = Math.random() * 2 - 1;\n    rds = x * x + y * y;\n  } while (rds == 0 || rds > 1);\n\n  c = Math.sqrt(-2 * Math.log(rds) / rds); // Box-Muller transform\n\n  return x * c; // throw away extra sample y * c\n}\n\nvar N = 2000,\n    a = -1,\n    b = 1.2;\nvar step = (b - a) / (N - 1);\nvar t = new Array(N),\n    x = new Array(N),\n    y = new Array(N);\n\nfor (var i = 0; i < N; i++) {\n  t[i] = a + step * i;\n  x[i] = Math.pow(t[i], 3) + 0.3 * normal();\n  y[i] = Math.pow(t[i], 6) + 0.3 * normal();\n}\n\nvar trace1 = {\n  x: x,\n  y: y,\n  mode: \"markers\",\n  name: \"points\",\n  marker: {\n    color: \"rgb(102,0,0)\",\n    size: 2,\n    opacity: 0.4\n  },\n  type: \"scatter\"\n};\nvar trace2 = {\n  x: x,\n  y: y,\n  name: \"density\",\n  ncontours: 20,\n  colorscale: \"Hot\",\n  reversescale: true,\n  showscale: false,\n  type: \"histogram2dcontour\"\n};\nvar trace3 = {\n  x: x,\n  name: \"x density\",\n  marker: {\n    color: \"rgb(102,0,0)\"\n  },\n  yaxis: \"y2\",\n  type: \"histogram\"\n};\nvar trace4 = {\n  y: y,\n  name: \"y density\",\n  marker: {\n    color: \"rgb(102,0,0)\"\n  },\n  xaxis: \"x2\",\n  type: \"histogram\"\n};\nvar layout = {\n  showlegend: false,\n  margin: {\n    t: 50\n  },\n  hovermode: \"closest\",\n  bargap: 0,\n  xaxis: {\n    domain: [0, 0.85],\n    showgrid: false,\n    zeroline: false\n  },\n  yaxis: {\n    domain: [0, 0.85],\n    showgrid: false,\n    zeroline: false\n  },\n  xaxis2: {\n    domain: [0.85, 1],\n    showgrid: false,\n    zeroline: false\n  },\n  yaxis2: {\n    domain: [0.85, 1],\n    showgrid: false,\n    zeroline: false\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  display: \"2D Histogram\",\n  data: {\n    data: [trace1, trace2, trace3, trace4],\n    attr: {},\n    layout: layout\n  }\n});\n\n//# sourceURL=webpack:///./example/components/2D-histogram.js?");

/***/ }),

/***/ "./example/components/contour.js":
/*!***************************************!*\
  !*** ./example/components/contour.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  display: \"Contour graph\",\n  data: {\n    data: [{\n      z: [[10, 10.625, 12.5, 15.625, 20], [5.625, 6.25, 8.125, 11.25, 15.625], [2.5, 3.125, 5, 8.125, 12.5], [0.625, 1.25, 3.125, 6.25, 10.625], [0, 0.625, 2.5, 5.625, 10]],\n      x: [-9, -6, -5, -3, -1],\n      y: [0, 1, 4, 5, 7],\n      type: \"contour\"\n    }],\n    attr: {\n      displayModeBar: false\n    },\n    layout: {\n      title: \"Setting the X and Y Coordinates in a Contour Plot\"\n    }\n  }\n});\n\n//# sourceURL=webpack:///./example/components/contour.js?");

/***/ }),

/***/ "./example/components/graphpicker.vue":
/*!********************************************!*\
  !*** ./example/components/graphpicker.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphpicker_vue_vue_type_template_id_580d8d36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphpicker.vue?vue&type=template&id=580d8d36& */ \"./example/components/graphpicker.vue?vue&type=template&id=580d8d36&\");\n/* harmony import */ var _graphpicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphpicker.vue?vue&type=script&lang=js& */ \"./example/components/graphpicker.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _graphpicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphpicker.vue?vue&type=style&index=0&lang=css& */ \"./example/components/graphpicker.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _graphpicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _graphpicker_vue_vue_type_template_id_580d8d36___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _graphpicker_vue_vue_type_template_id_580d8d36___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"example/components/graphpicker.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./example/components/graphpicker.vue?");

/***/ }),

/***/ "./example/components/graphpicker.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./example/components/graphpicker.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_ify_loader_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_graphpicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/ify-loader!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./graphpicker.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ify-loader/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./example/components/graphpicker.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_ify_loader_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_graphpicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./example/components/graphpicker.vue?");

/***/ }),

/***/ "./example/components/graphpicker.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./example/components/graphpicker.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_graphpicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./graphpicker.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./example/components/graphpicker.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_graphpicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_graphpicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_graphpicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_graphpicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_graphpicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./example/components/graphpicker.vue?");

/***/ }),

/***/ "./example/components/graphpicker.vue?vue&type=template&id=580d8d36&":
/*!***************************************************************************!*\
  !*** ./example/components/graphpicker.vue?vue&type=template&id=580d8d36& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_21b498e3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_graphpicker_vue_vue_type_template_id_580d8d36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"21b498e3-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./graphpicker.vue?vue&type=template&id=580d8d36& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"21b498e3-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./example/components/graphpicker.vue?vue&type=template&id=580d8d36&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_21b498e3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_graphpicker_vue_vue_type_template_id_580d8d36___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_21b498e3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_graphpicker_vue_vue_type_template_id_580d8d36___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./example/components/graphpicker.vue?");

/***/ }),

/***/ "./example/components/histogram.js":
/*!*****************************************!*\
  !*** ./example/components/histogram.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar x = [];\n\nfor (var i = 0; i < 500; i++) {\n  x[i] = Math.random();\n}\n\nvar trace = {\n  x: x,\n  type: \"histogram\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  display: \"Histogram\",\n  data: {\n    data: [trace],\n    attr: {},\n    layout: {}\n  }\n});\n\n//# sourceURL=webpack:///./example/components/histogram.js?");

/***/ }),

/***/ "./example/components/pie.js":
/*!***********************************!*\
  !*** ./example/components/pie.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar pie = {\n  values: [40, 10, 30],\n  rotation: 90,\n  textinfo: \"none\",\n  marker: {\n    colors: [\"orange\", \"yellow\", \"BLUE\"]\n  },\n  labels: [\"remaing\", \"done\", \"doing\"],\n  hoverinfo: \"label+value+percent\",\n  hole: 0.5,\n  type: \"pie\",\n  showlegend: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  display: \"Pie graph\",\n  data: {\n    data: [pie],\n    attr: {\n      displayModeBar: false\n    },\n    layout: {\n      font: {\n        color: \"white\"\n      },\n      title: {\n        text: \"pie\"\n      },\n      plot_bgcolor: \"black\",\n      paper_bgcolor: \"black\"\n    }\n  }\n});\n\n//# sourceURL=webpack:///./example/components/pie.js?");

/***/ }),

/***/ "./example/components/simple.js":
/*!**************************************!*\
  !*** ./example/components/simple.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar trace1 = {\n  x: [1, 2, 3, 4],\n  y: [10, 15, 13, 17],\n  type: 'scatter'\n};\nvar trace2 = {\n  x: [1, 2, 3, 4],\n  y: [16, 5, 11, 9],\n  type: 'scatter'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  display: 'Scatter',\n  data: {\n    data: [trace1, trace2],\n    attr: {\n      displayModeBar: true\n    },\n    layout: {\n      plot_bgcolor: '#d3d3d3',\n      paper_bgcolor: '#d3d3d3'\n    }\n  }\n});\n\n//# sourceURL=webpack:///./example/components/simple.js?");

/***/ }),

/***/ "./example/main.js":
/*!*************************!*\
  !*** ./example/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./example/App.vue\");\n/* harmony import */ var vue_highlight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-highlight.js */ \"./node_modules/vue-highlight.js/dist/vue-highlight.es.js\");\n/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/languages/javascript */ \"./node_modules/highlight.js/lib/languages/javascript.js\");\n/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue_highlight_js_lib_languages_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-highlight.js/lib/languages/vue */ \"./node_modules/vue-highlight.js/lib/languages/vue.js\");\n/* harmony import */ var vue_highlight_js_lib_languages_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_highlight_js_lib_languages_vue__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js/lib/languages/css */ \"./node_modules/highlight.js/lib/languages/css.js\");\n/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var vue_draggable_resizable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-draggable-resizable */ \"./node_modules/vue-draggable-resizable/dist/VueDraggableResizable.umd.min.js\");\n/* harmony import */ var vue_draggable_resizable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_draggable_resizable__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/index.js */ \"./src/index.js\");\n/* harmony import */ var vue_draggable_resizable_dist_VueDraggableResizable_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-draggable-resizable/dist/VueDraggableResizable.css */ \"./node_modules/vue-draggable-resizable/dist/VueDraggableResizable.css\");\n/* harmony import */ var vue_draggable_resizable_dist_VueDraggableResizable_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_draggable_resizable_dist_VueDraggableResizable_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! font-awesome/css/font-awesome.css */ \"./node_modules/font-awesome/css/font-awesome.css\");\n/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highlight.js/styles/default.css */ \"./node_modules/highlight.js/styles/default.css\");\n/* harmony import */ var highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var highlight_js_styles_mono_blue_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highlight.js/styles/mono-blue.css */ \"./node_modules/highlight.js/styles/mono-blue.css\");\n/* harmony import */ var highlight_js_styles_mono_blue_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_mono_blue_css__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"vue-draggable-resizable\", vue_draggable_resizable__WEBPACK_IMPORTED_MODULE_6___default.a);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"plotly\", _index_js__WEBPACK_IMPORTED_MODULE_7__[\"Plotly\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_highlight_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  languages: {\n    css: highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_5___default.a,\n    javascript: highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_3___default.a,\n    vue: vue_highlight_js_lib_languages_vue__WEBPACK_IMPORTED_MODULE_4___default.a\n  }\n});\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n}).$mount(\"#app\");\n\n//# sourceURL=webpack:///./example/main.js?");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ify-loader/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./example/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/ify-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join */ \"./node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_graphpicker_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/graphpicker.vue */ \"./example/components/graphpicker.vue\");\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"app\",\n  components: {\n    graphpicker: _components_graphpicker_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  data: function data() {\n    return {\n      features: [{\n        text: \"plotly.js methods and events\",\n        icon: \"fa-bar-chart\"\n      }, {\n        text: \"Data reactivity\",\n        icon: \"fa-bolt\"\n      }, {\n        text: \"Redraw on resizing\",\n        icon: \"fa-arrows-alt\"\n      }]\n    };\n  },\n  computed: {\n    code: function code() {\n      var _this = this;\n\n      var fromAttr = Object.keys(this.data.attr).map(function (key) {\n        return \":\".concat(key, \"=\\\"\").concat(_this.data.attr[key], \"\\\"\");\n      }).join(\" \");\n      return \"<plotly :data=\\\"data\\\" :layout=\\\"layout\\\" \".concat(fromAttr, \"/>\");\n    }\n  }\n});\n\n//# sourceURL=webpack:///./example/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/ify-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ify-loader/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./example/components/graphpicker.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/ify-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/graphpicker.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join */ \"./node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue_json_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-json-editor */ \"./node_modules/vue-json-editor/vue-json-editor.vue\");\n/* harmony import */ var _simple_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simple.js */ \"./example/components/simple.js\");\n/* harmony import */ var _contour_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contour.js */ \"./example/components/contour.js\");\n/* harmony import */ var _histogram_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./histogram.js */ \"./example/components/histogram.js\");\n/* harmony import */ var _2D_histogram_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./2D-histogram.js */ \"./example/components/2D-histogram.js\");\n/* harmony import */ var _pie_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pie.js */ \"./example/components/pie.js\");\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"picker\",\n  components: {\n    editor: vue_json_editor__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  data: function data() {\n    return {\n      generics: [_simple_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _contour_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _histogram_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _pie_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _2D_histogram_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]],\n      selected: _simple_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    };\n  },\n  computed: {\n    code: function code() {\n      var attr = this.selected.data.attr;\n      var fromAttr = Object.keys(attr).map(function (key) {\n        return \":\".concat(key, \"=\\\"\").concat(attr[key], \"\\\"\");\n      }).join(\" \");\n      return \"<plotly :data=\\\"data\\\" :layout=\\\"layout\\\" \".concat(fromAttr, \"/>\");\n    }\n  }\n});\n\n//# sourceURL=webpack:///./example/components/graphpicker.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/ify-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ify-loader/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Plotly.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/ify-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Plotly.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ \"./node_modules/core-js/modules/es.array.reduce.js\");\n/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptor.js\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptors.js\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var F_source_vue_plotly_js_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var plotly_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! plotly.js */ \"./node_modules/plotly.js/lib/index.js\");\n/* harmony import */ var plotly_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(plotly_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events.js */ \"./src/components/events.js\");\n/* harmony import */ var _methods_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./methods.js */ \"./src/components/methods.js\");\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/helper */ \"./src/utils/helper.js\");\n\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_source_vue_plotly_js_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n//\n//\n//\n\n\n\n\nvar directives = {};\n\nif (typeof window !== \"undefined\") {\n  directives.resize = __webpack_require__(/*! vue-resize-directive */ \"./node_modules/vue-resize-directive/dist/Vueresize.js\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"plotly\",\n  inheritAttrs: false,\n  directives: directives,\n  props: {\n    data: {\n      type: Array\n    },\n    layout: {\n      type: Object\n    },\n    id: {\n      type: String,\n      required: false,\n      default: null\n    }\n  },\n  data: function data() {\n    return {\n      scheduled: null,\n      innerLayout: _objectSpread({}, this.layout)\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    plotly_js__WEBPACK_IMPORTED_MODULE_9___default.a.newPlot(this.$el, this.data, this.innerLayout, this.options);\n    _events_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].forEach(function (evt) {\n      _this.$el.on(evt.completeName, evt.handler(_this));\n    });\n  },\n  watch: {\n    data: {\n      handler: function handler() {\n        this.schedule({\n          replot: true\n        });\n      },\n      deep: true\n    },\n    options: {\n      handler: function handler(value, old) {\n        if (JSON.stringify(value) === JSON.stringify(old)) {\n          return;\n        }\n\n        this.schedule({\n          replot: true\n        });\n      },\n      deep: true\n    },\n    layout: function layout(_layout) {\n      this.innerLayout = _objectSpread({}, _layout);\n      this.schedule({\n        replot: false\n      });\n    }\n  },\n  computed: {\n    options: function options() {\n      var _this2 = this;\n\n      var optionsFromAttrs = Object.keys(this.$attrs).reduce(function (acc, key) {\n        acc[Object(_utils_helper__WEBPACK_IMPORTED_MODULE_12__[\"camelize\"])(key)] = _this2.$attrs[key];\n        return acc;\n      }, {});\n      return _objectSpread({\n        responsive: false\n      }, optionsFromAttrs);\n    }\n  },\n  beforeDestroy: function beforeDestroy() {\n    var _this3 = this;\n\n    _events_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].forEach(function (event) {\n      return _this3.$el.removeAllListeners(event.completeName);\n    });\n    plotly_js__WEBPACK_IMPORTED_MODULE_9___default.a.purge(this.$el);\n  },\n  methods: _objectSpread({}, _methods_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    onResize: function onResize() {\n      plotly_js__WEBPACK_IMPORTED_MODULE_9___default.a.Plots.resize(this.$el);\n    },\n    schedule: function schedule(context) {\n      var _this4 = this;\n\n      var scheduled = this.scheduled;\n\n      if (scheduled) {\n        scheduled.replot = scheduled.replot || context.replot;\n        return;\n      }\n\n      this.scheduled = context;\n      this.$nextTick(function () {\n        var replot = _this4.scheduled.replot;\n        _this4.scheduled = null;\n\n        if (replot) {\n          _this4.react();\n\n          return;\n        }\n\n        _this4.relayout(_this4.innerLayout);\n      });\n    },\n    toImage: function toImage(options) {\n      var allOptions = Object.assign(this.getPrintOptions(), options);\n      return plotly_js__WEBPACK_IMPORTED_MODULE_9___default.a.toImage(this.$el, allOptions);\n    },\n    downloadImage: function downloadImage(options) {\n      var filename = \"plot--\".concat(new Date().toISOString());\n      var allOptions = Object.assign(this.getPrintOptions(), {\n        filename: filename\n      }, options);\n      return plotly_js__WEBPACK_IMPORTED_MODULE_9___default.a.downloadImage(this.$el, allOptions);\n    },\n    getPrintOptions: function getPrintOptions() {\n      var $el = this.$el;\n      return {\n        format: \"png\",\n        width: $el.clientWidth,\n        height: $el.clientHeight\n      };\n    },\n    react: function react() {\n      plotly_js__WEBPACK_IMPORTED_MODULE_9___default.a.react(this.$el, this.data, this.innerLayout, this.options);\n    }\n  })\n});\n\n//# sourceURL=webpack:///./src/components/Plotly.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/ify-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"21b498e3-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./example/App.vue?vue&type=template&id=a9794c84&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"21b498e3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/App.vue?vue&type=template&id=a9794c84& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"app\" } }, [\n    _vm._m(0),\n    _c(\"div\", { staticClass: \"container \" }, [\n      _c(\"div\", { staticClass: \"card\" }, [\n        _c(\"div\", { staticClass: \"card-header\" }, [\n          _vm._m(1),\n          _c(\n            \"div\",\n            { staticClass: \"row justify-content-md-center\" },\n            _vm._l(_vm.features, function(data, idx) {\n              return _c(\"div\", { key: idx, staticClass: \"col-3 features\" }, [\n                _c(\"div\", [\n                  _c(\"h4\", { staticClass: \"big-icone\" }, [\n                    _c(\"i\", { class: \"fa \" + data.icon })\n                  ]),\n                  _c(\"p\", { staticClass: \"card-text\" }, [\n                    _vm._v(_vm._s(data.text))\n                  ])\n                ])\n              ])\n            }),\n            0\n          )\n        ])\n      ]),\n      _c(\"div\", { staticClass: \"card main-card\" }, [_c(\"graphpicker\")], 1)\n    ]),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"a\",\n      {\n        attrs: {\n          href: \"https://github.com/David-Desmaisons/vue-plotly\",\n          target: \"_blank\"\n        }\n      },\n      [\n        _c(\"img\", {\n          staticClass: \"attachment-full size-full\",\n          staticStyle: {\n            position: \"fixed\",\n            top: \"0\",\n            right: \"0\",\n            border: \"0\",\n            \"z-index\": \"99999\"\n          },\n          attrs: {\n            width: \"149\",\n            height: \"149\",\n            src:\n              \"https://github.blog/wp-content/uploads/2008/12/forkme_right_gray_6d6d6d.png?resize=149%2C149\",\n            alt: \"Fork me on GitHub\",\n            \"data-recalc-dims\": \"1\"\n          }\n        })\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"logo\" }, [\n      _c(\"img\", {\n        attrs: { alt: \"Vue.draggable logo\", src: __webpack_require__(/*! ./assets/logo.png */ \"./example/assets/logo.png\") }\n      }),\n      _c(\"p\", [\n        _c(\n          \"a\",\n          {\n            staticClass: \"title-link\",\n            attrs: {\n              href: \"https://github.com/David-Desmaisons/vue-plotly\",\n              target: \"_blank\"\n            }\n          },\n          [_c(\"span\", { staticClass: \"title\" }, [_vm._v(\"Vue.plotly\")])]\n        ),\n        _vm._v(\"a thin vue wrapper for \"),\n        _c(\n          \"a\",\n          { attrs: { href: \"https://plot.ly/javascript/\", target: \"_blank\" } },\n          [_vm._v(\"plotly.js\")]\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"footer\", { staticClass: \"footer fixed-bottom bg-dark\" }, [\n      _c(\"div\", { staticClass: \"container\" }, [\n        _c(\"img\", {\n          attrs: {\n            src:\n              \"https://plot.ly/gh-pages/documentation/static/images/browser_support.png\"\n          }\n        })\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./example/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2221b498e3-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"21b498e3-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./example/components/graphpicker.vue?vue&type=template&id=580d8d36&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"21b498e3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/graphpicker.vue?vue&type=template&id=580d8d36& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"card-body\" }, [\n      _c(\"div\", { staticClass: \"row\" }, [\n        _c(\"div\", { staticClass: \"col-3\" }, [\n          _c(\"div\", { staticClass: \"col\" }, [\n            _c(\"form\", { staticClass: \"form-group\" }, [\n              _c(\n                \"select\",\n                {\n                  directives: [\n                    {\n                      name: \"model\",\n                      rawName: \"v-model\",\n                      value: _vm.selected,\n                      expression: \"selected\"\n                    }\n                  ],\n                  staticClass: \"form-control col\",\n                  attrs: { id: \"selector\" },\n                  on: {\n                    change: function($event) {\n                      var $$selectedVal = Array.prototype.filter\n                        .call($event.target.options, function(o) {\n                          return o.selected\n                        })\n                        .map(function(o) {\n                          var val = \"_value\" in o ? o._value : o.value\n                          return val\n                        })\n                      _vm.selected = $event.target.multiple\n                        ? $$selectedVal\n                        : $$selectedVal[0]\n                    }\n                  }\n                },\n                _vm._l(_vm.generics, function(example, idx) {\n                  return _c(\n                    \"option\",\n                    { key: idx, domProps: { value: example } },\n                    [_vm._v(_vm._s(example.display))]\n                  )\n                }),\n                0\n              )\n            ])\n          ]),\n          _c(\n            \"div\",\n            { staticClass: \"col descriptor\" },\n            [\n              _c(\"span\", [_vm._v(\"Layout:\")]),\n              _c(\"editor\", {\n                staticClass: \"layout\",\n                attrs: { \"show-btns\": false },\n                model: {\n                  value: _vm.selected.data.layout,\n                  callback: function($$v) {\n                    _vm.$set(_vm.selected.data, \"layout\", $$v)\n                  },\n                  expression: \"selected.data.layout\"\n                }\n              })\n            ],\n            1\n          ),\n          _c(\n            \"div\",\n            { staticClass: \"col descriptor\" },\n            [\n              _c(\"span\", [_vm._v(\"Data:\")]),\n              _c(\"editor\", {\n                staticClass: \"data\",\n                attrs: { \"show-btns\": false },\n                model: {\n                  value: _vm.selected.data.data,\n                  callback: function($$v) {\n                    _vm.$set(_vm.selected.data, \"data\", $$v)\n                  },\n                  expression: \"selected.data.data\"\n                }\n              })\n            ],\n            1\n          )\n        ]),\n        _c(\n          \"div\",\n          { staticClass: \"col-9\" },\n          [\n            _c(\"div\", { staticClass: \"row\" }, [\n              _c(\n                \"div\",\n                { staticClass: \"col\" },\n                [\n                  _c(\"highlight-code\", {\n                    attrs: { lang: \"javascript\", code: _vm.code }\n                  })\n                ],\n                1\n              )\n            ]),\n            _c(\n              \"plotly\",\n              _vm._b(\n                {\n                  staticClass: \"graph\",\n                  attrs: {\n                    data: _vm.selected.data.data,\n                    layout: _vm.selected.data.layout\n                  }\n                },\n                \"plotly\",\n                _vm.selected.data.attr,\n                false\n              )\n            )\n          ],\n          1\n        )\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./example/components/graphpicker.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2221b498e3-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"21b498e3-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Plotly.vue?vue&type=template&id=1b10c55e&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"21b498e3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Plotly.vue?vue&type=template&id=1b10c55e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", {\n    directives: [\n      {\n        name: \"resize\",\n        rawName: \"v-resize:debounce.100\",\n        value: _vm.onResize,\n        expression: \"onResize\",\n        arg: \"debounce\",\n        modifiers: { \"100\": true }\n      }\n    ],\n    attrs: { id: _vm.id }\n  })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Plotly.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2221b498e3-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./example/components/graphpicker.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/graphpicker.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.layout .jsoneditor-vue {\\r\\n  height: 150px;\\n}\\n.data .jsoneditor-vue {\\r\\n  height: 300px;\\n}\\n.jsoneditor-vue div.jsoneditor-tree {\\r\\n  min-height: 100px;\\n}\\n.mark-up {\\r\\n  margin-top: 8px;\\n}\\n.graph {\\r\\n  height: 500px;\\n}\\ndiv.jsoneditor-menu {\\r\\n  background-color: #007bff;\\r\\n  border-bottom: 1px solid #007bff;\\n}\\n.descriptor > span {\\r\\n  margin-left: 5px;\\r\\n  margin-top: 5px;\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./example/components/graphpicker.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./example/App.vue?vue&type=style&index=0&lang=less&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/App.vue?vue&type=style&index=0&lang=less& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#app {\\n  font-family: \\\"Avenir\\\", Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: #2c3e50;\\n}\\n@media (min-width: 1200px) {\\n#app .container {\\n    max-width: 1400px;\\n}\\n}\\n#app .logo {\\n  text-align: center;\\n}\\n#app .logo img {\\n  width: 80px;\\n}\\n#app .card .card-header a {\\n  margin-right: 5px;\\n}\\n#app .footer {\\n  text-align: center;\\n}\\n#app .footer img {\\n  height: 40px;\\n}\\n.features {\\n  font-size: 18px;\\n  text-align: center;\\n}\\n.graph-label {\\n  text-align: center;\\n  width: 100%;\\n  height: 100%;\\n}\\n.label {\\n  background: rgba(0, 0, 0, 0.03);\\n  overflow: hidden;\\n}\\n.selector {\\n  background-color: lightblue;\\n}\\n#badges {\\n  text-align: center;\\n}\\n.main-card {\\n  padding: 0;\\n}\\nfooter.footer {\\n  background: darkgray;\\n}\\n.big-icon {\\n  margin-bottom: 0;\\n}\\n.title {\\n  font-size: 30px;\\n  color: black;\\n}\\na.title-link:hover {\\n  text-decoration: none;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./example/App.vue?./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./example/components/graphpicker.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/graphpicker.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./graphpicker.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./example/components/graphpicker.vue?vue&type=style&index=0&lang=css&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"2896ed26\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./example/components/graphpicker.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./example/App.vue?vue&type=style&index=0&lang=less&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/App.vue?vue&type=style&index=0&lang=less& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=less& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./example/App.vue?vue&type=style&index=0&lang=less&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"b6c75428\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./example/App.vue?./node_modules/vue-style-loader??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/Plotly.vue":
/*!***********************************!*\
  !*** ./src/components/Plotly.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Plotly_vue_vue_type_template_id_1b10c55e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plotly.vue?vue&type=template&id=1b10c55e& */ \"./src/components/Plotly.vue?vue&type=template&id=1b10c55e&\");\n/* harmony import */ var _Plotly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Plotly.vue?vue&type=script&lang=js& */ \"./src/components/Plotly.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Plotly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Plotly_vue_vue_type_template_id_1b10c55e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Plotly_vue_vue_type_template_id_1b10c55e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Plotly.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Plotly.vue?");

/***/ }),

/***/ "./src/components/Plotly.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/Plotly.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_ify_loader_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Plotly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/ify-loader!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Plotly.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ify-loader/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Plotly.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_ify_loader_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Plotly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Plotly.vue?");

/***/ }),

/***/ "./src/components/Plotly.vue?vue&type=template&id=1b10c55e&":
/*!******************************************************************!*\
  !*** ./src/components/Plotly.vue?vue&type=template&id=1b10c55e& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_21b498e3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Plotly_vue_vue_type_template_id_1b10c55e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"21b498e3-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Plotly.vue?vue&type=template&id=1b10c55e& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"21b498e3-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Plotly.vue?vue&type=template&id=1b10c55e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_21b498e3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Plotly_vue_vue_type_template_id_1b10c55e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_21b498e3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Plotly_vue_vue_type_template_id_1b10c55e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Plotly.vue?");

/***/ }),

/***/ "./src/components/events.js":
/*!**********************************!*\
  !*** ./src/components/events.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar eventsName = [\"AfterExport\", \"AfterPlot\", \"Animated\", \"AnimatingFrame\", \"AnimationInterrupted\", \"AutoSize\", \"BeforeExport\", \"ButtonClicked\", \"Click\", \"ClickAnnotation\", \"Deselect\", \"DoubleClick\", \"Framework\", \"Hover\", \"LegendClick\", \"LegendDoubleClick\", \"Relayout\", \"Restyle\", \"Redraw\", \"Selected\", \"Selecting\", \"SliderChange\", \"SliderEnd\", \"SliderStart\", \"Transitioning\", \"TransitionInterrupted\", \"Unhover\"];\nvar events = eventsName.map(function (evt) {\n  return evt.toLocaleLowerCase();\n}).map(function (eventName) {\n  return {\n    completeName: \"plotly_\" + eventName,\n    handler: function handler(context) {\n      return function () {\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n\n        context.$emit.apply(context, [eventName].concat(args));\n      };\n    }\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (events);\n\n//# sourceURL=webpack:///./src/components/events.js?");

/***/ }),

/***/ "./src/components/methods.js":
/*!***********************************!*\
  !*** ./src/components/methods.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ \"./node_modules/core-js/modules/es.array.reduce.js\");\n/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var plotly_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! plotly.js */ \"./node_modules/plotly.js/lib/index.js\");\n/* harmony import */ var plotly_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(plotly_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar plotlyFunctions = [\"restyle\", \"relayout\", \"update\", \"addTraces\", \"deleteTraces\", \"moveTraces\", \"extendTraces\", \"prependTraces\", \"purge\"];\nvar methods = plotlyFunctions.reduce(function (all, functionName) {\n  all[functionName] = function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return plotly_js__WEBPACK_IMPORTED_MODULE_2___default.a[functionName].apply(plotly_js__WEBPACK_IMPORTED_MODULE_2___default.a, [this.$el].concat(args));\n  };\n\n  return all;\n}, {});\n/* harmony default export */ __webpack_exports__[\"default\"] = (methods);\n\n//# sourceURL=webpack:///./src/components/methods.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Plotly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Plotly_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Plotly.vue */ \"./src/components/Plotly.vue\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Plotly\", function() { return _components_Plotly_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/helper.js":
/*!*****************************!*\
  !*** ./src/utils/helper.js ***!
  \*****************************/
/*! exports provided: camelize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camelize\", function() { return camelize; });\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction cached(fn) {\n  var cache = Object.create(null);\n  return function cachedFn(str) {\n    var hit = cache[str];\n    return hit || (cache[str] = fn(str));\n  };\n}\n\nvar regex = /-(\\w)/g;\nvar camelize = cached(function (str) {\n  return str.replace(regex, function (_, c) {\n    return c ? c.toUpperCase() : \"\";\n  });\n});\n\n\n//# sourceURL=webpack:///./src/utils/helper.js?");

/***/ }),

/***/ 0:
/*!***********************!*\
  !*** vertx (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///vertx_(ignored)?");

/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ })

/******/ });