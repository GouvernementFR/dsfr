import api from './define';

api.internals.register(api.header.HeaderSelector.BUTTONS, api.header.HeaderLinks);
api.internals.register(api.header.HeaderSelector.MODALS, api.header.HeaderModal);

export default api;
