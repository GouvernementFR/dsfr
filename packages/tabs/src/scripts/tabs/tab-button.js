import { DisclosureButton } from '@frds/utilities/src/scripts';

/**
  * TabButton, extends DisclosureButton that add aria-selected, and add attributte tabindex and the focus if current button
 */
class TabButton extends DisclosureButton {
  apply (value) {
    super.apply(value);
    if (this.hasAttribute) {
      this.element.setAttribute('tabindex', value ? '0' : '-1');
      if (value) this.element.focus();
    }
  }
}

export { TabButton };
