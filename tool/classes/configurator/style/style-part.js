const { StyleCollector } = require('./style-collector');
const { StyleDependency } = require('./style-dependency');
const { StyleProducer } = require('./style-producer');

class StylePart {
  constructor (part, config) {
    this.part = part;
    this._config = config || {};
    this._data = {};
    this.init();
  }

  get has () {
    return this._has || this._carries;
  }

  get data () {
    return this._data;
  }

  get dependencies () {
    return this._dependency.dependencies;
  }

  get contains () {
    return this._dependency.contains;
  }

  get imports () {
    return this._dependency.imports;
  }

  get hinged () {
    return this._dependency.hinged;
  }

  get level () {
    return this._dependency.level;
  }

  get collector () {
    return this._collector;
  }

  init () {
    this._carries = this.part.children.some(child => child.style.has);
    this._collector = new StyleCollector(this.part);
    this._has = this._collector.has;

    if (this.has) {
      this._dependency = new StyleDependency(this.part, this._config.dependencies);
      this._producer = new StyleProducer(this.part);
    }
  }

  analyse () {
    if (!this.has) return;
    this._dependency.analyse();
  }

  hinge () {
    this._dependency.hinge();
  }

  order () {
    if (!this.has) return;
    this._dependency.order();
    this._data.dependencies = this.dependencies.map(part => part.id);
    this._data.contains = this.contains.map(part => part.id);
    this._data.level = this.level;
  }

  generate () {
    console.log(this.part.id, 'generate', this.has);
    if (!this.has) return;
    this._producer.produce(this._dependency);
    this._data.items = this._producer.items;
  }
}

module.exports = { StylePart };
