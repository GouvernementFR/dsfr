import ref from '../../ref.js';

ref.internals.register(ref.header.HeaderSelector.BUTTONS, ref.header.HeaderLinks);
ref.internals.register(ref.modal.ModalSelector.MODAL, ref.modal.Modal);
ref.internals.register(ref.modal.ModalSelector.BODY, ref.modal.ModalBody);
ref.internals.register(ref.core.RootSelector.ROOT, ref.modal.ModalsGroup);

export default ref;
