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
    this.setAttribute('role', 'dialog');
    const modal = this.element.getInstance('Modal');
    if (!modal) return;
    modal.isEnabled = true;
    const buttons = modal.buttons;
    let id = '';
    for (const button of buttons) {
      id = button.id || id;
      if (button.isPrimary && id) break;
    }
    this.setAttribute('aria-labelledby', id);
  }

  deactivateModal () {
    const modal = this.element.getInstance('Modal');
    if (!modal) return;
    modal.conceal();
    modal.isEnabled = false;
    this.removeAttribute('role');
    this.removeAttribute('aria-labelledby');
  }
}

export { HeaderModal };
