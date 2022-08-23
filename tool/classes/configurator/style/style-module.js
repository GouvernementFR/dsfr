const ejs = require('ejs');
const fs = require('fs');
const { createFile, deleteFile } = require('../../../utilities/file');

class StyleModule {
  constructor (part) {
    this.part = part;
    this.init();
  }

  init () {
  }

  produce (dependency) {
    const module = this.part.style.collector.getModule(dependency);

    console.log(this.part.id, 'produce', module);

    const path = `src${this.part.path}/_index.scss`;

    const template = fs.readFileSync('tool/classes/configurator/style/module.ejs', 'utf-8');
    const content = ejs.render(template, module);
    createFile(path, content);
  }
}

module.exports = { StyleModule };
