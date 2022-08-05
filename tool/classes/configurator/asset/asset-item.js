const path = require('path');

class AssetItem {
  constructor (src, dist, type, category) {
    this.src = src;
    this.dist = dist;
    this._data = {
      src: src,
      dist: dist,
      dest: `dist/${dist}`
    };

    if (category) this._data.category = category;

    if (type) {
      this._data.type = this.type = type;

      switch (type) {
        case 'icon':
          this._icon();
          break;

        case 'pictogram':
          this._pictogram();
          break;
      }
    }
  }

  _icon () {
    const filename = path.basename(this.src, path.extname(this.src));

    if (filename.indexOf('--') > -1) {
      const s = filename.split('--');
      switch (s[0]) {
        case 'fr':
          this._data.family = this.family = 'dsfr';
          this._data.name = this.name = s.slice(1).join('--');
          break;
      }
    } else {
      this._data.family = this.family = 'remix';
      this._data.name = this.name = filename;
    }
  }

  _pictogram () {
    const filename = path.basename(this.src, path.extname(this.src));
    this._data.name = this.name = filename;
  }

  get data () {
    return this._data;
  }
}

module.exports = { AssetItem };
