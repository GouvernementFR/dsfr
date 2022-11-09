import api from './index.js';

api.internals.register(api.tag.TagSelector.PRESSABLE, api.core.Toggle);
api.internals.register(api.tag.TagSelector.DISMISSIBLE, api.tag.TagDismissible);

export default api;
