import { toggleArgs, toggleArgTypes, toggleProps } from './toggle-arg-types';
import { renderToggle } from './toggle';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const render = (args) => renderToggle({ toggle: toggleProps(args) });

export default {
  id: 'toggle',
  title: 'DSFR/Component/Toggle',
  render: render,
  argTypes: toggleArgTypes,
  args: toggleArgs
};

export const ToggleStory = {
  tags: ['!autodocs'],
  args: {
    id: uniqueId('toggle')
  }
};

export const DefaultStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle')
  }
};

export const AlignLeftStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hint: '',
    id: uniqueId('toggle'),
    groupId: uniqueId('toggle-group'),
    left: true
  }
};
