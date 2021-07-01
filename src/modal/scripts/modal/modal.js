import api from '../../api.js';
import { ModalSelectors } from './modal-selectors';
import { ModalButton } from './modal-button';

class Modal extends api.core.Disclosure {
  constructor () {
    super(api.core.DisclosureTypes.OPENED, ModalSelectors.MODAL, ModalButton, 'ModalsGroup');
    this.scrollDistance = 0;
    this.scrolling = this.resize.bind(this, false);
    this.resizing = this.resize.bind(this, true);
  }

  init () {
    super.init();
    this.listen('click', this.click.bind(this));
    this.listenKey(api.core.KeyCodes.ESCAPE, this.conceal.bind(this), true, true);
  }

  click (e) {
    this.conceal();
  }

  disclose (withhold) {
    if (!super.disclose(withhold)) return false;
    // this.resize(true);
    this.isScrollLocked = true;
    return true;
  }

  conceal (withhold, preventFocus) {
    if (!super.conceal(withhold, preventFocus)) return false;
    this.isScrollLocked = false;
    return true;
  }

  /**
   * Fixe l'arrière plan quand la modal est ouverte
   */
  // TODO: implémenter preventScroll
  /*
  handleScroll (isScrollable) {
    if (isScrollable) {
      api.core.removeClass(document.documentElement, NO_SCROLL_CLASS);
      document.body.style.top = '';
      window.scroll(0, this.scrollDistance);
    } else {
      if (!document.documentElement.classList.contains(NO_SCROLL_CLASS)) {
        this.scrollDistance = window.scrollY;
      }
      document.body.style.top = this.scrollDistance * -1 + 'px';
      api.core.addClass(document.documentElement, NO_SCROLL_CLASS);
    }
  }

   */
}

export { Modal };
