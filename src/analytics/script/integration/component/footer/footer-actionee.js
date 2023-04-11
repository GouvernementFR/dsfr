import { ComponentActionee } from '../component-actionee';
import ID from './id';

class FooterActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'FooterActionee';
  }

  init () {
    this.setImpressionType();
  }

  get label () {
    return 'Pied de page';
  }

  get component () {
    return ID;
  }
}

export { FooterActionee };
