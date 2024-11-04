import api from '../../api.js';
import { TableEmission } from './table-emission.js';

class TableWrapper extends api.core.Instance {
  static get instanceClassName () {
    return 'TableWrapper';
  }

  init () {
    this.addAscent(TableEmission.CAPTION_HEIGHT, this.setCaptionHeight.bind(this));
  }

  setCaptionHeight (value) {
    requestAnimationFrame(() => this.ascend(TableEmission.CAPTION_HEIGHT, 0));
    this.setProperty('--table-offset', value);
  }
}

export { TableWrapper };
