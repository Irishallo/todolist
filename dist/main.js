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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n}\n\nnav {\n    background-color: rgb(219, 152, 202);\n    display: flex;\n    justify-content: space-between;\n}\n\n#addtodobtn {\n    background-color: rgb(219, 129, 197);\n    border: transparent;\n    align-self: center;\n    height: 100%;\n    padding: 0 10px;\n}\n\n#projectsbtn {\n    background-color: rgb(219, 129, 197);\n    border: transparent;\n    align-self: center;\n    height: 100%;\n    padding: 0 10px;\n}\n\n#projecttitle {\n    text-align: center;\n    align-self: center;\n}\n\n.checkmark {\n    background-color: rgb(236, 40, 138);\n    color: rgb(250, 250, 250);\n}\n\n.showtodotable {\n    border-collapse: collapse;\n    \n}\n\n.showtodotable2 {\n    border-collapse: collapse;\n}\n\ntd {\n    border: none;\n}\n\ntr td:last-child {\n    width: 1%;\n    white-space: nowrap;\n    padding: 0 5px;\n}\n\ntr td:first-child {\n    width: 1%;\n    white-space: nowrap;\n    padding: 0 5px;\n}\n\ntr td:nth-child(2) {\n    max-width: 98%;\n    padding: 0 5px;\n}\n\n.descriptionrow {\n    display: none;\n}\n\n.descriptionrowopen {\n    white-space: inherit;\n}\n\n.collapsible {\n    background-color: transparent;\n    border: transparent;\n}\n\n.collapsible:after {\n    content: '\\02795'; /* Unicode character for \"plus\" sign (+) */\n    font-size: 13px;\n    margin-left: 5px;\n  }\n  \n  .active:after {\n    content: \"\\2796\"; /* Unicode character for \"minus\" sign (-) */\n  }\n\n.priority1 {\n    background-color: rgb(222, 247, 253);\n    border: none;\n}\n\n.priority2 {\n    background-color: rgb(210, 246, 255);\n}\n\n.priority3 {\n    background-color: rgb(198, 244, 255);\n}\n\n.priority4 {\n    background-color: rgb(172, 238, 255);\n}\n\n.priority5 {\n    background-color: rgb(138, 232, 255);\n}\n\n#createtodo {\n    background-color: rgb(241, 213, 234);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n#projectscontainer {\n    background-color: palevioletred;\n    height: 100%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n}\n\n/* For mobile phones: */\n@media only screen and (max-width: 600px) {\n    /* For tablets: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 50px;\n    }\n    \n    #projectsbtn {\n        font-size: 1.5em;\n    }\n    \n    #projecttitle {\n        font-size: 1.2em;\n    }\n    \n    .checkmark {\n        width: 25px;\n        height: 25px;\n    }\n    \n    td {\n        padding: 5px 15px;\n    }\n    \n    #createtodo {\n        width: 80vw;\n        height: 60vh;\n        margin-left: 10vw;\n        margin-top: 10vh;\n    }\n\n    #projectscontainer {\n        width: 33%;\n    }\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 67%;\n    }\n  }\n  \n  @media only screen and (min-width: 600px) {\n    /* For tablets: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #createtodo {\n        width: 30vw;\n        height: 60vh;\n        margin-left: 35vw;\n        margin-top: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 5em;\n    }\n\n    #projectsbtn {\n        font-size: 2em;\n    }\n    \n    #projecttitle {\n        font-size: 2em;\n    }\n\n    #projectscontainer {\n        width: 33%;\n    }\n\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 67%;\n    }\n  }\n  \n  @media only screen and (min-width: 768px) {\n    /* For desktop: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #createtodo {\n        width: 30vw;\n        height: 60vh;\n        margin-left: 35vw;\n        margin-top: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 70px;\n        line-height: 20px;\n    }\n\n    #projectsbtn {\n        font-size: 2em;\n    }\n    \n    #projecttitle {\n        font-size: 2em;\n    }\n\n    #projectscontainer {\n        width: 25%;\n    }\n\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 75%;\n    }\n  } ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;;AAE7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,iBAAiB,EAAE,0CAA0C;IAC7D,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,gBAAgB,EAAE,2CAA2C;EAC/D;;AAEF;IACI,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;IACpC,4EAA4E;AAChF;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,QAAQ;AACZ;;AAEA,uBAAuB;AACvB;IACI,iBAAiB;IACjB;QACI,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,iBAAiB;QACjB,gBAAgB;IACpB;;IAEA;QACI,UAAU;IACd;IACA;QACI,WAAW;IACf;;IAEA;QACI,UAAU;IACd;EACF;;EAEA;IACE,iBAAiB;IACjB;QACI,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,iBAAiB;QACjB,gBAAgB;IACpB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,UAAU;IACd;EACF;;EAEA;IACE,iBAAiB;IACjB;QACI,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,iBAAiB;QACjB,gBAAgB;IACpB;;IAEA;QACI,eAAe;QACf,iBAAiB;IACrB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,UAAU;IACd;EACF","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n}\n\nnav {\n    background-color: rgb(219, 152, 202);\n    display: flex;\n    justify-content: space-between;\n}\n\n#addtodobtn {\n    background-color: rgb(219, 129, 197);\n    border: transparent;\n    align-self: center;\n    height: 100%;\n    padding: 0 10px;\n}\n\n#projectsbtn {\n    background-color: rgb(219, 129, 197);\n    border: transparent;\n    align-self: center;\n    height: 100%;\n    padding: 0 10px;\n}\n\n#projecttitle {\n    text-align: center;\n    align-self: center;\n}\n\n.checkmark {\n    background-color: rgb(236, 40, 138);\n    color: rgb(250, 250, 250);\n}\n\n.showtodotable {\n    border-collapse: collapse;\n    \n}\n\n.showtodotable2 {\n    border-collapse: collapse;\n}\n\ntd {\n    border: none;\n}\n\ntr td:last-child {\n    width: 1%;\n    white-space: nowrap;\n    padding: 0 5px;\n}\n\ntr td:first-child {\n    width: 1%;\n    white-space: nowrap;\n    padding: 0 5px;\n}\n\ntr td:nth-child(2) {\n    max-width: 98%;\n    padding: 0 5px;\n}\n\n.descriptionrow {\n    display: none;\n}\n\n.descriptionrowopen {\n    white-space: inherit;\n}\n\n.collapsible {\n    background-color: transparent;\n    border: transparent;\n}\n\n.collapsible:after {\n    content: '\\02795'; /* Unicode character for \"plus\" sign (+) */\n    font-size: 13px;\n    margin-left: 5px;\n  }\n  \n  .active:after {\n    content: \"\\2796\"; /* Unicode character for \"minus\" sign (-) */\n  }\n\n.priority1 {\n    background-color: rgb(222, 247, 253);\n    border: none;\n}\n\n.priority2 {\n    background-color: rgb(210, 246, 255);\n}\n\n.priority3 {\n    background-color: rgb(198, 244, 255);\n}\n\n.priority4 {\n    background-color: rgb(172, 238, 255);\n}\n\n.priority5 {\n    background-color: rgb(138, 232, 255);\n}\n\n#createtodo {\n    background-color: rgb(241, 213, 234);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n#projectscontainer {\n    background-color: palevioletred;\n    height: 100%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n}\n\n/* For mobile phones: */\n@media only screen and (max-width: 600px) {\n    /* For tablets: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 50px;\n    }\n    \n    #projectsbtn {\n        font-size: 1.5em;\n    }\n    \n    #projecttitle {\n        font-size: 1.2em;\n    }\n    \n    .checkmark {\n        width: 25px;\n        height: 25px;\n    }\n    \n    td {\n        padding: 5px 15px;\n    }\n    \n    #createtodo {\n        width: 80vw;\n        height: 60vh;\n        margin-left: 10vw;\n        margin-top: 10vh;\n    }\n\n    #projectscontainer {\n        width: 33%;\n    }\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 67%;\n    }\n  }\n  \n  @media only screen and (min-width: 600px) {\n    /* For tablets: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #createtodo {\n        width: 30vw;\n        height: 60vh;\n        margin-left: 35vw;\n        margin-top: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 5em;\n    }\n\n    #projectsbtn {\n        font-size: 2em;\n    }\n    \n    #projecttitle {\n        font-size: 2em;\n    }\n\n    #projectscontainer {\n        width: 33%;\n    }\n\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 67%;\n    }\n  }\n  \n  @media only screen and (min-width: 768px) {\n    /* For desktop: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #createtodo {\n        width: 30vw;\n        height: 60vh;\n        margin-left: 35vw;\n        margin-top: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 70px;\n        line-height: 20px;\n    }\n\n    #projectsbtn {\n        font-size: 2em;\n    }\n    \n    #projecttitle {\n        font-size: 2em;\n    }\n\n    #projectscontainer {\n        width: 25%;\n    }\n\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 75%;\n    }\n  } "],"sourceRoot":""}]);
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
/* harmony export */   "toDoEvent": () => (/* binding */ toDoEvent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _newtodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newtodo */ "./src/newtodo.js");
/* harmony import */ var _domshowtodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domshowtodos */ "./src/domshowtodos.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/index.js");





const contentDiv = document.getElementById('content');
let formHere = 'no';

// create todo form
const domToDo = () => {
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
      const selectOption = document.createElement('option');
      selectOption.setAttribute('value', `${_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[index].getTitle}`);
      selectOption.innerText = `${_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[index].getTitle}`;
      projectsInput.appendChild(selectOption);
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

// when to do button is clicked
const toDoEvent = () => {
  let newToDoForm = document.getElementById('createtodo');
  const projectsBanner = document.getElementById('projectscontainer');
  if(!contentDiv.contains(newToDoForm)) {
      domToDo();
      formHere = 'yes';
      submitToDo();

      if(projectsBanner == null) {
          console.log("no projecstfolder");
      } else {
          console.log("removing the projectsfolder");
          projectsBanner.innerHTML = "";
          ___WEBPACK_IMPORTED_MODULE_3__.toDoDiv.removeChild(projectsBanner);
      }
  } else {
      contentDiv.removeChild(newToDoForm);
      formHere = 'no';
  }
}

// submit the new todo
function submitToDo() {
  const submitBtn = document.getElementById('submitin');

  submitBtn.addEventListener('click' , () => {
      if(formHere == 'yes') {
      const titleText = document.getElementById('titlein');
      const descriptionText = document.getElementById('descriptionin');
      const dueDateText = document.getElementById('datein');
      const priorityText = document.getElementById('priorityin');
      const projectChoice = document.getElementById('projectsin').value;

      _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects.find(pushToDo);

      function pushToDo(_project, index) {
          if(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[index].getTitle == projectChoice) {
              console.log("we have a match");
              console.log(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[index].getArray);
              _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[index].getArray.push((0,_newtodo__WEBPACK_IMPORTED_MODULE_1__.toDoFactory)(titleText.value, descriptionText.value, dueDateText.value, priorityText.value));
              console.log(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects);
          }
      };

      contentDiv.removeChild(document.getElementById('createtodo'));
      formHere = 'no';
      (0,_domshowtodos__WEBPACK_IMPORTED_MODULE_2__.showToDos)();
      } else { return}
  })
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
/* harmony export */   "showProjects": () => (/* binding */ showProjects),
/* harmony export */   "projectEvent": () => (/* binding */ projectEvent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



// general variables
const projectsContainer = document.createElement('div');
projectsContainer.setAttribute('id', 'projectscontainer');

// showing the projects in the project folder + adding new projects
const showProjects = () => {
  const DivToDo = document.getElementById('tododiv');
  const addNewProject = document.createElement('h2');
  addNewProject.setAttribute('id', 'addnewproject');
  addNewProject.innerText = '+ New Project';
  projectsContainer.appendChild(addNewProject);

  _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects.forEach(getProjectName);
    function getProjectName(_project, index) {
      const projectOption = document.createElement('h2');
      projectOption.innerText = `${_projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[index].getTitle}`;
      projectsContainer.appendChild(projectOption);
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
        window[newProjectTitle] = [];
        
        _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects.push((0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectFactory)(newProjectTitle, window[newProjectTitle] = []));
      })
    })
}

// clicking the projects button
const projectEvent = () => {
  const showToDoTable = document.getElementById('showtdtab');
  const formNewToDO = document.getElementById('createtodo');
  if(___WEBPACK_IMPORTED_MODULE_0__.toDoDiv.contains(projectsContainer)) {
    projectsContainer.innerHTML = "";
      ___WEBPACK_IMPORTED_MODULE_0__.toDoDiv.removeChild(projectsContainer);
      console.log("projects folder is there");
      if(!showToDoTable == null){
          showToDoTable.classList.add('showtodotable');
          showToDoTable.classList.remove('showtodotable2');
      }
  } else {
      showProjects();
      console.log("projectfolder is not there");
      console.log(formNewToDO);
      if(!showToDoTable == null){
          showToDoTable.classList.add('showtodotable2');
          showToDoTable.classList.remove('showtodotable');
      } else {
          console.log('no table');
      };

      if(formNewToDO == null) {
          console.log('form no');
          
      } else {
          console.log('yes form');
          ___WEBPACK_IMPORTED_MODULE_0__.contentDiv.removeChild(formNewToDO);
      };
      
  }
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
        const td5 = document.createElement('td');
        const collapseBtn = document.createElement('button');
        collapseBtn.classList.add('collapsible');
        const tableRow2 = document.createElement('tr');
        tableRow2.classList.add('descriptionrow');
        const td4 = document.createElement('td');
        td4.setAttribute('colspan', '3');
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
        td5.appendChild(collapseBtn);
        tableRow.appendChild(td1);
        tableRow.appendChild(td2);
        tableRow.appendChild(td3);
        tableRow.appendChild(td5);
        tableRow2.appendChild(emptyTd);
        tableRow2.appendChild(td4);
        tableToDo.appendChild(tableRow);
        tableToDo.appendChild(tableRow2);
      } 
      DivToDo.appendChild(tableToDo);

      let coll = document.getElementsByClassName("collapsible");
      let i;
      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          let content = this.parentNode.parentNode.nextElementSibling;
          if (content.classList.contains("descriptionrowopen") ) {
            content.classList.add("descriptionrow");
            content.classList.remove("descriptionrowopen");
          } else {
            content.classList.add("descriptionrowopen");
            content.classList.remove("descriptionrow");
          }
        });
      }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentDiv": () => (/* binding */ contentDiv),
/* harmony export */   "toDoDiv": () => (/* binding */ toDoDiv),
/* harmony export */   "projectTitle": () => (/* binding */ projectTitle)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domnewtodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domnewtodo */ "./src/domnewtodo.js");
/* harmony import */ var _domshowprojects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domshowprojects */ "./src/domshowprojects.js");




// general layout and variables

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

// eventlisteners

//add to do +

addToDoBtn.addEventListener('click', _domnewtodo__WEBPACK_IMPORTED_MODULE_1__.toDoEvent);

// show projects list

projectsBtn.addEventListener('click', _domshowprojects__WEBPACK_IMPORTED_MODULE_2__.projectEvent);





/***/ }),

/***/ "./src/newtodo.js":
/*!************************!*\
  !*** ./src/newtodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoFactory": () => (/* binding */ toDoFactory)
/* harmony export */ });
const toDoFactory = (title, description, duedate, priority) => {
    const getTitle = title;
    const getDescription = description;
    const getDueDate = duedate;
    const getPriority = priority;
    let Checked = 'no';
    return {getTitle, getDescription, getDueDate, getPriority, Checked}
}


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "generalProject": () => (/* binding */ generalProject),
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory)
/* harmony export */ });
const generalProject = [];
const allProjects = [];

const projectFactory = (title, array) => {
    const getTitle = title;
    const getArray = array;
    return {getTitle, getArray}
}

const generalPrObject = projectFactory('generalProject', generalProject);

allProjects.push(generalPrObject);



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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb21uZXd0b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbXNob3dwcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb21zaG93dG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbmV3dG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGdCQUFnQixpQkFBaUIseUJBQXlCLEdBQUcsU0FBUywyQ0FBMkMsb0JBQW9CLHFDQUFxQyxHQUFHLGlCQUFpQiwyQ0FBMkMsMEJBQTBCLHlCQUF5QixtQkFBbUIsc0JBQXNCLEdBQUcsa0JBQWtCLDJDQUEyQywwQkFBMEIseUJBQXlCLG1CQUFtQixzQkFBc0IsR0FBRyxtQkFBbUIseUJBQXlCLHlCQUF5QixHQUFHLGdCQUFnQiwwQ0FBMEMsZ0NBQWdDLEdBQUcsb0JBQW9CLGdDQUFnQyxTQUFTLHFCQUFxQixnQ0FBZ0MsR0FBRyxRQUFRLG1CQUFtQixHQUFHLHNCQUFzQixnQkFBZ0IsMEJBQTBCLHFCQUFxQixHQUFHLHVCQUF1QixnQkFBZ0IsMEJBQTBCLHFCQUFxQixHQUFHLHdCQUF3QixxQkFBcUIscUJBQXFCLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLHlCQUF5QiwyQkFBMkIsR0FBRyxrQkFBa0Isb0NBQW9DLDBCQUEwQixHQUFHLHdCQUF3Qix5QkFBeUIsb0VBQW9FLHVCQUF1QixLQUFLLHVCQUF1QiwwQkFBMEIsb0RBQW9ELGdCQUFnQiwyQ0FBMkMsbUJBQW1CLEdBQUcsZ0JBQWdCLDJDQUEyQyxHQUFHLGdCQUFnQiwyQ0FBMkMsR0FBRyxnQkFBZ0IsMkNBQTJDLEdBQUcsZ0JBQWdCLDJDQUEyQyxHQUFHLGlCQUFpQiwyQ0FBMkMsbUZBQW1GLEdBQUcsd0JBQXdCLHNDQUFzQyxtQkFBbUIseUJBQXlCLGVBQWUsZUFBZSxHQUFHLHlFQUF5RSxtQ0FBbUMsdUJBQXVCLHVCQUF1QixPQUFPLHlCQUF5QiwwQkFBMEIsT0FBTywwQkFBMEIsMkJBQTJCLE9BQU8sMkJBQTJCLDJCQUEyQixPQUFPLHdCQUF3QixzQkFBc0IsdUJBQXVCLE9BQU8sZ0JBQWdCLDRCQUE0QixPQUFPLHlCQUF5QixzQkFBc0IsdUJBQXVCLDRCQUE0QiwyQkFBMkIsT0FBTyw0QkFBNEIscUJBQXFCLE9BQU8sc0JBQXNCLHNCQUFzQixPQUFPLDZCQUE2QixxQkFBcUIsT0FBTyxLQUFLLG1EQUFtRCxtQ0FBbUMsdUJBQXVCLHVCQUF1QixPQUFPLHlCQUF5QixzQkFBc0IsdUJBQXVCLDRCQUE0QiwyQkFBMkIsT0FBTyx5QkFBeUIseUJBQXlCLE9BQU8sc0JBQXNCLHlCQUF5QixPQUFPLDJCQUEyQix5QkFBeUIsT0FBTyw0QkFBNEIscUJBQXFCLE9BQU8sd0JBQXdCLHNCQUFzQixPQUFPLDZCQUE2QixxQkFBcUIsT0FBTyxLQUFLLG1EQUFtRCxtQ0FBbUMsdUJBQXVCLHVCQUF1QixPQUFPLHlCQUF5QixzQkFBc0IsdUJBQXVCLDRCQUE0QiwyQkFBMkIsT0FBTyx5QkFBeUIsMEJBQTBCLDRCQUE0QixPQUFPLHNCQUFzQix5QkFBeUIsT0FBTywyQkFBMkIseUJBQXlCLE9BQU8sNEJBQTRCLHFCQUFxQixPQUFPLHdCQUF3QixzQkFBc0IsT0FBTyw2QkFBNkIscUJBQXFCLE9BQU8sS0FBSyxRQUFRLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssd0JBQXdCLFdBQVcsWUFBWSxPQUFPLEtBQUssd0JBQXdCLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxVQUFVLFVBQVUsT0FBTyxL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V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbm5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDE1MiwgMjAyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jYWRkdG9kb2J0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDEyOSwgMTk3KTtcXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuXFxuI3Byb2plY3RzYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMTI5LCAxOTcpO1xcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdHRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCA0MCwgMTM4KTtcXG4gICAgY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG59XFxuXFxuLnNob3d0b2RvdGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBcXG59XFxuXFxuLnNob3d0b2RvdGFibGUyIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxudGQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRyIHRkOmxhc3QtY2hpbGQge1xcbiAgICB3aWR0aDogMSU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG50ciB0ZDpmaXJzdC1jaGlsZCB7XFxuICAgIHdpZHRoOiAxJTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbnRyIHRkOm50aC1jaGlsZCgyKSB7XFxuICAgIG1heC13aWR0aDogOTglO1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9ucm93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9ucm93b3BlbiB7XFxuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xcbn1cXG5cXG4uY29sbGFwc2libGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNvbGxhcHNpYmxlOmFmdGVyIHtcXG4gICAgY29udGVudDogJ1xcXFwwMjc5NSc7IC8qIFVuaWNvZGUgY2hhcmFjdGVyIGZvciBcXFwicGx1c1xcXCIgc2lnbiAoKykgKi9cXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgfVxcbiAgXFxuICAuYWN0aXZlOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwyNzk2XFxcIjsgLyogVW5pY29kZSBjaGFyYWN0ZXIgZm9yIFxcXCJtaW51c1xcXCIgc2lnbiAoLSkgKi9cXG4gIH1cXG5cXG4ucHJpb3JpdHkxIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjQ3LCAyNTMpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eTIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyNDYsIDI1NSk7XFxufVxcblxcbi5wcmlvcml0eTMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyNDQsIDI1NSk7XFxufVxcblxcbi5wcmlvcml0eTQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLCAyMzgsIDI1NSk7XFxufVxcblxcbi5wcmlvcml0eTUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM4LCAyMzIsIDI1NSk7XFxufVxcblxcbiNjcmVhdGV0b2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjEzLCAyMzQpO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbn1cXG5cXG4jcHJvamVjdHNjb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMTAlO1xcbn1cXG5cXG4vKiBGb3IgbW9iaWxlIHBob25lczogKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC8qIEZvciB0YWJsZXRzOiAqL1xcbiAgICBuYXYge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xcbiAgICB9XFxuICAgIFxcbiAgICAjYWRkdG9kb2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgICNwcm9qZWN0c2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAjcHJvamVjdHRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5jaGVja21hcmsge1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIHRkIHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAjY3JlYXRldG9kbyB7XFxuICAgICAgICB3aWR0aDogODB2dztcXG4gICAgICAgIGhlaWdodDogNjB2aDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdHNjb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDMzJTtcXG4gICAgfVxcbiAgICAuc2hvd3RvZG90YWJsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNob3d0b2RvdGFibGUyIHtcXG4gICAgICAgIHdpZHRoOiA2NyU7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICAvKiBGb3IgdGFibGV0czogKi9cXG4gICAgbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMTB2aDtcXG4gICAgfVxcbiAgICBcXG4gICAgI2NyZWF0ZXRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDMwdnc7XFxuICAgICAgICBoZWlnaHQ6IDYwdmg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzV2dztcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XFxuICAgIH1cXG4gICAgXFxuICAgICNhZGR0b2RvYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNWVtO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgI3Byb2plY3R0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdHNjb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDMzJTtcXG4gICAgfVxcblxcbiAgICAuc2hvd3RvZG90YWJsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNob3d0b2RvdGFibGUyIHtcXG4gICAgICAgIHdpZHRoOiA2NyU7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAvKiBGb3IgZGVza3RvcDogKi9cXG4gICAgbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMTB2aDtcXG4gICAgfVxcbiAgICBcXG4gICAgI2NyZWF0ZXRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDMwdnc7XFxuICAgICAgICBoZWlnaHQ6IDYwdmg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzV2dztcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XFxuICAgIH1cXG4gICAgXFxuICAgICNhZGR0b2RvYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgI3Byb2plY3R0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdHNjb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDI1JTtcXG4gICAgfVxcblxcbiAgICAuc2hvd3RvZG90YWJsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNob3d0b2RvdGFibGUyIHtcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxuICAgIH1cXG4gIH0gXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUIsRUFBRSwwQ0FBMEM7SUFDN0QsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQixFQUFFLDJDQUEyQztFQUMvRDs7QUFFRjtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0FBQ1o7O0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksaUJBQWlCO0lBQ2pCO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtFQUNGOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7RUFDRjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQjtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAxNTIsIDIwMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2FkZHRvZG9idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAxMjksIDE5Nyk7XFxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbiNwcm9qZWN0c2J0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDEyOSwgMTk3KTtcXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuXFxuI3Byb2plY3R0aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgNDAsIDEzOCk7XFxuICAgIGNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxufVxcblxcbi5zaG93dG9kb3RhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgXFxufVxcblxcbi5zaG93dG9kb3RhYmxlMiB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbnRkIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ciB0ZDpsYXN0LWNoaWxkIHtcXG4gICAgd2lkdGg6IDElO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxudHIgdGQ6Zmlyc3QtY2hpbGQge1xcbiAgICB3aWR0aDogMSU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG50ciB0ZDpudGgtY2hpbGQoMikge1xcbiAgICBtYXgtd2lkdGg6IDk4JTtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbnJvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kZXNjcmlwdGlvbnJvd29wZW4ge1xcbiAgICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcXG59XFxuXFxuLmNvbGxhcHNpYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jb2xsYXBzaWJsZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMDI3OTUnOyAvKiBVbmljb2RlIGNoYXJhY3RlciBmb3IgXFxcInBsdXNcXFwiIHNpZ24gKCspICovXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIH1cXG4gIFxcbiAgLmFjdGl2ZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjc5NlxcXCI7IC8qIFVuaWNvZGUgY2hhcmFjdGVyIGZvciBcXFwibWludXNcXFwiIHNpZ24gKC0pICovXFxuICB9XFxuXFxuLnByaW9yaXR5MSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDI0NywgMjUzKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHkyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjQ2LCAyNTUpO1xcbn1cXG5cXG4ucHJpb3JpdHkzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OCwgMjQ0LCAyNTUpO1xcbn1cXG5cXG4ucHJpb3JpdHk0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MiwgMjM4LCAyNTUpO1xcbn1cXG5cXG4ucHJpb3JpdHk1IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOCwgMjMyLCAyNTUpO1xcbn1cXG5cXG4jY3JlYXRldG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIxMywgMjM0KTtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG59XFxuXFxuI3Byb2plY3RzY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXZpb2xldHJlZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDEwJTtcXG59XFxuXFxuLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAvKiBGb3IgdGFibGV0czogKi9cXG4gICAgbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMTB2aDtcXG4gICAgfVxcbiAgICBcXG4gICAgI2FkZHRvZG9idG4ge1xcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAjcHJvamVjdHNidG4ge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgI3Byb2plY3R0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAuY2hlY2ttYXJrIHtcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB9XFxuICAgIFxcbiAgICB0ZCB7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgfVxcbiAgICBcXG4gICAgI2NyZWF0ZXRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDgwdnc7XFxuICAgICAgICBoZWlnaHQ6IDYwdmg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTB2dztcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RzY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAzMyU7XFxuICAgIH1cXG4gICAgLnNob3d0b2RvdGFibGUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5zaG93dG9kb3RhYmxlMiB7XFxuICAgICAgICB3aWR0aDogNjclO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gICAgLyogRm9yIHRhYmxldHM6ICovXFxuICAgIG5hdiB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIH1cXG4gICAgXFxuICAgICNjcmVhdGV0b2RvIHtcXG4gICAgICAgIHdpZHRoOiAzMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1dnc7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xcbiAgICB9XFxuICAgIFxcbiAgICAjYWRkdG9kb2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDVlbTtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdHNidG4ge1xcbiAgICAgICAgZm9udC1zaXplOiAyZW07XFxuICAgIH1cXG4gICAgXFxuICAgICNwcm9qZWN0dGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAyZW07XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RzY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAzMyU7XFxuICAgIH1cXG5cXG4gICAgLnNob3d0b2RvdGFibGUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5zaG93dG9kb3RhYmxlMiB7XFxuICAgICAgICB3aWR0aDogNjclO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLyogRm9yIGRlc2t0b3A6ICovXFxuICAgIG5hdiB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIH1cXG4gICAgXFxuICAgICNjcmVhdGV0b2RvIHtcXG4gICAgICAgIHdpZHRoOiAzMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1dnc7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xcbiAgICB9XFxuICAgIFxcbiAgICAjYWRkdG9kb2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDcwcHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdHNidG4ge1xcbiAgICAgICAgZm9udC1zaXplOiAyZW07XFxuICAgIH1cXG4gICAgXFxuICAgICNwcm9qZWN0dGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAyZW07XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RzY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAyNSU7XFxuICAgIH1cXG5cXG4gICAgLnNob3d0b2RvdGFibGUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5zaG93dG9kb3RhYmxlMiB7XFxuICAgICAgICB3aWR0aDogNzUlO1xcbiAgICB9XFxuICB9IFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhbGxQcm9qZWN0c30gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IHRvRG9GYWN0b3J5IH0gZnJvbSBcIi4vbmV3dG9kb1wiO1xuaW1wb3J0IHsgc2hvd1RvRG9zIH0gZnJvbSBcIi4vZG9tc2hvd3RvZG9zXCI7XG5pbXBvcnQgeyB0b0RvRGl2IH0gZnJvbSBcIi5cIjtcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5sZXQgZm9ybUhlcmUgPSAnbm8nO1xuXG4vLyBjcmVhdGUgdG9kbyBmb3JtXG5jb25zdCBkb21Ub0RvID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvRG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvRG9Gb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3JlYXRldG9kbycpO1xuICAgIGNvbnN0IHRvRG9UYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgY29uc3QgdGl0bGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IHRpdGxlVGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCB0aXRsZVRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZWluJyk7XG4gICAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSAnVGl0bGUnO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZWluJyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGVpbicpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25UZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uaW4nKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbic7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uaW4nKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbmluJyk7XG4gICAgY29uc3QgZGF0ZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgZGF0ZVRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgZGF0ZVRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGF0ZWluJyk7XG4gICAgZGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWUgRGF0ZSc7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlaW4nKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgcHJpb3JpdHlUZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHByaW9yaXR5VGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5aW4nKTtcbiAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5aW4nKTtcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgJzEnKTtcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbWF4JywgJzUnKTtcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnMScpO1xuICAgIGNvbnN0IHByb2plY3RzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcm9qZWN0c0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHNpbicpO1xuICAgIGFsbFByb2plY3RzLmZvckVhY2goZ2V0UHJvamVjdE5hbWUpO1xuICAgIGZ1bmN0aW9uIGdldFByb2plY3ROYW1lKF9wcm9qZWN0LCBpbmRleCkge1xuICAgICAgY29uc3Qgc2VsZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBzZWxlY3RPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke2FsbFByb2plY3RzW2luZGV4XS5nZXRUaXRsZX1gKTtcbiAgICAgIHNlbGVjdE9wdGlvbi5pbm5lclRleHQgPSBgJHthbGxQcm9qZWN0c1tpbmRleF0uZ2V0VGl0bGV9YDtcbiAgICAgIHByb2plY3RzSW5wdXQuYXBwZW5kQ2hpbGQoc2VsZWN0T3B0aW9uKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3VibWl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0aW4nKTtcbiAgICBzdWJtaXRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgc3VibWl0SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdzdWJtaXQnKTtcbiAgICBcbiAgICB0aXRsZVRkMS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICB0aXRsZVRkMi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICB0aXRsZVJvdy5hcHBlbmRDaGlsZCh0aXRsZVRkMSk7XG4gICAgdGl0bGVSb3cuYXBwZW5kQ2hpbGQodGl0bGVUZDIpO1xuICAgIGRlc2NyaXB0aW9uVGQxLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgIGRlc2NyaXB0aW9uVGQyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgIGRlc2NyaXB0aW9uUm93LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGQxKTtcbiAgICBkZXNjcmlwdGlvblJvdy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRkMik7XG4gICAgZGF0ZVRkMS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGRhdGVUZDIuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICBkYXRlUm93LmFwcGVuZENoaWxkKGRhdGVUZDEpO1xuICAgIGRhdGVSb3cuYXBwZW5kQ2hpbGQoZGF0ZVRkMik7XG4gICAgcHJpb3JpdHlUZDEuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgcHJpb3JpdHlUZDIuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gICAgcHJpb3JpdHlSb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHlUZDEpO1xuICAgIHByaW9yaXR5Um93LmFwcGVuZENoaWxkKHByaW9yaXR5VGQyKTtcblxuICAgIHRvRG9UYWJsZS5hcHBlbmRDaGlsZCh0aXRsZVJvdyk7XG4gICAgdG9Eb1RhYmxlLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUm93KTtcbiAgICB0b0RvVGFibGUuYXBwZW5kQ2hpbGQoZGF0ZVJvdyk7XG4gICAgdG9Eb1RhYmxlLmFwcGVuZENoaWxkKHByaW9yaXR5Um93KTtcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZCh0b0RvVGFibGUpO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHByb2plY3RzSW5wdXQpO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdElucHV0KTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRvRG9Gb3JtKTtcbn1cblxuLy8gd2hlbiB0byBkbyBidXR0b24gaXMgY2xpY2tlZFxuZXhwb3J0IGNvbnN0IHRvRG9FdmVudCA9ICgpID0+IHtcbiAgbGV0IG5ld1RvRG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZXRvZG8nKTtcbiAgY29uc3QgcHJvamVjdHNCYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNjb250YWluZXInKTtcbiAgaWYoIWNvbnRlbnREaXYuY29udGFpbnMobmV3VG9Eb0Zvcm0pKSB7XG4gICAgICBkb21Ub0RvKCk7XG4gICAgICBmb3JtSGVyZSA9ICd5ZXMnO1xuICAgICAgc3VibWl0VG9EbygpO1xuXG4gICAgICBpZihwcm9qZWN0c0Jhbm5lciA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJubyBwcm9qZWNzdGZvbGRlclwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZW1vdmluZyB0aGUgcHJvamVjdHNmb2xkZXJcIik7XG4gICAgICAgICAgcHJvamVjdHNCYW5uZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICB0b0RvRGl2LnJlbW92ZUNoaWxkKHByb2plY3RzQmFubmVyKTtcbiAgICAgIH1cbiAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQobmV3VG9Eb0Zvcm0pO1xuICAgICAgZm9ybUhlcmUgPSAnbm8nO1xuICB9XG59XG5cbi8vIHN1Ym1pdCB0aGUgbmV3IHRvZG9cbmZ1bmN0aW9uIHN1Ym1pdFRvRG8oKSB7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRpbicpO1xuXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCAoKSA9PiB7XG4gICAgICBpZihmb3JtSGVyZSA9PSAneWVzJykge1xuICAgICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlaW4nKTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbmluJyk7XG4gICAgICBjb25zdCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlaW4nKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eWluJyk7XG4gICAgICBjb25zdCBwcm9qZWN0Q2hvaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzaW4nKS52YWx1ZTtcblxuICAgICAgYWxsUHJvamVjdHMuZmluZChwdXNoVG9Ebyk7XG5cbiAgICAgIGZ1bmN0aW9uIHB1c2hUb0RvKF9wcm9qZWN0LCBpbmRleCkge1xuICAgICAgICAgIGlmKGFsbFByb2plY3RzW2luZGV4XS5nZXRUaXRsZSA9PSBwcm9qZWN0Q2hvaWNlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2UgaGF2ZSBhIG1hdGNoXCIpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0c1tpbmRleF0uZ2V0QXJyYXkpO1xuICAgICAgICAgICAgICBhbGxQcm9qZWN0c1tpbmRleF0uZ2V0QXJyYXkucHVzaCh0b0RvRmFjdG9yeSh0aXRsZVRleHQudmFsdWUsIGRlc2NyaXB0aW9uVGV4dC52YWx1ZSwgZHVlRGF0ZVRleHQudmFsdWUsIHByaW9yaXR5VGV4dC52YWx1ZSkpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRldG9kbycpKTtcbiAgICAgIGZvcm1IZXJlID0gJ25vJztcbiAgICAgIHNob3dUb0RvcygpO1xuICAgICAgfSBlbHNlIHsgcmV0dXJufVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21Ub0RvOyIsImltcG9ydCB7IGNvbnRlbnREaXYsIHRvRG9EaXYgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMsIHByb2plY3RGYWN0b3J5IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuLy8gZ2VuZXJhbCB2YXJpYWJsZXNcbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wcm9qZWN0c0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RzY29udGFpbmVyJyk7XG5cbi8vIHNob3dpbmcgdGhlIHByb2plY3RzIGluIHRoZSBwcm9qZWN0IGZvbGRlciArIGFkZGluZyBuZXcgcHJvamVjdHNcbmV4cG9ydCBjb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IERpdlRvRG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb2RpdicpO1xuICBjb25zdCBhZGROZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgYWRkTmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZG5ld3Byb2plY3QnKTtcbiAgYWRkTmV3UHJvamVjdC5pbm5lclRleHQgPSAnKyBOZXcgUHJvamVjdCc7XG4gIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZE5ld1Byb2plY3QpO1xuXG4gIGFsbFByb2plY3RzLmZvckVhY2goZ2V0UHJvamVjdE5hbWUpO1xuICAgIGZ1bmN0aW9uIGdldFByb2plY3ROYW1lKF9wcm9qZWN0LCBpbmRleCkge1xuICAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICBwcm9qZWN0T3B0aW9uLmlubmVyVGV4dCA9IGAke2FsbFByb2plY3RzW2luZGV4XS5nZXRUaXRsZX1gO1xuICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gICAgfVxuXG4gICAgRGl2VG9Eby5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG5cbiAgICBhZGROZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXROZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0TmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgaW5wdXROZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbmV3IHByb2plY3QnKTtcbiAgICAgIGlucHV0TmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld3Byb2plY3RpbnB1dCcpO1xuICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXROZXdQcm9qZWN0KTtcbiAgICAgIGNvbnN0IGJ0bk5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ0bk5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICduZXdwcm9qZWN0YnRuJyk7XG4gICAgICBidG5OZXdQcm9qZWN0LmlubmVyVGV4dCA9ICdHbyc7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChidG5OZXdQcm9qZWN0KTtcblxuICAgICAgaW5wdXROZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgIGJ0bk5ld1Byb2plY3QuY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGJ0bk5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGlucHV0TmV3UHJvamVjdC52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIG5ld1Byb2plY3RUeHQuaW5uZXJUZXh0ID0gbmV3UHJvamVjdFRpdGxlO1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VHh0KTtcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIucmVtb3ZlQ2hpbGQoaW5wdXROZXdQcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIucmVtb3ZlQ2hpbGQoYnRuTmV3UHJvamVjdCk7XG4gICAgICAgIHdpbmRvd1tuZXdQcm9qZWN0VGl0bGVdID0gW107XG4gICAgICAgIFxuICAgICAgICBhbGxQcm9qZWN0cy5wdXNoKHByb2plY3RGYWN0b3J5KG5ld1Byb2plY3RUaXRsZSwgd2luZG93W25ld1Byb2plY3RUaXRsZV0gPSBbXSkpO1xuICAgICAgfSlcbiAgICB9KVxufVxuXG4vLyBjbGlja2luZyB0aGUgcHJvamVjdHMgYnV0dG9uXG5leHBvcnQgY29uc3QgcHJvamVjdEV2ZW50ID0gKCkgPT4ge1xuICBjb25zdCBzaG93VG9Eb1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3d0ZHRhYicpO1xuICBjb25zdCBmb3JtTmV3VG9ETyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGV0b2RvJyk7XG4gIGlmKHRvRG9EaXYuY29udGFpbnMocHJvamVjdHNDb250YWluZXIpKSB7XG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHRvRG9EaXYucmVtb3ZlQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xuICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0cyBmb2xkZXIgaXMgdGhlcmVcIik7XG4gICAgICBpZighc2hvd1RvRG9UYWJsZSA9PSBudWxsKXtcbiAgICAgICAgICBzaG93VG9Eb1RhYmxlLmNsYXNzTGlzdC5hZGQoJ3Nob3d0b2RvdGFibGUnKTtcbiAgICAgICAgICBzaG93VG9Eb1RhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3d0b2RvdGFibGUyJyk7XG4gICAgICB9XG4gIH0gZWxzZSB7XG4gICAgICBzaG93UHJvamVjdHMoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicHJvamVjdGZvbGRlciBpcyBub3QgdGhlcmVcIik7XG4gICAgICBjb25zb2xlLmxvZyhmb3JtTmV3VG9ETyk7XG4gICAgICBpZighc2hvd1RvRG9UYWJsZSA9PSBudWxsKXtcbiAgICAgICAgICBzaG93VG9Eb1RhYmxlLmNsYXNzTGlzdC5hZGQoJ3Nob3d0b2RvdGFibGUyJyk7XG4gICAgICAgICAgc2hvd1RvRG9UYWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93dG9kb3RhYmxlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdubyB0YWJsZScpO1xuICAgICAgfTtcblxuICAgICAgaWYoZm9ybU5ld1RvRE8gPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3JtIG5vJyk7XG4gICAgICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd5ZXMgZm9ybScpO1xuICAgICAgICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoZm9ybU5ld1RvRE8pO1xuICAgICAgfTtcbiAgICAgIFxuICB9XG59IiwiaW1wb3J0IHsgZ2VuZXJhbFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1RvRG9zICgpIHtcbiAgICBjb25zdCBEaXZUb0RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9kaXYnKTtcbiAgICBjb25zdCB0YWJsZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIHRhYmxlVG9Eby5jbGFzc0xpc3QuYWRkKFwic2hvd3RvZG90YWJsZVwiKTtcbiAgICB0YWJsZVRvRG8uc2V0QXR0cmlidXRlKCdpZCcsICdzaG93dGR0YWInKTtcbiAgICBmb3IgKGxldCBpID0gKGdlbmVyYWxQcm9qZWN0Lmxlbmd0aCAtIDEpOyBpIDwgZ2VuZXJhbFByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFibGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjb25zdCB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBjb25zdCBjaGVja1RvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja1RvRG8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNoZWNrVG9Eby5jbGFzc0xpc3QuYWRkKCdjaGVja21hcmsnKTtcbiAgICAgICAgY29uc3QgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgY29uc3QgdGl0bGVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aXRsZVRvRG8uY2xhc3NMaXN0LmFkZCgndG9kb3RpdGxlJyk7XG4gICAgICAgIHRpdGxlVG9Eby5pbm5lclRleHQgPSBnZW5lcmFsUHJvamVjdFtpXS5nZXRUaXRsZTtcbiAgICAgICAgY29uc3QgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGR1ZURhdGVUb0RvLmlubmVyVGV4dCA9IGdlbmVyYWxQcm9qZWN0W2ldLmdldER1ZURhdGU7XG4gICAgICAgIGNvbnN0IHRkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbGxhcHNlQnRuLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNpYmxlJyk7XG4gICAgICAgIGNvbnN0IHRhYmxlUm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbnJvdycpO1xuICAgICAgICBjb25zdCB0ZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0ZDQuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzMnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25Ub0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjcmlwdGlvblRvRG8uaW5uZXJUZXh0ID0gZ2VuZXJhbFByb2plY3RbaV0uZ2V0RGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGVtcHR5VGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXG4gICAgICAgIGlmKGdlbmVyYWxQcm9qZWN0W2ldLmdldFByaW9yaXR5ID09IDEpIHtcbiAgICAgICAgICB0YWJsZVJvdy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTEnKTtcbiAgICAgICAgICB0YWJsZVJvdzIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHkxJyk7XG4gICAgICAgIH0gZWxzZSBpZihnZW5lcmFsUHJvamVjdFtpXS5nZXRQcmlvcml0eSA9PSAyKSB7XG4gICAgICAgICAgdGFibGVSb3cuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHkyJyk7XG4gICAgICAgICAgdGFibGVSb3cyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5MicpO1xuICAgICAgICB9IGVsc2UgaWYoZ2VuZXJhbFByb2plY3RbaV0uZ2V0UHJpb3JpdHkgPT0gMykge1xuICAgICAgICAgIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5MycpO1xuICAgICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTMnKTtcbiAgICAgICAgfSBlbHNlIGlmKGdlbmVyYWxQcm9qZWN0W2ldLmdldFByaW9yaXR5ID09IDQpIHtcbiAgICAgICAgICB0YWJsZVJvdy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTQnKTtcbiAgICAgICAgICB0YWJsZVJvdzIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHk0Jyk7XG4gICAgICAgIH0gZWxzZSBpZihnZW5lcmFsUHJvamVjdFtpXS5nZXRQcmlvcml0eSA9PSA1KSB7XG4gICAgICAgICAgdGFibGVSb3cuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHk1Jyk7XG4gICAgICAgICAgdGFibGVSb3cyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5NScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5MScpO1xuICAgICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTEnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGQxLmFwcGVuZENoaWxkKGNoZWNrVG9Ebyk7XG4gICAgICAgIHRkMi5hcHBlbmRDaGlsZCh0aXRsZVRvRG8pO1xuICAgICAgICB0ZDMuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRvRG8pO1xuICAgICAgICB0ZDQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Ub0RvKTtcbiAgICAgICAgdGQ1LmFwcGVuZENoaWxkKGNvbGxhcHNlQnRuKTtcbiAgICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGQzKTtcbiAgICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGQ1KTtcbiAgICAgICAgdGFibGVSb3cyLmFwcGVuZENoaWxkKGVtcHR5VGQpO1xuICAgICAgICB0YWJsZVJvdzIuYXBwZW5kQ2hpbGQodGQ0KTtcbiAgICAgICAgdGFibGVUb0RvLmFwcGVuZENoaWxkKHRhYmxlUm93KTtcbiAgICAgICAgdGFibGVUb0RvLmFwcGVuZENoaWxkKHRhYmxlUm93Mik7XG4gICAgICB9IFxuICAgICAgRGl2VG9Eby5hcHBlbmRDaGlsZCh0YWJsZVRvRG8pO1xuXG4gICAgICBsZXQgY29sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb2xsYXBzaWJsZVwiKTtcbiAgICAgIGxldCBpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGNvbGwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sbFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIGxldCBjb250ZW50ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgIGlmIChjb250ZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRlc2NyaXB0aW9ucm93b3BlblwiKSApIHtcbiAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9ucm93XCIpO1xuICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGVzY3JpcHRpb25yb3dvcGVuXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbnJvd29wZW5cIik7XG4gICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkZXNjcmlwdGlvbnJvd1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgdG9Eb0V2ZW50IH0gZnJvbSAnLi9kb21uZXd0b2RvJztcbmltcG9ydCB7IHByb2plY3RFdmVudH0gZnJvbSAnLi9kb21zaG93cHJvamVjdHMnO1xuXG4vLyBnZW5lcmFsIGxheW91dCBhbmQgdmFyaWFibGVzXG5cbmV4cG9ydCBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbmV4cG9ydCBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50b0RvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb2RpdicpO1xuXG5jb25zdCBhZGRUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hZGRUb0RvQnRuLmlubmVyVGV4dCA9ICcrJztcbmFkZFRvRG9CdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGR0b2RvYnRuJyk7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xucHJvamVjdFRpdGxlLmlubmVyVGV4dCA9ICdHZW5lcmFsIFByb2plY3QnO1xucHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHRpdGxlJyk7XG5cbmNvbnN0IHByb2plY3RzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5wcm9qZWN0c0J0bi5pbm5lclRleHQgPSAnUHJvamVjdHMnO1xucHJvamVjdHNCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0c2J0bicpO1xuXG5uYXZCYXIuYXBwZW5kQ2hpbGQoYWRkVG9Eb0J0bik7XG5uYXZCYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbm5hdkJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0J0bik7XG5cbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodG9Eb0Rpdik7XG5cbi8vIGV2ZW50bGlzdGVuZXJzXG5cbi8vYWRkIHRvIGRvICtcblxuYWRkVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvRG9FdmVudCk7XG5cbi8vIHNob3cgcHJvamVjdHMgbGlzdFxuXG5wcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RFdmVudCk7XG5cblxuXG4iLCJleHBvcnQgY29uc3QgdG9Eb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IGdldFRpdGxlID0gdGl0bGU7XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBjb25zdCBnZXREdWVEYXRlID0gZHVlZGF0ZTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIGxldCBDaGVja2VkID0gJ25vJztcbiAgICByZXR1cm4ge2dldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIENoZWNrZWR9XG59XG4iLCJjb25zdCBnZW5lcmFsUHJvamVjdCA9IFtdO1xuY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUsIGFycmF5KSA9PiB7XG4gICAgY29uc3QgZ2V0VGl0bGUgPSB0aXRsZTtcbiAgICBjb25zdCBnZXRBcnJheSA9IGFycmF5O1xuICAgIHJldHVybiB7Z2V0VGl0bGUsIGdldEFycmF5fVxufVxuXG5jb25zdCBnZW5lcmFsUHJPYmplY3QgPSBwcm9qZWN0RmFjdG9yeSgnZ2VuZXJhbFByb2plY3QnLCBnZW5lcmFsUHJvamVjdCk7XG5cbmFsbFByb2plY3RzLnB1c2goZ2VuZXJhbFByT2JqZWN0KTtcblxuZXhwb3J0IHtcbiAgICBhbGxQcm9qZWN0cyxcbiAgICBnZW5lcmFsUHJvamVjdCxcbiAgICBwcm9qZWN0RmFjdG9yeVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=