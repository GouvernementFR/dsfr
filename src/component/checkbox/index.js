import api from './api.js';
import { CheckboxSelector } from './script/checkbox/checkbox-selector';
import { CheckboxEmission } from './script/checkbox/checkbox-emission.js';
import { CheckboxInput } from './script/checkbox/checkbox-input.js';

api.checkbox = {
  CheckboxSelector: CheckboxSelector,
  CheckboxEmission: CheckboxEmission,
  CheckboxInput: CheckboxInput
};

export default api;
