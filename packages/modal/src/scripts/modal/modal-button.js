import api from '../../../api.js';

class ModalButton extends api.DisclosureButton {
  /**
   * TODO: https://a11ysupport.io/tech/aria/aria-haspopup_attribute
   */
  apply (value) {
    super.apply(value);
    // if (!this.hasAttribute) return;
    // this.element.setAttribute(this.disclosure.attributeName, value);
  }
}

export { ModalButton };
