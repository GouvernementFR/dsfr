import api from '../../api.js';

export const DisplaySelector = {
  DISPLAY: api.ns.selector('display'),
  RADIO_BUTTONS: `input[name="${api.ns('radios-theme')}"]`
};
