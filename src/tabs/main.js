import api from './index';
import { TabPanel } from './scripts/tabs/tab-panel';

api.register(api.tabs.TabSelectors.PANEL, api.tabs.TabPanel);
api.register(api.tabs.TabSelectors.GROUP, api.tabs.TabsGroup);

export default api;
