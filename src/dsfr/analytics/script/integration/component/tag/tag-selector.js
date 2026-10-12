import api from '../../../../api';

export const TagSelector = {
  TAG: `${api.internals.ns.selector('tag')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  PRESSABLE: '[aria-pressed]',
  DISMISSIBLE: `${api.internals.ns.selector('tag--dismiss', '')}`
};
