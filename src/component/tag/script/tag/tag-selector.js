import api from '../../api.js';

export const TagSelector = {
  PRESSABLE: `${api.internals.ns.selector('tag')}[aria-pressed]`,
  DISMISSIBLE: `${api.internals.ns.selector('tag--dismiss')}`
};
