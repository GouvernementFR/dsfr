import { ComponentActionee } from '../component-actionee';
import ID from './id';

class ConsentActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'ConsentActionee';
  }

  get label () {
    return 'gestionnaire de consentement';
  }

  get component () {
    return ID;
  }
}

export { ConsentActionee };
