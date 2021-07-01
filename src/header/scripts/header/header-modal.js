class HeaderModal extends api.core.Instance {
  constructor () {
    super();
    this.isResizing = true;
  }

  resize () {
    const modal = this.element.getInstance('Modal');

    if (this.isBreakpoint('lg')) {

    } else {
      this.element.node.setAttribute('role', 'dialog');
      this.element.node.setAttribute('aria-labelledby', this.modal.primary.element.id);
    }

    modal.conceal();

    enable () {
      this.modal.element.
      this.modal.element.setAttribute('aria-labelledby', this.modal.primary.element.id);
    }

    disable () {
      this.modal.conceal();
      this.modal.element.removeAttribute('role');
      this.modal.element.removeAttribute('aria-labelledby');
    }

  }
}
