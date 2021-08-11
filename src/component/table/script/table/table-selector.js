import api from '../../api.js';

export const TableSelector = {
  TABLE: api.ns.selector('table'),
  SHADOW: api.ns.selector('table__shadow'),
  SHADOW_LEFT: api.ns.selector('table__shadow--left'),
  SHADOW_RIGHT: api.ns.selector('table__shadow--right'),
  ELEMENT: `${api.ns.selector('table')}:not(${api.ns.selector('table--no-scroll')}) table`,
  CAPTION: `${api.ns.selector('table')} table caption`
};
