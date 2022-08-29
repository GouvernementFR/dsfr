import api from '../ref.js';
import { ToggleStatusLabel } from './toggle/toggle-status-label.js';
import { ToggleSelector } from './toggle/toggle-selector.js';
// import { ToggleInput } from './toggle/toggle-input.js';

api.toggle = {
  ToggleStatusLabel: ToggleStatusLabel,
  ToggleSelector: ToggleSelector
};

export default api;
