import ref from '../../../ref.js';

export const PasswordSelector = {
  PASSWORD: ref.internals.ns.selector('password'),
  INPUT: ref.internals.ns.selector('password__input'),
  LABEL: ref.internals.ns.selector('password__label'),
  TOOGLE: `${ref.internals.ns.selector('password__checkbox')} input[type="checkbox"]`
};
