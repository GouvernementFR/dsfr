import api from '../ref.js';
import { Display } from './display/display.js';
import { DisplaySelector } from './display/display-selector.js';

api.display = {
  Display: Display,
  DisplaySelector: DisplaySelector
};

export default api;
