import api from '../../../../api';

export const InputSelector = {
  INPUT: `${api.internals.ns.selector('input-group')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
