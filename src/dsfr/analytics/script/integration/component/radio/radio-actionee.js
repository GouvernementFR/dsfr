import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import { FormSelector } from '../form/form-selector';
import ID from './id';

class RadioActionee extends ComponentActionee {
  constructor () {
    super(1);
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
      if (legend) {
        const firstTextLegend = this.getFirstText(legend);
        if (firstTextLegend) parts.push(firstTextLegend);
      }
    }
    const label = this.node.parentNode.querySelector(api.internals.ns.selector('label'));
    if (label) {
      const firstTextLabel = this.getFirstText(label);
      if (firstTextLabel) parts.push(firstTextLabel);
    }
    return parts.join(' › ');
  }

  get component () {
    return ID;
  }
}

export { RadioActionee };
