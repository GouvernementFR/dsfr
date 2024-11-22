import api from '../../api.js';

export const RangeEmission = {
  VALUE: api.internals.ns.emission('range', 'value'),
  VALUE2: api.internals.ns.emission('range', 'value2'),
  OUTPUT: api.internals.ns.emission('range', 'output'),
  CONSTRAINTS: api.internals.ns.emission('range', 'constraints'),
  MIN: api.internals.ns.emission('range', 'min'),
  MAX: api.internals.ns.emission('range', 'max'),
  STEP: api.internals.ns.emission('range', 'step'),
  PREFIX: api.internals.ns.emission('range', 'prefix'),
  SUFFIX: api.internals.ns.emission('range', 'suffix'),
  DISABLED: api.internals.ns.emission('range', 'disabled'),
  ENABLE_POINTER: api.internals.ns.emission('range', 'enable_pointer')
};
