import ref from '../../../ref.js';
import { DisplaySelector } from './display-selector.js';

class Display extends ref.core.Instance {
  static get instanceClassName () {
    return 'Display';
  }

  init () {
    this.radios = this.querySelectorAll(DisplaySelector.RADIO_BUTTONS);

    if (ref.scheme) {
      this.changing = this.change.bind(this);
      for (const radio of this.radios) radio.addEventListener('change', this.changing);
      this.addDescent(ref.scheme.SchemeEmission.SCHEME, this.apply.bind(this));
      this.ascend(ref.scheme.SchemeEmission.ASK);
    } else {
      this.querySelector(DisplaySelector.FIELDSET).setAttribute('disabled', '');
    }
  }

  get scheme () {
    return this._scheme;
  }

  set scheme (value) {
    if (this._scheme === value || !ref.scheme) return;
    switch (value) {
      case ref.scheme.SchemeValue.SYSTEM:
      case ref.scheme.SchemeValue.LIGHT:
      case ref.scheme.SchemeValue.DARK:
        this._scheme = value;
        for (const radio of this.radios) {
          radio.checked = radio.value === value;
        }
        this.ascend(ref.scheme.SchemeEmission.SCHEME, value);
        break;
    }
  }

  change () {
    for (const radio of this.radios) {
      if (radio.checked) {
        this.scheme = radio.value;
        return;
      }
    }
  }

  apply (value) {
    this.scheme = value;
  }

  dispose () {
    for (const radio of this.radios) radio.removeEventListener('change', this.changing);
  }
}

export { Display };
