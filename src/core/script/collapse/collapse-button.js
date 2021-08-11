import { DisclosureType } from '../disclosure/disclosure-type.js';
import { DisclosureButton } from '../disclosure/disclosure-button.js';

class CollapseButton extends DisclosureButton {
  constructor () {
    super(DisclosureType.EXPAND);
  }

  static get instanceClassName () {
    return 'CollapseButton';
  }
}

export { CollapseButton };
