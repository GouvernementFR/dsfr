import api from '../../../api.js';

const RADIOS_THEME_NAME = `input[name="${api.ns.selector('radios-theme', '')}"]`;
const SWITCH_THEME_ID = api.ns.selector('switch-theme', '#');
const THEME_ATTR = api.ns.attr('theme');

export { RADIOS_THEME_NAME, SWITCH_THEME_ID, THEME_ATTR };
