import api from './index.js';

api.internals.register(api.range.RangeSelector.RANGE, api.range.Range);
// api.internals.register(api.range.RangeSelector.RANGE_INPUT_MIN, api.range.RangeInputMin);
// api.internals.register(api.range.RangeSelector.RANGE_INPUT_MAX, api.range.RangeInputMax);

export default api;
