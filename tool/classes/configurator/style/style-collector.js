const { StyleSource } = require('./style-source');
const { SITUATIONS } = require('./situations');
const { FILENAMES } = require('./filenames');

class StyleCollector {
  constructor (part) {
    this.part = part;
    this._contains = {};
    this.init();
  }

  get has () {
    return this._has;
  }

  get sources () {
    return this._sources;
  }

  contains (filename, situation) {
    if (situation === null) return SITUATIONS.some(situation => this._contains[filename][situation] === true);
    return this._contains[filename][situation] === true;
  }

  init () {
    this._sources = [];

    for (const filename of FILENAMES) {
      this._contains[filename] = {};
      for (const situation of SITUATIONS) {
        const source = new StyleSource(this.part, filename, situation);
        if (source.has) {
          this._sources.push(source);
          this._contains[filename][situation] = true;
        } else {
          this._contains[filename][situation] = this.part.children.some(child => child.style.has && child.style.collector.contains(filename, situation));
        }
      }
    }

    console.log(this.part.id, this._sources.length);
    this._has = this._sources.length > 0;
  }
}

module.exports = { StyleCollector };
