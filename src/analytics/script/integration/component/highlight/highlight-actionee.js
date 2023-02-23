import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class HighlightActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION);
  }

  static get instanceClassName () {
    return 'HighlightActionee';
  }

  init () {
    console.log('HIGHLIGHT');
  }

  get label () {
    return 'Mise en exergue';
  }

  get component () {
    return ID;
  }
}

export { HighlightActionee };
