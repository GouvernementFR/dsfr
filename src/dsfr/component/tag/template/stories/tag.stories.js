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

export const TagStory = {
  tags: ['!autodocs'],
  args: {}
};

export const SizeMDStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      size: 'md'
    }
  ])
};

export const SizeSMStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      size: 'sm'
    }
  ])
};

export const WithIconStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasIcon: true,
    icon: 'arrow-right-line'
  }
};

export const TagClickableStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'clickable',
    size: 'md'
  }
};

export const TagClickableSizeSMStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'clickable',
    size: 'sm'
  }
};

export const TagClickableWithIconStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'clickable',
    hasIcon: true,
    icon: 'arrow-right-line'
  }
};

export const TagClickableAccentStory = {
  tags: ['autodocs', '!dev'],
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
    }
  ])
};

export const TagPressableStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'pressable'
    },
    {
      type: 'pressable',
      pressed: true
    }
  ])
};

export const TagPressableSizeSMStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'pressable',
      size: 'sm'
    },
    {
      type: 'pressable',
      size: 'sm',
      pressed: true
    }
  ])
};

export const TagPressableWithIconStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'pressable',
      size: 'sm',
      hasIcon: true,
      icon: 'arrow-right-line'
    },
    {
      type: 'pressable',
      pressed: true,
      size: 'sm',
      hasIcon: true,
      icon: 'arrow-right-line'
    }
  ])
};

export const TagDismissibleStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'dismissible',
    size: 'md'
  }
};

export const TagDismissibleSizeSMStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'dismissible',
    size: 'sm'
  }
};
