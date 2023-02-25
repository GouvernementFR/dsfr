import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import { FormSelector } from '../form/form-selector';
import ID from './id';

class RadioActionee extends ComponentActionee {
  constructor () {
    super(Type.CHECK, 1);
    this._data = {};
  }

  static get instanceClassName () {
    return 'RadioActionee';
  }

  init () {
    this.listenCheckable();
  }

  get label () {
    const parts = [];
    const fieldset = this.node.closest(FormSelector.FIELDSET);
    if (fieldset) {
      const legend = fieldset.querySelector(FormSelector.LEGEND);
      if (legend) parts.push(legend.textContent.trim());
    }
    const label = this.node.parentNode.querySelector(api.internals.ns.selector('label'));
    if (label) parts.push(label.textContent.trim())
    return parts.join(' ＞ ');
  }

  get component () {
    return ID;
  }
}

export { RadioActionee };
