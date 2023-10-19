import { ComponentActionee } from '../component-actionee';
import ID from './id';

class StepperActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'StepperActionee';
  }

  get label () {
    return 'indicateur d\'étapes';
  }

  get component () {
    return ID;
  }
}

export { StepperActionee };
