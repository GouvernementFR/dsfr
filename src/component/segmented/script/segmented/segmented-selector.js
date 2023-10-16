import api from '../../api.js';

export const SegmentedSelector = {
  SEGMENTED: api.internals.ns.selector('segmented'),
  SEGMENTED_ELEMENTS: api.internals.ns.selector('segmented__elements'),
  SEGMENTED_LEGEND: api.internals.ns.selector('segmented__legend')
};
