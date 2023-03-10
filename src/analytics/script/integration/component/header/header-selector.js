import api from '../../../../api.js';

export const HeaderSelector = {
  TOOLS_BUTTON: `${api.internals.ns.selector('header__tools-links')} ${api.internals.ns.selector('btns-group')} ${api.internals.ns.selector('btn')}`,
  MENU_BUTTON: `${api.internals.ns.selector('header__menu-links')} ${api.internals.ns.selector('btns-group')} ${api.internals.ns.selector('btn')}`
};
