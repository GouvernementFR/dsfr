const { KINDS, MODERN_KIND } = require('./kinds');
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
    this._producers = KINDS.map(kind => new StyleItem(this.part, kind));
    this._module = new StyleModule(this.part);
  }

  produce (dependency) {
    this._module.produce(dependency);
    this._producers.forEach(item => item.produce(dependency));
    this._items = this._producers
      .filter(producer => producer.filled)
      // .filter((producer, index, array) => !(array.length === 2 && producer.kind === MODERN_KIND));

    this._items.forEach(item => item.create());
  }
}

module.exports = { StyleProducer };
