import api from '../../../../api';

export const SidemenuSelector = {
  SIDEMENU: api.internals.ns.selector('sidemenu'),
  ITEM: api.internals.ns.selector('sidemenu__item'),
  LINK: api.internals.ns.selector('sidemenu__link'),
  BUTTON: api.internals.ns.selector('sidemenu__btn'),
  TITLE: api.internals.ns.selector('sidemenu__title')
};
