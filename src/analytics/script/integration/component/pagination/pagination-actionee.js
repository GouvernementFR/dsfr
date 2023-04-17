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
    const firstText = this.getFirstText();
    if (firstText) return firstText;
    return null;
  }

  get component () {
    return ID;
  }
}

export { PaginationActionee };
