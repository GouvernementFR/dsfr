const log = require('../../utilities/log');
const { StyleBuilder } = require('./style-builder');

class PartBuilder {
  constructor (config) {
    this.config = config;
    this.init();
  }

  init () {
    if (this.config.style) this.style = new StyleBuilder(this.config.style);
  }

  async build (settings) {
    log.section(this.config.id, true);
    if (this.style) await this.style.build(settings);
  }
}

module.exports = { PartBuilder };
