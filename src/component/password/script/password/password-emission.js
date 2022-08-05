import window from '../../api.js';

export const PasswordEmission = {
  TOGGLE: window.internals.ns.emission('password', 'toggle'),
  ADJUST: window.internals.ns.emission('password', 'adjust')
};
