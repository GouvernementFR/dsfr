import { ComponentActionee } from '../component-actionee';
import { CalloutSelector } from './callout-selector';
import ID from './id';

class CalloutActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'CalloutActionee';
  }

  init () {
    this.setImpressionType();
  }

  get label () {
    const calloutTitle = this.node.querySelector(CalloutSelector.TITLE);
    if (calloutTitle) return calloutTitle.textContent.trim();

    return 'Mise en avant';
  }

  get component () {
    return ID;
  }
}

export { CalloutActionee };
