import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class ConsentActionee extends ComponentActionee {
  constructor () {
    super(Type.null);
  }

  static get instanceClassName () {
    return 'ConsentActionee';
  }

  get label () {
    return 'Gestionnaire de consentement';
  }

  get component () {
    return ID;
  }
}

export { ConsentActionee };
