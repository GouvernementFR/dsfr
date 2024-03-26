import api from '../../api.js';

export const TableEmission = {
  SCROLLABLE: api.internals.ns.emission('table', 'scrollable'),
  CHANGE: api.internals.ns.emission('table', 'change'),
  CAPTION_HEIGHT: api.internals.ns.emission('table', 'captionheight'),
  ROW_SELECT: api.internals.ns.emission('table', 'rowselect'),
  COL_SELECT: api.internals.ns.emission('table', 'colselect')
};
