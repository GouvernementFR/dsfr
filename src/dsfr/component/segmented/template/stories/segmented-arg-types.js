import { segmentedElementArgTypes, segmentedElementArgs } from './segmented-element-arg-types';

const getSegmentedElementArgTypes = (id) => {
  const segmentedElement = {};

  const table = {
    table: {
      category: `element ${id}`
    }
  };

  segmentedElement[`id${id}`] = { ...segmentedElementArgTypes.id, ...table };

  segmentedElement[`label${id}`] = {
    ...segmentedElementArgTypes.label,
    ...table
  };

  segmentedElement[`name${id}`] = {
    ...segmentedElementArgTypes.name,
    ...table
  };

  segmentedElement[`value${id}`] = {
    ...segmentedElementArgTypes.value,
    ...table
  };

  return segmentedElement;
};

const iconArgTypes = {
  hasIcon: {
    control: 'boolean',
    description: 'Le contrôle segmenté a une icône',
    table: { category: 'icon' }
  },
  icon: {
    if: { arg: 'hasIcon', eq: true },
    control: 'text',
    description: 'Nom de l\'icône dans le contrôle segmenté',
    table: {
      category: 'icon'
    }
  }
};

const segmentedArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id du contrôle segmenté',
    type: {
      value: 'string'
    }
  },
  size: {
    control: { type: 'select' },
    description: 'Taille du contrôle segmenté',
    options: ['sm', 'md']
  },
  legend: {
    control: 'text',
    description: 'Légende du contrôle segmenté',
    type: {
      value: 'string'
    }
  },
  legendInline: {
    control: 'boolean',
    description: 'Si true, affiche la légende sur la même ligne que le contrôle segmenté',
    type: {
      value: 'boolean'
    }
  },
  noLegend: {
    control: 'boolean',
    description: 'Si true, n\'affiche pas la légende',
    type: {
      value: 'boolean'
    }
  },
  hint: {
    control: 'text',
    description: 'Texte additionnel du contrôle segmenté',
    type: {
      value: 'string'
    }
  },
  ...iconArgTypes,
  ...getSegmentedElementArgTypes(1),
  ...getSegmentedElementArgTypes(2),
  ...getSegmentedElementArgTypes(3)
};

const getSegmentedElementArgs = (id) => {
  const segmentedElement = {};

  segmentedElement[`id${id}`] = `${segmentedElementArgs.id}-${id}`;
  segmentedElement[`label${id}`] = `${segmentedElementArgs.label} ${id}`;
  segmentedElement[`name${id}`] = `${segmentedElementArgs.name}`;
  segmentedElement[`value${id}`] = `${segmentedElementArgs.value}-${id}`;

  return segmentedElement;
};

const segmentedArgs = {
  id: 'storybook-segmented',
  size: 'md',
  legend: 'Légende',
  legendInline: false,
  noLegend: false,
  hint: undefined,
  hasIcon: false,
  icon: 'road-map-line',
  ...getSegmentedElementArgs(1),
  ...getSegmentedElementArgs(2),
  ...getSegmentedElementArgs(3)
};

const segmentedProps = (args) => {
  const elements = [];

  for (let i = 1; i <= 3; i++) {
    const element = {
      id: args[`id${i}`] || segmentedElementArgs.id,
      label: args[`label${i}`] || segmentedElementArgs.label,
      name: args[`name${i}`] || segmentedElementArgs.name,
      value: args[`value${i}`] || segmentedElementArgs.value,
      icon: args.hasIcon && (args.icon || segmentedArgs.icon),
      checked: i === 1
    };

    elements.push(element);
  }

  const segmented = {
    id: args.id || segmentedArgs.id,
    size: args.size || segmentedArgs.size,
    legend: args.legend || segmentedArgs.legend,
    legendInline: args.legendInline || false,
    noLegend: args.noLegend || false,
    hint: args.hint !== '' ? args.hint || segmentedArgs.hint : undefined,
    elements: elements
  };

  return segmented;
};

export { segmentedArgTypes, segmentedArgs, segmentedProps };
