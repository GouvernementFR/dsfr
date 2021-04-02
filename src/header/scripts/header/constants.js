import api from '../../api.js';

export const HEADER_SELECTOR = api.core.ns.selector('header');
export const HEADER_SEARCH_SELECTOR = api.core.ns.selector('header__search');
export const HEADER_MENU_SELECTOR = api.core.ns.selector('header__menu');
export const HEADER_TOOLS_LINKS_SELECTOR = api.core.ns.selector('header__tools-links');
export const HEADER_MENU_LINKS_SELECTOR = api.core.ns.selector('header__menu-links');
export const HEADER_LINKS_GROUP_SELECTOR = `${HEADER_TOOLS_LINKS_SELECTOR} ${api.core.ns.selector('links-group')}`;
