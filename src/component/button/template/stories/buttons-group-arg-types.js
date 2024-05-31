const getButtonArgTypes = (id) => {
  const button = {};

  const table = {
    table: {
      category: `button${id}`
    }
  };


  button[`label${id}`] = {
    type: {
      value: 'string',
      required: true
    },
    control: 'text',
    ...table
  };

  button[`kind${id}`] = {
    control: {
      type: 'select',
      labels: {
        1: 'Primary',
        2: 'Secondary',
        3: 'Tertiary',
        4: 'Tertiary no outline'
      }
    },
    options: [1, 2, 3, 4],
    ...table
  };

  button[`id${id}`] = { control: 'text', ...table };
  button[`title${id}`] = { control: 'text', ...table };
  button[`disabled${id}`] = { control: 'boolean', ...table };
  button[`icon${id}`] = {
    if: { arg: 'hasIcon', eq: true },
    control: 'text',
    ...table
  };

  if (id > 2) {
    button[`hasButton${id}`] = {
      control: 'boolean',
      table: {
        category: `button${id}`
      }
    };

    if (id > 3) {
      button[`hasButton${id}`].if = { arg: `hasButton${id - 1}` };
    }

    button[`label${id}`].if = { arg: `hasButton${id}` };
    button[`kind${id}`].if = { arg: `hasButton${id}` };
    button[`id${id}`].if = { arg: `hasButton${id}` };
    button[`title${id}`].if = { arg: `hasButton${id}` };
    button[`disabled${id}`].if = { arg: `hasButton${id}` };
    button[`icon${id}`].if = { arg: `hasButton${id}` };
  }

  return button;
};

const buttonsGroupArgTypes = {
  size: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg']
  },
  id: { control: 'text' },
  title: { control: 'text' },
  hasIcon: {
    control: 'boolean'
  },
  iconPlace: {
    if: { arg: 'hasIcon', eq: true },
    control: { type: 'select' },
    options: ['only', 'left', 'right'],
  },
  ...getButtonArgTypes(1),
  ...getButtonArgTypes(2),
  ...getButtonArgTypes(3),
  ...getButtonArgTypes(4),
  ...getButtonArgTypes(5),
};


const getButtonArgs = (id) => {
  const button = {};

  button[`label${id}`] = `Libellé du bouton ${id}`;
  button[`kind${id}`] = id === 1 ? 1 : 2;
  button[`id${id}`] = '';
  button[`title${id}`] = '';
  button[`disabled${id}`] = false;
  button[`icon${id}`] = 'checkbox-line';

  if (id > 2) {
    button[`hasButton${id}`] = false;
  }

  return button;
};

const buttonsGroupArgs = {
  size: 'md',
  id: '',
  title: '',
  hasIcon: false,
  iconPlace: 'left',
  ...getButtonArgs(1),
  ...getButtonArgs(2),
  ...getButtonArgs(3),
  ...getButtonArgs(4),
  ...getButtonArgs(5)
};

export { buttonsGroupArgTypes, buttonsGroupArgs };
