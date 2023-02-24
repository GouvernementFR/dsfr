import { ComponentActionee } from '../component-actionee';
import ID from './id';

class FooterActionee extends ComponentActionee {
  static get instanceClassName () {
    return 'FooterActionee';
  }

  get label () {
    return 'Pied de page';
  }

  get component () {
    return ID;
  }
}

export { FooterActionee };
