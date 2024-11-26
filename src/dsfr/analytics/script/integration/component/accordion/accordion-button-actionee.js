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
    this.isMuted = true;
  }

  get button () {
    return this.element.getInstance('CollapseButton');
  }

  get label () {
    const firstText = this.getFirstText();
    if (firstText) return firstText;

    return 'bouton d\'accordéon';
  }

  get component () {
    return ID;
  }
}

export { AccordionButtonActionee };
