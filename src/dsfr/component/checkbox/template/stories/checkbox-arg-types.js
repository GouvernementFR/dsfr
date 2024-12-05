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

const checkboxArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id de la checkbox',
    type: {
      value: 'string',
      required: true
    }
  },
  size: {
    control: { type: 'select' },
    description: 'Taille de checkbox',
    options: ['sm', 'md']
  },
  label: {
    control: 'text',
    description: 'Libellé de la checkbox',
    type: {
      value: 'string',
      required: true
    }
  },
  name: {
    control: 'text',
    description: 'Attribut name de la checkbox',
    type: {
      value: 'string'
    }
  },
  hint: {
    control: 'text',
    description: 'Texte additionnel de la checkbox',
    type: {
      value: 'string'
    }
  },
  disabled: {
    control: 'boolean',
    description: 'Désactive la checkbox',
    type: {
      value: 'boolean'
    }
  },
  ...messageArgTypes
};

const checkboxArgs = {
  id: uniqueId('checkbox'),
  size: 'md',
  label: 'libellé checkbox',
  name: 'checkbox',
  disabled: false,
  status: 'default',
  errorMessage: 'Texte d’erreur',
  validMessage: 'Texte de succès'
};

const checkboxProps = (args) => {
  const checkbox = {
    id: args.id || uniqueId('checkbox'),
    size: args.size || checkboxArgs.size,
    label: args.label || checkboxArgs.label,
    name: args.name || checkboxArgs.name,
    hint: args.hint !== '' ? args.hint : undefined,
    disabled: args.disabled || checkboxArgs.disabled,
    inline: args.inline || false,
    status: args.status || checkboxArgs.status,
    error: args.status === 'error' ? args.errorMessage || checkboxArgs.errorMessage : undefined,
    valid: args.status === 'valid' ? args.validMessage || checkboxArgs.validMessage : undefined
  };

  return checkbox;
};

export { checkboxArgTypes, checkboxArgs, checkboxProps };
