import { ComponentActionee } from '../component-actionee';
import ID from './id';

class FooterActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'FooterActionee';
  }

  get label () {
    return 'pied de page';
  }

  get component () {
    return ID;
  }
}

export { FooterActionee };
