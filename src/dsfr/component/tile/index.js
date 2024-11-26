import api from './api.js';
import { TileDownload } from './script/tile/tile-download.js';
import { TileSelector } from './script/tile/tile-selector.js';

api.tile = {
  TileSelector: TileSelector,
  TileDownload: TileDownload
};

export default api;
