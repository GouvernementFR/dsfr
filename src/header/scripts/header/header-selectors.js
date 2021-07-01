import api from '../../api.js';

export const HeaderSelectors = {
  HEADER: api.ns.selector('header'),
  TOOLS_LINKS: api.ns.selector('header__tools-links'),
  MENU_LINKS: api.ns.selector('header__menu-links'),
  LINKS_GROUP: `${api.ns.selector('header__tools-links')} ${api.core.ns.selector('links-group')}`,
  MODALS: `${api.ns.selector('header__search') + api.ns.selector('modal')}, ${api.ns.selector('header__menu') + api.ns.selector('modal')}`
};
