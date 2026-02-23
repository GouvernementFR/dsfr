import api from '../../../../api.js';

export const HeaderSelector = {
  HEADER: `${api.header.HeaderSelector.HEADER}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  MODALS: `${api.header.HeaderSelector.MODALS}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  TOOLS_BUTTON: `${api.internals.ns.selector('header__tools-links')} ${api.internals.ns.selector('btns-group')} ${api.internals.ns.selector('btn')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  MENU_BUTTON: `${api.internals.ns.selector('header__menu-links')} ${api.internals.ns.selector('btns-group')} ${api.internals.ns.selector('btn')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
