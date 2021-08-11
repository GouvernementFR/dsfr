import api from './index.js';

api.register(api.header.HeaderSelector.LINKS, api.header.HeaderLinks);
api.register(api.header.HeaderSelector.MODALS, api.header.HeaderModal);

export default api;
