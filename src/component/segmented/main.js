import api from './index.js';

api.internals.register(api.segmented.SegmentedSelector.SEGMENTED, api.segmented.Segmented);
api.internals.register(api.segmented.SegmentedSelector.SEGMENTED_ELEMENT, api.segmented.SegmentedElement);

export default api;
