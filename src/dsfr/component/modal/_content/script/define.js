import ref from '../../ref.js';

import { Modal } from './modal/modal.js';
import { ModalButton } from './modal/modal-button.js';
import { ModalsGroup } from './modal/modals-group.js';
import { ModalBody } from './modal/modal-body.js';
import { ModalSelector } from './modal/modal-selector.js';

ref.modal = {
  Modal: Modal,
  ModalButton: ModalButton,
  ModalBody: ModalBody,
  ModalsGroup: ModalsGroup,
  ModalSelector: ModalSelector
};

export default ref;
