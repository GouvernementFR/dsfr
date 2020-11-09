import { TabButton } from './tab-button';
import { Disclosure } from '@frds/utilities/src/scripts';

class Tab extends Disclosure {
  buttonFactory (element) {
    return new TabButton(element, this);
  }
}

export { Tab };
