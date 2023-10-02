import api from '../../api.js';
import { RangeSelector } from './range-selector.js';
import { RangeEmission } from './range-emission.js';

class Range extends api.core.Instance {
  static get instanceClassName () {
    return 'Range';
  }
  // créer ici une instance mère et une instance fille de input 

  init () {
    this.inputA = this.querySelector(RangeSelector.RANGE_INPUT_MIN);
    this.inputB = this.querySelector(RangeSelector.RANGE_INPUT_MAX);
    this.inputs = [this.inputA];
    if (this.inputB) this.inputs.push(this.inputB);

    this.change();
    this.changing = this.change.bind(this);
    for (const input of this.inputs) input.addEventListener('input', this.changing);
    // this.addAscent(RangeEmission.VALUE, this.setValue.bind(this));
    // this.addAscent(RangeEmission.VALUE_B, this.setValueB.bind(this));
  }

  change () {
    this.min = this.inputA.min || 0; // browser remove min value if it's 0
    this.max = this.inputA.max;
    this.step = this.inputA.step;
    this.valueA = this.inputA.value;
    if (this.inputB) this.valueB = this.inputB.value;

    this.style.setProperty('--min', this.min);
    this.style.setProperty('--max', this.max);
    this.style.setProperty('--step', this.step);
    if (this.inputB) {
      // if (this.valueB < this.valueA) {
      //   this.inputB.value = this.valueA;
      //   this.change();
      // }
      this.style.setProperty('--value-a', this.valueA);
      this.style.setProperty('--text-value-a', JSON.stringify(this.valueA));
      this.style.setProperty('--value-b', this.valueB);
      this.style.setProperty('--text-value-b', JSON.stringify(this.valueB));
    } else {
      this.style.setProperty('--value', this.valueA);
      this.style.setProperty('--text-value', JSON.stringify(this.valueA));
    }
  }

  dispose () {
    for (const input of this.inputs) input.removeEventListener('input', this.changing);
  }
}

export { Range };
