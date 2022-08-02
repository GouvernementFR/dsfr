import ref from '../../../ref.js';

export const SidemenuSelector = {
  LIST: ref.internals.ns.selector('sidemenu__list'),
  COLLAPSE: `${ref.internals.ns.selector('sidemenu__item')} > ${ref.internals.ns.selector('collapse')}`
};
