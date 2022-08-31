import ref from '../../ref.js';

class ModalButton extends ref.action.DisclosureButton {
  constructor () {
    super(ref.action.DisclosureType.OPENED);
  }

  static get instanceClassName () {
    return 'ModalButton';
  }
}

export { ModalButton };
