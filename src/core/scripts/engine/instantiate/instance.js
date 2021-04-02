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
  constructor (element, isResizing, isRendering) {
    const id = getElementId(element);
    if (!instances[id]) instances[id] = [];
    instances[id].push(this);
    this.element = element;
    this.id = element.id;
    this._isRendering = false;
    this._isResizing = false;
    this.listeners = {};

    this.isResizing = isResizing;
    this.isRendering = isRendering;
  }

  dispatch (type, data) {
    const event = new CustomEvent(type, data);
    this.element.dispatchEvent(event);
  }

  listen (type, closure) {
    if (!this.listeners[type]) this.listeners[type] = [];
    if (this.listeners[type].indexOf(closure) > -1) return;
    this.listeners[type].push(closure);
    this.element.addEventListener(type, closure);
  }

  unlisten (type, closure) {
    if (!type) {
      for (const type in this.listeners) this.unlisten(type);
    } else if (!closure) {
      if (!this.listeners[type]) return;
      for (const closure of this.listeners[type]) this.element.removeEventListener(closure);
      this.listeners[type].length = 0;
    } else {
      if (!this.listeners[type]) return;
      const index = this.listeners[type].indexOf(closure);
      if (index > -1) this.listeners[type].splice(index, 1);
      this.element.removeEventListener(closure);
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

  destroy () {}

  static getInstances (element, instanceClass) {
    const id = getElementId(element);
    if (!instances[id]) return null;
    else if (!instanceClass) return instances[id];
    else return instances[id].filter((instance) => instance instanceof instanceClass);
  }
}

export { Instance };
