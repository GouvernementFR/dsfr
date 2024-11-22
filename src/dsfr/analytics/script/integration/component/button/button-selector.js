import api from '../../../../api.js';

export const ButtonSelector = {
  BUTTON: `${api.internals.ns.selector('btn')}:not(${api.internals.ns.selector('btn--close')})`
};
