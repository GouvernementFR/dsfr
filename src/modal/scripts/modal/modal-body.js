import api from '../../api.js';
import { ModalSelectors } from './modal-selectors';

const OFFSET_MOBILE = 32; // 32px => 8v => 2rem

class ModalBody extends api.core.Instance {
  init () {
    this.listen('click', this.click.bind(this));
    this.listen('scroll', this.shade.bind(this));
    this.isResizing = true;
  }

  click (e) {
    e.stopPropagation();
  }

  shade () {
    console.log('shade');
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
    console.log('resize');
    this.shade();
    this.next();
    this.requestNext();
  }

  next () {
    this.style.maxHeight = (window.innerHeight - OFFSET_MOBILE) + 'px';
  }
}

export { ModalBody };
