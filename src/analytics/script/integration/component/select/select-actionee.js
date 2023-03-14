import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class SelectActionee extends ComponentActionee {
  constructor () {
    super(Type.CHANGE, 1);
    this._data = {};
  }

  static get instanceClassName () {
    return 'SelectActionee';
  }

  init () {
    this.listenChange();
  }

  get label () {
    const label = this.node.parentNode.querySelector(api.internals.ns.selector('label'));
    return label.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { SelectActionee };
