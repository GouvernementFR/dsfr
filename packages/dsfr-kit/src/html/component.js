import { ComponentModel } from '../model/';

class Component {
  constructor (model = new ComponentModel('')) {
    this._model = model;
  }

  get model () {
    return this._model;
  }

  get props () {
    return this._model.props;
  }

  get attributes () {
    const keys = Object.keys(this.props.attributes);
    if (keys.length === 0) return '';
    return keys.map(key => `${key}="${this.props.attributes[key]}"`).join(' ');
  }

  get html () {
    return '';
  }
}

export { Component };
