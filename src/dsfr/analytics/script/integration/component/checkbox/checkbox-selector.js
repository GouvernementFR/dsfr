import api from '../../../../api';

export const CheckboxSelector = {
  INPUT: `${api.internals.ns.selector('checkbox-group [type="checkbox"]')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
