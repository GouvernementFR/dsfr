import api from '../../../api';
import { RangeEmission } from './range-emission.js';
import { RangeSelector } from './range-selector.js';

class RangeLimit extends api.core.Instance {
  static get instanceClassName () {
    return 'RangeLimit';
  }

  init () {
    switch (true) {
      case this.matches(RangeSelector.RANGE_MIN):
        this.addDescent(RangeEmission.MIN, this.change.bind(this));
        break;

      case this.matches(RangeSelector.RANGE_MAX):
        this.addDescent(RangeEmission.MAX, this.change.bind(this));
        break;
    }
  }

  change (text) {
    this.node.innerText = text;
  }
}

export { RangeLimit };
