import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import ID from './id';

class RadioActionee extends ComponentActionee {
  constructor () {
    super(null, 1);
    this._data = {};
  }

  static get instanceClassName () {
    return 'RadioActionee';
  }

  init () {
    this.detectCheckable();
    this.listenCheckable();
  }

  get label () {
    const label = this.node.parentNode.querySelector(api.internals.ns.selector('label'));
    return label.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { RadioActionee };
