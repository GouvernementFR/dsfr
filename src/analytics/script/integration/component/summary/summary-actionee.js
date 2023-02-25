import { ComponentActionee } from '../component-actionee';
import { SummarySelector } from './summary-selector';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class SummaryActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION, 1);
  }

  static get instanceClassName () {
    return 'SummaryActionee';
  }

  init () {
    console.log('SUMMARY');
  }

  get label () {
    const title = this.node.querySelector(SummarySelector.TITLE);
    if (title) return title.textContent.trim();
    return 'Sommaire';
  }

  get component () {
    return ID;
  }
}

export { SummaryActionee };
