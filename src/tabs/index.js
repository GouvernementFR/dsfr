import api from './api.js';
import { TabPanel } from './scripts/tabs/tab-panel';
import { TabButton } from './scripts/tabs/tab-button';
import { TabsGroup } from './scripts/tabs/tabs-group';
import { TabSelectors } from './scripts/tabs/tab-selectors';

api.tabs = {
  TabPanel: TabPanel,
  TabButton: TabButton,
  TabsGroup: TabsGroup,
  TabSelectors: TabSelectors
};

export default api;
