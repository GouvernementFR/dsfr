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
      const quote = blockquote.textContent.trim();
      return quote.length > 50 ? `${quote.substring(0, 35).trim()}[...]` : quote;
    }
    return 'Citation';
  }

  get component () {
    return ID;
  }
}

export { QuoteActionee };
