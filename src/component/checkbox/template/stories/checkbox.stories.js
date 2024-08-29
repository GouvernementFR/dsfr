import { checkboxArgs, checkboxArgTypes, checkboxProps } from './checkbox-arg-types';
import { renderFieldset } from '../../../form/template/stories/fieldset';
import { renderCheckbox } from './checkbox';

const render = (args) => renderCheckbox({ checkbox: checkboxProps(args) });
const renderMultiple = (args) => renderFieldset({ fieldset: { id: 'checkbox-fieldset', legend: 'légende', choice: true, elements: [{ type: 'checkbox', data: { ...checkboxProps(args) } }, { type: 'checkbox', data: { ...checkboxProps(args), id: args.id + '-1' } }] } });

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
  // tags: ['!dev'],
  args: {}
};

export const SmStory = {
  tags: ['!dev'],
  args: {
    size: 'sm'
  }
};

export const FieldsetStory = {
  tags: ['!dev'],
  render: renderMultiple,
  inline: true,
  args: {
    size: 'sm',
    inline: true
  }
};
