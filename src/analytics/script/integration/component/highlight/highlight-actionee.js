import { ComponentActionee } from '../component-actionee';
import ID from './id';

class HighlightActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'HighlightActionee';
  }

  init () {
    this.setImpressionType();
  }

  get label () {
    return 'mise en exergue';
  }

  get component () {
    return ID;
  }
}

export { HighlightActionee };
