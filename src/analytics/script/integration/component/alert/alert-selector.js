import api from '../../../../api';

export const AlertSelector = {
  ALERT: api.internals.ns.selector('alert'),
  TITLE: api.internals.ns.selector('alert__title')
};
