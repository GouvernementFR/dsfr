import api from './api.js';
import { Scheme } from './scripts/scheme/scheme.js';
import { SchemeValues } from './scripts/scheme/scheme-values.js';
import { SchemeSelectors } from './scripts/scheme/scheme-selectors.js';
import { SchemeEmissions } from './scripts/scheme/scheme-emissions.js';
import { SchemeThemes } from './scripts/scheme/scheme-themes.js';

api.scheme = {
  Scheme: Scheme,
  SchemeValues: SchemeValues,
  SchemeSelectors: SchemeSelectors,
  SchemeEmissions: SchemeEmissions,
  SchemeThemes: SchemeThemes
};

export default api;
