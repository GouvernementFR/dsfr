import { Disclosure, KeyListener, addClass, removeClass } from '@gouvfr/core/src/scripts';
import {
  OFFSET_MOBILE,
  NO_SCROLL_SELECTOR,
  MODAL_SELECTOR,
  SCROLL_SHADOW_SELECTOR,
  BODY_SELECTOR
} from './modal-constants';
import { ModalsGroup } from './modals-group';
import { ModalButton } from './modal-button';

const group = new ModalsGroup();

class Modal extends Disclosure {
  constructor (element) {
    super(element);
    this.body = this.element.querySelector(BODY_SELECTOR);
    this.scrollDistance = 0;
    this.scrolling = this.resize.bind(this, false);
    this.resizing = this.resize.bind(this, true);
    this.listen();
    this.resize(true);
  }

  listen () {
    this.element.addEventListener('click', this.click.bind(this));

    this.keyListener = new KeyListener(this.element);
    this.keyListener.down(KeyListener.ESCAPE, this.conceal.bind(this), true, true);

    this.body.addEventListener('scroll', this.scrolling);
    window.addEventListener('resize', this.resizing);
    window.addEventListener('orientationchange', this.resizing);
  }

  click (e) {
    if (this.element === e.target) this.conceal();
  }

  group () {
    group.add(this);
  }

  apply (value, initial) {
    this.handleScroll(!value);
    if (!value) {
      if (!initial) this.focus();
    } else {
      if (!initial) this.resize(true);
    }
    super.apply(value, initial);
  }

  /**
   * Fixe l'arrière plan quand la modal est ouverte
   */
  handleScroll (isScrollable) {
    if (isScrollable) {
      removeClass(document.documentElement, NO_SCROLL_SELECTOR);
      document.body.style.top = '';
      window.scroll(0, this.scrollDistance);
    } else {
      if (!document.documentElement.classList.contains(NO_SCROLL_SELECTOR)) {
        this.scrollDistance = window.scrollY;
      }
      document.body.style.top = this.scrollDistance * -1 + 'px';
      addClass(document.documentElement, NO_SCROLL_SELECTOR);
    }
  }

  /**
   * Ajoute une ombre autour du footer lorsque l'on peut scroller dans la modale
   * corrige le 100vh, en mobile notamment, lorsque la barre navigateur est présente par exemple.
   */
  resize (isResizing, e) {
    if (this.body.scrollHeight > this.body.clientHeight) {
      if (this.body.offsetHeight + this.body.scrollTop >= this.body.scrollHeight) {
        removeClass(this.body, SCROLL_SHADOW_SELECTOR);
      } else {
        addClass(this.body, SCROLL_SHADOW_SELECTOR);
      }
    } else {
      removeClass(this.body, SCROLL_SHADOW_SELECTOR);
    }

    if (isResizing) {
      this.body.style.maxHeight = (window.innerHeight - OFFSET_MOBILE) + 'px';

      // Une deuxième fois après positionnement des barres du navigateur (ios)
      setTimeout(() => {
        this.body.style.maxHeight = (window.innerHeight - OFFSET_MOBILE) + 'px';
      }, 400);
    }
  }

  static get type () { return Disclosure.TYPES.expand; }
  static get selector () { return MODAL_SELECTOR; }

  buttonFactory (element) {
    return new ModalButton(element, this);
  }

  get GroupConstructor () { return ModalsGroup; }
}

export { Modal };
