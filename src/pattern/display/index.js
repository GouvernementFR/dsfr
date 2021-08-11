import api from './api.js';
import { Display } from './script/display/display.js';
import { DisplaySelectors } from './script/display/display-selectors.js';

api.display = {
  Display: Display,
  DisplaySelectors: DisplaySelectors
};

export default api;
