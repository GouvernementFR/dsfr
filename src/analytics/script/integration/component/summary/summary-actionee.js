import { ComponentActionee } from '../component-actionee';
import { SummarySelector } from './summary-selector';

class SummaryActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'SummaryActionee';
  }

  get label () {
    const title = this.node.querySelector(SummarySelector.TITLE);
    if (title) return title.textContent.trim();
    return 'Sommaire';
  }
}

export { SummaryActionee };
