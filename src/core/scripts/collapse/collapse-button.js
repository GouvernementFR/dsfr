import { DISCLOSURE_TYPES } from '../disclosure/disclosure-types';
import { DisclosureButton } from '../disclosure/disclosure-button';

class CollapseButton extends DisclosureButton {
  constructor () {
    super(DISCLOSURE_TYPES.expand);
  }
}

export { CollapseButton };
