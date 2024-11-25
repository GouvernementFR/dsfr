const logoArgTypes = {
  title: {
    control: 'text',
    description: 'Titre du logo (nom de l\'entité)',
    type: {
      value: 'string',
      required: true
    }
  },
  size: {
    control: { type: 'select' },
    description: 'Taille du logo',
    options: ['sm', 'md', 'lg']
  }
};

const logoArgs = {
  title: 'INTITULÉ <br>OFFICIEL',
  size: 'md'
};

const logoProps = (args) => {
  const logo = {
    title: args.title || logoArgs.title,
    size: args.size || logoArgs.size
  };

  return logo;
};

export { logoArgTypes, logoArgs, logoProps };
