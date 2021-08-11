import api from './api.js';
import { Scheme } from './script/scheme/scheme.js';
import { SchemeValues } from './script/scheme/scheme-values.js';
import { SchemeSelectors } from './script/scheme/scheme-selectors.js';
import { SchemeEmissions } from './script/scheme/scheme-emissions.js';
import { SchemeThemes } from './script/scheme/scheme-themes.js';

api.scheme = {
  Scheme: Scheme,
  SchemeValues: SchemeValues,
  SchemeSelectors: SchemeSelectors,
  SchemeEmissions: SchemeEmissions,
  SchemeThemes: SchemeThemes
};

export default api;
