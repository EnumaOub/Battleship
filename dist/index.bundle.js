"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `
dialog {
    background-color: rgba(0, 0, 50, 0.5);
    position: relative;
    width: 40%;
    opacity: 0;
    transform: translate(50%, 50%);
    transition: opacity 0.3s ease-in;
    padding: 1rem;
}

dialog.show {
    opacity: 1;
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
    padding: 0.5rem;
    align-self: center;
}



dialog #result-game {
    font-size: 2rem;
    font-weight: 800;
}`, "",{"version":3,"sources":["webpack://./src/styles/dialog.css"],"names":[],"mappings":";AACA;IACI,qCAAqC;IACrC,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,8BAA8B;IAC9B,gCAAgC;IAChC,aAAa;AACjB;;AAEA;IACI,UAAU;AACd;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,4CAA4C;AAChD;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,kBAAkB;AACtB;;;;AAIA;IACI,eAAe;IACf,gBAAgB;AACpB","sourcesContent":["\ndialog {\n    background-color: rgba(0, 0, 50, 0.5);\n    position: relative;\n    width: 40%;\n    opacity: 0;\n    transform: translate(50%, 50%);\n    transition: opacity 0.3s ease-in;\n    padding: 1rem;\n}\n\ndialog.show {\n    opacity: 1;\n}\n\n\ndialog div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\ndialog::backdrop {\n    background-color: rgba(153, 153, 153, 0.781);\n}\ndialog button {\n    margin-top: 1rem;\n    border-radius: 2rem;\n    border: 1px solid black;\n    padding: 0.5rem;\n    align-self: center;\n}\n\n\n\ndialog #result-game {\n    font-size: 2rem;\n    font-weight: 800;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `footer {
    position: fixed;
    bottom: 0;
    right: 0;
}

footer .fa {
    color: var(--main-color);
    font-size: 5rem;
    opacity: .7;
    text-decoration: none;
}`, "",{"version":3,"sources":["webpack://./src/styles/footer.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,SAAS;IACT,QAAQ;AACZ;;AAEA;IACI,wBAAwB;IACxB,eAAe;IACf,WAAW;IACX,qBAAqB;AACzB","sourcesContent":["footer {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n}\n\nfooter .fa {\n    color: var(--main-color);\n    font-size: 5rem;\n    opacity: .7;\n    text-decoration: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css ***!
  \************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Gameboard */
#gameboard-loc {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    min-height: 150%;
}

.grid_p.active, .win {
    transform: scale(1.1);
    border: 3px solid rgb(51, 255, 0);
}

.grid div, #board-ship1, #board-ship2 {
    display: grid;
    grid-template-columns: repeat(3, 5rem);
    grid-template-rows: repeat(3, 5rem);
    color:aliceblue;
}

.grid div div, #board-ship1 div, #board-ship2 div {
    border: 1px solid #ffeb3b;
}

.grid_elem {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
}

.active .grid_elem:hover {
    transform: scale(1.1);
    background-color: #ffeb3b;
}

.grid_elem.won {
    background-color: rgba(0, 255, 0, 0.4);
}

.grid .grid_NOT {
    background-color: rgba(128, 128, 128, 0.336);
    content: "NOT";
}

.grid div .grid_elem_NOT, .grid .grid_NOT .grid_elem  {
    border: 1px solid #ffeb3b59;
    cursor: not-allowed;
}

.grid .grid_NOT .grid_elem.miss {
    background-color: rgba(0, 0, 255, 0.5);
} 

.grid .grid_NOT .grid_elem.hit {
    background-color: rgba(255, 0, 0, 0.5);
} 

.hit {
    background-color: red;
    animation: hit-animation 0.5s ease-in-out;
}
  
.miss {
    background-color: blue;
    animation: miss-animation 0.5s ease-in-out;
}

@keyframes hit-animation {
    0% { 
        background-color: transparent; 
    }
    50% { 
        background-color: red; 
    }
    100% { 
        background-color: transparent; 
    }
  }
  
@keyframes miss-animation {
    0% { 
        background-color: transparent; 
    }
    50% { 
        background-color: blue; 
    }
    100% { 
        background-color: transparent; 
    }
}`, "",{"version":3,"sources":["webpack://./src/styles/gameboard.css"],"names":[],"mappings":"AAAA,cAAc;AACd;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,4CAA4C;IAC5C,cAAc;AAClB;;AAEA;IACI,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,qBAAqB;IACrB,yCAAyC;AAC7C;;AAEA;IACI,sBAAsB;IACtB,0CAA0C;AAC9C;;AAEA;IACI;QACI,6BAA6B;IACjC;IACA;QACI,qBAAqB;IACzB;IACA;QACI,6BAA6B;IACjC;EACF;;AAEF;IACI;QACI,6BAA6B;IACjC;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,6BAA6B;IACjC;AACJ","sourcesContent":["/* Gameboard */\n#gameboard-loc {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    min-height: 150%;\n}\n\n.grid_p.active, .win {\n    transform: scale(1.1);\n    border: 3px solid rgb(51, 255, 0);\n}\n\n.grid div, #board-ship1, #board-ship2 {\n    display: grid;\n    grid-template-columns: repeat(3, 5rem);\n    grid-template-rows: repeat(3, 5rem);\n    color:aliceblue;\n}\n\n.grid div div, #board-ship1 div, #board-ship2 div {\n    border: 1px solid #ffeb3b;\n}\n\n.grid_elem {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1rem;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.active .grid_elem:hover {\n    transform: scale(1.1);\n    background-color: #ffeb3b;\n}\n\n.grid_elem.won {\n    background-color: rgba(0, 255, 0, 0.4);\n}\n\n.grid .grid_NOT {\n    background-color: rgba(128, 128, 128, 0.336);\n    content: \"NOT\";\n}\n\n.grid div .grid_elem_NOT, .grid .grid_NOT .grid_elem  {\n    border: 1px solid #ffeb3b59;\n    cursor: not-allowed;\n}\n\n.grid .grid_NOT .grid_elem.miss {\n    background-color: rgba(0, 0, 255, 0.5);\n} \n\n.grid .grid_NOT .grid_elem.hit {\n    background-color: rgba(255, 0, 0, 0.5);\n} \n\n.hit {\n    background-color: red;\n    animation: hit-animation 0.5s ease-in-out;\n}\n  \n.miss {\n    background-color: blue;\n    animation: miss-animation 0.5s ease-in-out;\n}\n\n@keyframes hit-animation {\n    0% { \n        background-color: transparent; \n    }\n    50% { \n        background-color: red; \n    }\n    100% { \n        background-color: transparent; \n    }\n  }\n  \n@keyframes miss-animation {\n    0% { \n        background-color: transparent; \n    }\n    50% { \n        background-color: blue; \n    }\n    100% { \n        background-color: transparent; \n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/header.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/header.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `header div {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 3rem;
}


header h1 {
    font-size: 4rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/header.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;;AAGA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB","sourcesContent":["header div {\n    position: relative;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem 3rem;\n}\n\n\nheader h1 {\n    font-size: 4rem;\n    margin-top: 0.5rem;\n    margin-left: 0.5rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/background/bckgMicrosoftGen.jpeg */ "./assets/background/bckgMicrosoftGen.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    height: 100%
}

body {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center fixed;
    background-size: cover;
    position: relative;
    color: #fff;
    font-family: 'Arial', sans-serif;
    min-height: 100%;
    color: #ffeb3b; 
}

body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 50, 0.5);
    z-index: -1;
}

h1, h2, h3 {
    font-family: 'Nautilus Pompilius', 'Arial Black', sans-serif;
    color: #ffeb3b; /* Bright yellow for contrast */
}
  
p, button {
    font-family: 'Arial', sans-serif;
}
  
main {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;
    min-height: 80%;
}

#gen-param {
    overflow: auto;
    width: 40%;
    margin-left: 1rem;
}

#game {
    overflow: auto;
    width: 50%;
}

button {
    border-radius: 2rem;
    border: 1px solid ;
    box-shadow: 0.05rem 0 0.05rem 0.05rem;
    width: 20rem;
    cursor: pointer;
    font-size: 1.5rem;
    background-color: #ffeb3b;
    color: rgb(4, 74, 136);
    transition: tranform 0.2s, background-color 0.5s, color 0.5s;
}

button:hover {
  transform: scale(1.5);
  background-color: rgb(4, 74, 136);
  color: #ffeb3b;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI;AACJ;;AAEA;IACI,iFAA8F;IAC9F,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,gCAAgC;IAChC,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,+BAA+B;IAC/B,WAAW;AACf;;AAEA;IACI,4DAA4D;IAC5D,cAAc,EAAE,+BAA+B;AACnD;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;IACT,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,qCAAqC;IACrC,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,4DAA4D;AAChE;;AAEA;EACE,qBAAqB;EACrB,iCAAiC;EACjC,cAAc;AAChB","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    height: 100%\n}\n\nbody {\n    background: url('../../assets/background/bckgMicrosoftGen.jpeg') no-repeat center center fixed;\n    background-size: cover;\n    position: relative;\n    color: #fff;\n    font-family: 'Arial', sans-serif;\n    min-height: 100%;\n    color: #ffeb3b; \n}\n\nbody::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 50, 0.5);\n    z-index: -1;\n}\n\nh1, h2, h3 {\n    font-family: 'Nautilus Pompilius', 'Arial Black', sans-serif;\n    color: #ffeb3b; /* Bright yellow for contrast */\n}\n  \np, button {\n    font-family: 'Arial', sans-serif;\n}\n  \nmain {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 2rem;\n    margin-top: 1rem;\n    min-height: 80%;\n}\n\n#gen-param {\n    overflow: auto;\n    width: 40%;\n    margin-left: 1rem;\n}\n\n#game {\n    overflow: auto;\n    width: 50%;\n}\n\nbutton {\n    border-radius: 2rem;\n    border: 1px solid ;\n    box-shadow: 0.05rem 0 0.05rem 0.05rem;\n    width: 20rem;\n    cursor: pointer;\n    font-size: 1.5rem;\n    background-color: #ffeb3b;\n    color: rgb(4, 74, 136);\n    transition: tranform 0.2s, background-color 0.5s, color 0.5s;\n}\n\nbutton:hover {\n  transform: scale(1.5);\n  background-color: rgb(4, 74, 136);\n  color: #ffeb3b;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/playerInfos.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/playerInfos.css ***!
  \**************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.player {
    display: flex;
    gap: 1rem;
}

.player1, .player2 {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

#player1-realp, #player2-realp {
    border-radius: 50%;
    cursor: pointer;
    display: block;
    border: 1px solid #ccc;
    accent-color: #ffeb3b;
    margin-bottom: 0;
    width: 1em;
    height: 1em;
    background: purple; 
    align-self: center;
}

input[type=number] {
    border-radius: 20%;
    padding: 0.2rem;
    color: rgb(4, 74, 136);
    background-color: #ffeb3b;
}

.player1 label, .player2 label {
    align-self: center;
}

#player1-name, #player2-name {
    padding: 0.5rem;
    border: none;
    border-radius: 2rem;
    font-size: 1.2rem;
    background-color: #ffeb3b;
    color: rgb(4, 74, 136);
}

#player1-name:focus, #player2-name:focus {
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



#info-game{
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border: 50%;
    background-color: rgba(128, 128, 128, 0.377);
    width: 70%;
    padding: 1rem;
    margin: auto;
    margin-top: 1rem;
}


#info-r {
    margin-top: .2rem;
    display: block;
}

#info-r p {
    margin-top: .2rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/playerInfos.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,cAAc;IACd,sBAAsB;IACtB,qBAAqB;IACrB,gBAAgB;IAChB,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;AAC5B;;;AAGA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;;;AAIA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,WAAW;IACX,4CAA4C;IAC5C,UAAU;IACV,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;;AAGA;IACI,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[".player {\n    display: flex;\n    gap: 1rem;\n}\n\n.player1, .player2 {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n#player1-realp, #player2-realp {\n    border-radius: 50%;\n    cursor: pointer;\n    display: block;\n    border: 1px solid #ccc;\n    accent-color: #ffeb3b;\n    margin-bottom: 0;\n    width: 1em;\n    height: 1em;\n    background: purple; \n    align-self: center;\n}\n\ninput[type=number] {\n    border-radius: 20%;\n    padding: 0.2rem;\n    color: rgb(4, 74, 136);\n    background-color: #ffeb3b;\n}\n\n.player1 label, .player2 label {\n    align-self: center;\n}\n\n#player1-name, #player2-name {\n    padding: 0.5rem;\n    border: none;\n    border-radius: 2rem;\n    font-size: 1.2rem;\n    background-color: #ffeb3b;\n    color: rgb(4, 74, 136);\n}\n\n#player1-name:focus, #player2-name:focus {\n    outline: 2px solid black;\n}\n\n\n.info-board input {\n    max-width: 3rem;\n}\n\n.parameters {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n.board-size {\n    display: flex;\n    flex-direction: row;\n    gap: .5rem;\n}\n\n\n\n#info-game{\n    margin-top: 2rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    border: 50%;\n    background-color: rgba(128, 128, 128, 0.377);\n    width: 70%;\n    padding: 1rem;\n    margin: auto;\n    margin-top: 1rem;\n}\n\n\n#info-r {\n    margin-top: .2rem;\n    display: block;\n}\n\n#info-r p {\n    margin-top: .2rem;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/styles/dialog.css":
/*!*******************************!*\
  !*** ./src/styles/dialog.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./dialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/footer.css":
/*!*******************************!*\
  !*** ./src/styles/footer.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/gameboard.css":
/*!**********************************!*\
  !*** ./src/styles/gameboard.css ***!
  \**********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gameboard.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/header.css":
/*!*******************************!*\
  !*** ./src/styles/header.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/playerInfos.css":
/*!************************************!*\
  !*** ./src/styles/playerInfos.css ***!
  \************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_playerInfos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./playerInfos.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/playerInfos.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_playerInfos_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_playerInfos_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_playerInfos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_playerInfos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/header.css */ "./src/styles/header.css");
/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/footer.css */ "./src/styles/footer.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_dialog_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/dialog.css */ "./src/styles/dialog.css");
/* harmony import */ var _styles_gameboard_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/gameboard.css */ "./src/styles/gameboard.css");
/* harmony import */ var _styles_playerInfos_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/playerInfos.css */ "./src/styles/playerInfos.css");
/* harmony import */ var _modules_ui_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/ui/ui */ "./src/modules/ui/ui.js");









(0,_modules_ui_ui__WEBPACK_IMPORTED_MODULE_6__.UI)();


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
        // Size of gameboard
        this.xSize = xSize;
        this.ySize = ySize;
        // Array with all ship of gameboard
        this.shipArr = [];
        // Initialisize the number of attack
        this.attackNb = 0;
        // Initialisize the number of missed attack
        this.attackMissed = 0;
        // Initialisze the number of ship still alive
        this.shipAlive = 0;
        // Array with all possible moves
        this.possibleMove = []
        // Initialise BoardT wich will contain the ships
        this.boardT = this.initBoard(".");
        // Initialise BoardG the board for the game virgin
        this.boardG = this.initBoard("");
    };

    // Initialise the 2 boards array and the possible moves
    initBoard(data) {
        const array = [];
        this.possibleMove = []
        for (let i = 0; i < this.xSize; i++) {
            array[i] = [];
            for (let j = 0; j < this.ySize; j++) {
                array[i][j] = data;
                this.possibleMove.push([i, j]) 
                
            }
        }
        return array;
    }

    // reset the board used for new game or to reinitialise the ships
    resetBoard() {
        this.shipArr = [];
        this.attackNb = 0;
        this.attackMissed = 0;
        this.shipAlive = 0;
        this.possibleMove = []
        this.boardT = this.initBoard(".");
        this.boardG = this.initBoard("");
    };

    // Check if the coordinate given is on the path of a ship
    checkShipCoord(coord) {
        let checkShip = true;
        this.shipArr.forEach((ship) => {
            if (ship.position === "HORIZONTAL" && coord[1] === ship.coordInit[1]) {
                checkShip = coord[0] < ship.coordInit[0] || coord[0] > ship.coordFin[0]
            }
            else if (ship.position === "VERTICAL" && coord[0] === ship.coordInit[0]) {
                checkShip = coord[1] < ship.coordInit[1] || coord[1] > ship.coordFin[1]
            }
        })
        return checkShip;
    }

    checkCoordinate(coord) {
        return coord[0] < this.xSize && coord[1] < this.ySize
    }

    // Function to add a ship randomly on the board
    addRandomShip(length=3) {
        let ship = null;
        while (!ship) {
            const coordInit = this.possibleMove[Math.floor(Math.random()*this.possibleMove.length)];
            // for the initial coordinate we check if it is in the board and if it is not on another ship
            if (this.checkCoordinate(coordInit) && this.checkShipCoord(coordInit)) {
                // The ships are between a length of 2 and 4
                let coordFin;
                // We randomly create a ship hozizontal or vertical
                if (Math.random() < 0.5) {
                    coordFin = [coordInit[0], coordInit[1] + length];
                }
                else {
                    coordFin = [coordInit[0] + length, coordInit[1]];
                }
                // for the ending coordinate we check if it is in the board and if it is not on another ship
                if (this.checkCoordinate(coordFin) && this.checkShipCoord(coordFin)) {
                    this.addShip(coordInit, coordFin);
                    ship = true;
                }
            }
            
        }
        
    }

    // Add ship with the given coordinates
    addShip(coordInit, coordFin) {
        if (this.checkCoordinate(coordInit) && this.checkCoordinate(coordFin)) {
            const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](coordInit, coordFin)
            this.shipArr.push(ship);
            this.populateShip(ship);
            this.shipAlive++;
        };
    };

    

    // Add ship to board BardT each time a board is added
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

    // Transpose array for showing board
    transpose(arr) {
        let [row] = arr
        return row.map((value, column) => arr.map(row => row[column]))
    }

    // Show true board with ships in console
    showBoard() {
        let i = 0;
        const boardV = this.transpose([...this.boardT])
        console.log([' '].concat(Array.from(Array(8).keys())).toString().replace(/,/g,' '));
        boardV.forEach((line) => {
            console.log(`${i} ${line.toString().replace(/,/g,' ')}`)
            i++;
        })
    }

    // Check if coordinate touch the ship
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

    // Function where opponent attack a coordinate of the board
    receiveAttack(coord) {
        if(this.checkCoordinate(coord)) {
            let touched = [];
            // Check if a ship is touched  
            // if it is the case the index is stored in variable "touched"
            for (let i=0; i<this.shipAlive; i++) {
                if (this.checkShipAttack(this.shipArr[i], coord)) {
                    touched.push(i);
                }
            }
            // Add one attack
            this.attackNb++;
            // Add attack on board
            this.boardT[coord[0]][coord[1]] = "x";
            // delete move from possible moves array
            this.possibleMove = this.possibleMove.filter(coordd => coordd.toString() !== coord.toString());
            if (touched.length !== 0) {
                for (const touch of touched) {
                    // If a ship is touched
                    this.boardG[coord[0]][coord[1]] = "o";
                    this.shipArr[touch].hit();
                    if (this.shipArr[touch].sunk) {
                        // Delete ship if its sunk
                        this.shipArr.splice(touch, 1);
                        this.shipAlive--;
                    }
                    return true;
                }
                
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
        // Initialisize if the player is a real one
        this.realP = realP;
        // Name given to the player
        this.name = name;
        // Is it the current player
        this.active = false;
        // board of the player
        this.board = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](xSize, ySize);
    };

    // modifiy name of the player
    setName(name) {
        this.name = name;
    };

    // toggle the booleen if its the one playing
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
        // Initialise of times the ship were hit
        this.hitNb = 0;
        // Boolean showing if the ship was hit in all its coordinates
        this.sunk = false;
        // Check if the coodinates initial and final of the ship given form a vertical ship
        if (coordInit[0] === coordFin[0] && coordInit[1] !== coordFin[1]) {
            // init length of the ship
            this.length = Math.abs(coordInit[1]-coordFin[1]) + 1
            // init posision of the ship
            this.position = "VERTICAL";
            // store initial and final coordinate in function of its position
            this.coordInit = coordInit[1] < coordFin[1] ? coordInit: coordFin;
            this.coordFin = coordInit[1] > coordFin[1] ? coordInit: coordFin;
        }
        else if (coordInit[1] === coordFin[1] && coordInit[0] !== coordFin[0]) {
            // init length of the ship
            this.length = Math.abs(coordInit[0]-coordFin[0]) + 1
            // init posision of the ship
            this.position = "HORIZONTAL";
            // store initial and final coordinate in function of its position
            this.coordInit = coordInit[0] < coordFin[0] ? coordInit: coordFin;
            this.coordFin = coordInit[0] > coordFin[0] ? coordInit: coordFin;
        }
        else {
            throw new Error(`The coordinate given ${coordInit} and ${coordFin} doesn't allow the creation of a ship`);
        }
    }

    // check if ship has sunk
    isSunk() {
        if (this.hitNb === this.length) {
            this.sunk = true;
            return true;
        }
        return false;
    }

    // if ship is hit iterate the number of hit and check if ship has sunk
    hit() {
        this.hitNb++;
        this.isSunk();
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

// Factory function dealing with the control of the player and the computer
const ControlGame = function() {
    // Give results to the round actually played
    const dealResult = function(result, nbShip, target, player) {
        const containerInfo = document.getElementById("info-r");
        const playerActive = document.getElementById("playerG").textContent
        // Check if one ship was hit
        if (result) {
            target.classList.toggle("hit");
            if (nbShip === player.board.shipAlive) {
                containerInfo.textContent = `: ${playerActive} Touched`
            }
            else {
                containerInfo.textContent = `: ${playerActive} has sunk a boat`
            }
        }
        else {
            target.classList.toggle("miss");
            containerInfo.textContent = `: ${playerActive} Missed`
            
        }
    }

    // Function attack of a human player
    const attackC = function(event, player) {
        // Get all current ship in order to compare after the attack
        const nbShip = player.board.shipAlive;
        // Get position on front associated with the coordinate clicked by player
        let target = event.target;
        // Check that the coordinate clicked is on the grid
        if (!target.classList.contains(`grid_elem_${player.name}`)) return
        // Extract the coordinate from the id of the grid element
        let [yCoord, xCoord] = target.id.match(/\d+/g);
        // Attack the player's board given
        const result = player.board.receiveAttack([Number(xCoord), Number(yCoord)]);
        // Apply the results
        dealResult(result, nbShip, target, player);
        return result;
    };

    // Function attack of a computer
    const attackRandom = function(player) {
        // Get all current ship in order to compare after the attack
        const nbShip = player.board.shipAlive;
        // Get all possible moves on the board
        const possibleMove = player.board.possibleMove;
        // get one random coordinate in all possible moves
        const coord = possibleMove[Math.floor(Math.random() * possibleMove.length)];
        // Get position on front associated with the coordinate obtained
        const target = document.querySelector(`#r_${coord[1]}_c_${coord[0]}.grid_elem_${player.name}`);
        // Attack the player's board given
        const result = player.board.receiveAttack([Number(coord[0]), Number(coord[1])]);
        // Apply the results
        dealResult(result, nbShip, target, player);
        return result;
    };
    

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



// Function to create and control the game
const CreateGame = function() {

    // Initialise the object containing the players
    let players = {
        player1: "",
        player2: "",
    };

    // Creation to control object to attack and get results
    const controller = (0,_ControlGame__WEBPACK_IMPORTED_MODULE_1__.ControlGame)();

    // Get the current player and show its name on the front
    const showPlayer = function() {
        const title = document.getElementById("playerG");
        title.textContent = players[getActivePlayer()].name;
    }

    // Generate 3 random ships of length 2 to 5
    const randomShip = function(player, nbShip=3){
        player.board.resetBoard();
        for (let i=0; i<nbShip; i++){
            player.board.addRandomShip(i+2);
        }
    };

    // Create a player using the the inputs in the front
    const createPlayer = function(name, active=false) {
        const playerName = document.getElementById(`${name}-name`).value ? document.getElementById(`${name}-name`).value: name;
        playerName.split(" ").join("")
        const sizeX = document.getElementById('coordX').value;
        const sizeY = document.getElementById('coordY').value;
        const realP = document.getElementById(`${name}-realp`).checked;
        const player = new _internal_Player__WEBPACK_IMPORTED_MODULE_0__["default"](playerName.split(" ").join(""), realP, sizeX, sizeY);
        if (active) {
            player.toggleActive();
        }
        randomShip(player);
        return player;
    };

    // Check if the 2 players have the same names and update them if it is the case
    // Prevent id colisition in the boards
    const checkPlayersName = function() {
        if (players.player1.name === players.player2.name) {
            players.player1.setName(players.player1.name + "-1");
            players.player2.setName(players.player2.name + "-2");
        }

    };

    // Store players information used in game
    players = {
        player1: createPlayer("player1", true),
        player2: createPlayer("player2"),
    };

    // Get the player which is currently playing
    const getActivePlayer = function() {
        for (const player in players) {
            if (players[player].active) {
                return player;
            }
        }
        return null;
    };

    // Get the player which is not currently playing
    const getNonActivePlayer = function() {
        for (const player in players) {
            if (!players[player].active) {
                return player;
            }
        }
        return null;
    };

    // Alternate active and non active player as well as update the active board
    const changePlayer = function() {
        const playerActive = getActivePlayer();
        const playerNonActive = getNonActivePlayer();
        players[playerActive].toggleActive();
        players[playerNonActive].toggleActive();
        const boardP1 = document.getElementsByClassName(`grid_${players[playerActive].name}`)[0];
        const boardP2 = document.getElementsByClassName(`grid_${players[playerNonActive].name}`)[0];
        boardP1.classList.toggle("active");
        boardP2.classList.toggle("active");
    };

    // Attack from the computer
    const attack = function() {
        if (!players[getActivePlayer()].realP) {
            const resAttack = controller.attackRandom(players[getNonActivePlayer()]);
            checkResAttack(resAttack);
        }
    };

    // Once a player attack wecheck if check if it was a succesful attack and check if the game end
    const checkResAttack = function(resAttack) {
        if (!resAttack) {
            changePlayer();
        }
        showPlayer();
        if (players[getNonActivePlayer()].board.shipAlive === 0){
            endGame();
        }
        else {
            // Use timeout in order to show the computer playing
            setTimeout(function(){attack();}, 100);
        }
    };

    // Function which create a board
    const generateBoard = function(playerName, board, name, playing=true) {
        // Get Board size 
        const rows = board[0].length;
        const cols = board.length;
        // Get div elements where board is located
        const container = document.getElementById(name);
        // Reset the board
        container.innerHTML = "";
        // Add class to this element in order to differentiate the different boards created
        container.className = "";
        container.classList.add(`grid_p`);
        container.classList.add(`grid_${playerName}`);
        // Create the grid
        container.style["grid-template-columns"] = `repeat(${cols}, 2.5rem)`
        container.style["grid-template-rows"] = `repeat(${rows}, 2.5rem)`
        // Populate the board
        for (let row=0; row<rows; row++) {
            for (let col=0; col<cols; col++) {
                const grid_elem = document.createElement("div");
                grid_elem.className = `grid_elem grid_elem_${playerName}`;
                grid_elem.id = `r_${row}_c_${col}`;
                grid_elem.textContent = board[col][row];
                container.appendChild(grid_elem);
            }
        }
        // Add event to the board for when the player is clicking 
        if (playing) {
            container.onclick = function(event) {
                // Check if the coordinate clicked was already used befor attacking the coordinate
                let [yCoord, xCoord] = event.target.id.match(/\d+/g);
                const checkMove = players[getNonActivePlayer()].board.possibleMove.map((elem) => elem.toString()).indexOf([xCoord, yCoord].toString());
                // Morever we also check if the board selected is the active one
                if (event.target.parentElement.classList.contains("active") && checkMove !== -1) {
                    const resAttack = controller.attackC(event, players[getNonActivePlayer()]);
                    checkResAttack(resAttack);
                    event.target.style.cursor = "not-allowed";
                }
            }
        }
    };

    // Start the Game by building the boards and if necessary executing the first attack
    const runGame = function() {
        showPlayer()
        generateBoard(players.player1.name, players.player1.board.boardG, "player1-grid")
        generateBoard(players.player2.name, players.player2.board.boardG, "player2-grid")
        const boardP = document.getElementsByClassName(`grid_${players.player2.name}`)[0]
        boardP.classList.toggle("active");
        if (!players.player1.realP){
            attack()
        }
    }
    
    // Main function selecting the ship for the human players
    const getGame = function() {
        const player1Name = document.getElementById("player1-game-name");
        const player2Name = document.getElementById("player2-game-name");
        checkPlayersName();
        player1Name.textContent = `${players.player1.name} - Board`;
        player2Name.textContent = `${players.player2.name} - Board`;
        if (players.player1.realP && players.player2.realP) {
            const dialogP1 = document.getElementById("player1-ship");
            const buttonRand1 = document.getElementById("rand-ship1");
            const buttonPlay1 = document.getElementById("play1-game");
            randomShip(players.player1);
            generateBoard(players.player1.name, players.player1.board.boardT, "board-ship1", false)
            buttonPlay1.textContent = `Go to ${players.player2.name} Board`
            dialogP1.showModal();
            dialogP1.classList.toggle('show');
    
            buttonRand1.addEventListener("click", (event) => {
                randomShip(players.player1);
                generateBoard(players.player1.name, players.player1.board.boardT, "board-ship1", false)
            })
            
            buttonPlay1.addEventListener("click", (event) => {
                const dialogP2 = document.getElementById("player2-ship");
                const buttonRand2 = document.getElementById("rand-ship2");
                const buttonPlay2 = document.getElementById("play2-game");
                dialogP1.close();
                randomShip(players.player2);
                generateBoard(players.player2.name, players.player2.board.boardT, "board-ship2", false)
                dialogP2.showModal();
                dialogP2.classList.toggle('show');
                buttonRand2.addEventListener("click", (event) => {
                    randomShip(players.player2);
                    generateBoard(players.player2.name, players.player2.board.boardT, "board-ship2", false)
                })
                buttonPlay2.addEventListener("click", (event) => {
                    dialogP2.close();
                    runGame();
                })
            })
        }
        else if (players.player1.realP) {
            const dialogP1 = document.getElementById("player1-ship");
            const buttonRand1 = document.getElementById("rand-ship1");
            const buttonPlay1 = document.getElementById("play1-game");
            randomShip(players.player2);
            generateBoard(players.player1.name, players.player1.board.boardT, "board-ship1", false)
            buttonPlay1.textContent = `Play Game`
            dialogP1.showModal();
            dialogP1.classList.toggle('show');
            buttonRand1.addEventListener("click", (event) => {
                randomShip(players.player1);
                generateBoard(players.player1.name, players.player1.board.boardT, "board-ship1", false)
            })
            buttonPlay1.addEventListener("click", (event) => {
                dialogP1.close();
                runGame();
            })
        }
        else if (players.player2.realP) {
            const dialogP2 = document.getElementById("player2-ship");
            const buttonRand2 = document.getElementById("rand-ship2");
            const buttonPlay2 = document.getElementById("play2-game");
            randomShip(players.player1);
            generateBoard(players.player2.name, players.player2.board.boardT, "board-ship2", false)
            dialogP2.showModal();
            dialogP2.classList.toggle('show');
            buttonRand2.addEventListener("click", (event) => {
                randomShip(players.player2);
                generateBoard(players.player2.name, players.player2.board.boardT, "board-ship2", false)
            })
            buttonPlay2.addEventListener("click", (event) => {
                dialogP2.close();
                runGame();
            })
        }
        else {
            randomShip(players.player1);
            randomShip(players.player2);
            runGame();
        }
    } 

    // Function Ending the game
    const endGame = function() {
        const playerWin = players[getActivePlayer()];
        const playerLoss = players[getNonActivePlayer()];
        
        document.getElementsByClassName(`grid_${playerLoss.name}`)[0].className = "grid_NOT";
        document.getElementsByClassName(`grid_${playerWin.name}`)[0].className = "grid_NOT win";

        document.getElementById("info-r").textContent = `${playerWin.name} win !!!`
    };
    

    return { 
        getGame,
        generateBoard
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
/* harmony import */ var _internal_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal/Gameboard */ "./src/modules/internal/Gameboard.js");




const UI = function() {
    const buttonRun = document.getElementById("run-game");
    const sizeX = document.getElementById('coordX').value;
    const sizeY = document.getElementById('coordY').value;
    const boardEmpty = new _internal_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"](sizeX, sizeY);
    (0,_CreateGame__WEBPACK_IMPORTED_MODULE_0__.CreateGame)().generateBoard("NOT", boardEmpty.boardG, "player1-grid", false);
    (0,_CreateGame__WEBPACK_IMPORTED_MODULE_0__.CreateGame)().generateBoard("NOT", boardEmpty.boardG, "player2-grid", false);

    buttonRun.addEventListener("click", (event) => {
        if (event.target.className === "restart") {
            window.location.reload()
        }
        else {
            event.target.textContent = "RESET";
            event.target.className = "restart";
            const game = (0,_CreateGame__WEBPACK_IMPORTED_MODULE_0__.CreateGame)();
            game.getGame();
        }
          
    })
}

/***/ }),

/***/ "./assets/background/bckgMicrosoftGen.jpeg":
/*!*************************************************!*\
  !*** ./assets/background/bckgMicrosoftGen.jpeg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3149c3a93916c28b132b.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsZ0JBQWdCO0FBQ2hFLGdEQUFnRCxlQUFlOztBQUUvRCwyREFBMkQsZ0JBQWdCO0FBQzNFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVReUM7QUFDSzs7O0FBR3ZDO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJEQUFTO0FBQ3BDLElBQUksdURBQVU7QUFDZCxJQUFJLHVEQUFVOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVEQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZGlhbG9nLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcGxheWVySW5mb3MuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2RpYWxvZy5jc3M/NzY5NCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Zvb3Rlci5jc3M/N2U5MiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3M/MjE4NyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2hlYWRlci5jc3M/ZTY4YiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9wbGF5ZXJJbmZvcy5jc3M/YmNhNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbnRlcm5hbC9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaW50ZXJuYWwvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ludGVybmFsL1NoaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdWkvQ29udHJvbEdhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdWkvQ3JlYXRlR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91aS91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG5kaWFsb2cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgNTAsIDAuNSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW47XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuZGlhbG9nLnNob3cge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cblxuZGlhbG9nIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5kaWFsb2c6OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNzgxKTtcbn1cbmRpYWxvZyBidXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG5cblxuZGlhbG9nICNyZXN1bHQtZ2FtZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2RpYWxvZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7OztBQUlBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5kaWFsb2cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDUwLCAwLjUpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW47XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbmRpYWxvZy5zaG93IHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuZGlhbG9nIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjc4MSk7XFxufVxcbmRpYWxvZyBidXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcblxcblxcbmRpYWxvZyAjcmVzdWx0LWdhbWUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG5mb290ZXIgLmZhIHtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIG9wYWNpdHk6IC43O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtBQUNaOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuZm9vdGVyIC5mYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBvcGFjaXR5OiAuNztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdhbWVib2FyZCAqL1xuI2dhbWVib2FyZC1sb2Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBtaW4taGVpZ2h0OiAxNTAlO1xufVxuXG4uZ3JpZF9wLmFjdGl2ZSwgLndpbiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYig1MSwgMjU1LCAwKTtcbn1cblxuLmdyaWQgZGl2LCAjYm9hcmQtc2hpcDEsICNib2FyZC1zaGlwMiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCA1cmVtKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA1cmVtKTtcbiAgICBjb2xvcjphbGljZWJsdWU7XG59XG5cbi5ncmlkIGRpdiBkaXYsICNib2FyZC1zaGlwMSBkaXYsICNib2FyZC1zaGlwMiBkaXYge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmViM2I7XG59XG5cbi5ncmlkX2VsZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aXZlIC5ncmlkX2VsZW06aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiO1xufVxuXG4uZ3JpZF9lbGVtLndvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuNCk7XG59XG5cbi5ncmlkIC5ncmlkX05PVCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMzNik7XG4gICAgY29udGVudDogXCJOT1RcIjtcbn1cblxuLmdyaWQgZGl2IC5ncmlkX2VsZW1fTk9ULCAuZ3JpZCAuZ3JpZF9OT1QgLmdyaWRfZWxlbSAge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmViM2I1OTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZ3JpZCAuZ3JpZF9OT1QgLmdyaWRfZWxlbS5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC41KTtcbn0gXG5cbi5ncmlkIC5ncmlkX05PVCAuZ3JpZF9lbGVtLmhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XG59IFxuXG4uaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgYW5pbWF0aW9uOiBoaXQtYW5pbWF0aW9uIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4gIFxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgYW5pbWF0aW9uOiBtaXNzLWFuaW1hdGlvbiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGhpdC1hbmltYXRpb24ge1xuICAgIDAlIHsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBcbiAgICB9XG4gICAgNTAlIHsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDsgXG4gICAgfVxuICAgIDEwMCUgeyBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IFxuICAgIH1cbiAgfVxuICBcbkBrZXlmcmFtZXMgbWlzcy1hbmltYXRpb24ge1xuICAgIDAlIHsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBcbiAgICB9XG4gICAgNTAlIHsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7IFxuICAgIH1cbiAgICAxMDAlIHsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYztBQUNkO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLDZCQUE2QjtJQUNqQztFQUNGOztBQUVGO0lBQ0k7UUFDSSw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2FtZWJvYXJkICovXFxuI2dhbWVib2FyZC1sb2Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxNTAlO1xcbn1cXG5cXG4uZ3JpZF9wLmFjdGl2ZSwgLndpbiB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDUxLCAyNTUsIDApO1xcbn1cXG5cXG4uZ3JpZCBkaXYsICNib2FyZC1zaGlwMSwgI2JvYXJkLXNoaXAyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgNXJlbSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDVyZW0pO1xcbiAgICBjb2xvcjphbGljZWJsdWU7XFxufVxcblxcbi5ncmlkIGRpdiBkaXYsICNib2FyZC1zaGlwMSBkaXYsICNib2FyZC1zaGlwMiBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZlYjNiO1xcbn1cXG5cXG4uZ3JpZF9lbGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFjdGl2ZSAuZ3JpZF9lbGVtOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiO1xcbn1cXG5cXG4uZ3JpZF9lbGVtLndvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjQpO1xcbn1cXG5cXG4uZ3JpZCAuZ3JpZF9OT1Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMzM2KTtcXG4gICAgY29udGVudDogXFxcIk5PVFxcXCI7XFxufVxcblxcbi5ncmlkIGRpdiAuZ3JpZF9lbGVtX05PVCwgLmdyaWQgLmdyaWRfTk9UIC5ncmlkX2VsZW0gIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZWIzYjU5O1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uZ3JpZCAuZ3JpZF9OT1QgLmdyaWRfZWxlbS5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNSk7XFxufSBcXG5cXG4uZ3JpZCAuZ3JpZF9OT1QgLmdyaWRfZWxlbS5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG59IFxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGFuaW1hdGlvbjogaGl0LWFuaW1hdGlvbiAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4gIFxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgYW5pbWF0aW9uOiBtaXNzLWFuaW1hdGlvbiAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhpdC1hbmltYXRpb24ge1xcbiAgICAwJSB7IFxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IFxcbiAgICB9XFxuICAgIDUwJSB7IFxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyBcXG4gICAgfVxcbiAgICAxMDAlIHsgXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgXFxuICAgIH1cXG4gIH1cXG4gIFxcbkBrZXlmcmFtZXMgbWlzcy1hbmltYXRpb24ge1xcbiAgICAwJSB7IFxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IFxcbiAgICB9XFxuICAgIDUwJSB7IFxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgXFxuICAgIH1cXG4gICAgMTAwJSB7IFxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IFxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaGVhZGVyIGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XG59XG5cblxuaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyIGRpdiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xcbn1cXG5cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvYmFja2dyb3VuZC9iY2tnTWljcm9zb2Z0R2VuLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwge1xuICAgIGhlaWdodDogMTAwJVxufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogI2ZmZWIzYjsgXG59XG5cbmJvZHk6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDUwLCAwLjUpO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG5oMSwgaDIsIGgzIHtcbiAgICBmb250LWZhbWlseTogJ05hdXRpbHVzIFBvbXBpbGl1cycsICdBcmlhbCBCbGFjaycsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNmZmViM2I7IC8qIEJyaWdodCB5ZWxsb3cgZm9yIGNvbnRyYXN0ICovXG59XG4gIFxucCwgYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcbn1cbiAgXG5tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWluLWhlaWdodDogODAlO1xufVxuXG4jZ2VuLXBhcmFtIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4jZ2FtZSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcbiAgICBib3gtc2hhZG93OiAwLjA1cmVtIDAgMC4wNXJlbSAwLjA1cmVtO1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWIzYjtcbiAgICBjb2xvcjogcmdiKDQsIDc0LCAxMzYpO1xuICAgIHRyYW5zaXRpb246IHRyYW5mb3JtIDAuMnMsIGJhY2tncm91bmQtY29sb3IgMC41cywgY29sb3IgMC41cztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNCwgNzQsIDEzNik7XG4gIGNvbG9yOiAjZmZlYjNiO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGlGQUE4RjtJQUM5RixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksNERBQTREO0lBQzVELGNBQWMsRUFBRSwrQkFBK0I7QUFDbkQ7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qiw0REFBNEQ7QUFDaEU7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUNBQWlDO0VBQ2pDLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJVxcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvYmFja2dyb3VuZC9iY2tnTWljcm9zb2Z0R2VuLmpwZWcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiAjZmZlYjNiOyBcXG59XFxuXFxuYm9keTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDUwLCAwLjUpO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuaDEsIGgyLCBoMyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTmF1dGlsdXMgUG9tcGlsaXVzJywgJ0FyaWFsIEJsYWNrJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICNmZmViM2I7IC8qIEJyaWdodCB5ZWxsb3cgZm9yIGNvbnRyYXN0ICovXFxufVxcbiAgXFxucCwgYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxufVxcbiAgXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBtaW4taGVpZ2h0OiA4MCU7XFxufVxcblxcbiNnZW4tcGFyYW0ge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbiNnYW1lIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcXG4gICAgYm94LXNoYWRvdzogMC4wNXJlbSAwIDAuMDVyZW0gMC4wNXJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiO1xcbiAgICBjb2xvcjogcmdiKDQsIDc0LCAxMzYpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuZm9ybSAwLjJzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMsIGNvbG9yIDAuNXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNCwgNzQsIDEzNik7XFxuICBjb2xvcjogI2ZmZWIzYjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucGxheWVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnBsYXllcjEsIC5wbGF5ZXIyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbiNwbGF5ZXIxLXJlYWxwLCAjcGxheWVyMi1yZWFscCB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGFjY2VudC1jb2xvcjogI2ZmZWIzYjtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxZW07XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgYmFja2dyb3VuZDogcHVycGxlOyBcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcbiAgICBjb2xvcjogcmdiKDQsIDc0LCAxMzYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmViM2I7XG59XG5cbi5wbGF5ZXIxIGxhYmVsLCAucGxheWVyMiBsYWJlbCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4jcGxheWVyMS1uYW1lLCAjcGxheWVyMi1uYW1lIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWIzYjtcbiAgICBjb2xvcjogcmdiKDQsIDc0LCAxMzYpO1xufVxuXG4jcGxheWVyMS1uYW1lOmZvY3VzLCAjcGxheWVyMi1uYW1lOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XG59XG5cblxuLmluZm8tYm9hcmQgaW5wdXQge1xuICAgIG1heC13aWR0aDogM3JlbTtcbn1cblxuLnBhcmFtZXRlcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmJvYXJkLXNpemUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IC41cmVtO1xufVxuXG5cblxuI2luZm8tZ2FtZXtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBib3JkZXI6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMzc3KTtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cblxuI2luZm8tciB7XG4gICAgbWFyZ2luLXRvcDogLjJyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNpbmZvLXIgcCB7XG4gICAgbWFyZ2luLXRvcDogLjJyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3BsYXllckluZm9zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOzs7QUFHQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7Ozs7QUFJQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFdBQVc7SUFDWCw0Q0FBNEM7SUFDNUMsVUFBVTtJQUNWLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wbGF5ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5wbGF5ZXIxLCAucGxheWVyMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jcGxheWVyMS1yZWFscCwgI3BsYXllcjItcmVhbHAge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGFjY2VudC1jb2xvcjogI2ZmZWIzYjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIGJhY2tncm91bmQ6IHB1cnBsZTsgXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1udW1iZXJdIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxuICAgIGNvbG9yOiByZ2IoNCwgNzQsIDEzNik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmViM2I7XFxufVxcblxcbi5wbGF5ZXIxIGxhYmVsLCAucGxheWVyMiBsYWJlbCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllcjEtbmFtZSwgI3BsYXllcjItbmFtZSB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWIzYjtcXG4gICAgY29sb3I6IHJnYig0LCA3NCwgMTM2KTtcXG59XFxuXFxuI3BsYXllcjEtbmFtZTpmb2N1cywgI3BsYXllcjItbmFtZTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLmluZm8tYm9hcmQgaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDNyZW07XFxufVxcblxcbi5wYXJhbWV0ZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmJvYXJkLXNpemUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG5cXG5cXG4jaW5mby1nYW1le1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXI6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjM3Nyk7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuXFxuI2luZm8tciB7XFxuICAgIG1hcmdpbi10b3A6IC4ycmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI2luZm8tciBwIHtcXG4gICAgbWFyZ2luLXRvcDogLjJyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaWFsb2cuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BsYXllckluZm9zLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BsYXllckluZm9zLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy9oZWFkZXIuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZm9vdGVyLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZGlhbG9nLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2dhbWVib2FyZC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9wbGF5ZXJJbmZvcy5jc3MnO1xuXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vbW9kdWxlcy91aS91aSc7XG5cblVJKCk7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoeFNpemUsIHlTaXplKSB7XG4gICAgICAgIC8vIFNpemUgb2YgZ2FtZWJvYXJkXG4gICAgICAgIHRoaXMueFNpemUgPSB4U2l6ZTtcbiAgICAgICAgdGhpcy55U2l6ZSA9IHlTaXplO1xuICAgICAgICAvLyBBcnJheSB3aXRoIGFsbCBzaGlwIG9mIGdhbWVib2FyZFxuICAgICAgICB0aGlzLnNoaXBBcnIgPSBbXTtcbiAgICAgICAgLy8gSW5pdGlhbGlzaXplIHRoZSBudW1iZXIgb2YgYXR0YWNrXG4gICAgICAgIHRoaXMuYXR0YWNrTmIgPSAwO1xuICAgICAgICAvLyBJbml0aWFsaXNpemUgdGhlIG51bWJlciBvZiBtaXNzZWQgYXR0YWNrXG4gICAgICAgIHRoaXMuYXR0YWNrTWlzc2VkID0gMDtcbiAgICAgICAgLy8gSW5pdGlhbGlzemUgdGhlIG51bWJlciBvZiBzaGlwIHN0aWxsIGFsaXZlXG4gICAgICAgIHRoaXMuc2hpcEFsaXZlID0gMDtcbiAgICAgICAgLy8gQXJyYXkgd2l0aCBhbGwgcG9zc2libGUgbW92ZXNcbiAgICAgICAgdGhpcy5wb3NzaWJsZU1vdmUgPSBbXVxuICAgICAgICAvLyBJbml0aWFsaXNlIEJvYXJkVCB3aWNoIHdpbGwgY29udGFpbiB0aGUgc2hpcHNcbiAgICAgICAgdGhpcy5ib2FyZFQgPSB0aGlzLmluaXRCb2FyZChcIi5cIik7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgQm9hcmRHIHRoZSBib2FyZCBmb3IgdGhlIGdhbWUgdmlyZ2luXG4gICAgICAgIHRoaXMuYm9hcmRHID0gdGhpcy5pbml0Qm9hcmQoXCJcIik7XG4gICAgfTtcblxuICAgIC8vIEluaXRpYWxpc2UgdGhlIDIgYm9hcmRzIGFycmF5IGFuZCB0aGUgcG9zc2libGUgbW92ZXNcbiAgICBpbml0Qm9hcmQoZGF0YSkge1xuICAgICAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgICAgICB0aGlzLnBvc3NpYmxlTW92ZSA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy54U2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBhcnJheVtpXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnlTaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICBhcnJheVtpXVtqXSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NzaWJsZU1vdmUucHVzaChbaSwgal0pIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICAvLyByZXNldCB0aGUgYm9hcmQgdXNlZCBmb3IgbmV3IGdhbWUgb3IgdG8gcmVpbml0aWFsaXNlIHRoZSBzaGlwc1xuICAgIHJlc2V0Qm9hcmQoKSB7XG4gICAgICAgIHRoaXMuc2hpcEFyciA9IFtdO1xuICAgICAgICB0aGlzLmF0dGFja05iID0gMDtcbiAgICAgICAgdGhpcy5hdHRhY2tNaXNzZWQgPSAwO1xuICAgICAgICB0aGlzLnNoaXBBbGl2ZSA9IDA7XG4gICAgICAgIHRoaXMucG9zc2libGVNb3ZlID0gW11cbiAgICAgICAgdGhpcy5ib2FyZFQgPSB0aGlzLmluaXRCb2FyZChcIi5cIik7XG4gICAgICAgIHRoaXMuYm9hcmRHID0gdGhpcy5pbml0Qm9hcmQoXCJcIik7XG4gICAgfTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBjb29yZGluYXRlIGdpdmVuIGlzIG9uIHRoZSBwYXRoIG9mIGEgc2hpcFxuICAgIGNoZWNrU2hpcENvb3JkKGNvb3JkKSB7XG4gICAgICAgIGxldCBjaGVja1NoaXAgPSB0cnVlO1xuICAgICAgICB0aGlzLnNoaXBBcnIuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAucG9zaXRpb24gPT09IFwiSE9SSVpPTlRBTFwiICYmIGNvb3JkWzFdID09PSBzaGlwLmNvb3JkSW5pdFsxXSkge1xuICAgICAgICAgICAgICAgIGNoZWNrU2hpcCA9IGNvb3JkWzBdIDwgc2hpcC5jb29yZEluaXRbMF0gfHwgY29vcmRbMF0gPiBzaGlwLmNvb3JkRmluWzBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzaGlwLnBvc2l0aW9uID09PSBcIlZFUlRJQ0FMXCIgJiYgY29vcmRbMF0gPT09IHNoaXAuY29vcmRJbml0WzBdKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tTaGlwID0gY29vcmRbMV0gPCBzaGlwLmNvb3JkSW5pdFsxXSB8fCBjb29yZFsxXSA+IHNoaXAuY29vcmRGaW5bMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGNoZWNrU2hpcDtcbiAgICB9XG5cbiAgICBjaGVja0Nvb3JkaW5hdGUoY29vcmQpIHtcbiAgICAgICAgcmV0dXJuIGNvb3JkWzBdIDwgdGhpcy54U2l6ZSAmJiBjb29yZFsxXSA8IHRoaXMueVNpemVcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB0byBhZGQgYSBzaGlwIHJhbmRvbWx5IG9uIHRoZSBib2FyZFxuICAgIGFkZFJhbmRvbVNoaXAobGVuZ3RoPTMpIHtcbiAgICAgICAgbGV0IHNoaXAgPSBudWxsO1xuICAgICAgICB3aGlsZSAoIXNoaXApIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkSW5pdCA9IHRoaXMucG9zc2libGVNb3ZlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLnBvc3NpYmxlTW92ZS5sZW5ndGgpXTtcbiAgICAgICAgICAgIC8vIGZvciB0aGUgaW5pdGlhbCBjb29yZGluYXRlIHdlIGNoZWNrIGlmIGl0IGlzIGluIHRoZSBib2FyZCBhbmQgaWYgaXQgaXMgbm90IG9uIGFub3RoZXIgc2hpcFxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDb29yZGluYXRlKGNvb3JkSW5pdCkgJiYgdGhpcy5jaGVja1NoaXBDb29yZChjb29yZEluaXQpKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHNoaXBzIGFyZSBiZXR3ZWVuIGEgbGVuZ3RoIG9mIDIgYW5kIDRcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRGaW47XG4gICAgICAgICAgICAgICAgLy8gV2UgcmFuZG9tbHkgY3JlYXRlIGEgc2hpcCBob3ppem9udGFsIG9yIHZlcnRpY2FsXG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRGaW4gPSBbY29vcmRJbml0WzBdLCBjb29yZEluaXRbMV0gKyBsZW5ndGhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRGaW4gPSBbY29vcmRJbml0WzBdICsgbGVuZ3RoLCBjb29yZEluaXRbMV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmb3IgdGhlIGVuZGluZyBjb29yZGluYXRlIHdlIGNoZWNrIGlmIGl0IGlzIGluIHRoZSBib2FyZCBhbmQgaWYgaXQgaXMgbm90IG9uIGFub3RoZXIgc2hpcFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrQ29vcmRpbmF0ZShjb29yZEZpbikgJiYgdGhpcy5jaGVja1NoaXBDb29yZChjb29yZEZpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRTaGlwKGNvb3JkSW5pdCwgY29vcmRGaW4pO1xuICAgICAgICAgICAgICAgICAgICBzaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBBZGQgc2hpcCB3aXRoIHRoZSBnaXZlbiBjb29yZGluYXRlc1xuICAgIGFkZFNoaXAoY29vcmRJbml0LCBjb29yZEZpbikge1xuICAgICAgICBpZiAodGhpcy5jaGVja0Nvb3JkaW5hdGUoY29vcmRJbml0KSAmJiB0aGlzLmNoZWNrQ29vcmRpbmF0ZShjb29yZEZpbikpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChjb29yZEluaXQsIGNvb3JkRmluKVxuICAgICAgICAgICAgdGhpcy5zaGlwQXJyLnB1c2goc2hpcCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlU2hpcChzaGlwKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcEFsaXZlKys7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIFxuXG4gICAgLy8gQWRkIHNoaXAgdG8gYm9hcmQgQmFyZFQgZWFjaCB0aW1lIGEgYm9hcmQgaXMgYWRkZWRcbiAgICBwb3B1bGF0ZVNoaXAoc2hpcCkge1xuICAgICAgICBpZiAoc2hpcC5wb3NpdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRUW3NoaXAuY29vcmRJbml0WzBdXVtzaGlwLmNvb3JkSW5pdFsxXV0gPSAnfCc7XG4gICAgICAgICAgICB0aGlzLmJvYXJkVFtzaGlwLmNvb3JkRmluWzBdXVtzaGlwLmNvb3JkSW5pdFsxXV0gPSAnPic7XG4gICAgICAgICAgICBmb3IgKGxldCBpPXNoaXAuY29vcmRJbml0WzBdKzE7IGk8PXNoaXAuY29vcmRGaW5bMF0tMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFRbaV1bc2hpcC5jb29yZEluaXRbMV1dID0gJy0tJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGlwLnBvc2l0aW9uID09PSBcIlZFUlRJQ0FMXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRUW3NoaXAuY29vcmRJbml0WzBdXVtzaGlwLmNvb3JkSW5pdFsxXV0gPSAnXic7XG4gICAgICAgICAgICB0aGlzLmJvYXJkVFtzaGlwLmNvb3JkSW5pdFswXV1bc2hpcC5jb29yZEZpblsxXV0gPSAnX18nO1xuICAgICAgICAgICAgZm9yIChsZXQgaT1zaGlwLmNvb3JkSW5pdFsxXSsxOyBpPD1zaGlwLmNvb3JkRmluWzFdLTE7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRUW3NoaXAuY29vcmRJbml0WzBdXVtpXSA9ICd8JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBUcmFuc3Bvc2UgYXJyYXkgZm9yIHNob3dpbmcgYm9hcmRcbiAgICB0cmFuc3Bvc2UoYXJyKSB7XG4gICAgICAgIGxldCBbcm93XSA9IGFyclxuICAgICAgICByZXR1cm4gcm93Lm1hcCgodmFsdWUsIGNvbHVtbikgPT4gYXJyLm1hcChyb3cgPT4gcm93W2NvbHVtbl0pKVxuICAgIH1cblxuICAgIC8vIFNob3cgdHJ1ZSBib2FyZCB3aXRoIHNoaXBzIGluIGNvbnNvbGVcbiAgICBzaG93Qm9hcmQoKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgYm9hcmRWID0gdGhpcy50cmFuc3Bvc2UoWy4uLnRoaXMuYm9hcmRUXSlcbiAgICAgICAgY29uc29sZS5sb2coWycgJ10uY29uY2F0KEFycmF5LmZyb20oQXJyYXkoOCkua2V5cygpKSkudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csJyAnKSk7XG4gICAgICAgIGJvYXJkVi5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSAke2xpbmUudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csJyAnKX1gKVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGNvb3JkaW5hdGUgdG91Y2ggdGhlIHNoaXBcbiAgICBjaGVja1NoaXBBdHRhY2soc2hpcCwgY29vcmQpIHtcbiAgICAgICAgaWYgKHNoaXAucG9zaXRpb24gPT09IFwiSE9SSVpPTlRBTFwiICYmIGNvb3JkWzFdID09PSBzaGlwLmNvb3JkSW5pdFsxXSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvb3JkWzBdID49IHNoaXAuY29vcmRJbml0WzBdICYmIGNvb3JkWzBdIDw9IHNoaXAuY29vcmRGaW5bMF0gXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2hpcC5wb3NpdGlvbiA9PT0gXCJWRVJUSUNBTFwiICYmIGNvb3JkWzBdID09PSBzaGlwLmNvb3JkSW5pdFswXSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvb3JkWzFdID49IHNoaXAuY29vcmRJbml0WzFdICYmIGNvb3JkWzFdIDw9IHNoaXAuY29vcmRGaW5bMV0gXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHdoZXJlIG9wcG9uZW50IGF0dGFjayBhIGNvb3JkaW5hdGUgb2YgdGhlIGJvYXJkXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZCkge1xuICAgICAgICBpZih0aGlzLmNoZWNrQ29vcmRpbmF0ZShjb29yZCkpIHtcbiAgICAgICAgICAgIGxldCB0b3VjaGVkID0gW107XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBhIHNoaXAgaXMgdG91Y2hlZCAgXG4gICAgICAgICAgICAvLyBpZiBpdCBpcyB0aGUgY2FzZSB0aGUgaW5kZXggaXMgc3RvcmVkIGluIHZhcmlhYmxlIFwidG91Y2hlZFwiXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5zaGlwQWxpdmU7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrU2hpcEF0dGFjayh0aGlzLnNoaXBBcnJbaV0sIGNvb3JkKSkge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaGVkLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQWRkIG9uZSBhdHRhY2tcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrTmIrKztcbiAgICAgICAgICAgIC8vIEFkZCBhdHRhY2sgb24gYm9hcmRcbiAgICAgICAgICAgIHRoaXMuYm9hcmRUW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSBcInhcIjtcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBtb3ZlIGZyb20gcG9zc2libGUgbW92ZXMgYXJyYXlcbiAgICAgICAgICAgIHRoaXMucG9zc2libGVNb3ZlID0gdGhpcy5wb3NzaWJsZU1vdmUuZmlsdGVyKGNvb3JkZCA9PiBjb29yZGQudG9TdHJpbmcoKSAhPT0gY29vcmQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBpZiAodG91Y2hlZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHRvdWNoIG9mIHRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgYSBzaGlwIGlzIHRvdWNoZWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZEdbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IFwib1wiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBBcnJbdG91Y2hdLmhpdCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwQXJyW3RvdWNoXS5zdW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWxldGUgc2hpcCBpZiBpdHMgc3Vua1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwQXJyLnNwbGljZSh0b3VjaCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBBbGl2ZS0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRHW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSBcInhcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01pc3NlZCsrO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9O1xufTtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcmVhbFAsIHhTaXplLCB5U2l6ZSkge1xuICAgICAgICAvLyBJbml0aWFsaXNpemUgaWYgdGhlIHBsYXllciBpcyBhIHJlYWwgb25lXG4gICAgICAgIHRoaXMucmVhbFAgPSByZWFsUDtcbiAgICAgICAgLy8gTmFtZSBnaXZlbiB0byB0aGUgcGxheWVyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIC8vIElzIGl0IHRoZSBjdXJyZW50IHBsYXllclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyBib2FyZCBvZiB0aGUgcGxheWVyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZWJvYXJkKHhTaXplLCB5U2l6ZSk7XG4gICAgfTtcblxuICAgIC8vIG1vZGlmaXkgbmFtZSBvZiB0aGUgcGxheWVyXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfTtcblxuICAgIC8vIHRvZ2dsZSB0aGUgYm9vbGVlbiBpZiBpdHMgdGhlIG9uZSBwbGF5aW5nXG4gICAgdG9nZ2xlQWN0aXZlKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZT0gIXRoaXMuYWN0aXZlO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGNvb3JkSW5pdCwgY29vcmRGaW4pIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBvZiB0aW1lcyB0aGUgc2hpcCB3ZXJlIGhpdFxuICAgICAgICB0aGlzLmhpdE5iID0gMDtcbiAgICAgICAgLy8gQm9vbGVhbiBzaG93aW5nIGlmIHRoZSBzaGlwIHdhcyBoaXQgaW4gYWxsIGl0cyBjb29yZGluYXRlc1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNvb2RpbmF0ZXMgaW5pdGlhbCBhbmQgZmluYWwgb2YgdGhlIHNoaXAgZ2l2ZW4gZm9ybSBhIHZlcnRpY2FsIHNoaXBcbiAgICAgICAgaWYgKGNvb3JkSW5pdFswXSA9PT0gY29vcmRGaW5bMF0gJiYgY29vcmRJbml0WzFdICE9PSBjb29yZEZpblsxXSkge1xuICAgICAgICAgICAgLy8gaW5pdCBsZW5ndGggb2YgdGhlIHNoaXBcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gTWF0aC5hYnMoY29vcmRJbml0WzFdLWNvb3JkRmluWzFdKSArIDFcbiAgICAgICAgICAgIC8vIGluaXQgcG9zaXNpb24gb2YgdGhlIHNoaXBcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgICAgICAvLyBzdG9yZSBpbml0aWFsIGFuZCBmaW5hbCBjb29yZGluYXRlIGluIGZ1bmN0aW9uIG9mIGl0cyBwb3NpdGlvblxuICAgICAgICAgICAgdGhpcy5jb29yZEluaXQgPSBjb29yZEluaXRbMV0gPCBjb29yZEZpblsxXSA/IGNvb3JkSW5pdDogY29vcmRGaW47XG4gICAgICAgICAgICB0aGlzLmNvb3JkRmluID0gY29vcmRJbml0WzFdID4gY29vcmRGaW5bMV0gPyBjb29yZEluaXQ6IGNvb3JkRmluO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvb3JkSW5pdFsxXSA9PT0gY29vcmRGaW5bMV0gJiYgY29vcmRJbml0WzBdICE9PSBjb29yZEZpblswXSkge1xuICAgICAgICAgICAgLy8gaW5pdCBsZW5ndGggb2YgdGhlIHNoaXBcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gTWF0aC5hYnMoY29vcmRJbml0WzBdLWNvb3JkRmluWzBdKSArIDFcbiAgICAgICAgICAgIC8vIGluaXQgcG9zaXNpb24gb2YgdGhlIHNoaXBcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgICAgIC8vIHN0b3JlIGluaXRpYWwgYW5kIGZpbmFsIGNvb3JkaW5hdGUgaW4gZnVuY3Rpb24gb2YgaXRzIHBvc2l0aW9uXG4gICAgICAgICAgICB0aGlzLmNvb3JkSW5pdCA9IGNvb3JkSW5pdFswXSA8IGNvb3JkRmluWzBdID8gY29vcmRJbml0OiBjb29yZEZpbjtcbiAgICAgICAgICAgIHRoaXMuY29vcmRGaW4gPSBjb29yZEluaXRbMF0gPiBjb29yZEZpblswXSA/IGNvb3JkSW5pdDogY29vcmRGaW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb29yZGluYXRlIGdpdmVuICR7Y29vcmRJbml0fSBhbmQgJHtjb29yZEZpbn0gZG9lc24ndCBhbGxvdyB0aGUgY3JlYXRpb24gb2YgYSBzaGlwYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBzaGlwIGhhcyBzdW5rXG4gICAgaXNTdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5oaXROYiA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gaWYgc2hpcCBpcyBoaXQgaXRlcmF0ZSB0aGUgbnVtYmVyIG9mIGhpdCBhbmQgY2hlY2sgaWYgc2hpcCBoYXMgc3Vua1xuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXROYisrO1xuICAgICAgICB0aGlzLmlzU3VuaygpO1xuICAgIH1cbn07XG4iLCJcbi8vIEZhY3RvcnkgZnVuY3Rpb24gZGVhbGluZyB3aXRoIHRoZSBjb250cm9sIG9mIHRoZSBwbGF5ZXIgYW5kIHRoZSBjb21wdXRlclxuZXhwb3J0IGNvbnN0IENvbnRyb2xHYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gR2l2ZSByZXN1bHRzIHRvIHRoZSByb3VuZCBhY3R1YWxseSBwbGF5ZWRcbiAgICBjb25zdCBkZWFsUmVzdWx0ID0gZnVuY3Rpb24ocmVzdWx0LCBuYlNoaXAsIHRhcmdldCwgcGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm8tclwiKTtcbiAgICAgICAgY29uc3QgcGxheWVyQWN0aXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJHXCIpLnRleHRDb250ZW50XG4gICAgICAgIC8vIENoZWNrIGlmIG9uZSBzaGlwIHdhcyBoaXRcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJoaXRcIik7XG4gICAgICAgICAgICBpZiAobmJTaGlwID09PSBwbGF5ZXIuYm9hcmQuc2hpcEFsaXZlKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVySW5mby50ZXh0Q29udGVudCA9IGA6ICR7cGxheWVyQWN0aXZlfSBUb3VjaGVkYFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVySW5mby50ZXh0Q29udGVudCA9IGA6ICR7cGxheWVyQWN0aXZlfSBoYXMgc3VuayBhIGJvYXRgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcIm1pc3NcIik7XG4gICAgICAgICAgICBjb250YWluZXJJbmZvLnRleHRDb250ZW50ID0gYDogJHtwbGF5ZXJBY3RpdmV9IE1pc3NlZGBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gYXR0YWNrIG9mIGEgaHVtYW4gcGxheWVyXG4gICAgY29uc3QgYXR0YWNrQyA9IGZ1bmN0aW9uKGV2ZW50LCBwbGF5ZXIpIHtcbiAgICAgICAgLy8gR2V0IGFsbCBjdXJyZW50IHNoaXAgaW4gb3JkZXIgdG8gY29tcGFyZSBhZnRlciB0aGUgYXR0YWNrXG4gICAgICAgIGNvbnN0IG5iU2hpcCA9IHBsYXllci5ib2FyZC5zaGlwQWxpdmU7XG4gICAgICAgIC8vIEdldCBwb3NpdGlvbiBvbiBmcm9udCBhc3NvY2lhdGVkIHdpdGggdGhlIGNvb3JkaW5hdGUgY2xpY2tlZCBieSBwbGF5ZXJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgY29vcmRpbmF0ZSBjbGlja2VkIGlzIG9uIHRoZSBncmlkXG4gICAgICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhgZ3JpZF9lbGVtXyR7cGxheWVyLm5hbWV9YCkpIHJldHVyblxuICAgICAgICAvLyBFeHRyYWN0IHRoZSBjb29yZGluYXRlIGZyb20gdGhlIGlkIG9mIHRoZSBncmlkIGVsZW1lbnRcbiAgICAgICAgbGV0IFt5Q29vcmQsIHhDb29yZF0gPSB0YXJnZXQuaWQubWF0Y2goL1xcZCsvZyk7XG4gICAgICAgIC8vIEF0dGFjayB0aGUgcGxheWVyJ3MgYm9hcmQgZ2l2ZW5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soW051bWJlcih4Q29vcmQpLCBOdW1iZXIoeUNvb3JkKV0pO1xuICAgICAgICAvLyBBcHBseSB0aGUgcmVzdWx0c1xuICAgICAgICBkZWFsUmVzdWx0KHJlc3VsdCwgbmJTaGlwLCB0YXJnZXQsIHBsYXllcik7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIC8vIEZ1bmN0aW9uIGF0dGFjayBvZiBhIGNvbXB1dGVyXG4gICAgY29uc3QgYXR0YWNrUmFuZG9tID0gZnVuY3Rpb24ocGxheWVyKSB7XG4gICAgICAgIC8vIEdldCBhbGwgY3VycmVudCBzaGlwIGluIG9yZGVyIHRvIGNvbXBhcmUgYWZ0ZXIgdGhlIGF0dGFja1xuICAgICAgICBjb25zdCBuYlNoaXAgPSBwbGF5ZXIuYm9hcmQuc2hpcEFsaXZlO1xuICAgICAgICAvLyBHZXQgYWxsIHBvc3NpYmxlIG1vdmVzIG9uIHRoZSBib2FyZFxuICAgICAgICBjb25zdCBwb3NzaWJsZU1vdmUgPSBwbGF5ZXIuYm9hcmQucG9zc2libGVNb3ZlO1xuICAgICAgICAvLyBnZXQgb25lIHJhbmRvbSBjb29yZGluYXRlIGluIGFsbCBwb3NzaWJsZSBtb3Zlc1xuICAgICAgICBjb25zdCBjb29yZCA9IHBvc3NpYmxlTW92ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZU1vdmUubGVuZ3RoKV07XG4gICAgICAgIC8vIEdldCBwb3NpdGlvbiBvbiBmcm9udCBhc3NvY2lhdGVkIHdpdGggdGhlIGNvb3JkaW5hdGUgb2J0YWluZWRcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3JfJHtjb29yZFsxXX1fY18ke2Nvb3JkWzBdfS5ncmlkX2VsZW1fJHtwbGF5ZXIubmFtZX1gKTtcbiAgICAgICAgLy8gQXR0YWNrIHRoZSBwbGF5ZXIncyBib2FyZCBnaXZlblxuICAgICAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhbTnVtYmVyKGNvb3JkWzBdKSwgTnVtYmVyKGNvb3JkWzFdKV0pO1xuICAgICAgICAvLyBBcHBseSB0aGUgcmVzdWx0c1xuICAgICAgICBkZWFsUmVzdWx0KHJlc3VsdCwgbmJTaGlwLCB0YXJnZXQsIHBsYXllcik7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGF0dGFja0MsXG4gICAgICAgIGF0dGFja1JhbmRvbVxuICAgIH07XG59OyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL2ludGVybmFsL1BsYXllclwiXG5pbXBvcnQgeyBDb250cm9sR2FtZSB9IGZyb20gXCIuL0NvbnRyb2xHYW1lXCI7XG5cbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgY29udHJvbCB0aGUgZ2FtZVxuZXhwb3J0IGNvbnN0IENyZWF0ZUdhbWUgPSBmdW5jdGlvbigpIHtcblxuICAgIC8vIEluaXRpYWxpc2UgdGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBwbGF5ZXJzXG4gICAgbGV0IHBsYXllcnMgPSB7XG4gICAgICAgIHBsYXllcjE6IFwiXCIsXG4gICAgICAgIHBsYXllcjI6IFwiXCIsXG4gICAgfTtcblxuICAgIC8vIENyZWF0aW9uIHRvIGNvbnRyb2wgb2JqZWN0IHRvIGF0dGFjayBhbmQgZ2V0IHJlc3VsdHNcbiAgICBjb25zdCBjb250cm9sbGVyID0gQ29udHJvbEdhbWUoKTtcblxuICAgIC8vIEdldCB0aGUgY3VycmVudCBwbGF5ZXIgYW5kIHNob3cgaXRzIG5hbWUgb24gdGhlIGZyb250XG4gICAgY29uc3Qgc2hvd1BsYXllciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyR1wiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwbGF5ZXJzW2dldEFjdGl2ZVBsYXllcigpXS5uYW1lO1xuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIDMgcmFuZG9tIHNoaXBzIG9mIGxlbmd0aCAyIHRvIDVcbiAgICBjb25zdCByYW5kb21TaGlwID0gZnVuY3Rpb24ocGxheWVyLCBuYlNoaXA9Myl7XG4gICAgICAgIHBsYXllci5ib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxuYlNoaXA7IGkrKyl7XG4gICAgICAgICAgICBwbGF5ZXIuYm9hcmQuYWRkUmFuZG9tU2hpcChpKzIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIENyZWF0ZSBhIHBsYXllciB1c2luZyB0aGUgdGhlIGlucHV0cyBpbiB0aGUgZnJvbnRcbiAgICBjb25zdCBjcmVhdGVQbGF5ZXIgPSBmdW5jdGlvbihuYW1lLCBhY3RpdmU9ZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke25hbWV9LW5hbWVgKS52YWx1ZSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke25hbWV9LW5hbWVgKS52YWx1ZTogbmFtZTtcbiAgICAgICAgcGxheWVyTmFtZS5zcGxpdChcIiBcIikuam9pbihcIlwiKVxuICAgICAgICBjb25zdCBzaXplWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29yZFgnKS52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2l6ZVkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29vcmRZJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHJlYWxQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bmFtZX0tcmVhbHBgKS5jaGVja2VkO1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKHBsYXllck5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIiksIHJlYWxQLCBzaXplWCwgc2l6ZVkpO1xuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBwbGF5ZXIudG9nZ2xlQWN0aXZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmFuZG9tU2hpcChwbGF5ZXIpO1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH07XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgMiBwbGF5ZXJzIGhhdmUgdGhlIHNhbWUgbmFtZXMgYW5kIHVwZGF0ZSB0aGVtIGlmIGl0IGlzIHRoZSBjYXNlXG4gICAgLy8gUHJldmVudCBpZCBjb2xpc2l0aW9uIGluIHRoZSBib2FyZHNcbiAgICBjb25zdCBjaGVja1BsYXllcnNOYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChwbGF5ZXJzLnBsYXllcjEubmFtZSA9PT0gcGxheWVycy5wbGF5ZXIyLm5hbWUpIHtcbiAgICAgICAgICAgIHBsYXllcnMucGxheWVyMS5zZXROYW1lKHBsYXllcnMucGxheWVyMS5uYW1lICsgXCItMVwiKTtcbiAgICAgICAgICAgIHBsYXllcnMucGxheWVyMi5zZXROYW1lKHBsYXllcnMucGxheWVyMi5uYW1lICsgXCItMlwiKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIC8vIFN0b3JlIHBsYXllcnMgaW5mb3JtYXRpb24gdXNlZCBpbiBnYW1lXG4gICAgcGxheWVycyA9IHtcbiAgICAgICAgcGxheWVyMTogY3JlYXRlUGxheWVyKFwicGxheWVyMVwiLCB0cnVlKSxcbiAgICAgICAgcGxheWVyMjogY3JlYXRlUGxheWVyKFwicGxheWVyMlwiKSxcbiAgICB9O1xuXG4gICAgLy8gR2V0IHRoZSBwbGF5ZXIgd2hpY2ggaXMgY3VycmVudGx5IHBsYXlpbmdcbiAgICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yIChjb25zdCBwbGF5ZXIgaW4gcGxheWVycykge1xuICAgICAgICAgICAgaWYgKHBsYXllcnNbcGxheWVyXS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICAvLyBHZXQgdGhlIHBsYXllciB3aGljaCBpcyBub3QgY3VycmVudGx5IHBsYXlpbmdcbiAgICBjb25zdCBnZXROb25BY3RpdmVQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yIChjb25zdCBwbGF5ZXIgaW4gcGxheWVycykge1xuICAgICAgICAgICAgaWYgKCFwbGF5ZXJzW3BsYXllcl0uYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWx0ZXJuYXRlIGFjdGl2ZSBhbmQgbm9uIGFjdGl2ZSBwbGF5ZXIgYXMgd2VsbCBhcyB1cGRhdGUgdGhlIGFjdGl2ZSBib2FyZFxuICAgIGNvbnN0IGNoYW5nZVBsYXllciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJBY3RpdmUgPSBnZXRBY3RpdmVQbGF5ZXIoKTtcbiAgICAgICAgY29uc3QgcGxheWVyTm9uQWN0aXZlID0gZ2V0Tm9uQWN0aXZlUGxheWVyKCk7XG4gICAgICAgIHBsYXllcnNbcGxheWVyQWN0aXZlXS50b2dnbGVBY3RpdmUoKTtcbiAgICAgICAgcGxheWVyc1twbGF5ZXJOb25BY3RpdmVdLnRvZ2dsZUFjdGl2ZSgpO1xuICAgICAgICBjb25zdCBib2FyZFAxID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgZ3JpZF8ke3BsYXllcnNbcGxheWVyQWN0aXZlXS5uYW1lfWApWzBdO1xuICAgICAgICBjb25zdCBib2FyZFAyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgZ3JpZF8ke3BsYXllcnNbcGxheWVyTm9uQWN0aXZlXS5uYW1lfWApWzBdO1xuICAgICAgICBib2FyZFAxLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGJvYXJkUDIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9O1xuXG4gICAgLy8gQXR0YWNrIGZyb20gdGhlIGNvbXB1dGVyXG4gICAgY29uc3QgYXR0YWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghcGxheWVyc1tnZXRBY3RpdmVQbGF5ZXIoKV0ucmVhbFApIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc0F0dGFjayA9IGNvbnRyb2xsZXIuYXR0YWNrUmFuZG9tKHBsYXllcnNbZ2V0Tm9uQWN0aXZlUGxheWVyKCldKTtcbiAgICAgICAgICAgIGNoZWNrUmVzQXR0YWNrKHJlc0F0dGFjayk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gT25jZSBhIHBsYXllciBhdHRhY2sgd2VjaGVjayBpZiBjaGVjayBpZiBpdCB3YXMgYSBzdWNjZXNmdWwgYXR0YWNrIGFuZCBjaGVjayBpZiB0aGUgZ2FtZSBlbmRcbiAgICBjb25zdCBjaGVja1Jlc0F0dGFjayA9IGZ1bmN0aW9uKHJlc0F0dGFjaykge1xuICAgICAgICBpZiAoIXJlc0F0dGFjaykge1xuICAgICAgICAgICAgY2hhbmdlUGxheWVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2hvd1BsYXllcigpO1xuICAgICAgICBpZiAocGxheWVyc1tnZXROb25BY3RpdmVQbGF5ZXIoKV0uYm9hcmQuc2hpcEFsaXZlID09PSAwKXtcbiAgICAgICAgICAgIGVuZEdhbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFVzZSB0aW1lb3V0IGluIG9yZGVyIHRvIHNob3cgdGhlIGNvbXB1dGVyIHBsYXlpbmdcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXthdHRhY2soKTt9LCAxMDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIEZ1bmN0aW9uIHdoaWNoIGNyZWF0ZSBhIGJvYXJkXG4gICAgY29uc3QgZ2VuZXJhdGVCb2FyZCA9IGZ1bmN0aW9uKHBsYXllck5hbWUsIGJvYXJkLCBuYW1lLCBwbGF5aW5nPXRydWUpIHtcbiAgICAgICAgLy8gR2V0IEJvYXJkIHNpemUgXG4gICAgICAgIGNvbnN0IHJvd3MgPSBib2FyZFswXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGNvbHMgPSBib2FyZC5sZW5ndGg7XG4gICAgICAgIC8vIEdldCBkaXYgZWxlbWVudHMgd2hlcmUgYm9hcmQgaXMgbG9jYXRlZFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcbiAgICAgICAgLy8gUmVzZXQgdGhlIGJvYXJkXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAvLyBBZGQgY2xhc3MgdG8gdGhpcyBlbGVtZW50IGluIG9yZGVyIHRvIGRpZmZlcmVudGlhdGUgdGhlIGRpZmZlcmVudCBib2FyZHMgY3JlYXRlZFxuICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYGdyaWRfcGApO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChgZ3JpZF8ke3BsYXllck5hbWV9YCk7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgZ3JpZFxuICAgICAgICBjb250YWluZXIuc3R5bGVbXCJncmlkLXRlbXBsYXRlLWNvbHVtbnNcIl0gPSBgcmVwZWF0KCR7Y29sc30sIDIuNXJlbSlgXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZVtcImdyaWQtdGVtcGxhdGUtcm93c1wiXSA9IGByZXBlYXQoJHtyb3dzfSwgMi41cmVtKWBcbiAgICAgICAgLy8gUG9wdWxhdGUgdGhlIGJvYXJkXG4gICAgICAgIGZvciAobGV0IHJvdz0wOyByb3c8cm93czsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbD0wOyBjb2w8Y29sczsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkX2VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGdyaWRfZWxlbS5jbGFzc05hbWUgPSBgZ3JpZF9lbGVtIGdyaWRfZWxlbV8ke3BsYXllck5hbWV9YDtcbiAgICAgICAgICAgICAgICBncmlkX2VsZW0uaWQgPSBgcl8ke3Jvd31fY18ke2NvbH1gO1xuICAgICAgICAgICAgICAgIGdyaWRfZWxlbS50ZXh0Q29udGVudCA9IGJvYXJkW2NvbF1bcm93XTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZF9lbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgZXZlbnQgdG8gdGhlIGJvYXJkIGZvciB3aGVuIHRoZSBwbGF5ZXIgaXMgY2xpY2tpbmcgXG4gICAgICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICAgICAgICBjb250YWluZXIub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNvb3JkaW5hdGUgY2xpY2tlZCB3YXMgYWxyZWFkeSB1c2VkIGJlZm9yIGF0dGFja2luZyB0aGUgY29vcmRpbmF0ZVxuICAgICAgICAgICAgICAgIGxldCBbeUNvb3JkLCB4Q29vcmRdID0gZXZlbnQudGFyZ2V0LmlkLm1hdGNoKC9cXGQrL2cpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrTW92ZSA9IHBsYXllcnNbZ2V0Tm9uQWN0aXZlUGxheWVyKCldLmJvYXJkLnBvc3NpYmxlTW92ZS5tYXAoKGVsZW0pID0+IGVsZW0udG9TdHJpbmcoKSkuaW5kZXhPZihbeENvb3JkLCB5Q29vcmRdLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIC8vIE1vcmV2ZXIgd2UgYWxzbyBjaGVjayBpZiB0aGUgYm9hcmQgc2VsZWN0ZWQgaXMgdGhlIGFjdGl2ZSBvbmVcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpICYmIGNoZWNrTW92ZSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzQXR0YWNrID0gY29udHJvbGxlci5hdHRhY2tDKGV2ZW50LCBwbGF5ZXJzW2dldE5vbkFjdGl2ZVBsYXllcigpXSk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrUmVzQXR0YWNrKHJlc0F0dGFjayk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFN0YXJ0IHRoZSBHYW1lIGJ5IGJ1aWxkaW5nIHRoZSBib2FyZHMgYW5kIGlmIG5lY2Vzc2FyeSBleGVjdXRpbmcgdGhlIGZpcnN0IGF0dGFja1xuICAgIGNvbnN0IHJ1bkdhbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2hvd1BsYXllcigpXG4gICAgICAgIGdlbmVyYXRlQm9hcmQocGxheWVycy5wbGF5ZXIxLm5hbWUsIHBsYXllcnMucGxheWVyMS5ib2FyZC5ib2FyZEcsIFwicGxheWVyMS1ncmlkXCIpXG4gICAgICAgIGdlbmVyYXRlQm9hcmQocGxheWVycy5wbGF5ZXIyLm5hbWUsIHBsYXllcnMucGxheWVyMi5ib2FyZC5ib2FyZEcsIFwicGxheWVyMi1ncmlkXCIpXG4gICAgICAgIGNvbnN0IGJvYXJkUCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGdyaWRfJHtwbGF5ZXJzLnBsYXllcjIubmFtZX1gKVswXVxuICAgICAgICBib2FyZFAuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgaWYgKCFwbGF5ZXJzLnBsYXllcjEucmVhbFApe1xuICAgICAgICAgICAgYXR0YWNrKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBNYWluIGZ1bmN0aW9uIHNlbGVjdGluZyB0aGUgc2hpcCBmb3IgdGhlIGh1bWFuIHBsYXllcnNcbiAgICBjb25zdCBnZXRHYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHBsYXllcjFOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIxLWdhbWUtbmFtZVwiKTtcbiAgICAgICAgY29uc3QgcGxheWVyMk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjItZ2FtZS1uYW1lXCIpO1xuICAgICAgICBjaGVja1BsYXllcnNOYW1lKCk7XG4gICAgICAgIHBsYXllcjFOYW1lLnRleHRDb250ZW50ID0gYCR7cGxheWVycy5wbGF5ZXIxLm5hbWV9IC0gQm9hcmRgO1xuICAgICAgICBwbGF5ZXIyTmFtZS50ZXh0Q29udGVudCA9IGAke3BsYXllcnMucGxheWVyMi5uYW1lfSAtIEJvYXJkYDtcbiAgICAgICAgaWYgKHBsYXllcnMucGxheWVyMS5yZWFsUCAmJiBwbGF5ZXJzLnBsYXllcjIucmVhbFApIHtcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1AxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIxLXNoaXBcIik7XG4gICAgICAgICAgICBjb25zdCBidXR0b25SYW5kMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZC1zaGlwMVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblBsYXkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5MS1nYW1lXCIpO1xuICAgICAgICAgICAgcmFuZG9tU2hpcChwbGF5ZXJzLnBsYXllcjEpO1xuICAgICAgICAgICAgZ2VuZXJhdGVCb2FyZChwbGF5ZXJzLnBsYXllcjEubmFtZSwgcGxheWVycy5wbGF5ZXIxLmJvYXJkLmJvYXJkVCwgXCJib2FyZC1zaGlwMVwiLCBmYWxzZSlcbiAgICAgICAgICAgIGJ1dHRvblBsYXkxLnRleHRDb250ZW50ID0gYEdvIHRvICR7cGxheWVycy5wbGF5ZXIyLm5hbWV9IEJvYXJkYFxuICAgICAgICAgICAgZGlhbG9nUDEuc2hvd01vZGFsKCk7XG4gICAgICAgICAgICBkaWFsb2dQMS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgXG4gICAgICAgICAgICBidXR0b25SYW5kMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcmFuZG9tU2hpcChwbGF5ZXJzLnBsYXllcjEpO1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlQm9hcmQocGxheWVycy5wbGF5ZXIxLm5hbWUsIHBsYXllcnMucGxheWVyMS5ib2FyZC5ib2FyZFQsIFwiYm9hcmQtc2hpcDFcIiwgZmFsc2UpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBidXR0b25QbGF5MS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nUDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjItc2hpcFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b25SYW5kMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZC1zaGlwMlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b25QbGF5MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheTItZ2FtZVwiKTtcbiAgICAgICAgICAgICAgICBkaWFsb2dQMS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHJhbmRvbVNoaXAocGxheWVycy5wbGF5ZXIyKTtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUJvYXJkKHBsYXllcnMucGxheWVyMi5uYW1lLCBwbGF5ZXJzLnBsYXllcjIuYm9hcmQuYm9hcmRULCBcImJvYXJkLXNoaXAyXCIsIGZhbHNlKVxuICAgICAgICAgICAgICAgIGRpYWxvZ1AyLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgICAgIGRpYWxvZ1AyLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICBidXR0b25SYW5kMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbVNoaXAocGxheWVycy5wbGF5ZXIyKTtcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVCb2FyZChwbGF5ZXJzLnBsYXllcjIubmFtZSwgcGxheWVycy5wbGF5ZXIyLmJvYXJkLmJvYXJkVCwgXCJib2FyZC1zaGlwMlwiLCBmYWxzZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJ1dHRvblBsYXkyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nUDIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcnVuR2FtZSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBsYXllcnMucGxheWVyMS5yZWFsUCkge1xuICAgICAgICAgICAgY29uc3QgZGlhbG9nUDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjEtc2hpcFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblJhbmQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kLXNoaXAxXCIpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uUGxheTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXkxLWdhbWVcIik7XG4gICAgICAgICAgICByYW5kb21TaGlwKHBsYXllcnMucGxheWVyMik7XG4gICAgICAgICAgICBnZW5lcmF0ZUJvYXJkKHBsYXllcnMucGxheWVyMS5uYW1lLCBwbGF5ZXJzLnBsYXllcjEuYm9hcmQuYm9hcmRULCBcImJvYXJkLXNoaXAxXCIsIGZhbHNlKVxuICAgICAgICAgICAgYnV0dG9uUGxheTEudGV4dENvbnRlbnQgPSBgUGxheSBHYW1lYFxuICAgICAgICAgICAgZGlhbG9nUDEuc2hvd01vZGFsKCk7XG4gICAgICAgICAgICBkaWFsb2dQMS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgICAgICAgICBidXR0b25SYW5kMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcmFuZG9tU2hpcChwbGF5ZXJzLnBsYXllcjEpO1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlQm9hcmQocGxheWVycy5wbGF5ZXIxLm5hbWUsIHBsYXllcnMucGxheWVyMS5ib2FyZC5ib2FyZFQsIFwiYm9hcmQtc2hpcDFcIiwgZmFsc2UpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnV0dG9uUGxheTEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpYWxvZ1AxLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgcnVuR2FtZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwbGF5ZXJzLnBsYXllcjIucmVhbFApIHtcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1AyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIyLXNoaXBcIik7XG4gICAgICAgICAgICBjb25zdCBidXR0b25SYW5kMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZC1zaGlwMlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblBsYXkyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5Mi1nYW1lXCIpO1xuICAgICAgICAgICAgcmFuZG9tU2hpcChwbGF5ZXJzLnBsYXllcjEpO1xuICAgICAgICAgICAgZ2VuZXJhdGVCb2FyZChwbGF5ZXJzLnBsYXllcjIubmFtZSwgcGxheWVycy5wbGF5ZXIyLmJvYXJkLmJvYXJkVCwgXCJib2FyZC1zaGlwMlwiLCBmYWxzZSlcbiAgICAgICAgICAgIGRpYWxvZ1AyLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgZGlhbG9nUDIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgICAgICAgICAgYnV0dG9uUmFuZDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJhbmRvbVNoaXAocGxheWVycy5wbGF5ZXIyKTtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUJvYXJkKHBsYXllcnMucGxheWVyMi5uYW1lLCBwbGF5ZXJzLnBsYXllcjIuYm9hcmQuYm9hcmRULCBcImJvYXJkLXNoaXAyXCIsIGZhbHNlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJ1dHRvblBsYXkyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBkaWFsb2dQMi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHJ1bkdhbWUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByYW5kb21TaGlwKHBsYXllcnMucGxheWVyMSk7XG4gICAgICAgICAgICByYW5kb21TaGlwKHBsYXllcnMucGxheWVyMik7XG4gICAgICAgICAgICBydW5HYW1lKCk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgLy8gRnVuY3Rpb24gRW5kaW5nIHRoZSBnYW1lXG4gICAgY29uc3QgZW5kR2FtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJXaW4gPSBwbGF5ZXJzW2dldEFjdGl2ZVBsYXllcigpXTtcbiAgICAgICAgY29uc3QgcGxheWVyTG9zcyA9IHBsYXllcnNbZ2V0Tm9uQWN0aXZlUGxheWVyKCldO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgZ3JpZF8ke3BsYXllckxvc3MubmFtZX1gKVswXS5jbGFzc05hbWUgPSBcImdyaWRfTk9UXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGdyaWRfJHtwbGF5ZXJXaW4ubmFtZX1gKVswXS5jbGFzc05hbWUgPSBcImdyaWRfTk9UIHdpblwiO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mby1yXCIpLnRleHRDb250ZW50ID0gYCR7cGxheWVyV2luLm5hbWV9IHdpbiAhISFgXG4gICAgfTtcbiAgICBcblxuICAgIHJldHVybiB7IFxuICAgICAgICBnZXRHYW1lLFxuICAgICAgICBnZW5lcmF0ZUJvYXJkXG4gICAgfTtcbn07IiwiaW1wb3J0IHsgQ3JlYXRlR2FtZSB9IGZyb20gXCIuL0NyZWF0ZUdhbWVcIlxuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi4vaW50ZXJuYWwvR2FtZWJvYXJkXCI7XG5cblxuZXhwb3J0IGNvbnN0IFVJID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYnV0dG9uUnVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJydW4tZ2FtZVwiKTtcbiAgICBjb25zdCBzaXplWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29yZFgnKS52YWx1ZTtcbiAgICBjb25zdCBzaXplWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29yZFknKS52YWx1ZTtcbiAgICBjb25zdCBib2FyZEVtcHR5ID0gbmV3IEdhbWVib2FyZChzaXplWCwgc2l6ZVkpO1xuICAgIENyZWF0ZUdhbWUoKS5nZW5lcmF0ZUJvYXJkKFwiTk9UXCIsIGJvYXJkRW1wdHkuYm9hcmRHLCBcInBsYXllcjEtZ3JpZFwiLCBmYWxzZSk7XG4gICAgQ3JlYXRlR2FtZSgpLmdlbmVyYXRlQm9hcmQoXCJOT1RcIiwgYm9hcmRFbXB0eS5ib2FyZEcsIFwicGxheWVyMi1ncmlkXCIsIGZhbHNlKTtcblxuICAgIGJ1dHRvblJ1bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcInJlc3RhcnRcIikge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPSBcIlJFU0VUXCI7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NOYW1lID0gXCJyZXN0YXJ0XCI7XG4gICAgICAgICAgICBjb25zdCBnYW1lID0gQ3JlYXRlR2FtZSgpO1xuICAgICAgICAgICAgZ2FtZS5nZXRHYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgICBcbiAgICB9KVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==