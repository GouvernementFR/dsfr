import api from '../../api.js';
import { ModalSelector } from './modal-selector.js';
import { ModalButton } from './modal-button.js';
import { ModalAttribute } from './modal-attribute';

class Modal extends api.core.Disclosure {
  constructor () {
    super(api.core.DisclosureType.OPENED, ModalSelector.MODAL, ModalButton, 'ModalsGroup');
    this._isActive = false;
    this.scrolling = this.resize.bind(this, false);
    this.resizing = this.resize.bind(this, true);
  }

  static get instanceClassName () {
    return 'Modal';
  }

  init () {
    super.init();
    this._isDialog = this.node.tagName === 'DIALOG';
    this.isScrolling = false;
    this.listenClick();
    this.listenKey(api.core.KeyCodes.ESCAPE, this.conceal.bind(this, false, false), true, true);
  }

  retrieved () {
    this._ensureAccessibleName();
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
    if (this._isActive) return;
    this._isActive = true;
    this._hasDialogRole = this.getAttribute('role') === 'dialog';
    if (!this._hasDialogRole) this.setAttribute('role', 'dialog');
  }

  deactivateModal () {
    if (!this._isActive) return;
    this._isActive = false;
    if (!this._hasDialogRole) this.removeAttribute('role');
  }

  _setAccessibleName (node, append) {
    const id = this.retrieveNodeId(node, append);
    this.warn(`add reference to ${append} for accessible name (aria-labelledby)`);
    this.setAttribute('aria-labelledby', id);
  }

  _ensureAccessibleName () {
    if (this.hasAttribute('aria-labelledby') || this.hasAttribute('aria-label')) return;
    this.warn('missing accessible name');
    const title = this.node.querySelector(ModalSelector.TITLE);
    const primary = this.primaryButtons[0];

    switch (true) {
      case title !== null:
        this._setAccessibleName(title, 'title');
        break;

      case primary !== undefined:
        this.warn('missing required title, fallback to primary button');
        this._setAccessibleName(primary, 'primary');
        break;
    }
  }
}

export { Modal };
