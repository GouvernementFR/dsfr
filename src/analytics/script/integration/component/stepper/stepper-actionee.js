import { ComponentActionee } from '../component-actionee';
import ID from './id';

class StepperActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'StepperActionee';
  }

  init () {
    this.setImpressionType();
  }

  get label () {
    return 'Indicateur d\'étapes';
  }

  get component () {
    return ID;
  }
}

export { StepperActionee };
