import { DisclosuresGroup } from './disclosures-group';
import { DisclosureButton } from './disclosure-button';
import { addClass, removeClass } from '..';

class Disclosure {
  constructor (element) {
    this.element = element;
    this.id = element.id;
    this.buttons = [];
    this.disclosed = null;
    this._type = this.constructor.type;
    this._selector = this.constructor.selector;
    this.modifier = this._selector + '--' + this._type.id;
    this.attributeName = (this._type.aria ? 'aria-' : 'data-${prefix}-') + this._type.id;

    if (this.element.hasAttribute('data-group')) DisclosuresGroup.group(this, this.groupFactory);

    const buttons = document.querySelectorAll('[aria-controls="' + this.id + '"]');

    if (buttons.length > 0) for (let i = 0; i < buttons.length; i++) this.addButton(buttons[i]);

    this.disclosed = this.disclosed === true;

    this.apply(this.disclosed);

    this.element.addEventListener('update', this.updating.bind(this));
  }

  static get type () { return null; }

  static get selector () { return ''; }

  addButton (element) {
    const button = this.buttonFactory(element);
    if (button.hasAttribute) {
      if (this.disclosed === null) {
        this.disclosed = button.disclosed;
      } else button.apply(this.disclosed);
    }
    this.buttons.push(button);
  }

  groupFactory () {
    return new DisclosuresGroup();
  }

  buttonFactory (button) {
    return new DisclosureButton(button, this);
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

    if (this.group !== undefined) this.group.current = null;
    this.apply(false);
  }

  apply (value) {
    this.disclosed = value;
    if (value) addClass(this.element, this.modifier);
    else removeClass(this.element, this.modifier);
    for (let i = 0; i < this.buttons.length; i++) this.buttons[i].apply(value);
    this.update();
  }

  change (hasAttribute) {
    console.log('change', hasAttribute, this.type);
    switch (this.constructor.type) {
      case Disclosure.TYPES.expand:
        switch (true) {
          case !hasAttribute:
          case this.disclosed:
            this.conceal();
            break;

          default:
            this.disclose();
        }
        break;

      case Disclosure.TYPES.select:
        this.disclose();
        break;

      case Disclosure.TYPES.open:
        this.disclose();
        break;
    }
  }

  updating (e) {
    e.stopPropagation();
    this.update();
  }

  update () {
    if (this.group !== undefined) this.group.update();
  }

  setGroup (group) {
    this.group = group;
  }
}

Disclosure.TYPES = {
  expand: {
    id: 'expanded',
    aria: true
  },
  select: {
    id: 'selected',
    aria: true
  },
  open: {
    id: 'opened',
    aria: false
  }
};

export { Disclosure };
