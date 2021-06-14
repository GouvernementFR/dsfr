import api from './index.js';
import { ACCORDIONS_GROUP_SELECTOR } from './scripts/accordion/constants';

api.register(ACCORDIONS_GROUP_SELECTOR, api.accordions.AccordionsGroup);

export default api;
