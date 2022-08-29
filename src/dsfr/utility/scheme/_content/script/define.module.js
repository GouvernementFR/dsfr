import ref from '../../ref.js';
import { Scheme } from './scheme/scheme.js';
import { SchemeValue } from './scheme/scheme-value.js';
import { SchemeSelector } from './scheme/scheme-selector.js';
import { SchemeEmission } from './scheme/scheme-emission.js';
import { SchemeTheme } from './scheme/scheme-theme.js';

ref.scheme = {
  Scheme: Scheme,
  SchemeValue: SchemeValue,
  SchemeSelector: SchemeSelector,
  SchemeEmission: SchemeEmission,
  SchemeTheme: SchemeTheme
};

export default ref;
