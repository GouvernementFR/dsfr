import api from '../../../../api';

export const TileSelector = {
  TILE: `${api.internals.ns.selector('tile')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  LINK: `${api.internals.ns.selector('tile__title')} a, ${api.internals.ns.selector('tile__title')} button`,
  TITLE: api.internals.ns.selector('tile__title')
};
