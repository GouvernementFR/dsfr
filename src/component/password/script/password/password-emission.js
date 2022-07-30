import api from '../../api.js';

export const PasswordEmission = {
  TOGGLE: api.internals.ns.emission('password', 'toggle'),
  ADJUST: api.internals.ns.emission('password', 'adjust')
};
