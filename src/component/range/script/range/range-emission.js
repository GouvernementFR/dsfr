import api from '../../api.js';

export const RangeEmission = {
  VALUE: api.internals.ns.emission('range', 'value'),
  VALUE_MAX: api.internals.ns.emission('range', 'value-max'),
  MIN: api.internals.ns.emission('range', 'min'),
  MAX: api.internals.ns.emission('range', 'max'),
  STEP: api.internals.ns.emission('range', 'step'),
  PREFIX: api.internals.ns.emission('range', 'prefix'),
  SUFFIX: api.internals.ns.emission('range', 'suffix')
};
