import api from '../../api.js';
import { Schemes } from './schemes';
import { SchemeAttributes } from './scheme-attributes';
import { SchemeThemes } from './scheme-themes';
import { SchemeEmissions } from './scheme-emissions';

class Scheme extends api.core.Instance {
  constructor () {
    super(false);
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
      case Schemes.DARK:
      case Schemes.LIGHT:
      case Schemes.SYSTEM:
        this.scheme = scheme;
        break;

      default:
        switch (schemeAttr) {
          case Schemes.DARK:
            this.scheme = Schemes.DARK;
            break;

          case Schemes.LIGHT:
            this.scheme = Schemes.LIGHT;
            break;

          default:
            this.scheme = Schemes.SYSTEM;
        }
    }

    this.addAscent(SchemeEmissions.ASK, this.ask.bind(this));
    this.addAscent(SchemeEmissions.SCHEME, this.apply.bind(this));
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
    switch (value) {
      case Schemes.SYSTEM:
        this.listenPreferences();
        break;

      case Schemes.DARK:
        this.unlistenPreferences();
        this.theme = SchemeThemes.DARK;
        break;

      case Schemes.LIGHT:
        this.unlistenPreferences();
        this.theme = SchemeThemes.LIGHT;
        break;

      default:
        this.scheme = Schemes.SYSTEM;
    }

    this._scheme = value;
    this.setAttribute(SchemeAttributes.SCHEME, value);
    localStorage.setItem('scheme', value);
    this.descend(SchemeEmissions.SCHEME, value);
  }

  get theme () {
    return this._theme;
  }

  set theme (value) {
    if (this._theme === value) return;
    switch (value) {
      case SchemeThemes.LIGHT:
      case SchemeThemes.DARK:
        this._theme = value;
        this.setAttribute(SchemeAttributes.THEME, value);
        this.descend(SchemeEmissions.THEME, value);
        break;

      default:
        this.theme = SchemeThemes.LIGHT;
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
