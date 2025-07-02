import api from './index.js';

api.internals.register(api.access.AccessSelector.TOOLS_LINKS, api.access.AccessLinks);
api.internals.register(api.access.AccessSelector.MODALS, api.access.AccessModal);

export default api;
