import api from './api.js';
import { CardDownload } from './script/card/card-download.js';
import { CardSelector } from './script/card/card-selector.js';

api.card = {
  CardSelector: CardSelector,
  CardDownload: CardDownload
};

export default api;
