import { ComponentActionee } from '../component-actionee';
import ID from './id';

class HeaderActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'HeaderActionee';
  }

  get label () {
    return 'en-tête';
  }

  get component () {
    return ID;
  }
}

export { HeaderActionee };
