import api from './index.js';

api.internals.register(api.card.CardSelector.DOWNLOAD, api.card.CardDownload);
api.internals.register(api.card.CardSelector.DOWNLOAD_DETAIL, api.core.AssessDetail);

export default api;
