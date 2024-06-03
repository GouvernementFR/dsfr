
const iconArgTypes = {
  hasIcon: {
    control: 'boolean',
    description: 'Le bouton a une icône',
    table: { category: 'icon' }
  },
  icon: {
    if: { arg: 'hasIcon', eq: true },
    control: 'text',
    description: 'Nom de l\'iôone dans le bouton',
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

const tooltipArgTypes = {
  hasTooltip: {
    control: 'boolean',
    description: 'Le bouton a une infobulle',
    table: { category: 'tooltip' }
  },
  tooltipId: {
    if: {
      arg: 'hasTooltip',
      eq: true
    },
    control: 'text',
    description: 'Identifiant de l\'infobulle',
    table: { category: 'tooltip' }
  },
  tooltipContent: {
    if: {
      arg: 'hasTooltip',
      eq: true
    },
    control: 'text',
    description: 'Contenu texte de l\'infobulle',
    table: { category: 'tooltip' }
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
    description: 'Attribut \'id\' du bouton'
  },
  title: {
    control: 'text',
    description: 'Attribut \'title\' du bouton'
  },
  disabled: {
    control: 'boolean',
    description: 'Le bouton est désactivé'
  },
  ...iconArgTypes,
  ...markupArgTypes,
  ...tooltipArgTypes
};

const buttonArgs = {
  label: 'libellé du bouton',
  kind: 1,
  size: 'md',
  disabled: false,
  id: '',
  title: '',
  hasIcon: false,
  icon: 'checkbox-line',
  iconPlace: 'left',
  markup: 'button',
  type: 'button',
  hasTooltip: false,
  tooltipId: '',
  tooltipContent: '',
  href: '',
  target: 'self'
};

export { buttonArgTypes, buttonArgs };
