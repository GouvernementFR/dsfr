import { ComponentActionee } from '../component-actionee';
import ID from './id';

class ConnectLinkActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'ConnectLinkActionee';
  }

  init () {
    this.detectInteractionType();
    this.listenActionClick();
  }

  get label () {
    return this.getFirstText() || 'qu\'est-ce que FranceConnect ?';
  }

  get component () {
    return ID;
  }
}

export { ConnectLinkActionee };
