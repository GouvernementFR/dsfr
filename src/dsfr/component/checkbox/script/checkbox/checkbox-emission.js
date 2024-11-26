import api from '../../api.js';

const CheckboxEmission = {
  CHANGE: api.internals.ns.emission('checkbox', 'change'),
  RETRIEVE: api.internals.ns.emission('checkbox', 'retrieve')
};

export { CheckboxEmission };
