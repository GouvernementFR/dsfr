import { ComponentActionee } from '../component-actionee';
import ID from './id';

class BadgeActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'BadgeActionee';
  }

  init () {
    this.setImpressionType();
  }

  get label () {
    return this.getFirstText();
  }

  get component () {
    return ID;
  }
}

export { BadgeActionee };