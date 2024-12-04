import api from '../../../../api';
import { TabActionee } from './tab-actionee';
import { joinSelector } from '../../join-selector';

const integrateTab = (selector = '') => {
  if (api.tab) {
    api.internals.register(joinSelector(api.tab.TabSelector.PANEL, selector), TabActionee);
  }
};

export default integrateTab;
