import api from '../../api.js';

export const HEADER_SELECTOR = api.core.ns.selector('header');
export const HEADER_TOOLS_SELECTOR = api.core.ns.selector('header__tools');
export const HEADER_SEARCH_BAR_SELECTOR = `${HEADER_TOOLS_SELECTOR} ${api.core.ns.selector('search-bar')}`;
export const HEADER_SHORTCUTS_SELECTOR = `${HEADER_TOOLS_SELECTOR} ${api.core.ns.selector('shortcuts')}`;
export const HEADER_NAV_SELECTOR = api.core.ns.selector('nav');
export const HEADER_NAV_LIST_SELECTOR = `${HEADER_NAV_SELECTOR} ${api.core.ns.selector('nav__list')}`;
