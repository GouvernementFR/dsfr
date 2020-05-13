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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _packages_ie11_src_scripts_distGlobal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _packages_schemes_src_scripts_distGlobal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _packages_utilities_src_scripts_distGlobal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _packages_navigation_src_scripts_distGlobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _packages_breadcrumb_src_scripts_distGlobal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _packages_header_src_scripts_distGlobal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);







/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _object_fit_polyfill_object_fit_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* eslint-disable no-new */


if (window.MSInputMethodContext && document.documentMode) {
  var scripts = ['https://unpkg.com/css-vars-ponyfill@2/dist/css-vars-ponyfill.min.js', 'https://polyfill.io/v3/polyfill.min.js?features=Event', 'https://unpkg.com/focus-within-polyfill/dist/focus-within-polyfill.js'];

  for (var i = 0; i < scripts.length; i++) {
    document.write('<script src="' + scripts[i] + '"><\x2fscript>');
  }

  new _object_fit_polyfill_object_fit_polyfill__WEBPACK_IMPORTED_MODULE_0__["ObjectFitPolyfill"]('.rf-content-media__img img', '.rf-card__img img', 'rf-responsive-vid');
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectFitPolyfill", function() { return ObjectFitPolyfill; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Polyfill pour IE11 qui ne supporte pas object-fit. On met l'image en background sur l'élément img et un svg vide en source
 */
var ObjectFitPolyfill = function ObjectFitPolyfill($selectors) {
  _classCallCheck(this, ObjectFitPolyfill);

  for (var i = 0; i < $selectors.length; i++) {
    var images = document.querySelectorAll($selectors[i]);
    var img = void 0;

    for (var j = 0; j < images.length; j++) {
      img = images[i];
      (img.runtimeStyle || img.style).background = 'url("' + img.src + '") no-repeat 50%/cover';
      img.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + img.width + '\' height=\'' + img.height + '\' %3E%3C/svg%3E';
    }
  }
};



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frds_utilities_src_scripts_init_Initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* eslint-disable no-new */


new _frds_utilities_src_scripts_init_Initializer__WEBPACK_IMPORTED_MODULE_0__["Initializer"]('#rf-dark-mode-toggle-switch', [_index__WEBPACK_IMPORTED_MODULE_1__["DarkModeToggleSwitch"]]);

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dark_mode_toggle_switch_dark_mode_toggle_switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DarkModeToggleSwitch", function() { return _dark_mode_toggle_switch_dark_mode_toggle_switch__WEBPACK_IMPORTED_MODULE_0__["DarkModeToggleSwitch"]; });




/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkModeToggleSwitch", function() { return DarkModeToggleSwitch; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DM = 'rf-dark-mode';
var DTA = 'data-theme';

var DarkModeToggleSwitch = /*#__PURE__*/function () {
  function DarkModeToggleSwitch() {
    _classCallCheck(this, DarkModeToggleSwitch);

    this.init();
  }

  _createClass(DarkModeToggleSwitch, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.scheme = localStorage.getItem('scheme') ? localStorage.getItem('scheme') : null;

      if (this.scheme === null) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this.scheme = 'dark';
          localStorage.setItem('scheme', 'dark');
        } else this.scheme = 'light';
      }

      this.root = document.documentElement;

      if (this.scheme === 'dark') {
        if (!this.root.hasAttribute('data-transition')) this.root.setAttribute(DTA, 'dark');else {
          this.root.removeAttribute('data-transition');
          this.root.setAttribute(DTA, 'dark');
          setTimeout(function () {
            _this.root.setAttribute('data-transition', '');
          }, 300);
        }
      }

      this.checkbox = document.getElementById(DM + '-toggle-switch');
      if (this.scheme === 'dark') this.checkbox.checked = true;
      this.checkbox.addEventListener('change', this.change.bind(this));
    }
  }, {
    key: "change",
    value: function change() {
      if (this.checkbox.checked) {
        this.scheme = 'dark';
        localStorage.setItem('scheme', 'dark');
        this.root.setAttribute(DTA, 'dark');
      } else {
        this.scheme = 'light';
        localStorage.setItem('scheme', 'light');
        this.root.removeAttribute(DTA);
      }
    }
  }]);

  return DarkModeToggleSwitch;
}();



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frds_utilities_src_scripts_init_Initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* eslint-disable no-new */


new _frds_utilities_src_scripts_init_Initializer__WEBPACK_IMPORTED_MODULE_0__["Initializer"]('.rf-collapse', [_index__WEBPACK_IMPORTED_MODULE_1__["Collapse"]]);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_Initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Initializer", function() { return _init_Initializer__WEBPACK_IMPORTED_MODULE_0__["Initializer"]; });

/* harmony import */ var _collapse_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return _collapse_collapse__WEBPACK_IMPORTED_MODULE_1__["Collapse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseGroup", function() { return _collapse_collapse__WEBPACK_IMPORTED_MODULE_1__["CollapseGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseElement", function() { return _collapse_collapse__WEBPACK_IMPORTED_MODULE_1__["CollapseElement"]; });

/* harmony import */ var _manipulation_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _manipulation_classes__WEBPACK_IMPORTED_MODULE_2__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _manipulation_classes__WEBPACK_IMPORTED_MODULE_2__["removeClass"]; });








/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseElement", function() { return CollapseElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseGroup", function() { return CollapseGroup; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var COLLAPSE = '.rf-collapse';
var MODIFIER = COLLAPSE + '--expanded';
var TOGGLE = 'toggle_event';
var REDUCE = 'reduce_event';
var EXPAND = 'expand_event';

var Collapse = /*#__PURE__*/function () {
  function Collapse() {
    _classCallCheck(this, Collapse);

    this.elements = [];
    this.groups = {};
    this.init();
  }

  _createClass(Collapse, [{
    key: "init",
    value: function init() {
      var elements = document.querySelectorAll(COLLAPSE);
      var collapse, groupId, group;

      for (var i = 0; i < elements.length; i++) {
        collapse = new CollapseElement(elements[i], MODIFIER);
        this.elements.push(collapse);
        groupId = collapse.element.getAttribute('data-group');

        if (groupId !== null) {
          group = this.groups[groupId];

          if (group === undefined) {
            group = new CollapseGroup();
            this.groups[groupId] = group;
          }

          group.add(collapse);
        }
      }
    }
  }]);

  return Collapse;
}();

var CollapseElement = /*#__PURE__*/function () {
  function CollapseElement(element, modifier) {
    _classCallCheck(this, CollapseElement);

    this.element = element;
    this.modifier = modifier;
    this.id = element.id;
    var buttons = document.querySelectorAll('[aria-controls="' + this.id + '"]');

    if (buttons.length > 0) {
      this.buttons = [];

      for (var i = 0; i < buttons.length; i++) {
        this.buttons.push(new CollapseButton(buttons[i]));
      }

      this.init();
    }
  }

  _createClass(CollapseElement, [{
    key: "init",
    value: function init() {
      var _this = this;

      // this.element.addEventListener('transitionend', this.transitionEnd.bind(this));
      var toggles = this.buttons.filter(function (button) {
        return button.type === TOGGLE;
      });
      if (toggles.length > 0) this.expanded = toggles[0].expanded;
      this.buttons.forEach(function (button) {
        button.element.addEventListener(TOGGLE, _this.toggle.bind(_this));
        button.element.addEventListener(REDUCE, _this.reduce.bind(_this));
      });
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      this.expanded = !this.expanded;
    }
  }, {
    key: "reduce",
    value: function reduce(e) {
      this.expanded = false;

      for (var i = 0; i < this.buttons.length; i++) {
        if (this.buttons[i].type === TOGGLE) {
          this.buttons[i].focus();
          break;
        }
      }
    }
  }, {
    key: "transitionEnd",
    value: function transitionEnd() {// if (!this._expanded) this.element.setAttribute('hidden', '');
    }
  }, {
    key: "hasFocus",
    get: function get() {
      if (this.element === document.activeElement) return true;
      if (this.element.querySelectorAll(':focus').length > 0) return true;
      if (this.buttons.some(function (button) {
        return button.hasFocus;
      })) return true;
      return false;
    }
  }, {
    key: "expanded",
    get: function get() {
      return this._expanded === true;
    },
    set: function set(value) {
      var _this2 = this;

      var bool = value === true;
      if (this._expanded === bool) return;
      this._expanded = bool;
      this.buttons.forEach(function (button) {
        button.expanded = _this2._expanded;
      });

      if (this._expanded) {
        // this.element.removeAttribute('hidden');
        // requestAnimationFrame(() => addClass(this.element, EXPANDED));
        Object(___WEBPACK_IMPORTED_MODULE_0__["addClass"])(this.element, this.modifier);
        this.element.dispatchEvent(new Event(EXPAND));
      } else {
        Object(___WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.element, this.modifier);
        this.element.dispatchEvent(new Event(REDUCE));
      }
    }
  }]);

  return CollapseElement;
}();

var CollapseButton = /*#__PURE__*/function () {
  function CollapseButton(element) {
    _classCallCheck(this, CollapseButton);

    this.element = element;
    this.type = element.hasAttribute('aria-expanded') ? TOGGLE : REDUCE;
    this.element.addEventListener('click', this.click.bind(this));
  }

  _createClass(CollapseButton, [{
    key: "click",
    value: function click(e) {
      this.element.dispatchEvent(new Event(this.type));
    }
  }, {
    key: "focus",
    value: function focus() {
      this.element.focus();
    }
  }, {
    key: "expanded",
    set: function set(value) {
      if (this.type === TOGGLE) this.element.setAttribute('aria-expanded', value);
    },
    get: function get() {
      if (this.type === TOGGLE) return this.element.getAttribute('aria-expanded') === 'true';
      return null;
    }
  }, {
    key: "hasFocus",
    get: function get() {
      return this.element === document.activeElement;
    }
  }]);

  return CollapseButton;
}();

var CollapseGroup = /*#__PURE__*/function () {
  function CollapseGroup() {
    _classCallCheck(this, CollapseGroup);

    this.collapses = [];
  }

  _createClass(CollapseGroup, [{
    key: "add",
    value: function add(collapse) {
      this.collapses.push(collapse);
      collapse.element.addEventListener(EXPAND, this.onExpand.bind(this));
      collapse.element.addEventListener(REDUCE, this.onReduce.bind(this));
    }
  }, {
    key: "onExpand",
    value: function onExpand(e) {
      var _this3 = this;

      this.collapses.forEach(function (collapse) {
        if (collapse.element === e.target) _this3.current = collapse;else collapse.expanded = false;
      });
    }
  }, {
    key: "onReduce",
    value: function onReduce(e) {
      if (this.collapses.every(function (collapse) {
        return !collapse.expanded;
      })) this.current = undefined;
    }
  }, {
    key: "reduce",
    value: function reduce() {
      if (this.current !== undefined) this.current.expanded = false;
    }
  }, {
    key: "hasFocus",
    get: function get() {
      if (this.current === undefined) return null;
      return this.current.hasFocus;
    }
  }]);

  return CollapseGroup;
}();



/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frds_utilities_src_scripts_init_Initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* eslint-disable no-new */


new _frds_utilities_src_scripts_init_Initializer__WEBPACK_IMPORTED_MODULE_0__["Initializer"]('.rf-nav', [_index__WEBPACK_IMPORTED_MODULE_1__["Navigation"]]);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _navigation_navigation__WEBPACK_IMPORTED_MODULE_0__["Navigation"]; });




/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var _frds_utilities_src_scripts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _frds_utilities_src_scripts_manipulation_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var NAV_COLLAPSE = '.rf-nav .rf-menu, .rf-nav .rf-mega-menu';
var NAV_LIST = '.rf-nav > .rf-nav__list';
var MENU = 'rf-menu';
var MEGA = 'rf-mega-menu';
var EXPANDED = '--expanded';
var RIGHT = 'rf-nav__item--align-right';

var Navigation = /*#__PURE__*/function () {
  function Navigation() {
    _classCallCheck(this, Navigation);

    this.init();
  }

  _createClass(Navigation, [{
    key: "init",
    value: function init() {
      this.group = new _frds_utilities_src_scripts___WEBPACK_IMPORTED_MODULE_0__["CollapseGroup"]();
      this.menus = [];
      this.navList = document.querySelector(NAV_LIST);
      var elements = document.querySelectorAll(NAV_COLLAPSE);
      var element, collapseElement;

      for (var i = 0; i < elements.length; i++) {
        element = elements[i];

        switch (true) {
          case element.className.indexOf(MENU) > -1:
            collapseElement = new _frds_utilities_src_scripts___WEBPACK_IMPORTED_MODULE_0__["CollapseElement"](element, MENU + EXPANDED);
            this.menus.push(new NavMenu(collapseElement));
            break;

          case element.className.indexOf(MEGA) > -1:
            collapseElement = new _frds_utilities_src_scripts___WEBPACK_IMPORTED_MODULE_0__["CollapseElement"](element, MEGA + EXPANDED);
            break;

          default:
            continue;
        }

        this.group.add(collapseElement);
      }

      document.addEventListener('focusout', this.focusOut.bind(this));
      window.addEventListener('resize', this.resize.bind(this));
      window.addEventListener('orientationchange', this.resize.bind(this));
      this.resize();
    }
  }, {
    key: "focusOut",
    value: function focusOut(e) {
      var _this = this;

      requestAnimationFrame(function () {
        if (!_this.group.hasFocus) _this.group.reduce();
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      var right = this.navList.getBoundingClientRect().right;
      this.menus.forEach(function (menu) {
        menu.place(right);
      });
    }
  }]);

  return Navigation;
}();

var NavMenu = /*#__PURE__*/function () {
  function NavMenu(collapseElement) {
    _classCallCheck(this, NavMenu);

    this.element = collapseElement.element;
    this.btn = collapseElement.buttons[0].element;
  }

  _createClass(NavMenu, [{
    key: "place",
    value: function place(right) {
      var styles = getComputedStyle(this.element);
      var width = parseFloat(styles.width);
      var left = this.btn.getBoundingClientRect().left;
      if (left + width > right) Object(_frds_utilities_src_scripts_manipulation_classes__WEBPACK_IMPORTED_MODULE_1__["addClass"])(this.btn.parentElement, RIGHT);else Object(_frds_utilities_src_scripts_manipulation_classes__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(this.btn.parentElement, RIGHT);
    }
  }]);

  return NavMenu;
}();



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frds_utilities_src_scripts_init_Initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* eslint-disable no-new */


new _frds_utilities_src_scripts_init_Initializer__WEBPACK_IMPORTED_MODULE_0__["Initializer"]('.rf-breadcrumb__button', [_index__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbButton"]]);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breadcrumb_button_breadcrumb_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbButton", function() { return _breadcrumb_button_breadcrumb_button__WEBPACK_IMPORTED_MODULE_0__["BreadcrumbButton"]; });




/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbButton", function() { return BreadcrumbButton; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BreadcrumbButton = /*#__PURE__*/function () {
  function BreadcrumbButton() {
    _classCallCheck(this, BreadcrumbButton);

    this.init();
  }

  _createClass(BreadcrumbButton, [{
    key: "init",
    value: function init() {
      this.isShown = false;
      this.button = document.querySelector('.rf-breadcrumb__button');
      this.list = document.querySelector('.rf-breadcrumb__list');
      this.changing = this.change.bind(this);
      window.addEventListener('resize', this.changing);
      window.addEventListener('orientationchange', this.changing);
      this.change();
      this.clicking = this.click.bind(this);
      this.button.addEventListener('click', this.clicking);
    }
  }, {
    key: "change",
    value: function change() {
      this.isMedium = window.matchMedia('(min-width: 48em)').matches;

      if (this.isShown || this.isMedium) {
        this.button.setAttribute('hidden', '');
        this.list.removeAttribute('hidden');
      } else {
        this.button.removeAttribute('hidden');
        this.list.setAttribute('hidden', '');
      }
    }
  }, {
    key: "click",
    value: function click() {
      this.isShown = true;
      this.breadcrumb = document.querySelector('.rf-breadcrumb');
      var height = this.button.offsetHeight;
      this.breadcrumb.style.maxHeight = 'calc(' + height + 'px + 1rem)';
      this.breadcrumb.style.padding = '0';
      this.breadcrumb.style.border = '.5rem transparent solid';
      this.breadcrumb.style.transition = 'max-height 250ms ease-out';
      this.change();
      window.removeEventListener('resize', this.changing);
      window.removeEventListener('orientationchange', this.changing);
      this.breadcrumb.removeEventListener('click', this.clicking);
      this.transitionning = this.transitionend.bind(this);
      this.breadcrumb.addEventListener('transitionend', this.transitionning);
      height = this.list.offsetHeight;
      this.breadcrumb.style.maxHeight = 'calc(' + height + 'px + 1rem)';
    }
  }, {
    key: "transitionend",
    value: function transitionend() {
      this.breadcrumb.style.maxHeight = null;
      this.breadcrumb.style.transition = null;
      this.breadcrumb.style.padding = null;
      this.breadcrumb.style.border = null;
      this.breadcrumb.removeAttribute('style');
      this.breadcrumb.removeEventListener('transitionend', this.transitionning);
    }
  }]);

  return BreadcrumbButton;
}();



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frds_utilities_src_scripts_init_Initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* eslint-disable no-new */


new _frds_utilities_src_scripts_init_Initializer__WEBPACK_IMPORTED_MODULE_0__["Initializer"]('.rf-header', [_index__WEBPACK_IMPORTED_MODULE_1__["Header"]]);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header_header__WEBPACK_IMPORTED_MODULE_0__["Header"]; });




/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _frds_utilities_src_scripts_manipulation_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var count = 0;

var Header = /*#__PURE__*/function () {
  function Header(header) {
    _classCallCheck(this, Header);

    this.header = header || document.querySelector('.rf-header');
    this.numId = count;
    count++;
    this.init();
  }

  _createClass(Header, [{
    key: "init",
    value: function init() {
      this.popins = [];
      this.tools = this.header.querySelector('.rf-header__tools');
      this.searchBar = this.header.querySelector('.rf-header__tools .rf-search-bar');
      var navbar = this.header.querySelector('.rf-header__navbar');
      var append = this.numId === 0 ? '' : '-' + this.numId;

      if (this.searchBar) {
        this.popins.push(new HeaderPopin('header-tools-popin' + append, 'search-line', 'Rechercher', this.tools, navbar));
      }

      this.nav = this.header.querySelector('.rf-nav');
      this.popins.push(new HeaderPopin('header-nav-popin' + append, 'menu-fill', 'Ouvrir le menu', this.nav, navbar));
      this.shortcuts = this.header.querySelector('.rf-header__tools .rf-shortcuts');
      this.navList = this.header.querySelector('.rf-nav .rf-nav__list');
      this.changing = this.change.bind(this);
      window.addEventListener('resize', this.changing);
      window.addEventListener('orientationchange', this.changing);
      this.change();
    }
  }, {
    key: "change",
    value: function change() {
      this.isMedium = window.matchMedia('(min-width: 48em)').matches;

      for (var i = 0; i < this.popins.length; i++) {
        this.popins[i].change(this.isMedium);
      }

      if (this.shortcuts !== null) {
        if (this.isMedium) {
          if (this.searchBar !== null) this.tools.insertBefore(this.shortcuts, this.searchBar);else this.tools.appendChild(this.shortcuts);
        } else {
          this.nav.insertBefore(this.shortcuts, this.navList);
        }
      }
    }
  }]);

  return Header;
}();

var HeaderPopin = /*#__PURE__*/function () {
  function HeaderPopin(id, icon, title, popin, navbar) {
    _classCallCheck(this, HeaderPopin);

    this.id = id;
    this.button = this.create(icon, title);
    this.popin = popin;
    this.navbar = navbar;
    this.button.addEventListener('click', this.toggle.bind(this));
    this.close = this.create('close-line', 'Fermer', true, 'sm');
    this.close.addEventListener('click', this.exit.bind(this));
    this.isExpanded = false;
  }

  _createClass(HeaderPopin, [{
    key: "create",
    value: function create(icon, title, hasLabel, size) {
      var button = document.createElement('button');
      button.setAttribute('class', 'rf-btn rf-fi-' + icon + ' rf-btn--icon' + (hasLabel ? '-right' : '') + ' ' + (size !== undefined ? 'rf-btn--' + size : ''));
      button.setAttribute('title', title);
      button.setAttribute('aria-controls', this.id);
      var span = document.createElement('span');
      if (!hasLabel) span.setAttribute('class', 'sr-only');
      span.innerHTML = title;
      button.append(span);
      return button;
    }
  }, {
    key: "change",
    value: function change(isMedium) {
      if (isMedium) {
        if (this.navbar.contains(this.button)) this.navbar.removeChild(this.button);
        if (this.popin.contains(this.close)) this.popin.removeChild(this.close);
        this.popin.removeAttribute('id');
        Object(_frds_utilities_src_scripts_manipulation_classes__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.popin, 'rf-header__popin');
        Object(_frds_utilities_src_scripts_manipulation_classes__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.popin, 'rf-header__popin--expanded');
      } else {
        if (!this.navbar.contains(this.button)) this.navbar.appendChild(this.button);
        if (!this.popin.contains(this.close)) this.popin.appendChild(this.close);
        this.popin.setAttribute('id', this.id);
        Object(_frds_utilities_src_scripts_manipulation_classes__WEBPACK_IMPORTED_MODULE_0__["addClass"])(this.popin, 'rf-header__popin');
        this.handle();
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.isExpanded = !this.isExpanded;
      this.handle();
    }
  }, {
    key: "exit",
    value: function exit() {
      this.isExpanded = false;
      this.handle();
    }
  }, {
    key: "handle",
    value: function handle() {
      if (this.isExpanded) {
        Object(_frds_utilities_src_scripts_manipulation_classes__WEBPACK_IMPORTED_MODULE_0__["addClass"])(this.popin, 'rf-header__popin--expanded');
      } else {
        Object(_frds_utilities_src_scripts_manipulation_classes__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.popin, 'rf-header__popin--expanded');
      }
    }
  }]);

  return HeaderPopin;
}();



/***/ })
/******/ ]);
//# sourceMappingURL=dsfr.js.map