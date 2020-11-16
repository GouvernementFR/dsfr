/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Initializer", function() { return Initializer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Initializer = /*#__PURE__*/function () {
  function Initializer(selector, classes) {
    _classCallCheck(this, Initializer);

    this.selector = selector;
    this.classes = classes;
    this.instances = [];
    if (document.readyState !== 'loading') this.start();else document.addEventListener('DOMContentLoaded', this.start.bind(this));
  }

  _createClass(Initializer, [{
    key: "start",
    value: function start() {
      if (this.instances.length > 0) return;

      if (document.querySelectorAll(this.selector).length > 0) {
        for (var i = 0; i < this.classes.length; i++) {
          this.instances.push(new this.classes[i]());
        }
      }
    }
  }]);

  return Initializer;
}();



/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
var modifiyClass = function modifiyClass(element, className, remove) {
  if (className.charAt(0) === '.') className = className.substr(1);
  var classNames = element.className.split(' ');
  var index = classNames.indexOf(className);

  if (remove === true) {
    if (index > -1) classNames.splice(index, 1);
  } else if (index === -1) classNames.push(className);

  element.className = classNames.join(' ');
};

var addClass = function addClass(element, className) {
  return modifiyClass(element, className);
};



var removeClass = function removeClass(element, className) {
  return modifiyClass(element, className, true);
};



/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./packages/table/_dist.scss
var _dist = __webpack_require__(9);

// EXTERNAL MODULE: ./packages/utilities/src/scripts/init/Initializer.js
var Initializer = __webpack_require__(1);

// EXTERNAL MODULE: ./packages/utilities/src/scripts/manipulation/classes.js
var classes = __webpack_require__(2);

// CONCATENATED MODULE: ./packages/table/src/scripts/shadow-on-scroll/shadow-on-scroll.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var TABLE = '.rf-table:not(.rf-table--no-scroll)';
var LEFT = 'left';
var RIGHT = 'right';
var SHADOW_CLASS = 'rf-table--shadow';
var SHADOW_RIGHT_CLASS = 'rf-table--shadow-right';
var SHADOW_LEFT_CLASS = 'rf-table--shadow-left';
var WRAPPER_NAME = 'rf-table__wrapper';
var TABLE_CAPTION_BOTTOM = 'rf-table--caption-bottom';
var SCROLL_OFFSET = 1; // valeur en px du scroll avant laquelle le shadow s'active ou se desactive

var ShadowOnScroll = /*#__PURE__*/function () {
  function ShadowOnScroll() {
    _classCallCheck(this, ShadowOnScroll);

    this.init();
  }

  _createClass(ShadowOnScroll, [{
    key: "init",
    value: function init() {
      var tableNodes = document.querySelectorAll(TABLE);
      this.tables = [];

      for (var i = 0; i < tableNodes.length; i++) {
        this.tables.push(new shadow_on_scroll_Table(tableNodes[i]));
      }

      this.changing = this.change.bind(this);
      window.addEventListener('resize', this.changing);
      window.addEventListener('orientationchange', this.changing);
      this.change();
    }
  }, {
    key: "change",
    value: function change() {
      for (var i = 0; i < this.tables.length; i++) {
        this.tables[i].change();
      }
    }
  }]);

  return ShadowOnScroll;
}();

var shadow_on_scroll_Table = /*#__PURE__*/function () {
  function Table(table) {
    _classCallCheck(this, Table);

    this.init(table);
  }

  _createClass(Table, [{
    key: "init",
    value: function init(table) {
      this.table = table;
      this.tableElem = this.table.querySelector('table');
      this.tableContent = this.tableElem.querySelector('tbody');
      this.isScrollable = this.tableContent.offsetWidth > this.tableElem.offsetWidth;
      this.caption = this.tableElem.querySelector('caption');
      this.captionHeight = 0;
      this.wrap();
      var scrolling = this.change.bind(this);
      this.tableElem.addEventListener('scroll', scrolling);
      this.change();
    }
  }, {
    key: "change",
    value: function change() {
      var newScroll = this.tableContent.offsetWidth > this.tableElem.offsetWidth;
      var firstTimeScrollable = this.tableElem.offsetWidth > this.table.offsetWidth;

      if (newScroll || firstTimeScrollable) {
        this.scroll();
        this.handleCaption();
      } else {
        if (newScroll !== this.isScrollable) this.delete();
      }

      this.isScrollable = newScroll;
      firstTimeScrollable = false;
    }
  }, {
    key: "delete",
    value: function _delete() {
      Object(classes["removeClass"])(this.table, SHADOW_RIGHT_CLASS);
      Object(classes["removeClass"])(this.table, SHADOW_LEFT_CLASS);
      Object(classes["removeClass"])(this.table, SHADOW_CLASS);

      if (this.caption) {
        this.tableElem.style.marginTop = '';
        this.caption.style.top = '';
        this.tableElem.style.marginBottom = '';
        this.caption.style.bottom = '';
      }
    }
  }, {
    key: "scroll",
    value: function scroll() {
      Object(classes["addClass"])(this.table, SHADOW_CLASS);
      this.setShadowPosition();
    }
    /* ajoute un wrapper autour du tableau */

  }, {
    key: "wrap",
    value: function wrap() {
      var wrapperHtml = document.createElement('div');
      wrapperHtml.className = WRAPPER_NAME;
      this.table.insertBefore(wrapperHtml, this.tableElem);
      wrapperHtml.appendChild(this.tableElem);
      this.tableInnerWrapper = wrapperHtml;
    }
    /* affiche les blocs shadow en fonction de la position du scroll, en ajoutant la classe visible */

  }, {
    key: "setShadowPosition",
    value: function setShadowPosition() {
      var tableScrollLeft = this.getScrollPosition(LEFT);
      var tableScrollRight = this.getScrollPosition(RIGHT); // on inverse en cas de lecture droite - gauche

      if (document.documentElement.getAttribute('dir') === 'rtl') {
        this.setShadowVisibility(RIGHT, tableScrollLeft);
        this.setShadowVisibility(LEFT, tableScrollRight);
      } else {
        this.setShadowVisibility(LEFT, tableScrollLeft);
        this.setShadowVisibility(RIGHT, tableScrollRight);
      }
    }
    /* Donne le nombre de pixels scrollés honrizontalement dans un element scrollable */

  }, {
    key: "getScrollPosition",
    value: function getScrollPosition(side) {
      var inverter = 1; // on inverse en cas de lecture droite - gauche pour que la valeur de scroll soit toujours positive

      if (document.documentElement.getAttribute('dir') === 'rtl') {
        inverter = -1;
      }

      switch (side) {
        case LEFT:
          return this.tableElem.scrollLeft * inverter;

        case RIGHT:
          return this.tableContent.offsetWidth - this.tableElem.offsetWidth - this.tableElem.scrollLeft * inverter;

        default:
          return false;
      }
    }
    /* positionne la caption en top négatif et ajoute un margin-top au wrapper */

  }, {
    key: "handleCaption",
    value: function handleCaption() {
      if (this.caption) {
        var style = getComputedStyle(this.caption);
        var newHeight = this.caption.offsetHeight + parseInt(style.marginTop) + parseInt(style.marginBottom);
        this.captionHeight = newHeight;

        if (this.table.classList.contains(TABLE_CAPTION_BOTTOM)) {
          this.tableElem.style.marginBottom = this.captionHeight + 'px';
          this.caption.style.bottom = -this.captionHeight + 'px';
        } else {
          this.tableElem.style.marginTop = this.captionHeight + 'px';
          this.caption.style.top = -this.captionHeight + 'px';
        }
      }
    }
    /* ajoute la classe rf-table--shadow-right ou rf-table--shadow-right sur rf-table
      en fonction d'une valeur de scroll et du sens (right, left) */

  }, {
    key: "setShadowVisibility",
    value: function setShadowVisibility(side, scrollPosition) {
      // si on a pas scroll, ou qu'on scroll jusqu'au bout
      if (scrollPosition <= SCROLL_OFFSET) {
        if (side === LEFT) Object(classes["removeClass"])(this.table, SHADOW_LEFT_CLASS);else if (side === RIGHT) Object(classes["removeClass"])(this.table, SHADOW_RIGHT_CLASS);
      } else {
        if (side === LEFT) Object(classes["addClass"])(this.table, SHADOW_LEFT_CLASS);else if (side === RIGHT) Object(classes["addClass"])(this.table, SHADOW_RIGHT_CLASS);
      }
    }
  }]);

  return Table;
}();


// CONCATENATED MODULE: ./packages/table/src/scripts/index.js


// CONCATENATED MODULE: ./packages/table/src/scripts/dist.js
/* eslint-disable no-new */



new Initializer["Initializer"]('.rf-table', [ShadowOnScroll]);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });