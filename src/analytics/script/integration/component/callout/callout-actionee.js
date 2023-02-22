import { ComponentActionee } from '../component-actionee';
import { CalloutSelector} from './callout-selector';
import ID from './id';

class CalloutActionee extends ComponentActionee {
  static get instanceClassName () {
    return 'CalloutActionee';
  }

  init () {
    console.log('CALLOUT');
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
