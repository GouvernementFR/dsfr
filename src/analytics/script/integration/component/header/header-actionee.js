import { ComponentActionee } from '../component-actionee';
import ID from './id';
import { Type } from '../../../analytics/action/type';

class HeaderActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION);
  }
  
  static get instanceClassName () {
    return 'HeaderActionee';
  }

  init () {
    console.log('HEADER');
  }

  get label () {
    return 'En-tête';
  }

  get component () {
    return ID;
  }
}

export { HeaderActionee };
