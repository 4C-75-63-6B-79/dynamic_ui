"use strict";
(self["webpackChunkdynamic_ui"] = self["webpackChunkdynamic_ui"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n#navbar {\n    background-color: lightskyblue;\n    margin: 20px;\n    padding: 20px 25px;\n    border: 2px solid transparent;\n    border-radius: 50px;\n    min-width: fit-content;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n\n.dropDownMenu {\n    position: relative;\n}\n\nbutton {\n    font-size: 1.5rem;\n    padding: 5px 15px;\n    background-color: lightgreen;\n    outline: none;\n    border: 2px solid black;\n    border-radius: 10px;\n}\n\n.dropDownMenu:hover button{\n    border-radius: 10px 10px 0 0;\n    border-bottom: none;\n}\n\nul {\n    background-color: lightgreen;\n    position: absolute;\n    z-index: 1;\n    top: calc(100% - 2px);\n    left: 0;\n    min-width: 175%;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    display: none;\n}\n\n.dropDownMenu:hover > ul {\n    display: block;\n    border: 2px solid black;\n    border-radius: 0 10px 10px 10px;\n}\n\nli {\n    font-size: 1.1rem;\n    list-style: none;\n    padding: 0.3rem 0.5rem;\n}\n\nli:hover {\n    background-color: #eeeeee51;\n}\n\n#lineMenuButton {\n    background-color: black;\n    border-radius: 50%;\n    display: flex;\n    flex-direction: column;\n    padding: 0.75rem;\n    gap: 4px;\n    position: fixed;\n    top: 10px;\n    left: 10px;\n}\n\nspan {\n    height: 5px;\n    width: 25px;\n    background-color: white;\n    transition: transform 250ms ease-in;\n}\n\n.rotate > span:nth-child(1) {\n    transform: rotate(-45deg);\n}\n\n.rotate > span:nth-child(2) {\n    transform: translateX(0.126rem);\n}\n\n.rotate > span:nth-child(3) {\n    transform: rotate(45deg);\n}\n\n#slider {\n    position: relative;\n    overflow: hidden;\n}\n\n.arrow {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background-color: #9f9f9f5b;\n    position: absolute;\n    top: calc(50% - 20px);\n    z-index: 2;\n}\n\n.arrow:hover {\n    background-color: #9f9f9f7b;\n}\n\n#left {\n    left: 0;\n}\n\n#right {\n    right: 0; \n}\n\n#dotContainer {\n    position: absolute;\n    bottom: 10px;\n    left: 45%;\n    padding: 0.3rem;\n    display: flex;\n    gap: 0.25rem;\n}\n\n.dot {\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: white;\n    z-index: 1;\n}\n\n.clickedDot {\n    background-color: lightseagreen;\n}\n\nimg {\n    width: 60%;\n    transition: transform 250ms ease-in;\n    position: absolute;\n    left: 20%;\n}\n\n.onScreen {\n    position: relative;\n}\n\n.offScreenLeft {\n    transform: translateX(-150%);\n}\n\n.offScreenRight {\n    transform: translateX(150%);\n}\n\n@media(max-width: 400px) {\n    #navbar {\n        position: fixed;\n        top: 0;\n        margin: 60px 5% 0;\n        flex-direction: column;\n        gap: 0.75rem;\n        width: 90%;\n    }\n\n    button {\n        width: 100%;\n    }\n\n    ul {\n        top: 100%;\n        position: relative;\n        min-width: fit-content;\n    }\n\n    .dropDownMenu:hover > ul {\n        display: block;\n        border-top: none;\n        border-radius: 0 0 10px 10px;\n    }\n\n    #slider {\n        margin-top: 100px;\n    }\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;IAC9B,YAAY;IACZ,kBAAkB;IAClB,6BAA6B;IAC7B,mBAAmB;IACnB,sBAAsB;;IAEtB,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,4BAA4B;IAC5B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,kBAAkB;IAClB,UAAU;IACV,qBAAqB;IACrB,OAAO;IACP,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,uBAAuB;IACvB,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,QAAQ;IACR,eAAe;IACf,SAAS;IACT,UAAU;AACd;;AAEA;IACI,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,mCAAmC;AACvC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,2BAA2B;IAC3B,kBAAkB;IAClB,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,eAAe;IACf,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,UAAU;IACV,mCAAmC;IACnC,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI;QACI,eAAe;QACf,MAAM;QACN,iBAAiB;QACjB,sBAAsB;QACtB,YAAY;QACZ,UAAU;IACd;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,SAAS;QACT,kBAAkB;QAClB,sBAAsB;IAC1B;;IAEA;QACI,cAAc;QACd,gBAAgB;QAChB,4BAA4B;IAChC;;IAEA;QACI,iBAAiB;IACrB;AACJ","sourcesContent":["*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n#navbar {\n    background-color: lightskyblue;\n    margin: 20px;\n    padding: 20px 25px;\n    border: 2px solid transparent;\n    border-radius: 50px;\n    min-width: fit-content;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n\n.dropDownMenu {\n    position: relative;\n}\n\nbutton {\n    font-size: 1.5rem;\n    padding: 5px 15px;\n    background-color: lightgreen;\n    outline: none;\n    border: 2px solid black;\n    border-radius: 10px;\n}\n\n.dropDownMenu:hover button{\n    border-radius: 10px 10px 0 0;\n    border-bottom: none;\n}\n\nul {\n    background-color: lightgreen;\n    position: absolute;\n    z-index: 1;\n    top: calc(100% - 2px);\n    left: 0;\n    min-width: 175%;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    display: none;\n}\n\n.dropDownMenu:hover > ul {\n    display: block;\n    border: 2px solid black;\n    border-radius: 0 10px 10px 10px;\n}\n\nli {\n    font-size: 1.1rem;\n    list-style: none;\n    padding: 0.3rem 0.5rem;\n}\n\nli:hover {\n    background-color: #eeeeee51;\n}\n\n#lineMenuButton {\n    background-color: black;\n    border-radius: 50%;\n    display: flex;\n    flex-direction: column;\n    padding: 0.75rem;\n    gap: 4px;\n    position: fixed;\n    top: 10px;\n    left: 10px;\n}\n\nspan {\n    height: 5px;\n    width: 25px;\n    background-color: white;\n    transition: transform 250ms ease-in;\n}\n\n.rotate > span:nth-child(1) {\n    transform: rotate(-45deg);\n}\n\n.rotate > span:nth-child(2) {\n    transform: translateX(0.126rem);\n}\n\n.rotate > span:nth-child(3) {\n    transform: rotate(45deg);\n}\n\n#slider {\n    position: relative;\n    overflow: hidden;\n}\n\n.arrow {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background-color: #9f9f9f5b;\n    position: absolute;\n    top: calc(50% - 20px);\n    z-index: 2;\n}\n\n.arrow:hover {\n    background-color: #9f9f9f7b;\n}\n\n#left {\n    left: 0;\n}\n\n#right {\n    right: 0; \n}\n\n#dotContainer {\n    position: absolute;\n    bottom: 10px;\n    left: 45%;\n    padding: 0.3rem;\n    display: flex;\n    gap: 0.25rem;\n}\n\n.dot {\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: white;\n    z-index: 1;\n}\n\n.clickedDot {\n    background-color: lightseagreen;\n}\n\nimg {\n    width: 60%;\n    transition: transform 250ms ease-in;\n    position: absolute;\n    left: 20%;\n}\n\n.onScreen {\n    position: relative;\n}\n\n.offScreenLeft {\n    transform: translateX(-150%);\n}\n\n.offScreenRight {\n    transform: translateX(150%);\n}\n\n@media(max-width: 400px) {\n    #navbar {\n        position: fixed;\n        top: 0;\n        margin: 60px 5% 0;\n        flex-direction: column;\n        gap: 0.75rem;\n        width: 90%;\n    }\n\n    button {\n        width: 100%;\n    }\n\n    ul {\n        top: 100%;\n        position: relative;\n        min-width: fit-content;\n    }\n\n    .dropDownMenu:hover > ul {\n        display: block;\n        border-top: none;\n        border-radius: 0 0 10px 10px;\n    }\n\n    #slider {\n        margin-top: 100px;\n    }\n}\n\n\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_img_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/img_1.jpg */ "./src/images/img_1.jpg");
/* harmony import */ var _images_img_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/img_2.jpg */ "./src/images/img_2.jpg");
/* harmony import */ var _images_img_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/img_3.jpg */ "./src/images/img_3.jpg");
/* harmony import */ var _images_img_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/img_4.jpg */ "./src/images/img_4.jpg");
/* harmony import */ var _images_img_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/img_5.jpg */ "./src/images/img_5.jpg");
/* harmony import */ var _images_img_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/img_6.jpg */ "./src/images/img_6.jpg");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");









function makeNav() {
    const body = document.querySelector('body');
    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'navbar');
    body.appendChild(navBar);
    return navBar;
}

function makeButton(buttonName) {
    const button = document.createElement('button');
    button.textContent = buttonName;
    return button;
}

function makeDropDownList(list) {
    const dorpDownList = document.createElement('ul');
    list.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        dorpDownList.appendChild(listItem);
    });
    return dorpDownList;
}

function makeDropDownMenu(buttonName, listItems) {
    const dropDownMenu = document.createElement('div');
    dropDownMenu.setAttribute('class', 'dropDownMenu');
    dropDownMenu.appendChild(makeButton(buttonName));
    dropDownMenu.appendChild(makeDropDownList(listItems));
    return dropDownMenu;
}
function lineMenuButtonClicked() {
    const navBar = document.getElementById('navbar');
    const navDisplayValue = navBar.style.display;
    const lineMenuButton = document.getElementById('lineMenuButton');
    if(navDisplayValue === 'none') {
        lineMenuButton.classList.add('rotate');
        navBar.style.display = 'flex';
    } else {
        lineMenuButton.classList.remove('rotate');
        navBar.style.display = 'none';
    }
}

function makeLineButton() {
    if(document.getElementById('lineMenuButton')) {
        const lineButton = document.getElementById('lineMenuButton');
        lineButton.parentElement.removeChild(lineButton);
    }
    const div = document.createElement('div');
    div.setAttribute('id', 'lineMenuButton');
    for(let i=0; i<3; i+=1) {
        const span = document.createElement('span');
        div.appendChild(span);
    }
    div.addEventListener('click', lineMenuButtonClicked, {capture: true});
    return div;
}

function removeLineMenuButton(body) {
    const lineMenuButton = document.getElementById('lineMenuButton');
    if(lineMenuButton) {
        body.removeChild(lineMenuButton);
    }
}

function windowResized() {
    const body = document.querySelector('body');
    const navBar = document.getElementById('navbar');
    if(window.innerWidth < 401) {
        navBar.style.display = 'none';
        body.appendChild(makeLineButton());
    } else {
        removeLineMenuButton(body);
        navBar.style.display = 'flex';
    }
}

function makeSlider() {
    const div = document.createElement('div');
    div.setAttribute('id','slider');
    return div;
}

function addImagesToSlider(imgSrc, slider, pos, classs=null) {
    const img = new Image();
    img.src = imgSrc;
    img.setAttribute('data-pos', pos);
    img.setAttribute('class', classs);
    slider.appendChild(img)
}

function slideImages(event, direction) {
    const arrow = direction || event.target.getAttribute('id');
    const imgNumber = document.querySelectorAll('img[data-pos]').length;
    let img = document.querySelector('#slider > img.onScreen');
    let pos = Number(img.getAttribute('data-pos'));
    let dot = document.querySelector(`div[data-dotIndex="${pos}"]`);
    if(arrow === 'right' && pos+1 < imgNumber) {
        img.classList.remove('onScreen');
        dot.classList.remove('clickedDot');
        img.classList.add('offScreenLeft');
        pos += 1;
        img = document.querySelector(`img[data-pos="${pos}"]`);
        dot = document.querySelector(`div[data-dotIndex="${pos}"]`);
        img.classList.remove('offScreenRight');
        img.classList.add('onScreen');
        dot.classList.add('clickedDot');
    } else if(arrow === 'left' && pos-1 > -1) {
        img.classList.remove('onScreen');
        dot.classList.remove('clickedDot');
        img.classList.add('offScreenRight');
        pos -= 1;
        img = document.querySelector(`img[data-pos="${pos}"]`);
        dot = document.querySelector(`div[data-dotIndex="${pos}"]`);
        img.classList.remove('offScreenLeft');
        img.classList.add('onScreen');
        dot.classList.add('clickedDot');
    }
}

function makeSliderArrow(id) {
    const div = document.createElement('div');
    div.setAttribute('id', id);
    div.setAttribute('class', 'arrow');
    div.addEventListener('click', slideImages);
    return div;
}

function makeSlideDotsContainer() {
    const div = document.createElement('div');
    div.setAttribute('id', 'dotContainer');
    return div;
}

function advanceImages(event, index) {
    const clickedDot = event ? event.target : null;
    const dotIndex = index || clickedDot.getAttribute('data-dotIndex');
    while(true) {
        const currentImage = document.querySelector('img.onScreen');
        const currentImagePos = currentImage.getAttribute('data-pos');
        if(Number(dotIndex) === Number(currentImagePos)) {
            break;
        } else if(Number(dotIndex) > Number(currentImagePos)) {
            slideImages(null, "right");
        } else {
            slideImages(null, 'left');
        }
    }
}

function slidesImgaesInFive() {
    const imgs = document.querySelectorAll('img[data-pos]');
    const imgsLength = imgs.length;
    const currentImage = document.querySelector('img.onScreen');
    const currentImagePos = currentImage.getAttribute('data-pos');
    if(Number(currentImagePos) === imgsLength-1) {
        advanceImages(null, "0");
    } else {
        slideImages(null, 'right');
    }
}

function makeSlidingDots(index) {
    const dot = document.createElement('div');
    dot.setAttribute('data-dotIndex', `${index}`);
    dot.setAttribute('class', 'dot');
    if(index === 0) {
        dot.classList.add('clickedDot');
    }
    dot.addEventListener('click', advanceImages);
    return dot;
}

setInterval(slidesImgaesInFive, 5000);

(function start() {
    const navBar = makeNav();
    navBar.appendChild(makeDropDownMenu('Home', ['Living Room', 'Bed Room', 'Kitchen']));
    navBar.appendChild(makeDropDownMenu('Menu', ['TV Menu', 'Restaurant Menu', 'Microwave Menu']));
    navBar.appendChild(makeDropDownMenu('About', ['About you', 'About anyone']));
    const slider = makeSlider();
    navBar.parentElement.appendChild(slider);
    slider.appendChild(makeSliderArrow('left'));
    const dotContainer = makeSlideDotsContainer();
    slider.appendChild(dotContainer);
    slider.appendChild(makeSliderArrow('right'));
    const imgSrc = [_images_img_1_jpg__WEBPACK_IMPORTED_MODULE_0__, _images_img_2_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_img_3_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_img_4_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_img_5_jpg__WEBPACK_IMPORTED_MODULE_4__, _images_img_6_jpg__WEBPACK_IMPORTED_MODULE_5__];
    for(let i=0; i<imgSrc.length; i+=1) {
        if(i===0) {
            addImagesToSlider(imgSrc[i], slider, i, 'onScreen');
        } else {
            addImagesToSlider(imgSrc[i], slider, i, 'offScreenRight');
        }
        dotContainer.appendChild(makeSlidingDots(i));
    } 
    windowResized();
})();

window.addEventListener('resize', windowResized);


/***/ }),

/***/ "./src/images/img_1.jpg":
/*!******************************!*\
  !*** ./src/images/img_1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e090cc4040a4e7e97d59.jpg";

/***/ }),

/***/ "./src/images/img_2.jpg":
/*!******************************!*\
  !*** ./src/images/img_2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f90d45df7a3cd1280ab.jpg";

/***/ }),

/***/ "./src/images/img_3.jpg":
/*!******************************!*\
  !*** ./src/images/img_3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b74282200431e3b26a81.jpg";

/***/ }),

/***/ "./src/images/img_4.jpg":
/*!******************************!*\
  !*** ./src/images/img_4.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aaba327aa79aaff15de9.jpg";

/***/ }),

/***/ "./src/images/img_5.jpg":
/*!******************************!*\
  !*** ./src/images/img_5.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b280070532e8d9d84b4.jpg";

/***/ }),

/***/ "./src/images/img_6.jpg":
/*!******************************!*\
  !*** ./src/images/img_6.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abed6c779be1f09abf88.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixLQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxjQUFjO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsSUFBSTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELElBQUk7QUFDMUQsMkRBQTJELElBQUk7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELElBQUk7QUFDMUQsMkRBQTJELElBQUk7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsTUFBTTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhDQUFJLEVBQUUsOENBQUksRUFBRSw4Q0FBSSxFQUFFLDhDQUFJLEVBQUUsOENBQUksRUFBRSw4Q0FBSTtBQUN0RCxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljX3VpLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZHluYW1pY191aS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZHluYW1pY191aS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2R5bmFtaWNfdWkvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2R5bmFtaWNfdWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZHluYW1pY191aS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZHluYW1pY191aS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9keW5hbWljX3VpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2R5bmFtaWNfdWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9keW5hbWljX3VpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZHluYW1pY191aS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jbmF2YmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMjVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uZHJvcERvd25NZW51IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZHJvcERvd25NZW51OmhvdmVyIGJ1dHRvbntcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxudWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogY2FsYygxMDAlIC0gMnB4KTtcXG4gICAgbGVmdDogMDtcXG4gICAgbWluLXdpZHRoOiAxNzUlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZHJvcERvd25NZW51OmhvdmVyID4gdWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDEwcHg7XFxufVxcblxcbmxpIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTUxO1xcbn1cXG5cXG4jbGluZU1lbnVCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgICBnYXA6IDRweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGxlZnQ6IDEwcHg7XFxufVxcblxcbnNwYW4ge1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbjtcXG59XFxuXFxuLnJvdGF0ZSA+IHNwYW46bnRoLWNoaWxkKDEpIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLnJvdGF0ZSA+IHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuMTI2cmVtKTtcXG59XFxuXFxuLnJvdGF0ZSA+IHNwYW46bnRoLWNoaWxkKDMpIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4jc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZjlmOWY1YjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMjBweCk7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5hcnJvdzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZjlmOWY3YjtcXG59XFxuXFxuI2xlZnQge1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4jcmlnaHQge1xcbiAgICByaWdodDogMDsgXFxufVxcblxcbiNkb3RDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTBweDtcXG4gICAgbGVmdDogNDUlO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuLmRvdCB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5jbGlja2VkRG90IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG59XFxuXFxuaW1nIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMjAlO1xcbn1cXG5cXG4ub25TY3JlZW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5vZmZTY3JlZW5MZWZ0IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcXG59XFxuXFxuLm9mZlNjcmVlblJpZ2h0IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MCUpO1xcbn1cXG5cXG5AbWVkaWEobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgICAjbmF2YmFyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIG1hcmdpbjogNjBweCA1JSAwO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMC43NXJlbTtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIHVsIHtcXG4gICAgICAgIHRvcDogMTAwJTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIH1cXG5cXG4gICAgLmRyb3BEb3duTWVudTpob3ZlciA+IHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgI3NsaWRlciB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgfVxcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHNCQUFzQjs7SUFFdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsT0FBTztJQUNQLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixNQUFNO1FBQ04saUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osVUFBVTtJQUNkOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksU0FBUztRQUNULGtCQUFrQjtRQUNsQixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jbmF2YmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMjVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uZHJvcERvd25NZW51IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZHJvcERvd25NZW51OmhvdmVyIGJ1dHRvbntcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxudWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogY2FsYygxMDAlIC0gMnB4KTtcXG4gICAgbGVmdDogMDtcXG4gICAgbWluLXdpZHRoOiAxNzUlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZHJvcERvd25NZW51OmhvdmVyID4gdWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDEwcHg7XFxufVxcblxcbmxpIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTUxO1xcbn1cXG5cXG4jbGluZU1lbnVCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgICBnYXA6IDRweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGxlZnQ6IDEwcHg7XFxufVxcblxcbnNwYW4ge1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbjtcXG59XFxuXFxuLnJvdGF0ZSA+IHNwYW46bnRoLWNoaWxkKDEpIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLnJvdGF0ZSA+IHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuMTI2cmVtKTtcXG59XFxuXFxuLnJvdGF0ZSA+IHNwYW46bnRoLWNoaWxkKDMpIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4jc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZjlmOWY1YjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMjBweCk7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5hcnJvdzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZjlmOWY3YjtcXG59XFxuXFxuI2xlZnQge1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4jcmlnaHQge1xcbiAgICByaWdodDogMDsgXFxufVxcblxcbiNkb3RDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTBweDtcXG4gICAgbGVmdDogNDUlO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuLmRvdCB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5jbGlja2VkRG90IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG59XFxuXFxuaW1nIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMjAlO1xcbn1cXG5cXG4ub25TY3JlZW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5vZmZTY3JlZW5MZWZ0IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcXG59XFxuXFxuLm9mZlNjcmVlblJpZ2h0IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MCUpO1xcbn1cXG5cXG5AbWVkaWEobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgICAjbmF2YmFyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIG1hcmdpbjogNjBweCA1JSAwO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMC43NXJlbTtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIHVsIHtcXG4gICAgICAgIHRvcDogMTAwJTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIH1cXG5cXG4gICAgLmRyb3BEb3duTWVudTpob3ZlciA+IHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgI3NsaWRlciB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgfVxcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBpbWcxIGZyb20gXCIuL2ltYWdlcy9pbWdfMS5qcGdcIjtcbmltcG9ydCBpbWcyIGZyb20gXCIuL2ltYWdlcy9pbWdfMi5qcGdcIjtcbmltcG9ydCBpbWczIGZyb20gXCIuL2ltYWdlcy9pbWdfMy5qcGdcIjtcbmltcG9ydCBpbWc0IGZyb20gXCIuL2ltYWdlcy9pbWdfNC5qcGdcIjtcbmltcG9ydCBpbWc1IGZyb20gXCIuL2ltYWdlcy9pbWdfNS5qcGdcIjtcbmltcG9ydCBpbWc2IGZyb20gXCIuL2ltYWdlcy9pbWdfNi5qcGdcIjtcblxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5mdW5jdGlvbiBtYWtlTmF2KCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2QmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2YmFyJyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAgIHJldHVybiBuYXZCYXI7XG59XG5cbmZ1bmN0aW9uIG1ha2VCdXR0b24oYnV0dG9uTmFtZSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvbk5hbWU7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gbWFrZURyb3BEb3duTGlzdChsaXN0KSB7XG4gICAgY29uc3QgZG9ycERvd25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICBkb3JwRG93bkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuICAgIHJldHVybiBkb3JwRG93bkxpc3Q7XG59XG5cbmZ1bmN0aW9uIG1ha2VEcm9wRG93bk1lbnUoYnV0dG9uTmFtZSwgbGlzdEl0ZW1zKSB7XG4gICAgY29uc3QgZHJvcERvd25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJvcERvd25NZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHJvcERvd25NZW51Jyk7XG4gICAgZHJvcERvd25NZW51LmFwcGVuZENoaWxkKG1ha2VCdXR0b24oYnV0dG9uTmFtZSkpO1xuICAgIGRyb3BEb3duTWVudS5hcHBlbmRDaGlsZChtYWtlRHJvcERvd25MaXN0KGxpc3RJdGVtcykpO1xuICAgIHJldHVybiBkcm9wRG93bk1lbnU7XG59XG5mdW5jdGlvbiBsaW5lTWVudUJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcicpO1xuICAgIGNvbnN0IG5hdkRpc3BsYXlWYWx1ZSA9IG5hdkJhci5zdHlsZS5kaXNwbGF5O1xuICAgIGNvbnN0IGxpbmVNZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmVNZW51QnV0dG9uJyk7XG4gICAgaWYobmF2RGlzcGxheVZhbHVlID09PSAnbm9uZScpIHtcbiAgICAgICAgbGluZU1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgncm90YXRlJyk7XG4gICAgICAgIG5hdkJhci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmVNZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZScpO1xuICAgICAgICBuYXZCYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VMaW5lQnV0dG9uKCkge1xuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5lTWVudUJ1dHRvbicpKSB7XG4gICAgICAgIGNvbnN0IGxpbmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluZU1lbnVCdXR0b24nKTtcbiAgICAgICAgbGluZUJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGxpbmVCdXR0b24pO1xuICAgIH1cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdsaW5lTWVudUJ1dHRvbicpO1xuICAgIGZvcihsZXQgaT0wOyBpPDM7IGkrPTEpIHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaW5lTWVudUJ1dHRvbkNsaWNrZWQsIHtjYXB0dXJlOiB0cnVlfSk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTGluZU1lbnVCdXR0b24oYm9keSkge1xuICAgIGNvbnN0IGxpbmVNZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmVNZW51QnV0dG9uJyk7XG4gICAgaWYobGluZU1lbnVCdXR0b24pIHtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChsaW5lTWVudUJ1dHRvbik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB3aW5kb3dSZXNpemVkKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcicpO1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgNDAxKSB7XG4gICAgICAgIG5hdkJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1ha2VMaW5lQnV0dG9uKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUxpbmVNZW51QnV0dG9uKGJvZHkpO1xuICAgICAgICBuYXZCYXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VTbGlkZXIoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdzbGlkZXInKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBhZGRJbWFnZXNUb1NsaWRlcihpbWdTcmMsIHNsaWRlciwgcG9zLCBjbGFzc3M9bnVsbCkge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBpbWdTcmM7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3MnLCBwb3MpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NzKTtcbiAgICBzbGlkZXIuYXBwZW5kQ2hpbGQoaW1nKVxufVxuXG5mdW5jdGlvbiBzbGlkZUltYWdlcyhldmVudCwgZGlyZWN0aW9uKSB7XG4gICAgY29uc3QgYXJyb3cgPSBkaXJlY3Rpb24gfHwgZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBjb25zdCBpbWdOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWdbZGF0YS1wb3NdJykubGVuZ3RoO1xuICAgIGxldCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xpZGVyID4gaW1nLm9uU2NyZWVuJyk7XG4gICAgbGV0IHBvcyA9IE51bWJlcihpbWcuZ2V0QXR0cmlidXRlKCdkYXRhLXBvcycpKTtcbiAgICBsZXQgZG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtZG90SW5kZXg9XCIke3Bvc31cIl1gKTtcbiAgICBpZihhcnJvdyA9PT0gJ3JpZ2h0JyAmJiBwb3MrMSA8IGltZ051bWJlcikge1xuICAgICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnb25TY3JlZW4nKTtcbiAgICAgICAgZG90LmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWREb3QnKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ29mZlNjcmVlbkxlZnQnKTtcbiAgICAgICAgcG9zICs9IDE7XG4gICAgICAgIGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGltZ1tkYXRhLXBvcz1cIiR7cG9zfVwiXWApO1xuICAgICAgICBkb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1kb3RJbmRleD1cIiR7cG9zfVwiXWApO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnb2ZmU2NyZWVuUmlnaHQnKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ29uU2NyZWVuJyk7XG4gICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkRG90Jyk7XG4gICAgfSBlbHNlIGlmKGFycm93ID09PSAnbGVmdCcgJiYgcG9zLTEgPiAtMSkge1xuICAgICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnb25TY3JlZW4nKTtcbiAgICAgICAgZG90LmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWREb3QnKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ29mZlNjcmVlblJpZ2h0Jyk7XG4gICAgICAgIHBvcyAtPSAxO1xuICAgICAgICBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbWdbZGF0YS1wb3M9XCIke3Bvc31cIl1gKTtcbiAgICAgICAgZG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtZG90SW5kZXg9XCIke3Bvc31cIl1gKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoJ29mZlNjcmVlbkxlZnQnKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ29uU2NyZWVuJyk7XG4gICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkRG90Jyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlU2xpZGVyQXJyb3coaWQpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhcnJvdycpO1xuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNsaWRlSW1hZ2VzKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBtYWtlU2xpZGVEb3RzQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RvdENvbnRhaW5lcicpO1xuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGFkdmFuY2VJbWFnZXMoZXZlbnQsIGluZGV4KSB7XG4gICAgY29uc3QgY2xpY2tlZERvdCA9IGV2ZW50ID8gZXZlbnQudGFyZ2V0IDogbnVsbDtcbiAgICBjb25zdCBkb3RJbmRleCA9IGluZGV4IHx8IGNsaWNrZWREb3QuZ2V0QXR0cmlidXRlKCdkYXRhLWRvdEluZGV4Jyk7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcub25TY3JlZW4nKTtcbiAgICAgICAgY29uc3QgY3VycmVudEltYWdlUG9zID0gY3VycmVudEltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1wb3MnKTtcbiAgICAgICAgaWYoTnVtYmVyKGRvdEluZGV4KSA9PT0gTnVtYmVyKGN1cnJlbnRJbWFnZVBvcykpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYoTnVtYmVyKGRvdEluZGV4KSA+IE51bWJlcihjdXJyZW50SW1hZ2VQb3MpKSB7XG4gICAgICAgICAgICBzbGlkZUltYWdlcyhudWxsLCBcInJpZ2h0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2xpZGVJbWFnZXMobnVsbCwgJ2xlZnQnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2xpZGVzSW1nYWVzSW5GaXZlKCkge1xuICAgIGNvbnN0IGltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWdbZGF0YS1wb3NdJyk7XG4gICAgY29uc3QgaW1nc0xlbmd0aCA9IGltZ3MubGVuZ3RoO1xuICAgIGNvbnN0IGN1cnJlbnRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5vblNjcmVlbicpO1xuICAgIGNvbnN0IGN1cnJlbnRJbWFnZVBvcyA9IGN1cnJlbnRJbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zJyk7XG4gICAgaWYoTnVtYmVyKGN1cnJlbnRJbWFnZVBvcykgPT09IGltZ3NMZW5ndGgtMSkge1xuICAgICAgICBhZHZhbmNlSW1hZ2VzKG51bGwsIFwiMFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZUltYWdlcyhudWxsLCAncmlnaHQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VTbGlkaW5nRG90cyhpbmRleCkge1xuICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZG90SW5kZXgnLCBgJHtpbmRleH1gKTtcbiAgICBkb3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdkb3QnKTtcbiAgICBpZihpbmRleCA9PT0gMCkge1xuICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZERvdCcpO1xuICAgIH1cbiAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZHZhbmNlSW1hZ2VzKTtcbiAgICByZXR1cm4gZG90O1xufVxuXG5zZXRJbnRlcnZhbChzbGlkZXNJbWdhZXNJbkZpdmUsIDUwMDApO1xuXG4oZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgY29uc3QgbmF2QmFyID0gbWFrZU5hdigpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtYWtlRHJvcERvd25NZW51KCdIb21lJywgWydMaXZpbmcgUm9vbScsICdCZWQgUm9vbScsICdLaXRjaGVuJ10pKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobWFrZURyb3BEb3duTWVudSgnTWVudScsIFsnVFYgTWVudScsICdSZXN0YXVyYW50IE1lbnUnLCAnTWljcm93YXZlIE1lbnUnXSkpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtYWtlRHJvcERvd25NZW51KCdBYm91dCcsIFsnQWJvdXQgeW91JywgJ0Fib3V0IGFueW9uZSddKSk7XG4gICAgY29uc3Qgc2xpZGVyID0gbWFrZVNsaWRlcigpO1xuICAgIG5hdkJhci5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHNsaWRlcik7XG4gICAgc2xpZGVyLmFwcGVuZENoaWxkKG1ha2VTbGlkZXJBcnJvdygnbGVmdCcpKTtcbiAgICBjb25zdCBkb3RDb250YWluZXIgPSBtYWtlU2xpZGVEb3RzQ29udGFpbmVyKCk7XG4gICAgc2xpZGVyLmFwcGVuZENoaWxkKGRvdENvbnRhaW5lcik7XG4gICAgc2xpZGVyLmFwcGVuZENoaWxkKG1ha2VTbGlkZXJBcnJvdygncmlnaHQnKSk7XG4gICAgY29uc3QgaW1nU3JjID0gW2ltZzEsIGltZzIsIGltZzMsIGltZzQsIGltZzUsIGltZzZdO1xuICAgIGZvcihsZXQgaT0wOyBpPGltZ1NyYy5sZW5ndGg7IGkrPTEpIHtcbiAgICAgICAgaWYoaT09PTApIHtcbiAgICAgICAgICAgIGFkZEltYWdlc1RvU2xpZGVyKGltZ1NyY1tpXSwgc2xpZGVyLCBpLCAnb25TY3JlZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZEltYWdlc1RvU2xpZGVyKGltZ1NyY1tpXSwgc2xpZGVyLCBpLCAnb2ZmU2NyZWVuUmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBkb3RDb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZVNsaWRpbmdEb3RzKGkpKTtcbiAgICB9IFxuICAgIHdpbmRvd1Jlc2l6ZWQoKTtcbn0pKCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB3aW5kb3dSZXNpemVkKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==