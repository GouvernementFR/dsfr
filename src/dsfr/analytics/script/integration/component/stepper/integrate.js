import api from '../../../../api';
import { StepperSelector } from './stepper-selector';
import { StepperActionee } from './stepper-actionee';
import { joinSelector } from '../../join-selector';

const integrateStepper = (selector = '') => {
  api.internals.register(joinSelector(StepperSelector.STEPPER, selector), StepperActionee);
};

export default integrateStepper;
