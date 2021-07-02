import api from '../../api.js';
import { ModalSelectors } from './modal-selectors';
import { ModalButton } from './modal-button';
import { ModalEmissions } from './modal-emissions';

class Modal extends api.core.Disclosure {
  constructor () {
    super(api.core.DisclosureTypes.OPENED, ModalSelectors.MODAL, ModalButton, 'ModalsGroup');
    this.scrollDistance = 0;
    this.scrolling = this.resize.bind(this, false);
    this.resizing = this.resize.bind(this, true);
  }

  init () {
    super.init();
    this.listen('click', this.click.bind(this));
    this.listenKey(api.core.KeyCodes.ESCAPE, this.conceal.bind(this), true, true);
  }

  click (e) {
    this.conceal();
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
