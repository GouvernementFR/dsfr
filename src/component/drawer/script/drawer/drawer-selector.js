import api from '../../../api.js';

export const DrawerSelector = {
  DRAWER: api.internals.ns.selector('drawer'),
  DRAWER_TOP: api.internals.ns.selector('drawer--top'),
  DRAWER_LEFT: api.internals.ns.selector('drawer--left'),
  DRAWER_RIGHT: api.internals.ns.selector('drawer--right'),
  DRAWER_BOTTOM: api.internals.ns.selector('drawer--bottom')
};
