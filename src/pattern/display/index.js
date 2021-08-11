import api from './api.js';
import { Display } from './scripts/display/display.js';
import { DisplaySelectors } from './scripts/display/display-selectors.js';

api.display = {
  Display: Display,
  DisplaySelectors: DisplaySelectors
};

export default api;
