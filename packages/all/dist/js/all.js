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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined variable: \"$container-max-width\".\n        on line 25 of packages/navigation/src/styles/modules/_mega-menu.scss, in mixin `@content`\n        from line 33 of packages/core/src/styles/global/tools/_pseudo.scss, in mixin `@content`\n        from line 21 of packages/core/src/styles/global/tools/_pseudo.scss, in mixin `-pseudo`\n        from line 32 of packages/core/src/styles/global/tools/_pseudo.scss, in mixin `after`\n        from line 24 of packages/navigation/src/styles/modules/_mega-menu.scss, in mixin `@content`\n        from line 20 of packages/core/src/styles/global/misc/breakpoints/_tools.scss, in mixin `respond-from`\n        from line 23 of packages/navigation/src/styles/modules/_mega-menu.scss\n        from line 8 of packages/navigation/src/styles/_module.scss\n        from line 5 of packages/navigation/_main.scss\n        from line 25 of /Users/lab9/Free/La_Netscouade/Design_system/prod/Octobre/design-system-developpement/packages/all/_dist.scss\n>> lc(#{$container-max-width} + #{space(8v)}), 2px);\n\n   ------------------------------------------^\n\n    at /Users/lab9/Free/La_Netscouade/Design_system/prod/Octobre/design-system-developpement/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/lab9/Free/La_Netscouade/Design_system/prod/Octobre/design-system-developpement/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/lab9/Free/La_Netscouade/Design_system/prod/Octobre/design-system-developpement/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/lab9/Free/La_Netscouade/Design_system/prod/Octobre/design-system-developpement/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/lab9/Free/La_Netscouade/Design_system/prod/Octobre/design-system-developpement/node_modules/sass-loader/dist/index.js:73:7)\n    at Object.done [as callback] (/Users/lab9/Free/La_Netscouade/Design_system/prod/Octobre/design-system-developpement/node_modules/neo-async/async.js:8067:18)\n    at options.error (/Users/lab9/Free/La_Netscouade/Design_system/prod/Octobre/design-system-developpement/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./packages/all/_dist.scss
var _dist = __webpack_require__(0);

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


// CONCATENATED MODULE: ./packages/core/src/scripts/manipulation/classes.js
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
      if (value) addClass(this.element, this.modifier);else removeClass(this.element, this.modifier);

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


// CONCATENATED MODULE: ./packages/schemes/src/scripts/dist.js
/* eslint-disable no-new */


new Initializer(':root[' + Scheme.SCHEME_ATTRIBUTE + ']', [Scheme]);
// CONCATENATED MODULE: ./packages/core/src/scripts/dist.js
/* eslint-disable no-new */

new Initializer('.rf-collapse', [collapses_Collapses]);
// CONCATENATED MODULE: ./packages/accordions/src/scripts/accordion/accordion-constants.js
var ACCORDIONS_GROUP = 'rf-accordions-group';
var ACCORDION_ASCENDANT = 'rf-accordion';
var ACCORDION_BUTTON = 'rf-accordion__btn';

// CONCATENATED MODULE: ./packages/accordions/src/scripts/accordion/accordions-group.js
function accordions_group_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { accordions_group_typeof = function _typeof(obj) { return typeof obj; }; } else { accordions_group_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return accordions_group_typeof(obj); }

function accordions_group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function accordions_group_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function accordions_group_createClass(Constructor, protoProps, staticProps) { if (protoProps) accordions_group_defineProperties(Constructor.prototype, protoProps); if (staticProps) accordions_group_defineProperties(Constructor, staticProps); return Constructor; }

function accordions_group_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { accordions_group_get = Reflect.get; } else { accordions_group_get = function _get(target, property, receiver) { var base = accordions_group_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return accordions_group_get(target, property, receiver || target); }

function accordions_group_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = accordions_group_getPrototypeOf(object); if (object === null) break; } return object; }

function accordions_group_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) accordions_group_setPrototypeOf(subClass, superClass); }

function accordions_group_setPrototypeOf(o, p) { accordions_group_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return accordions_group_setPrototypeOf(o, p); }

function accordions_group_createSuper(Derived) { var hasNativeReflectConstruct = accordions_group_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = accordions_group_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = accordions_group_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return accordions_group_possibleConstructorReturn(this, result); }; }

function accordions_group_possibleConstructorReturn(self, call) { if (call && (accordions_group_typeof(call) === "object" || typeof call === "function")) { return call; } return accordions_group_assertThisInitialized(self); }

function accordions_group_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function accordions_group_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function accordions_group_getPrototypeOf(o) { accordions_group_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return accordions_group_getPrototypeOf(o); }




var accordions_group_AccordionsGroup = /*#__PURE__*/function (_CollapsesGroup) {
  accordions_group_inherits(AccordionsGroup, _CollapsesGroup);

  var _super = accordions_group_createSuper(AccordionsGroup);

  function AccordionsGroup(id, element) {
    var _this;

    accordions_group_classCallCheck(this, AccordionsGroup);

    _this = _super.call(this, id, element);

    _this._attachEvents();

    return _this;
  }

  accordions_group_createClass(AccordionsGroup, [{
    key: "_attachEvents",
    value: function _attachEvents() {
      this.keyEvents = new KeyListener(this.element);
      this.keyEvents.down(KeyListener.DOWN, this.arrowDownPress.bind(this), true, true);
      this.keyEvents.down(KeyListener.UP, this.arrowUpPress.bind(this), true, true);
      this.keyEvents.down(KeyListener.HOME, this.homePress.bind(this), true, true);
      this.keyEvents.down(KeyListener.END, this.endPress.bind(this), true, true);
    }
    /**
     * Selectionne l'element suivant de la liste si on est sur un bouton
     * Si on est à la fin on retourne au début
     */

  }, {
    key: "arrowDownPress",
    value: function arrowDownPress() {
      if (document.activeElement.classList.contains(ACCORDION_BUTTON)) {
        if (this.index < this.length - 1) {
          this.index++;
        } else {
          this.index = 0;
        }
      }
    }
  }, {
    key: "arrowUpPress",

    /**
     * Selectionne l'element précédent de la liste si on est sur un bouton
     * Si on est au debut retourne a la fin
     */
    value: function arrowUpPress() {
      if (document.activeElement.classList.contains(ACCORDION_BUTTON)) {
        if (this.index > 0) {
          this.index--;
        } else {
          this.index = this.length - 1;
        }
      }
    }
  }, {
    key: "homePress",

    /**
     * Selectionne le permier element de la liste si on est sur un bouton
     */
    value: function homePress() {
      if (document.activeElement.classList.contains(ACCORDION_BUTTON)) {
        this.index = 0;
      }
    }
  }, {
    key: "endPress",

    /**
     * Selectionne le dernier element de la liste si on est sur un bouton
     */
    value: function endPress() {
      if (document.activeElement.classList.contains(ACCORDION_BUTTON)) {
        this.index = this.length - 1;
      }
    }
  }, {
    key: "apply",
    value: function apply() {
      accordions_group_get(accordions_group_getPrototypeOf(AccordionsGroup.prototype), "apply", this).call(this);

      if (this.current !== null) this.current.focus();
    }
  }], [{
    key: "selector",
    get: function get() {
      return ACCORDIONS_GROUP;
    }
  }]);

  return AccordionsGroup;
}(CollapsesGroup);


// CONCATENATED MODULE: ./packages/accordions/src/scripts/accordion/accordions.js



CollapsesGroup.register(ACCORDION_ASCENDANT, accordions_group_AccordionsGroup);
// CONCATENATED MODULE: ./packages/accordions/src/scripts/dist.js
/* eslint-disable no-new */

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


// CONCATENATED MODULE: ./packages/breadcrumb/src/scripts/dist.js
/* eslint-disable no-new */


new Initializer('.rf-breadcrumb__button', [BreadcrumbButton]);
// CONCATENATED MODULE: ./packages/table/src/scripts/shadow-on-scroll/shadow-on-scroll.js
function shadow_on_scroll_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function shadow_on_scroll_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function shadow_on_scroll_createClass(Constructor, protoProps, staticProps) { if (protoProps) shadow_on_scroll_defineProperties(Constructor.prototype, protoProps); if (staticProps) shadow_on_scroll_defineProperties(Constructor, staticProps); return Constructor; }


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
        if (side === LEFT) removeClass(this.table, SHADOW_LEFT_CLASS);else if (side === RIGHT) removeClass(this.table, SHADOW_RIGHT_CLASS);
      } else {
        if (side === LEFT) addClass(this.table, SHADOW_LEFT_CLASS);else if (side === RIGHT) addClass(this.table, SHADOW_RIGHT_CLASS);
      }
    }
  }]);

  return Table;
}();


// CONCATENATED MODULE: ./packages/table/src/scripts/index.js


// CONCATENATED MODULE: ./packages/table/src/scripts/dist.js
/* eslint-disable no-new */


new Initializer('.rf-table--responsive', [ShadowOnScroll]);
// CONCATENATED MODULE: ./packages/navigation/src/scripts/navigation/navigation-constants.js
var NAVIGATION = 'rf-nav';
var NAVIGATION_LIST = 'rf-nav__list';
var NAVIGATION_MENU = 'rf-menu';
var NAVIGATION_ITEM = 'rf-nav__item';
var NAVIGATION_ITEM_RIGHT = NAVIGATION_ITEM + '--align-right';

// CONCATENATED MODULE: ./packages/navigation/src/scripts/navigation/navigation.js
function navigation_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { navigation_typeof = function _typeof(obj) { return typeof obj; }; } else { navigation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return navigation_typeof(obj); }

function navigation_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = navigation_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function navigation_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return navigation_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return navigation_arrayLikeToArray(o, minLen); }

function navigation_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function navigation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function navigation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function navigation_createClass(Constructor, protoProps, staticProps) { if (protoProps) navigation_defineProperties(Constructor.prototype, protoProps); if (staticProps) navigation_defineProperties(Constructor, staticProps); return Constructor; }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = navigation_superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function navigation_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { navigation_get = Reflect.get; } else { navigation_get = function _get(target, property, receiver) { var base = navigation_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return navigation_get(target, property, receiver || target); }

function navigation_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = navigation_getPrototypeOf(object); if (object === null) break; } return object; }

function navigation_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) navigation_setPrototypeOf(subClass, superClass); }

function navigation_setPrototypeOf(o, p) { navigation_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return navigation_setPrototypeOf(o, p); }

function navigation_createSuper(Derived) { var hasNativeReflectConstruct = navigation_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = navigation_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = navigation_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return navigation_possibleConstructorReturn(this, result); }; }

function navigation_possibleConstructorReturn(self, call) { if (call && (navigation_typeof(call) === "object" || typeof call === "function")) { return call; } return navigation_assertThisInitialized(self); }

function navigation_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function navigation_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function navigation_getPrototypeOf(o) { navigation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return navigation_getPrototypeOf(o); }




var navigation_Navigation = /*#__PURE__*/function (_CollapsesGroup) {
  navigation_inherits(Navigation, _CollapsesGroup);

  var _super = navigation_createSuper(Navigation);

  function Navigation(id, element) {
    var _this;

    navigation_classCallCheck(this, Navigation);

    _this = _super.call(this, id, element);
    _this.menus = [];
    _this.navList = element.querySelector(".".concat(NAVIGATION_LIST));
    document.addEventListener('focusout', _this.focusOut.bind(navigation_assertThisInitialized(_this)));
    window.addEventListener('resize', _this.resize.bind(navigation_assertThisInitialized(_this)));
    window.addEventListener('orientationchange', _this.resize.bind(navigation_assertThisInitialized(_this)));

    _this.resize();

    return _this;
  }

  navigation_createClass(Navigation, [{
    key: "add",
    value: function add(member) {
      navigation_get(navigation_getPrototypeOf(Navigation.prototype), "add", this).call(this, member);

      if (member.element.classList.contains(NAVIGATION_MENU)) {
        this.menus.push(new navigation_NavigationMenu(member, this.navList.getBoundingClientRect().right));
      }
    }
  }, {
    key: "focusOut",
    value: function focusOut(e) {
      var _this2 = this;

      requestAnimationFrame(function () {
        if (_this2.current !== null && !_this2.current.hasFocus) _this2.index = -1;
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      var right = this.navList.getBoundingClientRect().right;

      var _iterator = navigation_createForOfIteratorHelper(this.menus),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var menu = _step.value;
          menu.place(right);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "index",
    get: function get() {
      return navigation_get(navigation_getPrototypeOf(Navigation.prototype), "index", this);
    },
    set: function set(value) {
      if (value === -1 && this.current !== null && this.current.hasFocus) this.current.focus();

      _set(navigation_getPrototypeOf(Navigation.prototype), "index", value, this, true);
    }
  }], [{
    key: "selector",
    get: function get() {
      return NAVIGATION;
    }
  }]);

  return Navigation;
}(CollapsesGroup);

var navigation_NavigationMenu = /*#__PURE__*/function () {
  function NavigationMenu(collapse, right) {
    navigation_classCallCheck(this, NavigationMenu);

    this.initialize(collapse);
    this.place(right);
  }

  navigation_createClass(NavigationMenu, [{
    key: "initialize",
    value: function initialize(collapse) {
      this.element = collapse.element;

      var _iterator2 = navigation_createForOfIteratorHelper(collapse.buttons),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var button = _step2.value;
          if (!button.hasAttribute) continue;
          this.button = button.element;
          break;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var item = this.element.parentElement;

      while (item) {
        if (item.classList.contains(NAVIGATION_ITEM)) {
          this.item = item;
          break;
        }

        item = item.parentElement;
      }
    }
  }, {
    key: "place",
    value: function place(right) {
      var styles = getComputedStyle(this.element);
      var width = parseFloat(styles.width);
      var left = this.button.getBoundingClientRect().left;
      console.log(width, left, right);
      if (left + width > right) addClass(this.item, NAVIGATION_ITEM_RIGHT);else removeClass(this.item, NAVIGATION_ITEM_RIGHT);
    }
  }]);

  return NavigationMenu;
}();


// CONCATENATED MODULE: ./packages/navigation/src/scripts/navigation/navigations.js



CollapsesGroup.register(NAVIGATION, navigation_Navigation);
// CONCATENATED MODULE: ./packages/navigation/src/scripts/dist.js
/* eslint-disable no-new */

// CONCATENATED MODULE: ./packages/sidemenu/src/scripts/sidemenu/sidemenu-constants.js
var SIDEMENU_GROUP = 'rf-sidemenu__list';
var SIDEMENU_ASCENDANT = 'rf-sidemenu';

// CONCATENATED MODULE: ./packages/sidemenu/src/scripts/sidemenu/sidemenu.js


CollapsesGroup.register(SIDEMENU_ASCENDANT, SIDEMENU_GROUP);
// CONCATENATED MODULE: ./packages/sidemenu/src/scripts/dist.js
/* eslint-disable no-new */

// CONCATENATED MODULE: ./packages/tabs/src/scripts/tabs/tab-button.js
function tab_button_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tab_button_typeof = function _typeof(obj) { return typeof obj; }; } else { tab_button_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tab_button_typeof(obj); }

function tab_button_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tab_button_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tab_button_createClass(Constructor, protoProps, staticProps) { if (protoProps) tab_button_defineProperties(Constructor.prototype, protoProps); if (staticProps) tab_button_defineProperties(Constructor, staticProps); return Constructor; }

function tab_button_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { tab_button_get = Reflect.get; } else { tab_button_get = function _get(target, property, receiver) { var base = tab_button_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return tab_button_get(target, property, receiver || target); }

function tab_button_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = tab_button_getPrototypeOf(object); if (object === null) break; } return object; }

function tab_button_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) tab_button_setPrototypeOf(subClass, superClass); }

function tab_button_setPrototypeOf(o, p) { tab_button_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tab_button_setPrototypeOf(o, p); }

function tab_button_createSuper(Derived) { var hasNativeReflectConstruct = tab_button_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = tab_button_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = tab_button_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return tab_button_possibleConstructorReturn(this, result); }; }

function tab_button_possibleConstructorReturn(self, call) { if (call && (tab_button_typeof(call) === "object" || typeof call === "function")) { return call; } return tab_button_assertThisInitialized(self); }

function tab_button_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function tab_button_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function tab_button_getPrototypeOf(o) { tab_button_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tab_button_getPrototypeOf(o); }


/**
  * TabButton correspond au bouton cliquable qui change le panel
  * TabButton étend de DisclosureButton qui ajoute/enelve l'attribut aria-selected,
  * Et change l'attributte tabindex a 0 si le boutton est actif (value=true), -1 s'il n'est pas actif (value=false)
 */

var TabButton = /*#__PURE__*/function (_DisclosureButton) {
  tab_button_inherits(TabButton, _DisclosureButton);

  var _super = tab_button_createSuper(TabButton);

  function TabButton() {
    tab_button_classCallCheck(this, TabButton);

    return _super.apply(this, arguments);
  }

  tab_button_createClass(TabButton, [{
    key: "apply",
    value: function apply(value) {
      tab_button_get(tab_button_getPrototypeOf(TabButton.prototype), "apply", this).call(this, value);

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
var TABS_SELECTOR = 'rf-tabs';
var TAB_CLASSNAME = 'rf-tabs__tab';
var PANEL_SELECTOR = 'rf-tabs__panel';
var TABS_LIST_SELECTOR = 'rf-tabs__list';
var TRANSITION_TIME = 100;

// CONCATENATED MODULE: ./packages/tabs/src/scripts/tabs/tabs-group.js
function tabs_group_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tabs_group_typeof = function _typeof(obj) { return typeof obj; }; } else { tabs_group_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tabs_group_typeof(obj); }

function tabs_group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tabs_group_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tabs_group_createClass(Constructor, protoProps, staticProps) { if (protoProps) tabs_group_defineProperties(Constructor.prototype, protoProps); if (staticProps) tabs_group_defineProperties(Constructor, staticProps); return Constructor; }

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
* Correspond à un objet Tabs avec plusieurs tab-button & Tab (panel)
*/

var tabs_group_TabsGroup = /*#__PURE__*/function (_DisclosuresGroup) {
  tabs_group_inherits(TabsGroup, _DisclosuresGroup);

  var _super = tabs_group_createSuper(TabsGroup);

  function TabsGroup(id, element) {
    var _this;

    tabs_group_classCallCheck(this, TabsGroup);

    _this = _super.call(this, id, element);
    _this.list = element.querySelector(".".concat(TABS_LIST_SELECTOR));
    element.addEventListener('transitionend', _this._transitionend.bind(tabs_group_assertThisInitialized(_this)));

    _this._attachEvents();

    Renderer.add(_this.render.bind(tabs_group_assertThisInitialized(_this)));
    return _this;
  }

  tabs_group_createClass(TabsGroup, [{
    key: "_transitionend",
    value: function _transitionend(e) {
      this.element.style.transition = 'none';
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
        if (this.index < this.length - 1) {
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
          this.index = this.length - 1;
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
        this.index = this.length - 1;
      }
    }
  }, {
    key: "apply",
    value: function apply() {
      for (var i = 0; i < this._index; i++) {
        this.members[i].element.style.transform = 'translateX(-100%)';
      }

      this.current.element.style.transform = '';

      for (var _i = this._index + 1; _i < this.length; _i++) {
        this.members[_i].element.style.transform = 'translateX(100%)';
      }

      this.element.style.transition = '';
    }
  }, {
    key: "add",
    value: function add(tab) {
      tabs_group_get(tabs_group_getPrototypeOf(TabsGroup.prototype), "add", this).call(this, tab);

      if (this.length === 1 || tab.disclosed) this.current = tab;else {
        var index = this.members.indexOf(tab);
        if (this._index > -1 && this._index !== index) tab.element.style.transform = "translateX(".concat(index < this._index ? -100 : 100, "%)");
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.current === null) return;
      var paneHeight = Math.round(this.current.element.offsetHeight);
      if (this.panelHeight === paneHeight) return;
      this.panelHeight = paneHeight;
      this.element.style.height = this.panelHeight + this.list.offsetHeight + 'px';
    }
  }], [{
    key: "selector",
    get: function get() {
      return TABS_SELECTOR;
    }
  }]);

  return TabsGroup;
}(DisclosuresGroup);


// CONCATENATED MODULE: ./packages/tabs/src/scripts/tabs/tab.js
function tab_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tab_typeof = function _typeof(obj) { return typeof obj; }; } else { tab_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tab_typeof(obj); }

function tab_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tab_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tab_createClass(Constructor, protoProps, staticProps) { if (protoProps) tab_defineProperties(Constructor.prototype, protoProps); if (staticProps) tab_defineProperties(Constructor, staticProps); return Constructor; }

function tab_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) tab_setPrototypeOf(subClass, superClass); }

function tab_setPrototypeOf(o, p) { tab_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tab_setPrototypeOf(o, p); }

function tab_createSuper(Derived) { var hasNativeReflectConstruct = tab_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = tab_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = tab_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return tab_possibleConstructorReturn(this, result); }; }

function tab_possibleConstructorReturn(self, call) { if (call && (tab_typeof(call) === "object" || typeof call === "function")) { return call; } return tab_assertThisInitialized(self); }

function tab_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function tab_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function tab_getPrototypeOf(o) { tab_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tab_getPrototypeOf(o); }





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
  }, {
    key: "reset",
    value: function reset() {
      this.group.index = 0;
    }
  }, {
    key: "GroupConstructor",
    get: function get() {
      return tabs_group_TabsGroup;
    }
  }], [{
    key: "type",
    get: function get() {
      return disclosure_Disclosure.TYPES.select;
    }
  }, {
    key: "selector",
    get: function get() {
      return PANEL_SELECTOR;
    }
  }]);

  return Tab;
}(disclosure_Disclosure);


// CONCATENATED MODULE: ./packages/tabs/src/scripts/tabs/tabs.js
function tabs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tabs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tabs_createClass(Constructor, protoProps, staticProps) { if (protoProps) tabs_defineProperties(Constructor.prototype, protoProps); if (staticProps) tabs_defineProperties(Constructor, staticProps); return Constructor; }


/**
* Classe principale des Tabs, initialise tout les éléments Tab dans la page
*/

var tabs_Tabs = /*#__PURE__*/function () {
  function Tabs() {
    tabs_classCallCheck(this, Tabs);

    this.init();
  }

  tabs_createClass(Tabs, [{
    key: "init",
    value: function init() {
      tab_Tab.build(document);
    }
  }]);

  return Tabs;
}();


// CONCATENATED MODULE: ./packages/tabs/src/scripts/index.js


// CONCATENATED MODULE: ./packages/tabs/src/scripts/dist.js
/* eslint-disable no-new */


new Initializer('.rf-tabs', [tabs_Tabs]);
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


// CONCATENATED MODULE: ./packages/header/src/scripts/dist.js
/* eslint-disable no-new */


new Initializer('.rf-header', [Header]);
// CONCATENATED MODULE: ./packages/ie11/src/scripts/object-fit-polyfill/object-fit-polyfill.js
function object_fit_polyfill_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Polyfill pour IE11 qui ne supporte pas object-fit. On met l'image en background sur l'élément img et un svg vide en source
 */
var ObjectFitPolyfill = function ObjectFitPolyfill($selectors) {
  object_fit_polyfill_classCallCheck(this, ObjectFitPolyfill);

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


// CONCATENATED MODULE: ./packages/ie11/src/scripts/dist.js
/* eslint-disable no-new */

var dist_count;

function loaded() {
  dist_count--;

  if (dist_count === 0) {
    new ObjectFitPolyfill('.rf-content-media__img img', '.rf-card__img img', 'rf-responsive-vid');
  }
}

if (window.MSInputMethodContext && document.documentMode) {
  var scripts = [// 'https://unpkg.com/css-vars-ponyfill@2/dist/css-vars-ponyfill.min.js',
  'https://polyfill.io/v3/polyfill.min.js?features=Event', 'https://unpkg.com/focus-within-polyfill/dist/focus-within-polyfill.js'];
  dist_count = scripts.length;

  for (var dist_i = 0; dist_i < scripts.length; dist_i++) {
    var script = document.createElement('script');
    script.onload = loaded;
    script.src = scripts[dist_i];
    document.head.appendChild(script);
  }
}
// CONCATENATED MODULE: ./packages/all/src/scripts/dist.js












/***/ })
/******/ ]);