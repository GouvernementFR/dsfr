import api from '../../api.js';

class ModalButton extends api.core.DisclosureButton {
  constructor () {
    super(api.core.DisclosureTypes.OPENED);
  }

  static get instanceClassName () {
    return 'ModalButton';
  }
}

export { ModalButton };
