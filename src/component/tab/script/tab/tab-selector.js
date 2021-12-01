import api from '../../api.js';

export const TabSelector = {
  TAB: api.ns.selector('tabs__tab'),
  GROUP: api.ns.selector('tabs'),
  PANEL: api.ns.selector('tabs__panel'),
  LIST: api.ns.selector('tabs__list'),
  SHADOW: api.ns.selector('tabs__shadow'),
  SHADOW_LEFT: api.ns.selector('tabs__shadow--left'),
  SHADOW_RIGHT: api.ns.selector('tabs__shadow--right')
};
