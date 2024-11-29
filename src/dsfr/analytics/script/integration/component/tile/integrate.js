import api from '../../../../api';
import { TileSelector } from './tile-selector';
import { TileActionee } from './tile-actionee';
import { joinSelector } from '../../join-selector';

const integrateTile = (selector = '') => {
  api.internals.register(joinSelector(TileSelector.TILE, selector), TileActionee);
};

export default integrateTile;
