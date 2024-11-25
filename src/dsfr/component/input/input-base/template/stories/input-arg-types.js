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

const inputArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id du champs de saisie',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'attributes' }
  },
  label: {
    control: 'text',
    description: 'Libellé du champs de saisie',
    type: {
      value: 'string',
      required: true
    }
  },
  hint: {
    control: 'text',
    description: 'Texte additionnel sous le libellé du champs de saisie',
    type: {
      value: 'string'
    }
  },
  type: {
    control: {
      type: 'select',
      labels: {
        date: 'Date',
        email: 'Email',
        password: 'Mot de passe',
        number: 'Nombre',
        search: 'Recherche',
        tel: 'Téléphone',
        text: 'Texte',
        url: 'URL'
      }
    },
    description: 'Type du champs de saisie, par défaut: "text"',
    options: ['date', 'email', 'password', 'number', 'search', 'tel', 'text', 'url'],
    type: {
      value: 'string'
    }
  },
  icon: {
    control: 'text',
    description: 'Ajoute une icône dans le champs de saisie',
    type: {
      value: 'string'
    }
  },
  value: {
    control: 'text',
    description: 'Valeur initiale du champs de saisie',
    type: {
      value: 'string'
    }
  },
  placeholder: {
    control: 'text',
    description: 'Texte avant saisie dans le champs de saisie',
    type: {
      value: 'string'
    }
  },
  name: {
    control: 'text',
    description: 'Attribut name du champs de saisie',
    type: {
      value: 'string'
    },
    table: { category: 'attributes' }
  },
  autocomplete: {
    control: 'text',
    description: 'Attribut autocomplete du champs de saisie, voir la liste des valeurs possibles sur MDN',
    type: {
      value: 'string'
    },
    table: { category: 'attributes' }
  },
  disabled: {
    control: 'boolean',
    description: 'Désactive le champs de saisie',
    type: {
      value: 'boolean'
    }
  },
  ...messageArgTypes
};

const inputArgs = {
  label: 'libellé input',
  type: 'text',
  disabled: false,
  status: 'default',
  errorMessage: 'Texte d’erreur',
  validMessage: 'Texte de succès',
  id: 'storybook-input'
};

const inputProps = (args) => {
  let input = {};
  input = {
    id: args.id || inputArgs.id,
    label: args.label || inputArgs.label,
    type: args.type || inputArgs.type,
    icon: args.icon || undefined,
    value: args.value || undefined,
    name: args.name || undefined,
    autocomplete: args.autocomplete || undefined,
    placeholder: args.placeholder || undefined,
    hint: args.hint !== '' ? args.hint : undefined,
    disabled: args.disabled || inputArgs.disabled,
    inline: args.inline || false,
    status: args.status || inputArgs.status,
    error: args.status === 'error' ? args.errorMessage || inputArgs.errorMessage : undefined,
    valid: args.status === 'valid' ? args.validMessage || inputArgs.validMessage : undefined
  };

  switch (args.type) {
    case 'number':
      input.attributes = {
        pattern: '[0-9]*',
        inputmode: 'numeric'
      };
      break;
  }

  if (args.action === true) {
    input.action = true;
    input.button = { label: 'Supprimer le champ', kind: 2, icon: 'delete-line', type: 'button' };
  }

  if (args.addon === true) {
    input.addon = true;
    input.button = { label: 'Envoyer', type: 'submit' };
  }

  return input;
};

export { inputArgTypes, inputArgs, inputProps };
