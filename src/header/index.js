import api from './api.js';
import { HeaderLinks } from './scripts/header/header-links';
import { HeaderModal } from './scripts/header/header-modal';
import { HeaderSelectors } from './scripts/header/header-selectors';

api.header = {
  HeaderLinks: HeaderLinks,
  HeaderModal: HeaderModal,
  HeaderSelectors: HeaderSelectors,
  doc: 'https://gouvfr.atlassian.net/wiki/spaces/DB/pages/222789846/En-t+te+-+Header'
};

export default api;
