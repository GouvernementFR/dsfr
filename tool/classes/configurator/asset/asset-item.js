const fs = require('fs');
const path = require('path');

class AssetItem {
  constructor (src, dist, type, category) {
    this.src = src;
    this._data = {
      src: src,
      dist: dist,
      dest: `dist/${dist}`
    };

    if (category) this._data.category = category;

    if (type) {
      this._data.type = type;

      switch (type) {
        case 'icon':
          this._icon(src);
          break;

        case 'pictogram':
          this._pictogram(src);
          break;
      }
    }
  }

  _icon () {
    const filename = path.basename(this.src);

    if (filename.indexOf('--') > -1) {
      const s = filename.split('--');
      switch (s[0]) {
        case 'fr':
          this._data.family = this.family = 'dsfr';
          this._data.name = this.name = s.slice(1).join('--');
          break;
      }
    } else {
      this.family = 'remix';
      this.name = filename;
    }
  }

  _pictogram () {

  }

  get data () {
    return this._data;
  }

  get sass () {
    return '';
  }
}

module.exports = { AssetItem };
