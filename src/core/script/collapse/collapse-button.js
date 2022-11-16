import { DisclosureType } from '../disclosure/disclosure-type.js';
import { DisclosureButton } from '../disclosure/disclosure-button.js';

class CollapseButton extends DisclosureButton {
  constructor () {
    super(DisclosureType.EXPAND);
  }

  static get instanceClassName () {
    return 'CollapseButton';
  }

  get isPrimary () {
    return super.isPrimary && this.registration.creator.isButtonPrimary(this);
  }
}

export { CollapseButton };
