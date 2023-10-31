import api from '../../api.js';

export const RangeSelector = {
  RANGE: api.internals.ns.selector('range-group'),
  RANGE_SM: api.internals.ns.selector('range-group--sm'),
  RANGE_STEP: api.internals.ns.selector('range-group--step'),
  RANGE_DOUBLE: api.internals.ns.selector('range-group--double'),
  RANGE_INPUT: api.internals.ns.selector('range-group input[type=range]:nth-of-type(1)'),
  RANGE_INPUT2: `${api.internals.ns.selector('range-group--double')} input[type=range]:nth-of-type(2)`,
  RANGE_PREFIX: api.internals.ns.attr('prefix'),
  RANGE_SUFFIX: api.internals.ns.attr('suffix'),
  RANGE_TEXT_MIN: api.internals.ns.attr('text-min'),
  RANGE_TEXT_MAX: api.internals.ns.attr('text-max'),
  RANGE_OUTPUT: 'output'
};
