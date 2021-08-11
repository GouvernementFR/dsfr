import api from '../../api.js';

export const SidemenuSelector = {
  LIST: api.ns.selector('sidemenu__list'),
  COLLAPSE: `${api.ns.selector('sidemenu__item')} > ${api.ns.selector('collapse')}`
};
