import api from '../../api.js';

export const NavigationSelector = {
  NAVIGATION: api.ns.selector('nav'),
  COLLAPSE: `${api.ns.selector('nav__item')} > ${api.ns.selector('collapse')}`,
  ITEM: api.ns.selector('nav__item'),
  ITEM_RIGHT: api.ns('nav__item--align-right'),
  MENU: api.ns.selector('menu')
};
