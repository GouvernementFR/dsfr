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
    if (title) {
      const firstText = this.getFirstText(title);
      if (firstText) return firstText;
    }
    return 'sommaire';
  }
}

export { SummaryActionee };
