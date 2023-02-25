import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class ShareActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION, 1);
  }

  static get instanceClassName () {
    return 'ShareActionee';
  }

  init () {
    console.log('SHARE');
  }

  get label () {
    return 'Boutons de partage';
  }

  get component () {
    return ID;
  }
}

export { ShareActionee };
