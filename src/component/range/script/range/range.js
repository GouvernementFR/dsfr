import api from '../../api.js';
// import { RangeSelector } from './range-selector.js';
import { RangeEmission } from './range-emission.js';
import { RangeSelector } from './range-selector.js';

class Range extends api.core.Instance {
  static get instanceClassName () {
    return 'Range';
  }

  init () {
    this.output = this.node.querySelector(RangeSelector.RANGE_OUTPUT);
    this.addAscent(RangeEmission.VALUE, this.setValue.bind(this));
    this.addAscent(RangeEmission.VALUE_MAX, this.setValueMax.bind(this));
    this.addAscent(RangeEmission.MIN, this.setMin.bind(this));
    this.addAscent(RangeEmission.MAX, this.setMax.bind(this));
    this.addAscent(RangeEmission.STEP, this.setStep.bind(this));
    if (this.getAttribute(RangeSelector.RANGE_PREFIX)) this.setPrefix(this.getAttribute(RangeSelector.RANGE_PREFIX));
    if (this.getAttribute(RangeSelector.RANGE_SUFFIX)) this.setSuffix(this.getAttribute(RangeSelector.RANGE_SUFFIX));
  }

  setValue (value) {
    this._value = value;
    this.style.setProperty('--value', this._value);
    this.style.setProperty('--text-value', `"${this._value}"`);
    this.setOutputValue();
  }

  setValueMax (value) {
    this.valueMax = value;
    this.style.setProperty('--value-b', this.valueMax);
    this.style.setProperty('--text-value-b', `"${this._value}"`);
    this.setOutputValue();
  }

  setOutputValue () {
    if (!this.output) return;
    this.output.innerText = `${this.prefix || ''}${this._value}${this.suffix || ''}${this.valueMax ? ` - ${this.prefix || ''}${this.valueMax}${this.suffix || ''}` : ''}`;
  }

  setMin (value) {
    this.min = value || 0; // browser remove min value if it's 0
    this.style.setProperty('--min', this.min);
    this.style.setProperty('--text-min', `"${this.min}"`);
    this.descend(RangeEmission.MIN, this.min);
  }

  setMax (value) {
    this.max = value;
    this.style.setProperty('--max', this.max);
    this.style.setProperty('--text-max', `"${this.max}"`);
    this.descend(RangeEmission.MAX, this.max);
  }

  setStep (value) {
    this.step = value;
    this.style.setProperty('--step', this.step);
    this.descend(RangeEmission.STEP, this.step);
  }

  setPrefix (value) {
    this.prefix = value;
    this.style.setProperty('--prefix', `"${this.prefix}"`);
    this.setOutputValue();
  }

  setSuffix (value) {
    this.suffix = value;
    this.style.setProperty('--suffix', `"${this.suffix}"`);
    this.setOutputValue();
  }

  mutate (attributesNames) {
    if (attributesNames.includes(RangeSelector.RANGE_PREFIX)) this.setPrefix(this.getAttribute(RangeSelector.RANGE_PREFIX));
    if (attributesNames.includes(RangeSelector.RANGE_SUFFIX)) this.setSuffix(this.getAttribute(RangeSelector.RANGE_SUFFIX));
  }

  dispose () {
    for (const input of this.inputs) input.removeEventListener('input', this.changing);
  }
}

export { Range };
