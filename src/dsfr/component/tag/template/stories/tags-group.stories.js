import { renderTagsGroup } from './tag';
import { tagsGroupArgs, tagsGroupArgTypes, tagsGroupProps, getTagsGroup } from './tags-group-arg-types';

const render = (args) => renderTagsGroup({ tagsGroup: tagsGroupProps(args) });

export default {
  id: 'tags-group',
  title: 'DSFR/Component/Tag/Tags-Group',
  render: render,
  argTypes: tagsGroupArgTypes,
  args: tagsGroupArgs
};

export const TagsGroupStory = {
  args: {
    type: 'default',
    tags: getTagsGroup(3)
  }
};

export const SizeMdStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'md',
    type: 'default',
    tags: getTagsGroup(3)
  }
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm',
    type: 'default',
    tags: getTagsGroup(3)
  }
};

export const TagsGroupClickableStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'clickable',
    tags: getTagsGroup(3)
  }
};

export const TagsGroupPressableStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'pressable',
    tags: getTagsGroup(3)
  }
};

export const TagsGroupDismissibleStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'dismissible',
    tags: getTagsGroup(3)
  }
};
