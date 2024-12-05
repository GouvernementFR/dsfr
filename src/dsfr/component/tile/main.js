import api from './index.js';

api.internals.register(api.tile.TileSelector.DOWNLOAD, api.tile.TileDownload);
api.internals.register(api.tile.TileSelector.DOWNLOAD_DETAIL, api.core.AssessDetail);

export default api;
