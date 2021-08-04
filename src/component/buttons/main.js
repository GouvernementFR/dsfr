import api from './index.js';

api.register(api.buttons.ButtonsSelectors.EQUISIZED_BUTTON, api.core.Equisized);
api.register(api.buttons.ButtonsSelectors.EQUISIZED_GROUP, api.core.EquisizedsGroup);

export default api;
