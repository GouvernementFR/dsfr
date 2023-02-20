import api from '../../../api';
import { AccordionActionee } from './accordion/accordion-actionee';
import { ModalActionee } from './modal/modal-actionee';

if (api.accordion) {
  api.internals.register(api.accordion.AccordionSelector.COLLAPSE, AccordionActionee);
}

if (api.modal) {
  api.internals.register(api.modal.ModalSelector.MODAL, ModalActionee);
}

export default api;
