import { ComponentActionee } from '../component-actionee';
import { SummarySelector } from './summary-selector';

class SummarySectionActionee extends ComponentActionee {
  constructor () {
    super(null, 2);
  }

  static get instanceClassName () {
    return 'SummarySectionActionee';
  }

  init () {
    this._link = this.querySelector(SummarySelector.LINK);
  }

  validate (target) {
    return this._link !== target;
  }

  get label () {
    if (!this._link) return null;
    return this._link.textContent.trim();
  }
}

export { SummarySectionActionee };
