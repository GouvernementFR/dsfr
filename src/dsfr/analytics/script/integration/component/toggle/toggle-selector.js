import api from '../../../../api';

export const ToggleSelector = {
  INPUT: `${api.internals.ns.selector('toggle [type="checkbox"]')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
