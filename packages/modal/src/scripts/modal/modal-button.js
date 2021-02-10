import { DisclosureButton } from '@gouvfr/core/src/scripts';

class ModalButton extends DisclosureButton {
  /**
   * https://a11ysupport.io/tech/aria/aria-haspopup_attribute
   */

  apply (value) {
    super.apply(value);
    // if (!this.hasAttribute) return;
    // this.element.setAttribute(this.disclosure.attributeName, value);
  }
}

export { ModalButton };
