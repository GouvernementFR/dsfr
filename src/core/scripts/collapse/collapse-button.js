import { DisclosureTypes } from '../disclosure/disclosure-types.js';
import { DisclosureButton } from '../disclosure/disclosure-button.js';

class CollapseButton extends DisclosureButton {
  constructor () {
    super(DisclosureTypes.EXPAND);
  }
}

export { CollapseButton };
