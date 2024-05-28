import api from './api.js';
import { CheckboxSelector } from './script/checkbox/checkbox-selector';
import { CheckboxEvent } from './script/checkbox/checkbox-event.js';
import { CheckboxInput } from './script/checkbox/checkbox-input.js';

api.checkbox = {
  CheckboxSelector: CheckboxSelector,
  CheckboxEvent: CheckboxEvent,
  CheckboxInput: CheckboxInput
};

export default api;
