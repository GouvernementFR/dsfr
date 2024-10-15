const segmentedElementArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id du contrôle segmenté',
    type: {
      value: 'string'
    }
  },
  label: {
    control: 'text',
    description: 'Libellé du contrôle segmenté',
    type: {
      value: 'string'
    }
  },
  name: {
    control: 'text',
    description: 'Attribut name du contrôle segmenté',
    type: {
      value: 'string'
    }
  },
  value: {
    control: 'text',
    description: 'Attribut value du contrôle segmenté',
    type: {
      value: 'string'
    }
  }
};

const segmentedElementArgs = {
  id: 'storybook-segmented-element',
  label: 'Libellé',
  name: 'segmented-element',
  value: 'segmented-element-value'
};

const segmentedElementProps = (args) => {
  const segmentedElement = {
    id: args.id || segmentedElementArgs.id,
    label: args.label || segmentedElementArgs.label,
    name: args.name || segmentedElementArgs.name,
    value: args.value || segmentedElementArgs.value
  };

  return segmentedElement;
};

export { segmentedElementArgTypes, segmentedElementArgs, segmentedElementProps };
