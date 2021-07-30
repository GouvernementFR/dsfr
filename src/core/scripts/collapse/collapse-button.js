import { DisclosureTypes } from '../disclosure/disclosure-types.js';
import { DisclosureButton } from '../disclosure/disclosure-button.js';

class CollapseButton extends DisclosureButton {
  constructor () {
    super(DisclosureTypes.EXPAND);
  }

  static get instanceClassName () {
    return 'CollapseButton';
  }
}

export { CollapseButton };
