const { KINDS, BASE_KIND } = require('./kinds');
const { ScriptItem } = require('./script-item');

class ScriptProducer {
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
      .filter((producer, index, array) => !(array.length === 2 && producer.kind === BASE_KIND));

    this._items.forEach(item => item.create());
  }
}

module.exports = { ScriptProducer };
