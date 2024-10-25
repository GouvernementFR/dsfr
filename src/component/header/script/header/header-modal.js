import api from '../../api.js';

class HeaderModal extends api.core.Instance {
  static get instanceClassName () {
    return 'HeaderModal';
  }

  init () {
    this.isResizing = true;
    this.storeAria();
  }

  resize () {
    if (this.isBreakpoint(api.core.Breakpoints.LG)) this.deactivateModal();
    else this.activateModal();
  }

  activateModal () {
    const modal = this.element.getInstance('Modal');
    if (!modal) return;
    modal.isEnabled = true;
    this.setAttribute('aria-labelledby', this._ariaLabelledBy);
    this.setAttribute('aria-label', this._ariaLabel);
    this.listenClick({ capture: true });
  }

  deactivateModal () {
    const modal = this.element.getInstance('Modal');
    if (!modal) return;
    modal.conceal();
    modal.isEnabled = false;
    this.storeAria();
    this.removeAttribute('aria-labelledby');
    this.removeAttribute('aria-label');
    this.unlistenClick({ capture: true });
  }

  storeAria () {
    if (this.hasAttribute('aria-labelledby')) this._ariaLabelledBy = this.getAttribute('aria-labelledby');
    if (this.hasAttribute('aria-label')) this._ariaLabel = this.getAttribute('aria-label');
  }

  handleClick (e) {
    if (e.target.matches('a, button') && !e.target.matches('[aria-controls]') && !e.target.matches(api.core.DisclosureSelector.PREVENT_CONCEAL)) {
      const modal = this.element.getInstance('Modal');
      modal.conceal();
    }
  }
}

export { HeaderModal };
