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
    this._hasAriaLabelledByData = this.getAttribute('data-fr-aria-labelledby');
    this._hasAriaLabelData = this.getAttribute('data-fr-aria-label');
    if (this._hasAriaLabelledByData) this.setAttribute('aria-labelledby', this._hasAriaLabelledByData);
    if (this._hasAriaLabelData) this.setAttribute('aria-label', this._hasAriaLabelData);
    this.listenClick({ capture: true });
  }

  deactivateModal () {
    const modal = this.element.getInstance('Modal');
    if (!modal) return;
    modal.conceal();
    modal.isEnabled = false;
    if (this.hasAttribute('aria-labelledby')) {
      if (!this._hasAriaLabelledByData) this.setAttribute('data-fr-aria-labelledby', this.getAttribute('aria-labelledby'));
      this.removeAttribute('aria-labelledby');
    };
    if (this.hasAttribute('aria-label')) {
      if (!this._hasAriaLabelData) this.setAttribute('data-fr-aria-label', this.getAttribute('aria-label'));
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
