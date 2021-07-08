import api from '../../api.js';

export const TableSelectors = {
  TABLE: api.ns.selector('table'),
  NO_SCROLL: api.ns.selector('table--no-scroll'),
  SHADOW: api.ns.selector('table__shadow'),
  SHADOW_LEFT: api.ns.selector('table__shadow--left'),
  SHADOW_RIGHT: api.ns.selector('table__shadow--right'),
  ELEMENT: `${api.ns.selector('table')} table`,
  CAPTION: `${api.ns.selector('table')} table caption`
};
