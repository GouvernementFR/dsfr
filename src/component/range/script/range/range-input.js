import api from '../../api.js';
import { RangeSelector } from './range-selector.js';

class RangeInputMin extends api.core.Instance {
  constructor () {
    super();
    this._isInputMax = this.querySelector(RangeSelector.RANGE_INPUT_MAX) !== null;
  }

  static get instanceClassName () {
    return 'RangeInputMin';
  }

  init () {
    this.changing = this.change.bind(this);
    this.addEventListener('change', this.changing);
  }

  change () {
    this.ascend(api.range.RangeEmission.VALUE, this.value);
  }

  dispose () {
    this.removeEventListener('change', this.changing);
  }
}

export { RangeInputMin };
