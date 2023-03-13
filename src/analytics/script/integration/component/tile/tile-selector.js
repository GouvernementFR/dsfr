import api from '../../../../api';

export const TileSelector = {
  TILE: api.internals.ns.selector('tile'),
  LINK: `${api.internals.ns.selector('tile__link')}`,
  TITLE: api.internals.ns.selector('tile__title')
};
