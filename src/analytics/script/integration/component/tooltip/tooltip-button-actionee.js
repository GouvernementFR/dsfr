import { ComponentActionee } from '../component-actionee';
import ID from './id';

class TooltipButtonActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'TooltipButtonActionee';
  }

  init () {
    this.setClickType();
    this.id = this.node.id || this.registration.creator.node.id;
    this.listenClick();
  }

  get button () {
    return this.element.getInstance('TooltipButton');
  }

  click () {
    if (this.button && !this.button.disclosed) this.act();
  }

  get label () {
    const firstText = this.getFirstText();
    if (firstText) return firstText;
    return 'bouton d\'Infobulle';
  }

  get component () {
    return ID;
  }
}

export { TooltipButtonActionee };
