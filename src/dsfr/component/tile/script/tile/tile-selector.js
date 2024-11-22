import api from '../../api.js';

export const TileSelector = {
  DOWNLOAD: api.internals.ns.selector('tile--download'),
  DOWNLOAD_DETAIL: `${api.internals.ns.selector('tile--download')} ${api.internals.ns.selector('tile__detail')}`
};
