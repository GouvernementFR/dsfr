const { FILENAMES } = require('./filenames');
const { createFile } = require('../../../utilities/file');

class ScriptItem {
  constructor (part, kind, type) {
    this.part = part;
    this.kind = kind;
    this.type = type;
    this._data = {
      src: `src${part.path}/${type.filename}${kind.src}.js`,
      dest: `dist${part.path}/${part.filename}.${type.filename}${kind.dest}.js`,
      type: type.id
    };
    this.init();
  }

  get data () {
    return this._data;
  }

  get has () {
    return this._has;
  }

  get src () {
    return this._data.src;
  }

  init () {
    this._has = this.kind.types.includes(this.type);
  }

  generate (dependency) {
    const from = `src${this.part.path}`;
    const content = FILENAMES.map(filename => dependency.imports
      .filter(part => part.script.kinds.some(kind => kind.kind === this.kind))
      .map(part => part.script.filter(kind => kind.kind === this.kind)[0])
      .map(kind => kind.getImports(from, filename))).flat();
    console.log(this.part.id, this.src, content.length);

    // createFile(this.src, this.part.banner(content));
  }
}

module.exports = { ScriptItem };
