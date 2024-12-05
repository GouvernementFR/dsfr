import { ComponentActionee } from '../component-actionee';
import ID from './id';

class TableActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'TableActionee';
  }

  get label () {
    const caption = this.node.querySelector('caption');
    if (caption) {
      const firstText = this.getFirstText(caption);
      if (firstText) return firstText;
    }
    return 'tableau';
  }

  get component () {
    return ID;
  }
}

export { TableActionee };
