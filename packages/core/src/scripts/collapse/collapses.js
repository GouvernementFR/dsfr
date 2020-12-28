import { COLLAPSE_SELECTOR } from './collapse-constants';
import { Collapse } from './collapse';

class Collapses {
  constructor () {
    this.collapses = [];
    this.init();
  }

  init () {
    const elements = [...document.querySelectorAll(COLLAPSE_SELECTOR)];

    for (const element of elements) this.collapses.push(new Collapse(element));
  }
}

export { Collapses };
