const { ExampleNode } = require('./example-node');

class ExamplePart {
  constructor (path, data, isStandalone = false) {
    this._data = {
      style: data ? data.style || [] : [],
      script: data ? data.script || [] : []
    };

    const root = new ExampleNode(path, '', isStandalone);

    if (root.hasData) this._data.root = root.data;
  }

  get data () {
    return this._data;
  }
}

module.exports = { ExamplePart };
