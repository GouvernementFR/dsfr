import api from '../../api.js';
import { ModalSelectors } from './modal-selectors.js';
import { ModalButton } from './modal-button.js';
import { ModalEmissions } from './modal-emissions.js';

class Modal extends api.core.Disclosure {
  constructor () {
    super(api.core.DisclosureTypes.OPENED, ModalSelectors.MODAL, ModalButton, 'ModalsGroup');
    this.scrollDistance = 0;
    this.scrolling = this.resize.bind(this, false);
    this.resizing = this.resize.bind(this, true);
  }

  static get instanceClassName () {
    return 'Modal';
  }

  init () {
    super.init();
    this.listen('click', this.click.bind(this));
    this.listenKey(api.core.KeyCodes.ESCAPE, this.conceal.bind(this), true, true);
  }

  click (e) {
    if (e.target === this.node) this.conceal();
  }

  disclose (withhold) {
    if (!super.disclose(withhold)) return false;
    this.descend(ModalEmissions.ACTIVATE);
    this.isScrollLocked = true;
    return true;
  }

  conceal (withhold, preventFocus) {
    if (!super.conceal(withhold, preventFocus)) return false;
    this.isScrollLocked = false;
    this.descend(ModalEmissions.DEACTIVATE);
    return true;
  }
}

export { Modal };
