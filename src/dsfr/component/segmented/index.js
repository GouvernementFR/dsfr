import api from './api.js';
import { Segmented } from './script/segmented/segmented.js';
import { SegmentedElement } from './script/segmented/segmented-element.js';
import { SegmentedSelector } from './script/segmented/segmented-selector.js';
import { SegmentedEmission } from './script/segmented/segmented-emission.js';

api.segmented = {
  SegmentedSelector: SegmentedSelector,
  SegmentedEmission: SegmentedEmission,
  SegmentedElement: SegmentedElement,
  Segmented: Segmented
};

export default api;
