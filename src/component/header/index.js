import api from './api.js';
import { HeaderLinks } from './script/header/header-links.js';
import { HeaderModal } from './script/header/header-modal.js';
import { HeaderSelectors } from './script/header/header-selectors.js';

api.header = {
  HeaderLinks: HeaderLinks,
  HeaderModal: HeaderModal,
  HeaderSelectors: HeaderSelectors,
  doc: 'https://gouvfr.atlassian.net/wiki/spaces/DB/pages/222789846/En-t+te+-+Header'
};

export default api;
