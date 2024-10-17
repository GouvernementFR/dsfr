import { renderButtonsGroup } from './button';
import { buttonsGroupArgs, buttonsGroupArgTypes, buttonsGroupProps } from './buttons-group-arg-types';

const render = (args) => renderButtonsGroup({ buttonsGroup: buttonsGroupProps(args) });

const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'buttons-group',
  title: 'DSFR/Component/Button/Buttons-Group',
  render: render,
  argTypes: buttonsGroupArgTypes,
  args: buttonsGroupArgs
};

export const ButtonsGroupStory = {
  tags: ['autodocs'],
  args: {}
};

export const VerticalStory = {
  tags: ['autodocs', '!dev'],
  args: {
    buttons: [
      {
        kind: 1
      },
      {
        kind: 2
      }
    ]
  }
};

export const HorizontalStory = {
  tags: ['autodocs', '!dev'],
  args: {
    inline: true,
    buttons: [
      {
        kind: 1
      },
      {
        kind: 2
      }
    ]
  }
};

export const SizeStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      size: 'sm'
    },
    {
      size: 'lg'
    }
  ])
};
