import api from '../../../api.js';

const TABLE_SELECTOR = api.ns.selector('table');
// const TABLE_CLASS = api.ns('table');
const TABLE_SCROLLING_SELECTOR = `${api.ns.selector('table')}:not(${api.ns.selector('table--no-scroll')})`;
const LEFT = 'left';
const RIGHT = 'right';
const SHADOW_CLASS = api.ns('table--shadow');
const SHADOW_LEFT_CLASS = api.ns('table--shadow-left');
const SHADOW_RIGHT_CLASS = api.ns('table--shadow-right');
const WRAPPER_CLASS = api.ns('table__wrapper');
const CAPTION_BOTTOM_CLASS = ('table--caption-bottom');
const SCROLL_OFFSET = 1; // valeur en px du scroll avant laquelle le shadow s'active ou se desactive

export { TABLE_SELECTOR, TABLE_SCROLLING_SELECTOR, LEFT, RIGHT, SHADOW_CLASS, SHADOW_LEFT_CLASS, SHADOW_RIGHT_CLASS, WRAPPER_CLASS, CAPTION_BOTTOM_CLASS, SCROLL_OFFSET };
