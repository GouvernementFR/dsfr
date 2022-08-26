const log = require('../../utilities/log');
const { StyleBuilder } = require('./style-builder');
const { ScriptBuilder } = require('./script-builder');

class PartBuilder {
  constructor (config) {
    this.config = config;
    this.init();
  }

  init () {
    if (this.config.style) this.style = new StyleBuilder(this.config.style);
    if (this.config.script) this.script = new ScriptBuilder(this.config.script);
  }

  async build (settings) {
    log.section(this.config.id, true);
    if (this.style) await this.style.build(settings);
    if (this.script) await this.script.build(settings);
  }
}

module.exports = { PartBuilder };
