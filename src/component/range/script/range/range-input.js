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
    this.node.addEventListener('input', this.changing);
    this.change();
  }

  _init () {
    this.request(() => {
      if (!this.hasAttribute('min')) this.setAttribute('min', 0);
      this.ascend(RangeEmission.CONSTRAINTS, new RangeConstraints(this.node));
      this.ascend(RangeEmission.DISABLED, this.node.disabled);
    });

    this.addDescent(RangeEmission.VALUE2, this.setValue.bind(this));
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
