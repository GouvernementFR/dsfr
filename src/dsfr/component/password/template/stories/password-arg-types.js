const checkboxArgTypes = {
  checkboxId: {
    control: 'text',
    description: 'Attribut \'id\' de la checkbox',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'checkbox' }
  },
  checkboxLabel: {
    control: 'text',
    description: 'Libellé de la checkbox',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'checkbox' }
  },
  checkboxAriaLabel: {
    control: 'text',
    description: 'Libellé de la checkbox pour les lecteurs d\'écran',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'checkbox' }
  }
};

const inputArgTypes = {
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
  inputAutocomplete: {
    control: { type: 'select' },
    options: ['off', 'current-password', 'new-password'],
    description: 'Attribut \'autocomplete\' de l\'input (mot de passe nouveau ou existant)',
    type: {
      value: 'string'
    },
    table: { category: 'input' }
  },
  hasMessages: {
    control: 'boolean',
    description: 'Affiche les messages d\'aide ou d\'erreur/validité',
    type: {
      value: 'boolean'
    },
    table: { category: 'input' }
  },
  messages: {
    if: { arg: 'hasMessages', eq: true },
    control: 'object',
    description: 'Messages d\'aide ou d\'erreur/validité (tableau d\'objets de type { text: string, type: string })',
    type: {
      value: 'array'
    },
    table: { category: 'input' }
  },
  validMessage: {
    if: { arg: 'hasMessages', eq: true },
    control: 'text',
    description: 'Libellé de l\'icône des messages de type "valid"',
    type: {
      value: 'string'
    },
    table: { category: 'input' }
  },
  errorMessage: {
    if: { arg: 'hasMessages', eq: true },
    control: 'text',
    description: 'Libellé de l\'icône des messages de type "error"',
    type: {
      value: 'string'
    },
    table: { category: 'input' }
  }
};

const linkArgTypes = {
  hasLink: {
    if: { arg: 'hasMessages', eq: false },
    control: 'boolean',
    description: 'Affiche le lien "Mot de passe oublié ?"',
    type: {
      value: 'boolean'
    },
    table: { category: 'link' }
  },
  linkId: {
    if: { arg: 'hasLink', eq: true },
    control: 'text',
    description: 'Attribut \'id\' du lien',
    type: {
      value: 'string'
    },
    table: { category: 'link' }
  },
  linkLabel: {
    if: { arg: 'hasLink', eq: true },
    control: 'text',
    description: 'Libellé du lien',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'link' }
  },
  linkHref: {
    if: { arg: 'hasLink', eq: true },
    control: 'text',
    description: 'URL de destination du lien',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'link' }
  }
};

const passwordArgTypes = {
  ...inputArgTypes,
  ...checkboxArgTypes,
  ...linkArgTypes
};

const passwordArgs = {
  inputId: 'storybook-password-input',
  inputLabel: 'Mot de passe',
  inputAutocomplete: 'current-password',
  checkboxId: 'storybook-password-checkbox',
  checkboxLabel: 'Afficher',
  checkboxAriaLabel: 'Afficher le mot de passe',
  hasLink: false,
  linkId: 'storybook-password-link',
  linkHref: '[URL - à modifier]',
  linkLabel: 'Mot de passe oublié ?',
  hasMessages: false,
  messages: [
    { text: 'Votre mot de passe doit contenir :' },
    { text: '12 caractères minimum', type: 'info' },
    { text: '1 caractère spécial minimum', type: 'info' },
    { text: '1 chiffre minimum', type: 'info' }
  ],
  validMessage: 'Validé',
  errorMessage: 'En erreur'
};

const passwordProps = (args) => {
  const password = {
    id: args.id || undefined,
    input: {
      id: args.inputId || passwordArgs.inputId,
      label: args.inputLabel || passwordArgs.inputLabel,
      autocomplete: args.inputAutocomplete || passwordArgs.inputAutocomplete
    },
    checkbox: {
      id: args.checkboxId || passwordArgs.checkboxId,
      label: args.checkboxLabel || passwordArgs.checkboxLabel,
      ariaLabel: args.checkboxAriaLabel || passwordArgs.checkboxAriaLabel
    }
  };

  if (args.messages) {
    const msgAttributes = {};
    msgAttributes['data-fr-valid'] = args.validMessage || passwordArgs.validMessage;
    msgAttributes['data-fr-error'] = args.errorMessage || passwordArgs.errorMessage;
    args.messages.filter(message => message.type !== undefined).forEach(message => { message.attributes = msgAttributes; });
    password.messages = args.messages;
  }

  if (args.hasLink) {
    password.link = {
      id: args.linkId !== '' ? args.linkId || passwordArgs.linkId : undefined,
      label: args.linkLabel || passwordArgs.linkLabel,
      href: args.linkHref || passwordArgs.linkHref
    };
  }

  return password;
};

export { passwordArgTypes, passwordArgs, passwordProps };
