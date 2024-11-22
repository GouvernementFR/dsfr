import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import ID from './id';

class CheckboxActionee extends ComponentActionee {
  constructor () {
    super(1);
    this._data = {};
  }

  static get instanceClassName () {
    return 'CheckboxActionee';
  }

  init () {
    this.detectCheckableType();
    this.listenCheckable();
  }

  get label () {
    const label = this.node.parentNode.querySelector(api.internals.ns.selector('label'));
    if (label) {
      const text = this.getFirstText(label);
      if (text) return text;
    }
    return 'case à cocher';
  }

  get component () {
    return ID;
  }
}

export { CheckboxActionee };
