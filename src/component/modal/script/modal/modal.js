import api from '../../api.js';
import { ModalSelector } from './modal-selector.js';
import { ModalButton } from './modal-button.js';
import { ModalAttribute } from './modal-attribute';

class Modal extends api.core.Disclosure {
  constructor () {
    super(api.core.DisclosureType.OPENED, ModalSelector.MODAL, ModalButton, 'ModalsGroup');
    this._isDialog = true;
    this.scrolling = this.resize.bind(this, false);
    this.resizing = this.resize.bind(this, true);
  }

  static get instanceClassName () {
    return 'Modal';
  }

  init () {
    super.init();
    this._isDialog = this.node.tagName === 'DIALOG';
    this.modalTitle = this.node.querySelector(ModalSelector.TITLE);
    if (this._isDialog) this.setTitleId();
    this.isScrolling = false;
    this.listenClick();
    this.listenKey(api.core.KeyCodes.ESCAPE, this.conceal.bind(this, false, false), true, true);
  }

  get body () {
    return this.element.getDescendantInstances('ModalBody', 'Modal')[0];
  }

  handleClick (e) {
    if (e.target === this.node && this.getAttribute(ModalAttribute.CONCEALING_BACKDROP) !== 'false') this.conceal();
  }

  disclose (withhold) {
    if (!super.disclose(withhold)) return false;
    if (this.body) this.body.activate();
    this.isScrollLocked = true;
    this.setAttribute('aria-modal', 'true');
    this.setAttribute('open', 'true');
    if (!this._isDialog) {
      this.activateModal();
    }
    return true;
  }

  conceal (withhold, preventFocus) {
    if (!super.conceal(withhold, preventFocus)) return false;
    this.isScrollLocked = false;
    this.removeAttribute('aria-modal');
    this.removeAttribute('open');
    if (this.body) this.body.deactivate();
    if (!this._isDialog) {
      this.deactivateModal();
    }
    return true;
  }

  get isDialog () {
    return this._isDialog;
  }

  set isDialog (value) {
    this._isDialog = value;
  }

  activateModal () {
    this.setAttribute('role', 'dialog');
    if (this.modalTitle) this.setAttribute('aria-labelledby', this.modalTitle.id);
  }

  deactivateModal () {
    this.removeAttribute('role');
    this.removeAttribute('aria-labelledby');
  }

  setTitleId () {
    if (this.modalTitle) {
      if (!this.modalTitle.id && this.id) {
        this.modalTitle.setAttribute('id', `${this.id}-title`);
      }
    } else {
      console.warn('modal component requires a title with class .modal__title');
    }
  }

  _electPrimary (candidates) {
    return null;
  }
}

export { Modal };
