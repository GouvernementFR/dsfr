import api from '../../../../api';

export const SelectSelector = {
  SELECT: `${api.internals.ns.selector('select')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
