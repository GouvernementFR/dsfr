const { ExampleNode } = require('./example-node');

class Example {
  constructor (type, path, data) {
    this.type = type;
    this._data = {
      style: data ? data.style || [] : [],
      script: data ? data.script || [] : []
    };

    const root = new ExampleNode(path);
    if (type === 'folder') root._hasContent = true;

    if (root.hasContent) this._data.root = root.data;
  }

  get data () {
    return this._data;
  }
}

module.exports = { Example };
