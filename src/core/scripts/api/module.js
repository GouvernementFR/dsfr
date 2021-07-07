import { Collection } from './utilities/collection.js';

class Module extends Collection {
  constructor (type) {
    super();
    this.type = type;
    this.isActive = false;
  }

  activate () {}
  deactivate () {}
}

export { Module };
