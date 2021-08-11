import api from '../../api.js';
import { TableEmissions } from './table-emissions.js';

class TableCaption extends api.core.Instance {
  static get instanceClassName () {
    return 'TableCaption';
  }

  init () {
    this.height = 0;
    this.isResizing = true;
  }

  resize () {
    const height = this.getRect().height;
    if (this.height === height) return;
    this.height = height;
    this.ascend(TableEmissions.CAPTION_HEIGHT, height);
  }
}

export { TableCaption };
