const path = require('path');
const { createFile } = require('../../../utilities/file');

class ScriptReference {
  constructor (part) {
    this.part = part;
    this.init();
  }

  get has () {
    return this._has;
  }

  init () {
    this._has = this.part.id !== 'api';
  }

  generate () {
    const api = this.part.getPart('api');
    const relative = path.relative(`src${this.part.path}`, `src${api.path}/_content/script/reference.js`);
    const ref = `import ref from '${relative}';\nexport default ref;\n`;
    createFile(`src${this.part.path}/ref.js`, ref);
  }
}

module.exports = { ScriptReference };
