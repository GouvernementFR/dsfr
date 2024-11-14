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

const getElements = (num) => {
  const elements = [];
  for (let i = 1; i <= num; i++) {
    elements.push({
      id: uniqueId('storybook-toggle-group-input'),
      label: `${toggleArgs.label} ${i}`,
      checked: i === 1,
      disabled: false,
      hint: undefined
    });
  }
  return elements;
};

export const ToggleGroupStory = {
  args: {
    elements: getElements(3)
  }
};

export const AlignLeftStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle-group-id'),
    elements: getElements(3),
    left: true,
    border: true
  }
};
