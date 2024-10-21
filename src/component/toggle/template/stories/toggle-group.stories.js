import { toggleGroupArgs, toggleGroupArgTypes, toggleGroupProps } from './toggle-group-arg-types';
import { renderFieldset } from '../../../form/template/stories/fieldset';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const render = (args) => renderFieldset({ fieldset: toggleGroupProps(args) });
const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

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
  render: () => renders([
    {
      id: uniqueId('toggle'),
      groupId: uniqueId('toggle-group'),
      left: true,
      border: true
    }
  ])
};
