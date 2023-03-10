import { ComponentActionee } from '../component-actionee';

class HeaderModalButtonActionee extends ComponentActionee {
  constructor () {
    super(null, 4);
  }

  static get instanceClassName () {
    return 'HeaderModalButtonActionee';
  }
}

export { HeaderModalButtonActionee };
