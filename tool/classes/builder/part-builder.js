const log = require('../../utilities/log');
const { StyleBuilder } = require('./style/style-builder');

class PartBuilder {
  constructor (config, settings) {
    this.config = config;
    this.settings = settings;
    this.init();
  }

  init () {
    if (this.config.style) this.style = new StyleBuilder(this.config.style);
  }

  async build () {
    log.section(this.config.id, true);
    if (this.style) await this.style.build(this.settings);
  }
}

module.exports = { PartBuilder };
