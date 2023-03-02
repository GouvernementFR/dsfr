import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class QuoteActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION, 1);
  }

  static get instanceClassName () {
    return 'QuoteActionee';
  }

  get label () {
    const blockquote = this.node.querySelector('blockquote');
    if (blockquote) return blockquote.textContent.trim();
    return 'Citation';
  }

  get component () {
    return ID;
  }
}

export { QuoteActionee };
