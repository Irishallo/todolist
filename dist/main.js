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
      const projectOption = document.createElement('h2');
      projectOption.innerText = `${_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[index].getTitle}`;
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
        
        _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects.push((0,_projects__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(newProjectTitle, window[newProjectTitle] = []));
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
    const projectsBanner = document.getElementById('projectscontainer');
    if(!contentDiv.contains(newToDoForm)) {
        (0,_domnewtodo__WEBPACK_IMPORTED_MODULE_1__.default)();
        formHere = 'yes';
        submitToDo();

        if(projectsBanner == null) {
            console.log("no projecstfolder");
        } else {
            console.log("removing the projectsfolder");
            toDoDiv.removeChild(projectsBanner);
        }
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
        const projectChoice = document.getElementById('projectsin').value;

        _projects__WEBPACK_IMPORTED_MODULE_2__.allProjects.find(pushToDo);

        function pushToDo(_project, index) {
            if(_projects__WEBPACK_IMPORTED_MODULE_2__.allProjects[index].getTitle == projectChoice) {
                console.log("we have a match");
                console.log(_projects__WEBPACK_IMPORTED_MODULE_2__.allProjects[index].getArray);
                _projects__WEBPACK_IMPORTED_MODULE_2__.allProjects[index].getArray.push((0,_newtodo__WEBPACK_IMPORTED_MODULE_3__.default)(titleText.value, descriptionText.value, dueDateText.value, priorityText.value));
                console.log(_projects__WEBPACK_IMPORTED_MODULE_2__.allProjects);
            }
        };

        contentDiv.removeChild(document.getElementById('createtodo'));
        formHere = 'no';
        (0,_domshowtodos__WEBPACK_IMPORTED_MODULE_4__.showToDos)();
        } else { return}
    })
}

projectsBtn.addEventListener('click', () => {
    const projectFolder = document.getElementById('projectscontainer');
    const showToDoTable = document.getElementById('showtdtab');
    const formNewToDO = document.getElementById('createtodo');
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
            contentDiv.removeChild(formNewToDO);
        };
        
    }
}
);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb21uZXd0b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbXNob3dwcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb21zaG93dG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbmV3dG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsZ0JBQWdCLGlCQUFpQix5QkFBeUIsR0FBRyxTQUFTLDJDQUEyQyxvQkFBb0IscUNBQXFDLEdBQUcsaUJBQWlCLDJDQUEyQywwQkFBMEIseUJBQXlCLG1CQUFtQixzQkFBc0IsR0FBRyxrQkFBa0IsMkNBQTJDLDBCQUEwQix5QkFBeUIsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQix5QkFBeUIseUJBQXlCLEdBQUcsZ0JBQWdCLDBDQUEwQyxnQ0FBZ0MsR0FBRyxvQkFBb0IsZ0NBQWdDLFNBQVMscUJBQXFCLGdDQUFnQyxHQUFHLFFBQVEsbUJBQW1CLEdBQUcsc0JBQXNCLGdCQUFnQiwwQkFBMEIscUJBQXFCLEdBQUcsdUJBQXVCLGdCQUFnQiwwQkFBMEIscUJBQXFCLEdBQUcsd0JBQXdCLHFCQUFxQixxQkFBcUIsR0FBRyxxQkFBcUIsb0JBQW9CLEdBQUcseUJBQXlCLDJCQUEyQixHQUFHLGtCQUFrQixvQ0FBb0MsMEJBQTBCLEdBQUcsd0JBQXdCLHlCQUF5QixvRUFBb0UsdUJBQXVCLEtBQUssdUJBQXVCLDBCQUEwQixvREFBb0QsZ0JBQWdCLDJDQUEyQyxtQkFBbUIsR0FBRyxnQkFBZ0IsMkNBQTJDLEdBQUcsZ0JBQWdCLDJDQUEyQyxHQUFHLGdCQUFnQiwyQ0FBMkMsR0FBRyxnQkFBZ0IsMkNBQTJDLEdBQUcsaUJBQWlCLDJDQUEyQyxtRkFBbUYsR0FBRyx3QkFBd0Isc0NBQXNDLG1CQUFtQix5QkFBeUIsZUFBZSxlQUFlLEdBQUcseUVBQXlFLG1DQUFtQyx1QkFBdUIsdUJBQXVCLE9BQU8seUJBQXlCLDBCQUEwQixPQUFPLDBCQUEwQiwyQkFBMkIsT0FBTywyQkFBMkIsMkJBQTJCLE9BQU8sd0JBQXdCLHNCQUFzQix1QkFBdUIsT0FBTyxnQkFBZ0IsNEJBQTRCLE9BQU8seUJBQXlCLHNCQUFzQix1QkFBdUIsNEJBQTRCLDJCQUEyQixPQUFPLDRCQUE0QixxQkFBcUIsT0FBTyxzQkFBc0Isc0JBQXNCLE9BQU8sNkJBQTZCLHFCQUFxQixPQUFPLEtBQUssbURBQW1ELG1DQUFtQyx1QkFBdUIsdUJBQXVCLE9BQU8seUJBQXlCLHNCQUFzQix1QkFBdUIsNEJBQTRCLDJCQUEyQixPQUFPLHlCQUF5Qix5QkFBeUIsT0FBTyxzQkFBc0IseUJBQXlCLE9BQU8sMkJBQTJCLHlCQUF5QixPQUFPLDRCQUE0QixxQkFBcUIsT0FBTyx3QkFBd0Isc0JBQXNCLE9BQU8sNkJBQTZCLHFCQUFxQixPQUFPLEtBQUssbURBQW1ELG1DQUFtQyx1QkFBdUIsdUJBQXVCLE9BQU8seUJBQXlCLHNCQUFzQix1QkFBdUIsNEJBQTRCLDJCQUEyQixPQUFPLHlCQUF5QiwwQkFBMEIsNEJBQTRCLE9BQU8sc0JBQXNCLHlCQUF5QixPQUFPLDJCQUEyQix5QkFBeUIsT0FBTyw0QkFBNEIscUJBQXFCLE9BQU8sd0JBQXdCLHNCQUFzQixPQUFPLDZCQUE2QixxQkFBcUIsT0FBTyxLQUFLLFFBQVEsZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyx3QkFBd0IsV0FBVyxZQUFZLE9BQU8sS0FBSyx3QkFBd0IsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFB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aW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMTUyLCAyMDIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNhZGR0b2RvYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMTI5LCAxOTcpO1xcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdHNidG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAxMjksIDE5Nyk7XFxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbiNwcm9qZWN0dGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDQwLCAxMzgpO1xcbiAgICBjb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xcbn1cXG5cXG4uc2hvd3RvZG90YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIFxcbn1cXG5cXG4uc2hvd3RvZG90YWJsZTIge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG50ZCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudHIgdGQ6bGFzdC1jaGlsZCB7XFxuICAgIHdpZHRoOiAxJTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbnRyIHRkOmZpcnN0LWNoaWxkIHtcXG4gICAgd2lkdGg6IDElO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxudHIgdGQ6bnRoLWNoaWxkKDIpIHtcXG4gICAgbWF4LXdpZHRoOiA5OCU7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb25yb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZGVzY3JpcHRpb25yb3dvcGVuIHtcXG4gICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XFxufVxcblxcbi5jb2xsYXBzaWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY29sbGFwc2libGU6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnXFxcXDAyNzk1JzsgLyogVW5pY29kZSBjaGFyYWN0ZXIgZm9yIFxcXCJwbHVzXFxcIiBzaWduICgrKSAqL1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICB9XFxuICBcXG4gIC5hY3RpdmU6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXDI3OTZcXFwiOyAvKiBVbmljb2RlIGNoYXJhY3RlciBmb3IgXFxcIm1pbnVzXFxcIiBzaWduICgtKSAqL1xcbiAgfVxcblxcbi5wcmlvcml0eTEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAyNDcsIDI1Myk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5MiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDI0NiwgMjU1KTtcXG59XFxuXFxuLnByaW9yaXR5MyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDI0NCwgMjU1KTtcXG59XFxuXFxuLnByaW9yaXR5NCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzIsIDIzOCwgMjU1KTtcXG59XFxuXFxuLnByaW9yaXR5NSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzgsIDIzMiwgMjU1KTtcXG59XFxuXFxuI2NyZWF0ZXRvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyMTMsIDIzNCk7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxufVxcblxcbiNwcm9qZWN0c2NvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMCU7XFxufVxcblxcbi8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLyogRm9yIHRhYmxldHM6ICovXFxuICAgIG5hdiB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIH1cXG4gICAgXFxuICAgICNhZGR0b2RvYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgI3Byb2plY3RzYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIH1cXG4gICAgXFxuICAgICNwcm9qZWN0dGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmNoZWNrbWFyayB7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgfVxcbiAgICBcXG4gICAgdGQge1xcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIH1cXG4gICAgXFxuICAgICNjcmVhdGV0b2RvIHtcXG4gICAgICAgIHdpZHRoOiA4MHZ3O1xcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwdnc7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2NvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMzMlO1xcbiAgICB9XFxuICAgIC5zaG93dG9kb3RhYmxlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc2hvd3RvZG90YWJsZTIge1xcbiAgICAgICAgd2lkdGg6IDY3JTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAgIC8qIEZvciB0YWJsZXRzOiAqL1xcbiAgICBuYXYge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xcbiAgICB9XFxuICAgIFxcbiAgICAjY3JlYXRldG9kbyB7XFxuICAgICAgICB3aWR0aDogMzB2dztcXG4gICAgICAgIGhlaWdodDogNjB2aDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXZ3O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcXG4gICAgfVxcbiAgICBcXG4gICAgI2FkZHRvZG9idG4ge1xcbiAgICAgICAgZm9udC1zaXplOiA1ZW07XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RzYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAjcHJvamVjdHRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2NvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMzMlO1xcbiAgICB9XFxuXFxuICAgIC5zaG93dG9kb3RhYmxlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc2hvd3RvZG90YWJsZTIge1xcbiAgICAgICAgd2lkdGg6IDY3JTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIEZvciBkZXNrdG9wOiAqL1xcbiAgICBuYXYge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xcbiAgICB9XFxuICAgIFxcbiAgICAjY3JlYXRldG9kbyB7XFxuICAgICAgICB3aWR0aDogMzB2dztcXG4gICAgICAgIGhlaWdodDogNjB2aDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXZ3O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcXG4gICAgfVxcbiAgICBcXG4gICAgI2FkZHRvZG9idG4ge1xcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RzYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAjcHJvamVjdHRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2NvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMjUlO1xcbiAgICB9XFxuXFxuICAgIC5zaG93dG9kb3RhYmxlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc2hvd3RvZG90YWJsZTIge1xcbiAgICAgICAgd2lkdGg6IDc1JTtcXG4gICAgfVxcbiAgfSBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQixFQUFFLDBDQUEwQztJQUM3RCxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCLEVBQUUsMkNBQTJDO0VBQy9EOztBQUVGO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsNEVBQTRFO0FBQ2hGOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVE7QUFDWjs7QUFFQSx1QkFBdUI7QUFDdkI7SUFDSSxpQkFBaUI7SUFDakI7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0VBQ0Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakI7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtFQUNGOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbm5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDE1MiwgMjAyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jYWRkdG9kb2J0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDEyOSwgMTk3KTtcXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuXFxuI3Byb2plY3RzYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMTI5LCAxOTcpO1xcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdHRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCA0MCwgMTM4KTtcXG4gICAgY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG59XFxuXFxuLnNob3d0b2RvdGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBcXG59XFxuXFxuLnNob3d0b2RvdGFibGUyIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxudGQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRyIHRkOmxhc3QtY2hpbGQge1xcbiAgICB3aWR0aDogMSU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG50ciB0ZDpmaXJzdC1jaGlsZCB7XFxuICAgIHdpZHRoOiAxJTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbnRyIHRkOm50aC1jaGlsZCgyKSB7XFxuICAgIG1heC13aWR0aDogOTglO1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9ucm93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9ucm93b3BlbiB7XFxuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xcbn1cXG5cXG4uY29sbGFwc2libGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNvbGxhcHNpYmxlOmFmdGVyIHtcXG4gICAgY29udGVudDogJ1xcXFwwMjc5NSc7IC8qIFVuaWNvZGUgY2hhcmFjdGVyIGZvciBcXFwicGx1c1xcXCIgc2lnbiAoKykgKi9cXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgfVxcbiAgXFxuICAuYWN0aXZlOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwyNzk2XFxcIjsgLyogVW5pY29kZSBjaGFyYWN0ZXIgZm9yIFxcXCJtaW51c1xcXCIgc2lnbiAoLSkgKi9cXG4gIH1cXG5cXG4ucHJpb3JpdHkxIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjQ3LCAyNTMpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eTIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyNDYsIDI1NSk7XFxufVxcblxcbi5wcmlvcml0eTMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyNDQsIDI1NSk7XFxufVxcblxcbi5wcmlvcml0eTQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLCAyMzgsIDI1NSk7XFxufVxcblxcbi5wcmlvcml0eTUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM4LCAyMzIsIDI1NSk7XFxufVxcblxcbiNjcmVhdGV0b2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjEzLCAyMzQpO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbn1cXG5cXG4jcHJvamVjdHNjb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMTAlO1xcbn1cXG5cXG4vKiBGb3IgbW9iaWxlIHBob25lczogKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC8qIEZvciB0YWJsZXRzOiAqL1xcbiAgICBuYXYge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xcbiAgICB9XFxuICAgIFxcbiAgICAjYWRkdG9kb2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgICNwcm9qZWN0c2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAjcHJvamVjdHRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5jaGVja21hcmsge1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIHRkIHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAjY3JlYXRldG9kbyB7XFxuICAgICAgICB3aWR0aDogODB2dztcXG4gICAgICAgIGhlaWdodDogNjB2aDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdHNjb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDMzJTtcXG4gICAgfVxcbiAgICAuc2hvd3RvZG90YWJsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNob3d0b2RvdGFibGUyIHtcXG4gICAgICAgIHdpZHRoOiA2NyU7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICAvKiBGb3IgdGFibGV0czogKi9cXG4gICAgbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMTB2aDtcXG4gICAgfVxcbiAgICBcXG4gICAgI2NyZWF0ZXRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDMwdnc7XFxuICAgICAgICBoZWlnaHQ6IDYwdmg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzV2dztcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XFxuICAgIH1cXG4gICAgXFxuICAgICNhZGR0b2RvYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNWVtO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgI3Byb2plY3R0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdHNjb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDMzJTtcXG4gICAgfVxcblxcbiAgICAuc2hvd3RvZG90YWJsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNob3d0b2RvdGFibGUyIHtcXG4gICAgICAgIHdpZHRoOiA2NyU7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAvKiBGb3IgZGVza3RvcDogKi9cXG4gICAgbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMTB2aDtcXG4gICAgfVxcbiAgICBcXG4gICAgI2NyZWF0ZXRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDMwdnc7XFxuICAgICAgICBoZWlnaHQ6IDYwdmg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzV2dztcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XFxuICAgIH1cXG4gICAgXFxuICAgICNhZGR0b2RvYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgI3Byb2plY3R0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdHNjb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDI1JTtcXG4gICAgfVxcblxcbiAgICAuc2hvd3RvZG90YWJsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNob3d0b2RvdGFibGUyIHtcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxuICAgIH1cXG4gIH0gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFsbFByb2plY3RzLCBnZW5lcmFsUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IGRvbVRvRG8gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdG9Eb0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGV0b2RvJyk7XG4gICAgY29uc3QgdG9Eb1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICBjb25zdCB0aXRsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgdGl0bGVUZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHRpdGxlVGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlaW4nKTtcbiAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZSc7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlaW4nKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZWluJyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25UZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb25pbicpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb25pbicpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uaW4nKTtcbiAgICBjb25zdCBkYXRlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBkYXRlVGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBkYXRlVGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYXRlaW4nKTtcbiAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlJztcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGVpbicpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBwcmlvcml0eVRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgcHJpb3JpdHlUZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHlpbicpO1xuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5JztcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHlpbicpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCAnMScpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdtYXgnLCAnNScpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcxJyk7XG4gICAgY29uc3QgcHJvamVjdHNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByb2plY3RzSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0c2luJyk7XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaChnZXRQcm9qZWN0TmFtZSk7XG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdE5hbWUoX3Byb2plY3QsIGluZGV4KSB7XG4gICAgICBjb25zdCBzZWxlY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHNlbGVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7YWxsUHJvamVjdHNbaW5kZXhdLmdldFRpdGxlfWApO1xuICAgICAgc2VsZWN0T3B0aW9uLmlubmVyVGV4dCA9IGAke2FsbFByb2plY3RzW2luZGV4XS5nZXRUaXRsZX1gO1xuICAgICAgcHJvamVjdHNJbnB1dC5hcHBlbmRDaGlsZChzZWxlY3RPcHRpb24pO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBjb25zdCBzdWJtaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXRpbicpO1xuICAgIHN1Ym1pdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBzdWJtaXRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3N1Ym1pdCcpO1xuICAgIFxuICAgIHRpdGxlVGQxLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIHRpdGxlVGQyLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIHRpdGxlUm93LmFwcGVuZENoaWxkKHRpdGxlVGQxKTtcbiAgICB0aXRsZVJvdy5hcHBlbmRDaGlsZCh0aXRsZVRkMik7XG4gICAgZGVzY3JpcHRpb25UZDEuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgZGVzY3JpcHRpb25UZDIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgZGVzY3JpcHRpb25Sb3cuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZDEpO1xuICAgIGRlc2NyaXB0aW9uUm93LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGQyKTtcbiAgICBkYXRlVGQxLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZGF0ZVRkMi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGRhdGVSb3cuYXBwZW5kQ2hpbGQoZGF0ZVRkMSk7XG4gICAgZGF0ZVJvdy5hcHBlbmRDaGlsZChkYXRlVGQyKTtcbiAgICBwcmlvcml0eVRkMS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICBwcmlvcml0eVRkMi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICBwcmlvcml0eVJvdy5hcHBlbmRDaGlsZChwcmlvcml0eVRkMSk7XG4gICAgcHJpb3JpdHlSb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHlUZDIpO1xuXG4gICAgdG9Eb1RhYmxlLmFwcGVuZENoaWxkKHRpdGxlUm93KTtcbiAgICB0b0RvVGFibGUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Sb3cpO1xuICAgIHRvRG9UYWJsZS5hcHBlbmRDaGlsZChkYXRlUm93KTtcbiAgICB0b0RvVGFibGUuYXBwZW5kQ2hpbGQocHJpb3JpdHlSb3cpO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9UYWJsZSk7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdHNJbnB1dCk7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0SW5wdXQpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodG9Eb0Zvcm0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkb21Ub0RvOyIsImltcG9ydCB7IGFsbFByb2plY3RzLCBwcm9qZWN0RmFjdG9yeSB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmV4cG9ydCBjb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHNjb250YWluZXInKTtcbiAgY29uc3QgRGl2VG9EbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvZGl2Jyk7XG4gIGNvbnN0IGFkZE5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBhZGROZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkbmV3cHJvamVjdCcpO1xuICBhZGROZXdQcm9qZWN0LmlubmVyVGV4dCA9ICcrIE5ldyBQcm9qZWN0JztcbiAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdCk7XG5cbiAgYWxsUHJvamVjdHMuZm9yRWFjaChnZXRQcm9qZWN0TmFtZSk7XG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdE5hbWUoX3Byb2plY3QsIGluZGV4KSB7XG4gICAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIHByb2plY3RPcHRpb24uaW5uZXJUZXh0ID0gYCR7YWxsUHJvamVjdHNbaW5kZXhdLmdldFRpdGxlfWA7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgICB9XG5cbiAgICBEaXZUb0RvLmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKTtcblxuICAgIGFkZE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dE5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgaW5wdXROZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICBpbnB1dE5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCd2YWx1ZScsICduZXcgcHJvamVjdCcpO1xuICAgICAgaW5wdXROZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3cHJvamVjdGlucHV0Jyk7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dE5ld1Byb2plY3QpO1xuICAgICAgY29uc3QgYnRuTmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnRuTmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld3Byb2plY3RidG4nKTtcbiAgICAgIGJ0bk5ld1Byb2plY3QuaW5uZXJUZXh0ID0gJ0dvJztcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bk5ld1Byb2plY3QpO1xuXG4gICAgICBpbnB1dE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgYnRuTmV3UHJvamVjdC5jbGljaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgYnRuTmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gaW5wdXROZXdQcm9qZWN0LnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0VHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgbmV3UHJvamVjdFR4dC5pbm5lclRleHQgPSBuZXdQcm9qZWN0VGl0bGU7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUeHQpO1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChpbnB1dE5ld1Byb2plY3QpO1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChidG5OZXdQcm9qZWN0KTtcbiAgICAgICAgd2luZG93W25ld1Byb2plY3RUaXRsZV0gPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGFsbFByb2plY3RzLnB1c2gocHJvamVjdEZhY3RvcnkobmV3UHJvamVjdFRpdGxlLCB3aW5kb3dbbmV3UHJvamVjdFRpdGxlXSA9IFtdKSk7XG4gICAgICB9KVxuICAgIH0pXG59IiwiaW1wb3J0IHsgZ2VuZXJhbFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1RvRG9zICgpIHtcbiAgICBjb25zdCBEaXZUb0RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9kaXYnKTtcbiAgICBjb25zdCB0YWJsZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIHRhYmxlVG9Eby5jbGFzc0xpc3QuYWRkKFwic2hvd3RvZG90YWJsZVwiKTtcbiAgICB0YWJsZVRvRG8uc2V0QXR0cmlidXRlKCdpZCcsICdzaG93dGR0YWInKTtcbiAgICBmb3IgKGxldCBpID0gKGdlbmVyYWxQcm9qZWN0Lmxlbmd0aCAtIDEpOyBpIDwgZ2VuZXJhbFByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFibGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjb25zdCB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBjb25zdCBjaGVja1RvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja1RvRG8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNoZWNrVG9Eby5jbGFzc0xpc3QuYWRkKCdjaGVja21hcmsnKTtcbiAgICAgICAgY29uc3QgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgY29uc3QgdGl0bGVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aXRsZVRvRG8uY2xhc3NMaXN0LmFkZCgndG9kb3RpdGxlJyk7XG4gICAgICAgIHRpdGxlVG9Eby5pbm5lclRleHQgPSBnZW5lcmFsUHJvamVjdFtpXS5nZXRUaXRsZTtcbiAgICAgICAgY29uc3QgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGR1ZURhdGVUb0RvLmlubmVyVGV4dCA9IGdlbmVyYWxQcm9qZWN0W2ldLmdldER1ZURhdGU7XG4gICAgICAgIGNvbnN0IHRkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbGxhcHNlQnRuLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNpYmxlJyk7XG4gICAgICAgIGNvbnN0IHRhYmxlUm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbnJvdycpO1xuICAgICAgICBjb25zdCB0ZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0ZDQuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzMnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25Ub0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjcmlwdGlvblRvRG8uaW5uZXJUZXh0ID0gZ2VuZXJhbFByb2plY3RbaV0uZ2V0RGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGVtcHR5VGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXG4gICAgICAgIGlmKGdlbmVyYWxQcm9qZWN0W2ldLmdldFByaW9yaXR5ID09IDEpIHtcbiAgICAgICAgICB0YWJsZVJvdy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTEnKTtcbiAgICAgICAgICB0YWJsZVJvdzIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHkxJyk7XG4gICAgICAgIH0gZWxzZSBpZihnZW5lcmFsUHJvamVjdFtpXS5nZXRQcmlvcml0eSA9PSAyKSB7XG4gICAgICAgICAgdGFibGVSb3cuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHkyJyk7XG4gICAgICAgICAgdGFibGVSb3cyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5MicpO1xuICAgICAgICB9IGVsc2UgaWYoZ2VuZXJhbFByb2plY3RbaV0uZ2V0UHJpb3JpdHkgPT0gMykge1xuICAgICAgICAgIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5MycpO1xuICAgICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTMnKTtcbiAgICAgICAgfSBlbHNlIGlmKGdlbmVyYWxQcm9qZWN0W2ldLmdldFByaW9yaXR5ID09IDQpIHtcbiAgICAgICAgICB0YWJsZVJvdy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTQnKTtcbiAgICAgICAgICB0YWJsZVJvdzIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHk0Jyk7XG4gICAgICAgIH0gZWxzZSBpZihnZW5lcmFsUHJvamVjdFtpXS5nZXRQcmlvcml0eSA9PSA1KSB7XG4gICAgICAgICAgdGFibGVSb3cuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHk1Jyk7XG4gICAgICAgICAgdGFibGVSb3cyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5NScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5MScpO1xuICAgICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTEnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGQxLmFwcGVuZENoaWxkKGNoZWNrVG9Ebyk7XG4gICAgICAgIHRkMi5hcHBlbmRDaGlsZCh0aXRsZVRvRG8pO1xuICAgICAgICB0ZDMuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRvRG8pO1xuICAgICAgICB0ZDQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Ub0RvKTtcbiAgICAgICAgdGQ1LmFwcGVuZENoaWxkKGNvbGxhcHNlQnRuKTtcbiAgICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGQzKTtcbiAgICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGQ1KTtcbiAgICAgICAgdGFibGVSb3cyLmFwcGVuZENoaWxkKGVtcHR5VGQpO1xuICAgICAgICB0YWJsZVJvdzIuYXBwZW5kQ2hpbGQodGQ0KTtcbiAgICAgICAgdGFibGVUb0RvLmFwcGVuZENoaWxkKHRhYmxlUm93KTtcbiAgICAgICAgdGFibGVUb0RvLmFwcGVuZENoaWxkKHRhYmxlUm93Mik7XG4gICAgICB9IFxuICAgICAgRGl2VG9Eby5hcHBlbmRDaGlsZCh0YWJsZVRvRG8pO1xuXG4gICAgICBsZXQgY29sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb2xsYXBzaWJsZVwiKTtcbiAgICAgIGxldCBpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGNvbGwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sbFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIGxldCBjb250ZW50ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgIGlmIChjb250ZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRlc2NyaXB0aW9ucm93b3BlblwiKSApIHtcbiAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9ucm93XCIpO1xuICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGVzY3JpcHRpb25yb3dvcGVuXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbnJvd29wZW5cIik7XG4gICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkZXNjcmlwdGlvbnJvd1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxufSIsImNvbnN0IHRvRG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBnZXRUaXRsZSA9IHRpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9IGR1ZWRhdGU7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBsZXQgQ2hlY2tlZCA9ICdubyc7XG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIGdldFByaW9yaXR5LCBDaGVja2VkfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0b0RvRmFjdG9yeTsiLCJjb25zdCBnZW5lcmFsUHJvamVjdCA9IFtdO1xuY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUsIGFycmF5KSA9PiB7XG4gICAgY29uc3QgZ2V0VGl0bGUgPSB0aXRsZTtcbiAgICBjb25zdCBnZXRBcnJheSA9IGFycmF5O1xuICAgIHJldHVybiB7Z2V0VGl0bGUsIGdldEFycmF5fVxufVxuXG5jb25zdCBnZW5lcmFsUHJPYmplY3QgPSBwcm9qZWN0RmFjdG9yeSgnZ2VuZXJhbFByb2plY3QnLCBnZW5lcmFsUHJvamVjdCk7XG5cbmFsbFByb2plY3RzLnB1c2goZ2VuZXJhbFByT2JqZWN0KTtcblxuZXhwb3J0IHtcbiAgICBhbGxQcm9qZWN0cyxcbiAgICBnZW5lcmFsUHJvamVjdCxcbiAgICBwcm9qZWN0RmFjdG9yeVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBkb21Ub0RvIGZyb20gJy4vZG9tbmV3dG9kbyc7XG5pbXBvcnQge2FsbFByb2plY3RzLCBnZW5lcmFsUHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgdG9Eb0ZhY3RvcnkgZnJvbSAnLi9uZXd0b2RvJztcbmltcG9ydCB7IHNob3dUb0RvcyB9IGZyb20gJy4vZG9tc2hvd3RvZG9zJztcbmltcG9ydCB7IHNob3dQcm9qZWN0cyB9IGZyb20gJy4vZG9tc2hvd3Byb2plY3RzJztcblxuY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xubGV0IGZvcm1IZXJlID0gJ25vJztcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5jb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50b0RvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb2RpdicpO1xuY29uc3QgYWRkVG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYWRkVG9Eb0J0bi5pbm5lclRleHQgPSAnKyc7XG5hZGRUb0RvQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkdG9kb2J0bicpO1xuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbnByb2plY3RUaXRsZS5pbm5lclRleHQgPSAnR2VuZXJhbCBQcm9qZWN0JztcbnByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3R0aXRsZScpO1xuY29uc3QgcHJvamVjdHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnByb2plY3RzQnRuLmlubmVyVGV4dCA9ICdQcm9qZWN0cyc7XG5wcm9qZWN0c0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RzYnRuJyk7XG5cbm5hdkJhci5hcHBlbmRDaGlsZChhZGRUb0RvQnRuKTtcbm5hdkJhci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xubmF2QmFyLmFwcGVuZENoaWxkKHByb2plY3RzQnRuKTtcblxuY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZCYXIpO1xuY29udGVudERpdi5hcHBlbmRDaGlsZCh0b0RvRGl2KTtcblxuYWRkVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgbmV3VG9Eb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRldG9kbycpO1xuICAgIGNvbnN0IHByb2plY3RzQmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzY29udGFpbmVyJyk7XG4gICAgaWYoIWNvbnRlbnREaXYuY29udGFpbnMobmV3VG9Eb0Zvcm0pKSB7XG4gICAgICAgIGRvbVRvRG8oKTtcbiAgICAgICAgZm9ybUhlcmUgPSAneWVzJztcbiAgICAgICAgc3VibWl0VG9EbygpO1xuXG4gICAgICAgIGlmKHByb2plY3RzQmFubmVyID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gcHJvamVjc3Rmb2xkZXJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92aW5nIHRoZSBwcm9qZWN0c2ZvbGRlclwiKTtcbiAgICAgICAgICAgIHRvRG9EaXYucmVtb3ZlQ2hpbGQocHJvamVjdHNCYW5uZXIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChuZXdUb0RvRm9ybSk7XG4gICAgICAgIGZvcm1IZXJlID0gJ25vJztcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gc3VibWl0VG9EbygpIHtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0aW4nKTtcblxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCAoKSA9PiB7XG4gICAgICAgIGlmKGZvcm1IZXJlID09ICd5ZXMnKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZWluJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbmluJyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVpbicpO1xuICAgICAgICBjb25zdCBwcmlvcml0eVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHlpbicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0Q2hvaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzaW4nKS52YWx1ZTtcblxuICAgICAgICBhbGxQcm9qZWN0cy5maW5kKHB1c2hUb0RvKTtcblxuICAgICAgICBmdW5jdGlvbiBwdXNoVG9EbyhfcHJvamVjdCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmKGFsbFByb2plY3RzW2luZGV4XS5nZXRUaXRsZSA9PSBwcm9qZWN0Q2hvaWNlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZSBoYXZlIGEgbWF0Y2hcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHNbaW5kZXhdLmdldEFycmF5KTtcbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0c1tpbmRleF0uZ2V0QXJyYXkucHVzaCh0b0RvRmFjdG9yeSh0aXRsZVRleHQudmFsdWUsIGRlc2NyaXB0aW9uVGV4dC52YWx1ZSwgZHVlRGF0ZVRleHQudmFsdWUsIHByaW9yaXR5VGV4dC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGV0b2RvJykpO1xuICAgICAgICBmb3JtSGVyZSA9ICdubyc7XG4gICAgICAgIHNob3dUb0RvcygpO1xuICAgICAgICB9IGVsc2UgeyByZXR1cm59XG4gICAgfSlcbn1cblxucHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IHNob3dUb0RvVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd3RkdGFiJyk7XG4gICAgY29uc3QgZm9ybU5ld1RvRE8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRldG9kbycpO1xuICAgIGlmKHRvRG9EaXYuY29udGFpbnMocHJvamVjdEZvbGRlcikpIHtcbiAgICAgICAgdG9Eb0Rpdi5yZW1vdmVDaGlsZChwcm9qZWN0Rm9sZGVyKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0cyBmb2xkZXIgaXMgdGhlcmVcIik7XG4gICAgICAgIGlmKCFzaG93VG9Eb1RhYmxlID09IG51bGwpe1xuICAgICAgICAgICAgc2hvd1RvRG9UYWJsZS5jbGFzc0xpc3QuYWRkKCdzaG93dG9kb3RhYmxlJyk7XG4gICAgICAgICAgICBzaG93VG9Eb1RhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3d0b2RvdGFibGUyJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBzaG93UHJvamVjdHMoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0Zm9sZGVyIGlzIG5vdCB0aGVyZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZm9ybU5ld1RvRE8pO1xuICAgICAgICBpZighc2hvd1RvRG9UYWJsZSA9PSBudWxsKXtcbiAgICAgICAgICAgIHNob3dUb0RvVGFibGUuY2xhc3NMaXN0LmFkZCgnc2hvd3RvZG90YWJsZTInKTtcbiAgICAgICAgICAgIHNob3dUb0RvVGFibGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd3RvZG90YWJsZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHRhYmxlJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoZm9ybU5ld1RvRE8gPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Zvcm0gbm8nKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3llcyBmb3JtJyk7XG4gICAgICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGZvcm1OZXdUb0RPKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfVxufVxuKTtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=