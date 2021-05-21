import state from '../state';
import inspector from '../../inspect/inspector.js';

let count = 0;

class Element {
  constructor (node, id) {
    if (!id) {
      count++;
      this.id = count;
    } else this.id = id;
    this.node = node;
    this.instances = [];
    this._children = [];
    this._parent = null;
    state.elements.add(this);
  }

  get html () {
    const end = this.node.outerHTML.indexOf('>');
    return this.node.outerHTML.substring(0, end + 1);
  }

  create (registration) {
    if (this.hasInstance(registration.InstanceClass)) {
      inspector.warn(`instance of ${registration.InstanceClass.constructor.name} already exists on element [${this.id}]`);
      return;
    }
    const instance = new registration.InstanceClass();
    this.instances.push(instance);
    instance._config(this, registration);
    return instance;
  }

  get parent () {
    return this._parent;
  }

  get children () {
    return this._children;
  }

  addChild (child, index) {
    if (this._children.indexOf(child) > -1) return null;
    child._parent = this;
    if (!isNaN(index) && index > -1 && index < this._children.length) this._children.splice(index, 0, child);
    else this._children.push(child);
    return child;
  }

  removeChild (child) {
    const index = this._children.indexOf(child);
    if (index === -1) return null;
    child._parent = null;
    this._children.splice(index, 1);
  }

  ascend (type, data) {
    if (this._parent) this._parent._ascend(type, data);
  }

  _ascend (type, data) {
    for (const instance of this.instances) instance._ascent.emit(type, data);
    if (this._parent) this._parent._ascend(data);
  }

  descend (type, data) {
    for (const child of this._children) child._descend(type, data);
  }

  _descend (type, data) {
    for (const instance of this.instances) instance._descent.emit(type, data);
    for (const child of this._children) child._descend(type, data);
  }

  getDescendantInstances (InstanceClass, stopAtInstanceClass) {
    const instances = [];
    for (const child of this._children) {
      if (stopAtInstanceClass && child.hasInstance(stopAtInstanceClass)) continue;
      const instance = child.getInstance(InstanceClass);
      if (instance) instances.push(instance);
      instances.push.apply(instances, child.getDescendantInstances(InstanceClass, stopAtInstanceClass));
    }
    return instances;
  }

  getInstance (InstanceClass) {
    for (const instance of this.instances) if (instance instanceof InstanceClass) return instance;
    return null;
  }

  hasInstance (InstanceClass) {
    for (const instance of this.instances) if (instance instanceof InstanceClass) return true;
    return false;
  }

  getAscendantInstance (InstanceClass) {
    if (!this._parent) return null;
    const instance = this._parent.getInstance(InstanceClass);
    if (instance) return instance;
    return this._parent.getAscendantInstance(InstanceClass);
  }

  remove (instance) {
    const index = this.instances.indexOf(instance);
    if (index > -1) this.instances.splice(index, 1);
  }

  dispose () {
    for (const instance of this.instances) instance._dispose();
    this.instances.length = 0;
    state.elements.remove(this);
    this.parent.removeChild(this);
    this._children.length = 0;
    inspector.debug(`remove element [${this.id}] ${this.html}`);
  }

  examine () {
    for (let i = this.instances.length - 1; i > -1; i--) this.instances[i].examine();
  }
}

const root = new Element(document.documentElement, 'root');

inspector.setRoot(root);

const put = (element, branch) => {
  let index = 0;
  for (let i = branch.children.length - 1; i > -1; i--) {
    const child = branch.children[i];
    const position = element.node.compareDocumentPosition(child.node);
    if (position & Node.DOCUMENT_POSITION_CONTAINS) {
      put(element, child);
      return;
    } else if (position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      branch.removeChild(child);
      element.addChild(child);
    } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      index = i + 1;
      break;
    }
  }

  branch.addChild(element, index);
};

const hasElement = (node) => {
  for (const element of state.elements.collection) if (element.node === node) return true;
  return false;
};

const getElement = (node) => {
  for (const element of state.elements.collection) if (element.node === node) return element;
  const element = new Element(node);
  state.elements.add(element);
  put(element, root);
  inspector.debug(`add element [${element.id}] ${element.html}`);
  return element;
};

export { hasElement, getElement, root };
