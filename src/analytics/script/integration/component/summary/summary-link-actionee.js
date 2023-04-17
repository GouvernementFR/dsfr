import { ComponentActionee } from '../component-actionee';
import ID from './id';

class SummaryLinkActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'SummaryLinkActionee';
  }

  init () {
    this.detectInteractionType();
    this.listenClick();
  }

  get label () {
    return this.getFirstText();
  }

  get component () {
    return ID;
  }
}

export { SummaryLinkActionee };
