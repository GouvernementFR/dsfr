import { supportLocalStorage } from '../../../core/script/api/utilities/support/browser-support';
import { SchemeValue } from './scheme-value';
import { SchemeTheme } from './scheme-theme';

const ATTRIBUTE_THEME = 'data-fr-theme';
const ATTRIBUTE_SCHEME = 'data-fr-scheme';
const SELECTOR_SCHEME = `:root[${ATTRIBUTE_THEME}], :root[${ATTRIBUTE_SCHEME}]`;

const setDarkTheme = () => {
  document.documentElement.setAttribute(ATTRIBUTE_THEME, SchemeTheme.DARK);
  document.documentElement.style.colorScheme = 'dark';
};

const checkPreferences = () => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  if (mediaQuery.matches) setDarkTheme();
};

const bootScheme = () => {
  if (document.documentElement.matches(SELECTOR_SCHEME)) {
    const scheme = supportLocalStorage() ? localStorage.getItem('scheme') : '';

    const schemeAttr = document.documentElement.getAttribute(ATTRIBUTE_SCHEME);

    switch (true) {
      case scheme === SchemeValue.DARK:
        setDarkTheme();
        break;

      case scheme === SchemeValue.SYSTEM:
        checkPreferences();
        break;

      case schemeAttr === SchemeValue.DARK:
        setDarkTheme();
        break;

      case schemeAttr === SchemeValue.SYSTEM:
        checkPreferences();
        break;
    }
  }
};

export { bootScheme };
