import { ComponentActionee } from '../component-actionee';
import ID from './id';

class TranslateButtonActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'TranslateButtonActionee';
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
    const button = this.button;
    if (button && !button.disclosed) this.act();
  }

  get label () {
    const label = this.getInteractionLabel();
    if (label) return label;
    return null;
  }

  get component () {
    return ID;
  }
}

export { TranslateButtonActionee };
