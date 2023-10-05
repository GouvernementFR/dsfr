import api from './api.js';
import { RangeSelector } from './script/range/range-selector.js';
import { RangeEmission } from './script/range/range-emission.js';
import { Range } from './script/range/range.js';
import { RangeInput } from './script/range/range-input.js';

api.range = {
  Range: Range,
  RangeInput: RangeInput,
  RangeEmission: RangeEmission,
  RangeSelector: RangeSelector
};

export default api;
