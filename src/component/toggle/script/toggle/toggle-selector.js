import api from '../../api.js';

export const ToggleSelector = {
  LABEL_WITH_STATUS: `${api.internals.ns.selector('toggle__label')}${api.internals.ns.attr.selector('checked-label')}`
};
