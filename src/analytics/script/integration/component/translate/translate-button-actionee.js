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
    this.isMuted = true;
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
    return 'bouton sélecteur de langue';
  }

  get component () {
    return ID;
  }
}

export { TranslateButtonActionee };
