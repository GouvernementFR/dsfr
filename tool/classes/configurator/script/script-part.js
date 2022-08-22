const { ScriptReference } = require('./script-reference');
const { KINDS } = require('./kinds');
const { ScriptCollector } = require('./script-collector');
const { SUPPORTS } = require('./supports');
const { ScriptDependency } = require('./script-dependency');
const { ScriptProducer } = require('./script-producer');

class ScriptPart {
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

  getCollector (kind) {
    for (const collector of this.collectors) {
      if (collector.kind === kind) return collector;
    }
    return null;
  }

  init () {
    this._carries = this.part.children.some(child => child.script.has);

    this.collectors = KINDS
      .map(kind => new ScriptCollector(this.part, kind))
      .filter(kind => kind.has);
    this._has = this.collectors.length > 0;

    if (this.has) {
      this.reference = new ScriptReference(this.part);
      this._dependency = new ScriptDependency(this.part, this._config.dependencies);
      this._producers = SUPPORTS.map(support => new ScriptProducer(this.part, support));
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
    if (!this.has) return;

    if (this.reference && this.reference.has) this.reference.generate();

    const items = [];
    for (const producer of this._producers) {
      producer.produce(this._dependency);
      items.push(...producer.items);
    }
    this._data.items = items.map(item => item.data);
  }
}

module.exports = { ScriptPart };
