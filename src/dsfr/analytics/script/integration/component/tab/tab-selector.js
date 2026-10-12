import api from '../../../../api';
import { joinSelector } from '../../join-selector';

export const TabSelector = {
  get PANEL () {
    return joinSelector(api.tab.TabSelector.PANEL, `:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`);
  }
};
