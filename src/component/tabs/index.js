import api from './api.js';
import { TabPanel } from './script/tabs/tab-panel.js';
import { TabButton } from './script/tabs/tab-button.js';
import { TabsGroup } from './script/tabs/tabs-group.js';
import { TabSelectors } from './script/tabs/tab-selectors.js';

api.tabs = {
  TabPanel: TabPanel,
  TabButton: TabButton,
  TabsGroup: TabsGroup,
  TabSelectors: TabSelectors
};

export default api;
