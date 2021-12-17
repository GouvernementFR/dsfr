import api from './index.js';

api.register(api.tab.TabSelector.PANEL, api.tab.TabPanel);
api.register(api.tab.TabSelector.GROUP, api.tab.TabsGroup);
api.register(api.tab.TabSelector.LIST, api.tab.TabsList);

export default api;
