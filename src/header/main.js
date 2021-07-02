import api from './index';

api.register(api.header.HeaderSelectors.HEADER, api.header.Header);
api.register(api.header.HeaderSelectors.MODALS, api.header.HeaderModal);

export default api;
