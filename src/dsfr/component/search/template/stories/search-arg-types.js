const buttonArgsTypes = {
  buttonLabel: {
    control: 'text',
    description: 'Libellé du bouton',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'button' }
  },
  buttonTitle: {
    control: 'text',
    description: 'Titre du bouton',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'button' }
  }
};

const inputArgsTypes = {
  inputId: {
    control: 'text',
    description: 'Attribut \'id\' de l\'input',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'input' }
  },
  inputLabel: {
    control: 'text',
    description: 'Libellé de l\'input',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'input' }
  },
  inputPlaceholder: {
    control: 'text',
    description: 'Placeholder de l\'input',
    type: {
      value: 'string'
    },
    table: { category: 'input' }
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

const searchArgTypes = {
  size: {
    control: { type: 'select' },
    description: 'Taille de la barre de recherche (défaut: md)',
    options: ['md', 'lg']
  },
  labelled: {
    control: 'boolean',
    description: 'Indique si le libellé est visible ou non (défaut: false)',
    type: {
      value: 'boolean'
    }
  },
  ...inputArgsTypes,
  ...buttonArgsTypes,
  ...messageArgTypes
};

const searchArgs = {
  size: 'md',
  labelled: false,
  inputId: 'search-input',
  inputLabel: 'Rechercher',
  inputPlaceholder: 'Rechercher',
  buttonTitle: 'Rechercher',
  buttonLabel: 'Rechercher',
  status: 'default',
  errorMessage: 'Texte d’erreur',
  validMessage: 'Texte de succès'
};

const searchProps = (args) => {
  const search = {
    id: args.id || undefined,
    size: args.size || searchArgs.size,
    labelled: args.labelled || searchArgs.labelled,
    input: {
      id: args.inputId || searchArgs.inputId,
      label: args.inputLabel || searchArgs.inputLabel,
      placeholder: args.inputPlaceholder || searchArgs.inputPlaceholder,
      error: args.status === 'error' ? args.errorMessage || searchArgs.errorMessage : undefined,
      valid: args.status === 'valid' ? args.validMessage || searchArgs.validMessage : undefined
    },
    button: {
      label: args.buttonLabel || searchArgs.buttonLabel,
      title: args.buttonTitle || searchArgs.buttonTitle,
      type: 'submit'
    }
  };

  return search;
};

export { searchArgTypes, searchArgs, searchProps };
