import { ComponentActionee } from '../component-actionee';
import ID from './id';

class LinkActionee extends ComponentActionee {
  constructor () {
    super(1, true);
  }

  static get instanceClassName () {
    return 'LinkActionee';
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

export { LinkActionee };
