import api from './api.js';
import { AccessLinks } from './script/access/access-links.js';
import { AccessModal } from './script/access/access-modal.js';
import { AccessSelector } from './script/access/access-selector.js';

api.access = {
  AccessLinks: AccessLinks,
  AccessModal: AccessModal,
  AccessSelector: AccessSelector,
  doc: 'https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/en-tete'
};

export default api;
