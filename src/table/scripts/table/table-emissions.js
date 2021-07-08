import api from '../../api.js';

export const TableEmissions = {
  SCROLLABLE: api.ns.emission('table', 'scrollable'),
  CAPTION_HEIGHT: api.ns.emission('table', 'captionheight')
};
