import { ComponentActionee } from '../component-actionee';
import ID from './id';

class TooltipActionee extends ComponentActionee {
  constructor () {
    super(2, true);
  }

  static get instanceClassName () {
    return 'TooltipActionee';
  }

  init () {
    this.setDiscloseType();
    this.listenDisclose();
  }

  get label () {
    return 'Information contextuelle';
  }

  get component () {
    return ID;
  }
}

export { TooltipActionee };
