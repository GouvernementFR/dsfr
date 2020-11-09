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

  build (wrapper, selector, type) {
    this.wrapper = wrapper;
    const elements = wrapper.querySelectorAll(selector);

    let disclosure;
    for (let i = 0; i < elements.length; i++) {
      // vérifier qu'il n'y a pas 2 fois le selecteur entre le wrapper et l'élément.

      disclosure = this.disclosureFactory(elements[i], type, selector);
      this.add(disclosure);
    }
  }

  disclosureFactory (element, type, selector) {
    return new Disclosure(element, type, selector);
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
  }

  conceal () {
    // close children
  }
}

export { DisclosuresGroup };
