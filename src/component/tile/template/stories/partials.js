import tile from '../ejs/tile.ejs?raw';
import tileContent from '../ejs/content.ejs?raw';
import tileDetails from '../ejs/details.ejs?raw';
import tileEnd from '../ejs/end.ejs?raw';
import tileHeader from '../ejs/header.ejs?raw';
import tileStart from '../ejs/start.ejs?raw';

export const tilePartials = [
  {
    names: ['tile'],
    partial: tile
  },
  {
    names: ['content'],
    partial: tileContent
  },
  {
    names: ['details'],
    partial: tileDetails
  },
  {
    names: ['end'],
    partial: tileEnd
  },
  {
    names: ['header'],
    partial: tileHeader
  },
  {
    names: ['start'],
    partial: tileStart
  }
];
