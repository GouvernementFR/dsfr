import { inputsGroupArgs, inputsGroupArgTypes, inputsGroupProps } from './inputs-group-arg-types';
import { renderFieldset } from '../../../../form/template/stories/fieldset';
import { uniqueId } from '../../../../../core/template/stories/unique-id';

const render = (args) => renderFieldset({ fieldset: inputsGroupProps(args) });

export default {
  id: 'inputs-group',
  title: 'DSFR/Component/Input/Inputs-Group',
  render: render,
  argTypes: inputsGroupArgTypes,
  args: inputsGroupArgs
};

const inputsData = (count = 3) => {
  const inputs = [];
  for (let i = 0; i < count; i++) {
    inputs.push(
      {
        label: `Libellé ${i}`,
        id: uniqueId('input'),
        name: `input${i}`,
        hint: '',
        disabled: false
      }
    );
  }
  return inputs;
};

export const InputsGroupStory = {
  args: {}
};

export const DisabledStory = {
  tags: ['autodocs', '!dev'],
  args: {
    disabled: true,
    inputs: inputsData()
  }
};

export const ErrorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    status: 'error',
    inputs: inputsData()
  }
};

export const SuccessStory = {
  tags: ['autodocs', '!dev'],
  args: {
    status: 'valid',
    inputs: inputsData()
  }
};
