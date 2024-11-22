import { ComponentActionee } from '../component-actionee';

class HeaderModalButtonActionee extends ComponentActionee {
  constructor () {
    super(4);
  }

  static get instanceClassName () {
    return 'HeaderModalButtonActionee';
  }
}

export { HeaderModalButtonActionee };
