import api from '../../api.js';

class HeaderModal extends api.core.Instance {
  static get instanceClassName () {
    return 'HeaderModal';
  }

  init () {
    this.storeAria();
    this.isResizing = true;
  }

  resize () {
    if (this.isBreakpoint(api.core.Breakpoints.LG)) this.deactivateModal();
    else this.activateModal();
  }

  activateModal () {
    const modal = this.element.getInstance('Modal');
    if (!modal) {
      this.request(this.activateModal.bind(this));
      return;
    }
    modal.isActive = true;
    this.restoreAria();
    this.listenClick({ capture: true });
  }

  deactivateModal () {
    const modal = this.element.getInstance('Modal');
    if (!modal) {
      this.request(this.deactivateModal.bind(this));
      return;
    }
    modal.conceal();
    modal.isActive = false;
    this.storeAria();
    this.unlistenClick({ capture: true });
  }

  storeAria () {
    if (this.hasAttribute('aria-labelledby')) this._ariaLabelledby = this.getAttribute('aria-labelledby');
    if (this.hasAttribute('aria-label')) this._ariaLabel = this.getAttribute('aria-label');
    this.removeAttribute('aria-labelledby');
    this.removeAttribute('aria-label');
  }

  restoreAria () {
    if (this._ariaLabelledby) this.setAttribute('aria-labelledby', this._ariaLabelledby);
    if (this._ariaLabel) this.setAttribute('aria-label', this._ariaLabel);
  }

  handleClick (e) {
    if (e.target.matches('a, button') && !e.target.matches('[aria-controls]') && !e.target.matches(api.core.DisclosureSelector.PREVENT_CONCEAL)) {
      const modal = this.element.getInstance('Modal');
      modal.conceal();
    }
  }
}

export { HeaderModal };
