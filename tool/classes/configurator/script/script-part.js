const fs = require('fs');
const { createFile } = require('../../../utilities/file');

const FILES = ['legacy@pre', 'define', 'legacy', 'register', 'legacy@post'];
const MODULE = ['define', 'register'];
const NOMODULE = ['legacy@pre', 'define', 'legacy', 'register', 'legacy@post'];

class ScriptPart {
  constructor (part, config) {
    this.part = part;
    this._config = config;
    this._data = {};
    this.init();
  }

  get has () {
    return this._has === true;
  }

  get data () {
    return {};
  }

  init () {
    const script = `src${this.part.path}/_content/script`;
    if (!fs.existsSync(script)) return;
    this.files = FILES.filter(file => fs.existsSync(`${script}/${file}.js`));
    if (this.files.length === 0) return;
    this._has = true;
    this._data.src = {
      module: `src${this.part.path}/module.js`,
      nomodule: `src${this.part.path}/nomodule.js`
    };
    this._data.dest = `dist${this.part.path}/${this.part.id}`;
  }

  analyse () {

  }

  generate () {
    const module = MODULE.map(file => this.getImport(file)).join('');
    createFile(this._data.src.module, module);
    const nomodule = NOMODULE.map(file => this.getImport(file)).join('');
    createFile(this._data.src.nomodule, nomodule);
  }

  getImport (file) {
    const script = `src${this.part.path}/_content/script`;
    const imports = this.part.children.map(child => child.script.getImport(file));
    if (this.files.indexOf(file)) imports.push(`import '${script}/${file}.js';\n`);
    return imports.join('');
  }
}

module.exports = { ScriptPart };
