import api from '../../api.js';

class HeaderModal extends api.core.Instance {
  constructor () {
    super();
    this._mouseUpHandling = this.mouseUpHandler.bind(this);
  }

  static get instanceClassName () {
    return 'HeaderModal';
  }

  init () {
    this.isResizing = true;
  }

  resize () {
    if (this.isBreakpoint(api.core.Breakpoints.LG)) this.unqualify();
    else this.qualify();
  }

  qualify () {
    this.setAttribute('role', 'dialog');
    const modal = this.element.getInstance('Modal');
    if (!modal) return;
    const buttons = modal.buttons;
    let id = '';
    for (const button of buttons) {
      id = button.id || id;
      if (button.isPrimary && id) break;
    }
    this.setAttribute('aria-labelledby', id);
    this.listen('mouseup', this._mouseUpHandling, { capture: true });
  }

  unqualify () {
    const modal = this.element.getInstance('Modal');
    if (modal) modal.conceal();
    this.removeAttribute('role');
    this.removeAttribute('aria-labelledby');
    this.unlisten('mouseup', this._mouseUpHandling, { capture: true });
  }

  mouseUpHandler (e) {
    if (e.target.matches('a, button') && !e.target.matches('[aria-controls]') && !e.target.matches(api.core.DisclosureSelector.PREVENT_CONCEAL)) {
      const modal = this.element.getInstance('Modal');
      modal.conceal();
    }
  }
}

export { HeaderModal };
