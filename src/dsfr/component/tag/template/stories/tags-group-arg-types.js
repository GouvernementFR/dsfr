import { tagArgTypes, tagArgs } from './tag-arg-types';

const getTagArgTypes = (id) => {
  const tag = {};

  const table = {
    table: {
      category: `tag${id}`
    }
  };

  tag[`label${id}`] = {
    ...tagArgTypes.label,
    ...table
  };

  tag[`id${id}`] = { ...tagArgTypes.id, ...table };

  tag[`accent${id}`] = {
    ...tagArgTypes.accent,
    table: { ...table.table }
  };

  tag[`hasIcon${id}`] = {
    ...tagArgTypes.hasIcon,
    table: { ...table.table }
  };

  tag[`icon${id}`] = {
    ...tagArgTypes.icon,
    if: { arg: `hasIcon${id}`, eq: true },
    table: { ...table.table }
  };

  tag[`blank${id}`] = {
    ...tagArgTypes.blank,
    table: { ...table.table }
  };

  tag[`href${id}`] = {
    ...tagArgTypes.href,
    table: { ...table.table }
  };

  tag[`disabled${id}`] = {
    ...tagArgTypes.disabled,
    table: { ...table.table }
  };

  tag[`pressed${id}`] = {
    ...tagArgTypes.pressed,
    table: { ...table.table }
  };

  return tag;
};

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
  ...getTagArgTypes(1),
  ...getTagArgTypes(2),
  ...getTagArgTypes(3)
};

const getTagArgs = (id) => {
  const tag = {};

  tag[`label${id}`] = `${tagArgs.label} ${id}`;
  tag[`id${id}`] = '';
  tag[`accent${id}`] = 'défaut';
  tag[`href${id}`] = '#';
  tag[`hasIcon${id}`] = false;
  tag[`icon${id}`] = 'arrow-left-line';
  tag[`blank${id}`] = false;
  tag[`disabled${id}`] = false;
  tag[`pressed${id}`] = false;

  return tag;
};

const tagsGroupArgs = {
  size: tagArgs.size,
  type: tagArgs.type,
  groupMarkup: 'ul',
  ...getTagArgs(1),
  ...getTagArgs(2),
  ...getTagArgs(3)
};

const tagsGroupProps = (args) => {
  const tags = [];

  for (let i = 1; i <= 3; i++) {
    const tag = {
      label: args[`label${i}`] || tagArgs.label,
      size: args.size || tagArgs.size,
      type: args.type || tagArgs.type,
      disabled: args[`disabled${i}`] || tagArgs.disabled,
      pressed: args[`pressed${i}`] || tagArgs.pressed,
      blank: args[`blank${i}`] || tagArgs.blank,
      href: args[`href${i}`] || tagArgs.href,
      id: args[`id${i}`] || undefined
    };

    if (args.type === 'clickable' && args[`accent${i}`] && args[`accent${i}`] !== 'défaut') tag.accent = args[`accent${i}`] || tagArgs.accent;
    else tag.accent = undefined;

    if (args[`hasIcon${i}`] === true) {
      tag.icon = args[`icon${i}`] || tagArgs.icon;
    }

    tags.push(tag);
  }

  const tagsGroup = {
    size: args.size,
    type: args.type,
    groupMarkup: args.groupMarkup || tagsGroupArgs.groupMarkup,
    tags: tags
  };

  return tagsGroup;
};

export { tagsGroupArgTypes, tagsGroupArgs, tagsGroupProps };
