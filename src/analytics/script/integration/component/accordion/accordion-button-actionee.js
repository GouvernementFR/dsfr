import { ComponentActionee } from '../component-actionee';
import ID from './id';

class AccordionButtonActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'AccordionButtonActionee';
  }

  init () {
    this.setClickType();
    this.id = this.node.id || this.registration.creator.node.id;
    this.listenClick();
  }

  get button () {
    return this.element.getInstance('CollapseButton');
  }

  handleClick () {
    if (this.button && !this.button.disclosed) this.act();
  }

  get label () {
    return this.getFirstText(this.node);
  }

  get component () {
    return ID;
  }
}

export { AccordionButtonActionee };
