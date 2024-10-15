import { renderStepper } from './stepper';
import { stepperArgs, stepperArgTypes, stepperProps } from './stepper-arg-types';

const render = (args) => renderStepper({ stepper: stepperProps(args) });

export default {
  id: 'stepper',
  title: 'DSFR/Component/Stepper',
  render: render,
  argTypes: stepperArgTypes,
  args: stepperArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};
