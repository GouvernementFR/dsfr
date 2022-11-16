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
    const ip = super.isPrimary && this.registration.creator.isButtonPrimary(this);
    console.log(this.node, ip);
    return ip;
  }
}

export { CollapseButton };
