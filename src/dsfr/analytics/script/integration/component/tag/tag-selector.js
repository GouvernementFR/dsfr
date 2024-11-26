import api from '../../../../api';

export const TagSelector = {
  TAG: api.internals.ns.selector('tag'),
  PRESSABLE: '[aria-pressed]',
  DISMISSIBLE: `${api.internals.ns.selector('tag--dismiss', '')}`
};
