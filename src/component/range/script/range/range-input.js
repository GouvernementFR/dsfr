import api from '../../api.js';
import { RangeSelector } from './range-selector.js';

class RangeInput extends api.core.Instance {
  static get instanceClassName () {
    return 'RangeInputMin';
  }

  init () {
    this._isInputMax = this.node.matches(RangeSelector.RANGE_INPUT_MAX);

    if (this._isInputMax) {
      this.addDescent(api.range.RangeEmission.MIN, this.setMin.bind(this));
      this.addDescent(api.range.RangeEmission.MAX, this.setMax.bind(this));
      this.addDescent(api.range.RangeEmission.STEP, this.setStep.bind(this));
    } else {
      this.request(() => {
        this.ascend(api.range.RangeEmission.MIN, this.node.min);
        this.ascend(api.range.RangeEmission.MAX, this.node.max);
        this.ascend(api.range.RangeEmission.STEP, this.node.step);
      });
    }

    this.changing = this.change.bind(this);
    this.node.addEventListener('input', this.changing);
    this.change();
  }

  change () {
    if (!this._isInputMax) {
      this.ascend(api.range.RangeEmission.VALUE, this.node.value);
    } else {
      this.ascend(api.range.RangeEmission.VALUE_MAX, this.node.value);
    }
  }

  setMin (value) {
    this.node.min = value;
  }

  setMax (value) {
    this.node.max = value;
  }

  setStep (value) {
    this.node.step = value;
  }

  mutate (attributesNames) {
    if (this._isInputMax) return;
    if (attributesNames.includes('min')) this.ascend(api.range.RangeEmission.MIN, this.node.min);
    if (attributesNames.includes('max')) this.ascend(api.range.RangeEmission.MAX, this.node.max);
    if (attributesNames.includes('step')) this.ascend(api.range.RangeEmission.STEP, this.node.step);
  }

  dispose () {
    this.removeEventListener('input', this.changing);
  }
}

export { RangeInput };
