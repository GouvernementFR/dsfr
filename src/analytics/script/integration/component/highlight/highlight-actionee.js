import { ComponentActionee } from '../component-actionee';
import ID from './id';

class HighlightActionee extends ComponentActionee {
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
