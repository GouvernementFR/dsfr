import api from '../../api.js';
import { DisplaySelectors } from './display-selectors.js';

class Display extends api.core.Instance {
  static get instanceClassName () {
    return 'Display';
  }

  init () {
    this.addDescent(api.scheme.SchemeEmissions.SCHEME, this.apply.bind(this));
    this.radios = this.querySelectorAll(DisplaySelectors.RADIO_BUTTONS);
    this.changing = this.change.bind(this);
    for (const radio of this.radios) radio.addEventListener('change', this.changing);
    this.ascend(api.scheme.SchemeEmissions.ASK);
  }

  get scheme () {
    return this._scheme;
  }

  set scheme (value) {
    if (this._scheme === value) return;
    switch (value) {
      case api.scheme.SchemeValues.SYSTEM:
      case api.scheme.SchemeValues.LIGHT:
      case api.scheme.SchemeValues.DARK:
        this._scheme = value;
        for (const radio of this.radios) {
          radio.checked = radio.value === value;
        }
        this.ascend(api.scheme.SchemeEmissions.SCHEME, value);
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
