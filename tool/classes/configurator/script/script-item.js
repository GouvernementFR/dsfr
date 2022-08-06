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
  }

  get data () {
    return this._data;
  }

  get src () {
    return this._data.src;
  }

  generate (dependency) {
    const from = `src${this.part.path}`;
    const imports = [];
    for (const filename of FILENAMES) {
      if (!filename.types.includes(this.type)) continue;
      for (const part of dependency.imports) {
        const kind = part.script.getKind(this.kind);
        if (!kind) continue;
        imports.push(...kind.getImports(from, filename));
      }
    }
    console.log(this.part.id, this.src, imports);

    // createFile(this.src, this.part.banner(content));
  }
}

module.exports = { ScriptItem };
