import { ComponentActionee } from '../component-actionee';
import ID from './id';

class HeaderActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'HeaderActionee';
  }

  init () {
    this.setImpressionType();
  }

  get label () {
    return 'En-tête';
  }

  get component () {
    return ID;
  }
}

export { HeaderActionee };
