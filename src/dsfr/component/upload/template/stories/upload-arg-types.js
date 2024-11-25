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

const uploadArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id de l\'ajout de fichier',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'attributes' }
  },
  label: {
    control: 'text',
    description: 'Libellé de l\'ajout de fichier',
    type: {
      value: 'string',
      required: true
    }
  },
  name: {
    control: 'text',
    description: 'Attribut name de l\'ajout de fichier',
    type: {
      value: 'string'
    },
    table: { category: 'attributes' }
  },
  hint: {
    control: 'text',
    description: 'Texte additionnel de l\'ajout de fichier',
    type: {
      value: 'string',
      required: true
    }
  },
  disabled: {
    control: 'boolean',
    description: 'Désactive l\'ajout de fichier',
    type: {
      value: 'boolean'
    }
  },
  multiple: {
    control: 'boolean',
    description: 'Active la selection multiple de fichiers [defaut: false]',
    type: {
      value: 'boolean'
    }
  },
  ...messageArgTypes
};

const uploadArgs = {
  label: 'libellé de l\'ajout de fichier',
  hint: 'Indication : taille maximale : 500 Mo. Formats supportés : jpg, png, pdf. Plusieurs fichiers possibles. Lorem ipsum dolor sit amet, consectetur adipiscing.',
  disabled: false,
  multiple: false,
  status: 'default',
  errorMessage: 'Format de fichier non supporté',
  id: 'upload-id',
  name: 'upload'
};

const uploadProps = (args) => {
  const upload = {
    id: args.id || uploadArgs.id,
    label: args.label || uploadArgs.label,
    name: args.name || uploadArgs.name,
    hint: args.hint !== '' ? args.hint || uploadArgs.hint : undefined,
    disabled: args.disabled || uploadArgs.disabled,
    multiple: args.multiple || uploadArgs.multiple,
    inline: args.inline || false,
    status: args.status || uploadArgs.status,
    error: args.status === 'error' ? args.errorMessage || uploadArgs.errorMessage : undefined
  };

  return upload;
};

export { uploadArgTypes, uploadArgs, uploadProps };
