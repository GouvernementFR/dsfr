const instances = { };

class Instance {
  constructor (element, resizing) {
    if (!instances[element]) instances[element] = [];
    instances[element].push(this);
    this.element = element;
    this.id = element.id;
    this.listeners = {};
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

  resize () {}

  destroy () {}

  static getInstances (element, instanceClass) {
    if (!instances[element]) return null;
    else if (!instanceClass) return instances[element];
    else return instances[element].filter((instance) => instance instanceof instanceClass);
  }
}

export { Instance };
