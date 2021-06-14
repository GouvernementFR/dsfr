import { DisclosureTypes } from '../disclosure/disclosure-types';
import { DisclosureButton } from '../disclosure/disclosure-button';

class CollapseButton extends DisclosureButton {
  constructor () {
    super(DisclosureTypes.EXPAND);
  }
}

export { CollapseButton };
