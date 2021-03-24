import api from '../../api.js';

export const TABLE_SELECTOR = api.core.ns.selector('table');
// export const TABLE_CLASS = api.core.ns('table');
export const TABLE_SCROLLING_SELECTOR = `${api.core.ns.selector('table')}:not(${api.core.ns.selector('table--no-scroll')})`;
export const LEFT = 'left';
export const RIGHT = 'right';
export const SHADOW_CLASS = api.core.ns('table--shadow');
export const SHADOW_LEFT_CLASS = api.core.ns('table--shadow-left');
export const SHADOW_RIGHT_CLASS = api.core.ns('table--shadow-right');
export const WRAPPER_CLASS = api.core.ns('table__wrapper');
export const CAPTION_BOTTOM_CLASS = api.core.ns('table--caption-bottom');
export const SCROLL_OFFSET = 1; // valeur en px du scroll avant laquelle le shadow s'active ou se desactive
