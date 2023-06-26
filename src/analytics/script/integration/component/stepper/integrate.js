import api from '../../../../api';
import { StepperSelector } from './stepper-selector';
import { StepperActionee } from './stepper-actionee';

const integrateStepper = () => {
  api.internals.register(StepperSelector.STEPPER, StepperActionee);
};

export default integrateStepper;
