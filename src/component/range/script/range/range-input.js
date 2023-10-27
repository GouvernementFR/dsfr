import api from '../../api.js';
import { RangeSelector } from './range-selector.js';
import { RangeEmission } from './range-emission.js';
import { RangeConstraints } from './range-constraints';

class RangeInput extends api.core.Instance {
  static get instanceClassName () {
    return 'RangeInput';
  }

  init () {
    this._init();
    this.addDescent(RangeEmission.BACKGROUND, this.setBackgroundImage.bind(this));
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

  setBackgroundImage (backgroundImage) {
    this.node.style.backgroundImage = backgroundImage[0];
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
