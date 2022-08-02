const { ExampleNode } = require('./example-node');

class ExamplePart {
  constructor (part, data) {
    this.part = part;

    data = data || {};

    this._data = {
      styles: data.styles || [],
      scripts: data.scripts || [],
      prepend: data.prepend === true,
      wrapper: data.wrapper || 'none',
      noHeading: data.noHeading === true,
      draft: data.draft === true
    };

    this.init();
  }

  get has () {
    return this.root.has === true;
  }

  get data () {
    return this._data;
  }

  init () {
    this.root = new ExampleNode(this.part, '');

    if (this.root.has) this._data.root = this.root.data;
  }
}

module.exports = { ExamplePart };
