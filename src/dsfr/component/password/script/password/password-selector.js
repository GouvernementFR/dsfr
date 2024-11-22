import api from '../../api.js';

export const PasswordSelector = {
  PASSWORD: api.internals.ns.selector('password'),
  INPUT: api.internals.ns.selector('password__input'),
  LABEL: api.internals.ns.selector('password__label'),
  TOOGLE: `${api.internals.ns.selector('password__checkbox')} input[type="checkbox"]`
};
