import { TabButton } from './tab-button';
import { Disclosure } from '@frds/utilities/src/scripts';
const HIDDEN = 'hidden';

/**
  * Tab (tab panel), extends disclosure that add modifier --selected, and add attributte hidden, to the panel
  */
class Tab extends Disclosure {
  buttonFactory (element) {
    return new TabButton(element, this);
  }

  /**
  * apply(true), show tab
  * apply(false), hide tab
  */
  apply (value) {
    super.apply(value);
    if (value) {
      this.element.removeAttribute(HIDDEN);
    } else {
      this.element.setAttribute(HIDDEN, true);
    }
  }
}

export { Tab };
