import { DisclosureType } from '../../../../.TODO/script/disclosure/disclosure-type.js';
import { DisclosureButton } from '../../../../.TODO/script/disclosure/disclosure-button.js';

class CollapseButton extends DisclosureButton {
  constructor () {
    super(DisclosureType.EXPAND);
  }

  static get instanceClassName () {
    return 'CollapseButton';
  }
}

export { CollapseButton };
