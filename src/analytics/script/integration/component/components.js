import api from '../../../api';
import { AccordionActionee } from './accordion/accordion-actionee';
import { ButtonSelector} from './button/button-selector';
import { ButtonActionee } from './button/button-actionee';
import { ModalActionee } from './modal/modal-actionee';

if (api.accordion) {
  api.internals.register(api.accordion.AccordionSelector.COLLAPSE, AccordionActionee);
}

api.internals.register(ButtonSelector.BUTTON, ButtonActionee);

if (api.modal) {
  api.internals.register(api.modal.ModalSelector.MODAL, ModalActionee);
}

export default api;
