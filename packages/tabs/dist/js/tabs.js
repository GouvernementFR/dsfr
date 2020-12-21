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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./packages/tabs/_dist.scss
var _dist = __webpack_require__(12);

// EXTERNAL MODULE: ./packages/core/src/scripts/init/Initializer.js
var Initializer = __webpack_require__(1);

// EXTERNAL MODULE: ./packages/core/src/scripts/index.js + 5 modules
var scripts = __webpack_require__(36);

// CONCATENATED MODULE: ./packages/tabs/src/scripts/tabs/tab-button.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    _classCallCheck(this, TabButton);

    return _super.apply(this, arguments);
  }

  _createClass(TabButton, [{
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
}(scripts["DisclosureButton"]);


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
}(scripts["Disclosure"]);


// CONCATENATED MODULE: ./packages/tabs/src/scripts/tabs/tabs-group.js
function tabs_group_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tabs_group_typeof = function _typeof(obj) { return typeof obj; }; } else { tabs_group_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tabs_group_typeof(obj); }

function tabs_group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tabs_group_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tabs_group_createClass(Constructor, protoProps, staticProps) { if (protoProps) tabs_group_defineProperties(Constructor.prototype, protoProps); if (staticProps) tabs_group_defineProperties(Constructor, staticProps); return Constructor; }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = tabs_group_superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

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

    _this.build(wrapper, TABS_SELECTOR, PANEL_SELECTOR, scripts["Disclosure"].SELECT);

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
      this.keyEvents = new scripts["KeyListener"](this.element);
      this.keyEvents.down(scripts["KeyListener"].RIGHT, this.arrowRightPress.bind(this), true, true);
      this.keyEvents.down(scripts["KeyListener"].LEFT, this.arrowLeftPress.bind(this), true, true);
      this.keyEvents.down(scripts["KeyListener"].HOME, this.homePress.bind(this), true, true);
      this.keyEvents.down(scripts["KeyListener"].END, this.endPress.bind(this), true, true);
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
}(scripts["DisclosuresGroup"]);


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


// CONCATENATED MODULE: ./packages/tabs/src/scripts/dist.js
/* eslint-disable no-new */



new Initializer["Initializer"]('.rf-tabs', [tabs_Tabs]);

/***/ }),

/***/ 36:
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

// EXTERNAL MODULE: ./packages/core/src/scripts/init/Initializer.js
var Initializer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/core/src/scripts/collapse/collapse.js
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


// EXTERNAL MODULE: ./packages/core/src/scripts/manipulation/classes.js
var classes = __webpack_require__(2);

// CONCATENATED MODULE: ./packages/core/src/scripts/disclosure/disclosures-group.js
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


// CONCATENATED MODULE: ./packages/core/src/scripts/disclosure/disclosure.js
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

// CONCATENATED MODULE: ./packages/core/src/scripts/key-listener/key-listener.js
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

// CONCATENATED MODULE: ./packages/core/src/scripts/index.js













/***/ })

/******/ });