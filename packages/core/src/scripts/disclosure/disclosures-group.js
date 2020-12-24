/* eslint no-labels: ["error", { "allowLoop": true }] */
import { Disclosure } from './disclosure';

const groups = {};

class DisclosuresGroup {
  constructor () {
    this.disclosures = [];
    this._current = null;
  }

  static group (disclosure, factory) {
    const id = disclosure.element.getAttribute('data-group');
    if (factory === undefined) factory = () => new DisclosuresGroup();
    if (groups[id] === undefined) groups[id] = factory();
    groups[id].add(disclosure);
  }

  build (wrapper) {
    this.wrapper = wrapper;
    const elements = Array.prototype.slice.call(wrapper.querySelectorAll(this.DisclosureConstructor.selector));

    let disclosure;
    console.log('start', elements.length);

    for (let i = 0; i < elements.length; i++) {
      if (elements.some((element) => elements[i] !== element && element.contains(elements[i]))) continue;

      disclosure = this.disclosureFactory(elements[i]);
      this.add(disclosure);
    }
  }

  get DisclosureConstructor () { return Disclosure; }

  disclosureFactory (element) {
    return new this.DisclosureConstructor(element);
  }

  add (disclosure) {
    this.disclosures.push(disclosure);
    disclosure.setGroup(this);

    console.log('group add', this.current, disclosure.disclosed, !disclosure.disclosed);

    if (this.type === undefined) this.type = disclosure.type;
    else if (this.type !== disclosure.type) throw Error('A DisclosureGroup cannot contain 2 different Disclosure types');

    switch (true) {
      case this.current !== null:
      case !disclosure.disclosed:
        console.log('not current');
        disclosure.apply(false);
        break;

      default:
        this.current = disclosure;
        console.log('current');
        disclosure.apply(true);
    }
  }

  get current () { return this._current; }

  set current (disclosure) {
    if (this._current !== null && this._current !== disclosure) this._current.apply(false);
    this._current = disclosure;
    if (this._current !== null) this._current.apply(true);
    this.update();
  }

  update () {}

  conceal () {
    // close children
  }
}

export { DisclosuresGroup };
