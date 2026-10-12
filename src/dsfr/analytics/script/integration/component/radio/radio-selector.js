import api from '../../../../api';

export const RadioSelector = {
  INPUT: `${api.internals.ns.selector('radio-group [type="radio"]')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
