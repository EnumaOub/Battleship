"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
}

body {
    font-family: system-ui, sans-serif; 
}

/* Header parameters */

header {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    border-bottom: 1px solid rgb(0,0,0);
    box-shadow: 1rem 0 1rem var(--shadow-box);
    background-color: var(--back-header);
}

header h1 {
    font-size: 3rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
}

/* Footer */

footer {
    position: fixed;
    bottom: 0;
    background-color: var(--back-header);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    padding: 1rem 3rem;
    border-top: 1px solid rgb(0,0,0);
    box-shadow: 1rem 0 1rem var(--shadow-box);

}

/* Main */

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;
}

.player {
    display: flex;
    gap: 1rem;
}

.player .active label {
    font-weight: 800;
}

.player .active input {
    background-color: rgba(0, 0, 255, 0.2);
}

.player1, .player2 {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.player1 label, .player2 label {
    align-self: center;
}

.player1 input, .player2 input {
    padding: 0.5rem;
    border: 1px solid black;
    border-radius: 2rem;
    font-size: 1.2rem;
}

.player1 input:focus, .player2 input:focus {
    outline: 2px solid black;
}

.info-board input {
    max-width: 3rem;
}

.parameters {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.board-size {
    display: flex;
    flex-direction: row;
    gap: .5rem;
}

#run-game {
    border-radius: 2rem;
    border: 1px solid ;
    box-shadow: 0.05rem 0 0.05rem 0.05rem;
    width: 20rem;
    cursor: pointer;
    font-size: 1.5rem;
    background-color: rgba(117, 117, 248, 0.705);
}

/* Gameboard */

.grid, .board-ship1, .board-ship2 {
    display: grid;
    grid-template-columns: repeat(3, 5rem);
    grid-template-rows: repeat(3, 5rem);
}

.grid div, .board-ship1 div, .board-ship2 div {
    border: 1px solid rgba(0, 0, 0, 0.6);
}

.grid_elem {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
}

.grid_elem {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
}

.grid_elem:hover {
    background-color: rgba(0, 0, 255, 0.1);
}

.grid_elem.won {
    background-color: rgba(0, 255, 0, 0.4);
}

#info-game{
    display: flex;
    flex-direction: row;
}

#info-r {
    margin-top: .2rem;
}

/* Dialog */

dialog {
    position: absolute;
    top: 40%;
    left: 30%;
    width: 40%;
    background-color: var(--back-shelves);
}


dialog div {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

dialog::backdrop {
    background-color: rgba(153, 153, 153, 0.781);
}
dialog button {
    margin-top: 1rem;
    border-radius: 2rem;
    border: 1px solid black;
    font-size: 1.2rem;
    padding: 0.5rem;
    cursor: pointer;
}



dialog #result-game {
    font-size: 2rem;
    font-weight: 800;
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kCAAkC;AACtC;;AAEA,sBAAsB;;AAEtB;IACI,gBAAgB;IAChB,MAAM;IACN,OAAO;IACP,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,mCAAmC;IACnC,yCAAyC;IACzC,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA,WAAW;;AAEX;IACI,eAAe;IACf,SAAS;IACT,oCAAoC;IACpC,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,gCAAgC;IAChC,yCAAyC;;AAE7C;;AAEA,SAAS;;AAET;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,qCAAqC;IACrC,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,4CAA4C;AAChD;;AAEA,cAAc;;AAEd;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,WAAW;;AAEX;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,UAAU;IACV,qCAAqC;AACzC;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,4CAA4C;AAChD;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,eAAe;IACf,eAAe;AACnB;;;;AAIA;IACI,eAAe;IACf,gBAAgB;AACpB","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\nbody {\n    font-family: system-ui, sans-serif; \n}\n\n/* Header parameters */\n\nheader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 3rem;\n    border-bottom: 1px solid rgb(0,0,0);\n    box-shadow: 1rem 0 1rem var(--shadow-box);\n    background-color: var(--back-header);\n}\n\nheader h1 {\n    font-size: 3rem;\n    margin-top: 0.5rem;\n    margin-left: 0.5rem;\n}\n\n/* Footer */\n\nfooter {\n    position: fixed;\n    bottom: 0;\n    background-color: var(--back-header);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2rem;\n    padding: 1rem 3rem;\n    border-top: 1px solid rgb(0,0,0);\n    box-shadow: 1rem 0 1rem var(--shadow-box);\n\n}\n\n/* Main */\n\nmain {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    margin-top: 1rem;\n}\n\n.player {\n    display: flex;\n    gap: 1rem;\n}\n\n.player .active label {\n    font-weight: 800;\n}\n\n.player .active input {\n    background-color: rgba(0, 0, 255, 0.2);\n}\n\n.player1, .player2 {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.player1 label, .player2 label {\n    align-self: center;\n}\n\n.player1 input, .player2 input {\n    padding: 0.5rem;\n    border: 1px solid black;\n    border-radius: 2rem;\n    font-size: 1.2rem;\n}\n\n.player1 input:focus, .player2 input:focus {\n    outline: 2px solid black;\n}\n\n.info-board input {\n    max-width: 3rem;\n}\n\n.parameters {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n.board-size {\n    display: flex;\n    flex-direction: row;\n    gap: .5rem;\n}\n\n#run-game {\n    border-radius: 2rem;\n    border: 1px solid ;\n    box-shadow: 0.05rem 0 0.05rem 0.05rem;\n    width: 20rem;\n    cursor: pointer;\n    font-size: 1.5rem;\n    background-color: rgba(117, 117, 248, 0.705);\n}\n\n/* Gameboard */\n\n.grid, .board-ship1, .board-ship2 {\n    display: grid;\n    grid-template-columns: repeat(3, 5rem);\n    grid-template-rows: repeat(3, 5rem);\n}\n\n.grid div, .board-ship1 div, .board-ship2 div {\n    border: 1px solid rgba(0, 0, 0, 0.6);\n}\n\n.grid_elem {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1rem;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.grid_elem {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1rem;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.grid_elem:hover {\n    background-color: rgba(0, 0, 255, 0.1);\n}\n\n.grid_elem.won {\n    background-color: rgba(0, 255, 0, 0.4);\n}\n\n#info-game{\n    display: flex;\n    flex-direction: row;\n}\n\n#info-r {\n    margin-top: .2rem;\n}\n\n/* Dialog */\n\ndialog {\n    position: absolute;\n    top: 40%;\n    left: 30%;\n    width: 40%;\n    background-color: var(--back-shelves);\n}\n\n\ndialog div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\ndialog::backdrop {\n    background-color: rgba(153, 153, 153, 0.781);\n}\ndialog button {\n    margin-top: 1rem;\n    border-radius: 2rem;\n    border: 1px solid black;\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    cursor: pointer;\n}\n\n\n\ndialog #result-game {\n    font-size: 2rem;\n    font-weight: 800;\n}"],"sourceRoot":""}]);
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _modules_ui_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui/ui */ "./src/modules/ui/ui.js");


console.log("TEST")
;(0,_modules_ui_ui__WEBPACK_IMPORTED_MODULE_1__.UI)();


/***/ }),

/***/ "./src/modules/internal/Gameboard.js":
/*!*******************************************!*\
  !*** ./src/modules/internal/Gameboard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/modules/internal/Ship.js");


class Gameboard {
    constructor(xSize, ySize) {
        this.shipArr = [];
        this.xSize = xSize;
        this.ySize = ySize;
        this.attackNb = 0;
        this.attackMissed = 0;
        this.shipAlive = 0;
        this.possibleMove = []
        this.boardT = this.initBoard(ySize, xSize, ".");
        this.boardG = this.initBoard(ySize, xSize, "");
    };

    initBoard(cols, rows, data) {
        const array = [];
        for (let i = 0; i < rows; i++) {
            array[i] = [];
            for (let j = 0; j < cols; j++) {
                array[i][j] = data;
                this.possibleMove.push([i, j])
            }
        }
        return array;
    }

    populateShip(ship) {
        if (ship.position === "HORIZONTAL") {
            this.boardT[ship.coordInit[0]][ship.coordInit[1]] = '|';
            this.boardT[ship.coordFin[0]][ship.coordInit[1]] = '>';
            for (let i=ship.coordInit[0]+1; i<=ship.coordFin[0]-1; i++) {
                this.boardT[i][ship.coordInit[1]] = '--';
            }
        }
        else if (ship.position === "VERTICAL") {
            this.boardT[ship.coordInit[0]][ship.coordInit[1]] = '^';
            this.boardT[ship.coordInit[0]][ship.coordFin[1]] = '__';
            for (let i=ship.coordInit[1]+1; i<=ship.coordFin[1]-1; i++) {
                this.boardT[ship.coordInit[0]][i] = '|';
            }
        }
    };

    transpose(arr) {
        let [row] = arr
        return row.map((value, column) => arr.map(row => row[column]))
      }

    showBoard() {
        let i = 0;
        const boardV = this.transpose([...this.boardT])
        console.log([' '].concat(Array.from(Array(8).keys())).toString().replace(/,/g,' '));
        boardV.forEach((line) => {
            console.log(`${i} ${line.toString().replace(/,/g,' ')}`)
            i++;
        })
    }

    resetShip() {
        this.shipArr = [];
        this.attackNb = 0;
        this.attackMissed = 0;
        this.shipAlive = 0;
        this.possibleMove = []
        this.boardT = this.initBoard(this.ySize, this.xSize, ".");
        this.boardG = this.initBoard(this.ySize, this.xSize, "");
    }

    generateRandomShip() {
        let ship = null;
        while (!ship) {
            const coordInit = this.possibleMove[Math.floor(Math.random()*this.possibleMove.length)];
            if (this.checkCoordinate(coordInit) && this.checkShipCoord(coordInit)) {
                const length = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
                let coordFin;
                if (Math.random() < 0.5) {
                    coordFin = [coordInit[0], coordInit[1] + length];
                }
                else {
                    coordFin = [coordInit[0] + length, coordInit[1]];
                }
                if (this.checkCoordinate(coordFin) && this.checkShipCoord(coordFin)) {
                    this.addShip(coordInit, coordFin);
                    ship = true;
                }
            }
            
        }
        
    }

    addShip(coordInit, coordFin) {
        if (this.checkCoordinate(coordInit) && this.checkCoordinate(coordFin)) {
            const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](coordInit, coordFin)
            this.shipArr.push(ship);
            this.populateShip(ship);
            this.shipAlive++;
        };
    };

    checkShipCoord(coord) {
        let checkShip = true;
        this.shipArr.forEach((ship) => {
            if (ship.position === "HORIZONTAL" && coord[1] === ship.coordInit[1]) {
                checkShip = !(coord[0] >= ship.coordInit[0] && coord[0] <= ship.coordFin[0]) 
            }
            else if (ship.position === "VERTICAL" && coord[0] === ship.coordInit[0]) {
                checkShip = !(coord[1] >= ship.coordInit[1] && coord[1] <= ship.coordFin[1]) 
            }
        })
        return checkShip;
    }

    checkCoordinate(coord) {
        return coord[0] < this.xSize && coord[1] < this.ySize
    }

    checkShipAttack(ship, coord) {
        if (ship.position === "HORIZONTAL" && coord[1] === ship.coordInit[1]) {
            return coord[0] >= ship.coordInit[0] && coord[0] <= ship.coordFin[0] 
        }
        else if (ship.position === "VERTICAL" && coord[0] === ship.coordInit[0]) {
            return coord[1] >= ship.coordInit[1] && coord[1] <= ship.coordFin[1] 
        }
        else {
            return false
        }
    }

    receiveAttack(coord) {
        if(this.checkCoordinate(coord)) {
            let touched = null;
        
            for (let i=0; i<this.shipAlive; i++) {
                if (this.checkShipAttack(this.shipArr[i], coord)) {
                    touched = i;
                }
            }
            this.attackNb++;
            this.boardT[coord[0]][coord[1]] = "x";
            this.possibleMove = this.possibleMove.filter(coordd => coordd.toString() !== coord.toString());
            if (touched !== null) {
                this.boardG[coord[0]][coord[1]] = "o";
                this.shipArr[touched].hit();
                if (this.shipArr[touched].sunk) {
                    this.shipArr.splice(touched, 1);
                    this.shipAlive--;
                }
                return true;
            }
            else {
                this.boardG[coord[0]][coord[1]] = "x";
                this.attackMissed++;
                return false;
            }
        }
        
    };
};


/***/ }),

/***/ "./src/modules/internal/Player.js":
/*!****************************************!*\
  !*** ./src/modules/internal/Player.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/modules/internal/Gameboard.js");


class Player {
    constructor(name, realP, xSize, ySize) {
        this.realP = realP;
        this.name = name;
        this.active = false;
        this.board = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](xSize, ySize);
    };

    setName(name) {
        this.name = name;
    };

    toggleActive() {
        this.active= !this.active;
    }
}


/***/ }),

/***/ "./src/modules/internal/Ship.js":
/*!**************************************!*\
  !*** ./src/modules/internal/Ship.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(coordInit, coordFin) {
        this.hitNb = 0;
        this.sunk = false;
        if (coordInit[0] === coordFin[0] && coordInit[1] !== coordFin[1]) {
            this.length = Math.abs(coordInit[1]-coordFin[1]) + 1
            this.position = "VERTICAL";
            this.coordInit = coordInit[1] < coordFin[1] ? coordInit: coordFin;
            this.coordFin = coordInit[1] > coordFin[1] ? coordInit: coordFin;
        }
        else if (coordInit[1] === coordFin[1] && coordInit[0] !== coordFin[0]) {
            this.length = Math.abs(coordInit[0]-coordFin[0]) + 1
            this.position = "HORIZONTAL";
            this.coordInit = coordInit[0] < coordFin[0] ? coordInit: coordFin;
            this.coordFin = coordInit[0] > coordFin[0] ? coordInit: coordFin;
        }
        else {
            throw new Error(`The coordinate given ${coordInit} and ${coordFin} doesn't allow the creation of a ship`);
        }
    }

    hit() {
        this.hitNb++;
        this.isSunk();
    }

    isSunk() {
        if (this.hitNb === this.length) {
            this.sunk = true;
            return true;
        }
        return false;
    }
};


/***/ }),

/***/ "./src/modules/ui/ControlGame.js":
/*!***************************************!*\
  !*** ./src/modules/ui/ControlGame.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlGame: () => (/* binding */ ControlGame)
/* harmony export */ });


const ControlGame = function() {
    const dealResult = function(result, nbShip, target, player) {
        const containerInfo = document.getElementById("info-r");
        const playerActive = document.getElementById("playerG").textContent
        if (result) {
            target.textContent = "O";
            target.style["background-color"] = "rgba(0,255,0,.3)"
            if (nbShip === player.board.shipAlive) {
                containerInfo.textContent = `: ${playerActive} Touched`
            }
            else {
                containerInfo.textContent = `: ${playerActive} has sunk a boat`
            }
        }
        else {
            target.textContent = "X";
            target.style["background-color"] = "rgba(255,0,0,.3)"
            containerInfo.textContent = `: ${playerActive} Missed`
            
        }
    }

    const attackC = function(event, player) {
        let target = event.target;
        const nbShip = player.board.shipAlive;
        if (target.className != "grid_elem") return
        let [yCoord, xCoord] = target.id.match(/\d+/g);
        const result = player.board.receiveAttack([Number(xCoord), Number(yCoord)]);
        dealResult(result, nbShip, target, player);
        return result;
    };

    const attackRandom = function(player) {
        
        const nbShip = player.board.shipAlive;
        const possibleMove = player.board.possibleMove;
        const coord = possibleMove[Math.floor(Math.random()*possibleMove.length)];
        const target = document.getElementById(`r_${coord[1]}_c_${coord[0]}`)
        const result = player.board.receiveAttack([Number(coord[0]), Number(coord[1])]);
        dealResult(result, nbShip, target, player);
        return result;

    }

    return {
        attackC,
        attackRandom
    };
};

/***/ }),

/***/ "./src/modules/ui/CreateGame.js":
/*!**************************************!*\
  !*** ./src/modules/ui/CreateGame.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateGame: () => (/* binding */ CreateGame)
/* harmony export */ });
/* harmony import */ var _internal_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/Player */ "./src/modules/internal/Player.js");
/* harmony import */ var _ControlGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlGame */ "./src/modules/ui/ControlGame.js");



const CreateGame = function() {


    const controller = (0,_ControlGame__WEBPACK_IMPORTED_MODULE_1__.ControlGame)();
   
    const addShip = function(coord, player) {
        player.board.addShip(coord[0], coord[1])
    };

    const randomShip = function(player, nbShip=3){
        console.log(player.board)
        player.board.resetShip();
        console.log(player.board)
        for (let i=0; i<nbShip; i++){
            player.board.generateRandomShip();
        }
        console.log(player.board)
    }

    const createPlayer = function(name, active=false) {
        const playerName = document.getElementById(`${name}-name`).value ? document.getElementById(`${name}-name`).value: name;
        const sizeX = document.getElementById('coordX').value;
        const sizeY = document.getElementById('coordY').value;
        const realP = document.getElementById(`${name}-realp`).checked;
        const player = new _internal_Player__WEBPACK_IMPORTED_MODULE_0__["default"](playerName, realP, sizeX, sizeY);
        if (active) {
            player.toggleActive();
        }
        randomShip(player);
        return player;
    };

    let players = {
        player1: createPlayer("player1", true),
        player2: createPlayer("player2"),
    };

    const getActivePlayer = function() {
        for (const player in players) {
            if (players[player].active) {
                return player;
            }
        }
        return null
    };

    const getNonActivePlayer = function() {
        for (const player in players) {
            if (!players[player].active) {
                return player;
            }
        }
        return null
    }

    const changePlayer = function() {
        const playerActive = getActivePlayer();
        const playerNonActive = getNonActivePlayer();
        players[playerActive].toggleActive();
        players[playerNonActive].toggleActive();
    }

    const attack = function() {
        if (!players[getActivePlayer()].realP) {
            const resAttack = controller.attackRandom(players[getNonActivePlayer()]);
            checkResAttack(resAttack);
            
        }
    }

    const checkResAttack = function(resAttack) {
        
            
        if (!resAttack) {
            changePlayer()
        }
        showPlayer()
        generateBoard(players[getNonActivePlayer()].board.boardG, "grid")
        console.log(players)
        if (players[getNonActivePlayer()].board.shipAlive === 0){
            endGame();
        }
        else {
            
            setTimeout(function(){attack();}, 200);
        }
    }


    const generateBoard = function(board, name) {
        const rows = board[0].length;
        const cols = board.length;
        const container = document.getElementsByClassName(name)[0];
        container.innerHTML = "";
        container.style["grid-template-columns"] = `repeat(${cols}, 2rem)`
        container.style["grid-template-rows"] = `repeat(${rows}, 2rem)`
        for (let row=0; row<rows; row++) {
            for (let col=0; col<cols; col++) {
                const grid_elem = document.createElement("div");
                grid_elem.className = "grid_elem";
                grid_elem.id = `r_${row}_c_${col}`;
                grid_elem.textContent = board[col][row];
                container.appendChild(grid_elem);
            }
        }
        container.onclick = function(event) {
            const resAttack = controller.attackC(event, players[getNonActivePlayer()]);
            
            checkResAttack(resAttack);
            
        }
    };

    const endGame = function() {
        const container = document.getElementsByClassName("grid")[0];
        const playerWin = players[getActivePlayer()];
        container.innerHTML = "";
        container.textContent = `${playerWin.name} Win the Game`
    }

    const showPlayer = function() {
        const title = document.getElementById("playerG");
        title.textContent = players[getActivePlayer()].name;
    }

    return { 
        players, 
        generateBoard,
        showPlayer,
        getActivePlayer,
        attack,
        randomShip
    };
};

/***/ }),

/***/ "./src/modules/ui/ui.js":
/*!******************************!*\
  !*** ./src/modules/ui/ui.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _CreateGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateGame */ "./src/modules/ui/CreateGame.js");


const runGame = function(game) {
    game.showPlayer()
    game.generateBoard(game.players.player1.board.boardG, "grid")
    if (!game.players.player1.realP){
        game.attack()
    }
}

const UI = function() {
    const buttonRun = document.getElementById("run-game");


    buttonRun.addEventListener("click", (event) => {
        event.target.textContent = "RESTART";
        const game = (0,_CreateGame__WEBPACK_IMPORTED_MODULE_0__.CreateGame)();
        if (game.players.player1.realP && game.players.player2.realP) {
            const dialogP1 = document.getElementById("player1-ship");
            const buttonRand1 = document.getElementById("rand-ship1");
            const buttonPlay1 = document.getElementById("play1-game");
            game.randomShip(game.players.player1);
            game.generateBoard(game.players.player1.board.boardT, "board-ship1")
            buttonPlay1.textContent = `Go to ${game.players.player2.name} Board`
            dialogP1.showModal();

            buttonRand1.addEventListener("click", (event) => {
                game.randomShip(game.players.player1);
                game.generateBoard(game.players.player1.board.boardT, "board-ship1")
            })
            
            buttonPlay1.addEventListener("click", (event) => {
                const dialogP2 = document.getElementById("player2-ship");
                const buttonRand2 = document.getElementById("rand-ship2");
                const buttonPlay2 = document.getElementById("play2-game");
                dialogP1.close();
                game.randomShip(game.players.player2);
                game.generateBoard(game.players.player2.board.boardT, "board-ship2")
                dialogP2.showModal();
                buttonRand2.addEventListener("click", (event) => {
                    game.randomShip(game.players.player2);
                    game.generateBoard(game.players.player2.board.boardT, "board-ship2")
                })
                buttonPlay2.addEventListener("click", (event) => {
                    dialogP2.close();
                    runGame(game);
                })
            })
        }
        else if (game.players.player1.realP) {
            const dialogP1 = document.getElementById("player1-ship");
            const buttonRand1 = document.getElementById("rand-ship1");
            const buttonPlay1 = document.getElementById("play1-game");
            game.randomShip(game.players.player2);
            game.generateBoard(game.players.player1.board.boardT, "board-ship1")
            buttonPlay1.textContent = `Play Game`
            dialogP1.showModal();
            buttonRand1.addEventListener("click", (event) => {
                game.randomShip(game.players.player1);
                game.generateBoard(game.players.player1.board.boardT, "board-ship1")
            })
            buttonPlay1.addEventListener("click", (event) => {
                dialogP1.close();
                runGame(game);
            })
        }
        else if (game.players.player2.realP) {
            const dialogP2 = document.getElementById("player2-ship");
            const buttonRand2 = document.getElementById("rand-ship2");
            const buttonPlay2 = document.getElementById("play2-game");
            game.randomShip(game.players.player1);
            game.generateBoard(game.players.player2.board.boardT, "board-ship2")
            dialogP2.showModal();
            buttonRand2.addEventListener("click", (event) => {
                game.randomShip(game.players.player2);
                game.generateBoard(game.players.player2.board.boardT, "board-ship2")
            })
            buttonPlay2.addEventListener("click", (event) => {
                dialogP2.close();
                runGame(game);
            })
        }
        else {
            game.randomShip(game.players.player1);
            game.randomShip(game.players.player2);
            runGame(game);
        }
        
    })

    
    
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdGQUF3RixZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxTQUFT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YWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbnRlcm5hbC9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaW50ZXJuYWwvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ludGVybmFsL1NoaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdWkvQ29udHJvbEdhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdWkvQ3JlYXRlR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91aS91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7IFxufVxuXG4vKiBIZWFkZXIgcGFyYW1ldGVycyAqL1xuXG5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwLDAsMCk7XG4gICAgYm94LXNoYWRvdzogMXJlbSAwIDFyZW0gdmFyKC0tc2hhZG93LWJveCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1oZWFkZXIpO1xufVxuXG5oZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cblxuLyogRm9vdGVyICovXG5cbmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWhlYWRlcik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDAsMCwwKTtcbiAgICBib3gtc2hhZG93OiAxcmVtIDAgMXJlbSB2YXIoLS1zaGFkb3ctYm94KTtcblxufVxuXG4vKiBNYWluICovXG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ucGxheWVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnBsYXllciAuYWN0aXZlIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG4ucGxheWVyIC5hY3RpdmUgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjIpO1xufVxuXG4ucGxheWVyMSwgLnBsYXllcjIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLnBsYXllcjEgbGFiZWwsIC5wbGF5ZXIyIGxhYmVsIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXIxIGlucHV0LCAucGxheWVyMiBpbnB1dCB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5wbGF5ZXIxIGlucHV0OmZvY3VzLCAucGxheWVyMiBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4uaW5mby1ib2FyZCBpbnB1dCB7XG4gICAgbWF4LXdpZHRoOiAzcmVtO1xufVxuXG4ucGFyYW1ldGVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uYm9hcmQtc2l6ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogLjVyZW07XG59XG5cbiNydW4tZ2FtZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XG4gICAgYm94LXNoYWRvdzogMC4wNXJlbSAwIDAuMDVyZW0gMC4wNXJlbTtcbiAgICB3aWR0aDogMjByZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE3LCAxMTcsIDI0OCwgMC43MDUpO1xufVxuXG4vKiBHYW1lYm9hcmQgKi9cblxuLmdyaWQsIC5ib2FyZC1zaGlwMSwgLmJvYXJkLXNoaXAyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDVyZW0pO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDVyZW0pO1xufVxuXG4uZ3JpZCBkaXYsIC5ib2FyZC1zaGlwMSBkaXYsIC5ib2FyZC1zaGlwMiBkaXYge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLmdyaWRfZWxlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ncmlkX2VsZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZ3JpZF9lbGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbn1cblxuLmdyaWRfZWxlbS53b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjQpO1xufVxuXG4jaW5mby1nYW1le1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuI2luZm8tciB7XG4gICAgbWFyZ2luLXRvcDogLjJyZW07XG59XG5cbi8qIERpYWxvZyAqL1xuXG5kaWFsb2cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiAzMCU7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLXNoZWx2ZXMpO1xufVxuXG5cbmRpYWxvZyBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjc4MSk7XG59XG5kaWFsb2cgYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5cbmRpYWxvZyAjcmVzdWx0LWdhbWUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQSxzQkFBc0I7O0FBRXRCO0lBQ0ksZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyx5Q0FBeUM7SUFDekMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyx5Q0FBeUM7O0FBRTdDOztBQUVBLFNBQVM7O0FBRVQ7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw0Q0FBNEM7QUFDaEQ7O0FBRUEsY0FBYzs7QUFFZDtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLHFDQUFxQztBQUN6Qzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0FBQ25COzs7O0FBSUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCBzYW5zLXNlcmlmOyBcXG59XFxuXFxuLyogSGVhZGVyIHBhcmFtZXRlcnMgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAsMCwwKTtcXG4gICAgYm94LXNoYWRvdzogMXJlbSAwIDFyZW0gdmFyKC0tc2hhZG93LWJveCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2staGVhZGVyKTtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWhlYWRlcik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigwLDAsMCk7XFxuICAgIGJveC1zaGFkb3c6IDFyZW0gMCAxcmVtIHZhcigtLXNoYWRvdy1ib3gpO1xcblxcbn1cXG5cXG4vKiBNYWluICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5wbGF5ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5wbGF5ZXIgLmFjdGl2ZSBsYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5wbGF5ZXIgLmFjdGl2ZSBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjIpO1xcbn1cXG5cXG4ucGxheWVyMSwgLnBsYXllcjIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnBsYXllcjEgbGFiZWwsIC5wbGF5ZXIyIGxhYmVsIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyMSBpbnB1dCwgLnBsYXllcjIgaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnBsYXllcjEgaW5wdXQ6Zm9jdXMsIC5wbGF5ZXIyIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaW5mby1ib2FyZCBpbnB1dCB7XFxuICAgIG1heC13aWR0aDogM3JlbTtcXG59XFxuXFxuLnBhcmFtZXRlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYm9hcmQtc2l6ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbiNydW4tZ2FtZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcXG4gICAgYm94LXNoYWRvdzogMC4wNXJlbSAwIDAuMDVyZW0gMC4wNXJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNywgMTE3LCAyNDgsIDAuNzA1KTtcXG59XFxuXFxuLyogR2FtZWJvYXJkICovXFxuXFxuLmdyaWQsIC5ib2FyZC1zaGlwMSwgLmJvYXJkLXNoaXAyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgNXJlbSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDVyZW0pO1xcbn1cXG5cXG4uZ3JpZCBkaXYsIC5ib2FyZC1zaGlwMSBkaXYsIC5ib2FyZC1zaGlwMiBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi5ncmlkX2VsZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ3JpZF9lbGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWRfZWxlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xcbn1cXG5cXG4uZ3JpZF9lbGVtLndvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjQpO1xcbn1cXG5cXG4jaW5mby1nYW1le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jaW5mby1yIHtcXG4gICAgbWFyZ2luLXRvcDogLjJyZW07XFxufVxcblxcbi8qIERpYWxvZyAqL1xcblxcbmRpYWxvZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MCU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1zaGVsdmVzKTtcXG59XFxuXFxuXFxuZGlhbG9nIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjc4MSk7XFxufVxcbmRpYWxvZyBidXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG5kaWFsb2cgI3Jlc3VsdC1nYW1lIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJztcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi9tb2R1bGVzL3VpL3VpJztcbmNvbnNvbGUubG9nKFwiVEVTVFwiKVxuVUkoKTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcih4U2l6ZSwgeVNpemUpIHtcbiAgICAgICAgdGhpcy5zaGlwQXJyID0gW107XG4gICAgICAgIHRoaXMueFNpemUgPSB4U2l6ZTtcbiAgICAgICAgdGhpcy55U2l6ZSA9IHlTaXplO1xuICAgICAgICB0aGlzLmF0dGFja05iID0gMDtcbiAgICAgICAgdGhpcy5hdHRhY2tNaXNzZWQgPSAwO1xuICAgICAgICB0aGlzLnNoaXBBbGl2ZSA9IDA7XG4gICAgICAgIHRoaXMucG9zc2libGVNb3ZlID0gW11cbiAgICAgICAgdGhpcy5ib2FyZFQgPSB0aGlzLmluaXRCb2FyZCh5U2l6ZSwgeFNpemUsIFwiLlwiKTtcbiAgICAgICAgdGhpcy5ib2FyZEcgPSB0aGlzLmluaXRCb2FyZCh5U2l6ZSwgeFNpemUsIFwiXCIpO1xuICAgIH07XG5cbiAgICBpbml0Qm9hcmQoY29scywgcm93cywgZGF0YSkge1xuICAgICAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgYXJyYXlbaV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sczsgaisrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXlbaV1bal0gPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zc2libGVNb3ZlLnB1c2goW2ksIGpdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICBwb3B1bGF0ZVNoaXAoc2hpcCkge1xuICAgICAgICBpZiAoc2hpcC5wb3NpdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRUW3NoaXAuY29vcmRJbml0WzBdXVtzaGlwLmNvb3JkSW5pdFsxXV0gPSAnfCc7XG4gICAgICAgICAgICB0aGlzLmJvYXJkVFtzaGlwLmNvb3JkRmluWzBdXVtzaGlwLmNvb3JkSW5pdFsxXV0gPSAnPic7XG4gICAgICAgICAgICBmb3IgKGxldCBpPXNoaXAuY29vcmRJbml0WzBdKzE7IGk8PXNoaXAuY29vcmRGaW5bMF0tMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFRbaV1bc2hpcC5jb29yZEluaXRbMV1dID0gJy0tJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGlwLnBvc2l0aW9uID09PSBcIlZFUlRJQ0FMXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRUW3NoaXAuY29vcmRJbml0WzBdXVtzaGlwLmNvb3JkSW5pdFsxXV0gPSAnXic7XG4gICAgICAgICAgICB0aGlzLmJvYXJkVFtzaGlwLmNvb3JkSW5pdFswXV1bc2hpcC5jb29yZEZpblsxXV0gPSAnX18nO1xuICAgICAgICAgICAgZm9yIChsZXQgaT1zaGlwLmNvb3JkSW5pdFsxXSsxOyBpPD1zaGlwLmNvb3JkRmluWzFdLTE7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRUW3NoaXAuY29vcmRJbml0WzBdXVtpXSA9ICd8JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0cmFuc3Bvc2UoYXJyKSB7XG4gICAgICAgIGxldCBbcm93XSA9IGFyclxuICAgICAgICByZXR1cm4gcm93Lm1hcCgodmFsdWUsIGNvbHVtbikgPT4gYXJyLm1hcChyb3cgPT4gcm93W2NvbHVtbl0pKVxuICAgICAgfVxuXG4gICAgc2hvd0JvYXJkKCkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IGJvYXJkViA9IHRoaXMudHJhbnNwb3NlKFsuLi50aGlzLmJvYXJkVF0pXG4gICAgICAgIGNvbnNvbGUubG9nKFsnICddLmNvbmNhdChBcnJheS5mcm9tKEFycmF5KDgpLmtleXMoKSkpLnRvU3RyaW5nKCkucmVwbGFjZSgvLC9nLCcgJykpO1xuICAgICAgICBib2FyZFYuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0gJHtsaW5lLnRvU3RyaW5nKCkucmVwbGFjZSgvLC9nLCcgJyl9YClcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXNldFNoaXAoKSB7XG4gICAgICAgIHRoaXMuc2hpcEFyciA9IFtdO1xuICAgICAgICB0aGlzLmF0dGFja05iID0gMDtcbiAgICAgICAgdGhpcy5hdHRhY2tNaXNzZWQgPSAwO1xuICAgICAgICB0aGlzLnNoaXBBbGl2ZSA9IDA7XG4gICAgICAgIHRoaXMucG9zc2libGVNb3ZlID0gW11cbiAgICAgICAgdGhpcy5ib2FyZFQgPSB0aGlzLmluaXRCb2FyZCh0aGlzLnlTaXplLCB0aGlzLnhTaXplLCBcIi5cIik7XG4gICAgICAgIHRoaXMuYm9hcmRHID0gdGhpcy5pbml0Qm9hcmQodGhpcy55U2l6ZSwgdGhpcy54U2l6ZSwgXCJcIik7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVSYW5kb21TaGlwKCkge1xuICAgICAgICBsZXQgc2hpcCA9IG51bGw7XG4gICAgICAgIHdoaWxlICghc2hpcCkge1xuICAgICAgICAgICAgY29uc3QgY29vcmRJbml0ID0gdGhpcy5wb3NzaWJsZU1vdmVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnRoaXMucG9zc2libGVNb3ZlLmxlbmd0aCldO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDb29yZGluYXRlKGNvb3JkSW5pdCkgJiYgdGhpcy5jaGVja1NoaXBDb29yZChjb29yZEluaXQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDQgLSAxICsgMSkpICsgMTtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRGaW47XG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRGaW4gPSBbY29vcmRJbml0WzBdLCBjb29yZEluaXRbMV0gKyBsZW5ndGhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRGaW4gPSBbY29vcmRJbml0WzBdICsgbGVuZ3RoLCBjb29yZEluaXRbMV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0Nvb3JkaW5hdGUoY29vcmRGaW4pICYmIHRoaXMuY2hlY2tTaGlwQ29vcmQoY29vcmRGaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkU2hpcChjb29yZEluaXQsIGNvb3JkRmluKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgYWRkU2hpcChjb29yZEluaXQsIGNvb3JkRmluKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrQ29vcmRpbmF0ZShjb29yZEluaXQpICYmIHRoaXMuY2hlY2tDb29yZGluYXRlKGNvb3JkRmluKSkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGNvb3JkSW5pdCwgY29vcmRGaW4pXG4gICAgICAgICAgICB0aGlzLnNoaXBBcnIucHVzaChzaGlwKTtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVTaGlwKHNoaXApO1xuICAgICAgICAgICAgdGhpcy5zaGlwQWxpdmUrKztcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY2hlY2tTaGlwQ29vcmQoY29vcmQpIHtcbiAgICAgICAgbGV0IGNoZWNrU2hpcCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hpcEFyci5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5wb3NpdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIgJiYgY29vcmRbMV0gPT09IHNoaXAuY29vcmRJbml0WzFdKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tTaGlwID0gIShjb29yZFswXSA+PSBzaGlwLmNvb3JkSW5pdFswXSAmJiBjb29yZFswXSA8PSBzaGlwLmNvb3JkRmluWzBdKSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNoaXAucG9zaXRpb24gPT09IFwiVkVSVElDQUxcIiAmJiBjb29yZFswXSA9PT0gc2hpcC5jb29yZEluaXRbMF0pIHtcbiAgICAgICAgICAgICAgICBjaGVja1NoaXAgPSAhKGNvb3JkWzFdID49IHNoaXAuY29vcmRJbml0WzFdICYmIGNvb3JkWzFdIDw9IHNoaXAuY29vcmRGaW5bMV0pIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY2hlY2tTaGlwO1xuICAgIH1cblxuICAgIGNoZWNrQ29vcmRpbmF0ZShjb29yZCkge1xuICAgICAgICByZXR1cm4gY29vcmRbMF0gPCB0aGlzLnhTaXplICYmIGNvb3JkWzFdIDwgdGhpcy55U2l6ZVxuICAgIH1cblxuICAgIGNoZWNrU2hpcEF0dGFjayhzaGlwLCBjb29yZCkge1xuICAgICAgICBpZiAoc2hpcC5wb3NpdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIgJiYgY29vcmRbMV0gPT09IHNoaXAuY29vcmRJbml0WzFdKSB7XG4gICAgICAgICAgICByZXR1cm4gY29vcmRbMF0gPj0gc2hpcC5jb29yZEluaXRbMF0gJiYgY29vcmRbMF0gPD0gc2hpcC5jb29yZEZpblswXSBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGlwLnBvc2l0aW9uID09PSBcIlZFUlRJQ0FMXCIgJiYgY29vcmRbMF0gPT09IHNoaXAuY29vcmRJbml0WzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gY29vcmRbMV0gPj0gc2hpcC5jb29yZEluaXRbMV0gJiYgY29vcmRbMV0gPD0gc2hpcC5jb29yZEZpblsxXSBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZCkge1xuICAgICAgICBpZih0aGlzLmNoZWNrQ29vcmRpbmF0ZShjb29yZCkpIHtcbiAgICAgICAgICAgIGxldCB0b3VjaGVkID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5zaGlwQWxpdmU7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrU2hpcEF0dGFjayh0aGlzLnNoaXBBcnJbaV0sIGNvb3JkKSkge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaGVkID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmF0dGFja05iKys7XG4gICAgICAgICAgICB0aGlzLmJvYXJkVFtjb29yZFswXV1bY29vcmRbMV1dID0gXCJ4XCI7XG4gICAgICAgICAgICB0aGlzLnBvc3NpYmxlTW92ZSA9IHRoaXMucG9zc2libGVNb3ZlLmZpbHRlcihjb29yZGQgPT4gY29vcmRkLnRvU3RyaW5nKCkgIT09IGNvb3JkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgaWYgKHRvdWNoZWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkR1tjb29yZFswXV1bY29vcmRbMV1dID0gXCJvXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwQXJyW3RvdWNoZWRdLmhpdCgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNoaXBBcnJbdG91Y2hlZF0uc3Vuaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBBcnIuc3BsaWNlKHRvdWNoZWQsIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBBbGl2ZS0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRHW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSBcInhcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01pc3NlZCsrO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9O1xufTtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcmVhbFAsIHhTaXplLCB5U2l6ZSkge1xuICAgICAgICB0aGlzLnJlYWxQID0gcmVhbFA7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZWJvYXJkKHhTaXplLCB5U2l6ZSk7XG4gICAgfTtcblxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH07XG5cbiAgICB0b2dnbGVBY3RpdmUoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlPSAhdGhpcy5hY3RpdmU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IoY29vcmRJbml0LCBjb29yZEZpbikge1xuICAgICAgICB0aGlzLmhpdE5iID0gMDtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgICAgIGlmIChjb29yZEluaXRbMF0gPT09IGNvb3JkRmluWzBdICYmIGNvb3JkSW5pdFsxXSAhPT0gY29vcmRGaW5bMV0pIHtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gTWF0aC5hYnMoY29vcmRJbml0WzFdLWNvb3JkRmluWzFdKSArIDFcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgICAgICB0aGlzLmNvb3JkSW5pdCA9IGNvb3JkSW5pdFsxXSA8IGNvb3JkRmluWzFdID8gY29vcmRJbml0OiBjb29yZEZpbjtcbiAgICAgICAgICAgIHRoaXMuY29vcmRGaW4gPSBjb29yZEluaXRbMV0gPiBjb29yZEZpblsxXSA/IGNvb3JkSW5pdDogY29vcmRGaW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29vcmRJbml0WzFdID09PSBjb29yZEZpblsxXSAmJiBjb29yZEluaXRbMF0gIT09IGNvb3JkRmluWzBdKSB7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IE1hdGguYWJzKGNvb3JkSW5pdFswXS1jb29yZEZpblswXSkgKyAxXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgICAgICB0aGlzLmNvb3JkSW5pdCA9IGNvb3JkSW5pdFswXSA8IGNvb3JkRmluWzBdID8gY29vcmRJbml0OiBjb29yZEZpbjtcbiAgICAgICAgICAgIHRoaXMuY29vcmRGaW4gPSBjb29yZEluaXRbMF0gPiBjb29yZEZpblswXSA/IGNvb3JkSW5pdDogY29vcmRGaW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb29yZGluYXRlIGdpdmVuICR7Y29vcmRJbml0fSBhbmQgJHtjb29yZEZpbn0gZG9lc24ndCBhbGxvdyB0aGUgY3JlYXRpb24gb2YgYSBzaGlwYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0TmIrKztcbiAgICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdE5iID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuIiwiXG5cbmV4cG9ydCBjb25zdCBDb250cm9sR2FtZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGRlYWxSZXN1bHQgPSBmdW5jdGlvbihyZXN1bHQsIG5iU2hpcCwgdGFyZ2V0LCBwbGF5ZXIpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVySW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mby1yXCIpO1xuICAgICAgICBjb25zdCBwbGF5ZXJBY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllckdcIikudGV4dENvbnRlbnRcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID0gXCJPXCI7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gXCJyZ2JhKDAsMjU1LDAsLjMpXCJcbiAgICAgICAgICAgIGlmIChuYlNoaXAgPT09IHBsYXllci5ib2FyZC5zaGlwQWxpdmUpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXJJbmZvLnRleHRDb250ZW50ID0gYDogJHtwbGF5ZXJBY3RpdmV9IFRvdWNoZWRgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXJJbmZvLnRleHRDb250ZW50ID0gYDogJHtwbGF5ZXJBY3RpdmV9IGhhcyBzdW5rIGEgYm9hdGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IFwicmdiYSgyNTUsMCwwLC4zKVwiXG4gICAgICAgICAgICBjb250YWluZXJJbmZvLnRleHRDb250ZW50ID0gYDogJHtwbGF5ZXJBY3RpdmV9IE1pc3NlZGBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNrQyA9IGZ1bmN0aW9uKGV2ZW50LCBwbGF5ZXIpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgbmJTaGlwID0gcGxheWVyLmJvYXJkLnNoaXBBbGl2ZTtcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUgIT0gXCJncmlkX2VsZW1cIikgcmV0dXJuXG4gICAgICAgIGxldCBbeUNvb3JkLCB4Q29vcmRdID0gdGFyZ2V0LmlkLm1hdGNoKC9cXGQrL2cpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhbTnVtYmVyKHhDb29yZCksIE51bWJlcih5Q29vcmQpXSk7XG4gICAgICAgIGRlYWxSZXN1bHQocmVzdWx0LCBuYlNoaXAsIHRhcmdldCwgcGxheWVyKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgY29uc3QgYXR0YWNrUmFuZG9tID0gZnVuY3Rpb24ocGxheWVyKSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuYlNoaXAgPSBwbGF5ZXIuYm9hcmQuc2hpcEFsaXZlO1xuICAgICAgICBjb25zdCBwb3NzaWJsZU1vdmUgPSBwbGF5ZXIuYm9hcmQucG9zc2libGVNb3ZlO1xuICAgICAgICBjb25zdCBjb29yZCA9IHBvc3NpYmxlTW92ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcG9zc2libGVNb3ZlLmxlbmd0aCldO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcl8ke2Nvb3JkWzFdfV9jXyR7Y29vcmRbMF19YClcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soW051bWJlcihjb29yZFswXSksIE51bWJlcihjb29yZFsxXSldKTtcbiAgICAgICAgZGVhbFJlc3VsdChyZXN1bHQsIG5iU2hpcCwgdGFyZ2V0LCBwbGF5ZXIpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXR0YWNrQyxcbiAgICAgICAgYXR0YWNrUmFuZG9tXG4gICAgfTtcbn07IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vaW50ZXJuYWwvUGxheWVyXCJcbmltcG9ydCB7IENvbnRyb2xHYW1lIH0gZnJvbSBcIi4vQ29udHJvbEdhbWVcIjtcblxuZXhwb3J0IGNvbnN0IENyZWF0ZUdhbWUgPSBmdW5jdGlvbigpIHtcblxuXG4gICAgY29uc3QgY29udHJvbGxlciA9IENvbnRyb2xHYW1lKCk7XG4gICBcbiAgICBjb25zdCBhZGRTaGlwID0gZnVuY3Rpb24oY29vcmQsIHBsYXllcikge1xuICAgICAgICBwbGF5ZXIuYm9hcmQuYWRkU2hpcChjb29yZFswXSwgY29vcmRbMV0pXG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRvbVNoaXAgPSBmdW5jdGlvbihwbGF5ZXIsIG5iU2hpcD0zKXtcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyLmJvYXJkKVxuICAgICAgICBwbGF5ZXIuYm9hcmQucmVzZXRTaGlwKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5ib2FyZClcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPG5iU2hpcDsgaSsrKXtcbiAgICAgICAgICAgIHBsYXllci5ib2FyZC5nZW5lcmF0ZVJhbmRvbVNoaXAoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuYm9hcmQpXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlUGxheWVyID0gZnVuY3Rpb24obmFtZSwgYWN0aXZlPWZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtuYW1lfS1uYW1lYCkudmFsdWUgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtuYW1lfS1uYW1lYCkudmFsdWU6IG5hbWU7XG4gICAgICAgIGNvbnN0IHNpemVYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb3JkWCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBzaXplWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29yZFknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcmVhbFAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtuYW1lfS1yZWFscGApLmNoZWNrZWQ7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIocGxheWVyTmFtZSwgcmVhbFAsIHNpemVYLCBzaXplWSk7XG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIHBsYXllci50b2dnbGVBY3RpdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByYW5kb21TaGlwKHBsYXllcik7XG4gICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfTtcblxuICAgIGxldCBwbGF5ZXJzID0ge1xuICAgICAgICBwbGF5ZXIxOiBjcmVhdGVQbGF5ZXIoXCJwbGF5ZXIxXCIsIHRydWUpLFxuICAgICAgICBwbGF5ZXIyOiBjcmVhdGVQbGF5ZXIoXCJwbGF5ZXIyXCIpLFxuICAgIH07XG5cbiAgICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yIChjb25zdCBwbGF5ZXIgaW4gcGxheWVycykge1xuICAgICAgICAgICAgaWYgKHBsYXllcnNbcGxheWVyXS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfTtcblxuICAgIGNvbnN0IGdldE5vbkFjdGl2ZVBsYXllciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHBsYXllciBpbiBwbGF5ZXJzKSB7XG4gICAgICAgICAgICBpZiAoIXBsYXllcnNbcGxheWVyXS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlUGxheWVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckFjdGl2ZSA9IGdldEFjdGl2ZVBsYXllcigpO1xuICAgICAgICBjb25zdCBwbGF5ZXJOb25BY3RpdmUgPSBnZXROb25BY3RpdmVQbGF5ZXIoKTtcbiAgICAgICAgcGxheWVyc1twbGF5ZXJBY3RpdmVdLnRvZ2dsZUFjdGl2ZSgpO1xuICAgICAgICBwbGF5ZXJzW3BsYXllck5vbkFjdGl2ZV0udG9nZ2xlQWN0aXZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghcGxheWVyc1tnZXRBY3RpdmVQbGF5ZXIoKV0ucmVhbFApIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc0F0dGFjayA9IGNvbnRyb2xsZXIuYXR0YWNrUmFuZG9tKHBsYXllcnNbZ2V0Tm9uQWN0aXZlUGxheWVyKCldKTtcbiAgICAgICAgICAgIGNoZWNrUmVzQXR0YWNrKHJlc0F0dGFjayk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrUmVzQXR0YWNrID0gZnVuY3Rpb24ocmVzQXR0YWNrKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGlmICghcmVzQXR0YWNrKSB7XG4gICAgICAgICAgICBjaGFuZ2VQbGF5ZXIoKVxuICAgICAgICB9XG4gICAgICAgIHNob3dQbGF5ZXIoKVxuICAgICAgICBnZW5lcmF0ZUJvYXJkKHBsYXllcnNbZ2V0Tm9uQWN0aXZlUGxheWVyKCldLmJvYXJkLmJvYXJkRywgXCJncmlkXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllcnMpXG4gICAgICAgIGlmIChwbGF5ZXJzW2dldE5vbkFjdGl2ZVBsYXllcigpXS5ib2FyZC5zaGlwQWxpdmUgPT09IDApe1xuICAgICAgICAgICAgZW5kR2FtZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YXR0YWNrKCk7fSwgMjAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgZ2VuZXJhdGVCb2FyZCA9IGZ1bmN0aW9uKGJvYXJkLCBuYW1lKSB7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBib2FyZFswXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGNvbHMgPSBib2FyZC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobmFtZSlbMF07XG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjb250YWluZXIuc3R5bGVbXCJncmlkLXRlbXBsYXRlLWNvbHVtbnNcIl0gPSBgcmVwZWF0KCR7Y29sc30sIDJyZW0pYFxuICAgICAgICBjb250YWluZXIuc3R5bGVbXCJncmlkLXRlbXBsYXRlLXJvd3NcIl0gPSBgcmVwZWF0KCR7cm93c30sIDJyZW0pYFxuICAgICAgICBmb3IgKGxldCByb3c9MDsgcm93PHJvd3M7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2w9MDsgY29sPGNvbHM7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZF9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBncmlkX2VsZW0uY2xhc3NOYW1lID0gXCJncmlkX2VsZW1cIjtcbiAgICAgICAgICAgICAgICBncmlkX2VsZW0uaWQgPSBgcl8ke3Jvd31fY18ke2NvbH1gO1xuICAgICAgICAgICAgICAgIGdyaWRfZWxlbS50ZXh0Q29udGVudCA9IGJvYXJkW2NvbF1bcm93XTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZF9lbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZXNBdHRhY2sgPSBjb250cm9sbGVyLmF0dGFja0MoZXZlbnQsIHBsYXllcnNbZ2V0Tm9uQWN0aXZlUGxheWVyKCldKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2hlY2tSZXNBdHRhY2socmVzQXR0YWNrKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGVuZEdhbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdyaWRcIilbMF07XG4gICAgICAgIGNvbnN0IHBsYXllcldpbiA9IHBsYXllcnNbZ2V0QWN0aXZlUGxheWVyKCldO1xuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7cGxheWVyV2luLm5hbWV9IFdpbiB0aGUgR2FtZWBcbiAgICB9XG5cbiAgICBjb25zdCBzaG93UGxheWVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJHXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHBsYXllcnNbZ2V0QWN0aXZlUGxheWVyKCldLm5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIHBsYXllcnMsIFxuICAgICAgICBnZW5lcmF0ZUJvYXJkLFxuICAgICAgICBzaG93UGxheWVyLFxuICAgICAgICBnZXRBY3RpdmVQbGF5ZXIsXG4gICAgICAgIGF0dGFjayxcbiAgICAgICAgcmFuZG9tU2hpcFxuICAgIH07XG59OyIsImltcG9ydCB7IENyZWF0ZUdhbWUgfSBmcm9tIFwiLi9DcmVhdGVHYW1lXCJcblxuY29uc3QgcnVuR2FtZSA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICBnYW1lLnNob3dQbGF5ZXIoKVxuICAgIGdhbWUuZ2VuZXJhdGVCb2FyZChnYW1lLnBsYXllcnMucGxheWVyMS5ib2FyZC5ib2FyZEcsIFwiZ3JpZFwiKVxuICAgIGlmICghZ2FtZS5wbGF5ZXJzLnBsYXllcjEucmVhbFApe1xuICAgICAgICBnYW1lLmF0dGFjaygpXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgVUkgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBidXR0b25SdW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJ1bi1nYW1lXCIpO1xuXG5cbiAgICBidXR0b25SdW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPSBcIlJFU1RBUlRcIjtcbiAgICAgICAgY29uc3QgZ2FtZSA9IENyZWF0ZUdhbWUoKTtcbiAgICAgICAgaWYgKGdhbWUucGxheWVycy5wbGF5ZXIxLnJlYWxQICYmIGdhbWUucGxheWVycy5wbGF5ZXIyLnJlYWxQKSB7XG4gICAgICAgICAgICBjb25zdCBkaWFsb2dQMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMS1zaGlwXCIpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uUmFuZDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmQtc2hpcDFcIik7XG4gICAgICAgICAgICBjb25zdCBidXR0b25QbGF5MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheTEtZ2FtZVwiKTtcbiAgICAgICAgICAgIGdhbWUucmFuZG9tU2hpcChnYW1lLnBsYXllcnMucGxheWVyMSk7XG4gICAgICAgICAgICBnYW1lLmdlbmVyYXRlQm9hcmQoZ2FtZS5wbGF5ZXJzLnBsYXllcjEuYm9hcmQuYm9hcmRULCBcImJvYXJkLXNoaXAxXCIpXG4gICAgICAgICAgICBidXR0b25QbGF5MS50ZXh0Q29udGVudCA9IGBHbyB0byAke2dhbWUucGxheWVycy5wbGF5ZXIyLm5hbWV9IEJvYXJkYFxuICAgICAgICAgICAgZGlhbG9nUDEuc2hvd01vZGFsKCk7XG5cbiAgICAgICAgICAgIGJ1dHRvblJhbmQxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lLnJhbmRvbVNoaXAoZ2FtZS5wbGF5ZXJzLnBsYXllcjEpO1xuICAgICAgICAgICAgICAgIGdhbWUuZ2VuZXJhdGVCb2FyZChnYW1lLnBsYXllcnMucGxheWVyMS5ib2FyZC5ib2FyZFQsIFwiYm9hcmQtc2hpcDFcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJ1dHRvblBsYXkxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dQMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMi1zaGlwXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvblJhbmQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kLXNoaXAyXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvblBsYXkyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5Mi1nYW1lXCIpO1xuICAgICAgICAgICAgICAgIGRpYWxvZ1AxLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgZ2FtZS5yYW5kb21TaGlwKGdhbWUucGxheWVycy5wbGF5ZXIyKTtcbiAgICAgICAgICAgICAgICBnYW1lLmdlbmVyYXRlQm9hcmQoZ2FtZS5wbGF5ZXJzLnBsYXllcjIuYm9hcmQuYm9hcmRULCBcImJvYXJkLXNoaXAyXCIpXG4gICAgICAgICAgICAgICAgZGlhbG9nUDIuc2hvd01vZGFsKCk7XG4gICAgICAgICAgICAgICAgYnV0dG9uUmFuZDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnYW1lLnJhbmRvbVNoaXAoZ2FtZS5wbGF5ZXJzLnBsYXllcjIpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lLmdlbmVyYXRlQm9hcmQoZ2FtZS5wbGF5ZXJzLnBsYXllcjIuYm9hcmQuYm9hcmRULCBcImJvYXJkLXNoaXAyXCIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBidXR0b25QbGF5Mi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ1AyLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJ1bkdhbWUoZ2FtZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ2FtZS5wbGF5ZXJzLnBsYXllcjEucmVhbFApIHtcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1AxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIxLXNoaXBcIik7XG4gICAgICAgICAgICBjb25zdCBidXR0b25SYW5kMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZC1zaGlwMVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblBsYXkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5MS1nYW1lXCIpO1xuICAgICAgICAgICAgZ2FtZS5yYW5kb21TaGlwKGdhbWUucGxheWVycy5wbGF5ZXIyKTtcbiAgICAgICAgICAgIGdhbWUuZ2VuZXJhdGVCb2FyZChnYW1lLnBsYXllcnMucGxheWVyMS5ib2FyZC5ib2FyZFQsIFwiYm9hcmQtc2hpcDFcIilcbiAgICAgICAgICAgIGJ1dHRvblBsYXkxLnRleHRDb250ZW50ID0gYFBsYXkgR2FtZWBcbiAgICAgICAgICAgIGRpYWxvZ1AxLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgYnV0dG9uUmFuZDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGdhbWUucmFuZG9tU2hpcChnYW1lLnBsYXllcnMucGxheWVyMSk7XG4gICAgICAgICAgICAgICAgZ2FtZS5nZW5lcmF0ZUJvYXJkKGdhbWUucGxheWVycy5wbGF5ZXIxLmJvYXJkLmJvYXJkVCwgXCJib2FyZC1zaGlwMVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJ1dHRvblBsYXkxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBkaWFsb2dQMS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHJ1bkdhbWUoZ2FtZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdhbWUucGxheWVycy5wbGF5ZXIyLnJlYWxQKSB7XG4gICAgICAgICAgICBjb25zdCBkaWFsb2dQMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMi1zaGlwXCIpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uUmFuZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmQtc2hpcDJcIik7XG4gICAgICAgICAgICBjb25zdCBidXR0b25QbGF5MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheTItZ2FtZVwiKTtcbiAgICAgICAgICAgIGdhbWUucmFuZG9tU2hpcChnYW1lLnBsYXllcnMucGxheWVyMSk7XG4gICAgICAgICAgICBnYW1lLmdlbmVyYXRlQm9hcmQoZ2FtZS5wbGF5ZXJzLnBsYXllcjIuYm9hcmQuYm9hcmRULCBcImJvYXJkLXNoaXAyXCIpXG4gICAgICAgICAgICBkaWFsb2dQMi5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgIGJ1dHRvblJhbmQyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lLnJhbmRvbVNoaXAoZ2FtZS5wbGF5ZXJzLnBsYXllcjIpO1xuICAgICAgICAgICAgICAgIGdhbWUuZ2VuZXJhdGVCb2FyZChnYW1lLnBsYXllcnMucGxheWVyMi5ib2FyZC5ib2FyZFQsIFwiYm9hcmQtc2hpcDJcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBidXR0b25QbGF5Mi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZGlhbG9nUDIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBydW5HYW1lKGdhbWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdhbWUucmFuZG9tU2hpcChnYW1lLnBsYXllcnMucGxheWVyMSk7XG4gICAgICAgICAgICBnYW1lLnJhbmRvbVNoaXAoZ2FtZS5wbGF5ZXJzLnBsYXllcjIpO1xuICAgICAgICAgICAgcnVuR2FtZShnYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxuXG4gICAgXG4gICAgXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9