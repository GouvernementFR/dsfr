import api from '../../api.js';

export const SidemenuSelector = {
  LIST: api.internals.ns.selector('sidemenu__list'),
  COLLAPSE: `${api.internals.ns.selector('sidemenu__item')} > ${api.internals.ns.selector('collapse')}`
};
