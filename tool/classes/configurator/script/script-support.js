const { KINDS, BASE } = require('./kinds');
const { ScriptItem } = require('./script-item');

class ScriptSupport {
  constructor (part, support) {
    this.part = part;
    this.support = support;
    this.init();
  }

  get items () {
    return this._items;
  }

  init () {
    this._producers = KINDS.map(kind => new ScriptItem(this.part, kind, this.support));
  }

  produce (dependency) {
    this._producers.forEach(item => item.produce(dependency));
    this._items = this._producers
      .filter(producer => producer.filled)
      .filter((producer, index, array) => !(array.length === 2 && producer.kind === BASE));

    this._items.forEach(item => item.create());
  }
}

module.exports = { ScriptSupport };
