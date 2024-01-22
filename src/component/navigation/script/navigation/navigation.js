import api from '../../api.js';
import { NavigationSelector } from './navigation-selector.js';
import { NavigationMousePosition } from './navigation-mouse-position.js';

class Navigation extends api.core.CollapsesGroup {
  static get instanceClassName () {
    return 'Navigation';
  }

  init () {
    super.init();
    this.clicked = false;
    this.out = false;
    this.listen('focusout', this.focusOutHandler.bind(this));
    this.listen('mousedown', this.mouseDownHandler.bind(this));
    this.listenClick({ capture: true });
    this.listenKey(api.core.KeyCodes.RIGHT, this.pressRight.bind(this));
    this.listenKey(api.core.KeyCodes.LEFT, this.pressLeft.bind(this));
    this.listenKey(api.core.KeyCodes.UP, this.pressUp.bind(this));
    this.listenKey(api.core.KeyCodes.DOWN, this.pressDown.bind(this));
    this.listenKey(api.core.KeyCodes.HOME, this.pressHome.bind(this));
    this.listenKey(api.core.KeyCodes.END, this.pressEnd.bind(this));
  }

  validate (member) {
    return super.validate(member) && member.element.node.matches(api.internals.legacy.isLegacy ? NavigationSelector.COLLAPSE_LEGACY : NavigationSelector.COLLAPSE);
  }

  mouseDownHandler (e) {
    if (!this.isBreakpoint(api.core.Breakpoints.LG) || this.index === -1 || !this.current) return;
    this.position = this.current.node.contains(e.target) ? NavigationMousePosition.INSIDE : NavigationMousePosition.OUTSIDE;
    this.requestPosition();
  }

  clickHandler (e) {
    if (e.target.matches('a, button') && !e.target.matches('[aria-controls]') && !e.target.matches(api.core.DisclosureSelector.PREVENT_CONCEAL)) this.index = -1;
  }

  focusOutHandler (e) {
    if (!this.isBreakpoint(api.core.Breakpoints.LG)) return;
    this.out = true;
    this.requestPosition();
  }

  requestPosition () {
    if (this.isRequesting) return;
    this.isRequesting = true;
    this.request(this.getPosition.bind(this));
  }

  getPosition () {
    if (this.out) {
      switch (this.position) {
        case NavigationMousePosition.OUTSIDE:
          this.index = -1;
          break;

        case NavigationMousePosition.INSIDE:
          if (this.current && !this.current.node.contains(document.activeElement)) this.current.focus();
          break;

        default:
          if (this.index > -1 && !this.current.hasFocus) this.index = -1;
      }
    }

    this.request(this.requested.bind(this));
  }

  requested () {
    this.position = NavigationMousePosition.NONE;
    this.out = false;
    this.isRequesting = false;
  }

  /**
   * Selectionne l'element suivant de la liste si on est sur un bouton
   * Si on est à la fin on retourne au début
   */
  pressRight () {
    console.log('pressRight');
    if (this.hasFocus) {
      if (this.index < this.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }

      this.focus();
    }
  };

  /**
   * Selectionne l'element précédent de la liste si on est sur un bouton
   * Si on est au debut retourne a la fin
   */
  pressLeft () {
    console.log('pressLeft');
    debugger;
    // if (this.hasFocus) {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.length - 1;
    }

    this.focus();
    // }
  };

  pressUp () {
    console.log('pressUp');
    this.pressLeft();
  }

  pressDown () {
    console.log('pressDown');
    this.pressRight();
  }

  /**
   * Selectionne le permier element de la liste si on est sur un bouton
   */
  pressHome () {
    console.log('pressHome');
    if (this.hasFocus) {
      this.index = 0;
      this.focus();
    }
  };

  /**
   * Selectionne le dernier element de la liste si on est sur un bouton
   */
  pressEnd () {
    console.log('pressEnd');
    if (this.hasFocus) {
      this.index = this.length - 1;
      this.focus();
    }
  };

  focus () {
    if (this.current) {
      this.current.focus();
    }
  }

  get index () { return super.index; }

  set index (value) {
    if (value === -1 && this.current && this.current.hasFocus) this.current.focus();
    super.index = value;
  }
}

export { Navigation };
