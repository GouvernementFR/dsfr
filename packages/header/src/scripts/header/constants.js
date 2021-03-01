import api from '../../../api.js';

const HEADER_SELECTOR = api.ns.selector('header');
const HEADER_TOOLS_SELECTOR = api.ns.selector('header__tools');
const HEADER_SEARCH_BAR_SELECTOR = `${HEADER_TOOLS_SELECTOR} ${api.ns.selector('search-bar')}`;
const HEADER_SHORTCUTS_SELECTOR = `${HEADER_TOOLS_SELECTOR} ${api.ns.selector('shortcuts')}`;
const HEADER_NAV_SELECTOR = api.ns.selector('nav');
const HEADER_NAV_LIST_SELECTOR = `${HEADER_NAV_SELECTOR} ${api.ns.selector('nav__list')}`;

export { HEADER_SELECTOR, HEADER_TOOLS_SELECTOR, HEADER_SEARCH_BAR_SELECTOR, HEADER_SHORTCUTS_SELECTOR, HEADER_NAV_SELECTOR, HEADER_NAV_LIST_SELECTOR };
