import api from '../../api.js';

class ModalFooter extends api.core.Instance {
  static get instanceClassName () {
    return 'ModalFooter';
  }

  init () {
    this.isResizing = true;
  }

  resize () {
    this.adjust();
  }

  adjust () {
    const height = this.getRect().height;
    this.node.parentNode.style.setProperty('--modal-scroll-padding-bottom', `${height}px`);
  }
}

export { ModalFooter };
