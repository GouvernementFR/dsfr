import api from '../../api.js';

export const RangeEmission = {
  BACKGROUND: api.internals.ns.emission('range', 'background'),
  CLEAR: api.internals.ns.emission('range', 'clear'),
  VALUE: api.internals.ns.emission('range', 'value'),
  VALUE2: api.internals.ns.emission('range', 'value2'),
  CONSTRAINTS: api.internals.ns.emission('range', 'constraints'),
  MAX: api.internals.ns.emission('range', 'max'),
  STEP: api.internals.ns.emission('range', 'step'),
  PREFIX: api.internals.ns.emission('range', 'prefix'),
  SUFFIX: api.internals.ns.emission('range', 'suffix'),
  DISABLED: api.internals.ns.emission('range', 'disabled'),
  ENABLE_POINTER: api.internals.ns.emission('range', 'enable_pointer')
};
