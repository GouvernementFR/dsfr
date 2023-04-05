import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import { FormSelector } from '../form/form-selector';
import ID from './id';

class RadioActionee extends ComponentActionee {
  constructor () {
    super(1, true);
    this._data = {};
  }

  static get instanceClassName () {
    return 'RadioActionee';
  }

  init () {
    this.setCheckType();
    this.listenCheckable();
  }

  get label () {
    const parts = [];
    const fieldset = this.node.closest(FormSelector.FIELDSET);
    if (fieldset) {
      const legend = fieldset.querySelector(FormSelector.LEGEND);
      if (legend) parts.push(this.getFirstText(legend));
    }
    const label = this.node.parentNode.querySelector(api.internals.ns.selector('label'));
    if (label) parts.push(this.getFirstText(label));
    return parts.join(' › ');
  }

  get component () {
    return ID;
  }
}

export { RadioActionee };
