import api from '../../api.js';

export const RangeSelector = {
  RANGE: api.internals.ns.selector('range-group'),
  RANGE_INPUT_MIN: api.internals.ns.selector('range-group input[type=range]:first-of-type'),
  RANGE_INPUT_MAX: `${api.internals.ns.selector('range-group--double')} input[type=range]:nth-of-type(2)`
};
