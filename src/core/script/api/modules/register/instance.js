import { Emitter } from '../../utilities/emitter.js';
import state from '../../state.js';
import inspector from '../../inspect/inspector.js';
import { Breakpoints } from './breakpoints.js';
import { addClass, removeClass, hasClass, getClassNames } from '../../utilities/dom/classes.js';
import { dispatch } from '../../utilities/dom/dispatch.js';
import { uniqueId } from '../../utilities/dom/id';
import { completeAssign } from '../../utilities/property/complete-assign.js';
import { queryParentSelector, querySelectorAllArray } from '../../utilities/dom/query-selector.js';
import { queryActions } from '../../utilities/dom/actions.js';
import { InstanceEvent } from './Instance-event.js';

class Instance {
  constructor (jsAttribute = true) {
    this.jsAttribute = jsAttribute;
    this._isRendering = false;
    this._isResizing = false;
    this._isScrollLocked = false;
    this._isLoading = false;
    this._isSwappingFont = false;
    this._isEnabled = true;
    this._isDisposed = false;
    this._listeners = {};
    this._handlingClick = this._handleClick.bind(this);
    this._hashes = [];
    this._hash = '';
    this._keyListenerTypes = [];
    this._keys = [];
    this.handlingKey = this.handleKey.bind(this);
    this._emitter = new Emitter();
    this._ascent = new Emitter();
    this._descent = new Emitter();
    this._registrations = [];
    this._nexts = [];
  }

  static get instanceClassName () {
    return 'Instance';
  }

  _config (element, registration) {
    this.element = element;
    this.registration = registration;
    this.node = element.node;
    this.id = element.node.id;
    if (this.jsAttribute) this.setAttribute(registration.attribute, true);
    this.init();
  }

  init () {}

  get proxy () {
    const scope = this;
    const proxy = {
      render: () => scope.render(),
      resize: () => scope.resize()
    };

    const proxyAccessors = {
      get node () {
        return scope.node;
      },
      get isEnabled () {
        return scope.isEnabled;
      },
      set isEnabled (value) {
        scope.isEnabled = value;
      }
    };

    return completeAssign(proxy, proxyAccessors);
  }

  log (...values) {
    values.unshift(`${this.registration.instanceClassName} #${this.id} - `);
    inspector.log.apply(inspector, values);
  }

  debug (...values) {
    values.unshift(`${this.registration.instanceClassName} #${this.id} - `);
    inspector.debug.apply(inspector, values);
  }

  info (...values) {
    values.unshift(`${this.registration.instanceClassName} #${this.id} - `);
    inspector.info.apply(inspector, values);
  }

  warn (...values) {
    values.unshift(`${this.registration.instanceClassName} #${this.id} - `);
    inspector.warn.apply(inspector, values);
  }

  error (...values) {
    values.unshift(`${this.registration.instanceClassName} #${this.id} - `);
    inspector.error.apply(inspector, values);
  }

  register (selector, InstanceClass) {
    const registration = state.getModule('register').register(selector, InstanceClass, this);
    this._registrations.push(registration);
  }

  getRegisteredInstances (instanceClassName) {
    for (const registration of this._registrations) if (registration.hasInstanceClassName(instanceClassName)) return registration.instances.collection;
    return [];
  }

  dispatch (type, detail = null, bubbles = true, cancelable = false) {
    dispatch(this.node, type, detail, bubbles, cancelable);
  }

  // TODO v2 => listener au niveau des éléments qui redistribuent aux instances.
  listen (type, closure, options) {
    if (!this._listeners[type]) this._listeners[type] = [];
    const listeners = this._listeners[type];
    // if (listeners.some(listener => listener.closure === closure)) return;
    const listener = new Listener(this.node, type, closure, options);
    listeners.push(listener);
    listener.listen();
  }

  unlisten (type, closure, options) {
    if (!type) {
      for (const type in this._listeners) this.unlisten(type);
      return;
    }

    const listeners = this._listeners[type];

    if (!listeners) return;

    if (!closure) {
      listeners.forEach(listener => this.unlisten(type, listener.closure));
      return;
    }

    const removal = listeners.filter(listener => listener.closure === closure && listener.matchOptions(options));
    removal.forEach(listener => listener.unlisten());
    this._listeners[type] = listeners.filter(listener => removal.indexOf(listener) === -1);
  }

  listenClick (options) {
    this.listen('click', this._handlingClick, options);
  }

  unlistenClick (options) {
    this.unlisten('click', this._handlingClick, options);
  }

  _handleClick (e) {
    this.handleClick(e);
    this.dispatch(InstanceEvent.CLICK, this);
  }

  handleClick (e) {}

  set hash (value) {
    state.getModule('hash').hash = value;
  }

  get hash () {
    return state.getModule('hash').hash;
  }

  listenHash (hash, add) {
    if (!this._hashes) return;
    if (this._hashes.length === 0) state.add('hash', this);
    const action = new HashAction(hash, add);
    this._hashes = this._hashes.filter(action => action.hash !== hash);
    this._hashes.push(action);
  }

  unlistenHash (hash) {
    if (!this._hashes) return;
    this._hashes = this._hashes.filter(action => action.hash !== hash);
    if (this._hashes.length === 0) state.remove('hash', this);
  }

  handleHash (hash, e) {
    if (!this._hashes) return;
    for (const action of this._hashes) action.handle(hash, e);
  }

  listenKey (keyCode, closure, preventDefault = false, stopPropagation = false, type = 'down') {
    if (this._keyListenerTypes.indexOf(type) === -1) {
      this.listen(`key${type}`, this.handlingKey);
      this._keyListenerTypes.push(type);
    }

    this._keys.push(new KeyAction(type, keyCode, closure, preventDefault, stopPropagation));
  }

  unlistenKey (code, closure) {
    this._keys = this._keys.filter((key) => key.code !== code || key.closure !== closure);

    this._keyListenerTypes.forEach(type => {
      if (!this._keys.some(key => key.type === type)) this.unlisten(`key${type}`, this.handlingKey);
    });
  }

  handleKey (e) {
    for (const key of this._keys) key.handle(e);
  }

  get isEnabled () { return this._isEnabled; }

  set isEnabled (value) {
    this._isEnabled = value;
  }

  get isRendering () { return this._isRendering; }

  set isRendering (value) {
    if (this._isRendering === value) return;
    if (value) state.add('render', this);
    else state.remove('render', this);
    this._isRendering = value;
  }

  render () {}

  request (closure) {
    this._nexts.push(closure);
    state.getModule('render').request(this);
  }

  next () {
    const nexts = this._nexts.slice();
    this._nexts.length = 0;
    for (const closure of nexts) if (closure) closure();
  }

  get isResizing () { return this._isResizing; }

  set isResizing (value) {
    if (this._isResizing === value) return;
    if (value) {
      state.add('resize', this);
      this.resize();
    } else state.remove('resize', this);
    this._isResizing = value;
  }

  resize () {}

  isBreakpoint (breakpoint) {
    switch (true) {
      case typeof breakpoint === 'string':
        return Breakpoints[breakpoint.toUpperCase()].test();

      default:
        return breakpoint.test();
    }
  }

  get isScrollLocked () {
    return this._isScrollLocked;
  }

  set isScrollLocked (value) {
    if (this._isScrollLocked === value) return;
    if (value) state.add('lock', this);
    else state.remove('lock', this);
    this._isScrollLocked = value;
  }

  get isLoading () {
    return this._isLoading;
  }

  set isLoading (value) {
    if (this._isLoading === value) return;
    if (value) state.add('load', this);
    else state.remove('load', this);
    this._isLoading = value;
  }

  load () {}

  get isSwappingFont () {
    return this._isSwappingFont;
  }

  set isSwappingFont (value) {
    if (this._isSwappingFont === value) return;
    if (value) state.add('font-swap', this);
    else state.remove('font-swap', this);
    this._isSwappingFont = value;
  }

  swapFont () {}

  get isMouseMoving () { return this._isMouseMoving; }

  set isMouseMoving (value) {
    if (this._isMouseMoving === value) return;
    if (value) {
      state.add('mouse-move', this);
    } else {
      state.remove('mouse-move', this);
    }
    this._isMouseMoving = value;
  }

  mouseMove (point) {}

  examine (attributeNames) {
    if (!this.node.matches(this.registration.selector)) {
      this._dispose();
      return;
    }

    this.mutate(attributeNames);
  }

  mutate (attributeNames) {}

  retrieveNodeId (node, append) {
    if (node.id) return node.id;
    const id = uniqueId(`${this.id}-${append}`);
    this.warn(`add id '${id}' to ${append}`);
    node.setAttribute('id', id);
    return id;
  }

  get isDisposed () {
    return this._isDisposed;
  }

  _dispose () {
    this.debug(`dispose instance of ${this.registration.instanceClassName} on element [${this.element.id}]`);
    this.removeAttribute(this.registration.attribute);
    this.unlisten();
    state.remove('hash', this);
    this._hashes = null;
    this._keys = null;
    this.isRendering = false;
    this.isResizing = false;
    this._nexts = null;
    state.getModule('render').nexts.remove(this);
    this.isScrollLocked = false;
    this.isLoading = false;
    this.isSwappingFont = false;
    this.isMouseMoving = false;
    this._emitter.dispose();
    this._emitter = null;
    this._ascent.dispose();
    this._ascent = null;
    this._descent.dispose();
    this._descent = null;
    this.element.remove(this);
    for (const registration of this._registrations) state.remove('register', registration);
    this._registrations = null;
    this.registration.remove(this);
    this._isDisposed = true;
    this.dispose();
  }

  dispose () {}

  emit (type, data) {
    return this.element.emit(type, data);
  }

  addEmission (type, closure) {
    this._emitter.add(type, closure);
  }

  removeEmission (type, closure) {
    this._emitter.remove(type, closure);
  }

  ascend (type, data) {
    return this.element.ascend(type, data);
  }

  addAscent (type, closure) {
    this._ascent.add(type, closure);
  }

  removeAscent (type, closure) {
    this._ascent.remove(type, closure);
  }

  descend (type, data) {
    return this.element.descend(type, data);
  }

  addDescent (type, closure) {
    this._descent.add(type, closure);
  }

  removeDescent (type, closure) {
    this._descent.remove(type, closure);
  }

  get style () {
    return this.node.style;
  }

  addClass (className) {
    addClass(this.node, className);
  }

  removeClass (className) {
    removeClass(this.node, className);
  }

  hasClass (className) {
    return hasClass(this.node, className);
  }

  get classNames () {
    return getClassNames(this.node);
  }

  remove () {
    this.node.parentNode.removeChild(this.node);
  }

  setAttribute (attributeName, value) {
    this.node.setAttribute(attributeName, value);
  }

  getAttribute (attributeName) {
    return this.node.getAttribute(attributeName);
  }

  hasAttribute (attributeName) {
    return this.node.hasAttribute(attributeName);
  }

  removeAttribute (attributeName) {
    this.node.removeAttribute(attributeName);
  }

  setProperty (propertyName, value) {
    this.node.style.setProperty(propertyName, value);
  }

  removeProperty (propertyName) {
    this.node.style.removeProperty(propertyName);
  }

  focus () {
    this.node.focus();
  }

  blur () {
    this.node.blur();
  }

  focusClosest () {
    const closest = this._focusClosest(this.node.parentNode);
    if (closest) closest.focus();
  }

  _focusClosest (parent) {
    if (!parent) return null;
    const actions = [...queryActions(parent)];
    if (actions.length <= 1) {
      return this._focusClosest(parent.parentNode);
    } else {
      const index = actions.indexOf(this.node);
      return actions[index + (index < actions.length - 1 ? 1 : -1)];
    }
  }

  get hasFocus () {
    return this.node === document.activeElement;
  }

  scrollIntoView () {
    const rect = this.getRect();

    const scroll = state.getModule('lock');

    if (rect.top < 0) {
      scroll.move(rect.top - 50);
    }

    if (rect.bottom > window.innerHeight) {
      scroll.move(rect.bottom - window.innerHeight + 50);
    }
  }

  matches (selectors) {
    return this.node.matches(selectors);
  }

  querySelector (selectors) {
    return this.node.querySelector(selectors);
  }

  querySelectorAll (selectors) {
    return querySelectorAllArray(this.node, selectors);
  }

  queryParentSelector (selectors) {
    return queryParentSelector(this.node, selectors);
  }

  getRect () {
    const rect = this.node.getBoundingClientRect();
    rect.center = rect.left + rect.width * 0.5;
    rect.middle = rect.top + rect.height * 0.5;
    return rect;
  }

  get isLegacy () {
    return state.isLegacy;
  }
}

class KeyAction {
  constructor (type, keyCode, closure, preventDefault, stopPropagation) {
    this.type = type;
    this.eventType = `key${type}`;
    this.keyCode = keyCode;
    this.closure = closure;
    this.preventDefault = preventDefault === true;
    this.stopPropagation = stopPropagation === true;
  }

  handle (e) {
    if (e.type !== this.eventType) return;
    if (e.keyCode === this.keyCode.value) {
      this.closure(e);
      if (this.preventDefault) {
        e.preventDefault();
      }
      if (this.stopPropagation) {
        e.stopPropagation();
      }
    }
  }
}

class Listener {
  constructor (node, type, closure, options) {
    this._node = node;
    this._type = type;
    this._closure = closure;
    this._options = options;
  }

  get closure () {
    return this._closure;
  }

  listen () {
    this._node.addEventListener(this._type, this._closure, this._options);
  }

  matchOptions (options = null) {
    switch (true) {
      case options === null:
      case typeof this._options === 'boolean' && typeof options === 'boolean' && this._options === options:
        return true;

      case Object.keys(this._options).length !== Object.keys(options).length:
        return false;

      case Object.keys(options).every(key => this._options[key] === options[key]):
        return true;
    }

    return false;
  }

  unlisten () {
    this._node.removeEventListener(this._type, this._closure, this._options);
  }
}

class HashAction {
  constructor (hash, add) {
    this.hash = hash;
    this.add = add;
  }

  handle (hash, e) {
    if (this.hash === hash) this.add(e);
  }
}

export { Instance };
