const { Part } = require('./part');
const { I18nPart } = require('./i18n/i18n-part');
const { createFile } = require('../../utilities/file');

class Configurator {
  constructor () {
    this.build();
  }

  build () {
    this.root = new Part('');
    this.flat = this.root.flat;
    this.analyse();
    this.order();
    this.generate();
  }

  analyse () {
    this.root.analyse();

    const scripts = this.root.flat.filter(part => part.script.has);
    let hinged = false;
    while (!hinged) {
      hinged = true;
      for (const part of scripts) {
        if (!part.script.hinge()) hinged = false;
      }
    }
  }

  order () {
    this.root.order();
  }

  generate () {
    this.root.generate();
    this._generateIcons();
    this._generateI18n();
    this._generateConfig();
  }

  _generateIcons () {
    const items = this.flat.map(part => part.asset.icons).flat();
    const sass = '$icons-config: (\n' +
      items.map(item => `  ${item.name}: '${item.dist}',\n`).join('') +
      ');\n';
    createFile('.config/icons.scss', sass);
  }

  _generateI18n () {
    const i18n = {};
    const global = new I18nPart('i18n');
    i18n.global = global.data;

    this.flat.filter(part => part.i18n.has).forEach(part => { i18n[part.id] = part.i18n.data; });

    createFile('.config/i18n.json', JSON.stringify(i18n, null, 4));
  }

  _generateConfig () {
    createFile('.config/config.json', JSON.stringify(this.root.data, null, 4));
  }
}

module.exports = { Configurator };
