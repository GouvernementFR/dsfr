import api from '../../api.js';

class ToggleInput extends api.core.Instance {
  static get instanceClassName () {
    return 'ToggleInput';
  }

  get isChecked () {
    return this.getAttribute('checked');
  }
}

export { ToggleInput };
