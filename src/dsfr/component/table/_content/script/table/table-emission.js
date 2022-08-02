import ref from '../../../ref.js';

export const TableEmission = {
  SCROLLABLE: ref.internals.ns.emission('table', 'scrollable'),
  CHANGE: ref.internals.ns.emission('table', 'change'),
  CAPTION_HEIGHT: ref.internals.ns.emission('table', 'captionheight')
};
