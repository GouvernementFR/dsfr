import { addClass, removeClass } from '../';

class AriaControllee {
  constructor (element, modifier) {
    this.element = element;
    this.modifier = modifier;
    this.id = element.id;
  }

  activate () {
    addClass(this.element, this.modifier);
    // fermer les enfants
  }

  deactivate () {
    removeClass(this.element, this.modifier);
  }

  apply (value) {
    if (value) this.activate();
    else this.deactivate();
  }
}

export { AriaControllee };
