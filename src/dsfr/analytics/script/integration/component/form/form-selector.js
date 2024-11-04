import api from '../../../../api';

export const FormSelector = {
  LABEL: api.internals.ns.selector('label'),
  FIELDSET: api.internals.ns.selector('fieldset'),
  LEGEND: api.internals.ns.selector('fieldset__legend')
};
