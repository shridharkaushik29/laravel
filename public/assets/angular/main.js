(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@angular/core/fesm5 lazy recursive":
/*!****************************************************************!*\
  !*** ./node_modules/@angular/core/fesm5 lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyAsyncContext(req) {\n\t// Here Promise.resolve().then() is used instead of new Promise() to prevent\n\t// uncaught exception popping up in devtools\n\treturn Promise.resolve().then(function() {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t});\n}\nwebpackEmptyAsyncContext.keys = function() { return []; };\nwebpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;\nmodule.exports = webpackEmptyAsyncContext;\nwebpackEmptyAsyncContext.id = \"./node_modules/@angular/core/fesm5 lazy recursive\";\n\n//# sourceURL=webpack:///./node_modules/@angular/core/fesm5_lazy_namespace_object?");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=style.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./resources/assets/angular/index.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=style.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./resources/assets/angular/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"style.css\";\n\n//# sourceURL=webpack:///./resources/assets/angular/index.scss?./node_modules/file-loader/dist/cjs.js?name=style.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./resources/assets/angular/app.component/app.component.html":
/*!*******************************************************************!*\
  !*** ./resources/assets/angular/app.component/app.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"resources/assets/angular/app.component/app.component.template\";\n\n//# sourceURL=webpack:///./resources/assets/angular/app.component/app.component.html?");

/***/ }),

/***/ "./resources/assets/angular/app.component/app.component.ts":
/*!*****************************************************************!*\
  !*** ./resources/assets/angular/app.component/app.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar urls_1 = __webpack_require__(/*! ../../node_modules/urls */ \"./resources/assets/node_modules/urls.ts\");\r\nvar AppComponent = /** @class */ (function () {\r\n    function AppComponent() {\r\n        this.logos = [\r\n            {\r\n                url: urls_1.storage_url(\"angular.svg\")\r\n            }, {\r\n                url: urls_1.storage_url(\"react-logo.svg\"),\r\n                href: {\"APP_URL\":\"http://localhost:8000\"}.APP_URL + \"/react\"\r\n            }, {\r\n                url: urls_1.storage_url(\"vue-logo.svg\")\r\n            }\r\n        ];\r\n    }\r\n    AppComponent = __decorate([\r\n        core_1.Component({\r\n            templateUrl: __webpack_require__(/*! ./app.component.html */ \"./resources/assets/angular/app.component/app.component.html\"),\r\n            selector: \"#app\"\r\n        })\r\n    ], AppComponent);\r\n    return AppComponent;\r\n}());\r\nexports.AppComponent = AppComponent;\r\n\n\n//# sourceURL=webpack:///./resources/assets/angular/app.component/app.component.ts?");

/***/ }),

/***/ "./resources/assets/angular/app.module.ts":
/*!************************************************!*\
  !*** ./resources/assets/angular/app.module.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ \"./node_modules/@angular/platform-browser/fesm5/platform-browser.js\");\r\nvar flex_layout_1 = __webpack_require__(/*! @angular/flex-layout */ \"./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js\");\r\nvar material_1 = __webpack_require__(/*! @angular/material */ \"./node_modules/@angular/material/esm5/material.es5.js\");\r\nvar app_component_1 = __webpack_require__(/*! ./app.component/app.component */ \"./resources/assets/angular/app.component/app.component.ts\");\r\nvar AppModule = /** @class */ (function () {\r\n    function AppModule() {\r\n        document.querySelector(\".pre-loader\").remove();\r\n    }\r\n    AppModule = __decorate([\r\n        core_1.NgModule({\r\n            declarations: [\r\n                app_component_1.AppComponent\r\n            ],\r\n            bootstrap: [app_component_1.AppComponent],\r\n            imports: [\r\n                platform_browser_1.BrowserModule,\r\n                flex_layout_1.FlexLayoutModule,\r\n                material_1.MatCardModule,\r\n                material_1.MatButtonModule\r\n            ]\r\n        }),\r\n        __metadata(\"design:paramtypes\", [])\r\n    ], AppModule);\r\n    return AppModule;\r\n}());\r\nexports.AppModule = AppModule;\r\n\n\n//# sourceURL=webpack:///./resources/assets/angular/app.module.ts?");

/***/ }),

/***/ "./resources/assets/angular/index.ts":
/*!*******************************************!*\
  !*** ./resources/assets/angular/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! core-js */ \"./node_modules/core-js/index.js\");\r\n__webpack_require__(/*! zone.js */ \"./node_modules/zone.js/dist/zone.js\");\r\nvar platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ \"./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js\");\r\nvar app_module_1 = __webpack_require__(/*! ./app.module */ \"./resources/assets/angular/app.module.ts\");\r\nplatform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).catch(function (e) {\r\n    console.log(e);\r\n});\r\n\n\n//# sourceURL=webpack:///./resources/assets/angular/index.ts?");

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************************!*\
  !*** multi ./resources/assets/angular/index.ts file-loader?name=style.css!extract-loader!css-loader!sass-loader!./resources/assets/angular/index.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! F:\\htdocs\\github\\laravel-angular\\resources\\assets\\angular\\index.ts */\"./resources/assets/angular/index.ts\");\nmodule.exports = __webpack_require__(/*! !file-loader?name=style.css!extract-loader!css-loader!sass-loader!F:\\htdocs\\github\\laravel-angular\\resources\\assets\\angular\\index.scss */\"./node_modules/file-loader/dist/cjs.js?name=style.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./resources/assets/angular/index.scss\");\n\n\n//# sourceURL=webpack:///./resources/assets/angular/index.scss?multi_./resources/assets/angular/index.ts_file-loader?name=style.css!extract-loader!css-loader!sass-loader");

/***/ })

},[[0,"runtime","vendor"]]]);