const checkboxArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id de la checkbox',
    type: {
      value: 'string'
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
      value: 'string'
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
  }
};

const checkboxArgs = {
  id: 'storybook-checkbox',
  size: 'md',
  label: 'libellé checkbox',
  name: 'checkbox',
  hint: 'texte additionnel'
};

const checkboxProps = (args) => {
  const checkbox = {
    id: args.id || checkboxArgs.id,
    size: args.size || checkboxArgs.size,
    label: args.label || checkboxArgs.label,
    name: args.name || checkboxArgs.name,
    hint: args.hint || checkboxArgs.hint,
    inline: args.inline || false
  };

  return checkbox;
};

export { checkboxArgTypes, checkboxArgs, checkboxProps };
