import { ComponentActionee } from '../component-actionee';
import ID from './id';

class QuoteActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'QuoteActionee';
  }

  init () {
    this.setImpressionType();
  }

  get label () {
    const blockquote = this.node.querySelector('blockquote');
    if (blockquote) {
      const quote = this.getFirstText(blockquote);
      if (quote) {
        return quote.length > 50 ? `${quote.substring(0, 35)}[...]` : quote;
      }
    }
    return null;
  }

  get component () {
    return ID;
  }
}

export { QuoteActionee };
