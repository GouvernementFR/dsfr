import api from '../../../../api';

export const SidemenuSelector = {
  SIDEMENU: `${api.internals.ns.selector('sidemenu')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  ITEM: api.internals.ns.selector('sidemenu__item'),
  LINK: `${api.internals.ns.selector('sidemenu__link')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  BUTTON: api.internals.ns.selector('sidemenu__btn'),
  TITLE: api.internals.ns.selector('sidemenu__title'),
  COLLAPSE: `${api.sidemenu.SidemenuSelector.COLLAPSE}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
