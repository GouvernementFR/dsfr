import { ComponentActionee } from '../component-actionee';
import ID from './id';

class TooltipActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'TooltipActionee';
  }

  get label () {
    return 'information contextuelle';
  }

  get component () {
    return ID;
  }
}

export { TooltipActionee };
