import api from './api.js';
import { HeaderLinks } from './script/header/header-links.js';
import { HeaderModal } from './script/header/header-modal.js';
import { HeaderSelector } from './script/header/header-selector.js';

api.header = {
  HeaderLinks: HeaderLinks,
  HeaderModal: HeaderModal,
  HeaderSelector: HeaderSelector,
  doc: 'https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/en-tete'
};

export default api;
