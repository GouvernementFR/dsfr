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

  get label () {
    const calloutTitle = this.node.querySelector(CalloutSelector.TITLE);
    if (calloutTitle) {
      const text = this.getFirstText(calloutTitle);
      if (text) return text;
    }

    return 'mise en avant';
  }

  get component () {
    return ID;
  }
}

export { CalloutActionee };
