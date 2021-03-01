import { DisclosuresGroup } from './disclosures-group.js';
import { DisclosureButton } from './disclosure-button.js';
import { addClass, removeClass } from '../manipulation/classes.js';
import { ns } from '../global/namespace.js';

const disclosures = [];

class Disclosure {
  constructor (element) {
    this.element = element;
    this.id = element.id;
    this.buttons = [];
    this.disclosed = null;
    this._selector = this.constructor.selector;
    this.modifier = this._selector + '--' + this.type.id;
    this.attributeName = this.type.aria ? 'aria-' + this.type.id : ns.attr(this.type.id);

    const buttons = document.querySelectorAll(this.type.aria ? `[aria-controls="${this.id}"]` : ns.attr.selector('controls', this.id));

    if (buttons.length > 0) for (let i = 0; i < buttons.length; i++) this.addButton(buttons[i]);

    this.disclosed = this.disclosed === true;
    this.apply(this.disclosed, true);

    this.group();
  }

  group () {
    DisclosuresGroup.groupById(this, this.GroupConstructor);
    DisclosuresGroup.groupByParent(this, this.GroupConstructor);
  }

  static build (from) {
    const elements = Array.prototype.slice.call(from.querySelectorAll(`.${this.selector}`));

    for (const element of elements) disclosures.push(new this(element));
  }

  get type () { return this.constructor.type; }

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

  get GroupConstructor () { return DisclosuresGroup; }

  buttonFactory (button) {
    return new DisclosureButton(button, this);
  }

  disclose () {
    if (this.disclosed) return;

    if (this.group !== undefined) this.group.current = this;
    this.apply(true);
  }

  conceal () {
    if (!this.disclosed) return;

    if (this.group !== undefined) this.group.current = null;
    this.apply(false);
  }

  apply (value, initial) {
    this.disclosed = value;
    if (value) addClass(this.element, this.modifier);
    else removeClass(this.element, this.modifier);
    for (let i = 0; i < this.buttons.length; i++) this.buttons[i].apply(value);
    if (!value) for (const disclosure of disclosures) if (disclosure !== this && this.element.contains(disclosure.element)) disclosure.reset();
  }

  reset () {}

  change (hasAttribute) {
    if (!this.constructor.type.canConceal) this.disclose();
    else {
      switch (true) {
        case !hasAttribute:
        case this.disclosed:
          this.conceal();
          break;

        default:
          this.disclose();
      }
    }
  }

  setGroup (group) {
    this.group = group;
  }

  get hasFocus () {
    if (this.element === document.activeElement) return true;
    if (this.element.querySelectorAll(':focus').length > 0) return true;
    if (this.buttons.some((button) => { return button.hasFocus; })) return true;
    return false;
  }

  focus () {
    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.buttons[i];
      if (button.hasAttribute) {
        button.element.focus();
        return;
      }
    }
  }
}

export { Disclosure };
