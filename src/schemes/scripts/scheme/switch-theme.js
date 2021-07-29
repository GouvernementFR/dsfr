import api from '../../api.js';
import { SchemeEmissions } from './scheme-emissions.js';
import { SchemeSelectors } from './scheme-selectors.js';
import { Schemes } from './schemes.js';

class SwitchTheme extends api.core.Instance {
  init () {
    this.addDescent(SchemeEmissions.SCHEME, this.apply.bind(this));
    this.radios = this.querySelectorAll(SchemeSelectors.RADIO_BUTTONS);
    this.changing = this.change.bind(this);
    for (const radio of this.radios) radio.addEventListener('change', this.changing);
    this.ascend(SchemeEmissions.ASK);
  }

  get scheme () {
    return this._scheme;
  }

  set scheme (value) {
    if (this._scheme === value) return;
    switch (value) {
      case Schemes.SYSTEM:
      case Schemes.LIGHT:
      case Schemes.DARK:
        this._scheme = value;
        for (const radio of this.radios) {
          radio.checked = radio.value === value;
        }
        this.ascend(SchemeEmissions.SCHEME, value);
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

export { SwitchTheme };
