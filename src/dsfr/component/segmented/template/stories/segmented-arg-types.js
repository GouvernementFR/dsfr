import { uniqueId } from '../../../../core/template/stories/unique-id';

const segmentedArgTypes = {
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
  hasIcon: {
    control: 'boolean',
    description: 'Le contrôle segmenté a une icône'
  }
};

const getSegmentedData = (count = 3, hasDisabled = false) => {
  const elements = [];
  const id = uniqueId('segmented');
  for (let i = 1; i <= count; i++) {
    elements.push({
      checked: i === 1,
      label: `libellé ${i}`,
      name: id,
      value: i,
      icon: 'checkbox-circle-line',
      disabled: (hasDisabled && i === 3) || false,
      id: `${id}-${i}`
    });
  }
  return elements;
};

const segmentedArgs = {
  size: 'md',
  legend: 'Légende',
  legendInline: false,
  noLegend: false,
  hint: undefined,
  hasIcon: false,
  elements: getSegmentedData()
};

const segmentedProps = (args) => {
  const segmented = {
    size: args.size || segmentedArgs.size,
    legend: args.legend || segmentedArgs.legend,
    legendInline: args.legendInline || false,
    noLegend: args.noLegend || false,
    hint: args.hint !== '' ? args.hint || segmentedArgs.hint : undefined,
    elements: [...args.elements],
    id: args.id || undefined
  };

  for (let i = 0; i < segmented.elements.length; i++) {
    if (args.hasIcon) {
      segmented.elements[i].icon = segmented.elements[i].icon || 'checkbox-circle-line';
    } else {
      segmented.elements[i].icon = undefined;
    }
  }

  return segmented;
};

export { segmentedArgTypes, segmentedArgs, segmentedProps, getSegmentedData };
