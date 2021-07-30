import api from '../../api.js';
import { ModalSelectors } from './modal-selectors.js';
import { ModalEmissions } from './modal-emissions.js';

const OFFSET = 32; // 32px => 8v => 2rem

class ModalBody extends api.core.Instance {
  static get instanceClassName () {
    return 'ModalBody';
  }

  init () {
    this.listen('scroll', this.shade.bind(this));
    this.addDescent(ModalEmissions.ACTIVATE, this.activate.bind(this));
    this.addDescent(ModalEmissions.DEACTIVATE, this.deactivate.bind(this));
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
        this.removeClass(ModalSelectors.SCROLL_SHADOW);
      } else {
        this.addClass(ModalSelectors.SCROLL_SHADOW);
      }
    } else {
      this.removeClass(ModalSelectors.SCROLL_SHADOW);
    }
  }

  resize () {
    this.adjust();
    this.request(this.adjust.bind(this));
  }

  adjust () {
    const offset = OFFSET * (this.isBreakpoint(api.core.Breakpoints.MD) ? 2 : 1);
    this.style.maxHeight = `${window.innerHeight - offset}px`;
    this.shade();
  }
}

export { ModalBody };
