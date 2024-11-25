import { renderTagsGroup } from './tag';
import { tagsGroupArgs, tagsGroupArgTypes, tagsGroupProps, getTagsData } from './tags-group-arg-types';

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
    type: 'default'
  }
};

export const SizeMdStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'md',
    type: 'default',
    tags: getTagsData()
  }
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm',
    type: 'default',
    tags: getTagsData()
  }
};

export const TagsGroupClickableStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'clickable',
    tags: getTagsData()
  }
};

export const TagsGroupPressableStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'pressable',
    tags: getTagsData()
  }
};

export const TagsGroupDismissibleStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'dismissible',
    tags: getTagsData()
  }
};
