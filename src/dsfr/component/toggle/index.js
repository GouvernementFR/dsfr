import api from './api.js';
import { ToggleStatusLabel } from './script/toggle/toggle-status-label.js';
import { ToggleSelector } from './script/toggle/toggle-selector.js';
// import { ToggleInput } from './script/toggle/toggle-input.js';

api.toggle = {
  ToggleStatusLabel: ToggleStatusLabel,
  ToggleSelector: ToggleSelector
};

export default api;
