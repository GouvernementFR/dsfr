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

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const SmStory = {
  tags: ['!dev'],
  args: {
    size: 'sm'
  }
};
