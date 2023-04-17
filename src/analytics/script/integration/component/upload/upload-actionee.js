import { ComponentActionee } from '../component-actionee';
import api from '../../../../api.js';
import ID from './id';

class UploadActionee extends ComponentActionee {
  constructor () {
    super(1, true);
  }

  static get instanceClassName () {
    return 'UploadActionee';
  }

  init () {
    this.setClickType();
    this._label = this.node.parentNode.querySelector(api.internals.ns.selector('label'));
    this.listenClick();
  }

  get label () {
    if (this._label) {
      const text = this.getFirstText(this._label);
      if (text) return text;
    }

    return null;
  }

  getData () {
    return { component_value: this.node.value.trim() };
  }

  get component () {
    return ID;
  }
}

export { UploadActionee };
