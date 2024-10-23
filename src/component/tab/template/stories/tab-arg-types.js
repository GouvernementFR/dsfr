const tabArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut \'id\' de l\'onglet',
    type: {
      value: 'string',
      required: true
    }
  },
  label: {
    control: 'text',
    description: 'Libellé du bouton',
    type: {
      value: 'string',
      required: true
    }
  },
  content: {
    control: 'text',
    description: 'Contenu du collapse',
    type: {
      value: 'string',
      required: true
    }
  }
};

const tabArgs = {
  id: 'tab-id',
  label: 'Libellé onglet',
  content: 'Contenu onglet'
};

const tabProps = (args) => {
  const tab = {
    id: args.id || undefined,
    label: args.label || tabArgs.label,
    content: args.content || tabArgs.content
  };

  return tab;
};

export { tabArgTypes, tabArgs, tabProps };
