import api from '../../api.js';

export const RangeEmission = {
  BACKGROUND: api.internals.ns.emission('range', 'background'),
  VALUE: api.internals.ns.emission('range', 'value'),
  VALUE2: api.internals.ns.emission('range', 'value2'),
  CONSTRAINTS: api.internals.ns.emission('range', 'contraints'),
  MAX: api.internals.ns.emission('range', 'max'),
  STEP: api.internals.ns.emission('range', 'step'),
  PREFIX: api.internals.ns.emission('range', 'prefix'),
  SUFFIX: api.internals.ns.emission('range', 'suffix'),
  DISABLED: api.internals.ns.emission('range', 'disabled')
};
