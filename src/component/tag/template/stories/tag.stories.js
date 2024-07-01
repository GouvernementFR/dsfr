import { renderTag } from './tag';
import { tagArgs, tagArgTypes, tagProps } from './tag-arg-types';

const render = (args) => renderTag({ tag: tagProps(args) });

const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'tag',
  title: 'DSFR/Component/Tag',
  render: render,
  argTypes: tagArgTypes,
  args: tagArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const SizeStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      size: 'md'
    },
    {
      size: 'md',
      hasIcon: true
    },
    {
      size: 'sm'
    },
    {
      size: 'sm',
      hasIcon: true
    }
  ])
};

export const AccentStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      type: 'clickable'
    },
    {
      type: 'clickable',
      accent: 'green-menthe'
    },
    {
      type: 'clickable',
      accent: 'yellow-moutarde'
    },
  ])
};

export const ClickableStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      type: 'clickable',
      size: 'md'
    },
    {
      type: 'clickable',
      size: 'md',
      hasIcon: true,
      icon: 'arrow-right-line'
    },
    {
      type: 'clickable',
      size: 'sm'
    },
    {
      type: 'clickable',
      size: 'sm',
      hasIcon: true,
      icon: 'arrow-right-line'
    }
  ])
};

export const PressableStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      type: 'pressable',
    },
    {
      type: 'pressable',
      hasIcon: true,
      icon: 'arrow-right-line'
    },
    {
      type: 'pressable',
      pressed: true
    },
    {
      type: 'pressable',
      size: 'sm'
    },
    {
      type: 'pressable',
      size: 'sm',
      hasIcon: true,
      icon: 'arrow-right-line'
    },
    {
      type: 'pressable',
      size: 'sm',
      pressed: true
    }
  ])
};

export const DismissibleStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      type: 'dismissible',
      size: 'md'
    },
    {
      type: 'dismissible',
      size: 'md',
      hasIcon: true,
      icon: 'arrow-right-line'
    },
    {
      type: 'dismissible',
      size: 'sm'
    },
    {
      type: 'dismissible',
      size: 'sm',
      hasIcon: true,
      icon: 'arrow-right-line'
    }
  ])
};