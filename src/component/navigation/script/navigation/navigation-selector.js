import api from '../../api.js';

const ITEM = api.internals.ns.selector('nav__item');
const COLLAPSE = api.internals.ns.selector('collapse');

export const NavigationSelector = {
  NAVIGATION: api.internals.ns.selector('nav'),
  COLLAPSE: `${ITEM} > ${COLLAPSE}, ${ITEM} > *:not(${ITEM}, ${COLLAPSE}) > ${COLLAPSE}, ${ITEM} > *:not(${ITEM}, ${COLLAPSE}) > *:not(${ITEM}, ${COLLAPSE}) > ${COLLAPSE}`,
  ITEM: ITEM,
  ITEM_RIGHT: `${ITEM}--right`,
  MENU: api.internals.ns.selector('menu')
};
