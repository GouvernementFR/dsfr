import { Accordion } from './accordion';

class Accordions {
  constructor () {
    this.init();
  }

  init () {
    Accordion.build(document);
  }
}

export { Accordions };
