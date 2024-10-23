import { uniqueId } from '../../../../core/template/stories/unique-id';
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

  segmentedElement[`checked${id}`] = {
    ...segmentedElementArgTypes.checked,
    ...table
  };

  segmentedElement[`disabled${id}`] = {
    ...segmentedElementArgTypes.disabled,
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

  segmentedElement[`id${id}`] = uniqueId('storybook-segmented-element');
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
  const elements = (id) => {
    const elements = [];

    for (let i = 1; i <= 3; i++) {
      const element = {
        id: args[`id${i}`] || uniqueId('storybook-segmented-element'),
        label: args[`label${i}`] || segmentedElementArgs.label,
        name: args[`name${i}`] || id,
        value: args[`value${i}`] || segmentedElementArgs.value,
        icon: args.hasIcon && (args.icon || segmentedArgs.icon),
        checked: (args.checked1 || args.checked2 || args.checked3) ? args[`checked${i}`] : i === 1,
        disabled: args[`disabled${i}`] || undefined
      };

      elements.push(element);
    }

    return elements;
  };

  const segmented = {
    id: args.id || uniqueId('storybook-segmented'),
    size: args.size || segmentedArgs.size,
    legend: args.legend || segmentedArgs.legend,
    legendInline: args.legendInline || false,
    noLegend: args.noLegend || false,
    hint: args.hint !== '' ? args.hint || segmentedArgs.hint : undefined
  };

  segmented.elements = elements(segmented.id);

  return segmented;
};

export { segmentedArgTypes, segmentedArgs, segmentedProps };
