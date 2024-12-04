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

  get label () {
    const alertTitle = this.node.querySelector(AlertSelector.TITLE);
    if (alertTitle) {
      const text = this.getFirstText(alertTitle);
      if (text) return text;
    }
    return 'alerte';
  }

  get component () {
    return ID;
  }
}

export { AlertActionee };
