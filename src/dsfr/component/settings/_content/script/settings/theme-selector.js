import ref from '../../../ref.js';

export const ThemeSelector = {
  THEME: ref.internals.ns.selector('theme'),
  RADIO_BUTTONS: `input[name="${ref.internals.ns('radios-theme')}"]`,
  FIELDSET: ref.internals.ns.selector('fieldset')
};
