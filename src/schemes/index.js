import api from './api.js';
import { Scheme } from './scripts/scheme/scheme.js';
import { Schemes } from './scripts/scheme/schemes.js';
import { SchemeSelectors } from './scripts/scheme/scheme-selectors.js';
import { SchemeThemes } from './scripts/scheme/scheme-themes.js';
import { SwitchTheme } from './scripts/scheme/switch-theme.js';

api.schemes = {
  Scheme: Scheme,
  Schemes: Schemes,
  SchemesSelectors: SchemeSelectors,
  SchemesThemes: SchemeThemes,
  SwitchTheme: SwitchTheme
};

export default api;
