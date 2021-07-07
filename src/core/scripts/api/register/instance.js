import { Emitter } from '../utilities/emitter.js';
import state from '../state.js';
import inspector from '../inspect/inspector';
import { Breakpoints } from './breakpoints';
import { addClass, removeClass, hasClass } from '../utilities/classes';
import { queryParentSelector, querySelectorAllArray } from '../utilities/query-selector';

class Instance {
  constructor () {
    this._isRendering = false;
    this._isResizing = false;
    this._isScrollLocked = false;
    this._listeners = {};
    this._keyListenerTypes = [];
    this._keys = [];
    this.handlingKey = this.handleKey.bind(this);
    this._emitter = new Emitter();
    this._ascent = new Emitter();
    this._descent = new Emitter();
    this._registrations = [];
    this._nexts = [];
  }

  _config (element, registration) {
    this.element = element;
    this.registration = registration;
    this.node = element.node;
    this.id = element.node.id;
    this.init();
  }

  init () {}

  get proxy () {
    const scope = this;
    return {
      render: () => scope.render(),
      resize: () => scope.resize()
    };
  }

  register (selector, InstanceClass) {
    const registration = state.getModule('register').register(selector, InstanceClass, this);
    this._registrations.push(registration);
  }

  getRegisteredInstances (instanceClassName) {
    for (const registration of this._registrations) if (registration.InstanceClass.name === instanceClassName) return registration.instances.collection;
    return [];
  }

  dispatch (type, detail, bubbles, cancelable) {
    const event = new CustomEvent(type, { detail: detail, bubble: bubbles === true, cancelable: cancelable === true });
    this.node.dispatchEvent(event);
  }

  listen (type, closure) {
    if (!this._listeners[type]) this._listeners[type] = [];
    if (this._listeners[type].indexOf(closure) > -1) return;
    this._listeners[type].push(closure);
    this.node.addEventListener(type, closure);
  }

  unlisten (type, closure) {
    if (!type) {
      for (const type in this._listeners) this.unlisten(type);
    } else if (!closure) {
      if (!this._listeners[type]) return;
      for (const closure of this._listeners[type]) this.node.removeEventListener(type, closure);
      this._listeners[type].length = 0;
    } else {
      if (!this._listeners[type]) return;
      const index = this._listeners[type].indexOf(closure);
      if (index > -1) this._listeners[type].splice(index, 1);
      this.node.removeEventListener(type, closure);
    }
  }

  listenKey (code, closure, preventDefault = false, stopPropagation = false, type = 'down') {
    if (this._keyListenerTypes.indexOf(type) === -1) {
      this.listen(`key${type}`, this.handlingKey);
      this._keyListenerTypes.push(type);
    }

    this._keys.push(new KeyAction(type, code, closure, preventDefault, stopPropagation));
  }

  unlistenKey (code, closure) {
    this._keys = this._keys.filter((key) => key.code !== code || key.closure !== closure);

    for (const type of this._keyListenerTypes) if (!this._keys.some((key) => key.type === type)) this.unlisten(`key${type}`, this.handlingKey);
  }

  handleKey (e) {
    for (const key of this._keys) key.handle(e);
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
    for (const closure of this._nexts) if (closure) closure();
    this._nexts.length = 0;
  }

  get isResizing () { return this._isResizing; }

  set isResizing (value) {
    if (this._isResizing === value) return;
    if (value) state.add('resize', this);
    else state.remove('resize', this);
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

  examine () {
    if (!this.node.matches(this.registration.selector)) this._dispose();
  }

  _dispose () {
    inspector.debug(`dispose instance of ${this.registration.InstanceClass.name} on element [${this.element.id}]`);
    this.unlisten();
    this._keys = null;
    this.isRendering = false;
    this.isResizing = false;
    this._nexts = null;
    state.getModule('render').nexts.remove(this);
    this.isScrollLocked = false;
    this._emitter.dispose();
    this._emitter = null;
    this._ascent.dispose();
    this._ascent = null;
    this._descent.dispose();
    this._descent = null;
    this.element.remove(this);
    for (const registration of this._registrations) state.remove('register', registration);
    this._registrations = null;
    this.unobserve();
    this.dispose();
  }

  dispose () {}

  emit (type, data) {
    this.element.emit(type, data);
  }

  addEmission (type, closure) {
    this._emitter.add(type, closure);
  }

  removeEmission (type, closure) {
    this._emitter.remove(type, closure);
  }

  ascend (type, data) {
    this.element.ascend(type, data);
  }

  addAscent (type, closure) {
    this._ascent.add(type, closure);
  }

  removeAscent (type, closure) {
    this._ascent.remove(type, closure);
  }

  descend (type, data) {
    this.element.descend(type, data);
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

  get hasFocus () {
    return this.node === document.activeElement;
  }

  observe (options) {
    if (!this._observer) this._observer = new MutationObserver(this.mutate.bind(this));
    this._observerOptions = options || this._observerOptions;
    this._observer.observe(this.node, this._observerOptions);
  }

  mutate (mutations) {}

  unobserve () {
    if (this._observer) this._observer.disconnect();
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
}

class KeyAction {
  constructor (type, code, closure, preventDefault, stopPropagation) {
    this.type = type;
    this.eventType = `key${type}`;
    this.code = code;
    this.closure = closure;
    this.preventDefault = preventDefault === true;
    this.stopPropagation = stopPropagation === true;
  }

  handle (e) {
    if (e.type !== this.eventType) return;
    if (e.keyCode === this.code) {
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

export { Instance };
