import api from '../../../../api';

export const AlertSelector = {
  ALERT: `${api.internals.ns.selector('alert')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  TITLE: api.internals.ns.selector('alert__title')
};
