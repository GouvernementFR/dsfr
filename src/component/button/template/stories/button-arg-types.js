
const iconArgTypes = {
  hasIcon: {
    control: 'boolean',
    table: { category: 'icon' }
  },
  icon: {
    if: { arg: 'hasIcon', eq: true },
    control: 'text',
    table: { category: 'icon' }
  },
  iconPlace: {
    if: { arg: 'hasIcon', eq: true },
    control: { type: 'select' },
    options: ['only', 'left', 'right'],
    table: { category: 'icon' }
  }
};

const markupArgTypes = {
  markup: {
    control: { type: 'select' },
    options: ['button', 'a', 'input'],
    table: {
      category: 'markup'
    }
  },
  type: {
    if: {
      arg: 'markup',
      neq: 'a'
    },
    control: { type: 'select' },
    options: ['button', 'submit', 'reset'],
    table: {
      category: 'markup'
    }
  },
  href: {
    if: {
      arg: 'markup',
      eq: 'a'
    },
    control: { type: 'text' },
    table: {
      category: 'markup'
    }
  },
  target: {
    if: {
      arg: 'markup',
      eq: 'a'
    },
    control: { type: 'select' },
    options: ['self', 'blank'],
    table: {
      category: 'markup'
    }
  }
};

const tooltipArgTypes = {
  hasTooltip: {
    control: 'boolean',
    table: { category: 'tooltip' }
  },
  tooltipId: {
    if: {
      arg: 'hasTooltip',
      eq: true
    },
    control: 'text',
    table: { category: 'tooltip' }
  },
  tooltipContent: {
    if: {
      arg: 'hasTooltip',
      eq: true
    },
    control: 'text',
    table: { category: 'tooltip' }
  }
};


const buttonArgTypes = {
  label: {
    control: 'text',
    type: {
      value: 'string',
      required: true
    }
  },
  kind: {
    control: {
      type: 'select',
      labels: {
        1: 'Primary',
        2: 'Secondary',
        3: 'Tertiary',
        4: 'Tertiary no outline'
      }
    },
    options: [1, 2, 3, 4]
  },
  size: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg']
  },
  id: { control: 'text' },
  title: { control: 'text' },
  disabled: { control: 'boolean' },
  ...iconArgTypes,
  ...markupArgTypes,
  ...tooltipArgTypes
};

const buttonArgs = {
  label: 'libellé du bouton',
  kind: 1,
  size: 'md',
  disabled: false,
  id: '',
  title: '',
  hasIcon: false,
  icon: 'checkbox-line',
  iconPlace: 'left',
  markup: 'button',
  type: 'button',
  hasTooltip: false,
  tooltipId: '',
  tooltipContent: ''
};

export { buttonArgTypes, buttonArgs };
