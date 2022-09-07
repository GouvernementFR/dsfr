const fs = require('fs');
const { createFile } = require('../../../utilities/file');
const { SRC } = require('../src');

class StyleOptions {
  constructor (part, config) {
    this.part = part;
    this._config = config;
  }

  get has () {
    return this._has === true;
  }

  get contains () {
    if (this._has) return true;
    return this.part.children.some(part => part.style && part.style.has && part.style.options.contains);
  }

  getContent () {
    const contents = [];
    if (this._has) contents.push(this._content);

    for (const part of this.part.children) {
      if (!part.detached && part.style && part.style.has) contents.push(...part.style._options.getContent());
    }
    return contents;
  }

  begin () {
    const path = this._config ? this.part.getPart(this._config).path : this.part.path;
    const file = `${SRC}${path}_content/style/_options.scss`;
    this._has = fs.existsSync(file);

    if (!this._has) return;

    const content = fs.readFileSync(file, 'utf-8');

    this._content = content.replace('$options', `  ${this.part.id}`).replace(');\n', ')').replace(');', ')').replace(/\n/g, '\n  ');
  }

  generate () {
    const contents = [`  depth: ${this.part.depth}`, ...this.getContent()];
    const content = `$options: (\n${contents.join(',\n')}\n);\n`;
    const path = `${SRC}${this.part.path}options.scss`;

    createFile(path, content);
  }
}

module.exports = { StyleOptions };
