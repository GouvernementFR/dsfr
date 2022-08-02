import ref from '../../../ref.js';

export const TableSelector = {
  TABLE: ref.internals.ns.selector('table'),
  SHADOW: ref.internals.ns.selector('table__shadow'),
  SHADOW_LEFT: ref.internals.ns.selector('table__shadow--left'),
  SHADOW_RIGHT: ref.internals.ns.selector('table__shadow--right'),
  ELEMENT: `${ref.internals.ns.selector('table')}:not(${ref.internals.ns.selector('table--no-scroll')}) table`,
  CAPTION: `${ref.internals.ns.selector('table')} table caption`
};
