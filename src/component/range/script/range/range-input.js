import api from '../../api.js';
import { RangeSelector } from './range-selector.js';
import { RangeEmission } from './range-emission.js';

class RangeInput extends api.core.Instance {
  static get instanceClassName () {
    return 'RangeInputMin';
  }

  init () {
    this._isInputMax = this.node.matches(RangeSelector.RANGE_INPUT_MAX);

    if (this._isInputMax) {
      this.addDescent(RangeEmission.MIN, this.setMin.bind(this));
      this.addDescent(RangeEmission.MAX, this.setMax.bind(this));
      this.addDescent(RangeEmission.STEP, this.setStep.bind(this));
    } else {
      this.request(() => {
        this.ascend(RangeEmission.MIN, this.node.min);
        this.ascend(RangeEmission.MAX, this.node.max);
        this.ascend(RangeEmission.STEP, this.node.step);
      });
    }

    this.addDescent(RangeEmission.SVG, this.setSVG.bind(this));
    this.changing = this.change.bind(this);
    this.node.addEventListener('input', this.changing);
    this.change();
  }

  change () {
    if (!this._isInputMax) {
      this.ascend(RangeEmission.VALUE, this.node.value);
    } else {
      this.ascend(RangeEmission.VALUE_MAX, this.node.value);
    }
  }

  setSVG (svg) {
    this.node.style.backgroundImage = `url("${svg}")`;
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
    this.ascend(RangeEmission.DISABLED, this.node.disabled);
    if (attributesNames.includes('min')) this.ascend(RangeEmission.MIN, this.node.min);
    if (attributesNames.includes('max')) this.ascend(RangeEmission.MAX, this.node.max);
    if (attributesNames.includes('step')) this.ascend(RangeEmission.STEP, this.node.step);
  }

  dispose () {
    this.removeEventListener('input', this.changing);
  }
}

export { RangeInput };
