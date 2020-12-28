import { Collapse } from './collapse';

class Collapses {
  constructor () {
    this.init();
  }

  init () {
    Collapse.build(document);
  }
}

export { Collapses };
