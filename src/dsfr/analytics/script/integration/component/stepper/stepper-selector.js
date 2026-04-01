import api from '../../../../api';

export const StepperSelector = {
  STEPPER: `${api.internals.ns.selector('stepper')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
