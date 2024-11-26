import api from '../../api.js';
import { SchemeValue } from './scheme-value.js';
import { SchemeAttribute } from './scheme-attribute.js';
import { SchemeTheme } from './scheme-theme.js';
import { SchemeEmission } from './scheme-emission.js';
import { SchemeEvent } from './scheme-event.js';

class Scheme extends api.core.Instance {
  constructor () {
    super(false);
  }

  static get instanceClassName () {
    return 'Scheme';
  }

  init () {
    this.changing = this.change.bind(this);

    if (this.hasAttribute(SchemeAttribute.TRANSITION)) {
      this.removeAttribute(SchemeAttribute.TRANSITION);
      this.request(this.restoreTransition.bind(this));
    }

    const scheme = api.internals.support.supportLocalStorage() ? localStorage.getItem('scheme') : '';
    const schemeAttr = this.getAttribute(SchemeAttribute.SCHEME);

    switch (scheme) {
      case SchemeValue.DARK:
      case SchemeValue.LIGHT:
      case SchemeValue.SYSTEM:
        this.scheme = scheme;
        break;

      default:
        switch (schemeAttr) {
          case SchemeValue.DARK:
            this.scheme = SchemeValue.DARK;
            break;

          case SchemeValue.LIGHT:
            this.scheme = SchemeValue.LIGHT;
            break;

          default:
            this.scheme = SchemeValue.SYSTEM;
        }
    }

    this.addAscent(SchemeEmission.ASK, this.ask.bind(this));
    this.addAscent(SchemeEmission.SCHEME, this.apply.bind(this));
  }

  get proxy () {
    const scope = this;

    const proxyAccessors = {
      get scheme () {
        return scope.scheme;
      },
      set scheme (value) {
        scope.scheme = value;
      }
    };

    return api.internals.property.completeAssign(super.proxy, proxyAccessors);
  }

  restoreTransition () {
    this.setAttribute(SchemeAttribute.TRANSITION, '');
  }

  ask () {
    this.descend(SchemeEmission.SCHEME, this.scheme);
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
      case SchemeValue.SYSTEM:
        this.listenPreferences();
        break;

      case SchemeValue.DARK:
        this.unlistenPreferences();
        this.theme = SchemeTheme.DARK;
        break;

      case SchemeValue.LIGHT:
        this.unlistenPreferences();
        this.theme = SchemeTheme.LIGHT;
        break;

      default:
        this.scheme = SchemeValue.SYSTEM;
        return;
    }

    this.descend(SchemeEmission.SCHEME, value);
    if (api.internals.support.supportLocalStorage()) {
      localStorage.setItem('scheme', value);
    }
    this.setAttribute(SchemeAttribute.SCHEME, value);
    this.dispatch(SchemeEvent.SCHEME, { scheme: this._scheme }, false);
  }

  get theme () {
    return this._theme;
  }

  set theme (value) {
    if (this._theme === value) return;
    switch (value) {
      case SchemeTheme.LIGHT:
      case SchemeTheme.DARK:
        this._theme = value;
        this.setAttribute(SchemeAttribute.THEME, value);
        this.descend(SchemeEmission.THEME, value);
        this.dispatch(SchemeEvent.THEME, { theme: this._theme }, false);
        document.documentElement.style.colorScheme = value === SchemeTheme.DARK ? 'dark' : '';
        break;
    }
  }

  listenPreferences () {
    if (this.isListening) return;
    this.isListening = true;
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (this.mediaQuery.addEventListener) this.mediaQuery.addEventListener('change', this.changing);
    this.change();
  }

  unlistenPreferences () {
    if (!this.isListening) return;
    this.isListening = false;
    this.mediaQuery.removeEventListener('change', this.changing);
    this.mediaQuery = null;
  }

  change () {
    if (!this.isListening) return;
    this.theme = this.mediaQuery.matches ? SchemeTheme.DARK : SchemeTheme.LIGHT;
  }

  mutate (attributeNames) {
    if (attributeNames.indexOf(SchemeAttribute.SCHEME) > -1) this.scheme = this.getAttribute(SchemeAttribute.SCHEME);
    if (attributeNames.indexOf(SchemeAttribute.THEME) > -1) this.theme = this.getAttribute(SchemeAttribute.THEME);
  }

  dispose () {
    this.unlistenPreferences();
  }
}

export { Scheme };
