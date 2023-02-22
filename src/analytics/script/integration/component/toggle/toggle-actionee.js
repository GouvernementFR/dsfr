import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import ID from './id';

class ToggleActionee extends ComponentActionee {
  constructor () {
    super(null, 1);
    this._data = {};
  }

  static get instanceClassName () {
    return 'ToggleActionee';
  }

  init () {
    this.detectCheckedOrUnchecked();
    this.listen('change', this.handleChange.bind(this));
  }

  handleChange () {
    this.detectCheckedOrUnchecked();
    this.act();
  }

  get label () {
    const label = this.node.parentNode.querySelector(api.internals.ns.selector('toggle__label'));
    return label.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { ToggleActionee };
