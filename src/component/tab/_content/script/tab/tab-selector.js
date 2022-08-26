import ref from '../../../ref.js';

export const TabSelector = {
  TAB: ref.internals.ns.selector('tabs__tab'),
  GROUP: ref.internals.ns.selector('tabs'),
  PANEL: ref.internals.ns.selector('tabs__panel'),
  LIST: ref.internals.ns.selector('tabs__list'),
  SHADOW: ref.internals.ns.selector('tabs__shadow'),
  SHADOW_LEFT: ref.internals.ns.selector('tabs__shadow--left'),
  SHADOW_RIGHT: ref.internals.ns.selector('tabs__shadow--right'),
  PANEL_START: ref.internals.ns.selector('tabs__panel--direction-start'),
  PANEL_END: ref.internals.ns.selector('tabs__panel--direction-end')
};
