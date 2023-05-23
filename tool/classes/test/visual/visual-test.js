const fs = require('fs');
const path = require('path');

class VisualTest {
  constructor (pathname) {
    this._pathname = pathname;

    this._data = {
      scenarios: []
    };

    this.parse();
  }

  parse () {
    const entries = fs.readdirSync(this._pathname, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isFile() && path.extname(entry.name) === '.json') {
        const fileContents = fs.readFileSync(`${this._pathname}/${entry.name}`, 'utf8');
        this._data.scenarios.push(JSON.parse(fileContents));
      }
    }
  }

  get data () {
    return this._data;
  }
}

module.exports = { VisualTest };
