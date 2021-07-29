import api from './api.js';
import { TabPanel } from './scripts/tabs/tab-panel.js';
import { TabButton } from './scripts/tabs/tab-button.js';
import { TabsGroup } from './scripts/tabs/tabs-group.js';
import { TabSelectors } from './scripts/tabs/tab-selectors.js';

api.tabs = {
  TabPanel: TabPanel,
  TabButton: TabButton,
  TabsGroup: TabsGroup,
  TabSelectors: TabSelectors
};

export default api;
