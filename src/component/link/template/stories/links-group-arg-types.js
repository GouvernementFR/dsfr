import { linkArgTypes, linkArgs } from './link-arg-types';

const getLinkArgTypes = (id) => {
  const link = {};

  const table = {
    table: {
      category: `link${id}`
    }
  };

  link[`label${id}`] = {
    ...linkArgTypes.label,
    ...table
  };

  link[`id${id}`] = { ...linkArgTypes.id, ...table };
  link[`disabled${id}`] = { ...linkArgTypes.disabled, ...table };
  link[`icon${id}`] = {
    if: { arg: 'hasIcon', eq: true },
    ...linkArgTypes.icon,
    ...table
  };

  return link;
};

const linksGroupArgTypes = {
  size: {
    ...linkArgTypes.size
  },
  id: {
    control: 'text',
    description: 'Attribut \'id\' du groupe de liens'
  },
  hasIcon: {
    ...linkArgTypes.hasIcon,
    table: undefined
  },
  iconPlace: {
    if: { arg: 'hasIcon', eq: true },
    ...linkArgTypes.iconPlace,
    table: undefined
  },
  inline: {
    control: 'boolean',
    description: 'Groupe de liens en ligne'
  },
  ...getLinkArgTypes(1),
  ...getLinkArgTypes(2),
  ...getLinkArgTypes(3),
  ...getLinkArgTypes(4),
  ...getLinkArgTypes(5)
};

const getLinkArgs = (id) => {
  const link = {};

  link[`label${id}`] = `${linkArgs.label} ${id}`;
  link[`id${id}`] = linkArgs.id;
  link[`disabled${id}`] = linkArgs.disabled;
  link[`icon${id}`] = linkArgs.icon;

  return link;
};

const linksGroupArgs = {
  size: linkArgs.size,
  id: '',
  hasIcon: linkArgs.hasIcon,
  iconPlace: linkArgs.iconPlace,
  inline: false,
  ...getLinkArgs(1),
  ...getLinkArgs(2),
  ...getLinkArgs(3),
  ...getLinkArgs(4),
  ...getLinkArgs(5)
};

const linksGroupProps = (args) => {
  const links = [];

  for (let i = 1; i <= 5; i++) {
    const link = {
      label: args[`label${i}`] || linkArgs.label,
      id: args[`id${i}`] || undefined,
      disabled: args[`disabled${i}`]
    };

    if (args.hasIcon) {
      link.icon = args[`icon${i}`];
    }

    links.push(link);
  }

  const linksGroup = {
    size: args.size,
    id: args.id || undefined,
    inline: args.inline,
    links: links
  };

  if (args.hasIcon) {
    linksGroup.iconPlace = args.iconPlace;
  }

  return linksGroup;
};

export { linksGroupArgTypes, linksGroupArgs, linksGroupProps };
