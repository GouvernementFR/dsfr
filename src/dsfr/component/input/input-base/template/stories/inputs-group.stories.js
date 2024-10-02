import { inputsGroupArgs, inputsGroupArgTypes, inputsGroupProps } from './inputs-group-arg-types';
import { renderFieldset } from '../../../../form/template/stories/fieldset';

const render = (args) => renderFieldset({ fieldset: inputsGroupProps(args) });

export default {
  id: 'inputs-group',
  title: 'DSFR/Component/Input/Inputs-Group',
  render: render,
  argTypes: inputsGroupArgTypes,
  args: inputsGroupArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  // tags: ['!dev'],
  args: {}
};

export const DisabledStory = {
  tags: ['!dev'],
  args: {
    disabled: true
  }
};

export const ErrorStory = {
  tags: ['!dev'],
  args: {
    status: 'error'
  }
};

export const SuccessStory = {
  tags: ['!dev'],
  args: {
    status: 'valid'
  }
};
