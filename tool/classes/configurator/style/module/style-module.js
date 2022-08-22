const ejs = require('ejs');
const fs = require('fs');
const { createFile, deleteFile } = require('../../../../utilities/file');
const { FILENAMES } = require('../filenames');
const { Mixin } = require('./mixin');

class StyleModule {
  constructor (part) {
    this.part = part;
    this.init();
  }

  init () {
    this._mixins = FILENAMES.map(filename => new Mixin(this.part, filename));
  }

  produce (dependency) {
    if (this.part.style.collector.has) {
      this.part.style.collector.sources.forEach(src => this._mixins.forEach(mixin => mixin.addSource(src)));
    }

    const path = `src${this.part.path}/_index.scss`;

    for (const part of dependency.imports) {
      if (part.style.collector.has) {
        console.log(part.id);
      }
    }

    this._mixins = this._mixins.filter(mixin => mixin.has);

    if (this._mixins.length === 0) {
      if (fs.existsSync(path)) deleteFile(path);
      return;
    }

    this._mixins.forEach(mixin => mixin.filter());

    const data = {
      top: this.part.top,
      uses: this._mixins.map(mixin => mixin.uses).flat(1),
      mixins: this._mixins.map(mixin => mixin.data)
    };

    const template = fs.readFileSync('tool/classes/configurator/style/module/module.ejs', 'utf-8');
    const content = ejs.render(template, data);
    createFile(path, content);
  }
}

module.exports = { StyleModule };
