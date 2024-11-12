import { uniqueId } from '../../../../core/template/stories/unique-id';

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

const toggleArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id de l\'input',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'attributes' }
  },
  label: {
    control: 'text',
    description: 'Libellé de l\'interrupteur',
    type: {
      value: 'string'
    }
  },
  hint: {
    control: 'text',
    description: 'Texte additionnel de l\'interrupteur',
    type: {
      value: 'string'
    }
  },
  hintId: {
    if: { arg: 'hint', neq: undefined },
    control: 'text',
    description: 'ID du texte additionnel de l\'interrupteur',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'attributes' }
  },
  disabled: {
    control: 'boolean',
    description: 'Désactive l\'interrupteur',
    type: {
      value: 'boolean'
    }
  },
  checked: {
    control: 'boolean',
    description: 'Coche l\'interrupteur',
    type: {
      value: 'boolean'
    }
  },
  border: {
    control: 'boolean',
    description: 'Ajoute une bordure sous l\'interrupteur',
    type: {
      value: 'boolean'
    },
    table: { category: 'variant' }
  },
  left: {
    control: 'boolean',
    description: 'Place le libellé sur la gauche',
    type: {
      value: 'boolean'
    },
    table: { category: 'variant' }
  },
  state: {
    control: 'boolean',
    description: 'Ajoute les libellés "activé"/"désactivé" sous le champ',
    type: {
      value: 'boolean'
    },
    table: { category: 'variant' }
  },
  ...messageArgTypes
};

const toggleArgs = {
  label: 'Libellé de l\'interrupteur',
  disabled: false,
  checked: false,
  border: false,
  left: false,
  state: false,
  status: 'default',
  errorMessage: 'Texte d’erreur',
  validMessage: 'Texte de succès',
  id: uniqueId('storybook-toggle-input'),
  hintId: uniqueId('storybook-toggle-hint')
};

const toggleProps = (args) => {
  const toggle = {
    id: args.id || toggleArgs.id,
    groupId: args.groupId || undefined,
    label: args.label || toggleArgs.label,
    hint: args.hint !== '' ? args.hint || toggleArgs.hint : undefined,
    disabled: args.disabled || toggleArgs.disabled,
    checked: args.checked || false,
    border: args.border || false,
    left: args.left || false,
    state: args.state || false,
    status: args.status || toggleArgs.status,
    error: args.status === 'error' ? args.errorMessage || toggleArgs.errorMessage : undefined,
    valid: args.status === 'valid' ? args.validMessage || toggleArgs.validMessage : undefined
  };

  return toggle;
};

export { toggleArgTypes, toggleArgs, toggleProps };
