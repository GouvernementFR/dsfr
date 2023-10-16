import api from './api.js';
import { Segmented } from './script/segmented/segmented.js';
import { SegmentedSelector } from './script/segmented/segmented-selector.js';

api.segmented = {
  SegmentedSelector: SegmentedSelector,
  Segmented: Segmented
};

export default api;
