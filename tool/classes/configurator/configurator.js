const { Part } = require('./part');
const { I18nPart } = require('./i18n/i18n-part');
const { createFile } = require('../../utilities/file');
const global = require('../../../package.json');
const { SRC } = require('./src');

const SASS_PATH = 'src/sass/';

class Configurator {
  build () {
    this.root = new Part('');
    this.flat = this.root.flat;
    this.analyse();
    this.order();
    this.generate();
  }

  analyse () {
    this.root.analyse();

    let hinged = false;
    const styles = this.root.flat.filter(part => part.style.has);
    while (!hinged) {
      hinged = true;
      for (const part of styles) {
        part.style.hinge();
        hinged &&= part.style.hinged;
      }
    }

    hinged = false;
    const scripts = this.root.flat.filter(part => part.script.has);
    while (!hinged) {
      hinged = true;
      for (const part of scripts) {
        part.script.hinge();
        hinged &&= part.script.hinged;
      }
    }
  }

  order () {
    this.root.order();
  }

  generate () {
    this._generateJsConfig();
    this._generateSassPrefix();
    this.root.generate();
    this._generateIcons();
    this._generateI18n();
    this._generateConfig();
  }

  _generateIcons () {
    const items = this.flat.map(part => part.asset.icons).flat();
    const sass = '$values: (\n' +
      items.map(item => `  ${item.name}: ( category: ${item.category}, path: '${item.dist}'),\n`).join('') +
      ');\n';
    createFile(`${SASS_PATH}icon/property/_icons.scss`, sass);
  }

  _generateI18n () {
    const i18n = {};
    const global = new I18nPart('i18n');
    i18n.global = global.data;

    this.flat.filter(part => part.i18n.has).forEach(part => { i18n[part.id] = part.i18n.data; });

    createFile('.config/i18n.json', JSON.stringify(i18n, null, 4));
  }

  _generateConfig () {
    const config = {
      ...global.config,
      version: global.version,
      data: this.root.data
    };

    createFile('.config/config.json', JSON.stringify(config, null, 4));
  }

  _generateJsConfig () {
    const keys = Object.keys(global.config);
    const lines = keys.map(key => `  ${key}: '${global.config[key]}'`);
    lines.push(`  version: '${global.version}'`);

    const js = `const config = {\n${lines.join(',\n')}\n};\n\nexport default config;\n`;
    const file = `${SRC}${this.root.getPart('api').path}config.js`;
    createFile(file, js);
  }

  _generateSassPrefix () {
    const sass = `$value: ${global.config.prefix};\n`;
    const file = `${SASS_PATH}selector/property/_prefix.scss`;
    createFile(file, sass);
  }
}

module.exports = { Configurator };
