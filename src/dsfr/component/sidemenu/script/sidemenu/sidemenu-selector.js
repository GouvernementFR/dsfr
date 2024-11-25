import api from '../../api.js';

const ITEM = api.internals.ns.selector('sidemenu__item');
const COLLAPSE = api.internals.ns.selector('collapse');

export const SidemenuSelector = {
  LIST: api.internals.ns.selector('sidemenu__list'),
  COLLAPSE: `${ITEM} > ${COLLAPSE}, ${ITEM} > *:not(${ITEM}):not(${COLLAPSE}) > ${COLLAPSE}, ${ITEM} > *:not(${ITEM}):not(${COLLAPSE}) > *:not(${ITEM}):not(${COLLAPSE}) > ${COLLAPSE}`,
  COLLAPSE_LEGACY: `${ITEM} ${COLLAPSE}`,
  ITEM: api.internals.ns.selector('sidemenu__item'),
  BUTTON: api.internals.ns.selector('sidemenu__btn')
};
