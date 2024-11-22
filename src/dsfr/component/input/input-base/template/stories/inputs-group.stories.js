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

export const InputsGroupStory = {
  args: {}
};

export const DisabledStory = {
  tags: ['autodocs', '!dev'],
  args: {
    disabled: true
  }
};

export const ErrorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    status: 'error'
  }
};

export const SuccessStory = {
  tags: ['autodocs', '!dev'],
  args: {
    status: 'valid'
  }
};
