import api from '../../api.js';
import { RangeEmission } from './range-emission.js';
import { RangeConstraints } from './range-constraints';

class RangeInput extends api.core.Instance {
  static get instanceClassName () {
    return 'RangeInput';
  }

  init () {
    this._init();
    this.node.value = this.getAttribute('value');
    this.changing = this.change.bind(this);
    this.node.addEventListener(this.isLegacy ? 'change' : 'input', this.changing);
    if (this.isLegacy) this.addDescent(RangeEmission.ENABLE_POINTER, this._enablePointer.bind(this));
    this.change();
  }

  _init () {
    this._pointerId = 1;
    this.request(() => {
      if (!this.hasAttribute('min')) this.setAttribute('min', 0);
      this.ascend(RangeEmission.CONSTRAINTS, new RangeConstraints(this.node));
      this.ascend(RangeEmission.DISABLED, this.node.disabled);
    });

    this.addDescent(RangeEmission.VALUE2, this.setValue.bind(this));
  }

  _enablePointer (pointerId) {
    const isEnabled = pointerId === this._pointerId;
    if (this._isPointerEnabled === isEnabled) return;
    this._isPointerEnabled = isEnabled;
    if (isEnabled) this.style.removeProperty('pointer-events');
    else this.style.setProperty('pointer-events', 'none');
  }

  setValue (value) {
    if (parseFloat(this.node.value) > value) {
      this.node.value = value;
      this.change();
    }
  }

  change () {
    this.ascend(RangeEmission.VALUE, parseFloat(this.node.value));
  }

  mutate (attributesNames) {
    if (attributesNames.includes('disabled')) this.ascend(RangeEmission.DISABLED, this.node.disabled);
    if (attributesNames.includes('min') || attributesNames.includes('max') || attributesNames.includes('step')) {
      this.ascend(RangeEmission.CONSTRAINTS, new RangeConstraints(this.node));
      this.change();
    }
  }

  dispose () {
    this.removeEventListener('input', this.changing);
  }
}

export { RangeInput };
