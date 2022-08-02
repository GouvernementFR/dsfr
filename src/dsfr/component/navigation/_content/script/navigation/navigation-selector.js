import ref from '../../../ref.js';

export const NavigationSelector = {
  NAVIGATION: ref.internals.ns.selector('nav'),
  COLLAPSE: `${ref.internals.ns.selector('nav__item')} > ${ref.internals.ns.selector('collapse')}`,
  ITEM: ref.internals.ns.selector('nav__item'),
  ITEM_RIGHT: ref.internals.ns('nav__item--align-right'),
  MENU: ref.internals.ns.selector('menu')
};
