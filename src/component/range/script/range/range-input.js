import api from '../../api.js';
import { RangeEmission } from './range-emission.js';
import { RangeConstraints } from './range-constraints';

class RangeInput extends api.core.Instance {
  static get instanceClassName () {
    return 'RangeInput';
  }

  init () {
    this._init();
    this.addDescent(RangeEmission.BACKGROUND, this.setBackground.bind(this));
    this.addDescent(RangeEmission.CLEAR, this.clear.bind(this));
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

  clear () {
    ['background-image', 'background-position', 'background-size'].forEach(property => this.style.removeProperty(property));
  }

  setBackground (background) {
    if (!background) return;
    if (background.image) this.node.style.backgroundImage = background.image;
    if (background.position) this.node.style.backgroundPosition = background.position;
    if (background.size) this.node.style.backgroundSize = background.size;
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
