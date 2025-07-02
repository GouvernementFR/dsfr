import api from '../../api.js';

export const AccessSelector = {
  ACCESS: api.internals.ns.selector('access'),
  BRAND_LINK: api.internals.ns.selector('access__brand a'),
  TOOLS_LINKS: api.internals.ns.selector('access__tools-links'),
  MENU_LINKS: api.internals.ns.selector('access__menu-links'),
  BUTTONS: `${api.internals.ns.selector('access__tools-links')} ${api.internals.ns.selector('btns-group')}, ${api.internals.ns.selector('access__tools-links')} ${api.internals.ns.selector('links-group')}`,
  MODALS: `${api.internals.ns.selector('access__search')}${api.internals.ns.selector('modal')}, ${api.internals.ns.selector('access__menu')}${api.internals.ns.selector('modal')}`
};
