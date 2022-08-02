const { KINDS } = require('./kinds');
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
    this._items = KINDS.map(kind => new ScriptItem(this.part, kind, this.support));
  }

  produce (dependency) {
    const all = this._items;
    this._items.forEach(item => item.produce(dependency));
    this._items = this._items
      .filter(item => item.filled)
      .filter((item, index, array) => array.map(item => item.bits).indexOf(item.bits) === index);

    all.filter(item => !this._items.includes(item)).forEach(item => item.remove());

    this._items.forEach(item => item.create());
  }
}

module.exports = { ScriptProducer };
