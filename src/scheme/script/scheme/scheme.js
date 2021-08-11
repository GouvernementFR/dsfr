import api from '../../api.js';
import { SchemeValues } from './scheme-values.js';
import { SchemeAttributes } from './scheme-attributes.js';
import { SchemeThemes } from './scheme-themes.js';
import { SchemeEmissions } from './scheme-emissions.js';

class Scheme extends api.core.Instance {
  constructor () {
    super(false);
  }

  static get instanceClassName () {
    return 'Scheme';
  }

  init () {
    this.changing = this.change.bind(this);

    if (this.hasAttribute(SchemeAttributes.TRANSITION)) {
      this.removeAttribute(SchemeAttributes.TRANSITION);
      this.request(this.restoreTransition.bind(this));
    }

    const scheme = localStorage.getItem('scheme');
    const schemeAttr = this.getAttribute(SchemeAttributes.SCHEME);

    switch (scheme) {
      case SchemeValues.DARK:
      case SchemeValues.LIGHT:
      case SchemeValues.SYSTEM:
        this.scheme = scheme;
        break;

      default:
        switch (schemeAttr) {
          case SchemeValues.DARK:
            this.scheme = SchemeValues.DARK;
            break;

          case SchemeValues.LIGHT:
            this.scheme = SchemeValues.LIGHT;
            break;

          default:
            this.scheme = SchemeValues.SYSTEM;
        }
    }

    this.addAscent(SchemeEmissions.ASK, this.ask.bind(this));
    this.addAscent(SchemeEmissions.SCHEME, this.apply.bind(this));
  }

  get proxy () {
    const scope = this;
    return Object.assign(super.proxy, {
      /*
      get theme () {
        return scope.theme;
      },
      set theme (value) {
        scope.theme = value;
      },
       */
      get scheme () {
        return scope.scheme;
      },
      set scheme (value) {
        scope.scheme = value;
      }
    });
  }

  restoreTransition () {
    this.setAttribute(SchemeAttributes.TRANSITION, '');
  }

  ask () {
    this.descend(SchemeEmissions.SCHEME, this.scheme);
  }

  apply (value) {
    this.scheme = value;
  }

  get scheme () {
    return this._scheme;
  }

  set scheme (value) {
    if (this._scheme === value) return;
    this._scheme = value;
    switch (value) {
      case SchemeValues.SYSTEM:
        this.listenPreferences();
        break;

      case SchemeValues.DARK:
        this.unlistenPreferences();
        this.theme = SchemeThemes.DARK;
        break;

      case SchemeValues.LIGHT:
        this.unlistenPreferences();
        this.theme = SchemeThemes.LIGHT;
        break;

      default:
        this.scheme = SchemeValues.SYSTEM;
    }

    this.descend(SchemeEmissions.SCHEME, value);
    localStorage.setItem('scheme', value);
    this.setAttribute(SchemeAttributes.SCHEME, value);
  }

  get theme () {
    return this._theme;
  }

  set theme (value) {
    if (this._theme === value) return;
    switch (value) {
      case SchemeThemes.LIGHT:
      case SchemeThemes.DARK:
        // if (this._scheme !== Schemes.SYSTEM && this._scheme !== value) return;
        this._theme = value;
        this.setAttribute(SchemeAttributes.THEME, value);
        this.descend(SchemeEmissions.THEME, value);
        break;
    }
  }

  listenPreferences () {
    if (this.isListening) return;
    this.isListening = true;
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.mediaQuery.addEventListener('change', this.changing);
    this.change();
  }

  unlistenPreferences () {
    if (!this.isListening) return;
    this.isListening = false;
    this.mediaQuery.removeEventListener('change', this.changing);
    this.mediaQuery = null;
  }

  change () {
    this.theme = this.mediaQuery.matches ? SchemeThemes.DARK : SchemeThemes.LIGHT;
  }

  mutate (attributeNames) {
    if (attributeNames.indexOf(SchemeAttributes.SCHEME) > -1) this.scheme = this.getAttribute(SchemeAttributes.SCHEME);
    if (attributeNames.indexOf(SchemeAttributes.THEME) > -1) this.theme = this.getAttribute(SchemeAttributes.THEME);
  }

  dispose () {
    this.unlistenPreferences();
  }
}

export { Scheme };
