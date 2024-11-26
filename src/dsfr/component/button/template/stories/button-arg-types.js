
const iconArgTypes = {
  hasIcon: {
    control: 'boolean',
    description: 'Le bouton a une icône',
    table: { category: 'icon' }
  },
  icon: {
    if: { arg: 'hasIcon', eq: true },
    control: 'text',
    description: 'Nom de l\'icône dans le bouton',
    table: {
      category: 'icon'
    }
  },
  iconPlace: {
    if: { arg: 'hasIcon', eq: true },
    description: 'Emplacement de l\'icône<br>Si non défini alors que le paramètre icon est défini, bouton avec icône seule, sans label<br>valeurs :<br>- left : icône à gauche du label<br>- right : icône à droite du label',
    control: {
      type: 'select',
      labels: {
        only: 'Icône seule',
        left: 'Icône à gauche',
        right: 'Icône à droite'
      }
    },
    options: ['only', 'left', 'right'],
    table: { category: 'icon' }
  }
};

const markupArgTypes = {
  markup: {
    control: { type: 'select' },
    description: 'Type de balise HTML',
    options: ['button', 'a', 'input'],
    table: {
      category: 'markup'
    }
  },
  type: {
    if: {
      arg: 'markup',
      neq: 'a'
    },
    control: { type: 'select' },
    description: 'Type de bouton',
    options: ['button', 'submit', 'reset'],
    table: {
      category: 'markup'
    }
  },
  href: {
    if: {
      arg: 'markup',
      eq: 'a'
    },
    control: { type: 'text' },
    description: 'Lien de destination',
    table: {
      category: 'markup'
    }
  },
  target: {
    if: {
      arg: 'markup',
      eq: 'a'
    },
    control: { type: 'select' },
    description: 'Cible du lien',
    options: ['self', 'blank'],
    table: {
      category: 'markup'
    }
  }
};

const buttonArgTypes = {
  label: {
    control: 'text',
    description: 'Libellé du bouton',
    type: {
      value: 'string',
      required: true
    }
  },
  kind: {
    control: {
      type: 'select',
      labels: {
        1: 'Primaire',
        2: 'Secondaire',
        3: 'Tertiaire',
        4: 'Tertiaire sans bordure'
      }
    },
    description: 'Type du bouton<br>Valeurs :<br>- Primaire : bouton d\'action principal, unique dans la page<br>- Secondaire : bouton d\'action moins prioritaire<br>- Tertiaire : bouton d\'action contextuelle ou alternative<br>Tertiaire sans bordure : version alternative',
    options: [1, 2, 3, 4]
  },
  size: {
    control: { type: 'select' },
    description: 'Taille du bouton',
    options: ['sm', 'md', 'lg']
  },
  id: {
    control: 'text',
    description: 'Attribut \'id\' du bouton',
    table: {
      category: 'attributes'
    }
  },
  title: {
    control: 'text',
    description: 'Attribut \'title\' du bouton',
    table: {
      category: 'attributes'
    }
  },
  disabled: {
    control: 'boolean',
    description: 'Le bouton est désactivé'
  },
  ...iconArgTypes,
  ...markupArgTypes
};

const buttonArgs = {
  label: 'libellé du bouton',
  kind: 1,
  size: 'md',
  disabled: false,
  hasIcon: false,
  icon: 'checkbox-line',
  iconPlace: 'left',
  markup: 'button',
  type: 'button',
  href: '',
  target: 'self'
};

const buttonProps = (args) => {
  const button = {
    label: args.label || buttonArgs.label,
    kind: args.kind || buttonArgs.kind,
    size: args.size || buttonArgs.size,
    id: args.id !== '' ? args.id : undefined,
    title: args.title || undefined,
    disabled: args.disabled,
    markup: args.markup || buttonArgs.markup,
    type: args.type || buttonArgs.type,
    href: args.href || undefined,
    blank: args.target === 'blank',
    self: args.target === 'self',
    classes: args.classes || undefined
  };

  if (args.hasIcon) {
    button.icon = args.icon;
    button.iconPlace = args.iconPlace;
  }

  if (args.hasTooltip) {
    button.tooltip = {
      id: args.tooltipId,
      content: args.tooltipContent
    };
  }

  console.log('buttonProps', button);
  return button;
};

export { buttonArgTypes, buttonArgs, buttonProps };
