import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import { TabButtonActionee } from './tab-button-actionee';
import ID from './id';

class TabActionee extends ComponentActionee {
  constructor () {
    super(Type.DISCLOSE, 2);
  }

  static get instanceClassName () {
    return 'TabActionee';
  }

  init () {
    this.register(`[aria-controls="${this.id}"]`, TabButtonActionee);
    this.listen(api.core.DisclosureEvent.DISCLOSE, this.handleDisclose.bind(this));
  }

  handleDisclose () {
    this.act();
  }

  get label () {
    const selector = Array.from({ length: 6 }, (v, i) => `h${i + 1}`).join(',');
    const query = this.node.querySelectorAll(selector);
    if (query.length) {
      const headings = [...query].filter(heading => (this.node.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0);
      if (headings.length) return headings[0].textContent.trim();
    }

    const button = document.querySelector(`[aria-controls="${this.id}"]`);
    return button.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { TabActionee };
