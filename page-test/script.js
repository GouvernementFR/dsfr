/* eslint-disable no-new */
import '@gouvfr/schemes/src/scripts/dist';

import { addClass, removeClass } from '@gouvfr/utilities/src/scripts';

const schemeAttr = 'data-${prefix}-theme';
const bodyClass = '${prefix}-body';

class DemoCheckbox {
  constructor (id) {
    this.checkbox = document.getElementById(id);
    this.init();
    this.checkbox.addEventListener('change', this.change.bind(this));
  }

  init () {}

  change () {}
}

class ThemeCheckbox extends DemoCheckbox {
  init () {
    const theme = document.documentElement.getAttribute(schemeAttr);
    if (theme === 'dark') this.checkbox.checked = true;

    this.observer = new MutationObserver(this.mutate.bind(this));
    this.observer.observe(document.documentElement, { attributes: true });
  }

  change () {
    document.documentElement.setAttribute(schemeAttr, this.checkbox.checked ? 'dark' : 'light');
  }

  mutate (mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === schemeAttr) {
        const scheme = document.documentElement.getAttribute(schemeAttr);
        if (scheme === 'dark') {
          this.checkbox.checked = true;
        } else if (scheme === 'light') {
          this.checkbox.checked = false;
        }
      }
    });
  }
}

new ThemeCheckbox('theme-checkbox');

class BodyCheckbox extends DemoCheckbox {
  change () {
    if (this.checkbox.checked) addClass(document.body, bodyClass);
    else removeClass(document.body, bodyClass);
  }
}

new BodyCheckbox('body-checkbox');
