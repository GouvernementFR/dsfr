import { ComponentActionee } from '../component-actionee';
import ID from './id';

class QuoteActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'QuoteActionee';
  }

  get label () {
    const blockquote = this.node.querySelector('blockquote');
    if (blockquote) {
      const firstText = this.getFirstText(blockquote);
      if (firstText) {
        return firstText;
      }
    }
    return 'citation';
  }

  get component () {
    return ID;
  }
}

export { QuoteActionee };
