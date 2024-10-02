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

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const VerticalStory = {
  tags: ['!dev'],
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
  tags: ['!dev'],
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
  tags: ['!dev'],
  render: () => renders([
    {
      size: 'sm'
    },
    {
      size: 'lg'
    }
  ])
};
