import api from './index.js';

api.register(api.button.ButtonSelector.EQUISIZED_BUTTON, api.core.Equisized);
api.register(api.button.ButtonSelector.EQUISIZED_GROUP, api.core.EquisizedsGroup);

export default api;
