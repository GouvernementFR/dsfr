import { DisclosuresGroup } from './disclosures-group';
import { DisclosureButton } from './disclosure-button';
import { addClass, removeClass } from '..';

class Disclosure {
  constructor (element, type, selector) {
    this.element = element;
    this.type = type;
    this.modifier = selector + type;
    this.id = element.id;
    this.attributeName = 'aria-' + this.type;
    this.buttons = [];
    this.disclosed = null;

    if (this.element.hasAttribute('data-group')) DisclosuresGroup.group(this, this.groupFactory);

    const buttons = document.querySelectorAll('[aria-controls="' + this.id + '"]');

    if (buttons.length > 0) {
      let button;
      for (let i = 0; i < buttons.length; i++) {
        button = this.buttonFactory(buttons[i]);
        if (button.hasAttribute) {
          if (this.disclosed === null) {
            this.disclosed = button.disclosed;
            this.primary = button;
          } else button.apply(this.disclosed);
        }
        this.buttons.push(button);
      }
    }

    this.disclosed = this.disclosed === true;

    this.apply(this.disclosed);
  }

  groupFactory () {
    return new DisclosuresGroup();
  }

  buttonFactory (button) {
    return DisclosureButton(button, this);
  }

  disclose () {
    console.log('disclose', this.disclosed);
    if (this.disclosed) return;

    if (this.group !== null) this.group.current = this;
    this.apply(true);
  }

  conceal () {
    console.log('conceal', this.disclosed);
    if (!this.disclosed) return;

    if (this.group != null) this.group.current = null;
    this.apply(false);
  }

  apply (value) {
    this.disclosed = value;
    if (value) addClass(this.element, this.modifier);
    else removeClass(this.element, this.modifier);
    for (let i = 0; i < this.buttons.length; i++) this.buttons[i].apply(value);
  }

  change (hasAttribute) {
    console.log('change', hasAttribute, this.type);
    switch (this.type) {
      case Disclosure.EXPAND:
        switch (true) {
          case !hasAttribute:
          case this.disclosed:
            this.conceal();
            break;

          default:
            this.disclose();
        }
        break;

      case Disclosure.SELECT:
        this.disclose();
        break;
    }
  }

  setGroup (group) {
    this.group = group;
  }
}

Disclosure.EXPAND = 'expanded';
Disclosure.SELECT = 'selected';

export { Disclosure };
