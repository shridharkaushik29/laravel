(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/file-loader/dist/cjs.js?name=style.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./resources/assets/react/index.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=style.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./resources/assets/react/index.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"style.css\";\n\n//# sourceURL=webpack:///./resources/assets/react/index.scss?./node_modules/file-loader/dist/cjs.js?name=style.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./resources/assets/react/AppComponent.tsx":
/*!*************************************************!*\
  !*** ./resources/assets/react/AppComponent.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar urls_1 = __webpack_require__(/*! ../node_modules/urls */ \"./resources/assets/node_modules/urls.ts\");\r\nvar Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\"));\r\nvar Button_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\"));\r\nvar Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\"));\r\nvar MuiThemeProvider_1 = __importDefault(__webpack_require__(/*! @material-ui/core/styles/MuiThemeProvider */ \"./node_modules/@material-ui/core/styles/MuiThemeProvider.js\"));\r\nvar theme_1 = __webpack_require__(/*! ./theme */ \"./resources/assets/react/theme.ts\");\r\nvar react_feather_1 = __webpack_require__(/*! react-feather */ \"./node_modules/react-feather/dist/index.js\");\r\nvar AppComponent = /** @class */ (function (_super) {\r\n    __extends(AppComponent, _super);\r\n    function AppComponent(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.state = {\r\n            images: [\r\n                {\r\n                    title: \"AngularJS\",\r\n                    url: urls_1.storage_url(\"angularjs-logo.svg\"),\r\n                    href: {\"APP_URL\":\"http://localhost:8000\"}.APP_URL\r\n                }, {\r\n                    title: \"React\",\r\n                    url: urls_1.storage_url(\"react-logo.svg\"),\r\n                    href: {\"APP_URL\":\"http://localhost:8000\"}.APP_URL + \"/react\"\r\n                }, {\r\n                    title: \"Angular\",\r\n                    url: urls_1.storage_url(\"angular-logo.png\"),\r\n                    href: {\"APP_URL\":\"http://localhost:8000\"}.APP_URL + \"/angular\"\r\n                }\r\n            ]\r\n        };\r\n        $(\".pre-loader\").remove();\r\n        return _this;\r\n    }\r\n    AppComponent.prototype.render = function () {\r\n        var images = this.state.images;\r\n        return React.createElement(MuiThemeProvider_1.default, { theme: theme_1.theme },\r\n            React.createElement(Grid_1.default, { className: \"view-cover\", container: true, justify: \"center\", alignItems: \"center\" },\r\n                React.createElement(Grid_1.default, { xs: 12, md: 8, item: true, container: true, className: \"w-100\" }, images.map(function (image) {\r\n                    return React.createElement(Grid_1.default, { item: true, xs: 6, md: true, className: \"p-4\", key: image.url },\r\n                        React.createElement(\"a\", { href: image.href },\r\n                            React.createElement(\"img\", { className: \"w-100\", src: image.url, alt: image.title, title: image.title })));\r\n                })),\r\n                React.createElement(Grid_1.default, { xs: 12, sm: 11, md: 6, direction: \"column\", alignItems: \"center\" },\r\n                    React.createElement(Typography_1.default, { variant: \"h3\", className: \"title text-center\" }, \"Laravel\"),\r\n                    React.createElement(\"h4\", { className: \"mb-3 text-center\" }, \"with the Power of React, Material UI and Webpack\"),\r\n                    React.createElement(Grid_1.default, { container: true, justify: \"center\" },\r\n                        React.createElement(Button_1.default, { target: \"_new\", href: \"https://laravel.com/docs\" }, \"Laravel Documentation\"),\r\n                        React.createElement(Button_1.default, { target: \"_new\", href: \"https://github.com/shridharkaushik29/laravel\" },\r\n                            React.createElement(react_feather_1.GitHub, { size: 15, className: \"mr-1\" }),\r\n                            \"GitHub\")))));\r\n    };\r\n    return AppComponent;\r\n}(React.Component));\r\nexports.AppComponent = AppComponent;\r\n\n\n//# sourceURL=webpack:///./resources/assets/react/AppComponent.tsx?");

/***/ }),

/***/ "./resources/assets/react/index.ts":
/*!*****************************************!*\
  !*** ./resources/assets/react/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! script-loader!jquery */ \"./node_modules/script-loader/index.js!./node_modules/jquery/dist/jquery.js\");\r\nvar react_dom_1 = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\r\nvar AppComponent_1 = __webpack_require__(/*! ./AppComponent */ \"./resources/assets/react/AppComponent.tsx\");\r\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nreact_dom_1.render(React.createElement(AppComponent_1.AppComponent), document.querySelector(\"#app\"));\r\n\n\n//# sourceURL=webpack:///./resources/assets/react/index.ts?");

/***/ }),

/***/ "./resources/assets/react/theme.ts":
/*!*****************************************!*\
  !*** ./resources/assets/react/theme.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar createMuiTheme_1 = __importDefault(__webpack_require__(/*! @material-ui/core/styles/createMuiTheme */ \"./node_modules/@material-ui/core/styles/createMuiTheme.js\"));\r\nexports.theme = createMuiTheme_1.default({\r\n    typography: {\r\n        fontFamily: \"Raleway\"\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./resources/assets/react/theme.ts?");

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************!*\
  !*** multi ./resources/assets/react/index.ts file-loader?name=style.css!extract-loader!css-loader!sass-loader!./resources/assets/react/index.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! F:\\htdocs\\github\\laravel-angular\\resources\\assets\\react\\index.ts */\"./resources/assets/react/index.ts\");\nmodule.exports = __webpack_require__(/*! !file-loader?name=style.css!extract-loader!css-loader!sass-loader!F:\\htdocs\\github\\laravel-angular\\resources\\assets\\react\\index.scss */\"./node_modules/file-loader/dist/cjs.js?name=style.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./resources/assets/react/index.scss\");\n\n\n//# sourceURL=webpack:///./resources/assets/react/index.scss?multi_./resources/assets/react/index.ts_file-loader?name=style.css!extract-loader!css-loader!sass-loader");

/***/ })

},[[0,"runtime","vendor"]]]);