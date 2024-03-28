import api from '../../api.js';
import { TableEmission } from './table-emission.js';

class TableCol extends api.core.Instance {
  static get instanceClassName () {
    return 'TableCol';
  }

  init () {
    this.addDescent(TableEmission.COL_SELECT, this.colSelect.bind(this));
  }

  colSelect (value) {
    this.setAttribute('aria-selected', value);
  }
}

export { TableCol };
