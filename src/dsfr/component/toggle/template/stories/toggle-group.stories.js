import { toggleArgs } from './toggle-arg-types';
import { toggleGroupArgs, toggleGroupArgTypes, toggleGroupProps } from './toggle-group-arg-types';
import { renderFieldset } from '../../../form/template/stories/fieldset';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const render = (args) => renderFieldset({ fieldset: toggleGroupProps(args) });

export default {
  id: 'toggle-group',
  title: 'DSFR/Component/Toggle/Toggle-Group',
  render: render,
  argTypes: toggleGroupArgTypes,
  args: toggleGroupArgs
};

export const ToggleGroupStory = {
  args: {}
};

export const AlignLeftStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle-group-id'),
    elements: [
      {
        id: uniqueId('storybook-toggle-group-left-input'),
        label: `${toggleArgs.label} 1`,
        checked: true,
        disabled: false,
        hint: undefined
      },
      {
        id: uniqueId('storybook-toggle-group-left-input'),
        label: `${toggleArgs.label} 2`,
        checked: false,
        disabled: false,
        hint: undefined
      },
      {
        id: uniqueId('storybook-toggle-group-left-input'),
        label: `${toggleArgs.label} 3`,
        checked: false,
        disabled: false,
        hint: undefined
      }
    ],
    left: true,
    border: true
  }
};
