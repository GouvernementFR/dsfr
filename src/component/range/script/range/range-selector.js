import api from '../../api.js';

export const RangeSelector = {
  RANGE: api.internals.ns.selector('range'),
  RANGE_SM: api.internals.ns.selector('range--sm'),
  RANGE_STEP: api.internals.ns.selector('range--step'),
  RANGE_DOUBLE: api.internals.ns.selector('range--double'),
  RANGE_DOUBLE_STEP: api.internals.ns.selector('range--double') + api.internals.ns.selector('range--step'),
  RANGE_INPUT: api.internals.ns.selector('range input[type=range]:nth-of-type(1)'),
  RANGE_INPUT2: `${api.internals.ns.selector('range--double')} input[type=range]:nth-of-type(2)`,
  RANGE_OUTPUT: api.internals.ns.selector('range__output'),
  RANGE_MIN: api.internals.ns.selector('range__min'),
  RANGE_MAX: api.internals.ns.selector('range__max'),
  RANGE_PREFIX: api.internals.ns.attr('prefix'),
  RANGE_SUFFIX: api.internals.ns.attr('suffix')
};
