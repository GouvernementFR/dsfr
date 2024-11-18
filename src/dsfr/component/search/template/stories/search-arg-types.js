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

const searchArgTypes = {
  size: {
    control: { type: 'select' },
    description: 'Taille de la barre de recherche (défaut: md)',
    options: ['md', 'lg']
  },
  ...inputArgsTypes,
  ...buttonArgsTypes
};

const searchArgs = {
  size: 'md',
  inputId: 'search-input',
  inputLabel: 'Rechercher',
  inputPlaceholder: 'Rechercher',
  buttonTitle: 'Rechercher',
  buttonLabel: 'Rechercher'
};

const searchProps = (args) => {
  const search = {
    id: args.id || undefined,
    size: args.size || searchArgs.size,
    input: {
      id: args.inputId || searchArgs.inputId,
      label: args.inputLabel || searchArgs.inputLabel,
      placeholder: args.inputPlaceholder || searchArgs.inputPlaceholder
    },
    button: {
      label: args.buttonLabel || searchArgs.buttonLabel,
      title: args.buttonTitle || searchArgs.buttonTitle
    }
  };

  return search;
};

export { searchArgTypes, searchArgs, searchProps };
