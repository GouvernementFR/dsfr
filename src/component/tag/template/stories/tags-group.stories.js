import { renderTagsGroup } from './tag';
import { tagsGroupArgs, tagsGroupArgTypes, tagsGroupProps } from './tags-group-arg-types';

const render = (args) => renderTagsGroup({ tagsGroup: tagsGroupProps(args) });

const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'tags-group',
  title: 'DSFR/Component/Tag/Tags-Group',
  render: render,
  argTypes: tagsGroupArgTypes,
  args: tagsGroupArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {
    type: 'default'
  }
};

export const MdStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      size: 'md',
      type: 'default'
    }
  ])
};

export const SmStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      size: 'sm',
      type: 'default'
    }
  ])
};

export const ClickableStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      type: 'clickable'
    }
  ])
};

export const PressableStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      type: 'pressable'
    }
  ])
};

export const DismissibleStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      type: 'dismissible'
    }
  ])
};
