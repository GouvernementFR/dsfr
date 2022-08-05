import window from '../../api.js';

export const PasswordSelector = {
  PASSWORD: window.internals.ns.selector('password'),
  INPUT: window.internals.ns.selector('password__input'),
  LABEL: window.internals.ns.selector('password__label'),
  TOOGLE: `${window.internals.ns.selector('password__checkbox')} input[type="checkbox"]`
};
