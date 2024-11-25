import { uniqueId } from '../../../../core/template/stories/unique-id';

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

const selectArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id de la liste déroulante',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'attributes' }
  },
  label: {
    control: 'text',
    description: 'Libellé de la liste déroulante',
    type: {
      value: 'string',
      required: true
    }
  },
  groupedOptions: {
    control: 'boolean',
    description: 'Groupe d\'options',
    type: {
      value: 'boolean'
    }
  },
  options: {
    if: { arg: 'groupedOptions', eq: false },
    control: 'object',
    description: 'Options de la liste déroulante',
    type: {
      value: 'array'
    }
  },
  optionGroups: {
    if: { arg: 'groupedOptions', eq: true },
    control: 'object',
    description: 'Options de la liste déroulante avec groupes',
    type: {
      value: 'array'
    }
  },
  hint: {
    control: 'text',
    description: 'Texte additionnel sous le label',
    type: {
      value: 'string'
    }
  },
  placeholder: {
    control: 'text',
    description: 'Texte avant sélection d\'une option',
    type: {
      value: 'string'
    }
  },
  disabled: {
    control: 'boolean',
    description: 'Désactive la liste déroulante',
    type: {
      value: 'boolean'
    }
  },
  ...messageArgTypes
};

const selectArgs = {
  label: 'Libellé de la liste déroulante',
  placeholder: 'Sélectionnez une option',
  disabled: false,
  groupedOptions: false,
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ],
  optionGroups: [
    {
      label: 'Groupe 1',
      options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
      ]
    },
    {
      label: 'Groupe 2',
      options: [
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' }
      ]
    }
  ],
  status: 'default',
  errorMessage: 'Texte d’erreur',
  validMessage: 'Texte de succès',
  id: uniqueId('storybook-select')
};

const selectProps = (args) => {
  const select = {
    id: args.id || uniqueId('storybook-select'),
    label: args.label || selectArgs.label,
    hint: args.hint !== '' ? args.hint : undefined,
    placeholder: args.placeholder || selectArgs.placeholder,
    disabled: args.disabled || selectArgs.disabled,
    status: args.status || selectArgs.status,
    error: args.status === 'error' ? args.errorMessage || selectArgs.errorMessage : undefined,
    valid: args.status === 'valid' ? args.validMessage || selectArgs.validMessage : undefined
  };

  if (args.groupedOptions) {
    select.optionGroups = args.optionGroups || selectArgs.optionGroups;
  } else {
    select.options = args.options || selectArgs.options;
  }

  return select;
};

export { selectArgTypes, selectArgs, selectProps };
