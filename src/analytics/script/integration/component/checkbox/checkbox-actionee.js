import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import ID from './id';

class CheckboxActionee extends ComponentActionee {
  constructor () {
    super(1, true);
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
    return this.getFirstText(label);
  }

  get component () {
    return ID;
  }
}

export { CheckboxActionee };
