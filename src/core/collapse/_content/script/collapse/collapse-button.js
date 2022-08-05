import { DisclosureType } from '../../../../action/_content/script/disclosure/disclosure-type.js';
import { DisclosureButton } from '../../../../action/_content/script/disclosure/disclosure-button.js';

class CollapseButton extends DisclosureButton {
  constructor () {
    super(DisclosureType.EXPAND);
  }

  static get instanceClassName () {
    return 'CollapseButton';
  }
}

export { CollapseButton };
