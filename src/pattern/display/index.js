import api from './api.js';
import { Display } from './script/display/display.js';
import { DisplaySelector } from './script/display/display-selector.js';

api.display = {
  Display: Display,
  DisplaySelector: DisplaySelector
};

export default api;
