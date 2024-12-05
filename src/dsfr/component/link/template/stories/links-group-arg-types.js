import { linkArgTypes, linkArgs } from './link-arg-types';

const linksGroupArgTypes = {
  size: {
    ...linkArgTypes.size
  },
  id: {
    control: 'text',
    description: 'Attribut \'id\' du groupe de liens',
    table: { category: 'attributes' }
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
  }
};

const linksGroupArgs = {
  size: linkArgs.size,
  hasIcon: linkArgs.hasIcon,
  iconPlace: linkArgs.iconPlace,
  inline: false,
  id: '',
  links: [
    {
      label: linkArgs.label + ' 1',
      disabled: false,
      icon: false
    },
    {
      label: linkArgs.label + ' 2',
      disabled: false,
      icon: false
    },
    {
      label: linkArgs.label + ' 3',
      disabled: false,
      icon: false
    }
  ]
};

const linksGroupProps = (args) => {
  const linksGroup = {
    size: args.size,
    id: args.id || undefined,
    inline: args.inline,
    links: args.links
  };

  if (args.hasIcon) {
    linksGroup.iconPlace = args.iconPlace;
  }

  return linksGroup;
};

export { linksGroupArgTypes, linksGroupArgs, linksGroupProps };
