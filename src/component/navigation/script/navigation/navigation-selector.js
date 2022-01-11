import api from '../../api.js';

export const NavigationSelector = {
  NAVIGATION: api.internals.ns.selector('nav'),
  COLLAPSE: `${api.internals.ns.selector('nav__item')} > ${api.internals.ns.selector('collapse')}`,
  ITEM: api.internals.ns.selector('nav__item'),
  ITEM_RIGHT: api.internals.ns('nav__item--align-right'),
  MENU: api.internals.ns.selector('menu')
};
