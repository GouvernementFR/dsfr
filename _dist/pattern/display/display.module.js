/*! DSFR v1.1.0 | SPDX-License-Identifier: MIT | License-Filename: LICENCE.md | restricted use (see terms and conditions) */

const config = {
  prefix: 'fr',
  namespace: 'dsfr',
  organisation: '@gouvfr',
  version: '1.1.0'
};

const api = window[config.namespace];

const DisplaySelector = {
  DISPLAY: api.ns.selector('display'),
  RADIO_BUTTONS: `input[name="${api.ns('radios-theme')}"]`
};

class Display extends api.core.Instance {
  static get instanceClassName () {
    return 'Display';
  }

  init () {
    this.addDescent(api.scheme.SchemeEmission.SCHEME, this.apply.bind(this));
    this.radios = this.querySelectorAll(DisplaySelector.RADIO_BUTTONS);
    this.changing = this.change.bind(this);
    for (const radio of this.radios) radio.addEventListener('change', this.changing);
    this.ascend(api.scheme.SchemeEmission.ASK);
  }

  get scheme () {
    return this._scheme;
  }

  set scheme (value) {
    if (this._scheme === value) return;
    switch (value) {
      case api.scheme.SchemeValue.SYSTEM:
      case api.scheme.SchemeValue.LIGHT:
      case api.scheme.SchemeValue.DARK:
        this._scheme = value;
        for (const radio of this.radios) {
          radio.checked = radio.value === value;
        }
        this.ascend(api.scheme.SchemeEmission.SCHEME, value);
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

api.display = {
  Display: Display,
  DisplaySelector: DisplaySelector
};

api.register(api.display.DisplaySelector.DISPLAY, api.display.Display);
