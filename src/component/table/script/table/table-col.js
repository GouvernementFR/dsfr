import api from '../../api.js';
import { TableEmission } from './table-emission.js';

class TableCol extends api.core.Instance {
  static get instanceClassName () {
    return 'TableCol';
  }

  init () {
    this.listen('mouseover', this.handlingHover.bind(this));
  }

  handlingHover () {
    this.ascend(TableEmission.COL_HOVER);
  }
}

export { TableCol };
