import { ComponentActionee } from '../component-actionee';
import ID from './id';

class PaginationActionee extends ComponentActionee {
  constructor () {
    super(null, 1);
    this._data = {};
  }

  static get instanceClassName () {
    return 'PaginationActionee';
  }

  init () {
    this.detectInteraction();
    this.listenClick();
  }

  handleClick () {
    this.act();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { PaginationActionee };
