import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import ID from './id';

class CheckboxActionee extends ComponentActionee {
  constructor () {
    super(null, 1);
    this._data = {};
  }

  static get instanceClassName () {
    return 'CheckboxActionee';
  }

  init () {
    this.detectCheckable();
    this.listenCheckable();
  }

  handleChange () {
    this.detectCheckedOrUnchecked();
    this.act();
  }

  get label () {
    const label = this.node.parentNode.querySelector(api.internals.ns.selector('label'));
    return label.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { CheckboxActionee };
