import api from '../../api.js';

export const TABLE_SELECTOR = api.core.ns.selector('table');
export const TABLE_NOSCROLL_SELECTOR = api.core.ns('table--no-scroll');
export const LEFT = 'left';
export const RIGHT = 'right';
export const SHADOW_CLASS = api.core.ns('table--shadow');
export const SHADOW_LEFT_CLASS = api.core.ns('table--shadow-left');
export const SHADOW_RIGHT_CLASS = api.core.ns('table--shadow-right');
export const SCROLL_OFFSET = 1; // valeur en px du scroll avant laquelle le shadow s'active ou se desactive
