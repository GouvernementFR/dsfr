import { RangeInput } from './range-input.js';
import { RangeEmission } from './range-emission';

class RangeInput2 extends RangeInput {
  static get instanceClassName () {
    return 'RangeInput2';
  }

  _init () {
    this._pointerId = 2;
    this.addDescent(RangeEmission.CONSTRAINTS, this.setConstraints.bind(this));
    this.addDescent(RangeEmission.VALUE, this.setValue.bind(this));
  }

  setValue (value) {
    if (parseFloat(this.node.value) < value) {
      this.value = value;
    }
  }

  change () {
    this.ascend(RangeEmission.VALUE2, parseFloat(this.node.value));
  }

  setConstraints (constraints) {
    this.node.min = constraints.min;
    this.node.max = constraints.max;
    this.node.step = constraints.step;
    this.change();
  }

  mutate (attributesNames) {}
}

export { RangeInput2 };
