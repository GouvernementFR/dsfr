const fs = require('fs');
const path = require('path');
const { createFile } = require('../../../utilities/file');

const FILES = ['pre', 'pre.legacy', 'define', 'define.legacy', 'register', 'register.legacy', 'post', 'post.legacy'];
const MODULE = ['pre', 'define', 'register', 'post'];
const NOMODULE = ['pre', 'pre.legacy', 'define', 'define.legacy', 'register', 'register.legacy', 'post', 'post.legacy'];

class ScriptPart {
  constructor (part, config) {
    this.part = part;
    this._config = config || {};
    this._data = {};
    this.files = [];
    this._hinged = false;
    this.init();
  }

  get has () {
    return this._has || this._possess;
  }

  get data () {
    return this._data;
  }

  get level () {
    return this._level;
  }

  init () {
    const script = `src${this.part.path}/_content/script`;
    if (fs.existsSync(script)) {
      this.files.push(...FILES.filter(file => fs.existsSync(`${script}/${file}.js`)));
    }
    this._has = this.files.length !== 0;
    this._possess = this.part.children.some(child => child.script.has);

    if (this.has) {
      this._contains = [];
      for (const child of this.part.children) {
        if (child.detached || !child.script.has) continue;
        if (child.script._has) this._contains.push(child);
        if (child.script._contains) this._contains.push(...child.script._contains);
      }
    }
  }

  analyse () {
    if (!this.has) return;
    this._directs = this._config.dependencies ? this._config.dependencies.map(id => this.part.getPart(id)) : [];
  }

  hinge () {
    if (this._hinged) return true;

    const dependencies = [];
    for (const part of this._directs) {
      if (!part.script._hinged) return false;
      dependencies.push(part, ...part.script._dependencies);
    }

    for (const part of this._contains) {
      if (!part.script.has) continue;
      if (!part.script._hinged) return false;
      dependencies.push(...part.script._dependencies);
    }

    this._dependencies = dependencies.filter((part, index, array) => this._contains.indexOf(part) === -1 && array.indexOf(part) === index).sort((a, b) => a.script.level - b.script.level);

    console.log(this.part.id, this._dependencies.map(p => p.id));

    this._level = this._dependencies.length ? Math.max(...dependencies.map(part => part.script.level)) + 1 : 0;

    this._hinged = true;
    return true;
  }

  order () {
    if (!this.has) return;
    this._contains = this._contains.sort((a, b) => a.script.level - b.script.level);
    console.log('order', this.part.id, this._contains.map(p => p.id));
  }

  generate () {
    if (!this.has) return;

    if (this._has && this.part.id !== 'api') {
      const api = this.part.getPart('api');
      const relative = path.relative(`src${this.part.path}`, `src${api.path}/_content/script/reference.js`);
      const ref = `import ref from '${relative}';\nexport default ref;\n`;
      createFile(`src${this.part.path}/ref.js`, ref);
    }

    const src = {};

    const module = MODULE.map(file => this._getImport(file)).join('');
    if (module) {
      src.module = `src${this.part.path}/module.js`;
      createFile(src.module, module);
    }

    const nomodule = NOMODULE.map(file => this._getImport(file)).join('');
    if (nomodule) {
      src.nomodule = `src${this.part.path}/nomodule.js`;
      createFile(src.nomodule, nomodule);
    }

    if (Object.keys(src).length > 0) {
      this._data.src = src;
      this._data.dest = `dist${this.part.path}/${this.part.id}`;
    }
  }

  _getImport (file) {
    return this._contains.map(part => {
      if (part.script.files.indexOf(file) === -1) return '';
      const script = path.relative(`src${this.part.path}`, `src${part.path}/_content/script`);
      const current = script.charAt(0) !== '.' ? './' : '';
      return `import '${current}${script}/${file}.js';\n`;
    }).join('');
  }
}

module.exports = { ScriptPart };
