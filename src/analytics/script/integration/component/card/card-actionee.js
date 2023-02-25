import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import { CardLinkActionee } from './card-link-actionee';
import { CardSelector } from './card-selector';
import ID from './id';

class CardActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION);
  }

  static get instanceClassName () {
    return 'CardActionee';
  }

  init () {
    console.log('CARD');
    if (this.node.querySelector(CardSelector.LINK)) this.register(CardSelector.LINK, CardLinkActionee);
  }

  get label () {
    const cardTitle = this.node.querySelector(CardSelector.TITLE);
    if (cardTitle) return cardTitle.textContent.trim();

    const selector = Array.from({ length: 6 }, (v, i) => `h${i + 1}`).join(',');
    const headings = this.node.querySelector(selector) ? [...this.node.querySelector(selector)].filter(heading => (this.node.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) : [];
    if (headings.length) return headings[0].textContent.trim();

    return null;
  }

  get component () {
    return ID;
  }
}

export { CardActionee };
