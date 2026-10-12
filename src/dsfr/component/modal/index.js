import api from './api.js';

import { Modal } from './script/modal/modal.js';
import { ModalButton } from './script/modal/modal-button.js';
import { ModalFooter } from './script/modal/modal-footer.js';
import { ModalsGroup } from './script/modal/modals-group.js';
import { ModalBody } from './script/modal/modal-body.js';
import { ModalSelector } from './script/modal/modal-selector.js';

api.modal = {
  Modal: Modal,
  ModalButton: ModalButton,
  ModalFooter: ModalFooter,
  ModalBody: ModalBody,
  ModalsGroup: ModalsGroup,
  ModalSelector: ModalSelector
};

export default api;
