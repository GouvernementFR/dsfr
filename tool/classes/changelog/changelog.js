const { Tags } = require('./tag');
const ejs = require('ejs');
const root = require('../../utilities/root');
const { html: beautify } = require('js-beautify');
const { createFile } = require('../../utilities/file');
const log = require('../../utilities/log');

class Changelog {
  constructor (current) {
    this._current = current;
  }

  async build () {
    this.tags = new Tags(this._current);
    await this.tags.load();

    const data = { majors: this.tags.majors };

    ejs.renderFile(root('tool/classes/changelog/changelog.ejs'), data
      , (error, str) => {
        if (error) {
          console.log(error);
        } else {
          createFile(root('CHANGELOG.md'), str, true);
          log(38, 'CHANGELOG.md');
        }
      });
  }
}

module.exports = { Changelog };
