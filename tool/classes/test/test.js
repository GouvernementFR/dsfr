const fs = require('fs');
const { VisualTest } = require('./visual/visual-test');

class Test {
  constructor (path) {
    this._path = path;

    const visualPath = `${path}/visual`;
    if (fs.existsSync(visualPath)) {
      this._visual = new VisualTest(visualPath);
    }
  }

  get data () {
    const data = {};
    if (this._visual) data.visual = this._visual.data;
    return data;
  }
}

module.exports = { Test };
