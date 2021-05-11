import body from './body.js';
import { ns } from '../global/namespace';

const instances = { };
const elements = { };
let count = 0;

const getElementId = (element) => {
  for (const id in elements) if (elements[id] === element) return id;
  count++;
  const id = count;
  elements[id] = element;
  return id;
};

class Instance {
  constructor (element) {
    this.element = element;
    this.id = element.id;
    this._isRendering = false;
    this._isResizing = false;
    this._listeners = {};
    this._ascents = {};
    this._descents = {};
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
      for (const closure of this._listeners[type]) this.element.node.removeEventListener(closure);
      this._listeners[type].length = 0;
    } else {
      if (!this._listeners[type]) return;
      const index = this._listeners[type].indexOf(closure);
      if (index > -1) this._listeners[type].splice(index, 1);
      this.element.node.removeEventListener(closure);
    }
  }

  get isRendering () { return this._isRendering; }

  set isRendering (value) {
    if (this._isRendering === value) return;
    this._isRendering = value;
    // TODO add & remove rendering
  }

  render () {}

  get isResizing () { return this._isResizing; }

  set isResizing (value) {
    if (this._isResizing === value) return;
    this._isResizing = value;
    // TODO add & remove resizing
  }

  resize () {}

  get scrolling () {
    return body.scrolling;
  }

  set scrolling (value) {
    if (value) body.releaseScrolling(this);
    else body.preventScrolling(this);
  }

  _disposal () {
    this.unlisten();
    this.scrolling = true;
    this.dispose();
  }

  dispose () {}

  ascend (type, data) {

  }

  addAscent (type, closure) {
    if (!this._descents)
  }

  removeAscent (type, closure) {

  }

  _ascent (type, data) {
    if (this.ascents[type])
  }

  descend (type, data) {

  }

  addDescent (type, closure) {

  }

  removeDescent (type, closure) {

  }

  _descent (type, data) {

  }

  static getInstances (element, instanceClass) {
    const id = getElementId(element);
    if (!instances[id]) return null;
    else if (!instanceClass) return instances[id];
    else return instances[id].filter((instance) => instance instanceof instanceClass);
  }
}

export { Instance };
