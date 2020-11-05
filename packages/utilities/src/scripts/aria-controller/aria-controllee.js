import { addClass, removeClass } from '../';

class AriaControllee {
  constructor(element, modifier) {
    this.element = element;
    this.modifier = modifier;
    this.id = element.id;
  }

  activate() {
    addClass(this.element, this.modifier);
    //this.element
  }

  deactivate() {
    removeClass(this.element, this.modifier);

  }
}

export { AriaControllee };
