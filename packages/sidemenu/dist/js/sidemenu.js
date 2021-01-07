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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
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

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
module.exports = __webpack_require__(17);


/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Initializer", function() { return /* reexport */ Initializer; });
__webpack_require__.d(__webpack_exports__, "addClass", function() { return /* reexport */ classes["addClass"]; });
__webpack_require__.d(__webpack_exports__, "removeClass", function() { return /* reexport */ classes["removeClass"]; });
__webpack_require__.d(__webpack_exports__, "Renderer", function() { return /* reexport */ Renderer; });
__webpack_require__.d(__webpack_exports__, "KeyListener", function() { return /* reexport */ KeyListener; });
__webpack_require__.d(__webpack_exports__, "Disclosure", function() { return /* reexport */ disclosure_Disclosure; });
__webpack_require__.d(__webpack_exports__, "DisclosureButton", function() { return /* reexport */ disclosure_button_DisclosureButton; });
__webpack_require__.d(__webpack_exports__, "DisclosuresGroup", function() { return /* reexport */ DisclosuresGroup; });
__webpack_require__.d(__webpack_exports__, "Collapse", function() { return /* reexport */ collapse_Collapse; });
__webpack_require__.d(__webpack_exports__, "CollapseButton", function() { return /* reexport */ CollapseButton; });
__webpack_require__.d(__webpack_exports__, "Collapses", function() { return /* reexport */ collapses_Collapses; });
__webpack_require__.d(__webpack_exports__, "CollapsesGroup", function() { return /* reexport */ CollapsesGroup; });

// CONCATENATED MODULE: ./packages/core/src/scripts/global/initializer.js
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


// EXTERNAL MODULE: ./packages/core/src/scripts/manipulation/classes.js
var classes = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/core/src/scripts/global/renderer.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function renderer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function renderer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function renderer_createClass(Constructor, protoProps, staticProps) { if (protoProps) renderer_defineProperties(Constructor.prototype, protoProps); if (staticProps) renderer_defineProperties(Constructor, staticProps); return Constructor; }

var Renderer = /*#__PURE__*/function () {
  function Renderer() {
    renderer_classCallCheck(this, Renderer);

    this.closures = [];
    this.rendering = this.render.bind(this);
    this.render();
  }

  renderer_createClass(Renderer, [{
    key: "render",
    value: function render() {
      window.requestAnimationFrame(this.rendering);

      var _iterator = _createForOfIteratorHelper(this.closures),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var closure = _step.value;
          closure.call();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }], [{
    key: "add",
    value: function add(closure) {
      Renderer.instance.closures.push(closure);

      var remove = function remove() {
        var index = Renderer.instance.closures.indexOf(closure);
        if (index !== -1) Renderer.instance.closures.splice(index, 1);
      };

      return remove;
    }
  }]);

  return Renderer;
}();

Renderer.instance = new Renderer();

// CONCATENATED MODULE: ./packages/core/src/scripts/key-listener/key-listener.js
function key_listener_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = key_listener_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function key_listener_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return key_listener_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return key_listener_arrayLikeToArray(o, minLen); }

function key_listener_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      var _iterator = key_listener_createForOfIteratorHelper(this.collections),
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
      var _iterator2 = key_listener_createForOfIteratorHelper(this.actions),
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

// CONCATENATED MODULE: ./packages/core/src/scripts/disclosure/disclosures-group.js
function disclosures_group_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = disclosures_group_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function disclosures_group_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return disclosures_group_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return disclosures_group_arrayLikeToArray(o, minLen); }

function disclosures_group_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function disclosures_group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function disclosures_group_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function disclosures_group_createClass(Constructor, protoProps, staticProps) { if (protoProps) disclosures_group_defineProperties(Constructor.prototype, protoProps); if (staticProps) disclosures_group_defineProperties(Constructor, staticProps); return Constructor; }

/* eslint no-labels: ["error", { "allowLoop": true }] */
var groups = [];

var DisclosuresGroup = /*#__PURE__*/function () {
  function DisclosuresGroup(id, element) {
    disclosures_group_classCallCheck(this, DisclosuresGroup);

    this.id = id;
    this.element = element;
    this.members = [];
    this._index = -1;
    this._current = null;
    groups.push(this);
  }

  disclosures_group_createClass(DisclosuresGroup, [{
    key: "add",
    value: function add(member) {
      if (this.members.indexOf(member) !== -1) return;
      this.members.push(member);
      member.setGroup(this);

      switch (true) {
        case this.current !== null:
        case !member.disclosed:
          member.apply(false);
          break;

        default:
          this.current = member;
          member.apply(true);
      }
    }
  }, {
    key: "apply",
    value: function apply() {}
  }, {
    key: "length",
    get: function get() {
      return this.members.length;
    }
  }, {
    key: "index",
    get: function get() {
      return this._index;
    },
    set: function set(value) {
      if (value < -1 || value >= this.length || this._index === value) return;
      if (this.current !== null) this.current.apply(false);
      this._index = value;
      this._current = this._index > -1 ? this.members[this._index] : null;
      if (this.current !== null) this.current.apply(true);
      this.apply();
    }
  }, {
    key: "current",
    get: function get() {
      return this._current;
    },
    set: function set(member) {
      this.index = this.members.indexOf(member);
    }
  }], [{
    key: "getGroupById",
    value: function getGroupById(id) {
      var _iterator = disclosures_group_createForOfIteratorHelper(groups),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var group = _step.value;
          if (group.constructor === this && group.id === id) return group;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return new this(id);
    }
  }, {
    key: "getGroupByElement",
    value: function getGroupByElement(element) {
      var _iterator2 = disclosures_group_createForOfIteratorHelper(groups),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var group = _step2.value;
          if (group.element === element) return group;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return new this(false, element);
    }
  }, {
    key: "groupById",
    value: function groupById(member, groupConstructor) {
      var id = member.element.getAttribute('data-rf-group');
      if (id === null) return;
      var group = groupConstructor.getGroupById(id);
      group.add(member);
    }
  }, {
    key: "groupByParent",
    value: function groupByParent(member, GroupConstructor, groupSelector) {
      if (groupSelector === undefined) groupSelector = GroupConstructor.selector;
      if (groupSelector === '') return;
      var element = member.element.parentElement;

      while (element) {
        if (element.classList.contains(member.constructor.selector)) return;

        if (element.classList.contains(groupSelector)) {
          var group = GroupConstructor.getGroupByElement(element);
          group.add(member);
          return;
        }

        element = element.parentElement;
      }
    }
  }, {
    key: "selector",
    get: function get() {
      return '';
    }
  }]);

  return DisclosuresGroup;
}();


// CONCATENATED MODULE: ./packages/core/src/scripts/disclosure/disclosure-button.js
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
        if (mutation.type === 'attributes' && mutation.attributeName === _this.disclosure.attributeName) _this.disclosure.change(_this.disclosed);
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


// CONCATENATED MODULE: ./packages/core/src/scripts/disclosure/disclosure.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || disclosure_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return disclosure_arrayLikeToArray(arr); }

function disclosure_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = disclosure_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function disclosure_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return disclosure_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return disclosure_arrayLikeToArray(o, minLen); }

function disclosure_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function disclosure_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function disclosure_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function disclosure_createClass(Constructor, protoProps, staticProps) { if (protoProps) disclosure_defineProperties(Constructor.prototype, protoProps); if (staticProps) disclosure_defineProperties(Constructor, staticProps); return Constructor; }




var disclosures = [];

var disclosure_Disclosure = /*#__PURE__*/function () {
  function Disclosure(element) {
    disclosure_classCallCheck(this, Disclosure);

    this.element = element;
    this.id = element.id;
    this.buttons = [];
    this.disclosed = null;
    this._type = this.constructor.type;
    this._selector = this.constructor.selector;
    this.modifier = this._selector + '--' + this._type.id;
    this.attributeName = (this._type.aria ? 'aria-' : 'data-rf-') + this._type.id;
    var buttons = document.querySelectorAll('[aria-controls="' + this.id + '"]');
    if (buttons.length > 0) for (var i = 0; i < buttons.length; i++) {
      this.addButton(buttons[i]);
    }
    this.disclosed = this.disclosed === true;
    this.apply(this.disclosed);
    console.log(this.GroupConstructor);
    DisclosuresGroup.groupById(this, this.GroupConstructor);
    DisclosuresGroup.groupByParent(this, this.GroupConstructor);
  }

  disclosure_createClass(Disclosure, [{
    key: "addButton",
    value: function addButton(element) {
      var button = this.buttonFactory(element);

      if (button.hasAttribute) {
        if (this.disclosed === null) {
          this.disclosed = button.disclosed;
        } else button.apply(this.disclosed);
      }

      this.buttons.push(button);
    }
  }, {
    key: "buttonFactory",
    value: function buttonFactory(button) {
      return new disclosure_button_DisclosureButton(button, this);
    }
  }, {
    key: "disclose",
    value: function disclose() {
      if (this.disclosed) return;
      if (this.group !== undefined) this.group.current = this;
      this.apply(true);
    }
  }, {
    key: "conceal",
    value: function conceal() {
      if (!this.disclosed) return;
      if (this.group !== undefined) this.group.current = null;
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

      if (!value) {
        var _iterator = disclosure_createForOfIteratorHelper(disclosures),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var disclosure = _step.value;
            if (disclosure !== this && this.element.contains(disclosure.element)) disclosure.reset();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, {
    key: "reset",
    value: function reset() {}
  }, {
    key: "change",
    value: function change(hasAttribute) {
      console.log('change', hasAttribute, this.type);

      switch (this.constructor.type) {
        case Disclosure.TYPES.expand:
          switch (true) {
            case !hasAttribute:
            case this.disclosed:
              this.conceal();
              break;

            default:
              this.disclose();
          }

          break;

        case Disclosure.TYPES.select:
          this.disclose();
          break;

        case Disclosure.TYPES.open:
          this.disclose();
          break;
      }
    }
  }, {
    key: "setGroup",
    value: function setGroup(group) {
      this.group = group;
    }
  }, {
    key: "GroupConstructor",
    get: function get() {
      return DisclosuresGroup;
    }
  }], [{
    key: "build",
    value: function build(from) {
      var elements = _toConsumableArray(from.querySelectorAll(".".concat(this.selector)));

      var _iterator2 = disclosure_createForOfIteratorHelper(elements),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var element = _step2.value;
          disclosures.push(new this(element));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "type",
    get: function get() {
      return null;
    }
  }, {
    key: "selector",
    get: function get() {
      return '';
    }
  }]);

  return Disclosure;
}();

disclosure_Disclosure.TYPES = {
  expand: {
    id: 'expanded',
    aria: true
  },
  select: {
    id: 'selected',
    aria: true
  },
  open: {
    id: 'opened',
    aria: false
  }
};

// CONCATENATED MODULE: ./packages/core/src/scripts/collapse/collapse-button.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function collapse_button_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function collapse_button_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function collapse_button_createClass(Constructor, protoProps, staticProps) { if (protoProps) collapse_button_defineProperties(Constructor.prototype, protoProps); if (staticProps) collapse_button_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * CollapseButton correspond au bouton cliquable qui change le panel
 * CollapseButton étend de DisclosureButton qui ajoute/enelve l'attribut aria-expanded
 */

var CollapseButton = /*#__PURE__*/function (_DisclosureButton) {
  _inherits(CollapseButton, _DisclosureButton);

  var _super = _createSuper(CollapseButton);

  function CollapseButton() {
    collapse_button_classCallCheck(this, CollapseButton);

    return _super.apply(this, arguments);
  }

  collapse_button_createClass(CollapseButton, [{
    key: "hasFocus",
    get: function get() {
      return this.element === document.activeElement;
    }
  }]);

  return CollapseButton;
}(disclosure_button_DisclosureButton);


// CONCATENATED MODULE: ./packages/core/src/scripts/collapse/collapses-group.js
function collapses_group_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { collapses_group_typeof = function _typeof(obj) { return typeof obj; }; } else { collapses_group_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return collapses_group_typeof(obj); }

function collapses_group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function collapses_group_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function collapses_group_createClass(Constructor, protoProps, staticProps) { if (protoProps) collapses_group_defineProperties(Constructor.prototype, protoProps); if (staticProps) collapses_group_defineProperties(Constructor, staticProps); return Constructor; }

function collapses_group_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) collapses_group_setPrototypeOf(subClass, superClass); }

function collapses_group_setPrototypeOf(o, p) { collapses_group_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return collapses_group_setPrototypeOf(o, p); }

function collapses_group_createSuper(Derived) { var hasNativeReflectConstruct = collapses_group_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = collapses_group_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = collapses_group_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return collapses_group_possibleConstructorReturn(this, result); }; }

function collapses_group_possibleConstructorReturn(self, call) { if (call && (collapses_group_typeof(call) === "object" || typeof call === "function")) { return call; } return collapses_group_assertThisInitialized(self); }

function collapses_group_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function collapses_group_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function collapses_group_getPrototypeOf(o) { collapses_group_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return collapses_group_getPrototypeOf(o); }


var ascendants = {};

var CollapsesGroup = /*#__PURE__*/function (_DisclosuresGroup) {
  collapses_group_inherits(CollapsesGroup, _DisclosuresGroup);

  var _super = collapses_group_createSuper(CollapsesGroup);

  function CollapsesGroup() {
    collapses_group_classCallCheck(this, CollapsesGroup);

    return _super.apply(this, arguments);
  }

  collapses_group_createClass(CollapsesGroup, [{
    key: "hasFocus",
    get: function get() {
      if (this.current === undefined) return null;
      return this.current.hasFocus;
    }
  }], [{
    key: "register",
    value: function register(ascendant, groupSelector) {
      ascendants[ascendant] = groupSelector;
    }
  }, {
    key: "ascendants",
    get: function get() {
      return ascendants;
    }
  }]);

  return CollapsesGroup;
}(DisclosuresGroup);


// CONCATENATED MODULE: ./packages/core/src/scripts/collapse/collapse-constants.js
var COLLAPSE_SELECTOR = 'rf-collapse';

// CONCATENATED MODULE: ./packages/core/src/scripts/collapse/collapse.js
function collapse_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { collapse_typeof = function _typeof(obj) { return typeof obj; }; } else { collapse_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return collapse_typeof(obj); }

function collapse_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function collapse_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function collapse_createClass(Constructor, protoProps, staticProps) { if (protoProps) collapse_defineProperties(Constructor.prototype, protoProps); if (staticProps) collapse_defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = collapse_getPrototypeOf(object); if (object === null) break; } return object; }

function collapse_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) collapse_setPrototypeOf(subClass, superClass); }

function collapse_setPrototypeOf(o, p) { collapse_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return collapse_setPrototypeOf(o, p); }

function collapse_createSuper(Derived) { var hasNativeReflectConstruct = collapse_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = collapse_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = collapse_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return collapse_possibleConstructorReturn(this, result); }; }

function collapse_possibleConstructorReturn(self, call) { if (call && (collapse_typeof(call) === "object" || typeof call === "function")) { return call; } return collapse_assertThisInitialized(self); }

function collapse_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function collapse_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function collapse_getPrototypeOf(o) { collapse_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return collapse_getPrototypeOf(o); }






/**
 * Tab coorespond au panel d'un élement Tabs (tab panel)
 * Tab étend disclosure qui ajoute/enleve le modifier --selected,
 * et ajoute/eleve l'attribut hidden, sur le panel
 */

var collapse_Collapse = /*#__PURE__*/function (_Disclosure) {
  collapse_inherits(Collapse, _Disclosure);

  var _super = collapse_createSuper(Collapse);

  function Collapse(element) {
    var _this;

    collapse_classCallCheck(this, Collapse);

    _this = _super.call(this, element);

    _this.groupByAscendant();

    element.addEventListener('transitionend', _this.transitionend.bind(collapse_assertThisInitialized(_this)));
    return _this;
  }

  collapse_createClass(Collapse, [{
    key: "groupByAscendant",
    value: function groupByAscendant() {
      for (var ascendant in CollapsesGroup.ascendants) {
        var element = this.element.parentElement;

        while (element) {
          if (element.classList.contains(ascendant)) {
            if (typeof CollapsesGroup.ascendants[ascendant] === 'string') {
              DisclosuresGroup.groupByParent(this, CollapsesGroup, CollapsesGroup.ascendants[ascendant]);
            } else {
              DisclosuresGroup.groupByParent(this, CollapsesGroup.ascendants[ascendant]);
            }

            return;
          }

          element = element.parentElement;
        }
      }
    }
  }, {
    key: "buttonFactory",
    value: function buttonFactory(element) {
      return new CollapseButton(element, this);
    }
  }, {
    key: "transitionend",
    value: function transitionend(e) {
      if (!this.disclosed) this.element.style.display = 'none';
    }
  }, {
    key: "apply",
    value: function apply(value) {
      var _this2 = this;

      if (value) {
        this.element.style.display = '';
        this.element.style.setProperty('--collapser', 'none');
        var height = this.element.offsetHeight;
        this.element.style.setProperty('--collapse', -height + 'px');
        this.element.style.setProperty('--collapser', '');
        window.requestAnimationFrame(function () {
          return _get(collapse_getPrototypeOf(Collapse.prototype), "apply", _this2).call(_this2, true);
        });
      } else {
        var _height = this.element.offsetHeight;
        this.element.style.setProperty('--collapse', -_height + 'px');

        _get(collapse_getPrototypeOf(Collapse.prototype), "apply", this).call(this, false);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.apply(false);
    }
  }, {
    key: "focus",
    value: function focus() {
      for (var i = 0; i < this.buttons.length; i++) {
        var button = this.buttons[i];

        if (button.hasAttribute) {
          button.element.focus();
          return;
        }
      }
    }
  }, {
    key: "GroupConstructor",
    get: function get() {
      return CollapsesGroup;
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
  }], [{
    key: "type",
    get: function get() {
      return disclosure_Disclosure.TYPES.expand;
    }
  }, {
    key: "selector",
    get: function get() {
      return COLLAPSE_SELECTOR;
    }
  }]);

  return Collapse;
}(disclosure_Disclosure);


// CONCATENATED MODULE: ./packages/core/src/scripts/collapse/collapses.js
function collapses_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function collapses_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function collapses_createClass(Constructor, protoProps, staticProps) { if (protoProps) collapses_defineProperties(Constructor.prototype, protoProps); if (staticProps) collapses_defineProperties(Constructor, staticProps); return Constructor; }



var collapses_Collapses = /*#__PURE__*/function () {
  function Collapses() {
    collapses_classCallCheck(this, Collapses);

    this.init();
  }

  collapses_createClass(Collapses, [{
    key: "init",
    value: function init() {
      collapse_Collapse.build(document);
    }
  }]);

  return Collapses;
}();


// CONCATENATED MODULE: ./packages/core/src/scripts/index.js


















/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./packages/core/src/scripts/index.js + 11 modules
var scripts = __webpack_require__(45);

// CONCATENATED MODULE: ./packages/sidemenu/src/scripts/sidemenu/sidemenu-constants.js
var SIDEMENU_GROUP = 'rf-sidemenu__list';
var SIDEMENU_ASCENDANT = 'rf-sidemenu';

// CONCATENATED MODULE: ./packages/sidemenu/src/scripts/sidemenu/sidemenu.js


scripts["CollapsesGroup"].register(SIDEMENU_ASCENDANT, SIDEMENU_GROUP);
// CONCATENATED MODULE: ./packages/sidemenu/src/scripts/dist.js
/* eslint-disable no-new */


/***/ })

/******/ });