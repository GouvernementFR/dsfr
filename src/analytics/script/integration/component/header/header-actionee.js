import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class HeaderActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION);
  }

  static get instanceClassName () {
    return 'HeaderActionee';
  }

  get label () {
    return 'En-tête';
  }

  get component () {
    return ID;
  }
}

export { HeaderActionee };
