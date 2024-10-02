import api from '../../api.js';
import { CheckboxEmission } from './checkbox-emission.js';

class CheckboxInput extends api.core.Instance {
  static get instanceClassName () {
    return 'CheckboxInput';
  }

  constructor () {
    super();
    this._handlingChange = this.handleChange.bind(this);
  }

  init () {
    this.node.addEventListener('change', this._handlingChange);
    this.addDescent(CheckboxEmission.RETRIEVE, this._handlingChange);
    this.handleChange();
  }

  get isChecked () {
    return this.node.checked;
  }

  handleChange () {
    this.ascend(CheckboxEmission.CHANGE, this.node);
  }
}

export { CheckboxInput };
