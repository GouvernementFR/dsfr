import api from '../../api.js';
import { ModalSelector } from './modal-selector.js';

const OFFSET = 32; // 32px => 8v => 2rem

class ModalBody extends api.core.Instance {
  static get instanceClassName () {
    return 'ModalBody';
  }

  init () {
    this.listen('scroll', this.divide.bind(this));
  }

  divide () {
    if (this.node.scrollHeight > this.node.clientHeight) {
      if (this.node.offsetHeight + this.node.scrollTop >= this.node.scrollHeight) {
        this.removeClass(ModalSelector.SCROLL_DIVIDER);
      } else {
        this.addClass(ModalSelector.SCROLL_DIVIDER);
      }
    } else {
      this.removeClass(ModalSelector.SCROLL_DIVIDER);
    }
  }

  resize () {
    this.adjust();
    this.request(this.adjust.bind(this));
  }

  adjust () {
    const iframe = window.frameElement;
    const windowElement = iframe ? iframe.contentWindow : window;
    const offset = OFFSET * (this.isBreakpoint(api.core.Breakpoints.MD) ? 2 : 1);
    if (this.isLegacy) this.style.maxHeight = `${windowElement.innerHeight - offset}px`;
    else this.style.setProperty('--modal-max-height', `${windowElement.innerHeight - offset}px`);
    this.divide();
  }
}

export { ModalBody };
