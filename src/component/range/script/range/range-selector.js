import api from '../../api.js';

export const RangeSelector = {
  RANGE: api.internals.ns.selector('range-group'),
  RANGE_INPUT: api.internals.ns.selector('range-group input[type=range]'),
  RANGE_INPUT_MAX: `${api.internals.ns.selector('range-group--double')} input[type=range]:nth-of-type(2)`,
  RANGE_PREFIX: api.internals.ns.attr('prefix'),
  RANGE_SUFFIX: api.internals.ns.attr('suffix'),
  RANGE_OUTPUT: 'output'
};
