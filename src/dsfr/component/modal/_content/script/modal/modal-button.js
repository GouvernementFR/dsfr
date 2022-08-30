import ref from '../../ref.js';

class ModalButton extends ref.core.DisclosureButton {
  constructor () {
    super(ref.core.DisclosureType.OPENED);
  }

  static get instanceClassName () {
    return 'ModalButton';
  }
}

export { ModalButton };
