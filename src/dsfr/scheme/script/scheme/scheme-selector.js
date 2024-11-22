import api from '../../api.js';

export const SchemeSelector = {
  SCHEME: `:root${api.internals.ns.attr.selector('theme')}, :root${api.internals.ns.attr.selector('scheme')}`,
  SWITCH_THEME: api.internals.ns.selector('switch-theme'),
  RADIO_BUTTONS: `input[name="${api.internals.ns('radios-theme')}"]`
};
