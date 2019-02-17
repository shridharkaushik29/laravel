(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/file-loader/dist/cjs.js?name=style.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./resources/assets/angularjs/index.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=style.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./resources/assets/angularjs/index.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"style.css\";\n\n//# sourceURL=webpack:///./resources/assets/angularjs/index.scss?./node_modules/file-loader/dist/cjs.js?name=style.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./resources/assets/angularjs/body.html":
/*!**********************************************!*\
  !*** ./resources/assets/angularjs/body.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<md-content class=\\\"view-cover\\\">\\n    <ui-view></ui-view>\\n</md-content>\\n\";\n\n//# sourceURL=webpack:///./resources/assets/angularjs/body.html?");

/***/ }),

/***/ "./resources/assets/angularjs/config.ts":
/*!**********************************************!*\
  !*** ./resources/assets/angularjs/config.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar module_1 = __importDefault(__webpack_require__(/*! ./module */ \"./resources/assets/angularjs/module.ts\"));\r\nmodule_1.default.config([\r\n    '$stateProvider',\r\n    '$urlRouterProvider',\r\n    function ($stateProvider, $urlRouterProvider) {\r\n        $urlRouterProvider.otherwise(\"/\");\r\n    }\r\n]);\r\n\n\n//# sourceURL=webpack:///./resources/assets/angularjs/config.ts?");

/***/ }),

/***/ "./resources/assets/angularjs/home/home.template.html":
/*!************************************************************!*\
  !*** ./resources/assets/angularjs/home/home.template.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"resources/assets/angularjs/home/home.template.template\";\n\n//# sourceURL=webpack:///./resources/assets/angularjs/home/home.template.html?");

/***/ }),

/***/ "./resources/assets/angularjs/home/index.ts":
/*!**************************************************!*\
  !*** ./resources/assets/angularjs/home/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar module_1 = __importDefault(__webpack_require__(/*! ../module */ \"./resources/assets/angularjs/module.ts\"));\r\nvar urls_1 = __webpack_require__(/*! urls */ \"./resources/assets/node_modules/urls.ts\");\r\nmodule_1.default\r\n    .config([\r\n    '$stateProvider',\r\n    function ($stateProvider) {\r\n        $stateProvider\r\n            .state(\"home\", {\r\n            url: \"/\",\r\n            templateUrl: __webpack_require__(/*! ./home.template.html */ \"./resources/assets/angularjs/home/home.template.html\"),\r\n            resolve: {\r\n                logo_url: function () { return urls_1.storage_url(\"angular_laravel.jpg\"); }\r\n            },\r\n            controllerAs: \"ctrl\",\r\n            controller: /** @class */ (function () {\r\n                function class_1() {\r\n                    this.logos = [\r\n                        {\r\n                            url: urls_1.storage_url(\"angular.svg\")\r\n                        }, {\r\n                            url: urls_1.storage_url(\"react-logo.svg\"),\r\n                            href: {\"APP_URL\":\"http://localhost:8000\"}.APP_URL + \"/react\"\r\n                        }, {\r\n                            url: urls_1.storage_url(\"vue-logo.svg\")\r\n                        }\r\n                    ];\r\n                }\r\n                return class_1;\r\n            }())\r\n        });\r\n    }\r\n]);\r\n\n\n//# sourceURL=webpack:///./resources/assets/angularjs/home/index.ts?");

/***/ }),

/***/ "./resources/assets/angularjs/index.ts":
/*!*********************************************!*\
  !*** ./resources/assets/angularjs/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar angular_1 = __importDefault(__webpack_require__(/*! angular */ \"./node_modules/angular/index.js\"));\r\nvar module_1 = __importDefault(__webpack_require__(/*! ./module */ \"./resources/assets/angularjs/module.ts\"));\r\n__webpack_require__(/*! ./config */ \"./resources/assets/angularjs/config.ts\");\r\n__webpack_require__(/*! ./home */ \"./resources/assets/angularjs/home/index.ts\");\r\ndocument.querySelector(\"#app\").innerHTML = __webpack_require__(/*! ./body.html */ \"./resources/assets/angularjs/body.html\");\r\nangular_1.default.bootstrap(document.querySelector(\"html\"), [module_1.default.name]);\r\n\n\n//# sourceURL=webpack:///./resources/assets/angularjs/index.ts?");

/***/ }),

/***/ "./resources/assets/angularjs/module.ts":
/*!**********************************************!*\
  !*** ./resources/assets/angularjs/module.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar angular_1 = __importDefault(__webpack_require__(/*! angular */ \"./node_modules/angular/index.js\"));\r\nvar angular_ui_router_1 = __importDefault(__webpack_require__(/*! angular-ui-router */ \"./node_modules/angular-ui-router/release/ui-router-angularjs.js\"));\r\nvar angular_material_1 = __importDefault(__webpack_require__(/*! angular-material */ \"./node_modules/angular-material/index.js\"));\r\nexports.module = angular_1.default.module($appName, [\r\n    angular_ui_router_1.default,\r\n    angular_material_1.default\r\n]);\r\nexports.module.run([\r\n    \"$rootScope\",\r\n    \"$timeout\",\r\n    function ($rootScope, $timeout) {\r\n        $rootScope.showPreloader = true;\r\n        $timeout(function () {\r\n            $rootScope.showPreloader = false;\r\n        }, 2000);\r\n    }\r\n]);\r\nexports.default = exports.module;\r\n\n\n//# sourceURL=webpack:///./resources/assets/angularjs/module.ts?");

/***/ }),

/***/ 0:
/*!************************************************************************************************************************************************************!*\
  !*** multi ./resources/assets/angularjs/index.ts file-loader?name=style.css!extract-loader!css-loader!sass-loader!./resources/assets/angularjs/index.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! F:\\htdocs\\github\\laravel-angular\\resources\\assets\\angularjs\\index.ts */\"./resources/assets/angularjs/index.ts\");\nmodule.exports = __webpack_require__(/*! !file-loader?name=style.css!extract-loader!css-loader!sass-loader!F:\\htdocs\\github\\laravel-angular\\resources\\assets\\angularjs\\index.scss */\"./node_modules/file-loader/dist/cjs.js?name=style.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./resources/assets/angularjs/index.scss\");\n\n\n//# sourceURL=webpack:///./resources/assets/angularjs/index.scss?multi_./resources/assets/angularjs/index.ts_file-loader?name=style.css!extract-loader!css-loader!sass-loader");

/***/ })

},[[0,"runtime","vendor"]]]);