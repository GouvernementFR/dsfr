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
  },
  hasIcon: {
    if: { arg: 'type', neq: 'dismissible' },
    control: 'boolean',
    description: 'Si true, ajoute une icone dans le titre des onglets'
  }
};

const getTagsData = (count = 3) => {
  const tags = [];
  for (let i = 1; i <= count; i++) {
    tags.push({
      label: `${tagArgs.label} ${i}`,
      accent: 'défaut',
      size: 'md',
      href: '[URL - à modifier]',
      icon: 'arrow-right-line',
      pressed: false,
      blank: false,
      title: undefined,
      disabled: false,
      id: uniqueId('tag-group')
    });
  }
  return tags;
};

const tagsGroupArgs = {
  size: tagArgs.size,
  type: tagArgs.type,
  groupMarkup: 'ul',
  hasIcon: false,
  tags: getTagsData()
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

  for (let i = 0; i < tagsGroup.tags.length; i++) {
    if (args.hasIcon) {
      tagsGroup.tags[i].icon = tagsGroup.tags[i].icon || 'arrow-right-line';
    } else {
      tagsGroup.tags[i].icon = undefined;
    }
  }

  return tagsGroup;
};

export { tagsGroupArgTypes, tagsGroupArgs, tagsGroupProps, getTagsData };
