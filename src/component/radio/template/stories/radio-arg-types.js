const pictogramArgTypes = {
  pictogramName: {
    if: { arg: 'rich', eq: true },
    control: 'text',
    description: 'Nom du pictogramme du radio',
    type: {
      value: 'string'
    }
  },
  pictogramAccent: {
    if: { arg: 'rich', eq: true },
    control: { type: 'select' },
    description: 'Couleur d\'accentuation du pictogramme',
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
    ]
  }
};

const messageArgTypes = {
  status: {
    control: {
      type: 'select',
      labels: {
        default: 'Défaut',
        valid: 'Succès',
        error: 'Erreur'
      }
    },
    description: 'Statut du message',
    options: ['default', 'valid', 'error'],
    type: {
      value: 'string'
    },
    table: { category: 'message' }
  },
  errorMessage: {
    if: { arg: 'status', eq: 'error' },
    control: 'text',
    description: 'Texte du message d\'erreur',
    type: {
      value: 'string'
    },
    table: { category: 'message' }
  },
  validMessage: {
    if: { arg: 'status', eq: 'valid' },
    control: 'text',
    description: 'Texte du message de succès',
    type: {
      value: 'string'
    },
    table: { category: 'message' }
  }
};

const radioArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id de le radio',
    type: {
      value: 'string'
    }
  },
  size: {
    control: { type: 'select' },
    description: 'Taille de radio',
    options: ['sm', 'md']
  },
  label: {
    control: 'text',
    description: 'Libellé du radio',
    type: {
      value: 'string'
    }
  },
  name: {
    control: 'text',
    description: 'Attribut name du radio',
    type: {
      value: 'string'
    }
  },
  hint: {
    control: 'text',
    description: 'Texte additionnel du radio',
    type: {
      value: 'string'
    }
  },
  rich: {
    control: 'boolean',
    description: 'Passe en mode radios riches',
    type: {
      value: 'boolean'
    }
  },
  ...pictogramArgTypes,
  disabled: {
    control: 'boolean',
    description: 'Désactive le radio',
    type: {
      value: 'boolean'
    }
  },
  ...messageArgTypes
};

const radioArgs = {
  id: 'storybook-radio',
  size: 'md',
  label: 'libellé radio',
  name: 'radio',
  hint: 'texte additionnel',
  disabled: false,
  status: 'default',
  rich: false,
  pictogram: {
    name: 'city-hall'
  },
  errorMessage: 'Texte d’erreur',
  validMessage: 'Texte de succès'
};

const radioProps = (args) => {
  const radio = {
    id: args.id || radioArgs.id,
    size: args.size || radioArgs.size,
    label: args.label || radioArgs.label,
    name: args.name || radioArgs.name,
    hint: args.hint !== '' ? args.hint || radioArgs.hint : undefined,
    rich: args.rich || radioArgs.rich,
    pictogram: (args.pictogramName || args.pictogramAccent) ? { name: args.pictogramName, accent: args.pictogramAccent } : radioArgs.pictogram,
    disabled: args.disabled || radioArgs.disabled,
    inline: args.inline || false,
    status: args.status || radioArgs.status,
    error: args.status === 'error' ? args.errorMessage || radioArgs.errorMessage : undefined,
    valid: args.status === 'valid' ? args.validMessage || radioArgs.validMessage : undefined
  };

  return radio;
};

export { radioArgTypes, radioArgs, radioProps };
