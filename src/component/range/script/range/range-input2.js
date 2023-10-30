import { RangeInput } from './range-input.js';
import { RangeEmission } from './range-emission';

class RangeInput2 extends RangeInput {
  static get instanceClassName () {
    return 'RangeInput2';
  }

  _init () {
    this.addDescent(RangeEmission.CONSTRAINTS, this.setConstraints.bind(this));
    this.addDescent(RangeEmission.VALUE, this.setValue.bind(this));
  }

  setValue (value) {
    if (parseFloat(this.node.value) < value) {
      this.node.value = value;
      this.change();
    }
  }

  setBackground (background) {
    if (!background) return;
    if (background.position2) this.node.style.backgroundPosition = background.position2;
    if (background.size2) this.node.style.backgroundSize = background.size2;
  }

  change () {
    this.ascend(RangeEmission.VALUE2, parseFloat(this.node.value));
  }

  setConstraints (constraints) {
    this.node.min = constraints.min;
    this.node.max = constraints.max;
    this.node.step = constraints.step;
  }

  mutate (attributesNames) {}
}

export { RangeInput2 };
