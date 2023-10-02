import api from './api.js';
import { RangeSelector } from './script/range/range-selector.js';
import { RangeEmission } from './script/range/range-emission.js';
import { Range } from './script/range/range.js';
// import { RangeInputMin } from './script/range/range-input-min.js';
// import { RangeInputMax } from './script/range/range-input-max.js';

api.range = {
  Range: Range,
  // RangeInputMin: RangeInputMin,
  // RangeInputMax: RangeInputMax,
  RangeEmission: RangeEmission,
  RangeSelector: RangeSelector
};

export default api;
