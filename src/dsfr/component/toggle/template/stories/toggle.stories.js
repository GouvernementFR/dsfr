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

export const DescriptionStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle'),
    hint: 'Texte additionnel de l’interrupteur'
  }
};

export const StateStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle'),
    state: true
  }
};

export const ErrorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle'),
    status: 'error'
  }
};

export const ValidStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle'),
    status: 'valid'
  }
};

export const DisabledStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle'),
    disabled: true
  }
};
