import ref from '../../../ref.js';

class ToggleInput extends ref.core.Instance {
  static get instanceClassName () {
    return 'ToggleInput';
  }

  get isChecked () {
    return this.hasAttribute('checked');
  }
}

export { ToggleInput };
