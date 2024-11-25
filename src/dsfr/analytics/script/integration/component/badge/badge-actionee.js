import { ComponentActionee } from '../component-actionee';
import ID from './id';

class BadgeActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'BadgeActionee';
  }

  get label () {
    const firstText = this.getFirstText();
    if (firstText) return firstText;

    return 'badge';
  }

  get component () {
    return ID;
  }
}

export { BadgeActionee };
