import { ns } from '../../global/namespace.js';
import { Emitter } from '../../global/emitter.js';
import state from '../state.js';
import BREAKPOINTS from '../modules/resize/breakpoints';
import { register } from './registration';

class Instance {
  constructor () {
    this._isRendering = false;
    this._isResizing = false;
    this._isScrollLocked = false;
    this._listeners = {};
    this._ascent = new Emitter();
    this._descent = new Emitter();
    this._registrations = [];
  }

  _config (element, registration) {
    this.element = element;
    this._registration = registration;
    this.node = element.node;
    this.id = element.id;
    this.init();
  }

  init () {}

  register (selector, InstanceClass) {
    const registration = register(selector, InstanceClass);
    this._registrations.push(registration);
  }

  dispatch (type, data) {
    const event = new CustomEvent(ns.event(type), data);
    this.element.node.dispatchEvent(event);
  }

  listen (type, closure) {
    if (!this._listeners[type]) this._listeners[type] = [];
    if (this._listeners[type].indexOf(closure) > -1) return;
    this._listeners[type].push(closure);
    this.element.node.addEventListener(type, closure);
  }

  unlisten (type, closure) {
    if (!type) {
      for (const type in this._listeners) this.unlisten(type);
    } else if (!closure) {
      if (!this._listeners[type]) return;
      for (const closure of this._listeners[type]) this.element.node.removeEventListener(type, closure);
      this._listeners[type].length = 0;
    } else {
      if (!this._listeners[type]) return;
      const index = this._listeners[type].indexOf(closure);
      if (index > -1) this._listeners[type].splice(index, 1);
      this.element.node.removeEventListener(type, closure);
    }
  }

  get isRendering () { return this._isRendering; }

  set isRendering (value) {
    if (this._isRendering === value) return;
    if (value) state.renderables.add(this);
    else state.renderables.remove(this);
    this._isRendering = value;
  }

  render () {}

  get isResizing () { return this._isResizing; }

  set isResizing (value) {
    if (this._isResizing === value) return;
    if (value) state.resizables.add(this);
    else state.resizables.remove(this);
    this._isResizing = value;
  }

  resize () {}

  isBreakpoint (id) {
    return BREAKPOINTS[id].test();
  }

  get isScrollLocked () {
    return this._isScrollLocked;
  }

  set isScrollLocked (value) {
    if (this._isScrollLocked === value) return;
    if (value) state.scrollLockers.add(this);
    else state.scrollLockers.remove(this);
    this._isScrollLocked = value;
  }

  examine () {
    if (!this.element.node.matches(this._registration.selector)) this._dispose();
  }

  _dispose () {
    this.unlisten();
    this.scrolling = true;
    this.isRendering = false;
    this.isResizing = false;
    this.isScrollLocked = false;
    this._ascent.dispose();
    this._ascent = null;
    this._descent.dispose();
    this._descent = null;
    this._registration.remove(this);
    this.element.remove(this);
    for (const registration of this._registrations) registration.dispose();
    this._registrations = null;
    this.dispose();
  }

  dispose () {}

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
}

export { Instance };
