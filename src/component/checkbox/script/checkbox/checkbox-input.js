import api from '../../api.js';
import { CheckboxEvent } from './checkbox-event.js';

class CheckboxInput extends api.core.Instance {
  static get instanceClassName () {
    return 'CheckboxInput';
  }

  init () {
    this.node.addEventListener('change', this.changing.bind(this));
  }

  get isChecked () {
    return this.node.checked;
  }

  changing () {
    this.dispatch(CheckboxEvent.CHANGE, this.isChecked);
  }
}

export { CheckboxInput };
