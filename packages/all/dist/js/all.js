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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./packages/all/_dist.scss
var _dist = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/ie11/src/scripts/object-fit-polyfill/object-fit-polyfill.js
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


// CONCATENATED MODULE: ./packages/ie11/src/scripts/distGlobal.js
/* eslint-disable no-new */


if (window.MSInputMethodContext && document.documentMode) {
  var scripts = ['https://unpkg.com/css-vars-ponyfill@2/dist/css-vars-ponyfill.min.js', 'https://polyfill.io/v3/polyfill.min.js?features=Event', 'https://unpkg.com/focus-within-polyfill/dist/focus-within-polyfill.js'];

  for (var distGlobal_i = 0; distGlobal_i < scripts.length; distGlobal_i++) {
    document.write('<script src="' + scripts[distGlobal_i] + '"><\x2fscript>');
  }

  new ObjectFitPolyfill('.rf-content-media__img img', '.rf-card__img img', 'rf-responsive-vid');
}
// CONCATENATED MODULE: ./packages/utilities/src/scripts/init/Initializer.js
function Initializer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Initializer = /*#__PURE__*/function () {
  function Initializer(selector, classes) {
    Initializer_classCallCheck(this, Initializer);

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


// CONCATENATED MODULE: ./packages/schemes/src/scripts/scheme/scheme.js
function scheme_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function scheme_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function scheme_createClass(Constructor, protoProps, staticProps) { if (protoProps) scheme_defineProperties(Constructor.prototype, protoProps); if (staticProps) scheme_defineProperties(Constructor, staticProps); return Constructor; }

var Scheme = /*#__PURE__*/function () {
  function Scheme() {
    scheme_classCallCheck(this, Scheme);

    this.init();
  }

  scheme_createClass(Scheme, [{
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
        if (!this.root.hasAttribute(Scheme.TRANSITION_ATTRIBUTE)) {
          this.root.setAttribute(Scheme.SCHEME_ATTRIBUTE, 'dark');
        } else {
          this.root.removeAttribute(Scheme.TRANSITION_ATTRIBUTE);
          this.root.setAttribute(Scheme.SCHEME_ATTRIBUTE, 'dark');
          setTimeout(function () {
            _this.root.setAttribute(Scheme.TRANSITION_ATTRIBUTE, '');
          }, 300);
        }
      } else this.root.setAttribute(Scheme.SCHEME_ATTRIBUTE, 'light');

      this.observer = new MutationObserver(this.mutate.bind(this));
      this.observer.observe(this.root, {
        attributes: true
      });
    }
  }, {
    key: "mutate",
    value: function mutate(mutations) {
      var _this2 = this;

      mutations.forEach(function (mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === Scheme.SCHEME_ATTRIBUTE) {
          var scheme = _this2.root.getAttribute(Scheme.SCHEME_ATTRIBUTE);

          if (scheme === 'dark') {
            localStorage.setItem('scheme', 'dark');
          } else if (scheme === 'light') {
            localStorage.setItem('scheme', 'light');
          }
        }
      });
    }
  }]);

  return Scheme;
}();

Scheme.SCHEME_ATTRIBUTE = 'data-rf-theme';
Scheme.TRANSITION_ATTRIBUTE = 'data-rf-transition';

// CONCATENATED MODULE: ./packages/schemes/src/scripts/index.js


// CONCATENATED MODULE: ./packages/schemes/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer(':root[' + Scheme.SCHEME_ATTRIBUTE + ']', [Scheme]);
// CONCATENATED MODULE: ./packages/utilities/src/scripts/collapse/collapse.js
function collapse_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function collapse_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function collapse_createClass(Constructor, protoProps, staticProps) { if (protoProps) collapse_defineProperties(Constructor.prototype, protoProps); if (staticProps) collapse_defineProperties(Constructor, staticProps); return Constructor; }


var COLLAPSE = '.rf-collapse';
var MODIFIER = COLLAPSE + '--expanded';
var TOGGLE = 'toggle_event';
var REDUCE = 'reduce_event';
var EXPAND = 'expand_event';

var Collapse = /*#__PURE__*/function () {
  function Collapse() {
    collapse_classCallCheck(this, Collapse);

    this.elements = [];
    this.groups = {};
    this.init();
  }

  collapse_createClass(Collapse, [{
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
    collapse_classCallCheck(this, CollapseElement);

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

  collapse_createClass(CollapseElement, [{
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
        addClass(this.element, this.modifier);
        this.element.dispatchEvent(new Event(EXPAND));
      } else {
        removeClass(this.element, this.modifier);
        this.element.dispatchEvent(new Event(REDUCE));
      }
    }
  }]);

  return CollapseElement;
}();

var CollapseButton = /*#__PURE__*/function () {
  function CollapseButton(element) {
    collapse_classCallCheck(this, CollapseButton);

    this.element = element;
    this.type = element.hasAttribute('aria-expanded') ? TOGGLE : REDUCE;
    this.element.addEventListener('click', this.click.bind(this));
  }

  collapse_createClass(CollapseButton, [{
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
    collapse_classCallCheck(this, CollapseGroup);

    this.collapses = [];
  }

  collapse_createClass(CollapseGroup, [{
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


// CONCATENATED MODULE: ./packages/utilities/src/scripts/manipulation/classes.js
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
    value: function build(wrapper, wrapperSelector, selector, type) {
      // const wrapperSelector = '.' + wrapper.classList[0]; // Pas terrible, on l'ajoute en params ?
      this.wrapper = wrapper;
      var elements = wrapper.querySelectorAll(selector);
      var disclosure;

      for (var i = 0; i < elements.length; i++) {
        // on l'ajoute qu'au wrapper le plus proche
        if (elements[i].closest(wrapperSelector) === this.wrapper) {
          disclosure = this.disclosureFactory(elements[i], type, selector);
          this.add(disclosure);
        }
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
      if (value) addClass(this.element, this.modifier);else removeClass(this.element, this.modifier);

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












// CONCATENATED MODULE: ./packages/utilities/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer('.rf-collapse', [Collapse]);
// CONCATENATED MODULE: ./packages/navigation/src/scripts/navigation/navigation.js
function navigation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function navigation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function navigation_createClass(Constructor, protoProps, staticProps) { if (protoProps) navigation_defineProperties(Constructor.prototype, protoProps); if (staticProps) navigation_defineProperties(Constructor, staticProps); return Constructor; }



var NAV_COLLAPSE = '.rf-nav .rf-menu, .rf-nav .rf-mega-menu';
var NAV_LIST = '.rf-nav > .rf-nav__list';
var MENU = 'rf-menu';
var MEGA = 'rf-mega-menu';
var EXPANDED = '--expanded';
var RIGHT = 'rf-nav__item--align-right';

var navigation_Navigation = /*#__PURE__*/function () {
  function Navigation() {
    navigation_classCallCheck(this, Navigation);

    this.init();
  }

  navigation_createClass(Navigation, [{
    key: "init",
    value: function init() {
      this.group = new CollapseGroup();
      this.menus = [];
      this.navList = document.querySelector(NAV_LIST);
      var elements = document.querySelectorAll(NAV_COLLAPSE);
      var element, collapseElement;

      for (var i = 0; i < elements.length; i++) {
        element = elements[i];

        switch (true) {
          case element.className.indexOf(MENU) > -1:
            collapseElement = new collapse_CollapseElement(element, MENU + EXPANDED);
            this.menus.push(new navigation_NavMenu(collapseElement));
            break;

          case element.className.indexOf(MEGA) > -1:
            collapseElement = new collapse_CollapseElement(element, MEGA + EXPANDED);
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
    navigation_classCallCheck(this, NavMenu);

    this.element = collapseElement.element;
    this.btn = collapseElement.buttons[0].element;
  }

  navigation_createClass(NavMenu, [{
    key: "place",
    value: function place(right) {
      var styles = getComputedStyle(this.element);
      var width = parseFloat(styles.width);
      var left = this.btn.getBoundingClientRect().left;
      if (left + width > right) addClass(this.btn.parentElement, RIGHT);else removeClass(this.btn.parentElement, RIGHT);
    }
  }]);

  return NavMenu;
}();


// CONCATENATED MODULE: ./packages/navigation/src/scripts/index.js


// CONCATENATED MODULE: ./packages/navigation/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer('.rf-nav', [navigation_Navigation]);
// CONCATENATED MODULE: ./packages/breadcrumb/src/scripts/breadcrumb-button/breadcrumb-button.js
function breadcrumb_button_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function breadcrumb_button_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function breadcrumb_button_createClass(Constructor, protoProps, staticProps) { if (protoProps) breadcrumb_button_defineProperties(Constructor.prototype, protoProps); if (staticProps) breadcrumb_button_defineProperties(Constructor, staticProps); return Constructor; }

var BreadcrumbButton = /*#__PURE__*/function () {
  function BreadcrumbButton() {
    breadcrumb_button_classCallCheck(this, BreadcrumbButton);

    this.init();
  }

  breadcrumb_button_createClass(BreadcrumbButton, [{
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


// CONCATENATED MODULE: ./packages/breadcrumb/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer('.rf-breadcrumb__button', [BreadcrumbButton]);
// CONCATENATED MODULE: ./packages/header/src/scripts/header/header.js
function header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function header_createClass(Constructor, protoProps, staticProps) { if (protoProps) header_defineProperties(Constructor.prototype, protoProps); if (staticProps) header_defineProperties(Constructor, staticProps); return Constructor; }


var count = 0;

var Header = /*#__PURE__*/function () {
  function Header(header) {
    header_classCallCheck(this, Header);

    this.header = header || document.querySelector('.rf-header');
    this.numId = count;
    count++;
    this.init();
  }

  header_createClass(Header, [{
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

      if (this.navItems.length > 0 || this.shortcuts !== null) {
        // si on des raccourcis mais pas de nav, on la créé
        if (!this.nav) {
          this.nav = document.createElement('nav');
          this.nav.setAttribute('role', 'navigation');
          this.nav.setAttribute('aria-label', 'Menu principal');
          this.header.appendChild(this.nav);
        }

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
    header_classCallCheck(this, HeaderPopin);

    this.id = id;
    this.button = this.create(icon, title);
    this.popin = popin;
    this.navbar = navbar;
    this.button.addEventListener('click', this.toggle.bind(this));
    this.close = this.create('close-line', 'Fermer', true, 'sm');
    this.close.addEventListener('click', this.exit.bind(this));
    this.isExpanded = false;
  }

  header_createClass(HeaderPopin, [{
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
        removeClass(this.popin, 'rf-header__popin');
        removeClass(this.popin, 'rf-header__popin--expanded');
      } else {
        if (!this.navbar.contains(this.button)) this.navbar.appendChild(this.button);
        if (!this.popin.contains(this.close)) this.popin.appendChild(this.close);
        this.popin.setAttribute('id', this.id);
        addClass(this.popin, 'rf-header__popin');
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
        addClass(this.popin, 'rf-header__popin--expanded');
      } else {
        removeClass(this.popin, 'rf-header__popin--expanded');
      }
    }
  }]);

  return HeaderPopin;
}();


// CONCATENATED MODULE: ./packages/header/src/scripts/index.js


// CONCATENATED MODULE: ./packages/header/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer('.rf-header', [Header]);
// CONCATENATED MODULE: ./packages/sidemenu/src/scripts/sidemenu/sidemenu.js
function sidemenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sidemenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sidemenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) sidemenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) sidemenu_defineProperties(Constructor, staticProps); return Constructor; }


var sidemenu_NAV_COLLAPSE = '.rf-sidemenu__wrapper > .rf-sidemenu__list > .rf-sidemenu__item > .rf-sidemenu__content';
var SUBNAV_COLLAPSE = '.rf-sidemenu__item .rf-sidemenu__item .rf-sidemenu__content';
var sidemenu_MENU = 'rf-sidemenu__content';
var sidemenu_EXPANDED = '--expanded';
var SIDENAV_WRAPPER = 'rf-sidemenu__wrapper';

var sidemenu_SideMenu = /*#__PURE__*/function () {
  function SideMenu() {
    sidemenu_classCallCheck(this, SideMenu);

    this.init();
  }

  sidemenu_createClass(SideMenu, [{
    key: "init",
    value: function init() {
      this.group = new CollapseGroup();
      this.subGroup = new CollapseGroup();
      var elements = document.querySelectorAll(sidemenu_NAV_COLLAPSE);
      var subElements = document.querySelectorAll(SUBNAV_COLLAPSE);
      var sideMenuWrappers = document.querySelectorAll('.rf-sidemenu__wrapper');
      this.buttons = document.querySelectorAll('.rf-sidemenu__btn--sidemenu-toggle');
      var element, subElement, sideMenuWrapper, collapseElement, collapseSubElement;

      for (var i = 0; i < elements.length; i++) {
        element = elements[i];
        collapseElement = new collapse_CollapseElement(element, sidemenu_MENU + sidemenu_EXPANDED);
        this.group.add(collapseElement);
      }

      for (var _i = 0; _i < subElements.length; _i++) {
        subElement = subElements[_i];
        collapseSubElement = new collapse_CollapseElement(subElement, sidemenu_MENU + sidemenu_EXPANDED);
        this.subGroup.add(collapseSubElement);
      }

      for (var _i2 = 0; _i2 < sideMenuWrappers.length; _i2++) {
        sideMenuWrapper = sideMenuWrappers[_i2];
        this.collapseSideNav = new collapse_CollapseElement(sideMenuWrapper, SIDENAV_WRAPPER + sidemenu_EXPANDED);
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


// CONCATENATED MODULE: ./packages/sidemenu/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer('.rf-sidemenu', [sidemenu_SideMenu]);
// CONCATENATED MODULE: ./packages/accordions/src/scripts/accordion/accordion.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || accordion_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return accordion_arrayLikeToArray(arr); }

function accordion_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = accordion_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function accordion_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return accordion_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return accordion_arrayLikeToArray(o, minLen); }

function accordion_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function accordion_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function accordion_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function accordion_createClass(Constructor, protoProps, staticProps) { if (protoProps) accordion_defineProperties(Constructor.prototype, protoProps); if (staticProps) accordion_defineProperties(Constructor, staticProps); return Constructor; }


var ACCORDION_GROUP = '.rf-accordion-group';
var ACCORDION_COLLAPSE = '.rf-accordion__body';
var ACCORDION_BODY = 'rf-accordion__body';
var accordion_EXPANDED = '--expanded';

var accordion_Accordion = /*#__PURE__*/function () {
  function Accordion() {
    accordion_classCallCheck(this, Accordion);

    this.init();
  }

  accordion_createClass(Accordion, [{
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
        collapseGroup = new CollapseGroup();
        this.collapseGroupsArray.push(collapseGroup);
      } // Get collapsible elements in groups


      for (var _i = 0; _i < this.collapseGroupsElements.length; _i++) {
        var _iterator = accordion_createForOfIteratorHelper(this.collapseGroupsElements[_i].querySelectorAll(ACCORDION_COLLAPSE)),
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
        collapseElement = new collapse_CollapseElement(element, ACCORDION_BODY + accordion_EXPANDED);
      } // Grouped accordion elements collapse


      for (var _i3 = 0; _i3 < this.collapseGroupElements.length; _i3++) {
        element = this.collapseGroupElements[_i3];
        var groupAttr = element.closest('.rf-accordion-group').dataset.rfAc;
        element.setAttribute('data-rf-ac', groupAttr);
        collapseElement = new collapse_CollapseElement(element, ACCORDION_BODY + accordion_EXPANDED);
        this.collapseGroupsArray[element.dataset.rfAc.slice(-1)].add(collapseElement);
      }
    }
  }]);

  return Accordion;
}();


// CONCATENATED MODULE: ./packages/accordions/src/scripts/index.js


// CONCATENATED MODULE: ./packages/accordions/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer('.rf-accordion', [accordion_Accordion]);
// CONCATENATED MODULE: ./packages/table/src/scripts/shadow-on-scroll/shadow-on-scroll.js
function shadow_on_scroll_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function shadow_on_scroll_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function shadow_on_scroll_createClass(Constructor, protoProps, staticProps) { if (protoProps) shadow_on_scroll_defineProperties(Constructor.prototype, protoProps); if (staticProps) shadow_on_scroll_defineProperties(Constructor, staticProps); return Constructor; }


var TABLE = '.rf-table:not(.rf-table--no-scroll)';
var LEFT = 'left';
var shadow_on_scroll_RIGHT = 'right';
var SHADOW_CLASS = 'rf-table--shadow';
var SHADOW_RIGHT_CLASS = 'rf-table--shadow-right';
var SHADOW_LEFT_CLASS = 'rf-table--shadow-left';
var WRAPPER_NAME = 'rf-table__wrapper';
var TABLE_CAPTION_BOTTOM = 'rf-table--caption-bottom';
var SCROLL_OFFSET = 1; // valeur en px du scroll avant laquelle le shadow s'active ou se desactive

var ShadowOnScroll = /*#__PURE__*/function () {
  function ShadowOnScroll() {
    shadow_on_scroll_classCallCheck(this, ShadowOnScroll);

    this.init();
  }

  shadow_on_scroll_createClass(ShadowOnScroll, [{
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
    shadow_on_scroll_classCallCheck(this, Table);

    this.init(table);
  }

  shadow_on_scroll_createClass(Table, [{
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
      removeClass(this.table, SHADOW_RIGHT_CLASS);
      removeClass(this.table, SHADOW_LEFT_CLASS);
      removeClass(this.table, SHADOW_CLASS);

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
      addClass(this.table, SHADOW_CLASS);
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
      var tableScrollRight = this.getScrollPosition(shadow_on_scroll_RIGHT); // on inverse en cas de lecture droite - gauche

      if (document.documentElement.getAttribute('dir') === 'rtl') {
        this.setShadowVisibility(shadow_on_scroll_RIGHT, tableScrollLeft);
        this.setShadowVisibility(LEFT, tableScrollRight);
      } else {
        this.setShadowVisibility(LEFT, tableScrollLeft);
        this.setShadowVisibility(shadow_on_scroll_RIGHT, tableScrollRight);
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

        case shadow_on_scroll_RIGHT:
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
        if (side === LEFT) removeClass(this.table, SHADOW_LEFT_CLASS);else if (side === shadow_on_scroll_RIGHT) removeClass(this.table, SHADOW_RIGHT_CLASS);
      } else {
        if (side === LEFT) addClass(this.table, SHADOW_LEFT_CLASS);else if (side === shadow_on_scroll_RIGHT) addClass(this.table, SHADOW_RIGHT_CLASS);
      }
    }
  }]);

  return Table;
}();


// CONCATENATED MODULE: ./packages/table/src/scripts/index.js


// CONCATENATED MODULE: ./packages/table/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer('.rf-table--responsive', [ShadowOnScroll]);
// CONCATENATED MODULE: ./packages/tabs/src/scripts/tabs/tab-button.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function tab_button_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tab_button_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tab_button_createClass(Constructor, protoProps, staticProps) { if (protoProps) tab_button_defineProperties(Constructor.prototype, protoProps); if (staticProps) tab_button_defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
  * TabButton correspond au bouton cliquable qui change le panel
  * TabButton étend de DisclosureButton qui ajoute/enelve l'attribut aria-selected,
  * Et change l'attributte tabindex a 0 si le boutton est actif (value=true), -1 s'il n'est pas actif (value=false)
 */

var TabButton = /*#__PURE__*/function (_DisclosureButton) {
  _inherits(TabButton, _DisclosureButton);

  var _super = _createSuper(TabButton);

  function TabButton() {
    tab_button_classCallCheck(this, TabButton);

    return _super.apply(this, arguments);
  }

  tab_button_createClass(TabButton, [{
    key: "apply",
    value: function apply(value) {
      _get(_getPrototypeOf(TabButton.prototype), "apply", this).call(this, value);

      if (this.hasAttribute) {
        this.element.setAttribute('tabindex', value ? '0' : '-1');
        if (value) this.element.focus({
          preventScroll: false
        });
      }
    }
  }]);

  return TabButton;
}(disclosure_button_DisclosureButton);


// CONCATENATED MODULE: ./packages/tabs/src/scripts/tabs/tabs-constants.js
var TABS_SELECTOR = '.rf-tabs';
var TAB_CLASSNAME = 'rf-tabs__tab';
var PANEL_SELECTOR = '.rf-tabs__panel';
var TABS_LIST_SELECTOR = '.rf-tabs__list';
var TRANSITION_TIME = 100;

// CONCATENATED MODULE: ./packages/tabs/src/scripts/tabs/tab.js
function tab_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tab_typeof = function _typeof(obj) { return typeof obj; }; } else { tab_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tab_typeof(obj); }

function tab_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tab_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tab_createClass(Constructor, protoProps, staticProps) { if (protoProps) tab_defineProperties(Constructor.prototype, protoProps); if (staticProps) tab_defineProperties(Constructor, staticProps); return Constructor; }

function tab_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { tab_get = Reflect.get; } else { tab_get = function _get(target, property, receiver) { var base = tab_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return tab_get(target, property, receiver || target); }

function tab_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = tab_getPrototypeOf(object); if (object === null) break; } return object; }

function tab_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) tab_setPrototypeOf(subClass, superClass); }

function tab_setPrototypeOf(o, p) { tab_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tab_setPrototypeOf(o, p); }

function tab_createSuper(Derived) { var hasNativeReflectConstruct = tab_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = tab_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = tab_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return tab_possibleConstructorReturn(this, result); }; }

function tab_possibleConstructorReturn(self, call) { if (call && (tab_typeof(call) === "object" || typeof call === "function")) { return call; } return tab_assertThisInitialized(self); }

function tab_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function tab_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function tab_getPrototypeOf(o) { tab_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tab_getPrototypeOf(o); }




var HIDDEN = 'hidden';
/**
  * Tab coorespond au panel d'un élement Tabs (tab panel)
  * Tab étend disclosure qui ajoute/enleve le modifier --selected,
  * et ajoute/eleve l'attribut hidden, sur le panel
  */

var tab_Tab = /*#__PURE__*/function (_Disclosure) {
  tab_inherits(Tab, _Disclosure);

  var _super = tab_createSuper(Tab);

  function Tab() {
    tab_classCallCheck(this, Tab);

    return _super.apply(this, arguments);
  }

  tab_createClass(Tab, [{
    key: "buttonFactory",
    value: function buttonFactory(element) {
      return new TabButton(element, this);
    }
    /**
    * apply(true), Affiche le panel
    * apply(false), Cache le panel
    */

  }, {
    key: "apply",
    value: function apply(value) {
      var _this = this;

      tab_get(tab_getPrototypeOf(Tab.prototype), "apply", this).call(this, value);

      if (value) {
        (function () {
          _this.element.removeAttribute(HIDDEN); // resize all elements after animation finish


          var tabs = document.querySelectorAll(TABS_SELECTOR);

          var _loop = function _loop(i) {
            setTimeout(function () {
              tabs[i].dispatchEvent(new Event('setHeight'));
              console.log('resize');
            }, TRANSITION_TIME * i);
          };

          for (var i = 0; i < tabs.length; i++) {
            _loop(i);
          }
        })();
      } else {
        this.element.setAttribute(HIDDEN, true);
      }
    }
  }]);

  return Tab;
}(disclosure_Disclosure);


// CONCATENATED MODULE: ./packages/tabs/src/scripts/tabs/tabs-group.js
function tabs_group_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tabs_group_typeof = function _typeof(obj) { return typeof obj; }; } else { tabs_group_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tabs_group_typeof(obj); }

function tabs_group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tabs_group_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tabs_group_createClass(Constructor, protoProps, staticProps) { if (protoProps) tabs_group_defineProperties(Constructor.prototype, protoProps); if (staticProps) tabs_group_defineProperties(Constructor, staticProps); return Constructor; }

function tabs_group_set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { tabs_group_set = Reflect.set; } else { tabs_group_set = function set(target, property, value, receiver) { var base = tabs_group_superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return tabs_group_set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = tabs_group_set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function tabs_group_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { tabs_group_get = Reflect.get; } else { tabs_group_get = function _get(target, property, receiver) { var base = tabs_group_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return tabs_group_get(target, property, receiver || target); }

function tabs_group_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = tabs_group_getPrototypeOf(object); if (object === null) break; } return object; }

function tabs_group_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) tabs_group_setPrototypeOf(subClass, superClass); }

function tabs_group_setPrototypeOf(o, p) { tabs_group_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tabs_group_setPrototypeOf(o, p); }

function tabs_group_createSuper(Derived) { var hasNativeReflectConstruct = tabs_group_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = tabs_group_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = tabs_group_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return tabs_group_possibleConstructorReturn(this, result); }; }

function tabs_group_possibleConstructorReturn(self, call) { if (call && (tabs_group_typeof(call) === "object" || typeof call === "function")) { return call; } return tabs_group_assertThisInitialized(self); }

function tabs_group_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function tabs_group_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function tabs_group_getPrototypeOf(o) { tabs_group_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tabs_group_getPrototypeOf(o); }




/**
* TabGroup est la classe étendue de DiscosuresGroup
* Correspond a un objet Tabs avec plusieurs tab-button & Tab (panel)
*/

var tabs_group_TabsGroup = /*#__PURE__*/function (_DisclosuresGroup) {
  tabs_group_inherits(TabsGroup, _DisclosuresGroup);

  var _super = tabs_group_createSuper(TabsGroup);

  function TabsGroup(wrapper) {
    var _this;

    tabs_group_classCallCheck(this, TabsGroup);

    _this = _super.call(this);
    _this._index = -1;
    _this.element = wrapper;

    _this.build(wrapper, TABS_SELECTOR, PANEL_SELECTOR, disclosure_Disclosure.SELECT);

    if (_this.current === null) _this.index = 0;

    _this._attachEvents();

    return _this;
  }

  tabs_group_createClass(TabsGroup, [{
    key: "disclosureFactory",
    value: function disclosureFactory(element, type, selector) {
      return new tab_Tab(element, type, selector);
    }
  }, {
    key: "_attachEvents",
    value: function _attachEvents() {
      this.keyEvents = new KeyListener(this.element);
      this.keyEvents.down(KeyListener.RIGHT, this.arrowRightPress.bind(this), true, true);
      this.keyEvents.down(KeyListener.LEFT, this.arrowLeftPress.bind(this), true, true);
      this.keyEvents.down(KeyListener.HOME, this.homePress.bind(this), true, true);
      this.keyEvents.down(KeyListener.END, this.endPress.bind(this), true, true);
    }
    /**
     * Selectionne l'element suivant de la liste si on est sur un bouton
     * Si on est à la fin on retourne au début
     */

  }, {
    key: "arrowRightPress",
    value: function arrowRightPress() {
      if (document.activeElement.classList.contains(TAB_CLASSNAME)) {
        if (this.index < this.disclosures.length - 1) {
          this.index++;
        } else {
          this.index = 0;
        }
      }
    }
  }, {
    key: "arrowLeftPress",

    /**
     * Selectionne l'element précédent de la liste si on est sur un bouton
     * Si on est au debut retourne a la fin
     */
    value: function arrowLeftPress() {
      if (document.activeElement.classList.contains(TAB_CLASSNAME)) {
        if (this.index > 0) {
          this.index--;
        } else {
          this.index = this.disclosures.length - 1;
        }
      }
    }
  }, {
    key: "homePress",

    /**
     * Selectionne le permier element de la liste si on est sur un bouton
     */
    value: function homePress() {
      if (document.activeElement.classList.contains(TAB_CLASSNAME)) {
        this.index = 0;
      }
    }
  }, {
    key: "endPress",

    /**
     * Selectionne le dernier element de la liste si on est sur un bouton
     */
    value: function endPress() {
      if (document.activeElement.classList.contains(TAB_CLASSNAME)) {
        this.index = this.disclosures.length - 1;
      }
    }
  }, {
    key: "setPanelHeight",

    /**
     * Adapte la hauteur du panel en ajoutant un margin-bottom sous la liste
     * Remonte sur le parent en cas de tabs dans tabs
     */
    value: function setPanelHeight() {
      var offsetFocus = 4;
      var panelHeight = this.current.element.offsetHeight - offsetFocus;
      this.element.querySelector(TABS_LIST_SELECTOR).style.marginBottom = panelHeight + 'px'; // const nestedParent = this.element.parentNode.closest(TABS_SELECTOR);
      // if (nestedParent && nestedParent !== this.element) {
      //   const currentParent = nestedParent.querySelector(PANEL_SELECTOR + '--' + Disclosure.SELECT);
      //   const parentHeight = currentParent.offsetHeight;
      //   console.log(parentHeight);
      //   nestedParent.querySelector(TABS_LIST_SELECTOR).style.marginBottom = parentHeight + 'px';
      // }
    }
  }, {
    key: "index",
    get: function get() {
      return this._index;
    },
    set: function set(value) {
      if (value < 0 || value >= this.disclosures.length || this._index === value) return;
      this._index = value;
      this.current = this.disclosures[value];
      this.setPanelHeight();
    }
  }, {
    key: "current",
    get: function get() {
      return tabs_group_get(tabs_group_getPrototypeOf(TabsGroup.prototype), "current", this);
    },
    set: function set(controller) {
      _set(tabs_group_getPrototypeOf(TabsGroup.prototype), "current", controller, this, true);

      this._index = this.disclosures.indexOf(controller);
      this.setPanelHeight();
    }
  }]);

  return TabsGroup;
}(disclosures_group_DisclosuresGroup);


// CONCATENATED MODULE: ./packages/tabs/src/scripts/tabs/tabs.js
function tabs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tabs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tabs_createClass(Constructor, protoProps, staticProps) { if (protoProps) tabs_defineProperties(Constructor.prototype, protoProps); if (staticProps) tabs_defineProperties(Constructor, staticProps); return Constructor; }



/**
* Classe principale des Tabs, initialise tout les éléments Tabs (TabsGroup) dans la page
*/

var tabs_Tabs = /*#__PURE__*/function () {
  function Tabs() {
    tabs_classCallCheck(this, Tabs);

    this.groups = [];
    this.init();
  }

  tabs_createClass(Tabs, [{
    key: "init",
    value: function init() {
      var wrappers = document.querySelectorAll(TABS_SELECTOR);
      this.changing = this.change.bind(this);

      for (var i = 0; i < wrappers.length; i++) {
        this.groups.push(new tabs_group_TabsGroup(wrappers[i]));
        wrappers[i].addEventListener('setHeight', this.changing);
      }

      window.addEventListener('resize', this.changing);
      window.addEventListener('load', this.changing); // this.change();
    }
  }, {
    key: "change",
    value: function change() {
      for (var i = 0; i < this.groups.length; i++) {
        this.groups[i].setPanelHeight();
      }
    }
  }]);

  return Tabs;
}();


// CONCATENATED MODULE: ./packages/tabs/src/scripts/index.js


// CONCATENATED MODULE: ./packages/tabs/src/scripts/distGlobal.js
/* eslint-disable no-new */


new Initializer('.rf-tabs', [tabs_Tabs]);
// CONCATENATED MODULE: ./packages/all/src/scripts/dist.js












/***/ })
/******/ ]);