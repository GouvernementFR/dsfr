/* eslint-disable no-new */
import '@gouvfr/schemes/src/scripts/dist';
import '@gouvfr/core/src/scripts/dist';
import '@gouvfr/accordions/src/scripts/dist';

const schemeAttr = 'data-${prefix}-theme';
const resetAttr = 'data-${prefix}-reset';

class DemoCheckbox {
  constructor (id) {
    this.checkbox = document.getElementById(id);
    this.init();
    this.checkbox.addEventListener('change', this.change.bind(this));
  }

  init () {}

  change () {}
}

class AttributeDemoCheckbox extends DemoCheckbox {
  constructor (id, attributeName, checkedValue, uncheckedValue) {
    super(id);
    this.attributeName = attributeName;
    this.checkedValue = checkedValue;
    this.uncheckedValue = uncheckedValue;
  }

  init () {
    this.observer = new MutationObserver(this.mutate.bind(this));
    this.observer.observe(document.documentElement, { attributes: true });
    this.checkbox.checked = this.state;
  }

  get state () {
    const value = document.documentElement.getAttribute(this.attributeName);
    const has = document.documentElement.hasAttribute(this.attributeName);

    switch (true) {
      case this.checkedValue === value:
        return true;

      case this.uncheckedValue === value:
        return false;

      case this.checkedValue === true && has :
        return true;

      case this.uncheckedValue === true && has :
        return true;
    }
    return false;
  }

  mutate (mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === this.attributeName) this.checkbox.checked = this.state;
    });
  }

  change () {
    const value = this.checkbox.checked ? this.checkedValue : this.uncheckedValue;

    switch (value) {
      case null:
        document.documentElement.removeAttribute(this.attributeName);
        break;

      case true:
        document.documentElement.setAttribute(this.attributeName, '');
        break;

      default:
        document.documentElement.setAttribute(this.attributeName, value);
    }
  }
}

new AttributeDemoCheckbox('theme-checkbox', schemeAttr, 'dark', 'light');
new AttributeDemoCheckbox('reset-checkbox', resetAttr, true, null);
