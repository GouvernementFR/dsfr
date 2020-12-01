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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
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
    var images = []; // document.querySelectorAll($selectors[i]); TODO: erreur sur IE11

    var img = void 0;

    for (var j = 0; j < images.length; j++) {
      img = images[i];
      (img.runtimeStyle || img.style).background = 'url("' + img.src + '") no-repeat 50%/cover';
      img.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + img.width + '\' height=\'' + img.height + '\' %3E%3C/svg%3E';
    }
  }
};



/***/ }),

/***/ 2:
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

/***/ 3:
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

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./packages/utilities/src/scripts/init/Initializer.js
var Initializer = __webpack_require__(2);

// EXTERNAL MODULE: ./packages/schemes/src/scripts/index.js + 1 modules
var scripts = __webpack_require__(52);

// CONCATENATED MODULE: ./packages/schemes/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer["Initializer"]('#rf-dark-mode-toggle-switch', [scripts["DarkModeToggleSwitch"]]);
// EXTERNAL MODULE: ./packages/utilities/src/scripts/index.js + 5 modules
var src_scripts = __webpack_require__(47);

// CONCATENATED MODULE: ./packages/utilities/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer["Initializer"]('.rf-collapse', [src_scripts["Collapse"]]);
// EXTERNAL MODULE: ./packages/accordion/src/scripts/index.js + 1 modules
var accordion_src_scripts = __webpack_require__(48);

// CONCATENATED MODULE: ./packages/accordion/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer["Initializer"]('.rf-accordion', [accordion_src_scripts["Accordion"]]);
// EXTERNAL MODULE: ./packages/breadcrumb/src/scripts/index.js + 1 modules
var breadcrumb_src_scripts = __webpack_require__(49);

// CONCATENATED MODULE: ./packages/breadcrumb/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer["Initializer"]('.rf-breadcrumb__button', [breadcrumb_src_scripts["BreadcrumbButton"]]);
// EXTERNAL MODULE: ./packages/table/src/scripts/index.js + 1 modules
var table_src_scripts = __webpack_require__(53);

// CONCATENATED MODULE: ./packages/table/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer["Initializer"]('.rf-table--responsive', [table_src_scripts["ShadowOnScroll"]]);
// EXTERNAL MODULE: ./packages/navigation/src/scripts/index.js + 1 modules
var navigation_src_scripts = __webpack_require__(51);

// CONCATENATED MODULE: ./packages/navigation/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer["Initializer"]('.rf-nav', [navigation_src_scripts["Navigation"]]);
// EXTERNAL MODULE: ./packages/sidemenu/src/scripts/index.js + 1 modules
var sidemenu_src_scripts = __webpack_require__(54);

// CONCATENATED MODULE: ./packages/sidemenu/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer["Initializer"]('.rf-sidemenu', [sidemenu_src_scripts["SideMenu"]]);
// EXTERNAL MODULE: ./packages/header/src/scripts/index.js + 1 modules
var header_src_scripts = __webpack_require__(50);

// CONCATENATED MODULE: ./packages/header/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer["Initializer"]('.rf-header', [header_src_scripts["Header"]]);
// EXTERNAL MODULE: ./packages/ie11/src/scripts/object-fit-polyfill/object-fit-polyfill.js
var object_fit_polyfill = __webpack_require__(10);

// CONCATENATED MODULE: ./packages/ie11/src/scripts/distGlobal.js
/* eslint-disable no-new */


if (window.MSInputMethodContext && document.documentMode) {
  var distGlobal_scripts = ['https://unpkg.com/css-vars-ponyfill@2/dist/css-vars-ponyfill.min.js', 'https://polyfill.io/v3/polyfill.min.js?features=Event', 'https://unpkg.com/focus-within-polyfill/dist/focus-within-polyfill.js'];

  for (var i = 0; i < distGlobal_scripts.length; i++) {
    document.write('<script src="' + distGlobal_scripts[i] + '"><\x2fscript>');
  }

  new object_fit_polyfill["ObjectFitPolyfill"]('.rf-content-media__img img', '.rf-card__img img', 'rf-responsive-vid');
}
// CONCATENATED MODULE: ./packages/newall/src/scripts/dist.js










/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Initializer", function() { return /* reexport */ Initializer["Initializer"]; });
__webpack_require__.d(__webpack_exports__, "Collapse", function() { return /* reexport */ Collapse; });
__webpack_require__.d(__webpack_exports__, "CollapseGroup", function() { return /* reexport */ CollapseGroup; });
__webpack_require__.d(__webpack_exports__, "CollapseElement", function() { return /* reexport */ collapse_CollapseElement; });
__webpack_require__.d(__webpack_exports__, "Disclosure", function() { return /* reexport */ disclosure_Disclosure; });
__webpack_require__.d(__webpack_exports__, "DisclosureButton", function() { return /* reexport */ disclosure_button_DisclosureButton; });
__webpack_require__.d(__webpack_exports__, "DisclosuresGroup", function() { return /* reexport */ disclosures_group_DisclosuresGroup; });
__webpack_require__.d(__webpack_exports__, "KeyListener", function() { return /* reexport */ KeyListener; });
__webpack_require__.d(__webpack_exports__, "addClass", function() { return /* reexport */ classes["addClass"]; });
__webpack_require__.d(__webpack_exports__, "removeClass", function() { return /* reexport */ classes["removeClass"]; });

// EXTERNAL MODULE: ./packages/utilities/src/scripts/init/Initializer.js
var Initializer = __webpack_require__(2);

// CONCATENATED MODULE: ./packages/utilities/src/scripts/collapse/collapse.js
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
        collapse = new collapse_CollapseElement(elements[i], MODIFIER);
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

var collapse_CollapseElement = /*#__PURE__*/function () {
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
        Object(classes["addClass"])(this.element, this.modifier);
        this.element.dispatchEvent(new Event(EXPAND));
      } else {
        Object(classes["removeClass"])(this.element, this.modifier);
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


// EXTERNAL MODULE: ./packages/utilities/src/scripts/manipulation/classes.js
var classes = __webpack_require__(3);

// CONCATENATED MODULE: ./packages/utilities/src/scripts/disclosure/disclosures-group.js
function disclosures_group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function disclosures_group_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function disclosures_group_createClass(Constructor, protoProps, staticProps) { if (protoProps) disclosures_group_defineProperties(Constructor.prototype, protoProps); if (staticProps) disclosures_group_defineProperties(Constructor, staticProps); return Constructor; }


var groups = {};

var disclosures_group_DisclosuresGroup = /*#__PURE__*/function () {
  function DisclosuresGroup() {
    disclosures_group_classCallCheck(this, DisclosuresGroup);

    this.disclosures = [];
    this._current = null;
  }

  disclosures_group_createClass(DisclosuresGroup, [{
    key: "build",
    value: function build(wrapper, selector, type) {
      this.wrapper = wrapper;
      var elements = wrapper.querySelectorAll(selector);
      var disclosure;

      for (var i = 0; i < elements.length; i++) {
        // vérifier qu'il n'y a pas 2 fois le selecteur entre le wrapper et l'élément.
        disclosure = this.disclosureFactory(elements[i], type, selector);
        this.add(disclosure);
      }
    }
  }, {
    key: "disclosureFactory",
    value: function disclosureFactory(element, type, selector) {
      return new disclosure_Disclosure(element, type, selector);
    }
  }, {
    key: "add",
    value: function add(disclosure) {
      this.disclosures.push(disclosure);
      disclosure.setGroup(this);
      console.log('group add', this.current, disclosure.disclosed, !disclosure.disclosed);
      if (this.type === undefined) this.type = disclosure.type;else if (this.type !== disclosure.type) throw Error('A DisclosureGroup cannot contain 2 different Disclosure types');

      switch (true) {
        case this.current !== null:
        case !disclosure.disclosed:
          console.log('not current');
          disclosure.apply(false);
          break;

        default:
          this.current = disclosure;
          console.log('current');
          disclosure.apply(true);
      }
    }
  }, {
    key: "conceal",
    value: function conceal() {// close children
    }
  }, {
    key: "current",
    get: function get() {
      return this._current;
    },
    set: function set(disclosure) {
      if (this._current !== null && this._current !== disclosure) this._current.apply(false);
      this._current = disclosure;
      if (this._current !== null) this._current.apply(true);
    }
  }], [{
    key: "group",
    value: function group(disclosure, factory) {
      var id = disclosure.element.getAttribute('data-group');
      if (factory === undefined) factory = function factory() {
        return new DisclosuresGroup();
      };
      if (groups[id] === undefined) groups[id] = factory();
      groups[id].add(disclosure);
    }
  }]);

  return DisclosuresGroup;
}();


// CONCATENATED MODULE: ./packages/utilities/src/scripts/disclosure/disclosure-button.js
function disclosure_button_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function disclosure_button_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function disclosure_button_createClass(Constructor, protoProps, staticProps) { if (protoProps) disclosure_button_defineProperties(Constructor.prototype, protoProps); if (staticProps) disclosure_button_defineProperties(Constructor, staticProps); return Constructor; }



var disclosure_button_DisclosureButton = /*#__PURE__*/function () {
  function DisclosureButton(element, disclosure) {
    disclosure_button_classCallCheck(this, DisclosureButton);

    this.element = element;
    this.disclosure = disclosure;
    this.hasAttribute = this.element.hasAttribute(this.disclosure.attributeName);
    this.element.addEventListener('click', this.click.bind(this));

    switch (this.disclosure.type) {
      case disclosure_Disclosure.EXPAND:
        this.observer = new MutationObserver(this.mutate.bind(this));
        this.observe();
        break;
    }
  }

  disclosure_button_createClass(DisclosureButton, [{
    key: "observe",
    value: function observe() {
      this.observer.observe(this.element, {
        attributes: true
      });
    }
  }, {
    key: "click",
    value: function click(e) {
      console.log('click');
      this.disclosure.change(this.hasAttribute);
    }
  }, {
    key: "mutate",
    value: function mutate(mutations) {
      var _this = this;

      mutations.forEach(function (mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === _this.disclosure.attributeName) _this.disclosure.change(_this.disclosed); // TODO
      });
    }
  }, {
    key: "apply",
    value: function apply(value) {
      if (!this.hasAttribute) return;
      if (this.observer) this.observer.disconnect();
      this.element.setAttribute(this.disclosure.attributeName, value);
      if (this.observer) this.observe();
    }
  }, {
    key: "disclosed",
    get: function get() {
      return this.element.getAttribute(this.disclosure.attributeName) === 'true';
    }
  }]);

  return DisclosureButton;
}();


// CONCATENATED MODULE: ./packages/utilities/src/scripts/disclosure/disclosure.js
function disclosure_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function disclosure_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function disclosure_createClass(Constructor, protoProps, staticProps) { if (protoProps) disclosure_defineProperties(Constructor.prototype, protoProps); if (staticProps) disclosure_defineProperties(Constructor, staticProps); return Constructor; }





var disclosure_Disclosure = /*#__PURE__*/function () {
  function Disclosure(element, type, selector) {
    disclosure_classCallCheck(this, Disclosure);

    this.element = element;
    this.type = type;
    this.modifier = selector + '--' + type;
    this.id = element.id;
    this.attributeName = 'aria-' + this.type;
    this.buttons = [];
    this.disclosed = null;
    if (this.element.hasAttribute('data-group')) disclosures_group_DisclosuresGroup.group(this, this.groupFactory);
    var buttons = document.querySelectorAll('[aria-controls="' + this.id + '"]');

    if (buttons.length > 0) {
      var button;

      for (var i = 0; i < buttons.length; i++) {
        button = this.buttonFactory(buttons[i]);

        if (button.hasAttribute) {
          if (this.disclosed === null) {
            this.disclosed = button.disclosed;
            this.primary = button;
          } else button.apply(this.disclosed);
        }

        this.buttons.push(button);
      }
    }

    this.disclosed = this.disclosed === true;
    this.apply(this.disclosed);
  }

  disclosure_createClass(Disclosure, [{
    key: "groupFactory",
    value: function groupFactory() {
      return new disclosures_group_DisclosuresGroup();
    }
  }, {
    key: "buttonFactory",
    value: function buttonFactory(button) {
      return disclosure_button_DisclosureButton(button, this);
    }
  }, {
    key: "disclose",
    value: function disclose() {
      console.log('disclose', this.disclosed);
      if (this.disclosed) return;
      if (this.group !== null) this.group.current = this;
      this.apply(true);
    }
  }, {
    key: "conceal",
    value: function conceal() {
      console.log('conceal', this.disclosed);
      if (!this.disclosed) return;
      if (this.group != null) this.group.current = null;
      this.apply(false);
    }
  }, {
    key: "apply",
    value: function apply(value) {
      this.disclosed = value;
      if (value) Object(classes["addClass"])(this.element, this.modifier);else Object(classes["removeClass"])(this.element, this.modifier);

      for (var i = 0; i < this.buttons.length; i++) {
        this.buttons[i].apply(value);
      }
    }
  }, {
    key: "change",
    value: function change(hasAttribute) {
      console.log('change', hasAttribute, this.type);

      switch (this.type) {
        case Disclosure.EXPAND:
          switch (true) {
            case !hasAttribute:
            case this.disclosed:
              this.conceal();
              break;

            default:
              this.disclose();
          }

          break;

        case Disclosure.SELECT:
          this.disclose();
          break;
      }
    }
  }, {
    key: "setGroup",
    value: function setGroup(group) {
      this.group = group;
    }
  }]);

  return Disclosure;
}();

disclosure_Disclosure.EXPAND = 'expanded';
disclosure_Disclosure.SELECT = 'selected';

// CONCATENATED MODULE: ./packages/utilities/src/scripts/key-listener/key-listener.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function key_listener_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function key_listener_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function key_listener_createClass(Constructor, protoProps, staticProps) { if (protoProps) key_listener_defineProperties(Constructor.prototype, protoProps); if (staticProps) key_listener_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Utilitaire de gestion des évenements clavier
 * Utiliser KeyListener.add() pour ajouter un event listener
 */
var KeyListener = /*#__PURE__*/function () {
  function KeyListener(element) {
    key_listener_classCallCheck(this, KeyListener);

    this.element = element;
    this.collections = {};
  }
  /**
   * key: la touche de clavier
   * closure: la function à appliquer
   * type: event type, optionnel, si c'est en down, up ou press
   * stopPropagation: Boolean, permet d'empêcher le comportement par default de l'evenement
   */


  key_listener_createClass(KeyListener, [{
    key: "_add",
    value: function _add(type, action) {
      if (this.collections[type] === undefined) this.collections[type] = new KeyActionCollection(type, this.element);
      this.collections[type].add(action);
    }
  }, {
    key: "down",
    value: function down(key, closure, preventDefault, stopPropagation) {
      this._add('down', new KeyAction(key, closure, preventDefault, stopPropagation));
    }
  }, {
    key: "up",
    value: function up(key, closure, preventDefault, stopPropagation) {
      this._add('up', new KeyAction(key, closure, preventDefault, stopPropagation));
    }
  }, {
    key: "press",
    value: function press(key, closure, preventDefault, stopPropagation) {
      this._add('press', new KeyAction(key, closure, preventDefault, stopPropagation));
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _iterator = _createForOfIteratorHelper(this.collections),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var collection = _step.value;
          collection.dispose();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.types = null;
    }
  }]);

  return KeyListener;
}();

var KeyActionCollection = /*#__PURE__*/function () {
  function KeyActionCollection(type, element) {
    key_listener_classCallCheck(this, KeyActionCollection);

    this.type = type;
    this.element = element;
    this.actions = [];
    this.binding = this.handle.bind(this);
    this.element.addEventListener('key' + type, this.binding);
  }

  key_listener_createClass(KeyActionCollection, [{
    key: "add",
    value: function add(action) {
      this.actions.push(action);
    }
  }, {
    key: "handle",
    value: function handle(e) {
      var _iterator2 = _createForOfIteratorHelper(this.actions),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var action = _step2.value;
          action.handle(e);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.element.removeEventListener('key' + this.type, this.binding);
      this.actions = null;
    }
  }]);

  return KeyActionCollection;
}();

var KeyAction = /*#__PURE__*/function () {
  function KeyAction(key, closure, preventDefault, stopPropagation) {
    key_listener_classCallCheck(this, KeyAction);

    this.key = key;
    this.closure = closure;
    this.preventDefault = preventDefault === true;
    this.stopPropagation = stopPropagation === true;
  }

  key_listener_createClass(KeyAction, [{
    key: "handle",
    value: function handle(e) {
      if (e.keyCode === this.key) {
        this.closure();

        if (this.preventDefault) {
          e.preventDefault();
        }

        if (this.stopPropagation) {
          e.stopPropagation();
        }
      }
    }
  }]);

  return KeyAction;
}();

KeyListener.ESCAPE = 27;
KeyListener.END = 35;
KeyListener.HOME = 36;
KeyListener.LEFT = 37;
KeyListener.UP = 38;
KeyListener.RIGHT = 39;
KeyListener.DOWN = 40;

// CONCATENATED MODULE: ./packages/utilities/src/scripts/index.js













/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Accordion", function() { return /* reexport */ accordion_Accordion; });

// EXTERNAL MODULE: ./packages/utilities/src/scripts/index.js + 5 modules
var scripts = __webpack_require__(47);

// CONCATENATED MODULE: ./packages/accordion/src/scripts/accordion/accordion.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var ACCORDION_GROUP = '.rf-accordion-group';
var ACCORDION_COLLAPSE = '.rf-accordion__body';
var ACCORDION_BODY = 'rf-accordion__body';
var EXPANDED = '--expanded';

var accordion_Accordion = /*#__PURE__*/function () {
  function Accordion() {
    _classCallCheck(this, Accordion);

    this.init();
  }

  _createClass(Accordion, [{
    key: "init",
    value: function init() {
      var accordionGroups = document.querySelectorAll(ACCORDION_GROUP);
      var elements = document.querySelectorAll(ACCORDION_COLLAPSE);
      var element, collapseElement, collapseGroup;
      this.collapseGroupsElements = [];
      this.collapseGroupElements = [];
      this.collapseGroupsArray = []; // Get accordions groups, set data attribute and create collapse group to each

      for (var i = 0; i < accordionGroups.length; i++) {
        accordionGroups[i].setAttribute('data-rf-ac', 'rf-ac-group-' + i);
        this.collapseGroupsElements.push(accordionGroups[i]);
        collapseGroup = new scripts["CollapseGroup"]();
        this.collapseGroupsArray.push(collapseGroup);
      } // Get collapsible elements in groups


      for (var _i = 0; _i < this.collapseGroupsElements.length; _i++) {
        var _iterator = _createForOfIteratorHelper(this.collapseGroupsElements[_i].querySelectorAll(ACCORDION_COLLAPSE)),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _element = _step.value;
            this.collapseGroupElements.push(_element);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } // Get accordion elements in groups only and create new set


      var elementsGroupOnly = new Set(this.collapseGroupElements); // Get accordion elements and create new array with accordion elements that are not in groups

      var elementsSingleOnly = _toConsumableArray(new Set(_toConsumableArray(elements).filter(function (x) {
        return !elementsGroupOnly.has(x);
      }))); // Single accordion element(s) collapse individually


      for (var _i2 = 0; _i2 < elementsSingleOnly.length; _i2++) {
        element = elementsSingleOnly[_i2];
        collapseElement = new scripts["CollapseElement"](element, ACCORDION_BODY + EXPANDED);
      } // Grouped accordion elements collapse


      for (var _i3 = 0; _i3 < this.collapseGroupElements.length; _i3++) {
        element = this.collapseGroupElements[_i3];
        var groupAttr = element.closest('.rf-accordion-group').dataset.rfAc;
        element.setAttribute('data-rf-ac', groupAttr);
        collapseElement = new scripts["CollapseElement"](element, ACCORDION_BODY + EXPANDED);
        this.collapseGroupsArray[element.dataset.rfAc.slice(-1)].add(collapseElement);
      }
    }
  }]);

  return Accordion;
}();


// CONCATENATED MODULE: ./packages/accordion/src/scripts/index.js



/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "BreadcrumbButton", function() { return /* reexport */ BreadcrumbButton; });

// CONCATENATED MODULE: ./packages/breadcrumb/src/scripts/breadcrumb-button/breadcrumb-button.js
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


// CONCATENATED MODULE: ./packages/breadcrumb/src/scripts/index.js



/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Header", function() { return /* reexport */ Header; });

// EXTERNAL MODULE: ./packages/utilities/src/scripts/manipulation/classes.js
var classes = __webpack_require__(3);

// CONCATENATED MODULE: ./packages/header/src/scripts/header/header.js
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
      this.nav = this.header.querySelector('.rf-nav');
      this.navItems = this.header.querySelectorAll('.rf-nav .rf-nav__item') || [];
      var append = this.numId === 0 ? '' : '-' + this.numId;
      this.shortcuts = this.header.querySelector('.rf-header__tools .rf-shortcuts');
      this.navList = this.header.querySelector('.rf-nav .rf-nav__list');

      if (this.searchBar) {
        this.popins.push(new header_HeaderPopin('header-tools-popin' + append, 'search-line', 'Rechercher', this.tools, navbar));
      }

      if (this.navItems.length > 0 || this.shortcuts != null) {
        this.popins.push(new header_HeaderPopin('header-nav-popin' + append, 'menu-fill', 'Ouvrir le menu', this.nav, navbar));
      }

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

var header_HeaderPopin = /*#__PURE__*/function () {
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
      button.innerHTML = title;
      return button;
    }
  }, {
    key: "change",
    value: function change(isMedium) {
      if (isMedium) {
        if (this.navbar.contains(this.button)) this.navbar.removeChild(this.button);
        if (this.popin.contains(this.close)) this.popin.removeChild(this.close);
        this.popin.removeAttribute('id');
        Object(classes["removeClass"])(this.popin, 'rf-header__popin');
        Object(classes["removeClass"])(this.popin, 'rf-header__popin--expanded');
      } else {
        if (!this.navbar.contains(this.button)) this.navbar.appendChild(this.button);
        if (!this.popin.contains(this.close)) this.popin.appendChild(this.close);
        this.popin.setAttribute('id', this.id);
        Object(classes["addClass"])(this.popin, 'rf-header__popin');
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
        Object(classes["addClass"])(this.popin, 'rf-header__popin--expanded');
      } else {
        Object(classes["removeClass"])(this.popin, 'rf-header__popin--expanded');
      }
    }
  }]);

  return HeaderPopin;
}();


// CONCATENATED MODULE: ./packages/header/src/scripts/index.js



/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Navigation", function() { return /* reexport */ navigation_Navigation; });

// EXTERNAL MODULE: ./packages/utilities/src/scripts/index.js + 5 modules
var scripts = __webpack_require__(47);

// EXTERNAL MODULE: ./packages/utilities/src/scripts/manipulation/classes.js
var classes = __webpack_require__(3);

// CONCATENATED MODULE: ./packages/navigation/src/scripts/navigation/navigation.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var NAV_COLLAPSE = '.rf-nav .rf-menu, .rf-nav .rf-mega-menu';
var NAV_LIST = '.rf-nav > .rf-nav__list';
var MENU = 'rf-menu';
var MEGA = 'rf-mega-menu';
var EXPANDED = '--expanded';
var RIGHT = 'rf-nav__item--align-right';

var navigation_Navigation = /*#__PURE__*/function () {
  function Navigation() {
    _classCallCheck(this, Navigation);

    this.init();
  }

  _createClass(Navigation, [{
    key: "init",
    value: function init() {
      this.group = new scripts["CollapseGroup"]();
      this.menus = [];
      this.navList = document.querySelector(NAV_LIST);
      var elements = document.querySelectorAll(NAV_COLLAPSE);
      var element, collapseElement;

      for (var i = 0; i < elements.length; i++) {
        element = elements[i];

        switch (true) {
          case element.className.indexOf(MENU) > -1:
            collapseElement = new scripts["CollapseElement"](element, MENU + EXPANDED);
            this.menus.push(new navigation_NavMenu(collapseElement));
            break;

          case element.className.indexOf(MEGA) > -1:
            collapseElement = new scripts["CollapseElement"](element, MEGA + EXPANDED);
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

var navigation_NavMenu = /*#__PURE__*/function () {
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
      if (left + width > right) Object(classes["addClass"])(this.btn.parentElement, RIGHT);else Object(classes["removeClass"])(this.btn.parentElement, RIGHT);
    }
  }]);

  return NavMenu;
}();


// CONCATENATED MODULE: ./packages/navigation/src/scripts/index.js



/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "DarkModeToggleSwitch", function() { return /* reexport */ DarkModeToggleSwitch; });

// CONCATENATED MODULE: ./packages/schemes/src/scripts/dark-mode-toggle-switch/dark-mode-toggle-switch.js
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


// CONCATENATED MODULE: ./packages/schemes/src/scripts/index.js



/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ShadowOnScroll", function() { return /* reexport */ ShadowOnScroll; });

// EXTERNAL MODULE: ./packages/utilities/src/scripts/manipulation/classes.js
var classes = __webpack_require__(3);

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



/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SideMenu", function() { return /* reexport */ sidemenu_SideMenu; });

// EXTERNAL MODULE: ./packages/utilities/src/scripts/index.js + 5 modules
var scripts = __webpack_require__(47);

// CONCATENATED MODULE: ./packages/sidemenu/src/scripts/sidemenu/sidemenu.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var NAV_COLLAPSE = '.rf-sidemenu__wrapper > .rf-sidemenu__list > .rf-sidemenu__item > .rf-sidemenu__content';
var SUBNAV_COLLAPSE = '.rf-sidemenu__item .rf-sidemenu__item .rf-sidemenu__content';
var MENU = 'rf-sidemenu__content';
var EXPANDED = '--expanded';
var SIDENAV_WRAPPER = 'rf-sidemenu__wrapper';

var sidemenu_SideMenu = /*#__PURE__*/function () {
  function SideMenu() {
    _classCallCheck(this, SideMenu);

    this.init();
  }

  _createClass(SideMenu, [{
    key: "init",
    value: function init() {
      this.group = new scripts["CollapseGroup"]();
      this.subGroup = new scripts["CollapseGroup"]();
      var elements = document.querySelectorAll(NAV_COLLAPSE);
      var subElements = document.querySelectorAll(SUBNAV_COLLAPSE);
      var sideMenuWrappers = document.querySelectorAll('.rf-sidemenu__wrapper');
      this.buttons = document.querySelectorAll('.rf-sidemenu__btn--sidemenu-toggle');
      var element, subElement, sideMenuWrapper, collapseElement, collapseSubElement;

      for (var i = 0; i < elements.length; i++) {
        element = elements[i];
        collapseElement = new scripts["CollapseElement"](element, MENU + EXPANDED);
        this.group.add(collapseElement);
      }

      for (var _i = 0; _i < subElements.length; _i++) {
        subElement = subElements[_i];
        collapseSubElement = new scripts["CollapseElement"](subElement, MENU + EXPANDED);
        this.subGroup.add(collapseSubElement);
      }

      for (var _i2 = 0; _i2 < sideMenuWrappers.length; _i2++) {
        sideMenuWrapper = sideMenuWrappers[_i2];
        this.collapseSideNav = new scripts["CollapseElement"](sideMenuWrapper, SIDENAV_WRAPPER + EXPANDED);
      }

      this.changing = this.change.bind(this);
      window.addEventListener('resize', this.changing);
      this.change();
    }
  }, {
    key: "change",
    value: function change() {
      this.isMedium = window.matchMedia('(min-width: 48em)').matches;

      if (this.isMedium) {
        for (var i = 0; i < this.buttons.length; i++) {
          this.button = this.buttons[i];
          this.button.setAttribute('hidden', '');
        }
      } else {
        for (var _i3 = 0; _i3 < this.buttons.length; _i3++) {
          this.button = this.buttons[_i3];
          this.button.removeAttribute('hidden');
        }
      }
    }
  }]);

  return SideMenu;
}();


// CONCATENATED MODULE: ./packages/sidemenu/src/scripts/index.js



/***/ })

/******/ });