import api from '../../api.js';

export const RADIOS_THEME_NAME = `input[name="${api.core.ns.selector('radios-theme', '')}"]`;
export const SWITCH_THEME_ID = api.core.ns.selector('switch-theme', '#');
export const THEME_ATTR = api.core.ns.attr('theme');
