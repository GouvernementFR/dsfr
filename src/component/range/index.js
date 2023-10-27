import api from './api.js';
import { RangeSelector } from './script/range/range-selector.js';
import { RangeEmission } from './script/range/range-emission.js';
import { Range } from './script/range/range.js';
import { RangeInput } from './script/range/range-input.js';
import { RangeInput2 } from './script/range/range-input2.js';

api.range = {
  Range: Range,
  RangeInput: RangeInput,
  RangeInput2: RangeInput2,
  RangeEmission: RangeEmission,
  RangeSelector: RangeSelector
};

export default api;
