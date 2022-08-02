const ejs = require('ejs');
const fs = require('fs');
const { createFile } = require('../../../utilities/file');
const { SRC } = require('../src');

class StyleModule {
  constructor (part) {
    this.part = part;
  }

  produce (dependency) {
    const module = this.part.style.collector.getModule(dependency);

    const path = `${SRC}${this.part.path}index.scss`;

    const template = fs.readFileSync('tool/classes/configurator/style/module.ejs', 'utf-8');
    const content = ejs.render(template, module);
    createFile(path, content);
  }
}

module.exports = { StyleModule };
