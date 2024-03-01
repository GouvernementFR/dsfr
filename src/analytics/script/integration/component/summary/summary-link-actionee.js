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
    this.listenActionClick();
  }

  get label () {
    const firstText = this.getFirstText();
    if (firstText) return firstText;
    return 'lien sommaire';
  }

  get component () {
    return ID;
  }
}

export { SummaryLinkActionee };
