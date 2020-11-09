import { DisclosureButton } from '@frds/utilities/src/scripts';

class TabButton extends DisclosureButton {
  apply (value) {
    super.apply(value);
    if (this.hasAttribute) {
      this.element.setAttribute('tabindex', value ? '0' : '-1');
    }
  }
}

export { TabButton };
