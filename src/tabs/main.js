import api from './index.js';

api.register(api.tabs.TabSelectors.PANEL, api.tabs.TabPanel);
api.register(api.tabs.TabSelectors.GROUP, api.tabs.TabsGroup);

export default api;
