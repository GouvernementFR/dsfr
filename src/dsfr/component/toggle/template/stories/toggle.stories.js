import { toggleArgs, toggleArgTypes, toggleProps } from './toggle-arg-types';
import { renderToggle } from './toggle';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const render = (args) => renderToggle({ toggle: toggleProps(args) });
const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'toggle',
  title: 'DSFR/Component/Toggle',
  render: render,
  argTypes: toggleArgTypes,
  args: toggleArgs
};

export const ToggleStory = {
  args: {}
};

export const AlignLeftStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      hint: '',
      id: uniqueId('toggle'),
      groupId: uniqueId('toggle-group'),
      left: true
    }
  ])
};
