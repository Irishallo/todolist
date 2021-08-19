/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n}\n\nnav {\n    background-color: rgb(219, 152, 202);\n    display: flex;\n    justify-content: space-between;\n}\n\n#addtodobtn {\n    background-color: rgb(219, 129, 197);\n    border: transparent;\n    align-self: center;\n    height: 100%;\n    padding: 0 10px;\n}\n\n#projectsbtn {\n    background-color: rgb(219, 129, 197);\n    border: transparent;\n    align-self: center;\n    height: 100%;\n    padding: 0 10px;\n}\n\n#projecttitle {\n    text-align: center;\n    align-self: center;\n}\n\n.checkmark {\n    background-color: rgb(236, 40, 138);\n    color: rgb(250, 250, 250);\n}\n\n.showtodotable {\n    border-collapse: collapse;\n    \n}\n\n.showtodotable2 {\n    border-collapse: collapse;\n}\n\ntd {\n    border: none;\n}\n\ntr td:last-child {\n    width: 1%;\n    white-space: nowrap;\n    padding: 0 5px;\n}\n\ntr td:first-child {\n    width: 1%;\n    white-space: nowrap;\n    padding: 0 5px;\n}\n\ntr td:nth-child(2) {\n    max-width: 98%;\n    padding: 0 5px;\n}\n\n.descriptionrow td {\n    white-space: normal;\n}\n\n.priority1 {\n    background-color: rgb(222, 247, 253);\n    border: none;\n}\n\n.priority2 {\n    background-color: rgb(210, 246, 255);\n}\n\n.priority3 {\n    background-color: rgb(198, 244, 255);\n}\n\n.priority4 {\n    background-color: rgb(172, 238, 255);\n}\n\n.priority5 {\n    background-color: rgb(138, 232, 255);\n}\n\n#createtodo {\n    background-color: rgb(241, 213, 234);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n#projectscontainer {\n    background-color: palevioletred;\n    height: 100%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n}\n\n/* For mobile phones: */\n@media only screen and (max-width: 600px) {\n    /* For tablets: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 50px;\n    }\n    \n    #projectsbtn {\n        font-size: 1.5em;\n    }\n    \n    #projecttitle {\n        font-size: 1.2em;\n    }\n    \n    .checkmark {\n        width: 25px;\n        height: 25px;\n    }\n    \n    td {\n        padding: 5px 15px;\n    }\n    \n    #createtodo {\n        width: 80vw;\n        height: 60vh;\n        margin-left: 10vw;\n        margin-top: 10vh;\n    }\n\n    #projectscontainer {\n        width: 33%;\n    }\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 67%;\n    }\n  }\n  \n  @media only screen and (min-width: 600px) {\n    /* For tablets: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #createtodo {\n        width: 30vw;\n        height: 60vh;\n        margin-left: 35vw;\n        margin-top: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 5em;\n    }\n\n    #projectsbtn {\n        font-size: 2em;\n    }\n    \n    #projecttitle {\n        font-size: 2em;\n    }\n\n    #projectscontainer {\n        width: 33%;\n    }\n\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 67%;\n    }\n  }\n  \n  @media only screen and (min-width: 768px) {\n    /* For desktop: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #createtodo {\n        width: 30vw;\n        height: 60vh;\n        margin-left: 35vw;\n        margin-top: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 70px;\n        line-height: 20px;\n    }\n\n    #projectsbtn {\n        font-size: 2em;\n    }\n    \n    #projecttitle {\n        font-size: 2em;\n    }\n\n    #projectscontainer {\n        width: 25%;\n    }\n\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 75%;\n    }\n  } ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;;AAE7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;IACpC,4EAA4E;AAChF;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,QAAQ;AACZ;;AAEA,uBAAuB;AACvB;IACI,iBAAiB;IACjB;QACI,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,iBAAiB;QACjB,gBAAgB;IACpB;;IAEA;QACI,UAAU;IACd;IACA;QACI,WAAW;IACf;;IAEA;QACI,UAAU;IACd;EACF;;EAEA;IACE,iBAAiB;IACjB;QACI,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,iBAAiB;QACjB,gBAAgB;IACpB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,UAAU;IACd;EACF;;EAEA;IACE,iBAAiB;IACjB;QACI,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,iBAAiB;QACjB,gBAAgB;IACpB;;IAEA;QACI,eAAe;QACf,iBAAiB;IACrB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,UAAU;IACd;EACF","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n}\n\nnav {\n    background-color: rgb(219, 152, 202);\n    display: flex;\n    justify-content: space-between;\n}\n\n#addtodobtn {\n    background-color: rgb(219, 129, 197);\n    border: transparent;\n    align-self: center;\n    height: 100%;\n    padding: 0 10px;\n}\n\n#projectsbtn {\n    background-color: rgb(219, 129, 197);\n    border: transparent;\n    align-self: center;\n    height: 100%;\n    padding: 0 10px;\n}\n\n#projecttitle {\n    text-align: center;\n    align-self: center;\n}\n\n.checkmark {\n    background-color: rgb(236, 40, 138);\n    color: rgb(250, 250, 250);\n}\n\n.showtodotable {\n    border-collapse: collapse;\n    \n}\n\n.showtodotable2 {\n    border-collapse: collapse;\n}\n\ntd {\n    border: none;\n}\n\ntr td:last-child {\n    width: 1%;\n    white-space: nowrap;\n    padding: 0 5px;\n}\n\ntr td:first-child {\n    width: 1%;\n    white-space: nowrap;\n    padding: 0 5px;\n}\n\ntr td:nth-child(2) {\n    max-width: 98%;\n    padding: 0 5px;\n}\n\n.descriptionrow td {\n    white-space: normal;\n}\n\n.priority1 {\n    background-color: rgb(222, 247, 253);\n    border: none;\n}\n\n.priority2 {\n    background-color: rgb(210, 246, 255);\n}\n\n.priority3 {\n    background-color: rgb(198, 244, 255);\n}\n\n.priority4 {\n    background-color: rgb(172, 238, 255);\n}\n\n.priority5 {\n    background-color: rgb(138, 232, 255);\n}\n\n#createtodo {\n    background-color: rgb(241, 213, 234);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n#projectscontainer {\n    background-color: palevioletred;\n    height: 100%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n}\n\n/* For mobile phones: */\n@media only screen and (max-width: 600px) {\n    /* For tablets: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 50px;\n    }\n    \n    #projectsbtn {\n        font-size: 1.5em;\n    }\n    \n    #projecttitle {\n        font-size: 1.2em;\n    }\n    \n    .checkmark {\n        width: 25px;\n        height: 25px;\n    }\n    \n    td {\n        padding: 5px 15px;\n    }\n    \n    #createtodo {\n        width: 80vw;\n        height: 60vh;\n        margin-left: 10vw;\n        margin-top: 10vh;\n    }\n\n    #projectscontainer {\n        width: 33%;\n    }\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 67%;\n    }\n  }\n  \n  @media only screen and (min-width: 600px) {\n    /* For tablets: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #createtodo {\n        width: 30vw;\n        height: 60vh;\n        margin-left: 35vw;\n        margin-top: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 5em;\n    }\n\n    #projectsbtn {\n        font-size: 2em;\n    }\n    \n    #projecttitle {\n        font-size: 2em;\n    }\n\n    #projectscontainer {\n        width: 33%;\n    }\n\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 67%;\n    }\n  }\n  \n  @media only screen and (min-width: 768px) {\n    /* For desktop: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #createtodo {\n        width: 30vw;\n        height: 60vh;\n        margin-left: 35vw;\n        margin-top: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 70px;\n        line-height: 20px;\n    }\n\n    #projectsbtn {\n        font-size: 2em;\n    }\n    \n    #projecttitle {\n        font-size: 2em;\n    }\n\n    #projectscontainer {\n        width: 25%;\n    }\n\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 75%;\n    }\n  } "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domnewtodo.js":
/*!***************************!*\
  !*** ./src/domnewtodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


const domToDo = () => {
    const contentDiv = document.getElementById('content');
    const toDoForm = document.createElement('form');
    toDoForm.setAttribute('id', 'createtodo');
    const toDoTable = document.createElement('table');
    const titleRow = document.createElement('tr');
    const titleTd1 = document.createElement('td');
    const titleTd2 = document.createElement('td');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'titlein');
    titleLabel.innerText = 'Title';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'titlein');
    titleInput.setAttribute('name', 'titlein');
    titleInput.setAttribute('type', 'text');
    const descriptionRow = document.createElement('tr');
    const descriptionTd1 = document.createElement('td');
    const descriptionTd2 = document.createElement('td');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'descriptionin');
    descriptionLabel.innerText = 'Description';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('id', 'descriptionin');
    descriptionInput.setAttribute('name', 'descriptionin');
    const dateRow = document.createElement('tr');
    const dateTd1 = document.createElement('td');
    const dateTd2 = document.createElement('td');
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'datein');
    dateLabel.innerText = 'Due Date';
    const dateInput = document.createElement('input');
    dateInput.setAttribute('id', 'datein');
    dateInput.setAttribute('type', 'date');
    const priorityRow = document.createElement('tr');
    const priorityTd1 = document.createElement('td');
    const priorityTd2 = document.createElement('td');
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priorityin');
    priorityLabel.innerText = 'Priority';
    const priorityInput = document.createElement('input');
    priorityInput.setAttribute('id', 'priorityin');
    priorityInput.setAttribute('type', 'number');
    priorityInput.setAttribute('min', '1');
    priorityInput.setAttribute('max', '5');
    priorityInput.setAttribute('value', '1');
    const projectsInput = document.createElement('select');
    projectsInput.setAttribute('id', 'projectsin');
    _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach(getProjectName);
    function getProjectName(_project, index) {
      for (const property in _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[index]) {
        const selectOption = document.createElement('option');
        selectOption.setAttribute('value', `${property}`);
        selectOption.innerText = `${property}`;
        projectsInput.appendChild(selectOption);
      }
    }
    
    
    const submitInput = document.createElement('input');
    submitInput.setAttribute('id', 'submitin');
    submitInput.setAttribute('type', 'button');
    submitInput.setAttribute('value', 'submit');
    
    titleTd1.appendChild(titleLabel);
    titleTd2.appendChild(titleInput);
    titleRow.appendChild(titleTd1);
    titleRow.appendChild(titleTd2);
    descriptionTd1.appendChild(descriptionLabel);
    descriptionTd2.appendChild(descriptionInput);
    descriptionRow.appendChild(descriptionTd1);
    descriptionRow.appendChild(descriptionTd2);
    dateTd1.appendChild(dateLabel);
    dateTd2.appendChild(dateInput);
    dateRow.appendChild(dateTd1);
    dateRow.appendChild(dateTd2);
    priorityTd1.appendChild(priorityLabel);
    priorityTd2.appendChild(priorityInput);
    priorityRow.appendChild(priorityTd1);
    priorityRow.appendChild(priorityTd2);

    toDoTable.appendChild(titleRow);
    toDoTable.appendChild(descriptionRow);
    toDoTable.appendChild(dateRow);
    toDoTable.appendChild(priorityRow);
    toDoForm.appendChild(toDoTable);
    toDoForm.appendChild(projectsInput);
    toDoForm.appendChild(submitInput);
    contentDiv.appendChild(toDoForm);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domToDo);

/***/ }),

/***/ "./src/domshowprojects.js":
/*!********************************!*\
  !*** ./src/domshowprojects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showProjects": () => (/* binding */ showProjects)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


const showProjects = () => {
  const projectsContainer = document.createElement('div');
  projectsContainer.setAttribute('id', 'projectscontainer');
  const DivToDo = document.getElementById('tododiv');
  const addNewProject = document.createElement('h2');
  addNewProject.setAttribute('id', 'addnewproject');
  addNewProject.innerText = '+ New Project';
  projectsContainer.appendChild(addNewProject);

  _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach(getProjectName);
    function getProjectName(_project, index) {
      for (const property in _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[index]) {
        const projectOption = document.createElement('h2');
        projectOption.innerText = `${property}`;
        projectsContainer.appendChild(projectOption);
      }
    }

    DivToDo.appendChild(projectsContainer);

    addNewProject.addEventListener('click', () => {
      const inputNewProject = document.createElement('input');
      inputNewProject.setAttribute('type', 'text');
      inputNewProject.setAttribute('value', 'new project');
      inputNewProject.setAttribute('id', 'newprojectinput');
      projectsContainer.appendChild(inputNewProject);
      const btnNewProject = document.createElement('button');
      btnNewProject.setAttribute('id', 'newprojectbtn');
      btnNewProject.innerText = 'Go';
      projectsContainer.appendChild(btnNewProject);

      inputNewProject.addEventListener("keyup", function(event) {
        if (event.code === 'Enter') {
         event.preventDefault();
         btnNewProject.click();
        }
      });

      btnNewProject.addEventListener('click', () => {
        const newProjectTitle = inputNewProject.value;
        const newProjectTxt = document.createElement('h2');
        newProjectTxt.innerText = newProjectTitle;
        projectsContainer.appendChild(newProjectTxt);
        projectsContainer.removeChild(inputNewProject);
        projectsContainer.removeChild(btnNewProject);
        // window[newProjectTitle] = [];
        // const newProjectObject = {newProjectTitle: window[newProjectTitle] = []};
        
        // allProjects.push(newProjectObject);
      })
    })
}

/***/ }),

/***/ "./src/domshowtodos.js":
/*!*****************************!*\
  !*** ./src/domshowtodos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showToDos": () => (/* binding */ showToDos)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


function showToDos () {
    const DivToDo = document.getElementById('tododiv');
    const tableToDo = document.createElement('table');
    tableToDo.classList.add("showtodotable");
    tableToDo.setAttribute('id', 'showtdtab');
    for (let i = (_projects__WEBPACK_IMPORTED_MODULE_0__.generalProject.length - 1); i < _projects__WEBPACK_IMPORTED_MODULE_0__.generalProject.length; i++) {
        const tableRow = document.createElement('tr');
        const td1 = document.createElement('td');
        const checkToDo = document.createElement('input');
        checkToDo.setAttribute('type', 'checkbox');
        checkToDo.classList.add('checkmark');
        const td2 = document.createElement('td');
        const titleToDo = document.createElement('p');
        titleToDo.classList.add('todotitle');
        titleToDo.innerText = _projects__WEBPACK_IMPORTED_MODULE_0__.generalProject[i].getTitle;
        const td3 = document.createElement('td');
        const dueDateToDo = document.createElement('p');
        dueDateToDo.innerText = _projects__WEBPACK_IMPORTED_MODULE_0__.generalProject[i].getDueDate;
        const tableRow2 = document.createElement('tr');
        tableRow2.classList.add('descriptionrow');
        const td4 = document.createElement('td');
        td4.setAttribute('colspan', '2');
        const descriptionToDo = document.createElement('p');
        descriptionToDo.innerText = _projects__WEBPACK_IMPORTED_MODULE_0__.generalProject[i].getDescription;
        const emptyTd = document.createElement('td');

        if(_projects__WEBPACK_IMPORTED_MODULE_0__.generalProject[i].getPriority == 1) {
          tableRow.classList.add('priority1');
          tableRow2.classList.add('priority1');
        } else if(_projects__WEBPACK_IMPORTED_MODULE_0__.generalProject[i].getPriority == 2) {
          tableRow.classList.add('priority2');
          tableRow2.classList.add('priority2');
        } else if(_projects__WEBPACK_IMPORTED_MODULE_0__.generalProject[i].getPriority == 3) {
          tableRow.classList.add('priority3');
          tableRow2.classList.add('priority3');
        } else if(_projects__WEBPACK_IMPORTED_MODULE_0__.generalProject[i].getPriority == 4) {
          tableRow.classList.add('priority4');
          tableRow2.classList.add('priority4');
        } else if(_projects__WEBPACK_IMPORTED_MODULE_0__.generalProject[i].getPriority == 5) {
          tableRow.classList.add('priority5');
          tableRow2.classList.add('priority5');
        } else {
          tableRow.classList.add('priority1');
          tableRow2.classList.add('priority1');
        }
        
        td1.appendChild(checkToDo);
        td2.appendChild(titleToDo);
        td3.appendChild(dueDateToDo);
        td4.appendChild(descriptionToDo);
        tableRow.appendChild(td1);
        tableRow.appendChild(td2);
        tableRow.appendChild(td3);
        tableRow2.appendChild(emptyTd);
        tableRow2.appendChild(td4);
        tableToDo.appendChild(tableRow);
        tableToDo.appendChild(tableRow2);
      } 
      DivToDo.appendChild(tableToDo);
}

/***/ }),

/***/ "./src/newtodo.js":
/*!************************!*\
  !*** ./src/newtodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toDoFactory = (title, description, duedate, priority) => {
    const getTitle = title;
    const getDescription = description;
    const getDueDate = duedate;
    const getPriority = priority;
    let Checked = 'no';
    return {getTitle, getDescription, getDueDate, getPriority, Checked}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoFactory);

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "generalProject": () => (/* binding */ generalProject)
/* harmony export */ });
const generalProject = [];
const allProjects = [{"generalProject": generalProject}];



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domnewtodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domnewtodo */ "./src/domnewtodo.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _newtodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newtodo */ "./src/newtodo.js");
/* harmony import */ var _domshowtodos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domshowtodos */ "./src/domshowtodos.js");
/* harmony import */ var _domshowprojects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domshowprojects */ "./src/domshowprojects.js");







console.log(_projects__WEBPACK_IMPORTED_MODULE_2__.allProjects);
let formHere = 'no';
const contentDiv = document.getElementById('content');
const navBar = document.createElement('nav');
const toDoDiv = document.createElement('div');
toDoDiv.setAttribute('id', 'tododiv');
const addToDoBtn = document.createElement('button');
addToDoBtn.innerText = '+';
addToDoBtn.setAttribute('id', 'addtodobtn');
const projectTitle = document.createElement('h1');
projectTitle.innerText = 'General Project';
projectTitle.setAttribute('id', 'projecttitle');
const projectsBtn = document.createElement('button');
projectsBtn.innerText = 'Projects';
projectsBtn.setAttribute('id', 'projectsbtn');

navBar.appendChild(addToDoBtn);
navBar.appendChild(projectTitle);
navBar.appendChild(projectsBtn);

contentDiv.appendChild(navBar);
contentDiv.appendChild(toDoDiv);

addToDoBtn.addEventListener('click', () => {
    let newToDoForm = document.getElementById('createtodo');
    if(!contentDiv.contains(newToDoForm)) {
        (0,_domnewtodo__WEBPACK_IMPORTED_MODULE_1__.default)();
        formHere = 'yes';
        submitToDo();
    } else {
        contentDiv.removeChild(newToDoForm);
        formHere = 'no';
    }
});

function submitToDo() {
    const submitBtn = document.getElementById('submitin');

    submitBtn.addEventListener('click' , () => {
        if(formHere == 'yes') {
        const titleText = document.getElementById('titlein');
        const descriptionText = document.getElementById('descriptionin');
        const dueDateText = document.getElementById('datein');
        const priorityText = document.getElementById('priorityin');
        window['todo' + (_projects__WEBPACK_IMPORTED_MODULE_2__.generalProject.length + 1)] = (0,_newtodo__WEBPACK_IMPORTED_MODULE_3__.default)(titleText.value, descriptionText.value, dueDateText.value, priorityText.value);
        console.log(window['todo' + (_projects__WEBPACK_IMPORTED_MODULE_2__.generalProject.length + 1)]);
        _projects__WEBPACK_IMPORTED_MODULE_2__.generalProject.push(window['todo' + (_projects__WEBPACK_IMPORTED_MODULE_2__.generalProject.length + 1)]);
        console.log(_projects__WEBPACK_IMPORTED_MODULE_2__.generalProject);
        contentDiv.removeChild(document.getElementById('createtodo'));
        formHere = 'no';
        (0,_domshowtodos__WEBPACK_IMPORTED_MODULE_4__.showToDos)();
        } else { return}
    })
}

projectsBtn.addEventListener('click', () => {
    const projectFolder = document.getElementById('projectscontainer');
    const showToDoTable = document.getElementById('showtdtab');
    if(toDoDiv.contains(projectFolder)) {
        toDoDiv.removeChild(projectFolder);
        console.log("projects folder is there");
        if(!showToDoTable == null){
            showToDoTable.classList.add('showtodotable');
            showToDoTable.classList.remove('showtodotable2');
        }
    } else {
        (0,_domshowprojects__WEBPACK_IMPORTED_MODULE_5__.showProjects)();
        console.log("projectfolder is not there");
        if(!showToDoTable == null){
            showToDoTable.classList.add('showtodotable2');
            showToDoTable.classList.remove('showtodotable');
        }
        
    }
}
);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb21uZXd0b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbXNob3dwcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb21zaG93dG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbmV3dG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsZ0JBQWdCLGlCQUFpQix5QkFBeUIsR0FBRyxTQUFTLDJDQUEyQyxvQkFBb0IscUNBQXFDLEdBQUcsaUJBQWlCLDJDQUEyQywwQkFBMEIseUJBQXlCLG1CQUFtQixzQkFBc0IsR0FBRyxrQkFBa0IsMkNBQTJDLDBCQUEwQix5QkFBeUIsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQix5QkFBeUIseUJBQXlCLEdBQUcsZ0JBQWdCLDBDQUEwQyxnQ0FBZ0MsR0FBRyxvQkFBb0IsZ0NBQWdDLFNBQVMscUJBQXFCLGdDQUFnQyxHQUFHLFFBQVEsbUJBQW1CLEdBQUcsc0JBQXNCLGdCQUFnQiwwQkFBMEIscUJBQXFCLEdBQUcsdUJBQXVCLGdCQUFnQiwwQkFBMEIscUJBQXFCLEdBQUcsd0JBQXdCLHFCQUFxQixxQkFBcUIsR0FBRyx3QkFBd0IsMEJBQTBCLEdBQUcsZ0JBQWdCLDJDQUEyQyxtQkFBbUIsR0FBRyxn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QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNERBQXFCLFNBQVMsaURBQVc7QUFDbEUscUNBQXFDLDREQUFxQjtBQUMxRCxRQUFRLDBEQUFtQixrQkFBa0IsNERBQXFCO0FBQ2xFLG9CQUFvQixxREFBYztBQUNsQztBQUNBO0FBQ0EsUUFBUSx3REFBUztBQUNqQixTQUFTLE9BQU87QUFDaEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFFBQVEsOERBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAxNTIsIDIwMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2FkZHRvZG9idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAxMjksIDE5Nyk7XFxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbiNwcm9qZWN0c2J0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDEyOSwgMTk3KTtcXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuXFxuI3Byb2plY3R0aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgNDAsIDEzOCk7XFxuICAgIGNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxufVxcblxcbi5zaG93dG9kb3RhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgXFxufVxcblxcbi5zaG93dG9kb3RhYmxlMiB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbnRkIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ciB0ZDpsYXN0LWNoaWxkIHtcXG4gICAgd2lkdGg6IDElO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxudHIgdGQ6Zmlyc3QtY2hpbGQge1xcbiAgICB3aWR0aDogMSU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG50ciB0ZDpudGgtY2hpbGQoMikge1xcbiAgICBtYXgtd2lkdGg6IDk4JTtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbnJvdyB0ZCB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcblxcbi5wcmlvcml0eTEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAyNDcsIDI1Myk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5MiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDI0NiwgMjU1KTtcXG59XFxuXFxuLnByaW9yaXR5MyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDI0NCwgMjU1KTtcXG59XFxuXFxuLnByaW9yaXR5NCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzIsIDIzOCwgMjU1KTtcXG59XFxuXFxuLnByaW9yaXR5NSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzgsIDIzMiwgMjU1KTtcXG59XFxuXFxuI2NyZWF0ZXRvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyMTMsIDIzNCk7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxufVxcblxcbiNwcm9qZWN0c2NvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMCU7XFxufVxcblxcbi8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLyogRm9yIHRhYmxldHM6ICovXFxuICAgIG5hdiB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIH1cXG4gICAgXFxuICAgICNhZGR0b2RvYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgI3Byb2plY3RzYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIH1cXG4gICAgXFxuICAgICNwcm9qZWN0dGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmNoZWNrbWFyayB7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgfVxcbiAgICBcXG4gICAgdGQge1xcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIH1cXG4gICAgXFxuICAgICNjcmVhdGV0b2RvIHtcXG4gICAgICAgIHdpZHRoOiA4MHZ3O1xcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwdnc7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2NvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMzMlO1xcbiAgICB9XFxuICAgIC5zaG93dG9kb3RhYmxlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc2hvd3RvZG90YWJsZTIge1xcbiAgICAgICAgd2lkdGg6IDY3JTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAgIC8qIEZvciB0YWJsZXRzOiAqL1xcbiAgICBuYXYge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xcbiAgICB9XFxuICAgIFxcbiAgICAjY3JlYXRldG9kbyB7XFxuICAgICAgICB3aWR0aDogMzB2dztcXG4gICAgICAgIGhlaWdodDogNjB2aDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXZ3O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcXG4gICAgfVxcbiAgICBcXG4gICAgI2FkZHRvZG9idG4ge1xcbiAgICAgICAgZm9udC1zaXplOiA1ZW07XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RzYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAjcHJvamVjdHRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2NvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMzMlO1xcbiAgICB9XFxuXFxuICAgIC5zaG93dG9kb3RhYmxlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc2hvd3RvZG90YWJsZTIge1xcbiAgICAgICAgd2lkdGg6IDY3JTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIEZvciBkZXNrdG9wOiAqL1xcbiAgICBuYXYge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xcbiAgICB9XFxuICAgIFxcbiAgICAjY3JlYXRldG9kbyB7XFxuICAgICAgICB3aWR0aDogMzB2dztcXG4gICAgICAgIGhlaWdodDogNjB2aDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXZ3O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcXG4gICAgfVxcbiAgICBcXG4gICAgI2FkZHRvZG9idG4ge1xcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RzYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAjcHJvamVjdHRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2NvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMjUlO1xcbiAgICB9XFxuXFxuICAgIC5zaG93dG9kb3RhYmxlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc2hvd3RvZG90YWJsZTIge1xcbiAgICAgICAgd2lkdGg6IDc1JTtcXG4gICAgfVxcbiAgfSBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtBQUNaOztBQUVBLHVCQUF1QjtBQUN2QjtJQUNJLGlCQUFpQjtJQUNqQjtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7RUFDRjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQjtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0VBQ0Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakI7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMTUyLCAyMDIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNhZGR0b2RvYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMTI5LCAxOTcpO1xcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdHNidG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAxMjksIDE5Nyk7XFxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbiNwcm9qZWN0dGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDQwLCAxMzgpO1xcbiAgICBjb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xcbn1cXG5cXG4uc2hvd3RvZG90YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIFxcbn1cXG5cXG4uc2hvd3RvZG90YWJsZTIge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG50ZCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudHIgdGQ6bGFzdC1jaGlsZCB7XFxuICAgIHdpZHRoOiAxJTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbnRyIHRkOmZpcnN0LWNoaWxkIHtcXG4gICAgd2lkdGg6IDElO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxudHIgdGQ6bnRoLWNoaWxkKDIpIHtcXG4gICAgbWF4LXdpZHRoOiA5OCU7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb25yb3cgdGQge1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG5cXG4ucHJpb3JpdHkxIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjQ3LCAyNTMpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eTIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyNDYsIDI1NSk7XFxufVxcblxcbi5wcmlvcml0eTMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyNDQsIDI1NSk7XFxufVxcblxcbi5wcmlvcml0eTQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLCAyMzgsIDI1NSk7XFxufVxcblxcbi5wcmlvcml0eTUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM4LCAyMzIsIDI1NSk7XFxufVxcblxcbiNjcmVhdGV0b2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjEzLCAyMzQpO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbn1cXG5cXG4jcHJvamVjdHNjb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMTAlO1xcbn1cXG5cXG4vKiBGb3IgbW9iaWxlIHBob25lczogKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC8qIEZvciB0YWJsZXRzOiAqL1xcbiAgICBuYXYge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xcbiAgICB9XFxuICAgIFxcbiAgICAjYWRkdG9kb2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgICNwcm9qZWN0c2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAjcHJvamVjdHRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5jaGVja21hcmsge1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIHRkIHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAjY3JlYXRldG9kbyB7XFxuICAgICAgICB3aWR0aDogODB2dztcXG4gICAgICAgIGhlaWdodDogNjB2aDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdHNjb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDMzJTtcXG4gICAgfVxcbiAgICAuc2hvd3RvZG90YWJsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNob3d0b2RvdGFibGUyIHtcXG4gICAgICAgIHdpZHRoOiA2NyU7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICAvKiBGb3IgdGFibGV0czogKi9cXG4gICAgbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMTB2aDtcXG4gICAgfVxcbiAgICBcXG4gICAgI2NyZWF0ZXRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDMwdnc7XFxuICAgICAgICBoZWlnaHQ6IDYwdmg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzV2dztcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XFxuICAgIH1cXG4gICAgXFxuICAgICNhZGR0b2RvYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNWVtO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgI3Byb2plY3R0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdHNjb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDMzJTtcXG4gICAgfVxcblxcbiAgICAuc2hvd3RvZG90YWJsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNob3d0b2RvdGFibGUyIHtcXG4gICAgICAgIHdpZHRoOiA2NyU7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAvKiBGb3IgZGVza3RvcDogKi9cXG4gICAgbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMTB2aDtcXG4gICAgfVxcbiAgICBcXG4gICAgI2NyZWF0ZXRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDMwdnc7XFxuICAgICAgICBoZWlnaHQ6IDYwdmg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzV2dztcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XFxuICAgIH1cXG4gICAgXFxuICAgICNhZGR0b2RvYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgI3Byb2plY3R0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdHNjb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDI1JTtcXG4gICAgfVxcblxcbiAgICAuc2hvd3RvZG90YWJsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNob3d0b2RvdGFibGUyIHtcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxuICAgIH1cXG4gIH0gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFsbFByb2plY3RzLCBnZW5lcmFsUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IGRvbVRvRG8gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdG9Eb0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGV0b2RvJyk7XG4gICAgY29uc3QgdG9Eb1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICBjb25zdCB0aXRsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgdGl0bGVUZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHRpdGxlVGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlaW4nKTtcbiAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZSc7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlaW4nKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZWluJyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25UZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb25pbicpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb25pbicpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uaW4nKTtcbiAgICBjb25zdCBkYXRlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBkYXRlVGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBkYXRlVGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYXRlaW4nKTtcbiAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlJztcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGVpbicpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBwcmlvcml0eVRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgcHJpb3JpdHlUZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHlpbicpO1xuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5JztcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHlpbicpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCAnMScpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdtYXgnLCAnNScpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcxJyk7XG4gICAgY29uc3QgcHJvamVjdHNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByb2plY3RzSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0c2luJyk7XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaChnZXRQcm9qZWN0TmFtZSk7XG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdE5hbWUoX3Byb2plY3QsIGluZGV4KSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGFsbFByb2plY3RzW2luZGV4XSkge1xuICAgICAgICBjb25zdCBzZWxlY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgc2VsZWN0T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHtwcm9wZXJ0eX1gKTtcbiAgICAgICAgc2VsZWN0T3B0aW9uLmlubmVyVGV4dCA9IGAke3Byb3BlcnR5fWA7XG4gICAgICAgIHByb2plY3RzSW5wdXQuYXBwZW5kQ2hpbGQoc2VsZWN0T3B0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAgY29uc3Qgc3VibWl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0aW4nKTtcbiAgICBzdWJtaXRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgc3VibWl0SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdzdWJtaXQnKTtcbiAgICBcbiAgICB0aXRsZVRkMS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICB0aXRsZVRkMi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICB0aXRsZVJvdy5hcHBlbmRDaGlsZCh0aXRsZVRkMSk7XG4gICAgdGl0bGVSb3cuYXBwZW5kQ2hpbGQodGl0bGVUZDIpO1xuICAgIGRlc2NyaXB0aW9uVGQxLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgIGRlc2NyaXB0aW9uVGQyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgIGRlc2NyaXB0aW9uUm93LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGQxKTtcbiAgICBkZXNjcmlwdGlvblJvdy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRkMik7XG4gICAgZGF0ZVRkMS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGRhdGVUZDIuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICBkYXRlUm93LmFwcGVuZENoaWxkKGRhdGVUZDEpO1xuICAgIGRhdGVSb3cuYXBwZW5kQ2hpbGQoZGF0ZVRkMik7XG4gICAgcHJpb3JpdHlUZDEuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgcHJpb3JpdHlUZDIuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gICAgcHJpb3JpdHlSb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHlUZDEpO1xuICAgIHByaW9yaXR5Um93LmFwcGVuZENoaWxkKHByaW9yaXR5VGQyKTtcblxuICAgIHRvRG9UYWJsZS5hcHBlbmRDaGlsZCh0aXRsZVJvdyk7XG4gICAgdG9Eb1RhYmxlLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUm93KTtcbiAgICB0b0RvVGFibGUuYXBwZW5kQ2hpbGQoZGF0ZVJvdyk7XG4gICAgdG9Eb1RhYmxlLmFwcGVuZENoaWxkKHByaW9yaXR5Um93KTtcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZCh0b0RvVGFibGUpO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHByb2plY3RzSW5wdXQpO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdElucHV0KTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRvRG9Gb3JtKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVG9EbzsiLCJpbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmV4cG9ydCBjb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHNjb250YWluZXInKTtcbiAgY29uc3QgRGl2VG9EbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvZGl2Jyk7XG4gIGNvbnN0IGFkZE5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBhZGROZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkbmV3cHJvamVjdCcpO1xuICBhZGROZXdQcm9qZWN0LmlubmVyVGV4dCA9ICcrIE5ldyBQcm9qZWN0JztcbiAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdCk7XG5cbiAgYWxsUHJvamVjdHMuZm9yRWFjaChnZXRQcm9qZWN0TmFtZSk7XG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdE5hbWUoX3Byb2plY3QsIGluZGV4KSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGFsbFByb2plY3RzW2luZGV4XSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi5pbm5lclRleHQgPSBgJHtwcm9wZXJ0eX1gO1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBEaXZUb0RvLmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKTtcblxuICAgIGFkZE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dE5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgaW5wdXROZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICBpbnB1dE5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCd2YWx1ZScsICduZXcgcHJvamVjdCcpO1xuICAgICAgaW5wdXROZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3cHJvamVjdGlucHV0Jyk7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dE5ld1Byb2plY3QpO1xuICAgICAgY29uc3QgYnRuTmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnRuTmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld3Byb2plY3RidG4nKTtcbiAgICAgIGJ0bk5ld1Byb2plY3QuaW5uZXJUZXh0ID0gJ0dvJztcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bk5ld1Byb2plY3QpO1xuXG4gICAgICBpbnB1dE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgYnRuTmV3UHJvamVjdC5jbGljaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgYnRuTmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gaW5wdXROZXdQcm9qZWN0LnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0VHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgbmV3UHJvamVjdFR4dC5pbm5lclRleHQgPSBuZXdQcm9qZWN0VGl0bGU7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUeHQpO1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChpbnB1dE5ld1Byb2plY3QpO1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChidG5OZXdQcm9qZWN0KTtcbiAgICAgICAgLy8gd2luZG93W25ld1Byb2plY3RUaXRsZV0gPSBbXTtcbiAgICAgICAgLy8gY29uc3QgbmV3UHJvamVjdE9iamVjdCA9IHtuZXdQcm9qZWN0VGl0bGU6IHdpbmRvd1tuZXdQcm9qZWN0VGl0bGVdID0gW119O1xuICAgICAgICBcbiAgICAgICAgLy8gYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0T2JqZWN0KTtcbiAgICAgIH0pXG4gICAgfSlcbn0iLCJpbXBvcnQgeyBnZW5lcmFsUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93VG9Eb3MgKCkge1xuICAgIGNvbnN0IERpdlRvRG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb2RpdicpO1xuICAgIGNvbnN0IHRhYmxlVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgdGFibGVUb0RvLmNsYXNzTGlzdC5hZGQoXCJzaG93dG9kb3RhYmxlXCIpO1xuICAgIHRhYmxlVG9Eby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nob3d0ZHRhYicpO1xuICAgIGZvciAobGV0IGkgPSAoZ2VuZXJhbFByb2plY3QubGVuZ3RoIC0gMSk7IGkgPCBnZW5lcmFsUHJvamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIGNvbnN0IHRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrVG9Eby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgY2hlY2tUb0RvLmNsYXNzTGlzdC5hZGQoJ2NoZWNrbWFyaycpO1xuICAgICAgICBjb25zdCB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBjb25zdCB0aXRsZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpdGxlVG9Eby5jbGFzc0xpc3QuYWRkKCd0b2RvdGl0bGUnKTtcbiAgICAgICAgdGl0bGVUb0RvLmlubmVyVGV4dCA9IGdlbmVyYWxQcm9qZWN0W2ldLmdldFRpdGxlO1xuICAgICAgICBjb25zdCB0ZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBjb25zdCBkdWVEYXRlVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZHVlRGF0ZVRvRG8uaW5uZXJUZXh0ID0gZ2VuZXJhbFByb2plY3RbaV0uZ2V0RHVlRGF0ZTtcbiAgICAgICAgY29uc3QgdGFibGVSb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgdGFibGVSb3cyLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9ucm93Jyk7XG4gICAgICAgIGNvbnN0IHRkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHRkNC5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvblRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uVG9Eby5pbm5lclRleHQgPSBnZW5lcmFsUHJvamVjdFtpXS5nZXREZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgZW1wdHlUZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cbiAgICAgICAgaWYoZ2VuZXJhbFByb2plY3RbaV0uZ2V0UHJpb3JpdHkgPT0gMSkge1xuICAgICAgICAgIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5MScpO1xuICAgICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTEnKTtcbiAgICAgICAgfSBlbHNlIGlmKGdlbmVyYWxQcm9qZWN0W2ldLmdldFByaW9yaXR5ID09IDIpIHtcbiAgICAgICAgICB0YWJsZVJvdy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTInKTtcbiAgICAgICAgICB0YWJsZVJvdzIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHkyJyk7XG4gICAgICAgIH0gZWxzZSBpZihnZW5lcmFsUHJvamVjdFtpXS5nZXRQcmlvcml0eSA9PSAzKSB7XG4gICAgICAgICAgdGFibGVSb3cuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHkzJyk7XG4gICAgICAgICAgdGFibGVSb3cyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5MycpO1xuICAgICAgICB9IGVsc2UgaWYoZ2VuZXJhbFByb2plY3RbaV0uZ2V0UHJpb3JpdHkgPT0gNCkge1xuICAgICAgICAgIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5NCcpO1xuICAgICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTQnKTtcbiAgICAgICAgfSBlbHNlIGlmKGdlbmVyYWxQcm9qZWN0W2ldLmdldFByaW9yaXR5ID09IDUpIHtcbiAgICAgICAgICB0YWJsZVJvdy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTUnKTtcbiAgICAgICAgICB0YWJsZVJvdzIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHk1Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFibGVSb3cuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHkxJyk7XG4gICAgICAgICAgdGFibGVSb3cyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5MScpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0ZDEuYXBwZW5kQ2hpbGQoY2hlY2tUb0RvKTtcbiAgICAgICAgdGQyLmFwcGVuZENoaWxkKHRpdGxlVG9Ebyk7XG4gICAgICAgIHRkMy5hcHBlbmRDaGlsZChkdWVEYXRlVG9Ebyk7XG4gICAgICAgIHRkNC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRvRG8pO1xuICAgICAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0ZDEpO1xuICAgICAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0ZDIpO1xuICAgICAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0ZDMpO1xuICAgICAgICB0YWJsZVJvdzIuYXBwZW5kQ2hpbGQoZW1wdHlUZCk7XG4gICAgICAgIHRhYmxlUm93Mi5hcHBlbmRDaGlsZCh0ZDQpO1xuICAgICAgICB0YWJsZVRvRG8uYXBwZW5kQ2hpbGQodGFibGVSb3cpO1xuICAgICAgICB0YWJsZVRvRG8uYXBwZW5kQ2hpbGQodGFibGVSb3cyKTtcbiAgICAgIH0gXG4gICAgICBEaXZUb0RvLmFwcGVuZENoaWxkKHRhYmxlVG9Ebyk7XG59IiwiY29uc3QgdG9Eb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IGdldFRpdGxlID0gdGl0bGU7XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBjb25zdCBnZXREdWVEYXRlID0gZHVlZGF0ZTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIGxldCBDaGVja2VkID0gJ25vJztcbiAgICByZXR1cm4ge2dldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIENoZWNrZWR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvRG9GYWN0b3J5OyIsImNvbnN0IGdlbmVyYWxQcm9qZWN0ID0gW107XG5jb25zdCBhbGxQcm9qZWN0cyA9IFt7XCJnZW5lcmFsUHJvamVjdFwiOiBnZW5lcmFsUHJvamVjdH1dO1xuXG5leHBvcnQge1xuICAgIGFsbFByb2plY3RzLFxuICAgIGdlbmVyYWxQcm9qZWN0XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGRvbVRvRG8gZnJvbSAnLi9kb21uZXd0b2RvJztcbmltcG9ydCB7YWxsUHJvamVjdHMsIGdlbmVyYWxQcm9qZWN0fSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCB0b0RvRmFjdG9yeSBmcm9tICcuL25ld3RvZG8nO1xuaW1wb3J0IHsgc2hvd1RvRG9zIH0gZnJvbSAnLi9kb21zaG93dG9kb3MnO1xuaW1wb3J0IHsgc2hvd1Byb2plY3RzIH0gZnJvbSAnLi9kb21zaG93cHJvamVjdHMnO1xuXG5jb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG5sZXQgZm9ybUhlcmUgPSAnbm8nO1xuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbmNvbnN0IHRvRG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRvRG9EaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvZGl2Jyk7XG5jb25zdCBhZGRUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hZGRUb0RvQnRuLmlubmVyVGV4dCA9ICcrJztcbmFkZFRvRG9CdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGR0b2RvYnRuJyk7XG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xucHJvamVjdFRpdGxlLmlubmVyVGV4dCA9ICdHZW5lcmFsIFByb2plY3QnO1xucHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHRpdGxlJyk7XG5jb25zdCBwcm9qZWN0c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xucHJvamVjdHNCdG4uaW5uZXJUZXh0ID0gJ1Byb2plY3RzJztcbnByb2plY3RzQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHNidG4nKTtcblxubmF2QmFyLmFwcGVuZENoaWxkKGFkZFRvRG9CdG4pO1xubmF2QmFyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5uYXZCYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNCdG4pO1xuXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKG5hdkJhcik7XG5jb250ZW50RGl2LmFwcGVuZENoaWxkKHRvRG9EaXYpO1xuXG5hZGRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxldCBuZXdUb0RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGV0b2RvJyk7XG4gICAgaWYoIWNvbnRlbnREaXYuY29udGFpbnMobmV3VG9Eb0Zvcm0pKSB7XG4gICAgICAgIGRvbVRvRG8oKTtcbiAgICAgICAgZm9ybUhlcmUgPSAneWVzJztcbiAgICAgICAgc3VibWl0VG9EbygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQobmV3VG9Eb0Zvcm0pO1xuICAgICAgICBmb3JtSGVyZSA9ICdubyc7XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIHN1Ym1pdFRvRG8oKSB7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdGluJyk7XG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKCkgPT4ge1xuICAgICAgICBpZihmb3JtSGVyZSA9PSAneWVzJykge1xuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVpbicpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25pbicpO1xuICAgICAgICBjb25zdCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlaW4nKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5aW4nKTtcbiAgICAgICAgd2luZG93Wyd0b2RvJyArIChnZW5lcmFsUHJvamVjdC5sZW5ndGggKyAxKV0gPSB0b0RvRmFjdG9yeSh0aXRsZVRleHQudmFsdWUsIGRlc2NyaXB0aW9uVGV4dC52YWx1ZSwgZHVlRGF0ZVRleHQudmFsdWUsIHByaW9yaXR5VGV4dC52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvd1sndG9kbycgKyAoZ2VuZXJhbFByb2plY3QubGVuZ3RoICsgMSldKTtcbiAgICAgICAgZ2VuZXJhbFByb2plY3QucHVzaCh3aW5kb3dbJ3RvZG8nICsgKGdlbmVyYWxQcm9qZWN0Lmxlbmd0aCArIDEpXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGdlbmVyYWxQcm9qZWN0KTtcbiAgICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRldG9kbycpKTtcbiAgICAgICAgZm9ybUhlcmUgPSAnbm8nO1xuICAgICAgICBzaG93VG9Eb3MoKTtcbiAgICAgICAgfSBlbHNlIHsgcmV0dXJufVxuICAgIH0pXG59XG5cbnByb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RGb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNjb250YWluZXInKTtcbiAgICBjb25zdCBzaG93VG9Eb1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3d0ZHRhYicpO1xuICAgIGlmKHRvRG9EaXYuY29udGFpbnMocHJvamVjdEZvbGRlcikpIHtcbiAgICAgICAgdG9Eb0Rpdi5yZW1vdmVDaGlsZChwcm9qZWN0Rm9sZGVyKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0cyBmb2xkZXIgaXMgdGhlcmVcIik7XG4gICAgICAgIGlmKCFzaG93VG9Eb1RhYmxlID09IG51bGwpe1xuICAgICAgICAgICAgc2hvd1RvRG9UYWJsZS5jbGFzc0xpc3QuYWRkKCdzaG93dG9kb3RhYmxlJyk7XG4gICAgICAgICAgICBzaG93VG9Eb1RhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3d0b2RvdGFibGUyJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBzaG93UHJvamVjdHMoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0Zm9sZGVyIGlzIG5vdCB0aGVyZVwiKTtcbiAgICAgICAgaWYoIXNob3dUb0RvVGFibGUgPT0gbnVsbCl7XG4gICAgICAgICAgICBzaG93VG9Eb1RhYmxlLmNsYXNzTGlzdC5hZGQoJ3Nob3d0b2RvdGFibGUyJyk7XG4gICAgICAgICAgICBzaG93VG9Eb1RhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3d0b2RvdGFibGUnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG4pO1xuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==