const { Configuration } = require('./configuration');
const log = require('../../utilities/log');
const global = require('../../../package.json');
const { PartBuilder } = require('./part-builder');

class Builder {
  async build (path, settings) {
    this.configuration = new Configuration(path);
    log(36, `build ${global.config.namespace} - version ${global.version}`);

    const parts = this.configuration.getPartsByIds(settings.parts).map(config => new PartBuilder(config));

    const buildEach = async (part) => {
      await part.build();
    };
    parts.forEach(buildEach);
  }
}

module.exports = { Builder };
