import { ComponentActionee } from '../component-actionee';
import { SummarySelector } from './summary-selector';

class SummarySectionActionee extends ComponentActionee {
  constructor () {
    super(2);
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
    const firstText = this.getFirstText(this._link);
    if (firstText) return firstText;
    return 'section sommaire';
  }
}

export { SummarySectionActionee };
