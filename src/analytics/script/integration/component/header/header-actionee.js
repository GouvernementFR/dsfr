import { ComponentActionee } from '../component-actionee';
import ID from './id';

class HeaderActionee extends ComponentActionee {
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
