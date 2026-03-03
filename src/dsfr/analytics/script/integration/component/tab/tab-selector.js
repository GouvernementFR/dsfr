import api from '../../../../api';

export const TabSelector = {
  PANEL: `${api.tab.TabSelector.PANEL}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
