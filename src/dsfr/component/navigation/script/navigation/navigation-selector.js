import api from '../../api.js';

const ITEM = api.internals.ns.selector('nav__item');
const COLLAPSE = api.internals.ns.selector('collapse');

export const NavigationSelector = {
  NAVIGATION: api.internals.ns.selector('nav'),
  COLLAPSE: `${ITEM} > ${COLLAPSE}, ${ITEM} > *:not(${ITEM}):not(${COLLAPSE}) > ${COLLAPSE}, ${ITEM} > *:not(${ITEM}):not(${COLLAPSE}) > *:not(${ITEM}):not(${COLLAPSE}) > ${COLLAPSE}`,
  COLLAPSE_LEGACY: `${ITEM} ${COLLAPSE}`,
  ITEM: ITEM,
  ITEM_RIGHT: `${ITEM}--align-right`,
  MENU: api.internals.ns.selector('menu'),
  BUTTON: api.internals.ns.selector('nav__btn'),
  TRANSLATE_BUTTON: api.internals.ns.selector('translate__btn')
};
