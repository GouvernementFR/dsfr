import api from '../../api.js';

export const TableEmission = {
  SCROLLABLE: api.internals.ns.emission('table', 'scrollable'),
  CHANGE: api.internals.ns.emission('table', 'change'),
  CAPTION_HEIGHT: api.internals.ns.emission('table', 'captionheight'),
  CAPTION_WIDTH: api.internals.ns.emission('table', 'captionwidth')
};
