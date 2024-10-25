import api from '../../api.js';

class HeaderModal extends api.core.Instance {
  static get instanceClassName () {
    return 'HeaderModal';
  }

  init () {
    this.isResizing = true;
  }

  resize () {
    if (this.isBreakpoint(api.core.Breakpoints.LG)) this.deactivateModal();
    else this.activateModal();
  }

  activateModal () {
    const modal = this.element.getInstance('Modal');
    if (!modal) return;
    modal.isEnabled = true;
    if (this._ariaLabelledByData) this.setAttribute('aria-labelledby', this._ariaLabelledByData);
    if (this._ariaLabelData) this.setAttribute('aria-label', this._ariaLabelData);
    this.listenClick({ capture: true });
  }

  deactivateModal () {
    const modal = this.element.getInstance('Modal');
    if (!modal) return;
    modal.conceal();
    modal.isEnabled = false;
    if (this.hasAttribute('aria-labelledby')) {
      if (this._ariaLabelledByData === undefined) this._ariaLabelledByData = this.getAttribute('aria-labelledby');
      this.removeAttribute('aria-labelledby');
    };
    if (this.hasAttribute('aria-label')) {
      if (this._ariaLabelData === undefined) this._ariaLabelledByData = this.getAttribute('aria-label');
      this.removeAttribute('aria-label');
    }
    this.unlistenClick({ capture: true });
  }

  handleClick (e) {
    if (e.target.matches('a, button') && !e.target.matches('[aria-controls]') && !e.target.matches(api.core.DisclosureSelector.PREVENT_CONCEAL)) {
      const modal = this.element.getInstance('Modal');
      modal.conceal();
    }
  }
}

export { HeaderModal };
