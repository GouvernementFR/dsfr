import ref from '../../../ref.js';

export const HeaderSelector = {
  HEADER: ref.internals.ns.selector('header'),
  TOOLS_LINKS: ref.internals.ns.selector('header__tools-links'),
  MENU_LINKS: ref.internals.ns.selector('header__menu-links'),
  BUTTONS: `${ref.internals.ns.selector('header__tools-links')} ${ref.internals.ns.selector('btns-group')}, ${ref.internals.ns.selector('header__tools-links')} ${ref.internals.ns.selector('links-group')}`,
  MODALS: `${ref.internals.ns.selector('header__search')}${ref.internals.ns.selector('modal')}, ${ref.internals.ns.selector('header__menu')}${ref.internals.ns.selector('modal')}`
};
