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

export const TagsGroupStory = {
  args: {
    type: 'default'
  }
};

export const SizeMdStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      size: 'md',
      type: 'default'
    }
  ])
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      size: 'sm',
      type: 'default'
    }
  ])
};

export const TagsGroupClickableStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'clickable'
    }
  ])
};

export const TagsGroupPressableStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'pressable'
    }
  ])
};

export const TagsGroupDismissibleStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'dismissible'
    }
  ])
};
