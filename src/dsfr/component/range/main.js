import api from './index.js';

api.internals.register(api.range.RangeSelector.RANGE, api.range.Range);
api.internals.register(api.range.RangeSelector.RANGE_INPUT, api.range.RangeInput);
api.internals.register(api.range.RangeSelector.RANGE_INPUT2, api.range.RangeInput2);
api.internals.register(api.range.RangeSelector.RANGE_OUTPUT, api.range.RangeOutput);
api.internals.register(api.range.RangeSelector.RANGE_MIN, api.range.RangeLimit);
api.internals.register(api.range.RangeSelector.RANGE_MAX, api.range.RangeLimit);

export default api;
