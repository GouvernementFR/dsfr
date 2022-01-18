import api from '../../api.js';

export const ToggleSelector = {
  STATUS_LABEL: `${api.internals.ns.selector('toggle__label')}${api.internals.ns.attr.selector('checked-label')}${api.internals.ns.attr.selector('unchecked-label')}`
};
