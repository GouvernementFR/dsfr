const getItemArgTypes = (id) => {
  const item = {};

  const table = {
    table: {
      category: `item${id}`
    }
  };

  item[`label${id}`] = {
    control: 'text',
    description: 'Libellé du lien',
    type: {
      value: 'string',
      required: true
    },
    ...table
  };

  item[`href${id}`] = {
    control: 'text',
    description: 'URL du lien',
    type: {
      value: 'string'
    }
  };

  return item;
};

const summaryArgTypes = {
  title: {
    control: 'text',
    description: 'Titre du sommaire',
    type: {
      value: 'string',
      required: true
    }
  },
  markup: {
    control: { type: 'select' },
    description: 'Type de balise HTML',
    options: ['h2', 'h3', 'h4', 'h5']
  },
  list: []
};

const getItemArgs = (id) => {
  const item = {};

  item.label = `Titre du lien ${id}`;
  item.href = '#';

  return item;
};

const summaryArgs = {
  title: 'Sommaire',
  markup: 'h2',
  list: [
    {
      ...getItemArgs(1),
      list: [
        getItemArgs(1.1),
        getItemArgs(1.2)
      ]
    },
    getItemArgs(2),
    getItemArgs(3)
  ]
};

const summaryProps = (args) => {
  const summary = {
    title: args.title || summaryArgs.title,
    markup: args.markup || summaryArgs.markup,
    list: args.list || summaryArgs.list
  };

  return summary;
};

export { summaryArgTypes, summaryArgs, summaryProps };
