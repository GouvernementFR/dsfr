import api from '../../api.js';
import { TableEmission } from './table-emission.js';

class Table extends api.core.Instance {
  static get instanceClassName () {
    return 'Table';
  }

  init () {
    this.addAscent(TableEmission.CAPTION_HEIGHT, this.setCaptionHeight.bind(this));
  }

  setCaptionHeight (value) {
    this.setProperty('--table-offset', value);
  }
}

export { Table };
