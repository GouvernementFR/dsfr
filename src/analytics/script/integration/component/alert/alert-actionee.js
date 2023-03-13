import { ComponentActionee } from '../component-actionee';
import { AlertSelector } from './alert-selector';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class AlertActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION, 1);
  }

  static get instanceClassName () {
    return 'AlertActionee';
  }

  get label () {
    const alertTitle = this.node.querySelector(AlertSelector.TITLE);
    if (alertTitle) return alertTitle.textContent.trim();

    return 'Alerte';
  }

  get component () {
    return ID;
  }
}

export { AlertActionee };
