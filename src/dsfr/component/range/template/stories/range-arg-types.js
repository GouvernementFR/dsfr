const messageArgTypes = {
  status: {
    control: {
      type: 'select',
      labels: {
        default: 'Défaut',
        error: 'Erreur'
      }
    },
    description: 'Statut du message',
    options: ['default', 'error'],
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
  }
};

const rangeArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id de l\'input',
    type: {
      value: 'string',
      required: true
    }
  },
  label: {
    control: 'text',
    description: 'Libellé du curseur',
    type: {
      value: 'string'
    }
  },
  name: {
    control: 'text',
    description: 'Attribut name du curseur',
    type: {
      value: 'string'
    }
  },
  hint: {
    control: 'text',
    description: 'Texte additionnel du curseur',
    type: {
      value: 'string',
      required: true
    }
  },
  size: {
    control: { type: 'select' },
    description: 'Taille de du curseur',
    options: ['sm', 'md'],
    table: { category: 'size' }
  },
  min: {
    control: 'number',
    description: 'Valeur minimale du curseur',
    type: {
      value: 'integer',
      required: true
    }
  },
  max: {
    control: 'number',
    description: 'Valeur maximale du curseur',
    type: {
      value: 'integer',
      required: true
    }
  },
  value: {
    control: 'number',
    description: 'valeur initiale du curseur',
    type: {
      value: 'integer'
    }
  },
  step: {
    control: 'number',
    description: 'Pas du curseur',
    type: {
      value: 'integer'
    }
  },
  prefix: {
    control: 'text',
    description: 'Texte avant la valeur du curseur',
    type: {
      value: 'string'
    }
  },
  suffix: {
    control: 'text',
    description: 'Texte après la valeur du curseur',
    type: {
      value: 'string'
    }
  },
  disabled: {
    control: 'boolean',
    description: 'Désactive le curseur',
    type: {
      value: 'boolean'
    }
  },
  isDouble: {
    control: 'boolean',
    description: 'Mode double curseur [defaut: false]',
    type: {
      value: 'boolean'
    },
    table: { category: 'variant' }
  },
  value2: {
    if: {
      arg: 'isDouble',
      eq: true
    },
    control: 'number',
    description: '2eme valeur initiale pour le curseur double',
    type: {
      value: 'integer'
    },
    table: { category: 'variant' }
  },
  isStep: {
    if: {
      arg: 'isDouble',
      eq: false
    },
    control: 'boolean',
    description: 'Mode urseur à pas [defaut: false]',
    type: {
      value: 'boolean'
    },
    table: { category: 'variant' }
  },
  indicators: {
    control: 'boolean',
    description: 'Pour afficher les valeurs min et max sous le curseur [default: true]',
    type: {
      value: 'boolean'
    },
    table: { category: 'variant' }
  },
  ...messageArgTypes
};

const rangeArgs = {
  id: 'storybook-range-input',
  label: 'Libellé du curseur',
  name: 'range',
  hint: 'Texte de description additionnel, valeur de 0 à 100.',
  min: 0,
  max: 100,
  value: 50,
  prefix: '',
  suffix: '',
  disabled: false,
  size: 'md',
  isDouble: false,
  value2: 70,
  isStep: false,
  indicators: true,
  status: 'default',
  errorMessage: 'Valeur sélectionnée impossible'
};

const rangeProps = (args) => {
  const range = {
    id: args.id || rangeArgs.id,
    label: args.label || rangeArgs.label,
    name: args.name || rangeArgs.name,
    hint: args.hint !== '' ? args.hint || rangeArgs.hint : undefined,
    min: args.min || rangeArgs.min,
    max: args.max || rangeArgs.max,
    value: args.value || rangeArgs.value,
    value2: args.value2 || rangeArgs.value2,
    step: args.step || rangeArgs.step,
    prefix: args.prefix || rangeArgs.prefix,
    suffix: args.suffix || rangeArgs.suffix,
    isDouble: args.isDouble || false,
    isStep: args.isStep || false,
    indicators: args.indicators || false,
    disabled: args.disabled || rangeArgs.disabled,
    multiple: args.multiple || rangeArgs.multiple,
    inline: args.inline || false,
    status: args.status || rangeArgs.status,
    error: args.status === 'error' ? args.errorMessage || rangeArgs.errorMessage : undefined
  };

  return range;
};

export { rangeArgTypes, rangeArgs, rangeProps };
