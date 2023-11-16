import api from '../../../../api';

export const TileSelector = {
  TILE: api.internals.ns.selector('tile'),
  LINK: `${api.internals.ns.selector('tile__title')} a, ${api.internals.ns.selector('tile__title')} button`,
  TITLE: api.internals.ns.selector('tile__title')
};
