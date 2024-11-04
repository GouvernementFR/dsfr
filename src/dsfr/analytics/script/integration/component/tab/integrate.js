import api from '../../../../api';
import { TabActionee } from './tab-actionee';

const integrateTab = () => {
  if (api.tab) {
    api.internals.register(api.tab.TabSelector.PANEL, TabActionee);
  }
};

export default integrateTab;
