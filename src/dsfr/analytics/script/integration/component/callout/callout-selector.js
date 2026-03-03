import api from '../../../../api';

export const CalloutSelector = {
  CALLOUT: `${api.internals.ns.selector('callout')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  TITLE: api.internals.ns.selector('callout__title')
};
