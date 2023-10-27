import api from './index.js';

api.internals.register(api.range.RangeSelector.RANGE, api.range.Range);
api.internals.register(api.range.RangeSelector.RANGE_INPUT, api.range.RangeInput);
api.internals.register(api.range.RangeSelector.RANGE_INPUT2, api.range.RangeInput2);

export default api;
