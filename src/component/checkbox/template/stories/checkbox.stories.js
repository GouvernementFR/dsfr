import { checkboxArgs, checkboxArgTypes, checkboxProps } from './checkbox-arg-types';
import { renderCheckbox } from './checkbox';

const render = (args) => renderCheckbox({ checkbox: checkboxProps(args) });

export default {
  id: 'checkbox',
  title: 'DSFR/Component/Checkbox',
  render: render,
  argTypes: checkboxArgTypes,
  args: checkboxArgs
};

export const CheckboxStory = {
  args: {}
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: 'checkbox-sm',
    size: 'sm'
  }
};
