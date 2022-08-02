import api from './index.js';

/* legacy code here */
api.internals.legacy.setLegacy();
api.internals.register(api.core.ArtworkSelector.ARTWORK_USE, api.core.Artwork);

export default api;
