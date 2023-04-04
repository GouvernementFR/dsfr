import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class ConnectLinkActionee extends ComponentActionee {
  constructor () {
    super(Type.CLICK, 2);
  }

  static get instanceClassName () {
    return 'ConnectLinkActionee';
  }

  init () {
    this.detectInteractionType();
    this.listenClick();
  }

  get label () {
    return this.node.textContent.trim() || 'Qu\'est-ce que FranceConnect ?';
  }

  get component () {
    return ID;
  }
}

export { ConnectLinkActionee };
