
const iconArgTypes = {
  hasIcon: {
    if: { arg: 'type', neq: 'dismissible' },
    control: 'boolean',
    description: 'Le tag a une icône',
    table: {
      category: 'icon'
    }
  },
  icon: {
    if: { arg: 'hasIcon', eq: true },
    control: 'text',
    description: 'Nom de l\'icône dans le tag',
    table: {
      category: 'icon'
    }
  }
};

const accentArgTypes = {
  accent: {
    if: { arg: 'type', eq: 'clickable' },
    control: { type: 'select' },
    description: 'Couleur du tag cliquable',
    options: [
      'défaut',
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

const tagArgTypes = {
  label: {
    control: 'text',
    description: 'Libellé du tag',
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
        clickable: 'Cliquable',
        pressable: 'Sélectionnable',
        dismissible: 'Supprimable'
      }
    },
    description: 'Type du tag<br>Valeurs :<br>- Défaut : tag non cliquable pour donner une information sur un contenu<br>- Cliquable : Le tag cliquable donne accès à une page avec des contenus associés à ce tag<br>- Sélectionnable : Le tag sélectionnable permet d’activer/désactiver un filtre<br>- Supprimable : Le tag supprimable permet de désactiver un filtre',
    options: ['default', 'clickable', 'pressable', 'dismissible'],
    table: {
      category: 'type'
    }
  },
  size: {
    control: { type: 'select' },
    description: 'Taille du tag',
    options: ['sm', 'md']
  },
  id: {
    control: 'text',
    description: 'Attribut \'id\' du tag'
  },
  blank: {
    if: { arg: 'type', eq: 'clickable' },
    control: 'boolean',
    description: 'Ouvre le lien dans un nouvel onglet',
    table: {
      category: 'type'
    }
  },
  href: {
    if: { arg: 'type', eq: 'clickable' },
    control: 'text',
    description: 'Lien de redirection du tag cliquable',
    table: {
      category: 'type'
    }
  },
  pressed: {
    if: { arg: 'type', eq: 'pressable' },
    control: 'boolean',
    description: 'Le tag est sélectionné',
    table: {
      category: 'type'
    }
  },
  disabled: {
    if: { arg: 'type', neq: 'default' },
    control: 'boolean',
    description: 'Le tag est désactivé',
    table: {
      category: 'type'
    }
  },
  ...accentArgTypes,
  ...iconArgTypes
};

const tagArgs = {
  label: 'libellé tag',
  type: 'default',
  accent: 'défaut',
  size: 'md',
  href: '#',
  id: '',
  hasIcon: false,
  icon: 'arrow-right-line',
  pressed: false,
  blank: false,
  disabled: false
};

const tagProps = (args) => {
  const tag = {
    label: args.label || tagArgs.label,
    size: args.size || tagArgs.size,
    type: args.type || tagArgs.type,
    disabled: args.disabled || tagArgs.disabled,
    pressed: args.pressed || tagArgs.pressed,
    blank: args.blank || tagArgs.blank,
    href: args.href || tagArgs.href,
    id: args.id || undefined
  };

  if (args.type === 'clickable' && args.accent && args.accent !== 'défaut') tag.accent = args.accent || tagArgs.accent;

  if (args.hasIcon === true) {
    tag.icon = args.icon || tagArgs.icon;
  }

  return tag;
};

export { tagArgTypes, tagArgs, tagProps };
