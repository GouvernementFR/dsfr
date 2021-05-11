


class Element {
  constructor (node) {
    this.node = node;
    this.instances = [];
    this._children = [];
    this._parent = null;
  }

  create () {

  }

  get parent () {
    return this._parent;
  }

  get children () {
    return this._children;
  }

  ascend (type, data) {
    if (this._parent) this._parent._ascend(type, data);
  }

  _ascend (type, data) {
    for (const instance of this.instances) instance._ascent(type, data);
    if (this._parent) this._parent._ascend(data);
  }

  descend (data) {
    for (const child)

  }

  _descend (data) {

  }

}

const getElement = (element) => {

};

const getElements = (selector) => {

};

export { getElement };
