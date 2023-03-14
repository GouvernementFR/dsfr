import { ComponentActionee } from '../component-actionee';
import ID from './id';

class ConnectActionee extends ComponentActionee {
  constructor () {
    super(null, 1);
  }

  static get instanceClassName () {
    return 'ConnectActionee';
  }

  init () {
    this.detectInteraction();
    this.listenClick();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { ConnectActionee };
