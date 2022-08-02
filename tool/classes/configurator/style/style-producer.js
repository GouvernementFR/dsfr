const { KINDS } = require('./kinds');
const { StyleItem } = require('./style-item');
const { StyleModule } = require('./style-module');

class StyleProducer {
  constructor (part) {
    this.part = part;
    this.init();
  }

  get items () {
    return this._items;
  }

  init () {
    this._module = new StyleModule(this.part);
    this._items = KINDS.map(kind => new StyleItem(this.part, kind));
  }

  analyse () {
    this._items.forEach(item => item.analyse());

    const bits = [];
    for (const item of this._items) {
      if (!item.filled || bits.includes(item.bits)) item.remove();
      bits.push(item.bits);
    }

    this._items = this._items.filter(item => item.filled);
  }

  produce (dependency) {
    this._module.produce(dependency);
    this._items.forEach(item => item.produce());
  }
}

module.exports = { StyleProducer };
