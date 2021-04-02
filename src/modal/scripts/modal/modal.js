import api from '../../api.js';
import {
  OFFSET_MOBILE,
  NO_SCROLL_CLASS,
  MODAL_CLASS,
  SCROLL_SHADOW_CLASS,
  MODAL_BODY_SELECTOR
} from './constants';
import { ModalsGroup } from './modals-group';

const group = new ModalsGroup();

class Modal extends api.core.Disclosure {
  constructor (element) {
    super(element);
    this.body = this.element.querySelector(MODAL_BODY_SELECTOR);
    this.scrollDistance = 0;
    this.scrolling = this.resize.bind(this, false);
    this.resizing = this.resize.bind(this, true);
    this.init();
    this.resize(true);
  }

  init () {
    this.element.addEventListener('click', this.click.bind(this));

    this.keyListener = new api.KeyListener(this.element);
    this.keyListener.down(api.KeyListener.ESCAPE, this.conceal.bind(this), true, true);

    if (this.body) {
      this.body.addEventListener('scroll', this.scrolling);
      window.addEventListener('resize', this.resizing);
      // window.addEventListener('orientationchange', this.resizing);
    }
  }

  click (e) {
    if (this.body && this.body !== e.target && !this.body.contains(e.target)) this.conceal();
  }

  gather () {
    group.add(this);
  }

  disclose (withhold) {
    if (!super.disclose(withhold)) return false;
    this.resize(true);
    this.handleScroll(false);
    return true;
  }

  conceal (withhold, preventFocus) {
    if (!super.conceal(withhold, preventFocus)) return false;
    this.handleScroll(true);
    return true;
  }

  /**
   * Fixe l'arrière plan quand la modal est ouverte
   */
  // TODO: créer une fonction de fix de scroll dans core (api.noScroll = true)
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

  /**
   * Ajoute une ombre autour du footer lorsque l'on peut scroller dans la modale
   * corrige le 100vh, en mobile notamment, lorsque la barre navigateur est présente par exemple.
   */
  resize (isResizing, e) {
    if (!this.body) return;
    if (this.body.scrollHeight > this.body.clientHeight) {
      if (this.body.offsetHeight + this.body.scrollTop >= this.body.scrollHeight) {
        api.core.removeClass(this.body, SCROLL_SHADOW_CLASS);
      } else {
        api.core.addClass(this.body, SCROLL_SHADOW_CLASS);
      }
    } else {
      api.core.removeClass(this.body, SCROLL_SHADOW_CLASS);
    }

    if (isResizing) {
      this.body.style.maxHeight = (window.innerHeight - OFFSET_MOBILE) + 'px';

      // Une deuxième fois après positionnement des barres du navigateur (ios)
      // TODO: à tester si fonctionnel sans setTimeout
      api.core.engine.renderer.next(() => {
        this.body.style.maxHeight = (window.innerHeight - OFFSET_MOBILE) + 'px';
      });
    }
  }

  static get type () { return api.core.DISCLOSURE_TYPES.opened; }
  static get selector () { return MODAL_CLASS; }

  get GroupConstructor () { return ModalsGroup; }
}

export { Modal };
