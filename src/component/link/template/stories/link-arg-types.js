
const iconArgTypes = {
  hasIcon: {
    control: 'boolean',
    description: 'Le lien a une icône',
    table: { category: 'icon' }
  },
  icon: {
    if: { arg: 'hasIcon', eq: true },
    control: 'text',
    description: 'Nom de l\'iôone dans le lien',
    table: {
      category: 'icon'
    }
  },
  iconPlace: {
    if: { arg: 'hasIcon', eq: true },
    description: 'Emplacement de l\'icône<br>Si non défini alors que le paramètre icon est défini, lien avec icône seule, sans label<br>valeurs :<br>- left : icône à gauche du label<br>- right : icône à droite du label',
    control: {
      type: 'select',
      labels: {
        left: 'Icône à gauche',
        right: 'Icône à droite'
      }
    },
    options: ['left', 'right'],
    table: { category: 'icon' }
  }
};

const linkArgTypes = {
  label: {
    control: 'text',
    description: 'Libellé du lien',
    type: {
      value: 'string',
      required: true
    }
  },
  size: {
    control: { type: 'select' },
    description: 'Taille du lien',
    options: ['sm', 'md', 'lg']
  },
  id: {
    control: 'text',
    description: 'Attribut \'id\' du lien'
  },
  disabled: {
    control: 'boolean',
    description: 'Le lien est désactivé'
  },
  ...iconArgTypes
};

const linkArgs = {
  label: 'libellé du lien',
  size: 'md',
  disabled: false,
  id: '',
  hasIcon: false,
  icon: 'checkbox-line',
  iconPlace: 'left',
  href: '#',
  target: 'self'
};

const linkProps = (args) => {
  const link = {
    label: args.label || linkArgs.label,
    size: args.size || linkArgs.size,
    id: args.id || undefined,
    disabled: args.disabled,
    href: args.href || undefined,
    blank: args.target === 'blank',
    self: args.target === 'self'
  };

  if (args.hasIcon) {
    link.icon = args.icon;
    link.iconPlace = args.iconPlace;
  }

  return link;
};

export { linkArgTypes, linkArgs, linkProps };
