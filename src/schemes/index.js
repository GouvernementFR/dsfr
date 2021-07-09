import api from './api.js';
import { Scheme } from './scripts/scheme/scheme';
import { Schemes } from './scripts/scheme/schemes';
import { SchemeSelectors } from './scripts/scheme/scheme-selectors';
import { SchemeThemes } from './scripts/scheme/scheme-themes';

api.schemes = {
  Scheme: Scheme,
  Schemes: Schemes,
  SchemesSelectors: SchemeSelectors,
  SchemesThemes: SchemeThemes
};

export default api;
