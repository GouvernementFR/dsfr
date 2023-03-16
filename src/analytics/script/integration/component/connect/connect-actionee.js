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
    if (this.node.classList.contains('fr-connect--plus')) return 'FranceConnect+';
    return 'FranceConnect';
  }

  get component () {
    return ID;
  }
}

export { ConnectActionee };
