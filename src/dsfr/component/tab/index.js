import api from './api.js';
import { TabPanel } from './script/tab/tab-panel.js';
import { TabButton } from './script/tab/tab-button.js';
import { TabsGroup } from './script/tab/tabs-group.js';
import { TabsList } from './script/tab/tabs-list.js';
import { TabSelector } from './script/tab/tab-selector.js';
import { TabEmission } from './script/tab/tab-emission.js';

api.tab = {
  TabPanel: TabPanel,
  TabButton: TabButton,
  TabsGroup: TabsGroup,
  TabsList: TabsList,
  TabSelector: TabSelector,
  TabEmission: TabEmission
};

export default api;
