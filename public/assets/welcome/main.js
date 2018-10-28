(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/file-loader/dist/cjs.js?name=style.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./resources/assets/welcome/index.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=style.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./resources/assets/welcome/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"style.css\";\n\n//# sourceURL=webpack:///./resources/assets/welcome/index.scss?./node_modules/file-loader/dist/cjs.js?name=style.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./resources/assets/welcome/body.html":
/*!********************************************!*\
  !*** ./resources/assets/welcome/body.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<md-content class=\\\"view-cover\\\">\\n    <ui-view></ui-view>\\n</md-content>\\n\";\n\n//# sourceURL=webpack:///./resources/assets/welcome/body.html?");

/***/ }),

/***/ "./resources/assets/welcome/home/home.template.html":
/*!**********************************************************!*\
  !*** ./resources/assets/welcome/home/home.template.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"resources/assets/welcome/home/home.template.template\";\n\n//# sourceURL=webpack:///./resources/assets/welcome/home/home.template.html?");

/***/ }),

/***/ "./resources/assets/welcome/home/index.ts":
/*!************************************************!*\
  !*** ./resources/assets/welcome/home/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar module_1 = __importDefault(__webpack_require__(/*! ../module */ \"./resources/assets/welcome/module.ts\"));\r\nvar urls_1 = __webpack_require__(/*! ../urls */ \"./resources/assets/welcome/urls.ts\");\r\nmodule_1.default\r\n    .config([\r\n    '$stateProvider',\r\n    '$locationProvider',\r\n    function ($stateProvider, $locationProvider) {\r\n        $locationProvider.html5Mode(true);\r\n        $stateProvider\r\n            .state(\"home\", {\r\n            url: \"/\",\r\n            title: \"Welcome\",\r\n            templateUrl: __webpack_require__(/*! ./home.template.html */ \"./resources/assets/welcome/home/home.template.html\"),\r\n            resolve: {\r\n                logo_url: function () { return urls_1.storage_url(\"angular_laravel.jpg\"); }\r\n            }\r\n        });\r\n    }\r\n]);\r\n\n\n//# sourceURL=webpack:///./resources/assets/welcome/home/index.ts?");

/***/ }),

/***/ "./resources/assets/welcome/index.ts":
/*!*******************************************!*\
  !*** ./resources/assets/welcome/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar angular_1 = __importDefault(__webpack_require__(/*! angular */ \"./node_modules/angular/index.js\"));\r\nvar module_1 = __importDefault(__webpack_require__(/*! ./module */ \"./resources/assets/welcome/module.ts\"));\r\n__webpack_require__(/*! ./home */ \"./resources/assets/welcome/home/index.ts\");\r\ndocument.querySelector(\"body\").innerHTML = __webpack_require__(/*! ./body.html */ \"./resources/assets/welcome/body.html\");\r\nangular_1.default.bootstrap(document.querySelector(\"body\"), [module_1.default.name]);\r\n\n\n//# sourceURL=webpack:///./resources/assets/welcome/index.ts?");

/***/ }),

/***/ "./resources/assets/welcome/module.ts":
/*!********************************************!*\
  !*** ./resources/assets/welcome/module.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar angular_1 = __importDefault(__webpack_require__(/*! angular */ \"./node_modules/angular/index.js\"));\r\nvar angular_ui_router_1 = __importDefault(__webpack_require__(/*! angular-ui-router */ \"./node_modules/angular-ui-router/release/ui-router-angularjs.js\"));\r\nvar angular_material_1 = __importDefault(__webpack_require__(/*! angular-material */ \"./node_modules/angular-material/index.js\"));\r\nexports.module = angular_1.default.module($appName, [\r\n    angular_ui_router_1.default,\r\n    angular_material_1.default\r\n]);\r\nexports.default = exports.module;\r\n\n\n//# sourceURL=webpack:///./resources/assets/welcome/module.ts?");

/***/ }),

/***/ "./resources/assets/welcome/urls.ts":
/*!******************************************!*\
  !*** ./resources/assets/welcome/urls.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction storage_url(path) {\r\n    return $siteUrl + \"/storage/\" + path;\r\n}\r\nexports.storage_url = storage_url;\r\n\n\n//# sourceURL=webpack:///./resources/assets/welcome/urls.ts?");

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************************!*\
  !*** multi ./resources/assets/welcome/index.ts file-loader?name=style.css!extract-loader!css-loader!sass-loader!./resources/assets/welcome/index.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! F:\\htdocs\\github\\laravel-angular\\resources\\assets\\welcome\\index.ts */\"./resources/assets/welcome/index.ts\");\nmodule.exports = __webpack_require__(/*! !file-loader?name=style.css!extract-loader!css-loader!sass-loader!F:\\htdocs\\github\\laravel-angular\\resources\\assets\\welcome\\index.scss */\"./node_modules/file-loader/dist/cjs.js?name=style.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./resources/assets/welcome/index.scss\");\n\n\n//# sourceURL=webpack:///./resources/assets/welcome/index.scss?multi_./resources/assets/welcome/index.ts_file-loader?name=style.css!extract-loader!css-loader!sass-loader");

/***/ })

},[[0,"runtime","vendor"]]]);