import { ComponentActionee } from '../component-actionee';
import ID from './id';

class PaginationActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'PaginationActionee';
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

export { PaginationActionee };
