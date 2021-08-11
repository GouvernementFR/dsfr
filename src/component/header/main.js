import api from './index.js';

api.register(api.header.HeaderSelectors.LINKS, api.header.HeaderLinks);
api.register(api.header.HeaderSelectors.MODALS, api.header.HeaderModal);

export default api;
