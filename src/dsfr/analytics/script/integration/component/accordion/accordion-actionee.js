import { ComponentActionee } from '../component-actionee';
import { AccordionSelector } from './accordion-selector';
import { AccordionButtonActionee } from './accordion-button-actionee';
import ID from './id';

class AccordionActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'AccordionActionee';
  }

  init () {
    this.setDiscloseType();
    this.wrapper = this.node.closest(AccordionSelector.ACCORDION);
    this.detectLevel(this.wrapper);
    this.register(`[aria-controls="${this.id}"]`, AccordionButtonActionee);
    this.listenDisclose();
  }

  get label () {
    if (this.wrapper) {
      const title = this.wrapper.querySelector(AccordionSelector.TITLE);
      if (title) {
        const text = this.getFirstText(title);
        if (text) return text;
      }
    }
    const instance = this.element.getInstance('Collapse');
    if (instance) {
      const button = instance.buttons.filter(button => button.isPrimary)[0];
      if (button) {
        const text = this.getFirstText(button);
        if (text) return text;
      }
    }
    return 'accordéon';
  }

  get component () {
    return ID;
  }

  dispose () {
    super.dispose();
  }
}

export { AccordionActionee };
