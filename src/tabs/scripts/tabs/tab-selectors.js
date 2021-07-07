import api from '../../api.js';

export const TabSelectors = {
  TAB: api.ns.selector('tabs__tab'),
  GROUP: api.ns.selector('tabs'),
  PANEL: api.ns.selector('tabs__panel'),
  LIST: api.ns.selector('tabs__list')
};
