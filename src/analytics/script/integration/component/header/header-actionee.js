import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class HeaderActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION, 2);
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
