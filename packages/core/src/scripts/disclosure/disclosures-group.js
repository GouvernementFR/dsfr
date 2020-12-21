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

  build (wrapper, wrapperSelector, selector, type) {
    // const wrapperSelector = '.' + wrapper.classList[0]; // Pas terrible, on l'ajoute en params ?
    this.wrapper = wrapper;
    const elements = wrapper.querySelectorAll(selector);

    let disclosure;
    for (let i = 0; i < elements.length; i++) {
      // on l'ajoute qu'au wrapper le plus proche
      if (elements[i].closest(wrapperSelector) === this.wrapper) {
        disclosure = this.disclosureFactory(elements[i], type, selector);
        this.add(disclosure);
      }
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
