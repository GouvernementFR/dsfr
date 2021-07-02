import api from './api.js';
import { Header } from './scripts/header/header';
import { HeaderModal } from './scripts/header/header-modal';
import { HeaderSelectors } from './scripts/header/header-selectors';

api.header = {
  Header: Header,
  HeaderModal: HeaderModal,
  HeaderSelectors: HeaderSelectors
};

export default api;
