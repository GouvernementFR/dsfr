const { ExampleNode } = require('./example-node');

class Example {
  constructor (type, path, data, isStandalone = false) {
    this.type = type;
    this._data = {
      style: data ? data.style || [] : [],
      script: data ? data.script || [] : []
    };

    const root = new ExampleNode(path, '', isStandalone);
    if (type === 'folder') root._hasData = true;

    if (root.hasData) this._data.root = root.data;
  }

  get data () {
    return this._data;
  }
}

module.exports = { Example };
