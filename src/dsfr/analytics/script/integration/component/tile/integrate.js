import api from '../../../../api';
import { TileSelector } from './tile-selector';
import { TileActionee } from './tile-actionee';

const integrateTile = () => {
  api.internals.register(TileSelector.TILE, TileActionee);
};

export default integrateTile;
