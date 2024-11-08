
const iconArgTypes = {
  hasIcon: {
    if: { arg: 'type', neq: 'status' },
    control: 'boolean',
    description: 'Le badge a une icône',
    table: {
      category: 'type',
      subcategory: 'icon'
    }
  },
  hasNoIcon: {
    if: { arg: 'type', eq: 'status' },
    control: 'boolean',
    description: 'Retrait de l\'icône de statut',
    table: {
      category: 'type'
    }
  },
  icon: {
    if: { arg: 'type', neq: 'status' },
    control: 'text',
    description: 'Nom de l\'icône dans le badge',
    table: {
      category: 'type',
      subcategory: 'icon'
    }
  }
};

const statusArgTypes = {
  status: {
    if: { arg: 'type', eq: 'status' },
    control: {
      type: 'select',
      labels: {
        success: 'Succès',
        warning: 'Avertissement',
        error: 'Erreur',
        info: 'Information',
        new: 'Nouveauté'
      }
    },
    description: 'Statut du badge',
    options: ['success', 'warning', 'error', 'info', 'new'],
    table: {
      category: 'type'
    }
  }
};

const accentArgTypes = {
  accent: {
    if: { arg: 'type', eq: 'accent' },
    control: { type: 'select' },
    description: 'Couleur du badge',
    options: [
      'green-tilleul-verveine',
      'green-bourgeon',
      'green-emeraude',
      'green-menthe',
      'green-archipel',
      'blue-ecume',
      'blue-cumulus',
      'purple-glycine',
      'pink-macaron',
      'pink-tuile',
      'yellow-tournesol',
      'yellow-moutarde',
      'orange-terre-battue',
      'brown-cafe-creme',
      'brown-caramel',
      'brown-opera',
      'beige-gris-galet'
    ],
    table: {
      category: 'type'
    }
  }
};

const badgeArgTypes = {
  label: {
    control: 'text',
    description: 'Libellé du badge',
    type: {
      value: 'string',
      required: true
    }
  },
  type: {
    control: {
      type: 'select',
      labels: {
        default: 'Défaut',
        accent: 'Accentuation',
        status: 'Statut'
      }
    },
    description: 'Type du badge<br>Valeurs :<br>- Default : badge gris par défaut<br>- Statut : badge de statut / d\'état<br>- Accentuation : badge coloré',
    options: ['default', 'accent', 'status'],
    table: {
      category: 'type'
    }
  },
  size: {
    control: { type: 'select' },
    description: 'Taille du badge',
    options: ['sm', 'md']
  },
  ellipsis: {
    control: 'boolean',
    description: 'Le badge a une ellipse quand le libellé est trop long'
  },
  ...accentArgTypes,
  ...statusArgTypes,
  ...iconArgTypes
};

const badgeArgs = {
  label: 'libellé badge',
  type: 'default',
  accent: 'green-tilleul-verveine',
  status: 'success',
  size: 'md',
  hasIcon: false,
  hasNoIcon: false,
  icon: 'checkbox-line',
  ellipsis: false
};

const badgeProps = (args) => {
  const badge = {
    label: args.label || badgeArgs.label,
    size: args.size || badgeArgs.size,
    ellipsis: args.ellipsis || badgeArgs.ellipsis
  };

  switch (args.type) {
    case 'status':
      badge.type = args.status || badgeArgs.status;
      break;
    case 'accent':
      if (args.accent !== 'default') badge.accent = args.accent || badgeArgs.accent;
      break;
  }

  if (args.hasIcon) {
    badge.icon = args.icon;
  }

  if (args.hasNoIcon) {
    badge.icon = false;
  }

  return badge;
};

export { badgeArgTypes, badgeArgs, badgeProps };
