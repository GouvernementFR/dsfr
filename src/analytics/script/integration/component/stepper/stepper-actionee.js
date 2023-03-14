import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class StepperActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION, 1);
  }

  static get instanceClassName () {
    return 'StepperActionee';
  }

  get label () {
    return 'Indicateur d\'étapes';
  }

  get component () {
    return ID;
  }
}

export { StepperActionee };
