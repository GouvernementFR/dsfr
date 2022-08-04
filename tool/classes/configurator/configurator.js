const { Part } = require('./part');

class Configurator {
  constructor () {
    this.build();
  }

  build () {
    this.root = new Part('');
    this.analyse();
    this.order();
  }

  analyse () {
    this.root.analyse();
  }

  order () {

  }

  generate () {
    this.root.generate();
  }
}

module.exports = { Configurator };
