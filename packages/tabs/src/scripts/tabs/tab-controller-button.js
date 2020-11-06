import { AriaControllerButton } from '@frds/utilities/src/scripts';

class TabControllerButton extends AriaControllerButton {
  apply (value) {
    super.apply(value);

    if (this.hasAttribute) {
      this.element.setAttribute('tabindex', value ? '0' : '-1');
    }
  }
}

export { TabControllerButton };
