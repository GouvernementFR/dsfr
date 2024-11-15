import { tagArgTypes, tagArgs } from './tag-arg-types';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const tagsGroupArgTypes = {
  size: {
    ...tagArgTypes.size,
    description: 'Taille des tags dans le groupe'
  },
  type: {
    ...tagArgTypes.type,
    description: 'Type des tags dans le groupe',
    table: undefined
  },
  groupMarkup: {
    control: { type: 'select' },
    description: 'Type de balise HTML pour la liste du groupe de tags',
    options: ['div', 'ul']
  }
};

const getTagsGroup = (num) => {
  const tags = [];
  for (let i = 1; i <= num; i++) {
    tags.push({
      label: `${tagArgs.label} ${i}`,
      accent: 'défaut',
      size: 'md',
      href: '#',
      icon: undefined,
      pressed: false,
      blank: false,
      disabled: false,
      id: uniqueId('storybook-tag-group')
    });
  }
  return tags;
};

const tagsGroupArgs = {
  size: tagArgs.size,
  type: tagArgs.type,
  groupMarkup: 'ul',
  tags: []
};

const tagsGroupProps = (args) => {
  const tagsGroup = {
    size: args.size || tagsGroupArgs.size,
    type: args.type || tagsGroupArgs.type,
    groupMarkup: args.groupMarkup || tagsGroupArgs.groupMarkup,
    tags: args.tags || tagsGroupArgs.tags
  };

  for (const tag of tagsGroup.tags) {
    tag.type = args.type;
  }

  return tagsGroup;
};

export { tagsGroupArgTypes, tagsGroupArgs, tagsGroupProps, getTagsGroup };
