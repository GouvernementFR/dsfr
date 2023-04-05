import { ComponentActionee } from '../component-actionee';
import ID from './id';

class TableActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'TableActionee';
  }

  init () {
    this.setImpressionType();
  }

  get label () {
    const caption = this.node.querySelector('caption');
    if (caption) return this.getFirstText(caption);
    return 'Tableau';
  }

  get component () {
    return ID;
  }
}

export { TableActionee };
