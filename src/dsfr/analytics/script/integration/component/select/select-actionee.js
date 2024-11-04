import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import ID from './id';

class SelectActionee extends ComponentActionee {
  constructor () {
    super(1);
    this._data = {};
  }

  static get instanceClassName () {
    return 'SelectActionee';
  }

  init () {
    this.setChangeType();
    this.listenChange();
  }

  setChangeValue (e) {
    if (!e.target || !e.target.selectedOptions) return;
    const value = Array.from(e.target.selectedOptions).map(option => option.text).join(' - ');
    if (value) this.value = value;
  }

  get label () {
    const label = this.node.parentNode.querySelector(api.internals.ns.selector('label'));
    if (label) {
      const firstText = this.getFirstText(label);
      if (firstText) return firstText;
    }

    return 'liste déroulante';
  }

  get component () {
    return ID;
  }
}

export { SelectActionee };
