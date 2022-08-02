import ref from '../../../ref.js';

export const SchemeSelector = {
  SCHEME: `:root${ref.internals.ns.attr.selector('theme')}, :root${ref.internals.ns.attr.selector('scheme')}`,
  SWITCH_THEME: ref.internals.ns.selector('switch-theme'),
  RADIO_BUTTONS: `input[name="${ref.internals.ns('radios-theme')}"]`
};
