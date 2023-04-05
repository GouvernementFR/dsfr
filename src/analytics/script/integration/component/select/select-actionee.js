import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import ID from './id';

class SelectActionee extends ComponentActionee {
  constructor () {
    super(1, true);
    this._data = {};
  }

  static get instanceClassName () {
    return 'SelectActionee';
  }

  init () {
    this.setChangeType();
    this.listenChange();
  }

  get label () {
    const label = this.node.parentNode.querySelector(api.internals.ns.selector('label'));
    return this.getFirstText(label);
  }

  get component () {
    return ID;
  }
}

export { SelectActionee };
