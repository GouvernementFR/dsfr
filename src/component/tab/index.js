import api from './api.js';
import { TabPanel } from './script/tab/tab-panel.js';
import { TabButton } from './script/tab/tab-button.js';
import { TabsGroup } from './script/tab/tabs-group.js';
import { TabSelector } from './script/tab/tab-selector.js';

api.tab = {
  TabPanel: TabPanel,
  TabButton: TabButton,
  TabsGroup: TabsGroup,
  TabSelector: TabSelector
};

export default api;
