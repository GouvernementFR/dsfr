import api from '../../../api';
import { AccordionActionee } from './accordion/accordion-actionee';

if (api.accordion) {
  api.internals.register(api.accordion.AccordionSelector.COLLAPSE, AccordionActionee);
}

export default api;
