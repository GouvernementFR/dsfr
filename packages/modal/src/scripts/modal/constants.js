import api from '../../../api.js';

const MODAL_SELECTOR = api.ns.selector('modal');
const MODAL_CLASS = api.ns('modal');
const NO_SCROLL_CLASS = api.ns('no-scroll');
const SCROLL_SHADOW_CLASS = api.ns('scroll-shadow');
const MODAL_BODY_SELECTOR = api.ns.selector('modal__body');
const OFFSET_MOBILE = 32; // 32px => 8v => 2rem

export { MODAL_SELECTOR, MODAL_CLASS, NO_SCROLL_CLASS, SCROLL_SHADOW_CLASS, MODAL_BODY_SELECTOR, OFFSET_MOBILE };
