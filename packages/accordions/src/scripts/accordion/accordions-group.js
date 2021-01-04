import { CollapsesGroup, KeyListener } from '@gouvfr/core/src/scripts';
import { ACCORDION_BUTTON, ACCORDIONS_GROUP } from './accordion-constants';

class AccordionsGroup extends CollapsesGroup {
  constructor (id, element) {
    super(id, element);
    this._attachEvents();
  }

  _attachEvents () {
    this.keyEvents = new KeyListener(this.element);
    this.keyEvents.down(KeyListener.DOWN, this.arrowDownPress.bind(this), true, true);
    this.keyEvents.down(KeyListener.UP, this.arrowUpPress.bind(this), true, true);
    this.keyEvents.down(KeyListener.HOME, this.homePress.bind(this), true, true);
    this.keyEvents.down(KeyListener.END, this.endPress.bind(this), true, true);
  }

  /**
   * Selectionne l'element suivant de la liste si on est sur un bouton
   * Si on est à la fin on retourne au début
   */
  arrowDownPress () {
    if (document.activeElement.classList.contains(ACCORDION_BUTTON)) {
      if (this.index < this.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
    }
  };

  /**
   * Selectionne l'element précédent de la liste si on est sur un bouton
   * Si on est au debut retourne a la fin
   */
  arrowUpPress () {
    if (document.activeElement.classList.contains(ACCORDION_BUTTON)) {
      if (this.index > 0) {
        this.index--;
      } else {
        this.index = this.length - 1;
      }
    }
  };

  /**
   * Selectionne le permier element de la liste si on est sur un bouton
   */
  homePress () {
    if (document.activeElement.classList.contains(ACCORDION_BUTTON)) {
      this.index = 0;
    }
  };

  /**
   * Selectionne le dernier element de la liste si on est sur un bouton
   */
  endPress () {
    if (document.activeElement.classList.contains(ACCORDION_BUTTON)) {
      this.index = this.length - 1;
    }
  };

  static get selector () { return ACCORDIONS_GROUP; }

  apply () {
    super.apply();
    if (this.current !== null) this.current.focus();
  }
}

export { AccordionsGroup };
