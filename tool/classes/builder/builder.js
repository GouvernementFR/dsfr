const { Configuration } = require('./configuration');
const log = require('../../utilities/log');
const global = require('../../../package.json');
const { PartBuilder } = require('./part-builder');

class Builder {
  async build (settings, path = '') {
    this.configuration = new Configuration(path);
    log(36, `build ${global.config.namespace} - version ${global.version}`);

    const parts = this.configuration.getPartsByIds(settings.parts).map(config => new PartBuilder(config));

    for (const part of parts) {
      await part.build(settings);
    }
  }
}

module.exports = { Builder };
