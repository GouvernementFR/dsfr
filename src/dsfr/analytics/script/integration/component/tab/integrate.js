import api from '../../../../api';
import { TabActionee } from './tab-actionee';
import { joinSelector } from '../../join-selector';
import { TabSelector } from './tab-selector';

const integrateTab = (selector = '') => {
  if (api.tab) {
    api.internals.register(joinSelector(TabSelector.PANEL, selector), TabActionee);
  }
};

export default integrateTab;
