import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class FooterActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION);
  }
  
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
