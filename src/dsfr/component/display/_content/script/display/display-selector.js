import ref from '../../../ref.js';

export const DisplaySelector = {
  DISPLAY: ref.internals.ns.selector('display'),
  RADIO_BUTTONS: `input[name="${ref.internals.ns('radios-theme')}"]`,
  FIELDSET: ref.internals.ns.selector('fieldset')
};
