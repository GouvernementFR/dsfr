const { ScriptKind } = require('./script-kind');
const { ScriptItem } = require('./script-item');
const { KINDS, BASE } = require('./kinds');
const { TYPES } = require('./types');

class ScriptCollector {
  constructor (part) {
    this.part = part;
    this._items = [];
    this.init();
  }

  get has () {
    return this._has;
  }

  get data () {
    return this._items.map(item => item.data);
  }

  get items () {
    return this._items;
  }

  get length () {
    return this._items.length;
  }

  init () {
    this.kinds = KINDS
      .map(kind => new ScriptKind(kind, this.part))
      .filter(kind => kind.has)
      .filter((kind, index, array) => !(array.length === 2 && kind.kind === BASE));
    this._has = this.kinds.length > 0;

    if (!this.part.script.has) return;

    const imports = [];


  }

  order () {
    if (this._imports) this._imports = this._imports.sort((a, b) => a.script.level - b.script.level);
  }

  generate () {
    for (const kind of this.kinds) {
      for (const type of TYPES) {
        const item = new ScriptItem(this.part, kind, type);
        if (item.has) this._items.push(item);
      }
    }
  }
}

module.exports = { ScriptCollector };
