import { ComponentActionee } from '../component-actionee';
import ID from './id';

class LinkActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'LinkActionee';
  }

  init () {
    this.detectInteractionType();
    this.listenActionClick();
  }

  get label () {
    const firstText = this.getFirstText();
    if (firstText) return firstText;

    return 'lien';
  }

  get component () {
    return ID;
  }
}

export { LinkActionee };
