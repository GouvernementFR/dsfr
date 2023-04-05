import { ComponentActionee } from '../component-actionee';
import { AlertSelector } from './alert-selector';
import ID from './id';

class AlertActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'AlertActionee';
  }

  init () {
    this.setImpressionType();
  }

  get label () {
    const alertTitle = this.node.querySelector(AlertSelector.TITLE);
    if (alertTitle) return this.getFirstText(alertTitle);

    return 'Alerte';
  }

  get component () {
    return ID;
  }
}

export { AlertActionee };
