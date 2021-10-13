import api from '../../api.js';
import { ModalSelector } from './modal-selector.js';
import { ModalEmission } from './modal-emission.js';

class ModalBody extends api.core.Instance {
  static get instanceClassName () {
    return 'ModalBody';
  }

  init () {
    this.listen('scroll', this.shade.bind(this));
    this.addDescent(ModalEmission.ACTIVATE, this.activate.bind(this));
    this.addDescent(ModalEmission.DEACTIVATE, this.deactivate.bind(this));
  }

  activate () {
    this.isResizing = true;
    this.resize();
  }

  deactivate () {
    this.isResizing = false;
  }

  shade () {
    if (this.node.scrollHeight > this.node.clientHeight) {
      if (this.node.offsetHeight + this.node.scrollTop >= this.node.scrollHeight) {
        this.removeClass(ModalSelector.SCROLL_SHADOW);
      } else {
        this.addClass(ModalSelector.SCROLL_SHADOW);
      }
    } else {
      this.removeClass(ModalSelector.SCROLL_SHADOW);
    }
  }

  resize () {
    this.adjust();
    this.request(this.adjust.bind(this));
  }

  adjust () {
    this.shade();
  }
}

export { ModalBody };
