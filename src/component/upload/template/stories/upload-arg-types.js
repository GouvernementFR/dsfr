const uploadArgTypes = {
  label: {
    control: 'text',
    description: 'Libellé du composant',
    type: {
      value: 'string',
      required: true
    }
  },
  multiple: {
    control: 'boolean',
    description: 'Active la selection multiple de fichiers'
  },
  id: {
    control: 'text',
    description: 'Attribut \'id\' du lien'
  },
  disabled: {
    control: 'boolean',
    description: 'Permet de désactiver le champ'
  }
};

const uploadArgs = {
  label: 'Ajouter des fichiers',
  disabled: false,
  id: '',
  multiple: false
};

const uploadProps = (args) => {
  const upload = {
    label: args.label || uploadArgs.label,
    id: args.id || undefined,
    disabled: args.disabled,
    multiple: args.multiple
  };

  return upload;
};

export { uploadArgTypes, uploadArgs, uploadProps };
