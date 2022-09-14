const path = require('path');

class AssetItem {
  constructor (src, dist, config) {
    this.src = src;
    this.dist = dist;
    this._data = {
      src: src,
      dist: dist,
      dest: `dist/${dist}`
    };

    if (config.category) this._data.category = config.category;

    if (config.type) {
      this._data.type = config.type;

      switch (config.type) {
        case 'icon':
          this._icon();
          break;

        case 'pictogram':
          this._pictogram();
          break;
      }
    }
  }

  get data () {
    return this._data;
  }

  get type () {
    return this._data.type;
  }

  get category () {
    return this._data.category;
  }

  get name () {
    return this._data.name;
  }

  get family () {
    return this._data.family;
  }

  _icon () {
    const filename = path.basename(this.src, path.extname(this.src));

    if (filename.indexOf('--') > -1) {
      const s = filename.split('--');
      switch (s[0]) {
        case 'fr':
          this._data.family = 'dsfr';
          this._data.name = s.slice(1).join('--');
          break;
      }
    } else {
      this._data.family = 'remix';
      this._data.name = filename;
    }
  }

  _pictogram () {
    const filename = path.basename(this.src, path.extname(this.src));
    this._data.name = filename;
  }
}

module.exports = { AssetItem };
