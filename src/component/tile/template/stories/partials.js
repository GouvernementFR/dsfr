import tile from '../ejs/tile.ejs?raw';
import tileContent from '../ejs/tile-content.ejs?raw';
import tileDetails from '../ejs/tile-details.ejs?raw';
import tileEnd from '../ejs/tile-end.ejs?raw';
import tileHeader from '../ejs/tile-header.ejs?raw';
import tileStart from '../ejs/tile-start.ejs?raw';

export const tilePartials = [
  {
    names: ['tile'],
    partial: tile
  },
  {
    names: ['tile-content'],
    partial: tileContent
  },
  {
    names: ['tile-details'],
    partial: tileDetails
  },
  {
    names: ['tile-end'],
    partial: tileEnd
  },
  {
    names: ['tile-header'],
    partial: tileHeader
  },
  {
    names: ['tile-start'],
    partial: tileStart
  }
];
